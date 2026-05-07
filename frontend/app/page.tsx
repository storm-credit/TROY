import Link from 'next/link'
import { loadAllEpisodes, type Episode } from '@/lib/episodes'
import { ProgressBar, type ProgressTone } from '@/components/ui/ProgressBar'
import { Badge, phaseBadgeVariant } from '@/components/ui/Badge'
import { CellTooltip, type CellTooltipData } from '@/components/CellTooltip'

export const dynamic = 'force-dynamic'

type GateState = 'pass' | 'warn' | 'fail' | 'none'

function gateStatus(ep: Episode): GateState {
  if (!ep.audit) return 'none'
  const lengthOK = ep.audit.lengthStatus.includes('safe-line')
  const forbidOK = ep.audit.forbidden === 'pass'
  if (lengthOK && forbidOK) return 'pass'
  if (lengthOK || forbidOK) return 'warn'
  return 'fail'
}

function chapterRange(c: number): string {
  const s = (c - 1) * 20 + 1
  const e = c * 20
  return `E${String(s).padStart(3, '0')} – E${String(e).padStart(3, '0')}`
}

const CHAPTER_NAMES: Record<number, string> = {
  1: '제1악장 · 얇은 봄빛',
  2: '제2악장 · 닿기 시작하는 거리',
  3: '제3악장 · 겹쳐지는 운율',
  4: '제4악장 · 어긋남',
  5: '제5악장 · 다시 들리는 자리',
  6: '제6악장 · 고요의 완성',
}

const CHAPTER_PHASE: Record<number, number> = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
}

export default async function Page() {
  const eps = await loadAllEpisodes()

  const total = eps.length
  const manuscriptDone = eps.filter((e) => !!e.manuscriptPath).length
  const harnessDone = eps.filter((e) => e.hasHarness).length
  const songBriefDone = eps.filter((e) => e.hasSongBrief).length
  const visualCutDone = eps.filter((e) => e.hasVisualCutList).length
  const bibleDone = eps.filter((e) => e.hasProductionBible).length
  const gatePass = eps.filter((e) => gateStatus(e) === 'pass').length

  const byChapter: Record<number, Episode[]> = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] }
  for (const e of eps) byChapter[e.chapter].push(e)

  const ts = new Date()
  const hh = String(ts.getHours()).padStart(2, '0')
  const mm = String(ts.getMinutes()).padStart(2, '0')
  const lastSync = `${hh}:${mm}`

  return (
    <>
      <header className="troy-page-header">
        <div className="troy-page-header__title-block">
          <h2 className="troy-page-header__title">마스터 그리드</h2>
          <div className="troy-page-header__subtitle">
            <span>너라는 운율</span>
            <span className="dot">·</span>
            <span>{total} episodes</span>
            <span className="dot">·</span>
            <span>last sync {lastSync}</span>
          </div>
        </div>
      </header>

      <div className="troy-summary">
        <SummaryCard label="원고" done={manuscriptDone} total={total} tone="accent" />
        <SummaryCard label="하네스" done={harnessDone} total={total} tone="accent" />
        <SummaryCard label="송 브리프" done={songBriefDone} total={total} tone="accent" />
        <SummaryCard label="비주얼 컷" done={visualCutDone} total={total} tone="accent" />
        <SummaryCard label="프로덕션 바이블" done={bibleDone} total={total} tone="progress" />
        <SummaryCard label="게이트 PASS" done={gatePass} total={total} tone="ok" />
      </div>

      {[1, 2, 3, 4, 5, 6].map((c, idx) => (
        <section
          className="troy-chapter troy-chapter--reveal"
          key={c}
          style={{ animationDelay: `${idx * 60}ms` }}
        >
          <div className="troy-chapter__head">
            <span className="troy-chapter__name">{CHAPTER_NAMES[c]}</span>
            <div className="troy-chapter__meta">
              <span>{chapterRange(c)}</span>
              <Badge variant={phaseBadgeVariant(CHAPTER_PHASE[c])} size="sm">
                Phase {CHAPTER_PHASE[c]}
              </Badge>
            </div>
          </div>
          <div className="troy-grid">
            {byChapter[c].map((ep) => (
              <Cell key={ep.id} ep={ep} />
            ))}
          </div>
        </section>
      ))}

      <div className="troy-legend">
        <div className="troy-legend__group">
          <span className="u-text-faint">Phase</span>
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <span key={p} className="troy-legend__item">
              <span
                className="troy-legend__swatch"
                style={{ background: `var(--ph${p})` }}
              />
              {p}
            </span>
          ))}
        </div>
        <div className="troy-legend__group">
          <span className="u-text-faint">막대</span>
          <span className="troy-legend__item">
            <span
              className="troy-legend__bar"
              style={{ background: 'var(--status-ok)' }}
            />
            완료
          </span>
          <span className="troy-legend__item">
            <span
              className="troy-legend__bar"
              style={{ background: 'var(--status-progress)' }}
            />
            진행
          </span>
          <span className="troy-legend__item">
            <span
              className="troy-legend__bar"
              style={{ background: 'var(--status-pending)', opacity: 0.6 }}
            />
            미수행
          </span>
          <span className="troy-legend__item">
            <span
              className="troy-legend__bar"
              style={{ background: 'var(--status-fail)' }}
            />
            실패
          </span>
          <span className="u-text-dim u-mono-num">5 트랙: 원고 · 하네스 · 곡 · MV · 게이트</span>
        </div>
      </div>
    </>
  )
}

