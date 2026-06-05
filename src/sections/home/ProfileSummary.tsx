import { SectionLabel } from '../../components/SectionLabel';
import { ScrollReveal } from '../../components/ScrollReveal';

export function ProfileSummary() {
  return (
    <section className="bg-white section-padding">
      <div className="content-max">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {/* Experience */}
            <div className="md:border-r md:border-border-light md:pr-8">
              <SectionLabel variant="icon" className="mb-3">EXPERIENCE</SectionLabel>
              <h3 className="text-xl font-semibold text-text-primary mb-1">
                Chief of Staff, HBJ Jewels
              </h3>
              <p className="text-sm text-text-secondary">Jan 2025 — Present</p>
            </div>

            {/* Expertise */}
            <div className="md:border-r md:border-border-light md:px-8">
              <SectionLabel variant="icon" className="mb-3">EXPERTISE</SectionLabel>
              <h3 className="text-xl font-semibold text-text-primary mb-1">
                Synergics ERP · Zithara CRM
              </h3>
              <p className="text-sm text-text-secondary">Live MCX pricing · Power BI</p>
            </div>

            {/* Education */}
            <div className="md:pl-8">
              <SectionLabel variant="icon" className="mb-3">EDUCATION</SectionLabel>
              <h3 className="text-xl font-semibold text-text-primary mb-1">BS Data Science</h3>
              <p className="text-sm text-text-secondary">IIT Madras (ongoing)</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
