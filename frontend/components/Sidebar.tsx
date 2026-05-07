'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

type NavItem = {
  href: string
  label: string
  /** Whether this item is considered active when the current path starts with `match`. */
  match?: (pathname: string) => boolean
}

const NAV: NavItem[] = [
  {
    href: '/',
    label: '마스터 그리드',
    match: (p) => p === '/' || p === '',
  },
  {
    href: '/episode/E001',
    label: 'E001 상세',
    match: (p) => p.startsWith('/episode/E001') && !p.endsWith('/workbench'),
  },
  {
    href: '/episode/E001/workbench',
    label: 'E001 워크벤치',
    match: (p) => p.startsWith('/episode/') && p.endsWith('/workbench'),
  },
  {
    href: '/episode/E001/storyboard',
    label: 'E001 스토리보드',
    match: (p) => p.startsWith('/episode/') && p.endsWith('/storyboard'),
  },
]

export function Sidebar() {
  const pathname = usePathname() ?? '/'

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
        {NAV.map((item) => {
          const active = item.match ? item.match(pathname) : pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                'troy-nav__item' + (active ? ' troy-nav__item--active' : '')
              }
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

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
