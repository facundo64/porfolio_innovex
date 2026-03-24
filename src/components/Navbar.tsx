export default function Navbar() {
  const links = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-5 border-b border-[#ffffff08] bg-[#0a0a0a]/80 backdrop-blur-md">

      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <span
          className="w-2 h-2 bg-[#0088ff] rounded-full group-hover:shadow-[0_0_10px_#0088ff] transition-shadow duration-300"
        />
        <span className="font-bold text-sm tracking-[0.15em] uppercase text-[#f0f0f0]">
          INNHOVEX
        </span>
      </a>

      {/* Nav links — desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-[#888888] hover:text-[#f0f0f0] transition-colors duration-200 tracking-wide"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Badge disponible */}
      <div className="hidden md:flex items-center gap-2 text-xs text-[#888888]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
        Disponible para proyectos
      </div>

    </header>
  );
}
