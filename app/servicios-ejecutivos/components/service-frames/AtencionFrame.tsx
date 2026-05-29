/**
 * Frame Atención — panel de operaciones en vivo.
 * Composición única: dashboard con canales activos + métricas + agentes.
 */
export default function AtencionFrame() {
  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
      <div>
        <div className="ops-panel se-anim-in delay-1">
          <div className="ops-panel-header">
            <div className="ops-live-indicator">
              <span className="ops-live-dot" />
              <span className="ops-live-label">En operación</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
              Centro de operación · marca del cliente
            </div>
          </div>

          {/* Canales */}
          <div className="ops-channels">
            <div className="ops-channel">
              <div className="ops-channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="ops-channel-name">Teléfono</div>
              <div className="ops-channel-count">147</div>
              <div className="ops-channel-status">Activos hoy</div>
            </div>
            <div className="ops-channel">
              <div className="ops-channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="ops-channel-name">Correo</div>
              <div className="ops-channel-count">312</div>
              <div className="ops-channel-status">Activos hoy</div>
            </div>
            <div className="ops-channel">
              <div className="ops-channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="ops-channel-name">Chat web</div>
              <div className="ops-channel-count">89</div>
              <div className="ops-channel-status">Activos hoy</div>
            </div>
          </div>

          {/* Métricas */}
          <div className="ops-metrics">
            <Metric label="Cumplimiento SLA" value="94%" widthPct={94} />
            <Metric label="Satisfacción CSAT" value="91%" widthPct={91} />
            <Metric label="Resolución primer contacto" value="78%" widthPct={78} />
          </div>

          {/* Agentes */}
          <div className="ops-agents-row">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mr-3">
              Agentes en línea
            </span>
            <div className="ops-agent-avatar">A</div>
            <div className="ops-agent-avatar">M</div>
            <div className="ops-agent-avatar">L</div>
            <div className="ops-agent-avatar">P</div>
            <div className="ops-agent-avatar muted">+8</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm text-ink/60 mb-5 leading-relaxed">
          Tercerice la atención digital o telefónica que su equipo no alcanza a cubrir.
          Operación profesional bajo su marca, con agentes capacitados, protocolos
          consensuados y reportería periódica de métricas de servicio.
        </p>
        <ul className="space-y-2.5 text-sm">
          <Bullet text="Multicanal: teléfono, correo, chat web, redes" />
          <Bullet text="Marca al frente, voz consistente al teléfono" />
          <Bullet text="Métricas SLA, CSAT y FCR periódicas" />
          <Bullet text="Protocolos consensuados con su equipo" />
        </ul>
      </div>
    </div>
  )
}

function Metric({ label, value, widthPct }: { label: string; value: string; widthPct: number }) {
  return (
    <div className="ops-metric-row">
      <div className="ops-metric-label">{label}</div>
      <div className="ops-metric-bar-container">
        <div className="ops-metric-bar-fill" style={{ width: `${widthPct}%` }} />
      </div>
      <div className="ops-metric-value">{value}</div>
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
