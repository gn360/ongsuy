// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/logo-casa-ronald-mcdonald-.png';
const organizationName = 'Casa Ronald McDonald Uruguay';
const color = '#DC0008';
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: color,

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: 'Casa Ronald McDonald Uruguay',
    logoSrc: logoUrl,
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: color,
    tagline: 'Grupo Oncológico "Vivir Mejor"',
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Casa Ronald McDonald Uruguay fue creado para brindar apoyo a las familias con niños que requieren tratamientos médicos prolongados fuera de su ciudad de residencia.',
      'Estas familias generalmente enfrentan dificultades económicas y emocionales, lo que hace que su situación sea aún más desafiante.',
      'Casa Ronald McDonald Uruguay ofrece alojamiento, alimentación y un entorno de apoyo para que las familias puedan concentrarse en la recuperación de sus hijos.',
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    dflink: 'https://donafacil.uy/organizadores/asociacion-casa-ronald-mcdonald-uruguay',
    title: 'Colaborá con nosotros',
    embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
            <script src="https://donafacil.uy/embed/donation-form.js" data-slug="apoya-a-las-familias-de-la-asociacion-casa-ronald-mcdonald-CLFqEJ" data-sku="649DCTJT"></script>`,
  },

  /** ── Bloque 4: Galería ── */
  gallery: {
    title: 'Nuestras actividades',
    images: [
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-amiga/images-01.jpg', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-amiga/images-02.jpg', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-amiga/images-03.jpg', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-amiga/images-04.jpg', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-amiga/images-05.jpg', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-amiga/images-06.jpg', alt: organizationName },
    ],
  },

  /** ── Bloque 5: Contacto ── */
  contact: {
    organizationName: organizationName,
    logoSrc:
      logoUrl,
    backgroundColor: 'bg-gray-200',
    phone: '+598 4733 9077',
    address: 'Cervantes 1035, Salto, Uruguay',
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
