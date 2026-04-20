import Process from "@/components/Process";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Proceso — INNHOVEX",
  description: "Cómo trabajamos en INNHOVEX — del wireframe al deploy.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proceso"
        title={
          <>
            Cómo <em className="italic text-[#1E2A47]">trabajamos</em>.
          </>
        }
        subtitle="Un proceso simple, transparente y colaborativo. Del descubrimiento al lanzamiento."
      />
      <Process />
      <Footer />
    </>
  );
}
