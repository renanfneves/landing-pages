'use client'

import BackgroundImage from '../assets/hero-image.webp'

import { Hero } from "@landing-pages/ui-library"

export function HomeHero() {
  return (
    <Hero.Root backgroundImage={BackgroundImage.src}>
      <div className='flex-center flex-col max-w-2xl gap-8'>
        <Hero.Title>Descubra a Excelência em Limpeza de Estofos e Carpetes</Hero.Title>
        <Hero.Text>A ImpecClean é especializada em oferecer serviços de limpeza, desinfeção e higienização de alta qualidade para estofos, colchões e carpetes.</Hero.Text>
        <Hero.CallToAction asChild>
          <a className="flex-center flex-col gap-4" href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%0AComo%20posso%20fazer%20um%20orçamento%20personalizado%20e%20gratuito?" target="_blank">
            Pedir um orçamento grátis
          </a>
        </Hero.CallToAction>
      </div>
    </Hero.Root>
  )
}
