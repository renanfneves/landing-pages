import { Button, Header } from '@landing-pages/ui-library'
import Logo from '../assets/logo-complete.png'
import { PATHS } from '../utils/consts/paths'

export function ImpecHeader() {
  return (
    <Header.Root>
      <Header.Logo src={Logo.src} />
      <Header.Navbar links={PATHS}>
        <Header.NavbarActions>
          <Button asChild>
            <a href="#contact-form">Peça um orçamento grátis</a>
          </Button>
        </Header.NavbarActions>
      </Header.Navbar>
    </Header.Root>
  )
}
