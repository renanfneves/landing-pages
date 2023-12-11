import { Button, GraphicArticle } from '@landing-pages/ui-library'
import BackgroundImage from '../assets/contactus-image.svg'

export function ContactUs() {
  return (
    <GraphicArticle.Root>
      <GraphicArticle.ContentRoot>
        <h2>Fale connosco!</h2>
        <p>
          A ImpecClean vai a sua casa! Oferecemos os melhores serviços de
          limpeza e higienização para estofos e carpetes, incluindo sofás,
          colchões e tapetes.
        </p>
        <Button style={{ width: 'fit-content' }} asChild>
          <a
            className="flex-center flex-col gap-4"
            href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%0AComo%20posso%20fazer%20um%20orçamento%20personalizado%20e%20gratuito?"
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento grátis
          </a>
        </Button>
      </GraphicArticle.ContentRoot>
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
    </GraphicArticle.Root>
  )
}
