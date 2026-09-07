import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Sándor Kardos: Service Design Philosophy",
  description:
    "How frontstage and backstage logistics experience shapes user-centred service design. Sándor Kardos, 3rd year student at Edinburgh Napier University."
};

export default function AboutPage() {
  return (
    <div className="container">
      <JsonLd type="ProfilePage" url="https://sandorkardos.com/about" />

      <header className="page-header">
        <h1 className="page-title">About & Philosophy</h1>
        <p className="page-subtitle">
          Product, UX and Service Designer based in Edinburgh, focusing on service blueprints, research rigour, and operational feasibility.
        </p>
      </header>

      <section className="about-content" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div
            className="portrait-wrapper portrait-interactive"
            data-portrait-trigger="true"
            title="Hover or click to activate cool blue-lime paintbrush mode"
            tabIndex={0}
            role="button"
            aria-label="Sándor Kardos portrait. Hover to activate paintbrush mode"
            style={{ width: "110px", height: "110px", cursor: "pointer" }}
          >
            <Image
              src="/images/portrait.webp"
              alt="Sándor Kardos"
              width={110}
              height={110}
              className="portrait-img"
            />
            <span className="brush-badge-icon" aria-hidden="true">🖌️</span>
          </div>
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 600 }}>Sándor Kardos</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              3rd Year BSc Interaction Design and Digital Media
              <br />
              Edinburgh Napier University, Scotland
            </p>
          </div>
        </div>

        {/* Honest Positioning & Background */}
        <div className="cs-section">
          <h2 className="cs-section-title">Honest Positioning</h2>
          <p className="cs-paragraph">
            I am a junior to mid-level Product, UX, and Service Designer in Edinburgh. I am not a software developer, and I do not claim senior or expert status. My focus is on the human and organizational problems that sit behind digital screens: understanding user motivations, mapping service journeys, and designing clear, trustworthy interactions.
          </p>
          <p className="cs-paragraph">
            I do not claim to be a pixel-perfect visual illustrator. Instead, I leverage modern AI-assisted tools (Claude, Gemini, n8n) for rapid interface scaffolding and code prototyping. This transparency allows me to invest my energy where it creates the greatest impact: qualitative user research, service blueprinting, and validating assumptions with real people.
          </p>
        </div>

        {/* Service Design Philosophy: Frontstage & Backstage */}
        <div className="cs-section">
          <h2 className="cs-section-title">The Logistics Lens: Frontstage and Backstage</h2>
          <p className="cs-paragraph">
            Before pursuing my design degree at Edinburgh Napier University, I worked in commercial logistics and delivery driving across Edinburgh. In physical delivery, you quickly realize that when a customer is upset at the front door, the fault rarely originated at the door. It originated in a broken sorting algorithm, an inaccurate tenement address database, or an unreasonable dispatch schedule.
          </p>

          <figure className="cs-hero-figure" style={{ margin: "1.5rem 0" }}>
            <Image
              src="/images/service-blueprint-framework.webp"
              alt="Service Blueprint Framework: Line of Visibility separating Frontstage Customer Touchpoints from Backstage Operations"
              width={1376}
              height={768}
              sizes="(max-width: 768px) 100vw, 760px"
              className="cs-main-image"
            />
            <figcaption className="cs-image-caption">
              Framework: Line of Visibility separating Frontstage Touchpoints from Backstage Operational Systems
            </figcaption>
          </figure>

          <p className="cs-paragraph">
            This operational background directly shapes how I practice service design:
          </p>
          <ul className="cs-list">
            <li>
              <strong>The Line of Visibility:</strong> A service is a continuous system. Above the line of visibility is what the user touches (the frontstage UI). Below the line is the human labor, APIs, databases, and operational constraints (the backstage) that either make the service work or cause it to collapse.
            </li>
            <li>
              <strong>Evidence over Assertion:</strong> I prioritize usability testing observations and real visitor metrics over unproven design hypotheses.
            </li>
            <li>
              <strong>Restraint as Craft:</strong> The best interaction is often the one you remove. If a process can be solved with a simpler statutory notice or an automated receipt, do not force the user through a 5-step interactive wizard.
            </li>
          </ul>
        </div>

        {/* Building in Public */}
        <div className="cs-section">
          <h2 className="cs-section-title">Building in Public</h2>
          <p className="cs-paragraph">
            I believe designers should be open about their methods and prototypes. All my code-assisted prototypes, workflows, and experiments are published openly at{" "}
            <a
              href="https://github.com/sandor-kardos"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--link-color)", textDecoration: "underline" }}
            >
              github.com/sandor-kardos
            </a>
            . You can inspect my live repositories in the{" "}
            <Link href="/projects" style={{ color: "var(--link-color)", textDecoration: "underline" }}>
              Prototyping Sandbox
            </Link>
            .
          </p>
        </div>

        {/* Contact Pathways */}
        <div className="cs-section" style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "2rem" }}>
          <h2 className="cs-section-title">Getting in Touch</h2>
          <p className="cs-paragraph">
            I am currently seeking Junior/Mid Product, UX, or Service Designer roles in Edinburgh, across the UK, or hybrid. I am also selectively open to project work for teams that value thorough research and service architecture.
          </p>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Reach Out About a Role
            </Link>
            <Link href="/contact?intent=project" className="btn btn-secondary">
              Open to project work &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
