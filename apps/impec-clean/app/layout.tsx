/* eslint-disable @next/next/no-img-element */
import { Roboto_Flex as Roboto } from 'next/font/google'
import { ImpecHeader } from '../components/ImpecHeader'
import { Footer } from '../components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'

import './global.css'

export const metadata = {
  metadataBase: new URL('https://impecclean.pt'),
  title: 'Impec Clean | Higienização de Estofos, Colchões e Carpetes',
  description: 'Higienização de Estofos, Colchões e Carpetes',
  openGraph: {
    title: 'Impec Clean | Higienização de Estofos, Colchões e Carpetes',
    description: 'Higienização de Estofos, Colchões e Carpetes',
    images: {
      url: '/og-image.png',
      width: 1200,
      height: 630,
    },
  },
  alternates: {
    canonical: 'https://www.impecclean.pt/',
  },
  twitter: {
    title: 'Impec Clean | Higienização de Estofos, Colchões e Carpetes',
    description: 'Higienização de Estofos, Colchões e Carpetes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-T294SRCT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-314025232');
              `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '317290567186879');
              fbq('track', 'PageView');
              `,
          }}
        />
      </head>

      <body
        className={`relative ${roboto.className} overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <h2 className="absolute top-0 left-0 -z-10 invisible">impecclean</h2>
        <img
          height="1"
          width="1"
          alt=""
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=317290567186879&amp;ev=PageView&amp;noscript=1"
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T294SRCT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ImpecHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
