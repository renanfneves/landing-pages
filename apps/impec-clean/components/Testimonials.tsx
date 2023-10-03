'use client'

import { TestimonialCard } from '@landing-pages/ui-library'

export function Testimonials() {
  return (
    <section
      id="testemunhos"
      className="flex flex-col items-center gap-8 h-[60vh] justify-center"
    >
      <h2>Testemunhos</h2>
      <p>Descubra a Nossa Experiência em Transformar Espaços.</p>
      <div className="flex relative w-carousel sm:w-carousel-md overflow-x-scroll gap-16 snap-mandatory hidden-scrollbar">
        <div className="flex gap-16">
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
          <TestimonialCard
            starsGiven={5}
            comment="eu acho que sim, mas penso que não"
            author="Renan Neves"
            city="Charneca da Caparica"
          />
        </div>
      </div>
    </section>
  )
}
