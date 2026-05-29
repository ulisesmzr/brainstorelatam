/**
 * Pack de íconos · Servicios Ejecutivos
 *
 * Cada ícono es un componente React que acepta className y props SVG estándar.
 * Todos usan currentColor para heredar el color del padre.
 * Todos los paths son fieles 100% al SVG original del preview HTML.
 *
 * Uso:
 *   <IconMsj className="w-7 h-7 text-yellow" />
 *   <IconPhone className="w-4 h-4 text-gold" />
 */

import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string
}

// ============================================================================
// Base props compartidos para íconos line/stroke
// ============================================================================
const lineProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const checkProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const arrowProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

// ============================================================================
// ÍCONOS · navegación y acciones
// ============================================================================

export function IconArrow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...arrowProps} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

export function IconArrowUR(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...arrowProps} {...props}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...arrowProps} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...checkProps} {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function IconSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        d="M50 5 L57 43 L95 50 L57 57 L50 95 L43 57 L5 50 L43 43 Z"
        fill="currentColor"
      />
    </svg>
  )
}

// ============================================================================
// ÍCONOS · servicios
// ============================================================================

export function IconLogistics(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <rect x="1" y="3" width="15" height="13" />
      <path d="M16 8h4l3 3v5h-7z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

export function IconKey(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.85 12.15 19 4M18 5l3 3M15 8l3 3" />
    </svg>
  )
}

export function IconHeadset(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

export function IconPlane(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}

/**
 * Mensajería Especializada Corporativa.
 * Nodal: paquete con antena/nodo arriba y nodo central cuadrado (eco del isotipo).
 */
export function IconMsj(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <circle cx="12" cy="3.5" r="1.6" fill="currentColor" stroke="none" />
      <line x1="12" y1="6" x2="12" y2="10" />
      <polygon points="12,11 19,14.5 19,20 12,22.5 5,20 5,14.5" />
      <line x1="5" y1="14.5" x2="12" y2="17" />
      <line x1="19" y1="14.5" x2="12" y2="17" />
      <line x1="12" y1="17" x2="12" y2="22.5" />
      <rect
        x="10.7"
        y="17.6"
        width="2.6"
        height="2.6"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

// ============================================================================
// ÍCONOS · contacto
// ============================================================================

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2 16 16 0 0 1-13-13 2 2 0 0 1 2-2z" />
      <circle cx="12" cy="3.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M4 20l1.4-4A8.5 8.5 0 1 1 9 19.4z" />
      <path d="M9 9.5c.2 1.5 1 2.8 2.2 3.7 1 .8 2.3 1.4 3.5 1.5l1-1.2c.2-.3.6-.4 1-.3l1.6.5" />
      <rect x="8.4" y="8.4" width="2" height="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

// ============================================================================
// ÍCONOS · ventajas / propuesta de valor
// ============================================================================

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function IconTeam(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function IconCardNo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="4" y1="19" x2="20" y2="5" />
    </svg>
  )
}

export function IconHandshake(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M11 17a2 2 0 0 1-2 2H6l-2-2-2 2" />
      <path d="M22 13l-2 2-2-2" />
      <path d="M11 17 14 14l3 3" />
      <path d="M2 11l5-5 4 4 6-6 5 5" />
    </svg>
  )
}

export function IconDocStamp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="14 3 14 9 20 9" />
      <circle cx="12" cy="15" r="2" />
      <path d="M10 13l4 4M14 13l-4 4" />
    </svg>
  )
}

export function IconCatalog(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

export function IconDashboard(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <rect x="3" y="3" width="7" height="9" />
      <rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" />
      <rect x="3" y="16" width="7" height="5" />
    </svg>
  )
}

// ============================================================================
// ÍCONOS · razones / why-us / industrias (home)
// ============================================================================

