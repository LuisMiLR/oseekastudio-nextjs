"use client";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const features = [
  "Design unique & professionnel",
  "SEO Local (Ville + Métier)",
  "Vitesse de chargement mobile",
  "Maintenance & Support 12 mois",
  "Formation prise en main",
];

const options = [
  {
    id: "contact",
    title: "Contact & Conversion",
    description:
      "Transformez vos visiteurs en prospects qualifiés dès la première visite.",
    items: [
      { label: "Module WhatsApp ou Prise de RDV automatisée", price: "+150 €" },
      { label: "Google Analytics 4 + configuration RGPD", price: "+300 €" },
    ],
  },
  {
    id: "visibilite",
    title: "Visibilité & Acquisition",
    description: "Allez chercher vos futurs clients là où ils se trouvent.",
    items: [
      { label: "Pixel Meta (Facebook/Instagram Ads)", price: "+450 €" },
      { label: "Rédaction stratégique de vos textes", price: "+350 €" },
    ],
  },
  {
    id: "contenu",
    title: "Contenu & Pages",
    description: "Enrichissez votre site pour renforcer votre crédibilité.",
    items: [
      { label: "Page Réalisations avec galerie", price: "+300 €" },
      { label: "Page additionnelle (service, zone, FAQ…)", price: "+250 €" },
    ],
  },
];

export default function Pricing() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tarifs" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
            Investissement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-dark leading-[0.95] tracking-tighter">
            Clarté totale,{" "}
            <span className="font-serif-italic text-brand">zéro frais</span>{" "}
            cachés.
          </h2>
        </div>

        {/* Pricing card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card-bg rounded-[2.5rem] border border-slate-100 p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
              {/* Left Column */}
              <div className="lg:w-1/2 flex flex-col justify-start">
                <div className="inline-flex items-center px-5 py-2 bg-white border border-slate-200 rounded-full mb-8 w-fit">
                  <span className="text-dark text-[10px] font-black uppercase tracking-[0.3em]">
                    Site socle optimisé
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6 tracking-tighter leading-tight">
                  La solution one-page <br /> haute conversion.
                </h3>

                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-10">
                  Tout ce dont un artisan a besoin pour lancer sa présence
                  digitale et commencer à récolter des devis en moins de 15
                  jours.
                </p>

                <div className="mt-auto">
                  {/* Prix barré + tarif lancement */}
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-slate-300 line-through decoration-brand text-2xl font-bold tracking-tighter">
                      2 100 €
                    </span>
                    <span className="bg-brand/10 text-brand text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                      Offre lancement
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-6xl font-extrabold text-dark tracking-tighter">
                      1 640 €
                    </span>
                    <span className="text-slate-400 font-bold text-2xl tracking-tighter">
                      *
                    </span>
                  </div>
                  <p className="text-brand text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                    5 premiers clients uniquement
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    *TVA non applicable, art. 293 B du CGI (micro-entreprise)
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-1/2">
                <div className="bg-dark-bg rounded-4xl p-8 md:p-10 h-full flex flex-col border border-white/5">
                  <div className="mb-10">
                    <span className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-8 block">
                      Votre site comprend :
                    </span>

                    <ul className="space-y-5">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                          <CheckCircle2
                            className="text-brand shrink-0"
                            size={20}
                          />
                          <span className="text-text-light/80 font-medium text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full bg-brand hover:bg-white text-white hover:text-dark py-5 rounded-2xl font-bold text-base transition-all duration-300 active:scale-95">
                      Démarrer mon projet aujourd&apos;hui
                    </button>
                    <p className="text-center text-text-light/30 text-[10px] font-black uppercase tracking-[0.3em] mt-5">
                      Places limitées — 5 premiers clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extensions à la carte */}
          <div className="mt-16">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-12 h-px bg-brand"></div>
              <p className="text-dark font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
                Extensions à la carte
              </p>
              <div className="flex-1 h-px bg-slate-100"></div>
            </div>

            <div className="flex flex-col gap-1">
              {options.map((option) => {
                const isOpen = openId === option.id;
                return (
                  <div
                    key={option.id}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-brand/30 bg-card-bg"
                        : "border-slate-100 bg-card-bg hover:border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => toggle(option.id)}
                      className="w-full flex items-center justify-between px-8 py-6 text-left"
                    >
                      <span className="text-dark font-bold text-base sm:text-lg tracking-tight">
                        {option.title}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-8 pb-8 border-t border-slate-100">
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mt-6 mb-6">
                          {option.description}
                        </p>
                        <ul className="space-y-4">
                          {option.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-center justify-between gap-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-brand rounded-full shrink-0"></div>
                                <span className="text-dark font-medium text-sm sm:text-base">
                                  {item.label}
                                </span>
                              </div>
                              <span className="text-brand font-black text-sm whitespace-nowrap">
                                {item.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
