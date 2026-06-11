import { useState } from "react";
import { Github, ExternalLink, Folder, Rocket, Briefcase, Calendar, Users, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projectData = [
  {
    image: "", // HarvestHub
    tags: [
      "Flutter",
      "Firebase",
      "Gemini AI",
      "TensorFlow",
      "REST APIs",
      "Multilingual (intl)",
      "Dart & Flutter"
    ],
    github: "https://github.com/vishvaa-vsk/HarvestHub",
    live: "https://github.com/vishvaa-vsk/HarvestHub/releases/tag/v2.0.1",
  },
  {
    image: "", // DBX
    tags: [
      "Docker",
      "PostgreSQL",
      "Typer",
      "Python",
      "FastAPI",
      "Backup Automation",
      "Cron Scheduling"
    ],
    github: "https://github.com/vishvaa-vsk/dbx-cloud",
    live: "",
  },
  {
    image: "", // Life Connect
    tags: [
      "FastAPI",
      "MySQL",
      "Async Tasks",
      "Rate Limiting",
      "REST APIs",
      "Backend Migration"
    ],
    github: "https://github.com/Youth-Red-Cross-VEC/LifeConnect/tree/backend-fastapi-rearchitecture",
    live: "",
  },
  {
    image: "", // LSRW Skill Assessment Platform
    tags: [
      "Flask",
      "MongoDB",
      "JavaScript",
      "Email Automation",
      "REST APIs",
      "Analytics"
    ],
    github: "https://github.com/vishvaa-vsk/LSRW-Skill-Assessment-Platform",
    live: "https://www.testeng.online",
  },
  {
    image: "", // Prism
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "GitHub APIs",
      "Agent Orchestration",
      "RAG"
    ],
    github: "https://github.com/vishvaa-vsk",
    live: "",
  },
  {
    image: "", // Kore
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Multi-Tenancy",
      "RAG",
      "Redis Caching",
      "REST APIs"
    ],
    github: "https://github.com/vishvaa-vsk",
    live: "",
  },
];


