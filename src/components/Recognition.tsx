import {
  Trophy,
  Code,
  Boxes,
  Bug,
  Smartphone,
  Award,
  Cpu,
  Brain,
  MessageSquare,
  Network,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";

const Recognition = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Map achievements to appropriate custom icons
  const getAchievementIcon = (title: string) => {
    const tLower = title.toLowerCase();
    if (tLower.includes("google") || tLower.includes("prototype") || tLower.includes("105")) {
      return <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />;
    }
    if (tLower.includes("hackerrank") || tLower.includes("orchestrate") || tLower.includes("rank")) {
      return <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />;
    }
    if (tLower.includes("blockathon") || tLower.includes("blockchain")) {
      return <Boxes className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />;
    }
    if (tLower.includes("debugging") || tLower.includes("qr")) {
      return <Bug className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />;
    }
    if (tLower.includes("app development") || tLower.includes("app")) {
      return <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />;
    }
    return <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />;
  };

  // Map certifications to appropriate custom icons
  const getCertificationIcon = (title: string) => {
    const tLower = title.toLowerCase();
    if (tLower.includes("postman")) {
      return <Cpu className="h-5 w-5 text-primary" />;
    }
    if (tLower.includes("python")) {
      return <Code className="h-5 w-5 text-primary" />;
    }
    if (tLower.includes("deep learning")) {
      return <Brain className="h-5 w-5 text-primary" />;
    }
    if (tLower.includes("natural language") || tLower.includes("nlp")) {
      return <MessageSquare className="h-5 w-5 text-primary" />;
    }
    if (tLower.includes("data structures")) {
      return <Network className="h-5 w-5 text-primary" />;
    }
    return <GraduationCap className="h-5 w-5 text-primary" />;
  };

  return (
    <section
      id="recognition"
      className="py-12 sm:py-14 md:py-16 relative overflow-hidden px-4 sm:px-6 border-t border-[#FFEAE5] dark:border-white/5 bg-transparent"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div
        ref={ref}
        className={`container relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16 ml-1">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(255,113,81,0.15)]">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse" />
          </div>
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-semibold block mb-1">
              {t.recognition.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground">
              {t.recognition.title}
            </h2>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Achievements Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <h3 className="text-lg font-bold text-slate-900 dark:text-foreground uppercase tracking-wider">
                Key Achievements
              </h3>
            </div>
            
            <div className="space-y-4">
              {t.recognition.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-[#FFEAE5] dark:border-white/10 bg-white/95 dark:bg-[#08070b]/90 backdrop-blur-xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(255,113,81,0.04)] hover:shadow-[0_20px_50px_rgba(255,113,81,0.12)] hover:border-primary/30 dark:hover:bg-[#0d0c12] transition-all duration-500 hover:-translate-y-0.5"
                >
                  {/* Subtle top light effect */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0 shadow-[0_0_10px_rgba(255,113,81,0.1)] group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                      {getAchievementIcon(item.title)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <span className="inline-flex text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/15 w-fit">
                          {item.issuer}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-foreground uppercase tracking-wider">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {t.recognition.certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl border border-[#FFEAE5] dark:border-white/10 bg-white/95 dark:bg-[#08070b]/90 backdrop-blur-xl p-4 shadow-[0_6px_20px_rgba(255,113,81,0.02)] hover:shadow-[0_15px_40px_rgba(255,113,81,0.08)] hover:border-primary/25 hover:bg-white dark:hover:bg-[#0c0b10] transition-all duration-500"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:scale-105 group-hover:bg-primary/15 transition-all duration-300">
                      {getCertificationIcon(item.title)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-foreground leading-snug tracking-tight group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-muted-foreground mt-0.5">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Recognition;
