import { ClipboardList, MessagesSquare, Rocket, Wand2 } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'
import AnimatedTimeline from './ui/AnimatedTimeline'
import MagneticButton from './ui/MagneticButton'
import { whatsappUrl } from '../lib/site'

const STEPS = [
  {
    id: 'contato',
    icon: MessagesSquare,
    title: 'Fale com a Erga',
    text: 'Entre em contato pelo WhatsApp, conheça o plano e entenda o que será feito pela sua empresa.',
  },
  {
    id: 'dados',
    icon: ClipboardList,
    title: 'Envie os dados da sua empresa',
    text: 'Você fornece as informações necessárias: razão social, endereço, contato, categoria e fotos.',
  },
  {
    id: 'preparo',
    icon: Wand2,
    title: 'Preparamos sua presença digital',
    text: 'A Erga trabalha no perfil do Google Meu Negócio e na estrutura do site profissional do seu negócio.',
  },
  {
    id: 'pronto',
    icon: Rocket,
    title: 'Sua empresa pronta para se apresentar online',
    text: 'Após a implementação e as verificações necessárias do Google, seus clientes já podem encontrar suas informações.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-5 font-display text-[1.875rem] font-extrabold leading-[1.15] sm:text-[2.25rem] lg:text-[2.5rem]">
            Em poucos passos, sua empresa começa a construir uma presença digital mais forte.
          </h2>
        </ScrollReveal>

        <div className="mt-14 lg:mt-20">
          <AnimatedTimeline steps={STEPS} />
        </div>

        <ScrollReveal className="mt-14 flex flex-col items-center gap-4 text-center lg:mt-20">
          <MagneticButton
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg"
          >
            Começar agora pelo WhatsApp
          </MagneticButton>
          <p className="text-[0.875rem] text-ink-500">
            Atendimento personalizado, com as condições apresentadas por um especialista.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
