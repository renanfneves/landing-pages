import Image from 'next/image'
import BestSocialMediaAward from '../assets/best-social-media.webp'
import BestCustomerServiceAward from '../assets/best-customer-service.webp'

export function Awards() {
  return (
    <article className="flex flex-col items-center w-full gap-16 pb-4">
      <h2>A Impec Clean em Destaque</h2>
        <p className="text-base md:text-lg font-semibold">
                Excelência, Profissionalismo e Dedicação Em Limpar Sofás. +1000
                Clientes Satisfeitos.
              </p>
      <section className="flex flex-col md:flex-row gap-4 items-center justify-evenly w-full">
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
