import { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUp, Folder, Briefcase, Mail, X,
  User, Cpu, Globe, Sun, Moon, Menu, Heart, Award,
} from "lucide-react";
import { TerminalIcon } from "./ui/TerminalIcon";
import { t } from "@/locales/content";
import { useTheme } from "@/contexts/theme-provider";

const MobileTopNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const menuGrid = [
    { id: "top",        icon: ArrowUp,   label: t.nav.home },
    { id: "about",      icon: User,      label: t.nav.about },
    { id: "experience", icon: Briefcase, label: t.nav.experience },
    { id: "stack",      icon: Cpu,       label: t.nav.tech },
    { id: "projects",   icon: Folder,    label: t.nav.projects },
    { id: "contact",    icon: Mail,      label: t.nav.contact },
    { id: "beyond",     icon: Heart,     label: t.nav.beyond },
    { id: "recognition", icon: Award,    label: t.nav.recognition },
  ];

  useEffect(() => {
    const sectionIds = ["about", "experience", "stack", "projects", "beyond", "recognition"];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 100) { setActiveSection("top"); return; }
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };
    if (isExpanded) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isExpanded]);

  const scrollTo = useCallback((id: string) => {
    setIsExpanded(false);
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    if (id === "contact") { window.open(`mailto:${t.contact.email}`, "_blank"); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return (
    <div
      ref={menuRef}
      className={`
        fixed top-0 left-0 right-0 z-50 md:hidden
        transition-all duration-300 px-4 pt-3 pb-2
        ${isScrolled
          ? "bg-white/75 dark:bg-background/80 backdrop-blur-xl border-b border-[#FFEAE5] dark:border-white/10 shadow-sm"
          : "bg-transparent"
        }
      `}
    >
      {/* ── BARRA PRINCIPAL ── */}
      <div className="flex items-center justify-between">
        {/* Logo + Nome */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo("top"); }}
          className="flex items-center gap-2 group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-primary/15 to-[#FFEAE5] dark:from-primary/10 dark:to-transparent border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
            <TerminalIcon className="h-4 w-4 text-primary" />
          </div>
          <span className="font-bold text-base tracking-tight text-slate-900 dark:text-foreground group-hover:text-primary transition-colors">
            Vishvaa K
          </span>
        </a>

        {/* Botão abrir/fechar */}
        <button
          onClick={() => setIsExpanded(v => !v)}
          className={`
            flex items-center justify-center w-9 h-9 rounded-xl
            border transition-all duration-200 active:scale-90
            ${isExpanded
              ? "bg-primary/10 border-primary/30 text-primary"
              : "border-[#FFEAE5] dark:border-white/10 bg-[#FFF5F2] dark:bg-white/5 text-slate-600 dark:text-white/60 hover:text-primary dark:hover:text-white/90"
            }
          `}
        >
          {isExpanded ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* ── MENU EXPANDIDO (dropdown para baixo) ── */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isExpanded ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div className="
          bg-white/95 dark:bg-[#0F0E15]/95 backdrop-blur-xl
          border border-[#FFEAE5] dark:border-white/10
          rounded-xl
          p-3
          shadow-[0_20px_60px_-15px_rgba(255,113,81,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        ">
          {/* Grid de navegação */}
          <div className="grid grid-cols-3 gap-1 mb-2">
            {menuGrid.map(({ id, icon: Icon, label }) => {
              const isActive = activeSection === id || (id === "top" && activeSection === "");
              const isSpecial = id === "beyond" || id === "recognition";
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`
                    flex items-center transition-all duration-200 active:scale-95 rounded-lg
                    ${isSpecial 
                      ? "col-span-3 flex-row justify-center gap-3 py-2.5 mt-1 border border-primary/15 bg-primary/[0.03] hover:bg-primary/5 hover:border-primary/30" 
                      : "flex-col gap-1.5 px-2 py-3"
                    }
                    ${isActive
                      ? "bg-primary/10 text-primary border-primary/30"
                      : isSpecial
                        ? "text-slate-600 dark:text-slate-300"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-slate-500 dark:text-slate-400"}`} />
                  <span className="text-[11px] font-medium leading-none">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Divisor */}
          <div className="h-px bg-[#FFEAE5] dark:bg-white/[0.07] my-3" />

          {/* Tema + Idioma */}
          <div className="flex gap-2">
            <button
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg border border-[#FFEAE5] dark:border-white/10 bg-[#FFF5F2] dark:bg-white/[0.03] text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/5 hover:border-primary/20 active:scale-95 transition-all duration-200 text-xs font-medium shadow-sm"
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-slate-400" /> : <Moon className="h-4 w-4 text-slate-500" />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MobileTopNav);
