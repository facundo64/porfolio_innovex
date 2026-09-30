"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";

// Íconos dibujados a mano (trazos en un viewBox 24×24).
const ICONOS: Record<string, React.ReactNode> = {
  correo: (<><path d="M3 6 C 9 5.5, 15 5.5, 21 6 L 20.6 18.4 C 15 18.8, 9 18.8, 3.4 18.4 Z" /><path d="M3.2 6.5 L12 13 L20.8 6.5" /></>),
  dns: (<><circle cx="12" cy="12" r="8.6" /><path d="M3.5 12 C 9 11.4, 15 11.4, 20.5 12" /><path d="M12 3.4 C 15.4 7, 15.6 17, 12 20.6 C 8.6 17, 8.4 7, 12 3.4" /></>),
  web: (<><path d="M3 4.6 L21 4.4 L20.7 19.4 L3.3 19.6 Z" /><path d="M3.1 9 L20.9 8.8" /><path d="M6.5 6.8 h.1 M9 6.8 h.1" /></>),
  gastos: (<><path d="M6 3 L18 3.2 L17.8 20.8 L15 19 L12 21 L9 19 L6.2 20.8 Z" /><path d="M9 8 L15 8 M9 12 L15 12 M9 16 L12 16" /></>),
  stock: (<><path d="M12 3 L20 7.5 L19.8 16.6 L12 21 L4.2 16.5 L4 7.5 Z" /><path d="M4 7.5 L12 12 L20 7.5 M12 12 L12 21" /></>),
  clientes: (<><circle cx="9" cy="8" r="3.4" /><path d="M2.6 20 C 3.4 16.4, 5.8 14.6, 9 14.6 C 12.2 14.6, 14.6 16.4, 15.4 20" /><circle cx="17" cy="9" r="2.4" /><path d="M17 14 C 19.3 14, 21 15.4, 21.5 18" /></>),
  turnos: (<><path d="M3 5.4 L21 5.2 L20.8 20.6 L3.2 20.8 Z" /><path d="M3.1 10 L20.9 9.8 M8 3 L8 7 M16 3 L16 7" /><path d="M8 14 h2 M14 14 h2 M8 17 h2" /></>),
  whatsapp: (<><path d="M4 20 L5.3 16 A8 8 0 1 1 8 18.7 Z" /><path d="M9 9.5 C 9 12.5, 11.5 15, 14.5 15 L15.5 13.5 L13.5 12.5 L12.5 13.3 C 11.5 12.8, 10.7 12, 10.2 11 L11 10 L10 8 Z" /></>),
};
// Mismo orden que home.dentro.apps del diccionario.
const APPS = [
  { k: "correo", c: "#E8836B" },
  { k: "dns", c: "#6B9BD8" },
  { k: "web", c: "#8C9BC4" },
  { k: "gastos", c: "#6DBE8F" },
  { k: "stock", c: "#E3B350" },
  { k: "clientes", c: "#B58AC9" },
  { k: "turnos", c: "#5FB7C1" },
  { k: "whatsapp", c: "#79C27A" },
];

/**
 * Escritorio estilo Odoo, dibujado. Un cursor recorre las apps solo y muestra
 * una tarea de ejemplo; si el visitante toca un ícono, toma el control (9 s).
 */
