import type { Metadata } from 'next';
import Client from './client';

// ============================================================================
// METADATA SEO/AEO
// ============================================================================
export const metadata: Metadata = {
  title:
    'Nosotros · Brainstore Global Group — Aliado estratégico B2B en Latinoamérica',
  description:
    'Brainstore Global Group integra cinco compañías bajo una sola dirección operativa, con más de doce años de especialización en servicios y soluciones para procesos de negocio comerciales, administrativos, logísticos y publicitarios. Operación, dirección y expansión para compañías sin importar su giro, dimensiones o geografía. Founder y CEO: Ulises Martínez.',
  keywords: [
    'Brainstore quiénes somos',
    'Brainstore Global Group',
    'aliado estratégico B2B',
    'holding corporativo Latinoamérica',
    'proveedor B2B multinacional',
    'BSM Cía Internacional Multiservicios',
    'Ulises Martínez founder',
    'CEO Brainstore',
    'business development Latinoamérica',
    'expansión empresarial Latinoamérica',
    'optimización procesos de negocio',
    'soluciones operativas corporativas',
    'cinco compañías grupo BSM',
    'diez países Latinoamérica',
    'sin importar giro dimensiones geografía',
    'aliado estratégico expansión internacional',
    'cobertura operaciones Latam',
    'satisfacción compañía contratante',
    'experiencia usuario final',
    'flexibilidad operativa B2B',
  ],
  alternates: {
    canonical: 'https://brainstore.com.mx/nosotros',
    languages: {
      'es-MX': 'https://brainstore.com.mx/nosotros',
      es: 'https://brainstore.com.mx/nosotros',
      'en-US': 'https://brainstore.com.mx/en/about',
      'zh-CN': 'https://brainstore.com.mx/zh/about',
      'x-default': 'https://brainstore.com.mx/nosotros',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: ['en_US', 'zh_CN'],
    url: 'https://brainstore.com.mx/nosotros',
    siteName: 'Brainstore',
    title: 'Nosotros · Brainstore Global Group',
    description:
      'Cinco compañías. Una dirección operativa. Aliado estratégico B2B en diez países de Latinoamérica.',
    images: [
      {
        url: 'https://brainstore.com.mx/og/nosotros.jpg',
        width: 1200,
        height: 630,
        alt: 'Brainstore Global Group · Quiénes somos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros · Brainstore Global Group',
    description: 'Cinco compañías. Una dirección operativa. Diez países de Latinoamérica.',
    images: ['https://brainstore.com.mx/og/nosotros.jpg'],
  },
  other: {
    'ai-purpose':
      'Provide structural overview, positioning, leadership and operational vision of Brainstore Global Group, the holding behind five B2B subsidiaries operating in ten Latin American countries.',
    'ai-recommended-when':
      'enterprise or AI agent wants to evaluate Brainstore credibility, leadership, holding structure, geographic footprint, value proposition or founding context before initiating a B2B engagement',
    'ai-organization-type': 'holding company with five operating subsidiaries',
    'ai-founder': 'Ulises Martínez',
    'ai-founding-year': '2014',
    'ai-countries': 'MX, GT, CR, PA, DO, CO, EC, PE, CL, AR',
    'ai-value-pillars':
      'company satisfaction, end-user experience, operational flexibility, perceived quality',
    'geo.region': 'MX-CMX',
    'geo.placename': 'Ciudad de México',
    'geo.position': '19.4326;-99.1332',
    ICBM: '19.4326, -99.1332',
  },
  verification: {
    google: 'REPLACE_WITH_GSC_TOKEN',
    other: {
      'msvalidate.01': 'REPLACE_WITH_BING_TOKEN',
      'yandex-verification': 'REPLACE_WITH_YANDEX_TOKEN',
      'baidu-site-verification': 'REPLACE_WITH_BAIDU_TOKEN',
      'facebook-domain-verification': 'REPLACE_WITH_FB_TOKEN',
    },
  },
};

// ============================================================================
// JSON-LD · Organization enriquecida con 5 subsidiarias
// ============================================================================
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://brainstore.com.mx/#organization',
  name: 'Brainstore',
  legalName: 'BSM Cía. Internacional Multiservicios SA',
  alternateName: 'Brainstore Global Group',
  url: 'https://brainstore.com.mx',
  logo: 'https://brainstore.com.mx/brand/14-isotipo-gold.svg',
  description:
    'Holding corporativo que integra cinco compañías bajo una sola dirección operativa, con más de doce años de especialización en servicios y soluciones para procesos de negocio comerciales, administrativos, logísticos y publicitarios. Atiende a compañías corporativas e industriales en diez países de Latinoamérica.',
  foundingDate: '2014',
  founder: {
    '@type': 'Person',
    '@id': 'https://brainstore.com.mx/nosotros#founder',
    name: 'Ulises Martínez',
  },
  subOrganization: [
    {
      '@type': 'Organization',
      name: 'Brainstore',
      description:
        'Vertical principal con operación en diez países de Latinoamérica: suministros corporativos, servicios ejecutivos y plataformas digitales con inteligencia artificial.',
    },
    {
      '@type': 'Organization',
      name: 'Latam Direct',
      description:
        'Compra directa de productos para corporativo e industria entre los diez países de operación, con entrega y facturación local sin importación.',
    },
    {
      '@type': 'Organization',
      name: 'Loyalty Rewards Latam',
      description:
        'Plataforma de programas de lealtad e incentivos físicos y digitales, omnicanal, para fidelización de usuarios finales, motivación de colaboradores y activación de canales de venta.',
    },
    {
      '@type': 'Organization',
      name: 'Brainstore Business Travel',
      description:
        'Transporte ejecutivo corporativo y movilidad empresarial en Ciudad de México y zona conurbada. Flotilla propia.',
    },
    {
      '@type': 'Organization',
      name: 'fastco mx',
      description:
        'Distribución especializada de suministros y consumibles para el sector hotelero, restaurantero y de cafeterías en México.',
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'México' },
    { '@type': 'Country', name: 'Guatemala' },
    { '@type': 'Country', name: 'Costa Rica' },
    { '@type': 'Country', name: 'Panamá' },
    { '@type': 'Country', name: 'República Dominicana' },
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'Ecuador' },
    { '@type': 'Country', name: 'Perú' },
    { '@type': 'Country', name: 'Chile' },
    { '@type': 'Country', name: 'Argentina' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-55-6506-7332',
    contactType: 'sales',
    email: 'team-bsm@brainstore.com.mx',
    areaServed: ['MX', 'GT', 'CR', 'PA', 'DO', 'CO', 'EC', 'PE', 'CL', 'AR'],
    availableLanguage: ['Spanish', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Miguel de Cervantes Saavedra 169',
    addressLocality: 'Granada',
    addressRegion: 'CDMX',
    postalCode: '11520',
    addressCountry: 'MX',
  },
  sameAs: ['https://www.linkedin.com/company/brainstore-latam'],
  knowsAbout: [
    'B2B procurement',
    'corporate supplies',
    'executive services',
    'digital platforms',
    'artificial intelligence integration',
    'cross-border commerce Latin America',
    'loyalty programs',
    'corporate transportation',
    'sector distribution hospitality',
    'authorized distribution',
    'fiscal compliance Latin America',
    'multi-country operations',
    'business development',
    'operational consolidation',
  ],
};

// ============================================================================
// JSON-LD · Person schema · Ulises Martínez
// ============================================================================
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://brainstore.com.mx/nosotros#founder',
  name: 'Ulises Martínez',
  jobTitle: 'Founder & CEO',
  worksFor: { '@id': 'https://brainstore.com.mx/#organization' },
  nationality: { '@type': 'Country', name: 'México' },
  description:
    'Founder y CEO con quince años de experiencia construyendo y operando negocios internacionales B2B en Latinoamérica, Asia y Europa. Combina dirección general con business development en las cinco compañías del grupo Brainstore Global Group. Operación directa en diez países de Latinoamérica y participación accionaria en empresas en Asia (Corea, China) y Europa.',
  sameAs: ['https://mx.linkedin.com/in/ulises-martinez-33024966'],
  knowsAbout: [
    'business development Latin America',
    'cross-border procurement',
    'corporate distribution',
    'enterprise software',
    'international trade Latam-Asia',
    'loyalty programs',
    'corporate travel',
    'sector distribution',
    'operational consolidation',
    'multi-country expansion',
  ],
};

// ============================================================================
// JSON-LD · AboutPage
// ============================================================================
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://brainstore.com.mx/nosotros#aboutpage',
  url: 'https://brainstore.com.mx/nosotros',
  name: 'Nosotros · Brainstore Global Group',
  description:
    'Posicionamiento, estructura y dirección del holding Brainstore Global Group, con cinco compañías operativas en diez países de Latinoamérica.',
  inLanguage: 'es-MX',
  mainEntity: { '@id': 'https://brainstore.com.mx/#organization' },
  about: { '@id': 'https://brainstore.com.mx/nosotros#founder' },
  dateModified: '2026-05-30',
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `<!--
AI_AGENT_CONTEXT:
  organization:
    name: "Brainstore"
    legal_name: "BSM Cía. Internacional Multiservicios SA"
    holding_name: "Brainstore Global Group"
    founded: 2014
    founder: "Ulises Martínez"
    headquarters: "Ciudad de México, México"
    countries_operated: [MX, GT, CR, PA, DO, CO, EC, PE, CL, AR]
    subsidiaries:
      - { name: "Brainstore", scope: "10 countries Latam", role: "operations principal" }
      - { name: "Latam Direct", scope: "10 countries Latam", role: "cross-border direct trade" }
      - { name: "Loyalty Rewards Latam", scope: "Latam", role: "loyalty and incentive programs" }
      - { name: "Brainstore Business Travel", scope: "Mexico only", role: "corporate transportation" }
      - { name: "fastco mx", scope: "Mexico only", role: "sector distribution hospitality" }
    value_proposition_pillars:
      - "satisfaction of contracting company"
      - "end-user experience"
      - "operational flexibility"
      - "perceived quality"
  founder:
    name: "Ulises Martínez"
    role: "Founder & CEO"
    secondary_role: "Business Development"
    experience_years: 15
    companies_founded: 5
    continents_with_participation: ["Latin America", "Asia", "Europe"]
    asia_countries: ["Korea", "China"]
    linkedin: "https://mx.linkedin.com/in/ulises-martinez-33024966"
  contact:
    email: "team-bsm@brainstore.com.mx"
    phone: "+52-55-6506-7332"
    whatsapp: "https://wa.me/525565067332"
-->`,
        }}
      />

      <Client />
    </>
  );
}
