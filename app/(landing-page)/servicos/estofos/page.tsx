import { Hero } from '@landing-pages/ui-library'
import UpholsteryImage from '../../../../assets/upholstery-service.webp'
import { AboutUs } from '../../../../components/AboutUs'
import { Testimonials } from '../../../../components/Testimonials'
import { ContactUs } from '../../../../components/ContactUs'
import { Portfolio } from '../../../../components/Portfolio'
import { ImpecTeam } from '../../../../components/ImpecTeam'
import { EmailForm } from '../../../../components/EmailForm'
import { OurContacts } from '../../../../components/OurContacts'
import { ProtectYourSofa } from '../../../../components/ProtectYourSofa'
import { Awards } from '../../../../components/Awards'

export default function EstofosPage() {
  return (
    <main>
      <Hero.Root backgroundImage={UpholsteryImage.src}>
        <div className="flex-center flex-col max-w-4xl gap-4 font-bold relative">
          <Hero.Title>
            Higienização de Estofos
          </Hero.Title>
          <div className="max-w-2xl m-auto">
            <Hero.Text>
              Oferecemos serviços de limpeza de estofos de alta qualidade para garantir que os seus móveis se mantenham frescos e limpos. Utilizamos técnicas avançadas e produtos ecológicos para remover sujidade, manchas e alergénios, deixando os seus estofos renovados. Nossa equipe é especializada em sofás, cadeiras, poltronas e outros tipos de estofos, atendendo residências e empresas.
            </Hero.Text>
          </div>
          <Hero.CallToAction asChild>
            <a
              className="flex-center flex-col gap-4 font-bold text-white"
              href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%20vim%20através%20do%20site.%0A%0AQuero saber mais sobre a higienização de estofos."
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
        <ProtectYourSofa />
        <ImpecTeam />
        <Portfolio />
        <EmailForm />
        <OurContacts />
      </div>
    </main>
  )
}