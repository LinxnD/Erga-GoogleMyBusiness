import { HardHat, Stethoscope, UtensilsCrossed } from 'lucide-react'
import HorizontalShowcase from './ui/HorizontalShowcase'

const MODELS = [
  {
    id: 'materiais',
    icon: HardHat,
    segment: 'Loja de materiais de construção',
    url: 'suempresa.com.br',
    tint: 'bg-erga-50',
    mark: 'bg-erga-600',
    note: 'Modelo ilustrativo de apresentação de catálogo e contato rápido.',
  },
  {
    id: 'restaurante',
    icon: UtensilsCrossed,
    segment: 'Restaurante e food service',
    url: 'suarestaurante.com.br',
    tint: 'bg-gblue-50',
    mark: 'bg-gblue-600',
    note: 'Modelo ilustrativo com foco em cardápio, horários e localização.',
  },
  {
    id: 'clinica',
    icon: Stethoscope,
    segment: 'Clínica e consultório',
    url: 'suaclinica.com.br',
    tint: 'bg-surface',
    mark: 'bg-ink-900',
    note: 'Modelo ilustrativo com foco em serviços, equipe e agendamento.',
  },
]

export default function Showcase() {
  return (
    <HorizontalShowcase
      items={MODELS}
      title="Um site profissional para apresentar o seu negócio."
      description="Cada empresa conta uma história diferente. O site entregue junto com o plano é organizado para contar a sua, com o visual e as informações que importam para o seu cliente."
    />
  )
}
