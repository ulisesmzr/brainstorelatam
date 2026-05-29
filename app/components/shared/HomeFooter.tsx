'use client'

/**
 * Footer global · 4 columnas + sub-row de Grupo BSM
 *
 * Estructura:
 *   Row 1 (4 cols):  Marca · Verticales · Empresa · Contacto
 *   Row 2 (sub-row): Grupo BSM (FASTCO, Loyalty Rewards, Business Travel)
 *   Row 3 (legal):   © 2026 BSM Cía. Internacional Multiservicios SA
 *                    Hecho en México con cobertura en Latinoamérica
 *
 * Logo: /brand/01-logo-primary.svg (oficial)
 * Fondo: negro sólido (#0A0A0A), tipografía blanca/yellow
 */

import Link from 'next/link'

export default function HomeFooter() {
  return (
    <footer className="bg-ink text-white py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Row 1 · 4 columnas principales */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">

          {/* Marca */}
          <div>
            <div className="mb-4">
              <img
                src="/brand/07-logo-white.svg"
                alt="Brainstore"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Aliado estratégico B2B para suministros corporativos, servicios ejecutivos y plataformas digitales con IA en diez países de Latinoamérica.
            </p>
          </div>

          {/* Verticales */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-yellow mb-4">
              Verticales
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/suministros-corporativos" className="hover:text-yellow transition-colors">
                  Suministros corporativos
                </Link>
              </li>
              <li>
                <Link href="/servicios-ejecutivos" className="hover:text-yellow transition-colors">
                  Servicios ejecutivos
                </Link>
              </li>
              <li>
                <Link href="/plataformas-digitales-ai" className="hover:text-yellow transition-colors">
                  Plataformas digitales AI
                </Link>
              </li>
              <li>
                <Link href="/latam-direct" className="hover:text-yellow transition-colors">
                  Latam Direct
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-yellow mb-4">
              Empresa
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/nosotros" className="hover:text-yellow transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/cobertura" className="hover:text-yellow transition-colors">
                  Cobertura regional
                </Link>
              </li>
              <li>
                <Link href="/licitaciones" className="hover:text-yellow transition-colors">
                  Licitaciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-yellow transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-yellow mb-4">
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:team-bsm@brainstore.com.mx" className="hover:text-yellow transition-colors">
                  team-bsm@brainstore.com.mx
                </a>
              </li>
              <li>
                <a href="tel:+525565067332" className="hover:text-yellow transition-colors">
                  +52 55 6506 7332
                </a>
              </li>
              <li className="text-white/60">
                Miguel de Cervantes Saavedra 169,<br />
                Granada, CDMX
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2 · Grupo BSM (sister brands) */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-yellow mb-3">
            Grupo BSM
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <a
              href="https://fastco.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow transition-colors inline-flex items-center gap-1.5"
            >
              FASTCO
              <span className="text-xs">↗</span>
            </a>
            <a
              href="https://loyaltyrewardslatam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow transition-colors inline-flex items-center gap-1.5"
            >
              Loyalty Rewards Latam
              <span className="text-xs">↗</span>
            </a>
            <a
              href="https://airportbusinesstravelmexico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow transition-colors inline-flex items-center gap-1.5"
            >
              Business Travel
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Row 3 · Legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40 font-mono uppercase tracking-widest">
          <span>© 2026 BSM Cía. Internacional Multiservicios SA</span>
          <span>Hecho en México con cobertura en Latinoamérica</span>
        </div>
      </div>
    </footer>
  )
}
