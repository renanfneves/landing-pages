import Link from 'next/link'
import Image from 'next/image'

interface HeaderLogoProps {
  src: string
}

export function HeaderLogo({ src }: HeaderLogoProps) {
  return (
    <Link href="/">
      <Image src={src} alt="Logo Impec Clean" width={200} height={25} />
    </Link>
  )
}
