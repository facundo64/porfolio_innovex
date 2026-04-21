"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";

const primaryItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/work", label: "Work", icon: WorkIcon },
];

const secondaryItems = [
  { href: "/services", label: "Services", icon: ServicesIcon },
  { href: "/process", label: "Process", icon: ProcessIcon },
  { href: "/contact", label: "Contact", icon: ContactIcon },
];

export default function BottomDock() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 100 && y > lastY);
      lastY = y;

      // Auto-close menu on scroll
      if (Math.abs(y - lastY) > 20) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // La página /work es un carrusel 100dvh inmersivo: sin dock flotante.
  if (pathname === "/work") return null;

  return (
    <>
      <SvgFilters />
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        aria-label="Navegación principal"
      >
        <motion.ul
          layout
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass flex items-center gap-1 rounded-full p-1.5"
          style={{ filter: "url(#glass-distortion)" }}
        >
          {/* BOTONES PRINCIPALES */}
          {primaryItems.map((item) => {
            const active = pathname === item.href && !menuOpen;
            const Icon = item.icon;
            return (
              <li key={item.href} className="relative">
                <TransitionLink
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-[#FAFAF7]"
                      : "text-[#1E2A47]/70 hover:text-[#1E2A47]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="dock-active"
                      className="absolute inset-0 rounded-full bg-[#1E2A47]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center w-4 h-4">
                    <Icon />
                  </span>
                  <motion.span
                    initial={false}
                    animate={{
                      width: compact && !active ? 0 : "auto",
                      opacity: compact && !active ? 0 : 1,
                      marginLeft: compact && !active ? 0 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                </TransitionLink>
              </li>
            );
          })}

          {/* BOTÓN DE MENÚ (COMPACTO) */}
          <li className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`relative flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium transition-colors ${
                menuOpen
                  ? "text-[#FAFAF7]"
                  : "text-[#1E2A47]/70 hover:text-[#1E2A47]"
              }`}
            >
              {menuOpen && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-[#1E2A47]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center w-4 h-4">
                <MenuIcon />
              </span>
              <motion.span
                initial={false}
                animate={{
                  width: compact && !menuOpen ? 0 : "auto",
                  opacity: compact && !menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 overflow-hidden whitespace-nowrap"
              >
                Menu
              </motion.span>
            </button>

            {/* POPUP DE SELECCIONES */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-[calc(100%+24px)] right-0 bg-[#FAFAF7]/95 backdrop-blur-xl rounded-3xl p-2 w-48 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-[#0A0A0A]/5 flex flex-col gap-1 z-50 origin-bottom-right"
                >
                  {secondaryItems.map((sub) => {
                    const active = pathname === sub.href;
                    return (
                      <TransitionLink
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className={`group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                          active ? "bg-[#1E2A47]/5 text-[#1E2A47]" : "hover:bg-black/5 text-[#0A0A0A]"
                        }`}
                      >
                        <span className={`w-4 h-4 transition-colors ${active ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                          <sub.icon />
                        </span>
                        <span className="text-sm font-medium tracking-tight">{sub.label}</span>
                      </TransitionLink>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </motion.ul>
      </motion.nav>
    </>
  );
}

function SvgFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="5"
            result="turbulence"
          />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" />
        </filter>
      </defs>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M2 6.5L8 2l6 4.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.5Z" />
      <path d="M6 14v-4h4v4" />
    </svg>
  );
}
function ServicesIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </svg>
  );
}
function WorkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="4" width="12" height="10" rx="1.5" />
      <path d="M5 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    </svg>
  );
}
function ProcessIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="4" cy="4" r="1.5" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="4" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M5.5 4h5M5.5 12h5M4 5.5v5M12 5.5v5" />
    </svg>
  );
}
function ContactIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="3" width="12" height="10" rx="1.5" />
      <path d="M2.5 4L8 8.5 13.5 4" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M2 4h12M2 8h12M2 12h12" />
    </svg>
  );
}
