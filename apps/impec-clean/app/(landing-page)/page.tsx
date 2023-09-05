import { HomeHero } from "../../components/HomeHero";
import { Testimonials } from "../../components/Testimonials";

export default async function LandingPage() {
  return (
    <main>
      <HomeHero />
      <div className="padding-x padding-y max-width">
        <Testimonials />
      </div>
    </main>
  );
}
