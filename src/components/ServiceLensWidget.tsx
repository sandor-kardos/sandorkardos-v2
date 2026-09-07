"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface LensProject {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  liveUrl?: string;
  frontstage: {
    title: string;
    points: string[];
    highlight: string;
  };
  backstage: {
    title: string;
    points: string[];
    highlight: string;
  };
}

const LENS_PROJECTS: LensProject[] = [
  {
    slug: "closecare",
    title: "CloseCare",
    category: "Property Operations & Legal Governance",
    tagline: "Communal stair cleaning acquisition under Scotland's Tenement Management Scheme",
    image: "/images/closecare-mockup.webp",
    liveUrl: "https://closecare.co.uk",
    frontstage: {
      title: "Frontstage: Resident Touchpoint",
      highlight: "Tamper-evident noticeboard QR code & 90-second mobile voting portal",
      points: [
        "Communal close noticeboard QR code physical-to-digital onboarding",
        "Dedicated stair-specific voting portal with localized flat allocation",
        "Single-tap anonymous resident voting: 'Yes to communal cleaning'",
        "Live 51% statutory quorum threshold indicator reassuring co-owners"
      ]
    },
    backstage: {
      title: "Backstage: Systems & Governance",
      highlight: "Scottish Tenement Act (TMS 51% majority rule) compliance engine",
      points: [
        "Automated municipal street register validation against Edinburgh land boundaries",
        "Quorum verification engine notifying property factors upon 51% consent",
        "Split automated direct-debit billing per flat, eliminating shared debt liability",
        "Contractor route dispatch sync across Edinburgh postcode zones"
      ]
    }
  },
  {
    slug: "bereljufot",
    title: "BéreljUFÓt.hu",
    category: "Two-Sided Commercial Mobility Marketplace",
    tagline: "Hungary's national trailer rental platform connecting owners and commercial renters",
    image: "/images/bereljufot-mockup.webp",
    liveUrl: "https://bereljufot.hu",
    frontstage: {
      title: "Frontstage: Renter Booking Flow",
      highlight: "Interactive vehicle towing category calculator & transparent pricing",
      points: [
        "Vehicle towing calculator checking vehicle gross weight against trailer types",
        "Driver license verification (B vs B96 vs BE category compliance)",
        "Granular type filtering (refrigerated, car transporter, box, flatbed)",
        "Clear deposit guarantee eliminating checkout hesitation"
      ]
    },
    backstage: {
      title: "Backstage: Fleet & Partner Infrastructure",
      highlight: "Automated partner lead routing across Hungarian metropolitan hubs",
      points: [
        "Commercial depot inventory sync and multi-unit availability indexing",
        "Automated lead dispatch engine alerting rental stations within 15 minutes",
        "Dynamic rental pricing calculation factoring weekend and multi-day rates",
        "Technical SEO architecture capturing organic regional commercial traffic"
      ]
    }
  },
  {
    slug: "mindhaven",
    title: "Mindhaven",
    category: "Private Healthcare Trust Architecture",
    tagline: "Ethical counselling practice digital presence designed within strict healthcare constraints",
    image: "/images/mindhaven-mockup.webp",
    liveUrl: "https://mindhaven.uk",
    frontstage: {
      title: "Frontstage: Vulnerable Inquiry Journey",
      highlight: "Authentic clinical grounding anchored by practitioner portrait",
      points: [
        "Warm, human hero section anchored by Erika Martin's accredited portrait",
        "Jargon-free translation of psychodynamic and CBT therapeutic approaches",
        "Gentle, low-friction initial consultation booking without ambiguous forms",
        "Calming visual hierarchy conveying psychological safety and confidential care"
      ]
    },
    backstage: {
      title: "Backstage: Ethical & Operational Firewalls",
      highlight: "Zero-testimonial BACP/COSCA healthcare regulatory architecture",
      points: [
        "Ethical code firewall: zero commercial testimonials or manipulative review widgets",
        "Strict GDPR and confidential client intake routing",
        "WooCommerce booking pipeline with Stripe sandbox-tested security",
        "Automated booking reminder orchestration reducing client anxiety"
      ]
    }
  }
];

