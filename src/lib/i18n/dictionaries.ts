export type Locale = "es" | "en";

export type Dictionary = {
  nav: {
    home: string;
    work: string;
    services: string;
    process: string;
    contact: string;
    menu: string;
    close: string;
  };
  common: {
    back: string;
    viewProject: string;
    startProject: string;
    learnMore: string;
    sendMessage: string;
    email: string;
    phone: string;
    location: string;
    selectedWork: string;
    salonVisual: string;
    problem: string;
    solution: string;
    deliverables: string;
  };
  services: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    subtitle: string;
    process: string;
    cta: string;
    items: {
      id: string;
      number: string;
      title: string;
      tagline: string;
      description: string;
      deliverables: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleLine2Prefix: string;
    titleLine2Em: string;
    titleLine3: string;
    subtitle: string;
    formTitle: string;
    fields: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      submitting: string;
    };
    info: {
      emailLabel: string;
      emailValue: string;
      phoneLabel: string;
      phoneValue: string;
      locationLabel: string;
      locationValue: string;
      hoursLabel: string;
      hoursValue: string;
    };
    socialTitle: string;
    note: string;
  };
  footer: {
    tagline: string;
    rights: string;
    madeIn: string;
  };
  hero: {
    metaLeft: string;
    metaRight: string;
    intro: string[];
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    closingText: string;
    ctaTitle: string;
    scroll: string;
    reel: string;
  };
  process: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    subtitle: string;
    intro: string;
    steps: {
      n: string;
      title: string;
      description: string;
      duration: string;
    }[];
    closing: string;
  };
};

