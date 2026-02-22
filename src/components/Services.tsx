import { Compass, Code2, Search, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <Compass size={24} />,
    title: "Design sur-mesure",
    description:
      "Un site qui reflète l'excellence de votre métier. Moderne, rapide, pensé pour convaincre dès la première seconde.",
    features: ["Identité visuelle unique", "Navigation intuitive", "Adapté à votre image de marque"],
    href: "/services/design",
  },
  {
    icon: <Code2 size={24} />,
    title: "Développement performant",
    description:
      "Construit avec les meilleures technologies. Rapide, sécurisé, évolutif. Codé à la main sur-mesure.",
    features: ["Temps de chargement < 1s", "Code maintenable & évolutif", "Expérience mobile optimale"],
    href: "/services/developpement",
  },
  {
    icon: <Search size={24} />,
    title: "Référencement & visibilité",
    description:
      "Être trouvé par vos futurs clients, sur Google comme sur Maps. On vous place là où ça compte.",
    features: [
      "Optimisation technique SEO",
      "Fiche Google optimisée",
      "Stratégie avis clients",
    ],
    href: "/services/seo",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-dark-bg text-text-light overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <span className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Notre expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold leading-[0.95] tracking-tighter">
              Tout ce qu&apos;il faut pour dominer{" "}
              <br className="hidden sm:block" />
              votre{" "}
              <span className="font-serif-italic text-brand">
                marché local.
              </span>
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-base sm:text-lg text-text-light/55 font-medium leading-relaxed">
              Un écosystème complet, pensé pour transformer votre présence en
              ligne en machine à prospects.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="bg-white/5 border border-white/5 p-6 sm:p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-white/10 hover:border-brand/30 group flex flex-col items-start"
            >
              <div className=" w-full flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-text-light transition-all duration-500">
                  {service.icon}
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-text-light/20 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>

              <h3 className="text-lg xl:text-xl font-bold mb-6 tracking-tight leading-tight">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-text-light/50 font-medium leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="mt-2 space-y-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 text-sm text-text-light/50 font-medium group-hover:text-text-light/70 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-brand rounded-full shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}