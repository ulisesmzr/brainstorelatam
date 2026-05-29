'use client'

import type { ServiceId } from '../client'
import { IconArrow } from '../lib/icons'
import LogisticaFrame from './service-frames/LogisticaFrame'
import ArrendamientoFrame from './service-frames/ArrendamientoFrame'
import ReservacionesFrame from './service-frames/ReservacionesFrame'
import AtencionFrame from './service-frames/AtencionFrame'
import MensajeriaFrame from './service-frames/MensajeriaFrame'

type Props = {
  serviceId: ServiceId | null
  onClose: () => void
  onRequestQuote: (service?: ServiceId) => void
}

// Metadata de cada servicio para el header del modal
const META: Record<ServiceId, { num: string; title: string }> = {
  logistica: { num: '01 / Servicio', title: 'Logística y almacenamiento' },
  arrendamiento: { num: '02 / Servicio', title: 'Arrendamiento fácil' },
  reservaciones: { num: '03 / Servicio', title: 'Viajes y hospedaje' },
  atencion: { num: '04 / Servicio', title: 'Atención a clientes' },
  mensajeria: { num: '05 / Servicio', title: 'Mensajería especializada corporativa' },
}

/**
 * Modal de detalle de servicio.
 * - Renderiza siempre el contenedor; activa con clase .active según prop
 * - Cada servicio tiene su propio frame visual único (composición distintiva)
 * - CTA primario "Solicitar este servicio" abre el QuoteForm con preselección
 */
export default function ServiceModal({ serviceId, onClose, onRequestQuote }: Props) {
  const isActive = serviceId !== null
  const meta = serviceId ? META[serviceId] : null

  return (
    <div
      className={`se-modal-backdrop ${isActive ? 'active' : ''}`}
      onClick={onClose}
      aria-hidden={!isActive}
    >
      <div
        className={`se-modal-container ${isActive ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="se-modal-title"
      >
        <div className="se-modal-panel">
          {/* Header */}
          <div className="se-modal-header">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">
                {meta?.num ?? ''}
              </div>
              <h3
                id="se-modal-title"
                className="font-mega text-2xl lg:text-3xl text-white leading-tight"
              >
                {meta?.title ?? ''}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="se-modal-close"
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>

          {/* Body con frame por servicio */}
          <div className="se-modal-body">
            {serviceId === 'logistica' && <LogisticaFrame />}
            {serviceId === 'arrendamiento' && <ArrendamientoFrame />}
            {serviceId === 'reservaciones' && <ReservacionesFrame />}
            {serviceId === 'atencion' && <AtencionFrame />}
            {serviceId === 'mensajeria' && <MensajeriaFrame />}

            {/* CTAs inferiores comunes */}
            <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => serviceId && onRequestQuote(serviceId)}
                className="group inline-flex items-center gap-2 h-12 px-6 bg-ink text-yellow hover:bg-charcoal text-sm font-bold transition-all"
              >
                <span>Solicitar este servicio</span>
                <IconArrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 h-12 px-6 border border-ink/15 text-ink hover:bg-ink/5 text-sm font-bold transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
