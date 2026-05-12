import fs from 'node:fs/promises'
import { safeJoin, paths } from '../paths'
import { logError, logWarn } from '../log'
import { LANES } from './lanes'
import type {
  AssignmentDoc,
  EpisodeAssignment,
  GenerateInput,
  GeneratedPasteCard,
  LaneKey,
  LaneSpec,
} from './types'

const EPISODE_RE = /^E\d{3}$/

/** Cache the assignment doc — avoid re-reading on every request. */
let assignmentCache: { doc: AssignmentDoc; ts: number } | null = null
const ASSIGNMENT_TTL_MS = 30_000

async function loadAssignmentDoc(): Promise<AssignmentDoc | null> {
  const now = Date.now()
  if (assignmentCache && now - assignmentCache.ts < ASSIGNMENT_TTL_MS) {
    return assignmentCache.doc
  }
  const file = safeJoin('ops', '120_episode_genre_assignment.json')
  try {
    const text = await fs.readFile(file, 'utf8')
    const parsed = JSON.parse(text) as AssignmentDoc
    if (!Array.isArray(parsed.episodes)) {
      logError('episodes', 'Assignment doc malformed: episodes is not array')
      return null
    }
    assignmentCache = { doc: parsed, ts: now }
    return parsed
  } catch (err) {
    logError('episodes', `Failed to load 120_episode_genre_assignment.json`, err)
    return null
  }
}

export async function loadAssignmentForEpisode(
  episodeId: string,
): Promise<EpisodeAssignment | null> {
  if (!EPISODE_RE.test(episodeId)) return null
  const doc = await loadAssignmentDoc()
  if (!doc) return null
  return doc.episodes.find((e) => e.episodeId === episodeId) ?? null
}

/**
 * Apply BPM substitution to a style block.
 * Replaces literal `{bpm}` with the master BPM, and `{bpm-N}` / `{bpm+N}`
 * with master ± N.
 */
function substituteBpm(block: string, masterBpm: number): string {
  return block
    .replace(/\{bpm-(\d+)\}/g, (_, n) => String(masterBpm - Number(n)))
    .replace(/\{bpm\+(\d+)\}/g, (_, n) => String(masterBpm + Number(n)))
    .replace(/\{bpm\}/g, String(masterBpm))
}

/** Apply a list of swap rules to a block.
 *
 * Convention: both `block` and `swap.target` may contain `{bpm}` placeholders.
 * The search/replace is done on the placeholder-form text first, then the
 * final string is BPM-substituted by the caller. This preserves consistency:
 * the same `{bpm}` placeholder lives on both sides of the swap, and we don't
 * have to know whether master or swap was authored with literal numbers.
 */
function applySwaps(
  block: string,
  swaps: { target: string; replacement: string }[],
  _masterBpm: number,
): string {
  let result = block
  for (const swap of swaps) {
    const { target, replacement } = swap
    if (!result.includes(target)) {
      logWarn('episodes', `Swap target not found in block: "${target.slice(0, 60)}..."`)
    }
    result = result.replace(target, replacement)
  }
  return result
}

/**
 * Build the 3-version style triplet for a given lane + master BPM.
 */
export function buildStyleTriplet(
  lane: LaneSpec,
  masterBpm: number,
): { master: string; varA: string; varB: string } {
  const master = substituteBpm(lane.styleBlockMaster, masterBpm)
  const varA = applySwaps(lane.styleBlockMaster, lane.varASwap, masterBpm)
  let varB = applySwaps(lane.styleBlockMaster, lane.varBSwap, masterBpm)
  if (lane.varBExtraSwap) {
    varB = applySwaps(varB, lane.varBExtraSwap, masterBpm)
  }
  return { master, varA: substituteBpm(varA, masterBpm), varB: substituteBpm(varB, masterBpm) }
}

/** Standard UI settings (3 versions 공통). Title varies per episode. */
function buildUiSettings(episodeId: string, episodeTitle: string | null): {
  label: string
  value: string
}[] {
  const titleStr = episodeTitle ? `${episodeId} ${episodeTitle.replace(/_/g, ' ')}` : episodeId
  return [
    { label: 'Title', value: titleStr },
    { label: 'Vocal Gender', value: 'Female' },
    { label: 'Weirdness', value: '40' },
    { label: 'Style Influence', value: '70' },
    { label: 'Persona', value: '(비워둠)' },
    { label: 'Model', value: 'v5.5' },
    { label: 'Lyrics Mode', value: 'Manual' },
  ]
}

/**
 * Extract the paste-ready lyric block from a lyrics markdown file.
 *
 * Supports two layouts:
 *   1. Code-fenced (E001 v8 anchor):
 *        ```
 *        [verse 1]
 *        ...
 *        ```
 *   2. Heading-section (v6 batch standard):
 *        ## Suno-ready paste block
 *        [verse 1]
 *        ...
 *        ## Brief rationale     ← stop before this
 *
 * Falls back to raw text if neither pattern matches (defensive).
 */
