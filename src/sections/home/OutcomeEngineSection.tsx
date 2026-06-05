import { useState } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { GoldButton } from '../../components/GoldButton';
import { AlertTriangle, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export function OutcomeEngineSection() {
  const [activePetal, setActivePetal] = useState<number>(2); // Default to Profits (index 2)

  const petals = [
    {
      title: 'TRACK UPDATES',
      label: 'TRACKING',
      before: 'Offline store reports are updated manually every 24-48 hours, leaving leadership blind to sales velocity, billing anomalies, and stock movements.',
      after: 'Continuous live updates of inventory movement, register logs, and billing volume accessible instantly on a secure mobile dashboard.',
      icon: (
        <path d="M-6,-4 h12 v8 h-12 z M-3,-1 l2,2 l4,-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    },
    {
      title: 'MORE PRODUCTIVE',
      label: 'EFFICIENT',
      before: 'Showroom billing desks manually double-key customer details, invoices, and estimates into separate spreadsheets, creating heavy staff friction.',
      after: 'Automated ERP processes sync sales ledger, CRM profile, and inventory count in a single workflow, saving 1.5 hours per desk shift.',
      icon: (
        <>
          <circle cx="0" cy="-1" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0,-5 L0,-6 M0,3 L0,4 M-4,-1 L-5,-1 M4,-1 L5,-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )
    },
    {
      title: 'HIGHER PROFITS',
      label: 'PROFITS',
      before: 'Sales staff manually calculate metal rates, making charges, or apply unauthorized discounts that directly erode gross profit margins.',
      after: 'Automated live MCX-linked pricing engine computes tags, making charges, and limits discounts dynamically to safeguard profitability.',
      icon: (
        <path d="M-6,4 L-2,0 L2,2 L6,-2 M2,-2 H6 V2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )
    },
    {
      title: 'CONTROL ON INVENTORY',
      label: 'INVENTORY',
      before: 'Gold weight and stock discrepancies are only caught during high-stress quarterly physical audits, masking ongoing stock shrinkage.',
      after: 'Automated check-ins and live item audit logs track high-value jewellery pieces to the nearest 0.01g during every register handoff.',
      icon: (
        <>
          <rect x="-5" y="-6" width="10" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M-2.5,-3 H2.5 M-2.5,0 H2.5 M-2.5,3 H2.5" stroke="currentColor" strokeWidth="1" />
        </>
      )
    },
    {
      title: 'BEAT COMPETITION',
      label: 'COMPETE',
      before: 'Slow, person-dependent processes delay replenishments and fail to engage registered customers at critical purchase intervals.',
      after: 'Predictive replenishment triggers and automated CRM recall touchpoints turn inventory twice as fast and lock in customer loyalty.',
      icon: (
        <path d="M-4,-4 H4 V0 C4,2.5 2,4.5 0,4.5 C-2,4.5 -4,2.5 -4,0 Z M-4,-2 H-6 V-1 H-4 M4,-2 H6 V-1 H-4 V-4 Z M0,4.5 V6 M-2,6 H2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    
    return `
      M ${x1} ${y1}
      A ${r2} ${r2} 0 0 0 ${x2} ${y2}
      L ${x3} ${y3}
      A ${r1} ${r1} 0 0 1 ${x4} ${y4}
      Z
    `;
  };

  return (
    <section className="bg-gradient-to-br from-[#0B1E2E] to-[#04101A] py-20 md:py-24 px-6 select-none border-b border-white/10 relative overflow-hidden">
      
      {/* High-tech background accent glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navy/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto text-left relative z-10">
        
        {/* Module Badge */}
        <ScrollReveal>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-0.5 border border-gold/25 self-start inline-block mb-4">
            03 . OUTCOME ENGINE & PROCESS LEAK AUDIT
          </span>
        </ScrollReveal>

        {/* Section Title */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-extrabold text-2xl sm:text-[2.25rem] text-white tracking-tight leading-tight mb-4">
            Stop fighting the market. <span className="text-gold">Engineer it.</span>
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.1}>
          <p className="text-sm lg:text-base text-white/80 leading-relaxed font-medium mb-8 max-w-3xl">
            Every broken integration, manual spreadsheet, and data blind spot is a leak in your profit margin. The market is moving too fast for intuition-based retail.
          </p>
        </ScrollReveal>

        {/* Main Telemetry Box */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 bg-white/[0.02] p-5 md:p-7 relative z-10">
            
            {/* SVG Semicircle Dial */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <svg width="100%" height="300" viewBox="90 5 320 195" className="overflow-visible select-none">
                  
                  <path d="M 120,40 A 130,130 0 0,0 380,40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M 180,40 A 70,70 0 0,0 320,40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="2 2" />

                  {petals.map((petal, idx) => {
                    const isActive = activePetal === idx;
                    const angles = [
                      { a1: 166, a2: 138 },
                      { a1: 134, a2: 106 },
                      { a1: 102, a2: 74 },
                      { a1: 70, a2: 42 },
                      { a1: 38, a2: 10 }
                    ];
                    const { a1, a2 } = angles[idx];
                    const am = (a1 + a2) / 2;
                    const degToRad = (deg: number) => (deg * Math.PI) / 180;
                    
                    const cx = 250;
                    const cy = 40;
                    const r1 = 70;
                    const r2 = 145;
                    
                    const d = isActive ? 8 : 0;
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
                          fill={isActive ? 'url(#active-green-gradient-home)' : 'rgba(255, 255, 255, 0.03)'}
                          stroke={isActive ? '#8CC63F' : 'rgba(255, 255, 255, 0.15)'}
                          strokeWidth={isActive ? '2.5' : '1'}
                          className="transition-all duration-300 group-hover:stroke-gold/50"
                          style={{ 
                            filter: isActive ? 'drop-shadow(0px 0px 15px rgba(140, 198, 99, 0.35))' : 'none'
                          }}
                        />
                        
                        <g 
                          transform={`translate(${xIcon}, ${yIcon - 7})`} 
                          className={`transition-colors duration-300 ${
                            isActive ? 'text-[#0B1E2E]' : 'text-white/60 group-hover:text-white'
                          }`}
                        >
                          {petal.icon}
                        </g>

                        <text
                          x={xIcon}
                          y={yIcon + 14}
                          textAnchor="middle"
                          fontSize="8"
                          fontWeight="extrabold"
                          fill={isActive ? '#0B1E2E' : 'rgba(255, 255, 255, 0.5)'}
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

                  <circle cx="250" cy="40" r="30" fill="#0B1E2E" stroke="#0170B9" strokeWidth="2.5" />
                  <g transform="translate(250, 40) scale(0.85)">
                    <path d="M-12,-8 C-12,-8 -4,-12 4,-8 C12,-4 12,8 4,12 C-4,16 -12,8 -12,8" fill="none" stroke="#0170B9" strokeWidth="3" strokeLinecap="round" />
                    <path d="M-4,-4 C-4,-4 4,-8 8,-4 C12,0 12,8 8,12 C4,16 -4,12 -4,12 L-8,17" fill="none" stroke="#8CC63F" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              
              <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase font-mono mt-3">
                Hover or Tap Wedges to Interact
              </span>
            </div>

            {/* Before/After Telemetry Cards */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              <div className="border-l-2 border-gold pl-3">
                <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block">
                  SYSTEM OUTCOME UNIT
                </span>
                <h4 className="text-lg font-black text-white uppercase tracking-tight">
                  {petals[activePetal].title}
                </h4>
              </div>

              {/* Before Card */}
              <div className="bg-red-500/[0.04] border border-red-500/25 p-4 rounded-none flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] font-black text-red-500 uppercase tracking-widest block mb-1">
                    Operational Leak (Before)
                  </span>
                  <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-semibold">
                    {petals[activePetal].before}
                  </p>
                </div>
              </div>

              {/* After Card */}
              <div className="bg-gold/[0.04] border border-gold/25 p-4 rounded-none flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] font-black text-gold uppercase tracking-widest block mb-1">
                    Engineered System (After)
                  </span>
                  <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-semibold">
                    {petals[activePetal].after}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Dashboard Footer */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Live Contact Triggers */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full md:w-auto">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center bg-white/[0.02] shadow-sm">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                </div>
                <div>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono block leading-none mb-1">FOR SALES</span>
                  <a href="tel:+919160863406" className="text-xs font-bold text-white hover:text-gold transition-colors font-mono">+91 9160863406</a>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center bg-white/[0.02] shadow-sm">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                </div>
                <div>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono block leading-none mb-1">FOR SUPPORT</span>
                  <a href="tel:+919160863406" className="text-xs font-bold text-white hover:text-gold transition-colors font-mono">+91 9160863406</a>
                </div>
              </div>
            </div>

            {/* Audit / Call-to-action button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto sm:justify-end">
              <p className="text-xs text-white/60 font-semibold max-w-xs text-left sm:text-right leading-snug">
                If your operational infrastructure is holding back your growth, it's time to rebuild.
              </p>
              <GoldButton 
                to="/contact" 
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-lg shadow-gold/20 font-bold uppercase tracking-wider text-xs px-8"
              >
                Schedule an Architecture Audit
              </GoldButton>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
