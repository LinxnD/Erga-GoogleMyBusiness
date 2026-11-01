import { createContext, useCallback, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'motion/react'
import { gsap, ScrollTrigger } from '../lib/gsap'

const ScrollContext = createContext({ scrollTo: () => {} })

export function useSmoothScroll() {
  return useContext(ScrollContext)
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis
    if (import.meta.env.DEV) window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reduced])

  const scrollTo = useCallback(
    (target) => {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (!el) return
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -88, duration: 1.15 })
      } else {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    },
    [],
  )

  // Deep link: abre a página direto na seção referenciada pela URL.
  useEffect(() => {
    const jump = () => {
      const hash = window.location.hash
      if (!hash) return
      const el = document.querySelector(hash)
      if (!el) return
      if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -88, immediate: true })
      else el.scrollIntoView({ block: 'start' })
    }

    const timer = window.setTimeout(jump, 220)
    window.addEventListener('hashchange', jump)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', jump)
    }
  }, [])

  return <ScrollContext.Provider value={{ scrollTo }}>{children}</ScrollContext.Provider>
}
