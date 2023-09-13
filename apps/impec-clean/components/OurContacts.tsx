import Image from "next/image"
import Envelop from '../assets/envelope.svg'
import Phone from '../assets/phone.svg'
import MapPin from '../assets/map-pin.svg'

export function OurContacts() {
  return (
    <article className="flex items-start justify-center flex-wrap w-full py-16 gap-8">
      <address className="flex items-center flex-col gap-4 w-100 md:h-44">
        <a className="flex-center flex-col gap-4" href="mailto:john@doe.com">
          <Image src={Envelop} width={30} height={30} alt="Impec Clean email" />
          <span>Email</span>
        </a>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
        <address className="mt-auto underline text-sm">geral@rimpecclean.pt</address>
      </address>
      <address className="flex items-center flex-col gap-4 w-100 md:h-44">
        <a className="flex-center flex-col gap-4" href="tel:+351910619898">
        <Image src={Phone} width={30} height={30} alt="Impec Clean phone" />
        <span>Whatsapp</span>
        </a>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
        <address className="mt-auto underline text-sm">+(351) 000-000-000</address>
      </address>
      <address className="flex items-center flex-col gap-4 w-100 md:h-44">
        <a className="flex-center flex-col gap-4" href="mailto:john@doe.com">
          <Image src={MapPin} width={30} height={30} alt="Impec Clean address" />
          <span>Onde estamos</span>
        </a>
        <p className="text-center">Distritos de Porto, Braga e Viana do Castelo</p>
      </address>
    </article>
  )
}
