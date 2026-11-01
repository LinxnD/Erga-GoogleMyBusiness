import { useRef } from 'react'
import { Gift, MapPin, Plus, Sparkles } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'
import MaskReveal from './ui/MaskReveal'
import MagneticButton from './ui/MagneticButton'
import GoogleSearchMockup from './mockups/GoogleSearchMockup'
import SitePreviewMockup from './mockups/SitePreviewMockup'
import { whatsappUrl } from '../lib/site'

function ProfileMockup() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-lift">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gblue-50 text-gblue-600">
          <MapPin className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-gblue-600">
            Perfil da Empresa
          </p>
          <p className="font-display text-[0.95rem] font-bold text-ink-900">Sua Empresa</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <span className="block h-2.5 w-3/4 rounded-full bg-line" />
        <span className="block h-2.5 w-full rounded-full bg-line-soft" />
        <span className="block h-2.5 w-2/3 rounded-full bg-line-soft" />
      </div>
      <div className="mt-4 flex gap-2">
        <span className="rounded-lg bg-gblue-500 px-3 py-1.5 text-[0.72rem] font-semibold text-white">
          Ligar
        </span>
        <span className="rounded-lg border border-line px-3 py-1.5 text-[0.72rem] font-semibold text-ink-600">
          Rota
        </span>
      </div>
    </div>
  )
}

export default function Offer() {
  const spotlightRef = useRef(null)

  const onMouseMove = (event) => {
    const el = spotlightRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <section id="oferta" className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-gblue-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-erga-500/25 blur-[120px]" />

      <div className="shell relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow border-white/15 bg-white/5 text-erga-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Oferta especial Erga
          </span>
          <h2 className="mt-5 font-display text-[1.875rem] font-extrabold leading-[1.12] text-white sm:text-[2.375rem] lg:text-[2.75rem]">
            Contrate o Google Meu Negócio e ganhe um{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-erga-400">SITE PROFISSIONAL GRÁTIS!</span>
              <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 -rotate-1 bg-erga-500/40" aria-hidden="true" />
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-300">
            Além de fortalecer a presença da sua empresa no Google, a Erga presenteia seu negócio com uma
            página profissional para apresentar seus serviços e facilitar o contato com novos clientes.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <ScrollReveal>
            <div
              ref={spotlightRef}
              onMouseMove={onMouseMove}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 sm:p-9"
              style={{
                backgroundImage:
                  'radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(254,88,0,0.16), transparent 62%)',
              }}
            >
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-stretch">
                <div className="w-full flex-1 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-gblue-700">
                    Google Meu Negócio
                  </p>
                  <p className="mt-2 font-display text-[1.05rem] font-bold text-ink-900">
                    Perfil da Empresa no Google
                  </p>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-600">
                    Criação, configuração e otimização do seu perfil.
                  </p>
                </div>

                <span className="mx-auto grid h-11 w-11 shrink-0 place-items-center self-center rounded-full bg-erga-500 font-display text-xl font-bold text-white shadow-glow">
                  <Plus className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">mais</span>
                </span>

                <div className="relative w-full flex-1 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-erga-700">
                    Site profissional
                  </p>
                  <p className="mt-2 font-display text-[1.05rem] font-bold text-ink-900">
                    Uma página para a sua empresa
                  </p>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-600">
                    Para apresentar serviços e facilitar o contato.
                  </p>
                  <span className="absolute -right-2 -top-4 inline-flex rotate-[-8deg] items-center gap-1.5 rounded-full bg-erga-600 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white shadow-glow sm:-right-3">
                    <Gift className="h-3.5 w-3.5" aria-hidden="true" />
                    Grátis
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <MagneticButton
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg w-full"
                >
                  Quero aproveitar essa oferta
                </MagneticButton>
                <p className="mt-4 text-center text-[0.78rem] leading-relaxed text-ink-400">
                  A gratuidade do site está condicionada à contratação do plano de Google Meu Negócio da
                  Erga. As condições são apresentadas no atendimento.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <MaskReveal
            caption="Simulação ilustrativa da evolução da sua presença digital."
            top={<ProfileMockup />}
            bottom={<SitePreviewMockup />}
          />
        </div>
      </div>
    </section>
  )
}
