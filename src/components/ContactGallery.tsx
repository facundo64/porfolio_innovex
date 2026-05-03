"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";

const EASE = [0.76, 0, 0.24, 1] as const;

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/innhovex" },
  { label: "LinkedIn", href: "https://linkedin.com/company/innhovex" },
  { label: "GitHub", href: "https://github.com/facundo64" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactGallery() {
  const t = useT();
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "send_failed");
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const whatsappNumber = t.contact.info.phoneValue.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <div
      className="relative w-full min-h-[100dvh] text-[#FAFAF7] overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 60% 120%, #D1D2C1 0%, #88A6A5 55%, #50747E 90%, #283A42 120%)",
      }}
    >
      {/* Viñeta oscura arriba (igual que Work) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-gradient-to-b from-[#0F161A]/80 to-transparent z-0"
      />

      {/* Grano texturizado (igual que Work) */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay opacity-[0.08] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* HERO TÍTULO */}
      <section className="relative z-10 px-6 md:px-14 pt-28 md:pt-32 pb-12 md:pb-16">
        {/* Eyebrow */}
        <div className="flex items-start justify-between text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            {t.contact.eyebrow}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="hidden md:inline"
          >
            {t.contact.info.locationValue}
          </motion.span>
        </div>

        {/* Título gigante — siempre 3 líneas: line1 / [prefix] em. / line3 */}
        <h1
          className="font-serif text-[#FAFAF7] tracking-[-0.04em] mt-10 md:mt-14"
          style={{ fontSize: "clamp(2.75rem, 9vw, 10rem)", lineHeight: 0.9 }}
        >
          {/* Línea 1 — regular */}
          <span className="block overflow-hidden" style={{ lineHeight: 0.92 }}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.3, delay: 0.4, ease: EASE }}
              className="block"
            >
              {t.contact.titleLine1}
            </motion.span>
          </span>

          {/* Línea 2 — [prefix opcional] + italic con punto navy */}
          <span className="block overflow-hidden" style={{ lineHeight: 0.92 }}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.3, delay: 0.48, ease: EASE }}
              className="block"
            >
              {t.contact.titleLine2Prefix ? (
                <span className="text-[#FAFAF7]/92">{t.contact.titleLine2Prefix}{" "}</span>
              ) : null}
              <em className="italic text-[#FAFAF7]">
                {t.contact.titleLine2Em}
                <span className="text-[#1E2A47]">.</span>
              </em>
            </motion.span>
          </span>

          {/* Línea 3 — regular */}
          <span className="block overflow-hidden" style={{ lineHeight: 0.92 }}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.3, delay: 0.56, ease: EASE }}
              className="block"
            >
              {t.contact.titleLine3}
            </motion.span>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: EASE }}
          className="mt-10 md:mt-14 max-w-2xl text-base md:text-xl font-serif text-[#FAFAF7]/75 leading-relaxed"
        >
          {t.contact.subtitle}
        </motion.p>
      </section>

      {/* BODY — formulario + info lateral */}
      <section className="relative z-10 px-6 md:px-14 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        {/* FORM */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: EASE }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 space-y-8 border-t border-[#FAFAF7]/12 pt-12"
        >
          <h2 className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55">
            {t.contact.formTitle}
          </h2>

          <Field name="name" label={t.contact.fields.name} required />
          <Field name="email" label={t.contact.fields.email} type="email" required />
          <Field name="company" label={t.contact.fields.company} />
          <Field
            name="message"
            label={t.contact.fields.message}
            multiline
            required
          />

          {/* Botones: Submit + WhatsApp + nota */}
          <div className="pt-4 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-wrap">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center justify-center gap-3 bg-[#FAFAF7] text-[#0A0A0A] px-7 py-4 rounded-full text-[11px] font-mono tracking-[0.18em] uppercase hover:bg-[#1E2A47] hover:text-[#FAFAF7] transition-colors duration-300 disabled:opacity-60"
              >
                {status === "submitting"
                  ? t.contact.fields.submitting
                  : t.contact.fields.submit}
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/40 px-1">
                {t.contact.orDivider}
              </span>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-[#FAFAF7]/25 text-[#FAFAF7] px-7 py-4 rounded-full text-[11px] font-mono tracking-[0.18em] uppercase hover:bg-[#25D366] hover:border-[#25D366] hover:text-[#0A0A0A] transition-colors duration-300"
              >
                <WhatsAppIcon />
                {t.contact.whatsappCta}
              </a>
            </div>

            {/* Estado del envío */}
            {status === "success" ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-mono tracking-[0.05em] text-[#A7E5C4] flex items-center gap-2"
              >
                <span aria-hidden>✓</span> {t.contact.successMessage}
              </motion.p>
            ) : status === "error" ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-mono tracking-[0.05em] text-[#F4B4A1] flex items-center gap-2"
              >
                <span aria-hidden>!</span> {t.contact.errorMessage}
              </motion.p>
            ) : (
              <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.18em] uppercase text-[#FAFAF7]/40">
                {t.contact.note}
              </span>
            )}
          </div>
        </motion.form>

        {/* INFO LATERAL */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: EASE }}
          className="lg:col-span-5 space-y-12 lg:border-t border-[#FAFAF7]/12 lg:pt-12 lg:pl-8"
        >
          <InfoBlock label={t.contact.info.emailLabel}>
            <a
              href={`mailto:${t.contact.info.emailValue}`}
              className="font-serif text-2xl md:text-3xl text-[#FAFAF7] hover:text-[#1E2A47] transition-colors tracking-[-0.02em]"
            >
              {t.contact.info.emailValue}
            </a>
          </InfoBlock>

          <InfoBlock label={t.contact.info.phoneLabel}>
            <a
              href={`tel:${t.contact.info.phoneValue.replace(/\s/g, "")}`}
              className="font-serif text-xl md:text-2xl text-[#FAFAF7]/90 hover:text-[#FAFAF7] transition-colors tracking-[-0.01em]"
            >
              {t.contact.info.phoneValue}
            </a>
          </InfoBlock>

          <InfoBlock label={t.contact.info.locationLabel}>
            <p className="font-serif text-xl md:text-2xl text-[#FAFAF7]/90 tracking-[-0.01em]">
              {t.contact.info.locationValue}
            </p>
          </InfoBlock>

          <InfoBlock label={t.contact.info.hoursLabel}>
            <p className="text-sm md:text-base text-[#FAFAF7]/75">
              {t.contact.info.hoursValue}
            </p>
          </InfoBlock>

          {/* Socials */}
          <div className="pt-4">
            <h4 className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55 mb-4">
              {t.contact.socialTitle}
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono tracking-[0.18em] uppercase border border-[#FAFAF7]/15 px-4 py-2 rounded-full text-[#FAFAF7]/85 hover:bg-[#FAFAF7] hover:text-[#0A0A0A] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.aside>
      </section>
    </div>
  );
}

/* ─── Field ──────────────────────────────────────────────────────────── */

function Field({
  name,
  label,
  type = "text",
  required,
  multiline,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const float = focused || hasValue;

  const commonClass =
    "w-full bg-transparent border-b border-[#FAFAF7]/20 pt-7 pb-3 text-base md:text-lg font-serif text-[#FAFAF7] placeholder:text-transparent focus:outline-none focus:border-[#FAFAF7] transition-colors duration-300";

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`absolute left-0 pointer-events-none transition-all duration-300 ${
          float
            ? "top-0 text-[10px] tracking-[0.22em] uppercase text-[#FAFAF7]/55 font-mono"
            : "top-7 text-base md:text-lg text-[#FAFAF7]/45 font-serif"
        }`}
      >
        {label}
        {required ? <span className="text-[#1E2A47]"> *</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          className={`${commonClass} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          className={commonClass}
        />
      )}
    </div>
  );
}

/* ─── InfoBlock ──────────────────────────────────────────────────────── */

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55 border-l-2 border-[#FAFAF7]/40 pl-3">
        {label}
      </h4>
      <div className="pl-3">{children}</div>
    </div>
  );
}

/* ─── WhatsApp icon ──────────────────────────────────────────────────── */

function WhatsAppIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
