export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
  topics?: string[];
}

// Presentable repositories to feature in the prototyping sandbox
const PRESENTABLE_REPOS = new Set([
  "mindhaven",
  "mesenet_hu",
  "MVPs",
  "Flour_Finder",
  "CosmoX",
  "Ai-Cv-Chatbot",
  "Antigravity-IDE-Fix"
]);

// Curated contextual descriptions for clarity in design prototyping
const CURATED_DESCRIPTIONS: Record<string, string> = {
  mindhaven: "Production website repository for an Edinburgh counselling practice, built with TypeScript and clean trust architecture.",
  mesenet_hu: "Mobile-first Hungarian bedtime story utility designed for low-light evening reading and rapid AI generation.",
  MVPs: "Collection of rapid service prototypes and proof-of-concept interface experiments exploring prompt-driven development.",
  Flour_Finder: "Mobile-first artisan flour recommendation utility for home bakers in Edinburgh. Lightweight, accessible single-file interface.",
  CosmoX: "Comparative multi-system synthesis interface testing how users digest disparate diagnostic personality models.",
  "Ai-Cv-Chatbot": "Prototyping experiment exploring bounded LLM retrieval for CV and portfolio queries.",
  "Antigravity-IDE-Fix": "Practical shell utility restoring custom workspace settings and agent control in classic IDE environments."
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 881001,
    name: "mindhaven",
    description: CURATED_DESCRIPTIONS["mindhaven"],
    html_url: "https://github.com/sandor-kardos/mindhaven",
    language: "TypeScript",
    updated_at: "2025-11-20T14:30:00Z",
    stargazers_count: 2,
    fork: false
  },
  {
    id: 881002,
    name: "mesenet_hu",
    description: CURATED_DESCRIPTIONS["mesenet_hu"],
    html_url: "https://github.com/sandor-kardos/mesenet_hu",
    language: "JavaScript",
    updated_at: "2025-10-18T09:15:00Z",
    stargazers_count: 3,
    fork: false
  },
  {
    id: 881003,
    name: "MVPs",
    description: CURATED_DESCRIPTIONS["MVPs"],
    html_url: "https://github.com/sandor-kardos/MVPs",
    language: "TypeScript",
    updated_at: "2025-09-24T16:00:00Z",
    stargazers_count: 4,
    fork: false
  },
  {
    id: 881004,
    name: "Flour_Finder",
    description: CURATED_DESCRIPTIONS["Flour_Finder"],
    html_url: "https://github.com/sandor-kardos/Flour_Finder",
    language: "HTML",
    updated_at: "2025-08-11T11:45:00Z",
    stargazers_count: 2,
    fork: false
  },
  {
    id: 881005,
    name: "CosmoX",
    description: CURATED_DESCRIPTIONS["CosmoX"],
    html_url: "https://github.com/sandor-kardos/CosmoX",
    language: "TypeScript",
    updated_at: "2025-07-30T10:20:00Z",
    stargazers_count: 1,
    fork: false
  },
  {
    id: 881006,
    name: "Ai-Cv-Chatbot",
    description: CURATED_DESCRIPTIONS["Ai-Cv-Chatbot"],
    html_url: "https://github.com/sandor-kardos/Ai-Cv-Chatbot",
    language: "PHP",
    updated_at: "2025-06-15T18:00:00Z",
    stargazers_count: 2,
    fork: false
  }
];

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "sandor-kardos-portfolio-build"
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Server-side fetch with Next.js ISR (hourly revalidation)
    // Never run from client-side useEffect
    const res = await fetch(
      "https://api.github.com/users/sandor-kardos/repos?sort=updated&per_page=40",
      {
        headers,
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) {
      console.warn(
        `GitHub API returned status ${res.status}. Falling back to static cached repositories.`
      );
      return FALLBACK_REPOS;
    }

    interface RawRepo {
      id: number;
      name: string;
      description: string | null;
      html_url: string;
      language: string | null;
      updated_at: string;
      stargazers_count: number;
      fork: boolean;
    }

    const repos: RawRepo[] = await res.json();
    if (!Array.isArray(repos)) {
      return FALLBACK_REPOS;
    }

    const filtered = repos
      .filter((repo) => !repo.fork && PRESENTABLE_REPOS.has(repo.name))
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: CURATED_DESCRIPTIONS[repo.name] || repo.description || "Public prototype repository.",
        html_url: repo.html_url,
        language: repo.language,
        updated_at: repo.updated_at,
        stargazers_count: repo.stargazers_count,
        fork: repo.fork
      }));

    return filtered.length > 0 ? filtered : FALLBACK_REPOS;
  } catch (error) {
    console.error("Build-time GitHub fetch error:", error);
    return FALLBACK_REPOS;
  }
}
