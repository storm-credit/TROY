'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { IntakeDropZone, type IntakeKindFilter } from './IntakeDropZone'

export function WorkbenchDropZone({
  episodeId,
  kindFilter,
  label,
  hint,
}: {
  episodeId: string
  kindFilter?: IntakeKindFilter
  label?: string
  hint?: string
}) {
  const router = useRouter()
  const [, startTransition] = useTransition()

  return (
    <IntakeDropZone
      episodeId={episodeId}
      kindFilter={kindFilter}
      label={label}
      hint={hint}
      onUpload={() => {
        startTransition(() => {
          router.refresh()
        })
      }}
    />
  )
}
