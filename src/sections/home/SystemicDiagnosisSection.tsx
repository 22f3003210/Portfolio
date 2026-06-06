import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Activity } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';

interface ProblemItem {
  id: string;
  title: string;
  statement: string;
  bullets: string[];
  impact: string;
  extraInfo: string;
  mapsToNode: string;
}

const problems: ProblemItem[] = [
  {
    id: "01",
    title: "Fragmented Systems",
    statement: "Most retail businesses operate with disconnected tools for sales, inventory, CRM, and finance.",
    bullets: [
      "No single source of truth",
      "Delayed decisions",
      "Inconsistent reporting"
    ],
    impact: "Businesses operate blind across functions.",
    extraInfo: "When data is locked in siloed applications, synchronizing inventory and sales requires manual reconciliation. This delay leads to stock discrepancies, double-selling, and end-of-month reporting bottlenecks that make real-time decisions impossible.",
    mapsToNode: "unified"
  },
  {
    id: "02",
    title: "Data Without Structure",
    statement: "Data exists, but it is not organized into usable intelligence.",
    bullets: [
      "Unstructured data",
      "Unlinked profiles",
      "Underutilized sales logs"
    ],
    impact: "Businesses collect information but cannot learn from it.",
    extraInfo: "Raw transactional logs and buyer profiles are useless without a cohesive taxonomy. Without connecting inventory turnover metrics to customer demographics, marketing teams spend budgets blindly while dead stock accumulates in warehouses.",
    mapsToNode: "customer"
  },
  {
    id: "03",
    title: "Reactive Decision Making",
    statement: "Most decisions are made after problems occur, not before.",
    bullets: [
      "Stock issues solved after shortages",
      "Customer churn addressed after loss",
      "Sales drops analyzed too late"
    ],
    impact: "Growth becomes reactive instead of predictive.",
    extraInfo: "Failing to implement predictive alerts means store managers only realize they are understocked after a customer walks away empty-handed. True efficiency requires preemptive triggers based on moving averages and lead times.",
    mapsToNode: "predictive"
  },
  {
    id: "04",
    title: "Lack of System Thinking",
    statement: "Businesses optimize parts, not the whole system.",
    bullets: [
      "Sales improved in isolation",
      "Inventory optimized separately",
      "CRM used independently"
    ],
    impact: "Local improvements, global inefficiency.",
    extraInfo: "Increasing store footfall (Sales) without training staff or aligning stock leads to long queues, staff burnout, and walkouts. Systems thinking optimizes the throughput of the entire operation, not individual components.",
    mapsToNode: "unified"
  },
  {
    id: "05",
    title: "No Customer Intelligence Layer",
    statement: "Customer behavior is recorded, but not interpreted.",
    bullets: [
      "No lifecycle visibility",
      "No behavior pattern tracking",
      "No predictive understanding"
    ],
    impact: "Customers are managed, not understood.",
    extraInfo: "Simply storing phone numbers and purchase history in a database is not CRM. An intelligent layer tracks customer lifecycles, predicts next-purchase intervals, and automates personalized follow-ups before the customer drifts.",
    mapsToNode: "customer"
  },
  {
    id: "06",
    title: "Operational Blind Spots",
    statement: "Day-to-day retail operations lack visibility across store floors.",
    bullets: [
      "Untracked inventory movement",
      "Staff performance gaps",
      "Store & process delays"
    ],
    impact: "Inefficiencies remain invisible until they become costly.",
    extraInfo: "Without live audit trails, inventory shrinkage is only discovered during quarterly physical stocktaking. Live operations tracking ensures every movement of high-value jewellery is logged, attributable, and auditable instantly.",
    mapsToNode: "inventory"
  },
  {
    id: "07",
    title: "Tool-Driven Thinking",
    statement: "Businesses believe software will fix structural problems.",
    bullets: [
      "Tools don’t fix broken systems",
      "Tools amplify existing structure"
    ],
    impact: "Complexity increases without solving core issues.",
    extraInfo: "Buying an expensive ERP on top of chaotic manual procedures only digitizes the chaos. The process rules must be re-engineered and systemized first; only then should software be introduced to automate and enforce them.",
    mapsToNode: "core"
  }
];

