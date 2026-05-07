'use client'

import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/Button'

type ThemeChoice = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'troy:theme'
const ORDER: ThemeChoice[] = ['system', 'light', 'dark']

function readStored(): ThemeChoice {
  if (typeof window === 'undefined') return 'system'
  const v = window.localStorage.getItem(STORAGE_KEY)
  if (v === 'light' || v === 'dark' || v === 'system') return v
  return 'system'
}

function applyChoice(choice: ThemeChoice): void {
  const html = document.documentElement
  if (choice === 'system') html.removeAttribute('data-theme')
  else html.setAttribute('data-theme', choice)
}

function nextChoice(c: ThemeChoice): ThemeChoice {
  const i = ORDER.indexOf(c)
  return ORDER[(i + 1) % ORDER.length]
}

function labelFor(c: ThemeChoice): string {
  switch (c) {
    case 'light': return '라이트'
    case 'dark':  return '다크'
    default:      return '시스템'
  }
}

/* Hand-rolled inline SVGs, ~14px, currentColor. */
function IconSun() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}
function IconMoon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
function IconHalfMoon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ThemeToggle() {
  // Start `null` until mounted to avoid hydration mismatch — server can't know
  // localStorage. The pre-hydration script in <head> already applied the right
  // data-theme so first paint is correct regardless.
  const [choice, setChoice] = useState<ThemeChoice | null>(null)

  useEffect(() => {
    setChoice(readStored())
  }, [])

  const onClick = useCallback(() => {
    setChoice((prev) => {
      const cur = prev ?? readStored()
      const next = nextChoice(cur)
      try { window.localStorage.setItem(STORAGE_KEY, next) } catch {}
      applyChoice(next)
      return next
    })
  }, [])

  const current: ThemeChoice = choice ?? 'system'
  const icon =
    current === 'light' ? <IconSun /> :
    current === 'dark'  ? <IconMoon /> :
                          <IconHalfMoon />

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      leadingIcon={icon}
      aria-label={`테마 전환 (현재: ${labelFor(current)})`}
      title={`테마: ${labelFor(current)} (클릭해 전환)`}
    >
      {labelFor(current)}
    </Button>
  )
}
