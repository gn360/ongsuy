# BASE_APRENDIZAJE — Landing ONG

> Archivo de referencia para sesiones futuras. Resume decisiones, estructura y patrones del proyecto.

## Stack

- **Runtime**: Node.js + Vite 6
- **Framework**: React 18 + TypeScript 5.6
- **Estilos**: Tailwind CSS 3.4 (utility-first)
- **Fuente**: Inter (Google Fonts, cargada vía `@import` en `src/index.css`)

## Estructura

```
landings/
├── index.html              ← entry HTML, monta <div id="root">
├── vite.config.ts          ← server en 0.0.0.0:5173
├── tailwind.config.js      ← extiende colors.primary (blue palette), fontFamily.sans (Inter)
├── postcss.config.js       ← tailwind + autoprefixer
├── tsconfig.json           ← references a tsconfig.app.json y tsconfig.node.json
├── public/
│   ├── logo.svg            ← placeholder logo ONG (círculo azul + corazón)
│   └── logo-donafacil.svg  ← placeholder logo Doná Fácil
└── src/
    ├── main.tsx            ← ReactDOM.createRoot, StrictMode
    ├── App.tsx             ← orquesta los 6 bloques en orden
    ├── index.css           ← @tailwind directives + @import Inter + scroll-behavior
    ├── vite-env.d.ts       ← /// <reference types="vite/client" />
    └── components/
        ├── HeroSection.tsx      ← Bloque 1: fondo de color, logo, nombre, tagline
        ├── TextSection.tsx      ← Bloque 2: título + párrafos (alineación configurable)
        ├── IframeSection.tsx    ← Bloque 3: inyecta <script> vía useEffect (iframe dinámico)
        ├── GallerySection.tsx   ← Bloque 4: título + grid de fotos + lightbox modal
        ├── ContactSection.tsx   ← Bloque 5: fondo de color, logo, nombre, email, tel, dirección, redes
        └── FooterSection.tsx    ← Bloque 6: logo Doná Fácil, texto legal, <hr>, copyright
```

## Diseño responsive

| Breakpoint | Comportamiento |
|---|---|
| Mobile (<768px) | Cada bloque tiene `rounded-[20px]`, wrapper aporta `px-3 py-3 gap-3 bg-gray-100` |
| Desktop (≥768px) | Los prefijos `md:` anulan redondeo, padding y gap; diseño full-width original |

Los bloques con color de fondo (Hero, Gallery, Contact, Footer) usan `overflow-hidden` junto con `rounded-[20px]` para que el contenido no desborde las esquinas.

## Patrones de componentes

- Cada bloque es un componente independiente en `src/components/`
- Todos aceptan props con defaults razonables para funcionar sin configuración
- El color de fondo se pasa como clase Tailwind (ej: `bg-primary-700`, `bg-emerald-600`)
- Las imágenes de galería usan `loading="lazy"` para lazy loading nativo
- El IframeSection usa `useRef` + `useEffect` para inyectar scripts dinámicamente

## Comandos

```bash
npm run dev      # servidor de desarrollo en :5173
npm run build    # tsc -b && vite build
npm run preview  # previsualizar build
```

## Personalización rápida

Para adaptar la landing a una ONG específica, editar `src/App.tsx` pasando props:

```tsx
<HeroSection organizationName="Manos Solidarias" backgroundColor="bg-emerald-700" />
<TextSection title="Nuestra Historia" paragraphs={['...', '...']} />
<IframeSection scriptContent="document.write('...')" />
<GallerySection images={[{src:'/f1.jpg', alt:'...'}]} />
<ContactSection email="info@..." phone="+598..." socialLinks={[...]} />
<FooterSection donaFacilUrl="https://..." />
```

## Decisiones clave

1. **Sin router** — es una single-page landing, no se necesita React Router
2. **Sin estado global** — cada bloque es autónomo, no hay Context/Redux
3. **Tailwind puro** — sin componentes de UI library, para mantener el bundle liviano
4. **TypeScript estricto** — `noUnusedLocals`, `noUnusedParameters` activados
5. **Mobile-first con md: breakpoint** — los estilos base son mobile, los `md:` los sobreescriben en desktop
