import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import { CheckCircle2, ChevronRight, Activity, TrendingUp } from 'lucide-react';

interface Principle {
  number: string;
  title: string;
  paragraphs: string[];
}

export function HowIThinkSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const principles: Principle[] = [
    {
      number: '01',
      title: 'Every Process Produces Variation',
      paragraphs: [
        'No two stores operate exactly the same way.',
        'No two sales teams perform identically.',
        'No two inventory teams maintain the same level of accuracy.',
        'Variation exists everywhere.',
        'The challenge is not variation itself.',
        'The challenge is understanding which variations improve performance and which create inefficiencies.',
        'Before attempting to improve any operation, I focus on identifying and measuring variation across processes, branches, teams, and workflows.',
        'What gets measured can be understood.',
        'What gets understood can be improved.'
      ]
    },
    {
      number: '02',
      title: 'Most Business Problems Are Process Problems',
      paragraphs: [
        'When performance drops, businesses often look for individuals to blame.',
        'In reality, many recurring problems originate from poorly designed systems.',
        '• Inventory discrepancies.',
        '• Delayed order fulfilment.',
        '• Inconsistent customer experiences.',
        '• Poor follow-up execution.',
        '• Data inaccuracies.',
        'These are often symptoms of process gaps rather than individual failures.',
        'Instead of asking: "Who made the mistake?"',
        'I prefer asking: "What allowed the mistake to happen?"',
        'The answer usually reveals an opportunity for process improvement.'
      ]
    },
    {
      number: '03',
      title: 'Customers Define Value',
      paragraphs: [
        'Internal complexity means very little to customers.',
        'Customers care about trust, transparency, service quality, product availability, timely delivery, and a seamless buying experience.',
        'A process has value only if it contributes to delivering a better customer experience or better business outcome.',
        'Every workflow, system, and operational activity should ultimately support value creation.'
      ]
    },
    {
      number: '04',
      title: 'Waste Exists in Every Business',
      paragraphs: [
        'Over the years, I have observed that businesses often lose resources not because of major strategic mistakes, but because of small operational inefficiencies repeated every day.',
        '• Duplicate work.',
        '• Excess inventory.',
        '• Manual reconciliation.',
        '• Communication gaps.',
        '• Approval bottlenecks.',
        '• Unnecessary movement of information or stock.',
        'These hidden inefficiencies accumulate into significant costs over time.',
        'One of my key objectives is identifying and eliminating activities that consume effort without creating value.'
      ]
    },
    {
      number: '05',
      title: 'Flow Matters More Than Activity',
      paragraphs: [
        'Many organizations are busy.',
        'Few are truly efficient.',
        'A business can have employees working constantly while critical information, approvals, inventory, or customer requests remain stuck in the system.',
        'The goal is not to maximize activity.',
        'The goal is to maximize flow.',
        'Work should move smoothly across departments with minimal delays, minimal handoffs, and minimal friction.',
        'Efficient flow creates faster execution, better visibility, and stronger business performance.'
      ]
    },
    {
      number: '06',
      title: 'Decisions Should Be Driven by Data',
      paragraphs: [
        'Many decisions are made based on assumptions.',
        'Assumptions create blind spots.',
        'Data creates clarity.',
        'Whenever I design dashboards, workflows, reports, or data collection frameworks, the first question I ask is: "What decision will this information support?"',
        'Data should not exist for reporting purposes alone.',
        'It should enable better decisions, faster responses, and greater operational control.'
      ]
    },
    {
      number: '07',
      title: 'Continuous Improvement Creates Competitive Advantage',
      paragraphs: [
        'Exceptional businesses are rarely built through one breakthrough initiative.',
        'They are built through hundreds of small improvements accumulated over time.',
        'Every process can be improved.',
        'Every workflow can be simplified.',
        'Every system can be refined.',
        'My focus is creating environments where improvement becomes a continuous capability rather than a one-time project.'
      ]
    },
    {
      number: '08',
      title: 'Focus on Root Causes, Not Symptoms',
      paragraphs: [
        'Most operational problems are symptoms.',
        'The real challenge lies deeper within the system.',
        'For example:',
        '• A stock shortage may appear to be an inventory issue. The root cause may be inaccurate forecasting.',
        '• A customer complaint may appear to be a service issue. The root cause may be poor communication between departments.',
        '• A reporting problem may appear to be a data issue. The root cause may be a flawed process design.',
        'Identifying root causes prevents businesses from repeatedly solving the same problems.'
      ]
    },
    {
      number: '09',
      title: 'Improvement Must Be Sustainable',
      paragraphs: [
        'Temporary improvements create temporary results.',
        'True transformation occurs when improvements become part of everyday operations.',
        'A solution should be measurable.',
        'A process should be repeatable.',
        'A system should be scalable.',
        'An improvement should survive beyond the individual who introduced it.',
        'My goal is not simply to fix problems.',
        'My goal is to design systems that continuously produce better outcomes.'
      ]
    }
  ];

  return (
    <section id="how-i-think" className="bg-[#F8FAFC] py-20 md:py-28 px-6 border-b border-border-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0170B9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto space-y-16 relative z-10">
        
        {/* Header Block - Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Badge and Title */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal>
              <SectionLabel variant="pill">APPROACH</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight mt-3">
                My Engineering Approach <br />
                <span className="text-[#0170B9]">to Jewellery Retail</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column: Intro Copy & Quote */}
          <div className="lg:col-span-7 space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p className="font-semibold text-text-primary">
                After working with jewellery retailers across South India, one observation has remained consistent:
              </p>
              <div className="bg-white border-l-4 border-[#0170B9] p-4 rounded-none shadow-sm italic text-navy font-medium text-lg leading-relaxed">
                "Business outcomes are not random. Every outcome is produced by a process. If you improve the process, the outcome improves automatically."
              </div>
              <p className="text-sm">
                Whether it is inventory accuracy, sales conversion, customer retention, cash flow, stock ageing, employee productivity, or profitability — each outcome is a reflection of the systems and processes operating behind the scenes.
              </p>
              <p className="text-sm font-semibold text-text-primary">
                This belief forms the foundation of how I approach jewellery retail transformation.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 9 Principles Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-4">
          
          {/* Left: Interactive Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0170B9] bg-[#0170B9]/5 px-3 py-1 border border-[#0170B9]/15 rounded-none inline-block mb-3">
              9 CORE PRINCIPLES
            </span>
            <div className="space-y-2">
              {principles.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`w-full text-left p-4 rounded-none border transition-all duration-200 flex items-center justify-between group ${
                      isActive 
                        ? 'bg-[#0B1E2E] border-[#0B1E2E] text-white shadow-md' 
                        : 'bg-white border-border-light hover:border-navy text-text-primary hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-none ${
                        isActive ? 'bg-gold text-navy' : 'bg-[#0170B9]/10 text-[#0170B9]'
                      }`}>
                        {item.number}
                      </span>
                      <span className="text-xs md:text-sm font-bold tracking-tight">
                        {item.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-gold translate-x-1' : 'text-text-secondary group-hover:translate-x-1'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Detail Content Card */}
          <div className="lg:col-span-7 h-full min-h-[460px] flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white border border-border-light rounded-none p-8 shadow-sm flex flex-col justify-between w-full relative overflow-hidden"
              >
                {/* Background watermarked number */}
                <div className="absolute right-4 -top-6 font-mono font-black text-navy/[0.03] text-[150px] leading-none pointer-events-none select-none">
                  {principles[activeIdx].number}
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider font-mono">
                      PRINCIPLE {principles[activeIdx].number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-navy tracking-tight leading-tight">
                    {principles[activeIdx].title}
                  </h3>

                  <div className="space-y-3.5 text-text-secondary text-sm md:text-base leading-relaxed">
                    {principles[activeIdx].paragraphs.map((p, pIdx) => {
                      const isBullet = p.startsWith('•');
                      const isHighlighted = p.startsWith('What gets') || p.startsWith('I prefer asking');
                      
                      return (
                        <p 
                          key={pIdx} 
                          className={`
                            ${isBullet ? 'pl-4 font-semibold text-text-primary' : ''} 
                            ${isHighlighted ? 'font-bold text-navy border-l-2 border-gold pl-3 italic bg-gold/5 py-1 rounded-none' : ''}
                          `}
                        >
                          {p}
                        </p>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border-light flex items-center gap-2 relative z-10">
                  <Activity className="w-4 h-4 text-[#0170B9] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                    Systems Transformation Engineering Framework
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Section Footer: The Core Philosophy */}
        <ScrollReveal className="w-full">
          <div className="bg-[#0B1E2E] rounded-none border border-white/10 p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[450px] h-[400px] bg-[#0170B9]/15 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#8CC63F]" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#8CC63F] font-mono font-bold">THE CORE PHILOSOPHY</span>
                  <h3 className="text-3xl font-extrabold mt-1 text-white leading-tight">
                    Interconnected Operating System
                  </h3>
                </div>
                <div className="space-y-4 text-white/95 text-sm md:text-base leading-relaxed">
                  <p className="font-semibold">
                    I don't view jewellery retail as a collection of departments.
                  </p>
                  <p className="font-medium text-white/80">
                    I view it as an interconnected operating system.
                  </p>
                </div>
              </div>

              {/* Right Column: Connection visual list */}
              <div className="lg:col-span-6 bg-[#050F1A] border border-white/10 p-6 md:p-8 rounded-none space-y-6 transition-all duration-300 hover:border-[#8CC63F]/30 hover:shadow-[0_4px_20px_rgba(140,198,63,0.05)]">
                <span className="text-xs font-bold text-[#8CC63F] uppercase tracking-wider font-mono">CROSS-FUNCTIONAL DEPENDENCIES</span>
                
                <ul className="space-y-2.5 text-xs md:text-sm font-medium text-white/90">
                  {[
                    'Sales affects inventory.',
                    'Inventory affects procurement.',
                    'Procurement affects cash flow.',
                    'Customer experience affects repeat business.',
                    'Data affects decision-making.',
                    'Every component influences another.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8CC63F] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-white/85 text-xs md:text-sm leading-relaxed pt-2">
                  My role is to understand those connections, identify operational gaps, and engineer systems that help businesses operate with greater clarity, consistency, efficiency, and control.
                </p>

                <div className="border-t border-white/10 pt-4 mt-2">
                  <p className="text-sm md:text-base font-extrabold italic text-[#8CC63F] leading-relaxed">
                    "Because in the end: Every outcome is produced by a process. Improve the process, and the outcome improves automatically."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
