import { useState, useEffect, useMemo, memo, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { t } from "@/locales/content";
import StarBackground from "./StarBackground";

// Code Splitting: Spline is a heavy library, we isolate the loading to not block the initial page load.
const SplineScene = lazy(() => import("./SplineScene"));

/* ─── Typewriter ─────────────────────────────────────────────────────────────── */
// Memoized to prevent the entire Hero component from re-rendering on every typed character.
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
      <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
    </>
  );
});

TypewriterLoop.displayName = "TypewriterLoop";

/* ─── Hero ───────────────────────────────────────────────────────────────────── */
const Hero = () => {

  const links = useMemo(
    () => ({
      curriculo:
        "/Vishvaa_K_Resume.pdf",
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
      {/* Background limpo - Apenas as estrelas globais aparecerão aqui */}

      <div className="container relative z-10 pt-24 sm:pt-32 md:pt-40 lg:pt-20 pb-24 md:pb-12 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-center w-full mt-8 md:mt-0">
          {/* ── COLUNA ESQUERDA (Textos) ── */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1
              className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 animate-fade-up text-foreground"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-normal text-slate-500 dark:text-slate-300 block mb-2 sm:mb-3">
                Hello, I'm
              </span>
              <span className="text-gradient">Vishvaa K</span>
            </h1>

            <p
              className="text-xl sm:text-2xl md:text-2xl font-medium text-foreground mb-4 animate-fade-up min-h-[1.75em] sm:min-h-[2em] flex items-center justify-center md:justify-start"
              style={{ animationDelay: "0.1s" }}
            >
              <TypewriterLoop texts={t.hero.roles} />
            </p>

            <p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-10 animate-fade-up mx-auto md:mx-0 px-2 sm:px-0"
              style={{ animationDelay: "0.2s" }}
            >
              {t.hero.description}
            </p>

            <div
              className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up mx-auto md:mx-0 w-full sm:w-auto justify-center md:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              {/* BOTÃO PRINCIPAL */}
              <a
                href={links.curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-0"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 hover:brightness-110 active:scale-95 transition-all duration-300 group shadow-lg shadow-primary/25 w-full sm:w-auto text-base py-6 sm:py-4 rounded-xl"
                >
                  <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  {t.hero.resumeBtn}
                </Button>
              </a>

              {/* BOTÕES SOCIAIS */}
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
                      bg-black/5 dark:bg-background/50
                      border border-black/10 dark:border-white/10
                      text-foreground
                      transition-all duration-300
                      hover:bg-slate-900 hover:text-primary hover:border-slate-800 hover:shadow-md
                      dark:hover:bg-white dark:hover:text-primary dark:hover:border-white
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

          {/* ── COLUNA DIREITA: Spline 3D — Robô interativo ── */}
          <div
            className="hidden md:flex items-center justify-center animate-fade-up relative"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              {/* Suspense com placeholder de baixo custo para evitar Layout Shift */}
              <Suspense
                fallback={
                  <div className="w-full aspect-square max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[32.5rem] bg-primary/5 rounded-3xl animate-pulse" />
                }
              >
                <SplineScene />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
