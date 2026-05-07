import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CopyTextButton } from '@/components/CopyTextButton'
import { loadSunoPasteCard, type SunoPasteCard } from '@/lib/suno-paste'

type Props = {
  episodeId: string
}

/**
 * Server component. Loads the episode's Suno paste card markdown and
 * renders UI settings + 4 copy-ready blocks (lyrics, master style,
 * var-A lo-fi style, var-B alt-folk style).
 *
 * Renders nothing if the paste card file is missing — workbench shows
 * the rest of the page intact.
 */
export async function SunoPastePanel({ episodeId }: Props) {
  const card = await loadSunoPasteCard(episodeId)
  if (!card) return null

  return (
    <Card>
      <Card.Header
        title="Suno paste"
        meta={
          <span className="u-text-dim">
            가사 · 스타일 · UI 설정 — 클릭으로 복사
          </span>
        }
      />
      <Card.Body>
        <div className="troy-suno-paste">
          {/* UI settings table */}
          {card.uiSettings.length > 0 && (
            <section className="troy-suno-paste__settings">
              <div className="troy-suno-paste__section-title">UI 4 필드 (3 버전 공통)</div>
              <div className="troy-kv">
                {card.uiSettings.map((s) => (
                  <Row key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            </section>
          )}

          {/* Lyrics */}
          <PasteBlock
            title="가사 (Lyrics 필드 — 3 버전 공통)"
            badge="lyrics"
            text={card.lyrics}
            buttonLabel="Copy 가사"
            toastTitle="가사 복사됨"
            buttonVariant="primary"
          />

          {/* Master style */}
          <PasteBlock
            title="Run 1 — Master · BPM 75"
            badge="master · 8-12 takes"
            text={card.masterStyle}
            buttonLabel="Copy Master Style"
            toastTitle="Master 스타일 복사됨"
            buttonVariant="primary"
          />

          {/* Var A Lo-fi */}
          <PasteBlock
            title="Run 2 — Variation A Lo-fi · BPM 70"
            badge="var-a · 5-8 takes"
            text={card.varALofiStyle}
            buttonLabel="Copy Var A Style"
            toastTitle="Var A Lo-fi 스타일 복사됨"
            buttonVariant="secondary"
          />

          {/* Var B Alt-folk */}
          <PasteBlock
            title="Run 3 — Variation B Alt-folk · BPM 80"
            badge="var-b · 5-8 takes"
            text={card.varBAltfolkStyle}
            buttonLabel="Copy Var B Style"
            toastTitle="Var B Alt-folk 스타일 복사됨"
            buttonVariant="secondary"
          />

          <div className="u-text-faint" style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-md)' }}>
            🎯 총 18-28 takes 목표 · 큐레이션 6-룰로 즉시 SKIP/KEEP · 최종 mp3 위 드롭존에 업로드
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <div className="troy-kv__k">{label}</div>
      <div className="troy-kv__v">
        <code style={{ fontSize: 'var(--text-sm)' }}>{value}</code>
      </div>
    </>
  )
}

function PasteBlock({
  title,
  badge,
  text,
  buttonLabel,
  toastTitle,
  buttonVariant,
}: {
  title: string
  badge: string
  text: string
  buttonLabel: string
  toastTitle: string
  buttonVariant: 'primary' | 'secondary' | 'ghost'
}) {
  return (
    <section className="troy-suno-paste__block">
      <div className="troy-suno-paste__block-head">
        <div className="troy-suno-paste__section-title">{title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <Badge variant="info" size="sm">{badge}</Badge>
          <CopyTextButton
            text={text}
            label={buttonLabel}
            toastTitle={toastTitle}
            variant={buttonVariant}
            size="sm"
          />
        </div>
      </div>
      <pre className="troy-suno-paste__pre">{text}</pre>
    </section>
  )
}

// Re-export type for type-only imports
export type { SunoPasteCard }
