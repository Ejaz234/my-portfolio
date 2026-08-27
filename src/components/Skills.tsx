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
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPrisma,
  SiClerk,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { useReveal } from "../hooks/useReveal";
import { skills } from "../data/profile";
import type { SkillCategory } from "../types";
import "./Skills.css";

const iconMap: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  java: FaJava,
  python: SiPython,
  react: SiReact,
  nextjs: SiNextdotjs,
  vite: SiVite,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  nodejs: SiNodedotjs,
  express: SiExpress,
  gemini: SiGooglegemini,
  langchain: SiLangchain,
  mysql: SiMysql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  aws: FaAws,
  git: SiGit,
  github: SiGithub,
  prisma: SiPrisma,
  clerk: SiClerk,
  postman: SiPostman,
};

// Real brand colors so the tech stack reads as colorful, not monochrome.
const colorMap: Record<string, string> = {
  typescript: "#3178c6",
  javascript: "#f7df1e",
  java: "#e76f00",
  python: "#3776ab",
  react: "#61dafb",
  nextjs: "#ffffff",
  vite: "#bd34fe",
  tailwind: "#38bdf8",
  shadcn: "#ffffff",
  nodejs: "#5fa04e",
  express: "#ffffff",
  gemini: "#8e75f2",
  langchain: "#1c3c3c",
  mysql: "#4479a1",
  mongodb: "#47a248",
  postgresql: "#4169e1",
  supabase: "#3ecf8e",
  aws: "#ff9900",
  git: "#f05032",
  github: "#ffffff",
  prisma: "#ffffff",
  clerk: "#6c47ff",
  postman: "#ff6c37",
};

const TABS: { key: SkillCategory | "All"; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Languages", label: "Languages" },
  { key: "Frontend", label: "Frontend" },
  { key: "Backend", label: "Backend" },
  { key: "Databases", label: "Databases" },
  { key: "DevOps & Tools", label: "DevOps & Tools" },
];

export default function Skills() {
  const ref = useReveal<HTMLElement>();
  const [tab, setTab] = useState<SkillCategory | "All">("All");

  const filtered = useMemo(
    () => (tab === "All" ? skills : skills.filter((s) => s.category === tab)),
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
              {Icon && <Icon className="skill-icon" style={{ color }} />}
              {skill.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
