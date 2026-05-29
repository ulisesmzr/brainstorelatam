import { IconArrow, IconArrowUR, IconSparkle } from '../lib/icons'

type Props = {
  onOpenQuote: () => void
}

// Los 10 países canónicos · orden visual: Norte y Centroamérica arriba, Sudamérica abajo
const COUNTRIES: Array<{ iso: string; name: string }> = [
  { iso: 'MX', name: 'México' },
  { iso: 'GT', name: 'Guatemala' },
  { iso: 'CR', name: 'Costa Rica' },
  { iso: 'PA', name: 'Panamá' },
  { iso: 'DO', name: 'Rep. Dominicana' },
  { iso: 'CO', name: 'Colombia' },
  { iso: 'EC', name: 'Ecuador' },
  { iso: 'PE', name: 'Perú' },
  { iso: 'CL', name: 'Chile' },
  { iso: 'AR', name: 'Argentina' },
]

/**
 * Hero editorial de Servicios Ejecutivos.
 * - Decoración: estrella amarilla rotando + arcos sutiles
 * - Eyebrow: "02 / Servicios ejecutivos" con pulse amarillo
 * - Headline con yellow-highlight + segunda línea en gris suave
 * - Subtítulo con strong destacado
 * - Panel "Red operativa · 10 países · presencia local" (.country-net 5×2)
 * - 2 CTAs: Solicitar servicios (amarillo) + Ver servicios (outline)
 */
export default function Hero({ onOpenQuote }: Props) {
  return (
    <section className="relative bg-white overflow-hidden pt-4 pb-20 lg:pb-32">
      {/* Decoración: estrella amarilla pequeña rotando */}
      <div
        className="absolute top-12 right-8 lg:right-16 w-12 h-12 lg:w-16 lg:h-16 rotate-anim pointer-events-none opacity-80"
        aria-hidden="true"
      >
        <IconSparkle className="w-full h-full text-yellow" />
      </div>

      {/* Decoración: arcos sutiles al fondo derecho */}
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 lg:w-[500px] lg:h-[500px] border border-ink/[0.06] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-60 h-60 lg:w-[360px] lg:h-[360px] border border-ink/[0.08] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16">
        {/* Eyebrow */}
        <div className="reveal mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-ink text-white">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow rounded-full animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest">
              02 / Servicios ejecutivos
            </span>
          </div>
        </div>

        {/* Headline editorial */}
        <h1
          className="reveal font-display-bold text-ink mb-6 lg:mb-8 leading-[1.02] tracking-tight max-w-5xl"
          style={{ fontSize: 'clamp(2.25rem, 4.8vw, 4.5rem)' }}
        >
          Una <span className="yellow-highlight">extensión operativa</span> de su equipo.
          <br />
          <span className="text-ink/40 font-display-bold">En diez países.</span>
        </h1>

        {/* Subtítulo */}
        <p className="reveal text-base sm:text-lg lg:text-xl text-ink/70 leading-relaxed max-w-3xl mb-10 lg:mb-12">
          Logística internacional, arrendamiento, reservaciones ejecutivas y atención a
          clientes, operados como parte de su organización.{' '}
          <strong className="text-ink">Sin requisitos burocráticos</strong> que detengan la
          gestión y sin abrir relaciones con proveedores no calificados.
        </p>

        {/* Red operativa · 10 países · presencia local */}
        <div className="reveal mb-10 lg:mb-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">
              Red operativa
            </span>
            <span className="h-px flex-1 bg-ink/15" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
              10 países · presencia local
            </span>
          </div>
          <ul className="country-net" aria-label="Cobertura geográfica de la red operativa">
            {COUNTRIES.map((c) => (
              <li key={c.iso} className="country-node">
                <div className="cn-iso">{c.iso}</div>
                <div className="cn-name">{c.name}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenQuote}
            className="group relative inline-flex items-center justify-center sm:justify-start gap-3 h-12 sm:h-14 px-6 sm:px-7 bg-yellow text-ink text-sm sm:text-base font-bold transition-all duration-300 hover:bg-yellow-hot hover:shadow-[0_8px_24px_-6px_rgba(255,212,0,0.6)] hover:-translate-y-0.5"
          >
            <span>Solicitar servicios</span>
            <IconArrow className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1.5" />
          </button>
          <a
            href="#servicios"
            className="group inline-flex items-center justify-center sm:justify-start gap-3 h-12 sm:h-14 px-6 sm:px-7 border-2 border-ink text-ink text-sm sm:text-base font-bold hover:bg-ink hover:text-yellow transition-all"
          >
            Ver servicios
            <IconArrowUR className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
