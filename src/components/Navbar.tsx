export default function Navbar() {
  const links = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-5 border-b border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl transition-all duration-300">

      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <span
          className="w-2.5 h-2.5 bg-[#0088ff] rounded-full group-hover:shadow-[0_0_15px_#0088ff] transition-shadow duration-300 animate-pulse"
        />
        <span className="font-bold text-sm tracking-[0.2em] uppercase text-[#f0f0f0]">
          INNHOVEX
        </span>
      </a>

      {/* Nav links — desktop */}
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative text-sm text-[#888888] hover:text-white transition-colors duration-300 tracking-wide"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0088ff] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Badge disponible */}
      <div className="hidden md:flex items-center gap-2.5 text-xs text-[#a0a0a0] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
        Disponible para proyectos
      </div>

    </header>
  );
}
