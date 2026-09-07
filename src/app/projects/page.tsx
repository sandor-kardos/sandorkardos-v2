import { Metadata } from "next";
import Link from "next/link";
import { getGitHubRepos } from "@/lib/github";
import RepoCard from "@/components/RepoCard";

export const metadata: Metadata = {
  title: "Prototyping Sandbox: Live GitHub Repositories",
  description:
    "Live GitHub repository showcase from Sándor Kardos. Public code prototypes and automation workflows pulled at build time."
};

// Next.js ISR: Revalidate every hour
export const revalidate = 3600;

export default async function ProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Prototyping Sandbox</h1>
        <p className="page-subtitle">
          I am transparent about using code as a prototyping and automation tool. These public repositories from{" "}
          <a
            href="https://github.com/sandor-kardos"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--link-color)", textDecoration: "underline" }}
          >
            github.com/sandor-kardos
          </a>{" "}
          are pulled at build time via Next.js ISR. They serve as a testing ground for API feasibility, multi-agent logic, and rapid service prototypes.
        </p>
      </header>

      <section className="repo-grid" aria-label="GitHub Repositories">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </section>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href="/work" className="btn btn-primary">
          View Selected Service Design Case Studies &rarr;
        </Link>
      </div>
    </div>
  );
}
