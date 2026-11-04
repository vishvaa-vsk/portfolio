import { memo } from "react";
import { Mail, Linkedin, Github, Terminal as TerminalIcon, ArrowUp, MapPin } from "lucide-react";
import { t } from "@/locales/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-10 border-t border-[var(--border-primary)] bg-transparent overflow-hidden px-4 sm:px-6">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-x-12 lg:gap-x-24 gap-y-10 mb-10 items-start">
          <div className="w-full md:w-auto group relative overflow-hidden flex items-center gap-4 p-4 md:p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] shadow-[var(--shadow-card)] backdrop-blur-md transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:border-primary/40 md:min-w-[480px]">
            <div className="relative z-10 flex items-center gap-4">
              <div
                className="
                  flex items-center justify-center w-12 h-12 rounded-xl
                  bg-[var(--accent-primary)]/10
                  border border-[var(--accent-primary)]/25
                  transition-all duration-500
                "
              >
                <TerminalIcon className="h-6 w-6 text-primary transition-colors duration-500" />
              </div>

              <div>
                <p className="font-bold text-lg text-[var(--text-primary)]">
                  Vishvaa K
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {t.footer.role}
                </p>
                <a
                  href="https://github.com/Vishvaa-K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-medium uppercase tracking-wider text-primary hover:text-primary/80 transition-colors group/link"
                >
                  <Github className="h-3 w-3 transition-transform group-hover/link:scale-110" />
                  {t.footer.sourceCode}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--text-muted)]">
              {t.footer.contactTitle}
            </h4>

            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${t.contact.email}`}>
                {t.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Chennai, India</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--text-muted)]">
              {t.footer.navTitle}
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-[var(--text-secondary)] hover:text-primary transition-all duration-300 w-fit"
              >
                {t.nav.about}
              </a>
              <a
                href="#experience"
                className="text-sm text-[var(--text-secondary)] hover:text-primary transition-all duration-300 w-fit"
              >
                {t.nav.experience}
              </a>
              <a
                href="#stack"
                className="text-sm text-[var(--text-secondary)] hover:text-primary transition-all duration-300 w-fit"
              >
                {t.nav.tech}
              </a>
              <a
                href="#projects"
                className="text-sm text-[var(--text-secondary)] hover:text-primary transition-all duration-300 w-fit"
              >
                {t.nav.projects}
              </a>
              <a
                href="#beyond"
                className="text-sm text-[var(--text-secondary)] hover:text-primary transition-all duration-300 w-fit"
              >
                {t.nav.beyond}
              </a>
              <a
                href="#recognition"
                className="text-sm text-[var(--text-secondary)] hover:text-primary transition-all duration-300 w-fit"
              >
                {t.nav.recognition}
              </a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--text-muted)]">
              {t.footer.socialTitle}
            </h4>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${t.contact.email}`}
                className="p-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-primary/40 hover:text-primary hover:bg-[var(--bg-elevated)] transition-all duration-300 shadow-sm hover-shake"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href={t.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-primary/40 hover:text-primary hover:bg-[var(--bg-elevated)] transition-all duration-300 shadow-sm hover-shake"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href={t.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-primary/40 hover:text-primary hover:bg-[var(--bg-elevated)] transition-all duration-300 shadow-sm hover-shake"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-primary)] flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs font-medium text-[var(--text-primary)]">
              © {currentYear} Vishvaa K - {t.footer.role}.{" "}
              {t.footer.rights}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] max-w-2xl leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] hover:text-primary transition-all duration-300"
            >
              <div className="p-1.5 rounded-full border border-[var(--border-primary)] group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
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

export default memo(Footer);
