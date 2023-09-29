import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo-complete.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import LinkedIn from '../assets/linkedIn.svg'
import Youtube from '../assets/youtube.svg'

export function Footer() {
  return (
    <footer className="flex flex-col divide-y divide-black w-full">
      <section className="flex items-center flex-col justify-between py-16 sm:pt-0 sm:flex-row gap-y-8">
        <Link href="/">
          <Image src={Logo} alt="Logo Impec Clean" width={200} height={25} />
        </Link>
        <nav className="flex-center gap-4">
          <ul className="flex gap-16">
            <li>
              <a href="#testemunhos">Testemunhos</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#portifolio">Portifólio</a>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-1">
          <li>
            <a
              href="https://www.facebook.com/impeccleanbraga"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Facebook}
                alt="Impec Clean logo"
                width={40}
                height={40}
              ></Image>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/impec.clean/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Instagram}
                alt="Impec Clean logo"
                width={40}
                height={40}
              ></Image>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/impec-clean-603baa281/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={LinkedIn}
                alt="Impec Clean logo"
                width={40}
                height={40}
              ></Image>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCCKGeHMlMm4ZyrfldVRylGA"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Youtube}
                alt="Impec Clean logo"
                width={40}
                height={40}
              ></Image>
            </a>
          </li>
        </ul>
      </section>
      <section className="py-16 flex flex-col-reverse self-center gap-8 items-center justify-center w-full sm:flex-row">
        <span>&copy; 2023 Impec Clean. All rights reserved.</span>
        <nav className="flex gap-4 flex-col sm:flex-row">
          <Link href="/" className="underline text-center">
            Privacy Policy
          </Link>
          <Link href="/" className="underline text-center">
            Terms of Service
          </Link>
          <Link href="/" className="underline text-center">
            Cookies Settings
          </Link>
        </nav>
      </section>
    </footer>
  )
}
