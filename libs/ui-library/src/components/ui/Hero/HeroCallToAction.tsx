import { ComponentProps } from 'react'
import { Button } from '../button'

type HeroCallToActionProps = ComponentProps<'button'> & {
  asChild?: boolean | undefined
}

export function HeroCallToAction({
  children,
  onClick,
  asChild,
}: HeroCallToActionProps) {
  return (
    <Button variant="secondary" onClick={onClick} asChild={asChild} size="lg">
      {children}
    </Button>
  )
}
