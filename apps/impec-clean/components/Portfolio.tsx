/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import PortfolioI from '../assets/portfolio-1.webp'
import PortfolioII from '../assets/portfolio-2.webp'
import PortfolioIII from '../assets/portfolio-3.webp'
import PortfolioIV from '../assets/portfolio-4.png'
import { useKeenSlider } from 'keen-slider/react'
import { MutableRefObject, useCallback, useLayoutEffect, useState } from 'react'

const CARDS = [
  PortfolioI.src,
  PortfolioII.src,
  PortfolioIII.src,
  PortfolioIV.src,
]

export function Portfolio() {
  const [isClient, setIsClient] = useState(false)

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  const thumbnailPlugin = useCallback((mainRef: MutableRefObject<any>) => {
    return (slider: any) => {
      function removeActive() {
        slider.slides.forEach((slide: any) => {
          slide.classList.remove('active')
        })
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add('active')
      }

      function addClickEvents() {
        slider.slides.forEach((slide: any, idx: number) => {
          slide.addEventListener('click', () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }

      slider.on('created', () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on('animationStarted', (main: any) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }, [])
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [thumbnailPlugin(instanceRef)],
  )
  return (
    <>
      {isClient && (
        <section
          id="portfolio"
          className="w-full md:w-1/2 md:self-center h-screen gap-8 flex flex-col items-center justify-center"
        >
          <h2>Portfólio</h2>
          <p>Descubra a Nossa Experiência em Transformar Espaços.</p>
          <div ref={sliderRef} className="keen-slider">
            {CARDS.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt=""
                key={i}
                className="keen-slider__slide object-fill rounded-md"
              />
            ))}
          </div>
          <div ref={thumbnailRef} className="keen-slider thumbnail">
            {CARDS.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt=""
                key={i}
                className="keen-slider__slide object-fill rounded-md"
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
