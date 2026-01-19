import { Hero } from '@landing-pages/ui-library'
import MattressImage from '../../../../assets/mattress-service.webp'
import { AboutUs } from '../../../../components/AboutUs'
import { Testimonials } from '../../../../components/Testimonials'
import { ContactUs } from '../../../../components/ContactUs'
import { Portfolio } from '../../../../components/Portfolio'
import { ImpecTeam } from '../../../../components/ImpecTeam'
import { EmailForm } from '../../../../components/EmailForm'
import { OurContacts } from '../../../../components/OurContacts'

import { Awards } from '../../../../components/Awards'

export default function ColchoesPage() {
  return (
    <main>
      <Hero.Root backgroundImage={MattressImage.src}>
        <div className="flex-center flex-col max-w-4xl gap-4 font-bold relative">
          <Hero.Title>
            Higienização de Colchões
          </Hero.Title>
          <div className="max-w-2xl m-auto">
            <Hero.Text>
              Seu sono é inestimável, mas sabia que após apenas um ano de uso, um colchão pode acumular até 1,5 milhões de ácaros? Esses intrusos invisíveis podem ser prejudiciais à saúde respiratória, interferindo na qualidade do seu descanso. Nossa higienização elimina ácaros, bactérias e odores, prolongando a vida útil do colchão e garantindo noites tranquilas para você e sua família. Atendemos colchões de todos os tamanhos, inclusive em hotéis e pousadas.
            </Hero.Text>
          </div>
          <Hero.CallToAction asChild>
            <a
              className="flex-center flex-col gap-4 font-bold text-white"
              href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%20vim%20através%20do%20site.%0A%0AQuero saber mais sobre a higienização de colchões."
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

        {/* Se desejar, pode adicionar aqui uma secção de proteção de colchões, semelhante à das carpetes/sofás, se a empresa oferecer esse serviço. */}
        <ImpecTeam />
        <Portfolio />
        <EmailForm />
        <OurContacts />
      </div>
    </main>
  )
}