import type { Project } from "@/types";

/**
 * Portfolio real de INNHOVEX — cada entrada está escrita como un caso de venta:
 * problema → solución → valor. Los assets viven en /public/projects/<id>/.
 */
export const projects: Project[] = [
  {
    id: "innhovex-saas",
    title: "INNHOVEX SaaS",
    subtitle: "Plataforma multi-tenant de gestión de servicios en campo.",
    tagline: "Un SaaS que ya corre en producción con clientes activos.",
    client: "INNHOVEX · Producto propio",
    role: "Arquitectura · Full stack · DevOps",
    category: "saas",
    year: "2026",
    problem:
      "PyMEs de servicios manejaban órdenes, técnicos y clientes con Excel y WhatsApp: datos perdidos, cobros tardíos y cero trazabilidad.",
    solution:
      "Construí una plataforma FSM multi-tenant con aislamiento por cliente, órdenes con fotos en Blob, notificaciones WhatsApp, dashboards, PDFs firmados y auth robusta.",
    value:
      "Dos empresas reales corriendo hoy: Obra Azul y JEM-SI. Órdenes digitales, técnicos geolocalizados y reportes ejecutivos en tiempo real.",
    logo: "/projects/innhovex-saas/logo.svg",
    logoNegative: "/projects/innhovex-saas/logo-negative.svg",
    image: "/projects/innhovex-saas/hero.png",
    bgColor: "#0A0A0A",
    accentColor: "#1E2A47",
    stack: [
      "Next.js 16",
      "PostgreSQL (Neon)",
      "Prisma 7",
      "NextAuth v5",
      "Vercel Blob",
      "Twilio",
    ],
    highlights: [
      "Multi-tenant con aislamiento por organización",
      "Notificaciones WhatsApp + email transaccional",
      "Dashboards Recharts + export PDF de órdenes",
      "Rate limiting con Upstash Redis",
    ],
    tags: ["Flagship", "Multi-tenant", "Producción"],
    github: "https://github.com/facundo64",
    featured: true,
    order: 1,
  },
  {
    id: "jem-si",
    title: "JEM-SI",
    subtitle: "Grupo Industrial — Metalúrgica, Pack Rack y RCI.",
    tagline: "Sitio corporativo premium para un grupo industrial de Neuquén.",
    client: "Grupo Industrial JEM-SI · Plottier, Neuquén",
    role: "Diseño · Full stack · Motion",
    category: "corporate",
    year: "2025",
    problem:
      "Un grupo con tres unidades de negocio (metalúrgica, racks para packaging y redes contra incendio) sin presencia digital unificada ni canal de leads serios.",
    solution:
      "Landing hub con hero animado frame-by-frame en canvas, páginas dedicadas por empresa, bilingüe ES/EN y formulario transaccional con Resend.",
    value:
      "Identidad industrial consolidada en la región petrolera. Un solo dominio que proyecta tres empresas como ecosistema coordinado.",
    logo: "/projects/jem-si/logo.svg",
    logoNegative: "/projects/jem-si/logo-negative.svg",
    image: "/projects/jem-si/hero.png",
    bgColor: "#141414",
    accentColor: "#C0392B",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "Lenis",
      "Resend",
    ],
    highlights: [
      "Hero canvas 384 frames con fallback LQ",
      "Three microsites bajo un layout compartido",
      "Smooth scrolling Lenis + motion premium",
      "i18n ES/EN con context propio",
    ],
    tags: ["Featured", "Motion", "Bilingüe"],
    github: "https://github.com/facundo64/JEM-SI",
    featured: true,
    order: 2,
  },
  {
    id: "citep",
    title: "CITEP Forense",
    subtitle: "Plataforma institucional + portal privado para estudio forense.",
    tagline: "Autoridad científica y portal seguro de clientes para un estudio pericial.",
    client: "CITEP Forense · Argentina",
    role: "Diseño · Full stack · Auth segura",
    category: "corporate",
    year: "2026",
    problem:
      "Un estudio forense con servicios altamente especializados (informática, balística, documentología, criptoactivos) carecía de autoridad digital y de un canal seguro para entregar informes periciales a sus clientes.",
    solution:
      "Plataforma dual: cara pública con propuesta de valor y SEO forense + portal privado de clientes con auth Supabase, seguimiento de casos y documentos descargables. Panel admin interno para blog y turnos.",
    value:
      "Canal profesional que comunica autoridad técnica y cumple Ley 25.326 de Protección de Datos Personales. Abre la puerta a clientes B2B (estudios jurídicos, empresas) sin exponer expedientes sensibles.",
    logo: "/projects/citep/logo.svg",
    logoNegative: "/projects/citep/logo.svg",
    image: "/projects/citep/hero.png",
    bgColor: "#0F0F0F",
    accentColor: "#C0392B",
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase SSR",
      "Framer Motion",
      "React Hook Form",
      "Resend",
    ],
    highlights: [
      "Portal privado con login seguro y seguimiento de casos",
      "Panel admin para blog, turnos y clientes",
      "Landing con 9 servicios periciales detallados",
      "Cumplimiento Ley 25.326 (protección de datos)",
    ],
    tags: ["Featured", "Auth segura", "Dual-facing"],
    featured: true,
    order: 3,
  },
  {
    id: "cripnar",
    title: "CRIPNAR 2026",
    subtitle: "Congreso Regional de Criminalística — Gendarmería Nacional.",
    tagline: "Portal oficial para un congreso internacional de fuerzas federales.",
    client: "Ministerio de Seguridad · DINACRIMIN · GNA",
    role: "Full stack · Integración Supabase",
    category: "institutional",
    year: "2026",
    problem:
      "La Gendarmería Nacional necesitaba un portal institucional serio para un congreso internacional con disertantes, agenda, inscripciones y streaming.",
    solution:
      "Sitio oficial con branding triple (Ministerio + GNA + DINACRIMIN), agenda dinámica, base de disertantes en Supabase y flujo de inscripción segmentado.",
    value:
      "Congreso con cobertura nacional e internacional, inscripciones administradas digitalmente y un activo institucional reutilizable año tras año.",
    logo: "/projects/cripnar/logo-dinacrimin.svg",
    image: "/projects/cripnar/hero.jpg",
    bgColor: "#0D1B2A",
    accentColor: "#1B4965",
    stack: [
      "Next.js 16",
      "Supabase",
      "Tailwind v4",
      "pnpm workspace",
      "TypeScript",
    ],
    highlights: [
      "Branding institucional triple (Ministerio, GNA, DINACRIMIN)",
      "Gestión de disertantes, agenda y sponsors",
      "Inscripción Nacional / Internacional / Streaming",
      "SEO optimizado + OG images",
    ],
    tags: ["Gobierno", "Institucional"],
    featured: true,
    order: 4,
  },
  {
    id: "obra-azul",
    title: "Obra Azul",
    subtitle: "Diseño, construcción y mantenimiento de piletas.",
    tagline: "Presencia web para una empresa de servicios con 10+ años de trayectoria.",
    client: "Obra Azul · Zona Norte GBA",
    role: "Diseño · Frontend",
    category: "corporate",
    year: "2025",
    problem:
      "Una empresa con trayectoria pero sin web profesional: los leads dependían del boca a boca y del WhatsApp personal del dueño.",
    solution:
      "Landing conversion-first con hero emocional, galería de obras, CTA de WhatsApp y formulario de contacto embebido.",
    value:
      "Canal digital propio para captar consultas de diseño, construcción y mantenimiento sin depender de redes de terceros.",
    image: "/projects/jem-si/warehouse.png",
    bgColor: "#1E2A47",
    accentColor: "#2B4257",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "WhatsApp CTA"],
    highlights: [
      "Diseño mobile-first con paleta corporativa",
      "Galería de proyectos con lazy loading",
      "Integración directa con WhatsApp Business",
      "Performance 95+ en Lighthouse",
    ],
    tags: ["Servicios", "Lead-gen"],
    featured: true,
    order: 5,
  },
  {
    id: "automata",
    title: "Automata",
    subtitle: "Hub Multi-Bot de WhatsApp con IA — infraestructura R&D.",
    tagline: "Una plataforma que convierte audios y mensajes en tareas organizadas.",
    client: "INNHOVEX · R&D interno",
    role: "Arquitectura · Backend · DevOps",
    category: "infra",
    year: "2025",
    problem:
      "Captura desordenada de información personal y profesional (audios, WhatsApp, emails) + necesidad de alojar bots de clientes con aislamiento total.",
    solution:
      "Sistema Operativo Personal en Node.js + Gemini 2.0 Flash que transcribe, clasifica y publica en Notion. Infra Docker + Traefik con routing multi-tenant.",
    value:
      "Base reutilizable para vender bots WhatsApp a PyMEs con onboarding de horas en vez de días. ~80 MB por instancia aislada.",
    image: "/projects/jem-si/building.png",
    bgColor: "#0A0F1E",
    accentColor: "#6B4EFF",
    stack: [
      "Node.js 20",
      "TypeScript",
      "Baileys",
      "Gemini 2.0 Flash",
      "Notion API",
      "Docker + Traefik",
    ],
    highlights: [
      "Transcripción + clasificación IA en background",
      "Hub multi-tenant con bots aislados por cliente",
      "Integración Gmail OAuth 2.0",
      "Atajo iOS para captura de voz instantánea",
    ],
    tags: ["IA", "Multi-tenant", "R&D"],
    featured: false,
    order: 6,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
