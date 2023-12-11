import { Roboto_Flex as Roboto } from 'next/font/google'

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
        className={`relative ${roboto.className}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
