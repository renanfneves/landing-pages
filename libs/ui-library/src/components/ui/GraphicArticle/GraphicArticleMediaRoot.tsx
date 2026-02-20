import { ReactNode } from 'react'

interface GraphicArticleImageProps {
  children: ReactNode
}

export function GraphicArticleMediaRoot({
  children,
}: GraphicArticleImageProps) {
  return (
    <section className="relative flex items-center justify-center w-full h-80 md:w-1/2 lg:h-[calc(50vh-4rem)]">
      {children}
    </section>
  )
}
