'use client'

/**
 * Hero principal · paridad 1:1 con HTML v7-final.
 *
 * Estructura:
 *   - Tag "Tech-driven B2B · Est. 2014"
 *   - Headline "Partner B2B en Latinoamérica" con animación letter-by-letter
 *   - Subtítulo con 3 verticales y "AI" en yellow-highlight
 *   - 2 CTAs: "Cotización urgente" (magnético) + "Licitación" (outline)
 *   - 3 stats inline: 10 años · 150+ usuarios · 250+ marcas
 *   - HeroMap a la derecha (lg+ only)
 *
 * Las correcciones aplicadas frente al HTML:
 *   - "atienda a sus clientes" → "atienda clientes" (sin "su")
 *   - "Expanda su negocio" → "Expanda el negocio" (sin "su") · pero respeta semántica
 *     ⟶ NOTA: el subtítulo original ya estaba bien (se mantiene el sentido).
 *
 * Pre-fill del modal:
 *   - "Cotización urgente" → null (sin prefill, modal vacío)
 *   - "Licitación" → 'licitacion' (pre-marca el chip)
 */

import { useEffect } from 'react'
import HeroMap from './HeroMap'
import type { QuotePrefill } from '../../page-client'

type Props = { onOpenQuote: (prefill?: QuotePrefill) => void }

// Letras del título con sus delays (paridad con HTML)
const TITLE_LINES: Array<{ chars: string; baseDelay: number }> = [
  { chars: 'Partner B2B', baseDelay: 0.1 },
  // segunda línea se renderiza con highlight especial
]

