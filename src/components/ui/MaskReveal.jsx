import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

/**
 * Máscara que revela: a camada de cima (perfil no Google) é coberta por um
 * círculo que se expande a partir do centro, revelando a camada de baixo
 * (site profissional). O movimento acompanha o scroll e volta ao normal
 * quando o usuário sobe.
 */
export default function MaskReveal({ top, bottom, caption, className = '' }) {
  const ref = useRef(null)
  const topRef = useRef(null)
  const bottomRef = useRef(null)

  useLayoutEffect(() => {
    const scene = ref.current
    if (!scene || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bottomRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: scene, start: 'top 88%', end: 'top 25%', scrub: 0.5 },
        },
      )

      gsap.fromTo(
        topRef.current,
        { clipPath: 'circle(0% at 50% 50%)', scale: 1.04 },
        {
          clipPath: 'circle(80% at 50% 50%)',
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: scene, start: 'top 88%', end: 'top 15%', scrub: 0.5 },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="relative aspect-[5/4] min-h-[17rem] overflow-hidden rounded-3xl border border-line bg-surface shadow-card sm:min-h-[20rem]">
        <div ref={bottomRef} className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md">{bottom}</div>
        </div>
        <div
          ref={topRef}
          className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
          style={{ clipPath: 'circle(0% at 50% 50%)' }}
        >
          <div className="w-full max-w-md">{top}</div>
        </div>
      </div>
      {caption && <p className="mt-4 text-center text-[0.8rem] text-ink-400">{caption}</p>}
    </div>
  )
}
