"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "../TransitionLink";

// Trazo amarillo que encierra la opción elegida (uno distinto por tarjeta).
const CIRCULOS = [
  "M52 3 C 82 2, 98 18, 97 50 C 96 84, 76 98, 48 97 C 18 96, 3 80, 3 50 C 3 20, 20 4, 58 6",
  "M50 4 C 84 3, 97 22, 96 52 C 95 82, 74 97, 46 96 C 16 95, 4 78, 4 48 C 4 18, 24 5, 60 7",
  "M48 3 C 80 3, 97 20, 97 50 C 97 82, 78 97, 50 97 C 20 97, 3 80, 3 52 C 3 22, 22 3, 56 5",
];

const DOODLES = [
  (<><path d="M4 6 C 22 4, 44 5, 60 6 L 59 44 C 40 45, 22 46, 5 44 Z" /><path d="M5 15 L59 14" /><circle cx="10" cy="10.5" r="1.4" /><circle cx="16" cy="10.5" r="1.4" /><path d="M12 25 L36 24 M12 32 L28 32" /><path d="M42 23 L53 23 L52 36 L42 36 Z" stroke="#FFE36E" /></>),
  (<><circle cx="24" cy="25" r="9" /><path d="M24 8 L24 13 M24 37 L24 42 M7 25 L12 25 M36 25 L41 25 M12 13 L15.5 16.5 M32.5 33.5 L36 37 M12 37 L15.5 33.5 M32.5 16.5 L36 13" /><circle cx="48" cy="14" r="5" stroke="#FFE36E" /><path d="M48 5 L48 8 M48 20 L48 23 M39 14 L42 14 M54 14 L57 14" stroke="#FFE36E" /></>),
  (<><path d="M6 14 L30 13 L30 38 L6 39 Z" /><path d="M6 14 L18 26 L30 13" /><circle cx="46" cy="26" r="12" stroke="#FFE36E" /><path d="M34 26 L58 26 M46 14 C 52 20, 52 32, 46 38 C 40 32, 40 20, 46 14" stroke="#FFE36E" /></>),
];

/** Cierre del Home: el visitante elige qué necesita y el post-it arma el mensaje para /contact. */
export default function HomeNecesitas() {
  const t = useT();
  const n = t.home.necesitas;
  const [elegida, setElegida] = useState(0);
  const msg = n.options[elegida].msg;

  return (
    <section className="hl-necesitas" id="necesitas" data-theme="dark">
      <span className="hl-kicker">{n.kicker}</span>
      <h2 className="hl-titulo">
        {n.title}
        <i>{n.titleEm}</i>
      </h2>
      <div className="hl-opciones">
        {n.options.map((o, i) => (
          <button
            key={i}
            type="button"
            className="hl-opcion"
            aria-pressed={i === elegida}
            onClick={() => setElegida(i)}
          >
            <svg className="hl-circulo" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <path pathLength={1} d={CIRCULOS[i]} />
            </svg>
            <svg className="hl-doodle" viewBox="0 0 64 50" fill="none" stroke="#FAFAF7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {DOODLES[i]}
            </svg>
            <strong>{o.title}</strong>
            <span>{o.body}</span>
          </button>
        ))}
      </div>
      <div className="hl-cierre-fila">
        <div className="hl-postit hl-rot-1" aria-live="polite">“{msg}”</div>
        <TransitionLink className="hl-btn-lapiz" href={`/contact?msg=${encodeURIComponent(msg)}`}>
          {n.cta}
        </TransitionLink>
      </div>
      <div className="hl-datos hl-mono">
        <span>{n.reply}</span>
        <a href={`mailto:${t.contact.info.emailValue}`}>{t.contact.info.emailValue}</a>
        <a href={`tel:${t.contact.info.phoneValue.replace(/\s/g, "")}`}>{t.contact.info.phoneValue}</a>
      </div>
    </section>
  );
}
