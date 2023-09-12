import { Button, GraphicArticle } from "@landing-pages/ui-library"
import BackgroundImage from '../assets/hero-image.webp'

export function ContactUs() {
  return (
    <GraphicArticle.Root>
      <GraphicArticle.ContentRoot>
        <h2>Fale connosco!</h2>
        <p>
          A ImpecClean vai a sua casa! Oferecemos os melhores serviços de limpeza e higienização para estofos e carpetes, incluindo sofás, colchões e tapetes.
        </p>
        <Button style={{ width: 'fit-content'}}>Pedir orçamento grátis</Button>
      </GraphicArticle.ContentRoot>
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
    </GraphicArticle.Root>
  )
}
