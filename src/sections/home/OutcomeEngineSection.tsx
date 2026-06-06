import { useState } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { CheckCircle2, HelpCircle } from 'lucide-react';

interface Petal {
  title: string;
  label: string;
  subtitle: string;
  description: string;
  bulletHeader: string;
  bullets: string[];
  keyQuestion: string;
  outcome: string;
  icon: React.ReactNode;
}

export function OutcomeEngineSection() {
  const [activePetal, setActivePetal] = useState<number>(0);

  const petals: Petal[] = [
    {
      title: "WHAT'S WORKING?",
      label: 'WORKING',
      subtitle: 'Identify the strengths driving performance.',
      description: "Not every process needs fixing. The first step is understanding what's already creating results.",
      bulletHeader: 'We examine:',
      bullets: [
        'Best-performing stores',
        'High-converting sales teams',
        'Top-selling product categories',
        'Most profitable customer segments',
        'Successful operational practices',
        'Strong-performing inventory groups'
      ],
      keyQuestion: "What's driving success, and how can it be replicated across the business?",
      outcome: 'Scale proven practices, strengthen competitive advantages, and accelerate growth.',
      icon: (
        <path d="M-4,-4 h8 v3 c0,2 -2,4 -4,4 c-2,0 -4,-2 -4,-4 z M-4,-2 h-2 v-1 h2 M4,-2 h2 v-1 h-2 M0,3 v3 M-2,6 h4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    },
    {
      title: "WHAT'S BROKEN?",
      label: 'BROKEN',
      subtitle: 'Identify the bottlenecks limiting performance.',
      description: 'Every growing business develops friction points that slow execution and create inconsistency.',
      bulletHeader: 'We examine:',
      bullets: [
        'Process breakdowns',
        'Communication gaps',
        'Delayed approvals',
        'Manual dependencies',
        'Operational inefficiencies',
        'Accountability issues'
      ],
      keyQuestion: 'What is preventing the business from performing at its full potential?',
      outcome: 'Eliminate bottlenecks, improve execution speed, and create operational consistency.',
      icon: (
        <path d="M0,-6 L-4,0 L1,0 L-1,6 L4,0 L-1,0 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    },
    {
      title: "WHAT'S COSTING?",
      label: 'COSTING',
      subtitle: 'Quantify hidden losses and profit leakage.',
      description: 'Many businesses focus on revenue growth while overlooking the silent costs reducing profitability.',
      bulletHeader: 'We examine:',
      bullets: [
        'Dead inventory',
        'Margin leakage',
        'Discount misuse',
        'Excess operational costs',
        'Rework and errors',
        'Working capital inefficiencies'
      ],
      keyQuestion: 'Where is the business losing money without realizing it?',
      outcome: 'Protect margins, improve cash flow, and increase profitability.',
      icon: (
        <path d="M-6,-4 L-2,2 L2,0 L6,5 M2,5 H6 V1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    },
    {
      title: "WHAT'S RISKY?",
      label: 'RISKY',
      subtitle: 'Uncover vulnerabilities before they become problems.',
      description: 'Most business risks are visible long before they become crises.',
      bulletHeader: 'We examine:',
      bullets: [
        'Key-person dependency',
        'Lack of process ownership',
        'Inventory concentration risks',
        'Customer concentration risks',
        'Compliance gaps',
        'Data visibility issues'
      ],
      keyQuestion: 'What could negatively impact growth if left unaddressed?',
      outcome: 'Reduce uncertainty, improve resilience, and strengthen long-term stability.',
      icon: (
        <path d="M0,-6 L6,4 H-6 Z M0,-2 V1 M0,3 H0.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    },
    {
      title: "WHAT'S POSSIBLE?",
      label: 'POSSIBLE',
      subtitle: 'Discover untapped opportunities for growth.',
      description: 'Once constraints are understood, opportunities become easier to identify.',
      bulletHeader: 'We examine:',
      bullets: [
        'Revenue expansion opportunities',
        'Process automation opportunities',
        'Inventory optimization opportunities',
        'Customer retention opportunities',
        'Store performance improvements',
        'New business capabilities'
      ],
      keyQuestion: 'What opportunities are being overlooked today?',
      outcome: 'Unlock growth, improve customer experience, and create competitive advantage.',
      icon: (
        <path d="M-3,-4 C-3,-6 3,-6 3,-4 C3,-1 1,1 1,3 H-1 C-1,1 -3,-1 -3,-4 Z M-2,5 H2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    },
    {
      title: "WHAT'S NEXT?",
      label: 'NEXT',
      subtitle: 'Prioritize actions that create measurable impact.',
      description: 'Insights are only valuable when translated into action.',
      bulletHeader: 'We define:',
      bullets: [
        'Immediate priorities',
        'Quick wins',
        'Strategic initiatives',
        'Ownership responsibilities',
        'Success metrics',
        'Review mechanisms'
      ],
      keyQuestion: 'What should be done first, and what impact will it create?',
      outcome: 'Clear direction, better decisions, and sustainable business transformation.',
      icon: (
        <path d="M-4,-4 L2,0 L-4,4 Z M2,-4 L8,0 L2,4 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    }
  ];

  const getPetalPath = (cx: number, cy: number, r1: number, r2: number, a1: number, a2: number) => {
    const degToRad = (deg: number) => (deg * Math.PI) / 180;
    const x1 = cx + r2 * Math.cos(degToRad(a1));
    const y1 = cy + r2 * Math.sin(degToRad(a1));
    const x2 = cx + r2 * Math.cos(degToRad(a2));
    const y2 = cy + r2 * Math.sin(degToRad(a2));
    const x3 = cx + r1 * Math.cos(degToRad(a2));
    const y3 = cy + r1 * Math.sin(degToRad(a2));
    const x4 = cx + r1 * Math.cos(degToRad(a1));
    const y4 = cy + r1 * Math.sin(degToRad(a1));
    return `M ${x1} ${y1} A ${r2} ${r2} 0 0 0 ${x2} ${y2} L ${x3} ${y3} A ${r1} ${r1} 0 0 1 ${x4} ${y4} Z`;
  };

  return (
    <section
      id="outcome-engine"
      className="bg-white py-20 md:py-24 px-6 select-none border-b border-border-light"
    >
      <div className="max-w-[1150px] mx-auto text-left">

        {/* Module Badge */}
        <ScrollReveal>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-0.5 border border-gold/25 self-start inline-block mb-4">
            03 . OUTCOME ENGINE &amp; PROCESS LEAK AUDIT
          </span>
        </ScrollReveal>

        {/* Section Title */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-extrabold text-2xl sm:text-[2.25rem] text-navy tracking-tight leading-tight mb-4">
            Stop fighting the market. <span className="text-gold">Engineer it.</span>
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.1}>
          <p className="text-sm lg:text-base text-text-secondary leading-relaxed font-medium mb-8 max-w-3xl">
            Every broken integration, manual spreadsheet, and data blind spot is a leak in your profit margin. The market is moving too fast for intuition-based retail.
          </p>
        </ScrollReveal>

        {/* Main Content Box */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border border-border-light bg-[#F8FAFC] p-6 md:p-10">

            {/* SVG Semicircle Dial */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <svg width="100%" height="340" viewBox="60 -20 380 250" className="overflow-visible select-none">

                  {/* Guide rings — subtle navy tint */}
                  <path d="M 90,40 A 160,160 0 0,0 410,40" fill="none" stroke="rgba(11,30,46,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M 160,40 A 90,90 0 0,0 340,40" fill="none" stroke="rgba(11,30,46,0.08)" strokeWidth="1" strokeDasharray="2 2" />

                  {petals.map((petal, idx) => {
                    const isActive = activePetal === idx;
                    const angles = [
                      { a1: 166.5, a2: 143.5 },
                      { a1: 140.5, a2: 117.5 },
                      { a1: 114.5, a2: 91.5 },
                      { a1: 88.5,  a2: 65.5  },
                      { a1: 62.5,  a2: 39.5  },
                      { a1: 36.5,  a2: 13.5  }
                    ];
                    const { a1, a2 } = angles[idx];
                    const am = (a1 + a2) / 2;
                    const degToRad = (deg: number) => (deg * Math.PI) / 180;
                    const cx = 250, cy = 40, r1 = 90, r2 = 175;
                    const d = isActive ? 10 : 0;
                    const shiftX = d * Math.cos(degToRad(am));
                    const shiftY = d * Math.sin(degToRad(am));
                    const shiftedCx = cx + shiftX;
                    const shiftedCy = cy + shiftY;
                    const pathString = getPetalPath(shiftedCx, shiftedCy, r1, r2, a1, a2);
                    const rIcon = (r1 + r2) / 2;
                    const xIcon = shiftedCx + rIcon * Math.cos(degToRad(am));
                    const yIcon = shiftedCy + rIcon * Math.sin(degToRad(am));

                    return (
                      <g
                        key={idx}
                        className="cursor-pointer group"
                        onMouseEnter={() => setActivePetal(idx)}
                        onClick={() => setActivePetal(idx)}
                      >
                        <path
                          d={pathString}
                          fill={isActive ? 'url(#active-green-gradient-home)' : 'rgba(11,30,46,0.04)'}
                          stroke={isActive ? '#8CC63F' : 'rgba(11,30,46,0.18)'}
                          strokeWidth={isActive ? '2.5' : '1'}
                          className="transition-all duration-300"
                          style={{
                            filter: isActive ? 'drop-shadow(0px 0px 12px rgba(140,198,99,0.4))' : 'none'
                          }}
                        />

                        <g
                          transform={`translate(${xIcon}, ${yIcon - 7})`}
                          className={`transition-colors duration-300 ${
                            isActive ? 'text-[#0B1E2E]' : 'text-navy/50 group-hover:text-navy'
                          }`}
                        >
                          {petal.icon}
                        </g>

                        <text
                          x={xIcon}
                          y={yIcon + 16}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="800"
                          fill={isActive ? '#0B1E2E' : 'rgba(11,30,46,0.45)'}
                          className="transition-colors duration-300 font-mono tracking-wider"
                        >
                          {petal.label}
                        </text>
                      </g>
                    );
                  })}

                  <defs>
                    <linearGradient id="active-green-gradient-home" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8CC63F" />
                      <stop offset="100%" stopColor="#74A72D" />
                    </linearGradient>
                  </defs>

                  {/* Center Brain + Engineering Graphic */}
                  <g transform="translate(250, 40)">
                    <g style={{ animation: 'spin 25s linear infinite', transformOrigin: '0px 0px' }}>
                      <circle cx="0" cy="0" r="60" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.25" />
                      <circle cx="0" cy="0" r="54" fill="none" stroke="rgba(11,30,46,0.08)" strokeWidth="4" strokeDasharray="8 6" />
                    </g>

                    {/* Center circle — dark, makes inner detail pop */}
                    <circle cx="0" cy="0" r="46" fill="#0A1826" stroke="#0170B9" strokeWidth="3" />
                    <circle cx="0" cy="0" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeDasharray="6 4" />

                    <g transform="scale(1.75)">
                      {/* Left hemisphere — cyan */}
                      <path
                        d="M -1,-12 C -5,-12 -8,-9 -8,-6 C -8,-4.5 -6.5,-3.5 -5,-3 C -9,-3 -10,1 -7,4 C -9,5.5 -7.5,8 -4,8 C -2.5,8 -1,6.5 -1,4 Z"
                        fill="none" stroke="#00E5FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                      />
                      <path d="M -4,-6.5 C -5.5,-6.5 -6,-5 -4.5,-4" fill="none" stroke="#00E5FF" strokeWidth="1.1" strokeLinecap="round" />
                      <path d="M -3.5,1.5 C -5,1.5 -5.5,2.5 -4,3.5" fill="none" stroke="#00E5FF" strokeWidth="1.1" strokeLinecap="round" />

                      {/* Right hemisphere — green */}
                      <path
                        d="M 1,-12 L 6,-12 L 9,-9 L 9,-5 L 5,-5 L 5,-1 L 10,4 L 10,8 L 6,10 L 1,10 Z"
                        fill="none" stroke="#8CC63F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                      />
                      <path d="M 1,-7 L 5,-7 L 6.5,-5.5" fill="none" stroke="#8CC63F" strokeWidth="1.1" />
                      <circle cx="6.5" cy="-5.5" r="1.2" fill="#8CC63F" />
                      <path d="M 1,1 L 5,1 L 6.5,2.5" fill="none" stroke="#8CC63F" strokeWidth="1.1" />
                      <circle cx="6.5" cy="2.5" r="1.2" fill="#8CC63F" />
                      <circle cx="9" cy="-9" r="1.2" fill="#8CC63F" />
                      <circle cx="10" cy="8" r="1.2" fill="#8CC63F" />
                      <circle cx="0" cy="-1" r="2.2" fill="#0A1826" stroke="#8CC63F" strokeWidth="1" />
                      <path d="M -1,-1 L 1,-1 M 0,-2 L 0,0" stroke="#8CC63F" strokeWidth="0.8" />
                    </g>
                  </g>

                </svg>
              </div>

              <span className="text-[10px] font-bold text-text-muted tracking-widest uppercase font-mono mt-3">
                Hover or Tap Wedges to Interact
              </span>
            </div>

            {/* ── Content Details Panel ── */}
            <div className="lg:col-span-7 flex flex-col gap-6 justify-between self-stretch">

              <div className="flex flex-col gap-4">
                {/* Active petal header */}
                <div className="border-l-2 border-gold pl-3">
                  <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block">
                    {petals[activePetal].subtitle}
                  </span>
                  <h4 className="text-xl font-black text-navy uppercase tracking-tight mt-1">
                    {petals[activePetal].title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed font-medium">
                  {petals[activePetal].description}
                </p>

                {/* Bullet list */}
                <div>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest font-mono block mb-2.5">
                    {petals[activePetal].bulletHeader}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {petals[activePetal].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8CC63F] shrink-0" />
                        <span className="text-xs text-navy font-semibold">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                {/* Key Question */}
                <div className="bg-amber-50 border border-gold/30 p-4 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-gold uppercase tracking-widest block mb-1 font-mono">
                      Key Audit Question
                    </span>
                    <p className="text-xs sm:text-[13px] text-navy leading-relaxed font-semibold italic">
                      "{petals[activePetal].keyQuestion}"
                    </p>
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-green-50 border border-[#8CC63F]/30 p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8CC63F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-[#4a7a1e] uppercase tracking-widest block mb-1 font-mono">
                      Target Outcome
                    </span>
                    <p className="text-xs sm:text-[13px] text-navy leading-relaxed font-semibold">
                      {petals[activePetal].outcome}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 pt-6 border-t border-border-light flex justify-center text-center">
            <p className="text-xs sm:text-sm text-[#4a7a1e] font-bold max-w-2xl leading-relaxed">
              If your operational infrastructure is holding back your growth, it's time to rebuild.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
