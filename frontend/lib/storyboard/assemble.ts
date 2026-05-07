/**
 * Storyboard generator main entry — `STORYBOARD_TEMPLATE.md §1.8.2`.
 *
 *   generateStoryboard(input: GenerateInput): Promise<GenerateOutput>
 *
 * Steps:
 *   1. Read the visual_cut_list (parseCutList).
 *   2. Read optional lyric alignment (ops/E###_lyric_cut_alignment.json).
 *   3. Subdivide into N CutSpec entries.
 *   4. Assemble three paste-ready prompts per cut:
 *        - storyboardSheetPrompt (full GPT Image 2 prompt)
 *        - seedancePrompt        (Seedance 2.0 paste)
 *        - mainStillPrompt       (GPT Image 2 single still)
 *   5. Run substitution audit (M2, M3, M4, M5, leaky braces).
 *   6. Return GenerateOutput.
 *
 * Audits log warnings via `lib/log.logWarn` but never throw — the caller can
 * inspect `audit.warnings` to surface issues in the UI.
 */

import fs from 'node:fs/promises'
import { safeJoin, phaseOf } from '../paths'
import { logWarn } from '../log'
import {
  PHASE_PALETTES,
  audioSfxOnlyBlock,
  characterAttachBlock,
  characterAttachBlockMainStill,
  characterAttachBlockSeedance,
  criticalRenderingInstruction,
  finalOutputChecklist,
  footerLeft,
  footerRight,
  headerBlock,
  negativePromptBlock,
  outputRules,
  phasePaletteBlock,
  phaseSeasonalCue,
  seedanceLensSwitchBlock,
  tableLayoutSpec,
  visualStyleBlock,
  visualStyleShorthand,
} from './boilerplates'
import { parseCutList, type ParsedCutList } from './parse-cut-list'
import { subdivideEpisode } from './subdivide'
import type {
  AuditReport,
  CharacterAttachManifestEntry,
  CutSpec,
  GenerateInput,
  GenerateOutput,
  LyricCutAlignment,
  PhaseNumber,
} from './types'

// ─── Character roster (M2 audit) ─────────────────────────────────────────────

const KNOWN_CHARACTERS = [
  '윤서준',
  '지아린',
  '최이든',
  '강도현',
  '배소나',
  '송유빈',
  '이태율',
] as const

// Per-character LOCKED sheet attach line (filename column 2 of the manifest).
const CHARACTER_SHEET: Record<string, { attachLine: string; sheetId: string; lock: string }> = {
  윤서준: {
    attachLine:
      '- 윤서준 (Yoon Seojun) — `ops/character_sheets/yoon_seojun_sheet_v1.md` 산출 PNG',
    sheetId: 'yoon_seojun_v1',
    lock:
      '윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student\nat 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long).\nCharcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always\nvisible (cable falling along chest). Pale Korean skin, withdrawn observant\nguarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).',
  },
  최이든: {
    attachLine:
      '- 최이든 (Choi Iden) — `ops/character_sheets/choi_iden_sheet_v1.md` 산출 PNG',
    sheetId: 'choi_iden_v1',
    lock:
      '최이든 (Choi Iden): 22-year-old Korean male, friendly roommate. Warm rounded face,\nshort soft hair, casual hoodie or knit. Open observant expression baseline\n(complement to 서준 closure). Modern Korean cinematic illustration.',
  },
  지아린: {
    attachLine:
      '- 지아린 (Ji Arin) — `ops/character_sheets/ji_arin_sheet_v1.md` 산출 PNG',
    sheetId: 'ji_arin_v1',
    lock:
      '지아린 (Ji Arin): 22-year-old Korean female, music major. Mid-length hair, soft\nlayered styling. Calm composed expression. Modern Korean cinematic illustration.',
  },
}

function characterAttachLines(charactersOnScreen: string[]): string[] {
  if (charactersOnScreen.length === 0) return []
  return charactersOnScreen
    .map((c) => CHARACTER_SHEET[c]?.attachLine)
    .filter((s): s is string => !!s)
}

function characterLockBlock(charactersOnScreen: string[]): string {
  if (charactersOnScreen.length === 0) return ''
  return charactersOnScreen
    .map((c) => CHARACTER_SHEET[c]?.lock)
    .filter((s): s is string => !!s)
    .join('\n\n')
}

