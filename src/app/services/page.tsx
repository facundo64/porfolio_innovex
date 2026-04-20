import Services from "@/components/Services";
import Skills from "@/components/Skills";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Servicios — INNHOVEX",
  description:
    "Desarrollo web, software a medida, producto digital y escala. Servicios premium de INNHOVEX.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title={
          <>
            Todo lo que necesitás
            <br />
            para construir <em className="italic text-[#1E2A47]">online</em>.
          </>
        }
        subtitle="Trabajamos con empresas, emprendedores y startups que buscan una presencia digital a la altura de su producto."
      />
      <Services />
      <Skills />
      <Footer />
    </>
  );
}
