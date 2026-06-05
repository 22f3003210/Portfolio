import { SectionLabel } from '../../components/SectionLabel';
import { GoldButton } from '../../components/GoldButton';
import { motion } from 'framer-motion';

export function ProfileSummary() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6 border-t border-b border-border-light relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0170B9_1.5px,transparent_1.5px)] [background-size:24px_24px] z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Outer Dark Navy Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="group bg-[#0B1E2E] rounded-none border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 w-full"
        >
          {/* Left - Introduction details (60% / 7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-14 text-white">
            <div>
              <SectionLabel variant="pill" className="self-start inline-block mb-4 text-gold border-gold/30 bg-gold/5">
                THE CONSULTANT
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Meet Your Jewellery <span className="text-gold">Systems</span> Architect
              </h2>
            </div>
            
            <div className="space-y-4 text-white/85 text-sm md:text-base leading-relaxed">
              <p className="font-semibold text-white">
                A systems-first designer focused on converting retail chaos and raw, unstructured data into clean operating intelligence. I bypass legacy habits to solve major industry hurdles by designing custom data collection flows and automated architectures from first principles.
              </p>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
                Learning from 200+ jewellery businesses. Designing systems that improve decisions, strengthen operations, and drive measurable business outcomes.
              </p>
            </div>

            <div className="pt-2">
              <GoldButton to="/about">
                Learn More
              </GoldButton>
            </div>
          </div>

          {/* Right - Profile Photo (40% / 5 columns) */}
          <div className="lg:col-span-5 w-full h-full min-h-[380px] lg:min-h-full flex overflow-hidden">
            <img
              src="/abraham_about.png"
              alt="Abraham S"
              className="w-full h-full object-cover object-center scale-[1.3] origin-[50%_35%] transition-transform duration-500 group-hover:scale-[1.35]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
