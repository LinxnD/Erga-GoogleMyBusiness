import { BadgeCheck, MapPinned, PhoneCall, Route, SlidersHorizontal, TrendingUp } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'
import StackingCards from './ui/StackingCards'

const BENEFITS = [
  {
    id: 'presenca',
    icon: MapPinned,
    title: 'Presença no Google e no Google Maps',
    text: 'Seu negócio aparece nas buscas e no mapa da sua região, com endereço, categoria e informações fáceis de encontrar.',
    accent: 'blue',
  },
  {
    id: 'contato',
    icon: PhoneCall,
    title: 'Mais oportunidades de contato',
    text: 'Telefone, endereço, horários e informações essenciais ficam disponíveis para quem já procura por esse tipo de serviço.',
    accent: 'orange',
  },
  {
    id: 'credibilidade',
    icon: BadgeCheck,
    title: 'Credibilidade digital',
    text: 'Um perfil completo e bem organizado reforça a percepção de profissionalismo da sua empresa antes mesmo do primeiro contato.',
    accent: 'blue',
  },
  {
    id: 'otimizado',
    icon: SlidersHorizontal,
    title: 'Perfil otimizado',
    text: 'Categorias, descrições, fotos e informações organizadas para o perfil falar com o cliente certo.',
    accent: 'orange',
  },
  {
    id: 'praticidade',
    icon: Route,
    title: 'Mais praticidade para seus clientes',
    text: 'Facilitar ligações, visitas e solicitações de rota reduz o esforço de quem quer ir até você.',
    accent: 'blue',
  },
  {
    id: 'estrategia',
    icon: TrendingUp,
    title: 'Presença digital estratégica',
    text: 'Uma base organizada e preparada para atrair clientes locais e sustentar o crescimento da sua empresa.',
    accent: 'orange',
  },
]

const ACCENTS = {
  orange: {
    chip: 'bg-erga-50 text-erga-700 ring-erga-100',
    bar: 'bg-erga-500',
    icon: 'bg-erga-600',
  },
  blue: {
    chip: 'bg-gblue-50 text-gblue-700 ring-gblue-100',
    bar: 'bg-gblue-500',
    icon: 'bg-gblue-600',
  },
}

export default function Benefits() {
  return (
    <section id="beneficios" className="relative bg-white py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow border-gblue-200 bg-gblue-50 text-gblue-700">Google Meu Negócio</span>
          <h2 className="mt-5 font-display text-[1.875rem] font-extrabold leading-[1.15] sm:text-[2.25rem] lg:text-[2.5rem]">
            Faça sua empresa ser encontrada por quem já procura seus serviços.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-600">
            O Perfil da Empresa no Google organiza as informações da sua empresa para que o cliente encontre,
            entenda e entre em contato — com um trabalho de configuração feito pela Erga.
          </p>
        </ScrollReveal>

        <StackingCards
          items={BENEFITS}
          className="mt-16 lg:mt-20"
          renderCard={(benefit) => {
            const Icon = benefit.icon
            const accent = ACCENTS[benefit.accent]
            return (
              <article className="card overflow-hidden shadow-card">
                <div className="flex">
                  <div className={`hidden w-1.5 shrink-0 sm:block ${accent.bar}`} aria-hidden="true" />
                  <div className="flex flex-1 flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white ${accent.icon}`}
                    >
                      <Icon className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.125rem] font-bold leading-snug text-ink-900 sm:text-[1.25rem]">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-600">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            )
          }}
        />
      </div>
    </section>
  )
}
