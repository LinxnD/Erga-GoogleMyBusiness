import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

/**
 * Linha do tempo desenhada pela rolagem: a linha vertical cresce com o
 * progresso do scroll e cada etapa acende no momento em que é alcançada.
 */
export default function AnimatedTimeline({ steps }) {
  const rootRef = useRef(null)
  const lineRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('[data-step]', root)
      const dots = gsap.utils.toArray('[data-step-dot]', root)

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, x: 0 })
        gsap.set(dots, { scale: 1, backgroundColor: '#CF4500', borderColor: '#CF4500', color: '#FFFFFF' })
        if (lineRef.current) gsap.set(lineRef.current, { scaleY: 1 })
        return
      }

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: { trigger: root, start: 'top 68%', end: 'bottom 78%', scrub: 0.4 },
        },
      )

      items.forEach((item, index) => {
        const dot = dots[index]
        gsap.fromTo(
          item,
          { opacity: 0.3, x: -18 },
          {
            opacity: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: { trigger: item, start: 'top 82%', end: 'top 50%', scrub: 0.4 },
          },
        )
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0.75, backgroundColor: '#FFFFFF', borderColor: '#E6E8EC', color: '#5A6472' },
            {
              scale: 1,
              backgroundColor: '#CF4500',
              borderColor: '#CF4500',
              color: '#FFFFFF',
              ease: 'none',
              scrollTrigger: { trigger: item, start: 'top 72%', end: 'top 45%', scrub: 0.4 },
            },
          )
        }
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative">
      <span
        ref={lineRef}
        aria-hidden="true"
        className="absolute bottom-6 left-[1.0625rem] top-6 w-0.5 origin-top rounded-full bg-gradient-to-b from-erga-500 via-erga-400 to-gblue-400 lg:left-[1.5625rem]"
      />

      <ol className="space-y-10 lg:space-y-14">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <li key={step.id} data-step className="relative flex gap-5 lg:gap-7">
              <span
                data-step-dot
                className="relative z-10 grid h-[2.125rem] w-[2.125rem] shrink-0 place-items-center rounded-full border-2 border-line bg-white text-ink-500 lg:h-[3.125rem] lg:w-[3.125rem]"
              >
                <Icon className="h-4 w-4 text-current lg:h-5 lg:w-5" aria-hidden="true" />
              </span>

              <div className="pb-2">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-erga-600">
                  Etapa {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-[1.1875rem] font-bold leading-snug text-ink-900 lg:text-[1.375rem]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-ink-600">{step.text}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
