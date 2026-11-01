import { Clock, MapPin, Navigation, Phone, Search, Star } from 'lucide-react'

/**
 * Simulação visual de um resultado de busca do Google com Perfil da Empresa.
 * Puramente ilustrativo: usa dados genéricos e não reproduz avaliações reais.
 */
export default function GoogleSearchMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
      <div className="flex items-center gap-2 border-b border-line-soft bg-surface px-4 py-3">
        <Search className="h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
        <span className="truncate text-[0.8rem] text-ink-500">
          materially de construção perto de mim
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-gblue-200 bg-gblue-50/60 p-4">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-gblue-600 shadow-soft">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gblue-600">
                Perfil da Empresa
              </p>
              <p className="mt-0.5 truncate font-display text-[0.95rem] font-bold text-ink-900">
                Sua Empresa — Nome Exemplo
              </p>
              <p className="text-[0.78rem] text-ink-500">Loja de materiais de construção</p>
            </div>
          </div>

          <ul className="mt-3.5 space-y-1.5 text-[0.78rem] text-ink-600">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-300" aria-hidden="true" />
              <span>Rua Exemplo, 123 — Centro</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-300" aria-hidden="true" />
              <span>Seg. a Sex., 08h às 18h</span>
            </li>
            <li className="flex items-start gap-2">
              <Star className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-300" aria-hidden="true" />
              <span>Categoria e perfil otimizados</span>
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-gblue-500 px-3 py-2 text-[0.75rem] font-semibold text-white">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Ligar
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gblue-200 bg-white px-3 py-2 text-[0.75rem] font-semibold text-gblue-600">
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              Rota
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="h-2.5 w-2/3 rounded-full bg-ink-300/60" />
          <div className="h-2 w-full rounded-full bg-line" />
          <div className="h-2 w-4/5 rounded-full bg-line" />
        </div>
      </div>
    </div>
  )
}
