import { ReactNode } from 'react'

interface HeaderNavbarActionsRootProps {
  children: ReactNode
}

export function HeaderNavbarActions({
  children,
}: HeaderNavbarActionsRootProps) {
  return <div className="flex space-x-4">{children}</div>
}
