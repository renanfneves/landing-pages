import { Button } from '@landing-pages/ui-library'
import Banner from '../assets/banner-contactus.webp'

export function ContactUs() {
  return (
    <article
      className="w-[calc(100%+3rem)] ml-[-1.5rem] md:ml-0 md:w-full flex flex-col p-4 md:p-16 items-start justify-center bg-contain md:bg-cover rounded-md"
      style={{
        backgroundImage: `url(${Banner.src})`,
      }}
    >
      <section className="flex flex-col text-white md:w-96 text-center gap-4">
        <h2>Fale connosco!</h2>
        <p>
          A Impec Clean vai a sua casa! Oferecemos os melhores serviços de
          limpeza e higienização para estofos e carpetes, incluindo sofás,
          colchões e tapetes.
        </p>
        <Button asChild size="lg" variant="secondary">
          <a
            className="flex-center flex-col gap-4"
            href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%0AComo%20posso%20fazer%20um%20orçamento%20personalizado%20e%20gratuito?"
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento grátis
          </a>
        </Button>
      </section>
    </article>
  )
}
