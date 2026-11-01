import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion, ScrollTrigger } from '../../lib/gsap'

/**
 * Galeria horizontal controlada pelo scroll no desktop (seção fixada + trilho
 * transladado) e por toque, com scroll-snap, no mobile.
 */
export default function HorizontalShowcase({ items, title, description }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return undefined

    const mq = window.matchMedia('(min-width: 1024px)')
    let ctx = null

    const build = () => {
      if (ctx) {
        ctx.revert()
        ctx = null
      }
      if (!mq.matches || prefersReducedMotion()) return

      ctx = gsap.context(() => {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80)

        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${distance() + 200}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })
      }, sectionRef)
    }

    build()
    mq.addEventListener('change', build)
    window.addEventListener('resize', ScrollTrigger.refresh)

    return () => {
      mq.removeEventListener('change', build)
      window.removeEventListener('resize', ScrollTrigger.refresh)
      ctx?.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-28"
    >
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow border-erga-200 bg-erga-50 text-erga-700">Seu site profissional</span>
          <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-[1.15] sm:text-[2.125rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink-600">{description}</p>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto pb-6 snap-x snap-mandatory lg:mt-14 lg:overflow-visible lg:pb-0">
        <div
          ref={trackRef}
          className="flex w-max gap-5 px-5 sm:px-8 lg:w-full lg:gap-7 lg:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="w-[78vw] max-w-[20rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-white shadow-card sm:w-[24rem] lg:w-[46vw] lg:max-w-[46rem]"
            >
              <div className="border-b border-line-soft bg-surface px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                  </span>
                  <span className="ml-1 truncate rounded-md bg-white px-2 py-0.5 text-[0.68rem] text-ink-500">
                    {item.url}
                  </span>
                </div>
              </div>

              <div className={`p-5 ${item.tint}`}>
                <div className="flex items-center gap-2.5">
                  <span className={`grid h-9 w-9 place-items-center rounded-lg ${item.mark}`}>
                    <item.icon className="h-4 w-4 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[0.95rem] font-bold text-ink-900">{item.segment}</h3>
                </div>
                <div className="mt-4 space-y-2">
                  <span className="block h-3 w-4/5 rounded-full bg-ink-900/10" />
                  <span className="block h-2 w-full rounded-full bg-ink-900/8" />
                  <span className="block h-2 w-2/3 rounded-full bg-ink-900/8" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((cell) => (
                    <span key={cell} className="h-12 rounded-lg bg-white/70" />
                  ))}
                </div>
              </div>

              <p className="px-5 py-4 text-[0.75rem] leading-relaxed text-ink-500">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
