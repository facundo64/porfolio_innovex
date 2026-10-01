"use client";

import { useEffect, useMemo, useRef } from "react";
import rough from "roughjs";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "../TransitionLink";
import Lapiz from "./Lapiz";
import { C, MAPA, RUTAS } from "./HomeViaje";

/*
 * El viaje en celular (boceto aprobado: claude.ai/artifact/21Nva11pcByjLuadqzBTWb).
 * El mapa ocupa toda la pantalla y una "cámara" (el viewBox del SVG) se acerca
 * a cada parada y sigue al lápiz; la historia va en una hoja dibujada abajo
 * que se cambia como pasar página. En desktop se usa HomeViaje.
 */

const OA = [C.ba[0] + 20, C.ba[1] + 28] as const;
const PINES = [C.ba, OA, C.plottier, C.riogrande];
const CASOS = ["obra-azul", "jem-si", "yerbas-de-mi-tierra"];
const PIN_NOMBRES = ["Obra Azul", "JEM-SI", "Yerbas de mi Tierra"];

// Guion de la cámara (0–1 del scroll de la sección): vista general → Buenos
// Aires → Plottier → Río Grande → vista general con el recorrido completo.
const GENERAL = { x: 200, y: 330, z: 0.55 };
const CAM = [
  { t: 0, ...GENERAL },
  { t: 0.1, ...GENERAL },
  { t: 0.2, x: 312, y: 338, z: 2.7 },
  { t: 0.4, x: 312, y: 338, z: 2.7 },
  { t: 0.56, x: C.plottier[0], y: C.plottier[1], z: 2.3 },
  { t: 0.66, x: C.plottier[0], y: C.plottier[1], z: 2.3 },
  { t: 0.84, x: C.riogrande[0], y: C.riogrande[1] - 10, z: 2.5 },
  { t: 0.9, x: C.riogrande[0], y: C.riogrande[1] - 10, z: 2.5 },
  { t: 1, ...GENERAL },
];
const TRAMOS = [[0.18, 0.3], [0.42, 0.56], [0.68, 0.84]] as const; // dibujo de cada tramo
const VIAJES = [[0.4, 0.56], [0.66, 0.84]] as const; // tramos largos: la cámara sigue al lápiz

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const suave = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

function camara(p: number) {
  let i = 0;
  while (i < CAM.length - 2 && p > CAM[i + 1].t) i++;
  const a = CAM[i], b = CAM[i + 1];
  const t = suave(clamp((p - a.t) / (b.t - a.t || 1)));
  let z = mix(a.z, b.z, t);
  // En los viajes largos la cámara se aleja un poco a mitad de camino.
  VIAJES.forEach(([s, e]) => {
    if (p > s && p < e) z *= 1 - 0.42 * Math.sin((Math.PI * (p - s)) / (e - s));
  });
  return { x: mix(a.x, b.x, t), y: mix(a.y, b.y, t), z };
}

