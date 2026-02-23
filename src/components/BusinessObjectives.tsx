import { Check } from "lucide-react";
import Image from "next/image";

const items = [
  "Diagnostic offert, sans engagement",
  "Une validation client à chaque étape clé",
  "Délai de livraison garanti",
  "Résultats mesurables dès le lancement",
  "Code source livré, vous restez propriétaire",
];

export default function BusinessObjectives() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Gauche : image */}
          <div className="lg:w-1/2 w-full relative">
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
            <Image
                src="/business-objectives.png"
                alt="Atelier de design Oseeka"
                width={800}
                height={800}
                className="w-full aspect-square object-cover"
            />
            </div>
            {/* Glow décoratif */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Droite : contenu */}
          <div className="lg:w-1/2 w-full">
            <span className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Votre projet
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-dark leading-[0.95] tracking-tighter mb-8">
              Un projet clair,{" "}
              <span className="font-serif-italic text-brand">
                des résultats mesurables.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-10">
              Chaque site Oseeka part d&apos;une immersion totale dans votre
              activité. Fini l&apos;improvisation ou les solutions toutes
              faites. Je mets en place un cadre de travail éprouvé pour livrer
              un site qui performe dès le premier jour.
            </p>

            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-600 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}