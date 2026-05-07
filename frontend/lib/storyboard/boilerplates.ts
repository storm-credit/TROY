/**
 * Storyboard prompt boilerplates.
 * Each function takes typed parameters and returns a string fragment.
 * Sources:
 *   - `frontend/design/storyboard/PROMPT_BOILERPLATES.md`
 *   - `frontend/design/storyboard/STORYBOARD_TEMPLATE.md §1.3`
 *
 * Substitution rule: every `{{placeholder}}` slot in the spec is replaced by
 * a typed parameter; if a slot is genuinely optional, the function accepts
 * that variation explicitly. The output strings are paste-ready — no leaky
 * braces, no trailing trims.
 */

import type { PhaseNumber, PhasePalette, SubShotSpec } from './types'

// ─── Phase palettes ──────────────────────────────────────────────────────────

/**
 * Phase palette HEX anchors (`STORYBOARD_TEMPLATE.md §1.3.2`).
 * Phase 1 is locked from the Designer phase. Phases 2-6 use the brief HEX
 * guidance per the same section.
 */
export const PHASE_PALETTES: Record<PhaseNumber, PhasePalette> = {
  1: { primary: '#E8F0F5', accent: '#F5E1D0', supporting: '#7A9CB0', base: '#2C2E33' },
  2: { primary: '#D8E5DA', accent: '#F2C5A0', supporting: '#9FB3C8', base: '#3F4A55' },
  3: { primary: '#FFD580', accent: '#C8553D', supporting: '#5A8DAE', base: '#3A3530' },
  4: { primary: '#6B7A8F', accent: '#A4906E', supporting: '#8FA39A', base: '#2A2E2F' },
  5: { primary: '#C8B68A', accent: '#7B8C7A', supporting: '#3D4A5C', base: '#1F252E' },
  6: { primary: '#9B7E5A', accent: '#D9C4A0', supporting: '#2E3540', base: '#1A1D24' },
}

/**
 * Phase 1 palette block as it appears in BOILERPLATE_PHASE_PALETTE_BLOCK.
 * Other phases use the shorter form from the spec.
 *
 * The Phase 1 string MUST match the E001_SAMPLE_OUTPUTS.md sample byte-for-byte
 * (modulo whitespace) since CUT01 is the engineer's reference target.
 */
export function phasePaletteBlock(p: { phase: PhaseNumber }): string {
  switch (p.phase) {
    case 1:
      return 'pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.'
    case 2:
      return 'mint #D8E5DA, warm peach #F2C5A0, slate #9FB3C8, deep slate #3F4A55. Muted, bridging spring to early summer.'
    case 3:
      return 'sun gold #FFD580, heat coral #C8553D, sea blue #5A8DAE, umber base #3A3530. Heated mid-summer density, more saturation allowed (cap 75%).'
    case 4:
      return 'wet slate #6B7A8F, damp earth #A4906E, rain green #8FA39A, rain charcoal #2A2E2F. Damp, late-summer humidity, blurred edges allowed in atmosphere.'
    case 5:
      return 'autumn beige #C8B68A, sage #7B8C7A, deep dusk #3D4A5C, night blue base #1F252E. Transparent autumn light, longer shadows.'
    case 6:
      return 'matured umber #9B7E5A, late warm #D9C4A0, dusk navy #2E3540, night base #1A1D24. Late autumn solid finish, restrained gold accents.'
  }
}

/**
 * Compact "phaseHexAnchor" — top 2 HEX swatches for the OUTPUT CHECKLIST.
 * Phase 1 → `#E8F0F5 / #7A9CB0` per the sample.
 */
export function phaseHexAnchor(phase: PhaseNumber): string {
  const pal = PHASE_PALETTES[phase]
  // Sample uses primary + supporting (sky + slate). Other phases follow same order.
  return `${pal.primary} / ${pal.supporting}`
}

