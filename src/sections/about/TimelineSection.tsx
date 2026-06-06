import { Download, Target } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import { GoldButton } from '../../components/GoldButton';

export function TimelineSection() {
  const timelineData = [
    {
      year: '2023 - Present',
      title: 'Chief of Staff (Jewellery Operations)',
      description:
        'Designed and deployed systems that improve decisions, strengthen operations, and drive measurable business outcomes across 200+ retail stores.',
    },
    {
      year: '2021 - 2023',
      title: 'Systems & Process Lead',
      description:
        'Audited and re-engineered supply chain, showroom inventory tracking, and billing workflows for retail groups across South India.',
    },
    {
      year: '2019 - 2021',
      title: 'Solutions Engineer (ERP & Retail)',
      description:
        'Integrated multi-branch data pipelines, cost tag schemas, and finance ledger modules to build a unified database.',
    },
  ];

  const skills = [
    'Systems Architecture',
    'Inventory Leak Auditing',
    'Reconciliation Automation',
    'Process Engineering',
    'ERP Implementation',
    'Retail Data Analytics',
    'Team Leadership',
    'Change Management',
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-[120px] px-6 select-none border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start">
          {/* Left - Narrative */}
          <div className="lg:col-span-4 space-y-8">
            <ScrollReveal className="flex flex-col gap-2">
              <SectionLabel variant="pill">EXPERIENCE</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tight leading-tight mt-3">
                Building a Track <br />
                <span className="text-[#0170B9]">Record of Outcomes</span>
              </h2>
            </ScrollReveal>

            <div className="border-l border-border-light pl-6 space-y-12">
              <ScrollReveal className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl font-medium">
                I bypass conventional software implementation and look directly at operating habits,
                incentives, and database integrity.
              </ScrollReveal>

              <div className="space-y-6">
                {timelineData.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.08}>
                    <div className="relative">
                      {/* Node */}
                      <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 border-gold bg-white" />
                      <div className="bg-white border border-border-light rounded-none p-5">
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
              <div className="bg-white border border-border-light rounded-none p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-semibold text-text-primary">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-text-secondary border border-border-light rounded-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Philosophy */}
            <ScrollReveal delay={0.1}>
              <div className="bg-navy rounded-none p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Philosophy</h3>
                <p className="text-sm text-white/80 italic mb-3">
                  "I don't see ERP, Finance, and CRM as separate systems. I see them as one
                  integrated revenue engine."
                </p>
                <p className="text-sm text-white/70">
                  What gets measured can be understood.<br /><br />
                  What gets understood can be improved.
                </p>
              </div>
            </ScrollReveal>

            {/* Download CV */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-border-light rounded-none p-6 text-center">
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
