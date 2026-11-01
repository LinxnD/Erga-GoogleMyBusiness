import { useLayoutEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Gift, Sparkles } from 'lucide-react'
import MagneticButton from './ui/MagneticButton'
import GoogleSearchMockup from './mockups/GoogleSearchMockup'
import SitePreviewMockup from './mockups/SitePreviewMockup'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import { whatsappUrl } from '../lib/site'
import { useSmoothScroll } from './SmoothScroll'

const HEADLINE = [
  { text: 'Seu', tone: 'plain' },
  { text: 'negócio', tone: 'orange' },
  { text: 'no', tone: 'plain' },
  { text: 'Google.', tone: 'blue' },
  { text: 'Sua', tone: 'plain' },
  { text: 'presença', tone: 'plain' },
  { text: 'digital', tone: 'plain' },
  { text: 'em', tone: 'plain' },
  { text: 'outro', tone: 'orange' },
  { text: 'nível.', tone: 'orange' },
]

const TONE_CLASS = {
  plain: 'text-ink-900',
  orange: 'text-erga-500',
  blue: 'text-gblue-500',
}

const HIGHLIGHTS = [
  'Perfil da Empresa no Google',
  'Site profissional na contratação do plano',
  'Atendimento direto pelo WhatsApp',
]

export default function Hero() {
  const rootRef = useRef(null)
  const mockupRef = useRef(null)
  const reduced = useReducedMotion()
  const { scrollTo } = useSmoothScroll()

  useLayoutEffect(() => {
    if (reduced || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.to(mockupRef.current, {
        y: -70,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })

      gsap.to('[data-hero-orb]', {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      id="inicio"
      ref={rootRef}
      className="relative isolate overflow-hidden bg-white pb-24 pt-[7.5rem] sm:pb-28 lg:pb-36 lg:pt-[9rem]"
    >
      <div className="grid-soft pointer-events-none absolute inset-0 -z-10 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]" />
      <div
        data-hero-orb
        className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-erga-200/50 blur-[100px]"
      />
      <div
        data-hero-orb
        className="pointer-events-none absolute -right-32 top-64 -z-10 h-80 w-80 rounded-full bg-gblue-200/45 blur-[110px]"
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow border-erga-200 bg-erga-50 text-erga-700"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Assessoria de marketing
          </motion.span>

          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.06] sm:text-[3.25rem] lg:text-[3.75rem]">
            {HEADLINE.map((word, index) => (
              <motion.span
                key={`${word.text}-${index}`}
                className={`inline-block ${TONE_CLASS[word.tone]}`}
                initial={reduced ? false : { opacity: 0, y: 26, filter: 'blur(6px)' }}
                animate={reduced ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: 0.08 + index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word.text}
                {index < HEADLINE.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-600 sm:text-[1.125rem]"
          >
            Coloque sua empresa em destaque no Google com a Erga e ganhe um site
            profissional totalmente <strong className="font-semibold text-erga-600">GRÁTIS</strong> ao
            contratar nosso plano de Google Meu Negócio.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.74 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg w-full sm:w-auto"
            >
              Quero aparecer no Google
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton
              className="btn-secondary w-full sm:w-auto"
              onClick={(event) => {
                event.preventDefault()
                scrollTo('#beneficios')
              }}
            >
              Conhecer os benefícios
            </MagneticButton>
          </motion.div>

          <motion.ul
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-9 flex flex-col gap-2.5 border-t border-line pt-6 text-[0.875rem] text-ink-500 sm:flex-row sm:flex-wrap sm:gap-x-7"
          >
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-erga-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          ref={mockupRef}
          initial={reduced ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[30rem] lg:max-w-none">
            <div className="relative z-10">
              <GoogleSearchMockup />
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 34 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 -mt-10 ml-auto w-[74%] sm:w-[68%] lg:-mt-12 lg:w-[62%]"
            >
              <SitePreviewMockup />
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              animate={reduced ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-1 -top-8 z-30 sm:-left-4 lg:-left-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-erga-600 px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white shadow-glow">
                <Gift className="h-3.5 w-3.5" aria-hidden="true" />
                Site grátis
              </span>
            </motion.div>

            <p className="mt-6 text-right text-[0.72rem] text-ink-500">
              Composição ilustrativa, não representa avaliações ou resultados reais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
