import { GraphicArticle } from '@landing-pages/ui-library'
import BackgroundImage from '../assets/team-image.svg'

export function ImpecTeam() {
  return (
    <GraphicArticle.Root className="flex-col-reverse">
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
      <GraphicArticle.ContentRoot>
        <h3 className="text-sm font-bold">Profissionalismo</h3>
        <h2>A Força por Trás da Impec Clean</h2>
        <p>
          Juntos, somos a equipa dedicada da Impec Clean, apaixonados por trazer
          uma nova vida aos seus estofos e cuidar da saúde do seu lar.
          Combinamos a nossa experiência e conhecimento para garantir que cada
          trabalho seja executado com precisão e cuidado. A nossa dedicação em
          proporcionar um serviço de qualidade reflete-se em cada projeto que
          realizamos. Estamos ansiosos para trabalhar consigo e mostrar como a
          limpeza profunda pode transformar o ambiente da sua casa.
        </p>
      </GraphicArticle.ContentRoot>
    </GraphicArticle.Root>
  )
}
