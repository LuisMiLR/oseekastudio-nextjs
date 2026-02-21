import { TrendingUp, ShieldCheck, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp size={28} />,
    title: "Un flux constant de prospects.",
    desc: "Ne dépendez plus du bouche-à-oreille aléatoire. Votre site devient une machine à générer des demandes qualifiées 24h/24.",
    tag: "croissance",
  },
  {
    icon: <Award size={28} />,
    title: "La crédibilité que vous méritez.",
    desc: "Un artisan d'exception doit avoir une image d'exception. Justifiez vos tarifs premium avec une présence digitale haut de gamme.",
    tag: "image",
  },
  {
    icon: <Clock size={28} />,
    title: "Gagnez du temps précieux.",
    desc: "Filtrez les curieux et automatisez la prise de rendez-vous. Concentrez-vous sur votre métier, pas sur votre administratif.",
    tag: "efficacité",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Sérénité technique totale.",
    desc: "Oubliez les mises à jour et les bugs. Nous gérons tout le complexe pour que vous puissiez dormir sur vos deux oreilles.",
    tag: "confort",
  },
];

export default function Benefits() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
            Votre transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-dark leading-[0.95] tracking-tighter">
            Le résultat : un business{" "}
            <br className="block" />
            qui{" "}
            <span className="font-serif-italic text-brand">
              respire enfin.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/2 hover:-translate-y-1 group"
            >
              <div className="mb-4 sm:mb-6 flex justify-between items-start">
                <div className="w-12 h-12 flex items-center justify-center text-brand bg-brand/5 rounded-2xl group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  {benefit.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand transition-colors">
                  {benefit.tag}
                </span>
              </div>

              <h3 className="text-lg xl:text-xl font-bold text-dark mb-5 tracking-tight leading-tight">
                {benefit.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm sm:text-base text-slate-500 font-medium italic text-center md:text-left">
            &ldquo;Ce n&apos;est pas une dépense, c&apos;est l&apos;actif le
            plus rentable de votre entreprise.&rdquo;
          </p>
          <a
            href="#contact"
            className="text-dark font-bold border-b-2 border-brand pb-1 hover:text-brand transition-all text-sm uppercase tracking-widest whitespace-nowrap"
          >
            Voir nos cas clients
          </a>
        </div>
      </div>
    </section>
  );
}