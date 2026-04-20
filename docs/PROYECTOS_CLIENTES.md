# Portfolio INNHOVEX — Proyectos y Clientes

> Documento maestro con la info real de cada proyecto mostrado en el sitio.
> Alimenta `src/data/projects.ts` y los assets en `public/projects/`.
> Actualizado: 2026-04-20.

---

## Índice

1. [INNHOVEX SaaS](#1-innhovex-saas) — Plataforma FSM multi-tenant (producto propio)
2. [JEM-SI Grupo Industrial](#2-jem-si-grupo-industrial) — Sitio corporativo multi-marca
3. [CITEP Forense](#3-citep-forense) — Estudio forense + portal privado
4. [CRIPNAR 2026](#4-cripnar-2026) — Congreso Gendarmería Nacional
5. [Obra Azul](#5-obra-azul) — Empresa de piletas y piscinas
6. [Automata](#6-automata) — Hub Multi-Bot WhatsApp + IA
7. [Clientes de referencia (JEM-SI)](#7-clientes-de-referencia-jem-si)
8. [Convenciones de assets](#8-convenciones-de-assets)

---

## 1. INNHOVEX SaaS

**Categoría:** SaaS multi-tenant · Field Service Management
**Año:** 2026
**Cliente:** Producto propio de INNHOVEX
**Rol:** Arquitectura · Full stack · DevOps
**Repo base:** `saas_obraazul/v2`

### Pitch de venta
Plataforma SaaS multi-tenant de gestión de servicios en campo. Un producto que ya corre en producción con clientes reales.

### Problema
PyMEs de servicios manejaban órdenes, técnicos y clientes con Excel y WhatsApp: datos perdidos, cobros tardíos y cero trazabilidad.

### Solución
Plataforma FSM multi-tenant con aislamiento por cliente, órdenes con fotos en Blob, notificaciones WhatsApp, dashboards, PDFs firmados y auth robusta.

### Valor / Resultado
Dos empresas corriendo hoy: **Obra Azul** y **JEM-SI**. Órdenes digitales, técnicos geolocalizados y reportes ejecutivos en tiempo real.

### Stack técnico
| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Base de datos | PostgreSQL — Neon |
| ORM | Prisma 7 |
| Auth | NextAuth.js v5 (JWT) |
| Validación | Zod |
| Storage | Vercel Blob |
| Email | Resend |
| WhatsApp | Twilio |
| Rate limiting | Upstash Redis |
| Gráficos | Recharts |
| PDF | html2canvas + jsPDF |
| Deploy | Vercel |

### Highlights
- Multi-tenant con aislamiento por organización
- Notificaciones WhatsApp + email transaccional
- Dashboards Recharts + export PDF de órdenes
- Rate limiting con Upstash Redis
- Storage de fotos de órdenes en Vercel Blob

### Tags comerciales
`Flagship` · `Multi-tenant` · `Producción`

### Clientes activos
- **Obra Azul** (servicios de piletas)
- **JEM-SI** (servicios técnicos industriales)

### Assets
- `public/projects/innhovex-saas/logo.svg`
- `public/projects/innhovex-saas/logo-negative.svg`
- `public/projects/innhovex-saas/hero.png`

---

## 2. JEM-SI Grupo Industrial

**Categoría:** Sitio corporativo · Multi-marca
**Año:** 2025
**Cliente:** Grupo Industrial JEM-SI — Plottier, Neuquén, Argentina
**Rol:** Diseño · Full stack · Motion
**Repo:** https://github.com/facundo64/JEM-SI
**Sede:** Plottier, Neuquén (zona petrolera patagónica)

### Unidades de negocio
El grupo JEM-SI engloba **3 empresas**:
1. **Metalúrgica JEM** — diseño y fabricación metalúrgica
2. **Pack Rack** — soluciones de racks para packaging
3. **RCI** — Redes Contra Incendio

### Pitch de venta
Sitio corporativo premium para un grupo industrial de Neuquén — tres empresas bajo un solo ecosistema digital coordinado.

### Problema
Grupo con tres unidades de negocio sin presencia digital unificada ni canal de leads serios.

### Solución
Landing hub con hero animado frame-by-frame en canvas, páginas dedicadas por empresa, bilingüe ES/EN y formulario transaccional con Resend.

### Valor / Resultado
Identidad industrial consolidada en la región petrolera. Un solo dominio que proyecta tres empresas como ecosistema coordinado.

### Stack técnico
| Tecnología | Uso |
|------------|-----|
| Next.js 16 | App Router |
| TypeScript | Tipado estricto |
| Tailwind CSS v4 | Estilos |
| Framer Motion | Animaciones |
| Lenis | Smooth scrolling |
| Resend | Formulario de contacto |
| Vercel | Deploy (auto desde `master`) |

### Highlights
- Hero canvas 384 frames HQ (1920×1080 @ 24fps) con fallback LQ 240 frames (960×540 @ 15fps)
- Three microsites bajo un `CompanyLayout` compartido
- Smooth scrolling Lenis + Framer Motion premium
- i18n ES/EN con context propio (`language-context.tsx`)
- Formulario Resend con API route protegida

### Rutas del sitio
- `/` — Hub principal con `ScrollVideoHero`
- `/metalurgica` — Metalúrgica JEM
- `/packrack` — Pack Rack
- `/rci` — RCI (Redes Contra Incendio)

### Tags comerciales
`Featured` · `Motion` · `Bilingüe`

### Assets
- `public/projects/jem-si/logo.svg` (vectorizado)
- `public/projects/jem-si/logo-negative.svg` (negativo para fondos oscuros)
- `public/projects/jem-si/hero.png` (metalwork hero)
- `public/projects/jem-si/building.png` (finished building)
- `public/projects/jem-si/warehouse.png` (industrial warehouse)

### Galería de proyectos reales disponibles (en repo origen)
**Metalúrgica JEM:** galpón medición, galpón shelter, pérgola, plegado, portones, rejas, soldadura
**Pack Rack:** 5 fotos de productos + hero
**RCI:** instalación + 4 fotos de obra

### Proyectos destacados ejecutados por el cliente
- Galpón de Almacenamiento — Tecpetrol, La Calera
- Galpón para Puente de Medición — Pan American Energy, ULACT Sierras Blancas
- Galpón Shelter de Incendio — Pan American Energy, CPF Coiron Amargo Sureste

---

## 3. CITEP Forense

**Categoría:** Sitio corporativo + Portal privado · Dual-facing
**Año:** 2026
**Cliente:** CITEP Forense — Estudio pericial particular (Argentina)
**Rol:** Diseño · Full stack · Auth segura
**Repo base:** `pagina web/CITEP` (proyecto `citep-forense`)

### Pitch de venta
Plataforma institucional + portal privado de clientes para un estudio forense argentino. Autoridad científica y entrega segura de informes periciales en un solo dominio.

### Problema
Un estudio forense con servicios altamente especializados (informática, balística, documentología, criptoactivos) carecía de autoridad digital y de un canal seguro para entregar informes periciales a sus clientes.

### Solución
Plataforma dual:
- **Cara pública** — landing con propuesta de valor, 9 páginas de servicios, blog, SEO forense, formulario de contacto y turnos.
- **Portal privado** — login seguro con Supabase, vista del estado del caso, documentos descargables.
- **Panel admin interno** — gestión de artículos, turnos y clientes.

### Valor / Resultado
Canal profesional que comunica autoridad técnica y cumple la **Ley 25.326 de Protección de Datos Personales (Argentina)**. Abre la puerta a clientes B2B (estudios jurídicos, empresas) sin exponer expedientes sensibles.

### Servicios que ofrece el cliente (detallados en el sitio)
1. Informática Forense, Evidencia Digital y Criptoactivos
2. Documentología y Caligrafía Forense
3. Accidentología Vial
4. Balística Forense
5. Papiloscopía y Rastros
6. Control de Pericias Oficiales
7. Asesoramiento Estratégico a Abogados
8. Reinspección del Lugar del Hecho
9. Redacción y Defensa de Informes Periciales

### Audiencia objetivo
| Segmento | Necesidad principal |
|----------|---------------------|
| Estudios jurídicos / abogados | Peritos de parte, revisión de pericias |
| Empresas privadas | Investigaciones internas, fraudes digitales |
| Particulares | Casos civiles / penales con perito propio |
| Juzgados / Organismos | Designación de peritos en causas |

### Stack técnico
| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.2.3 |
| UI | React 19.2.3 |
| Estilos | Tailwind CSS v4 |
| Base de datos / Auth | Supabase SSR (`@supabase/ssr`, `@supabase/supabase-js`) |
| Animaciones | Framer Motion 12 |
| Smooth scroll | Lenis |
| Formularios | React Hook Form + Zod (resolvers) |
| Email | Resend 6 |
| Iconos | lucide-react |
| Package manager | pnpm workspace |

### Highlights
- Portal privado con login seguro y seguimiento de casos
- Panel admin para blog, turnos y clientes
- Landing con 9 servicios periciales detallados
- Cumplimiento Ley 25.326 (protección de datos)
- SEO forense (keywords: "perito informático forense Argentina", "perito documentólogo Buenos Aires")
- Mobile-first + Core Web Vitals en verde

### Rutas del sitio
- `/` — Landing pública
- `/login`, `/auth`, `/forgot-password`, `/reset-password`, `/cambiar-contrasena` — Auth flows
- `/dashboard` — Portal privado de clientes
- `/proximamente` — holding page

### Tags comerciales
`Featured` · `Auth segura` · `Dual-facing`

### Identidad visual
- **Isotipo:** rombo forense rojo `#ff0000` (funciona sobre claro y oscuro)
- **Assets artísticos:** ciber, documento, huella dactilar — para ilustraciones de servicios

### Assets
- `public/projects/citep/logo.svg` (isotipo rojo principal)
- `public/projects/citep/logo-rombo.svg` (isotipo romboide alternativo)
- `public/projects/citep/hero.png` (digital forensics hero)
- `public/projects/citep/cyber.png`
- `public/projects/citep/fingerprint.png`

---

## 4. CRIPNAR 2026

**Categoría:** Portal institucional · Evento
**Año:** 2026
**Cliente:** Ministerio de Seguridad Nacional · DINACRIMIN · Gendarmería Nacional Argentina (GNA)
**Rol:** Full stack · Integración Supabase
**Sede del congreso:** Centro Cultural de la Ciencia (C3), Godoy Cruz 2270, CABA
**URL oficial original:** https://cripnar.gna.gob.ar

### Pitch de venta
Portal oficial para un congreso internacional de fuerzas federales — Gendarmería, DINACRIMIN y Ministerio de Seguridad.

### Problema
La Gendarmería Nacional necesitaba un portal institucional serio para un congreso internacional con disertantes, agenda, inscripciones y streaming.

### Solución
Sitio oficial con branding triple (Ministerio + GNA + DINACRIMIN), agenda dinámica, base de disertantes en Supabase y flujo de inscripción segmentado.

### Valor / Resultado
Congreso con cobertura nacional e internacional, inscripciones administradas digitalmente y un activo institucional reutilizable año tras año.

### Datos del evento
| Campo | Detalle |
|-------|---------|
| Nombre completo | Congreso Regional de Criminalística y Estudios Forenses, Criptoactivos y Narcotráfico |
| Slogan | "Ciencia, cooperación y tecnología al servicio de la verdad y justicia" |
| Fecha | 2 al 4 de Diciembre 2025 |
| Modalidad | Presencial + Streaming |
| Plataforma de inscripción | cualitpass.com |

### Objetivos del congreso
1. Fortalecer cooperación interinstitucional (Fuerzas, MPF, Justicia Federal, Ministerio)
2. Actualización técnico-profesional en criminalística, criptoactivos y análisis forense
3. Prevención y respuesta al crimen organizado (protocolos, cadena de custodia)

### Tipos de inscripción
- Nacional (residentes en Argentina)
- Internacional (residentes en el exterior)
- Streaming (Auditorio Online / Remoto)

### Stack técnico
- Next.js 16 (App Router)
- Supabase (disertantes, inscripciones)
- Tailwind CSS v4
- TypeScript
- pnpm workspace

### Highlights
- Branding institucional triple (Ministerio, GNA, DINACRIMIN)
- Gestión de disertantes, agenda y sponsors
- Tres flujos de inscripción (Nacional / Internacional / Streaming)
- SEO optimizado + OG images

### Disertantes destacados
- **Dr. Martín Verrier** — Secretario de Lucha contra el Narcotráfico y la Criminalidad Organizada
- **Dr. Pablo Francisco Argibay Molina** — Director Nacional de Investigaciones de Delitos Federales

### Tags comerciales
`Gobierno` · `Institucional`

### Assets
- `public/projects/cripnar/logo-dinacrimin.svg`
- `public/projects/cripnar/logo-gn.svg` (Gendarmería Nacional)
- `public/projects/cripnar/logo-minseg.svg` (Ministerio de Seguridad)
- `public/projects/cripnar/favicon.svg`
- `public/projects/cripnar/hero.jpg`
- `public/projects/cripnar/hero2.jpg`

---

## 5. Obra Azul

**Categoría:** Sitio corporativo · Servicios
**Año:** 2025
**Cliente:** Obra Azul — Zona Norte GBA (Buenos Aires)
**Rol:** Diseño · Frontend
**Repo base:** `obra-azul-web`
**Trayectoria del cliente:** +10 años en diseño, construcción y mantenimiento de piletas

### Pitch de venta
Presencia web profesional para una empresa de servicios de piletas con más de 10 años de trayectoria.

### Problema
Empresa con trayectoria pero sin web profesional: los leads dependían del boca a boca y del WhatsApp personal del dueño.

### Solución
Landing conversion-first con hero emocional, galería de obras, CTA de WhatsApp y formulario de contacto embebido.

### Valor / Resultado
Canal digital propio para captar consultas de diseño, construcción y mantenimiento sin depender de redes de terceros.

### Servicios que ofrece el cliente
- Diseño de piletas
- Construcción
- Reparación
- Mantenimiento

### Stack técnico
- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Integración directa WhatsApp Business

### Highlights
- Diseño mobile-first con paleta corporativa azul/slate
- Galería de proyectos con lazy loading
- Integración directa con WhatsApp Business
- Performance 95+ en Lighthouse

### Secciones del sitio
`Hero` · `Nosotros` · `Features` · `Gallery` · `Footer` · `WhatsAppButton`

### Paleta
- Fondo principal: `#2B4257` (azul corporativo)
- Gris profundo: `#1D1E20`
- Acento: blanco con 85% opacity sobre azul

### Tags comerciales
`Servicios` · `Lead-gen`

### Assets
- `public/projects/obra-azul/` (placeholders — usar hero industrial temporal)
- TODO: conseguir fotos reales de piletas del cliente para reemplazar

---

## 6. Automata

**Categoría:** Infraestructura R&D · IA + Multi-Bot
**Año:** 2025
**Cliente:** INNHOVEX (R&D interno)
**Rol:** Arquitectura · Backend · DevOps
**Repo base:** `Automata`

### Pitch de venta
Sistema Operativo Personal + Hub Multi-Bot de WhatsApp con IA — infraestructura reutilizable para vender bots a PyMEs.

### Problema
Captura desordenada de info personal y profesional (audios, WhatsApp, emails) + necesidad de alojar bots de clientes con aislamiento total.

### Solución
Sistema Operativo Personal en Node.js + Gemini 2.0 Flash que transcribe, clasifica y publica en Notion. Infra Docker + Traefik con routing multi-tenant.

### Valor / Resultado
Base reutilizable para vender bots WhatsApp a PyMEs con onboarding de horas (no días). ~80 MB por instancia aislada.

### Stack técnico
| Tecnología | Rol |
|------------|-----|
| TypeScript + Node.js 20 | Lenguaje base (strict mode) |
| Baileys | WhatsApp (sin Chrome, ~80MB/instancia) |
| Google Gemini 2.0 Flash | IA: transcripción de audio + clasificación |
| Notion API | Base de datos visual de tareas |
| Gmail API (OAuth 2.0) | Escaneo automático de bandeja |
| Express.js | API REST para atajo iOS |
| Docker + Traefik | Infra y routing multi-tenant |
| Zod | Validación de entorno en arranque |

### Highlights
- Transcripción + clasificación IA en background
- Hub multi-tenant con bots aislados por cliente
- Integración Gmail OAuth 2.0
- Atajo iOS para captura de voz instantánea
- Base de datos visual por color en Notion

### Módulos documentados
- `INFRA.md` — VPS, Docker, Traefik, firewall, deploy
- `SERVICES.md` — Gemini, Notion, Gmail APIs
- `BOT_CORE.md` — bot personal WhatsApp, Baileys, handlers
- `MULTITENANT.md` — onboarding, aislamiento, escalado
- `TYPES.md` — interfaces TypeScript
- `ENV.md` — variables de entorno con Zod
- `IOS_SHORTCUT.md` — atajo de voz iPhone
- `NOTION_SETUP.md` — configuración base de datos maestra

### Tags comerciales
`IA` · `Multi-tenant` · `R&D`

### Assets
- `public/projects/automata/` (placeholders — usar imagen industrial temporal)

---

## 7. Clientes de referencia (JEM-SI)

Logos reales de clientes y proveedores del grupo JEM-SI, disponibles en `public/projects/clients/` para el marquee "Marcas que confían en nosotros".

| Logo | Cliente | Tipo |
|------|---------|------|
| `plpServiciosSRL.png` | PLP Servicios SRL | Cliente |
| `emacon_logo.png` | Emacon | Cliente |
| `logo_altocomahue.png` | Alto Comahue | Cliente |
| `yenny_logo.jpg` | Yenny | Cliente |
| `sarkany-logo.webp` | Sarkany | Cliente |
| `Logo_segar.svg` | Segar | Cliente |
| `confluencia_transp.png` | Confluencia | Cliente |
| `Header-logo.svg` | — | Cliente |
| `logo arco.svg` | Arco | Cliente |
| `logo-pan-american-energy-pae@2x.png` | Pan American Energy (PAE) | Cliente petrolero |
| `hydro_solution.png` | Hydro Solution | Cliente |
| `portal_patagonia.png` | Portal Patagonia | Cliente |
| `sap_logo.png` | SAP | Tecnología |

---

## 8. Convenciones de assets

### Estructura en `public/projects/`
```
public/projects/
├── automata/               # TODO: hero
├── citep/
│   ├── logo.svg
│   ├── logo-rombo.svg
│   ├── hero.png
│   ├── cyber.png
│   └── fingerprint.png
├── clients/                # Logos de clientes (marquee futuro)
├── cripnar/
│   ├── logo-dinacrimin.svg
│   ├── logo-gn.svg
│   ├── logo-minseg.svg
│   ├── favicon.svg
│   ├── hero.jpg
│   └── hero2.jpg
├── innhovex-saas/
│   ├── logo.svg
│   ├── logo-negative.svg
│   └── hero.png
├── jem-si/
│   ├── logo.svg
│   ├── logo-negative.svg
│   ├── hero.png
│   ├── building.png
│   └── warehouse.png
└── obra-azul/              # TODO: fotos reales del cliente
```

### Naming
- `logo.svg` — logo principal (para fondos claros)
- `logo-negative.svg` — logo negativo (para fondos oscuros / imágenes)
- `hero.*` — imagen principal de la tarjeta (1920×1080 ideal)
- Extras opcionales (`building.png`, `warehouse.png`, etc.)

### Formatos
- **Logos:** SVG siempre que sea posible
- **Fotos:** PNG para assets con transparencia, JPG para fotografías puras (80-85% calidad)
- **Next.js:** todas se sirven via `next/image` con `fill` + `sizes` responsive

### Paleta por proyecto (`bgColor` en data)
| Proyecto | Hex | Uso |
|----------|-----|-----|
| INNHOVEX SaaS | `#0A0A0A` | Dark premium |
| JEM-SI | `#141414` | Industrial |
| CITEP Forense | `#0F0F0F` | Forense / noir |
| CRIPNAR | `#0D1B2A` | Institucional naval |
| Obra Azul | `#1E2A47` | Corporate azul |
| Automata | `#0A0F1E` | Tech profundo |

---

## Pendientes / Mejoras futuras

- [ ] Conseguir fotos reales del sitio de Obra Azul (piletas del cliente)
- [ ] Screenshots del dashboard del SaaS INNHOVEX para `hero.png`
- [ ] Hero real de Automata (actualmente placeholder)
- [ ] Activar componente `BrandsMarquee` con los 13 logos de clientes
- [ ] Agregar case study profundo por proyecto (`/work/[slug]`) con galería
- [ ] Métricas cuantitativas por proyecto (usuarios, órdenes/mes, uptime)

---

**Mantenimiento:** cuando agregues un proyecto nuevo, actualizar en este orden:
1. Copiar assets a `public/projects/<id>/`
2. Agregar entry en `src/data/projects.ts`
3. Si aporta un cliente nuevo de referencia, sumarlo a `clients/`
4. Actualizar este documento
