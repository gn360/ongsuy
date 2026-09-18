// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/logo-casa-ronald-mcdonald-.png';
const organizationName = 'Casa Ronald McDonald';
const color = '#DC0008';
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: color,

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: organizationName,
    logoSrc: logoUrl,
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: color,
    tagline: 'Uruguay',
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-.webp', alt: organizationName },
    ],
  },

  /** ── Bloque 5: Contacto ── */
  contact: {
    organizationName: organizationName,
    logoSrc:
      logoUrl,
    backgroundColor: 'bg-gray-200',
    contacts: [
      {
        title: 'En el Hospital Pereira Rossell',
        phone: '+598 2705 5539',
        address: 'Br. Artigas 1550, Salto, Uruguay',
      },
      {
        title: 'En el Hospital de Tacuarembó',
        phone: '+598 4632 2955 o +598 4632 3812 int.178',
        address: 'Treinta y Tres 444, Tacuarembó, Uruguay',
      },
      {
        title: 'Asociación Casa Ronald McDonald Uruguay',
        email: 'contactenos@casaronaldmcdonald.org.uy',
      },
    ],
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
