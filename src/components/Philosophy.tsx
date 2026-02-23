import { ArrowRight } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:gap-20 items-start">

          {/* Gauche : label + titre */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <span className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Notre philosophie
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-dark leading-[0.95] tracking-tighter">
              L&apos;excellence technique,
              <br />
              la{" "}
              <span className="font-serif-italic text-brand">proximité</span>
              {" "}en plus.
            </h2>
          </div>

          {/* Droite : blocs texte alignés en haut */}
          <div className="lg:w-1/2 flex flex-col gap-8 lg:pt-14">

            {/* Bloc 1 */}
            <div>
              <p className="text-dark font-bold text-xl tracking-tight leading-tight mb-2">
                Pas d&apos;agence, pas d&apos;intermédiaires, pas de jargon.
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Oseeka est taillé pour les professionnels indépendants qui veulent un site qui travaille vraiment pour eux.
              </p>
            </div>

            {/* Bloc 2 */}
            <div>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                 Mon rôle ne s&apos;arrête pas à livrer un outil.
                Je vous explique chaque choix, je m&apos;adapte à votre métier, et je reste disponible. Un seul interlocuteur, de A à Z, sans zone d&apos;ombre.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-4 flex flex-col items-start">
                    <div className="h-px w-12 bg-brand mb-6"></div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black mb-2">Votre interlocuteur unique </span>
                    <span className="text-xl font-serif-italic text-dark">Luis Miguel Robles</span>
                  </div>

            <a
              href="/about"
              className="group inline-flex items-center gap-3 text-dark font-bold text-sm uppercase tracking-widest hover:text-brand transition-colors"
            >
              Découvrir le studio
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}