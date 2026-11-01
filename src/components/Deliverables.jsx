import { Check, Globe, MapPinned } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'

const PLAN = {
  id: 'gmb',
  icon: MapPinned,
  accent: 'blue',
  title: 'Google Meu Negócio',
  subtitle: 'Criação, configuração e otimização do Perfil da Empresa no Google.',
  items: [
    'Configuração ou otimização do perfil.',
    'Organização das informações comerciais.',
    'Ajustes de categorias e descrição.',
    'Orientações para fotos e apresentação.',
    'Preparação do perfil para uma presença digital mais profissional.',
  ],
}

const BONUS = {
  id: 'site',
  icon: Globe,
  accent: 'orange',
  title: 'Seu site profissional grátis',
  subtitle: 'Uma página para apresentar a sua empresa e facilitar o contato.',
  items: [
    'Página com visual moderno.',
    'Layout adaptado para celular.',
    'Apresentação da empresa e serviços.',
    'Botão para contato pelo WhatsApp.',
    'Estrutura profissional para fortalecer a presença online.',
  ],
}

const ACCENTS = {
  orange: {
    head: 'bg-erga-50 text-erga-700',
    icon: 'bg-erga-600 text-white',
    check: 'text-erga-600',
  },
  blue: {
    head: 'bg-gblue-50 text-gblue-700',
    icon: 'bg-gblue-600 text-white',
    check: 'text-gblue-600',
  },
}

function PlanCard({ plan, delay }) {
  const accent = ACCENTS[plan.accent]
  const Icon = plan.icon

  return (
    <ScrollReveal
      delay={delay}
      className="card flex h-full flex-col overflow-hidden shadow-card"
    >
      <div className="flex items-start gap-4 border-b border-line p-7">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${accent.icon}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-[1.1875rem] font-bold text-ink-900">{plan.title}</h3>
          <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-600">{plan.subtitle}</p>
        </div>
      </div>

      <ul className="flex-1 space-y-3.5 p-7">
        {plan.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surface ${accent.check}`}
            >
              <Check className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className="text-[0.9375rem] leading-relaxed text-ink-700">{item}</span>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  )
}

export default function Deliverables() {
  return (
    <section id="o-que-voce-recebe" className="bg-surface py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">O que você recebe</span>
          <h2 className="mt-5 font-display text-[1.875rem] font-extrabold leading-[1.15] sm:text-[2.25rem] lg:text-[2.5rem]">
            Assessoria no Google e um site pronto para apresentar a sua empresa.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2">
          <PlanCard plan={PLAN} delay={0} />
          <PlanCard plan={BONUS} delay={0.1} />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[0.8125rem] leading-relaxed text-ink-500">
          Os itens acima descrevem o que está previsto no escopo do serviço. Os detalhes finais — como
          número de páginas, conteúdo e prazo de entrega — são apresentados e confirmados
          comercialmente pela Erga no atendimento.
        </p>
      </div>
    </section>
  )
}
