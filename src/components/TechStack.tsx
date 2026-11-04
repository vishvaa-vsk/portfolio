import { memo, useMemo } from "react";
import { Layout, Server, Database, Cpu, Brain, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const skillsData = useMemo(
    () => [
      {
        title: "Backend Engineering",
        iconComp: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-[#E69A63]" />,
        skills: [
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          },
          {
            name: "FastAPI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
          },
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            invertInDarkMode: true,
          },
          {
            name: "Flask",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
            invertInDarkMode: true,
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          },
          {
            name: "REST APIs",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg",
          },
          {
            name: "Ruff",
            icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/ruff/default.svg"
          }

        ],
      },
      {
        title: "AI & GenAI",
        iconComp: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-[#83C4CC]" />,
        skills: [
          {
            name: "LangChain",
            icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain-color.png",
          },
          {
            name: "Azure OpenAI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
          },
          {
            name: "Gemini API",
            icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gemini/default.svg",
          },
          {
            name: "Langfuse",
            icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/langfuse/default.svg"
          },
          {
            name: "LangSmith",
            icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langsmith-color.png",
          },
          {
            name: "Prompt Engineering",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
          },
          {
            name: "RAG",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
          },
        ],
      },
      {
        title: "Databases & Storage",
        iconComp: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-[#91A6BA]" />,
        skills: [
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          },
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
          },
          {
            name: "Alembic",
            icon: "https://avatars.githubusercontent.com/u/17894987?s=200&v=4",
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        iconComp: <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-[#83B89A]" />,
        skills: [
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          },
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws.svg",
          },
          {
            name: "Linux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
          },
          {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          },
          {
            name: "GitHub Actions",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
          },
          {
            name: "CI/CD",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            invertInDarkMode: true,
          },
          {
            name: "Terraform",
            icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/terraform/default.svg"
          }
        ],
      },
      {
        title: "Frontend",
        iconComp: <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-[#F5F2EC]" />,
        skills: [
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          },
          {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            invertInDarkMode: true,
          },
          {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          },
          {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            name: "Vite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
          },
        ],
      },
    ],
    []
  );

  const firstRow = useMemo(() => skillsData.slice(0, 3), [skillsData]);
  const secondRow = useMemo(() => skillsData.slice(3, 5), [skillsData]);

  const categoryIconStyles = [
    "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/25 text-[var(--accent-primary)] shadow-[var(--shadow-glow)]",
    "bg-[var(--accent-teal)]/10 border-[var(--accent-teal)]/25 text-[var(--accent-teal)] shadow-sm",
    "bg-[var(--status-info)]/10 border-[var(--status-info)]/25 text-[var(--status-info)] shadow-sm",
    "bg-[var(--status-success)]/10 border-[var(--status-success)]/25 text-[var(--status-success)] shadow-sm",
    "bg-[var(--text-primary)]/10 border-[var(--text-primary)]/20 text-[var(--text-primary)] shadow-sm",
  ];

  const renderCard = (category: typeof skillsData[0], categoryIndex: number) => (
    <div
      key={categoryIndex}
      className={`group p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-tertiary)] backdrop-blur-md hover:border-primary/40 dark:hover:border-[var(--border-hover)] hover:bg-[var(--bg-elevated)] transition-all duration-500 ease-out shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${categoryIndex * 50}ms` }}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-6">
        <div className={`p-2 sm:p-3 rounded-lg border ${categoryIconStyles[categoryIndex] || categoryIconStyles[0]} transition-all duration-300 shrink-0`}>
          {category.iconComp}
        </div>

        <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors leading-tight">
          {t.tech.categories[categoryIndex]}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skill.name}
            className={`group/skill flex items-center gap-2 rounded-full border border-[var(--border-primary)] bg-[var(--bg-elevated)] px-3 py-2 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm active:scale-95 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{
              transitionDelay: `${categoryIndex * 50 + skillIndex * 20}ms`,
            }}
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className={`h-4 w-4 object-contain flex-shrink-0 ${skill.invertInDarkMode
                ? "dark:invert dark:opacity-90"
                : ""
                }`}
              loading="lazy"
              decoding="async"
            />
            <p className="text-xs font-semibold text-[var(--text-secondary)] group-hover/skill:text-primary transition-colors duration-300 whitespace-nowrap">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="stack"
      className="relative py-12 sm:py-14 md:py-16 bg-transparent overflow-hidden px-4 sm:px-6"
    >
      <div
        ref={ref}
        className={`container relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 ml-1">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 shadow-[var(--shadow-glow)]">
            <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>

          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-semibold block mb-1">
              {t.tech.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.tech.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1: 3 Cards on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstRow.map((category, index) => renderCard(category, index))}
          </div>

          {/* Row 2: 2 Centered Cards on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-[calc(66.666%-8px)] lg:mx-auto">
            {secondRow.map((category, index) => renderCard(category, index + 3))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TechStack);