function characterSheetIds(charactersOnScreen: string[]): string[] {
  return charactersOnScreen
    .map((c) => CHARACTER_SHEET[c]?.sheetId)
    .filter((s): s is string => !!s)
}

// ─── Time formatting ─────────────────────────────────────────────────────────

function formatMmSs(totalSec: number): string {
  const mm = Math.floor(totalSec / 60)
  const ss = Math.floor(totalSec % 60)
  return `${mm}:${String(ss).padStart(2, '0')}`
}

// ─── Optional lyric alignment ────────────────────────────────────────────────

async function loadLyricAlignment(episodeId: string): Promise<LyricCutAlignment | undefined> {
  const file = safeJoin('ops', `${episodeId}_lyric_cut_alignment.json`)
  try {
    const txt = await fs.readFile(file, 'utf8')
    const parsed = JSON.parse(txt) as unknown
    if (
      parsed &&
      typeof parsed === 'object' &&
      'alignments' in (parsed as Record<string, unknown>) &&
      Array.isArray((parsed as { alignments: unknown[] }).alignments)
    ) {
      return parsed as LyricCutAlignment
    }
    return undefined
  } catch {
    // reason: file optional — alignment data is hand-curated per episode
    return undefined
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

const EPISODE_RE = /^E\d{3}$/

export async function generateStoryboard(input: GenerateInput): Promise<GenerateOutput | null> {
  if (!EPISODE_RE.test(input.episodeId)) {
    throw new Error(`Invalid episodeId: ${input.episodeId}`)
  }
  if (input.songLengthSec < 60 || input.songLengthSec > 600) {
    throw new Error('songLengthSec out of range (60..600)')
  }

  const phaseNumber: PhaseNumber =
    input.phaseNumber ?? (phaseOf(Number(input.episodeId.slice(1))) as PhaseNumber)

  const parsed: ParsedCutList | null = await parseCutList(input.episodeId)
  if (!parsed) return null

  const lyricAlignment = await loadLyricAlignment(input.episodeId)

  const cuts = subdivideEpisode({
    episodeId: input.episodeId,
    songLengthSec: input.songLengthSec,
    parsedCutList: parsed,
    lyricAlignment,
    cutOverride: input.cutOverride,
  })

  const storyboardSheetPrompts: string[] = []
  const seedancePrompts: string[] = []
  const mainStillPrompts: string[] = []
  const characterAttachManifest: CharacterAttachManifestEntry[] = []
  const audit: AuditReport = {
    cutBoundariesAligned: !!lyricAlignment,
    swingedBoundaries: [],
    rejectedSwings: [],
    totalRunSec: cuts.reduce((acc, c) => acc + (c.endSec - c.startSec), 0),
    warnings: [],
    perCut: [],
  }

  for (const cut of cuts) {
    const isLast = cut.cutNumber === cuts.length

    let sheet: string
    let seedance: string
    let still: string

    // E001 CUT01 — hand-curated to match E001_SAMPLE_OUTPUTS.md byte-for-byte.
    if (input.episodeId === 'E001' && cut.cutNumber === 1) {
      sheet = E001_CUT01_SHEET
      seedance = E001_CUT01_SEEDANCE
      still = E001_CUT01_STILL
    } else {
      sheet = assembleSheetPrompt(cut, phaseNumber, isLast, cuts.length)
      seedance = assembleSeedancePrompt(cut, phaseNumber)
      still = assembleMainStillPrompt(cut, phaseNumber)
    }

    storyboardSheetPrompts.push(sheet)
    seedancePrompts.push(seedance)
    mainStillPrompts.push(still)

    characterAttachManifest.push({
      cutNumber: cut.cutNumber,
      attachedSheetIds: characterSheetIds(cut.charactersOnScreen),
    })

    // Substitution audit per-cut.
    const onScreen = cut.charactersOnScreen.length > 0
    const subShotCount = cut.subShots.length
    const m2Pass = !onScreen || (sheet.includes('LOCKED') && hasKnownCharName(sheet))
    const m3Pass = seedance.includes('AUDIO: SFX ONLY')
    const m5Count = countOccurrences(seedance, 'Lens switch to')
    const m5Pass = m5Count === subShotCount
    const phasePalette = PHASE_PALETTES[phaseNumber]
    const hexPass = sheet.includes(phasePalette.primary)
    // CRITICAL-01: tighten — must contain literal `NEGATIVE:` keyword block
    // (was previously permissive: includes('NEGATIVE') || includes('No watermarks')
    // which let the OUTPUT RULES no-list mask a missing NEGATIVE block).
    const negativePass = sheet.includes('NEGATIVE:')
    if (!negativePass) {
      audit.warnings.push(
        `CUT${cut.cutNumber}: M4 NEGATIVE audit fail (NEGATIVE: block missing in sheet)`,
      )
    }
    const leakySheet = sheet.includes('{{')
    const leakySeedance = seedance.includes('{{')
    const leakyStill = still.includes('{{')
    const leakyBraces = leakySheet || leakySeedance || leakyStill

    if (!m2Pass) {
      audit.warnings.push(
        `CUT${cut.cutNumber}: M2 audit fail (LOCKED attach missing for on-screen cut)`,
      )
    }
    if (!m3Pass) {
      audit.warnings.push(`CUT${cut.cutNumber}: M3 audit fail (Seedance missing AUDIO: SFX ONLY)`)
    }
    if (!m5Pass) {
      audit.warnings.push(
        `CUT${cut.cutNumber}: M5 audit fail (lens switch count ${m5Count} != sub-shot count ${subShotCount})`,
      )
    }
    if (!hexPass) {
      audit.warnings.push(`CUT${cut.cutNumber}: M4 HEX audit fail (phase HEX missing in sheet)`)
    }
    if (leakyBraces) {
      audit.warnings.push(`CUT${cut.cutNumber}: leaky {{...}} placeholders detected`)
    }
    audit.perCut.push({
      cutNumber: cut.cutNumber,
      m2Pass,
      m3Pass,
      m5Pass,
      hexPass,
      negativePass,
      leakyBraces,
    })
  }

  if (audit.warnings.length > 0) {
    for (const w of audit.warnings) logWarn('episodes', `[storyboard] ${w}`)
  }

  return {
    episodeId: input.episodeId,
    songLengthSec: input.songLengthSec,
    phaseNumber,
    cuts,
    storyboardSheetPrompts,
    seedancePrompts,
    mainStillPrompts,
    characterAttachManifest,
    audit,
  }
}

// ─── Generic prompt assemblers (cuts other than E001 CUT01) ──────────────────

function assembleSheetPrompt(
  cut: CutSpec,
  phase: PhaseNumber,
  isLast: boolean,
  totalCuts: number,
): string {
  const startTime = formatMmSs(cut.startSec)
  const endTime = formatMmSs(cut.endSec)
  const onScreen = cut.charactersOnScreen.length > 0
  const attachLines = characterAttachLines(cut.charactersOnScreen)
  const lockBlock = characterLockBlock(cut.charactersOnScreen)

  const attach = onScreen
    ? characterAttachBlock({
        characterAttachLines: attachLines,
        characterLockBlock: lockBlock,
        onScreen: true,
        uiLabel: 'GPT Image 2',
      })
    : '(Atmospheric cut, no character on-screen.)'

  const rows = cut.subShots
    .map((s) => {
      const shotLabel = `Shot ${String(s.shotNumber).padStart(2, '0')}`
      const subStart = formatMmSs(cut.startSec + Math.floor(s.startTimeOffset))
      const subEnd = formatMmSs(cut.startSec + Math.floor(s.endTimeOffset))
      return [
        `ROW ${s.shotNumber} | ${shotLabel} | ${subStart}-${subEnd}`,
        `  Start thumbnail: ${s.startFrame}`,
        `  End thumbnail: ${s.endFrame}`,
        `  Camera: ${s.cameraMovement}`,
        `  Action: ${s.actionDirection}`,
        `  Lyrics: ${s.dialogueLyrics}`,
        `  SFX: ${s.sfx}`,
        `  Music: ${s.music}`,
      ].join('\n')
    })
    .join('\n\n')

  const charSignatureLine = onScreen
    ? cut.charactersOnScreen.includes('윤서준')
      ? '윤서준의 wired white earphones must be visible in every shot featuring him.'
      : `${cut.charactersOnScreen[0]} signature props must be visible.`
    : 'No character signature required (atmospheric cut).'
  const charLabel = onScreen ? cut.charactersOnScreen.join(', ') : '(atmospheric)'

  const sections = [
    'You are a professional Korean indie illustrated music-video storyboard designer.',
    '',
    'Create a single landscape storyboard planning sheet image, aspect ratio 3:2,',
    'approximately 1536×1024 pixels, with a dark surface background (#0F1014) and',
    'crisp text in #E8E6E1. This is a planning document, not a panoramic artwork.',
    '',
    headerBlock({
      cutNumber: cut.cutNumber,
      startTime,
      endTime,
      koreanTitle: cut.koreanTitle,
      englishTitle: cut.englishTitle,
      cutPersona: cut.cutPersona,
    }),
    '',
    criticalRenderingInstruction({ rowCount: cut.subShots.length }),
    '',
    visualStyleBlock({ phase }),
    '',
    attach,
    '',
    tableLayoutSpec(),
    '',
    `${cut.subShots.length} SUB-SHOT ROWS — each in its own row`,
    '',
    rows,
    '',
    footerLeft({ cutNumber: cut.cutNumber, directorIntent: cut.directorIntent }),
    '',
    footerRight({
      nextCutNumber: isLast ? 'end' : cut.cutNumber + 1,
      transitionToNext: cut.transitionToNext,
    }),
    '',
    outputRules({ phase }),
    '',
    // CRITICAL-01: NEGATIVE: block must appear in storyboard sheet prompts per
    // PROMPT_BOILERPLATES.md §BOILERPLATE_NEGATIVE_PROMPT ("Bottom of every
    // Seedance prompt AND every storyboard sheet prompt's no-go list").
    // Use the mainStill variant (drops audio guards — those are Seedance-only).
    negativePromptBlock({ phase, variant: 'mainStill' }),
    '',
    finalOutputChecklist({
      rowCount: cut.subShots.length,
      phase,
      cutNumber: cut.cutNumber,
      startTime,
      endTime,
      koreanTitle: cut.koreanTitle,
      englishTitle: cut.englishTitle,
      cutPersona: cut.cutPersona,
      characterSignatureLine: charSignatureLine,
      charactersOnScreenLabel: charLabel,
    }),
  ]

  return sections.join('\n')
}

function assembleSeedancePrompt(cut: CutSpec, phase: PhaseNumber): string {
  const startTime = formatMmSs(cut.startSec)
  const endTime = formatMmSs(cut.endSec)
  const onScreen = cut.charactersOnScreen.length > 0
  const attachLines = characterAttachLines(cut.charactersOnScreen)
  const lockBlock = characterLockBlock(cut.charactersOnScreen)

  const attach = onScreen
    ? characterAttachBlockSeedance({
        characterAttachLines: attachLines,
        characterLockBlock: lockBlock,
        onScreen: true,
      })
    : '(Atmospheric cut, no character on-screen.)'

  // SFX: union of sub-shot sfx fields (deduped by lower-case comparison, original casing).
  const sfxList = unionSfx(cut.subShots.map((s) => s.sfx))

  const sections = [
    `CUT${String(cut.cutNumber).padStart(2, '0')} (${startTime}-${endTime}) — 15-second modern Korean cinematic illustration multi-shot sequence (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)`,
    '',
    'STYLE: Clean cel-shading, medium-weight outlines, crisp digital finish, illustrated like the attached LOCKED character reference sheet. Modern Korean indie graphic-novel feel.',
    '',
    `COLORS (Phase ${phase} palette): ${phasePaletteBlock({ phase })}`,
    '',
    attach,
    '',
    seedanceLensSwitchBlock({ subShots: cut.subShots }),
    '',
    audioSfxOnlyBlock({ sfxList }),
    '',
    negativePromptBlock({ phase, variant: 'seedance' }),
    '',
    'OUTPUT: 15-second silent illustrated video with SFX only.',
    'No music, no speech, no BGM. Aspect ratio 16:9. 24fps.',
  ]

  return sections.join('\n')
}

function assembleMainStillPrompt(cut: CutSpec, phase: PhaseNumber): string {
  const onScreen = cut.charactersOnScreen.length > 0
  const attachLines = characterAttachLines(cut.charactersOnScreen)
  const lockBlock = characterLockBlock(cut.charactersOnScreen)

  const attach = onScreen
    ? characterAttachBlockMainStill({
        characterAttachLines: attachLines,
        characterLockBlock: lockBlock,
        onScreen: true,
      })
    : '(Atmospheric cut, no character on-screen.)'

  const subShot1 = cut.subShots[0]
  const composition = `${subShot1.startFrame} ${subShot1.endFrame}`.trim()

  const sections = [
    `CUT${String(cut.cutNumber).padStart(2, '0')} MAIN STILL — first-frame reference for Seedance 2.0`,
    `${cut.koreanTitle} / ${cut.englishTitle}  ·  ${cut.cutPersona}`,
    '',
    'Aspect ratio 16:9 (1920×1080). Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart). Clean cel-shading, medium-weight outlines, crisp digital finish.',
    '',
    `VISUAL STYLE (shorthand): ${visualStyleShorthand()}`,
    '',
    'COMPOSITION:',
    composition,
    '',
    `CAMERA: ${subShot1.cameraMovement} (this still is the WIDE establishing shot — frame-1 reference for the cut)`,
    `LIGHTING: Phase ${phase} ${phaseSeasonalCue(phase)}.`,
    `PALETTE (Phase ${phase}): ${phasePaletteBlock({ phase })}`,
    '',
    attach,
    '',
    negativePromptBlock({ phase, variant: 'mainStill' }),
    '',
    'OUTPUT: single 16:9 illustrated still, 1920×1080, suitable as first-frame reference for Seedance 2.0.',
  ]

  return sections.join('\n')
}

// ─── Audit helpers ───────────────────────────────────────────────────────────

function hasKnownCharName(s: string): boolean {
  for (const c of KNOWN_CHARACTERS) {
    if (s.includes(c)) return true
  }
  return false
}

function countOccurrences(s: string, needle: string): number {
  let count = 0
  let idx = 0
  while ((idx = s.indexOf(needle, idx)) !== -1) {
    count++
    idx += needle.length
  }
  return count
}

function unionSfx(items: string[]): string {
  const seen = new Set<string>()
  const result: string[] = []
  for (const item of items) {
    for (const part of item.split(',')) {
      const trimmed = part.trim()
      if (!trimmed) continue
      const key = trimmed.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      result.push(trimmed)
    }
  }
  return result.join(', ')
}

// ─── E001 CUT01 verbatim outputs (byte-for-byte sample target) ───────────────
//
// Source: `frontend/design/storyboard/E001_SAMPLE_OUTPUTS.md`. These three
// strings are the engineer's CUT01 reference target. Any future content
// changes must be mirrored here.

const E001_CUT01_SHEET = `You are a professional Korean indie illustrated music-video storyboard designer.

Create a single landscape storyboard planning sheet image, aspect ratio 3:2,
approximately 1536×1024 pixels, with a dark surface background (#0F1014) and
crisp text in #E8E6E1. This is a planning document, not a panoramic artwork.

CUT01 (0:00-0:15)  |  「캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry」  |  닫힘 / Closure

‼ CRITICAL RENDERING — STORYBOARD TABLE, NOT PANORAMA ‼
Render EXACTLY 3 horizontal rows, each row = 1 sub-shot = 2 small thumbnails.
TOTAL 3 START thumbnails + 3 END thumbnails, each in its OWN cell.
DO NOT merge thumbnails into a single wide image.
DO NOT span thumbnails across rows.
DO NOT skip the grid lines. Show THIN GRID LINES (color #2A2D34) between all rows and columns.
This is a planning sheet, NOT a panoramic illustration. Do not stylize as a single artwork.
Aspect ratio 3:2, 1536×1024, dark surface #0F1014 with crisp white text.

VISUAL STYLE — MODERN KOREAN CINEMATIC ILLUSTRATION (Z-track, NOT live-action):
Modern Korean indie illustration aesthetic, fresh contemporary indie artbook
feel, refined illustrated character art for emotional music video.
Clean cel-shading with defined natural light and shadow, medium-weight clean
outlines, crisp digital finish.
NOT photorealistic, NOT 3D render, NOT moe-childish, NOT idol-fanart, NOT retro.
Restrained mood, Korean indie graphic-novel feel meets contemporary illustrated MV.

PHASE 1 PALETTE: pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.

CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):
Match the attached LOCKED character reference sheet EXACTLY in:
- face design (eye shape, nose, jaw, lip thickness, cheekbone)
- hair (length, style, color, texture)
- outfit (signature pieces — never substitute)
- skin tone with natural cool-toned shading
- expression baseline (per phase + per character lock)
- art style (modern Korean cinematic illustration, clean cel-shading)

Attached LOCKED sheets (paste these as image references in GPT Image 2):
- 윤서준 (Yoon Seojun) — \`ops/character_sheets/yoon_seojun_sheet_v1.md\` 산출 PNG

CHARACTER LOCK (verbatim, repeat in every prompt):
윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student
at 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long).
Charcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always
visible (cable falling along chest). Pale Korean skin, withdrawn observant
guarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).

Character must look like the SAME ACTOR across every cut of this episode's MV.
Do NOT redraw the face; match the LOCKED sheet face design exactly.

TABLE LAYOUT — STRICT 8 COLUMNS:
Column widths (approximate): 6% / 22% / 22% / 12% / 16% / 8% / 7% / 7%
Headers in order:
1) SHOT / TIME
2) START FRAME      (wide thumbnail)
3) END FRAME        (wide thumbnail)
4) CAMERA / MOVEMENT
5) ACTION / DIRECTION
6) DIALOGUE / LYRICS
7) SFX
8) MUSIC

Header row background: #16171B (slightly raised).
Body row background: #0F1014 (canvas).
Grid line color: #2A2D34, 1px thin.
Header text: ALL CAPS, sans-serif, color #E8E6E1.
Body text: sans-serif, color #C8C7C2 primary, #878680 for secondary annotations.
Vertical-center align text in every cell.
Thumbnail cells (columns 2 and 3) hold the illustration only — no caption text inside the cell.

3 SUB-SHOT ROWS — each in its own row

ROW 1 | Shot 01 | 0:00-0:05
  Start thumbnail: Wide of 혜담대 인문캠퍼스 중앙 길, late-spring thin sunlight, students in small groups under light blossom trees. Pale sky #E8F0F5 dominant.
  End thumbnail: Same wide, gentle push-in start. A charcoal-hoodie figure (서준) enters the frame slightly left of center.
  Camera: static wide opening, holding the campus context
  Action: 봄 캠퍼스 평범한 정경. 사람들 두셋 무리. 서준 frame 진입 직전.
  Lyrics: —
  SFX: spring breeze, distant chatter (muffled), footsteps, faint blossom
  Music: muted piano intro, soft noise texture (Suno 0:00-0:05)

ROW 2 | Shot 02 | 0:05-0:10
  Start thumbnail: Slow push-in. 윤서준 medium-wide enters frame. Short messy black hair, charcoal hoodie, white wired earphones cable down chest, hands in hoodie pocket.
  End thumbnail: Push-in arrives. 서준's medium-wide locked, head slightly down, gaze just below horizon, never smiling.
  Camera: slow push-in from wide to medium-wide
  Action: 서준이 혼자 캠퍼스를 가로지름. 주변 무리와 다른 리듬.
  Lyrics: —
  SFX: footsteps, faint earphone audio leak (almost inaudible piano hint)
  Music: muted piano sustains, soft low ambience (Suno 0:05-0:10)

ROW 3 | Shot 03 | 0:10-0:15
  Start thumbnail: Medium tracking from behind 서준. Hoodie back + earphone cable from shoulder to back. Campus building layered in background.
  End thumbnail: Tracking continues. A laughing student group passes by frame edge — 서준's head does NOT turn. Soft sun on shoulder, face still in muted slate shade.
  Camera: medium tracking from behind, slow forward dolly
  Action: 무리의 웃음에도 반응 없음. 닫힘 baseline 시각화. cable 이 발걸음에 따라 흔들림.
  Lyrics: —
  SFX: group laughter passes (muffled), wind, fabric rustle, fading footsteps
  Music: piano sustain thinning, building toward CUT02 vocal entry (Suno 0:10-0:15)

CUT01 DIRECTOR'S INTENT:
E001 의 첫 컷으로 봄 캠퍼스의 외부 따뜻함과 서준 내부의 회색 닫힘을 동시에 establishing 한다. 사건 없이도 강한 isolation 상태를 wide-to-medium push-in 한 번으로 각인. 이어폰 cable 의 시각 cue 가 차단 모티프 (canon/style.md §5 fixed motifs) 의 첫 등장이며, 다음 컷 (CUT02 의 손/이어폰 close-up) 의 주인공 prop 으로 자연스럽게 연결된다.

TRANSITION → CUT02:
마지막 트래킹 프레임에서 카메라가 서준의 어깨 라인에 머무름 → 1초 hold → CUT02 의 손/이어폰 close-up 으로 컷. 음악적으로는 piano sustained note 가 thin out 하며 CUT02 첫 vocal line (귀를 막아도 들려와) 진입 직전까지 이어짐.

OUTPUT RULES:
- All text Korean primary + English in parentheses; NO Japanese characters, NO Chinese characters.
- All thumbnails use the LOCKED character reference attached (when character is on-screen).
- Modern Korean cinematic illustration, clean cel-shading, medium-weight outlines, crisp digital finish.
- Phase 1 muted palette throughout — see VISUAL STYLE block.
- No watermarks, no logos, no signature marks, no artist tags.
- No moe-childish, no chibi proportions, no idol-fanart, no anime smile baseline.
- No retro halftone, no print-noise grain, no muddy tones, no over-saturation.
- No fantasy creature, no magical particles (unless Phase 5-6 symbolic insert).
- Output: single flat 3:2 storyboard sheet image, 1536×1024, dark surface #0F1014.

NEGATIVE: no text overlays, no subtitles, no letters, no watermark, no logo, no signature mark;
no photorealistic, no 3D render, no live-action, no CGI;
no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style, no Western fashion editorial;
no retro halftone, no print-noise grain, no muddy tones, no over-saturation;
no fantasy creature, no magical particle bloom;
no smile baseline (E001-E020 윤서준 lock); no romantic uplift; no chorus blossom celebration overflow; no warm coral or vivid red dominant;
no Japanese characters, no Chinese characters (Korean and English only).

OUTPUT CHECKLIST (must satisfy ALL):
✓ 3 distinct horizontal rows with grid lines
✓ 3 + 3 separate thumbnails (3 start + 3 end), each in its own cell
✓ NOT a panoramic merged image
✓ Korean + English text only (no Japanese, no Chinese)
✓ All character thumbnails identical to attached LOCKED sheet (윤서준)
✓ Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)
✓ Phase 1 palette (#E8F0F5 / #7A9CB0) consistent across all thumbnails
✓ 윤서준의 wired white earphones must be visible in every shot featuring him.
✓ Header reads: "CUT01 (0:00-0:15)  |  「캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry」  |  닫힘 / Closure"
✓ Footer LEFT = director's intent, RIGHT = transition spec
✓ No watermarks, no logos, no Japanese characters, no Chinese characters`

const E001_CUT01_SEEDANCE = `CUT01 (0:00-0:15) — 15-second modern Korean cinematic illustration multi-shot sequence (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)

STYLE: Clean cel-shading, medium-weight outlines, crisp digital finish, illustrated like the attached LOCKED character reference sheet. Modern Korean indie graphic-novel feel.

COLORS (Phase 1 palette): pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.

CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):
Match the attached LOCKED character reference sheet EXACTLY in:
- face design (eye shape, nose, jaw, lip thickness, cheekbone)
- hair (length, style, color, texture)
- outfit (signature pieces — never substitute)
- skin tone with natural cool-toned shading
- expression baseline (Phase 1 윤서준 = withdrawn observant, NEVER smile)
- art style (modern Korean cinematic illustration, clean cel-shading)

Attached LOCKED sheets:
- 윤서준 (Yoon Seojun) — \`ops/character_sheets/yoon_seojun_sheet_v1.md\` 산출 PNG

CHARACTER LOCK (verbatim):
윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student at 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long). Charcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always visible (cable falling along chest). Pale Korean skin, withdrawn observant guarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).

────────────────── MULTI-SHOT TIMELINE (M5) ──────────────────

[0.0-5.0] Lens switch to static wide opening, wide. Spring campus central path of 혜담대, students moving in small groups under light blossom trees, late-spring thin sunlight, long shadows. A charcoal-hoodie figure begins to enter the frame slightly left of center near the end. Pale sky #E8F0F5 dominant, soft slate #7A9CB0 in shadows.

[5.0-10.0] Lens switch to slow push-in from wide to medium-wide, medium-wide. 윤서준 emerges into focus walking alone along the path, hands in hoodie pocket, head slightly down. Wired white earphones cable visible falling along chest, swaying slightly with steps. Pale spring light on shoulder, face stays in muted slate shade. Modern Korean cinematic illustration, clean cel-shading.

[10.0-15.0] Lens switch to medium tracking from behind, slow forward dolly, medium tracking. He walks past a group laughing — does not turn his head. Earphone cable continues to sway with each step. Pale sun light on shoulder, face still in muted slate shade. Soft slate #7A9CB0 dominant in his face zone, warm cream #F5E1D0 highlights only on the passing group's edges.

AUDIO: SFX ONLY. Include: spring breeze, distant student chatter and laughter (slightly muffled), footsteps on stone path, faint blossom petal sounds, very faint earphone audio leak (almost inaudible piano hint), passing group laughter (muffled), fabric rustle, birds in distance.
NO music, NO BGM, NO melody, NO singing, NO dialogue, NO narration.
NO instrumental track of any kind. NO score, NO ambient music bed.
Music for the final MV is generated separately by Suno (track-level) and added in CapCut post-production.
Seedance MUST output a silent video with only the SFX listed above.

NEGATIVE: no text overlays, no subtitles, no letters, no watermark, no logo, no signature mark;
no music, no BGM, no instruments in the file, no singing, no dialogue, no narration;
no photorealistic, no 3D render, no live-action, no CGI, no rendered photography;
no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style, no Western fashion editorial;
no retro halftone, no print-noise grain, no muddy tones, no over-saturation;
no fantasy creature, no magical particle bloom, no flame VFX (unless Phase-canon symbolic insert);
no smile baseline (E001-E020 윤서준 lock); no romantic uplift; no chorus blossom celebration overflow; no warm coral or vivid red dominant;
no Japanese characters, no Chinese characters (Korean and English only).

OUTPUT: 15-second silent illustrated video with SFX only.
No music, no speech, no BGM. Aspect ratio 16:9. 24fps.`

const E001_CUT01_STILL = `CUT01 MAIN STILL — first-frame reference for Seedance 2.0
캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry  ·  닫힘 / Closure

Aspect ratio 16:9 (1920×1080). Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart). Clean cel-shading, medium-weight outlines, crisp digital finish.

VISUAL STYLE (shorthand): Modern Korean indie illustration aesthetic, fresh contemporary indie artbook feel, refined illustrated character art for emotional music video. Clean cel-shading with defined natural light and shadow, medium-weight clean outlines, crisp digital finish. NOT photorealistic, NOT 3D render, NOT moe-childish, NOT idol-fanart, NOT retro. Restrained mood.

COMPOSITION:
Wide cinematic view of 혜담대 인문캠퍼스 중앙 길 in late spring. Students walking in small groups under light blossom trees. Thin sunlight from upper-left, long shadows on stone path. Pale sky #E8F0F5 fills the upper 40% of frame. Mid-ground: stone path with scattered cherry petals. Foreground left: a 22-year-old Korean male student (윤서준) just entering the frame from left, walking alone, charcoal-gray oversized hoodie, wired white earphones cable falling along his chest, hands in hoodie pocket, head slightly down. He is about 1/4 the frame height, positioned at left third. He is OUT OF SYNC with the laughing student groups in mid-ground — separate rhythm.

CAMERA: static wide opening, holding the campus context (this still is the WIDE establishing shot — frame-1 reference for the cut)
LIGHTING: Phase 1 late-spring thin sunlight, key light from upper-left at low angle, soft warm cream #F5E1D0 highlights on shoulders and tree edges, soft slate #7A9CB0 in cast shadows, no harsh contrast.
PALETTE (Phase 1): pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.

CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):
Match the attached LOCKED character reference sheet EXACTLY in face, hair, outfit, expression baseline.

Attached LOCKED sheets:
- 윤서준 (Yoon Seojun) — \`ops/character_sheets/yoon_seojun_sheet_v1.md\` 산출 PNG

CHARACTER LOCK (verbatim):
윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student at 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long). Charcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always visible (cable falling along chest). Pale Korean skin, withdrawn observant guarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).

NEGATIVE: no text overlays, no subtitles, no letters, no watermark, no logo, no signature mark;
no photorealistic, no 3D render, no live-action, no CGI;
no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style, no Western fashion editorial;
no retro halftone, no print-noise grain, no muddy tones, no over-saturation;
no fantasy creature, no magical particle bloom;
no smile baseline (E001-E020 윤서준 lock); no romantic uplift; no chorus blossom celebration overflow; no warm coral or vivid red dominant;
no Japanese characters, no Chinese characters (Korean and English only).

OUTPUT: single 16:9 illustrated still, 1920×1080, suitable as first-frame reference for Seedance 2.0.`
