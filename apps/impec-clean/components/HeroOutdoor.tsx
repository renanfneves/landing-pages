'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const animation = { duration: 30000, easing: (t: number) => t }

const SERVICES = [
  '* Higienização de sofá',
  '* Higienização de cadeiras',
  '* Higienização de poltrona',
  '* Estofos em pele',
  '* Higienização carpetes',
  '* Higienização de alcatifa',
  '* Higienização de tapetes',
  '* Hig. de Estofos automotivos',
  '* Higienização de artigos de bebé',
  '* Higienização de cortinados',
  '* Higienização de colchão',
  '* Higienização de cabeceira',
  '* Higienização de sommier',
  '* Impermeabilização',
]

export function HeroOutdoor() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: { perView: 'auto' },
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
    <div
      ref={sliderRef}
      className="keen-slider w-full inline-flex justify-between items-center"
    >
      {SERVICES.map((service, i) => (
        <li
          key={i}
          className="keen-slider__slide text-white font-semibold items-center flex-row text-center list-none backdrop-blur-sm"
          style={{ maxWidth: 300, minWidth: 250, minHeight: 'unset' }}
        >
          <h2 className="text-base">{service}</h2>
        </li>
      ))}
    </div>
  )
}
