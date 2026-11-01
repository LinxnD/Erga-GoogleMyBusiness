import { Instagram } from 'lucide-react'
import Logo from './ui/Logo'
import WhatsAppIcon from './ui/WhatsAppIcon'
import { BUSINESS, NAV_LINKS, whatsappUrl } from '../lib/site'
import { useSmoothScroll } from './SmoothScroll'

export default function Footer() {
  const { scrollTo } = useSmoothScroll()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 pt-16 text-ink-300 sm:pt-20">
      <div className="shell">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Logo className="[&_span]:text-white" />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ink-400">
              Assessoria de marketing especializada em criar, configurar e otimizar o Perfil da Empresa no
              Google — com site profissional incluso na contratação do plano.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="font-display text-[0.9375rem] font-bold text-white">Navegação</h2>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault()
                      scrollTo(link.href)
                    }}
                    className="text-[0.9375rem] text-ink-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[0.9375rem] font-bold text-white">Contato</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-ink-400 transition-colors duration-200 hover:text-white"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-ink-400 transition-colors duration-200 hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {BUSINESS.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-7">
          <p className="text-[0.8125rem] text-ink-400">
            © {year} {BUSINESS.name}. Todos os direitos reservados.
          </p>
          <p className="mt-2 max-w-3xl text-[0.75rem] leading-relaxed text-ink-400">
            A Erga é uma empresa independente de marketing e não representa oficialmente o Google. Google,
            Google Maps e Perfil da Empresa no Google são marcas de seus respectivos proprietários.
          </p>
        </div>
      </div>
    </footer>
  )
}
