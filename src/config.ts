// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/13/iE4gIbg7zkBXtRz49wu9K7i3SiJdkf447cd7fg7z.webp';
const color = '#005ab9'; // Color principal de la landing (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200")
const organizationName = 'ASDOPAY'; // Nombre de la ONG, se muestra en Hero y Contacto
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: color,

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: organizationName,
    logoSrc: logoUrl,
    tagline: 'Asociación Síndrome de Down de Paysandú',
    backgroundColor: color,
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Asdopay es una asociación creada hace 25 años, que surge para dar respuesta a padres con hijos con Síndrome de Down. Desde ese momento hemos trabajado incansablemente para garantizar el derecho de inclusión en diferentes áreas de las personas con SD.',
      'Nuestro objetivo es orientar y acompañar a las familias y a las personas con Síndrome de Down, procurando contribuir a mejorar su calidad de vida, defender sus derechos para el logro de una plena inclusión familiar, social, educativa y laboral.',
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    dflink: 'https://donafacil.uy/organizadores/asdopay',
    title: 'Colaborá con nosotros',
    embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
            <script src="https://donafacil.uy/embed/donation-form.js" data-slug="asdopay-20251009112959" data-sku="GWOJFRLY"></script>
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
    phone: '+598 4723 4788',
    email: 'asdopay95@gmail.com',
    address: '33 Orientales 1759, Paysandú, Uruguay',
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
