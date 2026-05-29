import Script from 'next/script'
import HomeClient from './page-client'

/**
 * Home · Server Component
 *
 * Server-side:
 *   - JSON-LD específicos de home (FAQPage, ItemList, Breadcrumb)
 *   - AI_AGENT_ACTIONS comment para agentes IA
 *
 * Client-side (HomeClient):
 *   - Header, Hero, Verticals, LatamDirect, Razones, Industries, CTAFinal
 *   - Quote Modal + WhatsApp FAB
 */

export default function HomePage() {
  return (
    <>
      {/* ===== JSON-LD: FAQ Page ===== */}
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Qué productos provee Brainstore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Brainstore provee más de 150,000 productos corporativos e industriales en 12 categorías: equipos de cómputo, equipo de protección personal (cubrebocas KN95, mascarillas 3M, cascos, guantes, calzado de seguridad), uniformes industriales, papelería corporativa, mobiliario de oficina, empaques y embalaje (cajas de cartón corrugado), manejo de materiales (diablitos, carritos, patines hidráulicos, racks, montacargas), maquinaria pesada, señalética, blancos para hoteles, licencias Microsoft y telefonía corporativa.',
              },
            },
            {
              '@type': 'Question',
              name: '¿En qué países opera Brainstore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Brainstore opera en diez países de Latinoamérica: México (sede en CDMX), Guatemala, Costa Rica, Panamá, República Dominicana, Colombia, Ecuador, Perú, Chile y Argentina. La facturación se emite localmente en cada país, con CFDI en México.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Brainstore vende equipo de protección personal y cubrebocas?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. Brainstore es proveedor de EPP completo: cubrebocas KN95 con stock disponible en CDMX, mascarillas industriales, tapabocas, cascos de trabajo, lentes de protección, guantes anti-corte, chalecos de seguridad, calzado de seguridad, botas dieléctricas, uniformes con antireflejante. Cotización formal en 24 horas para empresas.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Tienen diablitos, carritos manuales y racks de almacén?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. Brainstore provee equipo de manejo de materiales para almacenes y bodegas: diablitos de acero con doble asa, carritos manuales con plataforma metálica, carros industriales, patines hidráulicos, estibadores, racks de almacenamiento y montacargas. Disponible para venta y renta en México y Latinoamérica.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Cuánto tarda Brainstore en entregar una cotización?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Brainstore entrega cotización formal en PDF profesional en menos de 24 horas hábiles. Con documentación completa para procesos de compra formales, RFC, garantías, fianzas y padrones de proveedores.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Qué servicios además de suministros ofrece Brainstore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Brainstore ofrece tres verticales integradas: 1) Suministros corporativos con más de 150,000 productos. 2) Servicios ejecutivos: logística internacional, arrendamiento sin garantías, viajes corporativos, mensajería corporativa especializada y atención a clientes tercerizada. 3) Plataformas digitales personalizadas con IA: encuestas NPS, catálogos digitales, dashboards, inventarios, CRM automatizado y cotizadores automáticos.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Brainstore puede entregar productos en Colombia, Guatemala, Argentina o Chile?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. Brainstore tiene cobertura operativa real en diez países de Latinoamérica. El cliente coordina desde México y recibe el producto en Guatemala, Costa Rica, Panamá, República Dominicana, Colombia, Ecuador, Perú, Chile o Argentina sin abrir relaciones con proveedores locales. Facturación local en cada país.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Cómo se solicita una cotización?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Para solicitar cotización formal en 24 horas, se puede contactar por correo a team-bsm@brainstore.com.mx o WhatsApp al +52-55-6506-7332. También se pueden completar formularios en el sitio con los detalles del producto o servicio requerido, cantidades, país de entrega y datos de facturación.',
              },
            },
          ],
        })}
      </Script>

      {/* ===== JSON-LD: ItemList con 3 verticales ===== */}
      <Script id="ld-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'Service',
              position: 1,
              name: 'Suministros corporativos',
              description:
                'Más de 150,000 productos corporativos e industriales bajo modelo de distribución autorizada global en 9 categorías. Tecnología, mobiliario, papelería, almacenamiento, empaques, herramientas, maquinaria.',
              url: 'https://brainstore.com.mx/suministros-corporativos',
              provider: { '@id': 'https://brainstore.com.mx/#organization' },
              areaServed: 'Latinoamérica',
            },
            {
              '@type': 'Service',
              position: 2,
              name: 'Servicios ejecutivos',
              description:
                'Gestión operativa de logística internacional, arrendamiento sin garantías, viajes corporativos, mensajería corporativa especializada y atención a clientes en 10 países de Latinoamérica.',
              url: 'https://brainstore.com.mx/servicios-ejecutivos',
              provider: { '@id': 'https://brainstore.com.mx/#organization' },
              areaServed: 'Latinoamérica',
            },
            {
              '@type': 'Service',
              position: 3,
              name: 'Plataformas digitales AI',
              description:
                'Plataformas personalizadas embebibles con inteligencia artificial: encuestas NPS, catálogos digitales, dashboards, inventarios, CRM automatizado, cotizadores automáticos.',
              url: 'https://brainstore.com.mx/plataformas-digitales-ai',
              provider: { '@id': 'https://brainstore.com.mx/#organization' },
              areaServed: 'Latinoamérica',
            },
          ],
        })}
      </Script>

      <HomeClient />
    </>
  )
}
