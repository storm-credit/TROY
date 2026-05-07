import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  error?: boolean
  className?: string
  children?: React.ReactNode
  leadingIcon?: React.ReactNode
}

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>

function classes(
  variant: ButtonVariant,
  size: ButtonSize,
  loading: boolean,
  error: boolean,
  extra?: string,
): string {
  return [
    'troy-btn',
    `troy-btn--${variant}`,
    `troy-btn--${size}`,
    loading && 'troy-btn--loading',
    error && 'troy-btn--error',
    extra,
  ]
    .filter(Boolean)
    .join(' ')
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'secondary',
    size = 'md',
    loading = false,
    error = false,
    className,
    children,
    leadingIcon,
    type = 'button',
    disabled,
    ...rest
  },
  ref,
) {
  const isDisabled = disabled || loading
  return (
    <button
      ref={ref}
      type={type}
      className={classes(variant, size, loading, error, className)}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <span className="troy-btn__spinner" aria-hidden />
      ) : leadingIcon ? (
        <span className="troy-btn__icon" aria-hidden>
          {leadingIcon}
        </span>
      ) : null}
      <span className="troy-btn__label">{children}</span>
    </button>
  )
})

/**
 * Render a styled anchor (or Link wrapper) with the same visual variants as Button.
 * Use for navigation actions like "워크벤치 →".
 */
export type ButtonLinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      variant = 'secondary',
      size = 'md',
      loading = false,
      error = false,
      className,
      children,
      leadingIcon,
      ...rest
    },
    ref,
  ) {
    return (
      <a
        ref={ref}
        className={classes(variant, size, loading, error, className)}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? (
          <span className="troy-btn__spinner" aria-hidden />
        ) : leadingIcon ? (
          <span className="troy-btn__icon" aria-hidden>
            {leadingIcon}
          </span>
        ) : null}
        <span className="troy-btn__label">{children}</span>
      </a>
    )
  },
)
