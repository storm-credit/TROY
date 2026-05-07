'use client'

import { useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'

export type CopyPromptVariant = 'sheet' | 'seedance' | 'still'

const LABELS: Record<CopyPromptVariant, string> = {
  sheet: 'Sheet',
  seedance: 'Seedance',
  still: 'Main Still',
}

const TOAST_TITLES: Record<CopyPromptVariant, string> = {
  sheet: '시트 프롬프트 복사됨',
  seedance: 'Seedance 프롬프트 복사됨',
  still: '메인 스틸 프롬프트 복사됨',
}

const BUTTON_VARIANT: Record<CopyPromptVariant, 'primary' | 'secondary' | 'ghost'> = {
  sheet: 'primary',
  seedance: 'secondary',
  still: 'ghost',
}

type Props = {
  variant: CopyPromptVariant
  prompt: string
  cutNumber: number
}

export function CopyPromptButton({ variant, prompt, cutNumber }: Props) {
  const toast = useToast()

  const onClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      toast.success(`CUT${String(cutNumber).padStart(2, '0')} ${TOAST_TITLES[variant]}`, `${prompt.length} chars`)
    } catch (err) {
      toast.error('복사 실패', err instanceof Error ? err.message : '브라우저 권한을 확인하세요')
    }
  }, [prompt, cutNumber, variant, toast])

  return (
    <Button variant={BUTTON_VARIANT[variant]} size="sm" onClick={onClick}>
      Copy {LABELS[variant]}
    </Button>
  )
}
