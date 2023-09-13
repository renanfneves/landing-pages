import { ComponentProps } from "react"
import { Button } from "../button"

type HeroCallToActionProps = ComponentProps<'button'>

export function HeroCallToAction({ children, onClick }: HeroCallToActionProps) {
  return <Button variant="outline" onClick={onClick}>{children}</Button>
}
