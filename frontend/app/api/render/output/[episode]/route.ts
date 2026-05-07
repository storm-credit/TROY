import { NextResponse } from 'next/server'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import { Readable } from 'node:stream'
import { outputPathFor } from '@/lib/render'
import { logInfo, logError } from '@/app/api/_lib/log'
import { isValidEpisode, apiError, redactRoot } from '@/app/api/_lib/validate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const AREA = 'render.output'

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
} as const

type Params = { episode: string }

export async function GET(
  _req: Request,
  ctx: { params: Promise<Params> },
) {
  const { episode } = await ctx.params

  logInfo(AREA, 'request', { method: 'GET', path: `/api/render/output/${episode}` })

  // ── Validate episode ID ───────────────────────────────────────────────────
  if (!isValidEpisode(episode)) {
    return NextResponse.json(
      apiError('bad_request', 'episode must match ^E\\d{3}$ (e.g. E001)', { received: episode }),
      { status: 400, headers: JSON_HEADERS },
    )
  }

  // ── Resolve safe output path ──────────────────────────────────────────────
  let filePath: string
  try {
    filePath = outputPathFor(episode)
  } catch (e) {
    logError(AREA, 'path_resolve_failed', e, { episode })
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json(
      apiError('bad_request', redactRoot(msg)),
      { status: 400, headers: JSON_HEADERS },
    )
  }

  // ── Stat the file ─────────────────────────────────────────────────────────
  let stat
  try {
    stat = await fsp.stat(filePath)
  } catch {
    return NextResponse.json(
      apiError('not_found', `Render output not found for ${episode}`),
      { status: 404, headers: JSON_HEADERS },
    )
  }

  if (!stat.isFile()) {
    return NextResponse.json(
      apiError('not_found', `Render output path is not a file for ${episode}`),
      { status: 404, headers: JSON_HEADERS },
    )
  }

  logInfo(AREA, 'serve', { episode, size: stat.size, path: redactRoot(filePath) })

  // ── Stream the mp4 (avoid loading full buffer) ────────────────────────────
  const nodeStream = fs.createReadStream(filePath)
  const webStream = Readable.toWeb(nodeStream) as unknown as ReadableStream<Uint8Array>

  return new Response(webStream, {
    status: 200,
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Length': String(stat.size),
      'Content-Disposition': `inline; filename="${episode}_final.mp4"`,
      'Cache-Control': 'private, max-age=300',
      'Accept-Ranges': 'bytes',
    },
  })
}