function SummaryCard({
  label,
  done,
  total,
  tone,
}: {
  label: string
  done: number
  total: number
  tone: ProgressTone
}) {
  const pct = total > 0 ? (done / total) * 100 : 0
  return (
    <div className="troy-summary__card">
      <div className="troy-summary__label">{label}</div>
      <div className="troy-summary__value">
        {done}
        <span className="troy-summary__value-total">/ {total}</span>
      </div>
      <div className="troy-summary__bar">
        <ProgressBar value={pct} size="sm" tone={tone} ariaLabel={`${label} 진행도`} />
      </div>
    </div>
  )
}

function Cell({ ep }: { ep: Episode }) {
  const gate = gateStatus(ep)

  const data: CellTooltipData = {
    id: ep.id,
    title: ep.title,
    chapter: ep.chapter,
    phase: ep.phase,
    manuscript: !!ep.manuscriptPath,
    harness: ep.hasHarness,
    songBrief: ep.hasSongBrief,
    visualCut: ep.hasVisualCutList,
    gate,
  }

  const link = (
    <Link
      href={`/episode/${ep.id}`}
      className={`troy-cell troy-cell--phase-${ep.phase}`}
      aria-label={`${ep.id} ${ep.title ? '· ' + ep.title.replace(/_/g, ' ') : ''}`}
    >
      <span className="troy-cell__stripe" />
      <span className="troy-cell__id">{ep.id}</span>
      <span className="troy-cell__phase">P{ep.phase}</span>
      <span className="troy-cell__bars" aria-hidden>
        <span
          className={
            'troy-cell__bar' + (ep.manuscriptPath ? ' troy-cell__bar--ok' : '')
          }
        />
        <span
          className={'troy-cell__bar' + (ep.hasHarness ? ' troy-cell__bar--ok' : '')}
        />
        <span
          className={
            'troy-cell__bar' + (ep.hasSongBrief ? ' troy-cell__bar--ok' : '')
          }
        />
        <span
          className={
            'troy-cell__bar' + (ep.hasVisualCutList ? ' troy-cell__bar--ok' : '')
          }
        />
        <span
          className={
            'troy-cell__bar' +
            (gate === 'pass'
              ? ' troy-cell__bar--ok'
              : gate === 'warn'
                ? ' troy-cell__bar--warn'
                : gate === 'fail'
                  ? ' troy-cell__bar--fail'
                  : '')
          }
        />
      </span>
    </Link>
  )

  return <CellTooltip data={data}>{link}</CellTooltip>
}
