import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadEpisode } from '@/lib/episodes'
import { loadIntake, hasFinalRender, type IntakeState } from '@/lib/intake'
import { MAX_CUTS } from '@/lib/intake-spec'
import { WorkbenchDropZone } from '@/components/WorkbenchClient'
import { StoryboardCard } from '@/components/StoryboardCard'
import { PipelineStrip, type PipelineStage } from '@/components/PipelineStrip'
import { RenderButton } from '@/components/RenderButton'
import { SunoPastePanel } from '@/components/SunoPastePanel'
import { Card } from '@/components/ui/Card'
import { Badge, phaseBadgeVariant } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'

export const dynamic = 'force-dynamic'

type Params = { id: string }

function buildPipeline(intake: IntakeState, finalExists: boolean): PipelineStage[] {
  const hasMaster = intake.audio.some((a) => a.variant === 'master')
  const hasAnyAudio = intake.audio.length > 0
  const stillsCount = intake.stills.length
  const clipsCount = intake.clips.length
  const hasSubs = !!intake.subs

  const stillsStatus: PipelineStage['status'] =
    stillsCount === 0 ? 'pending' : stillsCount >= MAX_CUTS ? 'done' : 'in-progress'
  const clipsStatus: PipelineStage['status'] =
    clipsCount === 0 ? 'pending' : clipsCount >= MAX_CUTS ? 'done' : 'in-progress'

  return [
    { id: 'canon', label: 'Canon', status: 'done' },
    { id: 'harness', label: 'Harness', status: 'done' },
    { id: 'song-brief', label: 'Song Brief', status: 'done' },
    { id: 'visual-cut', label: 'Visual Cut', status: 'done' },
    { id: 'production', label: 'Prod Bible', status: 'done' },
    { id: 'suno', label: 'Suno (master)', status: hasMaster ? 'done' : 'pending' },
    {
      id: 'suno-vars',
      label: 'Suno (vars)',
      status:
        intake.audio.filter((a) => a.variant !== 'master').length >= 2
          ? 'done'
          : hasAnyAudio
            ? 'in-progress'
            : 'pending',
    },
    {
      id: 'stills',
      label: 'Stills',
      hint: `${stillsCount} / ${MAX_CUTS}`,
      status: stillsStatus,
    },
    {
      id: 'motion',
      label: 'Motion',
      hint: `${clipsCount} / ${MAX_CUTS}`,
      status: clipsStatus,
    },
    { id: 'subs', label: 'Subs', status: hasSubs ? 'done' : 'pending' },
    {
      id: 'sound-sync',
      label: 'Sound Sync',
      status: hasMaster && stillsCount > 0 ? 'in-progress' : 'pending',
    },
    {
      id: 'preview',
      label: 'Preview',
      status: hasMaster && clipsCount >= MAX_CUTS ? 'in-progress' : 'pending',
    },
    { id: 'render', label: 'Render', status: finalExists ? 'done' : 'pending' },
    { id: 'qa', label: 'QA Gate', status: finalExists ? 'in-progress' : 'pending' },
    { id: 'release', label: 'Release', status: 'pending' },
  ]
}

function fileUrl(episodeId: string, kind: string, name: string): string {
  return `/api/intake/file/${encodeURIComponent(episodeId)}/${encodeURIComponent(kind)}/${encodeURIComponent(name)}`
}

