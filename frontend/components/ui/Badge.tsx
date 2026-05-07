import React from 'react'

export type BadgeVariant =
  | 'ok'
  | 'progress'
  | 'pending'
  | 'warn'
  | 'fail'
  | 'info'
  | 'phase-1'
  | 'phase-2'
  | 'phase-3'
  | 'phase-4'
  | 'phase-5'
  | 'phase-6'

export type BadgeSize = 'sm' | 'md'

type BadgeProps = {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  className?: string
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'className' | 'children'>

export function Badge({
  variant = 'pending',
  size = 'md',
  dot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  const cls = [
    'troy-badge',
    `troy-badge--${variant}`,
    `troy-badge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <span className={cls} {...rest}>
      {dot && <span className="troy-badge__dot" aria-hidden />}
      {children}
    </span>
  )
}

export function phaseBadgeVariant(phase: number): BadgeVariant {
  const p = Math.min(6, Math.max(1, phase))
  return `phase-${p}` as BadgeVariant
}
