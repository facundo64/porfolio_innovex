# Obra Azul Piscinas — expediente

**Cliente:** Obra Azul Piscinas · Villa Martelli, Buenos Aires · rubro piscinas
**Alcance:** identidad de marca + sitio público + sistema de gestión de servicios en campo
**Sitio en producción:** https://www.obraazulpiscinas.com

Proyecto tomado de cero: el cliente no tenía identidad visual, ni presencia
digital, ni sistema — la operación se anotaba en papel.

## El documento

`expediente-obra-azul.html` — abrilo con doble clic. Nueve láminas foliadas
(F.00 a F.08): alcance, anatomía del isotipo, sistema de color y tipografía,
el sitio, ingeniería web, el sistema de gestión, arquitectura técnica, control
de calidad y estado.

## capturas/

| Archivo | Qué muestra |
|---|---|
| `web-hero.jpg` | Portada del sitio, video aéreo a pantalla completa |
| `web-titular.jpg` | El titular que se completa con el scroll |
| `web-expertos.jpg` | Sección de oficio, con foto propia de obra |
| `web-servicios.jpg` | Los seis servicios |
| `web-portfolio.jpg` | Galería de obras terminadas |
| `web-footer.jpg` | Pie con datos del negocio y mapa |
| `app-dashboard.jpg` | Panel de control del administrador |
| `app-cotizador.jpg` | Alta de cotización |
| `app-logistica.jpg` | Control de personal, con mapa en tiempo real |
| `app-agenda.jpg` | Programador de servicios |
| `app-portal.jpg` | Portal del cliente |
| `app-tecnico.jpg` | Aplicación móvil del técnico |

Las del sitio se tomaron del sitio en producción. Las del sistema salen de
`docs/capturas/` del repositorio `saas-obra-azul`, que tiene el juego completo
de 85 pantallas en escritorio y móvil, para los cuatro roles.

## marca/

| Archivo | Qué es |
|---|---|
| `isologo.svg` | Isotipo vectorial, con variante clara y oscura |
| `logo-horizontal.svg` | Versión horizontal (isotipo + palabra) |
| `logo-email.png` | El que va en la cabecera de los correos |
| `icono-512.png` | Ícono de aplicación |
| `og-image.png` | Imagen de previsualización para redes |

**Colores de la marca**, tomados del isotipo:

| Rol | Hex |
|---|---|
| Navy estructural (trazo del logo) | `#29235C` |
| Azul Obra (acción, enlaces) | `#319ECA` |
| Cyan superficie (acentos) | `#7FCBD8` |
| Azul profundo (bordes, hover) | `#299CC8` |
| Papel (fondo de la interfaz) | `#F8FAFC` |
| Tinta (texto) | `#0F172A` |

La escalera del isotipo está dibujada **en negativo** —es el vacío entre los
trazos— para que aguante a 32 px sin empastarse. El trazo es lo único que
cambia de color en la variante monocroma; las olas y los destellos conservan
los suyos.

> Regla que se rompe seguido: el logo no puede heredar el color del contenedor.
> Si el trazo queda en `currentColor`, la marca sale azul en un menú y gris en
> otro.

## Repositorios relacionados

- Sitio público: `facundo64/obra_azul_web`
- Sistema de gestión: `facundo64/saas-obra-azul`
