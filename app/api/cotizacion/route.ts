/**
 * POST /api/cotizacion
 *
 * Endpoint para recibir solicitudes de cotización del modal del home.
 * Corre en Cloudflare Workers con Node.js runtime (vía OpenNext).
 *
 * FASE 2 (pendiente):
 *   - Persistir en Cloudflare D1 (binding: DB)
 *   - Enviar correo vía Resend
 *   - Webhook a Slack
 */

import { NextResponse } from 'next/server'

const VALID_COUNTRIES = ['MX', 'GT', 'CR', 'PA', 'DO', 'CO', 'EC', 'PE', 'CL', 'AR', 'OTRO']
const VALID_LINES = [
  'suministros', 'servicios', 'plataformas-ai', 'licitacion',
  'operacion-mexico', 'operacion-latam', 'no-seguro',
]

type Payload = {
  name?: string
  role?: string
  company?: string
  url?: string
  email?: string
  phone?: string
  country?: string
  lines?: string[]
  description?: string
  source?: string
}

function generateFolio(source = 'home'): string {
  const year = new Date().getFullYear()
  const random = String(Math.floor(Math.random() * 99999)).padStart(5, '0')
  const tag = source.toUpperCase().slice(0, 4)
  return `BSM-${tag}-${year}-${random}`
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  let body: Payload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const errors: string[] = []
  if (!body.name?.trim()) errors.push('name')
  if (!body.company?.trim()) errors.push('company')
  if (!body.email?.trim() || !validateEmail(body.email)) errors.push('email')
  if (!body.phone?.trim()) errors.push('phone')
  if (!body.description?.trim()) errors.push('description')
  if (body.country && !VALID_COUNTRIES.includes(body.country)) errors.push('country')

  if (errors.length) {
    return NextResponse.json(
      { ok: false, error: 'validation_failed', fields: errors },
      { status: 400 }
    )
  }

  const lines = (body.lines || []).filter((l) => VALID_LINES.includes(l))
  const folio = generateFolio(body.source || 'home')
  const receivedAt = new Date().toISOString()

  // TODO FASE 2:
  //   - Persistir en D1: await env.DB.prepare(...).bind(...).run()
  //   - Enviar email vía Resend
  console.log('[cotizacion]', { folio, received_at: receivedAt, ...body, lines })

  return NextResponse.json({
    ok: true,
    folio,
    received_at: receivedAt,
    message: 'Solicitud recibida. Respuesta en menos de 24 horas hábiles.',
  })
}

export async function GET() {
  return NextResponse.json({
    endpoint: 'POST /api/cotizacion',
    description: 'Recibe solicitudes de cotización del home de Brainstore.',
    valid_countries: VALID_COUNTRIES,
    valid_lines: VALID_LINES,
    required_fields: ['name', 'company', 'email', 'phone', 'description'],
    contact: {
      email: 'team-bsm@brainstore.com.mx',
      whatsapp: '+52-55-6506-7332',
    },
  })
}
