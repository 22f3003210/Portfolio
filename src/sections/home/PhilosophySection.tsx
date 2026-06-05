import { SectionLabel } from '../../components/SectionLabel';
import { ScrollReveal } from '../../components/ScrollReveal';

const badges = [
  'Loss prevention by design',
  'Live MCX pricing integrity',
  'CRM-led conversion engine',
];

export function PhilosophySection() {
  return (
    <section className="bg-navy section-padding-lg relative overflow-hidden">
      <div className="content-max text-center">
        <ScrollReveal>
          <SectionLabel className="mb-6">OPERATING PHILOSOPHY</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">"Converting </span>
            <span className="text-gold">person-dependent chaos</span>
            <br className="hidden md:block" />
            <span className="text-white"> into scalable digital operations."</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-base text-white/70 max-w-2xl mx-auto mb-10">
            Every store, every shift, every gram — measured, attributable, and optimisable. That's
            how 200+ jewellery stores became one revenue engine.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-none"
              >
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
