import { NextResponse } from 'next/server'
import {
  executeRender,
  planRender,
  type RenderInput,
} from '@/lib/render'
import { AUDIO_VARIANTS, type AudioVariant } from '@/lib/intake-spec'
import { logInfo, logError } from '@/app/api/_lib/log'
import { isValidEpisode, isValidAudioVariant, apiError, redactRoot } from '@/app/api/_lib/validate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const AREA = 'render'
const MAX_LOG_LINES = 50

// ── Concurrency guard — one render per episode ────────────────────────────────
const renderInProgress = new Set<string>()

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
} as const

type Body = {
  episode?: unknown
  audioVariant?: unknown
  burnSubs?: unknown
}

export async function POST(req: Request) {
  logInfo(AREA, 'request', { method: 'POST', path: '/api/render' })

  // ── Parse JSON body ───────────────────────────────────────────────────────
  let body: Body
  try {
    body = (await req.json()) as Body
  } catch {
    return NextResponse.json(
      apiError('bad_request', 'Request body must be valid JSON'),
      { status: 400, headers: JSON_HEADERS },
    )
  }

  // ── Validate episode ──────────────────────────────────────────────────────
  if (!isValidEpisode(body.episode)) {
    return NextResponse.json(
      apiError(
        'bad_request',
        'episode must match ^E\\d{3}$ (e.g. E001)',
        { received: body.episode },
      ),
      { status: 400, headers: JSON_HEADERS },
    )
  }
  const episode: string = body.episode

  // ── Validate audioVariant (optional) ────────────────────────────────────
  let audioVariant: AudioVariant | undefined
  if (body.audioVariant != null) {
    if (!isValidAudioVariant(body.audioVariant)) {
      return NextResponse.json(
        apiError(
          'bad_request',
          `audioVariant must be one of: ${AUDIO_VARIANTS.join(', ')}`,
          { received: body.audioVariant },
        ),
        { status: 400, headers: JSON_HEADERS },
      )
    }
    audioVariant = body.audioVariant
  }

  // ── Validate burnSubs (optional boolean) ────────────────────────────────
  if (body.burnSubs != null && typeof body.burnSubs !== 'boolean') {
    return NextResponse.json(
      apiError('bad_request', 'burnSubs must be a boolean if provided', { received: body.burnSubs }),
      { status: 400, headers: JSON_HEADERS },
    )
  }
  const burnSubs = body.burnSubs as boolean | undefined

  // ── Concurrency check ─────────────────────────────────────────────────────
  if (renderInProgress.has(episode)) {
    logInfo(AREA, 'render_conflict', { episode })
    return NextResponse.json(
      apiError('render_in_progress', `A render for ${episode} is already in progress`),
      { status: 409, headers: JSON_HEADERS },
    )
  }

  renderInProgress.add(episode)
  logInfo(AREA, 'render_start', { episode, audioVariant: audioVariant ?? 'master', burnSubs: burnSubs ?? true })

  const input: RenderInput = { episode, audioVariant, burnSubs }

  // ── Plan ──────────────────────────────────────────────────────────────────
  let plan
  try {
    plan = await planRender(input)
  } catch (e) {
    renderInProgress.delete(episode)
    logError(AREA, 'plan_failed', e, { episode })
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json(
      apiError('unprocessable', redactRoot(msg)),
      { status: 422, headers: JSON_HEADERS },
    )
  }

  if (plan.cuts.length === 0) {
    renderInProgress.delete(episode)
    return NextResponse.json(
      apiError('unprocessable', 'No cuts to render', { plan }),
      { status: 422, headers: JSON_HEADERS },
    )
  }

  // ── Execute ───────────────────────────────────────────────────────────────
  const ringBuffer: string[] = []
  const onLog = (line: string) => {
    ringBuffer.push(line)
    if (ringBuffer.length > MAX_LOG_LINES) ringBuffer.shift()
  }

  let result
  try {
    result = await executeRender(plan, onLog)
  } catch (e) {
    renderInProgress.delete(episode)
    logError(AREA, 'ffmpeg_invocation_failed', e, { episode })
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json(
      apiError('internal', `ffmpeg invocation failed: ${redactRoot(msg)}`),
      { status: 500, headers: JSON_HEADERS },
    )
  }

  renderInProgress.delete(episode)

  if (result.ok) {
    // Log successful render with elapsed time and output size
    let outputSize: number | null = null
    try {
      const fsp = await import('node:fs/promises')
      const s = await fsp.stat(plan.outputPath)
      outputSize = s.size
    } catch { /* non-fatal */ }

    logInfo(AREA, 'render_ok', {
      episode,
      elapsedMs: result.elapsedMs,
      outputSize,
      outputPath: redactRoot(plan.outputPath),
    })
  } else {
    logError(AREA, 'render_failed', undefined, {
      episode,
      code: result.code,
      elapsedMs: result.elapsedMs,
    })
  }

  // ── Success response — shape preserved for frontend ───────────────────────
  return NextResponse.json(
    {
      ok: result.ok,
      code: result.code,
      elapsedMs: result.elapsedMs,
      plan,
      log: ringBuffer,
      outputUrl: `/api/render/output/${episode}`,
    },
    { headers: JSON_HEADERS },
  )
}
