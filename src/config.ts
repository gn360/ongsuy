// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/110/1pubJAN3ubXDRmTkaVKmYQKKLegfjm76aZLvzgqe.webp';
const organizationName = 'MUCHO BICHO';
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: '#C31D82',

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: organizationName,
    logoSrc:
      logoUrl,
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: '#C31D82',
    tagline: 'Protectora de animales Tacuarembó',
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Mucho bicho Tacuarembó, es un refugio con más de 22 años de trayectoria, dedicado al rescate y cuidado de perros que han sido abandonados o maltratados.',
      'Actualmente alberga a más de 300 animales. Su prioridad es recuperarlos, alimentarlos y brindarles el amor que siempre merecieron. Además, se aseguran de encontrarles un hogar donde sean tratados con el respeto y cariño que merecen.',      
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    dflink: 'https://donafacil.uy/organizadores/mucho-bicho-tacuarembo-1',
    title: 'Colaborá con nosotros',
    embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
            <script src="https://donafacil.uy/embed/donation-form.js" data-slug="mucho-bicho-tacuarembo-20251009113224" data-sku="YPPRCXBQ"></script>
    `,
  },

  /** ── Bloque 4: Galería ── */
  gallery: {
    title: 'Nuestras actividades',
    images: [
      { src: 'https://picsum.photos/seed/ong1/600/400', alt: organizationName },
      { src: 'https://picsum.photos/seed/ong2/600/400', alt: organizationName },
      { src: 'https://picsum.photos/seed/ong3/600/400', alt: organizationName },
      { src: 'https://picsum.photos/seed/ong4/600/400', alt: organizationName },
      { src: 'https://picsum.photos/seed/ong5/600/400', alt: organizationName },
      { src: 'https://picsum.photos/seed/ong6/600/400', alt: organizationName },
    ],
  },

  /** ── Bloque 5: Contacto ── */
  contact: {
    organizationName: organizationName,
    logoSrc: logoUrl,
    backgroundColor: 'bg-gray-200',
    email: 'muchobichotacuarembo@gmail.com',
    address: 'Intersección rutas 5 y 26, Tacuarembó, Uruguay',
  },

  /** ── Bloque 6: Footer ── */
  footer: {
    donaFacilUrl: 'https://donafacil.uy',
    donaFacilLogoSrc:
      'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/recursos/logo-df-gris.png',
    legalText:
      'Las donaciones son fáciles, seguras y transparentes gracias al aval y la tecnología de Doná Fácil, aliados en recaudación de fondos.\n\nSitio desarrollado por Doná Fácil.',
      copyrightText: '© 2026 Doná Fácil. Todos los derechos reservados.',
  },
};
