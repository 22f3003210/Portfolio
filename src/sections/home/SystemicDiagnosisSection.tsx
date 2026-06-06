import { useState, useEffect, useCallback } from 'react';
import { 
  Activity, 
  Network, 
  Database, 
  Timer, 
  GitFork, 
  Users, 
  EyeOff, 
  Wrench 
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

interface ProblemItem {
  id: string;
  title: string;
  statement: string;
  bullets: string[];
  impact: string;
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
    mapsToNode: "core"
  }
];

const problemIcons = [
  Network,
  Database,
  Timer,
  GitFork,
  Users,
  EyeOff,
  Wrench
];

interface ThemeStyle {
  name: string;
  gradient: string;
  glowColor: string;
  textColor: string;
  badgeBg: string;
  badgeText: string;
  iconBg: string;
  iconColor: string;
  bgGradient: string;
  glowBgPrimary: string;
  glowBgSecondary: string;
}


const nodeThemes: Record<string, ThemeStyle> = {
  unified: {
    name: "Unified System",
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
    textColor: "text-emerald-700",
    badgeBg: "bg-emerald-50 border-emerald-200/60",
    badgeText: "text-emerald-700",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    bgGradient: "from-white to-emerald-50/20",
    glowBgPrimary: "rgba(16, 185, 129, 0.14)",
    glowBgSecondary: "rgba(20, 184, 166, 0.07)"
  },
  inventory: {
    name: "Operational Flow",
    gradient: "from-cyan-500 via-blue-500 to-cyan-600",
    glowColor: "rgba(6, 182, 212, 0.25)",
    textColor: "text-cyan-700",
    badgeBg: "bg-cyan-50 border-cyan-200/60",
    badgeText: "text-cyan-700",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    bgGradient: "from-white to-cyan-50/20",
    glowBgPrimary: "rgba(6, 182, 212, 0.14)",
    glowBgSecondary: "rgba(59, 130, 246, 0.07)"
  },
  customer: {
    name: "Customer Intel",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    glowColor: "rgba(249, 115, 22, 0.25)",
    textColor: "text-amber-700",
    badgeBg: "bg-amber-50 border-amber-200/60",
    badgeText: "text-amber-700",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    bgGradient: "from-white to-amber-50/20",
    glowBgPrimary: "rgba(249, 115, 22, 0.14)",
    glowBgSecondary: "rgba(244, 63, 94, 0.07)"
  },
  predictive: {
    name: "Predictive Analytics",
    gradient: "from-purple-500 via-indigo-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.25)",
    textColor: "text-purple-700",
    badgeBg: "bg-purple-50 border-purple-200/60",
    badgeText: "text-purple-700",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    bgGradient: "from-white to-purple-50/20",
    glowBgPrimary: "rgba(168, 85, 247, 0.14)",
    glowBgSecondary: "rgba(99, 102, 241, 0.07)"
  },
  core: {
    name: "Foundation OS",
    gradient: "from-lime-500 via-emerald-500 to-teal-500",
    glowColor: "rgba(132, 204, 22, 0.25)",
    textColor: "text-lime-700",
    badgeBg: "bg-lime-50 border-lime-200/60",
    badgeText: "text-lime-700",
    iconBg: "bg-lime-50",
    iconColor: "text-lime-600",
    bgGradient: "from-white to-lime-50/20",
    glowBgPrimary: "rgba(132, 204, 22, 0.14)",
    glowBgSecondary: "rgba(16, 185, 129, 0.07)"
  }
};