/** Phase-specific seasonal cue used in main still LIGHTING line. */
export function phaseSeasonalCue(phase: PhaseNumber): string {
  switch (phase) {
    case 1:
      return 'late-spring thin sunlight, key light from upper-left at low angle, soft warm cream #F5E1D0 highlights on shoulders and tree edges, soft slate #7A9CB0 in cast shadows, no harsh contrast'
    case 2:
      return 'early summer light, mint-tinted key light, warm peach highlights at edges'
    case 3:
      return 'high-summer light, golden key from upper-right, heat coral accents in highlights, sea blue in deep shadows'
    case 4:
      return 'late-summer overcast diffuse light, wet slate dominant, damp earth accents in mid-tones'
    case 5:
      return 'autumn transparent light, low-angle key, sage accents, deep dusk shadows'
    case 6:
      return 'late-autumn quiet light, restrained gold key, dusk navy in depths'
  }
}

/** Phase-specific NEGATIVE guard line (smile baseline lock for Phase 1, etc.) */
export function phaseSpecificNegative(phase: PhaseNumber): string {
  switch (phase) {
    case 1:
      return 'no smile baseline (E001-E020 윤서준 lock); no romantic uplift; no chorus blossom celebration overflow; no warm coral or vivid red dominant'
    case 2:
      return 'no chorus celebration overflow; no over-saturated greens'
    case 3:
      return 'no over-saturated reds; no idol heat-glow gloss'
    case 4:
      return 'no muddy over-blur; no over-saturated greens'
    case 5:
      return 'no over-warm gold; no Halloween cliché'
    case 6:
      return 'no over-saturated golds; no winter snow imagery'
  }
}

// ─── Storyboard sheet prompt fragments ───────────────────────────────────────

/** BOILERPLATE_HEADER */
export function headerBlock(p: {
  cutNumber: number
  startTime: string
  endTime: string
  koreanTitle: string
  englishTitle: string
  cutPersona: string
}): string {
  const nn = String(p.cutNumber).padStart(2, '0')
  return `CUT${nn} (${p.startTime}-${p.endTime})  |  「${p.koreanTitle} / ${p.englishTitle}」  |  ${p.cutPersona}`
}

/** BOILERPLATE_CRITICAL_RENDERING_INSTRUCTION */
export function criticalRenderingInstruction(p: { rowCount: number }): string {
  return [
    '‼ CRITICAL RENDERING — STORYBOARD TABLE, NOT PANORAMA ‼',
    `Render EXACTLY ${p.rowCount} horizontal rows, each row = 1 sub-shot = 2 small thumbnails.`,
    `TOTAL ${p.rowCount} START thumbnails + ${p.rowCount} END thumbnails, each in its OWN cell.`,
    'DO NOT merge thumbnails into a single wide image.',
    'DO NOT span thumbnails across rows.',
    'DO NOT skip the grid lines. Show THIN GRID LINES (color #2A2D34) between all rows and columns.',
    'This is a planning sheet, NOT a panoramic illustration. Do not stylize as a single artwork.',
    'Aspect ratio 3:2, 1536×1024, dark surface #0F1014 with crisp white text.',
  ].join('\n')
}

/** BOILERPLATE_VISUAL_STYLE */
export function visualStyleBlock(p: { phase: PhaseNumber }): string {
  return [
    'VISUAL STYLE — MODERN KOREAN CINEMATIC ILLUSTRATION (Z-track, NOT live-action):',
    'Modern Korean indie illustration aesthetic, fresh contemporary indie artbook',
    'feel, refined illustrated character art for emotional music video.',
    'Clean cel-shading with defined natural light and shadow, medium-weight clean',
    'outlines, crisp digital finish.',
    'NOT photorealistic, NOT 3D render, NOT moe-childish, NOT idol-fanart, NOT retro.',
    'Restrained mood, Korean indie graphic-novel feel meets contemporary illustrated MV.',
    '',
    `PHASE ${p.phase} PALETTE: ${phasePaletteBlock({ phase: p.phase })}`,
  ].join('\n')
}

/** Inline 1-paragraph variant for main still / Seedance opening lines. */
export function visualStyleShorthand(): string {
  return 'Modern Korean indie illustration aesthetic, fresh contemporary indie artbook feel, refined illustrated character art for emotional music video. Clean cel-shading with defined natural light and shadow, medium-weight clean outlines, crisp digital finish. NOT photorealistic, NOT 3D render, NOT moe-childish, NOT idol-fanart, NOT retro. Restrained mood.'
}

/**
 * BOILERPLATE_CHARACTER_ATTACH (storyboard sheet variant).
 *
 * `characterAttachLines` is the bulleted attach list (already formatted with
 * leading "- "). `characterLockBlock` is the verbatim per-character lock prose.
 * If `onScreen === false` we return the atmospheric fallback the recipe asks for.
 */
