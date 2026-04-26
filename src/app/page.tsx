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

      {/* cream → cream */}
      <Ticker
        bg="bg-atl-sand/40"
        labelColor="text-atl-charcoal/40"
        sepColor="text-atl-rust/60"
        border
      />

      <About />

      {/* cream → dark */}
      <Ticker
        bg="bg-atl-charcoal"
        labelColor="text-atl-cream/25"
        sepColor="text-atl-rust/70"
        speed={20}
      />

      <ModelingPortfolio />

      {/* dark → black */}
      <Ticker
        bg="bg-black"
        labelColor="text-atl-cream/15"
        sepColor="text-atl-gold/50"
        speed={24}
        direction="right"
        border
      />

      <Boxing />

      {/* black → cream */}
      <Ticker
        bg="bg-atl-charcoal"
        labelColor="text-atl-cream/25"
        sepColor="text-atl-rust/70"
        speed={18}
      />

      <ContactFooter />
    </main>
  )
}
