"use client";

import { useEffect, useMemo, useRef } from "react";
import rough from "roughjs";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "../TransitionLink";
import Lapiz from "./Lapiz";

// Contorno de Argentina (continente + Tierra del Fuego) en un viewBox 400×834.
const MAPA = [
  "M172.3 15.9 L183.6 33.5 L191.1 13.9 L213.0 14.9 L216.1 20.2 L251.4 59.9 L267.1 63.6 L290.5 81.6 L310.3 91.2 L313.1 101.9 L294.2 139.0 L313.5 145.6 L335.1 149.3 L350.3 145.4 L367.7 126.7 L370.9 105.2 L380.4 100.5 L390.0 114.6 L389.6 134.1 L373.4 147.5 L360.5 157.4 L338.9 181.1 L313.2 214.3 L308.4 233.8 L303.3 258.9 L303.5 283.2 L299.3 288.6 L297.8 304.3 L296.5 317.1 L320.9 337.9 L318.3 354.7 L330.3 365.3 L329.3 377.2 L310.9 408.5 L282.4 421.6 L243.9 426.6 L222.8 424.2 L226.8 438.7 L222.9 457.0 L226.4 469.3 L214.9 477.8 L195.2 481.2 L176.8 472.3 L169.3 478.7 L172.0 502.9 L185.0 510.3 L195.5 502.6 L201.2 515.2 L183.5 522.8 L168.1 537.9 L165.3 562.5 L160.8 575.5 L142.6 575.6 L127.6 588.1 L122.1 606.3 L140.9 624.2 L159.3 629.1 L152.7 651.0 L130.0 664.7 L117.5 693.3 L100.0 702.9 L92.1 714.3 L98.3 739.6 L111.1 753.7 L103.0 752.5 L85.2 748.7 L38.8 745.4 L30.9 731.2 L31.2 713.0 L18.4 714.5 L11.7 705.7 L10.0 679.9 L24.7 669.1 L30.8 653.7 L28.6 641.4 L38.8 620.5 L45.8 588.3 L43.7 574.0 L52.1 569.4 L50.1 560.2 L41.1 555.3 L47.5 545.1 L38.8 535.8 L34.3 507.7 L42.0 502.8 L38.8 473.0 L43.3 448.1 L48.4 426.3 L59.9 417.5 L54.1 393.7 L54.0 371.3 L68.6 355.4 L68.1 335.0 L79.1 311.3 L79.1 288.8 L74.2 284.4 L65.3 242.3 L77.1 217.2 L75.3 193.6 L82.2 171.5 L94.8 148.6 L108.3 133.5 L102.6 123.9 L106.6 116.1 L106.0 75.5 L126.9 63.4 L133.5 38.1 L131.2 32.0 L147.2 10.0 L172.3 15.9 Z",
  "M162.0 823.2 L143.8 824.4 L134.0 815.8 L122.4 815.2 L101.8 815.1 L101.8 760.7 L109.2 772.0 L118.8 790.3 L143.8 804.9 L170.7 811.0 L162.0 823.2 Z",
];
const C = { ba: [298.7, 321.2], plottier: [109.6, 427.7], riogrande: [119.8, 788.8] } as const;

// Tramos del recorrido: BA → Obra Azul (vuelta corta), → Plottier, → Río Grande.
const RUTAS = [
  "M298.7 321.2 C 335 305, 350 345, 322 356 C 305 362, 292 345, 298.7 321.2",
  "M298.7 321.2 C 250 296, 170 350, 109.6 427.7",
  "M109.6 427.7 C 50 520, 190 610, 150 700 C 128 745, 108 762, 119.8 788.8",
];
// Tramos del scroll: [inicio, fin] de cada segmento (0–1 del recorrido de la sección).
const TRAMOS = [[0.08, 0.26], [0.34, 0.56], [0.62, 0.86]] as const;

const PINES = [
  { id: "estudio", x: C.ba[0], y: C.ba[1], estudio: true },
  { id: "1", x: C.ba[0] + 20, y: C.ba[1] + 28, estudio: false },
  { id: "2", x: C.plottier[0], y: C.plottier[1], estudio: false },
  { id: "3", x: C.riogrande[0], y: C.riogrande[1], estudio: false },
];

