import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  Search,
  Database,
  Shield,
  Warehouse,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Layers,
  Activity,
  Brain,
  TrendingUp,
  CreditCard
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' } as const,
});

interface LifecycleStep {
  num: string;
  label: string;
  tagline: string;
  icon: React.ComponentType<any>;
  identify?: string[];
  define?: string[];
  determine?: {
    title: string;
    description: string;
    examples?: string[];
  }[];
  components?: string[];
  visualize?: string[];
  tools?: string[];
  answer?: {
    question: string;
    concept: string;
  }[];
  predict?: string[];
  examples?: {
    category: string;
    items: string[];
  }[];
}

export function HowIWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const lifecycleSteps: LifecycleStep[] = [
    {
      num: '01',
      label: 'Data Discovery',
      tagline: 'Know what exists and what needs to be measured before making decisions.',
      icon: Search,
      identify: [
        'Business processes',
        'Decision points',
        'Performance drivers',
        'Failure points',
        'Data sources'
      ]
    },
    {
      num: '02',
      label: 'Data Modeling',
      tagline: 'Define how different parts of your business are connected.',
      icon: Database,
      define: [
        'Entities',
        'Attributes',
        'Relationships',
        'Events',
        'Dimensions'
      ],
      examples: [
        {
          category: 'Examples',
          items: ['Customer', 'Product', 'Employee', 'Inventory', 'Supplier', 'Transaction']
        }
      ]
    },
    {
      num: '03',
      label: 'Data Capture Framework',
      tagline: 'Determine what data should be collected and why it matters.',
      icon: CreditCard,
      determine: [
        {
          title: 'Master Data',
          description: 'Relatively static information',
          examples: ['Customer master', 'Product master', 'Vendor master', 'Employee master']
        },
        {
          title: 'Transactional Data',
          description: 'Business activities',
          examples: ['Sales', 'Purchases', 'Stock transfers', 'Returns']
        },
        {
          title: 'Operational Data',
          description: 'Process execution data',
          examples: ['Order processing time', 'Production cycle time', 'Approval delays']
        },
        {
          title: 'Behavioral Data',
          description: 'Actions taken by users',
          examples: ['Customer visits', 'Employee activities', 'Follow-up frequency']
        }
      ]
    },
    {
      num: '04',
      label: 'Data Governance',
      tagline: 'Ensure data remains accurate, consistent, and reliable.',
      icon: Shield,
      define: [
        'Data ownership',
        'Data standards',
        'Validation rules',
        'Data quality controls',
        'Audit trails'
      ]
    },
    {
      num: '05',
      label: 'Data Warehousing',
      tagline: 'Create a centralized repository of business knowledge.',
      icon: Warehouse,
      components: [
        'Data Sources',
        'ETL / ELT Pipelines',
        'Data Warehouse',
        'Data Marts'
      ]
    },
    {
      num: '06',
      label: 'KPI Engineering',
      tagline: 'Convert business activities into meaningful performance metrics.',
      icon: Activity,
      examples: [
        {
          category: 'Sales',
          items: ['Revenue', 'Average Order Value', 'Conversion Rate']
        },
        {
          category: 'Inventory',
          items: ['Inventory Turnover', 'Dead Stock %', 'Stock Aging']
        },
        {
          category: 'Operations',
          items: ['Process Cycle Time', 'Throughput', 'Defect Rate']
        },
        {
          category: 'People',
          items: ['Productivity Index', 'Task Completion Rate']
        }
      ]
    },
    {
      num: '07',
      label: 'Business Intelligence',
      tagline: 'Visualize trends and answer key business questions.',
      icon: BarChart2,
      visualize: [
        'Trends',
        'Variance',
        'Correlations',
        'Outliers',
        'Forecasts'
      ],
      tools: ['Power BI', 'Tableau', 'Metabase', 'Looker']
    },
    {
      num: '08',
      label: 'Diagnostic Analytics',
      tagline: 'Understand why outcomes happened, not just what happened.',
      icon: Brain,
      answer: [
        { question: 'What happened?', concept: 'Descriptive Analytics' },
        { question: 'Why did it happen?', concept: 'Diagnostic Analytics' }
      ]
    },
    {
      num: '09',
      label: 'Predictive Intelligence',
      tagline: 'Anticipate future business behaviors based on historical patterns.',
      icon: TrendingUp,
      predict: [
        'Demand',
        'Sales',
        'Inventory requirements',
        'Customer churn',
        'Workforce requirements'
      ]
    }
  ];

  const patterns = [
    'Sales Performance',
    'Inventory Movement',
    'Customer Behaviour',
    'Employee Performance',
    'Procurement Cycles',
    'Production Timelines',
    'Service Delivery',
    'Cash Flow Dynamics'
  ];

  const lifecycleFormula = [
    'Capture',
    'Structure',
    'Measure',
    'Visualize',
    'Analyze',
    'Predict',
    'Decide'
  ];

  const activeStepData = activeStep !== null ? lifecycleSteps[activeStep] : null;
  const StepIcon = activeStepData ? activeStepData.icon : null;

  return (
    <div className="bg-white font-sans overflow-hidden text-[#0B1E2E]">

      {/* ══ PAGE TITLE HERO ═══════════════════════════════════ */}
      <section className="relative bg-[#0B1E2E] pt-20 pb-16 px-6 overflow-hidden border-b border-white/5">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Ambient glows */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#0170B9]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] bg-[#8BC63F]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-[850px] mx-auto relative z-10 text-center space-y-8">
          
          {/* How I Work badge */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#8BC63F] border border-[#8BC63F]/30 px-4 py-1.5 font-mono">
              How I Work
            </span>
          </motion.div>

          {/* 1. Highlight Sam Altman's Message (Focal Point) */}
          <motion.div 
            {...fadeUp(0.06)}
            className="bg-[#0170B9]/5 border border-[#0170B9]/20 rounded-2xl p-6 md:p-8 max-w-[750px] mx-auto relative overflow-hidden backdrop-blur-sm shadow-2xl"
          >
            {/* Soft decorative visual background ring */}
            <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-[#8BC63F]/10 rounded-full blur-xl pointer-events-none" />
            
            <p className="text-sm md:text-base text-slate-200 leading-relaxed italic font-medium">
              "We are moving toward a world where intelligence becomes a utility—much like electricity, water, or internet connectivity."
            </p>
            <div className="mt-3.5 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-slate-600" />
              <span className="text-[10px] text-[#8BC63F] font-black uppercase tracking-wider font-mono">Sam Altman</span>
            </div>
          </motion.div>

          {/* 2. Core Philosophy & Rich Supporting Context */}
          <div className="space-y-6 pt-4 max-w-[700px] mx-auto text-left">
            <div className="text-center space-y-2">
              <motion.h2 
                {...fadeUp(0.12)}
                className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight"
              >
                Intelligence is the output. <br className="sm:hidden" />
                <span className="text-[#8BC63F]">Data is the input.</span>
              </motion.h2>
              
              <motion.p 
                {...fadeUp(0.18)}
                className="text-xs md:text-sm text-[#8BC63F] font-black uppercase tracking-wider font-mono"
              >
                You never know what you can't see.
              </motion.p>
            </div>
            
            <motion.div 
              {...fadeUp(0.24)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 p-6 rounded-2xl"
            >
              {[
                "Know what exists and what needs to be measured before making decisions.",
                "Determine what data should be collected and why it matters.",
                "Convert business activities into meaningful performance metrics.",
                "Visualize trends and answer key business questions.",
                "Understand why outcomes happened, not just what happened."
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#8BC63F] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed font-medium">{point}</span>
                </div>
              ))}
              
              <div className="md:col-span-2 pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8BC63F]/10 border border-[#8BC63F]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#8BC63F]" />
                </div>
                <p className="text-xs md:text-sm font-bold text-white">
                  And thus, a detailed <span className="text-[#8BC63F]">Intelligence Architecture</span> is ready.
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* ══ 3. METHODOLOGY: DATA INTELLIGENCE LIFECYCLE (Below Hero) ═══════════════════════ */}
      <section className="relative bg-[#071624] py-14 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-[800px] mx-auto text-center space-y-4 relative z-10">
          <motion.span 
            {...fadeUp(0)}
            className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#8BC63F] border border-[#8BC63F]/20 px-3 py-1 font-mono"
          >
            THE LIFECYCLE
          </motion.span>
          <motion.h2 
            {...fadeUp(0.06)}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Data Intelligence Lifecycle
          </motion.h2>
          <motion.p 
            {...fadeUp(0.12)}
            className="text-xs md:text-sm text-slate-400 max-w-[600px] mx-auto leading-relaxed font-medium"
          >
            A systematic engineering methodology to map, capture, structure, and transform raw operational activity into compounding business intelligence.
          </motion.p>
        </div>
      </section>

      {/* ══ STRIP: DATA LIFE CYCLE FORMULA ═══════════════════════ */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-6 px-6 overflow-x-auto shadow-sm">
        <div className="flex items-center justify-center gap-2 md:gap-3 min-w-max mx-auto">
          {lifecycleFormula.map((label, idx, arr) => (
            <span key={label} className="flex items-center gap-2 md:gap-3">
              <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-sm ${label === 'Decide' ? 'bg-[#8BC63F] text-white shadow-sm' : 'bg-white border border-slate-200 text-[#0B1E2E] shadow-sm'}`}>
                {label}
              </span>
              {idx < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#8BC63F] shrink-0" />}
            </span>
          ))}
        </div>
      </div>

      {/* ══ INTERACTIVE LIFECYCLE STEPPER ════════════════════════ */}
        <section 
          className="py-20 md:py-28 px-6 bg-white border-b border-slate-200"
          onMouseLeave={() => setActiveStep(null)}
        >
          <div className="max-w-[1200px] mx-auto">
            
            <ScrollReveal>
              <div className="max-w-[1000px] mx-auto mb-16 text-left relative pl-10">
                {/* Compound SVG triangle accent representing steps/forward progress */}
                <div className="absolute left-0 top-0.5 w-7 h-7 flex items-center justify-center pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-6 h-6 text-[#0170B9]" fill="currentColor">
                    <polygon points="10,90 45,20 65,90" className="opacity-20" />
                    <polygon points="30,90 65,20 85,90" className="opacity-45" />
                    <polygon points="50,90 85,20 105,90" className="opacity-75" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 block mb-2 font-mono">
                  STEP BY STEP PROCESS
                </span>
                <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight leading-tight">
                  We Complete every <span className="font-bold text-[#0B1E2E]">Step Carefully</span>
                </h2>
              </div>
            </ScrollReveal>
  
            {/* Desktop Serpentine Horizontal Chain */}
            <div className="hidden lg:block relative w-full max-w-[1000px] mx-auto h-[620px] mb-20 select-none">
              {/* SVG Path Connecting Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 620" preserveAspectRatio="none">
                <path 
                  d="M 180 80 L 820 80 C 980 80, 980 280, 820 280 L 180 280 C 20 280, 20 480, 180 480 L 820 480" 
                  fill="none" 
                  stroke="#0170B9" 
                  strokeWidth="4.5" 
                  className="opacity-100"
                />
              </svg>
  
              {/* Step Nodes */}
              {lifecycleSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const IconComponent = step.icon;
                
                // Calculate positions (3 rows, 3 cols)
                const isRow1 = idx < 3;
                const isRow2 = idx >= 3 && idx < 6;
                
                const topVal = isRow1 ? '80px' : isRow2 ? '280px' : '480px';
                
                let col = idx % 3;
                if (isRow2) col = 2 - col;
                const leftVal = col === 0 ? '18%' : col === 1 ? '50%' : '82%';
  
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group outline-none"
                    style={{ top: topVal, left: leftVal }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border transition-all duration-300 ${
                      isActive 
                        ? 'border-[#0170B9] scale-110 shadow-lg shadow-[#0170B9]/20' 
                        : 'border-slate-200/80 hover:border-[#0170B9] hover:scale-105'
                    }`}>
                      <IconComponent strokeWidth={1.8} className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-[#0170B9]' : 'text-slate-500 group-hover:text-[#0170B9]'}`} />
                    </div>
                    
                    {/* Title & Tagline Label below node */}
                    <span className="absolute top-20 left-1/2 -translate-x-1/2 text-center w-48 block pointer-events-none">
                      <span className={`text-[13px] font-semibold tracking-tight transition-colors duration-300 block leading-tight ${
                        isActive ? 'text-[#0170B9]' : 'text-slate-800 group-hover:text-[#0170B9]'
                      }`}>
                        {step.label}
                      </span>
                      <span className="text-[10.5px] text-slate-400 font-medium leading-relaxed block mt-2 max-w-[170px] mx-auto normal-case">
                        {step.tagline}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
  
            {/* Mobile Vertical Stepper Timeline */}
            <div className="lg:hidden relative pl-8 border-l-2 border-[#0170B9]/20 space-y-6 ml-4 py-2 mb-10">
              {lifecycleSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const IconComponent = step.icon;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(isActive ? null : idx)}
                    className="w-full flex items-start gap-4 text-left outline-none relative group"
                  >
                    {/* Node Dot on the left line */}
                    <div className={`absolute -left-[41px] w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white ${
                      isActive ? 'border-[#0170B9] ring-4 ring-[#0170B9]/15' : 'border-slate-200 group-hover:border-[#0170B9]'
                    }`}>
                      <IconComponent strokeWidth={1.8} className={`w-3 h-3 ${isActive ? 'text-[#0170B9]' : 'text-slate-400'}`} />
                    </div>
                    
                    <div>
                      <p className={`text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-[#0170B9]' : 'text-slate-800 group-hover:text-[#0170B9]'}`}>
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">{step.tagline}</p>
                    </div>
                  </button>
                );
              })}
            </div>
  
            {/* Active Step Details Panel */}
            <div className="w-full">
              <motion.div
                animate={{ 
                  height: activeStep !== null ? 'auto' : 0,
                  opacity: activeStep !== null ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {activeStep !== null && activeStepData && StepIcon && (
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="bg-white border border-slate-200/80 p-6 md:p-8 shadow-lg flex flex-col justify-between w-full relative overflow-hidden rounded-2xl"
                    >
                      {/* Huge background watermark step number */}
                      <div className="absolute right-4 -top-8 font-mono font-black text-slate-100 text-[180px] leading-none pointer-events-none select-none">
                        {activeStepData.num}
                      </div>
  
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-2.5">
                          <StepIcon className="w-5 h-5 text-[#0170B9]" />
                          <span className="text-[10px] font-black text-[#0170B9] uppercase tracking-wider font-mono bg-[#0170B9]/5 px-2.5 py-1 border border-[#0170B9]/15">
                            STEP {activeStepData.num}
                          </span>
                        </div>
  
                        <div className="space-y-1.5">
                          <h3 className="text-2xl font-extrabold text-[#0B1E2E] tracking-tight leading-none">
                            {activeStepData.label}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-400 font-semibold italic">
                            "{activeStepData.tagline}"
                          </p>
                        </div>
  
                        {/* 1. Identify section */}
                        {activeStepData.identify && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Identify</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {activeStepData.identify.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 p-3 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-[#0170B9] shrink-0 mt-0.5" />
                                  <span className="text-xs md:text-sm font-bold text-slate-600 leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 2. Define section */}
                        {activeStepData.define && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Define</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {activeStepData.define.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 p-3 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-[#0170B9] shrink-0 mt-0.5" />
                                  <span className="text-xs md:text-sm font-bold text-slate-600 leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 3. Determine section (structured list for Step 3) */}
                        {activeStepData.determine && (
                          <div className="space-y-4 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Determine</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {activeStepData.determine.map((group, idx) => (
                                <div key={idx} className="bg-[#F8FAFC] border border-slate-200/60 p-4 rounded-xl space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-black uppercase tracking-wider text-slate-800">{group.title}</span>
                                    <span className="text-[9.5px] text-slate-400 font-semibold italic">{group.description}</span>
                                  </div>
                                  {group.examples && (
                                    <div className="flex flex-wrap gap-1 pt-1">
                                      {group.examples.map((ex) => (
                                        <span key={ex} className="text-[9.5px] font-bold bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded">
                                          {ex}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 4. Components section (for Step 5) */}
                        {activeStepData.components && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Components</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {activeStepData.components.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 p-3 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-[#0170B9] shrink-0 mt-0.5" />
                                  <span className="text-xs md:text-sm font-bold text-slate-600 leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 5. Visualize section (for Step 7) */}
                        {activeStepData.visualize && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Visualize</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {activeStepData.visualize.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 p-3 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-[#0170B9] shrink-0 mt-0.5" />
                                  <span className="text-xs md:text-sm font-bold text-slate-600 leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 6. Answer section (for Step 8) */}
                        {activeStepData.answer && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Answer</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {activeStepData.answer.map((item, idx) => (
                                <div key={idx} className="bg-[#F8FAFC] border border-slate-200/60 p-4 rounded-xl space-y-1">
                                  <p className="text-xs font-bold text-slate-400 uppercase">Question</p>
                                  <p className="text-sm font-black text-slate-800">{item.question}</p>
                                  <p className="text-[10.5px] font-bold text-[#0170B9] bg-[#0170B9]/5 px-2 py-0.5 border border-[#0170B9]/15 inline-block rounded mt-2">{item.concept}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 7. Predict section (for Step 9) */}
                        {activeStepData.predict && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Predict</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {activeStepData.predict.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 p-3 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-[#0170B9] shrink-0 mt-0.5" />
                                  <span className="text-xs md:text-sm font-bold text-slate-600 leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Categorized Examples / Tools lists */}
                        {activeStepData.examples && Array.isArray(activeStepData.examples) && typeof activeStepData.examples[0] === 'object' && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Examples</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {(activeStepData.examples as { category: string; items: string[] }[]).map((group, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl space-y-2">
                                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">{group.category}</span>
                                  <div className="flex flex-wrap gap-1.5 pt-1">
                                    {group.items.map((item) => (
                                      <span key={item} className="text-[11px] font-bold bg-white border border-slate-200/60 px-2.5 py-1 text-slate-700">
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeStepData.tools && (
                          <div className="space-y-2.5 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] font-mono">Tools</p>
                            <div className="flex flex-wrap gap-1.5">
                              {activeStepData.tools.map((t) => (
                                <span key={t} className="text-[10.5px] font-black uppercase tracking-wider text-[#0B1E2E] bg-slate-100 border border-slate-200/60 px-3 py-1">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
  
                      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#0170B9]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                          Standardised Data Architecture Framework
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
  
          </div>
        </section>

      {/* ══ THE FALLACY (WRONG END) SECTION ═══════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: The Fallacy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8BC63F] block">The Systemic Fallacy</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E2E] tracking-tight leading-tight mt-2">
                Most Businesses Start at the Wrong End
              </h2>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mt-4">
                When businesses face operational challenges, they often look for software. They purchase ERPs, implement CRMs, subscribe to dashboards, and automate workflows. Yet many still struggle to answer simple, critical questions:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                'Why are sales declining?',
                'Why are customers not returning?',
                'Which employees create the most value?',
                'Which products generate real profit?',
                'Where is operational leakage occurring?',
                'Which process creates the most delays?'
              ].map((q, idx) => (
                <ScrollReveal key={q} delay={idx * 0.04}>
                  <div className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-200/60 p-4 rounded-xl hover:border-[#0170B9]/30 hover:bg-white transition-all duration-300 min-h-[72px]">
                    <span className="w-1.5 h-1.5 bg-[#8BC63F] rounded-full shrink-0 mt-2" />
                    <span className="text-xs md:text-sm font-bold text-slate-700 leading-snug">{q}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Block: The Explanation Card */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#0B1E2E] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8BC63F]/5 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#8BC63F]">THE DIAGNOSIS</span>
                
                <h3 className="text-xl md:text-2xl font-black text-white mt-3 mb-4">
                  The problem is rarely the software.
                </h3>
                <p className="text-sm text-white/70 font-medium leading-relaxed mb-6">
                  The problem is that the right data was <span className="text-white font-bold">never captured</span> in the first place. Without observation, there is no measurement; without measurement, there is no intelligence.
                </p>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Data Collection Gap</p>
                  
                  {[
                    { label: 'Transaction Data', sub: 'What happened', collected: true },
                    { label: 'Decision Data', sub: 'Why it was decided', collected: false },
                    { label: 'Process Data', sub: 'How long it took', collected: false },
                    { label: 'Behavioral Data', sub: 'Actions taken by actors', collected: false }
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between gap-4 bg-white/5 px-4 py-3 rounded-lg border border-white/5">
                      <div>
                        <p className="text-xs font-bold text-white/95">{d.label}</p>
                        <p className="text-[9.5px] text-white/40 font-medium">{d.sub}</p>
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded ${d.collected ? 'bg-[#8BC63F]/20 text-[#8BC63F]' : 'bg-white/5 text-white/30'}`}>
                        {d.collected ? 'COLLECTED' : 'MISSING'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs md:text-sm text-white/70 font-semibold leading-relaxed">
                    Businesses collect transactions, but miss the decisions and processes. As a result, they know what happened, but not <span className="text-[#8BC63F] font-bold">why</span> it happened.
                  </p>
                  <p className="text-base font-extrabold text-[#8BC63F] mt-3 uppercase tracking-tight">
                    And intelligence lives in the "why."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ══ PATTERNS SECTION ═════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-[#0B1E2E] text-white border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Headline & Statement */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8BC63F] block">Operational Constants</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mt-2">
                  Every Business Has Patterns
                </h2>
                <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed mt-4">
                  Every business is a collection of repeating patterns. The objective is not simply to record transactions. The objective is to identify repeating successes, repeating failures, hidden bottlenecks, and leading indicators of future outcomes.
                </p>
                
                <div className="border-l-4 border-[#8BC63F] pl-5 mt-6 py-1 bg-[#8BC63F]/5 rounded-r-md">
                  <p className="text-sm md:text-base font-bold text-white/95 italic">
                    "Once patterns become visible, decision-making becomes significantly easier."
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Patterns Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {patterns.map((p, idx) => (
                  <ScrollReveal key={p} delay={idx * 0.05}>
                    <motion.div 
                      whileHover={{ scale: 1.02, borderColor: '#8BC63F' }}
                      className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-[#8BC63F]/5 transition-all duration-300 flex items-center gap-3.5 group"
                    >
                      <div className="w-2 h-2 bg-[#8BC63F] rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-xs md:text-sm font-bold text-white/90">{p}</span>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ THE ASSET: HISTORICAL DATA SECTION ═══════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8BC63F] block">Operational Assets</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E2E] tracking-tight leading-tight mt-2">
              Historical Data Is the Foundation of Future Decisions
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mt-4">
              The future is often hidden inside the past. The deeper and cleaner the historical data, the more accurately future decisions can be made. AI does not create this understanding — AI amplifies it.
            </p>
            
            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-6 mt-6 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0170B9] mb-4">Historical Data Signals</p>
              <div className="space-y-3">
                {[
                  'Seasonal demand patterns',
                  'Customer purchasing behaviour',
                  'Employee productivity trends',
                  'Inventory movement cycles',
                  'Process inefficiencies',
                  'Profitability drivers'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-1.5 border-b border-slate-100 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#8BC63F] shrink-0" />
                    <span className="text-xs md:text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="space-y-5">
              <div className="bg-[#0B1E2E] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8BC63F]/5 rounded-full blur-2xl pointer-events-none" />
                <Lightbulb className="w-8 h-8 text-[#8BC63F] mb-4" />
                
                <h3 className="text-lg font-black text-white leading-snug mb-2">
                  AI does not create understanding.
                </h3>
                <p className="text-base font-extrabold text-[#8BC63F] mb-3">
                  AI amplifies it.
                </p>
                <p className="text-xs md:text-sm text-white/60 font-medium leading-relaxed">
                  Without clean, structured historical data, even the most powerful AI systems cannot generate meaningful intelligence. First we observe, then we measure, then we automate.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <Layers className="w-6 h-6 text-[#0B1E2E] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs md:text-sm font-extrabold text-[#0B1E2E] mb-1">Infrastructure First</p>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Before deploying dashboards or automations, the core data storage and models must be designed correctly to match how business operations behave.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <TrendingUp className="w-6 h-6 text-[#8BC63F] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs md:text-sm font-extrabold text-[#0B1E2E] mb-1">Compounding Returns</p>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Every month of structured data collection compounds in value, directly increasing the predictive accuracy of your business intelligence systems.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ══ POSITIONING STATEMENT / CTA SECTION ══════════════════ */}
      <section className="relative bg-[#0B1E2E] text-white py-24 md:py-32 px-6 overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8BC63F]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#8BC63F]/10" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#8BC63F]/10" />
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#8BC63F] border border-[#8BC63F]/30 px-4 py-1.5 mb-8">
              Value Proposition
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              We Help Businesses Build Their<br />
              <span className="text-[#8BC63F]">Intelligence Infrastructure.</span>
            </h2>
            
            <p className="text-xs md:text-sm text-[#8BC63F] font-bold uppercase tracking-widest mb-6">
              Not just software. Not just dashboards. Not just reports.
            </p>
            
            <p className="text-sm md:text-base text-white/70 font-semibold leading-relaxed mb-10 max-w-[620px] mx-auto">
              We design the systems, measurements, and data foundations that transform everyday business activity into actionable intelligence.
            </p>

            {/* Stepper Formula Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {['Measure', 'Visualize', 'Analyze', 'Decide', 'Improve', 'Repeat'].map((label, idx, arr) => (
                <span key={label} className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-sm ${label === 'Repeat' ? 'bg-[#8BC63F] text-white shadow-sm' : 'bg-white/10 text-white/80 border border-white/10'}`}>
                    {label}
                  </span>
                  {idx < arr.length - 1 && <ArrowRight className="w-3 h-3 text-[#8BC63F]" />}
                </span>
              ))}
            </div>

            {/* Strategic positioning statement quote */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 max-w-[700px] mx-auto mb-10">
              <p className="text-sm md:text-base font-bold text-[#8BC63F] leading-relaxed italic">
                "We help businesses build Decision Intelligence Systems by identifying critical data points, engineering measurement frameworks, and transforming operational data into actionable intelligence."
              </p>
            </div>

            <p className="text-base md:text-lg font-bold text-white mb-8">
              That is how intelligent businesses are built.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/#contact" 
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#0B1E2E] bg-[#8BC63F] px-8 py-4 hover:bg-white hover:text-[#0B1E2E] transition-colors duration-300 shadow-lg shadow-[#8BC63F]/10 rounded-sm"
              >
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/consulting" 
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-white/60 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-8 py-4 rounded-sm"
              >
                View Consulting Operations →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
