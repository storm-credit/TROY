'use client'

import React, { useCallback, useRef, useState } from 'react'
import { ProgressBar } from './ProgressBar'

export type DropZoneState = 'idle' | 'hover' | 'busy' | 'success' | 'error'

type DropZoneProps = {
  /** Native file accept attribute (e.g. ".mp3,.wav"). */
  accept?: string
  multiple?: boolean
  busy?: boolean
  state?: 'success' | 'error' | null
  /** Top-level title text — bigger, strong color. */
  title?: React.ReactNode
  /** Sub line — smaller, dim. Allow code chips inside. */
  hint?: React.ReactNode
  /** Called with a real FileList when the user picks or drops files. */
  onFiles: (files: FileList) => void
  className?: string
  /** Override the input id for testing. */
  inputId?: string
  ariaLabel?: string
}

export function DropZone({
  accept,
  multiple = true,
  busy = false,
  state = null,
  title,
  hint,
  onFiles,
  className,
  inputId,
  ariaLabel,
}: DropZoneProps) {
  const [hover, setHover] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setHover(true)
  }, [])
  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setHover(true)
  }, [])
  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setHover(false)
  }, [])
  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setHover(false)
      if (e.dataTransfer.files && e.dataTransfer.files.length) {
        onFiles(e.dataTransfer.files)
      }
    },
    [onFiles],
  )

  const onClick = useCallback(() => {
    if (busy) return
    inputRef.current?.click()
  }, [busy])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClick()
      }
    },
    [onClick],
  )

  const onSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        onFiles(e.target.files)
      }
      // allow re-pick of same file
      e.target.value = ''
    },
    [onFiles],
  )

  const cls = [
    'troy-dropzone',
    hover && 'troy-dropzone--hover',
    busy && 'troy-dropzone--busy',
    state === 'success' && 'troy-dropzone--success',
    state === 'error' && 'troy-dropzone--error',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={cls}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel ?? '파일 업로드'}
      aria-busy={busy || undefined}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={onSelect}
        style={{ display: 'none' }}
      />
      {title && <div className="troy-dropzone__title">{title}</div>}
      {hint && <div className="troy-dropzone__hint">{hint}</div>}
      {busy && (
        <div className="troy-dropzone__progress" aria-hidden>
          <ProgressBar size="sm" indeterminate ariaLabel="업로드 중" />
        </div>
      )}
    </div>
  )
}