// Cada parada abre su caso en /work.
const CASOS = ["obra-azul", "jem-si", "yerbas-de-mi-tierra"];
const PIN_NOMBRES = ["Obra Azul", "JEM-SI", "Yerbas de mi Tierra"];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function HomeViaje() {
  const t = useT();
  const v = t.home.viaje;
  const secRef = useRef<HTMLElement>(null);
  const maskRefs = useRef<(SVGPathElement | null)[]>([]);
  const rutaRefs = useRef<(SVGPathElement | null)[]>([]);
  const lapizRef = useRef<SVGGElement>(null);
  const pinRefs = useRef<(SVGGElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const etapaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barraRefs = useRef<(HTMLElement | null)[]>([]);

  // Mapa a lápiz: rough.js con semilla fija → el mismo trazo en server y cliente.
  const mapa = useMemo(() => {
    const gen = rough.generator();
    return MAPA.flatMap((d) =>
      gen.toPaths(
        gen.path(d, {
          stroke: "#2A2B30", strokeWidth: 1.5, roughness: 1.1, bowing: 1.2,
          fill: "rgba(30,42,71,.32)", fillStyle: "hachure", hachureGap: 9, hachureAngle: -41, fillWeight: 0.55, seed: 7,
        })
      )
    );
  }, []);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let etapaActual = -1;

    const onScroll = () => {
      const r = sec.getBoundingClientRect();
      const total = sec.offsetHeight - window.innerHeight;
      const p = reducir ? 1 : clamp(-r.top / total);
      let punta: { x: number; y: number } | null = null;
      RUTAS.forEach((_, i) => {
        const m = maskRefs.current[i], ruta = rutaRefs.current[i];
        if (!m || !ruta) return;
        const [a, b] = TRAMOS[i];
        const k = clamp((p - a) / (b - a));
        m.setAttribute("stroke-dashoffset", String(1 - k));
        if (k > 0 && k < 1) punta = ruta.getPointAtLength(ruta.getTotalLength() * k);
        if (k >= 1 && i === RUTAS.length - 1) punta = ruta.getPointAtLength(ruta.getTotalLength());
      });
      if (!punta && p < TRAMOS[0][0]) punta = { x: C.ba[0], y: C.ba[1] };
      if (!punta) {
        const ruta = rutaRefs.current[p < TRAMOS[1][0] ? 0 : 1];
        if (ruta) punta = ruta.getPointAtLength(ruta.getTotalLength());
      }
      if (punta && lapizRef.current) {
        const { x, y } = punta as { x: number; y: number };
        lapizRef.current.setAttribute("transform", `translate(${x} ${y})`);
      }

      const visibles = [p > 0.02, p > TRAMOS[0][1] - 0.04, p > TRAMOS[1][1] - 0.02, p > TRAMOS[2][1] - 0.02];
      visibles.forEach((on, i) => {
        const pin = pinRefs.current[i];
        if (pin) pin.style.opacity = on ? "1" : "0";
        labelRefs.current[i]?.classList.toggle("hl-on", on);
      });

      const e = p < TRAMOS[0][1] - 0.04 ? 0 : p < TRAMOS[1][1] - 0.02 ? 1 : p < TRAMOS[2][1] - 0.02 ? 2 : p < 0.93 ? 3 : 4;
      if (e !== etapaActual) {
        etapaActual = e;
        etapaRefs.current.forEach((el, i) => {
          if (!el) return;
          el.classList.toggle("hl-activa", i === e);
          el.inert = i !== e;
        });
        barraRefs.current.forEach((b, i) => b?.classList.toggle("hl-on", i < e));
      }
    };

    let tick = false;
    const onScrollRaf = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        onScroll();
        tick = false;
      });
    };
    window.addEventListener("scroll", onScrollRaf, { passive: true });
    window.addEventListener("resize", onScrollRaf);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScrollRaf);
      window.removeEventListener("resize", onScrollRaf);
    };
  }, []);

  // Posición de los post-it sobre el mapa (en % de la caja).
  const labels = [
    { cls: "hl-rot-2", style: { left: "74.7%", top: "calc(38.5% - 64px)" }, name: v.studioPin, sub: v.studioPinSub },
    { cls: "hl-rot-1", style: { left: "calc(74.7% - 8%)", top: "calc(38.5% + 36px)" }, name: PIN_NOMBRES[0], sub: v.stops[0].pin },
    { cls: "hl-rot-4", style: { left: "calc(27.4% + 14%)", top: "calc(51.3% + 26px)" }, name: PIN_NOMBRES[1], sub: v.stops[1].pin },
    { cls: "hl-rot-3", style: { left: "calc(29.9% + 36%)", top: "calc(94.6% - 58px)" }, name: PIN_NOMBRES[2], sub: v.stops[2].pin },
  ];

  return (
    <section ref={secRef} className="hl-viaje hl-lienzo" id="viaje" data-theme="light">
      <div className="hl-viaje-sticky">
        <div className="hl-viaje-textos">
          <div ref={(el) => { etapaRefs.current[0] = el; }} className="hl-etapa hl-activa">
            <span className="hl-kicker">{v.kicker}</span>
            <h3 className="hl-titulo">
              {v.titlePre}
              <span className="hl-subrayado">
                {v.titleMark}
                <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 8 C 50 2, 120 12, 198 5" fill="none" stroke="#FFE36E" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
              {v.titlePost}
            </h3>
            <p>{v.lead}</p>
          </div>
          {v.stops.map((s, i) => (
            <div key={i} ref={(el) => { etapaRefs.current[i + 1] = el; }} className="hl-etapa" inert>
              <span className="hl-donde">{s.where}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="hl-intriga">{s.hook}</span>
              <TransitionLink className="hl-btn-lapiz" href={`/work?p=${CASOS[i]}`}>
                {v.seeHow}
              </TransitionLink>
            </div>
          ))}
          <div ref={(el) => { etapaRefs.current[4] = el; }} className="hl-etapa" inert>
            <span className="hl-kicker">{v.endKicker}</span>
            <h3>{v.endTitle}</h3>
            <p>{v.endBody}</p>
            <TransitionLink className="hl-btn-lapiz hl-oscuro" href="/work">
              {v.endCta}
            </TransitionLink>
          </div>
          <div className="hl-progreso" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <i key={i} ref={(el) => { barraRefs.current[i] = el; }} />
            ))}
          </div>
        </div>

        <div className="hl-mapa-caja">
          <svg viewBox="0 0 400 834" role="img" aria-label={v.mapLabel}>
            <defs>
              {RUTAS.map((d, i) => (
                <mask key={i} id={`hl-m${i + 1}`}>
                  <path
                    ref={(el) => { maskRefs.current[i] = el; }}
                    d={d} fill="none" stroke="#fff" strokeWidth="8" pathLength={1} strokeDasharray="1" strokeDashoffset="1"
                  />
                </mask>
              ))}
            </defs>
            <g>
              {mapa.map((p, i) => (
                <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill={p.fill ?? "none"} />
              ))}
            </g>
            {/* rosa de los vientos */}
            <g transform="translate(40 70)" fill="none" stroke="#2A2B30" strokeWidth="1.6" strokeLinecap="round">
              <path d="M0 -26 L6 0 L0 26 L-6 0 Z" />
              <path d="M0 -26 L6 0 L-6 0 Z" fill="#2A2B30" />
              <text x="-6" y="-34" fill="#2A2B30" stroke="none" fontFamily="var(--mano)" fontSize="18">N</text>
            </g>
            {RUTAS.map((d, i) => (
              <path
                key={i}
                ref={(el) => { rutaRefs.current[i] = el; }}
                d={d} fill="none" stroke="#1E2A47" strokeWidth="2.4" strokeDasharray="7 6" strokeLinecap="round" mask={`url(#hl-m${i + 1})`}
              />
            ))}
            <g>
              {PINES.map((pin, i) => (
                <g
                  key={pin.id}
                  ref={(el) => { pinRefs.current[i] = el; }}
                  style={{ opacity: 0, transition: "opacity .4s" }}
                >
                  <circle cx={pin.x} cy={pin.y} r={pin.estudio ? 7 : 6} fill={pin.estudio ? "#1E2A47" : "#D9534F"} stroke="#2A2B30" strokeWidth="1.8" />
                  <circle cx={pin.x} cy={pin.y} r="13" fill="none" stroke="#2A2B30" strokeWidth="1" strokeDasharray="3 3" />
                </g>
              ))}
            </g>
            {/* lápiz que viaja */}
            <g ref={lapizRef} transform={`translate(${C.ba[0]} ${C.ba[1]})`}>
              <Lapiz scale={0.85} />
            </g>
          </svg>
          {labels.map((l, i) => (
            <div
              key={i}
              ref={(el) => { labelRefs.current[i] = el; }}
              className={`hl-postit hl-pin-label ${l.cls}`}
              style={l.style}
              aria-hidden
            >
              {l.name}
              <small>{l.sub}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
