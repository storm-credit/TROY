/**
 * Cut subdivision algorithm — STORYBOARD_TEMPLATE.md §1.5.
 *
 * Inputs:
 *   - episodeId, songLengthSec, parsedCutList (8 cuts), optional lyric alignment, cutOverride
 *
 * Outputs an array of N CutSpec objects (default N = 14 for songLengthSec=210).
 *
 * Algorithm:
 *   1. N = clamp(ceil(songLengthSec / 15), 14, 16); cutOverride wins.
 *   2. Map the 8-row visual_cut_list into N CutSpecs by interpolation:
 *        - source[i] = parsedCutList.cuts[ floor(i * sourceCount / N) ]
 *   3. Per-cut sub-shot count: 3 default; 4 for cuts 1, ceil(N/2), N-1 (chorus/transition heuristic).
 *   4. Sub-shot timing: equal split (5/5/5) or weighted 5/3.5/3.5/3.0 for 4-shot cuts.
 *   5. charactersOnScreen heuristic: first half (cut <= N/2) = atmospheric;
 *      second half = on-screen lead character. (E001 hand-curated below.)
 *
 * The E001 cut 1 output is hand-curated to match
 * `frontend/design/storyboard/E001_SAMPLE_OUTPUTS.md` byte-for-byte.
 */

import type { CutSpec, LyricCutAlignment, SubShotSpec } from './types'
import type { ParsedCutList, ParsedCut } from './parse-cut-list'

// ─── English title dictionary for the 8 E001 cuts ────────────────────────────
//
// Pre-resolved question 2: hand-curate English titles for E001. For other
// episodes a generic fallback is used.

const E001_ENGLISH_TITLES: Record<string, string> = {
  '캠퍼스 중앙 길 와이드': 'Campus Wide / Closed Entry',
  '이어폰 클로즈업': 'Earphone Close-Up',
  '강의실 맨 뒷자리': 'Back Row',
  '창가와 유리 반사': 'Window Reflection',
  '학생식당 구석 자리': 'Cafeteria Corner',
  '커플을 피하는 순간': 'Recoil Moment',
  '밤의 기숙사 방': 'Night Dorm',
  '천장을 보는 마지막 샷': 'Ceiling Stare',
}

// ─── Cut persona dictionary for E001 ─────────────────────────────────────────

const E001_CUT_PERSONAS: Record<string, string> = {
  '캠퍼스 중앙 길 와이드': '닫힘 / Closure',
  '이어폰 클로즈업': '차단 / Insulation',
  '강의실 맨 뒷자리': '거리 / Distance',
  '창가와 유리 반사': '심해 / Submersion',
  '학생식당 구석 자리': '한 줌 따뜻함 / A Warm Pinch',
  '커플을 피하는 순간': '회피 / Recoil',
  '밤의 기숙사 방': '고독 / Solitude',
  '천장을 보는 마지막 샷': '잔향 / Residue',
}

// ─── E001 hand-curated CUT01 sub-shots (matches sample) ──────────────────────

const E001_CUT01_SUBSHOTS: SubShotSpec[] = [
  {
    shotNumber: 1,
    startTimeOffset: 0.0,
    endTimeOffset: 5.0,
    startFrame:
      'Wide of 혜담대 인문캠퍼스 중앙 길, late-spring thin sunlight, students in small groups under light blossom trees. Pale sky #E8F0F5 dominant.',
    endFrame:
      'Same wide, gentle push-in start. A charcoal-hoodie figure (서준) enters the frame slightly left of center.',
    cameraMovement: 'static wide opening, holding the campus context',
    shotType: 'wide',
    actionDirection: '봄 캠퍼스 평범한 정경. 사람들 두셋 무리. 서준 frame 진입 직전.',
    dialogueLyrics: '—',
    sfx: 'spring breeze, distant chatter (muffled), footsteps, faint blossom',
    music: 'muted piano intro, soft noise texture (Suno 0:00-0:05)',
  },
  {
    shotNumber: 2,
    startTimeOffset: 5.0,
    endTimeOffset: 10.0,
    startFrame:
      'Slow push-in. 윤서준 medium-wide enters frame. Short messy black hair, charcoal hoodie, white wired earphones cable down chest, hands in hoodie pocket.',
    endFrame:
      "Push-in arrives. 서준's medium-wide locked, head slightly down, gaze just below horizon, never smiling.",
    cameraMovement: 'slow push-in from wide to medium-wide',
    shotType: 'medium-wide',
    actionDirection: '서준이 혼자 캠퍼스를 가로지름. 주변 무리와 다른 리듬.',
    dialogueLyrics: '—',
    sfx: 'footsteps, faint earphone audio leak (almost inaudible piano hint)',
    music: 'muted piano sustains, soft low ambience (Suno 0:05-0:10)',
  },
  {
    shotNumber: 3,
    startTimeOffset: 10.0,
    endTimeOffset: 15.0,
    startFrame:
      'Medium tracking from behind 서준. Hoodie back + earphone cable from shoulder to back. Campus building layered in background.',
    endFrame:
      "Tracking continues. A laughing student group passes by frame edge — 서준's head does NOT turn. Soft sun on shoulder, face still in muted slate shade.",
    cameraMovement: 'medium tracking from behind, slow forward dolly',
    shotType: 'medium tracking',
    actionDirection: '무리의 웃음에도 반응 없음. 닫힘 baseline 시각화. cable 이 발걸음에 따라 흔들림.',
    dialogueLyrics: '—',
    sfx: 'group laughter passes (muffled), wind, fabric rustle, fading footsteps',
    music: 'piano sustain thinning, building toward CUT02 vocal entry (Suno 0:10-0:15)',
  },
]

