'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const EPISODE_RE = /^\/episode\/(E\d{3})/

/**
 * Extract the current episode id from the pathname.
 * Falls back to E001 when on the master grid (no current episode in URL).
 */
function currentEpisode(pathname: string): string {
  const m = pathname.match(EPISODE_RE)
  return m ? m[1] : 'E001'
}

export function Sidebar() {
  const pathname = usePathname() ?? '/'
  const ep = currentEpisode(pathname)
  const [jumpValue, setJumpValue] = useState('')

  const onMasterGrid = pathname === '/' || pathname === ''
  const onDetail = pathname === `/episode/${ep}`
  const onWorkbench = pathname.startsWith(`/episode/${ep}`) && pathname.endsWith('/workbench')
  const onStoryboard = pathname.startsWith(`/episode/${ep}`) && pathname.endsWith('/storyboard')

  function handleJump(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const v = jumpValue.trim().toUpperCase()
    const m = v.match(/^E?(\d{1,3})$/)
    if (!m) return
    const num = Math.max(1, Math.min(120, Number(m[1])))
    const targetId = `E${String(num).padStart(3, '0')}`
    // Stay on the same sub-section (detail/workbench/storyboard) if applicable
    let suffix = ''
    if (pathname.endsWith('/workbench')) suffix = '/workbench'
    else if (pathname.endsWith('/storyboard')) suffix = '/storyboard'
    window.location.href = `/episode/${targetId}${suffix}`
  }

  return (
    <aside className="troy-sidebar" aria-label="primary navigation">
      <div className="troy-sidebar__brand">
        <h1 className="troy-sidebar__wordmark">TROY</h1>
        <div className="troy-sidebar__title">너라는 운율</div>
        <div className="troy-sidebar__sub">120화 콘솔</div>
      </div>

      <hr className="troy-sidebar__divider" />

      <nav className="troy-nav" aria-label="sections">
        <div className="troy-sidebar__section-label">콘솔</div>
        <Link
          href="/"
          className={'troy-nav__item' + (onMasterGrid ? ' troy-nav__item--active' : '')}
          aria-current={onMasterGrid ? 'page' : undefined}
        >
          마스터 그리드
        </Link>

        <div className="troy-sidebar__section-label" style={{ marginTop: 'var(--space-md)' }}>
          현재 — {ep}
        </div>
        <Link
          href={`/episode/${ep}`}
          className={'troy-nav__item' + (onDetail ? ' troy-nav__item--active' : '')}
          aria-current={onDetail ? 'page' : undefined}
        >
          {ep} 상세
        </Link>
        <Link
          href={`/episode/${ep}/workbench`}
          className={'troy-nav__item' + (onWorkbench ? ' troy-nav__item--active' : '')}
          aria-current={onWorkbench ? 'page' : undefined}
        >
          {ep} 워크벤치
        </Link>
        <Link
          href={`/episode/${ep}/storyboard`}
          className={'troy-nav__item' + (onStoryboard ? ' troy-nav__item--active' : '')}
          aria-current={onStoryboard ? 'page' : undefined}
        >
          {ep} 스토리보드
        </Link>
      </nav>

      <form onSubmit={handleJump} className="troy-sidebar__jump" aria-label="episode jump">
        <label htmlFor="ep-jump" className="troy-sidebar__section-label" style={{ padding: 0 }}>
          이동
        </label>
        <div className="troy-sidebar__jump-row">
          <input
            id="ep-jump"
            type="text"
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            placeholder="예: 045 또는 E045"
            className="troy-sidebar__jump-input"
            inputMode="numeric"
            pattern="E?\d{1,3}"
            aria-label="에피소드 번호로 이동"
          />
          <button
            type="submit"
            className="troy-btn troy-btn--ghost troy-btn--sm troy-sidebar__jump-btn"
            aria-label="이동"
          >
            →
          </button>
        </div>
      </form>

      <div className="troy-sidebar__spacer" />

      <hr className="troy-sidebar__divider" />
      <div className="troy-sidebar__footer">
        <div className="troy-sidebar__footer-row">
          <ThemeToggle />
        </div>
        <div>local · 너라는 운율</div>
        <div>build · dev</div>
      </div>
    </aside>
  )
}
