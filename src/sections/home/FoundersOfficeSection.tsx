import { ScrollReveal } from '../../components/ScrollReveal';
import { Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = ['Structure', 'Visibility', 'Accountability', 'Execution'];

const focusAreas = [
  'Operations & Process Improvement',
  'Inventory Management',
  'Reporting & Dashboards',
  'Technology Implementation',
  'Strategic Execution',
];

export function FoundersOfficeSection() {
  return (
    <section className="relative bg-[#0b2341] py-20 md:py-28 px-6 overflow-hidden border-b border-white/10">
      {/* Background watermark text */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(100px,18vw,200px)] font-black text-white/[0.025] uppercase leading-none select-none pointer-events-none tracking-tighter whitespace-nowrap"
      >
        FOUNDER'S OFFICE
      </span>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Green ambient glow */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-[#8bc34a]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 right-0 w-[400px] h-[400px] bg-[#1f5fbf]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#8bc34a]/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#8bc34a]/20 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Left Column ── */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="flex flex-col gap-8">

                {/* Icon badge */}
                <div className="w-14 h-14 bg-[#8bc34a]/10 border border-[#8bc34a]/30 flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-[#8bc34a]" />
                </div>

                {/* Heading */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8bc34a] block mb-3">
                    How I Work
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                    The Founder's<br />Office Model
                  </h2>
                </div>

                {/* Pillar chips */}
                <div className="flex flex-wrap gap-2">
                  {pillars.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#8bc34a] border border-[#8bc34a]/30 bg-[#8bc34a]/8"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Focus areas */}
                <div className="space-y-2.5 pt-6 border-t border-white/10">
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-3">
                    Focus Areas
                  </p>
                  {focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#8bc34a] shrink-0" />
                      <span className="text-xs font-semibold text-white/65">{area}</span>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column ── */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.12}>
              <div className="flex flex-col gap-8">

                {/* Pull quote */}
                <div className="border-l-4 border-[#8bc34a] pl-6 md:pl-8">
                  <p className="text-xl md:text-[1.6rem] font-extrabold text-white leading-snug tracking-tight">
                    I don't work as an external consultant who delivers reports and recommendations from a distance.
                  </p>
                </div>

                {/* Body paragraphs */}
                <div className="space-y-5 text-sm md:text-[15px] text-white/60 leading-relaxed font-medium">
                  <p>
                    I work as an{' '}
                    <span className="text-white font-bold">extension of the Founder's Office</span>{' '}
                    — bringing structure, visibility, accountability, and execution across the business.
                  </p>
                  <p>
                    My role is to help founders build the systems required to scale. From operations
                    and inventory to reporting, dashboards, process improvement, and technology
                    implementation, I work alongside leadership to identify bottlenecks, solve
                    operational challenges, and ensure that strategic decisions translate into
                    measurable outcomes.
                  </p>
                </div>

                {/* Italic callout */}
                <div className="bg-white/5 border border-white/10 px-6 py-5 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8bc34a]" />
                  <p className="text-sm md:text-base text-white/80 font-semibold italic leading-relaxed pl-2">
                    "Think of me as a member of your Founder's Office focused on building the
                    operating system that enables sustainable growth."
                  </p>
                </div>

                {/* Outcome chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { label: 'Identify Bottlenecks', sub: 'Operational clarity' },
                    { label: 'Solve Challenges', sub: 'Hands-on execution' },
                    { label: 'Measurable Outcomes', sub: 'Strategic translation' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/5 border border-white/10 p-4 hover:border-[#8bc34a]/40 hover:bg-white/8 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#8bc34a] shrink-0" />
                        <span className="text-xs font-black uppercase tracking-wide text-white group-hover:text-[#8bc34a] transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-white/40 font-medium">{item.sub}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#0b2341] bg-[#8bc34a] px-6 py-3 hover:bg-white transition-colors duration-300 shadow-lg shadow-[#8bc34a]/20"
                  >
                    Work With Me <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/consulting"
                    className="text-[11px] font-black uppercase tracking-wider text-white/50 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Learn More →
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
