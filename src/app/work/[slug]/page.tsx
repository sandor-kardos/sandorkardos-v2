import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/content/case-studies";
import JsonLd from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.slug === slug);

  if (!cs) {
    return {
      title: "Case Study Not Found"
    };
  }

  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
      type: "article",
      url: `https://sandorkardos.com/work/${cs.slug}`,
      images: [
        {
          url: "/images/portrait.webp",
          width: 1200,
          height: 627,
          alt: cs.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: cs.metaTitle,
      description: cs.metaDescription
    }
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="container">
      <JsonLd
        type="CreativeWork"
        name={cs.title}
        description={cs.metaDescription}
        url={`https://sandorkardos.com/work/${cs.slug}`}
        keywords={cs.methods}
      />

      <article className="case-study-detail">
        <header className="case-study-hero">
          <div className="cs-eyebrow">
            <Link href="/work" className="cs-back-link">
              &larr; Back to all case studies
            </Link>
            <span className="separator" aria-hidden="true">/</span>
            <span>{cs.sector}</span>
          </div>

          <h1 className="cs-title">{cs.title}</h1>
          <p className="cs-headline">{cs.heroHeadline}</p>

          <div className="cs-stats-grid">
            <div className="cs-stat-item">
              <span className="cs-stat-value">{cs.role}</span>
              <span className="cs-stat-label">My Role</span>
            </div>
            <div className="cs-stat-item">
              <span className="cs-stat-value">{cs.timeline}</span>
              <span className="cs-stat-label">Timeline</span>
            </div>
            {cs.stats.map((stat) => (
              <div key={stat.label} className="cs-stat-item">
                <span className="cs-stat-value">{stat.value}</span>
                <span className="cs-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {cs.liveUrl && (
            <div className="cs-live-action" style={{ marginTop: "1.25rem" }}>
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit live project: {cs.liveLabel || cs.title} &nearr;
              </a>
            </div>
          )}
        </header>

        <div className="cs-body">
          {/* Context & Problem */}
          <section className="cs-section">
            <h2 className="cs-section-title">Context & Problem Framing</h2>
            <p className="cs-paragraph">{cs.context}</p>
            <p className="cs-paragraph">{cs.problem}</p>
          </section>

          {/* User Research & Discovery */}
          <section className="cs-section">
            <h2 className="cs-section-title">{cs.research.heading}</h2>
            <p className="cs-paragraph">{cs.research.description}</p>
            <ul className="cs-list">
              {cs.research.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </section>

          {/* Service Blueprint */}
          <section className="cs-section">
            <h2 className="cs-section-title">Service Blueprint: Frontstage & Backstage</h2>
            <div className="blueprint-box">
              <div>
                <h3 className="blueprint-lane-title">Frontstage Touchpoints (User Facing)</h3>
                <ul className="cs-list">
                  {cs.serviceBlueprint.frontstage.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="blueprint-lane-title">Backstage Operations (Systems & Logistics)</h3>
                <ul className="cs-list">
                  {cs.serviceBlueprint.backstage.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="blueprint-lane-title">Governance & Ethical Framework</h3>
                <p className="cs-paragraph" style={{ fontSize: "0.95rem" }}>
                  {cs.serviceBlueprint.governance}
                </p>
              </div>
            </div>
          </section>

          {/* Information Architecture */}
          <section className="cs-section">
            <h2 className="cs-section-title">{cs.architecture.heading}</h2>
            <p className="cs-paragraph">{cs.architecture.description}</p>
            <ul className="cs-list">
              {cs.architecture.decisions.map((dec, i) => (
                <li key={i}>{dec}</li>
              ))}
            </ul>
          </section>

          {/* Usability Testing */}
          <section className="cs-section">
            <h2 className="cs-section-title">Usability Testing & Evidence-based Iterations</h2>
            <p className="cs-paragraph">
              <strong>Tested With:</strong> {cs.usabilityTesting.testedWith}
            </p>
            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                Key Testing Findings
              </h3>
              <ul className="cs-list">
                {cs.usabilityTesting.keyFindings.map((finding, i) => (
                  <li key={i}>{finding}</li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                Iterations Implemented
              </h3>
              <ul className="cs-list">
                {cs.usabilityTesting.iterationsMade.map((iter, i) => (
                  <li key={i}>{iter}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Outcomes & Reflection */}
          <section className="cs-section">
            <h2 className="cs-section-title">Outcomes & Critical Reflection</h2>
            <ul className="cs-list">
              {cs.outcomes.metrics.map((metric, i) => (
                <li key={i}>
                  <strong>Impact:</strong> {metric}
                </li>
              ))}
            </ul>
            <p className="cs-paragraph" style={{ marginTop: "0.5rem" }}>
              <strong>Reflection:</strong> {cs.outcomes.reflection}
            </p>
            <p className="cs-paragraph">
              <strong>What I Would Do Next:</strong> {cs.outcomes.nextSteps}
            </p>
          </section>

          {/* Navigation to other studies */}
          <section className="cs-section" style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/work" className="btn btn-secondary">
                &larr; View all case studies
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Discuss this case study &rarr;
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
