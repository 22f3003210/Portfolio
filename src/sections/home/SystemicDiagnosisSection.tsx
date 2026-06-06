import { useState, useEffect } from 'react';
import { Activity, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-sliding effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  const topColors: Record<string, string> = {
    unified: "#6e8d75",   // Sage Green
    inventory: "#5d7d8a", // Teal
    customer: "#9c7c68",  // Terracotta
    predictive: "#766e8d", // Lavender
    core: "#8CC63F"       // Systems Lime Green
  };

  const getSolutionName = (nodeId: string) => {
    const names: Record<string, string> = {
      unified: "Unified Operations",
      inventory: "Transparent Inventory",
      customer: "Structured Customer Intelligence",
      predictive: "Predictive Decision-Making",
      core: "Process Re-Engineering"
    };
    return names[nodeId] || "";
  };

  const getSolutionDesc = (nodeId: string) => {
    const descs: Record<string, string> = {
      unified: "UNIFY SILOS: Build a single, interconnected digital nervous system that links sales, inventory, and finance in real-time, eliminating manual reconciliations and duplicate data entries.",
      inventory: "SYNC STOCKS: Track every movement of high-value stock and loose stones with real-time voucher attribution, securing inventory and eliminating showrooms blind spots.",
      customer: "LINK PROFILE: Consolidate fragmented data points across branches to generate complete buying profiles and automate personalized clienteling journeys.",
      predictive: "PRE-EMPTIVE TRIGGERS: Replace guess-work and historical analysis with real-time lead time averages, stock moving metrics, and automated replenishment alerts.",
      core: "CORE SYSTEMS ENGINEERING: Re-engineer the operational rules before buying software. Build the foundational process architecture first, then automate and enforce."
    };
    return descs[nodeId] || "";
  };

  const getSolutionIcon = (nodeId: string) => {
    switch (nodeId) {
      case 'unified':
        return (
          <svg className="w-16 h-16 text-[#8CC63F]/10 absolute bottom-4 right-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
          </svg>
        );
      case 'inventory':
        return (
          <svg className="w-16 h-16 text-[#8CC63F]/10 absolute bottom-4 right-4 pointer-events-none animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case 'customer':
        return (
          <svg className="w-16 h-16 text-[#8CC63F]/10 absolute bottom-4 right-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'predictive':
        return (
          <svg className="w-16 h-16 text-[#8CC63F]/10 absolute bottom-4 right-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 text-[#8CC63F]/10 absolute bottom-4 right-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        );
    }
  };

  const handleCardClick = (idx: number) => {
    const total = problems.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    
    if (idx === prev) {
      setActiveIndex(prev);
    } else if (idx === next) {
      setActiveIndex(next);
    }
  };

  const total = problems.length;
  const prevIdx = (activeIndex - 1 + total) % total;
  const nextIdx = (activeIndex + 1) % total;

  return (
    <section id="systemic-diagnosis" className="bg-[#F8FAFC] py-20 md:py-28 px-6 border-b border-border-light relative overflow-hidden select-none">
      <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
        
        {/* Main Heading Block */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel variant="pill">DIAGNOSIS</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight mt-3">
              Most Retail Systems Don't Scale. <br />
              <span className="text-[#0170B9]">They Lack an Operational Core.</span>
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-2 max-w-2xl mx-auto">
              Before fixing software, we must identify where systems fail. Explore the 7 core problems and their systemic operating solutions below.
            </p>
          </ScrollReveal>
        </div>

        {/* Sliding Cards Container */}
        <ScrollReveal className="w-full">
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-gradient-to-br from-[#0B1E2E] to-[#05101A] rounded-none border border-white/10 p-6 md:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[640px] sm:min-h-[580px] md:min-h-[480px] lg:min-h-[440px]"
          >
            {/* Subtle background dot grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] opacity-70">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0170B9]/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Carousel Track */}
            <div className="w-full relative flex items-center justify-center overflow-visible h-[480px] sm:h-[420px] md:h-[350px] lg:h-[300px]">
              
              {problems.map((problem, index) => {
                const isCenter = index === activeIndex;
                const isPrev = index === prevIdx;
                const isNext = index === nextIdx;

                let positionClass = "opacity-0 scale-75 pointer-events-none z-0 translate-x-0";
                if (isCenter) {
                  positionClass = "opacity-100 scale-100 md:scale-[1.03] lg:scale-[1.05] z-20 translate-x-0 border-white/20 shadow-[0_15px_35px_rgba(140,198,63,0.12)] bg-[#071324]";
                } else if (isPrev) {
                  positionClass = "opacity-25 scale-[0.85] z-10 -translate-x-[110%] sm:-translate-x-[110%] md:-translate-x-[55%] lg:-translate-x-[45%] cursor-pointer hover:opacity-40 blur-[0.5px] bg-[#050D17]/80";
                } else if (isNext) {
                  positionClass = "opacity-25 scale-[0.85] z-10 translate-x-[110%] sm:translate-x-[110%] md:translate-x-[55%] lg:translate-x-[45%] cursor-pointer hover:opacity-40 blur-[0.5px] bg-[#050D17]/80";
                }

                const cardColor = topColors[problem.mapsToNode] || "#8CC63F";

                return (
                  <div
                    key={problem.id}
                    onClick={() => handleCardClick(index)}
                    style={{
                      borderTop: `4px solid ${cardColor}`,
                      transitionProperty: "transform, opacity, scale, filter",
                      transitionDuration: "600ms",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                    className={`absolute w-[92%] sm:w-[85%] md:w-[75%] lg:w-[70%] h-full border border-white/5 rounded-none overflow-hidden select-none ${positionClass}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 p-5 sm:p-6 md:p-8 h-full relative">
                      
                      {/* Left Side: The Problem */}
                      <div className="md:col-span-6 flex flex-col justify-between space-y-3 md:space-y-0 text-left">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-white/40 font-mono tracking-wider">
                              PROBLEM #{problem.id}
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-red-400 bg-red-950/20 border border-red-900/30 px-1.5 py-0.5 rounded-none inline-block">
                              Core Symptom
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                            {problem.title}
                          </h3>
                          <p className="text-xs text-white/85 leading-relaxed">
                            {problem.statement}
                          </p>
                          
                          {/* Bullets */}
                          <ul className="space-y-1.5 pt-1.5">
                            {problem.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 text-[10.5px] text-white/60 font-medium leading-snug">
                                <span className="w-1 h-1 rounded-full bg-[#8CC63F] mt-1.5 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Red Impact Box */}
                        <div className="bg-red-950/30 border border-red-900/30 p-2.5 rounded-none mt-2">
                          <span className="text-[8px] font-black text-red-400 uppercase tracking-widest block">
                            OPERATIONAL IMPACT
                          </span>
                          <p className="text-[10px] text-red-300 font-semibold leading-snug mt-0.5">
                            {problem.impact}
                          </p>
                        </div>
                      </div>

                      {/* Right Side: The Solution */}
                      <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between space-y-4 md:space-y-0 text-left relative">
                        
                        <div className="space-y-2 relative z-10">
                          <div className="flex items-center">
                            <span className="text-[9px] font-bold text-[#8CC63F] font-mono tracking-wider border border-[#8CC63F]/20 bg-[#8CC63F]/5 px-2 py-0.5 rounded-none uppercase">
                              SYSTEMS SOLUTION
                            </span>
                          </div>
                          <h4 className="text-sm sm:text-base font-extrabold text-[#8CC63F] leading-tight">
                            {getSolutionName(problem.mapsToNode)}
                          </h4>
                          <p className="text-[10.5px] sm:text-[11px] text-white/70 leading-relaxed pt-1">
                            {getSolutionDesc(problem.mapsToNode)}
                          </p>
                        </div>

                        {/* Extra info shown on larger screens */}
                        <div className="hidden lg:block text-[9.5px] text-white/45 leading-relaxed pt-2 border-t border-white/5 relative z-10 italic">
                          {problem.extraInfo}
                        </div>

                        {/* Mapped SVG watermark icon */}
                        {getSolutionIcon(problem.mapsToNode)}

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between w-full max-w-[200px] mx-auto mt-6 z-30">
              <button 
                onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#8CC63F]/40 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="text-[10px] font-mono font-bold text-white/40 tracking-wider">
                {activeIndex + 1} / {total}
              </span>

              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#8CC63F]/40 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Centered Quote */}
            <div className="border-t border-dashed border-white/10 pt-5 mt-6 text-center relative z-10 flex items-center justify-center gap-2">
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