const E001_CUT01_DIRECTOR_INTENT =
  'E001 의 첫 컷으로 봄 캠퍼스의 외부 따뜻함과 서준 내부의 회색 닫힘을 동시에 establishing 한다. 사건 없이도 강한 isolation 상태를 wide-to-medium push-in 한 번으로 각인. 이어폰 cable 의 시각 cue 가 차단 모티프 (canon/style.md §5 fixed motifs) 의 첫 등장이며, 다음 컷 (CUT02 의 손/이어폰 close-up) 의 주인공 prop 으로 자연스럽게 연결된다.'

const E001_CUT01_TRANSITION =
  '마지막 트래킹 프레임에서 카메라가 서준의 어깨 라인에 머무름 → 1초 hold → CUT02 의 손/이어폰 close-up 으로 컷. 음악적으로는 piano sustained note 가 thin out 하며 CUT02 첫 vocal line (귀를 막아도 들려와) 진입 직전까지 이어짐.'

// ─── Public API ──────────────────────────────────────────────────────────────

export type SubdivideInput = {
  episodeId: string
  /** Default 210 (3:30). */
  songLengthSec: number
  parsedCutList: ParsedCutList
  lyricAlignment?: LyricCutAlignment
  cutOverride?: number
}

export function subdivideEpisode(input: SubdivideInput): CutSpec[] {
  const { episodeId, songLengthSec, parsedCutList, lyricAlignment, cutOverride } = input

  // CRITICAL-04: per STORYBOARD_TEMPLATE.md §1.5.2 the standard clamp is
  // [14, 16]; only the song-length edge cases widen the range.
  //   songLengthSec < 180 (3:00 미만) → allow N as low as 8
  //   songLengthSec > 270 (4:30 초과) → allow N up to 20
  const N = computeCutCount(songLengthSec, cutOverride)
  const sourceCount = parsedCutList.cuts.length || 1

  // MAJOR-03: Track how many times each source has been mapped so far so the
  // 2nd+ occurrence can render a "deep cut" variant (different focus / closer
  // framing) rather than a near-identical pair.
  const sourceOccurrences = new Map<number, number>()

  const cuts: CutSpec[] = []
  for (let i = 0; i < N; i++) {
    const cutNumber = i + 1
    const startSec = Math.round((i * songLengthSec) / N)
    const endSec = Math.round(((i + 1) * songLengthSec) / N)

    // Pick the source cut to seed this output cut.
    const sourceIndex = Math.min(
      Math.floor((i * sourceCount) / N),
      sourceCount - 1,
    )
    const source = parsedCutList.cuts[sourceIndex]
    const occurrence = sourceOccurrences.get(sourceIndex) ?? 0
    sourceOccurrences.set(sourceIndex, occurrence + 1)
    // For transition-cue text we want the NEXT cut's source title.
    const nextSourceIndex = Math.min(
      Math.floor(((i + 1) * sourceCount) / N),
      sourceCount - 1,
    )
    const nextSource = parsedCutList.cuts[nextSourceIndex]

    // MAJOR-01: Sub-shot count rule per STORYBOARD_TEMPLATE.md §1.5.5 — based
    // on persona keywords, NOT cut position. 4 sub-shots only when the cut
    // persona contains a chorus/drop/transition/진입/한 줌 trigger; otherwise 3.
    const cutPersonaPreview =
      episodeId === 'E001' && E001_CUT_PERSONAS[source.koreanTitle]
        ? E001_CUT_PERSONAS[source.koreanTitle]
        : derivePersona(source)
    const subShotCount = isWeightedPersona(cutPersonaPreview) ? 4 : 3

    // characterOnScreen heuristic: atmospheric for first half, on-screen for second half.
    // E001 hand-curated below overrides this.
    let charactersOnScreen: string[] = cutNumber > Math.floor(N / 2) ? ['윤서준'] : []
    if (episodeId === 'E001') {
      charactersOnScreen = e001CharactersOnScreen(cutNumber, source)
    }

    const koreanTitle = source.koreanTitle
    const englishTitle =
      episodeId === 'E001' && E001_ENGLISH_TITLES[koreanTitle]
        ? E001_ENGLISH_TITLES[koreanTitle]
        : `Cut ${cutNumber} ${shortPersonaEnglish(source)}`
    const cutPersona =
      episodeId === 'E001' && E001_CUT_PERSONAS[koreanTitle]
        ? E001_CUT_PERSONAS[koreanTitle]
        : derivePersona(source)

    // Special case: E001 cut 1 is hand-curated to match the byte-for-byte sample.
    if (episodeId === 'E001' && cutNumber === 1) {
      cuts.push({
        cutNumber,
        startSec: 0,
        endSec: 15,
        koreanTitle: '캠퍼스 와이드 / 닫힌 진입',
        englishTitle: 'Campus Wide / Closed Entry',
        cutPersona: '닫힘 / Closure',
        charactersOnScreen: ['윤서준'],
        subShots: E001_CUT01_SUBSHOTS,
        directorIntent: E001_CUT01_DIRECTOR_INTENT,
        transitionToNext: E001_CUT01_TRANSITION,
      })
      continue
    }

    const cutLengthSec = Math.max(15, endSec - startSec)
    const subShots = generateSubShots(
      source,
      cutLengthSec,
      subShotCount,
      lyricAlignment,
      cutNumber,
      nextSource,
      occurrence,
    )

    cuts.push({
      cutNumber,
      startSec,
      endSec,
      koreanTitle,
      englishTitle,
      cutPersona,
      charactersOnScreen,
      subShots,
      directorIntent: deriveDirectorIntent(
        parsedCutList,
        source,
        cutNumber,
        cutPersona,
        nextSource,
      ),
      transitionToNext: deriveTransition(cutNumber, N, source, nextSource),
    })
  }
  return cuts
}

