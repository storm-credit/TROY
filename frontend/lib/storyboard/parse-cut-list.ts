/**
 * Parse `ops/E###_visual_cut_list.md` into a structured intermediate
 * representation. The file format is well-defined (see E001 for the canonical
 * shape) — the parser is hand-rolled (no external deps) and tolerant: missing
 * sections degrade to empty values rather than throwing.
 */

import fs from 'node:fs/promises'
import { safeJoin } from '../paths'
import { logError } from '../log'

export type ParsedCut = {
  /** Korean header text after `### cut N. ` (e.g. "캠퍼스 중앙 길 와이드"). */
  koreanTitle: string
  /** `purpose:` line value — Korean summary of the cut's intent. */
  summary: string
  /** `shot:` line value — English shot type. */
  shotType: string
  /** `motion intent:` line value — English motion descriptor. */
  motionIntent: string
  /** Body of the fenced ```text``` prompt block. May be empty. */
  prompt: string
}

export type ParsedCutList = {
  episodeId: string
  /** "## episode" → "recommended still count: N" — usually 8. */
  recommendedStillCount: number
  /** "## visual thesis" body, single paragraph. */
  visualThesis: string
  /** "## master look prompt" fenced block body. */
  masterLookPrompt: string
  cuts: ParsedCut[]
}

const EPISODE_RE = /^E\d{3}$/

/**
 * Read and parse `ops/{episodeId}_visual_cut_list.md`.
 * Returns null when the file is missing or fundamentally malformed.
 */
export async function parseCutList(episodeId: string): Promise<ParsedCutList | null> {
  if (!EPISODE_RE.test(episodeId)) {
    logError('episodes', `parseCutList: invalid episodeId "${episodeId}"`)
    return null
  }
  const file = safeJoin('ops', `${episodeId}_visual_cut_list.md`)
  let txt: string
  try {
    txt = await fs.readFile(file, 'utf8')
  } catch (err) {
    if ((err as NodeJS.ErrnoException)?.code === 'ENOENT') return null
    logError('episodes', `parseCutList read failed for ${episodeId}`, err)
    return null
  }

  // Normalize line endings.
  const text = txt.replace(/\r\n/g, '\n')

  const recommendedStillCount = readNumberField(text, /recommended\s+still\s+count\s*:\s*(\d+)/i, 8)
  const visualThesis = readSection(text, '## visual thesis')
  const masterLookPrompt = readFencedAfter(text, '## master look prompt')
  const cuts = parseCuts(text)

  if (cuts.length === 0) {
    // Treat empty cut list as malformed; the Generator falls back gracefully.
    logError('episodes', `parseCutList: no cuts found for ${episodeId}`)
    return null
  }

  return {
    episodeId,
    recommendedStillCount,
    visualThesis,
    masterLookPrompt,
    cuts,
  }
}

// ─── Internals ───────────────────────────────────────────────────────────────

function readNumberField(text: string, re: RegExp, fallback: number): number {
  const m = text.match(re)
  if (!m) return fallback
  const n = Number(m[1])
  return Number.isFinite(n) ? n : fallback
}

/**
 * Extract the body of a "## heading" section up to the next "## " heading
 * (or EOF). Returns trimmed plain text (paragraphs joined by single \n).
 */
function readSection(text: string, heading: string): string {
  const idx = text.indexOf(heading + '\n')
  if (idx < 0) return ''
  const after = text.slice(idx + heading.length + 1)
  const next = after.match(/\n##\s/)
  const body = next ? after.slice(0, next.index!) : after
  return body.trim()
}

/**
 * Find a fenced ```text ... ``` block immediately after a heading.
 */
function readFencedAfter(text: string, heading: string): string {
  const idx = text.indexOf(heading + '\n')
  if (idx < 0) return ''
  const after = text.slice(idx + heading.length + 1)
  const m = after.match(/```(?:text)?\n([\s\S]*?)\n```/)
  return m ? m[1].trim() : ''
}

/**
 * Parse cut list entries into ParsedCut[]. Supports two formats:
 *   1. E001-style: `### cut N. <korean title>` headings + `- purpose:` fields
 *      + ```text``` fenced prompt block.
 *   2. E047-style (and similar later episodes): "## Cut List" section with a
 *      numbered list `N. <title>: <summary>`.
 *
 * Falls back to format-2 if format-1 yields zero cuts.
 */
function parseCuts(text: string): ParsedCut[] {
  // Try format 1 first.
  const f1 = parseCutsFormat1(text)
  if (f1.length > 0) return f1
  // Fall back to format 2.
  return parseCutsFormat2(text)
}

function parseCutsFormat1(text: string): ParsedCut[] {
  const cuts: ParsedCut[] = []
  const re = /^###\s+cut\s+(\d+)\.\s*(.+?)\s*$/gim
  const positions: { num: number; title: string; offset: number }[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    positions.push({ num: Number(m[1]), title: m[2].trim(), offset: m.index })
  }
  for (let i = 0; i < positions.length; i++) {
    const cur = positions[i]
    const next = positions[i + 1]
    const slice = text.slice(cur.offset, next ? next.offset : undefined)
    const purpose = matchField(slice, /-\s*purpose\s*:\s*(.+)/i)
    const shotType = matchField(slice, /-\s*shot\s*:\s*(.+)/i)
    const motionIntent = matchField(slice, /-\s*motion\s+intent\s*:\s*(.+)/i)
    const prompt = matchFenced(slice)
    cuts.push({
      koreanTitle: cur.title,
      summary: purpose,
      shotType,
      motionIntent,
      prompt,
    })
  }
  cuts.sort((a, b) => {
    const an = positions.find((p) => p.title === a.koreanTitle)?.num ?? 0
    const bn = positions.find((p) => p.title === b.koreanTitle)?.num ?? 0
    return an - bn
  })
  return cuts
}

/**
 * Format 2: a single "## Cut List" (or "## cut list") section with a numbered
 * list inside. Each line is `N. <title>: <summary>` or `N. <description>`.
 */
function parseCutsFormat2(text: string): ParsedCut[] {
  const headingRe = /^##\s+cut\s+list\s*$/im
  const headingMatch = text.match(headingRe)
  if (!headingMatch || headingMatch.index == null) return []
  const after = text.slice(headingMatch.index + headingMatch[0].length)
  const next = after.match(/\n##\s/)
  const body = next ? after.slice(0, next.index!) : after

  const cuts: ParsedCut[] = []
  const lineRe = /^\s*(\d+)\.\s+(.+)$/gm
  let m: RegExpExecArray | null
  while ((m = lineRe.exec(body)) !== null) {
    const line = m[2].trim()
    // Try to split "title: summary".
    const split = line.match(/^(.+?):\s*(.+)$/)
    const koreanTitle = split ? split[1].trim() : line.slice(0, 30)
    const summary = split ? split[2].trim() : line
    cuts.push({
      koreanTitle,
      summary,
      shotType: '',
      motionIntent: '',
      prompt: '',
    })
  }
  return cuts
}

function matchField(slice: string, re: RegExp): string {
  const m = slice.match(re)
  return m ? m[1].trim() : ''
}

function matchFenced(slice: string): string {
  const m = slice.match(/```(?:text)?\n([\s\S]*?)\n```/)
  return m ? m[1].trim() : ''
}
