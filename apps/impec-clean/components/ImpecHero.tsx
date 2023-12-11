'use client'

import BackgroundImage from '../assets/hero-background.png'

import { Hero } from '@landing-pages/ui-library'
import { HeroOutdoor } from './HeroOutdoor'

export function ImpecHero() {
  return (
    <Hero.Root backgroundImage={BackgroundImage.src}>
      <div className="flex-center flex-col max-w-2xl gap-8 font-bold relative">
        <Hero.Title>
          Descubra a Excelência em Limpeza de Estofos e Carpetes
        </Hero.Title>
        <Hero.Text>
          A ImpecClean é especializada em oferecer serviços de limpeza,
          desinfeção e higienização de alta qualidade para estofos, colchões e
          carpetes.
        </Hero.Text>
        <Hero.CallToAction
          asChild
          className="border-yellow-400 hover:border-none font-bold backdrop-blur-sm border-2 hover:bg-yellow-400"
        >
          <a
            className="flex-center flex-col gap-4 font-bold text-yellow-400 hover:text-white"
            href="#contact-form"
          >
            Fale com um especialista
          </a>
        </Hero.CallToAction>
      </div>

      <div className="md:absolute md:left-4 md:right-4 md:bottom-4 overflow-hidden backdrop-blur-sm">
        <HeroOutdoor />
      </div>
    </Hero.Root>
  )
}
