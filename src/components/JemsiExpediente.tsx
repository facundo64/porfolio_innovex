"use client";

import { Captura, Expediente } from "./expediente/Expediente";
import { kalam, montserrat, playfair } from "@/lib/fonts/expedientes";
import "./JemsiExpediente.css";

const A = "/projects/jem-si";

/** Isotipo JEM-SI (4 planos), mismo trazado que usa el sitio. viewBox 160 -5 308 330 */
function Iso({ color = "#181818" }: { color?: string }) {
  return (
    <g fill={color}>
      <polygon points="226.02 40.15 226.02 81.36 263.64 62.42 263.64 187.61 305.04 170.77 305.04 0 226.02 40.15" />
      <polygon points="321.06 0.04 460.25 79.1 460.25 154.37 417.54 130.5 417.72 99.36 364.8 69.3 364.8 118.65 460.25 174.52 460.25 253.09 315.66 315.9 243.84 276.12 288.84 255.42 316.56 270.72 417.6 228.51 417.6 195.35 321.06 139.68 321.06 0.04" />
      <polygon points="167.32 143.03 211.14 120.77 211.01 206.01 213.78 209.52 167.32 230.96 167.32 143.03" />
      <polygon points="168.6 247.14 343.02 171 385.68 195.66 212.7 271.8 168.6 247.14" />
    </g>
  );
}

const ISO_VB = "160 -5 308 330";

