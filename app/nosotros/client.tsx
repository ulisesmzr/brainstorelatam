'use client';

import { useState } from 'react';
import HomeHeader from '@/app/components/shared/HomeHeader';
import HomeFooter from '@/app/components/shared/HomeFooter';

/**
 * Página /nosotros · v3
 *
 * Estructura:
 *   Hero · 01 Posicionamiento (con logo grande oficial) · 02 Las 5 compañías
 *   03 Founder · 04 Cobertura · CTA
 *
 * Cambios v3:
 *   - Logo oficial del grupo embebido en sección 01 (en lugar de título)
 *   - Stat "24h" reemplazado por "+12 años operando"
 *   - Vocabulario: "cliente" → "compañía"/"usuario final"
 *   - Bio Founder re-escrita con foco en business development y dirección
 *   - Copy de posicionamiento integrado (presencia internacional + propuesta de valor)
 *   - Business Travel y fastco marcados como "solo México"
 *   - Loyalty Rewards descrita por capacidades, no solo "incentivos"
 *   - HomeHeader y HomeFooter compartidos (consistencia con resto del sitio)
 */

const COUNTRIES = [
  { code: 'MX', name: 'México' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'PA', name: 'Panamá' },
  { code: 'DO', name: 'Rep. Dominicana' },
  { code: 'CO', name: 'Colombia' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'PE', name: 'Perú' },
  { code: 'CL', name: 'Chile' },
  { code: 'AR', name: 'Argentina' },
];

const STATS = [
  { value: '+12', label: 'Años operando' },
  { value: '5', label: 'Compañías del grupo' },
  { value: '10', label: 'Países cobertura' },
  { value: '250+', label: 'Marcas distribuidas' },
];

const PILLARS = [
  { title: 'Herramientas y espacios propios.', desc: 'Sin subcontratación opaca.' },
  { title: 'Alianzas estratégicas.', desc: 'Red de socios, proveedores y canales comerciales propios.' },
  { title: 'Confidencialidad operativa.', desc: 'Información protegida de extremo a extremo.' },
  { title: 'Optimización de costos.', desc: 'Volumen consolidado, mejores condiciones.' },
];

const DIRECTION_FOCUS = [
  'Expansión de compañías mexicanas hacia operación regional Latinoamérica sin abrir oficinas locales.',
  'Entrada de compañías internacionales al mercado mexicano y latinoamericano vía estructura ya constituida.',
  'Consolidación de proveedores únicos para compañías con operaciones multi-país y necesidad de un solo expediente.',
  'Integración de inteligencia artificial en procesos operativos y comerciales del grupo y de las compañías contratantes.',
];

