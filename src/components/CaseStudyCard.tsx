"use client";

import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/content/case-studies";
import { trackCaseStudyView } from "@/lib/analytics";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
  showImage?: boolean;
}

export default function CaseStudyCard({ caseStudy, index, showImage = true }: CaseStudyCardProps) {
  const handleClick = () => {
    trackCaseStudyView(caseStudy.slug, caseStudy.title);
  };

  return (
    <article className="case-study-card-bento" id={`case-study-${caseStudy.slug}`}>
      <div className="cs-card-meta-row">
        <span className="cs-sector-badge">{caseStudy.sector}</span>
        <span className="cs-timeline-pill">
          {caseStudy.timeline || (index !== undefined ? `Project 0${index + 1}` : "Production")}
        </span>
      </div>

      <h3 className="cs-card-title">
        <Link
          href={`/work/${caseStudy.slug}`}
          onClick={handleClick}
          className="card-title-link"
        >
          {caseStudy.title}
        </Link>
      </h3>

      <p className="cs-card-headline">{caseStudy.heroHeadline || caseStudy.summary}</p>

      {/* High-Resolution Production Mockup */}
      {showImage && caseStudy.image && (
        <Link
          href={`/work/${caseStudy.slug}`}
          onClick={handleClick}
          className="card-image-link"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="card-image-wrapper">
            <Image
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              width={1200}
              height={675}
              className="card-preview-image"
              sizes="(max-width: 768px) 100vw, 980px"
            />
          </div>
        </Link>
      )}

      <div className="card-tags" aria-label="Methods used">
        {caseStudy.methods.slice(0, 5).map((method) => (
          <span key={method} className="card-tag">
            {method}
          </span>
        ))}
      </div>

      <div className="cs-links-footer">
        <Link
          href={`/work/${caseStudy.slug}`}
          onClick={handleClick}
          className="btn btn-primary"
        >
          Read full case study &rarr;
        </Link>
        {caseStudy.liveUrl && (
          <a
            href={caseStudy.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-live-link"
          >
            Visit live site: {caseStudy.liveLabel || caseStudy.title} ↗
          </a>
        )}
      </div>
    </article>
  );
}
