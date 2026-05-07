import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadEpisode, readEpisodeFile } from '@/lib/episodes'
import { Card } from '@/components/ui/Card'
import { Badge, phaseBadgeVariant } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { Markdown, Manuscript } from '@/components/Markdown'

export const dynamic = 'force-dynamic'

type Params = { id: string }

type GateBadgeProps = {
  state: 'ok' | 'fail' | 'warn' | 'none'
  okText?: string
  noneText?: string
}

function GateBadge({ state, okText = '있음', noneText = '없음' }: GateBadgeProps) {
  if (state === 'ok') return <Badge variant="ok" size="sm">{okText}</Badge>
  if (state === 'fail') return <Badge variant="fail" size="sm">{noneText}</Badge>
  if (state === 'warn') return <Badge variant="warn" size="sm">{noneText}</Badge>
  return <Badge variant="pending" size="sm">{noneText}</Badge>
}

export default async function EpisodeDetail({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const ep = await loadEpisode(id)
  if (!ep) notFound()

  const [harness, songBrief, visualCut, manuscript, bible] = await Promise.all([
    readEpisodeFile(id, 'harness'),
    readEpisodeFile(id, 'song_brief'),
    readEpisodeFile(id, 'visual_cut_list'),
    readEpisodeFile(id, 'manuscript'),
    readEpisodeFile(id, 'production_bible'),
  ])

  const lengthOK = ep.audit?.lengthStatus.includes('safe-line') ?? false
  const forbidOK = ep.audit?.forbidden === 'pass'
  const lengthState: GateBadgeProps['state'] = !ep.audit
    ? 'none'
    : lengthOK && forbidOK
      ? 'ok'
      : 'warn'
  const titleStr = ep.title ? ep.title.replace(/_/g, ' ') : ''

  return (
    <>
      <Link href="/" className="troy-back-link">← 마스터 그리드</Link>

      <header className="troy-page-header">
        <div className="troy-page-header__title-block">
          <h1 className="troy-page-header__title troy-page-header__title--serif">
            {ep.id}
            {titleStr && <span> · {titleStr}</span>}
          </h1>
          <div className="troy-page-header__subtitle">
            <span>Chapter {ep.chapter}</span>
            <span className="dot">·</span>
            <Badge variant={phaseBadgeVariant(ep.phase)} size="sm">
              Phase {ep.phase}
            </Badge>
            {ep.movement && (
              <>
                <span className="dot">·</span>
                <span>{ep.movement}</span>
              </>
            )}
          </div>
        </div>
        <div className="troy-page-header__actions">
          <ButtonLink href={`/episode/${ep.id}/storyboard`} variant="secondary" size="md">
            스토리보드 →
          </ButtonLink>
          <ButtonLink href={`/episode/${ep.id}/workbench`} variant="primary" size="md">
            워크벤치 →
          </ButtonLink>
        </div>
      </header>

      <div className="troy-stack">
        <Card>
          <Card.Header title="Episode Status" />
          <Card.Body>
            <div className="troy-kv">
              <div className="troy-kv__k">원고</div>
              <div className="troy-kv__v">
                <GateBadge state={ep.manuscriptPath ? 'ok' : 'fail'} />
              </div>

              <div className="troy-kv__k">하네스</div>
              <div className="troy-kv__v">
                <GateBadge state={ep.hasHarness ? 'ok' : 'none'} />
              </div>

              <div className="troy-kv__k">송 브리프</div>
              <div className="troy-kv__v">
                <GateBadge state={ep.hasSongBrief ? 'ok' : 'none'} />
              </div>

              <div className="troy-kv__k">비주얼 컷</div>
              <div className="troy-kv__v">
                <GateBadge state={ep.hasVisualCutList ? 'ok' : 'none'} />
              </div>

              <div className="troy-kv__k">프로덕션 바이블</div>
              <div className="troy-kv__v">
                <GateBadge state={ep.hasProductionBible ? 'ok' : 'none'} />
              </div>

              <div className="troy-kv__k">길이 게이트</div>
              <div className="troy-kv__v">
                {ep.audit ? (
                  <>
                    <Badge
                      variant={lengthState === 'ok' ? 'ok' : 'warn'}
                      size="sm"
                    >
                      {ep.audit.lengthStatus}
                    </Badge>
                    <span className="u-text-dim u-mono-num" style={{ fontSize: 'var(--text-xs)' }}>
                      {ep.audit.hangul} 한글 · {ep.audit.nonWhitespace} non-ws
                    </span>
                  </>
                ) : (
                  <Badge variant="pending" size="sm">미감사</Badge>
                )}
              </div>

              <div className="troy-kv__k">금지 패턴</div>
              <div className="troy-kv__v">
                {ep.audit ? (
                  <Badge
                    variant={ep.audit.forbidden === 'pass' ? 'ok' : 'warn'}
                    size="sm"
                  >
                    {ep.audit.forbidden}
                  </Badge>
                ) : (
                  <Badge variant="pending" size="sm">미감사</Badge>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>

        <div className="troy-detail-grid">
          <FileSection title="에피소드 하네스" body={harness} />
          <FileSection title="송 브리프" body={songBrief} />
          <FileSection title="비주얼 컷 리스트" body={visualCut} />
          <FileSection title="프로덕션 바이블" body={bible} />
          <Card fullWidth>
            <Card.Header title="원고 (정본 초고)" />
            <Card.Body>
              {manuscript ? (
                <Manuscript source={manuscript} />
              ) : (
                <div className="troy-empty">파일 없음</div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

function FileSection({
  title,
  body,
}: {
  title: string
  body: string | null
}) {
  return (
    <Card>
      <Card.Header title={title} />
      <Card.Body>
        {body ? (
          <Markdown source={body} />
        ) : (
          <div className="troy-empty">파일 없음</div>
        )}
      </Card.Body>
    </Card>
  )
}
