'use client'

import { GraphicArticle } from "@landing-pages/ui-library"
import BackgroundImage from '../assets/hero-image.webp'
import { useCallback, useState } from "react"

type PossibleService = "upholstery" | "mattress" | "carpets"

export function Services() {
  const [activeService, setActiveService] = useState<PossibleService>("upholstery")

  const handleActiveService = useCallback((chosenService: PossibleService) => () => {
    setActiveService(chosenService)
  }, [])

  return (
    <GraphicArticle.Root className="flex-col-reverse">
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
      <GraphicArticle.ContentRoot>
        <button className="border-none" onClick={handleActiveService('upholstery')}>
          <div className="flex flex-col gap-4 pl-8 text-left border-l-2 border-transparent data-[active=upholstery]:border-l-black" data-active={activeService}>
            <h2 className="text-3xl">Limpeza Profissional de Estofos</h2>
            <p className="text-sm">
            Oferecemos serviços de limpeza de estofos de alta qualidade para garantir que os seus móveis se mantenham frescos e limpos. A nossa equipa de especialistas utiliza técnicas avançadas e produtos ecológicos para remover sujidade, manchas e alergénios, deixando os seus estofos com um aspeto renovado.
            </p>
          </div>
        </button>
        <button className="border-none" onClick={handleActiveService('mattress')}>
        <div className="flex flex-col gap-4 pl-8 text-left border-l-2 border-transparent data-[active=mattress]:border-l-black" data-active={activeService}>
          <h2 className="text-3xl">Serviços de Limpeza de Colchões</h2>
          <p className="text-sm">
          Os nossos serviços profissionais de limpeza de colchões ajudam-no a manter um ambiente de sono limpo e saudável. Utilizamos equipamento especializado e soluções de limpeza seguras para remover ácaros, alergénios e manchas, garantindo-lhe uma boa noite de sono.
          </p>
        </div>
        </button>

        <button className="border-none" onClick={handleActiveService('carpets')}>
          <div className="flex flex-col gap-4 pl-8 text-left border-l-2 border-transparent data-[active=carpets]:border-l-black" data-active={activeService}>
            <h2 className="text-3xl">Soluções de Limpeza para Carpetes</h2>
            <p className="text-sm">
            As nossas soluções de limpeza para carpetes foram concebidas para limpar profundamente e revitalizar os seus tapetes. Utilizamos equipamento poderoso e métodos eficazes de limpeza para remover sujidade, bactérias e odores, deixando os seus carpetes com um aspeto e um aroma frescos.
            </p>
          </div>
        </button>
      </GraphicArticle.ContentRoot>
    </GraphicArticle.Root>
  )
}
