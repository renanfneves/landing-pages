import { GraphicArticle } from '@landing-pages/ui-library'
import BackgroundImage from '../assets/team-image.png'

export function ImpecTeam() {
  return (
    <GraphicArticle.Root className="flex-col-reverse">
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
      <GraphicArticle.ContentRoot>
        <h3 className="text-sm font-bold">Profissionalismo</h3>
        <h2>A Força por Trás da ImpecClean</h2>
        <p>
          Juntos, somos a equipa dedicada da ImpecClean, apaixonados por trazer
          uma nova vida aos seus estofos e cuidar da saúde do seu lar.
          Combinamos a nossa experiência e conhecimento para garantir que cada
          trabalho seja executado com precisão e cuidado. A nossa dedicação em
          proporcionar um serviço de qualidade reflete-se em cada projeto que
          realizamos. Estamos ansiosos para trabalhar consigo e mostrar como a
          limpeza profunda pode transformar o ambiente da sua casa.
        </p>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
          <div className="w-full">
            <h6 className="mb-2 font-semibold">Mayumi</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="w-full">
            <h6 className="mb-2 font-semibold">Douglas</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
        </div>
      </GraphicArticle.ContentRoot>
    </GraphicArticle.Root>
  )
}
