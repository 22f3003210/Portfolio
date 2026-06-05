import { useState } from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProblemItem {
  number: string;
  title: string;
  statement: string;
  bullets: string[];
  impact: string;
  extraInfo: string;
}

const problems: ProblemItem[] = [
  {
    number: "01",
    title: "Fragmented Systems",
    statement: "Most retail businesses operate with disconnected tools for sales, inventory, CRM, and finance.",
    bullets: [
      "No single source of truth",
      "Delayed decisions",
      "Inconsistent reporting"
    ],
    impact: "Businesses operate blind across functions.",
    extraInfo: "When data is locked in siloed applications, synchronizing inventory and sales requires manual reconciliation. This delay leads to stock discrepancies, double-selling, and end-of-month reporting bottlenecks that make real-time decisions impossible."
  },
  {
    number: "02",
    title: "Data Without Structure",
    statement: "Data exists, but it is not organized into usable intelligence.",
    bullets: [
      "Unstructured data",
      "Unlinked profiles",
      "Underutilized sales logs"
    ],
    impact: "Businesses collect information but cannot learn from it.",
    extraInfo: "Raw transactional logs and buyer profiles are useless without a cohesive taxonomy. Without connecting inventory turnover metrics to customer demographics, marketing teams spend budgets blindly while dead stock accumulates in warehouses."
  },
  {
    number: "03",
    title: "Reactive Decision Making",
    statement: "Most decisions are made after problems occur, not before.",
    bullets: [
      "Stock issues solved after shortages",
      "Customer churn addressed after loss",
      "Sales drops analyzed too late"
    ],
    impact: "Growth becomes reactive instead of predictive.",
    extraInfo: "Failing to implement predictive alerts means store managers only realize they are understocked after a customer walks away empty-handed. True efficiency requires preemptive triggers based on moving averages and lead times."
  },
  {
    number: "04",
    title: "Lack of System Thinking",
    statement: "Businesses optimize parts, not the whole system.",
    bullets: [
      "Sales improved in isolation",
      "Inventory optimized separately",
      "CRM used independently"
    ],
    impact: "Local improvements, global inefficiency.",
    extraInfo: "Increasing store footfall (Sales) without training staff or aligning stock leads to long queues, staff burnout, and walkouts. Systems thinking optimizes the throughput of the entire operation, not individual components."
  },
  {
    number: "05",
    title: "No Customer Intelligence Layer",
    statement: "Customer behavior is recorded, but not interpreted.",
    bullets: [
      "No lifecycle visibility",
      "No behavior pattern tracking",
      "No predictive understanding"
    ],
    impact: "Customers are managed, not understood.",
    extraInfo: "Simply storing phone numbers and purchase history in a database is not CRM. An intelligent layer tracks customer lifecycles, predicts next-purchase intervals, and automates personalized follow-ups before the customer drifts."
  },
  {
    number: "06",
    title: "Operational Blind Spots",
    statement: "Day-to-day retail operations lack visibility across store floors.",
    bullets: [
      "Untracked inventory movement",
      "Staff performance gaps",
      "Store & process delays"
    ],
    impact: "Inefficiencies remain invisible until they become costly.",
    extraInfo: "Without live audit trails, inventory shrinkage is only discovered during quarterly physical stocktaking. Live operations tracking ensures every movement of high-value jewellery is logged, attributable, and auditable instantly."
  },
  {
    number: "07",
    title: "Tool-Driven Thinking",
    statement: "Businesses believe software will fix structural problems.",
    bullets: [
      "Tools don’t fix broken systems",
      "Tools amplify existing structure"
    ],
    impact: "Complexity increases without solving core issues.",
    extraInfo: "Buying an expensive ERP on top of chaotic manual procedures only digitizes the chaos. The process rules must be re-engineered and systemized first; only then should software be introduced to automate and enforce them."
  }
];export function ProblemsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // A curated palette of muted earthy pastel top colors for each card
  const cardColors = [
    "#6e8d75", // Card 1: Muted Sage Green
    "#5d7d8a", // Card 2: Muted Teal/Ocean Slate
    "#9c7c68", // Card 3: Muted Terracotta/Sandstone
    "#766e8d", // Card 4: Muted Lavender/Plum Dust
    "#aa9065", // Card 5: Muted Gold/Ochre
    "#a37482", // Card 6: Muted Rose/Dusty Mauve
    "#5a738e", // Card 7: Muted Steel Blue/Slate
  ];

  return (
    <section className="bg-warm-white section-padding-lg relative overflow-hidden">
      <div className="content-max">
        {/* Main "Trusted By" Style Wrapper Box */}
        <div className="bg-[#4472c4] rounded-none p-6 md:p-10 shadow-2xl relative">
          {/* Background graphics container - handles clipping of radial glows */}
          <div className="absolute inset-0 rounded-none overflow-hidden pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3a63ad]/40 rounded-full blur-[120px]" />
          </div>

          {/* Heading block inside the card */}
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Core Problems in Modern Retail
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
              Before fixing software, we must identify where systems fail. Hover over any card below to reveal the 
              operational impact and detailed bottlenecks.
            </p>
          </div>

          {/* Bento Grid Layout - items-start allows cards to extend independently */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 items-start">
            {problems.map((problem, index) => {
              const isHovered = hoveredCard === index;
              const isSelected = selectedCard === index;
              const isExpanded = isHovered || isSelected;
              const isDimmed = hoveredCard !== null && hoveredCard !== index;
              const isLastCard = index === 6;
              const topColor = cardColors[index % cardColors.length];

              return (
                <div
                  key={problem.number}
                  className={`relative transition-all duration-300 ${
                    isExpanded ? 'h-auto z-30' : 'h-[140px] z-10'
                  } ${
                    isLastCard 
                      ? 'md:col-span-2 lg:col-span-3' 
                      : ''
                  }`}
                >
                  <motion.div
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setSelectedCard(isSelected ? null : index)}
                    animate={{
                      height: isExpanded ? 'auto' : '140px',
                      scale: isExpanded ? 1.02 : 1,
                      zIndex: isExpanded ? 50 : 10,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: 0.8
                    }}
                    style={{
                      borderTop: `4px solid ${topColor}`
                    }}
                    className={`${isExpanded ? 'relative' : 'absolute'} top-0 left-0 w-full bg-white border rounded-none overflow-hidden cursor-pointer text-text-primary transition-colors transition-shadow duration-300 ${
                      isExpanded
                        ? 'border-gold shadow-2xl'
                        : 'border-gray-150 shadow-md hover:border-gold/30'
                    } ${
                      isDimmed 
                        ? 'opacity-60 scale-[0.98] blur-[0.3px]' 
                        : ''
                    }`}
                  >
                    <div className="p-4 md:p-5 flex flex-col justify-start h-full gap-3 select-none">
                      {isLastCard ? (
                        /* Wide layout for Card 7 on desktop/tablet */
                        <div className={`grid grid-cols-1 ${isExpanded ? 'lg:grid-cols-12 gap-6' : 'lg:grid-cols-1'}`}>
                          <div className={`flex flex-col gap-3 ${isExpanded ? 'lg:col-span-7' : 'w-full'}`}>
                            {/* Header with Title & Icon on the same line */}
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="text-xl md:text-2xl font-extrabold text-navy leading-snug">
                                {problem.title}
                              </h3>
                              <div className="flex-shrink-0 mt-1">
                                <Sparkles className={`w-4 h-4 text-gold ${isExpanded ? 'animate-pulse' : 'opacity-40'}`} style={{ color: topColor }} />
                              </div>
                            </div>

                            {/* Statement */}
                            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-semibold">
                              {problem.statement}
                            </p>
                          </div>

                          {/* Collapsible details column */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.25 }}
                                className="lg:col-span-5 flex flex-col gap-4 lg:border-l lg:border-gray-200 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-150"
                              >
                                {/* Bullets List */}
                                <ul className="flex flex-col gap-2.5">
                                  {problem.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-2 text-[11px] md:text-xs text-text-secondary font-medium">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#4472c4]/70 mt-1.5 flex-shrink-0" />
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>

                                {/* Impact Box */}
                                <div className="bg-red-50 border border-red-100 rounded-none p-3">
                                  <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest block mb-0.5">
                                    Operational Impact
                                  </span>
                                  <p className="text-[11px] text-red-800 leading-normal font-semibold">
                                    {problem.impact}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        /* Standard layout for Cards 1-6 */
                        <div className="flex flex-col h-full justify-between gap-3">
                          <div className="flex flex-col gap-2.5">
                            {/* Title & Icon on the same line */}
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="text-base md:text-lg font-extrabold text-navy leading-snug">
                                {problem.title}
                              </h3>
                              <div className="flex-shrink-0 mt-0.5">
                                {isExpanded ? (
                                  <Sparkles className="w-4 h-4 text-gold animate-pulse" style={{ color: topColor }} />
                                ) : (
                                  <AlertCircle className="w-4 h-4 text-text-muted/40" style={{ color: topColor }} />
                                )}
                              </div>
                            </div>

                            {/* Statement */}
                            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-semibold">
                              {problem.statement}
                            </p>
                          </div>

                          {/* Collapsible Details */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="flex flex-col gap-4 overflow-hidden pt-3 border-t border-gray-150"
                              >
                                {/* Bullets List */}
                                <ul className="flex flex-col gap-2">
                                  {problem.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-2 text-[11px] md:text-xs text-text-secondary font-medium">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#4472c4]/70 mt-1.5 flex-shrink-0" />
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>

                                {/* Impact Box */}
                                <div className="bg-red-50 border border-red-100 rounded-none p-3">
                                  <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest block mb-0.5">
                                    Operational Impact
                                  </span>
                                  <p className="text-[11px] text-red-800 leading-normal font-semibold">
                                    {problem.impact}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
