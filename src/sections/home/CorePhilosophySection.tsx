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
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#2d6215] border border-[#2d6215]/30 bg-[#2d6215]/5 px-4 py-1.5 mb-8 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6215] animate-ping" />
            Core Positioning
          </span>
        </motion.div>

        <motion.h2 
          {...fadeUp(0.08)} 
          className="font-extrabold text-[#0B1E2E] tracking-tight leading-tight mb-12 animate-fade-in" 
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
        >
          The Future Belongs to Businesses <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-[#2d6215] via-emerald-600 to-[#0170B9] bg-clip-text text-transparent">
            That Understand Their Data.
          </span>
        </motion.h2>

        {/* Split Content: Left side pointwise list, Right side visual diagram */}
        <motion.div 
          {...fadeUp(0.12)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-[1000px] mx-auto my-10 items-stretch"
        >
          {/* Left Column: Point-wise List (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 backdrop-blur-md flex-1 flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-[0_20px_50px_-12px_rgba(140,198,63,0.12)]">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d6215] animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#2d6215] font-mono">Architecture Objectives</span>
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
                      className="group relative flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-[#2d6215]/35 hover:bg-slate-50/80 transition-all duration-300 shadow-sm"
                    >
                      <div className="absolute top-3 right-4 font-mono text-xs font-bold text-slate-500 group-hover:text-[#2d6215] transition-colors">
                        0{idx + 1}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#2d6215]/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#2d6215]/20 group-hover:scale-105">
                        <CheckCircle className="w-4.5 h-4.5 text-[#2d6215] transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(45,98,21,0.5)]" />
                      </div>
                      <span className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium pr-6 transition-colors group-hover:text-[#0B1E2E]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Conclusion point */}
              <div className="pt-5 mt-6 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#2d6215]/5 via-[#0170B9]/5 to-transparent border border-slate-100 border-l-2 border-l-[#2d6215] flex items-center gap-4 transition-all duration-300 hover:border-l-4 hover:border-l-[#2d6215] hover:border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-[#2d6215]/10 border border-[#2d6215]/20 flex items-center justify-center shrink-0 shadow-sm">
                    <TrendingUp className="w-5 h-5 text-[#2d6215]" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-slate-700 leading-normal">
                    And thus, a detailed <span className="text-[#0B1E2E] font-bold underline decoration-[#2d6215] decoration-2 underline-offset-4">Intelligence Architecture</span> is ready.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Pipeline Diagram (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white border border-slate-200/80 hover:border-sky-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden flex-1 flex flex-col justify-center gap-8 backdrop-blur-md transition-all duration-500 shadow-md hover:shadow-[0_20px_50px_-12px_rgba(12,139,224,0.12)]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0170B9]/3 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-sky-700 font-mono">Core Philosophy</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0B1E2E] leading-tight">
                  Intelligence is the <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">output.</span> <br />
                  Data is the <span className="bg-gradient-to-r from-[#2d6215] to-emerald-600 bg-clip-text text-transparent">input.</span>
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 rounded-md bg-slate-50 border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d6215] animate-ping" />
                  <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#2d6215]">
                    you never know what you can't see.
                  </span>
                </div>
              </div>
              
              {/* Data Flow Pipeline Diagram */}
              <div className="space-y-4 bg-slate-50/50 border border-slate-100 rounded-2xl p-5 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-700 font-mono">Data Pipeline Flow</p>
                  <span className="text-xs px-2.5 py-0.5 bg-[#2d6215]/10 border border-[#2d6215]/20 text-[#2d6215] rounded-full font-mono font-bold uppercase tracking-wider">Live</span>
                </div>
                
                <div className="flex flex-col">
                  
                  {/* Step 1: Input */}
                  <div className="group/step flex items-center gap-4 p-3.5 rounded-xl bg-white border-l-2 border-l-[#2d6215]/60 border-y border-r border-slate-100 hover:border-slate-200 hover:border-l-2 hover:border-l-[#2d6215] hover:bg-slate-50/60 transition-all duration-300 shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-[#2d6215]/10 border border-[#2d6215]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover/step:bg-[#2d6215]/20">
                      <Database className="w-5 h-5 text-[#2d6215] transition-transform duration-300 group-hover/step:rotate-12" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#0B1E2E] uppercase tracking-wider leading-none transition-colors duration-300 group-hover/step:text-[#2d6215]">INPUT: Operational Data</p>
                      <p className="text-xs text-slate-600 font-medium mt-1.5 leading-normal">User activities, sales, transactions, cycles</p>
                    </div>
                  </div>

                  {/* Laser line Connector 1 */}
                  <div className="pl-[19px] my-1">
                    <div className="h-8 w-[2px] bg-slate-200 rounded-full" />
                  </div>

                  {/* Step 2: Database Structure */}
                  <div className="group/step flex items-center gap-4 p-3.5 rounded-xl bg-white border-l-2 border-l-[#0170B9]/60 border-y border-r border-slate-100 hover:border-slate-200 hover:border-l-2 hover:border-l-[#0170B9] hover:bg-slate-50/60 transition-all duration-300 shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-[#0170B9]/10 border border-[#0170B9]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover/step:bg-[#0170B9]/20">
                      <Layers className="w-5 h-5 text-[#0170B9] transition-transform duration-300 group-hover/step:rotate-12" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#0B1E2E] uppercase tracking-wider leading-none transition-colors duration-300 group-hover/step:text-sky-600">PIPELINE: Database Architecture</p>
                      <p className="text-xs text-slate-600 font-medium mt-1.5 leading-normal">Entities, relationships, dimensional modeling</p>
                    </div>
                  </div>

                  {/* Laser line Connector 2 */}
                  <div className="pl-[19px] my-1">
                    <div className="h-8 w-[2px] bg-slate-200 rounded-full" />
                  </div>

                  {/* Step 3: Output */}
                  <div className="group/step flex items-center gap-4 p-3.5 rounded-xl bg-white border-l-2 border-l-emerald-600/60 border-y border-r border-slate-100 hover:border-slate-200 hover:border-l-2 hover:border-l-emerald-600 hover:bg-slate-50/60 transition-all duration-300 shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover/step:bg-emerald-600/20">
                      <TrendingUp className="w-5 h-5 text-emerald-700 transition-transform duration-300 group-hover/step:translate-y-[-2px] group-hover/step:translate-x-[2px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#0B1E2E] uppercase tracking-wider leading-none transition-colors duration-300 group-hover/step:text-emerald-700">OUTPUT: Pure Intelligence</p>
                      <p className="text-xs text-slate-600 font-medium mt-1.5 leading-normal">Predictive analytics, business decisions, AI agents</p>
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
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0B1E2E] bg-[#8BC63F] px-10 py-4 hover:bg-[#0B1E2E] hover:text-white transition-all duration-300 shadow-xl shadow-[#8BC63F]/10 rounded-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Build Your Intelligence Infrastructure <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
