import React from 'react'

export type ProgressTone = 'accent' | 'ok' | 'progress' | 'warn' | 'fail'
export type ProgressSize = 'sm' | 'md'

type ProgressBarProps = {
  /** 0-100. If omitted, treated as indeterminate. */
  value?: number
  size?: ProgressSize
  tone?: ProgressTone
  indeterminate?: boolean
  className?: string
  ariaLabel?: string
}

const TONE_CLASS: Record<ProgressTone, string> = {
  accent: '',
  ok: 'troy-progress__fill--ok',
  progress: 'troy-progress__fill--progress',
  warn: 'troy-progress__fill--warn',
  fail: 'troy-progress__fill--fail',
}

export function ProgressBar({
  value,
  size = 'md',
  tone = 'accent',
  indeterminate = false,
  className,
  ariaLabel,
}: ProgressBarProps) {
  const isIndet = indeterminate || value == null
  const clamped = isIndet ? 30 : Math.max(0, Math.min(100, value as number))
  const cls = [
    'troy-progress',
    `troy-progress--${size}`,
    isIndet && 'troy-progress--indeterminate',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={cls}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={isIndet ? undefined : clamped}
      aria-label={ariaLabel}
    >
      <span
        className={['troy-progress__fill', TONE_CLASS[tone]].filter(Boolean).join(' ')}
        style={isIndet ? undefined : { width: `${clamped}%` }}
      />
    </div>
  )
}
