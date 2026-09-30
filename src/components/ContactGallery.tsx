"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import Cabecera, { Subrayado } from "./lapiz/Cabecera";

const EASE = [0.22, 1, 0.36, 1] as const;

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/innhovex" },
  { label: "LinkedIn", href: "https://linkedin.com/company/innhovex" },
  { label: "GitHub", href: "https://github.com/facundo64" },
];

type FormStatus = "idle" | "submitting" | "success" | "error" | "rate_limited";

export default function ContactGallery() {
  const t = useT();
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  // /contact?msg=... precarga el mensaje (lo arma "¿Qué necesitás?" del Home).
  const [prefill, setPrefill] = useState("");
  useEffect(() => {
    const msg = new URLSearchParams(window.location.search).get("msg");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (msg) setPrefill(msg.slice(0, 500));
  }, []);

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
      if (!res.ok || !json.ok) {
        if (json.error === "rate_limited") {
          setStatus("rate_limited");
        } else {
          throw new Error(json.error ?? "send_failed");
        }
        return;
      }
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const whatsappNumber = t.contact.info.phoneValue.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  const c = t.contact;

  return (
    <div className="hl hl-pagina hl-lienzo" data-theme="light">
      <Cabecera
        meta={[c.eyebrow, c.info.locationValue]}
        kicker={c.kicker}
        lineas={[
          c.titleLine1,
          <>
            {c.titleLine2Prefix ? `${c.titleLine2Prefix} ` : null}
            <i>
              <Subrayado>{c.titleLine2Em}</Subrayado>
            </i>
          </>,
          <>
            {c.titleLine3.replace(/\.$/, "")}
            <span className="hl-punto">.</span>
          </>,
        ]}
        sub={c.subtitle}
      />

      <section className="hl-seccion">
        <div className="hl-cont-grid">
          {/* Formulario sobre una hoja dibujada */}
          <motion.div
            className="hl-ventana"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          >
            <div className="hl-ventana-barra">
              <span className="hl-pts" aria-hidden><i /><i /><i /></span>
              <span className="hl-url">{c.formBar}</span>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="hl-form" aria-label={c.formTitle}>
              <Field name="name" label={c.fields.name} required autoComplete="name" />
              <Field name="email" label={c.fields.email} type="email" required autoComplete="email" />
              <Field name="company" label={c.fields.company} autoComplete="organization" />
              <Field
                key={prefill}
                name="message"
                label={c.fields.message}
                multiline
                required
                defaultValue={prefill}
              />

              <div className="hl-form-acciones">
                <button type="submit" className="hl-btn-lapiz hl-oscuro" disabled={status === "submitting"}>
                  {status === "submitting" ? c.fields.submitting : c.fields.submit} →
                </button>
                <span className="hl-o">{c.orDivider}</span>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hl-btn-lapiz hl-wpp">
                  <WhatsAppIcon />
                  {c.whatsappCta}
                </a>
              </div>

              {status === "success" ? (
                <p className="hl-form-estado hl-ok" role="status">
                  <span aria-hidden>✓</span> {c.successMessage}
                </p>
              ) : status === "rate_limited" ? (
                <p className="hl-form-estado hl-mal" role="alert">
                  <span aria-hidden>⏳</span> {c.rateLimited}
                </p>
              ) : status === "error" ? (
                <p className="hl-form-estado hl-mal" role="alert">
                  <span aria-hidden>⚠</span> {c.errorMessage}
                </p>
              ) : (
                <p className="hl-form-estado hl-nota">{c.note}</p>
              )}
            </form>
          </motion.div>

          {/* Datos en post-its */}
          <motion.aside
            className="hl-cont-lado"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          >
            <div className="hl-cont-postits">
              <div className="hl-postit hl-rot-2">
                <small>{c.info.emailLabel}</small>
                <a href={`mailto:${c.info.emailValue}`}>{c.info.emailValue}</a>
              </div>
              <div className="hl-postit hl-rot-1">
                <small>{c.info.phoneLabel}</small>
                <a href={`tel:${c.info.phoneValue.replace(/\s/g, "")}`}>{c.info.phoneValue}</a>
              </div>
            </div>
            <div className="hl-cont-datos">
              <div>
                <small>{c.info.locationLabel}</small>
                <span>{c.info.locationValue}</span>
              </div>
              <div>
                <small>{c.info.hoursLabel}</small>
                <span>{c.info.hoursValue}</span>
              </div>
            </div>
            <div className="hl-cont-datos">
              <small>{c.socialTitle}</small>
              <div className="hl-pills">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hl-pill">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
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
  defaultValue,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  defaultValue?: string;
  autoComplete?: string;
}) {
  return (
    <div className="hl-campo">
      <label htmlFor={name}>
        {label}
        {required ? <b> *</b> : null}
      </label>
      {multiline ? (
        <textarea id={name} name={name} required={required} rows={4} defaultValue={defaultValue} />
      ) : (
        <input id={name} name={name} type={type} required={required} autoComplete={autoComplete} />
      )}
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
