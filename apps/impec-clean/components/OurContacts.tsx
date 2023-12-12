import Image from 'next/image'
import Envelop from '../assets/envelope.svg'
import Phone from '../assets/phone.svg'
import MapPin from '../assets/map-pin.svg'

export function OurContacts() {
  return (
    <article className="flex items-start justify-center flex-wrap w-full py-16 gap-8">
      <address className="flex items-center flex-col gap-4 w-100 md:h-44">
        <a
          className="flex-center flex-col gap-4"
          href="mailto:john@doe.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Envelop} width={30} height={30} alt="Impec Clean email" />
          <span>Email</span>
        </a>
        <p className="text-center">
          Envie-nos um email para tirar a suas dúvidas e solicitar um orçamento
          gratuitamente
        </p>
        <address className="mt-auto underline text-sm">
          geral@rimpecclean.pt
        </address>
      </address>
      <address className="flex items-center flex-col gap-4 w-100 md:h-44">
        <a
          className="flex-center flex-col gap-4"
          href="http://wa.me/+351932270602?text=Olá%20equipa%20Impec%20Clean,%0AComo%20posso%20fazer%20um%20orçamento%20personalizado%20e%20gratuito?"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Phone} width={30} height={30} alt="Impec Clean phone" />
          <span>WhatsApp</span>
        </a>
        <p className="text-center">
          Mande-nos mensagem nos WhatsApp para agendar um serviço de Limpeza e
          Higienização à sua escolha
        </p>
        <address className="mt-auto underline text-sm">
          +(351) 932-270-602
        </address>
      </address>
      <address className="flex items-center flex-col gap-4 w-100 md:h-44">
        <a
          className="flex-center flex-col gap-4"
          href="https://goo.gl/maps/wWTCU7EcFVPFeMNB8"
        >
          <Image
            src={MapPin}
            width={30}
            height={30}
            alt="Impec Clean address"
          />
          <span>Onde estamos</span>
        </a>
        <p className="text-center">
          Distritos de Porto, Braga e Viana do Castelo
        </p>
        <address className="mt-auto underline text-sm">
          R. Padre António Vieira 122 2dto, 4710-412 Braga
        </address>
      </address>
    </article>
  )
}
