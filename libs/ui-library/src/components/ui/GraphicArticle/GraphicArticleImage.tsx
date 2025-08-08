import { cn } from '../../../utils'
import Image from 'next/image'
import { ComponentProps } from 'react'

interface GraphicArticleImageProps extends ComponentProps<'figure'> {
  src: string
  description: string
}

export function GraphicArticleImage({
  src,
  description,
  className,
}: GraphicArticleImageProps) {
  return (
    <figure
      className={cn('relative w-full h-80 md:w-1/2 md:h-[500px]', className)}
    >
      <Image
        fill
        src={src}
        alt={description}
        priority={true}
        sizes="100vw 50vw"
        className="object-cover rounded-md aspect-video"
      />
    </figure>
  )
}
