import { AlertCircle, X } from "lucide-react";

const points = [
  "On ne vous trouve pas sur Google.",
  "Sur mobile, c'est trop lent : le prospect part en 3 secondes.",
  "Une structure confuse rend hesitant votre offre",
  "Un design daté décrédibilise votre savoir faire",
];

export default function PainPoints() {
  return (
    <section id="expertise" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 sm:gap-16 lg:gap-12 xl:gap-24">
          
         
{/* Left: Card harmonisée */}
{/* Left: Card harmonisée */}
<div className="lg:w-1/2 w-full flex flex-col min-w-0">
  <div className="group h-full bg-card-bg p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/90 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1.5 hover:border-brand/20 focus-within:ring-2 focus-within:ring-brand/20">

    {/* Header */}
    <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand/5 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shrink-0">
        <AlertCircle size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7" />
      </div>
      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
        Diagnostic web
      </span>
    </div>

    {/* Titre */}
    <h2 className="text-2xl sm:text-3xl md:text-[1.75rem] font-extrabold text-dark mb-6 sm:mb-8 leading-[1.2] tracking-tighter lowercase-heading">
      Pourquoi votre site actuel <br className="hidden sm:block" /> ne vous ramène aucun <br className="hidden sm:block" />
      <span className="text-dark">contact ?</span>
    </h2>

    {/* Liste */}
    <ul className="space-y-4 sm:space-y-5 md:space-y-6" role="list">
      {points.map((text, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 sm:gap-4 group/item py-1 transition-colors duration-300"
        >
          <div className="mt-2 sm:mt-2.5 shrink-0 w-2 h-2 rounded-full bg-brand/30 group-hover/item:bg-brand group-hover/item:scale-125 transition-all duration-300 flex items-center justify-center" aria-hidden />
          <span className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed transition-colors group-hover/item:text-dark pt-0.5">
            {text}
          </span>
        </li>
      ))}
    </ul>

  </div>
</div>

          {/* Right: Heading & CTA */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-dark mb-8 sm:mb-12 leading-[0.95] tracking-tighter lowercase-heading">
              Reprenez le contrôle de votre{" "}<br className="lg:hidden" /><span className="font-serif-italic text-brand">croissance.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-14 max-w-xl">
              Un artisan, un therapeute, un CGP n'a pas besoin d'un site "artistique". Il a besoin d'un outil bien référencé qui rassure immédiatement le client et qui déclenche l'appel.
            </p>
            <div className="flex flex-col min-[540px]:flex-row items-center gap-10 max-w-sm min-[540px]:max-w-none mx-auto min-[540px]:mx-0">
              <button className="w-full min-[540px]:w-auto bg-dark hover:bg-brand text-white px-7 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-2xl active:scale-95 whitespace-nowrap">
                Analyser mon site actuel
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-slate-200"></div>
                <span className="italic text-slate-400 uppercase tracking-widest text-[10px] font-medium">simple. direct. concret.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}