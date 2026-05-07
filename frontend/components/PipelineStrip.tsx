import React from 'react'

export type PipelineStage = {
  id: string
  label: string
  /** Optional inline hint such as "3 / 16". If not provided, an attempt is made to parse from label. */
  hint?: string
  status: 'done' | 'in-progress' | 'pending'
}

const HINT_RE = /\(([^)]+)\)/

function splitLabel(stage: PipelineStage): { label: string; hint?: string } {
  if (stage.hint) return { label: stage.label, hint: stage.hint }
  const m = stage.label.match(HINT_RE)
  if (m) {
    const hint = m[1].replace(/\//g, ' / ').trim()
    const label = stage.label.replace(HINT_RE, '').trim()
    return { label, hint }
  }
  return { label: stage.label }
}

export function PipelineStrip({ stages }: { stages: PipelineStage[] }) {
  return (
    <div className="troy-pipeline-wrap">
      <div className="troy-pipeline" role="list" aria-label="pipeline stages">
        {stages.map((s) => {
          const { label, hint } = splitLabel(s)
          return (
            <div
              key={s.id}
              role="listitem"
              className={`troy-pipeline__stage troy-pipeline__stage--${s.status}`}
              title={`${label}${hint ? ' · ' + hint : ''} · ${s.status}`}
            >
              <span className="troy-pipeline__label">{label}</span>
              <span className="troy-pipeline__hint">
                {hint ?? statusKor(s.status)}
              </span>
            </div>
          )
        })}
      </div>
      <span className="troy-pipeline__overflow-hint" aria-hidden>›</span>
    </div>
  )
}

function statusKor(s: PipelineStage['status']): string {
  switch (s) {
    case 'done':
      return '완료'
    case 'in-progress':
      return '진행'
    default:
      return '미수행'
  }
}
