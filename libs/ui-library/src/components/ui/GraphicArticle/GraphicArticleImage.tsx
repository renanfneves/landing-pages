import Image from 'next/image'

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
      <Image
        fill
        src={src}
        alt={description}
        sizes="100vw 50vw"
        className="object-scale-down rounded-md aspect-video"
      />
    </figure>
  )
}
