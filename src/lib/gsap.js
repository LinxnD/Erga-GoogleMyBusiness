import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches

/**
 * Limpa triggers e tweens criados dentro do callback ao desmontar o componente.
 * gsap.context() faz o revert automático; explicitamente matamos os triggers
 * para garantir que nenhum listener de scroll sobreviva ao unmount.
 */
export function cleanupScope(scope) {
  if (!scope) return
  scope.revert()
}

export function killTriggers(scope) {
  if (!scope) return
  scope.data.forEach((entry) => {
    if (entry.animations?.length) entry.animations.forEach((a) => a.kill())
  })
}
