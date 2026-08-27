import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon, ExternalIcon } from "./icons";
import "./Hero.css";

export default function Hero() {
  const links = [
    { label: "Mail", icon: <MailIcon />, href: `mailto:${profile.email}`, external: false },
    { label: "GitHub", icon: <GitHubIcon />, href: profile.github, external: true },
    { label: "LinkedIn", icon: <LinkedInIcon />, href: profile.linkedin, external: true },
    { label: "Resume", icon: <ResumeIcon />, href: profile.resume, external: true },
  ];

  return (
    <section id="top" className="hero" style={{ borderTop: "none" }}>
      <span className="lineno" style={{ top: 125 }}>
        01
      </span>
      <div className="status">
        <span className="dot" /> available for opportunities
      </div>
      <h1 className="name">
        Ejaz Ahmad
        <br />
        Chand
        <span className="cursor">&nbsp;</span>
      </h1>
      <p className="role">{profile.tagline}</p>

      <div className="hero-links">
        {links.map((link) => (
          <a
            key={link.label}
            className="hero-icon-btn"
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <span className="hib-icon">{link.icon}</span>
            {link.label}
            <ExternalIcon />
          </a>
        ))}
      </div>
    </section>
  );
}
