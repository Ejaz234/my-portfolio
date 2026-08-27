import { useReveal } from "../hooks/useReveal";
import { aboutBullets, devSnapshot, profile } from "../data/profile";
import "./About.css";

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
   <section id="about" className="reveal" ref={ref}>
  <span className="lineno" style={{ top: 112}}>02</span>

  <div className="section-head">
        <div>
          <div className="eyebrow">About</div>
          <h2>
            Fresh out of school,
            <br />
            not out of practice.
          </h2>
        </div>
        <div className="location-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          {profile.location}
        </div>
      </div>

      <div className="about-single">
        <ul className="about-bullets">
          {aboutBullets.map((b) => (
            <li key={b.slice(0, 12)}>{b}</li>
          ))}
        </ul>

        <div className="snapshot-box">
          <h3>Developer Snapshot</h3>
          <div className="snapshot-grid">
            {devSnapshot.map((item) => (
              <div className="snapshot-item" key={item}>
                <span className="bullet" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
