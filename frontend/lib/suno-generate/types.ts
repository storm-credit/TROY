/**
 * Type contracts for the Suno paste card generator.
 * Mirrors the structure of the v8 hand-curated E001 paste card so the
 * existing SunoPastePanel renders both anchored and generated cards.
 */

export type LaneKey =
  | 'korean-indie-folk'
  | 'acoustic-ballad'
  | 'dream-pop'
  | 'lofi-bedroom'
  | 'bossa-folk'
  | 'ambient-piano'
  | 'folk-electronic'
  | 'k-soul-quiet'
  | 'chamber-pop'
  | '90s-vintage-ballad'

export type LaneSpec = {
  key: LaneKey
  nameKo: string
  nameEn: string
  bpmRange: { min: number; max: number; sweet: number }
  /**
   * Master style template (paste-ready, 600-850 chars). The string contains
   * a `{bpm}` placeholder substituted at generation time.
   */
  styleBlockMaster: string
  /**
   * Lane-specific Var A swap rules (replace BPM line with this swap).
   * The swap MAY contain `{bpm-N}` or `{bpm+N}` for relative BPM;
   * resolved at generation time.
   */
  varASwap: {
    target: string  // exact substring to replace in master
    replacement: string  // new line (with {bpm} placeholder for delta BPM)
  }[]
  varBSwap: {
    target: string
    replacement: string
  }[]
  /**
   * Optional second-pass replacement for Var B (e.g., snare ghost line tweak).
   */
  varBExtraSwap?: {
    target: string
    replacement: string
  }[]
}

export type EpisodeAssignment = {
  episodeId: string
  phase: number
  chapter: string
  primaryLane: LaneKey
  bpmMaster: number
  emotionalAnchor: string
  chorusEmotionLine: string | null
  lyricImageSeeds: string[]
  albumTrackFlag: boolean
  albumFunctionName?: string
  notes?: string
}

export type AssignmentDoc = {
  schemaVersion: number
  anchorEpisode: string
  albumTracks: string[]
  episodes: EpisodeAssignment[]
}

export type GeneratedPasteCard = {
  episodeId: string
  isAnchor: boolean
  laneKey: LaneKey
  phase: number
  bpmMaster: number
  uiSettings: { label: string; value: string }[]
  lyrics: string
  masterStyle: string
  varALofiStyle: string
  varBAltfolkStyle: string
  metadata: {
    chorusEmotionLine: string | null
    emotionalAnchor: string
    albumTrackFlag: boolean
    albumFunctionName?: string
  }
}

export type GenerateInput = {
  episodeId: string
  bpmOverride?: number
  laneOverride?: LaneKey
}
