'use client'

/**
 * Header fijo · paridad 1:1 con HTML v7-final
 *
 * Logo: cuadrado negro 9x9 con cuadrado amarillo 3x3 girado 45° + wordmark "brainstore"
 * Nav 5 links + tag "10 países · Latinoamérica" (live-dot) + CTA Cotizar magnético
 * Menú móvil expandible
 */

import { useState } from 'react'

type Props = { onOpenQuote: () => void }

export default function HomeHeader({ onOpenQuote }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-ink/10"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="Brainstore">
            <img
              src="/brand/14-isotipo-gold.svg"
              alt=""
              className="h-9 w-auto group-hover:opacity-80 transition-opacity duration-300"
              aria-hidden="true"
            />
            <span className="font-display-bold text-xl tracking-tight text-ink" style={{ letterSpacing: '-0.045em' }}>
              brain<span style={{ color: '#C9A227' }}>·</span>store
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
            <a href="#suministros" className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Suministros corporativos</a>
            <a href="/servicios-ejecutivos" className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Servicios ejecutivos</a>
            <a href="#plataformas" className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Plataformas digitales AI</a>
            <a href="#latam" className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Latam Direct</a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Nosotros</a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center text-xs font-mono text-ink/60">
              <span className="live-dot" />
              <span className="ml-1">10 países · Latinoamérica</span>
            </span>
            <button
              type="button"
              onClick={onOpenQuote}
              className="group relative inline-flex items-center h-10 px-5 bg-ink text-white text-sm font-semibold overflow-hidden cursor-pointer"
              data-track="cta_quote_header"
            >
              <span className="relative z-10 flex items-center gap-2">
                Cotizar
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1">
                  <use href="#i-arrow" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 text-ink flex items-center justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                Cotizar
                <svg className="w-3.5 h-3.5">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 hover:bg-ink/5 transition-colors"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5">
                <use href="#i-menu" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-ink/10">
          <div className="px-4 py-6 space-y-1">
            <a href="#suministros" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Suministros corporativos</a>
            <a href="/servicios-ejecutivos" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Servicios ejecutivos</a>
            <a href="#plataformas" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Plataformas digitales AI</a>
            <a href="#latam" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Latam Direct</a>
            <a href="#" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Nosotros</a>
          </div>
        </div>
      )}
    </header>
  )
}
