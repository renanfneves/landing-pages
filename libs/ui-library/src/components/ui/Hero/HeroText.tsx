import { ReactNode } from 'react'

interface HeroTextProps {
  children: ReactNode
}

export function HeroText({ children }: HeroTextProps) {
  return <h2 className="text-white text-base text-center">{children}</h2>
}
