import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import { spawn } from 'node:child_process'
import { TROY_ROOT } from './paths'
import { ACCEPT_EXT, type AudioVariant } from './intake-spec'
import { safeJoin } from './intake'
import { logError } from './log'

export const EPISODE_RE = /^E\d{3}$/

export type RenderInput = {
  episode: string
  audioVariant?: AudioVariant
  burnSubs?: boolean
}

export type RenderCut = {
  index: number
  type: 'clip' | 'still'
  path: string
  duration: number
}

export type RenderPlan = {
  episode: string
  audioPath: string
  audioDuration: number
  cuts: RenderCut[]
  totalCutDuration: number
  outputPath: string
  subPath?: string
}

export type RenderProbe = {
  canRender: boolean
  plan?: RenderPlan
  missing: string[]
}

export type RenderResult = {
  ok: boolean
  code: number
  elapsedMs: number
}

const MAX_CLIP_DURATION = 15
const TARGET_W = 1920
const TARGET_H = 1080
const TARGET_FPS = 30

function assertEpisode(episode: string): void {
  if (!EPISODE_RE.test(episode)) {
    throw new Error(`Invalid episode id: ${episode}`)
  }
}

async function statSafe(p: string): Promise<import('node:fs').Stats | null> {
  try {
    return await fs.stat(p)
  } catch {
    // reason: file optional — used as existence probe
    return null
  }
}

async function listDirSafe(dir: string): Promise<string[]> {
  try {
    return await fs.readdir(dir)
  } catch {
    // reason: file optional — intake subdirs may not exist
    return []
  }
}

function pickByCut(files: string[], allowedExts: string[]): Map<number, string> {
  const map = new Map<number, string>()
  for (const name of files) {
    const lower = name.toLowerCase()
    const dot = lower.lastIndexOf('.')
    if (dot < 0) continue
    const ext = lower.slice(dot)
    if (!allowedExts.includes(ext)) continue
    const m = lower.match(/cut[_-](\d{1,2})\./)
    if (!m) continue
    const cut = Number(m[1])
    if (!Number.isFinite(cut) || cut < 1) continue
    if (!map.has(cut)) map.set(cut, name)
  }
  return map
}

/** Run ffprobe to get container/stream duration in seconds. */
export function ffprobeDuration(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const args = [
      '-v', 'error',
      '-show_entries', 'format=duration',
      '-of', 'default=noprint_wrappers=1:nokey=1',
      filePath,
    ]
    const child = spawn('ffprobe', args, { windowsHide: true })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (b) => { stdout += b.toString() })
    child.stderr.on('data', (b) => { stderr += b.toString() })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`ffprobe exited ${code}: ${stderr.trim()}`))
        return
      }
      const n = Number(stdout.trim())
      if (!Number.isFinite(n) || n <= 0) {
        reject(new Error(`ffprobe could not determine duration of ${filePath}: "${stdout.trim()}"`))
        return
      }
      resolve(n)
    })
  })
}

async function findAudioFile(episode: string, variant: AudioVariant): Promise<string | null> {
  const audioDir = safeJoin('external_intake', episode, 'audio')
  const files = await listDirSafe(audioDir)
  // Prefer exact: E###_<variant>.<ext>
  const wantStem = `${episode.toLowerCase()}_${variant}`
  let chosen: string | null = null
  for (const name of files) {
    const lower = name.toLowerCase()
    const dot = lower.lastIndexOf('.')
    if (dot < 0) continue
    const ext = lower.slice(dot)
    if (!ACCEPT_EXT.audio.includes(ext)) continue
    const stem = lower.slice(0, dot)
    if (stem === wantStem) {
      chosen = name
      break
    }
  }
  // Fallback: if variant is 'master', try plain E###.ext
  if (!chosen && variant === 'master') {
    for (const name of files) {
      const lower = name.toLowerCase()
      const dot = lower.lastIndexOf('.')
      if (dot < 0) continue
      const ext = lower.slice(dot)
      if (!ACCEPT_EXT.audio.includes(ext)) continue
      const stem = lower.slice(0, dot)
      if (stem === episode.toLowerCase()) {
        chosen = name
        break
      }
    }
  }
  return chosen ? path.join(audioDir, chosen) : null
}

