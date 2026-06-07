import { motion } from 'framer-motion';
import { Calendar, Clock3 } from 'lucide-react';

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
      <div className="relative bg-white overflow-hidden">
        <div 
          className="max-w-[1280px] mx-auto px-6 lg:px-10
                     grid grid-cols-1 lg:grid-cols-[40%_60%]
                     items-center gap-6 lg:gap-0 relative z-10
                     lg:bg-[url('/hero_background.jpg')] lg:bg-contain lg:bg-right lg:bg-no-repeat"
        >

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-5 py-10 pr-4 lg:pr-8 lg:py-24 relative z-10">

            {/* Badge */}
            <motion.span
              {...fadeUp(0)}
              className="self-start px-3 py-[5px] text-[9px] font-black uppercase tracking-[0.14em] border"
              style={{ color: BLUE, borderColor: `${BLUE}55` }}
            >
              Retail Business Management Consultant
            </motion.span>

            {/* Headline — 2 lines, large, no wrap */}
            <motion.h1 {...fadeUp(0.07)} className="leading-[1.04] tracking-tight">
              <span
                className="block font-black uppercase whitespace-nowrap"
                style={{ color: NAVY, fontSize: 'clamp(26px, 3.8vw, 44px)' }}
              >
                YOU CAN'T SCALE
              </span>
              <span
                className="block font-black uppercase whitespace-nowrap"
                style={{ color: BLUE, fontSize: 'clamp(26px, 3.8vw, 44px)' }}
              >
                WHAT YOU CAN'T SEE.
              </span>
            </motion.h1>

            {/* Green rule */}
            <motion.div
              {...fadeUp(0.12)}
              className="w-9 h-[3px] rounded-full"
              style={{ background: GREEN }}
            />

            {/* Description */}
            <motion.p {...fadeUp(0.16)} className="text-[13px] text-gray-700 leading-relaxed max-w-[340px]">
              I design operational frameworks, KPI architectures,
              and decision systems that help retail businesses
              scale with confidence.
            </motion.p>

            {/* Quote */}
            <motion.div {...fadeUp(0.20)} className="max-w-[340px]">
              <span className="text-[40px] font-black leading-none block -mb-2" style={{ color: GREEN }}>"</span>
              <p className="text-[12.5px] italic text-gray-600 leading-relaxed">
                "The next decade of jewellery retail belongs to the systemized.
                The rest will be managed out of existence."
              </p>
              <span className="text-[40px] font-black leading-none block text-right -mt-3" style={{ color: GREEN }}>"</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3 pt-1 clear-both">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-[10.5px] font-black uppercase tracking-wider px-5 py-[11px] transition-opacity hover:opacity-90 shadow-md"
                style={{ background: GREEN }}
              >
                <Calendar className="w-4 h-4" />
                Connect Me Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[10.5px] font-black uppercase tracking-wider px-5 py-[11px] border-2 transition-colors hover:bg-gray-50/50 backdrop-blur-sm"
                style={{ color: NAVY, borderColor: NAVY }}
              >
                <Clock3 className="w-4 h-4" />
                Book a 30-min Call
              </a>
            </motion.div>

            {/* Trusted by Retail Leaders */}
            <motion.div
              {...fadeUp(0.30)}
              className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3.5"
            >
              <span className="text-[9.5px] font-black uppercase tracking-[0.14em] text-gray-400">
                Trusted by Retail Leaders
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 opacity-[0.45] grayscale hover:grayscale-0 transition-all duration-300">
                {/* Tanishq */}
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#0b2341] fill-current">
                    <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 18H5.6L12 5.8z" />
                  </svg>
                  <span className="font-serif text-[10px] font-extrabold tracking-[0.15em] text-[#0b2341]">TANISHQ</span>
                </div>
                {/* Kalyan */}
                <div className="flex flex-col items-start leading-none">
                  <span className="font-serif text-[10.5px] font-black tracking-wider text-[#0b2341]">KALYAN</span>
                  <span className="text-[6px] font-bold tracking-[0.18em] text-[#0b2341] mt-0.5">JEWELLERS</span>
                </div>
                {/* GRT */}
                <div className="flex items-center gap-1 leading-none">
                  <span className="font-sans text-[11px] font-black tracking-tight text-[#0b2341]">GRT</span>
                  <span className="text-[5.5px] font-black tracking-widest text-[#0b2341] border-l border-current pl-1 py-0.5">JEWELLERS</span>
                </div>
                {/* Jos Alukkas */}
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#0b2341] fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <span className="font-serif text-[8.5px] font-bold tracking-wider text-[#0b2341] leading-none">JOS ALUKKAS</span>
                </div>
                {/* Senco */}
                <div className="flex flex-col items-start leading-none">
                  <span className="font-serif text-[10.5px] font-black tracking-wider text-[#0b2341]">SENCO</span>
                  <span className="text-[5px] font-black tracking-[0.2em] text-[#0b2341] mt-0.5">GOLD & DIAMONDS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Spacer on desktop, fallback image on mobile ── */}
          <div className="w-full relative z-10 py-6 lg:h-[560px] pointer-events-none flex items-center">
            <img
              src="/hero_background.jpg"
              alt="Retail Business Systems consulting framework"
              className="w-full h-auto block lg:hidden"
              style={{ maxHeight: '480px', objectFit: 'contain' }}
            />
          </div>

        </div>
      </div>

      {/* ════════════════════ BOTTOM CAPABILITIES STRIP ════════════════════ */}
      <div className="relative px-6 pb-16 z-20 bg-gray-50/30">
        <div className="max-w-[1280px] mx-auto bg-white rounded-[16px] shadow-xl border border-gray-100/60 p-6 md:p-8 -mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0">
            {CAPS.map((cap, index) => (
              <div 
                key={cap.title} 
                className={`flex flex-col gap-2 ${
                  index !== 0 ? 'lg:border-l lg:border-gray-100 lg:pl-6' : ''
                }`}
              >
                <div className="mb-1">{cap.icon}</div>
                <p
                  className="text-[8.5px] font-black uppercase tracking-wide leading-tight whitespace-pre-line"
                  style={{ color: NAVY }}
                >
                  {cap.title}
                </p>
                <p className="text-[8.5px] text-gray-500 leading-snug">{cap.desc}</p>
                <div className="w-6 h-[2.5px] rounded-full mt-1" style={{ background: GREEN }} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}