'use client'

/**
 * Verticales · paridad 1:1 con HTML v7-final (layout 12 col asimétrico).
 *
 * Card 1 (col-span-7 row-span-2): Suministros corporativos — fondo negro
 * Card 2 (col-span-5): Servicios ejecutivos — fondo amarillo
 * Card 3 (col-span-5): Plataformas digitales AI — fondo blanco con border, hover inverso
 *
 * FIX BUG client-side navigation:
 *   - Suministros y Plataformas usan HTML embebido con scripts que modifican `window`
 *     globalmente. Si se llega a esas páginas via <Link> de Next.js, el estado residual
 *     causa que la página se vea en blanco.
 *   - Solución: usar <a href> en lugar de <Link> para esas 2 cards → fuerza hard
 *     navigation (recarga completa) → fresh state → sin bugs.
 *   - Servicios SÍ usa <Link> porque está construido con componentes React puros y
 *     no tiene HTML embebido.
 */

import Link from 'next/link'

export default function Verticals() {
  return (
    <section id="suministros" className="relative bg-white pt-0 pb-16 lg:pt-0 lg:pb-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Encabezado de sección */}
        <div className="reveal mb-12 lg:mb-20 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8">
          <div className="flex-1">
            <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-3 sm:mb-4">
              / 01 — Verticales operativas
            </div>
            <h2 className="font-mega text-section text-ink">
              Tres verticales.<br />
              <span className="text-ink/30">Una</span>{' '}
              <span className="yellow-highlight">operación.</span>
            </h2>
          </div>
          <div className="hidden lg:block font-mono text-xs uppercase tracking-widest text-ink/40 text-right">
            Multi-marca<br />Multi-país<br />Multi-ciudad
          </div>
        </div>

        {/* Grid 12 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* CARD 01 — SUMINISTROS (col-span-7 row-span-2) · hard nav (HTML embebido) */}
          <a
            href="/suministros-corporativos"
            className="reveal tilt-card group relative lg:col-span-7 lg:row-span-2 bg-ink text-white p-6 sm:p-8 lg:p-12 overflow-hidden cursor-pointer min-h-[420px] lg:min-h-[560px] flex flex-col"
            data-track="card_suministros"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 border border-yellow/20 rounded-full" />
            <div className="absolute top-20 right-20 w-40 h-40 border border-yellow/30 rounded-full" />

            <div className="flex items-start justify-between mb-8 lg:mb-12 relative z-10">
              <div className="font-mono text-xs uppercase tracking-widest text-yellow">
                01 / Suministros corporativos
              </div>
              <span className="text-yellow w-8 h-8 inline-flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <svg className="w-6 h-6">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </div>

            <h3 className="font-mega text-3xl lg:text-4xl mb-6 lg:mb-8 relative z-10">
              Suministros<br />
              <span className="text-yellow">corporativos.</span>
            </h3>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 max-w-lg relative z-10">
              Modelo de <strong className="text-white">distribución autorizada global</strong> que
              ofrece <strong className="text-yellow">+150,000 productos</strong> de marcas líderes en
              México y Latinoamérica, dentro de las principales categorías del mercado corporativo e
              industrial.
            </p>

            {/* 7 categorías */}
            <div className="relative z-10 mb-8 lg:mb-10">
              <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-yellow/70 mb-3">
                Categorías
              </div>
              <div className="flex flex-wrap gap-2">
                {['Tecnología', 'Mobiliario', 'Papelería', 'Almacenamiento', 'Empaques', 'Herramientas', 'Maquinaria'].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 border border-white/20 hover:border-yellow hover:text-yellow text-white/80 text-xs sm:text-sm font-medium transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <span className="group/cta inline-flex items-center gap-3 px-5 py-3 border-2 border-yellow text-yellow group-hover:bg-yellow group-hover:text-ink transition-colors duration-300 font-display-bold text-sm uppercase tracking-wide">
                Conocer más
                <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-1">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </div>
          </a>

          {/* CARD 02 — SERVICIOS EJECUTIVOS (col-span-5) · client nav (componentes React puros) */}
          <Link
            id="servicios"
            href="/servicios-ejecutivos"
            className="reveal tilt-card group relative lg:col-span-5 bg-yellow p-6 sm:p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[260px] flex flex-col"
            data-track="card_servicios"
          >
            <div className="flex items-start justify-between mb-6 lg:mb-8">
              <div className="font-mono text-xs uppercase tracking-widest text-ink">
                02 / Servicios ejecutivos
              </div>
              <span className="text-ink inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <svg className="w-6 h-6">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </div>

            <h3 className="font-mega text-3xl lg:text-4xl text-ink mb-3 lg:mb-4">
              Servicios<br />
              <span className="font-display-bold">ejecutivos.</span>
            </h3>

            <p className="text-ink/80 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8">
              Gestión operativa de tareas que suponen carga de tiempo y riesgo.{' '}
              <strong>Operamos, reservamos y arrendamos</strong> productos y servicios en
              representación del cliente. Sin garantías, trámites ni tarjetas de crédito en prenda.
              Equipo de especialistas dedicado a contingencias operativas.
            </p>

            <div className="mt-auto">
              <span className="group/cta inline-flex items-center gap-3 px-5 py-3 border-2 border-ink text-ink hover:bg-ink hover:text-yellow transition-colors duration-300 font-display-bold text-sm uppercase tracking-wide">
                Conocer más
                <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-1">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </div>
          </Link>

          {/* CARD 03 — PLATAFORMAS DIGITALES AI (col-span-5) · hard nav (HTML embebido futuro) */}
          <a
            id="plataformas"
            href="/plataformas-digitales-ai"
            className="reveal tilt-card group relative lg:col-span-5 bg-white border-2 border-ink p-6 sm:p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[260px] flex flex-col hover:bg-ink hover:text-white transition-colors duration-500"
            data-track="card_plataformas"
          >
            <div className="flex items-start justify-between mb-6 lg:mb-8">
              <div className="font-mono text-xs uppercase tracking-widest opacity-60">
                03 / Plataformas digitales AI
              </div>
              <span className="inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <svg className="w-6 h-6">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </div>

            <h3 className="font-mega text-3xl lg:text-4xl mb-3 lg:mb-4">
              Plataformas<br />
              <span className="text-yellow">digitales AI.</span>
            </h3>

            <p className="text-sm sm:text-base leading-relaxed opacity-80 mb-6 lg:mb-8">
              Optimización de procesos de negocio a través de la{' '}
              <strong>transformación digital</strong>. Plataformas personalizadas para automatizar,
              optimizar y extraer la información necesaria para decisiones estratégicas. Integración
              de <strong className="text-yellow">inteligencia artificial</strong> y todos sus
              beneficios al ecosistema corporativo.
            </p>

            <div className="mt-auto">
              <span className="group/cta inline-flex items-center gap-3 px-5 py-3 border-2 border-current hover:bg-yellow hover:text-ink hover:border-yellow transition-colors duration-300 font-display-bold text-sm uppercase tracking-wide">
                Conocer más
                <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-1">
                  <use href="#i-arrow" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
