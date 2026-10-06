
import { useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiGooglegemini,
  SiLangchain,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPrisma,
  SiClerk,
  SiPostman,
  SiFastapi,
  SiHuggingface,
  SiDocker,
  SiNginx,
  SiRedux,
  SiHtml5,
} from "react-icons/si";
import { FaJava, FaAws, FaCss3Alt } from "react-icons/fa6";
import {
  LuZap,
  LuSearch,
  LuWorkflow,
  LuMessageSquareText,
  LuDatabase,
  LuShieldCheck,
  LuPlug,
} from "react-icons/lu";
import { useReveal } from "../hooks/useReveal";
import { skills } from "../data/profile";
import type { SkillCategory } from "../types";
import "./Skills.css";

const iconMap: Record<string, IconType> = {
  // Languages
  python: SiPython,
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  sql: LuDatabase,

  // AI / ML
  rag: LuWorkflow,
  langchain: SiLangchain,
  langgraph: LuWorkflow,
  gemini: SiGooglegemini,
  groq: LuZap,
  huggingface: SiHuggingface,
  semantic: LuSearch,
  prompt: LuMessageSquareText,

  // Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  vite: SiVite,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  redux: SiRedux,
  html: SiHtml5,
  css: FaCss3Alt,

  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  fastapi: SiFastapi,
  rest: LuPlug,
  jwt: LuShieldCheck,
  prisma: SiPrisma,
  clerk: SiClerk,

  // Databases
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  pgvector: SiPostgresql,
  pinecone: LuDatabase,

  // DevOps & Tools
  aws: FaAws,
  docker: SiDocker,
  nginx: SiNginx,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
};

// Brand colors
const colorMap: Record<string, string> = {
  python: "#3776ab",
  java: "#e76f00",
  javascript: "#f7df1e",
  typescript: "#3178c6",
  sql: "#4479a1",

  rag: "#34d399",
  langchain: "#2bb3a3",
  langgraph: "#2bb3a3",
  gemini: "#8e75f2",
  groq: "#f55036",
  huggingface: "#ffd21e",
  semantic: "#60a5fa",
  prompt: "#f472b6",

  react: "#61dafb",
  nextjs: "#ffffff",
  vite: "#bd34fe",
  tailwind: "#38bdf8",
  shadcn: "#ffffff",
  redux: "#764abc",
  html: "#e34f26",
  css: "#1572b6",

  nodejs: "#5fa04e",
  express: "#ffffff",
  fastapi: "#009688",
  rest: "#fbbf24",
  jwt: "#d63aff",
  prisma: "#ffffff",
  clerk: "#6c47ff",

  mongodb: "#47a248",
  postgresql: "#4169e1",
  supabase: "#3ecf8e",
  pgvector: "#7aa2f7",
  pinecone: "#4ade80",

  aws: "#ff9900",
  docker: "#2496ed",
  nginx: "#009639",
  git: "#f05032",
  github: "#ffffff",
  postman: "#ff6c37",
};

// Tabs without the All button
const TABS: { key: SkillCategory; label: string }[] = [
  { key: "Languages", label: "Languages" },
  { key: "AI / ML", label: "AI / ML" },
  { key: "Frontend", label: "Frontend" },
  { key: "Backend", label: "Backend" },
  { key: "Databases", label: "Databases" },
  { key: "DevOps & Tools", label: "DevOps & Tools" },
];

export default function Skills() {
  const ref = useReveal<HTMLElement>();

  // Languages selected by default
  const [tab, setTab] = useState<SkillCategory>("Languages");

  // Filter skills by selected category
  const filtered = useMemo(
    () => skills.filter((s) => s.category === tab),
    [tab],
  );

  return (
    <section id="skills" className="reveal" ref={ref}>
      <span className="lineno">04</span>

      <div className="section-head">
        <div>
          <div className="eyebrow">Skills</div>
          <h2>Tech Stack</h2>
        </div>

        <span className="hint">( select a tab to filter )</span>
      </div>

      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={tab === t.key ? "tab active" : "tab"}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="skill-chip-grid">
        {filtered.map((skill) => {
          const Icon = iconMap[skill.icon];
          const color = colorMap[skill.icon];

          return (
            <div className="skill-chip" key={skill.name}>
              {Icon && (
                <Icon
                  className="skill-icon"
                  style={{ color }}
                />
              )}
              {skill.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}

