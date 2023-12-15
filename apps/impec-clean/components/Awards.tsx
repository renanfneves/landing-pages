import Image from 'next/image'
import BestSocialMediaAward from '../assets/best-social-media.jpg'
import BestCustomerServiceAward from '../assets/best-customer-service.jpg'

export function Awards() {
  return (
    <article className="flex flex-col items-center w-full gap-16 py-4 md:py-8">
      <h2>A Impec Clean em Destaque</h2>
      <section className="flex flex-col md:flex-row gap-y-4 items-center justify-evenly w-full">
        <Image
          src={BestCustomerServiceAward.src}
          alt="Destaque Atendimento ao Cliente"
          width={550}
          height={500}
          className="rounded-sm"
        />
        <Image
          src={BestSocialMediaAward.src}
          alt="Empresa Destaque Redes Sociais"
          width={550}
          height={500}
          className="rounded-sm"
        />
      </section>
    </article>
  )
}
