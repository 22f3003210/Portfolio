import { useState } from 'react';
import { BusinessOSSection } from '../sections/home/BusinessOSSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Settings2, 
  BarChart3, 
  Coins, 
  Scaling, 
  Check, 
  Target, 
  Eye,
  Briefcase,
  Cpu,
  Award,
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const GREEN = '#8bc34a';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' } as const
});

interface ObjectiveCategory {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  points: string[];
}

export function Consulting() {
  const [activeCategory, setActiveCategory] = useState<string>('operations');

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Improve Inventory Productivity',
      description: 'Unlock the full potential of inventory investments by improving stock movement, reducing dead stock, and increasing inventory turnover.'
    },
    {
      icon: Users,
      title: 'Enhance Customer Experience',
      description: 'Create memorable customer journeys through better service processes, stronger CRM practices, and consistent customer engagement.'
    },
    {
      icon: Settings2,
      title: 'Increase Operational Excellence',
      description: 'Standardize workflows, establish accountability, and reduce dependency on individuals through well-defined systems and SOPs.'
    },
    {
      icon: BarChart3,
      title: 'Enable Data-Driven Decisions',
      description: 'Provide visibility through dashboards, KPIs, and reporting systems that help leaders understand business behaviour, identify opportunities, and make informed decisions with confidence.'
    },
    {
      icon: Coins,
      title: 'Strengthen Profitability',
      description: 'Identify inefficiencies, optimize procurement and inventory management, and improve overall business performance.'
    },
    {
      icon: Scaling,
      title: 'Build Scalable Businesses',
      description: 'Create systems that support expansion, multi-branch operations, and long-term sustainable growth.'
    }
  ];

  const beliefs = [
    'Data is one of the most valuable assets a business can possess.',
    'Growth accelerates when decisions are driven by facts, not assumptions.',
    'Understanding business behaviour is the foundation of improvement.',
    'Great businesses are built on systems, not individuals.',
    'Customer experience is a strategic advantage.',
    'Accountability creates performance.',
    'Technology should simplify operations and improve visibility.',
    'Continuous improvement is essential for growth.',
    'Sustainable growth requires operational discipline and data-driven execution.',
    'Every process should create value for customers and the business.'
  ];

  const objectiveCategories: ObjectiveCategory[] = [
    {
      id: 'operations',
      label: 'Business & Operations',
      icon: Briefcase,
      points: [
        'Serve the industry in the best possible way.',
        'Engineer systems that enable sustainable growth.',
        'Replace dependency on individuals with scalable processes.',
        'Build businesses that can operate with clarity, accountability, and control.',
        'Turn operational complexity into structured workflows.',
        'Improve decision-making through data and visibility.',
        'Create businesses that are predictable rather than reactive.',
        'Establish a culture of ownership and continuous improvement.'
      ]
    },
    {
      id: 'customer',
      label: 'Customer Experience',
      icon: Users,
      points: [
        'Deliver exceptional customer experiences at every touchpoint.',
        'Make every customer interaction memorable and trust-building.',
        'Increase customer retention through better service systems.',
        'Transform customer feedback into actionable improvements.',
        'Build long-term relationships rather than one-time transactions.',
        'Create experiences that differentiate the business from competitors.'
      ]
    },
    {
      id: 'inventory',
      label: 'Inventory & Profitability',
      icon: Coins,
      points: [
        'Maximize the productivity of every rupee invested in inventory.',
        'Reduce dead stock and improve inventory movement.',
        'Improve profitability through better planning and control.',
        'Optimize procurement and stock allocation decisions.',
        'Ensure capital is invested in products that generate returns.'
      ]
    },
    {
      id: 'technology',
      label: 'Technology & Innovation',
      icon: Cpu,
      points: [
        'Leverage technology to simplify operations.',
        'Use data to drive smarter business decisions.',
        'Automate repetitive tasks wherever possible.',
        'Build digital-first systems for future growth.',
        'Create visibility across all departments through dashboards and reporting.'
      ]
    },
    {
      id: 'people',
      label: 'People & Culture',
      icon: Award,
      points: [
        'Empower employees with clear processes and expectations.',
        'Develop high-performing teams through accountability.',
        'Align individual performance with business goals.',
        'Foster a culture of learning and continuous improvement.',
        'Enable leaders to focus on growth instead of daily firefighting.'
      ]
    },
    {
      id: 'growth',
      label: 'Growth & Strategy',
      icon: Zap,
      points: [
        'Create scalable foundations for expansion.',
        'Ensure growth does not compromise operational excellence.',
        'Build resilient businesses that can adapt to market changes.',
        'Strengthen competitive advantage through better systems.',
        'Focus on long-term value creation rather than short-term gains.'
      ]
    },
    {
      id: 'transformation',
      label: 'Core Philosophy',
      icon: Sparkles,
      points: [
        'Build better systems for the future of retail businesses.',
        'Engineer clarity where there is confusion.',
        'Transform operations from reactive to proactive.',
        'Convert business data into strategic advantage.',
        'Help businesses achieve more with the resources they already have.',
        'Make excellence repeatable through systems and processes.',
        'Bridge the gap between vision and execution.',
        'Turn growth ambitions into measurable outcomes.'
      ]
    }
  ];

  const currentCategory = objectiveCategories.find(cat => cat.id === activeCategory) || objectiveCategories[0];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Banner */}
      <section className="bg-[#0B1E2E] py-20 md:py-28 px-6 border-b border-white/10 relative overflow-hidden">
        {/* Background subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: `radial-gradient(${GREEN} 1.5px, transparent 1.5px)`, 
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
            }} 
          />
        </div>

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#8bc34a] border border-[#8bc34a]/30 bg-[#8bc34a]/5 mb-6">
              Consulting Services
            </span>
            <h1 
              className="font-extrabold text-white tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', lineHeight: 1.1 }}
            >
              Systems That Scale.{' '}
              <span className="text-[#8bc34a]">Results That Compound.</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-[750px] mx-auto leading-relaxed font-medium">
              I design and deploy end-to-end retail operating systems — unifying ERP, inventory, 
              CRM, finance, and store operations into a single architecture that eliminates 
              inefficiency and drives measurable growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 px-6 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Our Mission */}
            <motion.div 
              {...fadeUp(0)}
              className="lg:col-span-7 bg-[#0b2341] rounded-2xl shadow-xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
                    <Target className="w-5 h-5 text-[#8bc34a]" />
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight">Our Mission</h2>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold leading-snug text-[#8bc34a] mb-6">
                  We believe any business can achieve rapid and sustainable growth when it has access to the right data and understands the behavioural patterns within its operations.
                </h3>
                
                <div className="space-y-5 text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                  <p>
                    Data is more than numbers—it reveals what is happening in the business, where opportunities exist, what challenges need attention, and what actions should be taken next. The quality of decisions a business makes is directly linked to the quality of information it has.
                  </p>
                  <p>
                    As businesses evolve, data will become one of the most valuable assets and utilities available to every organization. The competitive advantage will not come from simply collecting data, but from knowing which data matters, how to interpret it, and how to act on it.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 mt-8 pt-6">
                <p className="text-xs md:text-sm text-slate-300 font-semibold italic">
                  "Our mission is to help retail jewellery businesses build a data-driven operating model by identifying the right metrics, creating visibility through systems and dashboards, understanding behavioural patterns, and translating insights into meaningful action."
                </p>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div 
              {...fadeUp(0.15)}
              className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-lg p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0b2341]/5">
                    <Eye className="w-5 h-5 text-[#0b2341]" />
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#0b2341]">Our Vision</h2>
                </div>

                <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  <p className="text-[#0b2341] font-bold text-base md:text-lg leading-snug">
                    To help retail jewellery businesses transition from reactive operations to data-driven, system-led organizations that are scalable, profitable, customer-centric, and future-ready.
                  </p>
                  <p>
                    By empowering businesses with the right information, insights, and actions, we aim to create a future where growth is predictable, measurable, and sustainable.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ background: GREEN }} />
                <span className="text-xs uppercase tracking-widest font-black text-slate-400">Anchor Your Growth Strategy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Pillars & Objectives Section */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#8bc34a] block mb-3">Core Pillars & Objectives</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2341] tracking-tight mb-4">
              Strategic Philosophy & Direction
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              We anchor every growth strategy in systems, technology, and customer experience.
            </p>
          </div>

          {/* Three Main Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              {...fadeUp(0)}
              className="bg-[#0b2341] text-white p-8 rounded-2xl shadow-md border-t-4 border-[#8bc34a] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8bc34a] block mb-3">Pillar 01</span>
                <h3 className="text-lg md:text-xl font-black leading-tight mb-4">
                  Engineer systems that enable sustainable growth.
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-medium">
                Clarity, predictability, and repeatable outcomes built directly into operational processes.
              </p>
            </motion.div>

            <motion.div 
              {...fadeUp(0.1)}
              className="bg-[#0b2341] text-white p-8 rounded-2xl shadow-md border-t-4 border-[#8bc34a] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8bc34a] block mb-3">Pillar 02</span>
                <h3 className="text-lg md:text-xl font-black leading-tight mb-4">
                  Leverage technology and data to improve decision-making.
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-medium">
                Fact-based, proactive choices derived directly from real-time operational feeds.
              </p>
            </motion.div>

            <motion.div 
              {...fadeUp(0.2)}
              className="bg-[#0b2341] text-white p-8 rounded-2xl shadow-md border-t-4 border-[#8bc34a] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8bc34a] block mb-3">Pillar 03</span>
                <h3 className="text-lg md:text-xl font-black leading-tight mb-4">
                  Elevate customer experience through operational excellence.
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-medium">
                Standardized service quality, consistent CRM workflows, and trusted client relationships.
              </p>
            </motion.div>
          </div>

          {/* Formula Ribbon */}
          <motion.div 
            {...fadeUp(0.15)}
            className="bg-[#F8FAFC] border border-slate-200/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20 text-center md:text-left"
          >
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Core Equation:</span>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-extrabold tracking-wide text-[#0b2341]">
              <span className="bg-white px-3 py-2 border border-slate-200 rounded shadow-sm">Better Systems</span>
              <ArrowRight className="w-4 h-4 text-[#8bc34a]" />
              <span className="bg-white px-3 py-2 border border-slate-200 rounded shadow-sm">Better Operations</span>
              <ArrowRight className="w-4 h-4 text-[#8bc34a]" />
              <span className="bg-white px-3 py-2 border border-slate-200 rounded shadow-sm">Better Customer Experience</span>
              <ArrowRight className="w-4 h-4 text-[#8bc34a]" />
              <span className="bg-[#8bc34a] text-white px-3 py-2 rounded shadow-sm">Better Business Outcomes</span>
            </div>
          </motion.div>

          {/* Functional Categorized Switcher */}
          <div className="bg-[#F8FAFC] border border-slate-200/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-extrabold text-[#0b2341] tracking-tight mb-6 text-center lg:text-left">
              Detailed Functional Objectives
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Category selector column */}
              <div className="lg:col-span-4 flex flex-col gap-1.5">
                {objectiveCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-3 px-4 py-3.5 text-xs font-black uppercase tracking-wider text-left transition-all duration-300 rounded-lg border ${
                        isActive
                          ? 'bg-[#0b2341] text-white border-[#0b2341] shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-[#0b2341]'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Points display column */}
              <div className="lg:col-span-8 bg-white border border-slate-200/60 rounded-xl p-6 md:p-8 min-h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {currentCategory.points.map((point, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 p-4 rounded-lg hover:border-slate-200 hover:shadow-sm transition-all duration-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#8bc34a]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#8bc34a]" />
                        </div>
                        <span className="text-xs md:text-sm text-slate-700 font-semibold leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What We Help Businesses Achieve */}
      <section className="py-20 md:py-28 px-6 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#8bc34a] block mb-3">Strategic Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2341] tracking-tight mb-4">
              What We Help Businesses Achieve
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              We focus on building critical foundational blocks that allow retail jewellery enterprises to grow with predictability and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp(idx * 0.05)}
                  className="bg-white border border-slate-200/50 hover:border-slate-300 hover:shadow-lg transition-all duration-300 rounded-xl p-6 md:p-8 flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0b2341]/5 flex items-center justify-center group-hover:bg-[#0b2341] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#0b2341] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#0b2341]">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Core Beliefs */}
      <section className="py-20 md:py-28 px-6 bg-[#0b2341] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: `radial-gradient(white 1px, transparent 1px)`, 
              backgroundSize: '24px 24px'
            }} 
          />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Header Column */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#8bc34a]">Guiding Principles</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Our Core Beliefs
              </h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium max-w-[450px]">
                These core philosophies govern how we build systems, analyze operations, and partner with jewellery brands to deliver sustainable transformations.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {beliefs.map((belief, idx) => (
                <motion.div
                  key={idx}
                  {...fadeUp(idx * 0.04)}
                  className="flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg p-4 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#8bc34a]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8bc34a]" />
                  </div>
                  <span className="text-xs md:text-sm text-slate-200 font-semibold leading-snug">
                    {belief}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interconnected System Section */}
      <section className="border-t border-slate-100 bg-white">
        <BusinessOSSection />
      </section>
    </div>
  );
}
