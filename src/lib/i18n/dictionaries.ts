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
    talk: string;
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
    visitSite: string;
    gallery: string;
    statusInProgress: string;
    statusPrivate: string;
    imagePending: string;
    caseLang: string;
    casesCount: string;
  };
  notFound: {
    kicker: string;
    title: string;
    titleEm: string;
    body: string;
    home: string;
    work: string;
  };
  work: {
    eyebrow: string;
    kicker: string;
    titleLine1: string;
    titleEm: string;
    subtitle: string;
    open: string;
    bandKicker: string;
    bandTitle: string;
    bandTitleEm: string;
    bandText: string;
  };
  services: {
    eyebrow: string;
    kicker: string;
    detailLabel: string;
    ctaMsg: string;
    processCta: string;
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
    kicker: string;
    formBar: string;
    rateLimited: string;
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
    whatsappCta: string;
    whatsappPrefill: string;
    successMessage: string;
    errorMessage: string;
    orDivider: string;
  };
  footer: {
    tagline: string;
    rights: string;
    madeIn: string;
    claim: string;
    legalTitle: string;
    contactTitle: string;
    links: {
      contact: string;
      privacy: string;
      consent: string;
      terms: string;
    };
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
    kicker: string;
    stepsLabel: string;
    bandKicker: string;
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
  home: {
    viaje: {
      mapLabel: string;
      kicker: string;
      titlePre: string;
      titleMark: string;
      titlePost: string;
      lead: string;
      seeHow: string;
      stops: { where: string; title: string; body: string; hook: string; pin: string }[];
      studioPin: string;
      studioPinSub: string;
      stopOf: string;
      fullRoute: string;
      endKicker: string;
      endTitle: string;
      endBody: string;
      endCta: string;
    };
    dentro: {
      kicker: string;
      title: string;
      titleEm: string;
      body: string;
      postits: string[];
      url: string;
      example: string;
      appsLabel: string;
      hint: string;
      manual: string;
      realCase: string;
      apps: { name: string; caso: string; lines: [string, string][] }[];
    };
    necesitas: {
      kicker: string;
      title: string;
      titleEm: string;
      options: { title: string; body: string; msg: string }[];
      cta: string;
      reply: string;
    };
  };
};

