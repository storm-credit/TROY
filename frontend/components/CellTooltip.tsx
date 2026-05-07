'use client'

import React from 'react'
import { Tooltip } from './ui/Tooltip'

export type CellTooltipData = {
  id: string
  title: string | null
  chapter: number
  phase: number
  manuscript: boolean
  harness: boolean
  songBrief: boolean
  visualCut: boolean
  gate: 'pass' | 'warn' | 'fail' | 'none'
}

function gateLabel(gate: CellTooltipData['gate']): { text: string; cls: string } {
  switch (gate) {
    case 'pass':
      return { text: 'PASS', cls: 'troy-tooltip__kv--ok' }
    case 'warn':
      return { text: 'WARN', cls: 'troy-tooltip__kv--warn' }
    case 'fail':
      return { text: 'FAIL', cls: 'troy-tooltip__kv--fail' }
    default:
      return { text: '—', cls: 'troy-tooltip__kv--pending' }
  }
}

function tick(on: boolean): { mark: string; cls: string } {
  return on
    ? { mark: '✓', cls: 'troy-tooltip__kv--ok' }
    : { mark: '—', cls: 'troy-tooltip__kv--pending' }
}

export function CellTooltip({
  data,
  children,
}: {
  data: CellTooltipData
  children: React.ReactElement
}) {
  const m = tick(data.manuscript)
  const h = tick(data.harness)
  const s = tick(data.songBrief)
  const v = tick(data.visualCut)
  const g = gateLabel(data.gate)

  const titleStr = data.title ? data.title.replace(/_/g, ' ') : ''
  const content = (
    <>
      <div className="troy-tooltip__title">
        {data.id}
        {titleStr ? ` · ${titleStr}` : ''}
      </div>
      <div className="troy-tooltip__sub">
        Chapter {data.chapter} · Phase {data.phase}
      </div>
      <div className="troy-tooltip__row">
        <span className={`troy-tooltip__kv ${m.cls}`}>원고 {m.mark}</span>
        <span className={`troy-tooltip__kv ${h.cls}`}>하네스 {h.mark}</span>
        <span className={`troy-tooltip__kv ${s.cls}`}>곡 {s.mark}</span>
        <span className={`troy-tooltip__kv ${v.cls}`}>MV {v.mark}</span>
        <span className={`troy-tooltip__kv ${g.cls}`}>게이트 {g.text}</span>
      </div>
    </>
  )

  return (
    <Tooltip content={content} multiline delay={350}>
      {children}
    </Tooltip>
  )
}
