# Expedientes de proyecto

Documentos de caso de INNHOVEX: una hoja de trabajo por proyecto, con capturas
anotadas, diagramas y el detalle del proceso de diseño y desarrollo.

Cada expediente es **un solo archivo HTML autocontenido**: las imágenes y las
tipografías van embebidas dentro del propio archivo, así que se abre con doble
clic en cualquier navegador, sin servidor y sin conexión.

## Qué hay acá

| Carpeta | Proyecto | Alcance documentado |
|---|---|---|
| `obra-azul/` | Obra Azul Piscinas | Identidad, sitio público y sistema de gestión |
| `yerbas-de-mi-tierra/` | Yerbas de mi Tierra | Identidad, tipografía propia y landing |

## Cómo está organizada cada carpeta

```
<proyecto>/
  expediente-*.html   El documento. Abrilo con doble clic.
  capturas/           Las capturas sueltas, por si hay que reutilizarlas
  marca/              Logos, íconos y —en Yerbas— la tipografía propia
  LEEME.md            Qué es cada archivo y de dónde salió
```

Las capturas y los logos están **también** sueltos en sus carpetas porque dentro
del HTML viven codificados en base64: sirven para reutilizarlos en el portfolio,
en una propuesta o en redes, sin tener que extraerlos del documento.

## Versiones publicadas

Los mismos documentos están publicados como artefactos privados:

- Obra Azul — https://claude.ai/code/artifact/96edc234-4825-4387-bfd5-42ad70893a19
- Yerbas de mi Tierra — https://claude.ai/code/artifact/773d2e18-a4fb-4772-b610-416719efb187

Editar el HTML de este repo **no** actualiza la versión publicada; son copias
independientes.

## Criterios que siguen estos documentos

- **No se muestra el sitio entero**, solo las pantallas que definen el trabajo.
  Para el resto va un enlace a la página real.
- **No se listan hallazgos de seguridad abiertos.** Se cuenta el proceso de
  auditoría —cuántas rondas, qué cubrió cada una, qué quedó automatizado—, nunca
  las vulnerabilidades pendientes: en una pieza pública eso es un mapa para un
  atacante.
- **Nada inventado.** Cifras, fechas y frases salen del repositorio, de los
  commits o de material del cliente. Lo que no está verificado, no entra.
- Se declara lo que falta. En un caso de portfolio, reconocer los pendientes
  suma credibilidad.
