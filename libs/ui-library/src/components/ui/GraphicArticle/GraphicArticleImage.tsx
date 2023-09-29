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
    <figure className="relative w-full h-80 md:w-1/2 lg:h-[calc(100vh-4rem)]">
      <Image
        fill
        src={src}
        alt={description}
        sizes="100vw 50vw"
        className="object-cover"
      />
    </figure>
  )
}
