import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mackofficial.com'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mack',
  url: siteUrl,
  image: `${siteUrl}/Assets/blueorangemack.webp`,
  description:
    'Atlanta-based model and boxer whose work bridges editorial elegance with raw power.',
  jobTitle: ['Model', 'Professional Boxer'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.instagram.com/mackeroni_8/',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MACK — Model. Fighter. Atlanta.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico',       sizes: 'any' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  description:
    'Mack is an Atlanta-based model and boxer whose work bridges editorial elegance with raw power. Available for editorial, commercial, and brand projects.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MACK — Model. Fighter. Atlanta.',
    description:
      'Atlanta-based model and boxer. Editorial elegance meets raw power.',
    url: '/',
    siteName: 'Mack',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Assets/blueorangemack.webp',
        width: 1200,
        height: 630,
        alt: 'Mack — Atlanta model and boxer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MACK — Model. Fighter. Atlanta.',
    description:
      'Atlanta-based model and boxer. Editorial elegance meets raw power.',
    images: ['/Assets/blueorangemack.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
