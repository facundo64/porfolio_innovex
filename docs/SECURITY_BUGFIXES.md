# Security & Bug Fixes — Mayo 2026

## Resumen

Auditoría completa del código con fixes en seguridad, bugs y hardening del portfolio INNHOVEX.

---

## Críticos

### Rate limiting en formulario de contacto

**Archivo:** `src/app/api/contact/route.ts`

- Max **3 envíos por IP por hora** usando `Map` en memoria
- Detección de IP via `x-forwarded-for` / `x-real-ip`
- Cleanup automático cada hora para evitar memory leak
- Respuesta `429` con error `rate_limited`
- Validación de longitud máxima: `name ≤ 100`, `email ≤ 255`, `company ≤ 150`, `message ≤ 5000`

### CSP con nonce (eliminación de unsafe-inline)

**Archivos:** `src/middleware.ts` (nuevo), `src/app/layout.tsx`, `next.config.ts`

- Nuevo middleware genera un nonce criptográfico por request
- CSP ahora usa `'nonce-{{NONCE}}'` en vez de `'unsafe-inline'`
- El `layout.tsx` lee el nonce de los headers y lo inyecta en el `<script>` inline
- CSP movido de `next.config.ts` al middleware para poder usar nonce dinámico

---

## Altos

### Non-null assertions inseguras

**Archivos:** `src/components/ServicesGallery.tsx`, `src/components/WorkGallery.tsx`

**ServicesGallery:**
- `useState` con fallback seguro `services[0]?.id ?? ""`
- `active` usa `?? services[0]` en vez de `!`
- Guard `if (!active) return null`

**WorkGallery:**
- `showcase` usa type guard `.filter((p): p is Project => p !== undefined)`
- Log si faltan proyectos en console
- Todos los `project.logo!` cambiados a `project.logo ?? ""` (4 lugares)

---

## Medios

### M1 — Bug: menú nunca se cierra en scroll

**Archivo:** `src/components/BottomDock.tsx:32-35`

**Problema:** `lastY = y` se ejecutaba **antes** del check → `Math.abs(y - lastY)` siempre 0 → el menú nunca cerraba al scrollear.

**Fix:** Moví `lastY = y` **después** de la comparación.

### M2 — Scroll/resize sin throttle

**Archivo:** `src/components/TopHeader.tsx:27-41`

**Problema:** `check()` se disparaba en **cada frame** de scroll y resize → rendimiento malo, lecturas innecesarias del DOM.

**Fix:** Agregué `requestAnimationFrame` throttle — solo ejecuta en el próximo frame pintado, evita llamadas duplicadas con flag `ticking`.

### M3 — Smooth scroll sin respetar prefers-reduced-motion

**Archivo:** `src/components/SmoothScroll.tsx`

**Problema:** Lenis smooth scroll siempre activo, ignorando la preferencia del usuario de movimiento reducido.

**Fix:** Agregué check de `prefers-reduced-motion: reduce` — si está activo, Lenis no se inicializa y el scroll funciona nativamente.

### M4 — Preloader no restaura overflow al desmontar

**Archivo:** `src/components/Preloader.tsx:35-47`

**Problema:** Si el componente se desmonta antes de `dismiss()` (navegación rápida entre páginas), `overflow: hidden` nunca se restaura → la página queda sin scroll permanentemente.

**Fix:** Agregué cleanup en el `useEffect` que restaura `document.documentElement.style.overflow = ""` al desmontar.

### M5 — Mutación durante iteración en LocaleProvider

**Archivo:** `src/lib/i18n/LocaleProvider.tsx:40-42`

**Problema:** `emit()` iteraba el `Set` directamente — si un subscriber se desuscribe durante la emisión, causa mutación durante iteración (edge case pero posible durante route transitions).

**Fix:** Copio el Set con `[...subscribers]` antes de iterar.

---

## Frontend: manejo de rate limited

**Archivo:** `src/components/ContactGallery.tsx`

- Nuevo estado `rate_limited` en el tipo `FormStatus`
- Si la API responde `429`, muestra mensaje "Demasiados intentos. Esperá un momento y probá de nuevo."
- Icono cambiado de `!` a `⚠` para el estado de error (más semántico)

---

## Archivos modificados

| Archivo | Tipo |
|---------|------|
| `src/app/api/contact/route.ts` | Rate limiting + validación de longitud |
| `src/middleware.ts` | **Nuevo** — CSP con nonce |
| `src/app/layout.tsx` | Inyección de nonce en script inline |
| `next.config.ts` | CSP removido (movido al middleware) |
| `src/components/ServicesGallery.tsx` | Fix non-null assertions |
| `src/components/WorkGallery.tsx` | Fix non-null assertions (4 places) |
| `src/components/BottomDock.tsx` | Fix scroll-close bug (M1) |
| `src/components/TopHeader.tsx` | Throttle scroll/resize (M2) |
| `src/components/SmoothScroll.tsx` | prefers-reduced-motion check (M3) |
| `src/components/Preloader.tsx` | Overflow cleanup on unmount (M4) |
| `src/lib/i18n/LocaleProvider.tsx` | Safe emit iteration (M5) |
| `src/components/ContactGallery.tsx` | Rate limited UI state |

---

## Notas

- TypeScript compila sin errores (`tsc --noEmit` OK)
- ESLint sin errores ni warnings en los archivos modificados
- Los API keys en `.env.local` están protegidas por `.gitignore` (`.env*`)
