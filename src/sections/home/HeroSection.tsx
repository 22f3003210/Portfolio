import { motion } from 'framer-motion';
import { Calendar, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Brand colours ────────────────────────────────────────────────────────────
const NAVY  = '#0b2341';
const BLUE  = '#1f5fbf';
const GREEN = '#8bc34a';

// ─── Bottom capability cards ──────────────────────────────────────────────────
const CAPS = [
  {
    icon: (
      <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
        <circle cx="18" cy="18" r="17" stroke={BLUE} strokeWidth="1.8"/>
        <polyline points="10,23 14,16 18,19 23,13 28,10" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="10" r="2.5" fill={BLUE}/>
      </svg>
    ),
    title: 'BUSINESS ANALYSIS',
    desc: 'Uncover gaps, root causes and growth opportunities.',
    hoverClass: 'hover:border-[#1f5fbf]/30 hover:bg-blue-50/20',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
        <circle cx="18" cy="18" r="17" stroke={BLUE} strokeWidth="1.8"/>
        <path d="M11 19 L15 13 L21 20 L27 15" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 11 L28 11 L28 16" stroke={GREEN} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'STRATEGY &\nTRANSFORMATION',
    desc: 'Design strategies that drive real change.',
    hoverClass: 'hover:border-[#8bc34a]/30 hover:bg-green-50/20',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
        <circle cx="18" cy="18" r="17" stroke={BLUE} strokeWidth="1.8"/>
        <circle cx="18" cy="18" r="4.5" stroke={BLUE} strokeWidth="2"/>
        <path d="M18 7 L18 11M18 25 L18 29M7 18 L11 18M25 18 L29 18" stroke={BLUE} strokeWidth="2" strokeLinecap="round"/>
        <path d="M10.8 10.8 L13.5 13.5M22.5 22.5 L25.2 25.2M25.2 10.8 L22.5 13.5M13.5 22.5 L10.8 25.2" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'OPERATIONS',
    desc: 'Design efficient, scalable and standard processes.',
    hoverClass: 'hover:border-[#1f5fbf]/30 hover:bg-blue-50/20',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
        <circle cx="18" cy="18" r="17" stroke={GREEN} strokeWidth="1.8"/>
        <path d="M18 18 L18 7 A11 11 0 0 1 27.5 12.5 Z" fill={GREEN} opacity="0.85"/>
        <path d="M18 18 L27.5 23.5 A11 11 0 0 1 8.5 23.5 Z" fill={BLUE} opacity="0.7"/>
        <path d="M18 18 L8.5 12.5 A11 11 0 0 1 18 7 Z" fill={BLUE} opacity="0.4"/>
      </svg>
    ),
    title: 'PERFORMANCE\nMANAGEMENT',
    desc: 'Build KPI systems that drive accountability.',
    hoverClass: 'hover:border-[#8bc34a]/30 hover:bg-green-50/20',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
        <circle cx="18" cy="18" r="17" stroke={GREEN} strokeWidth="1.8"/>
        <polygon points="18,9 21.5,15 29,16 23.5,21.5 25,29 18,25.5 11,29 12.5,21.5 7,16 14.5,15" stroke={GREEN} strokeWidth="1.8" fill="none"/>
      </svg>
    ),
    title: 'RETAIL &\nJEWELLERY',
    desc: 'Optimize retail operations, inventory and customer experience.',
    hoverClass: 'hover:border-[#8bc34a]/30 hover:bg-green-50/20',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
        <circle cx="18" cy="18" r="17" stroke={BLUE} strokeWidth="1.8"/>
        <rect x="9" y="12" width="18" height="11" rx="2" stroke={BLUE} strokeWidth="1.8"/>
        <path d="M13 23 L13 26 M23 23 L23 26 M11 26 L25 26" stroke={BLUE} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3.5" fill={GREEN}/>
        <path d="M22.8 24 L24 25.2 L26 23" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
                     grid grid-cols-1 lg:grid-cols-[33%_67%]
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
                </p>
              </div>
              <span className="text-[42px] font-serif font-black leading-none self-end shrink-0" style={{ color: GREEN }}>”</span>
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
            className="w-full relative z-10 py-2 mix-blend-multiply flex items-center justify-end lg:pl-4"
          >
            <img
              src="/hero_background.jpg"
              alt="Retail Business Systems consulting framework"
              className="w-full h-auto block"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>

        </div>
      </div>

      {/* ════════════════════ BOTTOM CAPABILITIES STRIP ════════════════════ */}
      <div className="relative px-6 pt-6 pb-16 z-20 bg-gray-50/30">
        <div className="max-w-[1280px] mx-auto bg-white rounded-[16px] shadow-2xl border border-gray-100/60 p-4 md:p-6 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CAPS.map((cap) => (
              <div 
                key={cap.title} 
                className={`group p-4 flex flex-col gap-2.5 border border-transparent rounded-xl transition-all duration-300 cursor-pointer hover:shadow-md hover:-translate-y-1 ${cap.hoverClass}`}
              >
                <div className="mb-1 transition-transform duration-300 group-hover:scale-105">{cap.icon}</div>
                <p
                  className="text-[11.5px] font-black uppercase tracking-wide leading-tight whitespace-pre-line"
                  style={{ color: NAVY }}
                >
                  {cap.title}
                </p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{cap.desc}</p>
                <div className="w-10 h-[3px] rounded-full mt-auto transition-all duration-300 group-hover:w-16" style={{ background: GREEN }} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}