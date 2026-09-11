import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Consentimiento para el procesamiento de datos personales",
  description:
    "Consentimiento libre, expreso e informado para el tratamiento de datos personales por parte de INNHOVEX.",
  alternates: { canonical: "/consentimiento" },
  robots: { index: true, follow: true },
};

export default function ConsentimientoPage() {
  return <LegalDocument slug="consentimiento" />;
}