const es: Dictionary = {
  nav: {
    home: "Home",
    work: "Work",
    services: "Servicios",
    process: "Proceso",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
  },
  common: {
    back: "Volver",
    viewProject: "Ver proyecto",
    startProject: "Comenzá un proyecto",
    learnMore: "Conocer más",
    sendMessage: "Enviar mensaje",
    email: "Email",
    phone: "Teléfono",
    location: "Ubicación",
    selectedWork: "Selected Work",
    salonVisual: "Salón Visual",
    problem: "Problema",
    solution: "Solución",
    deliverables: "Entregables",
  },
  services: {
    eyebrow: "Servicios / 2025—2026",
    titleLine1: "Todo lo que",
    titleLine2: "necesitás para",
    titleEm: "construir online",
    subtitle:
      "Trabajamos con empresas, emprendedores y startups que buscan una presencia digital a la altura de su producto.",
    process: "Cada servicio sigue nuestro proceso de descubrimiento, diseño, desarrollo y lanzamiento.",
    cta: "Hablemos",
    items: [
      {
        id: "web-development",
        number: "01",
        title: "Desarrollo Web",
        tagline: "Sitios premium con motion y performance.",
        description:
          "Landing pages y sitios corporativos con diseño cinemático, animaciones precisas y métricas Lighthouse 95+. Stack moderno con Next.js, framer-motion y Tailwind v4.",
        deliverables: [
          "Diseño UI/UX en Figma",
          "Frontend en Next.js 16 + React 19",
          "Animaciones cinematográficas",
          "Lighthouse 95+ y SEO técnico",
          "Hosting en Vercel con CI/CD",
        ],
      },
      {
        id: "saas-platforms",
        number: "02",
        title: "Plataformas SaaS",
        tagline: "Multi-tenant, auth robusta, dashboards en tiempo real.",
        description:
          "Construimos productos SaaS completos: arquitectura multi-tenant con aislamiento de datos, auth segura, integraciones con WhatsApp/email y dashboards con métricas operativas.",
        deliverables: [
          "Arquitectura multi-tenant",
          "Auth con NextAuth v5 / Supabase",
          "Postgres (Neon) + Prisma 7",
          "Notificaciones WhatsApp + email",
          "Panel admin + dashboards",
        ],
      },
      {
        id: "ai-integrations",
        number: "03",
        title: "Integraciones IA",
        tagline: "Bots WhatsApp, transcripción, agentes con Gemini/Claude.",
        description:
          "Integramos IA donde aporta valor real: chatbots de WhatsApp con clasificación inteligente, transcripción de audios, agentes con herramientas y workflows con LLMs.",
        deliverables: [
          "Bots WhatsApp con Baileys",
          "Gemini 2.0 Flash / Claude 4.7",
          "Transcripción + clasificación",
          "Hub multi-tenant Docker",
          "Integración Notion / Gmail",
        ],
      },
      {
        id: "consulting",
        number: "04",
        title: "Consultoría Técnica",
        tagline: "Auditoría, arquitectura y mentoring para tu equipo.",
        description:
          "Auditamos productos digitales existentes, diseñamos arquitecturas que escalan y hacemos mentoring técnico a tu equipo de desarrollo. Foco en performance, DX y mantenibilidad.",
        deliverables: [
          "Auditoría de código + performance",
          "Diseño de arquitectura",
          "Migración a stacks modernos",
          "Mentoring técnico semanal",
          "Documentación + ADRs",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contacto / 2025—2026",
    titleLine1: "Empecemos",
    titleLine2Prefix: "a",
    titleLine2Em: "construir",
    titleLine3: "juntos.",
    subtitle: "Contanos sobre tu proyecto. Respondemos en menos de 24 horas.",
    formTitle: "Iniciá un proyecto",
    fields: {
      name: "Nombre",
      email: "Email",
      company: "Empresa (opcional)",
      message: "Contanos sobre tu proyecto",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
    },
    info: {
      emailLabel: "Escribinos",
      emailValue: "hello@innhovex.com",
      phoneLabel: "Teléfono",
      phoneValue: "+54 9 11 0000-0000",
      locationLabel: "Estudio",
      locationValue: "Buenos Aires, Argentina",
      hoursLabel: "Disponibilidad",
      hoursValue: "Lun–Vie · 09:00 a 19:00 (GMT-3)",
    },
    socialTitle: "Seguinos",
    note: "También podés escribirnos directamente a hello@innhovex.com",
  },
  footer: {
    tagline: "Estudio digital · Buenos Aires",
    rights: "Todos los derechos reservados",
    madeIn: "Hecho en Argentina",
  },
  hero: {
    metaLeft: "Estudio digital · Est. 2024",
    metaRight: "Buenos Aires — Argentina",
    intro: [
      "Estudio digital partnering con marcas",
      "y negocios que crean experiencias",
      "excepcionales donde las personas",
      "viven, trabajan y se conectan.",
    ],
    titleLine1: "Digital",
    titleLine2: "Studio",
    titleLine3: "Innhovex.",
    closingText:
      "No solo hacemos páginas web. Construimos el activo digital más valioso de tu empresa mediante diseño de vanguardia y tecnología inmersiva.",
    ctaTitle: "Comienza un proyecto",
    scroll: "Scroll",
    reel: "Reel · 2026",
  },
  process: {
    eyebrow: "Proceso / 2025—2026",
    titleLine1: "Cómo",
    titleLine2: "trabajamos",
    titleEm: "juntos",
    subtitle:
      "Un proceso simple, transparente y colaborativo. Del descubrimiento al lanzamiento — sin sorpresas.",
    intro:
      "Un proceso que evita las fricciones comunes de la industria. Vos te enfocás en tu negocio, nosotros en el producto.",
    steps: [
      {
        n: "01",
        title: "Descubrimiento",
        description:
          "Charla inicial sin compromiso. Entendemos tu negocio, objetivos y alcance. Te pasamos una propuesta clara con tiempos y costos.",
        duration: "1 — 2 semanas",
      },
      {
        n: "02",
        title: "Diseño",
        description:
          "Wireframes, UI y prototipo navegable. Iteramos hasta que cada pantalla refleje exactamente lo que tenés en mente.",
        duration: "2 — 4 semanas",
      },
      {
        n: "03",
        title: "Desarrollo",
        description:
          "Codeamos con buenas prácticas, tipado estricto y commits diarios. Vos seguís el progreso en tiempo real con un staging environment.",
        duration: "4 — 10 semanas",
      },
      {
        n: "04",
        title: "Entrega & soporte",
        description:
          "Deploy a producción, capacitación y documentación técnica. Seguimos acompañándote después del launch con SLA mensual.",
        duration: "Continuo",
      },
    ],
    closing:
      "Cada proyecto se siente como una colaboración. Vos sos parte del proceso desde el día uno hasta después del lanzamiento.",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    work: "Work",
    services: "Services",
    process: "Process",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  common: {
    back: "Back",
    viewProject: "View project",
    startProject: "Start a project",
    learnMore: "Learn more",
    sendMessage: "Send message",
    email: "Email",
    phone: "Phone",
    location: "Location",
    selectedWork: "Selected Work",
    salonVisual: "Visual Hall",
    problem: "Problem",
    solution: "Solution",
    deliverables: "Deliverables",
  },
  services: {
    eyebrow: "Services / 2025—2026",
    titleLine1: "Everything",
    titleLine2: "you need to",
    titleEm: "build online",
    subtitle:
      "We work with companies, founders and startups looking for a digital presence that matches their product.",
    process: "Each service follows our discovery, design, development and launch process.",
    cta: "Let's talk",
    items: [
      {
        id: "web-development",
        number: "01",
        title: "Web Development",
        tagline: "Premium sites with motion and performance.",
        description:
          "Landing pages and corporate websites with cinematic design, precise animations and Lighthouse 95+ metrics. Modern stack with Next.js, framer-motion and Tailwind v4.",
        deliverables: [
          "UI/UX design in Figma",
          "Frontend in Next.js 16 + React 19",
          "Cinematic animations",
          "Lighthouse 95+ and technical SEO",
          "Vercel hosting with CI/CD",
        ],
      },
      {
        id: "saas-platforms",
        number: "02",
        title: "SaaS Platforms",
        tagline: "Multi-tenant, robust auth, real-time dashboards.",
        description:
          "We build complete SaaS products: multi-tenant architecture with data isolation, secure auth, WhatsApp/email integrations and operational dashboards.",
        deliverables: [
          "Multi-tenant architecture",
          "Auth with NextAuth v5 / Supabase",
          "Postgres (Neon) + Prisma 7",
          "WhatsApp + email notifications",
          "Admin panel + dashboards",
        ],
      },
      {
        id: "ai-integrations",
        number: "03",
        title: "AI Integrations",
        tagline: "WhatsApp bots, transcription, Gemini/Claude agents.",
        description:
          "We integrate AI where it adds real value: WhatsApp chatbots with intelligent classification, audio transcription, agents with tools, and LLM-powered workflows.",
        deliverables: [
          "WhatsApp bots with Baileys",
          "Gemini 2.0 Flash / Claude 4.7",
          "Transcription + classification",
          "Multi-tenant Docker hub",
          "Notion / Gmail integration",
        ],
      },
      {
        id: "consulting",
        number: "04",
        title: "Technical Consulting",
        tagline: "Audits, architecture and team mentoring.",
        description:
          "We audit existing digital products, design scalable architectures and provide technical mentoring to your dev team. Focus on performance, DX and maintainability.",
        deliverables: [
          "Code + performance audit",
          "Architecture design",
          "Migration to modern stacks",
          "Weekly technical mentoring",
          "Documentation + ADRs",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact / 2025—2026",
    titleLine1: "Let's start",
    titleLine2Prefix: "",
    titleLine2Em: "building",
    titleLine3: "together.",
    subtitle: "Tell us about your project. We answer in less than 24 hours.",
    formTitle: "Start a project",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "Tell us about your project",
      submit: "Send message",
      submitting: "Sending...",
    },
    info: {
      emailLabel: "Write to us",
      emailValue: "hello@innhovex.com",
      phoneLabel: "Phone",
      phoneValue: "+54 9 11 0000-0000",
      locationLabel: "Studio",
      locationValue: "Buenos Aires, Argentina",
      hoursLabel: "Availability",
      hoursValue: "Mon–Fri · 09:00 to 19:00 (GMT-3)",
    },
    socialTitle: "Follow us",
    note: "You can also write us directly at hello@innhovex.com",
  },
  footer: {
    tagline: "Digital studio · Buenos Aires",
    rights: "All rights reserved",
    madeIn: "Made in Argentina",
  },
  hero: {
    metaLeft: "Digital studio · Est. 2024",
    metaRight: "Buenos Aires — Argentina",
    intro: [
      "Digital studio partnering with brands",
      "and businesses that create exceptional",
      "experiences where people live,",
      "work and connect.",
    ],
    titleLine1: "Digital",
    titleLine2: "Studio",
    titleLine3: "Innhovex.",
    closingText:
      "We don't just build websites. We craft your company's most valuable digital asset through cutting-edge design and immersive technology.",
    ctaTitle: "Start a project",
    scroll: "Scroll",
    reel: "Reel · 2026",
  },
  process: {
    eyebrow: "Process / 2025—2026",
    titleLine1: "How",
    titleLine2: "we work",
    titleEm: "together",
    subtitle:
      "A simple, transparent and collaborative process. From discovery to launch — no surprises.",
    intro:
      "A process that avoids the common frictions of the industry. You focus on your business, we focus on the product.",
    steps: [
      {
        n: "01",
        title: "Discovery",
        description:
          "Initial no-strings call. We understand your business, goals and scope. You get a clear proposal with timelines and costs.",
        duration: "1 — 2 weeks",
      },
      {
        n: "02",
        title: "Design",
        description:
          "Wireframes, UI and navigable prototype. We iterate until every screen reflects exactly what you have in mind.",
        duration: "2 — 4 weeks",
      },
      {
        n: "03",
        title: "Development",
        description:
          "We code with best practices, strict typing and daily commits. You follow progress in real time on a staging environment.",
        duration: "4 — 10 weeks",
      },
      {
        n: "04",
        title: "Delivery & support",
        description:
          "Production deploy, training and technical documentation. We keep supporting you after launch with monthly SLA.",
        duration: "Ongoing",
      },
    ],
    closing:
      "Every project feels like a collaboration. You are part of the process from day one until after launch.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };
