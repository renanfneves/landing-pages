'use client'

import { ReactNode, useRef, useState } from 'react'

import { Menu, X } from 'lucide-react'
import { Button } from '../../button'
import { HeaderNavbarMobile } from './HeaderNavbarMobile'

interface HeaderNavbarProps {
  links: Array<{
    key: string
    label: string
    path?: string
    children?: {
      key: string
      label: string
      path: string
    }[]
  }>
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
            <li key={link.key} className="relative group">
              {link.children ? (
                <>
                  <button
                    className="flex items-center gap-1 focus:outline-none"
                  >
                    {link.label}
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <ul className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-20">
                    {link.children.map((child) => (
                      <li key={child.key}>
                        <a href={child.path} className="block px-4 py-2 hover:bg-gray-100">{child.label}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={link.path}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
        {children}
      </nav>
      <HeaderNavbarMobile links={links} isOpen={isOpen} />
    </>
  )
}
