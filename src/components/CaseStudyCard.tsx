"use client";

import Link from "next/link";
import { CaseStudy } from "@/content/case-studies";
import { trackCaseStudyView } from "@/lib/analytics";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const handleClick = () => {
    trackCaseStudyView(caseStudy.slug, caseStudy.title);
  };

  return (
    <article className="case-study-card">
      <div className="card-meta">
        <span className="card-number">
          {index !== undefined ? String(index + 1).padStart(2, "0") : ""}
        </span>
        <span className="card-sector">{caseStudy.sector}</span>
      </div>

      <h3 className="card-title">
        <Link
          href={`/work/${caseStudy.slug}`}
          onClick={handleClick}
          className="card-title-link"
        >
          {caseStudy.title}
        </Link>
      </h3>

      <p className="card-role">
        <strong>Role:</strong> {caseStudy.role}
      </p>

      <p className="card-summary">{caseStudy.summary}</p>

      <div className="card-methods" aria-label="Methods used">
        {caseStudy.methods.slice(0, 4).map((method) => (
          <span key={method} className="method-pill">
            {method}
          </span>
        ))}
      </div>

      <div className="card-footer">
        <Link
          href={`/work/${caseStudy.slug}`}
          onClick={handleClick}
          className="card-cta-link"
        >
          Read case study &rarr;
        </Link>
        {caseStudy.liveUrl && (
          <a
            href={caseStudy.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-live-link"
          >
            Live product: {caseStudy.liveLabel || caseStudy.title} &nearr;
          </a>
        )}
      </div>
    </article>
  );
}
