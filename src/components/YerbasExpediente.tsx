"use client";

import { useEffect, useRef } from "react";
import "./YerbasExpediente.css";

const A = "/projects/yerbas-de-mi-tierra";

export default function YerbasExpediente({ id }: { id?: string }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".caratula, .lamina");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={rootRef} className="y-exp relative z-[110]">
      <div className="hoja">
        {/* ═════════ CARÁTULA ═════════ */}
        <header className="caratula">
          <div className="sello-cab">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/isologo.png`} alt="Isologo de Yerbas de mi Tierra" />
            <span className="eyebrow">Expediente de proyecto · INNHOVEX · 2026</span>
          </div>

          <div>
            <h1 className="titular">Yerbas de mi Tierra</h1>
            <p className="pie-titular">— el titular está compuesto con la tipografía que se construyó para esta marca —</p>
          </div>

          <p className="prosa" style={{ fontSize: "1.05rem" }}>
            Una yerbatería de Río Grande, Tierra del Fuego, que trae yerba de pequeños productores
            misioneros al punto más austral del país. El encargo no fue una página: fue{" "}
            <b>armar la operación entera</b> — identidad, sitio, tipografía propia, fidelización y la
            infraestructura donde corre todo.
          </p>

          <div className="postit" style={{ maxWidth: 540 }}>
            <p>
              “Sabores auténticos de Misiones en el fin del mundo.” La marca en una frase — y el
              criterio con el que se decidió todo lo demás.
            </p>
            <span className="quien">Documento fundacional · decisión 01</span>
          </div>
        </header>

        {/* ═════════ Y.00 ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.00</span>
            <h2>El encargo</h2>
          </div>
          <p className="prosa bajada">
            No fue solo una página: marca, sitio y sistema de gestión, todo con la misma identidad.
            Acá se muestran sobre todo la marca y el sitio.
          </p>

          <div className="pizarra">
            <svg viewBox="0 0 700 240" role="img" aria-label="La landing deriva a tienda, WhatsApp, Instagram y mapa">
              <defs>
                <marker id="y-fa" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0.5,0.8 L7.5,4.5 L0.5,8.2" fill="none" stroke="var(--tinta-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              <rect className="d-caja" x="14" y="94" width="128" height="52" />
              <text className="d-tit" x="30" y="118">Visitante</text>
              <text className="d-sub" x="30" y="134">llega por Instagram</text>

              <path className="d-flecha" d="M146,120 L186,120" markerEnd="url(#y-fa)" />

              <rect className="d-caja-alt" x="190" y="72" width="176" height="96" />
              <text className="d-mono" x="206" y="94">LA LANDING</text>
              <text className="d-tit" x="206" y="115">Vidriera de marca</text>
              <text className="d-sub" x="206" y="132">Historia, tipos de yerba,</text>
              <text className="d-sub" x="206" y="147">guía del sommelier</text>

              <path className="d-flecha" d="M370,96 C412,94 418,44 458,42" markerEnd="url(#y-fa)" />
              <path className="d-flecha" d="M370,112 C412,112 418,98 458,96" markerEnd="url(#y-fa)" />
              <path className="d-flecha" d="M370,130 C412,132 418,152 458,150" markerEnd="url(#y-fa)" />
              <path className="d-flecha" d="M370,146 C412,150 418,204 458,204" markerEnd="url(#y-fa)" />

              <rect className="d-caja" x="462" y="20" width="224" height="44" />
              <text className="d-tit" x="478" y="42">Tienda Nube</text>
              <text className="d-sub" x="478" y="56">ahí ocurre la compra</text>

              <rect className="d-caja" x="462" y="74" width="224" height="44" />
              <text className="d-tit" x="478" y="96">WhatsApp</text>
              <text className="d-sub" x="478" y="110">consulta con mensaje ya escrito</text>

              <rect className="d-caja" x="462" y="128" width="224" height="44" />
              <text className="d-tit" x="478" y="150">Instagram</text>
              <text className="d-sub" x="478" y="164">comunidad</text>

              <rect className="d-caja" x="462" y="182" width="224" height="44" />
              <text className="d-tit" x="478" y="204">Cómo llegar</text>
              <text className="d-sub" x="478" y="218">al local de Perito Moreno</text>

              <text className="d-mano" x="188" y="196">la landing no cobra: convierte</text>
            </svg>
          </div>
        </section>

        {/* ═════════ Y.01 EMBLEMA ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.01</span>
            <h2>Lectura del emblema</h2>
          </div>
          <p className="prosa bajada">
            El cliente llegó con un logo que quería conservar. La primera tarea no fue rediseñarlo sino{" "}
            <b>leerlo</b>: entender qué comunica, dónde funciona y dónde se rompe. De esa lectura salió
            todo el sistema — el color, el estilo de los componentes y, más tarde, la tipografía.
          </p>

          <div className="tablero">
            <div className="lienzo-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/isologo.png`} alt="Emblema circular: un tarefero carga un raído de hojas con el sol naciente detrás" />
            </div>
            <div className="capas">
              <div className="capa">
                <span className="n">01</span>
                <div>
                  <h4>El tarefero</h4>
                  <span>El cosechador carga el raído de hojas sobre la espalda. Es la escena central y el activo más honesto de la marca: dice “pequeño productor” sin escribirlo.</span>
                </div>
              </div>
              <div className="capa">
                <span className="n">02</span>
                <div>
                  <h4>El sol naciente</h4>
                  <span>Rayos radiales en coral detrás del yerbal. Se reutiliza como recurso gráfico propio: divisor de secciones y fondo del hero.</span>
                </div>
              </div>
              <div className="capa">
                <span className="n">03</span>
                <div>
                  <h4>Estética de grabado</h4>
                  <span>Trazo tipo xilografía, sin degradados. Fija la regla para toda la iconografía posterior: líneas grabadas, nunca íconos redondeados.</span>
                </div>
              </div>
              <div className="capa">
                <span className="n">04</span>
                <div>
                  <h4>Las cintas</h4>
                  <span>“YERBAS” en lettering dibujado a mano, flanqueado por estrellas, y una sub-cinta con “DE MI TIERRA”. De acá salió la tipografía de la lámina siguiente.</span>
                </div>
              </div>
            </div>
          </div>

          <h3 style={{ margin: "32px 0 14px" }}>Qué aporta el emblema</h3>
          <div className="dx">
            <div className="dx-col bien">
              <header>Fortalezas</header>
              <ul>
                <li><b>Narrativa de origen.</b> El tarefero cuenta el trabajo artesanal antes de que el visitante lea una palabra.</li>
                <li><b>Paleta con temperatura.</b> Marrón, crema, coral y oliva ya traen el tono cálido de la marca.</li>
                <li><b>Coherencia de trazo.</b> El grabado da una regla clara para toda la iconografía.</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 22 }}>
            <div className="filete">
              <div className="dentro">
                <h3 style={{ marginBottom: 8 }}>Ilustración de marca</h3>
                <p className="chico" style={{ color: "var(--tinta-2)" }}>
                  Como todavía no hay sesión fotográfica, el sitio se ilustra con un set propio de
                  figuras recortadas: el dueño cebando, el sello de calidad y los cuatro pasos del
                  ritual. Sostienen el tono artesanal y se reemplazan por fotos cuando estén.
                </p>
                <div className="stickers" style={{ marginTop: 14 }}>
                  {(
                    [
                      ["dario-ceba.webp", "Darío cebando mate"],
                      ["dario-mate.webp", "Darío con el mate"],
                      ["dario-mate2.webp", "Darío con el mate"],
                      ["dario-relax.webp", "Darío tomando mate"],
                      ["sello.png", "Sello: aprobado por maestros"],
                      ["ritual-01.webp", "Ritual del mate — paso 1"],
                      ["ritual-02.webp", "Ritual del mate — paso 2"],
                      ["ritual-03.webp", "Ritual del mate — paso 3"],
                      ["ritual-04.webp", "Ritual del mate — paso 4"],
                    ] as const
                  ).map(([f, alt]) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={f} src={`${A}/stickers/${f}`} alt={alt} loading="lazy" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Y.02 TIPOGRAFÍA ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.02</span>
            <h2>Una tipografía hecha desde el logo</h2>
          </div>
          <p className="prosa bajada">
            El nombre del logo no está escrito con una fuente: es <b>lettering dibujado a mano</b>. Eso
            significaba que el titular del sitio nunca iba a tener las mismas letras que la marca. En
            vez de imitarlo con efectos de CSS, se construyó una tipografía real a partir de ese dibujo:{" "}
            <b>Yerbas Display</b>. Es la que compone el título de la portada de este documento.
          </p>

          <div className="pipeline">
            <div className="paso">
              <span className="num">Paso 01</span>
              <h4>Dibujar el abecedario</h4>
              <p>Se extiende el estilo de las cuatro letras del logo al alfabeto completo, en láminas de cinco letras por fila, mayúsculas y minúsculas.</p>
            </div>
            <div className="paso">
              <span className="num">Paso 02</span>
              <h4>Aislar cada letra</h4>
              <p>Un script recorta cada glifo por proyección de tinta y descarta el fondo crema y la sombra terracota con un umbral de gris.</p>
              <p style={{ marginTop: 6 }}>
                <code>umbral &lt; 95 = letra</code>
              </p>
            </div>
            <div className="paso">
              <span className="num">Paso 03</span>
              <h4>Vectorizar</h4>
              <p>Cada recorte pasa de mapa de bits a contorno vectorial, y de ahí a un archivo por glifo.</p>
            </div>
            <div className="paso">
              <span className="num">Paso 04</span>
              <h4>Ensamblar con métricas</h4>
              <p>Se arma la fuente asignando a cada letra su caja según categoría: mayúscula, equis, ascendente o descendente. Más el espaciado lateral y la puntuación.</p>
            </div>
            <div className="paso">
              <span className="num">Paso 05</span>
              <h4>Comprimir y servir</h4>
              <p>Se exporta y se comprime al formato de fuente web. El archivo final pesa lo mismo que un ícono chico.</p>
            </div>
          </div>

          <h3 style={{ margin: "30px 0 14px" }}>La tipografía terminada</h3>
          <div className="especimen">
            <div>
              <div className="esp-rot">Caja alta</div>
              <div className="esp-linea esp-abc">
                ABCDEFGHIJKLM
                <br />
                NOPQRSTUVWXYZ
              </div>
            </div>
            <div>
              <div className="esp-rot">Caja baja</div>
              <div className="esp-linea esp-abc">
                abcdefghijklm
                <br />
                nopqrstuvwxyz
              </div>
            </div>
            <div>
              <div className="esp-rot">En uso — titular del sitio</div>
              <div className="esp-linea esp-frase">
                Yerba de mi tierra,
                <br />
                en tu mesa
              </div>
            </div>
          </div>

          <div className="cols c2" style={{ marginTop: 22 }}>
            <div className="filete">
              <div className="dentro">
                <h3 style={{ marginBottom: 8 }}>Los tres rasgos que definen el estilo</h3>
                <ul className="reglas">
                  <li><span className="mk">1</span><span><b>Relleno crema.</b> El cuerpo de la letra toma el color del papel, no del texto.</span></li>
                  <li><span className="mk">2</span><span><b>Contorno marrón.</b> Un trazo grueso rodea cada glifo — es lo que le da el peso de cartel.</span></li>
                  <li><span className="mk">3</span><span><b>Sombra dura terracota.</b> Desplazada en diagonal, sin desenfoque. Es el efecto de relieve de los carteles viejos.</span></li>
                </ul>
                <p className="chico" style={{ marginTop: 12, color: "var(--tinta-2)" }}>
                  Los tres se aplican por CSS sobre la fuente, con desplazamientos medidos en unidades
                  relativas para que el relieve escale junto con el tamaño del texto.
                </p>
              </div>
            </div>
            <div>
              <div className="postit">
                <p>
                  Todavía no tiene números ni letras acentuadas. Donde hace falta un “24” o una “ñ”, el
                  texto va en la tipografía de títulos: es un límite conocido, no un descuido.
                </p>
                <span className="quien">Nota de alcance</span>
              </div>
              <div className="bloque" style={{ marginTop: 18 }}>
                <h3>Por qué valía la pena</h3>
                <p>
                  Un lettering dibujado sólo sirve para las palabras que ya fueron dibujadas.
                  Convertirlo en tipografía permite escribir cualquier titular, cambiar el copy sin
                  volver al diseñador y mantener la voz de la marca en cartelería, etiquetas y campañas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Y.03 COLOR ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.03</span>
            <h2>Sistema de color</h2>
          </div>
          <p className="prosa bajada">
            Derivado del emblema, no elegido aparte. Base marrón sobre crema, terracota como firma y
            verde oliva para las secciones de origen. La proporción está fijada: si el terracota crece,
            la marca deja de sentirse artesanal y empieza a parecer una promoción.
          </p>

          <div className="paleta">
            {[
              ["Marrón oscuro", "#2E2218", "Textos, bordes, íconos, fondos oscuros"],
              ["Crema", "#EFE3CD", "Fondo general y tarjetas"],
              ["Terracota", "#D67B54", "Botones y enlaces destacados. La firma"],
              ["Verde oliva", "#515A32", "Origen, etiquetas, estados correctos"],
              ["Amarillo tostado", "#F1B977", "El sol: hover y detalles de luz"],
              ["Terracota quemado", "#A34A2C", "Errores — separado del color de acción"],
            ].map(([nombre, hex, uso]) => (
              <div className="tono" key={hex}>
                <div className="sw" style={{ background: hex }} />
                <div className="info">
                  <b>{nombre}</b>
                  <code>{hex}</code>
                  <span>{uso}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cols c2" style={{ marginTop: 24 }}>
            <div>
              <h3 style={{ marginBottom: 12 }}>Reglas de uso</h3>
              <ul className="reglas">
                <li><span className="mk">✓</span><span><b>Dominancia 65/20.</b> Crema y marrón mandan; el terracota ocupa cerca de un décimo de la superficie.</span></li>
                <li><span className="mk">✓</span><span><b>Texto marrón sobre crema</b> como combinación por defecto: relación de contraste holgada para lectura larga.</span></li>
                <li><span className="mk">✓</span><span><b>El oliva se usa con decisión</b> en las secciones de origen, para cortar la monotonía cálida.</span></li>
                <li><span className="no">✗</span><span><b>El amarillo no rellena.</b> Es luz y detalle; si se usa como fondo grande, aplana la paleta.</span></li>
                <li><span className="no">✗</span><span><b>El color de error no es el de acción.</b> Por eso existe un terracota quemado aparte.</span></li>
              </ul>
            </div>
            <div className="filete">
              <div className="dentro">
                <h3 style={{ marginBottom: 8 }}>La regla que se rompe sola</h3>
                <p className="chico" style={{ color: "var(--tinta-2)" }}>
                  El reflejo automático es poner texto blanco sobre un botón de color. Sobre este
                  terracota, el blanco no llega al contraste mínimo de accesibilidad; el marrón oscuro
                  sí, y con margen.
                </p>
                <div className="demo-btn">
                  <span className="btn-ok">Ver la tienda</span>
                  <span className="btn-mal">Ver la tienda</span>
                </div>
                <p className="demo-pie">
                  <b>Izquierda:</b> texto marrón, aprobado. <b>Derecha:</b> texto blanco, reprobado — se ve lavado incluso a simple vista.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Y.04 COMPONENTES ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.04</span>
            <h2>Cómo se construyen las piezas</h2>
          </div>
          <p className="prosa bajada">
            El emblema es de estética de imprenta antigua, así que la interfaz también. Cada decisión de
            componente está tomada en contra del reflejo moderno: nada redondeado, nada difuso.
          </p>

          <div className="cols c3">
            <div className="bloque"><h3>Esquinas rectas</h3><p>Radio cero o casi. La estética redondeada de las aplicaciones actuales contradice el trazo de grabado del emblema.</p></div>
            <div className="bloque"><h3>Sombras duras</h3><p>Desplazadas y sólidas, sin desenfoque, siempre en marrón. Al pasar el cursor el elemento “se hunde”: se mueve hacia la sombra y la sombra se achica.</p></div>
            <div className="bloque"><h3>Filetes de etiqueta</h3><p>Marcos de doble línea alrededor de las piezas destacadas, como las etiquetas viejas de los paquetes de yerba.</p></div>
            <div className="bloque"><h3>Grano de papel</h3><p>Una capa de ruido al cinco por ciento sobre el fondo, generada por código y no por imagen. Da la textura de cartón sin sumar peso.</p></div>
            <div className="bloque"><h3>Íconos grabados</h3><p>Trazo lineal tipo xilografía. Hoja de yerba, mate, bombilla, gota y reloj — el vocabulario visual del oficio.</p></div>
            <div className="bloque"><h3>Cuatro familias, un rol cada una</h3><p>La propia para el titular, una eslabonada para los títulos, una condensada en mayúsculas para la interfaz y una serif de lectura para el cuerpo.</p></div>
          </div>

          <div className="postit" style={{ marginTop: 22, maxWidth: 600 }}>
            <p>
              El estilo del hero no se logra con imágenes: es la fuente propia más tres capas de CSS.
              Cambiar el titular es cambiar una línea de texto, no pedir un archivo nuevo.
            </p>
            <span className="quien">Criterio de implementación</span>
          </div>
        </section>

        {/* ═════════ Y.05 LA LANDING ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.05</span>
            <h2>La landing</h2>
          </div>
          <p className="prosa bajada">
            Una sola página larga, sin formularios y sin carrito: la compra ocurre en la tienda y la
            consulta en WhatsApp. Todo el texto vive en un único archivo de contenido, para que cambiar
            una palabra o un precio no obligue a tocar el código. Estas son las pantallas que definen el
            tono.
          </p>

          <div className="lado">
            <figure>
              <div className="captura">
                <span className="pin" style={{ top: "22%", left: "26%" }}>1</span>
                <span className="pin" style={{ top: "6%", left: "47%" }}>2</span>
                <span className="pin" style={{ bottom: "6%", left: "8%" }}>3</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${A}/y-hero.jpg`} alt="Portada: el titular en la tipografía propia sobre rayos de sol, con la ilustración del dueño" loading="lazy" />
              </div>
              <figcaption>
                <b>Y.P1</b>
                <span>Portada</span>
              </figcaption>
            </figure>
            <div className="notas">
              <div className="nota-pin">
                <span className="b">1</span>
                <p><strong>La tipografía propia en su lugar.</strong> El titular es el único texto que la usa: relleno crema, contorno marrón y sombra terracota, exactamente los rasgos del logo.</p>
              </div>
              <div className="nota-pin">
                <span className="b">2</span>
                <p><strong>Rayos de sol del emblema.</strong> El motivo del logo se reutiliza como fondo, girando muy lento. Es el mismo signo, no una decoración importada.</p>
              </div>
              <div className="nota-pin">
                <span className="b">3</span>
                <p><strong>Dos caminos, no cinco.</strong> Ver la tienda o escribir por WhatsApp. La página entera está construida alrededor de esas dos acciones.</p>
              </div>
            </div>
          </div>

          <div className="cols c2" style={{ marginTop: 28 }}>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${A}/y-historia.jpg`} alt="Sección Detrás del mostrador: el relato del sommelier con una cita sobre marrón" loading="lazy" />
              </div>
              <figcaption>
                <b>Y.P2</b>
                <span>El relato del oficio: quién elige la yerba y por qué mira el color, la hoja y el polvillo. La cita va sobre marrón, para que corte la página.</span>
              </figcaption>
            </figure>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${A}/y-yerbas.jpg`} alt="Sección Encontrá la tuya con los cinco tipos de yerba" loading="lazy" />
              </div>
              <figcaption>
                <b>Y.P3</b>
                <span>Los cinco tipos de yerba, cada uno con de qué está hecha y qué carácter tiene. Bordes rectos y sombra dura: el sistema de componentes aplicado.</span>
              </figcaption>
            </figure>
          </div>

          <div className="cols c2" style={{ marginTop: 20 }}>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${A}/y-elegir.jpg`} alt="Sección Tres cosas que miramos: estacionamiento, color y origen" loading="lazy" />
              </div>
              <figcaption>
                <b>Y.P4</b>
                <span>La guía del sommelier. Enseñar a elegir es el diferencial del negocio, así que ocupa una sección propia en vez de esconderse en un pie.</span>
              </figcaption>
            </figure>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${A}/y-origen.jpg`} alt="Sección Del Litoral al fin del mundo con el mapa de Argentina" loading="lazy" />
              </div>
              <figcaption>
                <b>Y.P5</b>
                <span>La escena firma: un trazo se dibuja de Misiones a Río Grande a medida que se baja. Es el argumento de la marca convertido en imagen.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════ Y.06 MOVIMIENTO ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.06</span>
            <h2>El movimiento tiene guion</h2>
          </div>
          <p className="prosa bajada">
            El filtro para aceptar una animación es uno solo: tiene que sentirse analógico. Tinta que se
            estampa, papel, vapor que sube, un trazo que se dibuja. Nada de vidrio esmerilado ni de tres
            dimensiones gratuitas. Cada momento responde a algo del relato.
          </p>

          <div className="cols c2">
            <div className="coreo">
              <div className="mom">
                <span className="cuando">Al entrar</span>
                <h4>El emblema se estampa</h4>
                <p>Como un sello de tinta sobre papel. Aparece una sola vez por visita y se puede saltear.</p>
              </div>
              <div className="mom">
                <span className="cuando">Portada</span>
                <h4>El titular sube por líneas</h4>
                <p>El texto entra escalonado, con los rayos del sol girando detrás y una capa de vapor a la deriva.</p>
              </div>
              <div className="mom">
                <span className="cuando">Al bajar</span>
                <h4>Las secciones aparecen en orden</h4>
                <p>Siempre la misma curva y el mismo retardo entre elementos. Nada aleatorio: la repetición es lo que se siente prolijo.</p>
              </div>
              <div className="mom">
                <span className="cuando">Origen</span>
                <h4>El trazo del mapa</h4>
                <p>La sección se ancla y el recorrido de Misiones a Río Grande se dibuja al ritmo del scroll. Es el momento que la gente recuerda.</p>
              </div>
              <div className="mom">
                <span className="cuando">Ritual</span>
                <h4>Los pasos, como una receta</h4>
                <p>Temperatura, humedecer, el polvillo y la charla se revelan uno detrás de otro.</p>
              </div>
            </div>

            <div>
              <div className="filete">
                <div className="dentro">
                  <h3 style={{ marginBottom: 10 }}>Reglas que no se negocian</h3>
                  <ul className="reglas">
                    <li><span className="mk">✓</span><span><b>Quien pide menos movimiento, recibe menos.</b> Con la preferencia del sistema activada se apagan el anclaje, el desplazamiento por capas y la pantalla de entrada.</span></li>
                    <li><span className="mk">✓</span><span><b>El contenido no espera a la animación.</b> La portada se lee aunque el guion tarde en cargar.</span></li>
                    <li><span className="mk">✓</span><span><b>En el teléfono se aliviana.</b> La mayoría del tráfico llega desde Instagram en celular: ahí los efectos pesados se apagan.</span></li>
                    <li><span className="mk">✓</span><span><b>Un solo juego de curvas y duraciones</b> para todo el sitio.</span></li>
                  </ul>
                </div>
              </div>
              <div className="postit" style={{ marginTop: 18 }}>
                <p>Si una animación no cuenta algo de la marca, se saca. El movimiento decorativo es lo primero que delata a un sitio hecho de plantilla.</p>
                <span className="quien">Principio rector</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Y.07 VOZ ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">Y.07</span>
            <h2>Cómo habla la marca</h2>
          </div>
          <p className="prosa bajada">
            La identidad verbal se definió con el mismo rigor que el color. La regla de fondo: la
            calidad se muestra contando el oficio, no gritándola. En todo el sitio no hay un solo
            superlativo.
          </p>

          <div className="voz">
            <div className="bloque">
              <h3>El tono</h3>
              <p>Como una ronda de mate en casa: cercano, sin apuro, con autoridad amable. Hay un sommelier detrás, pero enseña en vez de sermonear. Frases cortas, voseo, pocos signos de exclamación.</p>
            </div>
            <div className="bloque">
              <h3>El léxico</h3>
              <p style={{ marginBottom: 4 }}>Palabras que sí entran:</p>
              <div className="lexico">
                {["casa", "ronda", "oficio", "origen", "productor", "estacionada", "compartir", "como se debe"].map((w) => (
                  <span className="palabra p-si" key={w}>{w}</span>
                ))}
              </div>
              <p style={{ margin: "12px 0 4px" }}>Y las que no:</p>
              <div className="lexico">
                {["la mejor", "premium", "exclusivo", "imperdible", "revolucionario"].map((w) => (
                  <span className="palabra p-no" key={w}>{w}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 26 }}>
            <p className="cita">
              El mate es más que una bebida; es una tradición que une a las personas.
              <cite>Frase del cliente, usada como cita central del sitio</cite>
            </p>
          </div>

          <div className="cols c2" style={{ marginTop: 24 }}>
            <div className="filete">
              <div className="dentro">
                <h3 style={{ marginBottom: 8 }}>El copy sale de la entrevista, no del molde</h3>
                <p className="chico" style={{ color: "var(--tinta-2)" }}>
                  Buena parte del texto del sitio son frases textuales del dueño, recogidas en
                  entrevistas y notas de radio: cuántos meses debe descansar una yerba, por qué el
                  polvillo no se tira, qué dice el color sobre el estacionamiento. Eso es lo que hace
                  que la página no se pueda copiar y pegar a otra yerbatería.
                </p>
              </div>
            </div>
            <div className="bloque">
              <h3>Lo que enseña, vende</h3>
              <p>La sección educativa no es relleno: es el argumento comercial. Alguien que aprende a leer el color de la yerba entiende por qué esta cuesta lo que cuesta, y vuelve a preguntar antes de comprar en otro lado.</p>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
