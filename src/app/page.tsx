import Hero from "@/components/Hero";
import HomeViaje from "@/components/home/HomeViaje";
import HomeViajeMovil from "@/components/home/HomeViajeMovil";
import HomeDentro from "@/components/home/HomeDentro";
import HomeNecesitas from "@/components/home/HomeNecesitas";

// Home a lápiz: ver docs/boceto-home/index.html (boceto aprobado).
export default function Home() {
  return (
    <div className="hl hl-home">
      <Hero />
      <HomeViaje />
      <HomeViajeMovil />
      <HomeDentro />
      <HomeNecesitas />
    </div>
  );
}
