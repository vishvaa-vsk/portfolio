import {
  Heart,
  Users,
  Globe,
  Award,
  Calendar,
  HeartHandshake
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";

const BeyondEngineering = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const pillarIcons = [
    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
  ];

  return (
    <section
      id="beyond"
      className="py-12 sm:py-14 md:py-16 relative overflow-hidden px-4 sm:px-6"
    >
      <div
        ref={ref}
        className={`container relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16 ml-1">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(255,113,81,0.15)]">
            <HeartHandshake className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-semibold block mb-1">
              {t.beyond.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground">
              {t.beyond.title}
            </h2>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Role & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white/95 dark:bg-[#08070b]/90 backdrop-blur-xl border border-[#FFEAE5] dark:border-white/10 p-6 sm:p-8 shadow-[0_18px_50px_rgba(255,113,81,0.08)] transition-all duration-500 hover:border-primary/25 hover:shadow-[0_22px_60px_rgba(255,113,81,0.14)]">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0 shadow-[0_0_10px_rgba(255,113,81,0.15)]">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-0.5">
                    {t.beyond.role}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-foreground tracking-tight leading-tight">
                    {t.beyond.organization}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/15 mb-6">
                <Calendar className="h-3.5 w-3.5" />
                {t.beyond.period}
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-foreground mb-3">
                {t.beyond.missionTitle}
              </h4>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-muted-foreground leading-relaxed mb-8">
                {t.beyond.missionDesc}
              </p>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#FFEAE5] dark:border-white/10 pt-6">
              {t.beyond.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-center">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">
                    {stat.label}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-foreground leading-none">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pillars of Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {t.beyond.pillars.map((pillar, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#FFEAE5] dark:border-white/10 bg-white/95 dark:bg-[#08070b]/90 backdrop-blur-xl hover:border-primary/30 dark:hover:bg-[#0d0c12] transition-all duration-500 p-5 sm:p-6 shadow-[0_18px_50px_rgba(255,113,81,0.08)] hover:shadow-[0_24px_60px_rgba(255,113,81,0.14)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0 shadow-[0_0_10px_rgba(255,113,81,0.15)] group-hover:scale-110 transition-transform duration-300">
                    {pillarIcons[index]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondEngineering;
