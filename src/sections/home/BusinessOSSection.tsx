import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import { 
  Package, 
  Users, 
  Store, 
  DollarSign, 
  ShieldCheck, 
  Brain, 
  Cpu 
} from 'lucide-react';

export function BusinessOSSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const domains = [
    'Brand & Market Positioning',
    'Customer Lifecycle',
    'Customer Retention',
    'Inventory Movements',
    'Store Operations',
    'Supply Chain Management',
    'Cash Flow Control',
    'Repair & Service Management',
    'Gold Savings Schemes',
    'Compliance & Audit Governance',
    'Business Intelligence'
  ];

  // Map each of the 12 cards to one of the 6 hubs (-1 is center core/all)
  const getHubForDomain = (idx: number) => {
    switch (idx) {
      case 0: return 5; // Brand -> Intelligence Hub
      case 1:
      case 2: return 1; // Lifecycle, Retention -> Customer Hub
      case 3:
      case 5: return 0; // Inventory, Supply Chain -> Inventory Hub
      case 4:
      case 7: return 2; // Store Operations, Repair -> Showroom Hub
      case 6:
      case 8: return 3; // Cash Flow, Gold Savings -> Finance Hub
      case 9: return 4; // Compliance -> Governance Hub
      case 10: return 5; // Business Intelligence -> Intelligence Hub
      case 11: return -1; // Unified Core -> Highlight all hubs
      default: return null;
    }
  };

  const activeHub = hoveredCard !== null ? getHubForDomain(hoveredCard) : null;

  const hubDetails = [
    {
      title: "INVENTORY CONTROL HUB",
      icon: Package,
      desc: "Automating tracking and eliminating leakage across storage, transit, and branch levels.",
      metrics: [
        { label: "Leakage Prevention", value: "Zero Leaks", status: "Optimal" },
        { label: "Transit Accuracy", value: "99.94%", status: "Optimal" },
        { label: "Reconciliation", value: "Real-time", status: "Continuous" }
      ]
    },
    {
      title: "CUSTOMER LIFECYCLE HUB",
      icon: Users,
      desc: "Systemizing engagement, retention, and loyalty savings schemes to drive repeat visits.",
      metrics: [
        { label: "Repeat Purchase Rate", value: "+25%", status: "Increasing" },
        { label: "Campaign Response", value: "+34.5%", status: "Optimal" },
        { label: "Average Ticket Value", value: "+12.8%", status: "Growing" }
      ]
    },
    {
      title: "SHOWROOM & STORES HUB",
      icon: Store,
      desc: "Optimizing staff scheduling, showroom stock allocation, and customer repair turnaround.",
      metrics: [
        { label: "Staff Sales Conversion", value: "+18.4%", status: "Stable" },
        { label: "Service Turnaround Time", value: "-40%", status: "Fast Flow" },
        { label: "Showroom Stock Turnrate", value: "+2.1x", status: "Optimal" }
      ]
    },
    {
      title: "FINANCIAL INTELLIGENCE HUB",
      icon: DollarSign,
      desc: "Automating billing audits, scheme ledger balances, and cash flow control systems.",
      metrics: [
        { label: "Reconciliation Speed", value: "Real-time", status: "Immediate" },
        { label: "Ledger Discrepancies", value: "0.00%", status: "Secured" },
        { label: "Billing Audit Time", value: "Instant", status: "Optimal" }
      ]
    },
    {
      title: "GOVERNANCE & COMPLIANCE HUB",
      icon: ShieldCheck,
      desc: "Continuous background auditing, role-based security logs, and regulatory compliance checks.",
      metrics: [
        { label: "Audit Pass Rate", value: "100%", status: "Verified" },
        { label: "Security Incidents", value: "Zero", status: "Secured" },
        { label: "System Adherence", value: "98.4%", status: "High" }
      ]
    },
    {
      title: "DECISION INTELLIGENCE HUB",
      icon: Brain,
      desc: "Converting raw ERP data into executive dashboards for inventory procurement and growth forecasting.",
      metrics: [
        { label: "Executive Decision Speed", value: "Immediate", status: "Optimal" },
        { label: "Forecasting Accuracy", value: "98.2%", status: "High" },
        { label: "Stagnant Stock Alert Rate", value: "100%", status: "Active" }
      ]
    }
  ];

  return (
    <section id="business-os" className="bg-warm-white py-20 md:py-[120px] px-6 select-none border-b border-[#E2E8F0] relative overflow-hidden">
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(#0170B9 1px, transparent 1px)', 
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            opacity: 0.15
          }} 
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(1,112,185,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,112,185,0.03) 1px, transparent 1px)', 
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
          }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <span className="absolute -top-6 -left-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>
        <span className="absolute -top-6 -right-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>
        <span className="absolute -bottom-6 -left-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>
        <span className="absolute -bottom-6 -right-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Dynamic Real-time Systems Telemetry Dashboard */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <ScrollReveal>
              <div className="border border-border-light bg-[#081B29] p-0 shadow-2xl transition-all duration-300 rounded-none overflow-hidden hover:shadow-gold/20 flex flex-col h-[520px] justify-between relative">
                
                {/* Console System Status Header */}
                <div className="bg-[#040e15] px-6 py-4 flex items-center justify-between border-b border-white/5 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8CC63F] rounded-full inline-block animate-pulse shadow-[0_0_8px_#8CC63F]" />
                    <span className="font-mono text-[10px] font-bold tracking-widest text-white/80 uppercase">
                      ACTIVE SYSTEM TELEMETRY
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#8CC63F] tracking-widest uppercase bg-[#8CC63F]/10 px-2 py-0.5 rounded-none border border-[#8CC63F]/20">
                    REAL-TIME FEED: ONLINE
                  </span>
                </div>

                {/* Dashboard Inner Display Panel */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-center bg-[#07131d] text-white">
                  <AnimatePresence mode="wait">
                    {activeHub !== null && activeHub >= 0 && activeHub < 6 ? (
                      // Hub Detail Diagnostics Display
                      <motion.div
                        key={`hub-${activeHub}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 w-full"
                      >
                        {/* Hub Title Block */}
                        <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                          <div 
                            className="w-12 h-12 rounded-none flex items-center justify-center border transition-all duration-300 bg-[#8CC63F]/10 border-[#8CC63F]/30 text-[#8CC63F] shadow-[0_0_15px_rgba(140,198,63,0.2)]"
                          >
                            {(() => {
                              const IconComponent = hubDetails[activeHub].icon;
                              return <IconComponent className="w-6 h-6" />;
                            })()}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#8CC63F] block">DIAGNOSTIC STATUS</span>
                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">{hubDetails[activeHub].title}</h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                          {hubDetails[activeHub].desc}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {hubDetails[activeHub].metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="bg-white/[0.03] border border-white/5 p-3.5 rounded-none space-y-1 hover:border-white/10 transition-colors">
                              <span className="text-[9px] font-mono font-bold text-white/40 uppercase block">{metric.label}</span>
                              <span className="text-sm md:text-base font-extrabold text-white block">{metric.value}</span>
                              <span className="inline-block px-1.5 py-0.5 text-[8px] font-bold uppercase bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/20 rounded-none">
                                {metric.status}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Animated Sparkline Path */}
                        <div className="pt-2">
                          <div className="flex items-center justify-between text-[9px] font-mono text-white/40 mb-1">
                            <span>OS_FLOW_VELOCITY</span>
                            <span>98.8% CAPACITY</span>
                          </div>
                          <div className="bg-white/[0.02] border border-white/5 rounded-none p-2.5 h-16 flex items-end overflow-hidden relative">
                            <svg className="w-full h-12 text-[#8CC63F]/10" viewBox="0 0 100 20" preserveAspectRatio="none">
                              <motion.path
                                d="M0,10 Q15,2 30,10 T60,10 T90,10 L100,10 L100,20 L0,20 Z"
                                fill="currentColor"
                                stroke="#8CC63F"
                                strokeWidth="1.5"
                                animate={{
                                  d: [
                                    "M0,10 Q15,2 30,10 T60,10 T90,10 L100,10 L100,20 L0,20 Z",
                                    "M0,10 Q15,16 30,8 T60,14 T90,6 L100,10 L100,20 L0,20 Z",
                                    "M0,10 Q15,2 30,10 T60,10 T90,10 L100,10 L100,20 L0,20 Z"
                                  ]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            </svg>
                          </div>
                        </div>

                      </motion.div>
                    ) : (
                      // Unified Retail Core OS Display
                      <motion.div
                        key="unified-core"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 w-full"
                      >
                        {/* Header */}
                        <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                          <div className="w-12 h-12 rounded-none flex items-center justify-center bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] shadow-[0_0_15px_rgba(140,198,63,0.2)] animate-pulse">
                            <Cpu className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#8CC63F] block">UNIFIED OPERATING CORE</span>
                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">Scale With Abraham Core OS</h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                          The overarching process architecture driving efficiency, scale, and profitability across South India's premier jewellery brands.
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: "Continuous", label: "Growth Systems", tag: "Deployed" },
                            { value: "Optimal", label: "Loss Prevention", tag: "Zero Leakage" },
                            { value: "Automated", label: "Reconciliation", tag: "Real-time" }
                          ].map((metric, idx) => (
                            <div key={idx} className="bg-white/[0.03] border border-white/5 p-3 rounded-none text-center space-y-1 hover:border-white/10 transition-colors">
                              <span className="text-xl md:text-2xl font-black text-white block tracking-tight">{metric.value}</span>
                              <span className="text-[9px] font-bold text-white/60 block leading-tight">{metric.label}</span>
                              <span className="inline-block px-1 py-0.5 text-[7px] font-mono font-bold uppercase bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/20 rounded-none mt-1">
                                {metric.tag}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* System Log */}
                        <div className="bg-[#030a10] border border-white/5 rounded-none p-3.5 font-mono text-[9px] text-[#8CC63F]/90 space-y-1 select-none overflow-hidden h-24 flex flex-col justify-end">
                          <div className="opacity-40 animate-pulse">&gt; SYS_MONITOR: 200+ retail nodes connected</div>
                          <div className="opacity-60">&gt; DATA_SYNC: Inventory database matching ERP: 100%</div>
                          <div className="opacity-80">&gt; TRANSFORMATION_METRIC: reconciliation automated real-time</div>
                          <div className="text-white font-semibold animate-pulse">&gt; STATUS: OPERATING IN OPTIMAL SYSTEM STATE</div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer bar */}
                <div className="bg-[#030d15] px-6 py-4 border-t border-white/5 font-mono text-[9px] text-white/40 flex items-center justify-between select-none">
                  <span>ACTIVE MONITORING ENGINE v4.2</span>
                  <span>STANDBY / HOVER DOMAIN TO PROFILE</span>
                </div>
                
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Title & Domains */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <ScrollReveal className="flex flex-col gap-2">
              <SectionLabel variant="icon">SECTION 3 — BUSINESS OPERATING SYSTEM</SectionLabel>
              <h2
                className="font-extrabold text-text-primary tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}
              >
                The Modern Retail <br />
                <span className="text-navy">Operating System</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-sm md:text-base text-text-secondary leading-relaxed flex flex-col gap-3 font-semibold">
                <p>
                  A retail business is not a collection of departments.
                </p>
                <p className="border-l-4 border-gold pl-4 text-text-primary">
                  It is a network of interconnected systems.
                </p>
                <p>
                  Every customer interaction, inventory movement, operational decision, and financial outcome originates from how those systems are designed.
                </p>
              </div>
            </ScrollReveal>

            {/* List of Domains - Balanced Grid of Sleek Interactive Cards */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 pt-6 border-t border-border-light px-4">
                {domains.map((domain, idx) => {
                  const cardHub = getHubForDomain(idx);
                  const isHighlighted = 
                    hoveredCard === idx || 
                    (hoveredCard !== null && cardHub !== null && cardHub === getHubForDomain(hoveredCard));

                  return (
                    <div 
                      key={idx} 
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="relative filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
                    >
                      {/* Slanted Card Body - Right Slanted Parallelogram */}
                      <div
                        style={{
                          clipPath: 'polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)'
                        }}
                        className={`flex items-center min-h-[48px] transition-all duration-300 pl-14 pr-6 py-2.5 ${
                          isHighlighted 
                            ? 'bg-navy text-white shadow-inner' 
                            : 'bg-white text-text-primary'
                        }`}
                      >
                        <span className={`text-[13px] font-bold leading-tight transition-colors duration-200 ${
                          isHighlighted ? 'text-white' : 'text-text-primary'
                        }`}>
                          {domain}
                        </span>
                      </div>

                      {/* Floating Circle Node - Overlapping left slanted edge */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white transition-all duration-300 shadow-lg left-[-14px] ${
                          isHighlighted 
                            ? 'bg-gold rotate-6 scale-105' 
                            : 'bg-navy'
                        }`}
                      >
                        <span className="font-mono text-xs font-black text-white select-none">
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  );
                })}
                
                {/* 12th Card - System core synergy focal point */}
                {(() => {
                  const isCoreHighlighted = hoveredCard === 11;

                  return (
                    <div
                      onMouseEnter={() => setHoveredCard(11)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="relative filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
                    >
                      {/* Slanted Card Body - Right Slanted Parallelogram */}
                      <div
                        style={{
                          clipPath: 'polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)'
                        }}
                        className="flex items-center min-h-[48px] transition-all duration-300 pl-14 pr-6 py-2.5 bg-navy text-white shadow-inner"
                      >
                        <span className="text-[13px] font-bold leading-tight text-white">
                          Unified Enterprise Core
                        </span>
                      </div>

                      {/* Floating Circle Node - Overlapping left slanted edge */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white transition-all duration-300 shadow-lg left-[-14px] ${
                          isCoreHighlighted 
                            ? 'bg-gold rotate-6 scale-105 ring-1 ring-gold' 
                            : 'bg-navy'
                        }`}
                      >
                        <span className="font-mono text-xs font-black text-white select-none">
                          12
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
