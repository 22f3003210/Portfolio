import { motion } from 'framer-motion';
import { Calendar, Clock3, BarChart3, TrendingUp, Workflow, PieChart, Gem, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Brand colours ────────────────────────────────────────────────────────────
const NAVY  = '#0b2341';
const BLUE  = '#1f5fbf';
const GREEN = '#8bc34a';

// ─── Bottom capability cards ──────────────────────────────────────────────────
const CAPS = [
  {
    icon: BarChart3,
    colorType: 'blue',
    title: 'BUSINESS ANALYSIS',
    desc: 'Uncover gaps, root causes and growth opportunities.',
    hoverClass: 'hover:border-[#1f5fbf]/30 hover:bg-blue-50/20',
  },
  {
    icon: TrendingUp,
    colorType: 'green',
    title: 'STRATEGY &\nTRANSFORMATION',
    desc: 'Design strategies that drive real change.',
    hoverClass: 'hover:border-[#8bc34a]/30 hover:bg-green-50/20',
  },
  {
    icon: Workflow,
    colorType: 'blue',
    title: 'OPERATIONS',
    desc: 'Design efficient, scalable and standard processes.',
    hoverClass: 'hover:border-[#1f5fbf]/30 hover:bg-blue-50/20',
  },
  {
    icon: PieChart,
    colorType: 'green',
    title: 'PERFORMANCE\nMANAGEMENT',
    desc: 'Build KPI systems that drive accountability.',
    hoverClass: 'hover:border-[#8bc34a]/30 hover:bg-green-50/20',
  },
  {
    icon: Gem,
    colorType: 'green',
    title: 'RETAIL &\nJEWELLERY',
    desc: 'Optimize retail operations, inventory and customer experience.',
    hoverClass: 'hover:border-[#8bc34a]/30 hover:bg-green-50/20',
  },
  {
    icon: Laptop,
    colorType: 'blue',
    title: 'TECHNOLOGY\nENABLEMENT',
    desc: 'Leverage technology to automate and scale.',
    hoverClass: 'hover:border-[#1f5fbf]/30 hover:bg-blue-50/20',
  },
];

// ─── Fade-up helper ───────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

// ─── HeroSection ─────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <div className="bg-white w-full">

      {/* ════════════════════ MAIN HERO ════════════════════ */}
      <div className="relative bg-white overflow-hidden" style={{
        backgroundImage: `
          radial-gradient(#1f5fbf0a 1.2px, transparent 1.2px),
          linear-gradient(to right, #1f5fbf05 1px, transparent 1px),
          linear-gradient(to bottom, #1f5fbf05 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: 'center center'
      }}>
        <div 
          className="max-w-[1280px] mx-auto px-6 lg:px-10
                     grid grid-cols-1 lg:grid-cols-[38%_62%]
                     items-center gap-6 lg:gap-0 relative z-10"
        >

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-5 py-10 pr-4 lg:pr-8 lg:py-14 relative z-10">

            {/* Badge */}
            <motion.span
              {...fadeUp(0)}
              className="self-start px-3 py-[5px] text-[11px] font-black uppercase tracking-[0.14em] border rounded-sm"
              style={{ color: BLUE, borderColor: `${BLUE}55` }}
            >
              Retail Business Management Consultant
            </motion.span>

            {/* Headline — 2 lines, large, no wrap */}
            <motion.h1 {...fadeUp(0.07)} className="leading-[1.04] tracking-tight">
              <span
                className="block font-black uppercase whitespace-nowrap"
                style={{ color: NAVY, fontSize: 'clamp(28px, 3.8vw, 48px)' }}
              >
                YOU CAN’T SCALE
              </span>
              <span
                className="block font-black uppercase whitespace-nowrap"
                style={{ color: BLUE, fontSize: 'clamp(28px, 3.8vw, 48px)' }}
              >
                WHAT YOU CAN’T SEE.
              </span>
            </motion.h1>

            {/* Green rule */}
            <motion.div
              {...fadeUp(0.12)}
              className="w-12 h-[3.5px] rounded-full"
              style={{ background: GREEN }}
            />

            {/* Description */}
            <motion.p {...fadeUp(0.16)} className="text-[14.5px] text-gray-700 leading-relaxed max-w-[500px] lg:max-w-none">
              I design operational frameworks, KPI architectures, and decision systems<br className="hidden sm:inline" /> that help retail businesses scale with confidence.
            </motion.p>

            {/* Quote */}
            <motion.div {...fadeUp(0.20)} className="max-w-[500px] lg:max-w-none relative flex gap-1.5">
              <span className="text-[42px] font-serif font-black leading-none shrink-0" style={{ color: GREEN }}>“</span>
              <div className="flex flex-col">
                <p className="text-[14px] italic text-gray-600 leading-relaxed font-semibold">
                  The next decade of jewellery retail belongs to the systemized.<br className="hidden sm:inline" /> The rest will be managed out of existence.
                  <span className="text-[42px] font-serif font-black leading-[0] inline-block align-middle ml-1" style={{ color: GREEN }}>”</span>
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3 pt-1 clear-both">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 text-white text-[12px] font-black uppercase tracking-wider px-6 py-[13px] transition-opacity hover:opacity-90 shadow-md rounded-sm"
                style={{ background: GREEN }}
              >
                <Calendar className="w-4 h-4" />
                Connect Me Now
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wider px-6 py-[13px] border-2 transition-all duration-300 hover:bg-[#1f5fbf] hover:text-white hover:border-[#1f5fbf] backdrop-blur-sm rounded-sm"
                style={{ color: BLUE, borderColor: BLUE }}
              >
                <Clock3 className="w-4 h-4" />
                Book a 30-min Call
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Full illustration inside the grid column ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative z-10 py-2 mix-blend-multiply flex items-center justify-end lg:pl-8"
          >
            <img
              src="/hero_background.jpg"
              alt="Retail Business Systems consulting framework"
              className="w-full h-auto block lg:scale-110"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>

        </div>
      </div>

      {/* ════════════════════ BOTTOM CAPABILITIES STRIP ════════════════════ */}
      <div className="relative px-6 pt-1 pb-4 z-20 bg-gray-50/30">
        <div className="max-w-[1280px] mx-auto bg-white rounded-[12px] shadow-xl border border-gray-100/60 py-2 px-3 md:py-2.5 md:px-4 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {CAPS.map((cap) => {
              const IconComponent = cap.icon;
              const isBlue = cap.colorType === 'blue';
              return (
                <div 
                  key={cap.title} 
                  className={`group p-2 flex flex-col gap-1 border border-transparent rounded-lg transition-all duration-300 cursor-pointer hover:shadow-sm hover:-translate-y-0.5 ${cap.hoverClass}`}
                >
                  <div className="mb-0.5 transition-transform duration-300 group-hover:scale-105">
                    <div className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300
                      ${isBlue 
                        ? 'bg-blue-50/60 text-[#1f5fbf] border-blue-100/50 group-hover:bg-[#1f5fbf] group-hover:text-white group-hover:border-[#1f5fbf]' 
                        : 'bg-green-50/60 text-[#8bc34a] border-green-100/50 group-hover:bg-[#8bc34a] group-hover:text-white group-hover:border-[#8bc34a]'
                      }`}
                    >
                      <IconComponent size={18} strokeWidth={2.2} />
                    </div>
                  </div>
                  <p
                    className="text-[10.5px] font-black uppercase tracking-wide leading-tight whitespace-pre-line"
                    style={{ color: NAVY }}
                  >
                    {cap.title}
                  </p>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{cap.desc}</p>
                  <div className="w-8 h-[2px] rounded-full mt-auto transition-all duration-300 group-hover:w-12" style={{ background: GREEN }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}