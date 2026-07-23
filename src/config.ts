// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/17/sSu4Li4xgP1TOChS7JLChEbcpDD8lmVWEAhrvyYj.webp';
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: '#0093D6',

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: 'Centro Integral Flavia',
    logoSrc:
      logoUrl,
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: '#0093D6',
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Centro Integral Flavia nació en el 2005 por iniciativa de Caty Caffreé, mamá de una joven autista.',
      'Es un hogar de 24 horas que acoge a más de 30 adolescentes, jóvenes y adultos con patologías psiquiátricas y discapacidad intelectual. Es un espacio de contención, donde se promueve la escucha y el acompañamiento.',
      'El mayor objetivo del Centro Flavia es trabajar para que puedan insertarse en la sociedad y generar vínculos con sus familias y/o referentes en función a las necesidades y posibilidades de cada una de ellas. Para lograrlo buscamos siempre espacios de inclusión que van más allá de la educación formal, espacios de intercambio con la sociedad que los enriquecen.',
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    title: 'Colaborá con nosotros',
    embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
            <script src="https://donafacil.uy/embed/donation-form.js" data-slug="centro-flavia-20251009112959" data-sku="QQPJGJM1"></script>
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
    organizationName: 'Centro Integral Flavia',
    logoSrc: logoUrl,
    backgroundColor: 'bg-gray-200',
    phone: '+598 4733 5707',
    email: 'centroflavia@gmail.com',
    address: 'Uruguay Nº 1461, Salto, Uruguay',
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
