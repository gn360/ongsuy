// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/logo-casa-ronald-mcdonald-.png';
const organizationName = 'Casa Ronald McDonald';
//const color = '#DC0008';
const color = 'transparent';
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
    title: 'Campaña “corazones solidarios” de Casa Ronald McDonald Uruguay',
    paragraphs: [
      'En nuestras Casas Ronald en el Hospital Pereira Rossell y el Hospital de Tacuarembó brindamos alojamiento, apoyo y contención a más de 7.000 niños en tratamiento médico y a sus familias cada año.',
      'Vos podés convertirte en Solidario de Corazón y ayudarnos a mantener a las familias cerca.',
      'Tu ayuda hace la diferencia.',
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    dflink: 'https://donafacil.uy/organizadores/asociacion-casa-ronald-mcdonald-uruguay',
    title: 'Colaborá mensualmente',
    /*embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
            <script src="https://donafacil.uy/embed/donation-form.js" data-slug="apoya-a-las-familias-de-la-asociacion-casa-ronald-mcdonald-CLFqEJ" data-sku="649DCTJT"></script>`,*/
    embedHtml: `<div id="df-donation-form"></div>
            <link rel="stylesheet" href="http://localhost:3000/embed/donation-form.css">
            <script src="http://localhost:3000/embed/donation-form.js" data-slug="apoya-a-las-familias-de-la-asociacion-casa-ronald-mcdonald-CLFqEJ" data-sku="649DCTJT"></script>`,
  },

  /** ── Bloque 4: Galería ── */
  gallery: {
    title: 'Gracias a tu donación lo pudimos realizar',
    video_url: 'https://www.youtube.com/embed/GdlwRS0XcG4',
    text: 'Nuestras Casas Ronald son un hogar para miles de familias de niños internados, niños en tratamiento médico y embarazadas de riesgo de todo el país. Allí les brindamos alojamiento, apoyo y contención para que sólo se ocupen de lo que realmente importa, cuidar a sus hijos en los momentos más dificiles.',
    images: [
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-nueva-01.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-nueva-02.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-nueva-03.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-nueva-04.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-nueva-05.webp', alt: organizationName },
      { src: 'https://tutiimg.nyc3.digitaloceanspaces.com/ongsuy/casa-ronald-mcdonald/ronald-foto-nueva-06.webp', alt: organizationName },
    ],
  },

  /** ── Bloque 5: Contacto ── */
  contact: {
    organizationName: organizationName,
    logoSrc:
      logoUrl,
    backgroundColor: 'bg-white',
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
    legalMarks:
      "© 2025 Casa Ronald McDonald House Global. Las siguientes marcas registradas pertenecen a McDonald's Corporation y sus afiliadas: McDonald's, Ronald McDonald House, el logotipo de Ronald McDonald House, Ronald McDonald Family Room y Ronald McDonald Care Mobile.",
    legalAbout:
      'Somos una organización sin fines de lucro cuyo objetivo es apoyar a los niños que se encuentren en tratamientos médicos prolongados y sus familias. Nuestros estatutos fueron aprobados por el Ministerio de Educación y Cultura el 17 de noviembre de 2011 y contamos con la auditoría de EY Uruguay (Ernst & Young).',
  },

  /** ── Bloque 6: Footer ── */
  footer: {
    donaFacilUrl: 'https://donafacil.uy',
    donaFacilLogoSrc:
      'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/recursos/logo-df-color.svg',
    legalText:
      'Las donaciones son fáciles, seguras y transparentes gracias al aval y la tecnología de Doná Fácil, aliados en recaudación de fondos.',
    contactLines: [
      'Teléfono: +598 91 383 000',
      'Dirección: Cnel. Brandzen 1956 Of. 204, Mdeo, Uruguay',
      'Dirección: Rep. Argentina 952, Salto, Uruguay',
      'e-mail: hola@donafacil.uy',
    ],
    developedByText: 'Sitio desarrollado por Doná Fácil.',
    copyrightText: '© 2026 Doná Fácil. Todos los derechos reservados.',
  },
};
