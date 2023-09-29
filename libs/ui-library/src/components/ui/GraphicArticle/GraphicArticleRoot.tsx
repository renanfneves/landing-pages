import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface GraphicArticleRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function GraphicArticleRoot({
  children,
  className,
}: GraphicArticleRootProps) {
  return (
    <article
      className={twMerge(
        'flex flex-col items-center md:flex-row w-full lg:min-h-screen gap-8 py-4 md:py-8',
        className,
      )}
    >
      {children}
    </article>
  )
}

GraphicArticleRoot.displayName = 'GraphicArticleRoot'
