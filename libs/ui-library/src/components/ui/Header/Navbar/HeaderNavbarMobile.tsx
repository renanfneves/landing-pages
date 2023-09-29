'use client'

import { cn } from '../../../../utils'

interface HeaderNavbarProps {
  links: {
    key: string
    label: string
    path: string
  }[]
  isOpen: boolean
}

export function HeaderNavbarMobile({ links, isOpen }: HeaderNavbarProps) {
  return (
    <nav
      className={cn(
        'absolute bg-white z-10 top-20 left-0 right-0 px-4 md:hidden items-center gap-16',
        isOpen ? 'flex flex-col' : 'hidden',
      )}
    >
      <ul className="flex flex-col border-t border-black py-4 gap-8 w-full">
        {links.map((link) => (
          <li key={link.key}>
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
