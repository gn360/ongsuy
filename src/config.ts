// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.
const logoUrl = 'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/281/logo-casa-amiga.png';
const organizationName = 'Casa Amiga - Grupo Oncológico "Vivir Mejor"';
const color = '#00BD3D';
export const siteConfig = {
  /** URL del favicon (puede ser externa o local tipo /logo.svg) */
  favicon: logoUrl,

  /** Color de títulos (hex, rgb, etc.). Generalmente = hero.backgroundColor */
  titleColor: color,

  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: 'Casa Amiga',
    logoSrc: logoUrl,
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: color,
    tagline: 'Grupo Oncológico "Vivir Mejor"',
  },

  /** ── Bloque 2: Texto ── */
  text: {
    paragraphs: [
      'Grupo Oncologico Vivir Mejor- Casa Amiga fue creado por un grupo de pacientes oncológicos que vieron la necesidad que existía de contar con un lugar físico para alojar a pacientes oncológicos o familiares que llegan desde distintos puntos del país, a realizarse tratamientos o estudios médicos.',
      'Estos pacientes generalmente no cuentan con los recursos necesarios para afrontar la situación, lo que sumado a la angustia y preocupación por su salud, hace que los casos sean aun mas complejos.',
      'Casa Amiga brinda de forma gratuita estadía, alimentación, abrigo, artículos de higiene y todo lo necesario para que tanto el paciente como su entorno familiar puedan enfocarse en su recuperación.',
    ],
  },

  /** ── Bloque 3: Widget / Iframe ── */
  widget: {
    dflink: 'https://donafacil.uy/organizadores/casa-amiga',
    title: 'Colaborá con nosotros',
    embedHtml: `<div id="df-donation-form"></div>
<link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
<script src="https://donafacil.uy/embed/donation-form.js" data-slug="casa-amiga-grupo-oncologico-vivir-mejor-20251009113226" data-sku="GHR2JRGZ"></script>`,
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
