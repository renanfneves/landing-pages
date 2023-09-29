import { Carousel } from '@landing-pages/ui-library'

import PortfolioI from '../assets/portfolio-1.png'
import PortfolioII from '../assets/portfolio-2.png'
import PortfolioIII from '../assets/portfolio-3.png'
import PortfolioIV from '../assets/portfolio-4.png'

const CARDS = [
  PortfolioI.src,
  PortfolioII.src,
  PortfolioIII.src,
  PortfolioIV.src,
]

export function Portfolio() {
  return (
    <section
      id="portifolio"
      className="w-full h-screen gap-8 flex flex-col items-center justify-center"
    >
      <h2>Portifólio</h2>
      <p>Descubra a Nossa Experiência em Transformar Espaços.</p>
      <Carousel>
        {CARDS.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt=""
            key={i}
            className="object-contain md:aspect-video rounded-md"
          />
        ))}
      </Carousel>
    </section>
  )
}
