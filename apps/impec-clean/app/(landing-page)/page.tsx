import { ImpecHero } from '../../components/ImpecHero'
import { AboutUs } from '../../components/AboutUs'
import { Testimonials } from '../../components/Testimonials'
import { Services } from '../../components/Services'
import { ContactUs } from '../../components/ContactUs'
import { Portfolio } from '../../components/Portfolio'
import { ImpecTeam } from '../../components/ImpecTeam'
import { EmailForm } from '../../components/EmailForm'
import { OurContacts } from '../../components/OurContacts'
import { WhyChooseUs } from '../../components/WhyChooseUs'
import { ProtectYourSofa } from '../../components/ProtectYourSofa'
import { Awards } from '../../components/Awards'

export default async function LandingPage() {
  return (
    <main className="overflow-hidden max-w-screen-2xl">
      <ImpecHero />
      <div className="mt-8 flex flex-col container gap-32 overflow-hidden">
        <Testimonials />
        <AboutUs />
        <Awards />
        <WhyChooseUs />
        <Services />
        <ProtectYourSofa />
        <ContactUs />
        <ImpecTeam />
        <Portfolio />
        <EmailForm />
        <OurContacts />
      </div>
    </main>
  )
}
