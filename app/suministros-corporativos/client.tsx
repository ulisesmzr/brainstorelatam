'use client';

import { useEffect, useRef } from 'react';
import { SUMINISTROS_HTML } from '@/lib/suministros-html';

/**
 * Cliente que inyecta el HTML completo de Suministros Corporativos.
 *
 * IMPORTANTE: React no ejecuta automáticamente los <script> que se inyectan
 * con dangerouslySetInnerHTML. Necesitamos re-crearlos manualmente con
 * document.createElement para que el navegador los reconozca y ejecute.
 *
 * Esto es necesario porque el HTML inyectado incluye:
 * - El carrito (window.BrainstoreCart)
 * - El buscador con autocomplete
 * - El modal de cotización
 * - El drawer lateral
 * - El catálogo de 564 variantes
 * - Animaciones del marquee
 */
export default function Client() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Encontrar TODOS los scripts en el HTML inyectado
    const scripts = containerRef.current.querySelectorAll('script');

    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');

      // Copiar todos los atributos (type, src, async, defer, etc.)
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // Copiar el contenido inline si lo tiene
      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }

      // Reemplazar el script viejo (que no se ejecuta) con uno nuevo (que sí)
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: SUMINISTROS_HTML }}
    />
  );
}
