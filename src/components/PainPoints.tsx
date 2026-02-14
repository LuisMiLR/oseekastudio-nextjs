import { X } from "lucide-react";

const points = [
  "Il est trop lent sur mobile (vos clients quittent la page).",
  "On ne vous trouve pas sur Google Maps.",
  "Le message est confus : on ne comprend pas votre expertise.",
  "Il n'y a pas de bouton d'appel ou de formulaire simple.",
];

export default function PainPoints() {
  return (
    <section id="expertise" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Card with Negative Points */}
          <div className="lg:w-1/2 w-full max-w-xl lg:max-w-none">
           <div className="bg-light-bg p-6 sm:p-10  md:p-14 lg:p-10 xl:p-16 rounded-[2.5rem] sm:rounded-[3.5rem] border border-slate-100 relative overflow-hidden">

              {/* Le petit halo de lumière en haut à droite */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5  rounded-full -mr-20 -mt-20 blur-3xl" />

              {/* Surtitre : Très petit, espacé, en majuscules */}
              <span className="text-brand text-[10px] font-black uppercase tracking-[0.2em] mb-10 block">
                Le constat
              </span>

              {/* Titre : Minuscules, serré, noir profond */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-12 leading-[1.05] tracking-tighter">
                  Pourquoi votre site actuel <br />
                ne vous ram&#232;ne aucun <br />
                devis ?
              </h2>

              {/* Liste de points : Interligne snug pour le punch */}
              <ul className="space-y-4 sm:space-y-5">
                {points.map((text, idx) => (
                  <li key={idx} className="flex items-start space-x-5">
                    <div className="bg-red-50 p-1.5 rounded-full mt-1 shrink-0">
                      <X className="text-red-500" size={14} strokeWidth={4} />
                    </div>
                    <span className="text-slate-500 font-bold text-base sm:text-lg text-pretty leading-snug">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Heading & CTA */}
          <div className="lg:w-1/2 w-full max-w-xl lg:max-w-none">
           <h2 className="text-4xl sm:text-[42px] lg:text-5xl xl:text-6xl font-extrabold text-dark mb-8 md:mb-12 leading-[0.95] tracking-tighter">
              Reprenez le{" "}
              <br className="hidden sm:block" />
              contr&#244;le de votre{" "}
              <br className="hidden sm:block" />
              <span className="whitespace-nowrap">visibilit&#233;.</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 mb-10 md:mb-14 max-w-xl leading-relaxed font-medium">
              Un artisan n&apos;a pas besoin d&apos;un site &quot;artistique&quot;.
              Il a besoin d&apos;un outil qui rassure imm&#233;diatement le client
              et d&#233;clenche l&apos;appel.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
              <button className="w-full sm:w-auto bg-dark hover:bg-brand text-white px-7 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-2xl active:scale-95 whitespace-nowrap">
                Analyser mon site actuel
              </button>
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="w-12 h-px bg-slate-200" />
                <span className="italic text-dark/40 uppercase tracking-widest text-[9px] font-black">
                  simple. direct. concret.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}