async function findSubFile(episode: string): Promise<string | null> {
  const subsDir = safeJoin('external_intake', episode, 'subs')
  const files = await listDirSafe(subsDir)
  for (const name of files) {
    const lower = name.toLowerCase()
    if (lower.endsWith('.srt')) return path.join(subsDir, name)
  }
  return null
}

/**
 * Build a render plan: discover audio, choose per-cut clip vs still, compute durations.
 *
 * Cut selection: clip > still per cut index. Cuts ordered ascending.
 * Duration: each cut = audioDuration / cutCount, capped at MAX_CLIP_DURATION (15s).
 */
export async function planRender(input: RenderInput): Promise<RenderPlan> {
  const { episode } = input
  assertEpisode(episode)
  const audioVariant: AudioVariant = input.audioVariant ?? 'master'

  const audioPath = await findAudioFile(episode, audioVariant)
  if (!audioPath) {
    throw new Error(`No audio found for ${episode} (variant=${audioVariant})`)
  }
  const audioDuration = await ffprobeDuration(audioPath)

  const stillsDir = safeJoin('external_intake', episode, 'stills')
  const clipsDir = safeJoin('external_intake', episode, 'clips')
  const stillFiles = await listDirSafe(stillsDir)
  const clipFiles = await listDirSafe(clipsDir)

  const clipsByCut = pickByCut(clipFiles, ACCEPT_EXT.clips)
  const stillsByCut = pickByCut(stillFiles, ACCEPT_EXT.stills)

  const cutIndices = new Set<number>()
  for (const k of clipsByCut.keys()) cutIndices.add(k)
  for (const k of stillsByCut.keys()) cutIndices.add(k)
  const ordered = [...cutIndices].sort((a, b) => a - b)

  if (ordered.length === 0) {
    throw new Error(`No cuts (clips or stills) found for ${episode}`)
  }

  const perCut = Math.min(MAX_CLIP_DURATION, audioDuration / ordered.length)
  const cuts: RenderCut[] = ordered.map((idx) => {
    const clipName = clipsByCut.get(idx)
    if (clipName) {
      return {
        index: idx,
        type: 'clip',
        path: path.join(clipsDir, clipName),
        duration: perCut,
      }
    }
    const stillName = stillsByCut.get(idx)!
    return {
      index: idx,
      type: 'still',
      path: path.join(stillsDir, stillName),
      duration: perCut,
    }
  })

  const totalCutDuration = cuts.reduce((s, c) => s + c.duration, 0)
  const outputPath = safeJoin('export', 'mv', `${episode}_final.mp4`)
  const sub = input.burnSubs === false ? null : await findSubFile(episode)

  return {
    episode,
    audioPath,
    audioDuration,
    cuts,
    totalCutDuration,
    outputPath,
    subPath: sub ?? undefined,
  }
}

/** Probe an episode without rendering — returns plan + missing pieces. */
export async function probeRender(episode: string): Promise<RenderProbe> {
  assertEpisode(episode)
  const missing: string[] = []
  let plan: RenderPlan | undefined
  try {
    plan = await planRender({ episode })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    logError('render', `planRender failed for ${episode}`, e)
    missing.push(msg)
  }
  if (plan) {
    if (plan.cuts.length === 0) missing.push('no cuts')
    if (plan.audioDuration <= 0) missing.push('audio duration zero')
  }
  return {
    canRender: !!plan && plan.cuts.length > 0 && plan.audioDuration > 0,
    plan,
    missing,
  }
}

/**
 * Escape a path for use inside an ffmpeg `subtitles=` filter argument.
 * On Windows, ffmpeg's libass needs the drive colon escaped and backslashes converted.
 */
