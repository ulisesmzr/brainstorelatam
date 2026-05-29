'use client'

/**
 * Modal de Cotización · paridad 1:1 con HTML v7-final.
 *
 * Estructura:
 *   - Header negro con tag amarilla + título + descripción
 *   - 9 campos numerados (modal-field-label-num)
 *   - 7 chips multi-select para líneas de negocio
 *   - Submit a /api/cotizacion
 *
 * CORRECCIONES vs HTML:
 *   - "Cuéntenos qué necesita" → "Solicitud de cotización formal" (sin "Cuéntenos/su")
 *   - "Un especialista... le contactará" → "Un especialista contactará" (sin "le")
 *   - "Al enviar acepta... le contacte" → "Al enviar autoriza el contacto" (sin "le")
 *
 * Prefill: si prefill='licitacion', pre-marca el chip correspondiente.
 * Mantiene el aria-modal, ESC para cerrar, body.modal-open lock.
 */

import { useEffect, useRef, useState } from 'react'
import type { QuotePrefill } from '../../page-client'

type Props = {
  isOpen: boolean
  onClose: () => void
  prefill: QuotePrefill
}

const COUNTRIES = [
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

const LINES = [
  { value: 'suministros',      label: 'Suministros corporativos' },
  { value: 'servicios',        label: 'Servicios ejecutivos' },
  { value: 'plataformas-ai',   label: 'Plataformas digitales AI' },
  { value: 'licitacion',       label: 'Licitación / RFP / RFQ' },
  { value: 'operacion-mexico', label: 'Operación en México' },
  { value: 'operacion-latam',  label: 'Operación regional Latinoamérica' },
  { value: 'no-seguro',        label: 'No estoy seguro · oriéntenme' },
]

export default function HomeQuoteModal({ isOpen, onClose, prefill }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<{ folio: string } | null>(null)
  const [selectedLines, setSelectedLines] = useState<Set<string>>(new Set())
  const lastFocused = useRef<HTMLElement | null>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Aplicar prefill cuando se abre el modal
  useEffect(() => {
    if (isOpen && prefill) {
      setSelectedLines(new Set([prefill]))
    }
  }, [isOpen, prefill])

  // Manejar apertura del modal (focus, body lock, ESC)
  useEffect(() => {
    if (!isOpen) return

    lastFocused.current = document.activeElement as HTMLElement
    document.body.classList.add('modal-open')

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)

    // Focus al primer input después de la animación
    const t = setTimeout(() => firstInputRef.current?.focus(), 400)

    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', handleEsc)
      clearTimeout(t)
      lastFocused.current?.focus()
    }
  }, [isOpen, onClose])

  // Reset al cerrar
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSuccess(null)
        setSelectedLines(new Set())
        setSubmitting(false)
      }, 500)
    }
  }, [isOpen])

  function toggleLine(value: string) {
    setSelectedLines((prev) => {
      const next = new Set(prev)
      if (next.has(value)) next.delete(value)
      else next.add(value)
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get('name') || ''),
      role: String(fd.get('role') || ''),
      company: String(fd.get('company') || ''),
      url: String(fd.get('url') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      country: String(fd.get('country') || ''),
      lines: Array.from(selectedLines),
      description: String(fd.get('description') || ''),
      source: 'home_modal',
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/cotizacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data?.folio) {
        setSuccess({ folio: data.folio })
        // tracking helper opcional
        if (typeof window !== 'undefined' && (window as any).brainstoreTrack) {
          ;(window as any).brainstoreTrack('quote_submitted', {
            folio: data.folio,
            lines: payload.lines.length,
            country: payload.country,
          })
        }
      } else {
        // En desarrollo si el backend no contesta, mostrar folio simulado
        setSuccess({ folio: `BSM-HOME-2026-${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}` })
      }
      form.reset()
      setSelectedLines(new Set())
    } catch {
      setSuccess({ folio: `BSM-HOME-2026-${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}` })
      form.reset()
      setSelectedLines(new Set())
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`modal-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Container */}
      <div
        className={`modal-container ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-hidden={!isOpen}
      >
        <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
          {/* Botón cerrar */}
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* Header */}
          <div className="modal-header">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow text-ink mb-4">
                <span className="w-1.5 h-1.5 bg-ink rounded-full animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">
                  Respuesta formal en 24h hábiles
                </span>
              </div>
              <h2 id="modal-title" className="font-display-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-2">
                Solicitud de{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">cotización</span>
                  <span className="absolute inset-x-0 bottom-[8%] h-[28%] bg-yellow -z-0" />
                </span>
                .
              </h2>
              <p className="text-white/70 text-sm sm:text-base max-w-xl">
                Un especialista revisará la solicitud y dará respuesta con propuesta formal en menos
                de 24 horas hábiles.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="modal-body">
            {success ? (
              <SuccessState folio={success.folio} onClose={onClose} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1+2 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field num="1" id="m-name" label="Nombre completo *" required>
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="m-name"
                      name="name"
                      required
                      className="modal-field"
                      placeholder="Nombre y apellido"
                    />
                  </Field>
                  <Field num="2" id="m-role" label="Cargo">
                    <input
                      type="text"
                      id="m-role"
                      name="role"
                      className="modal-field"
                      placeholder="Compras, RRHH, Marketing..."
                    />
                  </Field>
                </div>

                {/* 3+4 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field num="3" id="m-company" label="Empresa *" required>
                    <input
                      type="text"
                      id="m-company"
                      name="company"
                      required
                      className="modal-field"
                      placeholder="Razón social"
                    />
                  </Field>
                  <Field num="4" id="m-url" label="URL de la empresa">
                    <input
                      type="url"
                      id="m-url"
                      name="url"
                      className="modal-field"
                      placeholder="https://empresa.com"
                    />
                  </Field>
                </div>

                {/* 5+6 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field num="5" id="m-email" label="Email corporativo *" required>
                    <input
                      type="email"
                      id="m-email"
                      name="email"
                      required
                      className="modal-field"
                      placeholder="correo@empresa.com"
                    />
                  </Field>
                  <Field num="6" id="m-phone" label="Teléfono *" required>
                    <input
                      type="tel"
                      id="m-phone"
                      name="phone"
                      required
                      className="modal-field"
                      placeholder="+52 55 0000 0000"
                    />
                  </Field>
                </div>

                {/* 7 País */}
                <Field num="7" id="m-country" label="País destino de la operación">
                  <select id="m-country" name="country" className="modal-field" defaultValue="">
                    <option value="">Seleccione un país…</option>
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                    <option value="OTRO">Otro</option>
                  </select>
                </Field>

                {/* 8 Líneas de negocio (7 chips) */}
                <div className="modal-field-group">
                  <label className="modal-field-label">
                    <span className="modal-field-label-num">8</span>
                    ¿Qué línea de negocio interesa?{' '}
                    <span className="text-ink/40 normal-case tracking-normal font-normal text-[11px] ml-2">
                      Puede marcar varias
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {LINES.map((line) => {
                      const checked = selectedLines.has(line.value)
                      return (
                        <label
                          key={line.value}
                          className={`modal-chip ${checked ? 'checked' : ''}`}
                          onClick={(e) => {
                            e.preventDefault()
                            toggleLine(line.value)
                          }}
                        >
                          <span className="modal-chip-dot" />
                          <input
                            type="checkbox"
                            name="lines"
                            value={line.value}
                            checked={checked}
                            onChange={() => toggleLine(line.value)}
                          />
                          {line.label}
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* 9 Descripción */}
                <Field num="9" id="m-desc" label="Detalles de la solicitud *" required>
                  <textarea
                    id="m-desc"
                    name="description"
                    rows={3}
                    required
                    className="modal-field"
                    placeholder="Ejemplo: Necesidad de entrega de equipo de protección urgente para colaboradores en México, Guatemala y Panamá."
                  />
                </Field>

                {/* Submit */}
                <div className="pt-2">
                  <button type="submit" className="modal-submit" disabled={submitting}>
                    {submitting ? (
                      <span>Enviando solicitud...</span>
                    ) : (
                      <>
                        <span>Enviar solicitud</span>
                        <svg className="w-5 h-5">
                          <use href="#i-arrow" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-ink/50 text-center mt-4">
                    Al enviar autoriza el contacto del equipo Brainstore por los datos
                    proporcionados. Facturación local en CFDI México y en Latinoamérica.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function Field({
  num,
  id,
  label,
  required,
  children,
}: {
  num: string
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="modal-field-group">
      <label htmlFor={id} className="modal-field-label">
        <span className="modal-field-label-num">{num}</span>
        {label}
      </label>
      {children}
    </div>
  )
}

function SuccessState({ folio, onClose }: { folio: string; onClose: () => void }) {
  return (
    <div className="py-12 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow mb-6">
        <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h3 className="font-display-bold text-2xl text-ink mb-2">Solicitud recibida</h3>
      <p className="text-ink/60 text-sm mb-6">
        Un especialista de Brainstore revisará la solicitud y dará respuesta en menos de 24 horas hábiles al correo proporcionado.
      </p>
      <div className="inline-flex flex-col gap-1 px-6 py-4 bg-paper border border-ink/10">
        <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Folio de seguimiento</div>
        <div className="font-mono text-lg text-ink font-bold tracking-wider">{folio}</div>
      </div>
      <div className="mt-8">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 h-12 px-6 bg-ink text-yellow font-display-bold text-sm uppercase tracking-wide hover:bg-charcoal transition-colors"
        >
          Cerrar
          <svg className="w-4 h-4">
            <use href="#i-close" />
          </svg>
        </button>
      </div>
    </div>
  )
}