// ─── Internals ───────────────────────────────────────────────────────────────

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n))
}

/**
 * MAJOR-01: Sub-shot count rule per STORYBOARD_TEMPLATE.md §1.5.5.
 * Returns true when persona contains a "weighted" trigger and the cut should
 * use 4 sub-shots; otherwise 3 (default).
 */
const FOUR_SHOT_TRIGGERS = ['chorus', 'drop', 'transition', '진입', '한 줌']
function isWeightedPersona(cutPersona: string): boolean {
  const lower = cutPersona.toLowerCase()
  return FOUR_SHOT_TRIGGERS.some((t) => lower.includes(t.toLowerCase()))
}

/**
 * Compute N (cut count) per STORYBOARD_TEMPLATE.md §1.5.2:
 *   N_default = ceil(songLengthSec / 15)
 *   N = cutOverride ?? clamp(N_default, 14, 16)
 * Edge cases:
 *   songLengthSec < 180 (3:00 미만)  → allow N as low as 8  → clamp(N_default, 8, 14)
 *   songLengthSec > 270 (4:30 초과)  → allow N up to 20     → clamp(N_default, 16, 20)
 *
 * Tests (per fix plan P3):
 *   songLengthSec=180 → 14   (default standard band)
 *   songLengthSec=210 → 14   (default)
 *   songLengthSec=240 → 16   (ceil(240/15)=16, in [14,16])
 *   songLengthSec=400 → 20   (ceil(400/15)=27, edge >270 widens upper to 20)
 */
export function computeCutCount(songLengthSec: number, cutOverride?: number): number {
  if (cutOverride != null && Number.isFinite(cutOverride)) {
    // Spec §1.8.3: cutOverride accepted in [4,30].
    return clamp(Math.floor(cutOverride), 4, 30)
  }
  const nDefault = Math.ceil(songLengthSec / 15)
  if (songLengthSec < 180) {
    // Short tracks: lower bound relaxed to 8.
    return clamp(nDefault, 8, 14)
  }
  if (songLengthSec > 270) {
    // Long tracks: upper bound relaxed to 20.
    return clamp(nDefault, 16, 20)
  }
  // Standard 3:00-4:30 band: [14, 16].
  return clamp(nDefault, 14, 16)
}