const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const activeProject = activeProjectIndex !== null ? t.projects.items[activeProjectIndex] : null;
  const activeProjectData = activeProjectIndex !== null ? projectData[activeProjectIndex] : null;


  return (
    <section
      id="projects"
      className="py-12 sm:py-14 md:py-16 relative overflow-hidden px-4 sm:px-6"
    >
      <div
        ref={ref}
        className={`container relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 ml-1">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(255,113,81,0.15)]">
            <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-semibold block mb-1">
              {t.projects.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground">
              {t.projects.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-20">
          {t.projects.items.map((project, index) => {
            const data = projectData[index];
            if (!data) return null;

            return (
              <div
                key={index}
                className={`group rounded-xl border border-[#FFEAE5] dark:border-white/10 bg-white/92 dark:bg-card/20 backdrop-blur-md overflow-hidden hover:border-primary/35 hover:bg-white dark:hover:bg-card/30 transition-all duration-500 hover:-translate-y-2 flex flex-col min-h-[420px] shadow-[0_14px_36px_rgba(255,113,81,0.07)] hover:shadow-[0_20px_46px_rgba(255,113,81,0.16)] ${
                  isVisible ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="h-44 sm:h-52 overflow-hidden relative shrink-0 bg-[#FFF5F2] dark:bg-black/20">
                  {data.image ? (
                    project.title === "Engremaq-Web" ||
                    project.title === "ANS Healthcare Analytics" ? (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={data.image}
                          alt={project.title}
                          className="w-full h-full relative z-0 object-cover object-top scale-[1.0]"
                        />
                      </div>
                    ) : (
                      <img
                        src={data.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top relative z-0"
                      />
                    )
                  ) : (
                    <div className="w-full h-full bg-[#FFF5F2] dark:bg-card/30 flex items-center justify-center relative z-0">
                      <Folder className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground/50" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/5 to-transparent dark:from-black/30 dark:via-transparent dark:to-transparent z-10 pointer-events-none" />

                  {/* Ongoing project indicator badge */}
                  {!project.caseStudy && (
                    <div className="absolute top-3.5 right-3.5 z-30">
                      <Badge className="bg-[#FFF5F2]/90 dark:bg-[#08070b]/90 text-primary border border-[#FFEAE5] dark:border-white/10 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm select-none hover:bg-[#FFF5F2]/95 dark:hover:bg-[#08070b]/95">
                        Ongoing
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow relative z-20">
                  <h3 className="text-lg font-bold mb-1.5 text-slate-900 dark:text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-muted-foreground text-sm mb-3.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {project.description}
                  </p>


                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {data.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`px-3 py-1 rounded-full bg-[#FFF5F2] dark:bg-white/5 border border-[#FFEAE5] dark:border-white/10 text-slate-600 dark:text-muted-foreground text-[10px] sm:text-xs font-medium hover:bg-primary/10 hover:border-primary/40 hover:text-primary dark:hover:bg-primary/20 dark:hover:border-primary/50 dark:hover:text-primary transition-all duration-300 cursor-default hover:shadow-[0_0_12px_rgba(255,113,81,0.25)] hover:-translate-y-0.5 ${
                          isVisible
                            ? "animate-fade-in opacity-100"
                            : "opacity-0"
                        }`}
                        style={{
                          animationDelay: `${index * 0.05 + tagIndex * 0.03}s`,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FFEAE5] dark:via-white/10 to-transparent mb-4" />

                  <div className="flex gap-3 pt-2 mt-auto">
                    {project.caseStudy ? (
                      <Button
                        onClick={() => setActiveProjectIndex(index)}
                        className="flex-1 rounded-xl bg-primary text-white border border-primary/20 hover:bg-primary/90 hover:text-white hover:border-primary hover:shadow-[0_12px_30px_rgba(255,113,81,0.28)] transition-all duration-300 gap-2 h-10 text-sm font-medium"
                      >
                        <FileText size={16} />
                        Case Study
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="flex-1 rounded-xl bg-[#FFF5F2]/50 dark:bg-white/5 text-slate-400 dark:text-slate-500 border border-[#FFEAE5] dark:border-white/5 cursor-not-allowed gap-2 h-10 text-sm font-medium opacity-75"
                      >
                        <FileText size={16} className="opacity-60" />
                        In Progress
                      </Button>
                    )}

                    <a
                      href={data.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 group/btn"
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-xl border-[#FFEAE5] dark:border-white/10 bg-white dark:bg-transparent text-foreground dark:text-white shadow-sm hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300 gap-2 h-10 text-sm font-medium"
                      >
                        <Github
                          size={16}
                          className="opacity-90 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:-translate-y-[1px]"
                        />
                        {t.projects.codeBtn}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog
        open={activeProjectIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveProjectIndex(null);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white/90 dark:bg-[#08070b]/90 backdrop-blur-xl border-[#FFEAE5] dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-100">
          {activeProject && activeProject.caseStudy && (
            <>
              <DialogHeader className="text-left border-b border-[#FFEAE5] dark:border-white/10 pb-4 mb-4">
                <DialogTitle className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl flex items-center gap-2">
                  <span>{activeProject.title}</span>
                </DialogTitle>
                <DialogDescription className="text-sm text-primary font-medium tracking-wide uppercase mt-1">
                  Case Study
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Metadata Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[#FFEAE5] dark:border-white/10 pb-5 text-slate-600 dark:text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#FFF5F2] dark:bg-white/5 border border-[#FFEAE5] dark:border-white/10 shrink-0">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/75 leading-none">Role</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-1">{activeProject.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:border-x border-[#FFEAE5] dark:border-white/10 sm:px-4">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#FFF5F2] dark:bg-white/5 border border-[#FFEAE5] dark:border-white/10 shrink-0">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/75 leading-none">Duration</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-1">{activeProject.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:pl-4">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#FFF5F2] dark:bg-white/5 border border-[#FFEAE5] dark:border-white/10 shrink-0">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/75 leading-none">Team</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-1">{activeProject.team}</span>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                    Overview
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {activeProject.caseStudy.overview}
                  </p>
                </div>

                {/* The Challenge */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                    The Challenge
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {activeProject.caseStudy.challenge}
                  </p>
                </div>

                {/* My Contributions */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                    My Contributions
                  </h4>
                  <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1.5 leading-relaxed">
                    {activeProject.caseStudy.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                {/* Technical Highlights */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">
                    Technical Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.caseStudy.highlights.map((highlight, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-3 py-1 rounded-full bg-[#FFF5F2] dark:bg-white/5 border border-[#FFEAE5] dark:border-white/10 text-slate-600 dark:text-muted-foreground text-xs font-medium cursor-default"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact & Results */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                    Impact & Results
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {activeProject.caseStudy.impact}
                  </p>
                </div>

                {/* Lessons Learned */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                    Lessons Learned
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {activeProject.caseStudy.lessons}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-[#FFEAE5] dark:border-white/10 mt-8">
                {activeProjectData && activeProjectData.github && (
                  <a
                    href={activeProjectData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 group/btn"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-[#FFEAE5] dark:border-white/10 bg-white dark:bg-transparent text-foreground dark:text-white shadow-sm hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300 gap-2 h-10 text-sm font-medium"
                    >
                      <Github size={16} className="opacity-90 group-hover/btn:-translate-y-[1px]" />
                      GitHub
                    </Button>
                  </a>
                )}

                {activeProjectData && activeProjectData.live && (
                  <a
                    href={activeProjectData.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 group/btn"
                  >
                    <Button className="w-full rounded-xl bg-primary text-white border border-primary/20 hover:bg-primary/90 hover:text-white hover:border-primary hover:shadow-[0_12px_30px_rgba(255,113,81,0.28)] transition-all duration-300 gap-2 h-10 text-sm font-medium">
                      <ExternalLink size={16} className="opacity-90 group-hover/btn:-translate-y-[1px] group-hover/btn:translate-x-[1px]" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
