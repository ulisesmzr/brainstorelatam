'use client'

/**
 * WhatsApp Floating Action Button.
 *
 * FAB fijo en esquina inferior derecha. Verde WhatsApp con tooltip "Hablemos".
 * Aparece después de 800ms (no atropella el hero).
 *
 * URL: https://wa.me/525565067332 con mensaje pre-cargado.
 */

import { useEffect, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/525565067332?text=' +
  encodeURIComponent('Hola Brainstore, me interesa solicitar una cotización formal. Necesito información sobre:')

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      data-track="whatsapp_fab"
      className={`fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-40 group inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        background: '#25D366',
        boxShadow: '0 10px 30px -5px rgba(37, 211, 102, 0.5), 0 0 0 0 rgba(37, 211, 102, 0.4)',
        animation: visible ? 'pulseGlow 2.5s infinite' : 'none',
      }}
    >
      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" aria-hidden="true">
        <use href="#i-whatsapp" />
      </svg>
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-ink text-white text-xs font-mono uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Hablemos
      </span>
    </a>
  )
}
