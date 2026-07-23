// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/5/G6xmbscWQBD0zyM4zsYV19rNBe1n2Yte8ZxSAiuq.webp';
const color = '#292929'; // Color principal de la landing (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200")
const organizationName = 'Amigos de los Animales'; // Nombre de la ONG, se muestra en Hero y Contacto
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: color,

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: organizationName,
    logoSrc:
      logoUrl,
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: color,
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Amigos de los Animales es una organización que trabaja hace 16 años en el rescate, rehabilitación y protección de animales. Nuestro principal objetivo ha sido promover la castración de perros y gatos y de esa manera disminuir la superpoblación de animales que hoy existe en nuestro país.',
      'Somos una ONG pionera en realizar jornadas de castración masiva entendiendo que es la solución para evitar el nacimiento de cientos de animales cada año que sabemos serán abandonados.',
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    dflink: 'https://donafacil.uy/organizadores/amigos-de-los-animales',
    title: 'Colaborá con nosotros',
    embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
            <script src="https://donafacil.uy/embed/donation-form.js" data-slug="amigos-de-los-animales-20251009112959" data-sku="SPEQN7DD"></script>
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
    organizationName: organizationName,
    logoSrc: logoUrl,
    backgroundColor: 'bg-gray-200',
    phone: '+598 98 913 813',
    email: 'ongamigosanimales@gmail.com',
    address: 'Dr. Jose Verocay 727, Paysandú, Uruguay',
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
