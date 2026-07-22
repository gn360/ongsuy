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
  embedHtml?: string;
  /** @deprecated Usar embedHtml. Script simple a inyectar sin procesar. */
  scriptContent?: string;
  /** Placeholder cuando no hay embed ni script */
  fallbackHtml?: string;
  /** Altura mínima del contenedor */
  minHeight?: string;
}

export default function IframeSection({
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

      // Extraer scripts y clonarlos (preserva atributos y ejecuta correctamente)
      const oldScripts = temp.querySelectorAll('script');
      const clones: HTMLScriptElement[] = [];

      oldScripts.forEach((old) => {
        const clone = old.cloneNode(true) as HTMLScriptElement;
        clones.push(clone);
        old.remove();
      });

      // Inyectar el HTML sin scripts (div, link, etc.)
      container.innerHTML = temp.innerHTML;

      // Appender clones al DOM — el navegador los ejecuta como scripts nuevos,
      // document.currentScript apunta al clon, y sus data-* están intactos.
      clones.forEach((s) => container.appendChild(s));

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
