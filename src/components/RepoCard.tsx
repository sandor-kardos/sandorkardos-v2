import { GitHubRepo } from "@/lib/github";

interface RepoCardProps {
  repo: GitHubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  const formattedDate = new Date(repo.updated_at).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric"
  });

  return (
    <article className="repo-card">
      <div className="repo-header">
        <h3 className="repo-title">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            {repo.name}
            <span className="external-arrow" aria-hidden="true">↗</span>
          </a>
        </h3>
        {repo.language && <span className="repo-language">{repo.language}</span>}
      </div>

      <p className="repo-description">{repo.description || "Public prototype repository."}</p>

      <div className="repo-footer">
        <span className="repo-updated">Updated {formattedDate}</span>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-github-btn"
          aria-label={`View ${repo.name} repository on GitHub`}
        >
          View on GitHub &rarr;
        </a>
      </div>
    </article>
  );
}
