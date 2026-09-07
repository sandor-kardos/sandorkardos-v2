import { Metadata } from "next";
import { CASE_STUDIES } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Product, UX and service design case studies by Sándor Kardos. Grounded in user research, service blueprints, and rapid prototyping in Edinburgh."
};

export default function WorkPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Selected Work</h1>
        <p className="page-subtitle">
          Seven structured case studies detailing problem discovery, qualitative user research, frontstage interfaces, and backstage service blueprints.
        </p>
      </header>

      <div className="case-study-list">
        {CASE_STUDIES.map((cs, idx) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} index={idx} />
        ))}
      </div>
    </div>
  );
}
