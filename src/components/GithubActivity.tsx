import { useMemo } from "react";
import { useReveal } from "../hooks/useReveal";
import { useGithubContributions } from "../hooks/useGithubContributions";
import { profile } from "../data/profile";
import "./GithubActivity.css";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function buildWeeks(days: { date: string; count: number; level: number }[]) {
  if (days.length === 0) return [];
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));

  // Pad the front so the first column starts on a Sunday.
  const firstDate = new Date(sorted[0].date);
  const leadingEmpty = firstDate.getDay();
  const padded = [
    ...Array.from({ length: leadingEmpty }, () => null),
    ...sorted,
  ];

  const weeks: (typeof sorted[number] | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

export default function GithubActivity() {
  const ref = useReveal<HTMLElement>();
  const { days, total, loading, error } = useGithubContributions(profile.githubUsername);
  const weeks = useMemo(() => buildWeeks(days), [days]);

  // Pick a month label roughly once per ~4 weeks for a clean top row.
  const monthTicks = useMemo(() => {
    const ticks: { index: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const firstReal = week.find((d) => d !== null);
      if (!firstReal) return;
      const m = new Date(firstReal.date).getMonth();
      if (m !== lastMonth) {
        ticks.push({ index: i, label: MONTH_LABELS[m] });
        lastMonth = m;
      }
    });
    return ticks;
  }, [weeks]);

  return (
    <section id="github" className="reveal" ref={ref}>
      <span className="lineno">05</span>
      <div className="section-head">
        <div>
          <div className="eyebrow">Activity</div>
          <h2>GitHub Activity</h2>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-handle"
        >
          @{profile.githubUsername} ↗
        </a>
      </div>

      {loading && <p className="gh-status">Loading contribution graph…</p>}
      {error && (
        <p className="gh-status">
          Couldn't load live data right now — check back shortly, or view the
          graph directly on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      )}

      {!loading && !error && weeks.length > 0 && (
        <div className="gh-graph-wrap">
          <div className="gh-graph">
            <div className="gh-months">
              {monthTicks.map((t) => (
                <span key={`${t.label}-${t.index}`} style={{ gridColumnStart: t.index + 1 }}>
                  {t.label}
                </span>
              ))}
            </div>
            <div
              className="gh-grid"
              style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}
            >
              {weeks.map((week, wi) => (
                <div className="gh-week" key={wi}>
                  {week.map((day, di) =>
                    day ? (
                      <span
                        key={day.date}
                        className={`gh-day level-${day.level}`}
                        title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                      />
                    ) : (
                      <span key={`empty-${wi}-${di}`} className="gh-day empty" />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="gh-footer-row">
            <span>{total.toLocaleString()} contributions in the last year</span>
            <span className="gh-legend">
              Less
              <i className="level-0" />
              <i className="level-1" />
              <i className="level-2" />
              <i className="level-3" />
              <i className="level-4" />
              More
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
