'use client'

/**
 * Home Client Orchestrator
 *
 * Maneja:
 *   - Estado del modal de cotización (abierto/cerrado + prefill)
 *   - Estado del menú móvil
 *   - SVG sprite global con todos los íconos del HTML
 *
 * Composición:
 *   <SvgSprite />                ← Símbolos reutilizables
 *   <HomeHeader />
 *   <Hero />
 *   <Verticals />
 *   <LatamDirect />
 *   <Razones />
 *   <Industries />
 *   <CTAFinal />
 *   <HomeFooter />
 *   <HomeQuoteModal />           ← Modal flotante
 *   <WhatsAppFAB />              ← FAB flotante
 */

import { useState, useCallback } from 'react'
import SvgSprite from './components/shared/SvgSprite'
import HomeHeader from './components/shared/HomeHeader'
import HomeFooter from './components/shared/HomeFooter'
import HomeQuoteModal from './components/shared/HomeQuoteModal'
import WhatsAppFAB from './components/shared/WhatsAppFAB'
import Hero from './components/home/Hero'
import Verticals from './components/home/Verticals'
import LatamDirect from './components/home/LatamDirect'
import Razones from './components/home/Razones'
import Industries from './components/home/Industries'
import CTAFinal from './components/home/CTAFinal'

export type QuotePrefill = 'suministros' | 'servicios' | 'plataformas-ai' | 'licitacion' | null

export default function HomeClient() {
  const [modalOpen, setModalOpen] = useState(false)
  const [prefill, setPrefill] = useState<QuotePrefill>(null)

  const openModal = useCallback((p: QuotePrefill = null) => {
    setPrefill(p)
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
    setTimeout(() => setPrefill(null), 400)
  }, [])

  return (
    <>
      <SvgSprite />
      <HomeHeader onOpenQuote={() => openModal()} />

      <main id="content">
        <Hero onOpenQuote={openModal} />
        <Verticals />
        <LatamDirect onOpenQuote={() => openModal()} />
        <Razones />
        <Industries />
        <CTAFinal onOpenQuote={() => openModal()} />
      </main>

      <HomeFooter />
      <WhatsAppFAB />
      <HomeQuoteModal isOpen={modalOpen} onClose={closeModal} prefill={prefill} />
    </>
  )
}
