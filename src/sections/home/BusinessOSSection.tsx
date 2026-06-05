import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';

export function BusinessOSSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredHub, setHoveredHub] = useState<number | null>(null);

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

  const hubs = [
    { name: 'INVENTORY HUB', cx: 120, cy: 120, tx: 120, ty: 95, align: 'middle' },
    { name: 'CUSTOMER HUB', cx: 380, cy: 120, tx: 380, ty: 95, align: 'middle' },
    { name: 'SHOWROOM HUB', cx: 410, cy: 250, tx: 425, ty: 254, align: 'start' },
    { name: 'FINANCE HUB', cx: 380, cy: 380, tx: 380, ty: 405, align: 'middle' },
    { name: 'GOVERNANCE HUB', cx: 120, cy: 380, tx: 120, ty: 405, align: 'middle' },
    { name: 'INTELLIGENCE HUB', cx: 90, cy: 250, tx: 75, ty: 254, align: 'end' },
  ];

  // Active hub represents which hub should glow/pulse
  // Triggered by card hover on the right, or manual hub hover on the left
  const activeHub = hoveredCard !== null ? getHubForDomain(hoveredCard) : hoveredHub;

  return (
    <section id="business-os" className="bg-warm-white py-20 md:py-[120px] px-6 select-none border-b border-[#E2E8F0] relative overflow-hidden">
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        {/* Dot grid */}
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
        {/* Line grid */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(1,112,185,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,112,185,0.03) 1px, transparent 1px)', 
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
          }} 
        />
        {/* Soft center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Schematic Alignment Corner Crosshairs */}
        <span className="absolute -top-6 -left-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>
        <span className="absolute -top-6 -right-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>
        <span className="absolute -bottom-6 -left-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>
        <span className="absolute -bottom-6 -right-6 font-mono text-[10px] text-navy/20 pointer-events-none select-none">+</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Dynamic Animated Systems Graph Console */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <ScrollReveal>
              <div className="border border-border-light bg-[#081B29] p-0 shadow-2xl transition-all duration-300 rounded-none overflow-hidden hover:shadow-gold/20">
                {/* macOS Console style header */}
                <div className="bg-[#040e15] px-4 py-3 flex items-center justify-between border-b border-white/5 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-[#FF5F56] rounded-full inline-block" />
                    <span className="w-2.5 h-2.5 bg-[#FFBD2E] rounded-full inline-block" />
                    <span className="w-2.5 h-2.5 bg-[#27C93F] rounded-full inline-block" />
                  </div>
                  <span className="font-mono text-[9px] font-bold tracking-widest text-white/40 uppercase">
                    ACTIVE FLOW DIAGNOSTIC
                  </span>
                  <div className="w-12" /> {/* spacer to balance */}
                </div>

                {/* Animated Interactive Graph SVG Container */}
                <div className="relative p-0 flex items-center justify-center bg-[#07131d]">
                  <svg 
                    viewBox="0 0 500 500" 
                    className="w-full h-auto max-w-[500px] select-none"
                  >
                    <defs>
                      {/* Grid background pattern */}
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.03" />
                      </pattern>
                    </defs>

                    {/* Background Grid */}
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Concentric System Rings */}
                    <circle cx="250" cy="250" r="100" fill="none" stroke="#0170B9" strokeWidth="1" strokeDasharray="4 8" opacity="0.08" />
                    <circle cx="250" cy="250" r="170" fill="none" stroke="#0170B9" strokeWidth="1" strokeDasharray="5 10" opacity="0.05" />

                    {/* Interconnection Connection Lines */}
                    {hubs.map((hub, idx) => {
                      const isLineActive = activeHub === idx || activeHub === -1;
                      return (
                        <line
                          key={`connection-${idx}`}
                          x1={hub.cx}
                          y1={hub.cy}
                          x2={250}
                          y2={250}
                          stroke={isLineActive ? "#8CC63F" : "#1E293B"}
                          strokeWidth={isLineActive ? "2.5" : "1.5"}
                          className="transition-all duration-350"
                        />
                      );
                    })}

                    {/* Animated Data streams flowing into the center core */}
                    {hubs.map((hub, idx) => {
                      const isStreamActive = activeHub === idx || activeHub === -1;
                      const pathData = `M ${hub.cx},${hub.cy} L 250,250`;
                      return (
                        <g key={`stream-particles-${idx}`}>
                          {/* Packet 1 */}
                          <circle r="3.5" fill={isStreamActive ? "#8CC63F" : "#0170B9"} opacity={isStreamActive ? 1 : 0.35}>
                            <animateMotion
                              dur={isStreamActive ? "1.2s" : "2.8s"}
                              repeatCount="indefinite"
                              path={pathData}
                              begin="0s"
                            />
                          </circle>
                          {/* Packet 2 (Offset) */}
                          <circle r="3.5" fill={isStreamActive ? "#8CC63F" : "#0170B9"} opacity={isStreamActive ? 1 : 0.35}>
                            <animateMotion
                              dur={isStreamActive ? "1.2s" : "2.8s"}
                              repeatCount="indefinite"
                              path={pathData}
                              begin={isStreamActive ? "0.6s" : "1.4s"}
                            />
                          </circle>
                        </g>
                      );
                    })}

                    {/* Surrounding Department Nodes */}
                    {hubs.map((hub, idx) => {
                      const isNodeActive = activeHub === idx || activeHub === -1;
                      return (
                        <g
                          key={`hub-node-${idx}`}
                          onMouseEnter={() => setHoveredHub(idx)}
                          onMouseLeave={() => setHoveredHub(null)}
                          className="cursor-pointer"
                        >
                          {/* Outer pulse */}
                          <motion.circle
                            cx={hub.cx}
                            cy={hub.cy}
                            r="14"
                            fill="none"
                            stroke={isNodeActive ? "#8CC63F" : "#0170B9"}
                            strokeWidth="1.5"
                            animate={
                              isNodeActive
                                ? { scale: [0.95, 1.35, 0.95], opacity: [0.25, 0.65, 0.25] }
                                : { scale: [0.85, 1.1, 0.85], opacity: [0.1, 0.3, 0.1] }
                            }
                            transition={{
                              duration: isNodeActive ? 1.8 : 3.6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          {/* Middle border */}
                          <circle
                            cx={hub.cx}
                            cy={hub.cy}
                            r="9"
                            fill="none"
                            stroke={isNodeActive ? "#8CC63F" : "#0170B9"}
                            strokeWidth="1"
                            opacity={isNodeActive ? 0.8 : 0.35}
                          />
                          {/* Center Node */}
                          <circle
                            cx={hub.cx}
                            cy={hub.cy}
                            r="5.5"
                            fill={isNodeActive ? "#8CC63F" : "#0170B9"}
                            className="transition-colors duration-300"
                          />
                          {/* Hub Monospace Title */}
                          <text
                            x={hub.tx}
                            y={hub.ty}
                            textAnchor={hub.align as "middle" | "start" | "end"}
                            className="font-mono text-[8px] font-black tracking-widest fill-white transition-opacity duration-300"
                            opacity={isNodeActive ? 1 : 0.4}
                          >
                            {hub.name}
                          </text>
                        </g>
                      );
                    })}

                    {/* Center Core: The pulsing Diamond */}
                    <g
                      onMouseEnter={() => setHoveredHub(-2)}
                      onMouseLeave={() => setHoveredHub(null)}
                      className="cursor-pointer"
                    >
                      {/* Pulsing core rings */}
                      <motion.circle
                        cx="250"
                        cy="250"
                        r="35"
                        fill="none"
                        stroke={activeHub === -1 || hoveredHub === -2 ? "#8CC63F" : "#0170B9"}
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        opacity={activeHub === -1 || hoveredHub === -2 ? 0.75 : 0.3}
                      />
                      <motion.g
                        animate={
                          activeHub === -1 || hoveredHub === -2
                            ? { scale: [1, 1.06, 1] }
                            : { scale: [1, 1.02, 1] }
                        }
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {/* Diamond Polygons */}
                        <polygon
                          points="250,215 280,230 295,230 250,285 205,230 220,230"
                          fill={activeHub === -1 || hoveredHub === -2 ? "rgba(140, 198, 63, 0.15)" : "rgba(1, 112, 185, 0.05)"}
                          stroke={activeHub === -1 || hoveredHub === -2 ? "#8CC63F" : "#0170B9"}
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <line x1="250" y1="215" x2="250" y2="285" stroke={activeHub === -1 || hoveredHub === -2 ? "#8CC63F" : "#0170B9"} strokeWidth="1.5" className="transition-all duration-300" />
                        <line x1="220" y1="230" x2="250" y2="285" stroke={activeHub === -1 || hoveredHub === -2 ? "#8CC63F" : "#0170B9"} strokeWidth="1.5" className="transition-all duration-300" />
                        <line x1="280" y1="230" x2="250" y2="285" stroke={activeHub === -1 || hoveredHub === -2 ? "#8CC63F" : "#0170B9"} strokeWidth="1.5" className="transition-all duration-300" />
                        <line x1="250" y1="215" x2="220" y2="230" stroke={activeHub === -1 || hoveredHub === -2 ? "#8CC63F" : "#0170B9"} strokeWidth="1.5" className="transition-all duration-300" />
                        <line x1="250" y1="215" x2="280" y2="230" stroke={activeHub === -1 || hoveredHub === -2 ? "#8CC63F" : "#0170B9"} strokeWidth="1.5" className="transition-all duration-300" />
                      </motion.g>
                      
                      <text
                        x="250"
                        y="308"
                        textAnchor="middle"
                        className="font-mono text-[9px] font-black tracking-widest fill-white transition-opacity duration-300"
                        opacity={activeHub === -1 || hoveredHub === -2 ? 1 : 0.55}
                      >
                        REVENUE ENGINE
                      </text>
                    </g>

                  </svg>
                </div>

                {/* Console System Status Footer */}
                <div className="bg-[#030d15] px-4 py-2.5 border-t border-white/5 font-mono text-[9px] text-[#8CC63F] flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#8CC63F] rounded-full inline-block animate-ping" />
                    <span>STATUS: MONITORING FLOWS</span>
                  </div>
                  <span className="tracking-wider uppercase">
                    {activeHub !== null 
                      ? `SYS_LINK: ${activeHub === -1 ? 'ALL_SYSTEMS_INTEGRATED' : activeHub === -2 ? 'CORE_ENGINE_OPTIMIZED' : `HUB_${activeHub.toString().padStart(2, '0')}_ACTIVE`}` 
                      : 'HOVER DOMAIN TO TRACE PATH'}
                  </span>
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
                  // Highlight card if hovered directly, or if parent hub on left is hovered
                  const isHighlighted = 
                    hoveredCard === idx || 
                    (hoveredHub !== null && cardHub === hoveredHub) ||
                    (hoveredHub === -2); // center core highlights all

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
                  const isCoreHighlighted = 
                    hoveredCard === 11 || 
                    hoveredHub === -2 || // center core hovered
                    hoveredHub !== null; // any hub hovered on left is part of unified core

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
