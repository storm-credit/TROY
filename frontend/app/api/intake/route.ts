import { NextRequest, NextResponse } from 'next/server'
import fs from 'node:fs/promises'
import path from 'node:path'
import { parseFilename, intakeRelPath, ACCEPT_EXT, type ParsedAsset } from '@/lib/intake-spec'
import { TROY_ROOT } from '@/lib/paths'
import { appendIntakeMeta, safeJoin } from '@/lib/intake'
import { logInfo, logError } from '@/app/api/_lib/log'
import { apiError, redactRoot } from '@/app/api/_lib/validate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const AREA = 'intake'
const MAX_BYTES = 50 * 1024 * 1024 // 50 MB — matches next.config.ts serverActions.bodySizeLimit

type SavedRecord = ParsedAsset & {
  originalName: string
  savedRelPath: string
  sizeBytes: number
  savedAt: string
}

type UnroutedRecord = { name: string; reason: string }

/** Collect all allowed extensions as a flat set for fast lookup. */
const ALLOWED_EXTS: Set<string> = new Set(
  Object.values(ACCEPT_EXT).flat(),
)

export async function POST(req: NextRequest) {
  logInfo(AREA, 'request', { method: 'POST', path: '/api/intake' })

  // ── Parse multipart form ────────────────────────────────────────────────────
  let form: FormData
  try {
    form = await req.formData()
  } catch (err) {
    logError(AREA, 'form_parse_failed', err)
    return NextResponse.json(
      apiError('bad_request', 'Could not parse multipart form data', String(err)),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      },
    )
  }

  const files = form.getAll('files').filter((v): v is File => v instanceof File)
  if (files.length === 0) {
    return NextResponse.json(
      apiError('bad_request', 'No files provided in "files" field'),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      },
    )
  }

  const saved: SavedRecord[] = []
  const unrouted: UnroutedRecord[] = []

  for (const file of files) {
    const originalName = file.name
    if (!originalName) {
      unrouted.push({ name: '(unnamed)', reason: 'missing filename' })
      continue
    }

    // ── Extension whitelist (ACCEPT_EXT) ────────────────────────────────────
    const ext = path.extname(originalName).toLowerCase()
    if (!ALLOWED_EXTS.has(ext)) {
      unrouted.push({ name: originalName, reason: `extension not allowed: ${ext}` })
      continue
    }

    // ── Per-file size limit ──────────────────────────────────────────────────
    if (file.size > MAX_BYTES) {
      unrouted.push({
        name: originalName,
        reason: `too large (${file.size} bytes > ${MAX_BYTES} limit)`,
      })
      continue
    }

    // ── Filename parsing (episode + kind inference) ──────────────────────────
    const parsed = parseFilename(originalName)
    if (!parsed) {
      unrouted.push({ name: originalName, reason: 'unparseable filename' })
      continue
    }

    // ── Path safety ──────────────────────────────────────────────────────────
    const rel = intakeRelPath(parsed)
    let abs: string
    try {
      abs = safeJoin(rel)
    } catch (err) {
      logError(AREA, 'path_escape', err, { name: originalName })
      unrouted.push({ name: originalName, reason: 'path escape detected' })
      continue
    }

    // Double-check resolved path stays under TROY_ROOT
    const relCheck = path.relative(TROY_ROOT, abs)
    if (relCheck.startsWith('..') || path.isAbsolute(relCheck)) {
      logWarn(AREA, 'path_escape_secondary', { name: originalName, relCheck })
      unrouted.push({ name: originalName, reason: 'path escape detected' })
      continue
    }

    // ── Write to disk ────────────────────────────────────────────────────────
    try {
      await fs.mkdir(path.dirname(abs), { recursive: true })
      const ab = await file.arrayBuffer()
      const buf = Buffer.from(ab)
      await fs.writeFile(abs, buf)

      const savedAt = new Date().toISOString()
      await appendIntakeMeta(parsed.episode, {
        savedAt,
        originalName,
        kind: parsed.kind,
        variant: parsed.variant,
        cut: parsed.cut,
        sizeBytes: buf.length,
      })

      saved.push({
        ...parsed,
        originalName,
        savedRelPath: rel,
        sizeBytes: buf.length,
        savedAt,
      })
    } catch (err) {
      logError(AREA, 'write_failed', err, { name: originalName })
      unrouted.push({
        name: originalName,
        reason: `write failed: ${redactRoot(String(err))}`,
      })
    }
  }

  logInfo(AREA, 'upload_complete', {
    saved: saved.length,
    unrouted: unrouted.length,
    episodes: [...new Set(saved.map((s) => s.episode))].join(','),
  })

  // Success shape unchanged (saved + unrouted)
  return NextResponse.json(
    { saved, unrouted },
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    },
  )
}

// ── private helpers ────────────────────────────────────────────────────────────
function logWarn(area: string, event: string, kv?: Record<string, unknown>): void {
  const pairs = kv
    ? ' ' + Object.entries(kv).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(' ')
    : ''
  console.warn(`[troy:api:${area}] ${event}${pairs}`)
}
