import { Target, Download } from 'lucide-react';
import { GoldButton } from '../../components/GoldButton';
import { ScrollReveal } from '../../components/ScrollReveal';

const timelineData = [
  {
    year: '2025',
    title: 'Chief of Staff — HBJ Jewels',
    description: '20% revenue growth, ₹9.8 Cr losses identified across 200+ stores',
  },
  {
    year: '2024',
    title: 'Live MCX Costing Engine',
    description: '15-min refresh integration with ERP — zero manual rate keying',
  },
  {
    year: '2024',
    title: '64% Walkout-to-Sale Conversion',
    description: 'Zithara CRM ↔ Synergics ERP unified buyer journey',
  },
  {
    year: '2023',
    title: 'Token-based Fraud Prevention',
    description: 'Eliminated duplicate logging and weight discrepancies',
  },
  {
    year: '2022',
    title: 'BS Data Science — IIT Madras',
    description: 'Online program, focus on analytics & retail econometrics',
  },
];

const skills = [
  'Synergics ERP',
  'Zithara CRM',
  'Power BI',
  'MCX Integration',
  'Loss Prevention',
  'Process Re-engineering',
  'Data Science',
  'Change Management',
  'Tally / SAP',
  'GST & Compliance',
];

export function TimelineSection() {
  return (
    <section className="bg-white section-padding-lg">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left - Timeline */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                Achievements <span className="text-gold">Timeline</span>
              </h2>
              <p className="text-sm text-text-secondary mb-8">
                Milestones that shape how I operate inside jewellery retail.
              </p>
            </ScrollReveal>

            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gold/20" />

              <div className="space-y-6">
                {timelineData.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.08}>
                    <div className="relative">
                      {/* Node */}
                      <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 border-gold bg-white" />
                      <div className="bg-white border border-border-light rounded-xl p-5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gold">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-text-primary mt-1 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-secondary">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Sidebar cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-semibold text-text-primary">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-text-secondary border border-border-light rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Philosophy */}
            <ScrollReveal delay={0.1}>
              <div className="bg-navy rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Philosophy</h3>
                <p className="text-sm text-white/80 italic mb-3">
                  "I don't see ERP, Finance, and CRM as separate systems. I see them as one
                  integrated revenue engine."
                </p>
                <p className="text-sm text-white/70">
                  Converting person-dependent chaos into scalable digital operations.
                </p>
              </div>
            </ScrollReveal>

            {/* Download CV */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-border-light rounded-xl p-6 text-center">
                <Download className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-text-primary mb-1">Download CV</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Detailed track record + case studies.
                </p>
                <GoldButton fullWidth>Get the PDF</GoldButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
