'use client'

import { TestimonialCard } from '@landing-pages/ui-library'

export function Testimonials() {
  return (
    <section
      id="testemunhos"
      className="flex flex-col items-center gap-8 h-[60vh] justify-center"
    >
      <h2 className="self-start md:self-center">Testemunhos</h2>
      <p>Descubra a Nossa Experiência em Transformar Espaços.</p>
      <div className="flex relative w-carousel sm:w-carousel-md overflow-y-hidden overflow-x-scroll gap-16 snap-mandatory hidden-scrollbar">
        <div className="flex gap-16">
          <TestimonialCard
            starsGiven={5}
            comment="Serviço incrível 👌 <br /> Super profissionais. Excelente higienização do sofá e tapete. Boa comunicação. Pontuais. Recomendo vivamente!"
            author="Tania João Almendra"
          />
          <TestimonialCard
            starsGiven={5}
            comment="Ótimos profissionais! <br /> Pessoal sério e comprometido! Viramos clientes! E com certeza vamos recomendar!"
            author="Manoelle Uchikawa"
          />
          <TestimonialCard
            starsGiven={5}
            comment="Excelente serviço, comunicação muito ágil e rápida, sempre prontos a esclarecer dúvidas e a sugerir as melhores soluções. Recomendo!"
            author="Ana Gonçalves da Silva"
          />
          <TestimonialCard
            starsGiven={5}
            comment="Extremamente profissionais; trabalho executado conforme pedido e orçamentado; disponibilidade e simpatia."
            author="Camilo Mota"
          />
          <TestimonialCard
            starsGiven={5}
            comment="Serviço de qualidade, staff educado, simpático e muito profissional. Fazem follow up do trabalho. Recomendo, primam pelo brio no que fazem."
            author="Maria Silva"
          />
          <TestimonialCard
            starsGiven={5}
            comment="Adorei, o sofá ficou novo mesmo e com um cheirinho muito bom. Profissionais e muito simpáticos"
            author="Isabel Oliveira"
          />
          <TestimonialCard
            starsGiven={5}
            comment="Super profissionais! O meu sofá ficou como novo."
            author="Vanessa Araujo"
          />
          <TestimonialCard
            starsGiven={5}
            comment="Pedi limpeza do colchão que estava cheio de nódoas, ficou limpo e branco como novo. Pessoal simpático. A hora marcada foi a hora que chegaram a casa."
            author="Patrícia Pinheiro"
          />
        </div>
      </div>
    </section>
  )
}
