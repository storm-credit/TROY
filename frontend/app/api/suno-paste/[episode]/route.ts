import { NextRequest } from 'next/server'
import { generateSunoPasteCard } from '@/lib/suno-generate/assemble'
import { isValidEpisode, apiError, redactRoot } from '@/app/api/_lib/validate'
import { logInfo, logError } from '@/app/api/_lib/log'

const JSON_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS })
}

type RouteContext = { params: Promise<{ episode: string }> }

export async function GET(req: NextRequest, ctx: RouteContext): Promise<Response> {
  const { episode } = await ctx.params
  logInfo('suno-paste', `GET ${episode}`)

  if (!isValidEpisode(episode)) {
    return jsonResponse(apiError('bad_request', `episode must match ^E\\d{3}$`, { received: episode }), 400)
  }

  const url = new URL(req.url)
  const bpmStr = url.searchParams.get('bpm')
  const laneOverride = url.searchParams.get('lane') ?? undefined
  const bpmOverride = bpmStr ? Number(bpmStr) : undefined

  if (bpmStr && (Number.isNaN(bpmOverride) || bpmOverride! < 30 || bpmOverride! > 200)) {
    return jsonResponse(apiError('bad_request', 'bpm must be 30-200'), 400)
  }

  try {
    const card = await generateSunoPasteCard({
      episodeId: episode,
      bpmOverride,
      laneOverride: laneOverride as never,
    })
    return jsonResponse(card)
  } catch (err) {
    const msg = err instanceof Error ? redactRoot(err.message) : String(err)
    logError('suno-paste', `Failed to generate for ${episode}: ${msg}`)
    return jsonResponse(apiError('unprocessable', msg), 422)
  }
}
