import { MapPin, Phone, Linkedin } from 'lucide-react';
import { SectionLabel } from '../../components/SectionLabel';
import { ScrollReveal } from '../../components/ScrollReveal';

export function AboutHero() {
  return (
    <section className="hero-gradient pt-32 pb-16">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <ScrollReveal>
              <SectionLabel variant="pill">ABOUT</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                <span className="text-white">Abraham</span>{' '}
                <span className="text-gold">S</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base text-white/80 leading-relaxed max-w-xl">
                3+ years transforming 200+ jewellery stores. As Chief of Staff at HBJ Jewels: 20%
                revenue growth, ₹9.8 Cr losses eliminated, 90% reconciliation reduction.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold" /> Hyderabad
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-gold" /> +91 9160863406
                </span>
                <a
                  href="https://linkedin.com/in/abraham-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gold" /> /in/abraham-s
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Avatar */}
          <div className="lg:col-span-2 flex justify-center">
            <ScrollReveal delay={0.2}>
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gold flex items-center justify-center gold-glow">
                <span className="text-5xl md:text-6xl font-extrabold text-navy">AS</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
