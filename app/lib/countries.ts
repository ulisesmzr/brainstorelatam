/**
 * Canon de cobertura geográfica de Brainstore.
 *
 * Esta es la única fuente de verdad de los 10 países donde opera Brainstore.
 * Cualquier componente que necesite la lista de países o sus capitales
 * debe importar desde aquí.
 *
 * Datos:
 *   - iso: código ISO 3166-1 numérico de 3 dígitos (para world-atlas TopoJSON)
 *   - code: código ISO 3166-1 alpha-2
 *   - name: nombre del país en español
 *   - cap: capital
 *   - lat, lon: coordenadas geográficas de la capital
 *   - size: factor visual para el tamaño del pin en el mapa
 */

export type Country = {
  iso: string
  code: 'MX' | 'GT' | 'CR' | 'PA' | 'DO' | 'CO' | 'EC' | 'PE' | 'CL' | 'AR'
  name: string
  cap: string
  lat: number
  lon: number
  size: number
}

export const COUNTRIES: Country[] = [
  { iso: '484', code: 'MX', name: 'México',              cap: 'Ciudad de México',     lat: 19.43,  lon: -99.13,  size: 1.0  },
  { iso: '320', code: 'GT', name: 'Guatemala',           cap: 'Ciudad de Guatemala',  lat: 14.63,  lon: -90.52,  size: 0.85 },
  { iso: '188', code: 'CR', name: 'Costa Rica',          cap: 'San José',             lat:  9.93,  lon: -84.08,  size: 0.85 },
  { iso: '591', code: 'PA', name: 'Panamá',              cap: 'Ciudad de Panamá',     lat:  8.98,  lon: -79.52,  size: 0.85 },
  { iso: '214', code: 'DO', name: 'República Dominicana', cap: 'Santo Domingo',       lat: 18.47,  lon: -69.90,  size: 0.85 },
  { iso: '170', code: 'CO', name: 'Colombia',            cap: 'Bogotá',               lat:  4.71,  lon: -74.08,  size: 1.0  },
  { iso: '218', code: 'EC', name: 'Ecuador',             cap: 'Quito',                lat: -0.18,  lon: -78.45,  size: 0.85 },
  { iso: '604', code: 'PE', name: 'Perú',                cap: 'Lima',                 lat: -12.05, lon: -77.04,  size: 1.0  },
  { iso: '152', code: 'CL', name: 'Chile',               cap: 'Santiago',             lat: -33.45, lon: -70.65,  size: 1.0  },
  { iso: '032', code: 'AR', name: 'Argentina',           cap: 'Buenos Aires',         lat: -34.60, lon: -58.38,  size: 1.0  },
]

/**
 * Set de códigos ISO numéricos de los 10 países activos (para el mapa D3).
 */
export const ACTIVE_ISOS: Set<string> = new Set(COUNTRIES.map((c) => c.iso))

/**
 * Set extendido con todos los países del continente americano (para
 * renderizar el mapa base aunque no estén activos para Brainstore).
 */
export const AMERICAS_ISOS: Set<string> = new Set([
  '124', '840', '484', '320', '084', '222', '340', '558', '188', '591',
  '192', '044', '388', '214', '332', '630', '780',
  '170', '862', '328', '740', '254', '218', '604', '076', '068', '600',
  '152', '032', '858', '238', '304',
])

/**
 * Orden norte→sur para dibujar las conexiones entre capitales.
 */
export const COUNTRY_ORDER: Country['code'][] = [
  'MX', 'GT', 'CR', 'PA', 'DO', 'CO', 'EC', 'PE', 'CL', 'AR',
]
