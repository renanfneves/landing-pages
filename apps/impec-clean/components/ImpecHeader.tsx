import { Button, Header } from '@landing-pages/ui-library'
import Logo from '../assets/logo-complete.svg'
import { PATHS } from '../utils/consts/paths'

export function ImpecHeader() {
  return (
    <Header.Root>
      <Header.Logo src={Logo} />
      <Header.Navbar links={PATHS}>
        <Header.NavbarActions>
          <Button>Peça um orçamento grátis</Button>
        </Header.NavbarActions>
      </Header.Navbar>
    </Header.Root>
  )
}
