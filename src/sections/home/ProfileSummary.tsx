import { SectionLabel } from '../../components/SectionLabel';
import { GoldButton } from '../../components/GoldButton';
import { motion } from 'framer-motion';

export function ProfileSummary() {
  return (
    <section id="about" className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6 border-t border-b border-border-light relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0170B9_1.5px,transparent_1.5px)] [background-size:24px_24px] z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Outer Dark Navy Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative bg-[#0B1E2E] rounded-none border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 w-full"
        >
          {/* Background subtle grid */}
          <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: 'radial-gradient(#8bc34a 1.5px, transparent 1.5px)', 
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
              }} 
            />
          </div>

          {/* Ambient neon radial glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8bc34a]/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1f5fbf]/15 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Left - Introduction details (60% / 7 columns) */}
          <div className="relative z-10 lg:col-span-7 flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-14 text-white">
            <div>
              <SectionLabel variant="pill" className="self-start inline-block mb-4 text-gold border-gold/30 bg-gold/5">
                THE CONSULTANT
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Meet Your Jewellery <span className="text-gold">Systems</span> Architect
              </h2>
            </div>
            
            <div className="pt-2">
              <GoldButton to="/about">
                Learn More
              </GoldButton>
            </div>
          </div>

          {/* Right - Profile Photo (40% / 5 columns) */}
          <div className="relative z-10 lg:col-span-5 w-full h-full min-h-[380px] lg:min-h-full flex overflow-hidden">
            <img
              src="/abraham_about.png"
              alt="Abraham S"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
