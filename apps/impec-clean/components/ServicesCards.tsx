import UpholsteryImage from '../assets/upholstery-service.webp'
import MattressImage from '../assets/mattress-service.webp'
import CarpetsImage from '../assets/carpets-service.webp'
import Link from 'next/link'

const SERVICES = [
  {
    key: 'estofos',
    title: 'Higienização de Estofos',
    description: 'Limpeza profunda e renovação de sofás, cadeiras e poltronas, removendo manchas, sujidade e alergénios.',
    image: UpholsteryImage.src,
    href: '/servicos/estofos',
  },
  {
    key: 'colchoes',
    title: 'Higienização de Colchões',
    description: 'Elimine ácaros, bactérias e odores do seu colchão, garantindo noites de sono mais saudáveis.',
    image: MattressImage.src,
    href: '/servicos/colchoes',
  },
  {
    key: 'carpetes',
    title: 'Higienização de Carpetes',
    description: 'Remoção de sujidade, manchas e odores, com secagem rápida e proteção para sua carpete.',
    image: CarpetsImage.src,
    href: '/servicos/carpetes',
  },
]

export function ServicesCards() {
  return (
    <section className="w-full flex flex-col items-center py-12">
      <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {SERVICES.map((service) => (
          <Link
            href={service.href}
            key={service.key}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-105"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="relative z-10 flex flex-col items-start p-8 h-64 justify-end">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-base group-hover:text-white transition-colors">{service.description}</p>
              <span className="mt-4 inline-block px-4 py-2 rounded bg-primary text-white font-semibold group-hover:bg-white group-hover:text-primary transition-colors">Saiba mais</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
