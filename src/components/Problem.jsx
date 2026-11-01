import { Globe, History, MapPinOff, SearchX, TrendingUp } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'
import TextScrollHighlight from './ui/TextScrollHighlight'

const PROBLEMS = [
  {
    icon: SearchX,
    title: 'Pouca visibilidade',
    text: 'Sua empresa aparece pouco — ou não aparece — quando o cliente pesquisa na sua região.',
  },
  {
    icon: MapPinOff,
    title: 'Clientes perdem o caminho',
    text: 'Quem não encontra o endereço, o telefone ou o horário simplesmente passa para outra opção.',
  },
  {
    icon: History,
    title: 'Informações desatualizadas',
    text: 'Endereço, telefone, fotos e horários desatualizados afastam quem estava quase contactingando.',
  },
  {
    icon: Globe,
    title: 'Sem site profissional',
    text: 'Sem um site próprio, não existe um lugar próprio onde o cliente conhecer a sua empresa.',
  },
  {
    icon: TrendingUp,
    title: 'Concorrentes mais visíveis',
    text: 'Quem já tem perfil e site bem organizados aparece antes e recebe as oportunidade antes.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="relative bg-surface py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">O ponto de partida</span>
          <h2 className="mt-5 font-display text-[1.875rem] font-extrabold leading-[1.15] sm:text-[2.25rem] lg:text-[2.5rem]">
            Se seus clientes não encontram sua empresa no Google, você pode estar perdendo
            oportunidades.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-600">
            A maior parte dos clientes locais procura no Google antes de escolher com quem falar. Quando a
            sua empresa não está lá — ou está incompleta — a oportunidade migra para quem está.
          </p>
        </ScrollReveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PROBLEMS.map((problem, index) => {
            const Icon = problem.icon
            return (
              <ScrollReveal
                as="li"
                key={problem.title}
                delay={index * 0.07}
                className="group card flex h-full flex-col p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-erga-200 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-white transition-colors duration-300 group-hover:bg-erga-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[1.0625rem] font-bold text-ink-900">{problem.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{problem.text}</p>
              </ScrollReveal>
            )
          })}
        </ul>

        <ScrollReveal className="mt-16 lg:mt-20">
          <TextScrollHighlight
            as="p"
            className="mx-auto max-w-4xl text-center font-display text-[1.375rem] font-bold leading-[1.35] sm:text-[1.75rem] lg:text-[2rem]"
            segments={[
              { text: 'Enquanto sua empresa não aparece para quem procura,', to: 'ink' },
              { text: 'oportunidades podem estar indo para a concorrência.', to: 'orange' },
            ]}
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