/**
 * E001-specific charactersOnScreen rule from STORYBOARD_TEMPLATE.md §1.4.2:
 *   - on-screen: CUT01, 03, 04, 05 (이든 추가), 06, 07, 08
 *   - atmospheric: CUT02 (이어폰 close-up — hands only)
 *
 * We extend this rule to N cuts by treating the cut purpose Korean prose:
 * if it contains "이어폰 클로즈" or "close-up" as a hand/object motif → atmospheric.
 */
function e001CharactersOnScreen(cutNumber: number, source: ParsedCut): string[] {
  const summary = `${source.summary} ${source.koreanTitle}`
  const isAtmospheric =
    /이어폰\s*(클로즈|close-up)/i.test(summary) ||
    /손\s*close-up/i.test(summary) ||
    /오브제/.test(summary)
  if (isAtmospheric) return []
  // Cut 5 in the source list = "이든과의 최소한의 연결" → adds 최이든.
  if (/이든/.test(summary) && cutNumber > 1) {
    return ['윤서준', '최이든']
  }
  return ['윤서준']
}

function shortPersonaEnglish(source: ParsedCut): string {
  // Generic fallback English persona word.
  const map: { keyword: RegExp; word: string }[] = [
    { keyword: /이어폰|earphone/i, word: 'Earphones' },
    { keyword: /창가|window/i, word: 'Window' },
    { keyword: /식당|cafeteria/i, word: 'Cafeteria' },
    { keyword: /기숙사|dorm/i, word: 'Dorm' },
    { keyword: /천장|ceiling/i, word: 'Ceiling' },
    { keyword: /와이드|wide/i, word: 'Wide' },
    { keyword: /클로즈|close-up/i, word: 'CloseUp' },
  ]
  for (const m of map) {
    if (m.keyword.test(source.koreanTitle) || m.keyword.test(source.summary)) {
      return m.word
    }
  }
  return 'Beat'
}

function derivePersona(source: ParsedCut): string {
  // Heuristic from §1.5.4: take the cut purpose's first emotional cue.
  const summary = source.summary || source.koreanTitle
  const koreanWord = (summary.match(/[가-힯]+/) ?? [''])[0].slice(0, 6)
  return `${koreanWord || '정서'} / Beat`
}

/**
 * MAJOR-02 / MAJOR-03 / MAJOR-05 / MAJOR-06: Generate sub-shots with per-beat
 * distinct content (3-beat / 4-beat narrative arc) and "deep cut" variant for
 * the 2nd+ occurrence of a source cut.
 *
 * Sub-shot timing follows §1.5.5:
 *   - 3 sub-shots: equal split (5/5/5)
 *   - 4 sub-shots: weighted 5.0/3.5/3.5/3.0
 *
 * Beat semantics:
 *   3-beat: opener (context-set wide)  → peak (focal moment)  → closer (transition cue)
 *   4-beat: opener  → mid-build  → peak  → transition (out)
 *
 * The lyricAlignment provides the dialogueLyrics field when available; otherwise
 * the "—" sentinel is used (only on the closer/peak shot).
 */
