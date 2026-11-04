import { memo } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building2,
  BookOpen,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const jobIcons = [
    <Briefcase className="h-5 w-5 text-primary" />,
    <Briefcase className="h-5 w-5 text-primary" />,
    <Briefcase className="h-5 w-5 text-primary" />,
    <Briefcase className="h-5 w-5 text-primary" />,
  ];

  const eduIcons = [
    <GraduationCap className="h-5 w-5 text-primary" />,
    <BookOpen className="h-5 w-5 text-primary" />,
  ];

  return (
    <section
      id="experience"
      className="py-10 sm:py-14 md:py-16 relative overflow-hidden px-4 sm:px-6"
    >
      <div
        ref={ref}
        className={`container relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16 ml-1">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 shadow-[var(--shadow-glow)]">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-semibold block mb-1">
              {t.experience.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.experience.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10">
          <div className="xl:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {t.experience.profTitle}
              </h3>
            </div>

            <div className="relative border-l border-[var(--border-primary)] ml-2 sm:ml-4 space-y-8 sm:space-y-10">
              {t.experience.jobs.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 sm:pl-8 md:pl-10 group"
                >
                  <div className="absolute -left-[6px] top-1 h-3 w-3 rounded-full bg-primary border border-primary shadow-[var(--shadow-glow)] group-hover:scale-125 transition-transform duration-300" />

                  <div className="rounded-2xl bg-[var(--bg-tertiary)] backdrop-blur-xl border border-[var(--border-primary)] hover:border-primary/40 dark:hover:border-[var(--border-hover)] hover:bg-[var(--bg-elevated)] transition-all duration-500 p-5 sm:p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)]">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit h-fit shadow-sm shrink-0">
                        {jobIcons[index]}
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h4>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] mb-4">
                          <MapPin className="h-4 w-4 text-primary" />
                          {exp.company}
                        </div>

                        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-elevated)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default hover:shadow-sm hover:-translate-y-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {t.experience.acadTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {t.experience.education.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-tertiary)] backdrop-blur-xl hover:border-primary/40 dark:hover:border-[var(--border-hover)] hover:bg-[var(--bg-elevated)] transition-all duration-500 p-5 sm:p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                      {eduIcons[index]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="text-lg font-bold leading-tight text-[var(--text-primary)] group-hover:text-primary transition-colors duration-300">
                          {item.course}
                        </h4>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary">
                          {item.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                        <span className="font-semibold">{item.institution}</span>
                        <span className="hidden sm:inline text-[var(--text-muted)]">•</span>
                        <span className="flex items-center gap-1 text-[var(--text-muted)]">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.period}
                        </span>
                      </div>

                      <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
                        {item.description}
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

export default memo(Experience);
