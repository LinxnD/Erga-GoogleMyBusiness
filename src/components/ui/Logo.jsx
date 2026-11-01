export default function Logo({ className = '', compact = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-erga-500 shadow-[0_6px_18px_-6px_rgba(254,88,0,0.65)]">
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-full w-full">
          <path d="M9.5 8h13v4.2h-8.4v3.6h7.4v4.1h-7.4V24h-4.6z" fill="#fff" />
          <circle cx="22.5" cy="22.5" r="3.2" fill="#3C60AC" />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-[1.35rem] font-extrabold leading-none tracking-[-0.03em] text-ink-900">
          Erga
          <span className="ml-1.5 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
            Marketing
          </span>
        </span>
      )}
    </span>
  )
}
