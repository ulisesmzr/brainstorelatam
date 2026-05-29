/**
 * Frame Arrendamiento — contrato con sello mega rotando "$0".
 * Composición única: documento legal con sello dramático.
 */
export default function ArrendamientoFrame() {
  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
      <div>
        <div className="contrato se-anim-in delay-1">
          <div className="contrato-mega-stamp">
            <div className="stamp-circle">
              <div className="stamp-text">$0</div>
              <div className="stamp-label">Garantía</div>
            </div>
          </div>

          <div className="contrato-header">
            <div className="contrato-title">Contrato de arrendamiento</div>
            <div className="contrato-folio">BSM-ARR-2026-02197</div>
          </div>

          <ContratoClausula
            num="I"
            label="Bien arrendado"
            value="4 vehículos utilitarios"
          />
          <ContratoClausula
            num="II"
            label="Garantía exigida al cliente"
            valueHighlight="Ninguna"
          />
          <ContratoClausula
            num="III"
            label="Depósito en efectivo"
            valueHighlight="No aplica"
          />
          <ContratoClausula
            num="IV"
            label="Tarjeta en prenda"
            valueHighlight="No requerida"
          />
          <ContratoClausula
            num="V"
            label="Plazo"
            value="Por proyecto · flexible"
          />
          <ContratoClausula
            num="VI"
            label="Facturación"
            value="A crédito · CFDI México"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm text-ink/60 mb-5 leading-relaxed">
          Acceso a los bienes que requiere arrendar bajo las condiciones que la operación
          exige. Sin requisitos imposibles que detengan la gestión.
        </p>
        <ul className="space-y-2.5 text-sm">
          <Bullet text="Sin garantías, sin depósitos, sin tarjetas en prenda" />
          <Bullet text="Plazos flexibles por proyecto o por operación" />
          <Bullet text="Facturación CFDI emitida en México" />
          <Bullet text="Servicio operado de extremo a extremo" />
        </ul>
      </div>
    </div>
  )
}

function ContratoClausula({
  num,
  label,
  value,
  valueHighlight,
}: {
  num: string
  label: string
  value?: string
  valueHighlight?: string
}) {
  return (
    <div className="contrato-clausula">
      <span className="contrato-clausula-num">Cláusula {num}</span>
      <div className="contrato-clausula-content">
        <div className="contrato-clausula-label">{label}</div>
        <div className={`contrato-clausula-value ${valueHighlight ? 'highlight' : ''}`}>
          {value ?? valueHighlight}
        </div>
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
