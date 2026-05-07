import fs from 'node:fs/promises'
import path from 'node:path'
import { TROY_ROOT, safeJoin as safeJoinFromPaths } from './paths'
import { AUDIO_VARIANTS, type AudioVariant } from './intake-spec'
import { logError } from './log'

/** Episode IDs must match this pattern; validated at every public entry point. */
const EPISODE_RE = /^E\d{3}$/

function assertEpisode(id: string): void {
  if (!EPISODE_RE.test(id)) throw new Error(`Invalid episode id: ${id}`)
}

export type IntakeAudioFile = {
  variant: AudioVariant | string
  name: string
  sizeBytes: number
  savedAt: string | null
}

export type IntakeStillFile = {
  cut: number
  name: string
  sizeBytes: number
}

export type IntakeClipFile = {
  cut: number
  name: string
  sizeBytes: number
}

export type IntakeSubFile = {
  name: string
  sizeBytes: number
}

export type IntakeState = {
  audio: IntakeAudioFile[]
  stills: IntakeStillFile[]
  clips: IntakeClipFile[]
  subs: IntakeSubFile | null
}

export type MetaEntry = {
  savedAt: string
  originalName: string
  kind: string
  variant?: string
  cut?: number
  sizeBytes: number
}

type Meta = { entries: MetaEntry[] }

/**
 * Resolve a path against TROY_ROOT, ensuring it stays inside the root.
 * Throws if the resolved path escapes via `..` or absolute traversal.
 * Implementation lives in lib/paths.ts; re-exported here for back-compat.
 */
export function safeJoin(...segments: string[]): string {
  return safeJoinFromPaths(...segments)
}

// Keep TROY_ROOT accessible to callers who import it from here (back-compat).
export { TROY_ROOT }

async function statSafe(p: string): Promise<import('node:fs').Stats | null> {
  try {
    return await fs.stat(p)
  } catch {
    // reason: file optional — intake dirs may not exist yet
    return null
  }
}

async function listDirSafe(dir: string): Promise<string[]> {
  try {
    return await fs.readdir(dir)
  } catch {
    // reason: file optional — intake subdirs created on first upload
    return []
  }
}

function parseCutFromName(name: string): number | null {
  const m = name.toLowerCase().match(/cut[_-](\d{1,2})\./)
  if (!m) return null
  const n = Number(m[1])
  if (!Number.isFinite(n)) return null
  return n
}

function parseAudioVariantFromName(name: string, episode: string): AudioVariant | string {
  const lower = name.toLowerCase()
  const ep = episode.toLowerCase()
  const stem = lower.replace(/\.[^.]+$/, '')
  const rest = stem.startsWith(ep) ? stem.slice(ep.length).replace(/^[_-]/, '') : stem
  const v = AUDIO_VARIANTS.find((x) => rest === x)
  return v ?? 'master'
}

async function readMeta(episode: string): Promise<Meta> {
  const file = safeJoin('external_intake', episode, 'meta.json')
  try {
    const txt = await fs.readFile(file, 'utf8')
    const parsed: unknown = JSON.parse(txt)
    if (parsed && typeof parsed === 'object' && Array.isArray((parsed as Meta).entries)) {
      return parsed as Meta
    }
  } catch {
    // reason: file optional — meta.json created lazily on first append
  }
  return { entries: [] }
}

export async function loadIntake(episode: string): Promise<IntakeState> {
  assertEpisode(episode)
  const base = safeJoin('external_intake', episode)
  const meta = await readMeta(episode)

  const audioDir = path.join(base, 'audio')
  const stillsDir = path.join(base, 'stills')
  const clipsDir = path.join(base, 'clips')
  const subsDir = path.join(base, 'subs')

  const [audioFiles, stillFiles, clipFiles, subFiles] = await Promise.all([
    listDirSafe(audioDir),
    listDirSafe(stillsDir),
    listDirSafe(clipsDir),
    listDirSafe(subsDir),
  ])

  const audio: IntakeAudioFile[] = []
  for (const name of audioFiles) {
    const full = path.join(audioDir, name)
    const st = await statSafe(full)
    if (!st || !st.isFile()) continue
    const variant = parseAudioVariantFromName(name, episode)
    const entry = meta.entries.find((e) => e.originalName === name && e.kind === 'audio')
    audio.push({
      variant,
      name,
      sizeBytes: st.size,
      savedAt: entry?.savedAt ?? st.mtime.toISOString(),
    })
  }

  const stills: IntakeStillFile[] = []
  for (const name of stillFiles) {
    const full = path.join(stillsDir, name)
    const st = await statSafe(full)
    if (!st || !st.isFile()) continue
    const cut = parseCutFromName(name)
    if (cut == null) continue
    stills.push({ cut, name, sizeBytes: st.size })
  }
  stills.sort((a, b) => a.cut - b.cut)

  const clips: IntakeClipFile[] = []
  for (const name of clipFiles) {
    const full = path.join(clipsDir, name)
    const st = await statSafe(full)
    if (!st || !st.isFile()) continue
    const cut = parseCutFromName(name)
    if (cut == null) continue
    clips.push({ cut, name, sizeBytes: st.size })
  }
  clips.sort((a, b) => a.cut - b.cut)

  let subs: IntakeSubFile | null = null
  for (const name of subFiles) {
    const full = path.join(subsDir, name)
    const st = await statSafe(full)
    if (!st || !st.isFile()) continue
    subs = { name, sizeBytes: st.size }
    break
  }

  return { audio, stills, clips, subs }
}

/**
 * Check whether the final rendered MV exists.
 */
export async function hasFinalRender(
  episode: string,
): Promise<{ exists: boolean; path: string; sizeBytes: number | null }> {
  assertEpisode(episode)
  const rel = path.join('export', 'mv', `${episode}_final.mp4`)
  const full = safeJoin('export', 'mv', `${episode}_final.mp4`)
  const st = await statSafe(full)
  return {
    exists: !!st && st.isFile(),
    path: rel,
    sizeBytes: st?.size ?? null,
  }
}

export async function appendIntakeMeta(
  episode: string,
  entry: MetaEntry,
): Promise<void> {
  assertEpisode(episode)
  const dir = safeJoin('external_intake', episode)
  await fs.mkdir(dir, { recursive: true })
  const file = safeJoin('external_intake', episode, 'meta.json')
  let meta: Meta = { entries: [] }
  try {
    const txt = await fs.readFile(file, 'utf8')
    const parsed: unknown = JSON.parse(txt)
    if (parsed && typeof parsed === 'object' && Array.isArray((parsed as Meta).entries)) {
      meta = parsed as Meta
    }
  } catch {
    // reason: file optional — created fresh if missing
  }
  meta.entries.push(entry)
  try {
    await fs.writeFile(file, JSON.stringify(meta, null, 2), 'utf8')
  } catch (err) {
    logError('intake', `Failed to write meta.json for ${episode}`, err)
    throw err
  }
}