export function SystemicDiagnosisSection() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [hoveredProblemIdx, setHoveredProblemIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'problems' | 'diagram'>('problems');

  const topColors: Record<string, string> = {
    unified: "#6e8d75",   // Sage Green
    inventory: "#5d7d8a", // Teal
    customer: "#9c7c68",  // Terracotta
    predictive: "#766e8d", // Lavender
    core: "#8CC63F"       // Systems Lime Green
  };

  const getNodeColor = (nodeId: string) => {
    return topColors[nodeId] || "#8CC63F";
  };

  // Check if a problem is currently highlighted based on activeNodeId
  const isProblemHighlighted = (problem: ProblemItem, index: number) => {
    if (hoveredProblemIdx !== null) {
      return hoveredProblemIdx === index;
    }
    if (activeNodeId !== null) {
      return problem.mapsToNode === activeNodeId;
    }
    return false;
  };

  return (
    <section id="systemic-diagnosis" className="bg-[#F8FAFC] py-20 md:py-28 px-6 border-b border-border-light relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto space-y-10 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <SectionLabel variant="pill">DIAGNOSIS</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight mt-3">
              Systemic Diagnosis & Core Problems
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-2">
              Before fixing software, we must identify where systems fail. Interact with the core problems on the left to see how they map to systemic operating solutions on the right.
            </p>
          </ScrollReveal>
        </div>

        {/* Dashboard Card Container */}
        <ScrollReveal className="w-full">
          <div className="bg-gradient-to-br from-[#0B1E2E] to-[#05101A] rounded-none border border-white/10 p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
            
            {/* Subtle background dot grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] opacity-70">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0170B9]/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Mobile Tab Toggle */}
            <div className="flex lg:hidden w-full border-b border-white/10 mb-6 relative z-20">
              <button
                onClick={() => setActiveTab('problems')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all ${
                  activeTab === 'problems'
                    ? 'border-[#8CC63F] text-[#8CC63F]'
                    : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                1. Core Problems
              </button>
              <button
                onClick={() => setActiveTab('diagram')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all ${
                  activeTab === 'diagram'
                    ? 'border-[#8CC63F] text-[#8CC63F]'
                    : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                2. Systemic Solution
              </button>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
              
              {/* Left Column: 7 Core Problems List */}
              <div className={`lg:col-span-5 space-y-3 ${activeTab === 'problems' ? 'block' : 'hidden lg:block'}`}>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-1 select-none">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#8CC63F] font-mono">
                    7 CORE RETAIL PROBLEMS
                  </span>
                  <span className="text-[10px] font-semibold text-white/40">
                    Hover to map solution
                  </span>
                </div>

                <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                  {problems.map((problem, index) => {
                    const isHighlighted = isProblemHighlighted(problem, index);
                    const cardColor = getNodeColor(problem.mapsToNode);
                    
                    return (
                      <div
                        key={problem.id}
                        onMouseEnter={() => {
                          setHoveredProblemIdx(index);
                          setActiveNodeId(problem.mapsToNode);
                        }}
                        onMouseLeave={() => {
                          setHoveredProblemIdx(null);
                          setActiveNodeId(null);
                        }}
                        style={{
                          borderLeftWidth: '4px',
                          borderLeftColor: isHighlighted ? cardColor : 'rgba(255, 255, 255, 0.1)'
                        }}
                        className={`p-4 bg-[#071324]/80 border border-white/5 transition-all duration-300 rounded-none cursor-pointer ${
                          isHighlighted
                            ? 'shadow-[0_4px_15px_rgba(140,198,63,0.05)] border-white/25 bg-[#091a30]'
                            : 'opacity-75 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold text-white/40 font-mono">
                                #{problem.id}
                              </span>
                              <h3 className="text-sm font-bold text-white leading-tight">
                                {problem.title}
                              </h3>
                            </div>
                            <p className="text-xs text-white/70 leading-normal mt-1">
                              {problem.statement}
                            </p>
                          </div>
                          <AlertCircle 
                            className="w-3.5 h-3.5 shrink-0 mt-0.5" 
                            style={{ color: isHighlighted ? cardColor : 'rgba(255,255,255,0.2)' }}
                          />
                        </div>

                        {/* Collapsible Details */}
                        <AnimatePresence initial={false}>
                          {isHighlighted && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                              className="overflow-hidden mt-3 pt-3 border-t border-white/10 space-y-3"
                            >
                              <ul className="space-y-1.5 pl-1.5">
                                {problem.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2 text-[10px] text-white/60 font-medium">
                                    <span className="w-1 h-1 rounded-full bg-[#8CC63F] mt-1.5 shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="bg-red-950/30 border border-red-900/30 p-2.5 rounded-none">
                                <span className="text-[8px] font-black text-red-400 uppercase tracking-widest block">
                                  OPERATIONAL IMPACT
                                </span>
                                <p className="text-[10px] text-red-300 leading-snug font-semibold mt-0.5">
                                  {problem.impact}
                                </p>
                              </div>

                              <p className="text-[10.5px] text-white/50 leading-relaxed italic border-t border-white/5 pt-2">
                                {problem.extraInfo}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Interactive SVG Diagnosis Canvas */}
              <div className={`lg:col-span-7 flex flex-col justify-center select-none ${activeTab === 'diagram' ? 'block' : 'hidden lg:block'}`}>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 lg:hidden select-none">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#8CC63F] font-mono">
                    01. SYSTEMIC DIAGNOSIS
                  </span>
                </div>

                <div className="relative w-full aspect-[2/1] min-h-[300px] sm:min-h-[360px] lg:min-h-0 bg-[#071324]/30 border border-white/5 p-2 select-none overflow-hidden">
                  
                  {/* SVG Connecting Canvas */}
                  <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                    
                    {/* Connecting Dotted Lines routing from center box left/right edges, then 90-degrees to corner centers */}
                    {/* Top-Left Path: Starts at Y=200, X=220 -> goes left to X=110 -> goes up to Y=95 */}
                    <path 
                      id="path-tl" 
                      d="M 220,200 L 110,200 L 110,95" 
                      fill="none" 
                      stroke={activeNodeId === 'unified' ? '#8CC63F' : '#0170B9'} 
                      strokeWidth={activeNodeId === 'unified' ? '2' : '1.5'} 
                      strokeDasharray="4 4" 
                      className="transition-all duration-300" 
                      opacity={activeNodeId === 'unified' ? '0.9' : '0.4'} 
                    />
                    
                    {/* Bottom-Left Path: Starts at Y=200, X=220 -> goes left to X=110 -> goes down to Y=305 */}
                    <path 
                      id="path-bl" 
                      d="M 220,200 L 110,200 L 110,305" 
                      fill="none" 
                      stroke={activeNodeId === 'customer' ? '#8CC63F' : '#0170B9'} 
                      strokeWidth={activeNodeId === 'customer' ? '2' : '1.5'} 
                      strokeDasharray="4 4" 
                      className="transition-all duration-300" 
                      opacity={activeNodeId === 'customer' ? '0.9' : '0.4'} 
                    />
                    
                    {/* Top-Right Path: Starts at Y=200, X=580 -> goes right to X=690 -> goes up to Y=95 */}
                    <path 
                      id="path-tr" 
                      d="M 580,200 L 690,200 L 690,95" 
                      fill="none" 
                      stroke={activeNodeId === 'inventory' ? '#8CC63F' : '#0170B9'} 
                      strokeWidth={activeNodeId === 'inventory' ? '2' : '1.5'} 
                      strokeDasharray="4 4" 
                      className="transition-all duration-300" 
                      opacity={activeNodeId === 'inventory' ? '0.9' : '0.4'} 
                    />
                    
                    {/* Bottom-Right Path: Starts at Y=200, X=580 -> goes right to X=690 -> goes down to Y=305 */}
                    <path 
                      id="path-br" 
                      d="M 580,200 L 690,200 L 690,305" 
                      fill="none" 
                      stroke={activeNodeId === 'predictive' ? '#8CC63F' : '#0170B9'} 
                      strokeWidth={activeNodeId === 'predictive' ? '2' : '1.5'} 
                      strokeDasharray="4 4" 
                      className="transition-all duration-300" 
                      opacity={activeNodeId === 'predictive' ? '0.9' : '0.4'} 
                    />

                    {/* Animated Data Packets traveling along the paths (glow in lime green when hovered) */}
                    <g fill="#8CC63F">
                      <circle r={activeNodeId === 'unified' ? "4" : "3"}>
                        <animateMotion dur={activeNodeId === 'unified' ? "1.2s" : "3.5s"} repeatCount="indefinite">
                          <mpath href="#path-tl" />
                        </animateMotion>
                      </circle>
                      <circle r={activeNodeId === 'customer' ? "4" : "3"}>
                        <animateMotion dur={activeNodeId === 'customer' ? "1.2s" : "3.5s"} repeatCount="indefinite">
                          <mpath href="#path-bl" />
                        </animateMotion>
                      </circle>
                      <circle r={activeNodeId === 'inventory' ? "4" : "3"}>
                        <animateMotion dur={activeNodeId === 'inventory' ? "1.2s" : "3.5s"} repeatCount="indefinite">
                          <mpath href="#path-tr" />
                        </animateMotion>
                      </circle>
                      <circle r={activeNodeId === 'predictive' ? "4" : "3"}>
                        <animateMotion dur={activeNodeId === 'predictive' ? "1.2s" : "3.5s"} repeatCount="indefinite">
                          <mpath href="#path-br" />
                        </animateMotion>
                      </circle>
                    </g>
                  </svg>

                  {/* HTML nodes mapped into the SVG coordinate space using absolute placements based on % */}
                  {/* Central Core Box */}
                  <div 
                    onMouseEnter={() => setActiveNodeId('core')}
                    onMouseLeave={() => setActiveNodeId(null)}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "42%"
                    }}
                    className={`absolute z-20 text-center p-3 sm:p-4 bg-[#071324]/95 border transition-all duration-300 cursor-pointer ${
                      activeNodeId === 'core'
                        ? 'border-[#8CC63F] shadow-[0_0_20px_rgba(140,198,63,0.15)] bg-[#0c233a]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0170B9]" />
                    <h3 className="font-extrabold text-[10.5px] sm:text-xs text-white leading-tight">
                      Most Retail Systems Don't Scale.
                    </h3>
                    <h3 className="font-extrabold text-[10.5px] sm:text-xs text-[#8CC63F] leading-tight mt-1">
                      They Lack an Operational Core.
                    </h3>
                  </div>

                  {/* Top-Left Corner Box: Unified Operations */}
                  <div 
                    onMouseEnter={() => setActiveNodeId('unified')}
                    onMouseLeave={() => setActiveNodeId(null)}
                    style={{
                      left: "1.5%",
                      top: "2.5%",
                      width: "25%",
                      height: "21.5%"
                    }}
                    className={`absolute z-20 p-2 md:p-2.5 flex flex-col justify-between border transition-all duration-300 bg-[#071324]/95 cursor-pointer ${
                      activeNodeId === 'unified'
                        ? 'border-[#8CC63F] shadow-[0_0_15px_rgba(140,198,63,0.12)] bg-[#091f24]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-[6.5px] font-mono font-bold px-1.5 py-0.5 bg-[#6e8d75]/10 border border-[#6e8d75]/25 text-[#6e8d75] uppercase tracking-wider">
                        UNIFY SILOS
                      </span>
                    </div>
                    <h4 className="text-[9.5px] sm:text-[10px] md:text-[11px] font-bold text-white leading-tight">
                      Unified Operations
                    </h4>
                    <p className="text-[8px] sm:text-[8.5px] text-white/50 leading-tight hidden sm:block">
                      Breaking down silos to build a digital nervous system.
                    </p>
                  </div>

                  {/* Top-Right Corner Box: Transparent Inventory */}
                  <div 
                    onMouseEnter={() => setActiveNodeId('inventory')}
                    onMouseLeave={() => setActiveNodeId(null)}
                    style={{
                      right: "1.5%",
                      top: "2.5%",
                      width: "25%",
                      height: "21.5%"
                    }}
                    className={`absolute z-20 p-2 md:p-2.5 flex flex-col justify-between border transition-all duration-300 bg-[#071324]/95 cursor-pointer ${
                      activeNodeId === 'inventory'
                        ? 'border-[#8CC63F] shadow-[0_0_15px_rgba(140,198,63,0.12)] bg-[#091f24]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-[6.5px] font-mono font-bold px-1.5 py-0.5 bg-[#5d7d8a]/10 border border-[#5d7d8a]/25 text-[#5d7d8a] uppercase tracking-wider">
                        SYNC STOCKS
                      </span>
                    </div>
                    <h4 className="text-[9.5px] sm:text-[10px] md:text-[11px] font-bold text-white leading-tight">
                      Transparent Inventory
                    </h4>
                    <p className="text-[8px] sm:text-[8.5px] text-white/50 leading-tight hidden sm:block">
                      Real-time stock tracking to ensure capital is never trapped.
                    </p>
                  </div>

                  {/* Bottom-Left Corner Box: Structured Customer Intelligence */}
                  <div 
                    onMouseEnter={() => setActiveNodeId('customer')}
                    onMouseLeave={() => setActiveNodeId(null)}
                    style={{
                      left: "1.5%",
                      bottom: "2.5%",
                      width: "25%",
                      height: "21.5%"
                    }}
                    className={`absolute z-20 p-2 md:p-2.5 flex flex-col justify-between border transition-all duration-300 bg-[#071324]/95 cursor-pointer ${
                      activeNodeId === 'customer'
                        ? 'border-[#8CC63F] shadow-[0_0_15px_rgba(140,198,63,0.12)] bg-[#091f24]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-[6.5px] font-mono font-bold px-1.5 py-0.5 bg-[#9c7c68]/10 border border-[#9c7c68]/25 text-[#9c7c68] uppercase tracking-wider">
                        LINK PROFILE
                      </span>
                    </div>
                    <h4 className="text-[9.5px] sm:text-[10px] md:text-[11px] font-bold text-white leading-tight">
                      Customer Intelligence
                    </h4>
                    <p className="text-[8px] sm:text-[8.5px] text-white/50 leading-tight hidden sm:block">
                      Consolidating data points to fuel clienteling journeys.
                    </p>
                  </div>

                  {/* Bottom-Right Corner Box: Predictive Decision-Making */}
                  <div 
                    onMouseEnter={() => setActiveNodeId('predictive')}
                    onMouseLeave={() => setActiveNodeId(null)}
                    style={{
                      right: "1.5%",
                      bottom: "2.5%",
                      width: "25%",
                      height: "21.5%"
                    }}
                    className={`absolute z-20 p-2 md:p-2.5 flex flex-col justify-between border transition-all duration-300 bg-[#071324]/95 cursor-pointer ${
                      activeNodeId === 'predictive'
                        ? 'border-[#8CC63F] shadow-[0_0_15px_rgba(140,198,63,0.12)] bg-[#091f24]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-[6.5px] font-mono font-bold px-1.5 py-0.5 bg-[#766e8d]/10 border border-[#766e8d]/25 text-[#766e8d] uppercase tracking-wider">
                        PRE-EMPT
                      </span>
                    </div>
                    <h4 className="text-[9.5px] sm:text-[10px] md:text-[11px] font-bold text-white leading-tight">
                      Predictive Decisions
                    </h4>
                    <p className="text-[8px] sm:text-[8.5px] text-white/50 leading-tight hidden sm:block">
                      Replacing guesswork with real-time indicators and averages.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Centered Quote */}
            <div className="border-t border-dashed border-white/10 pt-5 mt-8 text-center relative z-10 flex items-center justify-center gap-2">
              <Activity className="w-4 h-4 text-[#8CC63F] animate-pulse" />
              <p className="text-xs sm:text-sm font-bold text-[#8CC63F] italic">
                &quot;Scale begins where operational friction ends.&quot;
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
