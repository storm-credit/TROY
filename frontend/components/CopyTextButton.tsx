'use client'

import { useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'

type Props = {
  text: string
  label?: string
  toastTitle?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
}

/**
 * Generic clipboard-copy button with toast feedback.
 * Usable anywhere a paste-ready string needs a one-click copy.
 */
export function CopyTextButton({
  text,
  label = 'Copy',
  toastTitle = '복사됨',
  variant = 'primary',
  size = 'sm',
}: Props) {
  const toast = useToast()

  const onClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success(toastTitle, `${text.length} chars`)
    } catch (err) {
      toast.error('복사 실패', err instanceof Error ? err.message : '브라우저 권한을 확인하세요')
    }
  }, [text, toastTitle, toast])

  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {label}
    </Button>
  )
}
