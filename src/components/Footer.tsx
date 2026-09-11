"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import { InnhovexMark } from "./Preloader";
import TransitionLink from "./TransitionLink";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const legalLinks = [
    { href: "/contact", label: t.footer.links.contact },
    { href: "/privacidad", label: t.footer.links.privacy },
    { href: "/consentimiento", label: t.footer.links.consent },
    { href: "/terminos", label: t.footer.links.terms },
  ];

  return (
    <footer
      data-theme="light"
      className="relative bg-[#FAFAF7] text-[#1E2A47] px-6 md:px-14 pt-14 md:pt-16 pb-24 border-t border-[#E8E6DF]"
    >
      <div className="max-w-7xl mx-auto grid gap-12 md:gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
        {/* Marca */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-10 text-[#1E2A47]">
              <InnhovexMark className="w-full h-auto" />
            </span>
            <span className="font-serif text-2xl tracking-tight">INNHOVEX</span>
          </div>
          <p className="font-serif text-lg leading-relaxed text-[#1E2A47]/70 max-w-xs">
            {t.footer.claim}
          </p>
          <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#1E2A47]/45">
            {t.footer.tagline}
          </span>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#1E2A47]/45">
            {t.footer.contactTitle}
          </span>
          <a
            href={`mailto:${t.contact.info.emailValue}`}
            className="text-sm md:text-base text-[#1E2A47]/75 hover:text-[#1E2A47] transition-colors w-fit"
          >
            {t.contact.info.emailValue}
          </a>
          <a
            href={`tel:${t.contact.info.phoneValue.replace(/\s/g, "")}`}
            className="text-sm md:text-base text-[#1E2A47]/75 hover:text-[#1E2A47] transition-colors w-fit"
          >
            {t.contact.info.phoneValue}
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#1E2A47]/45">
            {t.footer.legalTitle}
          </span>
          <ul className="flex flex-col gap-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <TransitionLink
                  href={link.href}
                  className="group inline-flex items-start gap-2 text-sm md:text-base text-[#1E2A47]/75 hover:text-[#1E2A47] transition-colors"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-px w-3 bg-[#1E2A47]/30 transition-all duration-300 group-hover:w-5 group-hover:bg-[#1E2A47]/70 shrink-0"
                  />
                  <span>{link.label}</span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#E8E6DF] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] font-mono tracking-[0.18em] uppercase text-[#1E2A47]/45">
        <span>© {year} INNHOVEX · {t.footer.rights}</span>
        <span>{t.footer.madeIn}</span>
      </div>
    </footer>
  );
}
