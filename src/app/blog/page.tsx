import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Design Notes & Reflections",
  description:
    "Short, scannable reflections on service design, user research, and AI prototyping by Sándor Kardos."
};

export default function BlogPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Design Notes</h1>
        <p className="page-subtitle">
          Short, scannable observations on service design, user research methodologies, and ethical prototyping.
        </p>
      </header>

      <section className="blog-list" aria-label="Design Articles">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="blog-card">
            <div className="blog-meta">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                })}
              </time>
              <span className="separator" aria-hidden="true">/</span>
              <span>{post.readingTime}</span>
            </div>

            <h2 className="blog-title">
              <Link href={`/blog/${post.slug}`} className="blog-title-link">
                {post.title}
              </Link>
            </h2>

            <p className="blog-summary">{post.summary}</p>

            <div>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--link-color)",
                  textDecoration: "none"
                }}
              >
                Read note &rarr;
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
