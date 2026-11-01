import SmoothScroll from './components/SmoothScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import Offer from './components/Offer'
import Deliverables from './components/Deliverables'
import Showcase from './components/Showcase'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <SmoothScroll>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Offer />
        <Deliverables />
        <Showcase />
        <HowItWorks />
        <CTA />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppFab />
    </SmoothScroll>
  )
}
