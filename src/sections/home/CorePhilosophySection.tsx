import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Database, 
  Layers, 
  TrendingUp, 
  CheckCircle
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' } as const,
});

export function CorePhilosophySection() {
  return (
    <section className="relative bg-[#0B1E2E] pt-14 pb-16 px-6 overflow-hidden border-b border-white/5">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient colored glows */}
      <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-[#8BC63F]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] bg-[#0170B9]/8 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#8BC63F] border border-[#8BC63F]/30 px-4 py-1.5 mb-8">
            Core Positioning
          </span>
        </motion.div>

        <motion.h1 
          {...fadeUp(0.08)} 
          className="font-extrabold text-white tracking-tight leading-tight mb-6" 
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          The Future Belongs to Businesses <br className="hidden md:inline" />
          <span className="text-[#8BC63F]">That Understand Their Data.</span>
        </motion.h1>

        {/* Split Content: Left side pointwise list, Right side visual diagram */}
        <motion.div 
          {...fadeUp(0.12)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-[1000px] mx-auto my-10"
        >
          {/* Left Column: Point-wise List (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#8BC63F] block mb-4 font-mono">Architecture Objectives</span>
                
                <div className="space-y-4">
                  {[
                    "Know what exists and what needs to be measured before making decisions.",
                    "Determine what data should be collected and why it matters.",
                    "Convert business activities into meaningful performance metrics.",
                    "Visualize trends and answer key business questions.",
                    "Understand why outcomes happened, not just what happened."
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#8BC63F] shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Conclusion point */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8BC63F]/10 border border-[#8BC63F]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#8BC63F]" />
                </div>
                <p className="text-xs md:text-sm font-bold text-white">
                  And thus, a detailed <span className="text-[#8BC63F]">Intelligence Architecture</span> is ready.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Pipeline Diagram (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden h-full flex flex-col justify-between backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0170B9]/5 rounded-full blur-xl pointer-events-none" />
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-sky-400 block mb-2 font-mono">Core Philosophy</span>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                    Intelligence is the output. <br />
                    <span className="text-[#8BC63F]">Data is the input.</span>
                  </h3>
                  <span className="block text-xs font-bold text-[#8BC63F]/80 mt-2 italic font-mono uppercase tracking-wider">
                    You never know what you can't see.
                  </span>
                </div>
                
                {/* Data Flow Pipeline Diagram */}
                <div className="space-y-3 bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#8BC63F] font-mono">Data Pipeline Flow</p>
                  <div className="flex flex-col gap-3">
                    
                    {/* Step 1: Input */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#8BC63F]/10 border border-[#8BC63F]/20 flex items-center justify-center shrink-0">
                        <Database className="w-4 h-4 text-[#8BC63F]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-white leading-none">INPUT: Operational Data</p>
                        <p className="text-[9.5px] text-slate-400 font-medium mt-0.5 truncate">User activities, sales, transactions, cycles</p>
                      </div>
                    </div>

                    {/* Arrow connector */}
                    <div className="pl-3.5 flex items-center">
                      <div className="h-4 w-0.5 bg-gradient-to-b from-[#8BC63F] to-[#0170B9] opacity-50" />
                    </div>

                    {/* Step 2: Database Structure */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0170B9]/10 border border-[#0170B9]/20 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4 text-[#0170B9]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-white leading-none">PIPELINE: Database Architecture</p>
                        <p className="text-[9.5px] text-slate-400 font-medium mt-0.5 truncate">Entities, relationships, dimensional modeling</p>
                      </div>
                    </div>

                    {/* Arrow connector */}
                    <div className="pl-3.5 flex items-center">
                      <div className="h-4 w-0.5 bg-gradient-to-b from-[#0170B9] to-[#8BC63F] opacity-50" />
                    </div>

                    {/* Step 3: Output */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-white leading-none">OUTPUT: Pure Intelligence</p>
                        <p className="text-[9.5px] text-slate-400 font-medium mt-0.5 truncate">Predictive analytics, business decisions, AI agents</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div {...fadeUp(0.18)} className="flex justify-center mt-12">
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#0B1E2E] bg-[#8BC63F] px-8 py-4 hover:bg-white hover:text-[#0B1E2E] transition-colors duration-300 shadow-lg shadow-[#8BC63F]/10 rounded-sm"
          >
            Build Your Intelligence Infrastructure <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
