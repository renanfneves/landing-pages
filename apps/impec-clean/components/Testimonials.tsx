'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Testimonials() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 48,
      },

    },
    [
      // add plugins here
    ]
  )

  return (
    <section className="flex-center h-96 relative">
      <div ref={sliderRef} className="keen-slider absolute right-0">
        <div className="keen-slider__slide border border-zinc-400">1</div>
        <div className="keen-slider__slide border border-zinc-400">2</div>
        <div className="keen-slider__slide border border-zinc-400">3</div>
        <div className="keen-slider__slide border border-zinc-400">4</div>
      </div>
    </section>

  )
}
