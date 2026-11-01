/**
 * Prévia ilustrativa de um site profissional entregue junto do plano.
 * Modelo genérico, sem vínculo com um projeto real da Erga.
 */
export default function SitePreviewMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
      <div className="flex items-center gap-2 border-b border-line-soft bg-surface px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-[0.7rem] text-ink-500">
          seusite.com.br
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="h-3 w-16 rounded-full bg-ink-900/80" />
          <span className="flex gap-2">
            <span className="h-2 w-8 rounded-full bg-line" />
            <span className="h-2 w-8 rounded-full bg-line" />
          </span>
        </div>

        <div className="mt-4 rounded-xl bg-gradient-to-br from-erga-50 to-white p-4">
          <p className="font-display text-[0.95rem] font-bold leading-snug text-ink-900">
            Sua empresa, com presença digital própria
          </p>
          <p className="mt-1.5 h-2 w-4/5 rounded-full bg-line" />
          <p className="mt-1.5 h-2 w-3/5 rounded-full bg-line" />
          <span className="mt-3.5 inline-flex items-center rounded-lg bg-erga-600 px-3 py-1.5 text-[0.72rem] font-semibold text-white">
            Falar no WhatsApp
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-lg border border-line-soft p-2.5">
              <span className="block h-6 w-6 rounded-md bg-gblue-100" />
              <span className="mt-2 block h-2 w-full rounded-full bg-line" />
              <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-line-soft" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
