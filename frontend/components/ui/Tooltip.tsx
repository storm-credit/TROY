'use client'

import React, {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
} from 'react'

type TooltipProps = {
  content: React.ReactNode
  delay?: number
  multiline?: boolean
  /**
   * The single element that becomes the tooltip's anchor.
   * It must accept children. The tooltip wraps a positioning span around it,
   * so the wrapper attaches mouse/focus listeners — the child stays unchanged.
   */
  children: ReactElement
  className?: string
}

type Side = 'top' | 'bottom'
type Placement = {
  side: Side
  /** horizontal pixel offset relative to the anchor's centre (positive = shift right) */
  shiftX: number
}

const VIEWPORT_PAD = 8

export function Tooltip({
  content,
  delay = 400,
  multiline = false,
  children,
  className,
}: TooltipProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [placement, setPlacement] = useState<Placement>({ side: 'top', shiftX: 0 })
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const anchorRef = useRef<HTMLSpanElement | null>(null)
  const tooltipRef = useRef<HTMLSpanElement | null>(null)
  const id = useId()

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }, [])

  const computePlacement = useCallback(() => {
    const anchor = anchorRef.current
    const tip = tooltipRef.current
    if (!anchor || !tip) return
    const a = anchor.getBoundingClientRect()
    const t = tip.getBoundingClientRect()
    const vh = window.innerHeight
    const vw = window.innerWidth

    const spaceAbove = a.top
    const spaceBelow = vh - a.bottom
    const needed = t.height + 8

    // Default: prefer top (current behaviour). Flip down only if top doesn't fit.
    let side: Side = 'top'
    if (spaceAbove < needed && spaceBelow >= needed) side = 'bottom'
    else if (spaceAbove < needed && spaceBelow < spaceAbove) side = 'bottom'

    // Horizontal clamp — anchor centre, then shift if tip would clip.
    const anchorCentre = a.left + a.width / 2
    const halfTip = t.width / 2
    let shiftX = 0
    const leftEdge = anchorCentre - halfTip
    const rightEdge = anchorCentre + halfTip
    if (leftEdge < VIEWPORT_PAD) shiftX = VIEWPORT_PAD - leftEdge
    else if (rightEdge > vw - VIEWPORT_PAD) shiftX = vw - VIEWPORT_PAD - rightEdge

    setPlacement((prev) =>
      prev.side === side && prev.shiftX === shiftX ? prev : { side, shiftX },
    )
  }, [])

  const show = useCallback(() => {
    clear()
    timer.current = setTimeout(() => {
      setMounted(true)
      // wait a tick before applying visible class for transition
      requestAnimationFrame(() => setOpen(true))
    }, delay)
  }, [clear, delay])

  const hide = useCallback(() => {
    clear()
    setOpen(false)
    // unmount after transition completes
    timer.current = setTimeout(() => setMounted(false), 160)
  }, [clear])

  useEffect(() => clear, [clear])

  // Recompute on mount of tip + on viewport changes while open.
  useLayoutEffect(() => {
    if (!mounted) return
    computePlacement()
  }, [mounted, computePlacement])

  useEffect(() => {
    if (!mounted) return
    const onResize = () => computePlacement()
    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('scroll', onResize, { passive: true, capture: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onResize, true)
    }
  }, [mounted, computePlacement])

  if (!isValidElement(children)) return children

  // attach the aria-describedby so screen readers find the tooltip
  const child = cloneElement(children as ReactElement<{ 'aria-describedby'?: string }>, {
    'aria-describedby': open ? id : undefined,
  })

  const tipStyle =
    placement.shiftX !== 0
      ? ({ ['--troy-tooltip-shift' as string]: `${placement.shiftX}px` } as React.CSSProperties)
      : undefined

  return (
    <span
      ref={anchorRef}
      className={['troy-tooltip-anchor', className].filter(Boolean).join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {child}
      {mounted && (
        <span
          ref={tooltipRef}
          id={id}
          role="tooltip"
          data-side={placement.side}
          style={tipStyle}
          className={[
            'troy-tooltip',
            open && 'troy-tooltip--visible',
            multiline && 'troy-tooltip--multiline',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {content}
        </span>
      )}
    </span>
  )
}
