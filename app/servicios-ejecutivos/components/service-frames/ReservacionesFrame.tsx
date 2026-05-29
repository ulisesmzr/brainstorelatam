/**
 * Frame Reservaciones — boarding pass MEX → BOG.
 * Composición única: pase de abordar con código IATA.
 */
export default function ReservacionesFrame() {
  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
      <div>
        <div className="boarding-pass se-anim-in delay-1">
          {/* Main */}
          <div className="bp-main">
            <div className="bp-airline">
              <span className="bp-airline-logo">BSM</span>
              <span className="bp-flight-num">VIAJE EJECUTIVO · BSM-VJE-2026-00531</span>
            </div>

            <div className="bp-route">
              <div className="bp-city">
                <div className="bp-city-code">MEX</div>
                <div className="bp-city-name">Ciudad de México</div>
              </div>
              <div className="bp-arrow">
                <div className="bp-arrow-line" />
                <div className="bp-plane">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M2.5 19h19v2h-19v-2zM22.07 9.64a1.5 1.5 0 0 0-1.83-1.06l-5.31 1.42-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.83 3.17.72 1.25 1.56-.42 5.92-1.59 5.16-1.38L21 11.46c.8-.21 1.28-1.02 1.07-1.82z"/>
                  </svg>
                </div>
              </div>
              <div className="bp-city">
                <div className="bp-city-code">BOG</div>
                <div className="bp-city-name">Bogotá</div>
              </div>
            </div>

            <div className="bp-info-grid">
              <div className="bp-info-item">
                <div className="bp-info-label">Pasajero</div>
                <div className="bp-info-value">Asignado por la empresa</div>
              </div>
              <div className="bp-info-item">
                <div className="bp-info-label">Hospedaje</div>
                <div className="bp-info-value">4 noches · categoría premium</div>
              </div>
              <div className="bp-info-item">
                <div className="bp-info-label">Anticipo del viajero</div>
                <div className="bp-info-value">No requerido</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="bp-divider" />

          {/* Stub */}
          <div className="bp-stub">
            <div className="bp-stub-text">
              <div className="bp-stub-label">Facturación</div>
              <div className="bp-stub-value">Única · al cierre</div>
            </div>
            <div className="bp-barcode">
              <div className="bp-barcode-num">BSM-VJE-00531</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm text-ink/60 mb-5 leading-relaxed">
          Gestión integral de reservaciones nacionales e internacionales para ejecutivos.
          Vuelos, hospedaje y coordinación de itinerario sin que el viajero realice pagos
          personales ni anticipos.
        </p>
        <ul className="space-y-2.5 text-sm">
          <Bullet text="Vuelos, hospedaje e itinerarios coordinados" />
          <Bullet text="Facturación única al cierre del viaje" />
          <Bullet text="La empresa cubre, el viajero no adelanta" />
          <Bullet text="Cobertura nacional e internacional" />
        </ul>
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
