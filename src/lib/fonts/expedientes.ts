import {
  Caveat,
  Inter,
  JetBrains_Mono,
  Kalam,
  Lora,
  Montserrat,
  Oswald,
  Playfair_Display,
  Zilla_Slab,
} from "next/font/google";

/**
 * Fuentes de los expedientes de /work. Van por next/font (servidas desde el
 * propio dominio) porque la CSP del sitio sólo permite `font-src 'self'` y
 * `style-src 'self'`: un @import a Google Fonts desde el CSS queda bloqueado.
 * Ninguna se precarga: sólo se bajan cuando un expediente las usa.
 * Ojo: next/font exige literales en las opciones (nada de spread ni constantes).
 */

export const kalam = Kalam({ subsets: ["latin"], display: "swap", preload: false, weight: ["400", "700"], variable: "--font-kalam" });
export const montserrat = Montserrat({ subsets: ["latin"], display: "swap", preload: false, weight: ["400", "600", "700", "900"], variable: "--font-montserrat" });
export const playfair = Playfair_Display({
  subsets: ["latin"], display: "swap", preload: false,
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});
export const inter = Inter({ subsets: ["latin"], display: "swap", preload: false, weight: ["400", "500", "600", "700", "900"], variable: "--font-inter" });
export const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", preload: false, weight: ["400", "500"], variable: "--font-jetbrains" });
export const zilla = Zilla_Slab({ subsets: ["latin"], display: "swap", preload: false, weight: ["500", "600", "700"], variable: "--font-zilla" });
export const oswald = Oswald({ subsets: ["latin"], display: "swap", preload: false, weight: ["400", "500", "600", "700"], variable: "--font-oswald" });
export const lora = Lora({ subsets: ["latin"], display: "swap", preload: false, weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-lora" });
export const caveat = Caveat({ subsets: ["latin"], display: "swap", preload: false, weight: ["500", "700"], variable: "--font-caveat" });
