import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function HomePage() {
  // Only the 3 designated featured case studies: CloseCare, BereljUFOT.hu, Mindhaven
  const featuredCaseStudies = [
    CASE_STUDIES.find((cs) => cs.slug === "closecare")!,
    CASE_STUDIES.find((cs) => cs.slug === "bereljufot")!,
    CASE_STUDIES.find((cs) => cs.slug === "mindhaven")!
  ].filter(Boolean);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="portrait-wrapper">
          <Image
            src="/images/portrait.webp"
            alt="Sándor Kardos portrait"
            width={132}
            height={132}
            priority
            className="portrait-img"
          />
        </div>

        <div className="hero-text-block">
          <h1 id="hero-title" className="hero-headline">
            Product, UX & Service Designer
          </h1>
          <p className="hero-subtitle">
            Based in Edinburgh. 3rd year BSc Interaction Design student at Edinburgh Napier University.
          </p>
        </div>

        <p className="hero-paragraph">
          I design products and services by connecting frontstage user clarity with backstage operational reality. My focus is user research, journey mapping, and service blueprinting. Visual execution is openly supported by modern AI-assisted prototyping tools, allowing more time for deep inquiry and usability testing.
        </p>

        {/* CTA row: max 3 items */}
        <div className="cta-row" role="group" aria-label="Primary Actions">
          <a href="#featured-work" className="btn btn-primary">
            View Case Studies
          </a>
          <Link href="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
          <Link href="/contact?intent=project" className="btn-link-subtle">
            Open to project work &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Work: Exactly 3 case studies */}
      <section id="featured-work" className="section" aria-labelledby="work-title">
        <div className="section-header">
          <p className="section-eyebrow">Featured Work</p>
          <h2 id="work-title" className="section-title">
            Selected Service & Interaction Design
          </h2>
          <p className="section-description">
            Three core case studies exploring statutory trust, marketplace logistics, and ethical boundaries.
          </p>
        </div>

        <div className="case-study-list">
          {featuredCaseStudies.map((cs, idx) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={idx} />
          ))}
        </div>

        <div className="view-all-container">
          <Link href="/work" className="view-all-link">
            View all 7 case studies &rarr;
          </Link>
        </div>
      </section>

      {/* Design Philosophy Teaser */}
      <section className="section" aria-labelledby="philosophy-title">
        <div className="section-header">
          <p className="section-eyebrow">Service Philosophy</p>
          <h2 id="philosophy-title" className="section-title">
            Frontstage Clarity, Backstage Reliability
          </h2>
        </div>

        <div className="philosophy-teaser">
          <p className="philosophy-text">
            A beautiful interface cannot rescue an operational breakdown. Having worked in commercial logistics in Edinburgh before studying Interaction Design, I approach digital products through the line of visibility: making sure every button on the screen is backed by realistic processes, accountable data flows, and feasible human work.
          </p>
          <Link href="/about" className="btn btn-secondary">
            Read about my background &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
