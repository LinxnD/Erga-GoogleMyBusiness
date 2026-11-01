import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const TARGET = {
  orange: '#E05000',
  blue: '#3C60AC',
  ink: '#0E1218',
}

/**
 * "Texto que se preenche": as palavras partem de um cinza claro e vão tomando
 * cor conforme o scroll avança. O movimento acompanha o progresso real da
 * rolagem e é reversível.
 */
export default function TextScrollHighlight({
  segments,
  className = '',
  baseColor = '#656E7B',
  as: Tag = 'p',
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (prefersReducedMotion()) {
      el.querySelectorAll('[data-word]').forEach((node) => {
        node.style.color = TARGET[node.dataset.target] ?? baseColor
      })
      return undefined
    }

    const ctx = gsap.context(() => {
      const groups = { orange: [], blue: [], ink: [] }
      el.querySelectorAll('[data-word]').forEach((node) => {
        groups[node.dataset.target]?.push(node)
      })

      Object.entries(groups).forEach(([target, nodes]) => {
        if (!nodes.length) return
        gsap.set(nodes, { color: baseColor })
        gsap.to(nodes, {
          color: TARGET[target] ?? baseColor,
          ease: 'none',
          stagger: 0.55,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: 'bottom 62%',
            scrub: 0.5,
          },
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [baseColor])

  return (
    <Tag ref={ref} className={className}>
      {segments.map((segment, index) => (
        <span key={`${segment.text}-${index}`}>
          {segment.text.split(' ').map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              data-word
              data-target={segment.to ?? 'orange'}
              className="inline-block"
              style={{ color: baseColor }}
            >
              {word}
              {' '}
            </span>
          ))}
          {index < segments.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}
