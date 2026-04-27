import Hero             from '@/components/Hero'
import About            from '@/components/About'
import ModelingPortfolio from '@/components/ModelingPortfolio'
import Boxing           from '@/components/Boxing'
import ContactFooter    from '@/components/ContactFooter'
import Ticker           from '@/components/Ticker'

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      {/* the one ticker — editorial hard cut, light to dark */}
      <Ticker
        bg="bg-black"
        labelColor="text-white/18"
        sepColor="text-[#EB8258]/55"
        speed={20}
      />

      <ModelingPortfolio />

      <Boxing />

      <ContactFooter />
    </main>
  )
}
