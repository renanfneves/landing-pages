import Image from 'next/image'
import SVGCube from '../assets/3d-cube.svg'
import { Button } from '@landing-pages/ui-library'

export function WhyChooseUs() {
  return (
    <article className="w-full md:w-[90%] m-auto text-justify">
      <section>
        <h2>Por que escolher a Impec Clean</h2>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-center mt-4">
            <Image src={SVGCube} alt={''} width={16} height={16} />
            <span>
              <strong>Experiência e Excelência:</strong> A nossa equipa
              altamente treinada domina técnicas avançadas, garantindo que cada
              fibra dos seus estofos e carpetes seja tratada com o máximo
              cuidado e habilidade.
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <Image src={SVGCube} alt={''} width={16} height={16} />
            <span>
              <strong>Higienização Vegana e Ecológica:</strong> Utilizamos
              exclusivamente produtos de alta qualidade e veganos, que não só
              preservam a estética, mas também promovem a saúde dos seus
              estofos, mantendo-os livres de germes.
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <Image src={SVGCube} alt={''} width={16} height={16} />
            <span>
              <strong>IMPEC PROTECT - Proteção Duradoura:</strong> Desfrute do
              nosso serviço de impermeabilização de estofos, uma camada
              protetora que preserva a beleza do seu sofá e prolonga a sua vida
              útil. Mais do que uma simples limpeza, comprometemo-nos a manter o
              seu mobiliário impecável a longo prazo.
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <Image src={SVGCube} alt={''} width={16} height={16} />
            <span>
              <strong>Área de Atuação:</strong> Atendemos os distritos de Braga,
              Porto e Viana do Castelo. Independentemente da sua localização, a
              Impec Clean está pronta para elevar o padrão de limpeza dos seus
              estofos e carpetes. Entre em contacto hoje para um serviço que vai
              além da limpeza comum. Descubra o que é verdadeiramente impecável
              com a Impec Clean.
            </span>
          </li>
        </ul>
      </section>
      <section className="flex justify-center items-center p-8">
        <Button variant="secondary" size="lg" asChild>
          <a
            className="flex-center flex-col gap-4 font-bold text-white"
            href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%20vim%20através%20do%20site.%0A%0AGostaria%20de%20agendar%20uma%20limpeza%20com%20a%20Impec%20Clean"
            target="_blank"
            rel="noreferrer"
          >
            AGENDE SUA LIMPEZA EXCLUSIVA!
          </a>
        </Button>
      </section>
    </article>
  )
}
