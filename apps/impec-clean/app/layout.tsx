import { Roboto_Flex as Roboto } from 'next/font/google'
import { ImpecHeader } from '../components/ImpecHeader'
import { Footer } from '../components/Footer'

import './global.css'

export const metadata = {
  title: 'Impec Clean | Limpeza de Estofos',
  description: 'Limpeza de Estofos na Zona Norte',
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${roboto.className} max-w-screen-2xl`}
        suppressHydrationWarning={true}
      >
        <ImpecHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
