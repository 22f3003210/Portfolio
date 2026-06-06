import { motion } from 'framer-motion';
import { Calendar, Clock3, Search, Puzzle, LayoutGrid, Settings2, TrendingUp } from 'lucide-react';

// ─── Brand colours ────────────────────────────────────────────────────────────
const NAVY  = '#0b2341';
const BLUE  = '#1f5fbf';
const GREEN = '#8bc34a';

// ─── 5-step process (right side ribbon) ──────────────────────────────────────
const STEPS = [
  { label: 'ANALYZE',   sub: "Understand\nwhat's happening",    Icon: Search    },
  { label: 'DIAGNOSE',  sub: 'Find root causes\nand gaps',       Icon: Puzzle    },
  { label: 'DESIGN',    sub: 'Build the right\noperating model', Icon: LayoutGrid },
  { label: 'IMPLEMENT', sub: 'Execute with\ndiscipline',         Icon: Settings2  },
  { label: 'OPTIMIZE',  sub: 'Improve performance\ncontinuously',Icon: TrendingUp },
];

// ─── 6 bottom capability cards ────────────────────────────────────────────────
const CAPS = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="15" stroke={BLUE} strokeWidth="2"/>
        <polyline points="9,20 13,14 17,17 22,11" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="11" r="2" fill={BLUE}/>
      </svg>
    ),
    title: 'BUSINESS ANALYSIS',
    desc: 'Uncover gaps, root causes and growth opportunities.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="15" stroke={BLUE} strokeWidth="2"/>
        <path d="M10 16 L14 12 L20 18 L24 14" stroke={GREEN} strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 10 L26 10 L26 15" stroke={GREEN} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'STRATEGY &\nTRANSFORMATION',
    desc: 'Design strategies that drive real change.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="15" stroke={BLUE} strokeWidth="2"/>
        <circle cx="16" cy="16" r="4" stroke={BLUE} strokeWidth="2"/>
        <path d="M16 6 L16 9M16 23 L16 26M6 16 L9 16M23 16 L26 16" stroke={BLUE} strokeWidth="2" strokeLinecap="round"/>
        <path d="M9.4 9.4 L11.5 11.5M20.5 20.5 L22.6 22.6M22.6 9.4 L20.5 11.5M11.5 20.5 L9.4 22.6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'OPERATIONS',
    desc: 'Design efficient, scalable and standard processes.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="15" stroke={GREEN} strokeWidth="2"/>
        <path d="M16 16 L16 6 A10 10 0 0 1 24.66 11 Z" fill={GREEN} opacity="0.8"/>
        <path d="M16 16 L24.66 21 A10 10 0 0 1 7.34 21 Z" fill={BLUE} opacity="0.7"/>
        <path d="M16 16 L7.34 11 A10 10 0 0 1 16 6 Z" fill={BLUE} opacity="0.4"/>
      </svg>
    ),
    title: 'PERFORMANCE\nMANAGEMENT',
    desc: 'Build KPI systems that drive accountability.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="15" stroke={GREEN} strokeWidth="2"/>
        <polygon points="16,8 19.5,14 27,15 21.5,20 23,27 16,23.5 9,27 10.5,20 5,15 12.5,14" stroke={GREEN} strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: 'RETAIL &\nJEWELLERY',
    desc: 'Optimize retail operations, inventory and customer experience.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="15" stroke={BLUE} strokeWidth="2"/>
        <rect x="8" y="10" width="16" height="10" rx="2" stroke={BLUE} strokeWidth="2"/>
        <path d="M12 20 L12 23 M20 20 L20 23 M10 23 L22 23" stroke={BLUE} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="22" r="3" fill={GREEN}/>
        <path d="M19 22 L20 23 L22 21" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'TECHNOLOGY\nENABLEMENT',
    desc: 'Leverage technology to automate and scale.',
  },
];

// ─── Fade-in animation ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

