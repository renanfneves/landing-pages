'use client'

import { TestimonialCard } from '@landing-pages/ui-library'
import { useKeenSlider } from 'keen-slider/react'
import { useLayoutEffect, useState } from 'react'

const testimonialsData = [
  {
    starsGiven: 5,
    comment:
      'Pedi limpeza do colchão que estava cheio de nódoas, ficou limpo e branco como novo. Pessoal simpático. A hora marcada foi a hora que chegaram a casa.',
    author: 'Patrícia Pinheiro',
  },
  {
    starsGiven: 5,
    comment:
      'Serviço incrível 👌 <br /> Super profissionais. Excelente higienização do sofá e tapete. Boa comunicação. Pontuais. Recomendo vivamente!',
    author: 'Tania João Almendra',
  },
  {
    starsGiven: 5,
    comment:
      'Ótimos profissionais! <br /> Pessoal sério e comprometido! Viramos clientes! E com certeza vamos recomendar!',
    author: 'Manoelle Uchikawa',
  },
  {
    starsGiven: 5,
    comment:
      'Excelente serviço, comunicação muito ágil e rápida, sempre prontos a esclarecer dúvidas e a sugerir as melhores soluções. Recomendo!',
    author: 'Ana Gonçalves da Silva',
  },
  {
    starsGiven: 5,
    comment:
      'Extremamente profissionais; trabalho executado conforme pedido e orçamentado; disponibilidade e simpatia.',
    author: 'Camilo Mota',
  },
  {
    starsGiven: 5,
    comment:
      'Serviço de qualidade, staff educado, simpático e muito profissional. Fazem follow up do trabalho. Recomendo, primam pelo brio no que fazem.',
    author: 'Maria Silva',
  },
  {
    starsGiven: 5,
    comment:
      'Adorei, o sofá ficou novo mesmo e com um cheirinho muito bom. Profissionais e muito simpáticos',
    author: 'Isabel Oliveira',
  },
]

export function Testimonials() {
  const [isClient, setIsClient] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      '(min-width: 600px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 992px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
    <>
      {isClient && (
        <section
          id="testemunhos"
          className="flex flex-col items-center gap-8 justify-center w-[95%] mx-auto"
        >
          <h2 className="self-start md:self-center">Testemunhos</h2>
          <p>Descubra a Nossa Experiência em Transformar Espaços.</p>
          <div className="flex flex-col relative w-carousel sm:w-carousel-md overflow-y-hidden overflow-x-scroll gap-8 snap-mandatory hidden-scrollbar">
            <div className="keen-slider" ref={sliderRef}>
              {testimonialsData.map((data, i) => (
                <div className="keen-slider__slide" key={i}>
                  <TestimonialCard
                    starsGiven={data.starsGiven}
                    comment={data.comment}
                    author={data.author}
                  />
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <div className="flex justify-center py-2">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length,
                  ).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={
                        'border-none w-3 h-3 bg-gray-400 rounded-[50%] mx-2 p-2 cursor-pointer focus:outline-none' +
                        (currentSlide === idx ? ' bg-black' : '')
                      }
                    ></button>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