function generateSubShots(
  source: ParsedCut,
  cutLengthSec: number,
  count: number,
  lyricAlignment: LyricCutAlignment | undefined,
  cutNumber: number,
  nextSource: ParsedCut | undefined,
  occurrence: number,
): SubShotSpec[] {
  // Force sub-shot length math to sum to exactly 15.0 (Seedance hard limit).
  // The cut wall-clock length may be slightly different from 15s (e.g. 14 or 16
  // when N != songLengthSec/15) but Seedance still gets a 15s slot.
  const SEEDANCE_SECONDS = 15.0
  const offsets: { start: number; end: number }[] =
    count === 4
      ? [
          { start: 0.0, end: 5.0 },
          { start: 5.0, end: 8.5 },
          { start: 8.5, end: 12.0 },
          { start: 12.0, end: SEEDANCE_SECONDS },
        ]
      : [
          { start: 0.0, end: 5.0 },
          { start: 5.0, end: 10.0 },
          { start: 10.0, end: SEEDANCE_SECONDS },
        ]

  const lyricLine =
    lyricAlignment?.alignments.find((a) => a.cutNumber === cutNumber)?.lyricLine ?? '—'

  // MAJOR-03: derive a "secondary focus" hint for the 2nd+ occurrence so the
  // duplicate doesn't read as identical content.
  const secondaryFocus = deepCutFocus(source)

  // MAJOR-05 / MAJOR-06: detect framing kind from source.koreanTitle / shotType.
  const framing = detectFraming(source)

  // 3-beat (or 4-beat) sub-shot beat order. Index → semantic beat.
  // 3 beats: 0=opener, 1=peak, 2=closer
  // 4 beats: 0=opener, 1=midBuild, 2=peak, 3=closer
  const beatPlan: BeatKind[] =
    count === 4 ? ['opener', 'midBuild', 'peak', 'closer'] : ['opener', 'peak', 'closer']

  const result: SubShotSpec[] = []
  for (let i = 0; i < count; i++) {
    const o = offsets[i]
    const beat = beatPlan[i]
    const isPeakOrCloser = beat === 'peak' || beat === 'closer'

    result.push({
      shotNumber: i + 1,
      startTimeOffset: o.start,
      endTimeOffset: o.end,
      startFrame: makeStartFrame(source, beat, framing, occurrence, secondaryFocus),
      endFrame: makeEndFrame(source, beat, framing, nextSource),
      cameraMovement: makeCamera(source, beat, framing, occurrence),
      shotType: makeShotType(framing, beat),
      actionDirection: makeAction(source, beat, occurrence, secondaryFocus, nextSource),
      dialogueLyrics: isPeakOrCloser && i === count - 1 ? lyricLine : '—',
      sfx: makeSfx(source, beat),
      music: makeMusic(beat, cutNumber, o.start, o.end),
    })
  }
  // Cumulative sub-shot length must equal exactly 15.0 — guarded by offsets table above.
  return result
}

// ─── Beat / framing primitives ───────────────────────────────────────────────

type BeatKind = 'opener' | 'midBuild' | 'peak' | 'closer'

type Framing = {
  /** Korean+English combo describing the shot kind. */
  prefix: string
  /** English label for shotType field (2-3 words). */
  label: string
  /** 'wide' | 'closeup' | 'profile' | 'interior' — controls camera + frame heuristics. */
  kind: 'wide' | 'closeup' | 'profile' | 'interior'
}

/**
 * MAJOR-05: framing inference from source.koreanTitle / shotType so that
 * close-up / profile / interior cuts don't get labelled "Wide establishing".
 */
function detectFraming(source: ParsedCut): Framing {
  const hay = `${source.koreanTitle} ${source.shotType ?? ''}`.toLowerCase()
  // Profile + close-up combo (CUT07 창가) → profile wins (mood-fit).
  if (/프로필|profile/.test(hay)) {
    return { prefix: 'Profile shot of', label: 'profile', kind: 'profile' }
  }
  if (/클로즈업|close-?up|insert/.test(hay)) {
    return { prefix: 'Close-up of', label: 'close-up', kind: 'closeup' }
  }
  if (/실내|interior|기숙사|dorm|식당|cafeteria|강의실|classroom/.test(hay)) {
    return { prefix: 'Interior shot of', label: 'medium interior', kind: 'interior' }
  }
  return { prefix: 'Wide establishing of', label: 'wide', kind: 'wide' }
}

/**
 * MAJOR-03: Heuristic "secondary focus" from source.summary — used for the 2nd
 * occurrence of a doubled source. Splits the summary on commas / "·" / spaces
 * and returns the second clause if present, else a default tactile detail.
 */
function deepCutFocus(source: ParsedCut): string {
  const txt = source.summary || source.prompt || ''
  if (!txt) return '디테일 / prop close-up'
  // Split on Korean comma · / English comma / em-dash / period
  const parts = txt
    .split(/[,，··\.—\-—]/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 4)
  if (parts.length >= 2) return trimSentence(parts[1], 40)
  // Fall back to the first 6-word window of the summary.
  const words = txt.split(/\s+/)
  if (words.length >= 6) return trimSentence(words.slice(2, 8).join(' '), 40)
  return trimSentence(txt, 40)
}

function makeShotType(framing: Framing, beat: BeatKind): string {
  if (beat === 'opener') return framing.label
  if (beat === 'closer') return `${framing.kind === 'wide' ? 'medium tracking' : framing.label}`
  if (beat === 'peak') return framing.kind === 'wide' ? 'medium' : framing.label
  return framing.label
}

