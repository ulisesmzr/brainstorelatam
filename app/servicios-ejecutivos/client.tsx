'use client'

/**
 * Servicios Ejecutivos · Cliente
 *
 * Orquestador del módulo. Responsabilidades:
 *   - Estado global de los modales (servicio activo + form de cotización)
 *   - IntersectionObserver para .reveal al hacer scroll
 *   - Body scroll lock cuando hay modal abierto
 *   - Tecla Escape cierra el modal activo
 *   - Compone los 7 componentes del módulo
 */

import { useCallback, useEffect, useState } from 'react'

import './styles.css'

import Header from './components/Header'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import ServiceModal from './components/ServiceModal'
import QuoteForm from './components/QuoteForm'
import ContactBlock from './components/ContactBlock'
import Footer from './components/Footer'

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
            // Una vez revelado, dejarlo en su estado final
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    // Pequeño delay para asegurar que el DOM ya está pintado
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
      <Header onOpenQuote={() => openQuote()} />

      <main id="content">
        <Hero onOpenQuote={() => openQuote()} />

        <ServicesGrid
          onOpenService={openService}
          onOpenQuote={openQuote}
        />

        <ContactBlock onOpenQuote={() => openQuote()} />
      </main>

      <Footer />

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
