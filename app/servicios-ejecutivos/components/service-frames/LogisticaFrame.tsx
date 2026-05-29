/**
 * Frame Logística — expediente formal con sello "En ruta" + timeline 4 pasos.
 * Composición única: documento de operación.
 */
export default function LogisticaFrame() {
  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
      <div>
        <div className="expediente se-anim-in delay-1">
          <div className="expediente-stamp">En ruta</div>

          <div className="mb-5">
            <div className="font-mono text-[9px] uppercase tracking-widest text-ink/40 mb-1">
              Expediente · folio
            </div>
            <div className="font-display-bold text-xl text-ink">BSM-LOG-2026-00148</div>
          </div>

          <div className="space-y-0 mb-5">
            <ExpRow label="Servicio" value="Logística internacional" />
            <ExpRow label="Referencia interna" value="LOG-MX-LAT" />
            <ExpRow label="Cobertura" value="México y Latinoamérica" />
            <ExpRow
              label="Modalidad"
              value={<>Door-to-door <span className="text-ink/50">nacional e internacional</span></>}
            />
            <ExpRow label="Infraestructura" value="Sin costo para el cliente" />
            <ExpRow label="Altas de proveedor" value="No aplican" />
            <ExpRow label="Facturación" value="CFDI emitido en México" />
            <ExpRow label="Supervisión" value={<span className="exp-value-y">Ejecutivo asignado</span>} />
          </div>

          <div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-3 pb-2 border-b border-ink/10">
              Flujo operativo
            </div>
            <div className="flex gap-1">
              <TLStep label="01" title="Recolección" state="done" />
              <TLStep label="02" title="Almacenaje" state="done" />
              <TLStep label="03" title="Distribución" state="current" />
              <TLStep label="04" title="Entrega" state="default" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm text-ink/60 mb-5 leading-relaxed">
          Recolección, almacenamiento, distribución y entrega final puerta a puerta.
          Operación como área logística externa, sin necesidad de abrir bodegas,
          contratar personal o sumar proveedores locales en cada plaza.
        </p>
        <ul className="space-y-2.5 text-sm">
          <Bullet text="Cobertura operativa en México y Latinoamérica" />
          <Bullet text="Facturación CFDI emitida desde México" />
          <Bullet text="Ejecutivo de cuenta dedicado por operación" />
          <Bullet text="Trazabilidad por folio, con respaldo documental" />
        </ul>
      </div>
    </div>
  )
}

function ExpRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="exp-row">
      <span className="exp-label">{label}</span>
      <span className="exp-value">{value}</span>
    </div>
  )
}

function TLStep({ label, title, state }: { label: string; title: string; state: 'done' | 'current' | 'default' }) {
  const cls = state === 'done' ? 'done' : state === 'current' ? 'current' : ''
  return (
    <div className={`timeline-step ${cls}`}>
      <div className="timeline-label">{label}</div>
      <div className="timeline-title">{title}</div>
    </div>
  )
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="w-1.5 h-1.5 bg-yellow rounded-full mt-2 flex-shrink-0" />
      <span className="text-ink/80">{text}</span>
    </li>
  )
}
