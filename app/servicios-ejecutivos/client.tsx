'use client'

/**
 * Servicios Ejecutivos · Cliente
 *
 * Orquestador del módulo. Responsabilidades:
 *   - Estado global de los modales (servicio activo + form de cotización)
 *   - IntersectionObserver para .reveal al hacer scroll
 *   - Body scroll lock cuando hay modal abierto
 *   - Tecla Escape cierra el modal activo
 *   - Compone los componentes del módulo
 *
 * v2 (unificación): usa HomeHeader y HomeFooter compartidos
 * para mantener consistencia visual entre las 3 páginas del sitio.
 * Los archivos ./components/Header.tsx y ./components/Footer.tsx ya no se usan.
 */

import { useCallback, useEffect, useState } from 'react'

import './styles.css'

// === Header y Footer compartidos (unificación con Home y Suministros) ===
import HomeHeader from '@/app/components/shared/HomeHeader'
import HomeFooter from '@/app/components/shared/HomeFooter'

import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import ServiceModal from './components/ServiceModal'
import QuoteForm from './components/QuoteForm'
import ContactBlock from './components/ContactBlock'

// ============================================================================
// Tipos compartidos del módulo
// ============================================================================
export type ServiceId =
  | 'logistica'
  | 'arrendamiento'
  | 'reservaciones'
  | 'atencion'
  | 'mensajeria'

// ============================================================================
// Componente principal
// ============================================================================
export default function ServiciosEjecutivosClient() {
  // Estado: cuál servicio (si alguno) tiene el expediente/modal abierto
  const [activeService, setActiveService] = useState<ServiceId | null>(null)

  // Estado: si el form global de cotización está abierto
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  // Cuando el agente AI o el form llegan con un servicio pre-seleccionado
  const [preselectedService, setPreselectedService] = useState<ServiceId | null>(
    null
  )

  // ==========================================================================
  // Handlers
  // ==========================================================================
  const openService = useCallback((id: ServiceId) => {
    setActiveService(id)
  }, [])

  const closeService = useCallback(() => {
    setActiveService(null)
  }, [])

  const openQuote = useCallback((service?: ServiceId) => {
    if (service) setPreselectedService(service)
    setIsQuoteOpen(true)
  }, [])

  const closeQuote = useCallback(() => {
    setIsQuoteOpen(false)
    // Pequeño delay para que la animación termine antes de limpiar el preselect
    setTimeout(() => setPreselectedService(null), 300)
  }, [])

  // ==========================================================================
  // EFFECT: IntersectionObserver para activar .reveal al hacer scroll
  // ==========================================================================
  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    const id = window.setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      window.clearTimeout(id)
      observer.disconnect()
    }
  }, [])

  // ==========================================================================
  // EFFECT: lock del scroll del body cuando hay un modal abierto
  // ==========================================================================
  useEffect(() => {
    if (typeof document === 'undefined') return

    const anyOpen = activeService !== null || isQuoteOpen
    if (anyOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [activeService, isQuoteOpen])

  // ==========================================================================
  // EFFECT: tecla Escape cierra el modal activo (jerarquía: quote > service)
  // ==========================================================================
  useEffect(() => {
    if (typeof window === 'undefined') return

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (isQuoteOpen) closeQuote()
      else if (activeService !== null) closeService()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isQuoteOpen, activeService, closeQuote, closeService])

  // ==========================================================================
  // EFFECT: tracking de página vista (analytics)
  // ==========================================================================
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof (window as { brainstoreTrack?: (e: string, p: object) => void })
        .brainstoreTrack === 'function'
    ) {
      ;(window as { brainstoreTrack: (e: string, p: object) => void }).brainstoreTrack(
        'page_view',
        { page: 'servicios-ejecutivos' }
      )
    }
  }, [])

  // ==========================================================================
  // RENDER
  // ==========================================================================
  return (
    <>
      <HomeHeader onOpenQuote={() => openQuote()} />

      {/* paddingTop:64 compensa el HomeHeader fixed (h-16) */}
      <main id="content" style={{ paddingTop: 64 }}>
        <Hero onOpenQuote={() => openQuote()} />

        <ServicesGrid
          onOpenService={openService}
          onOpenQuote={openQuote}
        />

        <ContactBlock onOpenQuote={() => openQuote()} />
      </main>

      <HomeFooter />

      {/* Modales — viven fuera del flow para no afectar layout */}
      <ServiceModal
        serviceId={activeService}
        onClose={closeService}
        onRequestQuote={openQuote}
      />

      <QuoteForm
        isOpen={isQuoteOpen}
        onClose={closeQuote}
        preselectedService={preselectedService}
      />
    </>
  )
}
