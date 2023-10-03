import { ImpecHeader } from '../../components/ImpecHeader'
import { ImpecHero } from '../../components/ImpecHero'
import { AboutUs } from '../../components/AboutUs'
import { Testimonials } from '../../components/Testimonials'
import { Services } from '../../components/Services'
import { ContactUs } from '../../components/ContactUs'
import { Portfolio } from '../../components/Portfolio'
import { ImpecTeam } from '../../components/ImpecTeam'
import { EmailForm } from '../../components/EmailForm'
import { OurContacts } from '../../components/OurContacts'
import { Footer } from '../../components/Footer'

export default async function LandingPage() {
  return (
    <main>
      <ImpecHeader />
      <ImpecHero />
      <div className="flex flex-col container gap-16 overflow-hidden">
        <Testimonials />
        <AboutUs />
        <Services />
        <ContactUs />
        <Portfolio />
        <ImpecTeam />
        <EmailForm />
        <OurContacts />
        <Footer />
      </div>
    </main>
  )
}
