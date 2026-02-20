import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Benefits />
        <Philosophy />
        <Services />
      </main>
      <Footer />
    </div>
  );
}