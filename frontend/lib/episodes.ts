import fs from 'node:fs/promises'
import path from 'node:path'
import { paths, episodeId, chapterOf, phaseOf, safeJoin } from './paths'
import { loadAudit, type EpisodeAudit } from './audit'
import { logError } from './log'

export type Episode = {
  id: string
  num: number
  chapter: number
  phase: number
  title: string | null
  manuscriptPath: string | null
  hasHarness: boolean
  hasSongBrief: boolean
  hasVisualCutList: boolean
  hasProductionBible: boolean
  audit: EpisodeAudit | null
  movement: string | null
}

/** Episode IDs must match this pattern; validated at every public entry point. */
const EPISODE_RE = /^E\d{3}$/

function assertEpisode(id: string): void {
  if (!EPISODE_RE.test(id)) throw new Error(`Invalid episode id: ${id}`)
}

const TITLE_RE = /^E(\d{3})_(.+?)_정본초고\.md$/

/** In-memory cache with 10 s TTL. Uses globalThis so Next.js HMR module reloads share it. */
interface EpisodeCache {
  episodes: Episode[]
  ts: number
}
const CACHE_TTL_MS = 10_000
const CACHE_KEY = '__troy_episodes_cache__'

function getCache(): EpisodeCache | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = (globalThis as any)[CACHE_KEY] as EpisodeCache | undefined
  if (!c) return null
  if (Date.now() - c.ts > CACHE_TTL_MS) return null
  return c
}

function setCache(episodes: Episode[]): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any)[CACHE_KEY] = { episodes, ts: Date.now() } satisfies EpisodeCache
}

async function readDirSafe(dir: string): Promise<string[]> {
  try {
    return await fs.readdir(dir)
  } catch {
    // reason: file optional — chapter or ops dir may not exist yet
    return []
  }
}

async function listManuscripts(): Promise<Map<string, { title: string; full: string }>> {
  const map = new Map<string, { title: string; full: string }>()
  for (let c = 1; c <= 6; c++) {
    // All paths derived from paths.manuscript which is already rooted at TROY_ROOT.
    const dir = safeJoin('manuscript', `chapter${c}`)
    const files = await readDirSafe(dir)
    for (const f of files) {
      const m = f.match(TITLE_RE)
      if (m) {
        map.set(`E${m[1]}`, { title: m[2], full: path.join(dir, f) })
      }
    }
  }
  return map
}

async function listOpsByPrefix(): Promise<Set<string>> {
  // paths.ops is already rooted at TROY_ROOT — no user input in this path.
  const files = await readDirSafe(paths.ops)
  return new Set(files)
}

/**
 * Reads the movement field from an episode harness file.
 * Only called from loadEpisode (per-episode page), not loadAllEpisodes (grid).
 * This is intentional: movement parsing is expensive per-episode and not needed for the grid.
 */
async function readMovement(id: string): Promise<string | null> {
  assertEpisode(id)
  const file = safeJoin('ops', `${id}_episode_harness.md`)
  try {
    const txt = await fs.readFile(file, 'utf8')
    const m = txt.match(/-\s*movement:\s*(.+)/)
    return m ? m[1].trim() : null
  } catch {
    // reason: file optional — harness may not exist for this episode
    return null
  }
}

export async function loadAllEpisodes(): Promise<Episode[]> {
  const cached = getCache()
  if (cached) return cached.episodes

  const [manuscripts, opsFiles, audit] = await Promise.all([
    listManuscripts(),
    listOpsByPrefix(),
    loadAudit(),
  ])

  const out: Episode[] = []
  for (let n = 1; n <= 120; n++) {
    const id = episodeId(n)
    const ms = manuscripts.get(id) ?? null
    const a = audit.get(id) ?? null
    out.push({
      id,
      num: n,
      chapter: chapterOf(n),
      phase: phaseOf(n),
      title: ms?.title ?? null,
      manuscriptPath: ms?.full ?? null,
      hasHarness: opsFiles.has(`${id}_episode_harness.md`),
      hasSongBrief: opsFiles.has(`${id}_song_brief.md`),
      hasVisualCutList: opsFiles.has(`${id}_visual_cut_list.md`),
      hasProductionBible:
        opsFiles.has(`${id}_production_bible.md`) ||
        opsFiles.has(`${id}_production_bible_v2.md`) ||
        opsFiles.has(`${id}_production_bible_v3.md`),
      audit: a,
      movement: null,
    })
  }

  setCache(out)
  return out
}

export async function loadEpisode(id: string): Promise<Episode | null> {
  assertEpisode(id)
  const all = await loadAllEpisodes()
  const ep = all.find((e) => e.id === id)
  if (!ep) return null
  // Clone so we don't mutate the cached object with a movement value.
  const result: Episode = { ...ep }
  result.movement = await readMovement(id)
  return result
}

export async function readEpisodeFile(
  id: string,
  kind: 'harness' | 'song_brief' | 'visual_cut_list' | 'manuscript' | 'production_bible',
): Promise<string | null> {
  assertEpisode(id)
  let file: string | null = null
  if (kind === 'manuscript') {
    const ep = await loadEpisode(id)
    file = ep?.manuscriptPath ?? null
  } else if (kind === 'production_bible') {
    for (const v of ['_v3', '_v2', '']) {
      const p = safeJoin('ops', `${id}_production_bible${v}.md`)
      try {
        await fs.access(p)
        file = p
        break
      } catch {
        // reason: file optional — versioned production bibles may not all exist
      }
    }
  } else {
    const suffix = kind === 'harness' ? 'episode_harness' : kind
    file = safeJoin('ops', `${id}_${suffix}.md`)
  }
  if (!file) return null
  try {
    return await fs.readFile(file, 'utf8')
  } catch (err) {
    if ((err as NodeJS.ErrnoException)?.code === 'ENOENT') {
      // reason: file optional — episode may not have this artifact yet
      return null
    }
    logError('episodes', `Could not read ${kind} for ${id}`, err)
    return null
  }
}