// ─── Component ────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <div className="bg-white w-full">

      {/* ══════════════ MAIN HERO ══════════════ */}
      <div className="bg-white border-b border-gray-100">
        <div
          className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10
                     grid grid-cols-1 lg:grid-cols-[42%_58%] gap-6 lg:gap-2
                     items-start"
        >

          {/* ── LEFT ─────────────────────────── */}
          <div className="flex flex-col gap-5 pt-2">

            {/* Badge */}
            <motion.span
              {...fadeUp(0)}
              className="self-start px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] border"
              style={{ color: BLUE, borderColor: `${BLUE}60` }}
            >
              Retail Business Management Consultant
            </motion.span>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.08)} className="leading-[1.03] tracking-tight">
              <span
                className="block text-[46px] md:text-[54px] font-black uppercase"
                style={{ color: NAVY }}
              >
                YOU CAN'T SCALE
              </span>
              <span
                className="block text-[46px] md:text-[54px] font-black uppercase"
                style={{ color: BLUE }}
              >
                WHAT YOU CAN'T SEE.
              </span>
            </motion.h1>

            {/* Green rule */}
            <motion.div {...fadeUp(0.14)} className="w-10 h-[3px] rounded-full" style={{ background: GREEN }} />

            {/* Description */}
            <motion.p {...fadeUp(0.18)} className="text-[13.5px] text-gray-700 leading-relaxed max-w-[360px]">
              I design operational frameworks, KPI architectures,
              and decision systems that help retail businesses
              scale with confidence.
            </motion.p>

            {/* Quote */}
            <motion.div {...fadeUp(0.22)} className="max-w-[360px]">
              <span className="text-[42px] font-black leading-none block -mb-3" style={{ color: GREEN }}>"</span>
              <p className="text-[13px] italic text-gray-600 leading-relaxed">
                "The next decade of jewellery retail belongs to the systemized.
                The rest will be managed out of existence."
              </p>
              <span className="text-[42px] font-black leading-none block text-right -mt-3" style={{ color: GREEN }}>"</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3 pt-1">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-[11px] font-black uppercase tracking-wider px-5 py-3 transition-opacity hover:opacity-90"
                style={{ background: GREEN }}
              >
                <Calendar className="w-4 h-4" />
                Connect Me Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider px-5 py-3 border-2 transition-colors hover:bg-gray-50"
                style={{ color: NAVY, borderColor: NAVY }}
              >
                <Clock3 className="w-4 h-4" />
                Book a 30-min call
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >

            {/* "I Help You Build" header */}
            <div className="text-center pt-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
                I Help You Build
              </p>
              <p className="text-[13px] font-black uppercase tracking-wide" style={{ color: BLUE }}>
                Retail Business Systems
              </p>
            </div>

            {/* 5-step workflow ribbon */}
            <div className="flex items-start justify-between px-2">
              {STEPS.map(({ label, sub, Icon }, i) => (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center text-center w-[82px]">
                    {/* Circle icon */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-1.5"
                      style={{
                        background: i === 0 ? NAVY : i === 1 ? '#1a4a9a' : i === 2 ? BLUE : i === 3 ? '#2a7ab8' : GREEN,
                      }}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-wide" style={{ color: NAVY }}>
                      {label}
                    </span>
                    <span className="text-[7.5px] text-gray-500 leading-tight mt-0.5 whitespace-pre-line">
                      {sub}
                    </span>
                  </div>
                  {/* Dashed arrow connector */}
                  {i < STEPS.length - 1 && (
                    <div className="flex items-center mb-8 mx-0.5">
                      <div className="w-4 h-[1.5px]" style={{ background: `repeating-linear-gradient(90deg, ${BLUE} 0px, ${BLUE} 4px, transparent 4px, transparent 7px)` }} />
                      <svg width="6" height="8" viewBox="0 0 6 8" fill={BLUE}>
                        <path d="M0 0 L6 4 L0 8 Z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Illustration image */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: '350px' }}
            >
              <img
                src="/hero_illustration.png"
                alt="Business consulting framework — consultant at whiteboard, architecture stack, team at desk"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
              {/* Subtle left fade */}
              <div
                className="absolute inset-y-0 left-0 w-8 pointer-events-none"
                style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.5), transparent)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ══════════════ BOTTOM CAPABILITIES STRIP ══════════════ */}
      <div className="bg-white border-t border-gray-100 py-7 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CAPS.map((cap) => (
            <div key={cap.title} className="flex flex-col gap-2">
              {/* Icon */}
              <div>{cap.icon}</div>
              {/* Title */}
              <p
                className="text-[9px] font-black uppercase tracking-wide leading-tight whitespace-pre-line"
                style={{ color: NAVY }}
              >
                {cap.title}
              </p>
              {/* Description */}
              <p className="text-[9px] text-gray-500 leading-snug">{cap.desc}</p>
              {/* Green underline accent */}
              <div className="w-6 h-[2.5px] rounded-full mt-1" style={{ background: GREEN }} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}