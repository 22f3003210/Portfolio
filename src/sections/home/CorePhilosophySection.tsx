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
    <section className="relative bg-[#F8FAFC] pt-20 pb-24 px-6 overflow-hidden border-b border-border-light">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0170B9_1.5px,transparent_1.5px)] [background-size:24px_24px] z-0" />
      
      {/* Ambient colored glows */}
      <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-[#8BC63F]/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] bg-[#0170B9]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#8BC63F] border border-[#8BC63F]/30 bg-[#8BC63F]/5 px-4 py-1.5 mb-8 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8BC63F] animate-ping" />
            Core Positioning
          </span>
        </motion.div>

        <motion.h1 
          {...fadeUp(0.08)} 
          className="font-extrabold text-[#0B1E2E] tracking-tight leading-tight mb-12 animate-fade-in" 
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
        >
          The Future Belongs to Businesses <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-[#8BC63F] via-emerald-400 to-sky-400 bg-clip-text text-transparent">
            That Understand Their Data.
          </span>
        </motion.h1>

        {/* Split Content: Left side pointwise list, Right side visual diagram */}
        <motion.div 
          {...fadeUp(0.12)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-[1000px] mx-auto my-10 items-stretch"
        >
          {/* Left Column: Point-wise List (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-gradient-to-br from-[#0B1E2E] to-[#04101A] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md flex-1 flex flex-col justify-between transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_-12px_rgba(140,198,63,0.22)]">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8BC63F] animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8BC63F] font-mono">Architecture Objectives</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Know what exists and what needs to be measured before making decisions.",
                    "Determine what data should be collected and why it matters.",
                    "Convert business activities into meaningful performance metrics.",
                    "Visualize trends and answer key business questions.",
                    "Understand why outcomes happened, not just what happened."
                  ].map((point, idx) => (
                    <div 
                      key={idx} 
                      className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#8BC63F]/35 hover:bg-white/[0.04] transition-all duration-300 shadow-md"
                    >
                      <div className="absolute top-3 right-4 font-mono text-[9px] font-bold text-slate-500 group-hover:text-[#8BC63F] transition-colors">
                        0{idx + 1}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#8BC63F]/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#8BC63F]/20 group-hover:scale-105">
                        <CheckCircle className="w-4.5 h-4.5 text-[#8BC63F] transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(140,198,63,0.7)]" />
                      </div>
                      <span className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium pr-6 transition-colors group-hover:text-white">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Conclusion point */}
              <div className="pt-5 mt-6 border-t border-white/10">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#8BC63F]/10 via-[#0170B9]/5 to-transparent border border-white/5 border-l-2 border-l-[#8BC63F] flex items-center gap-4 transition-all duration-300 hover:border-l-4 hover:border-l-[#8BC63F] hover:border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#8BC63F]/20 border border-[#8BC63F]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(140,198,63,0.15)]">
                    <TrendingUp className="w-5 h-5 text-[#8BC63F]" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-slate-200 leading-normal">
                    And thus, a detailed <span className="text-white font-bold underline decoration-[#8BC63F] decoration-2 underline-offset-4">Intelligence Architecture</span> is ready.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Pipeline Diagram (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-gradient-to-br from-[#0B1E2E] to-[#04101A] border border-white/10 hover:border-sky-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden flex-1 flex flex-col justify-center gap-8 backdrop-blur-md transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_-12px_rgba(12,139,224,0.22)]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0170B9]/5 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-400 font-mono">Core Philosophy</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                  Intelligence is the <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">output.</span> <br />
                  Data is the <span className="bg-gradient-to-r from-[#8BC63F] to-emerald-400 bg-clip-text text-transparent">input.</span>
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 rounded-md bg-black/30 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8BC63F] animate-ping" />
                  <span className="text-[9.5px] font-bold font-mono uppercase tracking-widest text-[#8BC63F] drop-shadow-[0_0_6px_rgba(140,198,63,0.4)]">
                    you never know what you can't see.
                  </span>
                </div>
              </div>
              
              {/* Data Flow Pipeline Diagram */}
              <div className="space-y-4 bg-black/25 border border-white/5 rounded-2xl p-5 relative z-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">Data Pipeline Flow</p>
                  <span className="text-[9px] px-2 py-0.5 bg-[#8BC63F]/10 border border-[#8BC63F]/20 text-[#8BC63F] rounded-full font-mono font-bold uppercase tracking-wider animate-pulse">Live</span>
                </div>
                
                <div className="flex flex-col">
                  
                  {/* Step 1: Input */}
                  <div className="group/step flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.01] border-l-2 border-l-[#8BC63F]/40 border-y border-r border-transparent hover:border-white/5 hover:border-l-2 hover:border-l-[#8BC63F] hover:bg-white/[0.03] transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-[#8BC63F]/10 border border-[#8BC63F]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(140,198,63,0.05)] transition-all duration-300 group-hover/step:bg-[#8BC63F]/20 group-hover/step:border-[#8BC63F]/40 group-hover/step:shadow-[0_0_15px_rgba(140,198,63,0.25)]">
                      <Database className="w-5 h-5 text-[#8BC63F] transition-transform duration-300 group-hover/step:rotate-12" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-white uppercase tracking-wider leading-none transition-colors duration-300 group-hover/step:text-[#8BC63F]">INPUT: Operational Data</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1.5 leading-normal">User activities, sales, transactions, cycles</p>
                    </div>
                  </div>

                  {/* Laser line Connector 1 */}
                  <div className="pl-[19px] my-1">
                    <div className="h-8 w-[2px] bg-slate-800 rounded-full laser-line" />
                  </div>

                  {/* Step 2: Database Structure */}
                  <div className="group/step flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.01] border-l-2 border-l-[#0170B9]/40 border-y border-r border-transparent hover:border-white/5 hover:border-l-2 hover:border-l-[#0170B9] hover:bg-white/[0.03] transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-[#0170B9]/10 border border-[#0170B9]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(1,112,185,0.05)] transition-all duration-300 group-hover/step:bg-[#0170B9]/20 group-hover/step:border-[#0170B9]/40 group-hover/step:shadow-[0_0_15px_rgba(1,112,185,0.25)]">
                      <Layers className="w-5 h-5 text-[#0170B9] transition-transform duration-300 group-hover/step:rotate-12" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-white uppercase tracking-wider leading-none transition-colors duration-300 group-hover/step:text-sky-400">PIPELINE: Database Architecture</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1.5 leading-normal">Entities, relationships, dimensional modeling</p>
                    </div>
                  </div>

                  {/* Laser line Connector 2 */}
                  <div className="pl-[19px] my-1">
                    <div className="h-8 w-[2px] bg-slate-800 rounded-full laser-line" />
                  </div>

                  {/* Step 3: Output */}
                  <div className="group/step flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.01] border-l-2 border-l-emerald-500/40 border-y border-r border-transparent hover:border-white/5 hover:border-l-2 hover:border-l-emerald-500 hover:bg-white/[0.03] transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-300 group-hover/step:bg-emerald-500/20 group-hover/step:border-emerald-500/40 group-hover/step:shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      <TrendingUp className="w-5 h-5 text-emerald-400 transition-transform duration-300 group-hover/step:translate-y-[-2px] group-hover/step:translate-x-[2px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-white uppercase tracking-wider leading-none transition-colors duration-300 group-hover/step:text-emerald-400">OUTPUT: Pure Intelligence</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1.5 leading-normal">Predictive analytics, business decisions, AI agents</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div {...fadeUp(0.18)} className="flex justify-center mt-16">
          <Link 
            to="/#contact" 
            className="group inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#0B1E2E] bg-[#8BC63F] px-10 py-4 hover:bg-[#0B1E2E] hover:text-white transition-all duration-300 shadow-xl shadow-[#8BC63F]/10 rounded-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Build Your Intelligence Infrastructure <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
