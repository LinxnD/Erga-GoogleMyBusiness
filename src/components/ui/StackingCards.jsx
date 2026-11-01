import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

/**
 * Cartões que empilham: cada cartão fica "grudado" no topo enquanto o próximo
 * sobe por cima, criando uma pilha com profundidade. O deslocamento é nativo
 * (position: sticky), o que mantém a rolagem leve e reversível.
 */
export default function StackingCards({ items, renderCard, className = '' }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('[data-stack-card]', el)
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return
        gsap.to(card, {
          scale: 0.965,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.4,
          },
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="flex flex-col gap-20 sm:gap-28 lg:gap-40">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            data-stack-card
            className="sticky"
            style={{ top: `calc(5.5rem + ${index * 1.5}rem)` }}
          >
            {renderCard(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}