export function characterAttachBlock(p: {
  characterAttachLines: string[]
  characterLockBlock: string
  onScreen: boolean
  /** "GPT Image 2 / Seedance UI" or "GPT Image 2" depending on context. */
  uiLabel?: string
}): string {
  if (!p.onScreen) {
    return '(Atmospheric cut, no character on-screen.)'
  }
  const ui = p.uiLabel ?? 'GPT Image 2 / Seedance UI'
  const attachList = p.characterAttachLines.join('\n')
  return [
    'CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):',
    'Match the attached LOCKED character reference sheet EXACTLY in:',
    '- face design (eye shape, nose, jaw, lip thickness, cheekbone)',
    '- hair (length, style, color, texture)',
    '- outfit (signature pieces — never substitute)',
    '- skin tone with natural cool-toned shading',
    '- expression baseline (per phase + per character lock)',
    '- art style (modern Korean cinematic illustration, clean cel-shading)',
    '',
    `Attached LOCKED sheets (paste these as image references in ${ui}):`,
    attachList,
    '',
    'CHARACTER LOCK (verbatim, repeat in every prompt):',
    p.characterLockBlock,
    '',
    "Character must look like the SAME ACTOR across every cut of this episode's MV.",
    'Do NOT redraw the face; match the LOCKED sheet face design exactly.',
  ].join('\n')
}

/**
 * Compact attach used in Seedance prompts (sample shows shorter "Attached LOCKED sheets:" form).
 */
export function characterAttachBlockSeedance(p: {
  characterAttachLines: string[]
  characterLockBlock: string
  onScreen: boolean
}): string {
  if (!p.onScreen) {
    return '(Atmospheric cut, no character on-screen.)'
  }
  const attachList = p.characterAttachLines.join('\n')
  return [
    'CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):',
    'Match the attached LOCKED character reference sheet EXACTLY in:',
    '- face design (eye shape, nose, jaw, lip thickness, cheekbone)',
    '- hair (length, style, color, texture)',
    '- outfit (signature pieces — never substitute)',
    '- skin tone with natural cool-toned shading',
    '- expression baseline (Phase 1 윤서준 = withdrawn observant, NEVER smile)',
    '- art style (modern Korean cinematic illustration, clean cel-shading)',
    '',
    'Attached LOCKED sheets:',
    attachList,
    '',
    'CHARACTER LOCK (verbatim):',
    p.characterLockBlock,
  ].join('\n')
}

/** Compact attach for main still — single-paragraph attach + lock. */
export function characterAttachBlockMainStill(p: {
  characterAttachLines: string[]
  characterLockBlock: string
  onScreen: boolean
}): string {
  if (!p.onScreen) {
    return '(Atmospheric cut, no character on-screen.)'
  }
  const attachList = p.characterAttachLines.join('\n')
  return [
    'CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):',
    'Match the attached LOCKED character reference sheet EXACTLY in face, hair, outfit, expression baseline.',
    '',
    'Attached LOCKED sheets:',
    attachList,
    '',
    'CHARACTER LOCK (verbatim):',
    p.characterLockBlock,
  ].join('\n')
}

/** BOILERPLATE_TABLE_LAYOUT_SPEC */
export function tableLayoutSpec(): string {
  return [
    'TABLE LAYOUT — STRICT 8 COLUMNS:',
    'Column widths (approximate): 6% / 22% / 22% / 12% / 16% / 8% / 7% / 7%',
    'Headers in order:',
    '1) SHOT / TIME',
    '2) START FRAME      (wide thumbnail)',
    '3) END FRAME        (wide thumbnail)',
    '4) CAMERA / MOVEMENT',
    '5) ACTION / DIRECTION',
    '6) DIALOGUE / LYRICS',
    '7) SFX',
    '8) MUSIC',
    '',
    'Header row background: #16171B (slightly raised).',
    'Body row background: #0F1014 (canvas).',
    'Grid line color: #2A2D34, 1px thin.',
    'Header text: ALL CAPS, sans-serif, color #E8E6E1.',
    'Body text: sans-serif, color #C8C7C2 primary, #878680 for secondary annotations.',
    'Vertical-center align text in every cell.',
    'Thumbnail cells (columns 2 and 3) hold the illustration only — no caption text inside the cell.',
  ].join('\n')
}

