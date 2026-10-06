import type { Project, SkillCategory } from "../types";

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
   " Software Engineer building Generative AI systems (RAG pipelines, LLM integration, semantic search) and full-stack apps with Next.js and the MERN stack.",
};

export const aboutBullets = [
  "Hey, I'm Ejaz, a software engineer who builds Generative AI systems and full-stack apps, and turns rough ideas into products people can actually use.",
  "I build RAG pipelines end to end: LangChain, HuggingFace embeddings, Pinecone and pgvector, with LLMs like Gemini and Groq. My Medora assistant answers from a 637-page medical knowledge base, and scored 100% on my 30-question retrieval test.",
  "I also ship everything around the model: auth, schemas, Docker, and AWS deployment with Nginx. I don't ship half-finished demos. If it isn't maintainable, it isn't done, and I learn fastest when I'm chasing something I don't fully understand yet.",
];

export const devSnapshot = [
  "Building real products.",
  "Learning technologies.",
  "Shipping consistently.",
  "Obsessed with clean code.",
];

export const projects: Project[] = [

    {
    slug: "medora",
    name: "Medora",
    year: "2026",
    tag: "AI Medical Assistant",
    status: "Live",
    featured: true,
    description:
      "A full-stack AI Medical Assistant using Retrieval-Augmented Generation to deliver grounded, source-cited answers from a medical knowledge base.",
    engineeringDetails: [
      "Engineered a conversational RAG pipeline with query rewriting and semantic retrieval, indexing a 637-page medical corpus into 4,201 chunks with 384-dimensional HuggingFace embeddings stored in Pinecone.",
      "Achieved 100% retrieval accuracy (25/25 in-domain, 5/5 out-of-domain rejection) across 30 evaluation questions using a similarity-threshold filter.",
      "Integrated Groq LLM with LangChain to generate context-aware answers with source document and page references.",
      "Secured the app with Clerk authentication and per-user conversation ownership, with persistent history stored in Supabase PostgreSQL.",
      "Containerized the FastAPI backend with Docker and deployed to AWS EC2 via Amazon ECR, fronted by Nginx with HTTPS.",
    ],
    stack: ["React", "TypeScript", "FastAPI", "LangChain", "HuggingFace", "Pinecone", "Groq", "Docker"],
    liveUrl: "https://medora-brown.vercel.app/",
    githubUrl: "https://github.com/Ejaz234/Medora",
    image: "/projects/medora.png",
  },

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

export const skills = [
  // Languages
  { name: "Python", category: "Languages", icon: "python" },
  { name: "Java", category: "Languages", icon: "java" },
  { name: "JavaScript", category: "Languages", icon: "javascript" },
  { name: "TypeScript", category: "Languages", icon: "typescript" },
  { name: "SQL", category: "Languages", icon: "sql" },

  // AI / ML
  { name: "RAG", category: "AI / ML", icon: "rag" },
  { name: "LangChain", category: "AI / ML", icon: "langchain" },
  { name: "LangGraph", category: "AI / ML", icon: "langgraph" },
  { name: "Gemini API", category: "AI / ML", icon: "gemini" },
  { name: "Groq", category: "AI / ML", icon: "groq" },
  { name: "HuggingFace Embeddings", category: "AI / ML", icon: "huggingface" },
  { name: "Semantic Search", category: "AI / ML", icon: "semantic" },
  { name: "Prompt Engineering", category: "AI / ML", icon: "prompt" },

  // Frontend
  { name: "React.js", category: "Frontend", icon: "react" },
  { name: "Next.js", category: "Frontend", icon: "nextjs" },
  { name: "Vite", category: "Frontend", icon: "vite" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwind" },
  { name: "Shadcn UI", category: "Frontend", icon: "shadcn" },
  { name: "Redux", category: "Frontend", icon: "redux" },
  { name: "HTML5", category: "Frontend", icon: "html" },
  { name: "CSS3", category: "Frontend", icon: "css" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },
  { name: "FastAPI", category: "Backend", icon: "fastapi" },
  { name: "REST APIs", category: "Backend", icon: "rest" },
  { name: "JWT Auth", category: "Backend", icon: "jwt" },
  { name: "Prisma ORM", category: "Backend", icon: "prisma" },
  { name: "Clerk", category: "Backend", icon: "clerk" },

  // Databases
  { name: "MongoDB", category: "Databases", icon: "mongodb" },
  { name: "PostgreSQL", category: "Databases", icon: "postgresql" },
  { name: "Supabase", category: "Databases", icon: "supabase" },
  { name: "pgvector", category: "Databases", icon: "pgvector" },
  { name: "Pinecone", category: "Databases", icon: "pinecone" },

  // DevOps & Tools
  { name: "AWS (EC2, S3, ECR, IAM, VPC)", category: "DevOps & Tools", icon: "aws" },
  { name: "Docker", category: "DevOps & Tools", icon: "docker" },
  { name: "Nginx", category: "DevOps & Tools", icon: "nginx" },
  { name: "Git", category: "DevOps & Tools", icon: "git" },
  { name: "GitHub", category: "DevOps & Tools", icon: "github" },
  { name: "Postman", category: "DevOps & Tools", icon: "postman" },
] satisfies { name: string; category: SkillCategory; icon: string }[];
