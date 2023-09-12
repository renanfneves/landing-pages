'use client'

import { TestimonialCard } from './TestimonialCard'

export function Testimonials() {
  return (
    <section className="flex relative w-carousel sm:w-carousel-md overflow-x-scroll gap-16 snap-mandatory hidden-scrollbar">
      <div className='flex gap-16'>
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
        <TestimonialCard starsGiven={5} comment='eu acho que sim, mas penso que não' author='Renan Neves' city='Charneca da Caparica' />
      </div>
    </section>

  )
}


// .carousel {
//   display: flex;
//   gap: 10px;
//   width: 580px;
//   max-width: 90%;
//   margin: 50px auto;
//   padding: 10px;
//   overflow-x: scroll;
//   scroll-snap-type: x mandatory;
// }
