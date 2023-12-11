import { ComponentProps } from 'react'
import { Button } from '../button'

type HeroCallToActionProps = ComponentProps<'button'> & {
  asChild?: boolean | undefined
}

export function HeroCallToAction({
  children,
  onClick,
  asChild,
  className,
}: HeroCallToActionProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      asChild={asChild}
      className={className}
      size="lg"
    >
      {children}
    </Button>
  )
}
