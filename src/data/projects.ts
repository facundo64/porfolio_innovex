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
    subtitle: "Marca, sitio y piezas de venta para un grupo industrial con tres divisiones.",
    tagline: "Una marca paraguas y tres divisiones: sitio, folletos y piezas para WhatsApp.",
    client: "Grupo Industrial JEM-SI · Plottier, Neuquén",
    role: "Identidad · Sitio · Piezas de venta",
    category: "corporate",
    year: "2025",
    problem:
      "Un grupo de Plottier con tres negocios —metalúrgica, redes contra incendio y racks— se presentaba como tres empresas sueltas, sin una imagen común ni material para vender.",
    solution:
      "Un sistema de marca con un color por división, un sitio con una entrada propia para cada una y folletos en A4 y en formato celular para mandar por WhatsApp.",
    value:
      "El grupo se presenta como un todo y cada división tiene su material de venta listo para mandar.",
    i18n: {
      en: {
        subtitle: "Brand, website and sales materials for an industrial group with three divisions.",
        tagline: "One umbrella brand and three divisions: website, brochures and pieces for WhatsApp.",
        role: "Identity · Website · Sales materials",
        problem:
          "A group from Plottier with three businesses —metalworks, fire protection networks and racks— presented itself as three separate companies, with no shared image and no material to sell with.",
        solution:
          "A brand system with one color per division, a website with its own entrance for each one, and A4 brochures plus a phone format to send over WhatsApp.",
        value:
          "The group presents itself as a whole, and each division has its sales material ready to send.",
        highlights: ["Umbrella brand with one color per division", "A website with its own entrance per division", "A4 brochures plus a phone version", "Email signature and quote template with the brand"],
      },
    },
    logo: "/projects/jem-si/logo.svg",
    logoNegative: "/projects/jem-si/logo-iso-white.svg",
    cardLogo: "/projects/jem-si/logo.svg",
    cardLogoInvert: true,
    image: "/projects/jem-si/1773457724215 copia.png",
    bgColor: "#141414",
    accentColor: "#7f2e22ff",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "Lenis",
      "Resend",
    ],
    highlights: ["Marca paraguas con un color por división", "Un sitio con una entrada propia por división", "Folletos A4 y versión para celular", "Firma de correo y presupuesto con la marca"],
    tags: ["Identidad", "Industria"],
    github: "https://github.com/facundo64/JEM-SI",
    discipline: ["Identidad", "Diseño web", "Piezas de venta"],
    gallery: [
      {
        phase: "Discovery",
        caption:
          "Sesiones con el equipo del grupo para mapear las tres unidades de negocio y definir la narrativa industrial unificada.",
      },
      {
        phase: "Sistema visual",
        caption:
          "Lenguaje gráfico, tipografía y motion principles. Tokens compartidos entre los tres microsites.",
      },
      {
        phase: "Hero canvas",
        caption:
          "Secuencia de 384 frames optimizada con fallback de baja calidad. Loop continuo en scroll vertical.",
      },
      {
        phase: "Implementación",
        caption:
          "Plataforma desplegada en entorno privado del cliente. Iteración continua con el área de comunicación.",
      },
    ],
    featured: true,
    order: 2,
  },
  {
    id: "citep",
    title: "CITEP Forense",
    subtitle: "Marca, sitio y sistema interno para un estudio pericial.",
    tagline: "La marca, el sitio y el sistema interno con el que el estudio gestiona sus pericias.",
    client: "CITEP Forense · Argentina",
    role: "Identidad · Sitio · Sistema interno",
    category: "corporate",
    year: "2026",
    problem:
      "Un estudio pericial que trabaja para abogados, empresas y particulares necesitaba verse tan serio como su trabajo y ordenar cada consulta desde que llega hasta el dictamen.",
    solution:
      "Marca redibujada, un sitio con una página por disciplina y reserva de turnos, y un sistema interno con acceso separado para administración y peritos.",
    value:
      "Cada consulta que entra por la web se convierte en expediente y sigue hasta el dictamen con el mismo número; el presupuesto sale del sistema con la marca del estudio.",
    i18n: {
      en: {
        subtitle: "Brand, website and internal system for a forensic expert firm.",
        tagline: "The brand, the website and the internal system the firm uses to manage its cases.",
        role: "Identity · Website · Internal system",
        problem:
          "A forensic expert firm working for lawyers, companies and individuals needed to look as serious as its work, and to keep every inquiry in order from first contact to final report.",
        solution:
          "A redrawn brand, a website with a page per discipline and online booking, and an internal system with separate access for administration and experts.",
        value:
          "Every inquiry that comes in through the website becomes a case file and follows through to the final report under the same number; quotes come out of the system with the firm's brand.",
        highlights: ["Brand redrawn in vector, with variants and palette", "A page per discipline and online booking", "Internal system with access for administration and experts", "Quotes with the firm's brand"],
      },
    },
    logo: "/projects/citep/logo.svg",
    logoNegative: "/projects/citep/logo.svg",
    image: "/projects/citep/uri-ifs---M-8f4934ed-a78d-4a28-baca-0ad4a8b8da8b-2.webp",
    bgColor: "#0F0F0F",
    accentColor: "#2A3138",
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase SSR",
      "Framer Motion",
      "React Hook Form",
      "Resend",
    ],
    highlights: ["Marca redibujada en vector, con versiones y paleta", "Una página por disciplina y reserva de turnos", "Sistema interno con accesos para administración y peritos", "Presupuestos con la marca del estudio"],
    tags: ["Identidad", "Sistema interno"],
    demo: "https://www.citep-forense.com/",
    discipline: ["Identidad", "Diseño web", "Sistema interno"],
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
    i18n: {
      en: {
        subtitle: "Regional Criminalistics Congress — National Gendarmerie.",
        tagline: "Official portal for an international federal forces congress.",
        role: "Full stack · Supabase integration",
        problem:
          "The National Gendarmerie needed a serious institutional portal for an international congress with speakers, agenda, registrations and streaming.",
        solution:
          "Official site with triple branding (Ministry + GNA + DINACRIMIN), dynamic agenda, speakers database in Supabase and segmented registration flow.",
        value:
          "Congress with national and international coverage, digitally managed registrations and an institutional asset reusable year after year.",
        highlights: [
          "Triple institutional branding (Ministry, GNA, DINACRIMIN)",
          "Speakers, agenda and sponsors management",
          "National / International / Streaming registration",
          "SEO optimized + OG images",
        ],
      },
    },
    logo: "/projects/cripnar/favicon.svg",
    image: "/projects/cripnar/hero.jpg",
    bgColor: "#0B140E",
    accentColor: "#1C2A22",
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
    status: "in-progress",
    discipline: ["Diseño", "Desarrollo", "Integración Supabase", "SEO institucional"],
    gallery: [
      {
        phase: "Discovery institucional",
        caption:
          "Relevamiento con DINACRIMIN y GNA para mapear los tres ejes de marca (Ministerio, Gendarmería, Congreso) bajo un mismo paraguas visual.",
      },
      {
        phase: "Branding triple",
        caption:
          "Sistema visual que convive con tres identidades oficiales sin perder jerarquía. Tokens y guidelines para el uso correcto de cada escudo.",
      },
      {
        phase: "Agenda y disertantes",
        caption:
          "Base de datos en Supabase con CRUD de disertantes, paneles y sesiones. Vista pública filtrable por día, eje temático y sala.",
      },
      {
        phase: "Inscripción segmentada",
        caption:
          "Flujo diferenciado para asistentes nacionales, internacionales y streaming. Validación de cupos y confirmación por mail.",
      },
    ],
    featured: true,
    order: 4,
  },
  {
    id: "obra-azul",
    title: "Obra Azul",
    subtitle: "Marca, sitio y sistema de gestión para una empresa de piletas.",
    tagline: "Desde cero: la marca, el sitio y el sistema que ordena obras y clientes.",
    client: "Obra Azul Piscinas · Villa Martelli, Buenos Aires",
    role: "Identidad · Sitio · Sistema de gestión",
    category: "corporate",
    year: "2025",
    problem:
      "Una empresa de construcción y reparación de piletas del conurbano, sin identidad visual ni presencia digital: las consultas dependían del boca a boca y del WhatsApp del dueño.",
    solution:
      "Primero la marca; de ella salieron el sitio, con las obras y el contacto directo por WhatsApp, y un sistema con cotizaciones, órdenes, agenda y seguimiento de técnicos.",
    value:
      "El sitio está online con dominio propio, y el sitio y el sistema comparten la misma identidad: un mismo cliente de la consulta a la factura.",
    i18n: {
      en: {
        subtitle: "Brand, website and management system for a pool company.",
        tagline: "From scratch: the brand, the website and the system that organizes jobs and clients.",
        role: "Identity · Website · Management system",
        problem:
          "A pool construction and repair company in Greater Buenos Aires, with no visual identity or online presence: inquiries depended on word of mouth and the owner's WhatsApp.",
        solution:
          "The brand came first; from it came the website, with past jobs and direct WhatsApp contact, and a system with quotes, work orders, scheduling and technician tracking.",
        value:
          "The website is live on its own domain, and the site and the system share one identity: the same client from first inquiry to invoice.",
        highlights: ["Isotype, palette and usage variants", "Website with past jobs and WhatsApp contact", "Quotes, work orders and scheduling in one system", "Technician tracking across four roles"],
      },
    },
    logo: "/projects/obra-azul/logo-horizontal.svg",
    logoNegative: "/projects/obra-azul/logo-horizontal.svg",
    cardLogo: "/projects/obra-azul/logo-horizontal.svg",
    cardLogoInvert: true,
    image: "/projects/obra-azul/IMG-20250627-WA0188.jpg",
    bgColor: "#1E2A47",
    accentColor: "#2B4257",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "WhatsApp CTA"],
    highlights: ["Isotipo, paleta y variantes de uso", "Sitio con obras y contacto por WhatsApp", "Cotizaciones, órdenes y agenda en un solo sistema", "Seguimiento de técnicos en cuatro roles"],
    tags: ["Identidad", "Sistema de gestión"],
    demo: "https://www.obraazulpiscinas.com",
    discipline: ["Identidad", "Diseño web", "Sistema de gestión"],
    featured: true,
    order: 5,
  },
  {
    id: "yerbas-de-mi-tierra",
    title: "Yerbas de mi Tierra",
    subtitle: "Marca, tipografía propia, sitio y club de clientes para una yerbatería.",
    tagline: "No fue una página: marca, tipografía propia, sitio, club de clientes y gestión del local.",
    client: "Yerbas de mi Tierra · Río Grande, Tierra del Fuego",
    role: "Identidad · Tipografía · Sitio · Sistemas",
    category: "corporate",
    year: "2026",
    problem:
      "Una yerbatería de Río Grande que trae yerba de pequeños productores misioneros, con un logo que quería conservar y sin presencia digital propia.",
    solution:
      "Se leyó el emblema y de ahí salió todo: el color, una tipografía dibujada a partir del logo, el sitio, el Club del Mate para premiar a los clientes y la gestión del local.",
    value:
      "El sitio está online en su dominio propio, y el Club del Mate y el sistema de ventas se usan todos los días en el mostrador.",
    i18n: {
      en: {
        subtitle: "Brand, custom typeface, website and customer club for a yerba mate shop.",
        tagline: "Not just a page: brand, custom typeface, website, customer club and in-store management.",
        role: "Identity · Typography · Website · Systems",
        problem:
          "A yerba mate shop in Río Grande that sources from small growers in Misiones, with a logo it wanted to keep and no online presence of its own.",
        solution:
          "We read the emblem and everything came from it: the color, a typeface drawn from the logo, the website, the Club del Mate to reward customers and the in-store management.",
        value:
          "The website is live on its own domain, and the Club del Mate and the sales system are used every day at the counter.",
        highlights: ["Custom typeface drawn from the logo", "Website with the story, yerba types and the sommelier's guide", "Club del Mate: points and rewards for customers", "In-store sales and stock connected"],
      },
    },
    logo: "/projects/yerbas-de-mi-tierra/isologo.png",
    logoNegative: "/projects/yerbas-de-mi-tierra/isologo.png",
    cardLogo: "/projects/yerbas-de-mi-tierra/isologo.png",
    logoKeepColor: true,
    image: "/projects/yerbas-de-mi-tierra/web/hero-escritorio.jpg",
    displayMode: "logo",
    bgColor: "#EFE3CD",
    accentColor: "#A34A2C",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Tipografía propia"],
    highlights: ["Tipografía propia dibujada desde el logo", "Sitio con la historia, los tipos de yerba y la guía del sommelier", "Club del Mate: puntos y canjes para los clientes", "Ventas y stock del local conectados"],
    tags: ["Identidad", "Tipografía propia"],
    demo: "https://yerbasdemitierra.com.ar",
    discipline: ["Identidad", "Tipografía", "Diseño web", "Sistemas"],
    featured: true,
    order: 6,
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
    order: 7,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
