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
    <main>
      <ImpecHero />
      <div className="flex flex-col container gap-16 overflow-hidden">
        <Testimonials />
        <AboutUs />
        <Awards />
        <WhyChooseUs />
        <Services />
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