export default function HomeDentro() {
  const t = useT();
  const d = t.home.dentro;
  const [activa, setActiva] = useState(0);
  const [lineas, setLineas] = useState(0);
  const [manual, setManual] = useState(false);
  const [clic, setClic] = useState(false);
  const [cursor, setCursor] = useState<{ left: number; top: number } | null>(null);
  const contRef = useRef<HTMLDivElement>(null);
  const icoRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const ventanaRef = useRef<HTMLDivElement>(null);
  const manualAt = useRef(0);

  // Revela las líneas de la tarea de a una cada vez que cambia la app.
  useEffect(() => {
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = d.apps[activa].lines.length;
    const timers = Array.from({ length: n }, (_, k) =>
      window.setTimeout(() => setLineas(k + 1), reducir ? 0 : 250 + k * 520)
    );
    return () => {
      timers.forEach(clearTimeout);
      setLineas(0);
    };
  }, [activa, d.apps]);

  // Cursor automático mientras la ventana está visible.
  useEffect(() => {
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cont = contRef.current, ventana = ventanaRef.current;
    if (!cont || !ventana) return;

    const moverA = (i: number) => {
      const ico = icoRefs.current[i];
      if (!ico) return;
      const rc = cont.getBoundingClientRect(), rb = ico.getBoundingClientRect();
      setCursor({ left: rb.left - rc.left + rb.width * 0.62, top: rb.top - rc.top + rb.height * 0.55 });
    };

    let visible = false;
    let idx = 1;
    let actual = 0;
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    const paso = () => {
      if (visible && Date.now() - manualAt.current > 9000) {
        setManual(false);
        const i = idx;
        moverA(i);
        later(() => {
          setClic(true);
          actual = i;
          setActiva(i);
          later(() => setClic(false), 450);
        }, reducir ? 0 : 950);
        idx = (idx + 1) % APPS.length;
      }
      later(paso, 3600);
    };

    const io = new IntersectionObserver((es) => es.forEach((e) => (visible = e.isIntersecting)), { threshold: 0.3 });
    io.observe(ventana);
    moverA(0);
    later(paso, 1500);
    const onResize = () => moverA(actual);
    window.addEventListener("resize", onResize);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const app = d.apps[activa];

  return (
    <section className="hl-dentro hl-lienzo" id="dentro" data-theme="light">
      <div className="hl-dentro-grid">
        <div className="hl-dentro-texto">
          <span className="hl-kicker">{d.kicker}</span>
          <h2 className="hl-titulo">
            {d.title}
            <i>{d.titleEm}</i>
          </h2>
          <p>{d.body}</p>
          <div className="hl-postits">
            {d.postits.map((txt, i) => (
              <div key={i} className={`hl-postit ${["hl-rot-1", "hl-rot-4", "hl-rot-3"][i % 3]}`}>
                {txt}
              </div>
            ))}
          </div>
        </div>

        <div ref={ventanaRef} className="hl-ventana">
          <div className="hl-ventana-barra">
            <span className="hl-pts" aria-hidden><i /><i /><i /></span>
            <span className="hl-url">{d.url}</span>
            <span className="hl-ej">{d.example}</span>
          </div>
          <div ref={contRef} className="hl-apps" role="group" aria-label={d.appsLabel}>
            <div
              className={`hl-cursor${clic ? " hl-clic" : ""}`}
              style={cursor ?? { opacity: 0 }}
              aria-hidden
            >
              <svg viewBox="0 0 24 24">
                <path d="M4 2 L4 19 L8.5 14.8 L11.6 21.5 L14.6 20.2 L11.6 13.6 L18 13.3 Z" fill="#fff" stroke="#2A2B30" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
            {APPS.map((a, i) => (
              <button
                key={a.k}
                type="button"
                className={`hl-app${i === activa ? " hl-activa" : ""}`}
                style={{ "--c": a.c } as React.CSSProperties}
                aria-pressed={i === activa}
                onClick={() => {
                  manualAt.current = Date.now();
                  setManual(true);
                  setActiva(i);
                }}
              >
                <span ref={(el) => { icoRefs.current[i] = el; }} className="hl-app-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2A2B30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {ICONOS[a.k]}
                  </svg>
                </span>
                {d.apps[i].name}
              </button>
            ))}
          </div>
          <div className="hl-tarea" aria-live="polite">
            <div className="hl-tarea-tit">
              <h4>{app.name}</h4>
              <span className="hl-caso">{d.realCase} {app.caso}</span>
            </div>
            {app.lines.map(([pre, val], k) => (
              <div key={`${activa}-${k}`} className={`hl-linea-t${k < lineas ? " hl-on" : ""}`}>
                {pre === "✓" ? (
                  <>
                    <span className="hl-ok">✓</span>
                    <span>{val}</span>
                  </>
                ) : (
                  <>
                    <span className="hl-pre">{pre}</span>
                    <span>{val}</span>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="hl-control">{manual ? d.manual : d.hint}</p>
        </div>
      </div>
    </section>
  );
}
