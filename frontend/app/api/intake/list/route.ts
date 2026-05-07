import { NextRequest, NextResponse } from 'next/server'
import { loadIntake } from '@/lib/intake'
import { logInfo, logError } from '@/app/api/_lib/log'
import { isValidEpisode, apiError, redactRoot } from '@/app/api/_lib/validate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const AREA = 'intake.list'

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
} as const

export async function GET(req: NextRequest) {
  const episode = req.nextUrl.searchParams.get('episode')

  logInfo(AREA, 'request', { method: 'GET', path: '/api/intake/list', episode: episode ?? '' })

  if (!isValidEpisode(episode)) {
    return NextResponse.json(
      apiError('bad_request', 'episode must match ^E\\d{3}$ (e.g. E001)', { received: episode }),
      { status: 400, headers: JSON_HEADERS },
    )
  }

  try {
    const state = await loadIntake(episode)
    logInfo(AREA, 'load_ok', {
      episode,
      audio: state.audio.length,
      stills: state.stills.length,
      clips: state.clips.length,
      subs: state.subs ? 1 : 0,
    })
    return NextResponse.json(state, { headers: JSON_HEADERS })
  } catch (err) {
    logError(AREA, 'load_failed', err, { episode })
    return NextResponse.json(
      apiError('internal', 'Failed to load intake state', redactRoot(String(err))),
      { status: 500, headers: JSON_HEADERS },
    )
  }
}
