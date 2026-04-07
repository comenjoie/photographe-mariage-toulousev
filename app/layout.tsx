import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { PageTransition } from '@/components/ui/PageTransition'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal'],
  variable: '--font-jost',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.photographe-mariage-toulouse.com'),
  title: {
    default: 'Photographe Mariage Toulouse — Yakastudio',
    template: '%s · Yakastudio',
  },
  description:
    'Photographe de mariage à Toulouse. Reportages haut de gamme dans les Pyrénées et sur la Côte Basque. Esthétique lumineuse et intemporelle.',
  keywords: [
    'photographe mariage toulouse',
    'photographe toulouse',
    'mariage toulouse',
    'photographe mariage pyrénées',
    'photographe mariage côte basque',
    'reportage photo mariage luxe toulouse',
    'photographe mariage haute-garonne',
    'yakastudio',
    'yannick blaser photographe',
  ],
  authors: [{ name: 'Yannick Blaser', url: 'https://www.photographe-mariage-toulouse.com' }],
  creator: 'Yannick Blaser — Yakastudio',
  publisher: 'Yakastudio',
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.photographe-mariage-toulouse.com',
    siteName: 'Yakastudio — Photographe Mariage Toulouse',
    title: 'Photographe Mariage Toulouse — Yakastudio',
    description:
      'Photographe de mariage à Toulouse. Reportages haut de gamme dans les Pyrénées et sur la Côte Basque. Esthétique lumineuse et intemporelle.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yakastudio — Photographe de mariage à Toulouse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographe Mariage Toulouse — Yakastudio',
    description:
      'Photographe de mariage à Toulouse. Reportages haut de gamme dans les Pyrénées et sur la Côte Basque.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Yakastudio — Photographe Mariage Toulouse',
  url: 'https://www.photographe-mariage-toulouse.com',
  telephone: '+33600000000',
  email: 'contact@photographe-mariage-toulouse.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    addressRegion: 'Occitanie',
    postalCode: '31000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6047,
    longitude: 1.4442,
  },
  areaServed: ['Toulouse', 'Pyrénées', 'Côte Basque', 'Haute-Garonne', 'Occitanie'],
  priceRange: '€€€',
  image: 'https://www.photographe-mariage-toulouse.com/og-image.jpg',
  sameAs: ['https://www.instagram.com/yakastudio'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="grain">
        <CustomCursor />
        <PageTransition />
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
