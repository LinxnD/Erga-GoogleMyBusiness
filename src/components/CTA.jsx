import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'
import MagneticButton from './ui/MagneticButton'
import { whatsappUrl } from '../lib/site'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-erga-500 py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,rgba(120,40,0,0.28),transparent_58%)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-gblue-500/25 blur-3xl" />

      <div className="shell relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2rem] font-extrabold leading-[1.1] text-white sm:text-[2.5rem] lg:text-[3rem]">
            Seu próximo cliente pode estar procurando sua empresa agora.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.5rem] font-medium leading-snug text-white sm:max-w-3xl">
            Invista na presença da sua empresa no Google e aproveite a oferta especial da Erga.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <MagneticButton
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light btn-lg w-full sm:w-auto"
            >
              Quero meu Google + Site Grátis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
