'use client'

import type { ServiceId } from '../client'
import {
  IconArrow,
  IconArrowUR,
  IconHeadset,
  IconKey,
  IconLogistics,
  IconMsj,
  IconPlane,
} from '../lib/icons'

type Props = {
  onOpenService: (id: ServiceId) => void
  onOpenQuote: (service?: ServiceId) => void
}

// Catálogo de servicios (4 cards en grid 2×2 + 1 card col-span-2 para Mensajería)
type ServiceCardConfig = {
  id: ServiceId
  num: string
  variant: 'dark' | 'yellow'
  title: string // permite <br/> con \n
  description: string
  chips: string[]
  Icon: React.FC<{ className?: string }>
  isNewModule?: boolean
}

const SERVICES_2X2: ServiceCardConfig[] = [
  {
    id: 'logistica',
    num: '01 / Servicio',
    variant: 'dark',
    title: 'Logística y\nalmacenamiento.',
    description:
      'Sin abrir oficinas, sin contratar bodegas, sin contratar personal. La empresa delega la recolección, almacenamiento, distribución y entrega final puerta a puerta dentro de México y en los principales países de Latinoamérica, sin necesidad de abrir cuentas locales ni habilitar proveedores nuevos.',
    chips: ['Door to door', 'Nacional', 'Internacional', 'Bodega propia'],
    Icon: IconLogistics,
  },
  {
    id: 'arrendamiento',
    num: '02 / Servicio',
    variant: 'yellow',
    title: 'Arrendamiento\nfácil.',
    description:
      'Sin garantías, sin depósitos en efectivo, sin tarjetas en prenda. Acceso a los bienes que requiere arrendar bajo las condiciones que la operación exige, sin enfrentar requisitos que detengan la gestión.',
    chips: ['Sin garantías', 'Sin depósito', 'Sin tarjeta en prenda', 'Plazos flexibles'],
    Icon: IconKey,
  },
  {
    id: 'reservaciones',
    num: '03 / Servicio',
    variant: 'yellow',
    title: 'Viajes y\nhospedaje.',
    description:
      'Gestión integral de reservaciones nacionales e internacionales para ejecutivos corporativos. Vuelos, hospedaje y coordinación de itinerario sin que el viajero deba realizar pagos personales ni anticipos.',
    chips: ['Vuelos', 'Hospedaje', 'Itinerarios', 'Facturación única'],
    Icon: IconPlane,
  },
  {
    id: 'atencion',
    num: '04 / Servicio',
    variant: 'dark',
    title: 'Atención a\nclientes.',
    description:
      'Servicio de tercerización de la atención digital y telefónica corporativa. Operación profesional bajo la marca del cliente, con agentes capacitados, protocolos consensuados y reportería periódica de métricas de servicio.',
    chips: ['Telefónica', 'Digital', 'Multicanal', 'Marca del cliente'],
    Icon: IconHeadset,
  },
]

/**
 * Sección Servicios — grid bento asimétrico
 * - Header de la sección con título "Contingencias resueltas con el aliado correcto"
 * - Grid 2×2 con 4 cards (alternancia diagonal dark/yellow)
 * - Card 05 Mensajería Especializada Corporativa: full-width (md:col-span-2)
 *   con panel de envío en vivo a la derecha (espejo del slide 12 de la presentación)
 * - Nota inferior con CTA verbal
 */
