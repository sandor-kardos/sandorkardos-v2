"use client";

import Link from "next/link";
import { trackClientCta } from "@/lib/analytics";

export default function Footer() {
  const handleProjectClick = () => {
    trackClientCta("Footer: Open to project work", "/contact?intent=project");
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-meta">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Sándor Kardos. Based in Edinburgh, Scotland.
          </p>
          <p className="footer-status">
            3rd year BSc Interaction Design & Digital Media at Edinburgh Napier University.
          </p>
        </div>

        <div className="footer-actions">
          {/* Understated secondary client CTA */}
          <Link
            href="/contact?intent=project"
            onClick={handleProjectClick}
            className="footer-project-link"
          >
            Open to project work &rarr;
          </Link>

          <div className="footer-socials">
            <a
              href="mailto:hello@sandorkardos.com"
              className="social-link"
              aria-label="Send direct email to hello@sandorkardos.com"
            >
              hello@sandorkardos.com
            </a>
            <span className="separator" aria-hidden="true">/</span>
            <a
              href="https://github.com/sandor-kardos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <span className="separator" aria-hidden="true">/</span>
            <a
              href="https://www.linkedin.com/in/sandor-kardos/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
