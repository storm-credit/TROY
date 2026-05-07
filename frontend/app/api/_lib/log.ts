/**
 * Minimal structured logger for TROY API routes.
 * Format: [troy:api:<area>] <event> <key=value pairs>
 * Greppable by area, event type, or key.
 */

type Level = 'info' | 'warn' | 'error'

function fmt(area: string, event: string, kv?: Record<string, unknown>): string {
  const pairs = kv
    ? ' ' +
      Object.entries(kv)
        .map(([k, v]) => `${k}=${JSON.stringify(v)}`)
        .join(' ')
    : ''
  return `[troy:api:${area}] ${event}${pairs}`
}

function write(level: Level, area: string, event: string, kv?: Record<string, unknown>): void {
  const msg = fmt(area, event, kv)
  if (level === 'error') {
    console.error(msg)
  } else if (level === 'warn') {
    console.warn(msg)
  } else {
    console.log(msg)
  }
}

export function logInfo(area: string, event: string, kv?: Record<string, unknown>): void {
  write('info', area, event, kv)
}

export function logWarn(area: string, event: string, kv?: Record<string, unknown>): void {
  write('warn', area, event, kv)
}

export function logError(area: string, event: string, err?: unknown, kv?: Record<string, unknown>): void {
  const extra: Record<string, unknown> = { ...kv }
  if (err instanceof Error) {
    extra.message = err.message
    extra.stack = err.stack ?? ''
  } else if (err !== undefined) {
    extra.message = String(err)
  }
  write('error', area, event, extra)
}
