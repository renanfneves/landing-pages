'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { TestimonialCard } from './TestimonialCard'

const animation = { duration: 30000, easing: (t: number) => t }

export function Testimonials() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 3,
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })


  return (
    <section className="flex-center h-96 relative">
      <div ref={sliderRef} className="keen-slider absolute right-0">
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
      </div>
    </section>

  )
}
