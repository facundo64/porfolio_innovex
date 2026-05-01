"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { motion } from "framer-motion";

export default function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="relative inline-flex items-center gap-1 rounded-full border border-[#1E2A47]/15 bg-white/40 backdrop-blur-md px-1 py-1 text-[10px] font-mono tracking-[0.18em] uppercase">
      {(["es", "en"] as const).map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className="relative px-2.5 py-1 transition-colors"
          >
            {active ? (
              <motion.span
                layoutId="locale-pill"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-full bg-[#1E2A47]"
              />
            ) : null}
            <span
              className={`relative ${active ? "text-[#FAFAF7]" : "text-[#1E2A47]/60 hover:text-[#1E2A47]"}`}
            >
              {l}
            </span>
          </button>
        );
      })}
    </div>
  );
}
