import { Hero } from '@landing-pages/ui-library'
import CarpetsImage from '../../../../assets/giorgio-trovato-5TXz228u4eo-unsplash.jpg'
import { AboutUs } from '../../../../components/AboutUs'
import { Testimonials } from '../../../../components/Testimonials'
import { ContactUs } from '../../../../components/ContactUs'
import { Portfolio } from '../../../../components/Portfolio'
import { ImpecTeam } from '../../../../components/ImpecTeam'
import { EmailForm } from '../../../../components/EmailForm'
import { OurContacts } from '../../../../components/OurContacts'

import { Awards } from '../../../../components/Awards'

export default function CarpetesPage() {
  return (
    <main>
      <Hero.Root backgroundImage={CarpetsImage.src}>
        <div className="flex-center flex-col max-w-4xl gap-4 font-bold relative">
          <Hero.Title>
            Higienização de Carpetes
          </Hero.Title>
          <div className="max-w-2xl m-auto">
            <Hero.Text>
              Carpetes acumulam sujidade, ácaros e odores ao longo do tempo. Nossa higienização utiliza métodos seguros e inovadores, garantindo limpeza profunda e secagem rápida. Atendemos carpetes residenciais e comerciais, removendo manchas difíceis e devolvendo o conforto ao seu ambiente. Sinta a diferença de uma carpete verdadeiramente impecável, pronta para uso no mesmo dia.
            </Hero.Text>
          </div>
          <Hero.CallToAction asChild>
            <a
              className="flex-center flex-col gap-4 font-bold text-white"
              href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%20vim%20através%20do%20site.%0A%0AQuero saber mais sobre a higienização de carpetes."
              target="_blank"
              rel="noreferrer"
            >
              Fale com um especialista
            </a>
          </Hero.CallToAction>
        </div>
      </Hero.Root>
      <div className="mt-8 flex flex-col container gap-16 md:gap-24 overflow-hidden">
        <Testimonials />
        <AboutUs />
        <Awards />
        <ContactUs />
        <section className="w-full flex flex-col items-center bg-gray-50 rounded-xl p-8 gap-6">
          <h2 className="text-2xl font-bold mb-2">Proteja a sua Carpete!</h2>
          <p>
            Carpetes são investimentos valiosos e merecem proteção extra contra manchas, líquidos e desgaste do dia a dia. Pensando nisso, oferecemos um serviço de impermeabilização exclusivo para carpetes, criando uma barreira invisível que facilita a limpeza e prolonga a vida útil do seu tapete.
          </p>
          <p>
            Com a nossa tecnologia, sua carpete ficará protegida contra acidentes domésticos, umidade e até mesmo odores. Mantenha o conforto e a beleza do seu ambiente por muito mais tempo!
          </p>
          <section className="w-full flex justify-center">
            <a
              className="flex-center flex-col gap-4 font-bold text-white bg-primary px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
              href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%20vim%20através%20do%20site.%0A%0AGostaria%20de%20proteger%20a%20minha%20carpete"
              target="_blank"
              rel="noreferrer"
            >
              QUERO PROTEGER A MINHA CARPETE!
            </a>
          </section>
        </section>
        <ImpecTeam />
        <Portfolio />
        <EmailForm />
        <OurContacts />
      </div>
    </main>
  )
}