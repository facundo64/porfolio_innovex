"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function TopHeader() {
  const pathname = usePathname();
  const [onDark, setOnDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta sección dark/light debajo del header
  useEffect(() => {
    const check = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const el = document.elementFromPoint(window.innerWidth / 2, 40);
      if (!el) return;
      const section = el.closest("[data-theme]") as HTMLElement | null;
      setOnDark(section?.dataset.theme === "dark");
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const invert = onDark && !menuOpen;
  const fg = invert ? "text-[#FAFAF7]" : "text-[#0A0A0A]";

  // Background: transparente sobre el hero, fondo off-white glass al scrollear fuera
  const showBg = scrolled && !onDark && !menuOpen;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        {/* Fondo con animación de fade + blur al cruzar fuera del hero */}
        <motion.div
          aria-hidden
          animate={{
            opacity: showBg ? 1 : 0,
            backdropFilter: showBg ? "blur(16px)" : "blur(0px)",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[#FAFAF7]/75 border-b border-[#0A0A0A]/5"
        />

        <div className="relative flex items-center justify-between px-6 md:px-10 py-5 md:py-6">
          {/* Wordmark izquierda */}
          <Link
            href="/"
            className={`text-sm md:text-[15px] font-medium tracking-[-0.01em] transition-colors duration-500 ${fg}`}
          >
            INNHOVEX<span className="text-[#1E2A47]">.</span>
          </Link>

          {/* Menu text derecha — sin íconos, solo texto con flip mask */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className={`relative text-[13px] md:text-sm font-medium transition-colors duration-500 ${fg}`}
          >
            <span className="relative overflow-hidden inline-block h-5 w-[52px] align-middle">
              <motion.span
                animate={{ y: menuOpen ? "-100%" : "0%" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block h-5 leading-5"
              >
                Menu
              </motion.span>
              <motion.span
                animate={{ y: menuOpen ? "-100%" : "0%" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block h-5 leading-5"
              >
                Close
              </motion.span>
            </span>
          </button>
        </div>
      </motion.header>

      {/* Overlay del menú */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-[#FAFAF7]"
          >
            <div className="relative h-full flex flex-col justify-center px-6 md:px-14 pt-24">
              <nav className="max-w-5xl mx-auto w-full">
                <ul className="flex flex-col gap-2 md:gap-4">
                  {menuItems.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href} className="overflow-hidden">
                        <motion.div
                          initial={{ y: "100%" }}
                          animate={{ y: "0%" }}
                          exit={{ y: "100%" }}
                          transition={{
                            duration: 0.9,
                            delay: 0.1 + i * 0.07,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-end gap-4 md:gap-6 py-2 md:py-3"
                          >
                            <span
                              className={`text-[10px] font-mono tracking-[0.22em] uppercase pb-3 md:pb-5 transition-colors ${
                                active ? "text-[#1E2A47]" : "text-[#8A8A85]"
                              } group-hover:text-[#1E2A47]`}
                            >
                              0{i + 1}
                            </span>
                            <span
                              className="font-serif leading-[0.95] tracking-[-0.03em] text-[#0A0A0A] group-hover:text-[#1E2A47] transition-colors"
                              style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
                            >
                              {item.label}
                            </span>
                          </Link>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-10 left-6 md:left-14 right-6 md:right-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-[11px] font-mono tracking-[0.22em] uppercase text-[#8A8A85]"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[#1E2A47]">Contacto</span>
                  <a
                    href="mailto:hello@innhovex.com"
                    className="text-[#0A0A0A] hover:text-[#1E2A47] transition-colors"
                  >
                    hello@innhovex.com
                  </a>
                </div>
                <div>Buenos Aires · Argentina</div>
                <div>© 2026 — Innhovex</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
