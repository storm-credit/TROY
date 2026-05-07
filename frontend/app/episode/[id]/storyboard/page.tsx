import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadEpisode } from '@/lib/episodes'
import { generateStoryboard } from '@/lib/storyboard/assemble'
import { Card } from '@/components/ui/Card'
import { Badge, phaseBadgeVariant } from '@/components/ui/Badge'
import { CutCard } from '@/components/storyboard/CutCard'
import { ExportAllButton, RegenerateForm } from '@/components/storyboard/StoryboardClient'

export const dynamic = 'force-dynamic'

type Params = { id: string }
type Search = { songLengthSec?: string; cutOverride?: string }

function clampSongLength(raw: string | undefined): number {
  if (!raw) return 210
  const n = Number(raw)
  if (!Number.isFinite(n)) return 210
  if (n < 60) return 60
  if (n > 360) return 360
  return Math.floor(n)
}

function clampCutOverride(raw: string | undefined): number | undefined {
  if (!raw) return undefined
  const n = Number(raw)
  if (!Number.isFinite(n)) return undefined
  if (n < 4 || n > 30) return undefined
  return Math.floor(n)
}

export default async function StoryboardPage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<Search>
}) {
  const { id } = await params
  const { songLengthSec: rawLen, cutOverride: rawOverride } = await searchParams

  const ep = await loadEpisode(id)
  if (!ep) notFound()

  const songLengthSec = clampSongLength(rawLen)
  const cutOverride = clampCutOverride(rawOverride)

  const out = await generateStoryboard({
    episodeId: id,
    songLengthSec,
    cutOverride,
  })

  const titleStr = ep.title ? ep.title.replace(/_/g, ' ') : ''

  if (!out) {
    return (
      <>
        <Link href={`/episode/${id}`} className="troy-back-link">
          ← {id} 상세
        </Link>
        <header className="troy-page-header">
          <div className="troy-page-header__title-block">
            <h1 className="troy-page-header__title">{ep.id} 스토리보드</h1>
            <div className="troy-page-header__subtitle">
              <span>Chapter {ep.chapter}</span>
              <span className="dot">·</span>
              <Badge variant={phaseBadgeVariant(ep.phase)} size="sm">
                Phase {ep.phase}
              </Badge>
            </div>
          </div>
        </header>
        <div className="troy-stack">
          <Card>
            <Card.Body>
              <div className="troy-empty">
                visual_cut_list 파일이 없거나 형식이 잘못됨.<br />
                {`ops/${id}_visual_cut_list.md 를 먼저 생성하세요.`}
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }

  const onScreenCount = out.cuts.filter((c) => c.charactersOnScreen.length > 0).length
  const auditWarnCount = out.audit.warnings.length

  return (
    <>
      <Link href={`/episode/${id}`} className="troy-back-link">
        ← {id} 상세
      </Link>

      <header className="troy-page-header">
        <div className="troy-page-header__title-block">
          <h1 className="troy-page-header__title">
            {ep.id} 스토리보드
            {titleStr && (
              <span style={{ color: 'var(--text-dim)', fontWeight: 'var(--weight-medium)' }}>
                {' · '}
                {titleStr}
              </span>
            )}
          </h1>
          <div className="troy-page-header__subtitle">
            <span>Chapter {ep.chapter}</span>
            <span className="dot">·</span>
            <Badge variant={phaseBadgeVariant(ep.phase)} size="sm">
              Phase {ep.phase}
            </Badge>
            <span className="dot">·</span>
            <span className="u-mono-num">{out.cuts.length} cuts</span>
            <span className="dot">·</span>
            <span className="u-mono-num">{songLengthSec}s</span>
          </div>
        </div>
      </header>

      <div className="troy-stack">
        <Card>
          <Card.Header
            title="제어판"
            meta={
              <>
                <Badge variant="info" size="sm">
                  {out.cuts.length} cuts
                </Badge>
                <Badge variant={onScreenCount > 0 ? 'ok' : 'pending'} size="sm">
                  on-screen {onScreenCount} / {out.cuts.length}
                </Badge>
                <Badge variant={auditWarnCount === 0 ? 'ok' : 'warn'} size="sm">
                  audit {auditWarnCount === 0 ? 'pass' : `${auditWarnCount} warn`}
                </Badge>
              </>
            }
          />
          <Card.Body>
            <RegenerateForm
              episodeId={id}
              songLengthSec={songLengthSec}
              cutOverride={cutOverride}
            />
            {auditWarnCount > 0 && (
              <details style={{ marginTop: 'var(--space-md)' }}>
                <summary
                  style={{
                    cursor: 'pointer',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--status-warn)',
                  }}
                >
                  audit warnings ({auditWarnCount})
                </summary>
                <ul style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-dim)' }}>
                  {out.audit.warnings.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </details>
            )}
            <div style={{ marginTop: 'var(--space-md)' }}>
              <ExportAllButton episodeId={id} songLengthSec={songLengthSec} cutOverride={cutOverride} />
            </div>
          </Card.Body>
        </Card>

        <div
          className="troy-storyboard-cut-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {out.cuts.map((cut, i) => (
            <CutCard
              key={cut.cutNumber}
              cut={cut}
              storyboardSheetPrompt={out.storyboardSheetPrompts[i]}
              seedancePrompt={out.seedancePrompts[i]}
              mainStillPrompt={out.mainStillPrompts[i]}
            />
          ))}
        </div>
      </div>
    </>
  )
}
