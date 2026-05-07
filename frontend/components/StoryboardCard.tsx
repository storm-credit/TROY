import React from 'react'
import { Badge } from './ui/Badge'

export type StoryboardCardProps = {
  episodeId: string
  cut: number
  still?: { name: string; url: string } | null
  clip?: { name: string; url: string } | null
}

export function StoryboardCard({ episodeId, cut, still, clip }: StoryboardCardProps) {
  const cutLabel = `${episodeId} · cut ${String(cut).padStart(2, '0')}`
  const missingStill = !still
  const missingClip = !clip
  const missingBoth = missingStill && missingClip

  return (
    <article
      className={`troy-cut${missingBoth ? ' troy-cut--missing-both' : ''}`}
      aria-label={cutLabel}
    >
      <header className="troy-cut__head">
        <span className="troy-cut__id">{cutLabel}</span>
        <span className="troy-cut__badges">
          {!missingStill && !missingClip && (
            <Badge variant="ok" size="sm">ready</Badge>
          )}
          {!missingStill && missingClip && (
            <Badge variant="pending" size="sm">clip 대기</Badge>
          )}
          {missingStill && !missingClip && (
            <Badge variant="pending" size="sm">still 대기</Badge>
          )}
        </span>
      </header>

      <div
        className={`troy-cut__slot${still ? ' troy-cut__slot--filled' : ''}`}
      >
        {still ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={still.url} alt={still.name} loading="lazy" />
        ) : (
          <span className="troy-cut__placeholder">
            <SlotIcon kind="still" />
            <span className="troy-cut__placeholder-label">Still</span>
          </span>
        )}
      </div>

      <div
        className={`troy-cut__slot${clip ? ' troy-cut__slot--filled' : ''}`}
      >
        {clip ? (
          <video src={clip.url} controls preload="metadata" />
        ) : (
          <span className="troy-cut__placeholder">
            <SlotIcon kind="clip" />
            <span className="troy-cut__placeholder-label">Clip</span>
          </span>
        )}
      </div>
    </article>
  )
}

function SlotIcon({ kind }: { kind: 'still' | 'clip' }) {
  if (kind === 'still') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <rect x="3" y="4" width="14" height="12" rx="1.5" />
        <circle cx="7.5" cy="9" r="1.25" />
        <path d="M3.5 14 L8 10.5 L12 13 L17 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="3" y="5" width="11" height="10" rx="1.5" />
      <path d="M14 9 L17.5 7 L17.5 13 L14 11 Z" strokeLinejoin="round" />
    </svg>
  )
}
