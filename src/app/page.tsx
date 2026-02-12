import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PainPoints from "@/components/PainPoints";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        {/* Les autres sections seront ajoutées ici une par une */}
      </main>
      <Footer />
    </div>
  );
}