function escapeSubsFilter(p: string): string {
  // Convert backslashes to forward slashes, escape ':' that would be interpreted as filter spec separator.
  let s = p.replace(/\\/g, '/')
  s = s.replace(/:/g, '\\:')
  // Also escape single quotes inside; we will wrap in single quotes.
  s = s.replace(/'/g, "\\'")
  return s
}

/** Build the per-input filter chain that normalises a clip or still to 1920x1080@30. */
function buildPerInputFilter(cut: RenderCut, inIdx: number): string {
  const out = `v${inIdx}`
  if (cut.type === 'still') {
    // Still already loops via -loop 1 -t. Just normalise.
    return (
      `[${inIdx}:v]` +
      `scale=${TARGET_W}:${TARGET_H}:force_original_aspect_ratio=decrease,` +
      `pad=${TARGET_W}:${TARGET_H}:(ow-iw)/2:(oh-ih)/2,` +
      `setsar=1,fps=${TARGET_FPS},format=yuv420p` +
      `[${out}]`
    )
  }
  // Clip: trim with -t at input level too, then normalise.
  return (
    `[${inIdx}:v]` +
    `scale=${TARGET_W}:${TARGET_H}:force_original_aspect_ratio=decrease,` +
    `pad=${TARGET_W}:${TARGET_H}:(ow-iw)/2:(oh-ih)/2,` +
    `setsar=1,fps=${TARGET_FPS},format=yuv420p` +
    `[${out}]`
  )
}

/**
 * Execute the render plan with ffmpeg.
 *
 * Strategy: each cut becomes its own input. Per-input filter normalises to 1920x1080@30 yuv420p.
 * concat filter joins them on the video side. Audio is muxed from the audio input with -shortest.
 * Optional subtitles=<path> filter is appended after concat.
 */
export async function executeRender(
  plan: RenderPlan,
  onLog?: (line: string) => void,
): Promise<RenderResult> {
  await fs.mkdir(path.dirname(plan.outputPath), { recursive: true })

  const args: string[] = ['-y', '-hide_banner', '-loglevel', 'info']

  // Inputs: one per cut, then audio.
  for (const cut of plan.cuts) {
    if (cut.type === 'still') {
      args.push('-loop', '1', '-t', cut.duration.toFixed(3), '-i', cut.path)
    } else {
      // For clips, cap duration at input level so concat sees uniform length.
      args.push('-t', cut.duration.toFixed(3), '-i', cut.path)
    }
  }
  const audioInputIndex = plan.cuts.length
  args.push('-i', plan.audioPath)

  // Build filter graph.
  const perInput = plan.cuts.map((c, i) => buildPerInputFilter(c, i))
  const concatInputs = plan.cuts.map((_, i) => `[v${i}]`).join('')
  let videoChain = `${concatInputs}concat=n=${plan.cuts.length}:v=1:a=0[vc]`
  let finalLabel = '[vc]'

  if (plan.subPath) {
    const escaped = escapeSubsFilter(plan.subPath)
    videoChain += `;[vc]subtitles='${escaped}'[vsub]`
    finalLabel = '[vsub]'
  }

  const filterGraph = perInput.join(';') + ';' + videoChain
  args.push('-filter_complex', filterGraph)
  args.push('-map', finalLabel)
  args.push('-map', `${audioInputIndex}:a:0`)

  // Codec / output options.
  args.push(
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-r', String(TARGET_FPS),
    '-preset', 'medium',
    '-crf', '20',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-ar', '44100',
    '-ac', '2',
    '-shortest',
    '-movflags', '+faststart',
    plan.outputPath,
  )

  const start = Date.now()
  return await new Promise<RenderResult>((resolve, reject) => {
    const child = spawn('ffmpeg', args, { windowsHide: true })
    let stderrBuf = ''

    const handleData = (buf: Buffer) => {
      stderrBuf += buf.toString()
      let nl: number
      while ((nl = stderrBuf.indexOf('\n')) >= 0) {
        const line = stderrBuf.slice(0, nl).replace(/\r$/, '')
        stderrBuf = stderrBuf.slice(nl + 1)
        if (onLog) onLog(line)
      }
    }
    child.stderr.on('data', handleData)
    child.stdout.on('data', handleData)
    child.on('error', (err) => reject(err))
    child.on('close', (code) => {
      if (stderrBuf.length > 0 && onLog) onLog(stderrBuf)
      const elapsedMs = Date.now() - start
      resolve({ ok: code === 0, code: code ?? -1, elapsedMs })
    })
  })
}

/** Produce the export/mv path for an episode (validated). */
export function outputPathFor(episode: string): string {
  assertEpisode(episode)
  return safeJoin('export', 'mv', `${episode}_final.mp4`)
}

// Re-export TROY_ROOT for callers if they need it (unused presently).
export { TROY_ROOT }
// `os` imported for potential future tmp use; explicitly mark used to avoid lint warning.
void os
