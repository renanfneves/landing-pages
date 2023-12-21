import Image from 'next/image'
import { Suspense } from 'react'

interface GraphicArticleImageProps {
  src: string
  description: string
}

export function GraphicArticleImage({
  src,
  description,
}: GraphicArticleImageProps) {
  return (
    <figure className="relative w-full h-80 md:w-1/2 md:h-[500px]">
      <Suspense>
        <Image
          fill
          src={src}
          alt={description}
          priority={true}
          sizes="100vw 50vw"
          className="object-cover rounded-md aspect-video"
        />
      </Suspense>
    </figure>
  )
}
