'use client'

/**
 * Latam Direct · paridad 1:1 con HTML v7-final (split 2 columnas).
 *
 * Izquierda: 2 escenarios + 4 bullets con SVG + CTA
 * Derecha: card negro con 4 stats animados
 *
 * CORRECCIONES vs HTML:
 */

import { useEffect } from 'react'

type Props = { onOpenQuote: () => void }

export default function LatamDirect({ onOpenQuote }: Props) {
  // Animar contadores cuando entran a viewport (idéntico a Hero)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-counter-latam]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.counterLatam || '0', 10)
          let current = 0
          const duration = 2000
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
      { threshold: 0.3 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="latam" className="relative bg-white pt-20 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div className="reveal-right">
            <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-4 lg:mb-6">
              / 03 — Alianza estratégica
            </div>

            <h2 className="font-mega text-section text-ink mb-6 lg:mb-8">
              Alianza estratégica<br />
              <span className="yellow-highlight">en México y</span><br />
              <span className="font-display-bold">Latinoamérica.</span>
            </h2>

            {/* Dos escenarios */}
            <div className="space-y-4 mb-8 lg:mb-12 max-w-xl">
              <div className="group relative pl-6 py-3 border-l-2 border-yellow hover:bg-paper transition-colors">
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-yellow mb-2">
                  Si la empresa es extranjera
                </div>
                <p className="text-base sm:text-lg text-ink leading-snug">
                  <strong>Proveedor mexicano de confianza</strong> con presencia local en cada país de la región.
                </p>
              </div>
              <div className="group relative pl-6 py-3 border-l-2 border-ink hover:bg-paper transition-colors">
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink/60 mb-2">
                  Si la empresa es mexicana
                </div>
                <p className="text-base sm:text-lg text-ink leading-snug">
                  <strong>Brazo comercial y operativo en Latinoamérica</strong> sin abrir oficinas en cada país.
                </p>
              </div>
            </div>

            {/* 4 bullets con SVG */}
            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mb-8 lg:mb-12">
              <Bullet iconHref="#i-currency" title="Facturación local" subtitle="México y Latinoamérica" />
              <Bullet iconHref="#i-arrow" title="Entrega real" subtitle="10 países cobertura" />
              <Bullet iconHref="#i-globe" title="3 idiomas" subtitle="Español · English · 中文" />
              <Bullet iconHref="#i-network" title="Una interlocución" subtitle="para toda la región" />
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-3 text-ink font-bold border-b-2 border-ink hover:border-yellow pb-1 transition-colors"
              data-track="cta_latam_direct"
            >
              Ver cómo funciona Latam Direct
              <svg className="w-5 h-5 text-yellow group-hover:translate-x-2 transition-transform">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>

          {/* COLUMNA DERECHA · Operating data card */}
          <div className="reveal">
            <div className="relative bg-ink p-6 sm:p-8 lg:p-10 text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(-45deg, #FFD400 0, #FFD400 1px, transparent 1px, transparent 40px)',
                }}
                aria-hidden="true"
              />

              {/* Header */}
              <div className="relative flex items-start justify-between mb-8 lg:mb-10 pb-5 lg:pb-6 border-b border-white/10">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-yellow mb-2">
                    Operating data · live
                  </div>
                  <div className="font-display-bold text-lg lg:text-xl text-white leading-tight">
                    Los números<br />hablan por sí solos.
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="live-dot" />
                  <span className="font-mono uppercase tracking-widest text-white/60">2026</span>
                </div>
              </div>

              {/* Grid 2x2 stats */}
              <div className="relative grid grid-cols-2 gap-6 lg:gap-8">
                <Stat num={10} label="años de operación" sub="desde 2014" hasPlus />
                <Stat num={10} label="países Latinoamérica" sub="5 propias · 5 partners" />
                <Stat num={500} label="solicitudes / año" sub="respuesta en 24h" />
                <StatSku />
              </div>

              <div className="relative mt-8 lg:mt-10 pt-5 lg:pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="font-mono text-xs text-white/40 uppercase tracking-widest">
                  Operating since 2014
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-yellow rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-yellow uppercase tracking-widest">
                    Updated · live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bullet({ iconHref, title, subtitle }: { iconHref: string; title: string; subtitle: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="icon-box w-10 h-10 bg-yellow text-ink group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5">
          <use href={iconHref} />
        </svg>
      </div>
      <div>
        <div className="font-display-bold text-ink">{title}</div>
        <div className="text-sm text-ink/60 mt-1">{subtitle}</div>
      </div>
    </div>
  )
}

function Stat({ num, label, sub, hasPlus }: { num: number; label: string; sub: string; hasPlus?: boolean }) {
  return (
    <div className="group">
      <div className="relative inline-block">
        <div
          className="counter-num font-display-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-none group-hover:text-yellow transition-colors duration-300"
          data-counter-latam={num}
        >
          0
        </div>
        {hasPlus && (
          <div className="absolute -top-1 -right-3 text-yellow">
            <svg className="w-3.5 h-3.5">
              <use href="#i-plus" />
            </svg>
          </div>
        )}
      </div>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/60">{label}</div>
      <div className="mt-1 text-xs text-white/40">{sub}</div>
    </div>
  )
}

function StatSku() {
  return (
    <div className="group">
      <div className="counter-num font-display-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-none group-hover:text-yellow transition-colors duration-300">
        <span data-counter-latam="50">0</span>
        <span className="text-yellow text-3xl sm:text-4xl lg:text-5xl">k+</span>
      </div>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/60">SKU disponibles</div>
      <div className="mt-1 text-xs text-white/40">multi-distribuidor</div>
    </div>
  )
}
