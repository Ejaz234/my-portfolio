import type { Project, SkillItem } from "../types";

export const profile = {
  name: "Ejaz Ahmad Chand",
  initials: "EAC",
  role: "Software Engineer",
  location: "Delhi, India",
  email: "ejazahmad1802@gmail.com",
  phone: "+91-9319955656",
  github: "https://github.com/Ejaz234",
  githubUsername: "Ejaz234",
  linkedin: "https://linkedin.com/in/ejaz-ahmad34",
  resume: "/resume.pdf",
  tagline:
    "Software Engineer building full-stack applications with Next.js and the MERN stack, and AI-powered systems — RAG pipelines, LLM integration, vector search.",
};

export const aboutBullets = [
  "Hey, I'm Ejaz — a software engineer who likes taking a rough prompt or a messy codebase and turning it into something structured people can actually use.",
  "I split my time between full-stack apps and applied AI — RAG pipelines, LLM integration, vector search — and I'm just as comfortable in auth, schemas, and deployment as I am in the UI.",
  "I don't ship half-finished demos. If it's not maintainable, it's not done — and I build fastest when I'm chasing something I don't fully understand yet.",
];

export const devSnapshot = [
  "Building real products.",
  "Learning technologies.",
  "Shipping consistently.",
  "Obsessed with clean code.",
];

export const projects: Project[] = [
  {
    slug: "forge",
    name: "Forge",
    year: "2026",
    tag: "AI App Builder",
    status: "Live",
    featured: true,
    description:
      "Turns natural-language prompts into production-ready React applications, with iterative AI-driven improvements and a live in-browser preview.",
    engineeringDetails: [
      "Modeled relational data with Prisma ORM and Supabase to manage project history and subscriptions across 50+ user sessions.",
      "Reduced code preview and render time to under 2 seconds using a live preview environment built on Sandpack.",
      "Shipped a tiered, credit-based subscription system (Free, Starter, Pro) offering up to 150 AI generations/month with Arcjet-backed rate limiting.",
      "Added one-click ZIP export for generated projects.",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Gemini API", "Clerk"],
    liveUrl: "https://forge-xmll.vercel.app/",
    githubUrl: "https://github.com/Ejaz234",
    image: "/projects/forge.png",
  },
  {
    slug: "cortex",
    name: "Cortex",
    year: "2026",
    tag: "RAG",
    status: "Live",
    featured: true,
    description:
      "A full-stack RAG application that lets you connect any public GitHub repository and query its codebase in natural language.",
    engineeringDetails: [
      "Built an automated indexing pipeline that clones repositories, chunks source files, and generates vector embeddings — validated on repos with 100+ files.",
      "Implemented semantic search with PostgreSQL + pgvector, retrieving relevant code chunks in under 3 seconds.",
      "Integrated Gemini API with LangChain to power context-aware Q&A across 1,000+ lines of codebase context per query.",
      "Managed auth and workspace access with Clerk, supporting 3+ repository connections per account.",
    ],
    stack: ["React", "Vite", "Express", "PostgreSQL", "pgvector", "LangChain", "Gemini API"],
    liveUrl: "https://cortex-kappa-indol.vercel.app/",
    githubUrl: "https://github.com/Ejaz234",
    image: "/projects/cortex.png",
  },
  {
    slug: "notegenius-ai",
    name: "NoteGenius AI",
    year: "2026",
    tag: "MERN",
    status: "Live",
    featured: false,
    description:
      "A full-stack MERN app that generates structured, exam-ready notes — built to support 100+ concurrent users.",
    engineeringDetails: [
      "Automated content generation via the Gemini API, cutting note-creation time by ~70% versus manual writing.",
      "Set up JWT-based authentication with persistent session handling for 100+ concurrent users.",
      "Optimized REST APIs for note generation, storage, and retrieval — average response times under 300ms.",
      "Added PDF export and user history tracking to improve engagement and retention.",
    ],
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Gemini API"],
    liveUrl: "https://ai-notesclient.onrender.com",
    githubUrl: "https://github.com/Ejaz234",
    image: "/projects/notegenius.png",
  },
];

export const skills: SkillItem[] = [
  { name: "TypeScript", icon: "typescript", category: "Languages" },
  { name: "JavaScript", icon: "javascript", category: "Languages" },
  { name: "Java", icon: "java", category: "Languages" },
  { name: "Python", icon: "python", category: "Languages" },

  { name: "React", icon: "react", category: "Frontend" },
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "Vite", icon: "vite", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
  { name: "Shadcn UI", icon: "shadcn", category: "Frontend" },

  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "Express.js", icon: "express", category: "Backend" },
  { name: "Gemini API", icon: "gemini", category: "Backend" },
  { name: "LangChain", icon: "langchain", category: "Backend" },

  { name: "MySQL", icon: "mysql", category: "Databases" },
  { name: "MongoDB", icon: "mongodb", category: "Databases" },
  { name: "PostgreSQL", icon: "postgresql", category: "Databases" },
  { name: "Supabase", icon: "supabase", category: "Databases" },

  { name: "AWS", icon: "aws", category: "DevOps & Tools" },
  { name: "Git", icon: "git", category: "DevOps & Tools" },
  { name: "GitHub", icon: "github", category: "DevOps & Tools" },
  { name: "Prisma", icon: "prisma", category: "DevOps & Tools" },
  { name: "Clerk", icon: "clerk", category: "DevOps & Tools" },
  { name: "Postman", icon: "postman", category: "DevOps & Tools" },
];
