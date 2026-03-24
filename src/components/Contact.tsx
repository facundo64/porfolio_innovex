export default function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-16 lg:px-24 py-32 border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-[1px] bg-[#0088ff]" />
          <span className="text-[#0088ff] text-xs font-mono tracking-[0.3em] uppercase">05 / Contacto</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4">Hablemos</h2>
        <p className="text-[#888] mb-12 max-w-md">
          ¿Tenés un proyecto en mente? Escribime y lo hablamos.
        </p>

        {/* Links de contacto */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/facundo64"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-[#1e1e1e] hover:border-[#0088ff] text-[#888] hover:text-[#f0f0f0] px-7 py-3.5 transition-all duration-200 text-sm font-mono"
          >
            GitHub
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          {/* Podés agregar email, LinkedIn, WhatsApp, etc. */}
        </div>

      </div>
    </section>
  );
}
