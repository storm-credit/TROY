import fs from 'node:fs/promises'
import { paths } from './paths'
import { logError } from './log'

export type EpisodeAudit = {
  hangul: number
  nonWhitespace: number
  lengthStatus: string
  forbidden: string
}

export async function loadAudit(): Promise<Map<string, EpisodeAudit>> {
  const map = new Map<string, EpisodeAudit>()
  let text = ''
  try {
    text = await fs.readFile(paths.audit, 'utf8')
  } catch (err) {
    // reason: file optional — audit may not exist in fresh repos
    logError('audit', `Audit file not found at ${paths.audit}`, err)
    return map
  }

  if (!text) return map

  // Length Gate table rows: | E001 | 4177 | 4522 | safe-line candidate |
  const lengthRe = /^\|\s*(E\d{3})\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|$/gm
  for (const m of text.matchAll(lengthRe)) {
    map.set(m[1], {
      hangul: Number(m[2]),
      nonWhitespace: Number(m[3]),
      lengthStatus: m[4].trim(),
      forbidden: 'unknown',
    })
  }

  // Forbidden Pattern Sweep lines: - E001: pass
  const forbidRe = /^-\s*(E\d{3}):\s*(\w+)\s*$/gm
  for (const m of text.matchAll(forbidRe)) {
    const cur = map.get(m[1])
    if (cur) cur.forbidden = m[2]
    else map.set(m[1], { hangul: 0, nonWhitespace: 0, lengthStatus: 'unknown', forbidden: m[2] })
  }

  return map
}
