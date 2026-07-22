import { useEffect, useRef } from 'react';

interface IframeSectionProps {
  /**
   * HTML completo para embeber contenido de terceros.
   * Incluye divs, links CSS, y scripts con atributos (data-slug, data-sku, etc.).
   * Los scripts se extraen y ejecutan como elementos reales para que funcionen.
   *
   * Ejemplo (Doná Fácil):
   * `<div id="df-donation-form"></div>
   *  <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
   *  <script src="https://donafacil.uy/embed/donation-form.js" data-slug="..." data-sku="..."></script>`
   */
  embedHtml?: string;
  /** @deprecated Usar embedHtml. Script simple a inyectar (sin div ni link). */
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
  minHeight = '500px',
}: IframeSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const html = embedHtml || scriptContent;
    if (!html) return;

    // Modo legacy: solo script, inyectar directamente
    if (scriptContent && !embedHtml) {
      container.innerHTML = '';
      const script = document.createElement('script');
      script.textContent = scriptContent;
      container.appendChild(script);
      return;
    }

    // Modo embedHtml: parsear, inyectar HTML no-script, luego ejecutar scripts
    container.innerHTML = '';

    const temp = document.createElement('div');
    temp.innerHTML = embedHtml!;

    // Extraer y eliminar scripts del HTML parseado
    const oldScripts = temp.querySelectorAll('script');
    const newScripts: HTMLScriptElement[] = [];

    oldScripts.forEach((old) => {
      const s = document.createElement('script');
      Array.from(old.attributes).forEach((attr) =>
        s.setAttribute(attr.name, attr.value),
      );
      if (old.textContent) s.textContent = old.textContent;
      newScripts.push(s);
      old.remove();
    });

    // Inyectar HTML sin scripts (divs, links, etc.)
    container.innerHTML = temp.innerHTML;

    // Ejecutar scripts como elementos reales
    newScripts.forEach((s) => container.appendChild(s));
  }, [embedHtml, scriptContent]);

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
        style={{ minHeight }}
        dangerouslySetInnerHTML={{
          __html: showFallback ? (fallbackHtml ?? defaultFallback) : '',
        }}
      />
    </section>
  );
}
