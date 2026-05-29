'use client'

/**
 * Mapa Latinoamérica · paridad 1:1 con HTML v7-final.
 *
 * Carga D3 + topojson-client + world-atlas vía CDN (lazy, después del mount).
 * Renderiza:
 *   - 10 países activos (MX, GT, CR, PA, DO, CO, EC, PE, CL, AR)
 *   - Conexiones curvas entre capitales (norte → sur)
 *   - Pines con radar pulsante en cada capital
 *   - Tooltip flotante al hover/focus
 *
 * Centro de proyección: [-78, -10], scale 320, viewBox 520x620
 */

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    d3: any
    topojson: any
  }
}

const COUNTRIES = [
  { iso: '484', code: 'MX', name: 'México',               cap: 'Ciudad de México',   lat: 19.43,  lon: -99.13, size: 1.0 },
  { iso: '320', code: 'GT', name: 'Guatemala',            cap: 'Ciudad de Guatemala', lat: 14.63,  lon: -90.52, size: 0.85 },
  { iso: '188', code: 'CR', name: 'Costa Rica',           cap: 'San José',           lat: 9.93,   lon: -84.08, size: 0.85 },
  { iso: '591', code: 'PA', name: 'Panamá',               cap: 'Ciudad de Panamá',   lat: 8.98,   lon: -79.52, size: 0.85 },
  { iso: '214', code: 'DO', name: 'República Dominicana', cap: 'Santo Domingo',      lat: 18.47,  lon: -69.90, size: 0.85 },
  { iso: '170', code: 'CO', name: 'Colombia',             cap: 'Bogotá',             lat: 4.71,   lon: -74.08, size: 1.0 },
  { iso: '218', code: 'EC', name: 'Ecuador',              cap: 'Quito',              lat: -0.18,  lon: -78.45, size: 0.85 },
  { iso: '604', code: 'PE', name: 'Perú',                 cap: 'Lima',               lat: -12.05, lon: -77.04, size: 1.0 },
  { iso: '152', code: 'CL', name: 'Chile',                cap: 'Santiago',           lat: -33.45, lon: -70.65, size: 1.0 },
  { iso: '032', code: 'AR', name: 'Argentina',            cap: 'Buenos Aires',       lat: -34.60, lon: -58.38, size: 1.0 },
]

const ACTIVE_ISOS = new Set(COUNTRIES.map((c) => c.iso))

const AMERICAS = new Set([
  '124', '840', '484', '320', '084', '222', '340', '558', '188', '591',
  '192', '044', '388', '214', '332', '630', '780',
  '170', '862', '328', '740', '254', '218', '604', '076', '068', '600',
  '152', '032', '858', '238', '304',
])

