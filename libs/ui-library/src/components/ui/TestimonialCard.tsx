import { Star } from 'lucide-react'
import { useMemo } from 'react'

interface TestimonialCardProps {
  starsGiven?: number
  comment: string
  author: string
  city?: string
}

export function TestimonialCard({
  starsGiven = 0,
  comment,
  author,
  city = '',
}: TestimonialCardProps) {
  const starsIcons = useMemo(() => {
    const icons = []

    for (let i = 0; i < starsGiven; i++) {
      icons.push(<Star key={i} fill="#eab308" color="#eab308" />)
    }

    return icons
  }, [starsGiven])

  return (
    <div className="flex flex-col border border-zinc-400 p-4 h-60 w-96">
      <div className="flex">{starsIcons}</div>
      <blockquote className="flex flex-col gap-2 mt-4 h-full justify-between">
        <span dangerouslySetInnerHTML={{ __html: comment }} />
        <footer className="flex flex-col text-sm italic">
          <cite>
            {author}
            {city && ','}
          </cite>
          <cite>{city}</cite>
        </footer>
      </blockquote>
    </div>
  )
}
