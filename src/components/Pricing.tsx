  "use client";
  import { ChevronDown, ArrowRight } from "lucide-react";
  import { useState } from "react";

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

  const benefits = [
    "Un parcours optimisé pour générer des contacts",
    "Des fondations pour plaire à Google",
    "Un contrôle total : vous validez chaque étape",
  ];

  const technicals = [
    "Architecture One-page stratégique (7 à 9 sections)",
    "Design 100% sur-mesure (Zéro template)",
    "Mécanique de conversion (Formulaire & emails)",
    "Intégration de vos preuves sociales (Avis, logos)",
    "Conformité totale (Pages légales & 404)",
    "Pack Google (Sitemap & Search Console inclus)",
    "Mise en ligne garantie sous 4 à 6 semaines",
  ];

  export default function Pricing() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
      setOpenId((prev) => (prev === id ? null : id));
    };

    return (
      <section id="tarifs" className="section-padding py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              Tarif
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-dark leading-[0.95] tracking-tighter mb-6">
              Une offre claire,{" "}
              <span className="font-serif-italic text-brand">
                des extensions à la carte.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Un investissement transparent, pour valoriser votre offre et générer
              des contacts.
            </p>
          </div>

          {/* Pricing card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                {/* Left Column */}
                <div className="lg:w-1/2 flex flex-col">
                  <div className="mb-4">
                    <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 mb-8 w-fit">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                        Site stratégique
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-dark mb-6 tracking-tighter leading-tight">
                      Votre nouvel actif{" "} 
                      <br className="hidden sm:block" /> business.
                    </h3>

                    <p className="text-base text-slate-600 font-medium leading-relaxed max-w-md mb-6">
                      L&apos;essentiel pour renforcer votre crédibilité et
                      commencer à générer des opportunités concrètes dès la mise
                      en ligne.
                    </p>

                    <ul className="space-y-3">
                      {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight
                            size={16}
                            className="text-brand mt-0.5 shrink-0"
                          />
                          <span className="text-slate-600 font-medium text-sm leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-slate-300 line-through decoration-brand/40 text-xl font-bold tracking-tighter">
                        2 100 €
                      </span>
                      <span className="bg-brand/10 text-brand text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
                        Offre lancement
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-5xl sm:text-6xl font-black text-dark tracking-tighter">
                        1 640 €
                      </span>
                      <span className="text-slate-500 font-bold text-2xl tracking-tighter">
                        *
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-brand text-[10px] font-black uppercase tracking-[0.25em]">
                        5 premiers clients uniquement
                      </p>
                      <p className="text-slate-400 text-[9px] font-medium italic">
                        *TVA non applicable, art. 293 B du CGI (micro-entreprise)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:w-1/2 -mx-8 sm:-mx-8 lg:mx-0">
                  <div className="relative bg-[#0A0B10] rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-between border border-slate-800 shadow-2xl overflow-hidden">
                    {/* Badge coin */}
                    <div className="absolute top-0 right-0">
                      <div className="bg-brand text-white text-[10px] font-black uppercase tracking-[0.2em]  px-4 sm:px-6 py-3 rounded-bl-2xl">
                        L&apos;indispensable
                      </div>
                    </div>

                    <div className="pt-10">
                      <span className="text-brand text-[10px] font-black uppercase tracking-[0.2em] mb-7 block">
                        Ce que vous obtenez :
                      </span>
                      <ul className="space-y-3">
                        {technicals.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 shrink-0"></div>
                            <span className="text-slate-300 font-medium text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex flex-col items-center">
                      <button className="w-full min-[426px]:w-auto min-[426px]:min-w-[280px] bg-brand hover:brightness-110 text-white py-4 px-8 rounded-2xl font-bold text-base transition-all duration-300 active:scale-95 shadow-lg shadow-brand/20">
                        Réserver ma place
                      </button>
                      <p className="text-center text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mt-6 whitespace-nowrap">
                        Offre limitée 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extensions à la carte */}
            <div className="mt-20">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-12 h-px bg-brand"></div>
                <p className="text-dark font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
                  Extensions à la carte
                </p>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              <div className="flex flex-col gap-3">
                {options.map((option) => {
                  const isOpen = openId === option.id;
                  return (
                    <div
                      key={option.id}
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "border-brand/40 bg-white shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
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
                          <p className="text-slate-500 text-sm font-medium leading-relaxed mt-5 mb-6">
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
