# Yerbas de mi Tierra — expediente

**Cliente:** Yerbas de mi Tierra · Perito Moreno 429, Río Grande, Tierra del Fuego
**Alcance:** identidad + tipografía propia + landing + fidelización + infraestructura
**Estado:** landing lista para publicar; el dominio todavía no está conectado

Una yerbatería que trae yerba de pequeños productores misioneros al punto más
austral del país. El encargo no fue una página: fue armar la operación entera.

## El documento

`expediente-yerbas.html` — abrilo con doble clic. Diez láminas foliadas (Y.00 a
Y.09): líneas de trabajo, lectura del emblema, la tipografía propia, sistema de
color, componentes, la landing, movimiento, voz de marca, decisiones técnicas y
estado.

El titular de la portada del documento está compuesto con la tipografía del
propio proyecto, embebida en el archivo.

## capturas/

Tomadas del sitio corriendo en local, porque todavía no está publicado.

| Archivo | Qué muestra |
|---|---|
| `y-hero.jpg` | Portada, con la tipografía propia y los rayos del emblema |
| `y-historia.jpg` | El relato del sommelier, con la cita sobre marrón |
| `y-yerbas.jpg` | Los cinco tipos de yerba |
| `y-elegir.jpg` | La guía del sommelier: estacionamiento, color y origen |
| `y-origen.jpg` | El mapa Misiones → Río Grande, la escena firma del sitio |

## marca/

| Archivo | Qué es |
|---|---|
| `isologo.png` | El emblema completo: tarefero, sol naciente y cintas |
| `sello-calidad.png` | Sello "aprobado por maestros" |
| `ilustracion-dario.png` | Figura recortada del dueño, usada en la landing |
| `favicon-32.png` | Ícono de pestaña |
| `YerbasDisplay.woff2` | **La tipografía propia**, formato web (10 KB) |
| `YerbasDisplay.ttf` | La misma, para usar en programas de diseño |

### La tipografía

El nombre del logo no está escrito con una fuente: es lettering dibujado a mano.
Para que el titular del sitio tuviera las mismas letras que la marca, se
construyó una tipografía real a partir de ese dibujo.

**Cómo se hizo:** se extendió el estilo de las letras del logo al alfabeto
completo → un script aisló cada glifo por umbral de gris, descartando el fondo
crema y la sombra terracota → se vectorizó cada recorte → se ensambló asignando
a cada letra su caja según categoría (mayúscula, equis, ascendente, descendente)
→ se exportó y comprimió a formato web.

| Dato | Valor |
|---|---|
| Glifos | 67 — A–Z, a–z y puntuación |
| Unidades por eme | 1000 |
| Altura de mayúscula | 700 |
| Altura de equis | 500 |
| Peso servido | 10 KB |

> **Límite conocido:** no tiene números ni letras acentuadas. Donde hace falta
> un "24" o una "ñ", el texto va en la tipografía de títulos.

El pipeline completo, con los scripts, está en `docs/TIPOGRAFIA/build/` del
repositorio `yerbasdemitierra`.

### El estilo del titular

Tres rasgos, aplicados por CSS sobre la fuente: **relleno crema**, **contorno
marrón** y **sombra dura terracota** desplazada en diagonal, sin desenfoque. Los
desplazamientos van en unidades relativas para que el relieve escale con el
tamaño del texto.

### Colores de la marca

| Rol | Hex |
|---|---|
| Marrón oscuro (textos, bordes) | `#2E2218` |
| Crema (fondo general) | `#EFE3CD` |
| Terracota (botones, la firma) | `#D67B54` |
| Verde oliva (origen, etiquetas) | `#515A32` |
| Amarillo tostado (el sol, hover) | `#F1B977` |
| Terracota quemado (errores) | `#A34A2C` |

**Reglas:** crema y marrón dominan (~65/20), el terracota ocupa cerca de un
décimo. Los botones de terracota llevan **texto marrón, nunca blanco** — el
blanco sobre ese color no alcanza el contraste mínimo de accesibilidad.
Esquinas rectas, sombras duras sin desenfoque, y grano de papel al 5%.

## Repositorio relacionado

`facundo64/yerbasdemitierra` — monorepo: la landing en la raíz y la app de
fidelización (Club del Mate) en `fidelidad-app/`.
