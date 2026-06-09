import { SectionLabel } from '../../components/SectionLabel';
import { ScrollReveal } from '../../components/ScrollReveal';

const badges = [
  'Loss prevention by design',
  'Live MCX pricing integrity',
  'CRM-led conversion engine',
];

export function PhilosophySection() {
  return (
    <section className="bg-[#f8fafc] border-y border-slate-200 py-16 md:py-24 relative overflow-hidden select-none text-center">
      <div className="w-full px-6">
        <div className="max-w-[1200px] mx-auto text-center space-y-6">
          <ScrollReveal>
            <SectionLabel variant="pill" className="mb-4">OPERATING PHILOSOPHY</SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 uppercase tracking-tight leading-tight">
              "What gets measured can be <span className="text-blue-700">understood</span>.<br />
              What gets understood can be <span className="text-[#558b2f]">improved</span>."
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-8 font-semibold leading-relaxed">
              Every store, every shift, every gram — measured, attributable, and optimisable. That's
              how 200+ jewellery stores became one cohesive revenue engine.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-6 py-3 text-xs font-black uppercase tracking-wider text-slate-800 border border-slate-200 bg-white shadow-sm rounded-none"
                >
                  {badge}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