export default function ServiceLensWidget() {
  const [activeTab, setActiveTab] = useState<"frontstage" | "backstage">("frontstage");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const currentProject = LENS_PROJECTS[selectedIdx];

  return (
    <div className="service-lens-container" id="service-lens">
      <div className="service-lens-header">
        <div className="lens-eyebrow-row">
          <span className="organic-badge">
            <span className="badge-pulse" />
            Interactive Service Blueprint Lens
          </span>
          <span className="lens-status">Line of Visibility • Frontstage ⟷ Backstage</span>
        </div>

        <h3 className="lens-title">
          {activeTab === "frontstage" ? (
            <>
              What the user experiences on <span className="lens-highlight-lime">the frontstage</span>
            </>
          ) : (
            <>
              The operational architecture <span className="lens-highlight-emerald">behind the screen</span>
            </>
          )}
        </h3>

        <p className="lens-description">
          Digital products do not succeed on interface polish alone. In Service Design, the{" "}
          <strong>Line of Visibility</strong> separates customer emotional touchpoints from the
          operational governance, database logic, and physical supply chains required to deliver value.
        </p>

        {/* Tactile Master Lens Mode Switch */}
        <div className="lens-mode-switcher" role="tablist" aria-label="Service lens visibility view">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "frontstage"}
            onClick={() => setActiveTab("frontstage")}
            className={`lens-mode-btn ${activeTab === "frontstage" ? "lens-mode-active-front" : ""}`}
          >
            <span className="lens-tab-icon">👁️</span>
            <span className="lens-tab-text">
              <strong>Frontstage View</strong>
              <small>Customer experience & UI</small>
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "backstage"}
            onClick={() => setActiveTab("backstage")}
            className={`lens-mode-btn ${activeTab === "backstage" ? "lens-mode-active-back" : ""}`}
          >
            <span className="lens-tab-icon">⚙️</span>
            <span className="lens-tab-text">
              <strong>Backstage View</strong>
              <small>Operations & systems</small>
            </span>
          </button>
        </div>
      </div>

      {/* Project Selector Pills */}
      <div className="lens-project-pills" role="tablist" aria-label="Select case study">
        {LENS_PROJECTS.map((proj, idx) => (
          <button
            key={proj.slug}
            type="button"
            role="tab"
            aria-selected={selectedIdx === idx}
            onClick={() => setSelectedIdx(idx)}
            className={`lens-proj-pill ${selectedIdx === idx ? "lens-proj-pill-active" : ""}`}
          >
            <span className="proj-pill-dot" />
            <span className="proj-pill-name">{proj.title}</span>
            <span className="proj-pill-category">{proj.category}</span>
          </button>
        ))}
      </div>

      {/* Main Interactive Bento Stage */}
      <div className={`lens-bento-stage ${activeTab === "backstage" ? "stage-backstage-active" : "stage-frontstage-active"}`}>
        {/* Left Column: Visual Showcase or System Diagram */}
        <div className="lens-visual-col">
          {activeTab === "frontstage" ? (
            <div className="lens-screenshot-frame">
              <div className="browser-window-header">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-url-bar">{currentProject.liveUrl || currentProject.title}</span>
              </div>
              <Image
                src={currentProject.image}
                alt={`${currentProject.title} live interface preview`}
                width={700}
                height={400}
                className="lens-screenshot-img"
              />
              <div className="lens-screenshot-caption">
                <span className="caption-tag">Live Interface</span>
                <span>{currentProject.frontstage.highlight}</span>
              </div>
            </div>
          ) : (
            <div className="lens-blueprint-diagram">
              <div className="diagram-header">
                <span className="diagram-badge">System Architecture Map</span>
                <span className="diagram-stat">Rule Compliance</span>
              </div>
              <div className="diagram-nodes">
                <div className="diagram-step">
                  <div className="step-badge">01 Trigger</div>
                  <div className="step-content">Resident QR Scan or Customer Web Intent</div>
                </div>
                <div className="diagram-arrow">↓</div>
                <div className="diagram-step highlight-step">
                  <div className="step-badge">02 Verification Engine</div>
                  <div className="step-content">{currentProject.backstage.highlight}</div>
                </div>
                <div className="diagram-arrow">↓</div>
                <div className="diagram-step">
                  <div className="step-badge">03 Operational Output</div>
                  <div className="step-content">Automated Contractor Routing & Settlement</div>
                </div>
              </div>
              <div className="diagram-footer">
                <span>Line of Visibility: Operational backstage automated seamlessly</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Architectural Blueprint Analysis */}
        <div className="lens-info-col">
          <div className="lens-info-header">
            <span className="lens-category-label">{currentProject.category}</span>
            <h4 className="lens-project-title">{currentProject.title}</h4>
            <p className="lens-project-tagline">{currentProject.tagline}</p>
          </div>

          <div className="lens-details-card">
            <div className="lens-details-title-row">
              <span className="details-indicator" />
              <h5>{activeTab === "frontstage" ? currentProject.frontstage.title : currentProject.backstage.title}</h5>
            </div>

            <ul className="lens-points-list">
              {(activeTab === "frontstage" ? currentProject.frontstage.points : currentProject.backstage.points).map(
                (point, i) => (
                  <li key={i} className="lens-point-item">
                    <span className="point-bullet" />
                    <span>{point}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lens-action-row">
            <Link href={`/work/${currentProject.slug}`} className="btn btn-primary">
              Full Service Case Study &rarr;
            </Link>
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Live Site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
