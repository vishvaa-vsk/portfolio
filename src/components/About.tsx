import { memo } from "react";
import { User, Server, Brain, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const cardConfigs = [
    {
      icon: Server,
      color: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/20",
      badgeColor: "text-orange-400",
      borderColor: "hover:border-orange-500/40 dark:hover:border-orange-400/30",
    },
    {
      icon: Brain,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
      badgeColor: "text-cyan-400",
      borderColor: "hover:border-cyan-500/40 dark:hover:border-cyan-400/30",
    },
    {
      icon: Layers,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
      badgeColor: "text-amber-400",
      borderColor: "hover:border-amber-500/40 dark:hover:border-amber-400/30",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden px-4 sm:px-6"
    >
      <div
        ref={ref}
        className={`container relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 ml-1">
          <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <User className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-orange-400 font-semibold block mb-1">
              {t.about.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground">
              {t.about.title}
            </h2>
          </div>
        </div>

        {/* Bento Glass Container */}
        <div
          className={`relative group rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0C0E14]/90 backdrop-blur-xl shadow-xl dark:shadow-2xl dark:shadow-black/60 p-5 sm:p-7 md:p-10 overflow-hidden transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subtle Ambient Kernel Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/10 dark:bg-orange-600/[0.08] blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-500/[0.06] blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Enlarged Profile Photo */}
            <div className="lg:col-span-4 flex flex-col justify-stretch">
              <div className="relative group/photo w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover/photo:scale-[1.01]">
                <picture className="w-full h-full block">
                  <source srcSet="/Vishvaa.webp" type="image/webp" />
                  <img
                    src="/Vishvaa.png"
                    alt="Vishvaa K"
                    className="w-full h-full object-cover object-top transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Photo Footer Label */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 rounded-xl bg-slate-900/90 dark:bg-[#08090C]/90 backdrop-blur-md border border-white/10 text-white">
                  <p className="font-semibold text-sm sm:text-base text-slate-100">Vishvaa K</p>
                  <p className="text-xs text-slate-400">B.E. CSE (2023 – 2027) · Chennai</p>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Personal Narrative & Technical Focus */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              {/* Main Introduction */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-foreground">
                  {t.about.subtitle}
                </h3>
                <div className="mt-3.5 space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                  <p>{t.about.p3}</p>
                </div>
              </div>

              {/* Three Technical Focus Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {t.about.pillars.map((pillar, idx) => {
                  const cfg = cardConfigs[idx] || cardConfigs[0];
                  const Icon = cfg.icon;
                  return (
                    <div
                      key={pillar.title}
                      className={`p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-[#08090C]/80 backdrop-blur-md ${cfg.borderColor} transition-all duration-300 flex flex-col justify-between group/card`}
                    >
                      <div>
                        <div
                          className={`p-2 w-fit rounded-lg ${cfg.bg} ${cfg.color} mb-3 group-hover/card:scale-105 transition-transform`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                      <div className="mt-3.5 pt-2.5 border-t border-slate-200 dark:border-white/5">
                        <span className={`text-[10px] font-mono ${cfg.badgeColor} block truncate`}>
                          {pillar.badge}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Information Strip: Personal Exploration */}
              <div className="flex flex-wrap items-center gap-2 p-3 sm:p-3.5 rounded-xl bg-slate-100/60 dark:bg-[#06070A]/80 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-orange-500 dark:text-orange-400">
                  {t.about.exploringLabel}:
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium font-sans">
                  {t.about.exploringContent}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
