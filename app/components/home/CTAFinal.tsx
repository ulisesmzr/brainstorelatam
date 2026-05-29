'use client'

/**
 * CTA Final · paridad 1:1 con HTML v7-final.
 *
 * CORRECCIONES vs HTML:
 *   - "su próxima orden" → "la próxima orden" (sin "su")
 *
 * Decoraciones: 3 círculos esquinas + sparkle flotando arriba derecha
 */

type Props = { onOpenQuote: () => void }

const WHATSAPP_URL =
  'https://wa.me/525565067332?text=' +
  encodeURIComponent(
    'Hola Brainstore, me interesa solicitar una cotización formal. Necesito información sobre:'
  )

export default function CTAFinal({ onOpenQuote }: Props) {
  return (
    <section id="cta" className="relative bg-white text-ink py-20 lg:py-44 overflow-hidden">
      {/* Decoraciones */}
      <div className="absolute -top-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] border-2 border-ink/[0.06] rounded-full pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] border-2 border-ink/[0.08] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] border-2 border-yellow/30 rounded-full pointer-events-none" />

      <div className="absolute top-20 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 float-anim pointer-events-none opacity-60">
        <svg viewBox="0 0 24 24" className="w-full h-full text-yellow">
          <use href="#i-sparkle" />
        </svg>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="reveal max-w-5xl">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-4 lg:mb-6">
            / Let&apos;s talk
          </div>

          <h2 className="font-mega text-hero-int text-ink leading-[1.05] mb-8 lg:mb-12">
            ¿Listo para que<br />
            la próxima orden<br />
            sea <span className="bg-yellow text-ink px-2 sm:px-3">simple?</span>
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 lg:mb-16">
            <button
              type="button"
              onClick={onOpenQuote}
              className="group relative inline-flex items-center justify-center gap-3 h-16 sm:h-20 px-8 sm:px-12 bg-ink text-yellow text-lg sm:text-2xl font-bold overflow-hidden cursor-pointer"
              data-track="cta_final_quote"
            >
              <span className="relative z-10">Solicitar cotización</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform group-hover:translate-x-2">
                <use href="#i-arrow" />
              </svg>
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 h-16 sm:h-20 px-8 sm:px-12 border-2 border-ink text-ink text-lg sm:text-2xl font-bold hover:bg-ink hover:text-yellow transition-all"
              data-track="cta_final_whatsapp"
            >
              WhatsApp directo
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-12 border-t-2 border-ink/10 pt-8 lg:pt-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">Email</div>
              <a
                href="mailto:team-bsm@brainstore.com.mx"
                className="font-display-bold text-base lg:text-lg text-ink link-underline break-all"
              >
                team-bsm@brainstore.com.mx
              </a>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">Oficina</div>
              <div className="text-ink font-medium text-sm lg:text-base">
                Miguel de Cervantes Saavedra 169<br />
                Granada, CDMX
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">Cobertura</div>
              <div className="text-ink font-medium text-sm lg:text-base">
                10 países Latinoamérica<br />
                5 entidades propias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
