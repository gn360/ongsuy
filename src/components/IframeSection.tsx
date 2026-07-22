import { useEffect, useRef } from 'react';

interface IframeSectionProps {
  /**
   * HTML completo para embeber contenido de terceros.
   * Se inyecta directamente en el DOM de la página (sin iframe)
   * para que window.location.origin sea el real.
   * Los scripts se extraen y recrean como elementos <script> reales
   * copiando todos sus atributos (src, data-slug, data-sku, etc.),
   * por lo que document.currentScript funciona correctamente.
   *
   * Ejemplo (Doná Fácil):
   * `<div id="df-donation-form"></div>
   *  <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
   *  <script src="https://donafacil.uy/embed/donation-form.js" data-slug="..." data-sku="..."></script>`
   */
  title?: string;
  embedHtml?: string;
  /** @deprecated Usar embedHtml. Script simple a inyectar sin procesar. */
  scriptContent?: string;
  /** Placeholder cuando no hay embed ni script */
  fallbackHtml?: string;
  /** Altura mínima del contenedor */
  minHeight?: string;
}

export default function IframeSection({
  title,
  embedHtml,
  scriptContent,
  fallbackHtml,
  minHeight = '650px',
}: IframeSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Modo legacy: script inline simple
    if (scriptContent && !embedHtml) {
      container.innerHTML = '';
      const script = document.createElement('script');
      script.textContent = scriptContent;
      container.appendChild(script);
      return;
    }

    // Modo embedHtml: inyectar directo al DOM, sin iframe
    if (embedHtml) {
      container.innerHTML = '';

      // Parsear el HTML para separar scripts del resto
      const temp = document.createElement('div');
      temp.innerHTML = embedHtml;

      // Extraer scripts y recrearlos para asegurar ejecucion real en el DOM.
      // cloneNode en <script> puede no ejecutar en algunos navegadores/escenarios.
      const oldScripts = temp.querySelectorAll('script');
      const recreatedScripts: HTMLScriptElement[] = [];

      oldScripts.forEach((old) => {
        const recreated = document.createElement('script');

        Array.from(old.attributes).forEach((attr) => {
          recreated.setAttribute(attr.name, attr.value);
        });

        if (old.textContent) {
          recreated.textContent = old.textContent;
        }

        recreated.onload = () => {
          if (recreated.src) {
            console.info('[IframeSection] Script cargado:', recreated.src);
          }
        };

        recreated.onerror = () => {
          if (recreated.src) {
            console.error('[IframeSection] Error cargando script:', recreated.src);
          }
        };

        recreatedScripts.push(recreated);
        old.remove();
      });

      // Inyectar el HTML sin scripts (div, link, etc.)
      container.innerHTML = temp.innerHTML;

      // Al append de scripts recreados, el navegador los ejecuta como nuevos.
      recreatedScripts.forEach((s) => container.appendChild(s));

      // Listener para auto-ajuste de altura vía postMessage
      const handleMessage = (e: MessageEvent) => {
        if (e.data?.type === 'resize' && e.data.height) {
          const h = Number(e.data.height);
          if (h > 0) container.style.minHeight = h + 'px';
        }
      };
      window.addEventListener('message', handleMessage);

      return () => {
        window.removeEventListener('message', handleMessage);
        container.innerHTML = '';
      };
    }
  }, [embedHtml, scriptContent]);

  const defaultFallback = `
    <div class="flex items-center justify-center w-full h-full bg-white rounded-xl border-2 border-dashed border-gray-300">
      <div class="text-center text-gray-400 p-8">
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" />
          <rect x="9" y="9" width="6" height="6" rx="1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
        <p class="text-lg font-medium">Espacio para iframe</p>
        <p class="text-sm mt-1">Inserta tu HTML de embed aquí</p>
      </div>
    </div>
  `;

  const showFallback = !embedHtml && !scriptContent;

  return (
    <section className="py-12 px-4 rounded-[20px] md:rounded-none bg-white md:bg-transparent">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          {title}
        </h2>
      )}
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-4xl rounded-xl overflow-hidden"
        style={{ minHeight: showFallback ? minHeight : undefined }}
        dangerouslySetInnerHTML={{
          __html: showFallback ? (fallbackHtml ?? defaultFallback) : '',
        }}
      />
    </section>
  );
}
