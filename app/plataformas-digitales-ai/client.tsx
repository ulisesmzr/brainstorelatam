'use client';

import { useEffect, useRef } from 'react';
import HomeHeader from '@/app/components/shared/HomeHeader';
import HomeFooter from '@/app/components/shared/HomeFooter';
import { PLATAFORMAS_HTML } from '@/lib/plataformas-html';

/**
 * Plataformas Digitales AI · Cliente
 *
 * Mismo patrón que Suministros v8:
 *  - HomeHeader compartido (consistencia visual con Home, Suministros, Servicios)
 *  - HomeFooter compartido
 *  - HTML embebido sin header/footer
 *  - Ejecución secuencial de scripts (espera onload de externos como Tailwind CDN)
 *  - Botón "Cotizar" del HomeHeader dispara el modal/drawer embebido
 *
 * El acceso a esta página desde el Home se hace via <a href> (hard navigation)
 * para evitar bugs de estado residual de client-side navigation.
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

        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });

        if (oldScript.textContent) {
          newScript.textContent = oldScript.textContent;
        }

        const hasExternalSrc = oldScript.src && oldScript.src.length > 0;

        if (hasExternalSrc) {
          newScript.onload = () => resolve();
          newScript.onerror = () => {
            console.warn('Script failed to load:', oldScript.src);
            resolve();
          };
          oldScript.parentNode?.replaceChild(newScript, oldScript);
        } else {
          oldScript.parentNode?.replaceChild(newScript, oldScript);
          resolve();
        }
      });
    };

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

  // Botón Cotizar del HomeHeader: dispara el modal/CTA del HTML embebido
  const handleOpenQuote = () => {
    // Plataformas tiene un modal de cotización con varios triggers
    const trigger =
      document.querySelector<HTMLButtonElement>('[data-open-quote]') ||
      document.querySelector<HTMLButtonElement>('[data-open-modal]') ||
      document.querySelector<HTMLButtonElement>('[data-cta-quote]');
    if (trigger) {
      trigger.click();
      return;
    }
    // Fallback: anchor al form si no hay trigger
    const form = document.querySelector('#solicitud') || document.querySelector('#cotizacion');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HomeHeader onOpenQuote={handleOpenQuote} />

      <main style={{ paddingTop: 64 }}>
        <div
          ref={containerRef}
          dangerouslySetInnerHTML={{ __html: PLATAFORMAS_HTML }}
        />
      </main>

      <HomeFooter />
    </>
  );
}