export default async function WorkbenchPage({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const ep = await loadEpisode(id)
  if (!ep) notFound()

  const [intake, finalRender] = await Promise.all([
    loadIntake(id),
    hasFinalRender(id),
  ])
  const pipeline = buildPipeline(intake, finalRender.exists)

  // Build maps for fast cut lookup
  const stillsByCut = new Map<number, { name: string; url: string }>()
  for (const s of intake.stills) {
    stillsByCut.set(s.cut, { name: s.name, url: fileUrl(id, 'stills', s.name) })
  }
  const clipsByCut = new Map<number, { name: string; url: string }>()
  for (const c of intake.clips) {
    clipsByCut.set(c.cut, { name: c.name, url: fileUrl(id, 'clips', c.name) })
  }

  const titleStr = ep.title ? ep.title.replace(/_/g, ' ') : ''
  const masterCount = intake.audio.filter((a) => a.variant === 'master').length
  const totalAudio = intake.audio.length
  const finalUrl = finalRender.exists
    ? fileUrl(id, 'final', `${id}_final.mp4`)
    : null

  return (
    <>
      <Link href={`/episode/${id}`} className="troy-back-link">← {id} 상세</Link>
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <Link href={`/episode/${id}/storyboard`} className="troy-back-link">스토리보드 →</Link>
      </div>

      <header className="troy-page-header">
        <div className="troy-page-header__title-block">
          <h1 className="troy-page-header__title">
            {ep.id} 워크벤치
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
            {ep.movement && (
              <>
                <span className="dot">·</span>
                <span>{ep.movement}</span>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="troy-stack">
        {/* 1. Pipeline */}
        <Card>
          <Card.Header
            title="파이프라인"
            meta={<span className="u-text-dim">15 stages</span>}
          />
          <Card.Body>
            <PipelineStrip stages={pipeline} />
          </Card.Body>
        </Card>

        {/* 2. Suno paste card (lyrics + style + UI settings) */}
        <SunoPastePanel episodeId={id} />

        {/* 3. Audio */}
        <Card>
          <Card.Header
            title="오디오"
            meta={
              <>
                <Badge variant={masterCount > 0 ? 'ok' : 'pending'} size="sm">
                  master {masterCount}
                </Badge>
                <span className="u-text-dim u-mono-num">{totalAudio} 파일</span>
              </>
            }
          />
          <Card.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <WorkbenchDropZone
                episodeId={id}
                kindFilter="audio"
                hint="Drop mp3 / wav / m4a — Suno master · 변주"
              />
              {intake.audio.length === 0 ? (
                <div className="troy-empty">아직 업로드된 오디오 없음.</div>
              ) : (
                <div>
                  {intake.audio.map((a) => (
                    <div key={a.name} className="troy-audio-row">
                      <span className="troy-audio-row__variant">
                        <Badge variant="info" size="sm">{a.variant}</Badge>
                      </span>
                      <div className="troy-audio-row__player">
                        <audio
                          src={fileUrl(id, 'audio', a.name)}
                          controls
                          preload="none"
                        />
                      </div>
                      <span className="troy-audio-row__meta">
                        {Math.round(a.sizeBytes / 1024)} KB
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card.Body>
        </Card>

        {/* 3. Storyboard */}
        <Card>
          <Card.Header
            title="스토리보드"
            meta={
              <>
                <span className="u-text-dim u-mono-num">cut 1 – {MAX_CUTS}</span>
                <Badge
                  variant={
                    intake.stills.length >= MAX_CUTS && intake.clips.length >= MAX_CUTS
                      ? 'ok'
                      : intake.stills.length > 0 || intake.clips.length > 0
                        ? 'progress'
                        : 'pending'
                  }
                  size="sm"
                >
                  still {intake.stills.length} · clip {intake.clips.length}
                </Badge>
              </>
            }
          />
          <Card.Body>
            <div className="troy-storyboard-grid">
              {Array.from({ length: MAX_CUTS }, (_, i) => i + 1).map((cut) => (
                <StoryboardCard
                  key={cut}
                  episodeId={id}
                  cut={cut}
                  still={stillsByCut.get(cut) ?? null}
                  clip={clipsByCut.get(cut) ?? null}
                />
              ))}
            </div>
          </Card.Body>
        </Card>

        {/* 4. Bulk intake */}
        <Card>
          <Card.Header title="일괄 인테이크" meta={<span className="u-text-dim">파일명 자동 라우팅</span>} />
          <Card.Body>
            <WorkbenchDropZone
              episodeId={id}
              kindFilter="any"
              hint="여러 파일을 한 번에 — mp3 / png / mp4 / srt 자동 분류"
            />
          </Card.Body>
        </Card>

        {/* 5. Render */}
        <Card variant="accent">
          <Card.Header title="렌더" meta={<span className="u-text-dim">Final MV</span>} />
          <Card.Body>
            <div className={'troy-final-preview' + (finalRender.exists ? '' : ' troy-final-preview--empty')}>
              {finalRender.exists && finalUrl ? (
                <video src={finalUrl} controls preload="metadata" />
              ) : (
                <>
                  <span style={{ fontSize: 'var(--text-md)' }}>아직 렌더되지 않음</span>
                  <span className="u-text-faint" style={{ fontSize: 'var(--text-xs)' }}>
                    스토리보드 + 오디오 + 자막을 채운 뒤 렌더 시작.
                  </span>
                </>
              )}
            </div>

            <div className="troy-kv" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="troy-kv__k">Final MV</div>
              <div className="troy-kv__v">
                {finalRender.exists ? (
                  <>
                    <Badge variant="ok" size="sm">완성</Badge>
                    <code>{finalRender.path}</code>
                    {finalRender.sizeBytes != null && (
                      <span className="u-text-dim u-mono-num" style={{ fontSize: 'var(--text-xs)' }}>
                        {Math.round(finalRender.sizeBytes / 1024)} KB
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <Badge variant="pending" size="sm">미렌더</Badge>
                    <code>{finalRender.path}</code>
                  </>
                )}
              </div>
              <div className="troy-kv__k">Subs</div>
              <div className="troy-kv__v">
                {intake.subs ? (
                  <>
                    <Badge variant="ok" size="sm">있음</Badge>
                    <code>{intake.subs.name}</code>
                  </>
                ) : (
                  <Badge variant="pending" size="sm">없음</Badge>
                )}
              </div>
            </div>

            <div className="troy-render-actions">
              {finalRender.exists && finalUrl && (
                <ButtonLink href={finalUrl} variant="ghost" size="md" download>
                  다운로드
                </ButtonLink>
              )}
              <RenderButton episodeId={id} />
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
