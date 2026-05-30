'use client';

import { useEffect, useRef } from 'react';
import HomeHeader from '@/app/components/shared/HomeHeader';
import HomeFooter from '@/app/components/shared/HomeFooter';
import { SUMINISTROS_HTML } from '@/lib/suministros-html';

/**
 * Cliente unificado · HomeHeader compartido + HTML embebido + HomeFooter compartido
 *
 * Bug previo: el HTML embebido tenía su propio <header> y <footer>, lo que causaba:
 *  1. Inconsistencia visual entre las 3 páginas (cada una con su menú/footer)
 *  2. Bug de navegación al ir de servicios → suministros (duplicación de tags)
 *
 * Solución v7:
 *  - HTML embebido limpio (sin header ni footer)
 *  - HomeHeader fijo arriba (compartido con Home y futura unificación de Servicios)
 *  - HomeFooter abajo (idéntico al de Home)
 *  - Botón "Cotizar" del HomeHeader dispara click en [data-open-drawer] del HTML
 *    embebido, lo que abre el cart drawer / modal de cotización
 */
export default function Client() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Re-ejecutar scripts inyectados (React no los ejecuta automáticamente con dangerouslySetInnerHTML)
  useEffect(() => {
    if (!containerRef.current) return;

    const scripts = containerRef.current.querySelectorAll('script');

    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');

      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }

      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, []);

  // Handler del botón Cotizar del HomeHeader: dispara el drawer/modal del HTML embebido
  const handleOpenQuote = () => {
    const trigger = document.querySelector<HTMLButtonElement>('[data-open-drawer]');
    if (trigger) {
      trigger.click();
    }
  };

  return (
    <>
      <HomeHeader onOpenQuote={handleOpenQuote} />

      {/* paddingTop:64 compensa el HomeHeader fixed (h-16) */}
      <main style={{ paddingTop: 64 }}>
        <div
          ref={containerRef}
          dangerouslySetInnerHTML={{ __html: SUMINISTROS_HTML }}
        />
      </main>

      <HomeFooter />
    </>
  );
}
