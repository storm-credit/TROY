import { NextRequest, NextResponse } from 'next/server'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { Readable } from 'node:stream'
import { TROY_ROOT } from '@/lib/paths'
import { logInfo, logError } from '@/app/api/_lib/log'
import { segmentsAreSafe, isUnderRoot, apiError } from '@/app/api/_lib/validate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const AREA = 'intake.file'

const CONTENT_TYPES: Record<string, string> = {
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.mov': 'video/quicktime',
  '.webm': 'video/webm',
  '.srt': 'application/x-subrip',
  '.vtt': 'text/vtt; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
}

const BAD_REQUEST = (msg: string) =>
  NextResponse.json(apiError('bad_request', msg), {
    status: 400,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })

const NOT_FOUND = (msg: string) =>
  NextResponse.json(apiError('not_found', msg), {
    status: 404,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })

type RouteCtx = { params: Promise<{ path: string[] }> }

export async function GET(_req: NextRequest, ctx: RouteCtx) {
  const { path: segments } = await ctx.params

  logInfo(AREA, 'request', { method: 'GET', segments: segments?.join('/') ?? '' })

  // ── Guard: segments must exist ────────────────────────────────────────────
  if (!segments || segments.length === 0) {
    return BAD_REQUEST('Missing file path segments')
  }

  // ── Guard: traversal check on each segment and the joined result ──────────
  if (!segmentsAreSafe(segments)) {
    logError(AREA, 'traversal_blocked', undefined, { segments })
    return BAD_REQUEST('Forbidden path: traversal characters detected')
  }

  // ── Resolve absolute path under external_intake/ ──────────────────────────
  const abs = path.join(TROY_ROOT, 'external_intake', ...segments)

  // ── Guard: final resolved path must stay under TROY_ROOT ─────────────────
  if (!isUnderRoot(abs)) {
    logError(AREA, 'traversal_blocked_post_resolve', undefined, { abs })
    return BAD_REQUEST('Forbidden path: resolved outside root')
  }

  // ── Guard: must start with external_intake/ (belt-and-suspenders) ─────────
  const rel = path.relative(TROY_ROOT, abs).replace(/\\/g, '/')
  if (!rel.startsWith('external_intake/')) {
    logError(AREA, 'traversal_blocked_prefix', undefined, { rel })
    return BAD_REQUEST('Forbidden path: not under external_intake')
  }

  // ── Stat the file ─────────────────────────────────────────────────────────
  let stat: fsp.FileHandle | Awaited<ReturnType<typeof fsp.stat>>
  let fileSize: number
  try {
    const s = await fsp.stat(abs)
    if (!s.isFile()) {
      return NOT_FOUND('Path does not point to a file')
    }
    fileSize = s.size
  } catch {
    return NOT_FOUND('File not found')
  }

  // ── Determine content type ────────────────────────────────────────────────
  const ext = path.extname(abs).toLowerCase()
  const ctype = CONTENT_TYPES[ext] ?? 'application/octet-stream'

  // ── Stream response (avoids buffering large mp4/mp3 in memory) ────────────
  const nodeStream = fs.createReadStream(abs)
  const webStream = Readable.toWeb(nodeStream) as unknown as ReadableStream<Uint8Array>

  logInfo(AREA, 'serve', { rel, ctype, size: fileSize })

  return new Response(webStream, {
    status: 200,
    headers: {
      'Content-Type': ctype,
      'Content-Length': String(fileSize),
      'Cache-Control': 'private, max-age=60',
      'Accept-Ranges': 'bytes',
    },
  })
}
