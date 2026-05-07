/**
 * Minimal structured logger for TROY lib layer.
 * Format: [troy:lib:<area>] <message>
 * Keeps console output grep-friendly.
 */

export type LogArea =
  | 'paths'
  | 'audit'
  | 'episodes'
  | 'intake'
  | 'render'

export function logError(area: LogArea, message: string, cause?: unknown): void {
  const detail = cause instanceof Error ? ` — ${cause.message}` : cause != null ? ` — ${String(cause)}` : ''
  console.error(`[troy:lib:${area}] ${message}${detail}`)
}

export function logWarn(area: LogArea, message: string): void {
  console.warn(`[troy:lib:${area}] ${message}`)
}
