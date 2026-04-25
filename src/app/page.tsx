import Hero from '@/components/Hero'
import About from '@/components/About'
import ModelingPortfolio from '@/components/ModelingPortfolio'
import Boxing from '@/components/Boxing'
import AtlPride from '@/components/AtlPride'
import ContactFooter from '@/components/ContactFooter'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ModelingPortfolio />
      <Boxing />
      <AtlPride />
      <ContactFooter />
    </main>
  )
}
