import { useEffect, useRef } from 'react';

interface IframeSectionProps {
  /**
   * HTML completo para embeber contenido de terceros.
   * Se renderiza dentro de un <iframe> (about:blank + document.write)
   * para que los scripts se ejecuten correctamente y el iframe herede
   * el origin de la página padre.
   *
   * Ejemplo (Doná Fácil):
   * `<div id="df-donation-form"></div>
   *  <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
   *  <script src="https://donafacil.uy/embed/donation-form.js" data-slug="..." data-sku="..."></script>`
   */
  embedHtml?: string;
  /** @deprecated Usar embedHtml. Script simple a inyectar sin iframe. */
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

    // Modo embedHtml: iframe about:blank + document.write (hereda origin del padre)
    if (embedHtml) {
      container.innerHTML = '';

      const docHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: Inter, system-ui, -apple-system, sans-serif;
      background: transparent;
      overflow: hidden;
    }
  </style>
</head>
<body>
${embedHtml}
</body>
</html>`;

      const iframe = document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.minHeight = minHeight;
      iframe.style.display = 'block';
      iframe.style.overflow = 'hidden';
      iframe.setAttribute('scrolling', 'no');

      container.appendChild(iframe);

      // Escribir el HTML en el iframe (about:blank hereda origin del padre)
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(docHtml);
        doc.close();
      }

      const handleMessage = (e: MessageEvent) => {
        if (e.data && typeof e.data === 'object' && e.data.type === 'resize') {
          iframe.style.height = e.data.height + 'px';
        }
      };
      window.addEventListener('message', handleMessage);

      return () => {
        window.removeEventListener('message', handleMessage);
        container.innerHTML = '';
      };
    }
  }, [embedHtml, scriptContent, minHeight]);

  const defaultFallback = `
    <div class="flex items-center justify-center w-full h-full bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
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
