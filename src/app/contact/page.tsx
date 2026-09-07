"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { trackRecruiterCta, trackClientCta } from "@/lib/analytics";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [selectedIntent, setSelectedIntent] = useState<"role" | "project" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const defaultIntent = searchParams.get("intent") === "project" ? "project" : "role";
  const intent = selectedIntent ?? defaultIntent;

  const handleIntentChange = (newIntent: "role" | "project") => {
    setSelectedIntent(newIntent);
    if (newIntent === "role") {
      trackRecruiterCta("Contact Intent: Role Opportunity");
    } else {
      trackClientCta("Contact Intent: Project Work");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (intent === "role") {
      trackRecruiterCta("Contact Form Submitted: Role Opportunity");
    } else {
      trackClientCta("Contact Form Submitted: Project Work");
    }

    const subject = encodeURIComponent(
      intent === "role"
        ? `Role Opportunity inquiry from ${name || "Hiring Manager"}`
        : `Project inquiry from ${name || "Client"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nIntent: ${intent === "role" ? "Role Opportunity" : "Project Work"}\n\nMessage:\n${message}`
    );

    // Open user's default email client
    window.location.href = `mailto:hello@sandorkardos.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact Inquiry Form">
        {/* Single-field intent selector */}
        <div className="intent-selector-group">
          <span className="intent-label">I am reaching out about:</span>
          <div className="intent-options" role="radiogroup" aria-label="Inquiry Type">
            <button
              type="button"
              role="radio"
              aria-checked={intent === "role"}
              onClick={() => handleIntentChange("role")}
              className={`intent-option ${intent === "role" ? "intent-option-active" : ""}`}
            >
              Role Opportunity (Junior/Mid Designer)
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={intent === "project"}
              onClick={() => handleIntentChange("project")}
              className={`intent-option ${intent === "project" ? "intent-option-active" : ""}`}
            >
              Project Work
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Fiona Campbell"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Your Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. fiona@example.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              intent === "role"
                ? "Tell me about the role, team, and what kind of design challenges you are solving..."
                : "Tell me about your product or service and the scope of work..."
            }
            className="form-textarea"
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
          {intent === "role" ? "Send Role Inquiry" : "Send Project Inquiry"} &rarr;
        </button>

        {submitted && (
          <p style={{ color: "var(--link-color)", fontSize: "0.92rem", marginTop: "0.5rem" }}>
            Opening your email client to send to hello@sandorkardos.com. Thank you for reaching out!
          </p>
        )}
      </form>

      {/* Direct contact alternative */}
      <div className="contact-direct-box">
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          Prefer writing directly from your email client?
        </p>
        <a
          href="mailto:hello@sandorkardos.com"
          className="direct-email-link"
          aria-label="Email directly to hello@sandorkardos.com"
        >
          hello@sandorkardos.com
        </a>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
          I typically reply within one business day. Located in Edinburgh, Scotland (UK timezone).
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">
          Based in Edinburgh. Available for Junior/Mid Product, UX, and Service Designer roles or selective project inquiries.
        </p>
      </header>

      <Suspense fallback={<div className="contact-container"><p>Loading contact form...</p></div>}>
        <ContactFormInner />
      </Suspense>
    </div>
  );
}
