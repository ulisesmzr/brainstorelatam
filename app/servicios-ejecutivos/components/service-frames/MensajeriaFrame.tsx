/**
 * Frame Mensajería Especializada Corporativa — expediente + ejemplo cross-border.
 * Composición única: expediente con timeline + tarjetas de flujo.
 */
export default function MensajeriaFrame() {
  return (
    <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8">
      {/* Izquierda: expediente formal del envío */}
      <div>
        <div className="expediente se-anim-in delay-1">
          <div className="expediente-stamp">En reparto</div>

          <div className="mb-5">
            <div className="font-mono text-[9px] uppercase tracking-widest text-ink/40 mb-1">
              Expediente · folio
            </div>
            <div className="font-display-bold text-xl text-ink">BSM-MSJ-2026-04812</div>
          </div>

          <div className="space-y-0 mb-5">
            <ExpRow label="Plaza de operación" value="Bogotá · entrega local" />
            <ExpRow label="Origen" value="Punto local A · Bogotá" />
            <ExpRow label="Destino" value="Punto local B · Bogotá" />
            <ExpRow label="SLA acordado" value={<span className="exp-value-y">Cumpliendo · 6 h</span>} />
            <ExpRow label="Evidencia" value="Foto · firma · geolocalización" />
            <ExpRow label="Notificaciones" value="Correo · WhatsApp · webhook" />
            <ExpRow label="Integración" value="Conexiones API · dashboard" />
            <ExpRow label="Facturación" value="CFDI emitido en México" />
          </div>

          <div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-3 pb-2 border-b border-ink/10">
              Flujo del envío
            </div>
            <div className="flex gap-1">
              <TLStep label="01" title="Recolección" state="done" />
              <TLStep label="02" title="En ruta" state="done" />
              <TLStep label="03" title="Reparto" state="current" />
              <TLStep label="04" title="Entregado" state="default" />
            </div>
          </div>
        </div>
      </div>

      {/* Derecha: narrativa + ejemplo */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-sm text-ink/60 leading-relaxed mb-4">
            Recolección, ruta y entrega de envíos corporativos con presencia local en
            cada plaza. La empresa contratante puede operar desde cualquier país de la
            red; el envío se ejecuta dentro del país de destino con personal y aliados
            locales.
          </p>
          <ul className="space-y-2.5 text-sm">
            <Bullet text="Operación con personal y red de aliados en cada plaza" />
            <Bullet text="Tracking en tiempo real con notificaciones automáticas" />
            <Bullet text="Evidencia documental: foto, firma y geolocalización con sello de tiempo" />
            <Bullet text="Conexiones API y dashboard por área, centro de costos o proyecto" />
          </ul>
        </div>

        <div className="border-t border-ink/10 pt-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">
            Ejemplo · contratante y operación en países distintos
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2">
            <FlowCard
              variant="light"
              label="Empresa contratante"
              value="CDMX · México"
              footer="Solicita el servicio"
            />
            <div className="flow-arrow flex-col gap-1 py-1">
              <span className="font-mono text-[8.5px] uppercase tracking-widest text-gold whitespace-nowrap">
                Mismo país de destino
              </span>
            </div>
            <FlowCard
              variant="dark"
              label="Operación local"
              value="Bogotá · Colombia"
              footer="Recolección y entrega"
            />
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 mt-2">
            <FlowCard
              variant="dark"
              label="Empresa contratante"
              value="Bogotá · Colombia"
              footer="Solicita el servicio"
            />
            <div className="flow-arrow flex-col gap-1 py-1">
              <span className="font-mono text-[8.5px] uppercase tracking-widest text-gold whitespace-nowrap">
                O al revés
              </span>
            </div>
            <FlowCard
              variant="light"
              label="Operación local"
              value="CDMX · México"
              footer="Recolección y entrega"
            />
          </div>

          <p className="text-[11px] text-ink/55 mt-3 leading-relaxed">
            El servicio se ejecuta dentro del país de destino con personal y aliados
            locales. La empresa contratante mantiene un único interlocutor, expediente
            formal y facturación CFDI emitida desde México.
          </p>
        </div>
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

function FlowCard({
  variant,
  label,
  value,
  footer,
}: {
  variant: 'light' | 'dark'
  label: string
  value: string
  footer: string
}) {
  const dark = variant === 'dark'
  return (
    <div className={`flow-card ${dark ? 'flow-card-dark' : ''}`}>
      <div className={`font-mono text-[8.5px] uppercase tracking-widest ${dark ? 'text-yellow' : 'text-ink/40'} mb-1`}>
        {label}
      </div>
      <div className={`font-display-bold text-base leading-tight ${dark ? '' : 'text-ink'}`}>
        {value}
      </div>
      <div className={`font-mono text-[9px] uppercase tracking-widest ${dark ? 'text-white/50' : 'text-ink/50'} mt-2`}>
        {footer}
      </div>
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
