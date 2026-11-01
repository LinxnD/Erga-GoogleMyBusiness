import { motion, useReducedMotion } from 'motion/react'

/**
 * Revelação simples por entrada na viewport.
 * Usa `once` para não reanimar a cada scroll de ida e volta.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.65,
  once = true,
  amount = 0.25,
  className = '',
  as = 'div',
  ...rest
}) {
  const reduced = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduced) {
    const Static = as
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    )
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
