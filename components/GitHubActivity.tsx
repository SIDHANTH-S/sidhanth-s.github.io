"use client";

import React, { useEffect, useState } from "react";
import { GitHubApiResponse } from "@/types/github";
import GitHubContributionGraph from "./GitHubContributionGraph";

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubApiResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Public contributions API (works on static hosting)
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/SIDHANTH-S"
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const raw = await res.json();

        const formatted: GitHubApiResponse = {
          contributions: raw.contributions.map((c: any) => ({
            date: c.date,
            count: c.count,
            level:
              c.count === 0
                ? 0
                : c.count < 3
                ? 1
                : c.count < 6
                ? 2
                : c.count < 10
                ? 3
                : 4,
          })),
          total: {},
        };

        setData(formatted);
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err);
        setError(true);
      }
    }

    fetchGitHubData();
  }, []);

  return <GitHubContributionGraph data={data} error={error} />;
}