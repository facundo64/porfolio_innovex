import { skills } from "@/data/skills";

const categoryLabel: Record<string, string> = {
  lenguaje: "Lenguajes",
  frontend: "Frontend",
  backend: "Backend & Servicios",
  herramientas: "Herramientas",
};

const levelColor: Record<string, string> = {
  avanzado: "#0088ff",
  intermedio: "#0055aa",
  básico: "#333",
};

export default function Skills() {
  const categories = ["lenguaje", "frontend", "backend", "herramientas"] as const;

  return (
    <section id="habilidades" className="px-6 md:px-16 lg:px-24 py-32 border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-[1px] bg-[#0088ff]" />
          <span className="text-[#0088ff] text-xs font-mono tracking-[0.3em] uppercase">03 / Skills</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-16">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="text-xs font-mono text-[#555] tracking-widest uppercase mb-4">
                {categoryLabel[cat]}
              </p>
              <ul className="flex flex-col gap-3">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between">
                      <span className="text-sm text-[#f0f0f0]">{skill.name}</span>
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 border"
                        style={{
                          color: levelColor[skill.level],
                          borderColor: levelColor[skill.level] + "44",
                        }}
                      >
                        {skill.level}
                      </span>
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
