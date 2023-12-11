import { ReactNode } from 'react'

interface HeroRootProps {
  children: ReactNode
  backgroundImage: string
}

export function HeroRoot({ children, backgroundImage }: HeroRootProps) {
  return (
    <div
      className="relative w-full flex flex-col items-center gap-8 p-8 bg-cover justify-center md:h-screen aspect-video"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  )
}

HeroRoot.displayName = 'Hero'
