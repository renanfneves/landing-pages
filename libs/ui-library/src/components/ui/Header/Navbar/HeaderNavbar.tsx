'use client'

import { ReactNode, useRef, useState } from 'react'

import { Menu, X } from 'lucide-react'
import { Button } from '../../button'
import { HeaderNavbarMobile } from './HeaderNavbarMobile'

interface HeaderNavbarProps {
  links: {
    key: string
    label: string
    path: string
  }[]
  children?: ReactNode
}

export function HeaderNavbar({ links, children }: HeaderNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <Button
        className="md:hidden"
        variant="outline"
        size="icon"
        onClick={handleMenuClick}
      >
        {isOpen ? (
          <X width={24} height={24} className="text-black" />
        ) : (
          <Menu width={24} height={24} className="text-black" />
        )}
      </Button>
      <nav className="hidden md:flex items-center gap-16">
        <ul className="flex gap-16">
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>
        {children}
      </nav>
      <HeaderNavbarMobile links={links} isOpen={isOpen} />
    </>
  )
}
