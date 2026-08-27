export interface Project {
  slug: string;
  name: string;
  year: string;
  tag: string;
  status: "Live" | "In Progress" | "Archived";
  featured: boolean;
  description: string;
  engineeringDetails: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Path under /public, e.g. "/projects/forge.png". Drop your real screenshot here. */
  image: string;
}

export interface SkillItem {
  name: string;
  icon: string; // key into the iconMap in Skills.tsx
  category: SkillCategory;
}

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps & Tools";

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
