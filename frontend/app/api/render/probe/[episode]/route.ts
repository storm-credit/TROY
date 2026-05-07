import { NextResponse } from 'next/server'
import { probeRender } from '@/lib/render'
import { logInfo, logError } from '@/app/api/_lib/log'
import { isValidEpisode, apiError, redactRoot } from '@/app/api/_lib/validate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const AREA = 'render.probe'

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

  logInfo(AREA, 'request', { method: 'GET', path: `/api/render/probe/${episode}` })

  // ── Validate episode ID ───────────────────────────────────────────────────
  if (!isValidEpisode(episode)) {
    return NextResponse.json(
      apiError('bad_request', 'episode must match ^E\\d{3}$ (e.g. E001)', { received: episode }),
      { status: 400, headers: JSON_HEADERS },
    )
  }

  try {
    const probe = await probeRender(episode)
    logInfo(AREA, 'probe_ok', { episode, canRender: probe.canRender, missing: probe.missing.length })
    // Success shape preserved: { canRender, plan?, missing }
    return NextResponse.json(probe, { headers: JSON_HEADERS })
  } catch (e) {
    logError(AREA, 'probe_failed', e, { episode })
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json(
      // Preserve legacy shape (canRender/missing) for frontend — add error envelope on top
      {
        canRender: false,
        missing: [redactRoot(msg)],
        error: apiError('internal', redactRoot(msg)).error,
      },
      { status: 500, headers: JSON_HEADERS },
    )
  }
}
