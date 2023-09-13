import { ReactNode } from "react"

interface HeroTitleProps {
  children: ReactNode
}

export function HeroTitle({ children }: HeroTitleProps) {
  return <h1 className="text-white text-[3.4rem] text-center">{children}</h1>
}
