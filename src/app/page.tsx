import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import BusinessObjectives from "@/components/BusinessObjectives";
import Process from "@/components/Process";
import Reassurance from "@/components/Reassurance";

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
        <BusinessObjectives />
        <Process />
        <Reassurance />
      </main>
      <Footer />
    </div>
  );
}