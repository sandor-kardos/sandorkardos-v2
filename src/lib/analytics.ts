export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-E7XQ1G4T8D";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// Track Recruiter-oriented CTA clicks (CV download, role inquiries)
export function trackRecruiterCta(label: string, destination?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click_recruiter", {
      event_category: "Engagement",
      event_label: label,
      destination: destination || "/contact?intent=role"
    });
  }
}

// Track Potential Client / Project Work CTA clicks (understated project work links)
export function trackClientCta(label: string, destination?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click_client", {
      event_category: "Engagement",
      event_label: label,
      destination: destination || "/contact?intent=project"
    });
  }
}

// Track individual case study views with slug
export function trackCaseStudyView(slug: string, title: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "case_study_view", {
      event_category: "Case Study",
      case_study_slug: slug,
      case_study_title: title
    });
  }
}
