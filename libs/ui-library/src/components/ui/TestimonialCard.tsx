import { Star, User } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'
import SVGGoogle from '../../assets/google.svg'

interface TestimonialCardProps {
  starsGiven?: number
  comment: string
  author: string
  date?: string
}

export function TestimonialCard({
  starsGiven = 0,
  comment,
  author,
  date = '',
}: TestimonialCardProps) {
  const starsIcons = useMemo(() => {
    const icons = []

    for (let i = 0; i < starsGiven; i++) {
      icons.push(<Star key={i} fill="#eab308" size={20} color="#eab308" />)
    }

    return icons
  }, [starsGiven])

  return (
    <div className="flex flex-col p-4 md:h-60 md:w-96 border border-gray-300 rounded-sm">
      <header className="flex flex-row text-sm mb-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="border-2 border-black rounded-full p-2 w-fit">
            <User size={20} className="text-black font-bold" />
          </div>
          <div className="flex flex-col justify-start">
            <span className="font-bold">{author}</span>
            <cite>{date}</cite>
          </div>
        </div>
        <Image src={SVGGoogle} alt={''} width={30} height={30} />
      </header>
      <div className="flex">{starsIcons}</div>
      <blockquote className="flex flex-col gap-2 mt-4 h-full justify-between">
        <span
          dangerouslySetInnerHTML={{ __html: comment }}
          className="max-w-[300px] md:max-w-max"
        />
      </blockquote>
    </div>
  )
}