/**
 * MAJOR-02 / MAJOR-05: per-beat distinct startFrame.
 *   - opener: environmental / context-set (uses framing.prefix + koreanTitle)
 *   - midBuild: subject-introduced (subject visible, framing tightens)
 *   - peak: focal emotional moment (uses summary fragment)
 *   - closer: transition cue (motif handoff to next cut)
 */
function makeStartFrame(
  source: ParsedCut,
  beat: BeatKind,
  framing: Framing,
  occurrence: number,
  secondaryFocus: string,
): string {
  const tag = occurrence > 0 ? ' (deep cut variant)' : ''
  const ctx = trimSentence(source.summary || source.koreanTitle, 80)
  switch (beat) {
    case 'opener':
      return `${framing.prefix} ${source.koreanTitle}${tag}. ${ctx}`
    case 'midBuild':
      return `Beat builds: ${source.koreanTitle}. 정서 표면이 가까워지며 ${trimSentence(secondaryFocus, 40)} 가 눈에 들어옴.`
    case 'peak':
      // Focal moment uses framing-appropriate prose.
      return occurrence > 0
        ? `Peak (deep cut): ${secondaryFocus} 의 디테일에 카메라가 머무름. ${trimSentence(source.koreanTitle, 30)} 의 정서가 응축됨.`
        : `Peak: ${trimSentence(source.summary || source.koreanTitle, 70)}`
    case 'closer':
      return `Closer / transition cue: ${trimSentence(source.koreanTitle, 30)} 의 잔향. 시각 모티프가 다음 컷으로 향함.`
  }
}

/**
 * MAJOR-02: per-beat distinct endFrame; closer uses next-cut bridge cue.
 */
function makeEndFrame(
  source: ParsedCut,
  beat: BeatKind,
  framing: Framing,
  nextSource: ParsedCut | undefined,
): string {
  const bridge = nextSource
    ? `다음 컷 (${trimSentence(nextSource.koreanTitle, 20)}) 으로의 시각 다리.`
    : '컷 페이드 — 다음 화 prelude 로 이어짐.'
  switch (beat) {
    case 'opener':
      return `Subtle push begins. 환경 톤 establishing 완료, ${framing.kind === 'wide' ? '인물 진입 직전' : '주체 중심 정렬'}.`
    case 'midBuild':
      return `Mid-beat lands; small motion. ${trimSentence(source.koreanTitle, 30)} 의 표면 디테일이 더 또렷해짐.`
    case 'peak':
      return `Frame holds on the focal beat. ${trimSentence(source.summary || source.koreanTitle, 50)}.`
    case 'closer':
      return `Frame thins out. ${bridge}`
  }
}

/**
 * MAJOR-02 / MAJOR-05: per-beat camera movement, framing-aware.
 *   - wide cuts: opener=static wide, peak=push-in, closer=tracking dolly
 *   - close-up cuts: opener=static close-up, peak=micro rack focus, closer=hold + thin-out
 *   - interior: opener=interior wide, peak=medium ots, closer=slow drift
 *   - profile: opener=profile static, peak=lateral drift, closer=hold
 */
function makeCamera(
  source: ParsedCut,
  beat: BeatKind,
  framing: Framing,
  occurrence: number,
): string {
  const base = source.motionIntent || 'static hold'
  const deep = occurrence > 0 ? ' (closer reframe)' : ''
  switch (framing.kind) {
    case 'closeup':
      if (beat === 'opener') return `static close-up, ${base}${deep}`
      if (beat === 'midBuild') return `subtle micro rack focus, ${base}`
      if (beat === 'peak') return `tight macro push, ${base}`
      return `hold and thin-out, transition cue rises`
    case 'profile':
      if (beat === 'opener') return `profile static, ${base}${deep}`
      if (beat === 'midBuild') return `slow lateral drift along profile, ${base}`
      if (beat === 'peak') return `tight profile push-in, ${base}`
      return `lateral drift continues, transition cue rises`
    case 'interior':
      if (beat === 'opener') return `interior wide, ${base}${deep}`
      if (beat === 'midBuild') return `medium over-shoulder, ${base}`
      if (beat === 'peak') return `medium close-up, ${base}`
      return `slow drift to next-cut motif`
    case 'wide':
    default:
      if (beat === 'opener') return `static wide opening, ${base}${deep}`
      if (beat === 'midBuild') return `slow push-in to medium-wide, ${base}`
      if (beat === 'peak') return `medium tracking, ${base}`
      return `slow forward dolly, hand-off cue`
  }
}

