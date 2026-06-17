import { SectionLabel } from '../../components/SectionLabel';
import { ScrollReveal } from '../../components/ScrollReveal';

export function CaseStudiesHero() {
  return (
    <section className="hero-gradient pt-32 pb-16">
      <div className="content-max">
        <ScrollReveal>
          <SectionLabel variant="pill">CASE STUDIES</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mt-4">
            <span className="text-white">Field notes from </span>
            <span className="text-gold">200+ stores</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base text-white/70 mt-4 max-w-xl">
            Practical playbooks on jewellery retail digital transformation — written for CEOs, CoSs,
            and ops leaders.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
