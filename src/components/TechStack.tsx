import { memo, useMemo } from "react";
import { Layout, Server, Database, Cpu, Brain, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/locales/content";
import {
  Python,
  FastapiIcon,
  NodejsIcon,
  Java,
  OpenapiIcon,
  Langchain,
  MicrosoftAzure,
  GoogleGeminiIcon,
  Postgresql,
  MysqlIcon,
  MongodbIcon,
  SqliteIcon,
  RedisIcon,
  DockerIcon,
  LinuxTux,
  GitIcon,
  GithubActions,
  GithubIcon,
  TerraformIcon,
  _React as ReactDevicon,
  TypescriptIcon,
  Javascript,
  TailwindIcon,
  Vite,
} from "@dev.icons/react";
import { SiExpress, SiFlask, SiNextdotjs, SiRuff } from "react-icons/si";

/* -------------------------------------------------------------------------- */
/* Custom High-Fidelity SVGs matching theme & reference                      */
/* -------------------------------------------------------------------------- */

const AwsIcon = () => (
  <svg viewBox="0 0 600 600" className="w-full h-full" fill="currentColor">
    <path
      fill="#FFFFFF"
      d="M169 251q.1 11 2.3 17.7 2.3 6.6 6.4 14.3 1.4 2.4 1.4 4.6 0 3-3.8 6l-12.6 8.4a10 10 0 0 1-5.2 1.8q-3 0-6-2.8-4.2-4.6-7.2-9.4-3-5-6.1-11.8a74 74 0 0 1-58.7 27.6 55 55 0 0 1-40-14.4 51 51 0 0 1-14.7-38.3q0-25.5 18.2-41.1Q61 198 91.9 198q10 0 21.1 1.6 11 1.6 23 4.4v-14.6q0-22.6-9.4-31.9-9.6-9.2-32.5-9.2-10.5 0-21.6 2.6-11.1 2.7-21.5 6.8a57 57 0 0 1-10.2 3.2q-4.2 0-4.2-6.2V145q0-4.7 1.4-7a15 15 0 0 1 5.6-4.1q10.5-5.4 25.1-9a121 121 0 0 1 31.1-3.8q35.6 0 52.3 16.2 16.5 16.1 16.6 49V251zm-81 30.2q10 0 20.6-3.6a45 45 0 0 0 19-12.7q4.9-5.6 6.8-12.8t2-17.4v-8.3a167 167 0 0 0-37.2-4.6q-19.9 0-29.7 8t-9.8 23q0 14 7.4 21 7.2 7.4 21 7.4m160.3 21.6q-5.3 0-7.6-2-2.4-2-4.2-7.8l-46.9-154.2a35 35 0 0 1-1.8-8q0-4.9 4.8-5h19.6q5.7 0 7.8 2 2.3 2 4 7.8l33.5 132 31.1-132q1.4-6 3.8-7.8 2.5-1.9 8-2h16q5.5 0 8 2t3.7 7.8l31.6 133.7 34.5-133.7q1.9-6 4-7.8a13 13 0 0 1 7.8-2h18.5q4.9 0 5 5 0 1.4-.4 3.2-.2 1.8-1.4 5l-48 154.2q-2 6-4.3 7.8-2.4 1.9-7.6 2h-17.1q-5.7 0-8-2-2.5-2-3.8-8l-31-128.7-30.7 128.5q-1.5 6-3.7 8-2.5 2-8 2zm256.4 5.4a132 132 0 0 1-53.6-11.6q-4.9-2.8-6.2-5.6a14 14 0 0 1-1.2-5.6v-10.1q0-6.2 4.6-6.2 1.8 0 3.6.6l5 2a109 109 0 0 0 45.6 9.3q19 0 29.2-6.5a22 22 0 0 0 10.4-19q0-8.3-5.4-14a50 50 0 0 0-20.2-10.3l-29-9a61 61 0 0 1-31.9-20.4 47.5 47.5 0 0 1 9.8-67.4q8.9-6.8 20.8-10.4a100 100 0 0 1 38.5-2.6q6.8 1 13 2.2 6 1.4 11.3 3.2t8.4 3.6q4.2 2.3 6 5 1.8 2.4 1.8 6.6v9.3q0 6.3-4.6 6.4-2.5 0-7.6-2.4a91 91 0 0 0-38.3-7.8 52 52 0 0 0-26.5 5.6q-9.4 5.6-9.4 17.8 0 8.4 6 14.2 6 5.6 22 11l28.3 9a61 61 0 0 1 30.9 19 45 45 0 0 1 9.2 28q0 13-5.2 23.2a54 54 0 0 1-14.6 17.5q-9.2 7.4-22.1 11.2-13.4 4.2-28.6 4.2"
    />
    <path
      fill="#FF9900"
      d="M542.5 405.2c-65.7 48.5-161 74.2-243.1 74.2-115 0-218.5-42.5-296.7-113.1-6.2-5.6-.6-13.2 6.7-8.8 84.7 49 189 78.8 297 78.8 72.8 0 152.8-15.2 226.5-46.3 11-5 20.3 7.2 9.6 15.2m27.3-31.2c-8.4-10.7-55.5-5.2-76.8-2.6-6.4.8-7.4-4.7-1.6-9 37.5-26.3 99.1-18.7 106.3-10 7.2 9-2 70.7-37 100.3-5.5 4.5-10.7 2.2-8.3-3.8 8-19.8 25.8-64.3 17.4-74.9"
    />
  </svg>
);

const LangfuseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
    <path
      d="M7 6.5C4.5 6.5 2.5 8.5 2.5 11s2 4.5 4.5 4.5h3.5c1.1 0 2-.9 2-2s-.9-2-2-2H7c-.8 0-1.5-.7-1.5-1.5S6.2 8.5 7 8.5h3.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H7z"
      fill="#E11D48"
    />
    <path
      d="M17 17.5c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5h-3.5c-1.1 0-2 .9-2 2s.9 2 2 2H17c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H17z"
      fill="#3B82F6"
    />
  </svg>
);

