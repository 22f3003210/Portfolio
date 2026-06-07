import { Target } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';


interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  description?: string;
  bullets?: string[];
}

export function TimelineSection({ hideSidebar = false }: { hideSidebar?: boolean }) {
  const timelineData: TimelineItem[] = [
    {
      year: 'Jan 2025 – Present',
      title: 'Chief of Staff',
      company: 'HBJ Jewels Pvt Ltd',
      description: 'Led enterprise-wide transformation across Operations, IT, HR, Finance, CRM and Sales.',
      bullets: [
        'Conducted audits across inventory, repairs, old gold, costing, procurement, CRM, finance and governance.',
        'Identified 87+ gm repair inventory discrepancy and 179+ gm OG reconciliation mismatch.',
        'Designed unified ERP + CRM + Finance architecture reducing reconciliation effort by 90%.',
        'Improved walkout conversion from 11% to 64%, increased walk-ins by 30%, delivered 45% revenue growth in first CRM month.',
        'Reduced attrition by 60%.',
        'Implemented ERP, CRM, HRMS, Payroll and workflow automation systems.',
        'Developed KPIs, BI dashboards, SOPs, governance frameworks, FRDs and operational intelligence systems.',
        'Managed ERP, POS, CRM, network systems and enterprise technology adoption.'
      ]
    },
    {
      year: 'Jul 2024 – Present',
      title: 'Strategic Operations Consultant (Independent)',
      company: 'Business Consultant & Auditor',
      bullets: [
        'Consulted 20+ jewellery businesses on audits, governance, ERP adoption, digital transformation and scalability planning.'
      ]
    },
    {
      year: 'Apr 2024 – Jul 2024',
      title: 'Pre-Sales Manager',
      company: 'Sioniq Tech Pvt Ltd',
      bullets: [
        'Delivered 50+ product demonstrations.',
        'Managed demo operations and client engagement team.'
      ]
    },
    {
      year: 'Oct 2023 – Apr 2024',
      title: 'ERP Implementation Engineer',
      company: 'Sioniq Tech Pvt Ltd',
      bullets: [
        'Implemented ERP for 30+ clients.',
        'Trained 50+ clients and created technical documentation.'
      ]
    }
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
    <section className="bg-[#F8FAFC] py-12 px-6 select-none border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto">
        <div className={`grid grid-cols-1 ${hideSidebar ? 'lg:grid-cols-1 max-w-3xl mx-auto' : 'lg:grid-cols-6'} gap-12 items-start`}>
          {/* Left - Narrative */}
          <div className={hideSidebar ? 'w-full space-y-8' : 'lg:col-span-4 space-y-8'}>
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
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gold font-mono">
                            {item.year}
                          </span>
                          {item.company && (
                            <span className="text-xs font-bold text-navy/70 font-mono">
                              {item.company}
                            </span>
                          )}
                        </div>
                        <h3 className="text-[17px] font-bold text-text-primary mb-2">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-text-secondary font-semibold mb-3 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 mt-3 pl-1">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 text-[13px] text-text-secondary leading-relaxed font-semibold">
                                <span className="w-1.5 h-1.5 bg-gold shrink-0 mt-2"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Sidebar cards */}
          {!hideSidebar && (
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
