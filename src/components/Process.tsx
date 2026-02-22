import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Diagnostic gratuit",
    desc: "On analyse votre site, vos concurrents et votre zone d'intervention.",
  },
  {
    num: "02",
    title: "Construction & SEO",
    desc: "On bâtit votre site et on l'indexe sur Google & Maps.",
  },
  {
    num: "03",
    title: "Lancement & appels",
    desc: "Le site est en ligne. Vous commencez à recevoir vos premières demandes.",
  },
];

export default function Process() {
  return (
    <section id="methode" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-dark-bg rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 overflow-hidden relative border border-white/5">

          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-between gap-10">
            <div>
              <span className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
                Notre méthode
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-text-light leading-[0.95] tracking-tighter mb-8">
                Zéro stress.{" "}
                <br />
                on s&apos;occupe de{" "}
                <br />
                <span className="font-serif-italic text-brand">tout.</span>
              </h2>
              <p className="text-base sm:text-lg text-text-light/55 font-medium leading-relaxed max-w-sm">
                Vous avez un métier à faire. Nous avons le nôtre. Voici comment
                nous allons faire décoller votre activité en 3 étapes.
              </p>
            </div>

            {/* Badge co-construction */}
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 max-w-sm mt-6">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-brand" />
              </div>
              <span className="text-sm text-text-light/70 font-medium leading-snug">
                Une avancée transparente : vous validez chaque étape clé
              </span>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/5 p-5 sm:p-6 rounded-2xl flex items-start gap-6 hover:bg-white/10 hover:border-brand/30 transition-all duration-300 group"
              >
                <span className="text-brand/50 text-2xl font-black group-hover:text-brand group-hover:scale-110 transition-all duration-300 shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-text-light font-bold text-lg mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-light/50 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}