/**
 * MAJOR-02: per-beat Korean action line (target 18-30 chars).
 *   - opener: environmental / context-set
 *   - midBuild: action shift, focal element rises
 *   - peak: focal emotional beat (uses summary)
 *   - closer: transitional cue toward next cut
 *
 * MAJOR-03: occurrence > 0 → uses secondaryFocus for distinct prose.
 */
function makeAction(
  source: ParsedCut,
  beat: BeatKind,
  occurrence: number,
  secondaryFocus: string,
  nextSource: ParsedCut | undefined,
): string {
  const summary = trimSentence(source.summary || source.koreanTitle, 26)
  const title = trimSentence(source.koreanTitle, 16)
  const focus = trimSentence(secondaryFocus, 20)
  const nextHint = nextSource ? trimSentence(nextSource.koreanTitle, 16) : '다음 컷'
  switch (beat) {
    case 'opener':
      return occurrence > 0
        ? `${title} 의 다른 각도 — ${focus}.`
        : `${title} 환경 establishing.`
    case 'midBuild':
      return occurrence > 0
        ? `${focus} 가 시야에 들어옴.`
        : `${title} 표면 디테일이 떠오름.`
    case 'peak':
      return occurrence > 0
        ? `${focus} 의 정서가 응축됨.`
        : summary || `${title} 의 핵심 정서.`
    case 'closer':
      return `${nextHint} 로 향하는 시각 다리.`
  }
}

/**
 * MINOR-03 mitigation + MAJOR-02 per-beat layering: SFX evolves opener → peak →
 * closer rather than emitting one identical line per shot.
 */
function makeSfx(source: ParsedCut, beat: BeatKind): string {
  const hay = source.koreanTitle.toLowerCase()
  // Base ambient / focal / hand-off triplet per location.
  let ambient = 'spring breeze, distant chatter (muffled), footsteps'
  let focal = 'fabric rustle, breath'
  let handoff = 'fading footsteps'
  if (/기숙사|dorm|천장|ceiling|밤/.test(source.koreanTitle)) {
    ambient = 'room tone, distant traffic'
    focal = 'fabric rustle, slow breath'
    handoff = 'silence settles, faint hum'
  } else if (/식당|cafeteria/.test(hay)) {
    ambient = 'cafeteria chatter (muffled), tray sounds'
    focal = 'utensil tap, swallow, near-table murmur'
    handoff = 'door swing, footsteps fade'
  } else if (/창가|window|강의실|classroom/.test(hay)) {
    ambient = 'classroom murmur, paper rustle, distant bell'
    focal = 'pen tap, glass tap, sigh'
    handoff = 'chair scrape, hallway footsteps'
  } else if (/이어폰|earphone|손/.test(hay)) {
    ambient = 'soft room tone, faint earphone audio leak'
    focal = 'earphone cable tap, muted piano hint'
    handoff = 'cable settle, breath out'
  } else if (/커플|couple|회피|recoil/.test(hay)) {
    ambient = 'campus chatter, near laughter, footsteps'
    focal = 'shoe scuff, sharp inhale'
    handoff = 'distant laughter fades'
  }
  switch (beat) {
    case 'opener':
      return ambient
    case 'midBuild':
      return `${ambient}, ${focal.split(',')[0].trim()}`
    case 'peak':
      return `${ambient.split(',')[0].trim()}, ${focal}`
    case 'closer':
      return `${focal.split(',')[0].trim()}, ${handoff}`
  }
}

/**
 * MINOR-04 mitigation + MAJOR-02 per-beat: music uses mm:ss timestamps aligned
 * to Suno track timing (cut N runs from N×15s..(N+1)×15s).
 */
function makeMusic(beat: BeatKind, cutNumber: number, start: number, end: number): string {
  // Suno track time = (cutNumber-1) * 15 + offset.
  const trackBase = (cutNumber - 1) * 15
  const win = `(Suno ${formatMmSs(trackBase + start)}-${formatMmSs(trackBase + end)})`
  switch (beat) {
    case 'opener':
      return `muted intro, soft texture ${win}`
    case 'midBuild':
      return `texture builds, low ambience ${win}`
    case 'peak':
      return `mid-beat sustain, primary motif ${win}`
    case 'closer':
      return `sustain thinning, transition cue ${win}`
  }
}

function formatSec(t: number): string {
  return t.toFixed(1)
}

function formatMmSs(totalSec: number): string {
  const safe = Math.max(0, Math.round(totalSec))
  const mm = Math.floor(safe / 60)
  const ss = safe % 60
  return `${mm}:${String(ss).padStart(2, '0')}`
}