const LangsmithIcon = () => (
  <svg viewBox="0 0 600 600" className="w-full h-full" fill="currentColor">
    <path
      fill="#2DD4BF"
      d="M352.3 380.2c-1.7 2.7-6.7 2.9-11 .4q-3.2-1.9-4.8-5-1.2-2.8 0-4.8 1.4-2.1 4.8-2.1 3 0 6.1 1.8c4.3 2.5 6.5 7 4.9 9.7M600 300c0 82.7-68.4 150-152.5 150h-295C68.4 450 0 382.7 0 300s68.4-150 152.5-150h295c84.1 0 152.5 67.3 152.5 150m-306.1 75.3c2.4-3-8.7-11-11-14-4.6-4.9-4.6-12-7.8-17.7a203 203 0 0 0-28.6-49.3c-12.9-16-28.8-29.4-42.8-44.4-10.5-10.6-13.2-25.5-22.4-36.9-12.7-18.3-52.7-23.4-58.6 2.6q.1 1.1-1 1.8a39 39 0 0 0-8.5 8.2c-6 8.2-6.9 22 .5 29.3.3-3.9.4-7.5 3.5-10.3 5.8 4.9 14.4 6.6 21 3 14.8 20.6 11.1 49.1 22.8 71.4 3.2 5.2 6.4 10.6 10.6 15.2 3.3 5.1 14.9 11.2 15.6 16 .1 8-.9 17 4.6 23.8 2.5 5.1-3.8 10.3-8.8 9.6-6.6 1-14.7-4.3-20.4-1.1-2 2.2-6-.2-7.8 2.8-.6 1.6-4 3.8-2 5.3 2.2-1.7 4.3-3.4 7.2-2.4-.4 2.4 1.4 2.7 3 3.4-.1 1.5-1 3.2.2 4.5 1.5-1.4 2.3-3.5 4.6-4 7.7 10 15.5-10.2 32-1.1-3.3-.1-6.3.3-8.6 3-.5.6-1 1.3 0 2.1 9-5.7 8.9 2 14.7-.4 4.4-2.3 8.9-5.1 14.2-4.3-5.2 1.4-5.4 5.5-8.4 9q-.9.6-.2 2c10.8-1 11.6-4.4 20.3-8.7 6.4-4 12.8 5.5 18.4.1 1.3-1.1 3-.7 4.5-.9-2-10.2-23.4 1.9-23.1-11.8 6.9-4.7 5.3-13.5 5.8-20.7 8 4.4 16.8 6.9 24.5 11 4 6.3 10.1 14.5 18.4 14l.6-1.8c2.5.4 5.7 2 7-1.1 3.8 3.9 9.2 3.6 14 2.7 3.7-3-6.7-7-8-10m111.3-48.4-16.4-21.7c-14.2 16-23.7 23.8-23.9 24-.1 0-9.2 8.8-17.4 16.2s-14.6 13.1-17.9 19.5a19 19 0 0 0 0 14.6q3.1 7.5 12.8 10.6 3 .9 5.5.8c11.6 0 19.2-11.4 19.3-11.4 0-.2 9.9-14 21.9-31.5 4-5.8 8.5-12 16-21.1m76.7 49.9a13 13 0 0 0-3.3-8.7l-2-2.2-56-62.3a942 942 0 0 1-33.9-40.7l-2-4.2v-7.4a20 20 0 0 0-1.6-7.9l-4.4-10.2v-.4l.1-1.5.3-.6a52 52 0 0 1 35.7-11.7c2.6.1 3-1.2 3-1.8.4-2.9-6.2-6.2-12.3-7.4-8.4-1.7-30.8-6.2-48.6 5.3l-.2.1c-11.6 9.5-20.8 16.8-21 16.9l-.1.2a12 12 0 0 0-2.7 8.9c.5 3.2-1.1 4.3-1.2 4.4-.1 0-2.4 1.5-4.8-.2-2.8-2-7.8 1.5-8.8 2.4l-7.6 6.3-.1.2c-.1.1-3.4 3.8 1 9.8a93 93 0 0 0 17.8 20.2s3.7 2.8 8.7-1c4-3 7.3-5.9 7.3-5.9.3-.2 2.7-2 2.8-5v-2c-.1-2-.1-2.7 1.4-3.6.8 0 3 .8 5 1.7q4.3 2.4 9.3 2.6c2.8.4 5.8 3.5 6.9 4.7 0 .1 9.4 9.8 22.5 26.6l14.2 18.6 17.4 23.3 31.1 41.6q3.2 4.1 8.3 5.1l2.2.4a13 13 0 0 0 12.8-4.5v-.1q2.8-3.6 2.8-8zm10.5-142.4-2.6-2.5a4 4 0 0 0-5.7.2l-16.3 19q-.8 1-1.9 1l-5.8.6a3 3 0 0 1-2-.7l-9.3-7.7a3 3 0 0 1-1-2l-.2-4.6q0-1 .7-1.8l15.9-18.8a4 4 0 0 0 0-5l-1.6-1.8a4 4 0 0 0-4.3-1 188 188 0 0 0-20.1 8.6c-9.7 5.2-16.4 13.3-17.6 21.3a125 125 0 0 0-.2 20.7q.2 3-1.3 6-1.9 3.5-6.8 10.3c-1.7 2.3-2.8 3.1-4.2 4.8l18 20.8c4.3-5 8-8.7 11.3-12.4 6-6.5 8-6.6 13-6.8 3-.1 7.3-.2 14-1.9 18.4-4.5 24.2-24 24.5-24.9l4.5-17.7a4 4 0 0 0-1-3.7m-282.1 124c-2 7.5-2.7 20.4-12.7 20.8-.8 4.4 3 6 6.6 4.6 3.6-1.6 5.2 1.3 6.4 4.1 5.5.8 13.5-1.8 13.8-8.1-8.1-4.6-10.6-13.4-14.2-21.5"
    />
  </svg>
);

