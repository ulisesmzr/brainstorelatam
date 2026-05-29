/**
 * SVG Sprite global · todos los símbolos reutilizables del sitio.
 *
 * Replica EXACTAMENTE los <symbol> del HTML v7-final.
 * Se monta una vez en la home (en page-client.tsx) y todos los componentes
 * pueden referenciarlos con <svg><use href="#i-arrow"/></svg>.
 *
 * Los símbolos siguen la convención `i-{nombre}` del HTML original.
 */

export default function SvgSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
    >
      <defs>
        {/* Arrow right */}
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        {/* Arrow up-right */}
        <symbol id="i-arrow-ur" viewBox="0 0 24 24">
          <path d="M7 17L17 7M7 7h10v10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        {/* Plus */}
        <symbol id="i-plus" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </symbol>
        {/* Check shield */}
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        {/* Clock */}
        <symbol id="i-clock" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </symbol>
        {/* Globe */}
        <symbol id="i-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" fill="none" stroke="currentColor" strokeWidth="2"/>
        </symbol>
        {/* Layers */}
        <symbol id="i-layers" viewBox="0 0 24 24">
          <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </symbol>
        {/* Box */}
        <symbol id="i-box" viewBox="0 0 24 24">
          <path d="M21 8l-9-5-9 5 9 5 9-5zM21 8v8l-9 5-9-5V8M3 8l9 5M21 8l-9 5M12 13v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </symbol>
        {/* Currency */}
        <symbol id="i-currency" viewBox="0 0 24 24">
          <path d="M12 3v18M16 7H10a3 3 0 000 6h4a3 3 0 010 6H8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        {/* Vehicle */}
        <symbol id="i-vehicle" viewBox="0 0 24 24">
          <path d="M5 14l2-6h10l2 6M3 14h18v5H3v-5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="7" cy="17" r="1.5" fill="currentColor"/>
          <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
        </symbol>
        {/* Server */}
        <symbol id="i-server" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="18" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="7" cy="7" r="1" fill="currentColor"/>
          <circle cx="7" cy="17" r="1" fill="currentColor"/>
        </symbol>
        {/* Code */}
        <symbol id="i-code" viewBox="0 0 24 24">
          <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        {/* Sparkle */}
        <symbol id="i-sparkle" viewBox="0 0 24 24">
          <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" fill="currentColor"/>
        </symbol>
        {/* Lightning */}
        <symbol id="i-bolt" viewBox="0 0 24 24">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor"/>
        </symbol>
        {/* Menu */}
        <symbol id="i-menu" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </symbol>
        {/* Close */}
        <symbol id="i-close" viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </symbol>
        {/* Building */}
        <symbol id="i-building" viewBox="0 0 24 24">
          <path d="M3 21V7l9-4 9 4v14M3 21h18M9 9h.01M9 12h.01M9 15h.01M9 18h.01M15 9h.01M15 12h.01M15 15h.01M15 18h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </symbol>
        {/* Network */}
        <symbol id="i-network" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2" fill="currentColor"/>
          <circle cx="5" cy="19" r="2" fill="currentColor"/>
          <circle cx="19" cy="19" r="2" fill="currentColor"/>
          <path d="M12 7l-6 10M12 7l6 10M6 19h12" fill="none" stroke="currentColor" strokeWidth="2"/>
        </symbol>
        {/* WhatsApp */}
        <symbol id="i-whatsapp" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
        </symbol>
      </defs>
    </svg>
  )
}
