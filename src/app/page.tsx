import Link from "next/link";
import { CASE_STUDIES } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceLensWidget from "@/components/ServiceLensWidget";

const SKILLS = [
  "Service Blueprinting",
  "Line of Visibility Analysis",
  "Frontstage & Backstage Journey Mapping",
  "Statutory Trust & Legal Compliance UX",
  "Qualitative User Interviews",
  "Usability Testing & Heuristic Evaluation",
  "Figma Design Systems",
  "AI-Assisted Rapid Prototyping",
  "Next.js & TypeScript UI Execution",
  "Information Architecture & Flow Design",
  "WCAG 2.2 AA Accessibility",
  "Edinburgh Napier University (3rd Year)"
];

export default function HomePage() {
  // Only the 3 designated featured case studies: CloseCare, BereljUFOT.hu, Mindhaven
  const featuredCaseStudies = [
    CASE_STUDIES.find((cs) => cs.slug === "closecare")!,
    CASE_STUDIES.find((cs) => cs.slug === "bereljufot")!,
    CASE_STUDIES.find((cs) => cs.slug === "mindhaven")!
  ].filter(Boolean);

  return (
    <div className="homepage-wrapper">
      {/* 1. Monumental Manifesto Hero Section */}
      <section className="hero-organic-section" aria-labelledby="hero-title">
        <div className="hero-pill-status">
          <span className="status-dot-pulse" aria-hidden="true" />
          <span>3rd Year BSc Interaction Design @ Edinburgh Napier • Open to Project Work</span>
        </div>

        <h1 id="hero-title" className="hero-monumental-headline">
          Most digital design stops at the screen.
          <br />
          <span className="hero-highlight-gradient">I design the living systems behind it.</span>
        </h1>

        <p className="hero-bio-lead">
          I am a <strong>Service &amp; Interaction Designer</strong> based in Edinburgh. Before studying Interaction Design at Edinburgh Napier, I worked in commercial logistics, which taught me that an interface is only as trustworthy as the operations behind it. I specialize in user research, statutory trust architecture, and service blueprinting, openly accelerated by AI prototyping tools to dedicate maximum time to qualitative inquiry and validation.
        </p>

        {/* Hero CTA Row */}
        <div className="hero-cta-row" role="group" aria-label="Primary Actions">
          <a href="#service-lens" className="btn btn-primary">
            Service Blueprint Lens ↓
          </a>
          <a href="#featured-work" className="btn btn-secondary">
            Explore Work
          </a>
          <Link href="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
          <a
            href="https://github.com/sandor-kardos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-subtle"
          >
            GitHub (Public Code) ↗
          </a>
        </div>

        {/* Method Strip Banners */}
        <div className="hero-method-strip" aria-label="Core Design Pillars">
          <div className="method-card">
            <div className="method-card-number">01 / ARCHITECTURE</div>
            <h2 className="method-card-title">Service Blueprinting</h2>
            <p className="method-card-desc">
              Mapping customer touchpoints directly to backstage logistics, municipal records, and staff workflows.
            </p>
          </div>
          <div className="method-card">
            <div className="method-card-number">02 / GOVERNANCE</div>
            <h2 className="method-card-title">Statutory Trust Architecture</h2>
            <p className="method-card-desc">
              Designing user journeys that enforce statutory frameworks, like Scotland&#39;s Tenement Management Scheme (51% rule).
            </p>
          </div>
          <div className="method-card">
            <div className="method-card-number">03 / ACCELERATION</div>
            <h2 className="method-card-title">AI-Assisted Prototyping</h2>
            <p className="method-card-desc">
              Using modern AI tools to compress UI production cycles, dedicating the majority of sprint time to deep user inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Out-of-the-Box Interactive Feature: Service Blueprint Lens */}
      <section aria-label="Interactive Service Blueprint Lens">
        <ServiceLensWidget />
      </section>

      {/* 3. Featured Case Studies Section */}
      <section id="featured-work" className="section-container" aria-labelledby="work-title">
        <div className="section-header-block">
          <span className="organic-badge">
            <span className="badge-pulse" />
            Live Production Work
          </span>
          <h2 id="work-title" className="section-title-large">
            Selected Service &amp; Interaction Design
          </h2>
          <p className="section-subtitle-lead">
            Three live production systems exploring statutory co-ownership, commercial fleet logistics, and ethical clinical boundaries.
          </p>
        </div>

        <div className="case-study-list-organic">
          {featuredCaseStudies.map((cs, idx) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={idx} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link href="/work" className="btn btn-secondary">
            View all 7 case studies &rarr;
          </Link>
        </div>
      </section>

      {/* 4. Skills & Methodology Matrix */}
      <section className="section-container" aria-labelledby="skills-title">
        <div className="section-header-block">
          <span className="organic-badge">Methodology</span>
          <h2 id="skills-title" className="section-title-large">
            Core Competencies &amp; Tools
          </h2>
          <p className="section-subtitle-lead">
            A balanced combination of qualitative inquiry, service systems mapping, and rapid code prototyping.
          </p>
        </div>

        <div className="skills-organic-cloud">
          {SKILLS.map((skill) => (
            <div key={skill} className="skill-pill-organic">
              <span className="skill-indicator" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Design Philosophy: Logistics Background Teaser */}
      <section className="section-container" aria-labelledby="philosophy-title">
        <div
          className="case-study-card-bento"
          style={{
            background: "linear-gradient(135deg, var(--bg-card) 0%, rgba(204, 255, 0, 0.04) 100%)",
            border: "1px solid var(--border-highlight)"
          }}
        >
          <span className="organic-badge">Operational Perspective</span>
          <h2 id="philosophy-title" className="section-title-large">
            Why Logistics Shapes My Design
          </h2>
          <p className="cs-card-headline">
            A beautiful interface cannot rescue an operational breakdown. Having worked in commercial logistics in Edinburgh before studying Interaction Design at Edinburgh Napier University, I approach digital products through the line of visibility: making sure every button on the screen is backed by realistic processes, accountable data flows, and feasible human work.
          </p>
          <div>
            <Link href="/about" className="btn btn-primary">
              Read background &amp; journey &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