/** BOILERPLATE_FOOTER_LEFT */
export function footerLeft(p: { cutNumber: number; directorIntent: string }): string {
  const nn = String(p.cutNumber).padStart(2, '0')
  return `CUT${nn} DIRECTOR'S INTENT:\n${p.directorIntent}`
}

/** BOILERPLATE_FOOTER_RIGHT */
export function footerRight(p: {
  nextCutNumber: number | 'end'
  transitionToNext: string
}): string {
  if (p.nextCutNumber === 'end') {
    return `TRANSITION → end:\n${p.transitionToNext}`
  }
  const nn = String(p.nextCutNumber).padStart(2, '0')
  return `TRANSITION → CUT${nn}:\n${p.transitionToNext}`
}

/** BOILERPLATE_OUTPUT_RULES */
export function outputRules(p: { phase: PhaseNumber }): string {
  return [
    'OUTPUT RULES:',
    '- All text Korean primary + English in parentheses; NO Japanese characters, NO Chinese characters.',
    '- All thumbnails use the LOCKED character reference attached (when character is on-screen).',
    '- Modern Korean cinematic illustration, clean cel-shading, medium-weight outlines, crisp digital finish.',
    `- Phase ${p.phase} muted palette throughout — see VISUAL STYLE block.`,
    '- No watermarks, no logos, no signature marks, no artist tags.',
    '- No moe-childish, no chibi proportions, no idol-fanart, no anime smile baseline.',
    '- No retro halftone, no print-noise grain, no muddy tones, no over-saturation.',
    '- No fantasy creature, no magical particles (unless Phase 5-6 symbolic insert).',
    '- Output: single flat 3:2 storyboard sheet image, 1536×1024, dark surface #0F1014.',
  ].join('\n')
}

/** BOILERPLATE_FINAL_OUTPUT_CHECKLIST */
export function finalOutputChecklist(p: {
  rowCount: number
  phase: PhaseNumber
  cutNumber: number
  startTime: string
  endTime: string
  koreanTitle: string
  englishTitle: string
  cutPersona: string
  characterSignatureLine: string
  charactersOnScreenLabel: string
}): string {
  const nn = String(p.cutNumber).padStart(2, '0')
  const anchor = phaseHexAnchor(p.phase)
  return [
    'OUTPUT CHECKLIST (must satisfy ALL):',
    `✓ ${p.rowCount} distinct horizontal rows with grid lines`,
    `✓ ${p.rowCount} + ${p.rowCount} separate thumbnails (${p.rowCount} start + ${p.rowCount} end), each in its own cell`,
    '✓ NOT a panoramic merged image',
    '✓ Korean + English text only (no Japanese, no Chinese)',
    `✓ All character thumbnails identical to attached LOCKED sheet (${p.charactersOnScreenLabel})`,
    '✓ Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)',
    `✓ Phase ${p.phase} palette (${anchor}) consistent across all thumbnails`,
    `✓ ${p.characterSignatureLine}`,
    `✓ Header reads: "CUT${nn} (${p.startTime}-${p.endTime})  |  「${p.koreanTitle} / ${p.englishTitle}」  |  ${p.cutPersona}"`,
    "✓ Footer LEFT = director's intent, RIGHT = transition spec",
    '✓ No watermarks, no logos, no Japanese characters, no Chinese characters',
  ].join('\n')
}

// ─── Seedance prompt fragments ───────────────────────────────────────────────

/** BOILERPLATE_SEEDANCE_M5_LENS_SWITCH — assembles the multi-shot timeline. */
export function seedanceLensSwitchBlock(p: { subShots: SubShotSpec[] }): string {
  const lines: string[] = []
  lines.push('────────────────── MULTI-SHOT TIMELINE (M5) ──────────────────')
  lines.push('')
  for (const s of p.subShots) {
    const start = formatTimeOffset(s.startTimeOffset)
    const end = formatTimeOffset(s.endTimeOffset)
    // Sample format: "[0.0-5.0] Lens switch to <camera>, <shotType>. <action>. <visualDescription>."
    // We use the cut's English-augmented action + visual continuity.
    const action = englishifyAction(s)
    const visual = englishifyVisual(s)
    lines.push(
      `[${start}-${end}] Lens switch to ${s.cameraMovement}, ${s.shotType}. ${action}. ${visual}.`,
    )
    lines.push('')
  }
  return lines.join('\n').replace(/\n+$/, '')
}

