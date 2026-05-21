export interface GitHubContribution {
  date: string; // "YYYY-MM-DD"
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubApiResponse {
  contributions: GitHubContribution[];
  total: Record<string, number>;
}
