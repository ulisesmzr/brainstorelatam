'use client'

/**
 * Industries · marquee compacto · paridad 1:1 con HTML v7-final.
 * 9 chips alternando estilo, duplicados para loop continuo.
 */

type Variant = 'white-solid' | 'yellow-outline' | 'yellow-solid' | 'white-outline'

const INDUSTRIES: Array<{ name: string; variant: Variant }> = [
  { name: 'Tecnología',   variant: 'white-solid' },
  { name: 'Consumo',      variant: 'yellow-outline' },
  { name: 'Gobierno',     variant: 'yellow-solid' },
  { name: 'Farmacéutica', variant: 'yellow-outline' },
  { name: 'Retail',       variant: 'yellow-solid' },
  { name: 'Energía',      variant: 'white-outline' },
  { name: 'Logística',    variant: 'white-solid' },
  { name: 'Financiera',   variant: 'yellow-solid' },
  { name: 'Healthcare',   variant: 'yellow-outline' },
]

function chipClass(variant: Variant): string {
  const base =
    'inline-flex px-5 lg:px-6 py-2.5 lg:py-3 mx-2 font-display-bold text-base sm:text-lg lg:text-xl uppercase tracking-tight whitespace-nowrap'
  switch (variant) {
    case 'white-solid':    return `${base} bg-white text-ink`
    case 'yellow-outline': return `${base} border-2 border-yellow text-yellow`
    case 'yellow-solid':   return `${base} bg-yellow text-ink`
    case 'white-outline':  return `${base} border-2 border-white text-white`
  }
}

export default function Industries() {
  // Duplicar para loop sin saltos
  const items = [...INDUSTRIES, ...INDUSTRIES]

  return (
    <section className="relative bg-ink text-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 lg:mb-10">
        <div className="reveal grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-yellow mb-2 lg:mb-3">
              / 05 — Industries
            </div>
            <h2 className="font-mega text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Un solo aliado para <span className="text-yellow">9 industrias.</span>
            </h2>
          </div>
          <p className="text-white/70 text-sm lg:text-base max-w-md">
            Cubrir todas las categorías con un único proveedor regional.{' '}
            <span className="text-yellow font-display-bold">
              Sin coordinar quince contactos. Sin perseguir entregas.
            </span>{' '}
            Una orden, una factura, un responsable.
          </p>
        </div>
      </div>

      <div className="flex marquee whitespace-nowrap items-center">
        {items.map((ind, i) => (
          <span key={`${ind.name}-${i}`} className={chipClass(ind.variant)}>
            {ind.name}
          </span>
        ))}
      </div>
    </section>
  )
}
