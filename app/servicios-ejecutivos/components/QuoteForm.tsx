'use client'

import { useEffect, useState } from 'react'
import type { ServiceId } from '../client'
import { IconArrow, IconCheck } from '../lib/icons'

type Props = {
  isOpen: boolean
  onClose: () => void
  preselectedService: ServiceId | null
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const SERVICES_LIST: Array<{ id: ServiceId; label: string }> = [
  { id: 'logistica', label: 'Logística' },
  { id: 'arrendamiento', label: 'Arrendamiento' },
  { id: 'reservaciones', label: 'Reservaciones' },
  { id: 'atencion', label: 'Atención a clientes' },
  { id: 'mensajeria', label: 'Mensajería' },
]

const COUNTRIES_LIST = [
  { code: 'MX', name: 'México' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'PA', name: 'Panamá' },
  { code: 'DO', name: 'República Dominicana' },
  { code: 'CO', name: 'Colombia' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'PE', name: 'Perú' },
  { code: 'CL', name: 'Chile' },
  { code: 'AR', name: 'Argentina' },
]

const PLAZOS_LIST = [
  { value: 'urgente', label: 'Urgente' },
  { value: 'cuanto-antes', label: 'Cuanto antes' },
  { value: 'mes-corriente', label: 'Este mes' },
  { value: 'trimestre', label: 'Próximo trimestre' },
  { value: 'sin-plazo', label: 'Sin plazo definido' },
]

/**
 * Formulario AI-friendly de solicitud de cotización.
 *
 * - Marcado semántico para agentes AI:
 *   - <form data-ai-action="submit-service-request" itemscope itemtype="schema.org/Order">
 *   - Cada input con data-ai-field-purpose + itemprop
 *   - PropertyValueSpecification declarada en page.tsx JSON-LD
 *
 * - Envía a POST /api/cotizacion (endpoint Next.js)
 * - Pre-selecciona servicio si viene desde una card específica
 * - Folio simulado por ahora; el backend real lo asignará
 */
export default function QuoteForm({ isOpen, onClose, preselectedService }: Props) {
  const [state, setState] = useState<SubmitState>('idle')
  const [folio, setFolio] = useState<string>('')
  const [error, setError] = useState<string>('')

  // Sincronizar servicio preseleccionado cuando abre el modal
  const [serviceInterest, setServiceInterest] = useState<ServiceId | ''>('')
  useEffect(() => {
    if (isOpen && preselectedService) setServiceInterest(preselectedService)
  }, [isOpen, preselectedService])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setError('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get('name') || ''),
      cargo: String(fd.get('cargo') || ''),
      empresa: String(fd.get('empresa') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      country: String(fd.get('country') || ''),
      service_interest: String(fd.get('service_interest') || ''),
      plazo: String(fd.get('plazo') || ''),
      notas: String(fd.get('notas') || ''),
      ai_agent: String(fd.get('ai_agent') || ''),
      user_authorization: fd.get('user_authorization') === 'on',
      source_page: 'servicios-ejecutivos',
      timestamp: new Date().toISOString(),
    }

    try {
      const res = await fetch('/api/cotizacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(`Server error (${res.status})`)
      }

      const data = (await res.json()) as { folio?: string; status?: string }
      setFolio(data.folio || `BSM-SVE-${String(Math.floor(Math.random() * 90000) + 10000)}`)
      setState('success')

      // Analytics
      if (typeof (window as { brainstoreTrack?: (e: string, p: object) => void }).brainstoreTrack === 'function') {
        ;(window as { brainstoreTrack: (e: string, p: object) => void }).brainstoreTrack(
          'quote_submitted',
          { service: payload.service_interest, country: payload.country }
        )
      }
    } catch (err) {
      console.error('[QuoteForm] submit error:', err)
      setError('No se pudo enviar la solicitud. Intente nuevamente o contáctenos directamente.')
      setState('error')
    }
  }

  function handleClose() {
    // Reset estado al cerrar
    setTimeout(() => {
      setState('idle')
      setFolio('')
      setError('')
      setServiceInterest('')
    }, 300)
    onClose()
  }

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'active' : ''}`}
      onClick={handleClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`modal-container ${isOpen ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-form-title"
      >
        <div className="modal-panel">
          {/* Header */}
          <div className="modal-header">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">
                / Solicitud de servicio
              </div>
              <h3
                id="quote-form-title"
                className="font-mega text-2xl lg:text-3xl text-white leading-tight"
              >
                {state === 'success' ? 'Solicitud recibida' : 'Cuéntenos qué necesita'}
              </h3>
            </div>
            <button type="button" onClick={handleClose} className="modal-close" aria-label="Cerrar">
              ×
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {state !== 'success' ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-ai-action="submit-service-request"
                data-ai-form-id="quote-request"
                data-ai-method="POST"
                data-ai-endpoint="/api/cotizacion"
                data-ai-content-type="application/json"
                data-ai-authorization-required="explicit-user-approval"
                itemScope
                itemType="https://schema.org/Order"
              >
                {/* Grid responsive */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Nombre completo"
                    name="name"
                    required
                    aiPurpose="full-name"
                    itemProp="customer"
                  />
                  <Field
                    label="Cargo"
                    name="cargo"
                    aiPurpose="job-title"
                  />
                  <Field
                    label="Empresa"
                    name="empresa"
                    required
                    aiPurpose="organization-name"
                    itemProp="seller"
                  />
                  <Field
                    label="Correo corporativo"
                    name="email"
                    type="email"
                    required
                    aiPurpose="email"
                    itemProp="customerEmail"
                    placeholder="nombre@empresa.com"
                  />
                  <Field
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    required
                    aiPurpose="phone-number"
                    placeholder="+52 55 0000 0000"
                  />

                  {/* Country select */}
                  <div>
                    <label className="modal-field-label" htmlFor="country">
                      País del servicio
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      data-ai-field-purpose="country-iso"
                      itemProp="orderedItem"
                      className="modal-field"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleccione un país
                      </option>
                      {COUNTRIES_LIST.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Servicio de interés — chips */}
                <fieldset>
                  <legend className="modal-field-label-num">Servicio de interés</legend>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {SERVICES_LIST.map((s) => (
                      <label
                        key={s.id}
                        className={`modal-chip ${serviceInterest === s.id ? 'checked' : ''}`}
                      >
                        <input
                          type="radio"
                          name="service_interest"
                          value={s.id}
                          required
                          data-ai-field-purpose="service-id"
                          checked={serviceInterest === s.id}
                          onChange={() => setServiceInterest(s.id)}
                        />
                        <span className="modal-chip-dot" />
                        {s.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Plazo */}
                <div>
                  <label className="modal-field-label" htmlFor="plazo">
                    Plazo deseado
                  </label>
                  <select
                    id="plazo"
                    name="plazo"
                    required
                    data-ai-field-purpose="deadline"
                    className="modal-field"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione plazo
                    </option>
                    {PLAZOS_LIST.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notas */}
                <div>
                  <label className="modal-field-label" htmlFor="notas">
                    Detalle del caso (opcional)
                  </label>
                  <textarea
                    id="notas"
                    name="notas"
                    rows={4}
                    data-ai-field-purpose="case-description"
                    className="modal-field"
                    placeholder="Descripción de la operación que requiere"
                  />
                </div>

                {/* Campo invisible para identificación de agente AI */}
                <input
                  type="hidden"
                  name="ai_agent"
                  data-ai-field-purpose="agent-identifier"
                  value=""
                  readOnly
                />

                {/* Autorización (visible para agentes AI; opcional para humanos) */}
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="user_authorization"
                    data-ai-field-purpose="user-authorization"
                    className="mt-1 accent-yellow"
                    required
                  />
                  <span className="text-sm text-ink/70 leading-relaxed">
                    Confirmo que autorizo el envío de esta solicitud y que un ejecutivo
                    de cuenta de Brainstore me contacte para conocer el caso a detalle.
                  </span>
                </label>

                {error && (
                  <div className="bg-ink text-yellow p-3 text-sm font-mono">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="modal-submit"
                >
                  {state === 'submitting' ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar solicitud
                      <IconArrow className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <SuccessView folio={folio} onClose={handleClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Subcomponentes
// ============================================================================

function Field({
  label,
  name,
  type = 'text',
  required = false,
  aiPurpose,
  itemProp,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  aiPurpose?: string
  itemProp?: string
  placeholder?: string
}) {
  return (
    <div>
      <label className="modal-field-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        data-ai-field-purpose={aiPurpose}
        itemProp={itemProp}
        className="modal-field"
        placeholder={placeholder}
      />
    </div>
  )
}

function SuccessView({ folio, onClose }: { folio: string; onClose: () => void }) {
  return (
    <div className="text-center py-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow text-ink rounded-full mb-5">
        <IconCheck className="w-8 h-8" />
      </div>
      <h4 className="font-mega text-2xl text-ink mb-3">Solicitud recibida</h4>
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-2">
        Folio asignado
      </div>
      <div className="font-display-bold text-xl text-ink mb-6">{folio}</div>
      <p className="text-sm text-ink/70 max-w-md mx-auto mb-8 leading-relaxed">
        Un ejecutivo de cuenta le contactará en las próximas 24 horas hábiles para
        conocer el caso a detalle y enviar una propuesta formal.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex items-center gap-2 h-12 px-6 bg-ink text-yellow hover:bg-charcoal text-sm font-bold transition-all"
      >
        Cerrar y volver
      </button>
    </div>
  )
}
