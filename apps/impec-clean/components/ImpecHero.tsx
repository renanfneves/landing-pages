'use client'

import BackgroundImage from '../assets/hero-background.png'

import { Hero } from '@landing-pages/ui-library'
import { HeroOutdoor } from './HeroOutdoor'

export function ImpecHero() {
  return (
    <Hero.Root backgroundImage={BackgroundImage.src}>
      <div className="flex-center flex-col max-w-4xl gap-4 font-bold relative">
        <Hero.Title>
          Descubra a Excelência em Limpeza de Estofos e Carpetes
        </Hero.Title>
        <div className="max-w-2xl m-auto">
          <Hero.Text>
            A ImpecClean é especializada em oferecer serviços de limpeza,
            desinfeção e higienização de alta qualidade para estofos, colchões e
            carpetes.
          </Hero.Text>
        </div>
        <Hero.CallToAction asChild>
          <a
            className="flex-center flex-col gap-4 font-bold text-white"
            href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%20vim%20através%20do%20site.%0A%0AComo%20posso%20fazer%20um%20orçamento%20personalizado%20e%20gratuitamente?"
            target="_blank"
            rel="noreferrer"
          >
            Fale com um especialista
          </a>
        </Hero.CallToAction>
      </div>

      <div className="md:absolute md:left-4 md:right-4 md:bottom-4 overflow-hidden backdrop-blur-sm w-[90%] mx-auto">
        <HeroOutdoor />
      </div>
    </Hero.Root>
  )
}
