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
    'https://instagram.com/mackofficial',
    'https://tiktok.com/@mackofficial',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MACK — Model. Fighter. Atlanta.',
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
