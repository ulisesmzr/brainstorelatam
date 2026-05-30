'use client';

import { useEffect, useRef } from 'react';
import HomeHeader from '@/app/components/shared/HomeHeader';
import HomeFooter from '@/app/components/shared/HomeFooter';
import { SUMINISTROS_HTML } from '@/lib/suministros-html';

/**
 * Cliente unificado · HomeHeader + HTML embebido + HomeFooter
 *
 * v8 (FIX BUG client-side navigation):
 *  - Bug: al navegar desde Home a /suministros via client-side, el HTML aparecía
 *    en blanco. Causa: el script inline `tailwind.config({...})` se ejecutaba
 *    ANTES de que cdn.tailwindcss.com terminara de cargar → ReferenceError.
 *  - Fix: ejecutar scripts en orden SECUENCIAL, esperando onload de los externos
 *    antes de procesar el siguiente. Replica el orden natural del navegador en
 *    hard refresh.
 *  - Hard refresh ya funcionaba. Este fix hace que client-side navigation
 *    también funcione.
 *
 * Mantiene de v7:
 *  - HomeHeader/HomeFooter compartidos (consistencia visual)
 *  - Botón Cotizar dispara [data-open-drawer] del HTML embebido
 */
export default function Client() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scripts = Array.from(containerRef.current.querySelectorAll('script'));
    let cancelled = false;

    const runScript = (oldScript: HTMLScriptElement): Promise<void> => {
      return new Promise((resolve) => {
        const newScript = document.createElement('script');

        // Copiar atributos (type, src, async, defer, etc.)
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });

        // Copiar contenido inline si lo tiene
        if (oldScript.textContent) {
          newScript.textContent = oldScript.textContent;
        }

        const hasExternalSrc = oldScript.src && oldScript.src.length > 0;

        if (hasExternalSrc) {
          // Script externo: esperar a onload antes de continuar
          newScript.onload = () => resolve();
          newScript.onerror = () => {
            // No bloquear si falla un script externo (ej. analytics caído)
            console.warn('Script failed to load:', oldScript.src);
            resolve();
          };
          oldScript.parentNode?.replaceChild(newScript, oldScript);
        } else {
          // Script inline: se ejecuta sincrónicamente al insertar
          oldScript.parentNode?.replaceChild(newScript, oldScript);
          resolve();
        }
      });
    };

    // Ejecutar en orden secuencial (no en paralelo)
    (async () => {
      for (const script of scripts) {
        if (cancelled) break;
        try {
          await runScript(script);
        } catch (e) {
          console.error('Script execution error:', e);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Botón Cotizar del HomeHeader: dispara el drawer del HTML embebido
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
