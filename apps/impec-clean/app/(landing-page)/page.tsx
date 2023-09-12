import { AboutUs } from "../../components/AboutUs";
import { HomeHero } from "../../components/HomeHero";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Services } from "../../components/Services";
import { ContactUs } from "../../components/ContactUs";
import { ImpecTeam } from "../../components/ImpecTeam";
import { EmailForm } from "../../components/EmailForm";
import { OurContacts } from "../../components/OurContacts";
import { Footer } from "../../components/Footer";

export default async function LandingPage() {
  return (
    <main>
      <HomeHero />
      <div className="flex flex-col md:px-16 px-4 py-16 padding-y max-w-[1440px] mx-auto gap-16 overflow-hidden">
        <Testimonials />
        <AboutUs />
        <Services />
        <ContactUs />
        <ImpecTeam />
        <EmailForm />
        <OurContacts />
        <Footer />
      </div>
    </main>
  );
}
