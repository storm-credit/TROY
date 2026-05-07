import React from 'react'

export type CardVariant = 'default' | 'elevated' | 'subtle' | 'accent' | 'interactive'

type CardProps = {
  variant?: CardVariant
  className?: string
  children?: React.ReactNode
  fullWidth?: boolean
} & Omit<React.HTMLAttributes<HTMLElement>, 'className' | 'children'>

function classesFor(variant: CardVariant, fullWidth: boolean | undefined, extra?: string) {
  return [
    'troy-card',
    variant !== 'default' ? `troy-card--${variant}` : null,
    fullWidth ? 'troy-card--full' : null,
    extra,
  ]
    .filter(Boolean)
    .join(' ')
}

function CardRoot({
  variant = 'default',
  className,
  children,
  fullWidth,
  ...rest
}: CardProps) {
  return (
    <section className={classesFor(variant, fullWidth, className)} {...rest}>
      {children}
    </section>
  )
}

type HeaderProps = {
  title?: React.ReactNode
  meta?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

function CardHeader({ title, meta, actions, className, children }: HeaderProps) {
  return (
    <header className={['troy-card__header', className].filter(Boolean).join(' ')}>
      {children ? (
        children
      ) : (
        <>
          {title && <h3 className="troy-card__title">{title}</h3>}
          <div className="troy-card__header-meta">
            {meta}
            {actions}
          </div>
        </>
      )}
    </header>
  )
}

function CardBody({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['troy-card__body', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  )
}

function CardFooter({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={['troy-card__footer', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
