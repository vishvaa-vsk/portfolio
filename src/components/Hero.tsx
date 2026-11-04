import { useState, useEffect, useMemo, memo, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { t } from "@/locales/content";
import { useIsMobile } from "@/hooks/use-mobile";

const SystemArchitectureVisual = lazy(() => import("./SystemArchitectureVisual"));

/* ─── Typewriter ─────────────────────────────────────────────────────────────── */
const TypewriterLoop = memo(({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const typeSpeed = 60;
    const deleteSpeed = 40;
    const pauseTime = 2000;

    const targetText = texts[currentTextIndex] || "";

    if (!isDeleting && displayedText === targetText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      const nextDelay = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        setDisplayedText(
          targetText.substring(0, displayedText.length + (isDeleting ? -1 : 1)),
        );
      }, nextDelay);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  return (
    <>
      {displayedText}
      <span className="inline-block w-[3px] h-[1em] bg-[#E69A63] ml-1 animate-pulse" />
    </>
  );
});

TypewriterLoop.displayName = "TypewriterLoop";

/* ─── Hero ───────────────────────────────────────────────────────────────────── */
const Hero = () => {
  const isMobile = useIsMobile();

  const links = useMemo(
    () => ({
      curriculo: "/Vishvaa_K_Resume.pdf",
      github: t.contact.github,
      linkedin: t.contact.linkedin,
      email: `mailto:${t.contact.email}`,
    }),
    [],
  );

  const socials = useMemo(
    () => [
      { icon: Github, href: links.github, label: "GitHub" },
      { icon: Linkedin, href: links.linkedin, label: "LinkedIn" },
      { icon: Mail, href: links.email, label: "Email" },
    ],
    [links],
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 bg-transparent">
      <div className="container relative z-10 pt-24 sm:pt-32 md:pt-36 lg:pt-20 pb-20 md:pb-12 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full mt-6 md:mt-0">
          {/* ── LEFT COLUMN (Text & Actions) ── */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* System Status Dynamic Pill */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--status-success)]/10 border border-[var(--status-success)]/30 text-[var(--status-success)] text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-up w-fit shadow-[0_0_12px_var(--glow-secondary)]"
              style={{ animationDelay: "0.02s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--status-success)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--status-success)]" />
              </span>
              <span>Available for Backend / AI Roles</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 animate-fade-up text-foreground"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-normal text-[var(--text-muted)] block mb-2 sm:mb-3">
                Hello, I'm
              </span>
              <span className="text-gradient">Vishvaa K</span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-primary)] mb-4 animate-fade-up min-h-[1.75em] sm:min-h-[2em] flex items-center justify-center lg:justify-start"
              style={{ animationDelay: "0.1s" }}
            >
              <TypewriterLoop texts={t.hero.roles} />
            </p>

            <p
              className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mb-8 sm:mb-10 animate-fade-up mx-auto lg:mx-0 px-2 sm:px-0 leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              {t.hero.description}
            </p>

            <div
              className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up mx-auto lg:mx-0 w-full sm:w-auto justify-center lg:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              {/* PRIMARY RESUME BUTTON */}
              <a
                href={links.curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-0"
              >
                <Button
                  size="lg"
                  className="bg-[var(--accent-primary)] text-[var(--bg-primary)] font-semibold hover:bg-[var(--accent-hover)] active:scale-95 transition-all duration-300 group shadow-[var(--shadow-glow)] border border-[var(--accent-primary)]/30 w-full sm:w-auto text-base py-6 sm:py-4 rounded-xl"
                >
                  <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  {t.hero.resumeBtn}
                </Button>
              </a>

              {/* SOCIAL BUTTONS */}
              <div className="flex gap-4 sm:gap-3 mt-4 sm:mt-0">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      p-4 sm:p-3 rounded-xl sm:rounded-lg
                      bg-[var(--bg-secondary)] dark:bg-[var(--bg-tertiary)]
                      border border-[var(--border-primary)]
                      text-[var(--text-secondary)]
                      transition-all duration-300
                      hover:bg-[var(--bg-tertiary)] dark:hover:bg-[var(--bg-elevated)]
                      hover:text-[var(--accent-primary)]
                      hover:border-[var(--accent-primary)]/40
                      hover:shadow-[0_0_12px_var(--glow-primary)]
                      hover-shake
                      shadow-sm
                      active:scale-95
                    "
                  >
                    <social.icon className="h-6 w-6 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Interactive Backend Architecture Mesh (Desktop only) ── */}
          {!isMobile && (
            <div
              className="hidden lg:block lg:col-span-6 w-full animate-fade-up relative mt-6 lg:mt-0"
              style={{ animationDelay: "0.25s" }}
            >
              <Suspense fallback={null}>
                <SystemArchitectureVisual />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
