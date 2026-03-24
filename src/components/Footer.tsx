export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#0088ff] rounded-full" style={{ boxShadow: "0 0 6px #0088ff" }} />
          <span className="text-[11px] font-mono text-[#333] tracking-[0.2em] uppercase">INNHOVEX</span>
        </div>

        <p className="text-[11px] font-mono text-[#2a2a2a]">
          © {new Date().getFullYear()} Facundo Aramayo — INNHOVEX
        </p>

        <a
          href="https://github.com/facundo64"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-[#2a2a2a] hover:text-[#0088ff] transition-colors duration-200"
        >
          github.com/facundo64
        </a>

      </div>
    </footer>
  );
}
