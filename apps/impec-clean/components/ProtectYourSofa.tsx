import { Button, GraphicArticle, VideoPlayer } from '@landing-pages/ui-library'

export function ProtectYourSofa() {
  return (
    <GraphicArticle.Root>
      <GraphicArticle.ContentRoot>
        <h2>Proteja seu sofá!</h2>
        <p>
          Derramar acidentalmente uma bebida ou deixar cair comida nos estofos
          pode ser estressante, não apenas pela inevitável mancha, mas também
          pelos prejuízos decorrentes. Compreendemos as preocupações dos nossos
          clientes, e é por isso que apresentamos o IMPEC PROTECT - a solução
          perfeita para manter os seus móveis impecáveis face aos desafios do
          dia a dia.
        </p>
        <p>
          Ao escolher a nossa tecnologia avançada de impermeabilização,
          desfrutará da tranquilidade de ter os seus estofos protegidos contra
          manchas acidentais, umidade, bolores, e ainda estará a prolongar a
          vida útil do seu mobiliário. Faça uma escolha inteligente para a
          preservação do seu sofá - escolha IMPEC PROTECT. Garanta durabilidade
          e sofisticação, mesmo nos momentos mais imprevisíveis.
        </p>
        <section className="w-full flex justify-center">
          <Button variant="secondary" size="lg">
            QUERO PROTEGER O MEU SOFÁ!
          </Button>
        </section>
      </GraphicArticle.ContentRoot>
      <GraphicArticle.MediaRoot>
        <VideoPlayer videoId="47ClD-seLns" />
      </GraphicArticle.MediaRoot>
    </GraphicArticle.Root>
  )
}
