import { Button, GraphicArticle } from '@landing-pages/ui-library'
import BackgroundImage from '../assets/aboutus.webp'
import Image from 'next/image'
import SVGCube from '../assets/cube.svg'

export function AboutUs() {
  return (
    <GraphicArticle.Root>
      <GraphicArticle.ContentRoot>
        <h3 className="text-sm font-bold">Excelência</h3>
        <h2>Serviços de Limpeza Premium para Estofos e Carpetes</h2>
        <p>
          A Impec Clean oferece serviços de limpeza, higienização e desinfecção
          de estofos e carpetes com qualidade, eficiência e atendimento
          personalizado. Atuamos em toda a zona norte, nos distritos de Braga,
          Porto e Viana do Castelo.
        </p>
        <ul className="flex flex-col gap-8">
          <li className="flex gap-2 items-start flex-col md:pl-6 lg:pl-8">
            <h3 className="flex gap-2 text-base">
              <Image src={SVGCube} alt={''} width={16} height={16} />
              <strong>Experiência e Excelência:</strong>
            </h3>
            <p>
              A nossa equipa altamente treinada domina técnicas avançadas,
              garantindo que cada fibra dos seus estofos e carpetes seja tratada
              com o máximo cuidado e habilidade.
            </p>
          </li>
          <li className="flex gap-2 items-start flex-col md:pl-6 lg:pl-8">
            <h3 className="flex gap-2 text-base">
              <Image src={SVGCube} alt={''} width={16} height={16} />
              <strong>Higienização Vegana e Ecológica:</strong>
            </h3>
            <p>
              Utilizamos exclusivamente produtos de alta qualidade e veganos,
              que não só preservam a estética, mas também promovem a saúde dos
              seus estofos, mantendo-os livres de germes.
            </p>
          </li>
          <li className="flex gap-2 items-start flex-col md:pl-6 lg:pl-8">
            <h3 className="flex gap-2 text-base">
              <Image src={SVGCube} alt={''} width={16} height={16} />
              <strong>Impec Protect - Proteção Duradoura:</strong>
            </h3>
            <p>
              Desfrute do nosso serviço de impermeabilização de estofos, uma
              camada protetora que preserva a beleza do seu sofá e prolonga a
              sua vida útil. Mais do que uma simples limpeza, comprometemo-nos a
              manter o seu mobiliário impecável a longo prazo.
            </p>
          </li>
        </ul>
        <section className="flex justify-center items-center">
          <Button variant="secondary" asChild>
            <a
              className="flex-center flex-col gap-4 font-bold text-white text-[0.8rem] md:text-base"
              href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%20vim%20através%20do%20site.%0A%0AGostaria%20de%20agendar%20uma%20limpeza%20com%20a%20Impec%20Clean"
              target="_blank"
              rel="noreferrer"
            >
              AGENDE SUA LIMPEZA EXCLUSIVA!
            </a>
          </Button>
        </section>
      </GraphicArticle.ContentRoot>
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
    </GraphicArticle.Root>
  )
}
