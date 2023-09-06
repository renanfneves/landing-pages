interface TestimonialCardProps {
  starsGiven: number
  comment: string
  author: string
  city: string
}

export function TestimonialCard({
  starsGiven,
  comment,
  author,
  city
 }: TestimonialCardProps) {
  return (
    <div className="keen-slider__slide h-96 p-8">
      <div className="border border-zinc-400 p-4">
        {starsGiven}
        <blockquote>
            {`"${comment}"`}
            <footer className="flex flex-col mt-4">
                <cite>{author},</cite> <cite>{city}</cite>
            </footer>
        </blockquote>
      </div>
    </div>)
}
