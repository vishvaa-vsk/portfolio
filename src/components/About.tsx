import { memo } from "react";
import { User, Server, Brain, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const cardConfigs = [
    {
      icon: Server,
      color: "text-[var(--accent-primary)]",
      bg: "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/25",
      badgeColor: "text-[var(--accent-primary)]",
      borderColor: "hover:border-[var(--accent-primary)]/50",
    },
    {
      icon: Brain,
      color: "text-[var(--accent-teal)]",
      bg: "bg-[var(--accent-teal)]/10 border-[var(--accent-teal)]/25",
      badgeColor: "text-[var(--accent-teal)]",
      borderColor: "hover:border-[var(--accent-teal)]/50",
    },
    {
      icon: Layers,
      color: "text-[var(--status-info)]",
      bg: "bg-[var(--status-info)]/10 border-[var(--status-info)]/25",
      badgeColor: "text-[var(--status-info)]",
      borderColor: "hover:border-[var(--status-info)]/50",
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
          <div className="p-2.5 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/25 text-[var(--accent-primary)] shadow-[var(--shadow-glow)]">
            <User className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[var(--accent-primary)] font-semibold block mb-1">
              {t.about.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.about.title}
            </h2>
          </div>
        </div>

        {/* Bento Glass Container */}
        <div
          className={`relative group rounded-2xl sm:rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] backdrop-blur-xl shadow-xl dark:shadow-2xl dark:shadow-black/60 p-5 sm:p-7 md:p-10 overflow-hidden transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subtle Ambient Kernel Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--accent-primary)]/[0.08] blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[var(--accent-teal)]/[0.06] blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Enlarged Profile Photo */}
            <div className="lg:col-span-4 flex flex-col justify-stretch">
              <div className="relative group/photo w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-full rounded-2xl overflow-hidden border border-[var(--border-primary)] shadow-lg dark:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover/photo:scale-[1.01]">
                <picture className="w-full h-full block">
                  <source srcSet="/Vishvaa.png" type="image/png" />
                  <img
                    src="/Vishvaa.png"
                    alt="Vishvaa K"
                    className="w-full h-full object-cover object-top transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Photo Footer Label: Frosted Glass Overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                  <p className="font-semibold text-sm sm:text-base text-white/95 tracking-tight leading-snug">Vishvaa K</p>
                  <p className="text-[11px] sm:text-xs text-white/60 mt-0.5 leading-snug">B.E. CSE (2023 – 2027) · Chennai</p>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Personal Narrative & Technical Focus */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              {/* Main Introduction */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-[var(--text-primary)]">
                  {t.about.subtitle}
                </h3>
                <div className="mt-3.5 space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
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
                      className={`p-4 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-tertiary)] backdrop-blur-md ${cfg.borderColor} transition-all duration-300 flex flex-col justify-between group/card`}
                    >
                      <div>
                        <div
                          className={`p-2 w-fit rounded-lg ${cfg.bg} ${cfg.color} mb-3 group-hover/card:scale-105 transition-transform`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1.5">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                      <div className="mt-3.5 pt-2.5 border-t border-[var(--border-primary)]">
                        <span className={`text-[10px] font-mono ${cfg.badgeColor} block truncate`}>
                          {pillar.badge}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Information Strip: Personal Exploration */}
              <div className="flex flex-row items-center gap-2 sm:gap-3 px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] shadow-sm flex-wrap">
                <div className="inline-flex items-center gap-2 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse flex-shrink-0" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
                    {t.about.exploringLabel}
                  </span>
                </div>
                <span className="inline-block w-px h-3.5 bg-[var(--border-primary)] shrink-0" />
                <span className="text-[var(--text-secondary)] font-medium text-xs sm:text-[13px]">
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
