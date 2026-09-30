import Hero from "@/components/Hero";
import HomeViaje from "@/components/home/HomeViaje";
import HomeDentro from "@/components/home/HomeDentro";
import HomeNecesitas from "@/components/home/HomeNecesitas";
import Footer from "@/components/Footer";
import { kalam } from "@/lib/fonts/expedientes";

// Home a lápiz: ver docs/boceto-home/index.html (boceto aprobado).
export default function Home() {
  return (
    <>
      <div className={`hl hl-home ${kalam.variable}`}>
        <Hero />
        <HomeViaje />
        <HomeDentro />
        <HomeNecesitas />
      </div>
      <Footer />
    </>
  );
}
