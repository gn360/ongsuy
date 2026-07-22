// ============================================================
// Configuración centralizada de la landing
// ============================================================
// Editar solo este archivo para personalizar la landing de cada ONG.
// Los componentes toman sus valores de aquí, no tienen defaults fijos.

export const siteConfig = {
  /** ── Bloque 1: Hero (fondo de color + logo + nombre) ── */
  hero: {
    organizationName: 'Casa Amiga',
    logoSrc:
      'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/281/logo-casa-amiga.png',
    /** Color de fondo (hex, rgb, hsl o clase Tailwind tipo "bg-gray-200") */
    backgroundColor: '#00BD3D',
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
    embedHtml: `<div id="df-donation-form"></div>
<link rel="stylesheet" href="https://donafacil.uy/embed/donation-form.css">
<script src="https://donafacil.uy/embed/donation-form.js" data-slug="casa-amiga-grupo-oncologico-vivir-mejor-20251009113226" data-sku="GHR2JRGZ"></script>`,
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
    organizationName: 'Casa Amiga - Grupo Oncológico "Vivir Mejor"',
    logoSrc:
      'https://tutiimg.nyc3.digitaloceanspaces.com/donaruy/users/281/logo-casa-amiga.png',
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
  },
};
