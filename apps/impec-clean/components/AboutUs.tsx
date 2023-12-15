import { GraphicArticle } from '@landing-pages/ui-library'
import BackgroundImage from '../assets/aboutus.svg'
import Image from 'next/image'
import SVGCube from '../assets/3d-cube.svg'

export function AboutUs() {
  return (
    <GraphicArticle.Root>
      <GraphicArticle.ContentRoot>
        <h3 className="text-sm font-bold">Excelência</h3>
        <h2>Serviços de Limpeza Profissional para Estofos e Carpetes</h2>
        <p>
          A Impec Clean oferece serviços de limpeza, higienização e desinfecção
          de estofos e carpetes com qualidade, eficiência e atendimento
          personalizado. A nossa equipa altamente treinada utiliza técnicas
          avançadas e produtos de alta qualidade para garantir que seus estofos
          e carpetes fiquem limpos e livres de germes. Atuamos em toda a zona
          norte mas principalmente nos distritos de Braga, Porto e Viana do
          Castelo.
        </p>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-center mt-4">
            <Image src={SVGCube} alt={''} width={16} height={16} />
            <span>Equipa altamente treinada e produtos de alta qualidade</span>
          </li>
          <li className="flex gap-4 items-center">
            <Image src={SVGCube} alt={''} width={16} height={16} />
            <span>
              Serviços de limpeza profissional para sofás, colchões e tapetes
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <Image src={SVGCube} alt={''} width={16} height={16} />
            <span>
              Limpeza, higienização e desinfecção para estofos e carpetes
              impecáveis
            </span>
          </li>
        </ul>
      </GraphicArticle.ContentRoot>
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
    </GraphicArticle.Root>
  )
}
