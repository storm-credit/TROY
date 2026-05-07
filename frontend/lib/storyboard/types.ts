/**
 * Storyboard Generator type contracts.
 * Verbatim per `frontend/design/storyboard/STORYBOARD_TEMPLATE.md §1.8`.
 *
 * The Generator emits paste-ready prompts for three downstream tools:
 *   - GPT Image 2 (storyboard sheet, 3:2 1536×1024 PNG)
 *   - Seedance 2.0 (15-second silent video)
 *   - GPT Image 2 (main still, 16:9 1920×1080 first-frame PNG)
 */

export type PhaseNumber = 1 | 2 | 3 | 4 | 5 | 6

export type PhasePalette = {
  /** Top palette HEX, dominant background tone */
  primary: string
  /** Secondary HEX, warm/highlight accent */
  accent: string
  /** Tertiary HEX, supporting shadow / glass / register tone */
  supporting: string
  /** Base HEX, signature outfit / deep outline / grid line */
  base: string
}

export type GenerateInput = {
  /** "E001" — `/^E\d{3}$/` */
  episodeId: string
  /** Song length in seconds. 210 (3:30) baseline; placeholder before final mp3 lock. */
  songLengthSec: number
  /** Optional explicit cut count override; default = clamp(ceil(songLengthSec/15), 14, 16). */
  cutOverride?: number
  /** Optional phase override; derived from episodeId if omitted. */
  phaseNumber?: PhaseNumber
}

export type SubShotSpec = {
  /** 1-based shot number within the cut (1..3 or 1..4). */
  shotNumber: number
  /** Seconds offset within the cut (e.g. 0.0). */
  startTimeOffset: number
  /** Seconds offset within the cut (e.g. 5.0). */
  endTimeOffset: number
  /** Korean visual description, 1-2 sentences. */
  startFrame: string
  /** Korean visual description, 1-2 sentences. */
  endFrame: string
  /** English camera-language phrase, 8-12 words. */
  cameraMovement: string
  /** English shot-type, 2-3 words. */
  shotType: string
  /** Korean action / direction, 18-30 chars. */
  actionDirection: string
  /** Korean lyric line(s) if vocal beats — usually "—". */
  dialogueLyrics: string
  /** English comma list, 4-8 items. */
  sfx: string
  /** English single-line music arc descriptor, 6-12 words. */
  music: string
}

export type CutSpec = {
  cutNumber: number
  startSec: number
  endSec: number
  /** Korean cut title (extracted from visual_cut_list). */
  koreanTitle: string
  /** English mirror title. */
  englishTitle: string
  /** 1-3 word emotional descriptor (e.g. "닫힘 / Closure"). */
  cutPersona: string
  subShots: SubShotSpec[]
  /** Korean, 2-3 sentences. */
  directorIntent: string
  /** Korean, 1-2 sentences. */
  transitionToNext: string
  /** Character names on-screen for this cut; empty list = atmospheric. */
  charactersOnScreen: string[]
}

export type CharacterAttachManifestEntry = {
  cutNumber: number
  attachedSheetIds: string[]
}

export type AuditReport = {
  cutBoundariesAligned: boolean
  swingedBoundaries: number[]
  rejectedSwings: number[]
  totalRunSec: number
  /** Per-cut audit warnings (M2/M3/M5/HEX/NEGATIVE). Empty array == clean. */
  warnings: string[]
  /** Substitution audit: pass/warn counts (one per cut). */
  perCut: {
    cutNumber: number
    m2Pass: boolean
    m3Pass: boolean
    m5Pass: boolean
    hexPass: boolean
    negativePass: boolean
    leakyBraces: boolean
  }[]
}

export type GenerateOutput = {
  episodeId: string
  songLengthSec: number
  phaseNumber: PhaseNumber
  cuts: CutSpec[]

  /** Length N. Paste into GPT Image 2 → 3:2 sheet PNG. */
  storyboardSheetPrompts: string[]
  /** Length N. Paste into Seedance 2.0 → 15s silent MP4. */
  seedancePrompts: string[]
  /** Length N. Paste into GPT Image 2 → 16:9 first-frame PNG. */
  mainStillPrompts: string[]

  characterAttachManifest: CharacterAttachManifestEntry[]
  audit: AuditReport
}

/**
 * Lyric-cut alignment file. Optional per-episode artifact at
 * `ops/E###_lyric_cut_alignment.json`. If missing, dialogueLyrics fields
 * default to "—".
 */
export type LyricCutAlignment = {
  episodeId: string
  songLengthSec: number
  cutCount: number
  alignments: {
    cutNumber: number
    lyricLine: string
    /** 0..1 confidence the alignment was hand-curated and trustworthy. */
    confidence: number
  }[]
}
