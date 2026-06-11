import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { TerminalIcon } from "./ui/TerminalIcon";
import { t } from "@/locales/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="relative py-10 border-t border-[#FFEAE5] dark:border-white/10 bg-transparent overflow-hidden px-4 sm:px-6">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-x-12 lg:gap-x-24 gap-y-10 mb-10 items-start">
          <div className="w-full md:w-auto group relative overflow-hidden flex items-center gap-4 p-4 md:p-6 rounded-2xl bg-white/95 dark:bg-[#08070b]/90 border border-[#FFEAE5] dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_30px_rgba(255,113,81,0.15)] dark:hover:border-primary/30 md:min-w-[480px]">
            <div className="relative z-10 flex items-center gap-4">
              <div
                className="
                  flex items-center justify-center w-12 h-12 rounded-xl
                  bg-gradient-to-br from-primary/15 to-[#FFEAE5] dark:from-primary/10 dark:to-transparent
                  border border-primary/20
                  transition-all duration-500
                "
              >
                <TerminalIcon className="h-6 w-6 text-primary transition-colors duration-500" />
              </div>

              <div>
                <p className="font-bold text-lg text-slate-900 dark:text-foreground">
                  Vishvaa K
                </p>
                <p className="text-sm text-slate-500 dark:text-muted-foreground">
                  {t.footer.role}
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-medium uppercase tracking-wider text-primary/70 hover:text-primary transition-colors group/link"
                >
                  <Github className="h-3 w-3 transition-transform group-hover/link:scale-110" />
                  {t.footer.sourceCode}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
              {t.footer.contactTitle}
            </h4>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${t.contact.email}`}>
                {t.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Chennai, India</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
              {t.footer.navTitle}
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-slate-500 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,113,81,0.5)] w-fit"
              >
                {t.nav.about}
              </a>
              <a
                href="#experience"
                className="text-sm text-slate-500 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,113,81,0.5)] w-fit"
              >
                {t.nav.experience}
              </a>
              <a
                href="#stack"
                className="text-sm text-slate-500 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,113,81,0.5)] w-fit"
              >
                {t.nav.tech}
              </a>
              <a
                href="#projects"
                className="text-sm text-slate-500 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,113,81,0.5)] w-fit"
              >
                {t.nav.projects}
              </a>
              <a
                href="#beyond"
                className="text-sm text-slate-500 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,113,81,0.5)] w-fit"
              >
                {t.nav.beyond}
              </a>
              <a
                href="#recognition"
                className="text-sm text-slate-500 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,113,81,0.5)] w-fit"
              >
                {t.nav.recognition}
              </a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
              {t.footer.socialTitle}
            </h4>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${t.contact.email}`}
                className="p-2.5 rounded-xl bg-black/5 border border-black/10 text-foreground hover:bg-slate-900 hover:text-primary hover:border-slate-800 dark:bg-card/30 dark:border-white/10 dark:text-muted-foreground dark:hover:bg-white dark:hover:text-primary dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md hover-shake"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href={t.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 border border-black/10 text-foreground hover:bg-slate-900 hover:text-primary hover:border-slate-800 dark:bg-card/30 dark:border-white/10 dark:text-muted-foreground dark:hover:bg-white dark:hover:text-primary dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md hover-shake"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href={t.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 border border-black/10 text-foreground hover:bg-slate-900 hover:text-primary hover:border-slate-800 dark:bg-card/30 dark:border-white/10 dark:text-muted-foreground dark:hover:bg-white dark:hover:text-primary dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md hover-shake"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FFEAE5] dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-900 dark:text-foreground">
              © {currentYear} Vishvaa K - {t.footer.role}.{" "}
              {t.footer.rights}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-muted-foreground/60 max-w-2xl leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-[10px] font-bold text-slate-500 dark:text-muted-foreground/80 uppercase tracking-[0.2em] hover:text-primary transition-all duration-300"
            >
              <div className="p-1.5 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </div>
              {t.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
