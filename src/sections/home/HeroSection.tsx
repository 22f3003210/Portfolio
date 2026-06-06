import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

// ─── Colours ──────────────────────────────────────────────────────────────────
const BLUE  = '#1f5fbf';
const NAVY  = '#0b2341';
const GREEN = '#8bc34a';

// ─── Top process steps ────────────────────────────────────────────────────────
const STEPS = [
  { label: 'ANALYZE',    sub: 'Understand\nwhat\'s happening' },
  { label: 'DIAGNOSE',   sub: 'Find root causes\nand gaps' },
  { label: 'DESIGN',     sub: 'Build the right\noperating model' },
  { label: 'IMPLEMENT',  sub: 'Execute with\ndiscipline' },
  { label: 'OPTIMIZE',   sub: 'Improve performance\ncontinuously' },
];

// ─── Bottom capabilities strip ────────────────────────────────────────────────
const CAPS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    ),
    title: 'BUSINESS ANALYSIS',
    desc: 'Understand processes, performance and business gaps',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>
      </svg>
    ),
    title: 'STRATEGY &\nTRANSFORMATION',
    desc: 'Create strategies that drive real change',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: 'OPERATIONS\nEXCELLENCE',
    desc: 'Design efficient, scalable and standard processes',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'PERFORMANCE\nMANAGEMENT',
    desc: 'Build KPI systems that drive accountability',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'RETAIL &\nJEWELLERY',
    desc: 'Optimize retail operations, inventory and customer experience',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'TECHNOLOGY\nENABLEMENT',
    desc: 'Leverage technology to automate and scale',
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } } as const;
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <div className="bg-white w-full">

      {/* ══════════════════════════════════════════
          MAIN HERO BODY
          ══════════════════════════════════════════ */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-[44%_56%] gap-8 lg:gap-4 items-start min-h-[520px]">

          {/* ── LEFT CONTENT ── */}
          <motion.div
            className="flex flex-col gap-5 pt-4"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.span
              variants={item}
              className="inline-block self-start px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] border"
              style={{ color: BLUE, borderColor: `${BLUE}50`, background: 'white' }}
            >
              Retail Business Management Consultant
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[42px] md:text-[52px] lg:text-[52px] font-black uppercase leading-[1.05] tracking-tight"
              style={{ color: NAVY }}
            >
              YOU CAN'T SCALE<br />
              <span style={{ color: NAVY }}>WHAT YOU CAN'T SEE.</span>
            </motion.h1>

            {/* Green underline */}
            <motion.div variants={item} className="w-10 h-1 rounded-full" style={{ background: GREEN }} />

            {/* Description */}
            <motion.p variants={item} className="text-sm text-gray-700 leading-relaxed max-w-sm">
              I design operational frameworks, KPI architectures,
              and decision systems that help retail businesses
              scale with confidence.
            </motion.p>

            {/* Quote */}
            <motion.div variants={item} className="max-w-sm">
              <span className="text-4xl font-black leading-none" style={{ color: GREEN }}>"</span>
              <p className="text-sm italic text-gray-700 leading-relaxed -mt-2">
                "The next decade of jewellery retail belongs to the systemized.
                The rest will be managed out of existence."
              </p>
              <span className="text-4xl font-black leading-none float-right -mt-4" style={{ color: GREEN }}>"</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1 clear-both">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-wider px-5 py-3 transition-all hover:opacity-90"
                style={{ background: GREEN }}
              >
                <Calendar className="w-4 h-4" />
                Connect Me Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-5 py-3 border-2 transition-all hover:bg-gray-50"
                style={{ color: NAVY, borderColor: NAVY }}
              >
                <Calendar className="w-4 h-4" />
                Book a 30-min call
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Process + Illustration ── */}
          <motion.div
            className="flex flex-col gap-3 pt-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
          >
            {/* "I HELP YOU BUILD" header */}
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">I Help You Build</p>
              <p className="text-sm font-black uppercase tracking-wide" style={{ color: BLUE }}>Retail Business Systems</p>
            </div>

            {/* Process flow — 5 steps */}
            <div className="flex items-start justify-between gap-1 px-2">
              {STEPS.map((s, i) => {
                const isLast = i === STEPS.length - 1;
                return (
                  <div key={s.label} className="flex items-center gap-1">
                    <div className="flex flex-col items-center text-center w-[90px]">
                      {/* Circle icon */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5 flex-shrink-0"
                        style={{ background: i < 2 ? NAVY : i < 4 ? BLUE : GREEN }}
                      >
                        <span className="text-white text-[11px] font-black">{i + 1}</span>
                      </div>
                      <span className="text-[8.5px] font-black uppercase tracking-wide" style={{ color: NAVY }}>{s.label}</span>
                      <span className="text-[8px] text-gray-500 leading-tight mt-0.5 whitespace-pre-line">{s.sub}</span>
                    </div>
                    {/* Arrow connector */}
                    {!isLast && (
                      <ChevronRight className="w-4 h-4 flex-shrink-0 -mt-6 opacity-40" style={{ color: BLUE }} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Main illustration image */}
            <div className="relative w-full rounded-lg overflow-hidden" style={{ height: '340px' }}>
              <img
                src="/hero_illustration.png"
                alt="Business consulting framework illustration"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center top' }}
              />
              {/* Subtle overlay for polish */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.04) 0%, transparent 30%)' }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM CAPABILITIES STRIP
          ══════════════════════════════════════════ */}
      <div className="border-t border-gray-100 bg-gray-50 py-6 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CAPS.map((cap) => (
            <div
              key={cap.title}
              className="flex items-start gap-3 group cursor-default"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5">{cap.icon}</div>
              {/* Text */}
              <div>
                <p className="text-[9px] font-black uppercase tracking-wide leading-tight whitespace-pre-line" style={{ color: NAVY }}>
                  {cap.title}
                </p>
                <p className="text-[9px] text-gray-500 leading-snug mt-0.5">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}