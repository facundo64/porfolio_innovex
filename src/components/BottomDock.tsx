"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";
import { useT } from "@/lib/i18n/LocaleProvider";

// Trazo a mano que encierra la opción activa (o la que está bajo el mouse).
const TRAZO = "M50 3 C 85 2, 98 12, 97 21 C 96 33, 75 38, 48 37 C 18 36, 3 30, 3 20 C 3 9, 22 3, 60 5";

/**
 * Dock a lápiz (solo desktop; en mobile navega el MobileMenu).
 * Muestra todas las secciones, sin esconder ninguna tras un "Menu",
 * y cierra con el CTA "Hablemos →".
 */
export default function BottomDock() {
  const pathname = usePathname();
  const t = useT();

  const items = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/services", label: t.nav.services },
    { href: "/process", label: t.nav.process },
  ];

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="hl hl-dock"
      aria-label="Navegación principal"
    >
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <TransitionLink
            key={item.href}
            href={item.href}
            className={active ? "hl-activo" : undefined}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden>
              <path pathLength={1} d={TRAZO} />
            </svg>
          </TransitionLink>
        );
      })}
      <TransitionLink
        href="/contact"
        className="hl-cta"
        aria-current={pathname === "/contact" ? "page" : undefined}
      >
        {t.nav.talk} →
      </TransitionLink>
    </motion.nav>
  );
}