export default function HeroMap() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    const loadScript = (src: string) =>
      new Promise<void>((res, rej) => {
        if (document.querySelector(`script[src="${src}"]`)) return res()
        const s = document.createElement('script')
        s.src = src
        s.onload = () => res()
        s.onerror = () => rej(new Error(`Failed to load ${src}`))
        document.head.appendChild(s)
      })

    Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/d3@7'),
      loadScript('https://cdn.jsdelivr.net/npm/topojson-client@3'),
    ])
      .then(() => fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((r) => r.json()))
      .then((world: any) => {
        const { d3, topojson } = window
        const countriesData = topojson.feature(world, world.objects.countries).features

        const W = 520
        const H = 620

        const projection = d3
          .geoMercator()
          .center([-78, -10])
          .scale(320)
          .translate([W / 2, H / 2 - 20])

        const pathGen = d3.geoPath().projection(projection)

        const gCountries = document.getElementById('heroMapCountries')
        const gPins = document.getElementById('heroMapPins')
        if (!gCountries || !gPins) return

        // Países (siluetas) - solo Americas; activos para los 10 ISOs
        countriesData.forEach((feat: any) => {
          const rawId = String(feat.id)
          const iso = rawId.padStart(3, '0')
          if (!AMERICAS.has(iso) && !AMERICAS.has(rawId)) return
          const d = pathGen(feat)
          if (!d) return
          const el = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          el.setAttribute('d', d)
          el.setAttribute(
            'class',
            'map-country' + (ACTIVE_ISOS.has(iso) || ACTIVE_ISOS.has(rawId) ? ' active' : '')
          )
          el.setAttribute('data-iso', iso)
          gCountries.appendChild(el)
        })

        // Conexiones curvas entre capitales (norte → sur)
        const order = ['MX', 'GT', 'CR', 'PA', 'DO', 'CO', 'EC', 'PE', 'CL', 'AR']
        for (let i = 0; i < order.length - 1; i++) {
          const a = COUNTRIES.find((c) => c.code === order[i])!
          const b = COUNTRIES.find((c) => c.code === order[i + 1])!
          const [ax, ay] = projection([a.lon, a.lat])
          const [bx, by] = projection([b.lon, b.lat])
          const mx = (ax + bx) / 2 + (bx > ax ? 6 : -6)
          const my = (ay + by) / 2 - 4
          const ln = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          ln.setAttribute(
            'd',
            `M ${ax.toFixed(1)},${ay.toFixed(1)} Q ${mx.toFixed(1)},${my.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}`
          )
          ln.setAttribute('class', 'map-connection')
          gPins.appendChild(ln)
        }

        // Pins con radar
        COUNTRIES.forEach((country) => {
          const [x, y] = projection([country.lon, country.lat])
          const r = 6 * country.size
          const rCore = 2.4 * country.size
          const glowR = 22 * country.size

          const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
          g.setAttribute('class', 'pin-group')
          g.setAttribute('data-name', country.name)
          g.setAttribute('data-capital', country.cap)
          g.setAttribute('data-iso', country.iso)
          g.setAttribute('tabindex', '0')
          g.innerHTML = `
            <circle class="pin-glow" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${glowR}" fill="url(#heroPinGlowGrad)"/>
            <circle class="radar-ring radar-ring-1" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4"/>
            <circle class="radar-ring radar-ring-2" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4"/>
            <circle class="radar-ring radar-ring-3" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4"/>
            <circle class="pin-outer" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"/>
            <circle class="pin-inner" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rCore}"/>
          `
          gPins.appendChild(g)
        })

        // Tooltips
        const tooltip = document.getElementById('heroPinTooltip')
        const ttSmall = document.getElementById('heroTtSmall')
        const ttName = document.getElementById('heroTtName')
        const wrap = document.getElementById('heroMapWrap')

        if (!tooltip || !wrap) return

        gPins.querySelectorAll('.pin-group').forEach((pin) => {
          const el = pin as SVGElement
          const name = el.getAttribute('data-name') || ''
          const cap = el.getAttribute('data-capital') || ''
          const iso = el.getAttribute('data-iso') || ''
          const country = gCountries.querySelector(`[data-iso="${iso}"]`)
          const show = () => {
            const rect = el.getBoundingClientRect()
            const wRect = wrap.getBoundingClientRect()
            tooltip.style.left = `${rect.left - wRect.left + rect.width / 2}px`
            tooltip.style.top = `${rect.top - wRect.top}px`
            if (ttSmall) ttSmall.textContent = cap
            if (ttName) ttName.textContent = name
            tooltip.classList.add('show')
            country?.classList.add('pin-hover')
          }
          const hide = () => {
            tooltip.classList.remove('show')
            country?.classList.remove('pin-hover')
          }
          el.addEventListener('mouseenter', show)
          el.addEventListener('mouseleave', hide)
          el.addEventListener('focus', show)
          el.addEventListener('blur', hide)
        })
      })
      .catch((err) => console.error('[HeroMap] Error:', err))
  }, [])

  return (
    <div className="hero-map-card">
      {/* Header del card */}
      <div className="hero-map-header">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-yellow mb-1">
            Operating · live
          </div>
          <div className="flex items-baseline gap-2">
            <div className="counter-num font-display-bold text-3xl text-ink leading-none" data-counter="10">
              0
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
              países conectados
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="hero-map-legend-dot" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink/50">
            Capital activa
          </span>
        </div>
      </div>

      {/* MAPA */}
      <div className="hero-map-wrap" id="heroMapWrap" ref={wrapRef}>
        <svg
          className="hero-map-svg"
          viewBox="0 0 520 620"
          xmlns="http://www.w3.org/2000/svg"
          id="americasMapHero"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="heroPinGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD400" stopOpacity="1" />
              <stop offset="40%" stopColor="#FFD400" stopOpacity=".55" />
              <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g id="heroMapCountries" />
          <g id="heroMapPins" />
        </svg>

        {/* Tooltip flotante */}
        <div className="pin-tooltip" id="heroPinTooltip">
          <small id="heroTtSmall">Capital</small>
          <div id="heroTtName">—</div>
        </div>
      </div>
    </div>
  )
}
