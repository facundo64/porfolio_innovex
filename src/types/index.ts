export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;         // link al sitio en vivo (opcional)
  category: "web" | "software" | "academic";
  featured: boolean;     // si va al tope de la galería
}

export interface Skill {
  name: string;
  level: "básico" | "intermedio" | "avanzado";
  category: "frontend" | "backend" | "lenguaje" | "herramientas";
}
