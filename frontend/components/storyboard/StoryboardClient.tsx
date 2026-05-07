'use client'

import { useCallback, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'

type RegenerateProps = {
  episodeId: string
  songLengthSec: number
  cutOverride: number | undefined
}

export function RegenerateForm({ episodeId, songLengthSec, cutOverride }: RegenerateProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [length, setLength] = useState(String(songLengthSec))
  const [override, setOverride] = useState(cutOverride != null ? String(cutOverride) : '')

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const params = new URLSearchParams()
      params.set('songLengthSec', length)
      if (override) params.set('cutOverride', override)
      startTransition(() => {
        router.push(`/episode/${episodeId}/storyboard?${params.toString()}`)
      })
    },
    [episodeId, length, override, router],
  )

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
      }}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xs)' }}>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-dim)' }}>
          song length (sec)
        </span>
        <input
          type="number"
          min={60}
          max={360}
          step={1}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="u-mono-num"
          style={{
            width: '6rem',
            padding: 'var(--space-xs) var(--space-sm)',
            background: 'var(--surface-sunken)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-strong)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-md)',
          }}
        />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xs)' }}>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-dim)' }}>
          cut override (optional)
        </span>
        <input
          type="number"
          min={4}
          max={30}
          step={1}
          value={override}
          onChange={(e) => setOverride(e.target.value)}
          placeholder="auto"
          className="u-mono-num"
          style={{
            width: '6rem',
            padding: 'var(--space-xs) var(--space-sm)',
            background: 'var(--surface-sunken)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-strong)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-md)',
          }}
        />
      </label>
      <Button type="submit" variant="primary" size="md" loading={isPending}>
        Generate
      </Button>
    </form>
  )
}

type ExportProps = {
  episodeId: string
  songLengthSec: number
  cutOverride: number | undefined
}

export function ExportAllButton({ episodeId, songLengthSec, cutOverride }: ExportProps) {
  const toast = useToast()
  const [busy, setBusy] = useState(false)

  const onClick = useCallback(async () => {
    setBusy(true)
    try {
      const params = new URLSearchParams()
      params.set('songLengthSec', String(songLengthSec))
      if (cutOverride != null) params.set('cutOverride', String(cutOverride))
      const r = await fetch(`/api/storyboard/${episodeId}?${params.toString()}`)
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      const text = await r.text()
      const blob = new Blob([text], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${episodeId}_storyboard.json`
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
      toast.success('내보내기 완료', `${episodeId}_storyboard.json`)
    } catch (err) {
      toast.error('내보내기 실패', err instanceof Error ? err.message : 'unknown')
    } finally {
      setBusy(false)
    }
  }, [episodeId, songLengthSec, cutOverride, toast])

  return (
    <Button variant="secondary" size="md" onClick={onClick} loading={busy}>
      Export all (JSON)
    </Button>
  )
}
