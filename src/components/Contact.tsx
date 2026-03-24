const links = [
  {
    label: "GitHub",
    value: "facundo64",
    href: "https://github.com/facundo64",
  },
  {
    label: "Email",
    value: "facundoarielaramayo@gmail.com",
    href: "mailto:facundoarielaramayo@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-16 lg:px-24 py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[1px] bg-[#0088ff]" />
              <span className="text-[#0088ff] text-[10px] font-mono tracking-[0.3em] uppercase">05 / Contacto</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Hablemos</h2>
            <p className="text-[#555] leading-relaxed max-w-sm">
              ¿Tenés un proyecto en mente o querés trabajar juntos?
              Escribime y lo charlamos.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-px bg-[#1a1a1a]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-[#0a0a0a] hover:bg-[#0e0e0e] px-6 py-5 flex items-center justify-between transition-colors duration-300"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-[#333] uppercase tracking-widest">
                    {link.label}
                  </span>
                  <span className="text-sm text-[#666] group-hover:text-[#e0e0e0] transition-colors duration-300">
                    {link.value}
                  </span>
                </div>
                <span className="text-[#333] group-hover:text-[#0088ff] transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