function extractPasteBlock(text: string): string {
  // Layer 1: code-fenced block (v8 anchor format)
  const fenceMatch = text.match(/```\s*\n([\s\S]*?)```/)
  if (fenceMatch) return fenceMatch[1].trim()

  // Layer 2: "## Suno-ready paste block" heading section (v6 format)
  // Capture everything after the heading up to the next "## " section.
  const sectionMatch = text.match(
    /##\s*Suno-ready paste block[^\n]*\n([\s\S]*?)(?=\n##\s|$)/,
  )
  if (sectionMatch) return sectionMatch[1].trim()

  // Defensive fallback: raw text. Should not happen for properly formatted files.
  return text.trim()
}

/**
 * Try to load lyrics for an episode in priority order:
 *   v9 hand-curated → ops/E###_lyrics_v9.md (post-Suno-feedback rewrites)
 *   v8 dedicated    → ops/E###_lyrics_v8.md (per-episode Opus craft pass)
 *   v6 batch        → ops/E###_lyrics_v6.md (batch initial draft)
 * Returns a placeholder if no file exists.
 *
 * v9 is added when a specific episode is re-crafted after user listened to the
 * Suno output and reported the v8 lyric didn't grip (e.g. E002 after the
 * 2026-05-12 feedback). v9 files exist only where needed; most episodes still
 * use v8 as the canonical version.
 */
async function loadLyrics(episodeId: string): Promise<string> {
  const candidates = [
    `${episodeId}_lyrics_v9.md`,
    `${episodeId}_lyrics_v8.md`,
    `${episodeId}_lyrics_v6.md`,
  ]
  for (const name of candidates) {
    const file = safeJoin('ops', name)
    try {
      const text = await fs.readFile(file, 'utf8')
      return extractPasteBlock(text)
    } catch {
      // file optional
    }
  }
  return `[가사 미작성 — 가사 batch 완료 후 자동 반영]\n\n에피소드 ${episodeId} 의 가사가 아직 작성되지 않았습니다.\n` +
    `lyrics-director batch 완료 시 ops/${episodeId}_lyrics_v6.md 가 생성되며,\n` +
    `이 paste card 가 자동 갱신됩니다.`
}

async function loadEpisodeTitle(episodeId: string): Promise<string | null> {
  // Reuse pattern from lib/episodes.ts: scan manuscript chapter dirs.
  // Cheap inline impl since we don't import episodes.ts to avoid circular dep risk.
  for (let c = 1; c <= 6; c++) {
    const dir = safeJoin('manuscript', `chapter${c}`)
    let entries: string[] = []
    try {
      entries = await fs.readdir(dir)
    } catch {
      continue
    }
    for (const f of entries) {
      const m = f.match(/^E(\d{3})_(.+?)_정본초고\.md$/)
      if (m && `E${m[1]}` === episodeId) return m[2]
    }
  }
  return null
}

/**
 * Generate a Suno paste card for an episode.
 *
 * For E001 — short-circuits and reads the hand-curated v2 file
 * (preserves the v8 anchor exactly).
 *
 * For other episodes — assembles from Wheel + assignment + lyrics.
 */
export async function generateSunoPasteCard(
  input: GenerateInput,
): Promise<GeneratedPasteCard> {
  const { episodeId } = input
  if (!EPISODE_RE.test(episodeId)) {
    throw new Error(`Invalid episode id: ${episodeId}`)
  }

  const assignment = await loadAssignmentForEpisode(episodeId)
  if (!assignment) {
    throw new Error(`No assignment for ${episodeId} — run Phase A1 first`)
  }

  const laneKey: LaneKey = input.laneOverride ?? assignment.primaryLane
  const lane = LANES[laneKey]
  if (!lane) {
    throw new Error(`Unknown lane: ${laneKey}`)
  }

  const masterBpm = input.bpmOverride ?? assignment.bpmMaster

  const triplet = buildStyleTriplet(lane, masterBpm)
  const lyrics = await loadLyrics(episodeId)
  const title = await loadEpisodeTitle(episodeId)
  const uiSettings = buildUiSettings(episodeId, title)

  return {
    episodeId,
    isAnchor: episodeId === 'E001',
    laneKey,
    phase: assignment.phase,
    bpmMaster: masterBpm,
    uiSettings,
    lyrics,
    masterStyle: triplet.master,
    varALofiStyle: triplet.varA,
    varBAltfolkStyle: triplet.varB,
    metadata: {
      chorusEmotionLine: assignment.chorusEmotionLine,
      emotionalAnchor: assignment.emotionalAnchor,
      albumTrackFlag: assignment.albumTrackFlag,
      albumFunctionName: assignment.albumFunctionName,
    },
  }
}

// Reference paths used by API route handlers.
export const SUNO_GENERATE_FILES = {
  assignment: paths.ops + '/120_episode_genre_assignment.json',
}
