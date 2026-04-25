import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MACK — Model. Fighter. Atlanta.',
  description: 'Mack is an Atlanta-based model and boxer whose work bridges editorial elegance with raw power.',
  openGraph: {
    title: 'MACK — Model. Fighter. Atlanta.',
    description: 'Atlanta-based model and boxer.',
    images: ['/Assets/blueorangemack.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
