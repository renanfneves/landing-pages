import Image from "next/image"
import Link from "next/link"
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import LinkedIn from '../assets/linkedIn.svg'
import Youtube from '../assets/youtube.svg'

export function Footer() {
  return (
    <footer className="flex flex-col divide-y divide-black w-full">
      <section className="flex items-center flex-col justify-between py-16 sm:pt-0 sm:flex-row gap-y-8">
        <Image src={Facebook} alt="Impec Clean logo" sizes="40" height={40}></Image>
        <nav className="flex-center gap-4">
          <Link href="/">Link 1</Link>
          <Link href="/">Link 2</Link>
          <Link href="/">Link 3</Link>
        </nav>
        <ul className="flex gap-1">
          <li>
            <a href="/">
              <Image src={Facebook} alt="Impec Clean logo" sizes="40" height={40}></Image>
            </a>
          </li>
          <li>
            <a href="/">
              <Image src={Instagram} alt="Impec Clean logo" sizes="40" height={40}></Image>
            </a>
          </li>
          <li>
            <a href="/">
              <Image src={LinkedIn} alt="Impec Clean logo" sizes="40" height={40}></Image>
            </a>
          </li>
          <li>
            <a href="/">
              <Image src={Youtube} alt="Impec Clean logo" sizes="40" height={40}></Image>
            </a>
          </li>
        </ul>
      </section>
      <section className="py-16 flex flex-col-reverse self-center gap-8 items-center justify-center w-full sm:flex-row">
        <span>&copy; 2023 Impec Clean. All rights reserved.</span>
        <nav className="flex gap-4">
          <Link href="/" className="underline text-center">Privacy Policy</Link>
          <Link href="/" className="underline text-center">Terms of Service</Link>
          <Link href="/" className="underline text-center">Cookies Settings</Link>
        </nav>
      </section>
    </footer>
  )
}