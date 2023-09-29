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
    <Button variant="outline" onClick={onClick} asChild={asChild}>
      {children}
    </Button>
  )
}