export default function JemsiExpediente({ id }: { id?: string }) {
  return (
    <Expediente id={id} className={`jm-exp ${kalam.variable} ${montserrat.variable} ${playfair.variable}`}>
      {/* ═════════ CARÁTULA ═════════ */}
      <header className="caratula">
        <div className="sello">
          <span className="marca-chip">
            <svg viewBox={ISO_VB} aria-label="Isotipo JEM-SI">
              <Iso />
            </svg>
          </span>
          <span className="eyebrow">Expediente de proyecto · INNHOVEX · 2026</span>
        </div>

        <div>
          <h1 className="titulo-caratula">JEM-SI.</h1>
          <div className="tricolor" style={{ marginTop: 18 }} aria-hidden>
            <span />
            <span />
            <span />
          </div>
        </div>

        <p className="prosa" style={{ fontSize: "1.06rem" }}>
          Grupo industrial de Plottier, Neuquén, con tres divisiones: metalúrgica, redes contra
          incendio y pack rack. El trabajo cubrió el sistema de marca de las tres, un sitio con una
          entrada propia para cada división y las piezas de venta que el equipo comercial manda a
          sus clientes.
        </p>
      </header>

      {/* ═════════ J.00 ENTREGABLES ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">J.00</span>
          <h2>Entregables</h2>
        </div>
        <p className="prosa bajada">
          Una marca paraguas y tres divisiones con identidad propia. Cada división recibió lo mismo
          —página, folleto y versión para celular—, así que el sistema se pensó una vez y se aplicó
          tres veces.
        </p>

        <div className="pizarra solo-escritorio">
          <svg viewBox="0 0 700 260" role="img" aria-label="La marca JEM-SI se despliega en tres divisiones, cada una con página, folleto y versión para celular">
            <defs>
              <marker id="jm-pf" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                <path d="M0.5,0.8 L7.5,4.5 L0.5,8.2" fill="none" stroke="var(--tinta-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>

            <rect className="d-caja-acero" x="20" y="98" width="150" height="64" />
            <text className="d-tit-inv" x="36" y="126">JEM-SI</text>
            <text className="d-sub-inv" x="36" y="144">marca paraguas</text>

            <path className="d-flecha" d="M174,118 C210,110 214,52 250,48" markerEnd="url(#jm-pf)" />
            <path className="d-flecha" d="M174,130 L250,130" markerEnd="url(#jm-pf)" />
            <path className="d-flecha" d="M174,142 C210,150 214,208 250,212" markerEnd="url(#jm-pf)" />

            {[
              { y: 22, nombre: "Metalúrgica", color: "#FF4500" },
              { y: 104, nombre: "Red contra incendio", color: "#CC1111" },
              { y: 186, nombre: "Pack Rack", color: "#F3C300" },
            ].map((d) => (
              <g key={d.nombre}>
                <rect className="d-caja" x="254" y={d.y} width="170" height="52" />
                <rect x="254" y={d.y} width="6" height="52" fill={d.color} />
                <text className="d-tit" x="272" y={d.y + 31}>{d.nombre}</text>
                <path className="d-flecha" d={`M428,${d.y + 26} L478,${d.y + 26}`} markerEnd="url(#jm-pf)" />
                <text className="d-sub" x="486" y={d.y + 22}>página propia · folleto A4</text>
                <text className="d-sub" x="486" y={d.y + 38}>versión para celular</text>
              </g>
            ))}

            <text className="d-mano" x="20" y="200">tres colores,</text>
            <text className="d-mano" x="20" y="218">una sola marca</text>
          </svg>
        </div>

        <div className="cols c3" style={{ marginTop: 22 }}>
          <div className="bloque div-acero">
            <h3>Sistema de marca</h3>
            <p>
              Manual con arquitectura de marca, isotipo y sus versiones, un color por división y
              tipografía corporativa, más las piezas de uso diario: firma de correo y presupuesto.
            </p>
          </div>
          <div className="bloque div-rojo">
            <h3>Sitio</h3>
            <p>
              Portada que recorre las tres divisiones en una sola toma y una página por división con
              servicios, obras, galería y contacto.
            </p>
          </div>
          <div className="bloque div-ambar">
            <h3>Piezas de venta</h3>
            <p>
              Folleto A4 por división y la misma pieza en formato de celular para mandar por
              WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════ J.01 ISOTIPO ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">J.01</span>
          <h2>Isotipo</h2>
        </div>
        <p className="prosa bajada">
          Una marca geométrica de cuatro planos, sin una sola curva. Se usa igual en las tres
          divisiones: lo único que cambia es el color.
        </p>

        <div className="tablero-logo">
          <div className="construccion">
            <svg viewBox="70 -70 470 470" role="img" aria-label="Isotipo con anotaciones">
              <defs>
                <filter id="jm-rough" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="4" result="n" />
                  <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
                </filter>
                <marker id="jm-arrow" markerWidth="13" markerHeight="13" refX="8" refY="6" orient="auto">
                  <path d="M1.5,1.5 L9.5,6 L1.5,10.5" fill="none" stroke="var(--lapiz)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              {/* retícula isométrica a mano */}
              <g filter="url(#jm-rough)" stroke="var(--tinta-3)" strokeWidth="1" strokeDasharray="6 6" fill="none" opacity="0.7">
                <path d="M150,20 L480,210" />
                <path d="M150,300 L480,110" />
              </g>

              <Iso />

              {/* flecha → ángulos */}
              <g filter="url(#jm-rough)">
                <path d="M500,-18 C505,20 490,50 466,76" fill="none" stroke="var(--lapiz)" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#jm-arrow)" />
              </g>
              <text className="d-mano-logo" x="532" y="-30" textAnchor="end">sólo rectas y ángulos</text>

              {/* flecha → plano inferior */}
              <g filter="url(#jm-rough)">
                <path d="M150,360 C170,330 200,300 232,262" fill="none" stroke="var(--lapiz)" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#jm-arrow)" />
              </g>
              <text className="d-mano-logo" x="84" y="386">planos en perspectiva: la marca tiene volumen</text>
            </svg>
          </div>

          <div className="capas">
            <div className="capa">
              <span className="n">01</span>
              <div>
                <h4>Geometría de estructura</h4>
                <span>Los mismos ángulos de una perfilería o de un rack de cañerías: se lee como algo construido, no dibujado.</span>
              </div>
            </div>
            <div className="capa">
              <span className="n">02</span>
              <div>
                <h4>Una sola tinta</h4>
                <span>Los cuatro planos van siempre del mismo color. Eso permite teñirla por división sin redibujarla.</span>
              </div>
            </div>
            <div className="capa">
              <span className="n">03</span>
              <div>
                <h4>Aguanta el tamaño chico</h4>
                <span>Sin detalles finos ni degradados: se sostiene como ícono, bordada en una camisa o grabada en una placa.</span>
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: 34, marginBottom: 14 }}>Una marca, cuatro colores</h3>
        <div className="variantes">
          {[
            { fondo: "#ffffff", tinta: "#181818", t: "Principal", d: "Acero sobre blanco" },
            { fondo: "#181818", tinta: "#ffffff", t: "Negativo", d: "Blanco sobre acero" },
            { fondo: "#ffffff", tinta: "#FF4500", t: "Metalúrgica", d: "Naranja — metal en brasa" },
            { fondo: "#ffffff", tinta: "#CC1111", t: "Contra incendio", d: "Rojo — fuego" },
            { fondo: "#181818", tinta: "#F3C300", t: "Pack Rack", d: "Ámbar — energía" },
          ].map((v) => (
            <div className="variante" key={v.t}>
              <div className="lienzo" style={{ background: v.fondo }}>
                <svg viewBox={ISO_VB}>
                  <Iso color={v.tinta} />
                </svg>
              </div>
              <div className="pie">
                <b>{v.t}</b>
                {v.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════ J.02 COLOR Y TIPOGRAFÍA ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">J.02</span>
          <h2>Color y tipografía</h2>
        </div>
        <p className="prosa bajada">
          Un neutro que unifica y un color por división. El acero y el humo ocupan casi toda la
          superficie; el color de la división aparece en cuentagotas, para señalar dónde se está.
        </p>

        <div className="paleta">
          {[
            ["Acero", "#181818", "Textos, fondos oscuros, isotipo. Todas las divisiones"],
            ["Humo", "#F5F5F5", "Fondo de trabajo. Todas las divisiones"],
            ["Naranja", "#FF4500", "Metalúrgica"],
            ["Rojo", "#CC1111", "Red contra incendio"],
            ["Ámbar", "#F3C300", "Pack Rack"],
          ].map(([nombre, hex, uso]) => (
            <div className="tono" key={hex}>
              <div className="swatch" style={{ background: hex, borderBottom: hex === "#F5F5F5" ? "1px solid var(--borde-suave)" : undefined }} />
              <div className="info">
                <b>{nombre}</b>
                <code>{hex}</code>
                <span>{uso}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cols c2" style={{ marginTop: 26 }}>
          <div>
            <h3 style={{ marginBottom: 6 }}>El mismo color, ajustado para leerse</h3>
            <p className="chico" style={{ color: "var(--tinta-2)" }}>
              En impreso y en superficies grandes se usa el color de la marca tal cual. Cuando tiene
              que ser texto sobre blanco en pantalla, se usa una versión más profunda del mismo tono
              para que se lea sin esfuerzo.
            </p>
            <div className="ajuste">
              <div className="ajuste-fila">
                <div className="pares">
                  <span className="muestra-txt" style={{ color: "#F3C300" }}>Pack Rack</span>
                  <span className="flecha">→</span>
                  <span className="muestra-txt" style={{ color: "#8A6400" }}>Pack Rack</span>
                </div>
                <p>El ámbar como texto casi desaparece sobre blanco. En pantalla pasa a <code className="mono">#8A6400</code>.</p>
              </div>
              <div className="ajuste-fila">
                <div className="pares">
                  <span className="muestra-txt" style={{ color: "#FF4500" }}>Metalúrgica</span>
                  <span className="flecha">→</span>
                  <span className="muestra-txt" style={{ color: "#A34A00" }}>Metalúrgica</span>
                </div>
                <p>El naranja se vuelve un naranja mate, <code className="mono">#A34A00</code>: sigue siendo la división, sin encandilar.</p>
              </div>
            </div>
          </div>
          <div className="bloque">
            <h3>Reglas de uso</h3>
            <ul className="reglas" style={{ marginTop: 10 }}>
              <li><span className="mk">✓</span><span><b>Esquinas rectas.</b> Radio cero en botones, tarjetas y fotos, igual que el isotipo.</span></li>
              <li><span className="mk">✓</span><span><b>La foto manda.</b> Las obras ponen el color; la interfaz retrocede y hace de marco.</span></li>
              <li><span className="mk">✓</span><span><b>Un color por pieza.</b> Cada folleto y cada página de división usa sólo el suyo.</span></li>
              <li><span className="no">✗</span><span><b>Nada de brillos.</b> Sin resplandores, neones ni degradados saturados.</span></li>
            </ul>
          </div>
        </div>

        <h3 style={{ marginTop: 30, marginBottom: 14 }}>Tipografía</h3>
        <div className="tipo">
          <div className="tipo-fila">
            <span className="rol">Marca e impresos</span>
            <div>
              <div className="t-mont">Estructura que sostiene</div>
              <div className="detalle">Montserrat Black — títulos del manual, folletos y catálogos</div>
            </div>
          </div>
          <div className="tipo-fila">
            <span className="rol">Titulares del sitio</span>
            <div>
              <div className="t-play">Estructuras que perduran</div>
              <div className="detalle">Playfair Display — el nombre de cada división en la portada</div>
            </div>
          </div>
          <div className="tipo-fila">
            <span className="rol">Texto</span>
            <div>
              <div className="t-sans">Fabricación y montaje de estructuras metálicas para proyectos industriales en Patagonia.</div>
              <div className="detalle">Sans de lectura para cuerpo, datos y formularios</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ J.03 LA PORTADA ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">J.03</span>
          <h2>La portada</h2>
        </div>
        <p className="prosa bajada">
          Una sola toma de cámara que pasa por las tres divisiones. Con cada movimiento de la rueda
          o del dedo la escena avanza: del caño soldado a la válvula de incendio y de ahí al rack de
          cañerías. Cada parada es la puerta a una división.
        </p>

        <div className="secuencia" role="img" aria-label="Cinco cuadros de la secuencia de portada">
          {[
            ["0001", "01 · Metalúrgica", true],
            ["0096", "", false],
            ["0193", "02 · Contra incendio", true],
            ["0288", "", false],
            ["0384", "03 · Pack Rack", true],
          ].map(([n, rot, hito]) => (
            <figure key={n as string}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/j-frame-${n}.jpg`} alt="" loading="lazy" />
              <span className={`cuadro${hito ? " hito" : ""}`}>{rot || `cuadro ${Number(n)}`}</span>
            </figure>
          ))}
        </div>
        <div className="regla-cuadros" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="regla-pie">
          <span>cuadro 1</span>
          <span>384 cuadros · una sola toma</span>
          <span>cuadro 384</span>
        </div>

        <div className="lado" style={{ marginTop: 30 }}>
          <Captura
            src={`${A}/j-hub-1.jpg`}
            alt="Portada en la parada de Metalúrgica"
            n="P.01"
            pins={[{ n: "1", style: { top: "45%", left: "7%" } }, { n: "2", style: { top: "45%", right: "3%" } }, { n: "3", style: { bottom: "8%", left: "9%" } }]}
            caption="Primera parada — Metalúrgica"
          />
          <div className="notas">
            <div className="nota-pin">
              <span className="b">1</span>
              <p><strong>El isotipo cambia de color en cada parada.</strong> Naranja, rojo, ámbar: el visitante aprende el sistema de marca sin leer una línea.</p>
            </div>
            <div className="nota-pin">
              <span className="b">2</span>
              <p><strong>Siempre se sabe dónde se está.</strong> Un contador y una barra lateral marcan la parada actual de las tres.</p>
            </div>
            <div className="nota-pin">
              <span className="b">3</span>
              <p><strong>Una acción por parada.</strong> Entrar a la división. Nada más compite con ese botón.</p>
            </div>
            <div className="nota-pin">
              <span className="b">·</span>
              <p><strong>Pensada para la conexión de obra.</strong> Si la señal es floja, la secuencia se carga en una versión más liviana y la portada funciona igual.</p>
            </div>
          </div>
        </div>

        <div className="cols c2" style={{ marginTop: 22 }}>
          <Captura
            src={`${A}/j-hub-2.jpg`}
            alt="Portada en la parada de Redes contra incendio"
            n="P.02"
            className="div-rojo"
            caption="Segunda parada. La cámara llega a la válvula y el acento pasa a rojo."
          />
          <Captura
            src={`${A}/j-hub-3.jpg`}
            alt="Portada en la parada de Pack Rack"
            n="P.03"
            className="div-ambar"
            caption="Tercera parada. El rack de cañerías, en ámbar, cierra el recorrido."
          />
        </div>
      </section>

      {/* ═════════ J.04 TRES PÁGINAS ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">J.04</span>
          <h2>Una página por división</h2>
        </div>
        <p className="prosa bajada">
          Las tres comparten estructura —servicios, obra ejecutada, galería, la empresa y
          contacto— para que quien conoce una encuentre todo en las otras. Lo que cambia es el
          carácter: cada división tiene su propio tono visual dentro del mismo sistema.
        </p>

        <div className="cols c3">
          <Captura
            src={`${A}/j-met-hero.jpg`}
            alt="Página de Metalúrgica"
            n="M.01"
            className="div-naranja"
            caption="Metalúrgica. Foto de obra a pantalla completa y mucho aire: la estructura habla sola."
          />
          <Captura
            src={`${A}/j-rci-hero.jpg`}
            alt="Página de Redes contra incendio"
            n="R.01"
            className="div-rojo"
            caption="Contra incendio. Títulos más pesados y el rojo como línea de corte: es la división de las normas."
          />
          <Captura
            src={`${A}/j-pr-hero.jpg`}
            alt="Página de Pack Rack"
            n="K.01"
            className="div-ambar"
            caption="Pack Rack. Portada partida, texto sobre acero y la foto de campo al costado."
          />
        </div>

        <div className="cols c3" style={{ marginTop: 22 }}>
          <Captura
            src={`${A}/j-met-servicios.jpg`}
            alt="Servicios de Metalúrgica"
            n="M.02"
            caption="Tres servicios, cada uno con su foto y el listado concreto de lo que se fabrica."
          />
          <Captura
            src={`${A}/j-rci-galeria.jpg`}
            alt="Galería de instalaciones contra incendio"
            n="R.02"
            caption="Galería en blanco y negro sobre fondo acero: las instalaciones se ven como documentación técnica."
          />
          <Captura
            src={`${A}/j-pr-servicios.jpg`}
            alt="Servicios de Pack Rack"
            n="K.02"
            caption="Fondo cálido y filetes ámbar. Los servicios se ordenan como una hoja de especificación."
          />
        </div>
      </section>

      {/* ═════════ J.05 PIEZAS DE VENTA ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">J.05</span>
          <h2>Piezas de venta</h2>
        </div>
        <p className="prosa bajada">
          El equipo comercial no vende por el sitio: vende por WhatsApp y en reuniones. Por eso cada
          división tiene su folleto en formato de celular, vertical y a pantalla completa, listo para
          reenviar. Arranca con la portada, sigue con los servicios y cierra con el contacto directo.
        </p>

        <div>
          {[
            { k: "met", rot: "Metalúrgica", color: "#FF4500" },
            { k: "rci", rot: "Contra incendio", color: "#CC1111" },
            { k: "pr", rot: "Pack Rack", color: "#F3C300" },
          ].map((d) => (
            <div className="fila-piezas" key={d.k}>
              <div className="rot" style={{ borderLeftColor: d.color }}>
                {d.rot}
                <small>6 pantallas · 9:16</small>
              </div>
              <div className="celulares">
                {[1, 2, 6].map((pg) => (
                  <div className="celular" key={pg}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${A}/j-cel-${d.k}-${pg}.jpg`} alt={`${d.rot} — pantalla ${pg}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 36, marginBottom: 12 }}>Decisiones que definieron el proyecto</h3>
        <div className="decisiones">
          <div className="decision">
            <span className="n">01</span>
            <div>
              <h4>Un solo dominio para las tres divisiones</h4>
              <p>
                En vez de tres sitios sueltos, una dirección con una entrada por división. El cliente
                que llega por incendio descubre que la misma empresa fabrica estructuras y racks.
              </p>
              <span className="porque">el grupo vende más como grupo que como tres empresas</span>
            </div>
          </div>
          <div className="decision">
            <span className="n">02</span>
            <div>
              <h4>Lanzamiento con vista previa privada</h4>
              <p>
                Mientras se completa el material de obra, el público ve una pantalla de
                próximamente con WhatsApp y correo. El cliente recorre el sitio real con un enlace
                propio y lo aprueba antes de abrirlo.
              </p>
            </div>
          </div>
          <div className="decision">
            <span className="n">03</span>
            <div>
              <h4>El color como señal, no como decoración</h4>
              <p>
                El color de cada división marca pertenencia —una línea, un número, el isotipo— y
                nunca rellena una sección entera. Así las fotos de obra siguen siendo lo que más
                se ve.
              </p>
            </div>
          </div>
          <div className="decision">
            <span className="n">04</span>
            <div>
              <h4>Formato celular antes que PDF de escritorio</h4>
              <p>
                El folleto horizontal existe para imprimir, pero la pieza que más circula es la
                vertical: se abre en el teléfono del comprador sin hacer zoom.
              </p>
              <span className="porque">la venta industrial en la zona pasa por WhatsApp</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 26, maxWidth: 620 }}>
        <Captura
          src={`${A}/j-proximamente.jpg`}
          alt="Pantalla de próximamente con mosaico de obras"
          n="J.P"
          caption="La pantalla pública mientras tanto: mosaico de obras reales, marca y dos formas de contacto."
        />
      </div>
      </section>
    </Expediente>
  );
}
