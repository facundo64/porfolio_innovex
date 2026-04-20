export type ProjectCategory =
  | "saas"           // producto SaaS multi-tenant
  | "corporate"      // sitio corporativo empresarial
  | "institutional"  // evento / institución pública
  | "web"            // web genérica / e-commerce
  | "software"       // software a medida
  | "infra"          // infraestructura / R&D interno
  | "academic";      // proyecto académico

export interface Project {
  id: string;
  title: string;
  subtitle: string;            // bajada corta (10-12 palabras)
  tagline: string;             // promesa de venta de una línea
  client?: string;             // empresa o institución cliente
  role?: string;               // "Full stack", "Diseño + Dev", etc.
  category: ProjectCategory;
  year: string;

  // Narrativa de venta
  problem?: string;            // dolor que resuelve
  solution?: string;           // cómo se resolvió
  value?: string;              // outcome tangible

  // Assets visuales
  logo?: string;               // ruta pública al logo dark-on-light
  logoNegative?: string;       // versión sobre fondo oscuro
  image: string;               // hero image grande
  bgColor?: string;            // fondo de la tarjeta sticky
  accentColor?: string;        // color acento de marca

  // Tech
  stack: string[];             // stack principal (máx 6)
  highlights?: string[];       // bullets de features clave (máx 4)
  tags?: string[];             // pills tipo "Featured", "Multi-tenant"

  // Links
  demo?: string;
  github?: string;

  // Presentación
  featured: boolean;           // aparece en showcase principal
  order?: number;              // orden de despliegue
}

export interface Skill {
  name: string;
  level: "básico" | "intermedio" | "avanzado";
  category: "frontend" | "backend" | "lenguaje" | "herramientas";
}
