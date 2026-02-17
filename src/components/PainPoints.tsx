import { AlertCircle, X } from "lucide-react";

const points = [
  "On ne vous trouve pas sur Google.",
  "Sur mobile, c'est trop lent : le prospect part en 3 secondes.",
  "Une structure confuse rend hesitant votre offre",
  "Un design daté decrédibilise votre savoir",
];

export default function PainPoints() {
  return (
    <section id="expertise" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 sm:gap-16 lg:gap-12 xl:gap-24">
          
          {/* Left: Light Grey Folder Card with White Internal "Report" Card */}
          <div className="lg:w-1/2 w-full flex flex-col">
            <div className="group h-full bg-light-bg p-4 sm:p-6 rounded-4xl sm:rounded-[3.5rem] border border-slate-100 relative overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]">
              
              {/* Subtle Decorative Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand/5 rounded-full -mr-40 -mt-40 blur-[100px] transition-opacity opacity-50 group-hover:opacity-100"></div>
              
              {/* Header */}
              <div className="relative z-10  mb-4 lg:mb-3 xl:mb-6  flex justify-between items-center px-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand shadow-sm border border-slate-100 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <AlertCircle size={28} strokeWidth={1.5} />
                </div>
                <div className="text-slate-300 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] block">Diagnostic web
                </div>
              </div>

              {/* Inner Card - The "Report" Card */}
              <div className="relative z-10 bg-white border border-slate-100 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 lg:p-6 xl:p-10 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/2 group-hover:-translate-y-1">
                {/* Inner Card Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-extrabold text-dark mb-10 leading-tight tracking-tighter lowercase-heading">
                  Pourquoi votre site actuel <br /> ne vous ramène aucun <br /> <span className="text-brand">contact ?</span>
                </h2>
                
                {/* List with subtle indicators */}
                <ul className="space-y-5 sm:space-y-8 lg:space-y-5 xl:space-y-8">
                  {points.map((text, idx) => (
                    <li key={idx} className="flex items-start space-x-3 sm:space-x-5 group/item">
                      <div className="mt-2.5 shrink-0">
                        <div className="w-4 h-0.5 bg-slate-200 rounded-full group-hover/item:bg-brand group-hover/item:w-8 transition-all duration-500"></div>
                      </div>
                      <span className="text-slate-500 text-base md:text-lg text-pretty leading-snug transition-colors group-hover/item:text-dark">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

             
            </div>
          </div>

          {/* Right: Heading & CTA */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl xl:text-6xl font-extrabold text-dark mb-8 sm:mb-12 leading-[0.95] tracking-tighter lowercase-heading">
              Reprenez le contrôle de votre{" "}<br className="hidden sm:block" /> <span className="font-serif-italic text-brand">croissance.</span>
            </h2>
            <p className="text-lg sm:text-xl/8 text-slate-500 mb-14 max-w-xl leading-relaxed font-medium">
              Un artisan n'a pas besoin d'un site "artistique". Il a besoin d'un outil 
              qui rassure immédiatement le client et déclenche l'appel.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <button className="w-full sm:w-auto bg-dark hover:bg-brand text-white px-7 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-2xl active:scale-95 whitespace-nowrap">
                Analyser mon site actuel
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-slate-200"></div>
                <span className="italic text-dark/40 uppercase tracking-widest text-[9px] font-black">simple. direct. concret.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}