'use client'

import { GraphicArticle } from '@landing-pages/ui-library'
import UpholsteryImage from '../assets/upholstery-service.svg'
import MattressImage from '../assets/mattress-service.svg'
import CarpetsImage from '../assets/carpets-service.svg'
import { useCallback, useState } from 'react'
import { StaticImageData } from 'next/image'

type PossibleService = 'upholstery' | 'mattress' | 'carpets'

const ImagesMapper: Record<PossibleService, StaticImageData> = {
  upholstery: UpholsteryImage,
  mattress: MattressImage,
  carpets: CarpetsImage,
}

export function Services() {
  const [activeService, setActiveService] =
    useState<PossibleService>('upholstery')

  const handleActiveService = useCallback(
    (chosenService: PossibleService) => () => {
      setActiveService(chosenService)
    },
    [],
  )

  return (
    <div id="servicos">
      <GraphicArticle.Root className="flex-col-reverse">
        <GraphicArticle.Image
          src={ImagesMapper[activeService].src}
          description="Serviços oferecidos pela Impec Clean"
        />
        <GraphicArticle.ContentRoot>
          <button
            className="border-none"
            onClick={handleActiveService('upholstery')}
          >
            <div
              className="flex flex-col gap-4 pl-8 text-left border-l-4 data-[active=upholstery]:border-l-black"
              data-active={activeService}
            >
              <h2 className="text-3xl">Higienização de estofos</h2>
              <p className="text-sm">
                Oferecemos serviços de limpeza de estofos de alta qualidade para
                garantir que os seus móveis se mantenham frescos e limpos. A
                nossa equipa de especialistas utiliza técnicas avançadas e
                produtos ecológicos para remover sujidade, manchas e alergénios,
                deixando os seus estofos com um aspeto renovado.
              </p>
            </div>
          </button>
          <button
            className="border-none"
            onClick={handleActiveService('mattress')}
          >
            <div
              className="flex flex-col gap-4 pl-8 text-left border-l-4 data-[active=mattress]:border-l-black"
              data-active={activeService}
            >
              <h2 className="text-3xl">Higienização de colchões</h2>
              <p className="text-sm">
                Seu sono é inestimável, mas sabia que após apenas um ano de uso,
                um colchão pode acumular até 1,5 milhões de ácaros? Esses
                intrusos invisíveis podem ser prejudiciais à saúde respiratória,
                interferindo na qualidade do seu descanso. Com a Higienização de
                Colchões da Impec Clean, proporcionamos noites de sono
                tranquilas e saudáveis para você e sua família.
              </p>
            </div>
          </button>

          <button
            className="border-none"
            onClick={handleActiveService('carpets')}
          >
            <div
              className="flex flex-col gap-4 pl-8 text-left border-l-4 data-[active=carpets]:border-l-black"
              data-active={activeService}
            >
              <h2 className="text-3xl">Higienização de carpetes</h2>
              <p className="text-sm">
                Em meio ao aconchego das carpetes, a sujidade se acumula. A
                IMPEC traz a solução ideal com um método seguro, atendendo
                diretamente ao seu lar. Nossas técnicas inovadoras garantem que
                suas carpetes sequem em poucas horas, proporcionando a você a
                comodidade de usá-las no mesmo dia. Experimente a fusão perfeita
                entre praticidade e o encanto de carpetes verdadeiramente
                impecáveis.
              </p>
            </div>
          </button>
        </GraphicArticle.ContentRoot>
      </GraphicArticle.Root>
    </div>
  )
}