export default function Hero({ onOpenQuote }: Props) {
  // Animar contadores cuando entran a viewport
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-counter]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.counter || '0', 10)
          let current = 0
          const duration = 1800
          const start = performance.now()
          const ease = (t: number) => 1 - Math.pow(1 - t, 3)
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            current = Math.floor(target * ease(t))
            el.textContent = String(current)
            if (t < 1) requestAnimationFrame(tick)
            else el.textContent = String(target)
          }
          requestAnimationFrame(tick)
          observer.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Activar reveal al hacer scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Magnetic button effect
  useEffect(() => {
    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>()
    const leaveHandlers = new Map<HTMLElement, () => void>()

    document.querySelectorAll<HTMLElement>('.magnetic-btn').forEach((btn) => {
      const move = (e: MouseEvent) => {
        if (window.innerWidth < 1024) return
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
      }
      const leave = () => {
        btn.style.transform = ''
      }
      btn.addEventListener('mousemove', move)
      btn.addEventListener('mouseleave', leave)
      handlers.set(btn, move)
      leaveHandlers.set(btn, leave)
    })

    return () => {
      handlers.forEach((handler, btn) => btn.removeEventListener('mousemove', handler))
      leaveHandlers.forEach((handler, btn) => btn.removeEventListener('mouseleave', handler))
    }
  }, [])

  return (
    <section className="relative pt-16 bg-white overflow-hidden">
      {/* Decoración: estrella amarilla rotando */}
      <div
        className="absolute bottom-32 left-4 sm:left-10 lg:left-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rotate-anim pointer-events-none opacity-50"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-yellow">
          <use href="#i-sparkle" />
        </svg>
      </div>

      {/* Decoración: círculo grande */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 lg:w-[500px] lg:h-[500px] border-2 border-ink/10 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16 pb-4 lg:pb-4">
        <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start mb-8 lg:mb-12">
          {/* COLUMNA IZQUIERDA */}
          <div>
            {/* Tag superior */}
            <div className="slide-right mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-ink text-white">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow rounded-full animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest">
                  Tech-driven B2B · Est. 2014
                </span>
              </div>
            </div>

            {/* Headline animado letter-by-letter */}
            <h1 className="font-mega text-hero-int text-ink mb-6 lg:mb-8 hero-headline">
              <span className="overflow-hidden block">
                <Letter char="P" delay={0.1} />
                <Letter char="a" delay={0.13} />
                <Letter char="r" delay={0.16} />
                <Letter char="t" delay={0.19} />
                <Letter char="n" delay={0.22} />
                <Letter char="e" delay={0.25} />
                <Letter char="r" delay={0.28} />
                <span className="letter inline-block" style={{ width: '0.3em', animationDelay: '0.3s' }} />
                <Letter char="B" delay={0.33} />
                <Letter char="2" delay={0.36} />
                <Letter char="B" delay={0.39} />
              </span>
              <span className="overflow-hidden block">
                <Letter char="e" delay={0.5} />
                <Letter char="n" delay={0.53} />
                <span className="letter inline-block" style={{ width: '0.25em', animationDelay: '0.55s' }} />
                <span className="relative inline-block letter" style={{ animationDelay: '0.6s' }}>
                  <span className="relative z-10">Latinoamérica</span>
                  <span className="absolute inset-x-0 bottom-[8%] h-[32%] bg-yellow -z-0" />
                </span>
                <span className="letter text-yellow" style={{ animationDelay: '0.7s' }}>
                  .
                </span>
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="reveal text-base sm:text-lg lg:text-xl font-medium text-ink leading-relaxed max-w-2xl mb-8 lg:mb-10">
              Suministros corporativos, Servicios ejecutivos,
              <br className="hidden sm:block" /> Plataformas digitales{' '}
              <span className="font-display-bold yellow-highlight">AI</span>.{' '}
              <span className="text-ink/60">Expanda el negocio y atienda clientes en</span>{' '}
              <span className="font-display-bold">México y Latinoamérica</span>.
            </p>

            {/* CTAs */}
            <div className="reveal flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 lg:mb-12">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="group relative inline-flex items-center justify-center sm:justify-start gap-3 h-14 px-6 sm:px-8 bg-yellow text-ink text-base font-bold overflow-hidden magnetic-btn cursor-pointer"
                data-track="cta_quote_urgente"
              >
                <span className="relative z-10 transition-opacity duration-200 group-hover:opacity-0">
                  Cotización urgente
                </span>
                <svg className="w-5 h-5 relative z-10 transition-all duration-200 group-hover:opacity-0">
                  <use href="#i-arrow" />
                </svg>
                <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 flex items-center justify-center sm:justify-start sm:pl-6 md:pl-8 text-yellow font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 gap-3">
                  <span>Hablemos ahora</span>
                  <svg className="w-5 h-5">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                onClick={() => onOpenQuote('licitacion')}
                className="group inline-flex items-center justify-center sm:justify-start gap-3 h-14 px-6 sm:px-8 border-2 border-ink text-ink text-base font-bold hover:bg-ink hover:text-yellow transition-all cursor-pointer"
                data-track="cta_licitacion"
              >
                Licitación
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <use href="#i-arrow-ur" />
                </svg>
              </button>
            </div>

            {/* Stats inline */}
            <div className="reveal flex flex-wrap gap-6 lg:gap-10 items-baseline border-t border-ink/10 pt-6">
              <div>
                <div className="text-2xl sm:text-3xl counter-num text-ink leading-none" data-counter="10">
                  0
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/60 mt-1.5">
                  años · operando
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl counter-num text-ink leading-none">
                  <span data-counter="150">0</span>
                  <span className="text-yellow">+</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/60 mt-1.5">
                  usuarios corporativos
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl counter-num text-ink leading-none">
                  <span data-counter="250">0</span>
                  <span className="text-yellow">+</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/60 mt-1.5">
                  marcas top distribuidas
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA */}
          <div className="reveal hidden lg:block">
            <HeroMap />
          </div>
        </div>
      </div>
    </section>
  )
}

function Letter({ char, delay }: { char: string; delay: number }) {
  return (
    <span className="letter" style={{ animationDelay: `${delay}s` }}>
      {char}
    </span>
  )
}