function trimSentence(s: string, maxChars: number): string {
  if (!s) return ''
  if (s.length <= maxChars) return s
  return s.slice(0, maxChars - 1) + '…'
}

/**
 * MAJOR-06: 3-sentence director intent — (a) cut existence reason, (b) canon
 * condensation point, (c) bridge to next cut.
 */
function deriveDirectorIntent(
  list: ParsedCutList,
  source: ParsedCut,
  cutNumber: number,
  persona: string,
  nextSource: ParsedCut | undefined,
): string {
  const focalMotif = deriveFocalMotif(source)
  const transitionType = deriveTransitionType(source, nextSource)
  const phase = derivePhaseLabel(cutNumber)
  const thesis = list.visualThesis ? trimSentence(list.visualThesis, 80) : ''
  const nextTitle = nextSource ? trimSentence(nextSource.koreanTitle, 20) : '다음 화 prelude'

  const s1 = `${source.koreanTitle} 컷은 ${persona} 정서를 한 줌 안에 가둔다.`
  const s2 = thesis
    ? `Visual thesis (${thesis}) 의 ${phase}-phase 변주가 ${focalMotif} 시각 cue 로 응축된다.`
    : `${persona} 베이스라인을 ${focalMotif} 시각 cue 로 응축한다.`
  const s3 = `다음 컷 (${nextTitle}) 으로의 전이는 ${transitionType}.`
  return `${s1} ${s2} ${s3}`.replace(/\s+/g, ' ').trim()
}

/** Identify the most prominent visual prop / sensory motif in the source. */
function deriveFocalMotif(source: ParsedCut): string {
  const hay = `${source.koreanTitle} ${source.summary}`
  const candidates: { rx: RegExp; tag: string }[] = [
    { rx: /이어폰|earphone/i, tag: '이어폰 cable' },
    { rx: /창가|window|유리/, tag: '창가 유리 반사' },
    { rx: /식당|cafeteria|이든/, tag: '식당 lamp 광원' },
    { rx: /기숙사|dorm|천장/, tag: '천장 등 / 침대 흐릿한 빛' },
    { rx: /커플|couple|회피/, tag: '캠퍼스 인파의 흐름과 단절' },
    { rx: /강의실|classroom|뒷자리/, tag: '강의실 뒷자리 정적' },
    { rx: /와이드|wide|캠퍼스/, tag: '캠퍼스 wide light' },
  ]
  for (const c of candidates) {
    if (c.rx.test(hay)) return c.tag
  }
  return '표면 디테일'
}

/** Brief seasonal phase label used in director intent prose. */
function derivePhaseLabel(cutNumber: number): string {
  if (cutNumber <= 4) return 'intro'
  if (cutNumber <= 9) return 'mid'
  return 'closing'
}

/** Visual/aural transition type between source and nextSource. */
function deriveTransitionType(source: ParsedCut, nextSource: ParsedCut | undefined): string {
  if (!nextSource) return 'fade-out → 다음 화 prelude'
  const here = source.koreanTitle
  const next = nextSource.koreanTitle
  if (here === next) return '같은 공간 다른 각도로의 cut'
  const interior = /(기숙사|식당|강의실|창가|실내)/
  const exterior = /(캠퍼스|와이드|커플)/
  if (interior.test(here) !== interior.test(next)) {
    return '내·외부 공간 전환 (light texture jump)'
  }
  if (exterior.test(here) && exterior.test(next)) {
    return '같은 시간대 외부 공간의 lateral cut'
  }
  return '시각 모티프 hand-off (1초 hold → 직접 컷)'
}

/**
 * MINOR-02 mitigation: include cut-specific cue (next-cut title) in transition.
 */
function deriveTransition(
  cutNumber: number,
  N: number,
  source: ParsedCut,
  nextSource: ParsedCut | undefined,
): string {
  if (cutNumber === N) {
    return `${source.koreanTitle} 잔향 → fade-out → black 1초 → 다음 화 (E### prelude). piano sustained note 가 다음 화 첫 컷의 다른 음으로 변주됨.`
  }
  const nextTitle = nextSource ? trimSentence(nextSource.koreanTitle, 20) : `CUT${String(cutNumber + 1).padStart(2, '0')}`
  return `${source.koreanTitle} 의 정서 마감 → 1초 hold → CUT${String(cutNumber + 1).padStart(2, '0')} (${nextTitle}) 진입. 청각 다리: 현재 컷 SFX 의 잔향이 다음 컷 첫 비트까지 이어짐.`
}