export function SystemicDiagnosisSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    duration: 20, // Increased sliding speed (was 35)
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Update selected index on scroll
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality - faster interval (was 4000ms)
  useEffect(() => {
    if (!emblaApi || isHovered) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2800);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  const handleCardClick = (idx: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(idx);
    }
  };

  const activeProblem = problems[selectedIndex];
  const activeTheme = nodeThemes[activeProblem.mapsToNode] || nodeThemes.core;

  return (
    <section id="systemic-diagnosis" className="bg-white py-20 md:py-28 px-6 border-b border-border-light relative overflow-hidden select-none">
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
              Before fixing software, we must identify where systems fail. Explore the core problems below.
            </p>
          </ScrollReveal>
        </div>

        {/* Sliding Cards Container */}
        <ScrollReveal className="w-full">
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-gradient-to-br from-slate-50 to-white rounded-none border border-slate-200/80 p-6 md:p-10 text-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-center min-h-[500px] sm:min-h-[460px] md:min-h-[420px] lg:min-h-[380px]"
          >
            {/* Dynamic shifting background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60">
              <div 
                style={{ 
                  backgroundColor: activeTheme.glowBgPrimary, 
                  transition: "background-color 800ms ease" 
                }} 
                className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[110px]" 
              />
              <div 
                style={{ 
                  backgroundColor: activeTheme.glowBgSecondary, 
                  transition: "background-color 800ms ease" 
                }} 
                className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-[110px]" 
              />
            </div>

            {/* Carousel Viewport (Embla) */}
            <div 
              ref={emblaRef}
              className="w-full overflow-hidden relative h-[420px] xs:h-[380px] sm:h-[320px] md:h-[280px] flex items-center justify-center"
            >
              {/* Embla Container */}
              <div className="flex w-full h-full items-center">
                {problems.map((problem, index) => {
                  const isActive = index === selectedIndex;
                  const theme = nodeThemes[problem.mapsToNode] || nodeThemes.core;
                  const Icon = problemIcons[index] || Network;

                  return (
                    <div
                      key={problem.id}
                      className="flex-none w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] px-3 md:px-4 h-full flex items-center"
                    >
                      <div
                        onClick={() => handleCardClick(index)}
                        style={{
                          boxShadow: isActive ? `0 20px 45px -10px ${theme.glowColor}` : 'none',
                          transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), scale 600ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 600ms ease"
                        }}
                        className={cn(
                          "border rounded-none overflow-hidden select-none h-full w-full relative flex flex-col justify-between",
                          isActive
                            ? cn("opacity-100 scale-100 md:scale-[1.02] border-slate-200/80 bg-gradient-to-br bg-white", theme.bgGradient)
                            : "opacity-35 scale-90 md:scale-[0.88] lg:scale-[0.85] border-slate-100 bg-white/40 backdrop-blur-[3px] cursor-pointer hover:opacity-55 blur-[0.2px]"
                        )}
                      >
                        {/* Gradient Accent Bar at Top of Active Card */}
                        <div className={cn(
                          "h-[4px] w-full bg-gradient-to-r transition-opacity duration-300", 
                          theme.gradient,
                          isActive ? "opacity-100" : "opacity-30"
                        )} />

                        <div className="flex flex-col justify-between p-5 sm:p-6 md:p-8 h-full w-full relative text-left">
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              {/* Replaced 'Core Symptom' with Descriptive Theme Tag */}
                              <span className={cn(
                                "text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-none border transition-colors duration-300",
                                isActive 
                                  ? cn(theme.badgeBg, theme.badgeText)
                                  : "bg-slate-50 text-slate-400 border-slate-200"
                              )}>
                                {theme.name}
                              </span>
                              {/* Dynamic Theme Icon */}
                              <div className={cn(
                                "w-8 h-8 rounded-none flex items-center justify-center border transition-all duration-300",
                                isActive 
                                  ? cn(theme.iconBg, theme.iconColor, "border-current/10 scale-110")
                                  : "bg-slate-50 text-slate-400 border-slate-200"
                              )}>
                                <Icon className="w-4 h-4" />
                              </div>
                            </div>
                            {/* Card title with dynamic gradient text on active state */}
                            <h3 className={cn(
                              "text-base sm:text-lg md:text-xl font-black leading-tight pt-1.5 transition-all duration-300",
                              isActive 
                                ? cn("bg-gradient-to-r bg-clip-text text-transparent", theme.gradient)
                                : "text-navy"
                            )}>
                              {problem.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {problem.statement}
                            </p>
                            
                            {/* Bullets (2 columns on tablet/desktop) */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-2">
                              {problem.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-[10.5px] sm:text-xs text-slate-600 font-medium leading-snug group/item">
                                  <span className={cn("w-1.5 h-1.5 rounded-none mt-1.5 shrink-0 bg-gradient-to-br", theme.gradient)} />
                                  <span className="transition-colors duration-200 group-hover/item:text-slate-800">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Premium Redesigned Impact Box */}
                          <div className={cn(
                            "border-l-2 p-3 rounded-none mt-4 transition-all duration-300",
                            isActive
                              ? "bg-slate-50 border-red-500/80" 
                              : "bg-slate-50/40 border-slate-200"
                          )}>
                            <span className="text-[8px] font-black text-red-600 uppercase tracking-widest block">
                              OPERATIONAL IMPACT
                            </span>
                            <p className="text-[10.5px] sm:text-[11px] text-slate-700 font-semibold leading-snug mt-0.5">
                              {problem.impact}
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 w-full mt-6 z-30">
              <button 
                onClick={() => emblaApi?.scrollPrev()}
                className={cn(
                  "w-11 h-11 rounded-none bg-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-300 shadow-sm",
                  "hover:text-white hover:border-transparent hover:bg-gradient-to-br",
                  activeTheme.gradient
                )}
                aria-label="Previous card"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5l-7 7 7 7"/>
                  <path d="M4 12h16"/>
                </svg>
              </button>

              <button 
                onClick={() => emblaApi?.scrollNext()}
                className={cn(
                  "w-11 h-11 rounded-none bg-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-300 shadow-sm",
                  "hover:text-white hover:border-transparent hover:bg-gradient-to-br",
                  activeTheme.gradient
                )}
                aria-label="Next card"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h16"/>
                  <path d="M13 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Bottom Centered Quote */}
            <div className="border-t border-slate-200/50 pt-6 mt-8 text-center relative z-10 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-3">
                <span className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-[#0170B9]/60" />
                <div className="p-1 bg-[#0170B9]/5 border border-[#0170B9]/20 rounded-none flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-[#0170B9] animate-pulse" />
                </div>
                <span className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-[#0170B9]/60" />
              </div>
              <p className="text-xs sm:text-sm font-bold italic tracking-wide text-navy mt-1">
                &quot;Scale begins where operational friction ends.&quot;
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
