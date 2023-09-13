'use client'

import BackgroundImage from '../assets/hero-image.webp'

import { Hero } from "@landing-pages/ui-library"

export function HomeHero() {
  return (
    <Hero.Root backgroundImage={BackgroundImage.src}>
      <div className='flex-center flex-col max-w-2xl gap-8'>
        <Hero.Title>Descubra a Excelência em Limpeza de Estofos e Carpetes</Hero.Title>
        <Hero.Text>A ImpecClean é especializada em oferecer serviços de limpeza, desinfeção e higienização de alta qualidade para estofos, colchões e carpetes.</Hero.Text>
        <Hero.CallToAction onClick={() => alert('click test')}>Pedir um orçamento grátis</Hero.CallToAction>
      </div>
    </Hero.Root>
  )
}
