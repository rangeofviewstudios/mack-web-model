import dynamic from 'next/dynamic'
import Hero             from '@/components/Hero'
import About            from '@/components/About'
import ModelingPortfolio from '@/components/ModelingPortfolio'
import Boxing           from '@/components/Boxing'
import ContactFooter    from '@/components/ContactFooter'
import Ticker           from '@/components/Ticker'

// Excluded from SSR — animated SVG wings cause transform-style mismatch on hydration
const PoemEntry = dynamic(() => import('@/components/PoemEntry'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      {/* the one ticker — editorial hard cut, light to dark */}
      <Ticker
        bg="bg-black"
        labelColor="text-white/18"
        speed={20}
      />

      <ModelingPortfolio />

      <Boxing />

      <PoemEntry />

      <ContactFooter />
    </main>
  )
}