export function IconGlobe(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function IconBolt(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export function IconBox(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

export function IconCurrency(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

export function IconPlus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function IconNetwork(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...lineProps} {...props}>
      <circle cx="12" cy="12" r="2" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <line x1="6.4" y1="6.4" x2="10.6" y2="10.6" />
      <line x1="17.6" y1="6.4" x2="13.4" y2="10.6" />
      <line x1="6.4" y1="17.6" x2="10.6" y2="13.4" />
      <line x1="17.6" y1="17.6" x2="13.4" y2="13.4" />
    </svg>
  )
}

// ============================================================================
// LOGOS · Brand pack oficial
// ============================================================================

/**
 * Isotipo Brainstore (símbolo solo).
 *
 * ViewBox 700×700. Contiene:
 *   - Polígono externo (estructura "B" hexagonal)
 *   - 3 barras decorativas debajo del polígono
 *   - 8 líneas radiales desde el centro (cerebro radial)
 *   - Matriz 5×5 de nodos con jerarquía visual
 *   - 8 círculos de remate en los vértices del polígono
 *
 * Por defecto usa amarillo brand #FFD400.
 * Cambia el color con la prop `color` o aplicando `text-[#FFD400]` y
 * usando `color="currentColor"`.
 */
export function BrainstoreIsotipo({
  className,
  color = '#FFD400',
  ...rest
}: IconProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {/* Polígono externo · estructura "B" hexagonal */}
      <polygon
        points="100,220 160,140 320,140 335,160 365,160 380,140 540,140 600,220 600,500 540,540 380,540 365,520 335,520 320,540 160,540 100,500"
        fill="none"
        stroke={color}
        strokeWidth={8}
        strokeLinejoin="miter"
      />

      {/* 3 barras decorativas (la "base" del isotipo) */}
      <rect x="240" y="560" width="220" height="14" fill={color} />
      <rect x="260" y="586" width="180" height="14" fill={color} />
      <rect x="280" y="612" width="140" height="14" fill={color} />

      {/* 8 líneas radiales desde el centro · cerebro radial */}
      <line x1="350" y1="340" x2="350" y2="290" stroke={color} strokeWidth={3} />
      <line x1="350" y1="340" x2="400" y2="290" stroke={color} strokeWidth={3} />
      <line x1="350" y1="340" x2="400" y2="340" stroke={color} strokeWidth={3} />
      <line x1="350" y1="340" x2="400" y2="390" stroke={color} strokeWidth={3} />
      <line x1="350" y1="340" x2="350" y2="390" stroke={color} strokeWidth={3} />
      <line x1="350" y1="340" x2="300" y2="390" stroke={color} strokeWidth={3} />
      <line x1="350" y1="340" x2="300" y2="340" stroke={color} strokeWidth={3} />
      <line x1="350" y1="340" x2="300" y2="290" stroke={color} strokeWidth={3} />

      {/* Matriz 5×5 · fila 1 (5 puntos 10×10) */}
      <rect x="245" y="235" width="10" height="10" fill={color} />
      <rect x="295" y="235" width="10" height="10" fill={color} />
      <rect x="345" y="235" width="10" height="10" fill={color} />
      <rect x="395" y="235" width="10" height="10" fill={color} />
      <rect x="445" y="235" width="10" height="10" fill={color} />

      {/* fila 2 · puntos 10×10 + nodos 14×14 intermedios */}
      <rect x="245" y="285" width="10" height="10" fill={color} />
      <rect x="293" y="283" width="14" height="14" fill={color} />
      <rect x="343" y="283" width="14" height="14" fill={color} />
      <rect x="393" y="283" width="14" height="14" fill={color} />
      <rect x="445" y="285" width="10" height="10" fill={color} />

      {/* fila 3 · puntos 10×10 + nodos 14×14 + nodo central 30×30 */}
      <rect x="245" y="335" width="10" height="10" fill={color} />
      <rect x="293" y="333" width="14" height="14" fill={color} />
      <rect x="335" y="325" width="30" height="30" fill={color} />
      <rect x="393" y="333" width="14" height="14" fill={color} />
      <rect x="445" y="335" width="10" height="10" fill={color} />

      {/* fila 4 · simétrica a fila 2 */}
      <rect x="245" y="385" width="10" height="10" fill={color} />
      <rect x="293" y="383" width="14" height="14" fill={color} />
      <rect x="343" y="383" width="14" height="14" fill={color} />
      <rect x="393" y="383" width="14" height="14" fill={color} />
      <rect x="445" y="385" width="10" height="10" fill={color} />

      {/* fila 5 · simétrica a fila 1 */}
      <rect x="245" y="435" width="10" height="10" fill={color} />
      <rect x="295" y="435" width="10" height="10" fill={color} />
      <rect x="345" y="435" width="10" height="10" fill={color} />
      <rect x="395" y="435" width="10" height="10" fill={color} />
      <rect x="445" y="435" width="10" height="10" fill={color} />

      {/* 8 círculos de remate en los vértices del polígono */}
      <circle cx="100" cy="220" r="12" fill={color} />
      <circle cx="160" cy="140" r="12" fill={color} />
      <circle cx="160" cy="540" r="12" fill={color} />
      <circle cx="100" cy="500" r="12" fill={color} />
      <circle cx="600" cy="220" r="12" fill={color} />
      <circle cx="540" cy="140" r="12" fill={color} />
      <circle cx="540" cy="540" r="12" fill={color} />
      <circle cx="600" cy="500" r="12" fill={color} />
    </svg>
  )
}

/**
 * Wordmark "brain·store" oficial.
 *
 * ViewBox 1080×300. Tipografía Manrope/Inter 800, letter-spacing negativo.
 * El círculo amarillo entre "brain" y "store" es el separador insignia.
 *
 * Por defecto el texto es negro. Cambia con `textColor` para versión sobre
 * fondo oscuro (debe ser #FFFFFF) o cualquier otro.
 */
export function BrainstoreWordmark({
  className,
  textColor = '#0A0A0A',
  dotColor = '#FFD400',
  ...rest
}: IconProps & { textColor?: string; dotColor?: string }) {
  return (
    <svg
      viewBox="0 0 1080 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <text
        x="0"
        y="220"
        fontFamily="Manrope, Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="220"
        fill={textColor}
        letterSpacing="-10"
      >
        brain
      </text>
      <circle cx="490" cy="155" r="22" fill={dotColor} />
      <text
        x="540"
        y="220"
        fontFamily="Manrope, Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="220"
        fill={textColor}
        letterSpacing="-10"
      >
        store
      </text>
    </svg>
  )
}

/**
 * Lockup completo · isotipo + wordmark juntos.
 *
 * Componente compuesto que usa BrainstoreIsotipo + BrainstoreWordmark en
 * un layout horizontal. Es el formato más usado: header, footer, firmas.
 *
 * Acepta props para personalizar colores en distintos contextos:
 *   - default (fondo claro): isotipo amarillo, wordmark negro
 *   - dark (fondo oscuro): isotipo amarillo, wordmark blanco
 *   - mono-light (fondo claro mono): todo negro
 *   - mono-dark (fondo oscuro mono): todo blanco
 *   - premium (papelería premium): todo dorado #C9A227
 */
export function BrainstoreLockup({
  className,
  variant = 'default',
  iconSize = 'w-7 h-7',
  textSize = 'text-base lg:text-lg',
}: {
  className?: string
  variant?: 'default' | 'dark' | 'mono-light' | 'mono-dark' | 'premium'
  iconSize?: string
  textSize?: string
}) {
  const palette = {
    default:    { icon: '#FFD400', text: '#0A0A0A', dot: '#FFD400' },
    dark:       { icon: '#FFD400', text: '#FFFFFF', dot: '#FFD400' },
    'mono-light': { icon: '#0A0A0A', text: '#0A0A0A', dot: '#0A0A0A' },
    'mono-dark':  { icon: '#FFFFFF', text: '#FFFFFF', dot: '#FFFFFF' },
    premium:    { icon: '#C9A227', text: '#C9A227', dot: '#C9A227' },
  }[variant]

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ''}`}>
      <BrainstoreIsotipo className={iconSize} color={palette.icon} />
      <span
        className={`font-display-bold ${textSize}`}
        style={{ letterSpacing: '-0.045em', color: palette.text }}
      >
        brain<span style={{ color: palette.dot }}>·</span>store
      </span>
    </span>
  )
}
