import { skills } from "@/data/skills";

const categoryLabel: Record<string, string> = {
  lenguaje: "Lenguajes",
  frontend: "Frontend",
  backend: "Backend & Servicios",
  herramientas: "Herramientas",
};

const levelWidth: Record<string, string> = {
  avanzado: "w-full",
  intermedio: "w-2/3",
  básico: "w-1/3",
};

export default function Skills() {
  const categories = ["lenguaje", "frontend", "backend", "herramientas"] as const;

  return (
    <section id="habilidades" className="px-6 md:px-16 lg:px-24 py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-[1px] bg-[#0088ff]" />
          <span className="text-[#0088ff] text-[10px] font-mono tracking-[0.3em] uppercase">03 / Skills</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat) => (
            <div key={cat}>
              {/* Título categoría */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-[#444] tracking-[0.25em] uppercase">
                  {categoryLabel[cat]}
                </span>
                <span className="flex-1 h-[1px] bg-[#1a1a1a]" />
              </div>

              {/* Lista de skills */}
              <ul className="flex flex-col gap-5">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <li key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#d0d0d0]">{skill.name}</span>
                        <span className="text-[10px] font-mono text-[#444]">{skill.level}</span>
                      </div>
                      {/* Barra de nivel */}
                      <div className="h-[2px] bg-[#1a1a1a] w-full">
                        <div
                          className={`h-full bg-[#0088ff] ${levelWidth[skill.level]} transition-all duration-700`}
                          style={{ boxShadow: "0 0 8px #0088ff66" }}
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
