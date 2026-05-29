'use client'

import { IconArrow, IconArrowUR, IconPhone, IconSparkle, IconWhatsApp } from '../lib/icons'

type Props = {
  onOpenQuote: () => void
}

const TEL_DISPLAY = '+52 55 6506 7332'
const TEL_HREF = 'tel:+525565067332'
const WA_URL =
  'https://wa.me/525565067332?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20ejecutivos%20de%20Brainstore.'

/**
 * Bloque CTA Final · "Cuéntenos qué necesita gestionar."
 *
 * Estructura:
 * - Columna izquierda: título + descripción + 2 CTAs principales + 2 botones de contacto
 * - Columna derecha: 4 cards laterales (Contacto directo, Email, Oficina, Cobertura)
 * - Decoración: estrella amarilla rotando arriba a la izquierda
 */
export default function ContactBlock({ onOpenQuote }: Props) {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-t border-ink/10">
      {/* Decoración estrella */}
      <div
        className="absolute top-12 left-8 lg:left-16 w-12 h-12 lg:w-16 lg:h-16 rotate-anim pointer-events-none opacity-60"
        aria-hidden="true"
      >
        <IconSparkle className="w-full h-full text-yellow" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Columna izquierda */}
          <div className="reveal">
            <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-4">
              / Inicio del proceso
            </div>
            <h2 className="font-mega text-hero-int text-ink leading-[1.05] mb-6 lg:mb-8">
              Cuéntenos qué necesita gestionar.
              <br />
              <span className="yellow-highlight">Continuamos nosotros.</span>
            </h2>
            <p className="text-base lg:text-lg text-ink/70 leading-relaxed mb-8 max-w-2xl">
              Si requiere resolver una contingencia operativa puntual o desea delegar de
              forma permanente un proceso, el primer paso es el mismo. Un ejecutivo le
              contactará para conocer el caso a detalle.
            </p>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="group inline-flex items-center justify-center gap-3 h-14 sm:h-16 px-7 sm:px-8 bg-ink text-yellow text-base sm:text-lg font-bold transition-all hover:bg-charcoal"
              >
                <span>Solicitar gestión</span>
                <IconArrow className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </button>
              <a
                href="/"
                className="group inline-flex items-center justify-center gap-3 h-14 sm:h-16 px-7 sm:px-8 border-2 border-ink text-ink text-base sm:text-lg font-bold hover:bg-ink hover:text-yellow transition-all"
              >
                Volver al inicio
                <IconArrowUR className="w-5 h-5" />
              </a>
            </div>

            {/* Contacto inmediato: teléfono + WhatsApp */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={TEL_HREF}
                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-5 sm:px-6 bg-white border border-ink/15 text-ink text-sm font-bold hover:border-ink transition-all"
              >
                <IconPhone className="w-4 h-4 text-gold" />
                <span>Llamar al {TEL_DISPLAY}</span>
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-5 sm:px-6 bg-white border border-ink/15 text-ink text-sm font-bold hover:border-ink transition-all"
                aria-label="Abrir conversación de WhatsApp con Brainstore"
              >
                <IconWhatsApp className="w-4 h-4 text-gold" />
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>

          {/* Columna derecha · 4 cards laterales */}
          <div className="reveal space-y-5">
            {/* Contacto directo */}
            <div className="pl-5 border-l-2 border-yellow">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                Contacto directo
              </div>
              <a
                href={TEL_HREF}
                className="block text-base lg:text-lg font-display-bold text-ink hover:text-yellow transition-colors"
              >
                {TEL_DISPLAY}
              </a>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={TEL_HREF}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
                >
                  <IconPhone className="w-3 h-3 text-gold" />
                  Llamar
                </a>
                <span className="text-ink/20">·</span>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
                >
                  <IconWhatsApp className="w-3 h-3 text-gold" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="pl-5 border-l-2 border-yellow/40">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                Email comercial
              </div>
              <a
                href="mailto:team-bsm@brainstore.com.mx"
                className="text-base lg:text-lg font-display-bold text-ink hover:text-yellow transition-colors"
              >
                team-bsm@brainstore.com.mx
              </a>
            </div>

            {/* Oficina */}
            <div className="pl-5 border-l-2 border-yellow/40">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                Oficina central
              </div>
              <div className="text-sm text-ink/80">
                Miguel de Cervantes Saavedra 169,
                <br />
                Granada, CDMX
              </div>
            </div>

            {/* Cobertura */}
            <div className="pl-5 border-l-2 border-yellow/40">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                Cobertura operativa
              </div>
              <div className="text-sm text-ink/80">
                México y los principales países de Latinoamérica
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
