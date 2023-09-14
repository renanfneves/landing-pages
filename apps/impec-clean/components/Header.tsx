import Image from 'next/image'
import Logo from '../assets/facebook.svg'
import { Button } from '@landing-pages/ui-library'

export function Header() {
  return (
    <header className="flex md:px-16 px-4 py-4 padding-y max-w-[1440px] mx-auto justify-between">
      <Button variant="link">
        <Image src={Logo} alt="Logo Impec Clean" width={40} height={40} />
      </Button>
      <nav>
        <ul className="flex gap-16">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
      <div>
        <Button>button</Button>
      </div>
    </header>
  )
}
