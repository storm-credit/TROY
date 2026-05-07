'use client'

import { useCallback, useState } from 'react'
import { DropZone } from './ui/DropZone'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { useToast } from './ui/Toast'

type SavedItem = {
  episode: string
  kind: string
  variant?: string
  cut?: number
  ext: string
  originalName: string
  savedRelPath: string
  sizeBytes: number
  savedAt: string
}

type UnroutedItem = { name: string; reason: string }

type UploadResult = {
  saved: SavedItem[]
  unrouted: UnroutedItem[]
} | null

export type IntakeKindFilter = 'audio' | 'stills' | 'clips' | 'subs' | 'any'

export function IntakeDropZone({
  episodeId,
  onUpload,
  kindFilter = 'any',
  label,
  hint,
}: {
  episodeId: string
  onUpload: () => void
  kindFilter?: IntakeKindFilter
  label?: string
  hint?: string
}) {
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<UploadResult>(null)
  const [error, setError] = useState<string | null>(null)
  const [flash, setFlash] = useState<'success' | 'error' | null>(null)
  const toast = useToast()

  const accept =
    kindFilter === 'audio'
      ? '.mp3,.wav,.m4a'
      : kindFilter === 'stills'
        ? '.png,.jpg,.jpeg,.webp'
        : kindFilter === 'clips'
          ? '.mp4,.mov,.webm'
          : kindFilter === 'subs'
            ? '.srt,.vtt'
            : '.mp3,.wav,.m4a,.png,.jpg,.jpeg,.webp,.mp4,.mov,.webm,.srt,.vtt'

  const upload = useCallback(
    async (files: FileList | File[]) => {
      const arr = Array.from(files)
      if (arr.length === 0) return
      setBusy(true)
      setError(null)
      setResult(null)
      setFlash(null)
      try {
        const fd = new FormData()
        for (const f of arr) fd.append('files', f, f.name)
        const res = await fetch('/api/intake', { method: 'POST', body: fd })
        if (!res.ok) {
          const txt = await res.text().catch(() => '')
          throw new Error(`HTTP ${res.status}: ${txt.slice(0, 200)}`)
        }
        const json = (await res.json()) as UploadResult
        setResult(json)
        if (json) {
          if (json.saved.length > 0 && json.unrouted.length === 0) {
            toast.success(`저장됨 · ${json.saved.length} 파일`, fileSummary(json.saved))
            setFlash('success')
          } else if (json.saved.length > 0) {
            toast.success(`저장됨 · ${json.saved.length} 파일`, fileSummary(json.saved))
            toast.error(`라우팅 실패 · ${json.unrouted.length}`, unroutedSummary(json.unrouted))
            setFlash('success')
          } else {
            toast.error(`라우팅 실패 · ${json.unrouted.length}`, unroutedSummary(json.unrouted))
            setFlash('error')
          }
        }
        onUpload()
      } catch (err) {
        const msg = String(err)
        setError(msg)
        setFlash('error')
        toast.error('업로드 실패', msg)
      } finally {
        setBusy(false)
        // auto-clear success flash
        setTimeout(() => setFlash(null), 2200)
      }
    },
    [onUpload, toast],
  )

  const expectedExamples =
    kindFilter === 'audio'
      ? `${episodeId}_master.mp3 · ${episodeId}_var_a_lofi.mp3 · ${episodeId}_var_b_altfolk.mp3`
      : kindFilter === 'stills'
        ? `${episodeId}_cut_01.png … ${episodeId}_cut_16.png`
        : kindFilter === 'clips'
          ? `${episodeId}_cut_01.mp4 … ${episodeId}_cut_16.mp4`
          : kindFilter === 'subs'
            ? `${episodeId}.srt`
            : `${episodeId}_master.mp3 · ${episodeId}_cut_03.png · ${episodeId}_cut_03.mp4 · ${episodeId}.srt`

  const titleText = busy
    ? '업로드 중…'
    : (hint ?? `${kindLabel(kindFilter)} 드롭 또는 클릭`)

  return (
    <Card>
      {label && <Card.Header title={label} />}
      <Card.Body>
        <DropZone
          accept={accept}
          state={flash}
          busy={busy}
          onFiles={upload}
          ariaLabel={label ?? '파일 업로드'}
          title={titleText}
          hint={
            <>
              허용 파일명: <code>{expectedExamples}</code>
            </>
          }
        />

        {error && (
          <div
            className="troy-inline-msg troy-inline-msg--error"
            style={{ marginTop: 'var(--space-md)' }}
          >
            {error}
          </div>
        )}

        {result && (
          <div style={{ marginTop: 'var(--space-md)' }}>
            {result.saved.length > 0 && (
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-dim)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  <Badge variant="ok" size="sm">저장됨</Badge>
                  <span>{result.saved.length} 파일</span>
                </div>
                <div>
                  {result.saved.map((s) => (
                    <div className="troy-filerow" key={s.savedRelPath}>
                      <span className="troy-filerow__status--ok">
                        <Badge
                          variant="ok"
                          size="sm"
                        >
                          {s.kind}
                          {s.variant ? ` · ${s.variant}` : ''}
                          {s.cut != null ? ` · cut ${s.cut}` : ''}
                        </Badge>
                      </span>
                      <span className="troy-filerow__name" title={s.savedRelPath}>
                        {s.originalName}
                      </span>
                      <span className="troy-filerow__meta">
                        {Math.round(s.sizeBytes / 1024)} KB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {result.unrouted.length > 0 && (
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-dim)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  <Badge variant="warn" size="sm">라우팅 실패</Badge>
                  <span>{result.unrouted.length} 파일</span>
                </div>
                <div>
                  {result.unrouted.map((u, i) => (
                    <div className="troy-filerow" key={`${u.name}-${i}`}>
                      <span className="troy-filerow__status--warn">
                        <Badge variant="warn" size="sm">unrouted</Badge>
                      </span>
                      <span className="troy-filerow__name">{u.name}</span>
                      <span className="troy-filerow__meta">{u.reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

function kindLabel(k: IntakeKindFilter): string {
  switch (k) {
    case 'audio':
      return 'mp3 / wav / m4a 오디오'
    case 'stills':
      return 'png / jpg 스틸'
    case 'clips':
      return 'mp4 / mov 클립'
    case 'subs':
      return 'srt / vtt 자막'
    default:
      return 'mp3 / png / mp4 / srt'
  }
}

function fileSummary(saved: SavedItem[]): string {
  return saved
    .slice(0, 3)
    .map((s) => s.originalName)
    .join(' · ') + (saved.length > 3 ? ' …' : '')
}

function unroutedSummary(unrouted: UnroutedItem[]): string {
  return unrouted
    .slice(0, 3)
    .map((u) => `${u.name} (${u.reason})`)
    .join(' · ') + (unrouted.length > 3 ? ' …' : '')
}
