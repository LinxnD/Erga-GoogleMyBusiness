import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import Logo from './ui/Logo'
import MagneticButton from './ui/MagneticButton'
import { NAV_LINKS, whatsappUrl } from '../lib/site'
import { useSmoothScroll } from './SmoothScroll'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (event, href) => {
    event.preventDefault()
    setOpen(false)
    scrollTo(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-b border-line bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65'
          : 'border-b border-transparent bg-white/0'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-4">
        <a
          href="#inicio"
          onClick={(event) => go(event, '#inicio')}
          aria-label="Erga Assessoria de Marketing — início"
          className="rounded-lg"
        >
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => go(event, link.href)}
                  className="inline-flex rounded-full px-4 py-2 text-[0.9375rem] font-medium text-ink-600 transition-colors duration-200 hover:bg-surface hover:text-ink-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <MagneticButton
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg hidden sm:inline-flex"
            ariaLabel="Falar com especialista no WhatsApp"
          >
            Falar com especialista
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink-900 transition-colors duration-200 hover:border-erga-200 hover:text-erga-600 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-line bg-white/97 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegação mobile" className="shell py-5">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="border-b border-line-soft last:border-0">
                    <a
                      href={link.href}
                      onClick={(event) => go(event, link.href)}
                      className="flex items-center justify-between py-4 text-lg font-semibold text-ink-900"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 text-ink-300" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mt-5 w-full"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Falar com especialista
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
