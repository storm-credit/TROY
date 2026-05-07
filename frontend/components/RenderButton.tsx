'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { useToast } from './ui/Toast'

export function RenderButton({ episodeId }: { episodeId: string }) {
  const [busy, setBusy] = useState(false)
  const [errorFlash, setErrorFlash] = useState(false)
  const toast = useToast()

  async function go() {
    setBusy(true)
    setErrorFlash(false)
    const startId = toast.info('렌더 시작…', `${episodeId} 요청 전송 중.`)
    try {
      const res = await fetch('/api/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episode: episodeId }),
      })
      toast.dismiss(startId)
      if (res.status === 404) {
        toast.info('렌더 엔드포인트 미구현', 'T2 작업에서 추가 예정.')
        return
      }
      const txt = await res.text().catch(() => '')
      if (!res.ok) {
        setErrorFlash(true)
        setTimeout(() => setErrorFlash(false), 700)
        toast.error(`렌더 실패 · HTTP ${res.status}`, txt.slice(0, 220) || undefined)
        return
      }
      toast.success('렌더 요청 완료', txt.slice(0, 220) || `${episodeId} 처리됨.`)
    } catch (e) {
      toast.dismiss(startId)
      setErrorFlash(true)
      setTimeout(() => setErrorFlash(false), 700)
      toast.error('렌더 실패', String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <Button
      type="button"
      variant="primary"
      size="lg"
      loading={busy}
      error={errorFlash}
      onClick={go}
    >
      {busy ? '요청 중…' : `▶ 렌더 시작 · ${episodeId}`}
    </Button>
  )
}