export default function ServicesGrid({ onOpenService, onOpenQuote }: Props) {
  // Helper: card común
  function ServiceCard(c: ServiceCardConfig) {
    const dark = c.variant === 'dark'
    const titleLines = c.title.split('\n')

    return (
      <article
        key={c.id}
        id={c.id}
        className={`se-card ${dark ? 'se-card-dark' : 'se-card-yellow'} p-6 lg:p-10 reveal min-h-[340px] lg:min-h-[400px] flex flex-col`}
        data-service={c.id}
        role="button"
        tabIndex={0}
        onClick={() => onOpenService(c.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpenService(c.id)
          }
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <span className={`font-mono text-[10px] uppercase tracking-widest ${dark ? 'text-yellow' : 'text-ink/60'}`}>
            {c.num}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpenService(c.id)
            }}
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
              dark ? 'text-yellow/70 hover:text-yellow' : 'text-ink/50 hover:text-ink'
            }`}
            aria-label={`Ver más sobre ${titleLines.join(' ')}`}
          >
            Ver más
            <IconArrowUR className="w-3 h-3" />
          </button>
        </div>

        <div className="flex-1 flex flex-col">
          <div
            className={`w-14 h-14 lg:w-16 lg:h-16 mb-6 lg:mb-8 flex items-center justify-center ${
              dark ? 'bg-yellow text-ink' : 'bg-ink text-yellow'
            }`}
          >
            <c.Icon className="w-7 h-7 lg:w-8 lg:h-8" />
          </div>

          <h3
            className={`font-mega text-3xl lg:text-4xl leading-[1.02] mb-4 lg:mb-5 ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h3>

          <p className={`text-sm lg:text-base leading-relaxed mb-6 ${dark ? 'text-white/70' : 'text-ink/70'}`}>
            {c.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {c.chips.map((chip) => (
              <span
                key={chip}
                className={`px-3 py-1 text-[10px] font-mono uppercase tracking-widest ${
                  dark ? 'bg-white/10 text-yellow' : 'bg-ink/10 text-ink'
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className={`mt-auto pt-5 flex flex-wrap gap-3 ${dark ? 'border-t border-white/10' : 'border-t border-ink/10'}`}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onOpenService(c.id)
              }}
              className={`group/cta inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold transition-all ${
                dark
                  ? 'bg-white/5 hover:bg-white/15 border border-white/15 hover:border-yellow text-white'
                  : 'bg-ink/5 hover:bg-ink/15 border border-ink/15 hover:border-ink text-ink'
              }`}
            >
              <span>Ver detalle</span>
              <IconArrow className={`w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5 ${dark ? 'text-yellow' : 'text-ink'}`} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onOpenQuote(c.id)
              }}
              className="group/cta inline-flex items-center gap-2 px-4 py-2.5 bg-yellow text-ink hover:bg-yellow-hot text-xs font-bold transition-all"
            >
              <span>Solicitar servicio</span>
              <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" />
            </button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <section
      id="servicios"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Encabezado */}
        <div className="reveal mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8">
          <div className="flex-1">
            <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-3 sm:mb-4">
              / Servicios ejecutivos
            </div>
            <h2 className="font-mega text-section text-ink">
              Contingencias resueltas
              <br />
              <span className="yellow-highlight">con el aliado correcto.</span>
            </h2>
          </div>
        </div>

        {/* Grid 2×2 + Card 05 full-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {SERVICES_2X2.map((c) => ServiceCard(c))}

          {/* 05 MENSAJERÍA ESPECIALIZADA CORPORATIVA — full-width con panel envío */}
          <article
            id="mensajeria"
            className="se-card se-card-dark p-6 lg:p-10 reveal min-h-[340px] lg:min-h-[400px] flex flex-col md:col-span-2"
            data-service="mensajeria"
            role="button"
            tabIndex={0}
            onClick={() => onOpenService('mensajeria')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onOpenService('mensajeria')
              }
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-[10px] uppercase tracking-widest text-yellow">
                  05 / Servicio
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest bg-yellow text-ink px-2 py-0.5">
                  Nuevo módulo
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenService('mensajeria')
                }}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-yellow/70 hover:text-yellow transition-colors"
                aria-label="Ver más sobre Mensajería especializada corporativa"
              >
                Ver más
                <IconArrowUR className="w-3 h-3" />
              </button>
            </div>

            <div className="flex-1 grid lg:grid-cols-[1fr_minmax(280px,420px)] gap-8 lg:gap-10">
              {/* Columna izq: copy */}
              <div className="flex flex-col">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-yellow text-ink mb-6 lg:mb-8 flex items-center justify-center">
                  <IconMsj className="w-7 h-7 lg:w-8 lg:h-8" />
                </div>

                <h3 className="font-mega text-3xl lg:text-4xl text-white leading-[1.02] mb-4 lg:mb-5">
                  Mensajería especializada
                  <br />
                  corporativa.
                </h3>

                <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-6">
                  Recolección, ruta y entrega de envíos corporativos con presencia local
                  en cada plaza. Tiempo de entrega garantizado, expediente digital de
                  cada envío y plataforma de seguimiento con notificaciones automáticas
                  y conexiones API. Cobertura local en diez países de Latinoamérica.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    'Local en cada país',
                    'Tiempo garantizado',
                    'Tracking en vivo',
                    'Evidencia de entrega',
                    'Conexiones API',
                    'Notificaciones automáticas',
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1 bg-white/10 text-yellow text-[10px] font-mono uppercase tracking-widest"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-white/10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpenService('mensajeria')
                    }}
                    className="group/cta inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/15 border border-white/15 hover:border-yellow text-white text-xs font-bold transition-all"
                  >
                    <span>Ver detalle</span>
                    <IconArrow className="w-3.5 h-3.5 text-yellow transition-transform group-hover/cta:translate-x-0.5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpenQuote('mensajeria')
                    }}
                    className="group/cta inline-flex items-center gap-2 px-4 py-2.5 bg-yellow text-ink hover:bg-yellow-hot text-xs font-bold transition-all"
                  >
                    <span>Solicitar servicio</span>
                    <IconArrow className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                  </button>
                </div>
              </div>

              {/* Columna der: panel de envío en vivo */}
              <div className="bg-white/5 border border-white/10 p-5 lg:p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                    Envío BSM-2026-04812
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-yellow inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-yellow rounded-full inline-block msj-pulse" />
                    En reparto
                  </span>
                </div>
                <div className="space-y-2.5">
                  <ShipmentRow label="Plaza" value="Bogotá · entrega local" />
                  <ShipmentRow
                    label="SLA"
                    value={
                      <>
                        <span className="text-yellow">Cumpliendo</span> · 6 h
                      </>
                    }
                  />
                  <ShipmentRow label="Evidencia" value="Foto · firma · GPS" />
                  <ShipmentRow label="Notificaciones" value="Correo · WhatsApp · webhook" />

                  <div className="grid grid-cols-4 gap-1.5 pt-1">
                    {['Recolección', 'En ruta', 'Reparto'].map((step) => (
                      <div
                        key={step}
                        className="bg-ink border border-yellow px-2 py-1.5 text-center"
                      >
                        <div className="font-mono text-[8px] tracking-widest text-yellow">
                          {step}
                        </div>
                      </div>
                    ))}
                    <div className="bg-ink border border-white/10 px-2 py-1.5 text-center">
                      <div className="font-mono text-[8px] tracking-widest text-white/30">
                        Entregado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Nota inferior */}
        <div className="reveal mt-10 lg:mt-12 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
            Seleccione cualquier servicio para conocer el detalle operativo →
          </p>
        </div>
      </div>
    </section>
  )
}

// Subcomponente: fila del panel de envío
function ShipmentRow({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="bg-ink border border-white/10 px-3 py-2.5">
      <div className="font-mono text-[9px] uppercase tracking-widest text-white/40">
        {label}
      </div>
      <div className="text-[13px] font-bold text-white mt-0.5">{value}</div>
    </div>
  )
}
