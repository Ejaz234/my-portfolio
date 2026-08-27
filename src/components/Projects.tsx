import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/profile";
import type { Project } from "../types";
import "./Projects.css";

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="project-card">
      <div className="project-thumb">
        <div className="thumb-bar">
          <span className="dot-group">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="thumb-body">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            onError={(e) => {
              // Falls back to a clean placeholder until a real screenshot is added.
              (e.currentTarget as HTMLImageElement).style.display = "none";
              e.currentTarget.parentElement?.classList.add("thumb-empty");
            }}
          />
          <div className="thumb-placeholder">
            <span>Add screenshot</span>
            <code>{project.image}</code>
          </div>
        </div>
        <div className="thumb-badges">
          <span className="badge badge-live">
            <i /> {project.status}
          </span>
          {project.featured && <span className="badge badge-featured">Featured</span>}
        </div>
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <span className="project-year">{project.year}</span>
        </div>
        <p className="project-desc">{project.description}</p>

        <button className="details-toggle" onClick={() => setOpen((v) => !v)}>
          Show engineering details
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={open ? "chevron open" : "chevron"}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <ul className="details-list">
            {project.engineeringDetails.map((d) => (
              <li key={d.slice(0, 16)}>{d}</li>
            ))}
          </ul>
        )}

        <div className="project-footer">
          <div className="project-stack">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Source code">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="work" className="reveal" ref={ref}>
      <span className="lineno">03</span>
      <div className="section-head">
        <div>
          <div className="eyebrow">Selected Work</div>
          <h2>Things I've built</h2>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </section>
  );
}
