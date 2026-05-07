'use client'

import type { CutSpec } from '@/lib/storyboard/types'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CopyPromptButton } from './CopyPromptButton'

type Props = {
  cut: CutSpec
  storyboardSheetPrompt: string
  seedancePrompt: string
  mainStillPrompt: string
}

function formatMmSs(totalSec: number): string {
  const mm = Math.floor(totalSec / 60)
  const ss = Math.floor(totalSec % 60)
  return `${mm}:${String(ss).padStart(2, '0')}`
}

export function CutCard({ cut, storyboardSheetPrompt, seedancePrompt, mainStillPrompt }: Props) {
  const nn = String(cut.cutNumber).padStart(2, '0')
  const start = formatMmSs(cut.startSec)
  const end = formatMmSs(cut.endSec)
  const onScreen = cut.charactersOnScreen.length > 0

  return (
    <Card>
      <Card.Header
        title={
          <span>
            CUT{nn}
            <span style={{ color: 'var(--text-dim)', fontWeight: 'var(--weight-regular)', marginLeft: 'var(--space-sm)', fontSize: 'var(--text-sm)' }}>
              {start}–{end}
            </span>
          </span>
        }
        meta={
          <>
            <Badge variant={onScreen ? 'info' : 'pending'} size="sm">
              {onScreen ? cut.charactersOnScreen.join(', ') : 'atmospheric'}
            </Badge>
            <span className="u-text-dim" style={{ fontSize: 'var(--text-xs)' }}>
              {cut.cutPersona}
            </span>
          </>
        }
      />
      <Card.Body>
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-strong)', marginBottom: 'var(--space-xs)' }}>
            {cut.koreanTitle}{' '}
            <span style={{ color: 'var(--text-dim)' }}>/ {cut.englishTitle}</span>
          </div>
        </div>

        <details style={{ marginBottom: 'var(--space-md)' }}>
          <summary
            style={{
              cursor: 'pointer',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-dim)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            sub-shots ({cut.subShots.length})
          </summary>
          <table
            style={{
              width: '100%',
              fontSize: 'var(--text-xs)',
              borderCollapse: 'collapse',
              marginTop: 'var(--space-sm)',
            }}
          >
            <thead>
              <tr style={{ color: 'var(--text-dim)', textAlign: 'left' }}>
                <th style={{ padding: 'var(--space-2xs)', borderBottom: '1px solid var(--border-subtle)' }}>#</th>
                <th style={{ padding: 'var(--space-2xs)', borderBottom: '1px solid var(--border-subtle)' }}>time</th>
                <th style={{ padding: 'var(--space-2xs)', borderBottom: '1px solid var(--border-subtle)' }}>camera</th>
                <th style={{ padding: 'var(--space-2xs)', borderBottom: '1px solid var(--border-subtle)' }}>action</th>
              </tr>
            </thead>
            <tbody>
              {cut.subShots.map((s) => (
                <tr key={s.shotNumber} style={{ verticalAlign: 'top' }}>
                  <td style={{ padding: 'var(--space-2xs)', color: 'var(--text-dim)' }}>{s.shotNumber}</td>
                  <td className="u-mono-num" style={{ padding: 'var(--space-2xs)', color: 'var(--text-dim)' }}>
                    {s.startTimeOffset.toFixed(1)}–{s.endTimeOffset.toFixed(1)}
                  </td>
                  <td style={{ padding: 'var(--space-2xs)' }}>{s.cameraMovement}</td>
                  <td style={{ padding: 'var(--space-2xs)' }}>{s.actionDirection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>

        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
          <CopyPromptButton variant="sheet" prompt={storyboardSheetPrompt} cutNumber={cut.cutNumber} />
          <CopyPromptButton variant="seedance" prompt={seedancePrompt} cutNumber={cut.cutNumber} />
          <CopyPromptButton variant="still" prompt={mainStillPrompt} cutNumber={cut.cutNumber} />
        </div>
      </Card.Body>
    </Card>
  )
}
