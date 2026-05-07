import path from 'node:path'

export const TROY_ROOT = process.env.TROY_ROOT ?? path.resolve(process.cwd(), '..')

export const paths = {
  root: TROY_ROOT,
  canon: path.join(TROY_ROOT, 'canon'),
  ops: path.join(TROY_ROOT, 'ops'),
  manuscript: path.join(TROY_ROOT, 'manuscript'),
  exportDir: path.join(TROY_ROOT, 'export'),
  characterSheets: path.join(TROY_ROOT, 'ops', 'character_sheets'),
  audit: path.join(TROY_ROOT, 'ops', 'manuscript_full_audit_001_120.md'),
}

export function episodeId(n: number): string {
  return `E${String(n).padStart(3, '0')}`
}

export function chapterOf(n: number): number {
  return Math.ceil(n / 20)
}

export function phaseOf(n: number): number {
  if (n <= 20) return 1
  if (n <= 35) return 2
  if (n <= 60) return 3
  if (n <= 80) return 4
  if (n <= 100) return 5
  return 6
}

/**
 * Resolve a path against TROY_ROOT, ensuring it stays inside the root.
 * Throws if the resolved path escapes via `..` or absolute traversal.
 * Promoted from lib/intake.ts so all lib modules can use it safely.
 */
export function safeJoin(...segments: string[]): string {
  const joined = path.join(TROY_ROOT, ...segments)
  const rel = path.relative(TROY_ROOT, joined)
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    throw new Error(`Path escapes TROY_ROOT: ${joined}`)
  }
  return joined
}