export default function Client() {
  const [openQuote, setOpenQuote] = useState(false);

  const handleOpenQuote = () => setOpenQuote(true);

  return (
    <>
      <HomeHeader onOpenQuote={handleOpenQuote} />

      <main style={{ paddingTop: 64 }} className="bg-white text-ink">
        {/* ================================================================ */}
        {/* HERO                                                              */}
        {/* ================================================================ */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-6">
              / Brainstore Global Group
            </div>
            <h1 className="font-mega text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-ink max-w-6xl">
              Aliado estratégico B2B en{' '}
              <span className="yellow-highlight">Latinoamérica</span>.
            </h1>
            <p className="mt-6 lg:mt-8 text-lg lg:text-2xl text-ink/70 leading-relaxed max-w-4xl">
              Operación, dirección y expansión para compañías{' '}
              <strong className="text-ink">sin importar su giro, dimensiones o geografía</strong>.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mt-12 lg:mt-20 max-w-5xl">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-yellow pl-4 lg:pl-6">
                  <div className="font-mega text-4xl lg:text-6xl text-ink leading-none">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 01 · POSICIONAMIENTO · logo grande del grupo                     */}
        {/* ================================================================ */}
        <section className="bg-paper border-t border-ink/10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-6">
                  / 01 — Posicionamiento
                </div>

                {/* Logo oficial grande embebido */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src="/brand/14-isotipo-gold.svg"
                    alt="Brainstore"
                    className="h-16 lg:h-24 w-auto"
                  />
                  <div
                    className="font-display-bold text-4xl lg:text-6xl text-ink"
                    style={{ letterSpacing: '-0.045em' }}
                  >
                    brain<span style={{ color: '#C9A227' }}>·</span>store
                  </div>
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-ink/40">
                  Brainstore Global Group
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-base lg:text-lg text-ink/80 leading-relaxed">
                <p>
                  Brainstore Global Group integra <strong className="text-ink">cinco compañías</strong> bajo una sola dirección operativa, con más de doce años de especialización en servicios y soluciones para procesos de negocio: <strong className="text-ink">comerciales, administrativos, logísticos y publicitarios</strong>.
                </p>
                <p>
                  El enfoque está en la <strong className="text-ink">optimización de recursos y resultados</strong> de cualquier compañía, independientemente de su giro, dimensiones o geografía. Una compañía multinacional, una mediana empresa en expansión o un negocio especializado encuentran en el grupo el mismo nivel de atención estratégica.
                </p>
                <p>
                  Nuestra presencia en diferentes partes del mundo, y un diseño operativo orientado al creciente mercado latinoamericano, nos posicionan como el <strong className="text-ink">aliado estratégico para ampliar la cobertura de las operaciones de cada compañía</strong> y enfrentar los desafíos que se presenten en su negocio, sin fronteras de por medio.
                </p>
                <p>
                  La propuesta de valor del grupo se centra en cuatro ejes: <strong className="text-ink">la satisfacción de la compañía contratante</strong>, <strong className="text-ink">la experiencia del usuario final</strong>, <strong className="text-ink">la flexibilidad operativa</strong> y <strong className="text-ink">la calidad percibida</strong> en todos los productos y servicios entregados.
                </p>
                <p>
                  La política central es <strong className="text-ink">ajustar las herramientas al negocio</strong>: diseñamos un plan estratégico a la medida, con compromiso, calidad, eficiencia y propuestas de valor en cada proyecto.
                </p>

                <div className="pt-6 border-t border-ink/10 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {PILLARS.map((p) => (
                    <div key={p.title} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-yellow mt-2 flex-shrink-0"></div>
                      <div className="text-sm text-ink/70">
                        <strong className="text-ink">{p.title}</strong> {p.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 02 · LAS 5 COMPAÑÍAS DEL GRUPO                                   */}
        {/* ================================================================ */}
        <section className="bg-white border-t border-ink/10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-4">
                  / 02 — Brainstore Global Group
                </div>
                <h2 className="font-mega text-3xl lg:text-5xl text-ink max-w-4xl leading-[1.1]">
                  Cinco compañías. <span className="text-ink/30">Una</span>{' '}
                  <span className="yellow-highlight">dirección operativa.</span>
                </h2>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink/40 lg:text-right">
                Razón social del holding<br/>BSM Cía. Internacional Multiservicios SA
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* 01 · BRAINSTORE */}
              <a href="/" className="group relative border border-ink/10 hover:border-ink p-6 lg:p-8 bg-white transition-all hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <img src="/brand/14-isotipo-gold.svg" alt="" className="h-8 w-auto" />
                    <div className="font-display-bold text-lg text-ink" style={{ letterSpacing: '-0.045em' }}>
                      brain<span style={{ color: '#C9A227' }}>·</span>store
                    </div>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-yellow">01</div>
                </div>
                <h3 className="font-display-bold text-xl text-ink mb-3">Brainstore</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
                  Operación principal · 10 países LatAm
                </div>
                <p className="text-sm lg:text-base text-ink/70 leading-relaxed">
                  Red integrada de soluciones operativas: suministros corporativos, servicios ejecutivos y plataformas digitales con inteligencia artificial. Tres verticales que se combinan según el proyecto de cada compañía.
                </p>
              </a>

              {/* 02 · LATAM DIRECT */}
              <a href="/latam-direct" className="group relative border border-ink/10 hover:border-ink p-6 lg:p-8 bg-white transition-all hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center h-12 px-4 border border-ink font-display-bold text-base italic text-ink">
                    Latam Direct
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-yellow">02</div>
                </div>
                <h3 className="font-display-bold text-xl text-ink mb-3">Latam Direct</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
                  Puente comercial · 10 países LatAm
                </div>
                <p className="text-sm lg:text-base text-ink/70 leading-relaxed">
                  Compra directa de productos para corporativo e industria entre los diez países de operación. Bidireccional, con entrega y facturación local. Sin importación, sin aduanas, sin trámites para la compañía contratante.
                </p>
              </a>

              {/* 03 · LOYALTY REWARDS LATAM */}
              <a href="https://loyaltyrewardslatam.com" target="_blank" rel="noopener noreferrer" className="group relative border border-ink/10 hover:border-ink p-6 lg:p-8 bg-white transition-all hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center h-12 px-4 border border-ink font-display-bold text-lg text-ink tracking-wider">
                    LRL
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-yellow flex items-center gap-1">
                    03
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>
                <h3 className="font-display-bold text-xl text-ink mb-3">Loyalty Rewards Latam</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
                  Programas de lealtad · LatAm
                </div>
                <p className="text-sm lg:text-base text-ink/70 leading-relaxed">
                  Plataforma de programas de lealtad e incentivos físicos y digitales. Diseño y rediseño de programas para fidelización de usuarios finales, motivación de colaboradores y activación de canales de venta. Recompensas omnicanal, catálogo de premios y métricas de adopción.
                </p>
              </a>

              {/* 04 · BUSINESS TRAVEL */}
              <a href="https://airportbusinesstravelmexico.com" target="_blank" rel="noopener noreferrer" className="group relative border border-ink/10 hover:border-ink p-6 lg:p-8 bg-white transition-all hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center h-12 px-4 border border-ink font-display-bold text-lg text-ink tracking-wider">
                    BBT
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-yellow flex items-center gap-1">
                    04
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>
                <h3 className="font-display-bold text-xl text-ink mb-3">Brainstore Business Travel</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
                  Transporte corporativo · México
                </div>
                <p className="text-sm lg:text-base text-ink/70 leading-relaxed">
                  Transporte ejecutivo corporativo, traslados aeroportuarios y movilidad empresarial en la Ciudad de México y zona conurbada. Flotilla propia, operación 24/7, monitoreo en vivo y atención dedicada para equipos directivos y visitantes corporativos.
                </p>
              </a>

              {/* 05 · FASTCO MX */}
              <a href="#" className="group relative border border-ink/10 hover:border-ink p-6 lg:p-8 bg-white transition-all hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center h-12 px-4 border border-ink font-display-bold text-base text-ink">
                    fastco
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-yellow">05</div>
                </div>
                <h3 className="font-display-bold text-xl text-ink mb-3">fastco mx</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
                  Distribución sectorial · México
                </div>
                <p className="text-sm lg:text-base text-ink/70 leading-relaxed">
                  Distribución especializada de suministros y consumibles para el sector hotelero, restaurantero y de cafeterías. Catálogo seleccionado para operadores institucionales, con tiempos de reposición y condiciones diseñadas para alta rotación.
                </p>
              </a>

              {/* Card final · síntesis */}
              <div className="relative bg-ink text-white p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-yellow mb-4">
                    Operación consolidada
                  </div>
                  <h3 className="font-display-bold text-xl lg:text-2xl mb-4 leading-tight">
                    Un solo punto de contacto. Cinco capacidades operativas.
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    La compañía contratante gestiona un único expediente, una sola dirección comercial y propuestas integradas que combinan capacidades de las cinco empresas según el alcance del proyecto.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[10px] uppercase tracking-widest text-yellow/70">
                  Mismo equipo · Mismo estándar · Mismo SLA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 03 · FOUNDER & CEO · Ulises Martínez                             */}
        {/* ================================================================ */}
        <section className="bg-ink text-white">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs uppercase tracking-widest text-yellow mb-4">
                  / 03 — Founder & CEO
                </div>
                <h2 className="font-mega text-4xl lg:text-5xl mb-2 leading-tight">
                  Ulises Martínez
                </h2>
                <div className="font-mono text-sm text-white/60 mb-2">Founder & CEO</div>
                <div className="font-mono text-sm text-white/40 mb-8">
                  Business Development · Dirección operativa
                </div>

                <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-8 max-w-md">
                  <div>
                    <div className="font-mega text-3xl lg:text-4xl text-yellow">15</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-1">
                      Años de dirección operativa
                    </div>
                  </div>
                  <div>
                    <div className="font-mega text-3xl lg:text-4xl text-yellow">5</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-1">
                      Compañías construidas y operadas
                    </div>
                  </div>
                  <div>
                    <div className="font-mega text-3xl lg:text-4xl text-yellow">3</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-1">
                      Continentes con participación
                    </div>
                  </div>
                </div>

                <a
                  href="https://mx.linkedin.com/in/ulises-martinez-33024966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-yellow text-yellow text-sm font-medium hover:bg-yellow hover:text-ink transition-colors"
                >
                  Perfil en LinkedIn
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-base lg:text-lg text-white/80 leading-relaxed">
                <p>
                  Founder y CEO con quince años de experiencia construyendo y operando negocios internacionales B2B en Latinoamérica, Asia y Europa. Su rol diario combina <strong className="text-white">dirección general</strong> con <strong className="text-white">business development</strong>: define la estrategia comercial de las cinco compañías del grupo, abre alianzas en nuevos mercados y mantiene relación directa con la dirección de las compañías contratantes.
                </p>
                <p>
                  Operación directa en los <strong className="text-white">diez países de Latinoamérica</strong> donde Brainstore Global Group atiende compañías corporativas e industriales. Participación accionaria adicional en empresas en <strong className="text-white">Asia (Corea, China)</strong> y <strong className="text-white">Europa</strong>, enfocadas en comercio internacional, manufactura y distribución especializada.
                </p>
                <p>
                  Bajo esta dirección, el grupo opera con cuatro principios no negociables: <strong className="text-white">calidad de entrega</strong>, <strong className="text-white">eficiencia operativa</strong>, <strong className="text-white">confidencialidad</strong> y <strong className="text-white">compromiso documentado por proyecto</strong>. Cada compañía contratante recibe acompañamiento estratégico desde la primera reunión hasta el cierre del expediente.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <div className="font-mono text-xs uppercase tracking-widest text-yellow/80 mb-4">
                    Foco actual de la dirección
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    {DIRECTION_FOCUS.map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-yellow mt-2 flex-shrink-0"></div>
                        <div className="text-white/70">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 04 · COBERTURA OPERATIVA                                         */}
        {/* ================================================================ */}
        <section className="bg-paper border-t border-ink/10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">
                  / 04 — Cobertura operativa
                </div>
                <h2 className="font-mega text-3xl lg:text-5xl text-ink leading-[1.1]">
                  Diez países con presencia directa.
                </h2>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink/40">
                Sin franquicia · Sin reseller
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
              {COUNTRIES.map((c) => (
                <div
                  key={c.code}
                  className="border border-ink/10 hover:border-yellow transition-colors px-4 py-4 bg-white"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-yellow mb-1">
                    {c.code}
                  </div>
                  <div className="font-display-bold text-base lg:text-lg text-ink">
                    {c.name}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base text-ink/70 max-w-3xl leading-relaxed">
              Entrega, facturación y cumplimiento normativo locales en cada país. La compañía contratante mantiene un solo expediente y una sola dirección comercial; el grupo coordina la operación local sin intermediarios.
            </p>
          </div>
        </section>

        {/* ================================================================ */}
        {/* CTA FINAL                                                         */}
        {/* ================================================================ */}
        <section className="bg-ink text-white border-t border-yellow/30">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs uppercase tracking-widest text-yellow mb-4">
                  / Siguiente paso
                </div>
                <h2 className="font-mega text-3xl lg:text-5xl mb-6 leading-[1.1]">
                  Conversemos sobre el alcance de su{' '}
                  <span className="yellow-highlight text-ink">operación</span>.
                </h2>
                <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                  Una reunión inicial permite mapear la operación actual de la compañía, identificar dónde el grupo aporta más valor y estructurar una propuesta integrada con las capacidades de las cinco empresas.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4">
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="w-full inline-flex items-center justify-between px-6 py-4 bg-yellow text-ink font-display-bold text-base hover:bg-white transition-colors"
                >
                  <span>Agendar reunión</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </button>
                <a
                  href="https://wa.me/525565067332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-6 py-4 border border-white/30 text-white font-display-bold text-base hover:border-yellow hover:text-yellow transition-colors"
                >
                  <span>Contactar por WhatsApp</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />

      {/* Modal simple de agendar reunión */}
      {openQuote && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
          onClick={() => setOpenQuote(false)}
        >
          <div
            className="bg-white max-w-lg w-full p-6 lg:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenQuote(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-ink/5"
              aria-label="Cerrar"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
            </button>
            <div className="font-mono text-xs uppercase tracking-widest text-yellow mb-2">
              Agendar reunión
            </div>
            <h3 className="font-mega text-2xl lg:text-3xl text-ink mb-6">
              Conversemos sobre el alcance de la operación.
            </h3>
            <div className="space-y-3 text-sm text-ink/80">
              <p>
                Para coordinar la reunión inicial, contacte por cualquiera de estos canales con una descripción breve del proyecto:
              </p>
              <div className="space-y-2 mt-4">
                <a
                  href="mailto:team-bsm@brainstore.com.mx?subject=Reuni%C3%B3n%20inicial%20Brainstore%20Global%20Group"
                  className="flex items-center gap-3 px-4 py-3 border border-ink/10 hover:border-ink transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Email</span>
                  <span className="font-display-bold text-ink">team-bsm@brainstore.com.mx</span>
                </a>
                <a
                  href="tel:+525565067332"
                  className="flex items-center gap-3 px-4 py-3 border border-ink/10 hover:border-ink transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Tel</span>
                  <span className="font-display-bold text-ink">+52 55 6506 7332</span>
                </a>
                <a
                  href="https://wa.me/525565067332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 border border-ink/10 hover:border-ink transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">WhatsApp</span>
                  <span className="font-display-bold text-ink">+52 55 6506 7332</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
