import { useState } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import { GoldButton } from '../../components/GoldButton';
import { AlertTriangle, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export function SystemsPhilosophySection() {
  const [activePetal, setActivePetal] = useState<number>(2); // Default to Profits (index 2)

  const diagnosticPoints = [
    { title: 'Unified Operations.', desc: 'Breaking down organizational silos to build a single, interconnected digital nervous system.' },
    { title: 'Transparent Inventory.', desc: 'Real-time stock tracking across all channels to ensure capital is never trapped or invisible.' },
    { title: 'Structured Customer Intelligence.', desc: 'Consolidating fragmented data points to fuel hyper-personalized, lifetime clienteling journeys.' },
    { title: 'Predictive Decision-Making.', desc: 'Replacing guesswork with real-time indicators, empowering the enterprise to engineer the market.' }
  ];

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

  // Helper to generate Sioniq style curved wedge path
  const getPetalPath = (cx: number, cy: number, r1: number, r2: number, a1: number, a2: number) => {
    const degToRad = (deg: number) => (deg * Math.PI) / 180;
    
    // Outer arc start
    const x1 = cx + r2 * Math.cos(degToRad(a1));
    const y1 = cy + r2 * Math.sin(degToRad(a1));
    
    // Outer arc end
    const x2 = cx + r2 * Math.cos(degToRad(a2));
    const y2 = cy + r2 * Math.sin(degToRad(a2));
    
    // Inner arc end
    const x3 = cx + r1 * Math.cos(degToRad(a2));
    const y3 = cy + r1 * Math.sin(degToRad(a2));
    
    // Inner arc start
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
    <section className="bg-white py-20 md:py-[120px] px-6 select-none border-b border-[#E2E8F0]">
      <div className="max-w-[1000px] mx-auto text-center">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-center gap-2 mb-16">
          <SectionLabel variant="pill">PHILOSOPHY</SectionLabel>
          <h2
            className="font-extrabold text-text-primary tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2 }}
          >
            The Engineering Approach to <br />
            <span className="text-navy">Jewellery Retail</span>
          </h2>
        </ScrollReveal>

        {/* Vertical Pipeline Flow Container */}
        <div className="relative pl-8 sm:pl-0 flex flex-col items-center gap-12">
          {/* Vertical Dotted Connecting Line */}
          <div className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 top-4 bottom-4 w-[2px] border-l-2 border-dashed border-navy/20 z-0" />

          {/* Module 1: The Diagnosis */}
          <ScrollReveal className="w-full relative z-10">
            <div className="absolute -top-1.5 left-[-22px] sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
            
            <div className="bg-gradient-to-br from-white to-[#F8FAFC] border border-[#E2E8F0] p-6 lg:p-10 text-left shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-navy bg-navy/5 px-2.5 py-0.5 border border-navy/10 self-start inline-block mb-4">
                01 . SYSTEMIC DIAGNOSIS
              </span>

              {/* Mobile-only Headline & 2x2 Grid (under tablet width) */}
              <div className="md:hidden">
                <h3 className="font-extrabold text-2xl text-text-primary tracking-tight leading-tight mb-6">
                  Most Retail Systems Don't Scale.
                  <br />
                  <span className="text-navy">They Lack an Operational Core.</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 my-6">
                  {diagnosticPoints.map((pt, idx) => (
                    <div key={idx} className="border-l-4 border-navy/35 pl-4 py-1">
                      <h4 className="text-[15px] font-bold text-text-primary leading-snug">{pt.title}</h4>
                      <p className="text-xs text-text-secondary mt-1">{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop-only 4-Corner Layout with Headline in the Center & 90-Degree Orthogonal Routing */}
              <div className="hidden md:block relative w-full aspect-[2/1] my-6 select-none">
                
                {/* SVG Connecting Canvas */}
                <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                  
                  {/* Connecting Dotted Lines routing from center box left/right edges, then 90-degrees to corner centers */}
                  {/* Top-Left Path: Starts at center-left edge (200, 200) -> goes left to (104, 200) -> goes up to corner (104, 60) */}
                  <path id="path-tl" d="M 200,200 L 104,200 L 104,60" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                  
                  {/* Bottom-Left Path: Starts at center-left edge (200, 200) -> goes left to (104, 200) -> goes down to corner (104, 340) */}
                  <path id="path-bl" d="M 200,200 L 104,200 L 104,340" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                  
                  {/* Top-Right Path: Starts at center-right edge (600, 200) -> goes right to (696, 200) -> goes up to corner (696, 60) */}
                  <path id="path-tr" d="M 600,200 L 696,200 L 696,60" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                  
                  {/* Bottom-Right Path: Starts at center-right edge (600, 200) -> goes right to (696, 200) -> goes down to corner (696, 340) */}
                  <path id="path-br" d="M 600,200 L 696,200 L 696,340" fill="none" stroke="#0170B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

                  {/* Animated Data Packets traveling along the orthodiagonal paths */}
                  <g fill="#8CC63F">
                    <circle r="3">
                      <animateMotion dur="3s" repeatCount="indefinite">
                        <mpath href="#path-tl" />
                      </animateMotion>
                    </circle>
                    <circle r="3">
                      <animateMotion dur="2.8s" repeatCount="indefinite">
                        <mpath href="#path-bl" />
                      </animateMotion>
                    </circle>
                    <circle r="3">
                      <animateMotion dur="3.5s" repeatCount="indefinite">
                        <mpath href="#path-tr" />
                      </animateMotion>
                    </circle>
                    <circle r="3">
                      <animateMotion dur="3.2s" repeatCount="indefinite">
                        <mpath href="#path-br" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* Midpoint Label Rectangles and Text (placed on the vertical segments) */}
                  {/* Top-Left */}
                  <g>
                    <rect x="69" y="122" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                    <text x="104" y="133" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">UNIFY SILOS</text>
                  </g>
                  {/* Top-Right */}
                  <g>
                    <rect x="661" y="122" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                    <text x="696" y="133" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">SYNC STOCKS</text>
                  </g>
                  {/* Bottom-Left */}
                  <g>
                    <rect x="69" y="262" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                    <text x="104" y="273" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">LINK PROFILE</text>
                  </g>
                  {/* Bottom-Right */}
                  <g>
                    <rect x="661" y="262" width="70" height="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                    <text x="696" y="273" textAnchor="middle" fill="#7E8492" fontSize="6.5" fontWeight="bold" letterSpacing="0.5" className="font-mono">PRE-EMPT</text>
                  </g>

                </svg>

                {/* Central Core Headline Card (enlarged to 500px) */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] text-center p-8 bg-white border border-[#E2E8F0] shadow-md z-20"
                  style={{ borderTop: '4px solid #0170B9' }}
                >
                  <h3 className="font-extrabold text-[21px] sm:text-[22px] text-text-primary tracking-tight leading-snug">
                    Most Retail Systems Don't Scale.
                  </h3>
                  <h3 className="font-extrabold text-[21px] sm:text-[22px] text-navy tracking-tight leading-snug mt-2">
                    They Lack an Operational Core.
                  </h3>
                </div>

                {/* Absolute Corner HTML Cards (pushed further out to 1% margins with width 24%) */}
                {/* Top-Left Card */}
                <div className="absolute left-[1%] top-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                  <h4 className="text-[13px] font-bold text-text-primary leading-tight">Unified Operations</h4>
                  <p className="text-[11px] text-text-secondary mt-1 leading-snug">Breaking down organizational silos to build a single, interconnected digital nervous system.</p>
                </div>

                {/* Top-Right Card */}
                <div className="absolute right-[1%] top-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                  <h4 className="text-[13px] font-bold text-text-primary leading-tight">Transparent Inventory</h4>
                  <p className="text-[11px] text-text-secondary mt-1 leading-snug">Real-time stock tracking across all channels to ensure capital is never trapped or invisible.</p>
                </div>

                {/* Bottom-Left Card */}
                <div className="absolute left-[1%] bottom-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                  <h4 className="text-[13px] font-bold text-text-primary leading-tight">Structured Customer Intelligence</h4>
                  <p className="text-[11px] text-text-secondary mt-1 leading-snug">Consolidating fragmented data points to fuel hyper-personalized, lifetime clienteling journeys.</p>
                </div>

                {/* Bottom-Right Card */}
                <div className="absolute right-[1%] bottom-[4%] w-[24%] border-l-4 border-navy pl-3.5 py-2.5 bg-white/75 backdrop-blur-[2px] border border-border-light shadow-sm">
                  <h4 className="text-[13px] font-bold text-text-primary leading-tight">Predictive Decision-Making</h4>
                  <p className="text-[11px] text-text-secondary mt-1 leading-snug">Replacing guesswork with real-time indicators, empowering the enterprise to engineer the market.</p>
                </div>

              </div>

              <p className="text-base font-bold text-navy italic mt-6 border-t border-dashed border-border-light pt-4 text-center">
                &quot;Scale begins where operational friction ends.&quot;
              </p>
            </div>
            
            <div className="absolute -bottom-1.5 left-[-22px] sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
          </ScrollReveal>

          {/* Module 2: The Unified Architecture */}
          <ScrollReveal className="w-full relative z-10">
            <div className="absolute -top-1.5 left-[-22px] sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
            
            <div className="bg-gradient-to-br from-white to-[#F9FAFB] border border-[#D2DFE8] p-6 lg:p-8 text-left shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-navy bg-navy/5 px-2.5 py-0.5 border border-navy/15 self-start inline-block mb-4">
                02 . UNIFIED ARCHITECTURE
              </span>

              <h3 className="font-extrabold text-2xl lg:text-3xl text-navy tracking-tight leading-tight mb-4">
                The Single Source of Truth
              </h3>

              <p className="text-sm lg:text-base text-text-secondary leading-relaxed font-semibold mb-3">
                As a Jewellery Business Transformation Architect, I design intelligence‑driven operating systems that replace friction with predictability.
              </p>
              
              <p className="text-sm text-text-secondary leading-relaxed font-medium mb-6">
                By unifying ERP, finance, CRM, inventory, and store operations into a single source of truth, I help heritage brands and modern retailers transform from legacy businesses into high-velocity enterprises.
              </p>

              {/* Central Engine Visual */}
              <div className="bg-white border border-[#E2E8F0] p-6 flex flex-col items-center justify-center relative overflow-hidden select-none">
                <svg width="100%" height="240" viewBox="0 0 400 240" className="max-w-[340px]">
                  {/* Connection Paths */}
                  <path id="path-erp" d="M 200,35 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                  <path id="path-finance" d="M 320,75 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                  <path id="path-crm" d="M 290,195 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                  <path id="path-inventory" d="M 110,195 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />
                  <path id="path-stores" d="M 80,75 L 200,120" fill="none" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5" />

                  {/* Active Animated Data Packets (Pulsing Circles) */}
                  <circle r="3.5" fill="#8CC63F">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="0s">
                      <mpath href="#path-erp" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#0170B9">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
                      <mpath href="#path-finance" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#8CC63F">
                    <animateMotion dur="2.8s" repeatCount="indefinite" begin="0s">
                      <mpath href="#path-crm" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#0170B9">
                    <animateMotion dur="3.2s" repeatCount="indefinite" begin="0s">
                      <mpath href="#path-inventory" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#8CC63F">
                    <animateMotion dur="2.6s" repeatCount="indefinite" begin="0s">
                      <mpath href="#path-stores" />
                    </animateMotion>
                  </circle>

                  {/* Secondary Delayed Packet Stream */}
                  <circle r="3.5" fill="#0170B9">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.25s">
                      <mpath href="#path-erp" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#8CC63F">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                      <mpath href="#path-finance" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#0170B9">
                    <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s">
                      <mpath href="#path-crm" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#8CC63F">
                    <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.6s">
                      <mpath href="#path-inventory" />
                    </animateMotion>
                  </circle>
                  <circle r="3.5" fill="#0170B9">
                    <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.3s">
                      <mpath href="#path-stores" />
                    </animateMotion>
                  </circle>

                  {/* Central Node: Single Source of Truth */}
                  <circle cx="200" cy="120" r="32" fill="#0170B9" stroke="#8CC63F" strokeWidth="2" />
                  <text x="200" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="extrabold" letterSpacing="0.5">SINGLE</text>
                  <text x="200" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="extrabold" letterSpacing="0.5">SOURCE</text>
                  <text x="200" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" opacity="0.8">OF TRUTH</text>

                  {/* Outer Operational Pillars */}
                  {/* ERP */}
                  <circle cx="200" cy="35" r="16" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                  <text x="200" y="38" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">ERP</text>

                  {/* Finance */}
                  <circle cx="320" cy="75" r="18" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                  <text x="320" y="78" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">FINANCE</text>

                  {/* CRM */}
                  <circle cx="290" cy="195" r="18" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                  <text x="290" y="198" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">CRM</text>

                  {/* Inventory */}
                  <circle cx="110" cy="195" r="20" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                  <text x="110" y="198" textAnchor="middle" fill="#3A3A3A" fontSize="7" fontWeight="extrabold">INVENTORY</text>

                  {/* Store Ops */}
                  <circle cx="80" cy="75" r="18" fill="#FFFFFF" stroke="#0170B9" strokeWidth="1.5" />
                  <text x="80" y="78" textAnchor="middle" fill="#3A3A3A" fontSize="6.5" fontWeight="extrabold">STORE OPS</text>
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-1.5 left-[-22px] sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
          </ScrollReveal>

          {/* Module 3: Sioniq Outcome Engine & Leak Audit Dashboard */}
          <ScrollReveal className="w-full relative z-10">
            <div className="absolute -top-1.5 left-[-22px] sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
            
            <div className="bg-gradient-to-br from-[#0B1E2E] to-[#04101A] border-2 border-navy/30 p-6 lg:p-9 text-left shadow-2xl relative overflow-hidden">
              {/* High-tech accent glows */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-navy/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-0.5 border border-gold/25 self-start inline-block mb-4 relative z-10">
                03 . OUTCOME ENGINE & PROCESS LEAK AUDIT
              </span>

              <h3 className="font-extrabold text-2xl lg:text-[2rem] text-white tracking-tight leading-tight mb-4 relative z-10">
                Stop fighting the market. <span className="text-gold">Engineer it.</span>
              </h3>

              <p className="text-sm lg:text-base text-white/80 leading-relaxed font-medium mb-8 relative z-10 max-w-3xl">
                Every broken integration, manual spreadsheet, and data blind spot is a leak in your profit margin. The market is moving too fast for intuition-based retail.
              </p>

              {/* Main Interactive Telemetry Board */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 bg-white/[0.02] p-5 md:p-7 relative z-10">
                
                {/* SVG Dial Panel Column */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[500px] flex items-center justify-center">
                    <svg width="100%" height="300" viewBox="90 5 320 195" className="overflow-visible select-none">
                      
                      {/* Concentric Guide Rings */}
                      <path d="M 120,40 A 130,130 0 0,0 380,40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 180,40 A 70,70 0 0,0 320,40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Semicircle Curved Wedges */}
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
                        
                        // Center coordinates
                        const cx = 250;
                        const cy = 40;
                        const r1 = 70;
                        const r2 = 145;
                        
                        // Compute shift if active
                        const d = isActive ? 8 : 0;
                        const shiftX = d * Math.cos(degToRad(am));
                        const shiftY = d * Math.sin(degToRad(am));
                        
                        const shiftedCx = cx + shiftX;
                        const shiftedCy = cy + shiftY;
                        
                        // Wedge Path
                        const pathString = getPetalPath(shiftedCx, shiftedCy, r1, r2, a1, a2);
                        
                        // Icon Position
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
                            {/* Segment Path */}
                            <path
                              d={pathString}
                              fill={isActive ? 'url(#active-green-gradient)' : 'rgba(255, 255, 255, 0.03)'}
                              stroke={isActive ? '#8CC63F' : 'rgba(255, 255, 255, 0.15)'}
                              strokeWidth={isActive ? '2.5' : '1'}
                              className="transition-all duration-300 group-hover:stroke-gold/50"
                              style={{ 
                                filter: isActive ? 'drop-shadow(0px 0px 15px rgba(140, 198, 99, 0.35))' : 'none'
                              }}
                            />
                            
                            {/* Segment Vector Icon */}
                            <g 
                              transform={`translate(${xIcon}, ${yIcon - 7})`} 
                              className={`transition-colors duration-300 ${
                                isActive ? 'text-[#0B1E2E]' : 'text-white/60 group-hover:text-white'
                              }`}
                            >
                              {petal.icon}
                            </g>

                            {/* Segment Text Label */}
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

                      {/* Gradient Definition for active segments */}
                      <defs>
                        <linearGradient id="active-green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8CC63F" />
                          <stop offset="100%" stopColor="#74A72D" />
                        </linearGradient>
                      </defs>

                      {/* Center Hub Logo */}
                      <circle cx="250" cy="40" r="30" fill="#0B1E2E" stroke="#0170B9" strokeWidth="2.5" />
                      <g transform="translate(250, 40) scale(0.85)">
                        <path d="M-12,-8 C-12,-8 -4,-12 4,-8 C12,-4 12,8 4,12 C-4,16 -12,8 -12,8" fill="none" stroke="#0170B9" strokeWidth="3" strokeLinecap="round" />
                        <path d="M-4,-4 C-4,-4 4,-8 8,-4 C12,0 12,8 8,12 C4,16 -4,12 -4,12 L-8,17" fill="none" stroke="#8CC63F" strokeWidth="3" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                  
                  {/* Dynamic Instructions */}
                  <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase font-mono mt-3">
                    Hover or Tap Wedges to Interact
                  </span>
                </div>

                {/* Telemetry Before/After Panel Column */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                  {/* Active Wedge Title Banner */}
                  <div className="border-l-2 border-gold pl-3">
                    <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block">
                      SYSTEM OUTCOME UNIT
                    </span>
                    <h4 className="text-lg font-black text-white uppercase tracking-tight">
                      {petals[activePetal].title}
                    </h4>
                  </div>

                  {/* Before / Leak Box */}
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

                  {/* After / Engineered Box */}
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

              {/* High-fidelity Dashboard Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                
                {/* Contact and Sales lines */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full md:w-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center bg-white/[0.02]">
                      <Phone className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono block leading-none mb-1">FOR SALES</span>
                      <a href="tel:+919160863406" className="text-xs font-bold text-white hover:text-gold transition-colors font-mono">+91 9160863406</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center bg-white/[0.02]">
                      <Phone className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono block leading-none mb-1">FOR SUPPORT</span>
                      <a href="tel:+919160863406" className="text-xs font-bold text-white hover:text-gold transition-colors font-mono">+91 9160863406</a>
                    </div>
                  </div>
                </div>

                {/* Audit Rebuild CTA action button */}
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

            </div>
            
            <div className="absolute -bottom-1.5 left-[-22px] sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-navy border-2 border-white shadow-sm z-20" />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
