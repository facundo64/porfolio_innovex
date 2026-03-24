import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Lenguajes
  { name: "TypeScript", level: "avanzado", category: "lenguaje" },
  { name: "JavaScript", level: "avanzado", category: "lenguaje" },
  { name: "C#", level: "intermedio", category: "lenguaje" },

  // Frontend
  { name: "Next.js", level: "avanzado", category: "frontend" },
  { name: "React", level: "avanzado", category: "frontend" },
  { name: "Tailwind CSS", level: "avanzado", category: "frontend" },
  { name: "HTML", level: "avanzado", category: "frontend" },
  { name: "CSS", level: "avanzado", category: "frontend" },

  // Backend / servicios
  { name: "Firebase", level: "intermedio", category: "backend" },
  { name: "Node.js", level: "intermedio", category: "backend" },

  // Herramientas
  { name: "Git", level: "avanzado", category: "herramientas" },
  { name: "GitHub", level: "avanzado", category: "herramientas" },
  { name: "VS Code", level: "avanzado", category: "herramientas" },
];
