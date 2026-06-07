import { MapPin, Phone, Linkedin } from 'lucide-react';
import { SectionLabel } from '../../components/SectionLabel';
import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="bg-white pt-8 pb-12 relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer Big Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="bg-[#0B1E2E] rounded-none border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 w-full p-0 gap-0"
        >
          {/* Left - Introduction (60% / 7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6 text-white p-8 md:p-12 lg:p-16">
            
            {/* Proverb Quote (at the top, in the blue marked position) */}
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-medium italic border-b border-white/10 pb-4">
              “A young person who travels a lot is older than old man who stays in the village.” 
              <span className="block text-sm md:text-base text-gold font-bold uppercase tracking-[0.08em] not-italic mt-2">
                — Gabon (African Poet)
              </span>
            </p>

            {/* Badge & Name */}
            <div>
              <SectionLabel variant="pill" className="self-start inline-block mb-4 text-gold border-gold/30 bg-gold/5">
                ABOUT
              </SectionLabel>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
                Abraham <span className="text-gold">S</span>
              </h1>
            </div>

            {/* About Context Subtitle (below the name, in the red marked position) */}
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium">
              Learning from 200+ jewellery businesses. Designing systems that improve decisions, strengthen operations, and drive measurable business outcomes.
            </p>

            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-white/60 border-t border-white/10 pt-6">
              <span className="flex items-center gap-1.5 font-semibold">
                <MapPin className="w-4 h-4 text-gold" /> Hyderabad
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <Phone className="w-4 h-4 text-gold" /> +91 9160863406
              </span>
              <a
                href="https://linkedin.com/in/abrahamsayed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold text-white/60"
              >
                <Linkedin className="w-4 h-4 text-gold" /> /in/abrahamsayed
              </a>
            </div>
          </div>

          {/* Right - Profile Photo (40% / 5 columns) - Full Bleed */}
          <div className="lg:col-span-5 w-full h-full min-h-[380px] lg:min-h-full flex overflow-hidden">
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
