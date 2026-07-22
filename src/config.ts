// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/69/wgJPX0B0gD61PrZZwG1NqLQBApEfV8f0t6Ftgxu3.jpg';
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: '#6400ed',

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: 'FUNDACIÓN TROMPO AZUL',
    logoSrc:
      logoUrl,
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: '#6400ed',
    tagline: 'Entendemos de autismo',
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Somos una fundación dedicada a la atención de niños y adolescentes con autismo, ofreciendo y promoviendo educación de alta calidad y atención terapéutica personalizada.',
      'Brindamos también capacitación continua a profesionales en temas específicos y acompañamiento a las familias para que se transforme en un trabajo en equipo.',
      'Trabajamos con cada niño de manera individual de acuerdo a sus necesidades, acordando un pan de trabajo con la familia, el que se evalúa y ajusta periódicamente. Con las intervenciones individuales y grupales buscamos estimular la comunicación, el juego, las habilidades sociales y académico-funcionales.',
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    title: 'Colaborá con nosotros',
    embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
            <script src="https://donafacil.uy/embed/donation-form.js" data-slug="fundacion-trompo-azul-20251009113224" data-sku="QSNCVQJV"></script>
    `,
  },

  /** ── Bloque 4: Galería ── */
  gallery: {
    title: 'Nuestras actividades',
    images: [
      { src: 'https://picsum.photos/seed/ong1/600/400', alt: 'Actividad comunitaria 1' },
      { src: 'https://picsum.photos/seed/ong2/600/400', alt: 'Actividad comunitaria 2' },
      { src: 'https://picsum.photos/seed/ong3/600/400', alt: 'Actividad comunitaria 3' },
      { src: 'https://picsum.photos/seed/ong4/600/400', alt: 'Actividad comunitaria 4' },
      { src: 'https://picsum.photos/seed/ong5/600/400', alt: 'Actividad comunitaria 5' },
      { src: 'https://picsum.photos/seed/ong6/600/400', alt: 'Actividad comunitaria 6' },
    ],
  },

  /** ── Bloque 5: Contacto ── */
  contact: {
    organizationName: 'FUNDACIÓN TROMPO AZUL',
    logoSrc: logoUrl,
    backgroundColor: 'bg-gray-200',
    phone: '+598 91 944 470',
    email: 'info@trompoazul.org',
    address: 'Av. Pérez Butler, M9622 S11 El Pinar, Canelones, Uruguay',
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
