/**
 * TROY external asset intake spec.
 *
 * Layout (TROY repo root):
 *   external_intake/
 *     E001/
 *       audio/
 *         E001_master.mp3            ← Suno Master run
 *         E001_var_a_lofi.mp3        ← Variation A Lo-fi
 *         E001_var_b_altfolk.mp3     ← Variation B Alt-folk
 *       stills/
 *         E001_cut_01.png            ← GPT Image 2 storyboard sheet, cut 1
 *         E001_cut_02.png
 *         ...
 *         E001_cut_14.png
 *       clips/
 *         E001_cut_01.mp4            ← Seedance video, cut 1 (15s max)
 *         E001_cut_02.mp4
 *         ...
 *         E001_cut_14.mp4
 *       subs/
 *         E001.srt                   ← optional burn-in subtitle (lyrics)
 *       meta.json                    ← intake log (uploaded files, timestamps)
 *
 *   export/mv/
 *     E001_final.mp4                 ← ffmpeg render output
 *
 * Filename inference rules (strict):
 *   audio:  E### + (master|var_a_lofi|var_b_altfolk).mp3
 *   stills: E### + cut_NN.(png|jpg)  (NN = 01-16)
 *   clips:  E### + cut_NN.(mp4|mov|webm)
 *   subs:   E###.srt
 */

export const INTAKE_KINDS = ['audio', 'stills', 'clips', 'subs'] as const
export type IntakeKind = (typeof INTAKE_KINDS)[number]

export const AUDIO_VARIANTS = ['master', 'var_a_lofi', 'var_b_altfolk'] as const
export type AudioVariant = (typeof AUDIO_VARIANTS)[number]

export const ACCEPT_EXT: Record<IntakeKind, string[]> = {
  audio: ['.mp3', '.wav', '.m4a'],
  stills: ['.png', '.jpg', '.jpeg', '.webp'],
  clips: ['.mp4', '.mov', '.webm'],
  subs: ['.srt', '.vtt'],
}

export const MAX_CUTS = 16

export type ParsedAsset = {
  episode: string
  kind: IntakeKind
  variant?: AudioVariant
  cut?: number
  ext: string
}

/**
 * Parse incoming filename into TROY intake schema.
 * Accepts:
 *   E001_master.mp3 → { episode: E001, kind: audio, variant: master }
 *   E001_cut_03.png → { episode: E001, kind: stills, cut: 3 }
 *   E001_cut_03.mp4 → { episode: E001, kind: clips, cut: 3 }
 *   E001.srt        → { episode: E001, kind: subs }
 * Returns null if not parseable; caller falls back to manual route prompt.
 */
export function parseFilename(name: string): ParsedAsset | null {
  const lower = name.toLowerCase()
  const dot = lower.lastIndexOf('.')
  if (dot < 0) return null
  const ext = lower.slice(dot)
  const stem = lower.slice(0, dot)

  const epMatch = stem.match(/^(e\d{3})/)
  if (!epMatch) return null
  const episode = epMatch[1].toUpperCase()
  const rest = stem.slice(epMatch[0].length).replace(/^[_-]/, '')

  if (ACCEPT_EXT.subs.includes(ext) && rest === '') {
    return { episode, kind: 'subs', ext }
  }
  if (ACCEPT_EXT.audio.includes(ext)) {
    const v = AUDIO_VARIANTS.find((x) => rest === x)
    return { episode, kind: 'audio', variant: v ?? 'master', ext }
  }
  const cutMatch = rest.match(/^cut[_-](\d{1,2})$/)
  if (cutMatch) {
    const cut = Number(cutMatch[1])
    if (cut < 1 || cut > MAX_CUTS) return null
    if (ACCEPT_EXT.stills.includes(ext)) return { episode, kind: 'stills', cut, ext }
    if (ACCEPT_EXT.clips.includes(ext)) return { episode, kind: 'clips', cut, ext }
  }
  return null
}

/**
 * Build the canonical save path under TROY/external_intake/.
 * Returns relative path (callers join with TROY_ROOT).
 */
export function intakeRelPath(p: ParsedAsset): string {
  const { episode, kind, variant, cut, ext } = p
  if (kind === 'audio') return `external_intake/${episode}/audio/${episode}_${variant ?? 'master'}${ext}`
  if (kind === 'stills') return `external_intake/${episode}/stills/${episode}_cut_${String(cut).padStart(2, '0')}${ext}`
  if (kind === 'clips') return `external_intake/${episode}/clips/${episode}_cut_${String(cut).padStart(2, '0')}${ext}`
  return `external_intake/${episode}/subs/${episode}${ext}`
}
