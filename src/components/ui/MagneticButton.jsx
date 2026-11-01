import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

/**
 * Botão com microinteração elástica: o rótulo "persegue" o cursor de leve
 * e reage com um pulso ao clique. Desligado em toque e com movimento reduzido.
 */
export default function MagneticButton({
  children,
  href,
  className = '',
  strength = 0.22,
  onClick,
  target,
  rel,
  ariaLabel,
  type = 'button',
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 240, damping: 18, mass: 0.35 })
  const y = useSpring(rawY, { stiffness: 240, damping: 18, mass: 0.35 })

  const onMove = (event) => {
    if (reduced || event.pointerType === 'touch' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    rawY.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    rawX.set(0)
    rawY.set(0)
  }

  const motionProps = reduced
    ? {}
    : {
        style: { x, y },
        onMouseMove: onMove,
        onMouseLeave: reset,
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.965 },
        transition: { type: 'spring', stiffness: 320, damping: 22 },
      }

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`btn ${className}`}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`btn ${className}`}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
