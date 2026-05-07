'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

export type ToastVariant = 'success' | 'error' | 'info'

type ToastInput = {
  title?: string
  body?: React.ReactNode
  variant?: ToastVariant
  /** ms; if undefined, derives from variant. error toasts default to sticky. */
  duration?: number
}

type ToastInternal = ToastInput & {
  id: string
  variant: ToastVariant
  leaving?: boolean
}

type ToastApi = {
  toast: (input: ToastInput) => string
  success: (title: string, body?: React.ReactNode) => string
  error: (title: string, body?: React.ReactNode) => string
  info: (title: string, body?: React.ReactNode) => string
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastApi | null>(null)

const DEFAULT_DURATION: Record<ToastVariant, number | undefined> = {
  success: 3000,
  info: 4000,
  error: undefined, // sticky
}

let _seq = 0
const newId = () => `toast-${Date.now().toString(36)}-${(_seq++).toString(36)}`

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastInternal[]>([])
  const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>())

  const dismiss = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)),
    )
    const t = timers.current.get(id)
    if (t) {
      clearTimeout(t)
      timers.current.delete(id)
    }
    // remove fully after exit transition
    setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.id !== id))
    }, 180)
  }, [])

  const push = useCallback(
    (input: ToastInput): string => {
      const id = newId()
      const variant: ToastVariant = input.variant ?? 'info'
      const item: ToastInternal = { ...input, id, variant }
      setItems((prev) => {
        // cap at 4 stacked
        const next = [...prev, item]
        return next.length > 4 ? next.slice(next.length - 4) : next
      })
      const dur = input.duration ?? DEFAULT_DURATION[variant]
      if (dur != null) {
        const handle = setTimeout(() => dismiss(id), dur)
        timers.current.set(id, handle)
      }
      return id
    },
    [dismiss],
  )

  const api = useMemo<ToastApi>(
    () => ({
      toast: push,
      success: (title, body) => push({ title, body, variant: 'success' }),
      error: (title, body) => push({ title, body, variant: 'error' }),
      info: (title, body) => push({ title, body, variant: 'info' }),
      dismiss,
    }),
    [push, dismiss],
  )

  useEffect(() => {
    return () => {
      for (const t of timers.current.values()) clearTimeout(t)
      timers.current.clear()
    }
  }, [])

  return (
    <ToastContext.Provider value={api}>
      {children}
      <ToastRegion items={items} onDismiss={dismiss} />
    </ToastContext.Provider>
  )
}

function ToastRegion({
  items,
  onDismiss,
}: {
  items: ToastInternal[]
  onDismiss: (id: string) => void
}) {
  if (items.length === 0) return null
  return (
    <div className="troy-toast-region" aria-live="polite" aria-atomic="false">
      {items.map((t) => (
        <div
          key={t.id}
          role={t.variant === 'error' ? 'alert' : 'status'}
          className={[
            'troy-toast',
            `troy-toast--${t.variant}`,
            t.leaving && 'troy-toast--leaving',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="troy-toast__content">
            {t.title && <div className="troy-toast__title">{t.title}</div>}
            {t.body && <div className="troy-toast__body">{t.body}</div>}
          </div>
          <button
            type="button"
            aria-label="dismiss"
            className="troy-toast__close"
            onClick={() => onDismiss(t.id)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

export function useToast(): ToastApi {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    // Graceful no-op fallback so missing provider doesn't crash render.
    const noop = (): string => ''
    return {
      toast: noop,
      success: noop,
      error: noop,
      info: noop,
      dismiss: () => {},
    }
  }
  return ctx
}
