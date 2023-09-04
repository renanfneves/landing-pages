'use client'

import BackgroundImage from '../assets/hero-image.webp'

import { Hero } from "@landing-pages/ui-library"

export function HomeHero() {
  return (
    <Hero.Root backgroundImage={BackgroundImage.src}>
      <Hero.Title title="title" />
      <Hero.Text text="text" />
      <Hero.CallToAction onClick={() => alert('funciona pai')}>call to action</Hero.CallToAction>
    </Hero.Root>
  )
}
