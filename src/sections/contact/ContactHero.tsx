import { SectionLabel } from '../../components/SectionLabel';
import { ScrollReveal } from '../../components/ScrollReveal';

export function ContactHero() {
  return (
    <section className="hero-gradient pt-32 pb-16">
      <div className="content-max">
        <ScrollReveal>
          <SectionLabel variant="pill">CONTACT</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mt-4">
            <span className="text-white">Let's build your </span>
            <span className="text-gold">revenue engine</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base text-white/70 mt-4 max-w-xl">
            Free 30-min discovery call. We'll map the highest-leverage transformation play for your
            stores.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
