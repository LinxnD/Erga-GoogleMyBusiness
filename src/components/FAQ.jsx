import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Minus, Plus } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'
import MagneticButton from './ui/MagneticButton'
import { whatsappUrl } from '../lib/site'

const FAQS = [
  {
    id: 'o-que-e',
    question: 'O que é o Google Meu Negócio?',
    answer:
      'É o Perfil da Empresa no Google, a ferramenta que permite apresentar as informações da sua empresa — como endereço, telefone, horários e categoria — nas Pesquisas do Google e no Google Maps. É por ele que sua empresa aparece quando alguém procura pelo que você oferece na sua região.',
  },
  {
    id: 'gratuito',
    question: 'O Google Meu Negócio é gratuito?',
    answer:
      'O Perfil da Empresa no Google é uma ferramenta gratuita disponibilizada pelo Google para qualquer empresa. O que a Erga oferece é a assessoria especializada: configuração, organização e otimização desse perfil para que ele atenda ao seu negócio.',
  },
  {
    id: 'site-gratis',
    question: 'O site profissional é realmente gratuito?',
    answer:
      'Sim — o site profissional faz parte da oferta promocional vinculada à contratação do plano de Google Meu Negócio da Erga. As condições dessa oferta são apresentadas por um especialista no atendimento, antes da contratação.',
  },
  {
    id: 'tecnologia',
    question: 'Preciso entender de tecnologia?',
    answer:
      'Não. A Erga conduz o processo com você do início ao fim: basta ter as informações da empresa (dados cadastrais, contatos, fotos e categoria) e acompanhar as orientações durante o trabalho.',
  },
  {
    id: 'prazo',
    question: 'Em quanto tempo minha empresa aparecerá no Google?',
    answer:
      'O prazo depende da situação atual do perfil e dos processos de verificação e aprovação do próprio Google. Ele varia de um caso para o outro e é avaliado pela Erga no início do atendimento.',
  },
  {
    id: 'contratar',
    question: 'Como posso contratar?',
    answer:
      'É só falar com a Erga pelo WhatsApp. A partir dali você conhece o plano, recebe as orientações e toda a parte operacional é conduzida pela nossa equipe.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="duvidas" className="bg-surface py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <ScrollReveal>
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 className="mt-5 font-display text-[1.875rem] font-extrabold leading-[1.15] sm:text-[2.25rem]">
              Tudo o que você precisa saber antes de começar.
            </h2>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-ink-600">
              Ainda ficou alguma dúvida? Chame no WhatsApp e fale direto com um especialista.
            </p>
            <MagneticButton
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-7"
            >
              Falar no WhatsApp
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              {FAQS.map((faq) => {
                const open = openId === faq.id
                return (
                  <li key={faq.id}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : faq.id)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${faq.id}`}
                        id={`faq-button-${faq.id}`}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-surface-2 sm:px-6"
                      >
                        <span className="font-display text-[1rem] font-bold text-ink-900 sm:text-[1.0625rem]">
                          {faq.question}
                        </span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-200 ${
                            open ? 'bg-erga-600 text-white' : 'bg-surface text-ink-500'
                          }`}
                          aria-hidden="true"
                        >
                          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`faq-panel-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-button-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-6 pr-14 text-[0.9375rem] leading-relaxed text-ink-600 sm:px-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