export default function HomeViajeMovil() {
  const t = useT();
  const v = t.home.viaje;
  const secRef = useRef<HTMLElement>(null);
  const escenaRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const maskRefs = useRef<(SVGPathElement | null)[]>([]);
  const rutaRefs = useRef<(SVGPathElement | null)[]>([]);
  const lapizRef = useRef<SVGGElement>(null);
  const lapizEscRef = useRef<SVGGElement>(null);
  const pinRefs = useRef<(SVGGElement | null)[]>([]);
  const notaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hojaRefs = useRef<(HTMLElement | null)[]>([]);
  const barraRefs = useRef<(HTMLElement | null)[]>([]);
  const estadoRef = useRef<HTMLSpanElement>(null);

  // Mapa a lápiz con trazo que no engorda con el zoom.
  const mapa = useMemo(() => {
    const gen = rough.generator();
    return MAPA.flatMap((d) =>
      gen.toPaths(
        gen.path(d, {
          stroke: "#2A2B30", strokeWidth: 1.6, roughness: 1.1, bowing: 1.2,
          fill: "rgba(30,42,71,.30)", fillStyle: "hachure", hachureGap: 7, hachureAngle: -41, fillWeight: 0.6, seed: 7,
        })
      )
    );
  }, []);

  useEffect(() => {
    const sec = secRef.current, escena = escenaRef.current, svg = svgRef.current;
    if (!sec || !escena || !svg) return;
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let etapaActual = -1;

    const onScroll = () => {
      if (sec.offsetParent === null) return; // oculto en desktop
      const W = escena.clientWidth, H = escena.clientHeight;
      const r = sec.getBoundingClientRect();
      const total = sec.offsetHeight - H;
      const p = reducir ? 1 : clamp(-r.top / total);

      // Dibujo de los tramos y punta del lápiz
      let punta: { x: number; y: number } = { x: C.ba[0], y: C.ba[1] };
      RUTAS.forEach((_, i) => {
        const m = maskRefs.current[i], ruta = rutaRefs.current[i];
        if (!m || !ruta) return;
        const [a, b] = TRAMOS[i];
        const k = clamp((p - a) / (b - a));
        m.setAttribute("stroke-dashoffset", String(1 - k));
        if (p >= a) {
          const q = ruta.getPointAtLength(ruta.getTotalLength() * k);
          punta = { x: q.x, y: q.y };
        }
      });

      // Cámara: en los viajes mira a la punta del lápiz.
      const cam = camara(p);
      VIAJES.forEach(([s, e]) => {
        if (p > s + 0.02 && p < e - 0.02) {
          const k = 0.65 * Math.sin(Math.PI * suave(clamp((p - s) / (e - s))));
          cam.x = mix(cam.x, punta.x, k);
          cam.y = mix(cam.y, punta.y, k);
        }
      });
      // El punto de interés queda en el tercio superior, arriba de la hoja.
      const vbW = 420 / cam.z, vbH = (vbW * H) / W;
      const vbX = cam.x - vbW / 2, vbY = cam.y - vbH * 0.3;
      svg.setAttribute("viewBox", `${vbX.toFixed(2)} ${vbY.toFixed(2)} ${vbW.toFixed(2)} ${vbH.toFixed(2)}`);
      lapizRef.current?.setAttribute("transform", `translate(${punta.x.toFixed(2)} ${punta.y.toFixed(2)})`);
      lapizEscRef.current?.setAttribute("transform", `scale(${(0.9 / cam.z).toFixed(3)})`);

      // Pines: se marcan al llegar; solo la parada actual lleva su nota.
      const e = p < 0.2 ? 0 : p < 0.47 ? 1 : p < 0.74 ? 2 : p < 0.93 ? 3 : 4;
      const llegado = [p > 0.12, p > 0.28, p > 0.54, p > 0.82];
      const notaActiva = e === 0 ? 0 : e === 4 ? -1 : e;
      PINES.forEach((c, i) => {
        const pin = pinRefs.current[i];
        if (pin) pin.style.opacity = llegado[i] ? "1" : "0";
        const nota = notaRefs.current[i];
        if (!nota) return;
        nota.style.left = `${((c[0] - vbX) / vbW) * W}px`;
        nota.style.top = `${((c[1] - vbY) / vbH) * H}px`;
        nota.classList.toggle("hl-on", i === notaActiva && llegado[i]);
      });

      if (e !== etapaActual) {
        etapaActual = e;
        hojaRefs.current.forEach((h, i) => {
          if (!h) return;
          h.classList.toggle("hl-activa", i === e);
          h.classList.toggle("hl-pasada", i < e);
          h.inert = i !== e;
        });
        barraRefs.current.forEach((b, i) => b?.classList.toggle("hl-on", i < Math.min(e, 3) || e === 4));
        const est = estadoRef.current;
        if (est) {
          // Los textos vienen del diccionario vía data-* (cambian con el idioma).
          const { kicker = "", stopOf = "", fullRoute = "" } = est.dataset;
          est.textContent = e === 0 ? kicker : e === 4 ? fullRoute : stopOf.replace("{n}", String(e));
        }
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

  const notas = [
    { name: v.studioPin, sub: v.studioPinSub, cls: "hl-vm-nota-base" },
    ...v.stops.map((s, i) => ({ name: PIN_NOMBRES[i], sub: s.pin, cls: "" })),
  ];

  return (
    <section ref={secRef} className="hl-vm hl-lienzo" data-theme="light" aria-label={v.mapLabel}>
      <div ref={escenaRef} className="hl-vm-escena">
        <svg ref={svgRef} className="hl-vm-mapa" viewBox="0 0 400 834" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            {RUTAS.map((d, i) => (
              <mask key={i} id={`hl-vm-m${i + 1}`}>
                <path
                  ref={(el) => { maskRefs.current[i] = el; }}
                  d={d} fill="none" stroke="#fff" strokeWidth="10" pathLength={1} strokeDasharray="1" strokeDashoffset="1"
                />
              </mask>
            ))}
          </defs>
          <g>
            {mapa.map((p, i) => (
              <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill={p.fill ?? "none"} vectorEffect="non-scaling-stroke" />
            ))}
          </g>
          <g transform="translate(36 60)" fill="none" stroke="#2A2B30" strokeWidth="1.6" strokeLinecap="round">
            <path d="M0 -26 L6 0 L0 26 L-6 0 Z" vectorEffect="non-scaling-stroke" />
            <path d="M0 -26 L6 0 L-6 0 Z" fill="#2A2B30" />
            <text x="-6" y="-34" fill="#2A2B30" stroke="none" fontFamily="var(--mano)" fontSize="18">N</text>
          </g>
          {RUTAS.map((d, i) => (
            <path
              key={i}
              ref={(el) => { rutaRefs.current[i] = el; }}
              d={d} fill="none" stroke="#1E2A47" strokeWidth="2.6" strokeDasharray="5 4" strokeLinecap="round"
              vectorEffect="non-scaling-stroke" mask={`url(#hl-vm-m${i + 1})`}
            />
          ))}
          {PINES.map((c, i) => (
            <g
              key={i}
              ref={(el) => { pinRefs.current[i] = el; }}
              transform={`translate(${c[0]} ${c[1]})`}
              style={{ opacity: 0, transition: "opacity .4s" }}
            >
              <circle r={i === 0 ? 4.2 : 3.6} fill={i === 0 ? "#1E2A47" : "#D9534F"} stroke="#2A2B30" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
              <circle r="9" fill="none" stroke="#2A2B30" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
            </g>
          ))}
          <g ref={lapizRef} transform={`translate(${C.ba[0]} ${C.ba[1]})`}>
            <g ref={lapizEscRef}>
              <Lapiz />
            </g>
          </g>
        </svg>

        <div className="hl-vm-estado" aria-hidden>
          <span ref={estadoRef} data-kicker={v.kicker} data-stop-of={v.stopOf} data-full-route={v.fullRoute}>
            {v.kicker}
          </span>
          <span className="hl-vm-barras">
            {[0, 1, 2].map((i) => (
              <i key={i} ref={(el) => { barraRefs.current[i] = el; }} />
            ))}
          </span>
        </div>

        {notas.map((n, i) => (
          <div
            key={i}
            ref={(el) => { notaRefs.current[i] = el; }}
            className={`hl-vm-nota ${n.cls}`}
            aria-hidden
          >
            {n.name}
            <small>{n.sub}</small>
          </div>
        ))}

        <div className="hl-vm-hojas">
          <article ref={(el) => { hojaRefs.current[0] = el; }} className="hl-vm-hoja hl-activa">
            <h3>
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
          </article>
          {v.stops.map((s, i) => (
            <article key={i} ref={(el) => { hojaRefs.current[i + 1] = el; }} className="hl-vm-hoja" inert>
              <div className="hl-vm-fila">
                <span className="hl-vm-donde">{s.where.replace(/^[^·]*·\s*/, "")}</span>
                <span className="hl-vm-num">{i + 1} / 3</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="hl-vm-intriga">{s.hook}</span>
              <TransitionLink className="hl-btn-lapiz" href={`/work?p=${CASOS[i]}`}>
                {v.seeHow}
              </TransitionLink>
            </article>
          ))}
          <article ref={(el) => { hojaRefs.current[4] = el; }} className="hl-vm-hoja" inert>
            <span className="hl-vm-donde">{v.endKicker.replace(/^✎\s*/, "")}</span>
            <h3>{v.endTitle}</h3>
            <p>{v.endBody}</p>
            <TransitionLink className="hl-btn-lapiz hl-oscuro" href="/work">
              {v.endCta}
            </TransitionLink>
          </article>
        </div>
      </div>
    </section>
  );
}