function formatTimeOffset(t: number): string {
  // Match sample: "0.0", "5.0", "10.0" — one decimal, no trailing zero stripping.
  const rounded = Math.round(t * 10) / 10
  // Force one decimal place.
  return rounded.toFixed(1)
}

/**
 * Translate Korean actionDirection into a concise English clause for Seedance.
 * Heuristic: prefer the SubShot's startFrame English fragments; if it ends with
 * a period, drop the period; truncate to ~15-30 words.
 *
 * The Generator stores Korean prose with English connectors per pre-resolved
 * question 1; this function produces the English wrapper sentence.
 */
function englishifyAction(s: SubShotSpec): string {
  // Use the English shot description embedded in startFrame/endFrame if present,
  // otherwise fall back to a derived string.
  const startEn = extractEnglishFragment(s.startFrame)
  if (startEn) return trimEnd(startEn)
  // Fallback: a generic English wrapper around the Korean action.
  return trimEnd(`${s.shotType} shot, ${s.cameraMovement}`)
}

function englishifyVisual(s: SubShotSpec): string {
  const endEn = extractEnglishFragment(s.endFrame)
  if (endEn) return trimEnd(endEn)
  // Fallback: visual continuity cue.
  return trimEnd('Modern Korean cinematic illustration, clean cel-shading')
}

/**
 * Pull an English-leaning sentence fragment from a Korean+English mixed prose
 * line. Picks the longest run of ASCII letters/spaces/digits/punctuation,
 * trims to ~25 words.
 */
function extractEnglishFragment(prose: string): string {
  if (!prose) return ''
  // Split on Korean blocks; pick the longest English-ish chunk.
  const chunks = prose.split(/[가-힯㄰-㆏]+/)
  let best = ''
  for (const c of chunks) {
    const trimmed = c.replace(/[\s,.\-]+/g, ' ').trim()
    if (trimmed.length > best.length) best = trimmed
  }
  // Keep up to 25 words.
  const words = best.split(/\s+/).slice(0, 25)
  return words.join(' ').trim()
}

function trimEnd(s: string): string {
  return s.replace(/[\s.]+$/, '')
}

/** BOILERPLATE_AUDIO_SFX_ONLY — M3 lock. */
export function audioSfxOnlyBlock(p: { sfxList: string }): string {
  return [
    `AUDIO: SFX ONLY. Include: ${p.sfxList}.`,
    'NO music, NO BGM, NO melody, NO singing, NO dialogue, NO narration.',
    'NO instrumental track of any kind. NO score, NO ambient music bed.',
    'Music for the final MV is generated separately by Suno (track-level) and added in CapCut post-production.',
    'Seedance MUST output a silent video with only the SFX listed above.',
  ].join('\n')
}

/**
 * BOILERPLATE_NEGATIVE_PROMPT — M4 lock.
 * Variant `seedance` (default) includes audio guards; variant `mainStill`
 * drops them since main stills are static images.
 */
export function negativePromptBlock(p: {
  phase: PhaseNumber
  variant?: 'seedance' | 'mainStill'
}): string {
  const variant = p.variant ?? 'seedance'
  const phaseGuard = phaseSpecificNegative(p.phase)
  const audioGuard =
    variant === 'seedance'
      ? 'no music, no BGM, no instruments in the file, no singing, no dialogue, no narration;\n'
      : ''
  return [
    `NEGATIVE: no text overlays, no subtitles, no letters, no watermark, no logo, no signature mark;`,
    `${audioGuard}no photorealistic, no 3D render, no live-action, no CGI${variant === 'seedance' ? ', no rendered photography' : ''};`,
    'no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;',
    'no Pixiv top-1 gloss, no Japanese light-novel cover style, no Western fashion editorial;',
    'no retro halftone, no print-noise grain, no muddy tones, no over-saturation;',
    `no fantasy creature, no magical particle bloom${variant === 'seedance' ? ', no flame VFX (unless Phase-canon symbolic insert)' : ''};`,
    `${phaseGuard};`,
    'no Japanese characters, no Chinese characters (Korean and English only).',
  ].join('\n')
}
