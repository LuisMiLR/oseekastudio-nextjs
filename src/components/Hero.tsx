import { Star, ArrowUpRight, Bell } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-28 md:pt-36 pb-12 bg-white overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/2] -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left Column: Content */}
          <div className="lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full mb-8 md:mb-10">
              <span className="text-dark/40 text-[9px] font-black uppercase tracking-widest italic">
                l&apos;excellence digitale pour les ind&#233;pendants exigeants
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-[5.5rem] font-extrabold text-dark leading-[0.92] mb-8 md:mb-10 tracking-tighter">
              un site qui remplit{" "}
              <br />
              <span className="font-serif-italic text-brand">
                votre carnet de
              </span>{" "}
              <br />
              rendez-vous.
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-xl mb-10 md:mb-12 leading-relaxed font-medium">
              Oubliez les vitrines inutiles. Nous cr&#233;ons des outils de vente
              rapides, visibles et pens&#233;s pour d&#233;clencher des demandes de devis
              et de RDV imm&#233;diates.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mb-16 md:mb-20">
              <button className="group w-full sm:w-auto bg-dark hover:bg-brand text-white px-7 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-2xl active:scale-95 flex items-center justify-center gap-3">
                R&#233;server mon diagnostic
                <ArrowUpRight
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={20}
                />
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-dark border border-slate-200 px-7 py-4 rounded-2xl text-lg font-bold transition-all duration-300">
                Nos r&#233;alisations
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 border-t border-slate-100 pt-8 md:pt-10">
              <div className="flex text-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-slate-400 text-sm font-bold uppercase tracking-wide">
                +30 professionnels accompagn&#233;s avec succ&#232;s
              </span>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative group">
              {/* Image Container */}
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 transform lg:-rotate-2 group-hover:rotate-0 transition-all duration-700">
                <img
                  src="/hero-image.webp"
                  alt="Professionnelle souriante - Oseeka Studio"
                  className="w-full aspect-4/5 object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-brand/5 mix-blend-multiply opacity-20" />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              </div>

            {/* Floating Conversion Card */}
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white/95 backdrop-blur-xl rounded-4xl p-5 shadow-2xl border border-white/20 animate-fadeIn max-w-55 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center text-white shadow-lg shadow-brand/20">
                    <Bell size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.15em]">
                      nouveau message
                    </p>
                    <p className="text-dark font-bold text-xs">
                      &#192; l&apos;instant
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-2/3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand w-full" />
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium italic leading-tight">
                    &quot;Bonjour, j&apos;aimerais prendre rendez-vous...&quot;
                  </p>
                </div>
              </div>

              {/* Performance Tag */}
              <div className="absolute -top-8 -right-4 md:-right-8 bg-dark text-white rounded-3xl p-6 shadow-2xl flex items-center gap-5 border border-white/5 z-20">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-brand">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    visibilit&#233; locale
                  </span>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -z-10 inset-0 bg-brand blur-[120px] opacity-10 rounded-full scale-125" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}