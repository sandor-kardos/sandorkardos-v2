import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/content/blog-posts";
import JsonLd from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Note Not Found"
    };
  }

  return {
    title: `${post.title} | Sándor Kardos`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://sandorkardos.com/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      url: `https://sandorkardos.com/blog/${post.slug}`,
      images: [
        {
          url: "/images/portrait.webp",
          width: 1200,
          height: 627,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <JsonLd
        type="BreadcrumbList"
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.title, item: `/blog/${post.slug}` }
        ]}
      />
      <article className="blog-post-detail">
        <header className="case-study-hero">
          <div className="cs-eyebrow">
            <Link href="/blog" className="cs-back-link">
              &larr; Back to all notes
            </Link>
            <span className="separator" aria-hidden="true">/</span>
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

          <h1 className="cs-title" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.35rem)" }}>
            {post.title}
          </h1>
        </header>

        <div className="cs-body" style={{ maxWidth: "680px" }}>
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="cs-paragraph" style={{ fontSize: "1.08rem", lineHeight: 1.8 }}>
              {paragraph}
            </p>
          ))}

          <div style={{ marginTop: "3rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "2rem" }}>
            <Link href="/blog" className="btn btn-secondary">
              &larr; Back to all notes
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
