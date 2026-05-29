'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BrainstoreIsotipo, IconArrow, IconMenu } from '../lib/icons'

type Props = {
  onOpenQuote: () => void
}

/**
 * Header sticky con backdrop-blur.
 * - Logo: imagotipo nodal amarillo + wordmark "brain·store" con punto amarillo
 * - Nav desktop: 5 enlaces a verticales (con marca activa en "Servicios ejecutivos")
 * - CTAs: "Cotizar" (negro → amarillo en hover) + menú hamburguesa en mobile
 * - Breadcrumb justo abajo: Inicio / Verticales / Servicios ejecutivos
 */
export default function Header({ onOpenQuote }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-ink/10"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          {/* Logo lockup */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Brainstore — inicio">
            <BrainstoreIsotipo className="w-7 h-7 lg:w-8 lg:h-8" />
            <span
              className="font-display-bold text-base lg:text-lg text-ink"
              style={{ letterSpacing: '-.045em' }}
            >
              brain<span style={{ color: '#FFD400' }}>·</span>store
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            <Link
              href="/suministros-corporativos"
              className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              Suministros corporativos
            </Link>
            <Link
              href="/servicios-ejecutivos"
              className="font-mono text-xs uppercase tracking-widest text-ink relative"
              aria-current="page"
            >
              Servicios ejecutivos
              <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-yellow" />
            </Link>
            <Link
              href="/plataformas-digitales-ai"
              className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              Plataformas digitales AI
            </Link>
            <Link
              href="/latam-direct"
              className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              Latam Direct
            </Link>
            <Link
              href="/nosotros"
              className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              Nosotros
            </Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenQuote}
              className="group relative inline-flex items-center h-10 px-5 bg-ink text-white text-sm font-semibold overflow-hidden"
              aria-label="Solicitar cotización"
            >
              <span className="relative z-10 flex items-center gap-2">
                Cotizar
                <IconArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 text-ink flex items-center justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                Cotizar
                <IconArrow className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 hover:bg-ink/5 transition-colors"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              <IconMenu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Menú mobile expandido */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-ink/10 bg-white">
            <nav className="max-w-[1600px] mx-auto px-4 py-4 flex flex-col gap-3" aria-label="Navegación móvil">
              <Link href="/suministros-corporativos" className="font-mono text-xs uppercase tracking-widest text-ink/70" onClick={() => setMobileOpen(false)}>
                Suministros corporativos
              </Link>
              <Link href="/servicios-ejecutivos" className="font-mono text-xs uppercase tracking-widest text-ink" onClick={() => setMobileOpen(false)}>
                Servicios ejecutivos
              </Link>
              <Link href="/plataformas-digitales-ai" className="font-mono text-xs uppercase tracking-widest text-ink/70" onClick={() => setMobileOpen(false)}>
                Plataformas digitales AI
              </Link>
              <Link href="/latam-direct" className="font-mono text-xs uppercase tracking-widest text-ink/70" onClick={() => setMobileOpen(false)}>
                Latam Direct
              </Link>
              <Link href="/nosotros" className="font-mono text-xs uppercase tracking-widest text-ink/70" onClick={() => setMobileOpen(false)}>
                Nosotros
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer para no tapar contenido bajo el header fixed */}
      <div className="pt-16 lg:pt-20" aria-hidden="true" />

      {/* Breadcrumb */}
      <nav
        aria-label="Migas de pan"
        className="border-b border-ink/10"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-3 lg:py-4">
          <ol className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            <li>
              <Link href="/" className="text-ink/40 hover:text-ink transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-ink/30">/</li>
            <li>
              <Link href="/verticales" className="text-ink/40 hover:text-ink transition-colors">
                Verticales
              </Link>
            </li>
            <li className="text-ink/30">/</li>
            <li className="text-ink" aria-current="page">
              Servicios ejecutivos
            </li>
          </ol>
        </div>
      </nav>
    </>
  )
}