const AlembicIcon = () => (
  <span className="flex items-center justify-center w-4 h-4 rounded-[3px] bg-white shadow-sm p-0.5 shrink-0">
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
      <path
        d="M10 2h4M12 2v6l-5 8.5A3.5 3.5 0 0010 21h4a3.5 3.5 0 003-4.5L12 8"
        stroke="#16A34A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16" r="1.5" fill="#16A34A" />
    </svg>
  </span>
);

const PromptIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-full h-full text-slate-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m7 10 3 2-3 2" />
    <path d="M13 14h4" />
  </svg>
);

const RagIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
    <path
      d="M3 11a9 9 0 0 1 18 0"
      stroke="#F59E0B"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M21 13a9 9 0 0 1-18 0"
      stroke="#00BFB3"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
  </svg>
);

const NextjsMark = () => (
  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-black text-white border border-white/20 shrink-0">
    <SiNextdotjs size={13} className="text-white" />
  </span>
);

const RuffMark = () => (
  <span className="flex items-center justify-center w-4 h-4 rounded-[3px] bg-[#D4F72C] text-black shrink-0 p-0.5">
    <SiRuff size={12} className="text-black" />
  </span>
);

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const skillsData = useMemo(
    () => [
      {
        title: "Backend Engineering",
        iconComp: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
        skills: [
          { name: "Python", icon: Python },
          { name: "FastAPI", icon: FastapiIcon },
          { name: "Node.js", icon: NodejsIcon },
          { name: "Express.js", icon: SiExpress },
          { name: "Flask", icon: SiFlask },
          { name: "Java", icon: Java },
          { name: "REST APIs", icon: OpenapiIcon },
          { name: "Ruff", icon: RuffMark },
        ],
      },
      {
        title: "AI & GenAI",
        iconComp: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
        skills: [
          { name: "LangChain", icon: Langchain },
          { name: "Azure OpenAI", icon: MicrosoftAzure },
          { name: "Gemini API", icon: GoogleGeminiIcon },
          { name: "Langfuse", icon: LangfuseIcon },
          { name: "LangSmith", icon: LangsmithIcon },
          { name: "Prompt Engineering", icon: PromptIcon },
          { name: "RAG", icon: RagIcon },
        ],
      },
      {
        title: "Databases & Storage",
        iconComp: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
        skills: [
          { name: "PostgreSQL", icon: Postgresql },
          { name: "MySQL", icon: MysqlIcon },
          { name: "MongoDB", icon: MongodbIcon },
          { name: "SQLite", icon: SqliteIcon },
          { name: "Redis", icon: RedisIcon },
          { name: "Alembic", icon: AlembicIcon },
        ],
      },
      {
        title: "Cloud & DevOps",
        iconComp: <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
        skills: [
          { name: "Docker", icon: DockerIcon },
          { name: "AWS", icon: AwsIcon },
          { name: "Linux", icon: LinuxTux },
          { name: "Git", icon: GitIcon },
          { name: "GitHub Actions", icon: GithubActions },
          { name: "CI/CD", icon: GithubIcon, invertInDark: true },
          { name: "Terraform", icon: TerraformIcon },
        ],
      },
      {
        title: "Frontend",
        iconComp: <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
        skills: [
          { name: "React.js", icon: ReactDevicon },
          { name: "Next.js", icon: NextjsMark },
          { name: "TypeScript", icon: TypescriptIcon },
          { name: "JavaScript", icon: Javascript },
          { name: "Tailwind CSS", icon: TailwindIcon },
          { name: "Vite", icon: Vite },
        ],
      },
    ],
    []
  );

  const firstRow = useMemo(() => skillsData.slice(0, 3), [skillsData]);
  const secondRow = useMemo(() => skillsData.slice(3, 5), [skillsData]);

  const renderCard = (category: typeof skillsData[0], categoryIndex: number) => (
    <div
      key={categoryIndex}
      className={`group p-5 sm:p-6 rounded-2xl border border-white/5 dark:border-white/[0.06] bg-[#0c111a]/85 dark:bg-[#0a0e17]/90 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 ease-out shadow-xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${categoryIndex * 50}ms` }}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-6">
        <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-primary/35 bg-primary/10 text-primary shadow-[0_0_15px_rgba(249,115,22,0.18)] transition-all duration-300 shrink-0 group-hover:border-primary/50 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]">
          {category.iconComp}
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-wide leading-tight">
          {t.tech.categories[categoryIndex]}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill, skillIndex) => {
          const IconComp = skill.icon;
          return (
            <div
              key={skill.name}
              className={`group/skill flex items-center gap-2.5 rounded-full border border-white/10 dark:border-white/[0.08] bg-[#121824]/90 dark:bg-white/[0.03] backdrop-blur-md px-3.5 py-1.5 sm:py-2 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_14px_rgba(249,115,22,0.22)] hover:-translate-y-0.5 active:scale-95 cursor-default ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 50 + skillIndex * 20}ms`,
              }}
            >
              <span
                className={`flex items-center justify-center shrink-0 w-5 h-5 transition-transform duration-300 group-hover/skill:scale-110 ${
                  (skill as { invertInDark?: boolean }).invertInDark
                    ? "dark:invert dark:brightness-125 dark:contrast-125 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]"
                    : ""
                }`}
              >
                <IconComp size={18} aria-hidden="true" />
              </span>
              <p className="text-xs sm:text-[13px] font-medium text-slate-200 group-hover/skill:text-white transition-colors duration-300 whitespace-nowrap tracking-normal">
                {skill.name}
              </p>
            </div>
          );
        })}
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
        className={`container relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 ml-1">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 shadow-[var(--shadow-glow)]">
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
