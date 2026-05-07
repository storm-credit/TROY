import fs from 'node:fs/promises'
import { safeJoin } from './paths'
import { logError } from './log'
import { generateSunoPasteCard } from './suno-generate/assemble'

export type SunoPasteCard = {
  episodeId: string
  uiSettings: { label: string; value: string }[]
  lyrics: string
  masterStyle: string
  varALofiStyle: string
  varBAltfolkStyle: string
}

const EPISODE_RE = /^E\d{3}$/

/**
 * Load a Suno paste card for the workbench panel.
 *
 * Resolution order:
 *   1. ops/E###_suno_paste_card_v2.md  (hand-curated v8 anchor — currently E001 only)
 *   2. Generator fallback              (drives E002-E120 from Wheel + assignment + lyrics)
 *
 * Returns null only if both layers fail (e.g., assignment doc missing).
 * The existing SunoPastePanel renders the same shape regardless of source.
 */
export async function loadSunoPasteCard(episodeId: string): Promise<SunoPasteCard | null> {
  if (!EPISODE_RE.test(episodeId)) return null

  // Layer 1 — hand-curated paste card.
  const file = safeJoin('ops', `${episodeId}_suno_paste_card_v2.md`)
  let text: string | null = null
  try {
    text = await fs.readFile(file, 'utf8')
  } catch {
    // reason: file optional — paste card may not exist yet for this episode
    text = null
  }

  if (text === null) {
    // Layer 2 — generator fallback.
    try {
      const card = await generateSunoPasteCard({ episodeId })
      return {
        episodeId: card.episodeId,
        uiSettings: card.uiSettings,
        lyrics: card.lyrics,
        masterStyle: card.masterStyle,
        varALofiStyle: card.varALofiStyle,
        varBAltfolkStyle: card.varBAltfolkStyle,
      }
    } catch (err) {
      logError('episodes', `Generator fallback failed for ${episodeId}`, err)
      return null
    }
  }

  try {
    // Extract code blocks in order. The paste card v2 layout:
    //   block 1: lyrics (under STEP 2)
    //   block 2: master style (Run 1)
    //   block 3: var A lo-fi swap (Run 2 — REPLACE one line in master)
    //   block 4: var B alt-folk swap (Run 3)
    const codeBlockRe = /```\s*\n([\s\S]*?)```/g
    const blocks: string[] = []
    let m: RegExpExecArray | null
    while ((m = codeBlockRe.exec(text)) !== null) {
      blocks.push(m[1].trim())
    }
    if (blocks.length < 4) {
      logError('episodes', `Suno paste card for ${episodeId} has only ${blocks.length} code blocks (expected ≥4)`)
      return null
    }

    const lyrics = blocks[0]
    const masterStyle = blocks[1]
    const varALofiSwap = blocks[2]
    const varBAltfolkSwap = blocks[3]

    // Var A: replace the master's BPM line with the lo-fi swap.
    // The master block starts with "Korean modern indie folk, ..." and contains "75 bpm slow walking pulse, no uplift".
    const varALofiStyle = masterStyle.replace(
      /75 bpm slow walking pulse[^.]*\./,
      `${varALofiSwap}.`,
    )

    // Var B: same BPM line replacement + the brushed-snare line replacement.
    const varBAltfolkStyle = masterStyle
      .replace(/75 bpm slow walking pulse[^.]*\./, `${varBAltfolkSwap}.`)
      .replace(
        /low brushed snare ghost only/,
        'low brushed snare and rim ghost, still subdued',
      )

    // UI settings: parse from the first table after "STEP 1".
    const uiSettings = parseUISettings(text)

    return {
      episodeId,
      uiSettings,
      lyrics,
      masterStyle,
      varALofiStyle,
      varBAltfolkStyle,
    }
  } catch (err) {
    logError('episodes', `Failed to parse Suno paste card for ${episodeId}`, err)
    return null
  }
}

function parseUISettings(text: string): { label: string; value: string }[] {
  // Find the STEP 1 section, then extract markdown table rows of "| label | value |".
  const stepRe = /STEP 1[\s\S]*?\n([\s\S]*?)(?=\n##|\n---)/
  const m = text.match(stepRe)
  if (!m) return []
  const section = m[1]
  const rowRe = /^\|\s*\*\*([^*|]+)\*\*\s*\|\s*([^|]+?)\s*\|$/gm
  const rows: { label: string; value: string }[] = []
  let r: RegExpExecArray | null
  while ((r = rowRe.exec(section)) !== null) {
    const label = r[1].trim()
    const value = r[2].trim()
    if (label && value) rows.push({ label, value })
  }
  return rows
}
