import { ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="relative flex md:px-16 px-4 py-4 max-w-[1440px] mx-auto justify-between items-center">
      {children}
    </header>
  )
}