const es: Dictionary = {
  nav: {
    home: "Inicio",
    work: "Trabajos",
    services: "Servicios",
    process: "Proceso",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
    talk: "Hablemos",
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
    visitSite: "Visitar sitio",
    gallery: "Proceso del proyecto",
    statusInProgress: "En desarrollo · Cliente activo",
    statusPrivate: "Proyecto privado · Bajo NDA",
    imagePending: "Captura pendiente",
    caseLang: "",
    casesCount: "{n} casos",
  },
  notFound: {
    kicker: "✎ página no encontrada",
    title: "Esta hoja ",
    titleEm: "está en blanco.",
    body: "La dirección no existe o cambió. Volvé al inicio o mirá los trabajos.",
    home: "Ir al inicio",
    work: "Ver trabajos →",
  },
  work: {
    eyebrow: "Trabajos",
    kicker: "✎ casos reales",
    titleLine1: "Cada proyecto,",
    titleEm: "una parada.",
    subtitle: "Empresas de todo el país que confiaron en nosotros. Tocá una foto para ver el caso completo: cómo empezó, qué dibujamos y cómo funciona hoy.",
    open: "ver caso →",
    bandKicker: "✎ la próxima parada",
    bandTitle: "¿Tu empresa ",
    bandTitleEm: "es la siguiente?",
    bandText: "Contanos qué necesitás y armamos el recorrido juntos.",
  },
  services: {
    eyebrow: "Servicios",
    kicker: "✎ lo que hacemos",
    detailLabel: "servicio",
    ctaMsg: "Hola, me interesa el servicio de {s}.",
    processCta: "Ver cómo trabajamos →",
    titleLine1: "Todo lo que",
    titleLine2: "necesitás para",
    titleEm: "construir online",
    subtitle:
      "Trabajamos con empresas, emprendedores y startups que buscan una presencia digital a la altura de su producto.",
    process: "Cada servicio sigue nuestro proceso de descubrimiento, diseño, desarrollo y lanzamiento.",
    cta: "Hablemos",
    items: [
      {
        id: "diseno-web",
        number: "01",
        title: "Diseño y web",
        tagline: "Marca y sitio pensados para que te escriban.",
        description:
          "Identidad, sitios institucionales y tiendas. Rápidos, cuidados al detalle y con el contacto a un toque: formulario y WhatsApp.",
        deliverables: [
          "Marca nueva o puesta a punto de la que tenés",
          "Sitio a medida, en español e inglés si hace falta",
          "Contacto directo por WhatsApp y formulario",
          "Dominio propio y correo configurados",
          "Listo para aparecer en Google",
        ],
      },
      {
        id: "software",
        number: "02",
        title: "Software a medida",
        tagline: "Un sistema para lo que hoy hacés en planillas.",
        description:
          "Sistemas que resuelven algo puntual del negocio: turnos, obras, presupuestos, clientes, canjes o portales privados. Hechos para el equipo que los usa todos los días.",
        deliverables: [
          "Relevamiento de cómo trabajan hoy",
          "Pantallas diseñadas antes de programar",
          "Accesos por rol: administración, equipo, clientes",
          "Presupuestos y documentos con tu marca",
          "Capacitación y acompañamiento al arrancar",
        ],
      },
      {
        id: "gestion",
        number: "03",
        title: "Gestión digital",
        tagline: "Un solo contacto para todo lo técnico.",
        description:
          "Nos ocupamos de la parte técnica de la empresa: dominios, correos corporativos, datos y sistemas internos como gastos, stock u Odoo. Todo queda a nombre de tu empresa.",
        deliverables: [
          "Dominio y DNS",
          "Correos con el dominio de la empresa",
          "Gastos, stock y ventas (Odoo u otro sistema)",
          "Datos ordenados y respaldados",
          "Un contacto cuando algo falla",
        ],
      },
      {
        id: "ia",
        number: "04",
        title: "Integraciones con IA",
        tagline: "Asistentes que atienden por vos.",
        description:
          "Asistentes para la web o WhatsApp que responden consultas, toman pedidos o turnos y le pasan a tu equipo un resumen de cada conversación.",
        deliverables: [
          "Asistente para la web o WhatsApp",
          "Respuestas con la información de tu negocio",
          "Derivación a una persona cuando hace falta",
          "Resumen de cada consulta para tu equipo",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    kicker: "✎ escribinos",
    formBar: "nuevo mensaje",
    rateLimited: "Demasiados intentos. Esperá un momento y probá de nuevo.",
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
      emailValue: "innhovex@gmail.com",
      phoneLabel: "Teléfono",
      phoneValue: "+54 9 11 70588887",
      locationLabel: "Estudio",
      locationValue: "Buenos Aires, Argentina",
      hoursLabel: "Disponibilidad",
      hoursValue: "Lun–Vie · 09:00 a 19:00 (GMT-3)",
    },
    socialTitle: "Seguinos",
    note: "Tu mensaje llega directo a nuestro estudio.",
    whatsappCta: "Hablemos por WhatsApp",
    whatsappPrefill:
      "Hola Innhovex, me gustaría conversar sobre un proyecto.",
    successMessage:
      "Mensaje enviado. Te respondemos en menos de 24 horas.",
    errorMessage:
      "Algo falló al enviar. Probá de nuevo o escribinos por WhatsApp.",
    orDivider: "o",
  },
  footer: {
    tagline: "Estudio digital · Buenos Aires",
    rights: "Todos los derechos reservados",
    madeIn: "Hecho en Argentina",
    claim: "Diseñamos y construimos productos digitales a medida.",
    legalTitle: "Legal",
    contactTitle: "Contacto",
    links: {
      contact: "Contacto",
      privacy: "Política de privacidad",
      consent: "Consentimiento para el procesamiento de datos personales",
      terms: "Términos y condiciones",
    },
  },
  hero: {
    metaLeft: "Estudio digital · Est. 2024",
    metaRight: "Buenos Aires — Argentina",
    intro: [
      "Diseñamos webs, desarrollamos software",
      "a medida y nos ocupamos de la parte",
      "digital de tu empresa.",
    ],
    titleLine1: "Digital",
    titleLine2: "Studio",
    titleLine3: "Innhovex.",
    closingText:
      "Un estudio joven, de ideas frescas, que trabaja con empresas de todo el país.",
    ctaTitle: "Comienza un proyecto",
    scroll: "Scroll",
    reel: "Reel · 2026",
  },
  home: {
    viaje: {
      mapLabel: "Mapa de Argentina con el recorrido de proyectos",
      kicker: "✎ bajá despacio…",
      titlePre: "Trabajamos con empresas de ",
      titleMark: "todo el país",
      titlePost: ".",
      lead: "Desde Buenos Aires hasta el fin del mundo. Seguí el lápiz.",
      seeHow: "Ver cómo terminó",
      stops: [
        {
          where: "Parada 1 · Villa Martelli, Buenos Aires",
          title: "Una empresa de piletas que arrancó sin marca.",
          body: "Obra Azul necesitaba verse tan profesional como sus obras, y ordenar todo lo que pasaba adentro.",
          hook: "¿Qué terminamos armando? →",
          pin: "piletas",
        },
        {
          where: "Parada 2 · Plottier, Neuquén",
          title: "Un grupo industrial con tres negocios en uno.",
          body: "Metalúrgica, redes contra incendio y racks. JEM-SI necesitaba mostrarlos juntos sin mezclarlos, y además resolver su gestión interna.",
          hook: "De la web a los gastos de la empresa →",
          pin: "industria",
        },
        {
          where: "Parada 3 · Río Grande, Tierra del Fuego",
          title: "Una yerbatería en el fin del mundo que necesitaba su propia letra.",
          body: "Yerbas de mi Tierra quería una marca con identidad y un club para premiar a sus clientes.",
          hook: "Spoiler: la tipografía la dibujamos nosotros →",
          pin: "yerbatería",
        },
      ],
      studioPin: "Buenos Aires, nuestra base.",
      studioPinSub: "De acá sale el viaje ↓",
      stopOf: "✎ parada {n} de 3",
      fullRoute: "✎ el recorrido completo",
      endKicker: "✎ y el viaje sigue",
      endTitle: "Cada parada es un caso completo.",
      endBody: "Cómo empezó, qué dibujamos, qué construimos y cómo funciona hoy.",
      endCta: "Ver todos los trabajos →",
    },
    dentro: {
      kicker: "✎ y por dentro…",
      title: "Nos ocupamos de ",
      titleEm: "todo lo demás.",
      body: "Correos, dominios, datos y sistemas internos. Vos atendés tu negocio; lo digital lo resolvemos nosotros, con un solo contacto.",
      postits: [
        "¿Se cayó el mail?\nNos escribís a nosotros.",
        "Todo queda a nombre\nde tu empresa ✓",
        "Chau planillas sueltas.",
      ],
      url: "tuempresa.com / panel",
      example: "ejemplo",
      appsLabel: "Servicios de gestión",
      hint: "↑ tocá cualquier app",
      manual: "Ahora manejás vos ✎",
      realCase: "caso real:",
      apps: [
        { name: "Correo", caso: "JEM-SI", lines: [["nueva casilla", "ventas@tuempresa.com"], ["alias", "info@ → ventas@"], ["✓", "lista para usar"]] },
        { name: "Dominios", caso: "JEM-SI · Yerbas", lines: [["tuempresa.com", "→ sitio web"], ["tienda.tuempresa.com", "→ tienda"], ["✓", "certificado de seguridad renovado"]] },
        { name: "Sitio web", caso: "Obra Azul · CITEP", lines: [["editando", "sección \"Servicios\""], ["publicando…", ""], ["✓", "en línea en 40 s"]] },
        { name: "Gastos", caso: "JEM-SI", lines: [["nuevo gasto", "combustible · obra Neuquén"], ["estado", "pendiente → aprobado"], ["✓", "sumado al reporte del mes"]] },
        { name: "Stock", caso: "Yerbas de mi Tierra", lines: [["canje en el local", "yerba 1 kg"], ["stock en Odoo", "24 → 23"], ["✓", "sincronizado"]] },
        { name: "Clientes", caso: "Club del Mate", lines: [["cliente", "sumó puntos por su compra"], ["nivel", "sube a un nivel nuevo"], ["✓", "aviso enviado"]] },
        { name: "Turnos", caso: "CITEP", lines: [["nuevo turno", "jueves · 10:30"], ["equipo", "agenda actualizada"], ["✓", "confirmación enviada"]] },
        { name: "WhatsApp", caso: "desarrollo propio (Automata)", lines: [["consulta", "\"¿qué horario tienen?\""], ["asistente", "responde con el horario"], ["✓", "conversación registrada"]] },
      ],
    },
    necesitas: {
      kicker: "✎ empecemos",
      title: "¿Qué ",
      titleEm: "necesitás?",
      options: [
        { title: "Una web", body: "Sitio nuevo o rediseño del que tenés.", msg: "Hola, quiero una web nueva para mi empresa." },
        { title: "Un sistema", body: "Software para resolver algo puntual de tu negocio.", msg: "Hola, necesito un sistema a medida para mi negocio." },
        { title: "Delegar la gestión", body: "Dominios, correos y sistemas internos.", msg: "Hola, quiero delegar la gestión de dominio, correos y sistemas de mi empresa." },
      ],
      cta: "Seguir al formulario →",
      reply: "Respondemos en menos de 24 h",
    },
  },
  process: {
    eyebrow: "Proceso",
    kicker: "✎ paso a paso",
    stepsLabel: "4 pasos",
    bandKicker: "✎ ¿arrancamos?",
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
          "Construimos por etapas y te mostramos los avances en una versión de prueba que podés usar antes de publicar.",
        duration: "4 — 10 semanas",
      },
      {
        n: "04",
        title: "Entrega & soporte",
        description:
          "Publicamos, capacitamos a tu equipo y dejamos todo documentado. Después seguimos a mano para ajustes y soporte.",
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
    talk: "Let's talk",
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
    visitSite: "Visit site",
    gallery: "Project process",
    statusInProgress: "In development · Active client",
    statusPrivate: "Private project · Under NDA",
    imagePending: "Capture pending",
    caseLang: "case study in Spanish",
    casesCount: "{n} cases",
  },
  notFound: {
    kicker: "✎ page not found",
    title: "This page ",
    titleEm: "is blank.",
    body: "The address doesn't exist or has changed. Go back home or see our work.",
    home: "Go home",
    work: "See our work →",
  },
  work: {
    eyebrow: "Work",
    kicker: "✎ real cases",
    titleLine1: "Every project,",
    titleEm: "a stop.",
    subtitle: "Companies from all over Argentina that trusted us. Tap a photo to see the full case: how it started, what we drew and how it works today.",
    open: "see case →",
    bandKicker: "✎ the next stop",
    bandTitle: "Is your company ",
    bandTitleEm: "next?",
    bandText: "Tell us what you need and we'll map out the journey together.",
  },
  services: {
    eyebrow: "Services",
    kicker: "✎ what we do",
    detailLabel: "service",
    ctaMsg: "Hi, I'm interested in {s}.",
    processCta: "See how we work →",
    titleLine1: "Everything",
    titleLine2: "you need to",
    titleEm: "build online",
    subtitle:
      "We work with companies, founders and startups looking for a digital presence that matches their product.",
    process: "Each service follows our discovery, design, development and launch process.",
    cta: "Let's talk",
    items: [
      {
        id: "diseno-web",
        number: "01",
        title: "Design & web",
        tagline: "Brand and website built to make people reach out.",
        description:
          "Identity, company websites and online stores. Fast, carefully crafted, with contact one tap away: form and WhatsApp.",
        deliverables: [
          "A new brand or a refresh of the one you have",
          "Custom website, in Spanish and English if needed",
          "Direct contact via WhatsApp and form",
          "Your own domain and email set up",
          "Ready to show up on Google",
        ],
      },
      {
        id: "software",
        number: "02",
        title: "Custom software",
        tagline: "A system for what you now do in spreadsheets.",
        description:
          "Systems that solve something specific in your business: bookings, jobs, quotes, customers, rewards or private portals. Built for the team that uses them every day.",
        deliverables: [
          "A look at how you work today",
          "Screens designed before any code",
          "Role-based access: admin, team, customers",
          "Quotes and documents with your brand",
          "Training and support at launch",
        ],
      },
      {
        id: "gestion",
        number: "03",
        title: "Digital operations",
        tagline: "One contact for everything technical.",
        description:
          "We take care of the technical side of your company: domains, business email, data and internal systems such as expenses, stock or Odoo. Everything stays in your company's name.",
        deliverables: [
          "Domain and DNS",
          "Email on your company domain",
          "Expenses, stock and sales (Odoo or another system)",
          "Data kept organized and backed up",
          "One contact when something breaks",
        ],
      },
      {
        id: "ia",
        number: "04",
        title: "AI integrations",
        tagline: "Assistants that answer for you.",
        description:
          "Assistants for your website or WhatsApp that answer questions, take orders or bookings, and hand your team a summary of every conversation.",
        deliverables: [
          "Assistant for the web or WhatsApp",
          "Answers based on your business information",
          "Hand-off to a person when needed",
          "A summary of every inquiry for your team",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    kicker: "✎ write to us",
    formBar: "new message",
    rateLimited: "Too many attempts. Wait a moment and try again.",
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
      emailValue: "innhovex@gmail.com",
      phoneLabel: "Phone",
      phoneValue: "+54 9 11 70588887",
      locationLabel: "Studio",
      locationValue: "Buenos Aires, Argentina",
      hoursLabel: "Availability",
      hoursValue: "Mon–Fri · 09:00 to 19:00 (GMT-3)",
    },
    socialTitle: "Follow us",
    note: "Your message goes straight to our studio.",
    whatsappCta: "Let's chat on WhatsApp",
    whatsappPrefill:
      "Hi Innhovex, I'd like to discuss a project.",
    successMessage:
      "Message sent. We'll reply within 24 hours.",
    errorMessage:
      "Something went wrong. Try again or message us on WhatsApp.",
    orDivider: "or",
  },
  footer: {
    tagline: "Digital studio · Buenos Aires",
    rights: "All rights reserved",
    madeIn: "Made in Argentina",
    claim: "We design and build bespoke digital products.",
    legalTitle: "Legal",
    contactTitle: "Contact",
    links: {
      contact: "Contact",
      privacy: "Privacy Policy",
      consent: "Consent to the processing of personal data",
      terms: "Terms & Conditions",
    },
  },
  hero: {
    metaLeft: "Digital studio · Est. 2024",
    metaRight: "Buenos Aires — Argentina",
    intro: [
      "We design websites, build custom",
      "software and take care of the digital",
      "side of your company.",
    ],
    titleLine1: "Digital",
    titleLine2: "Studio",
    titleLine3: "Innhovex.",
    closingText:
      "A young studio with fresh ideas, working with companies all across Argentina.",
    ctaTitle: "Start a project",
    scroll: "Scroll",
    reel: "Reel · 2026",
  },
  home: {
    viaje: {
      mapLabel: "Map of Argentina with the route of our projects",
      kicker: "✎ scroll slowly…",
      titlePre: "We work with companies from ",
      titleMark: "all over Argentina",
      titlePost: ".",
      lead: "From Buenos Aires to the end of the world. Follow the pencil.",
      seeHow: "See how it ended",
      stops: [
        {
          where: "Stop 1 · Villa Martelli, Buenos Aires",
          title: "A pool company that started without a brand.",
          body: "Obra Azul needed to look as professional as its builds, and to organize everything happening inside.",
          hook: "What did we end up building? →",
          pin: "pools",
        },
        {
          where: "Stop 2 · Plottier, Neuquén",
          title: "An industrial group with three businesses in one.",
          body: "Metalworks, fire networks and racks. JEM-SI needed to show them together without mixing them, and to sort out its internal management.",
          hook: "From the website to company expenses →",
          pin: "industry",
        },
        {
          where: "Stop 3 · Río Grande, Tierra del Fuego",
          title: "A yerba shop at the end of the world that needed its own lettering.",
          body: "Yerbas de mi Tierra wanted a brand with identity and a club to reward its customers.",
          hook: "Spoiler: we drew the typeface ourselves →",
          pin: "yerba shop",
        },
      ],
      studioPin: "Buenos Aires, our home base.",
      studioPinSub: "The journey starts here ↓",
      stopOf: "✎ stop {n} of 3",
      fullRoute: "✎ the full route",
      endKicker: "✎ and the journey goes on",
      endTitle: "Every stop is a complete case.",
      endBody: "How it started, what we drew, what we built and how it works today.",
      endCta: "See all work →",
    },
    dentro: {
      kicker: "✎ and on the inside…",
      title: "We take care of ",
      titleEm: "everything else.",
      body: "Email, domains, data and internal systems. You run your business; we handle the digital side, with a single point of contact.",
      postits: [
        "Email down?\nYou just write to us.",
        "Everything stays in\nyour company's name ✓",
        "Bye, loose spreadsheets.",
      ],
      url: "yourcompany.com / panel",
      example: "example",
      appsLabel: "Management services",
      hint: "↑ tap any app",
      manual: "You're in control now ✎",
      realCase: "real case:",
      apps: [
        { name: "Email", caso: "JEM-SI", lines: [["new mailbox", "sales@yourcompany.com"], ["alias", "info@ → sales@"], ["✓", "ready to use"]] },
        { name: "Domains", caso: "JEM-SI · Yerbas", lines: [["yourcompany.com", "→ website"], ["shop.yourcompany.com", "→ shop"], ["✓", "security certificate renewed"]] },
        { name: "Website", caso: "Obra Azul · CITEP", lines: [["editing", "\"Services\" section"], ["publishing…", ""], ["✓", "live in 40 s"]] },
        { name: "Expenses", caso: "JEM-SI", lines: [["new expense", "fuel · Neuquén site"], ["status", "pending → approved"], ["✓", "added to the monthly report"]] },
        { name: "Stock", caso: "Yerbas de mi Tierra", lines: [["in-store redemption", "yerba 1 kg"], ["stock in Odoo", "24 → 23"], ["✓", "synced"]] },
        { name: "Customers", caso: "Club del Mate", lines: [["customer", "earned points with a purchase"], ["level", "moves up a level"], ["✓", "notice sent"]] },
        { name: "Bookings", caso: "CITEP", lines: [["new booking", "Thursday · 10:30"], ["team", "schedule updated"], ["✓", "confirmation sent"]] },
        { name: "WhatsApp", caso: "in-house build (Automata)", lines: [["question", "\"what are your hours?\""], ["assistant", "replies with the hours"], ["✓", "conversation logged"]] },
      ],
    },
    necesitas: {
      kicker: "✎ let's start",
      title: "What do you ",
      titleEm: "need?",
      options: [
        { title: "A website", body: "A new site or a redesign of the one you have.", msg: "Hi, I want a new website for my company." },
        { title: "A system", body: "Software to solve something specific in your business.", msg: "Hi, I need custom software for my business." },
        { title: "Hand off management", body: "Domains, email and internal systems.", msg: "Hi, I want to hand off the management of my company's domain, email and systems." },
      ],
      cta: "Go to the form →",
      reply: "We reply within 24 h",
    },
  },
  process: {
    eyebrow: "Process",
    kicker: "✎ step by step",
    stepsLabel: "4 steps",
    bandKicker: "✎ shall we start?",
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
          "We build in stages and show you progress on a test version you can use before going live.",
        duration: "4 — 10 weeks",
      },
      {
        n: "04",
        title: "Delivery & support",
        description:
          "We go live, train your team and leave everything documented. After that we stay close for tweaks and support.",
        duration: "Ongoing",
      },
    ],
    closing:
      "Every project feels like a collaboration. You are part of the process from day one until after launch.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };
