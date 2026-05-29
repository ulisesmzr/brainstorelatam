'use client'

/**
 * Razones (Why us) · 6 cards en grid 3×2
 *
 * CORRECCIONES vs HTML v7:
 */

const RAZONES = [
  {
    num: '01',
    iconHref: '#i-shield',
    title: ['Un solo', 'proveedor.'],
    description:
      'Una sola orden, un solo contacto, una sola factura. Sin coordinar quince proveedores distintos para cada solicitud.',
  },
  {
    num: '02',
    iconHref: '#i-clock',
    title: ['Respuesta', 'en 24h.'],
    description:
      'Cotización formal con PDF profesional en menos de 24 horas hábiles. Sin demoras, sin trabas.',
  },
  {
    num: '03',
    iconHref: '#i-globe',
    title: ['Cobertura', 'regional real.'],
    description:
      '¿Necesidad de entregar en Bogotá, Lima o Buenos Aires este mes? Sin necesidad de abrir oficina allá.',
  },
  {
    num: '04',
    iconHref: '#i-bolt',
    title: ['Cumplimos', 'en licitación.'],
    description:
      'Documentación completa, RFC, garantías, fianzas y padrones. Listo para procesos formales de compra.',
  },
  {
    num: '05',
    iconHref: '#i-box',
    title: ['Catálogo', 'abierto.'],
    description:
      '+250 marcas distribuidas en 9 industrias. Si la solicitud no aparece en catálogo, se gestiona caso por caso.',
  },
  {
    num: '06',
    iconHref: '#i-currency',
    title: ['Factura', 'local.'],
    description:
      'CFDI México y facturación local en los principales países de Latinoamérica. Cumplimiento con áreas fiscales y de compras.',
  },
]

export default function Razones() {
  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-40 overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Encabezado */}
        <div className="reveal mb-12 lg:mb-24 max-w-4xl">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-3 lg:mb-4">
            / 04 — Why us
          </div>
          <h2 className="font-mega text-section text-ink">
            Seis razones por las que el equipo<br />
            de compras{' '}
            <span className="yellow-highlight">trabaja con un solo aliado.</span>
          </h2>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl">
            Diseñado para quien recibe tickets urgentes, gestiona presupuestos apretados y necesita
            resolver hoy lo que pidieron ayer.
          </p>
        </div>

        {/* Grid 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink">
          {RAZONES.map((r) => (
            <div
              key={r.num}
              className="reveal group bg-white p-6 sm:p-8 lg:p-10 hover:bg-yellow transition-colors duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5 lg:mb-6">
                {r.num}
              </div>
              <div className="icon-box w-12 h-12 mb-6 text-ink/30 group-hover:text-ink transition-colors flex items-center justify-center">
                <svg className="w-10 h-10">
                  <use href={r.iconHref} />
                </svg>
              </div>
              <h3 className="font-mega text-2xl lg:text-3xl text-ink mb-3 leading-tight">
                {r.title.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < r.title.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className="text-sm text-ink/60 group-hover:text-ink/80">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
