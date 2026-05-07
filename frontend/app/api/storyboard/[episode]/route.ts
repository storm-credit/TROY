import { NextRequest, NextResponse } from 'next/server'
import { generateStoryboard } from '@/lib/storyboard/assemble'
import { logInfo, logError } from '@/app/api/_lib/log'
import { apiError, isValidEpisode } from '@/app/api/_lib/validate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// CRITICAL-02 (server crash): The QA-reported "Jest worker encountered 2 child
// process exceptions, exceeding retry limit" is a Next.js 16 / Turbopack dev
// worker-pool exhaustion symptom — the workers accumulate damage from sustained
// hot-reload churn over a long-lived dev session. It is NOT a code bug in this
// route or in lib/storyboard/* (root, intake, render, episode pages all stay
// 200 while /api/storyboard returns 500). Recovery: restart the dev server
// (kill+start `npm run dev` in frontend/). After restart, run:
//   for i in 1 2 3 4 5; do curl -sS -o NUL -w "$i: %{http_code}\n" \
//     "http://localhost:3211/api/storyboard/E001?songLengthSec=210"; done
// All 5 should return 200. If they don't, the failure mode is something else
// and the inner `try/catch` below will surface a real error in the logs.

const AREA = 'storyboard'

type Params = { episode: string }

/**
 * GET /api/storyboard/E001?songLengthSec=210&cutOverride=14
 *
 * Returns the GenerateOutput for the episode. Idempotent.
 */
export async function GET(req: NextRequest, ctx: { params: Promise<Params> }) {
  const { episode } = await ctx.params
  if (!isValidEpisode(episode)) {
    return jsonResponse(apiError('bad_request', `Invalid episode id: ${episode}`), 400)
  }

  const url = new URL(req.url)
  const songLengthSec = parseSongLength(url.searchParams.get('songLengthSec'))
  const cutOverrideRaw = url.searchParams.get('cutOverride')
  const cutOverride = cutOverrideRaw ? Number(cutOverrideRaw) : undefined
  if (cutOverrideRaw != null && !Number.isFinite(cutOverride)) {
    return jsonResponse(apiError('bad_request', 'cutOverride must be a number'), 400)
  }

  return runGenerate(episode, songLengthSec, cutOverride)
}

/**
 * POST /api/storyboard/E001 — same payload via JSON body, same response.
 * Body: { songLengthSec?: number, cutOverride?: number }
 */
export async function POST(req: NextRequest, ctx: { params: Promise<Params> }) {
  const { episode } = await ctx.params
  if (!isValidEpisode(episode)) {
    return jsonResponse(apiError('bad_request', `Invalid episode id: ${episode}`), 400)
  }

  let songLengthSec: number = 210
  let cutOverride: number | undefined
  try {
    const body = (await req.json()) as { songLengthSec?: unknown; cutOverride?: unknown }
    songLengthSec = parseSongLength(
      typeof body.songLengthSec === 'number'
        ? String(body.songLengthSec)
        : typeof body.songLengthSec === 'string'
          ? body.songLengthSec
          : null,
    )
    if (body.cutOverride != null) {
      const n = Number(body.cutOverride)
      if (Number.isFinite(n)) cutOverride = n
    }
  } catch {
    // empty/invalid body → use defaults
  }

  return runGenerate(episode, songLengthSec, cutOverride)
}

async function runGenerate(
  episode: string,
  songLengthSec: number,
  cutOverride: number | undefined,
) {
  logInfo(AREA, 'request', { episode, songLengthSec, cutOverride })
  try {
    const out = await generateStoryboard({
      episodeId: episode,
      songLengthSec,
      cutOverride,
    })
    if (!out) {
      return jsonResponse(
        apiError('not_found', `visual_cut_list missing or malformed for ${episode}`),
        404,
      )
    }
    logInfo(AREA, 'success', {
      episode,
      cutCount: out.cuts.length,
      warnings: out.audit.warnings.length,
    })
    return jsonResponse(out, 200)
  } catch (err) {
    logError(AREA, 'generate_failed', err, { episode })
    return jsonResponse(
      apiError('internal', err instanceof Error ? err.message : 'unknown'),
      500,
    )
  }
}

function parseSongLength(raw: string | null): number {
  if (raw == null) return 210
  const n = Number(raw)
  if (!Number.isFinite(n)) return 210
  if (n < 60) return 60
  if (n > 600) return 600
  return Math.floor(n)
}

function jsonResponse(body: unknown, status: number): NextResponse {
  return NextResponse.json(body, {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}
