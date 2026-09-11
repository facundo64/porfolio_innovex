import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo INNHOVEX recopila, usa y protege tus datos personales, conforme a la Ley 25.326 de Protección de Datos Personales.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return <LegalDocument slug="privacidad" />;
}
