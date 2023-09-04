import { Button } from "@landing-pages/ui-library"
import { HomeHero } from "../../components/HomeHero";

export default async function LandingPage() {
  return (
    <main>
      <HomeHero />
      <div className="max-width">
        <Button size="lg">
          hello world
        </Button>
      </div>
    </main>
  );
}
