/**
 * Hand-rolled input validators for TROY API routes.
 * No external dependencies — Node.js builtins only.
 */

import path from 'node:path'
import { AUDIO_VARIANTS, type AudioVariant } from '@/lib/intake-spec'
import { TROY_ROOT } from '@/lib/paths'

// ─── Episode ID ──────────────────────────────────────────────────────────────

export const EPISODE_RE = /^E\d{3}$/

export function isValidEpisode(s: unknown): s is string {
  return typeof s === 'string' && EPISODE_RE.test(s)
}

// ─── Audio variant ───────────────────────────────────────────────────────────

export function isValidAudioVariant(s: unknown): s is AudioVariant {
  return typeof s === 'string' && (AUDIO_VARIANTS as readonly string[]).includes(s)
}

// ─── Path traversal ──────────────────────────────────────────────────────────

/**
 * Check that every segment in a URL path array is safe:
 * - no `..` component
 * - not an absolute path
 * - no backslash (Windows path injection)
 */
export function segmentsAreSafe(segments: string[]): boolean {
  for (const seg of segments) {
    if (
      seg.includes('..') ||
      seg.startsWith('/') ||
      seg.startsWith('\\') ||
      path.isAbsolute(seg)
    ) {
      return false
    }
  }
  // Also check the joined form
  const joined = segments.join('/')
  if (joined.includes('..')) return false
  return true
}

/**
 * Verify resolved absolute path is strictly inside TROY_ROOT.
 * Returns true when safe, false if it escapes.
 */
export function isUnderRoot(absPath: string): boolean {
  const rel = path.relative(TROY_ROOT, absPath)
  return !rel.startsWith('..') && !path.isAbsolute(rel)
}

// ─── Standard error response shapes ──────────────────────────────────────────

export type ApiErrorCode =
  | 'bad_request'
  | 'not_found'
  | 'unprocessable'
  | 'conflict'
  | 'internal'
  | 'render_in_progress'

export type ApiErrorBody = {
  error: {
    code: ApiErrorCode
    message: string
    detail?: unknown
  }
}

export function apiError(
  code: ApiErrorCode,
  message: string,
  detail?: unknown,
): ApiErrorBody {
  return { error: { code, message, ...(detail !== undefined ? { detail } : {}) } }
}

/** Redact TROY_ROOT from strings to avoid leaking filesystem paths. */
export function redactRoot(s: string): string {
  return s.replaceAll(TROY_ROOT, '<TROY>')
}
