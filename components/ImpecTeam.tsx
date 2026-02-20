import { GraphicArticle } from '@landing-pages/ui-library'
import BackgroundImage from '../assets/team-image.webp'
import Image from 'next/image'

export function ImpecTeam() {
  return (
    <GraphicArticle.Root className="flex-col-reverse justify-center">
      <figure className="relative w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] rounded-full overflow-hidden">
        <Image
          fill
          src={BackgroundImage.src}
          alt="Serviços oferecidos pela Impec Clean"
          priority={true}
          sizes="100vw"
          className="object-cover rounded-md aspect-video"
        />
      </figure>

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
