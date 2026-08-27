import { useEffect, useState } from "react";
import type { ContributionDay } from "../types";

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

interface State {
  days: ContributionDay[];
  total: number;
  loading: boolean;
  error: string | null;
}

/**
 * Pulls real contribution-graph data for a GitHub username using the free,
 * CORS-enabled jogruber API (no auth/token required, wraps GitHub's own graph).
 * https://github.com/jogruber/github-contributions-api
 */
export function useGithubContributions(username: string) {
  const [state, setState] = useState<State>({
    days: [],
    total: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const json: ContributionsResponse = await res.json();
        if (cancelled) return;

        const totalKey = Object.keys(json.total)[0];
        setState({
          days: json.contributions,
          total: totalKey ? json.total[totalKey] : 0,
          loading: false,
          error: null,
        });
      } catch (err) {
        if (cancelled) return;
        setState({
          days: [],
          total: 0,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load",
        });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
