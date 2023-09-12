import { ReactNode } from "react"

interface GraphicArticleContentRootProps {
  children: ReactNode
}

export function GraphicArticleContentRoot({ children }: GraphicArticleContentRootProps) {
  return (
    <section className="flex flex-col w-full md:w-1/2 h-full md:px-8 gap-4">
      {children}
    </section>
  )
}
