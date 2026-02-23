import { ShieldCheck, Award, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: <Clock className="w-5 h-5 text-brand" />,
    value: "15",
    suffix: "ans",
    label: "de conseil business",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-brand" />,
    value: "30",
    suffix: "+",
    label: "projets réalisés",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-brand" />,
    value: "100",
    suffix: "%",
    label: "de délais respectés",
  },
  {
    icon: <Award className="w-5 h-5 text-brand" />,
    value: "Expert",
    suffix: "",
    label: "Développement Next.js",
  },
];

const stack = [
  { name: "Next.js", label: "Architecture" },
  { name: "Vercel", label: "Infrastructure" },
  { name: "Tailwind", label: "Styling" },
  { name: "TypeScript", label: "Language" },
  { name: "Framer Motion", label: "Animations" },
];

export default function Reassurance() {
  return (
    <section
      id="reassurance"
      className="section-padding overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20 mb-16 md:mb-20">
          <div className="lg:w-1/2">
            <span className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Expertise & fiabilité
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-dark leading-[0.95] tracking-tighter">
              L&apos;assurance d&apos;un{" "}
              <span className="font-serif-italic text-brand">
                partenaire solide.
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2 lg:pb-2">
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-md">
              Mon parcours en finance et mon expertise technique garantissent
              une approche pragmatique : votre site est un actif, pas une
              dépense.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 flex flex-col items-start group transition-all duration-500 bg-card-bg border border-slate-100 rounded-[2.5rem] hover:shadow-xl hover:shadow-black/2 hover:-translate-y-1 hover:bg-white"
            >
              <div className="mb-8 p-3 bg-brand/5 border border-brand/10 rounded-2xl group-hover:bg-brand group-hover:border-brand group-hover:[&>*]:text-white transition-all duration-500">
                {stat.icon}
              </div>

              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-black text-dark tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xl font-serif-italic text-brand ml-1">
                  {stat.suffix}
                </span>
              </div>

              <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Stack technologique */}
        <div className="mt-16 flex flex-col sm:flex-row items-start justify-between gap-10">
          <div className="flex items-center gap-4 shrink-0 pt-2.5">
            <div className="w-12 h-px bg-brand"></div>
            <p className="text-dark font-black text-[10px] uppercase tracking-[0.3em]">
              Stack technologique premium
            </p>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div
              className="flex animate-marquee whitespace-nowrap items-center h-full"
              style={{ width: "max-content" }}
            >
              {[1, 2].map((set) => (
                <div
                  key={set}
                  className="flex gap-16 items-center shrink-0 mr-16"
                >
                  {stack.map((tech, idx) => (
                    <div key={idx} className="group flex flex-col items-center">
                      <span className="text-xl font-black tracking-tighter text-dark opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        {tech.name}
                      </span>
                      <span className="text-[8px] uppercase tracking-[0.3em] font-black text-brand mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        {tech.label}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
