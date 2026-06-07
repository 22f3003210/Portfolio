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
  ArrowRight,
  Calendar,
  Clock3,
  Search,
  Map,
  Link2,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const roadmapSteps = [
    {
      phase: '01',
      title: 'System Audit & Mapping',
      icon: Search,
      description: 'We map out your current state — auditing existing ERPs, inventory flows, and manual data silos to pinpoint bottlenecks.',
      details: ['ERP & POS Analysis', 'Inventory Velocity Check', 'Process Mapping Sessions']
    },
    {
      phase: '02',
      title: 'Architecture Blueprinting',
      icon: Map,
      description: 'We design the target operating model, mapping out unified workflows, data touchpoints, and clear KPI scorecards.',
      details: ['Target Operating Model', 'Data Integration Map', 'Roles & KPI Definitions']
    },
    {
      phase: '03',
      title: 'Custom Integration',
      icon: Link2,
      description: 'We build the bridge — deploying automated databases, connecting telemetry feeds, and launching clean dashboards.',
      details: ['Telemetry API Config', 'Custom Recharts Dashboards', 'Alert & Monitor Systems']
    },
    {
      phase: '04',
      title: 'Continuous Optimization',
      icon: RefreshCw,
      description: 'We anchor the systems — training teams, building operational discipline, and refining models to sustain growth.',
      details: ['Operational Coaching', 'Efficiency Reviews', 'Feature Scale-up Support']
    }
  ];

  const currentCategory = objectiveCategories.find(cat => cat.id === activeCategory) || objectiveCategories[0];

  return (
    <div className="bg-white text-slate-800 overflow-hidden font-sans">
      {/* Hero Banner (White Background Split Layout) */}
      <section className="relative py-20 md:py-28 px-6 border-b border-slate-100 bg-[#F8FAFC]">
        {/* Background subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: `radial-gradient(#0b2341 1px, transparent 1px)`, 
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
            }} 
          />
        </div>

        {/* Ambient light radial glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#8bc34a]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#1f5fbf]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Heading & CTA */}
            <div className="lg:col-span-7 text-left">
              <ScrollReveal>
                <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#0b2341] border border-[#0b2341]/20 bg-[#0b2341]/5 mb-6">
                  Systems & Operations Consulting
                </span>
                <h1 
                  className="font-extrabold text-[#0b2341] tracking-tight mb-6"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
                >
                  Systems That Scale.<br />
                  <span className="text-[#8bc34a]">Results That Compound.</span>
                </h1>
                <p className="text-base md:text-lg text-slate-600 max-w-[620px] mb-8 leading-relaxed font-medium">
                  I design and deploy end-to-end retail operating systems — unifying ERP, inventory, 
                  CRM, finance, and store operations into a single architecture that eliminates 
                  inefficiency and drives measurable growth.
                </p>

                {/* Hero CTA Button pair */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 text-white text-[12px] font-black uppercase tracking-wider px-7 py-4 transition-transform hover:scale-[1.02] shadow-lg rounded-sm shadow-[#8bc34a]/20"
                    style={{ background: GREEN }}
                  >
                    <Calendar className="w-4 h-4" />
                    Connect Me Now
                  </Link>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wider px-7 py-4 border-2 transition-all duration-300 hover:bg-[#0b2341] hover:text-white hover:border-[#0b2341] text-[#0b2341] border-[#0b2341]/30 rounded-sm"
                  >
                    <Clock3 className="w-4 h-4" />
                    Book a 30-min Call
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side: Interactive SVG illustration adapted for Light BG */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-5 w-full flex justify-center relative select-none"
            >
              <div className="absolute inset-0 bg-[#8bc34a]/5 blur-3xl rounded-full" />
              
              <svg viewBox="0 0 420 420" className="w-full max-w-[420px] h-auto drop-shadow-xl">
                {/* Platform Base */}
                <polygon points="210,360 380,270 210,180 40,270" fill="#F1F5F9" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 3" />

                {/* Animated Data Packet Paths */}
                <motion.path 
                  d="M120,290 L120,210 L210,165" 
                  fill="none" stroke="#8bc34a" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 4"
                />
                <motion.path 
                  d="M300,210 L210,165 L210,95" 
                  fill="none" stroke="#1f5fbf" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 4"
                />

                {/* Moving Pulse Packets */}
                <motion.circle r="4.5" fill="#8bc34a">
                  <animateMotion 
                    path="M120,290 L120,210 L210,165" 
                    dur="4s" repeatCount="indefinite" rotate="auto" 
                  />
                </motion.circle>
                
                <motion.circle r="4.5" fill="#1f5fbf">
                  <animateMotion 
                    path="M300,210 L210,165 L210,95" 
                    dur="3.2s" repeatCount="indefinite" rotate="auto" 
                  />
                </motion.circle>

                {/* Level 4: Analytics Core Platform */}
                <g className="cursor-pointer">
                  <polygon points="210,310 330,250 210,190 90,250" fill="#0E243A" stroke="#1f5fbf" strokeWidth="1.5" />
                  <polygon points="210,305 320,250 210,195 100,250" fill="#153654" opacity="0.85" />
                  <text x="210" y="253" textAnchor="middle" fill="#93C5FD" fontSize="8.5" fontWeight="900" letterSpacing="1.5">DATA & ANALYTICS WIDGET</text>
                  <circle cx="160" cy="235" r="3" fill="#8bc34a" />
                  <circle cx="260" cy="235" r="3" fill="#1f5fbf" />
                </g>

                {/* Level 3: ERP & Inventory Database Platform */}
                <g transform="translate(0, -50)" className="cursor-pointer">
                  <polygon points="210,310 330,250 210,190 90,250" fill="#0F2E47" stroke="#8bc34a" strokeWidth="1.5" />
                  <polygon points="210,305 320,250 210,195 100,250" fill="#194668" opacity="0.9" />
                  <text x="210" y="253" textAnchor="middle" fill="#8bc34a" fontSize="9" fontWeight="900" letterSpacing="1.5">ERP & INVENTORY SYSTEM</text>
                </g>

                {/* Level 2: Target Operating Logic Platform */}
                <g transform="translate(0, -100)" className="cursor-pointer">
                  <polygon points="210,310 330,250 210,190 90,250" fill="#0E243A" stroke="#1f5fbf" strokeWidth="1.5" />
                  <polygon points="210,305 320,250 210,195 100,250" fill="#153654" opacity="0.85" />
                  <text x="210" y="253" textAnchor="middle" fill="#93C5FD" fontSize="9" fontWeight="900" letterSpacing="1.5">PROCESS ARCHITECTURE</text>
                </g>

                {/* Level 1: User Touchpoints & CRM Platform */}
                <g transform="translate(0, -150)" className="cursor-pointer">
                  <polygon points="210,310 330,250 210,190 90,250" fill="#123456" stroke="#8bc34a" strokeWidth="1.5" />
                  <polygon points="210,305 320,250 210,195 100,250" fill="#1A4A75" opacity="0.85" />
                  <text x="210" y="253" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" letterSpacing="1.5">CRM & STORE OPERATION</text>
                </g>

                {/* Floating Telemetry Widgets - White theme */}
                <motion.g 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  transform="translate(300, 80)"
                >
                  <rect width="90" height="42" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="45" y="16" textAnchor="middle" fill="#64748B" fontSize="7.5" fontWeight="900">EFFICIENCY</text>
                  <text x="45" y="32" textAnchor="middle" fill="#8bc34a" fontSize="13" fontWeight="950">98.4%</text>
                </motion.g>

                <motion.g 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  transform="translate(20, 130)"
                >
                  <rect width="80" height="42" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="40" y="16" textAnchor="middle" fill="#64748B" fontSize="7.5" fontWeight="900">SALES COMP.</text>
                  <text x="40" y="32" textAnchor="middle" fill="#1f5fbf" fontSize="12" fontWeight="950">+18%</text>
                </motion.g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (White / Soft Gray Backgrounds) */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Our Mission Card */}
            <motion.div 
              {...fadeUp(0)}
              whileHover={{ borderColor: 'rgba(140, 198, 63, 0.4)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
              className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-8 md:p-12 text-[#0b2341] flex flex-col justify-between relative overflow-hidden border border-slate-200/60 transition-all duration-300 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8bc34a]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0b2341]/5 border border-[#0b2341]/10 shadow-sm">
                    <Target className="w-5 h-5 text-[#8bc34a]" />
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#0b2341]">Our Mission</h2>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold leading-snug text-[#0b2341] mb-6">
                  We believe any business can achieve rapid and sustainable growth when it has access to the right data and understands the behavioural patterns within its operations.
                </h3>
                
                <div className="space-y-5 text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  <p>
                    Data is more than numbers—it reveals what is happening in the business, where opportunities exist, what challenges need attention, and what actions should be taken next. The quality of decisions a business makes is directly linked to the quality of information it has.
                  </p>
                  <p>
                    As businesses evolve, data will become one of the most valuable assets and utilities available to every organization. The competitive advantage will not come from simply collecting data, but from knowing which data matters, how to interpret it, and how to act on it.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 mt-8 pt-6">
                <p className="text-xs md:text-sm text-slate-500 font-semibold italic">
                  "Our mission is to help retail jewellery businesses build a data-driven operating model by identifying the right metrics, creating visibility through systems and dashboards, understanding behavioural patterns, and translating insights into meaningful action. We help businesses anchor their growth strategy in data so they can make better decisions, improve performance, and scale sustainably."
                </p>
              </div>
            </motion.div>

            {/* Our Vision Card */}
            <motion.div 
              {...fadeUp(0.15)}
              whileHover={{ borderColor: 'rgba(140, 198, 63, 0.4)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
              className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl border border-slate-200/60 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1f5fbf]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0b2341]/5 border border-[#0b2341]/10">
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

              <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ background: GREEN }} />
                <span className="text-xs uppercase tracking-widest font-black text-slate-400">Anchor Your Growth Strategy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Pillars & Objectives Section (Light Theme) */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1280px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#0b2341] block mb-3">Core Pillars & Objectives</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2341] tracking-tight mb-4">
              Strategic Philosophy & Direction
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              We anchor every growth strategy in systems, technology, and customer experience.
            </p>
          </div>

          {/* Three Main Pillars Cards (Light Theme with Green accents) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              {...fadeUp(0)}
              whileHover={{ y: -6, borderColor: '#8bc34a', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
              className="bg-[#F8FAFC] text-[#0b2341] p-8 rounded-2xl border border-slate-200/60 border-t-4 border-t-[#8bc34a] flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8bc34a] block mb-3">Pillar 01</span>
                <h3 className="text-lg md:text-xl font-black leading-tight mb-4">
                  Engineer systems that enable sustainable growth.
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                Clarity, predictability, and repeatable outcomes built directly into operational processes.
              </p>
            </motion.div>

            <motion.div 
              {...fadeUp(0.1)}
              whileHover={{ y: -6, borderColor: '#8bc34a', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
              className="bg-[#F8FAFC] text-[#0b2341] p-8 rounded-2xl border border-slate-200/60 border-t-4 border-t-[#8bc34a] flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8bc34a] block mb-3">Pillar 02</span>
                <h3 className="text-lg md:text-xl font-black leading-tight mb-4">
                  Leverage technology and data to improve decision-making.
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                Fact-based, proactive choices derived directly from real-time operational feeds.
              </p>
            </motion.div>

            <motion.div 
              {...fadeUp(0.2)}
              whileHover={{ y: -6, borderColor: '#8bc34a', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
              className="bg-[#F8FAFC] text-[#0b2341] p-8 rounded-2xl border border-slate-200/60 border-t-4 border-t-[#8bc34a] flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8bc34a] block mb-3">Pillar 03</span>
                <h3 className="text-lg md:text-xl font-black leading-tight mb-4">
                  Elevate customer experience through operational excellence.
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                Standardized service quality, consistent CRM workflows, and trusted client relationships.
              </p>
            </motion.div>
          </div>

          {/* Formula Ribbon */}
          <motion.div 
            {...fadeUp(0.15)}
            className="bg-[#F8FAFC] border border-slate-200/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20 text-center md:text-left shadow-sm"
          >
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Core Equation:</span>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-extrabold tracking-wide text-[#0b2341]">
              <span className="bg-white px-3 py-2 border border-slate-200 rounded shadow-sm hover:border-[#8bc34a] transition-all">Better Systems</span>
              <ArrowRight className="w-4 h-4 text-[#8bc34a] animate-pulse" />
              <span className="bg-white px-3 py-2 border border-slate-200 rounded shadow-sm hover:border-[#8bc34a] transition-all">Better Operations</span>
              <ArrowRight className="w-4 h-4 text-[#8bc34a] animate-pulse" />
              <span className="bg-white px-3 py-2 border border-slate-200 rounded shadow-sm hover:border-[#8bc34a] transition-all">Better Customer Experience</span>
              <ArrowRight className="w-4 h-4 text-[#8bc34a] animate-pulse" />
              <span className="bg-[#8bc34a] text-white px-3 py-2 rounded shadow-sm shadow-[#8bc34a]/20">Better Business Outcomes</span>
            </div>
          </motion.div>

          {/* Functional Categorized Switcher (Light Mode Interface) */}
          <div className="bg-[#F8FAFC] border border-slate-200/60 rounded-2xl p-6 md:p-8">
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
                          ? 'bg-[#0b2341] text-white border-[#0b2341] shadow-md font-black'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-[#0b2341]'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Points display column (Sleek light panels) */}
              <div className="lg:col-span-8 bg-white border border-slate-200/60 rounded-xl p-6 md:p-8 min-h-[340px] shadow-sm relative">
                <div className="absolute top-3 right-4 flex gap-1.5 opacity-30">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3"
                  >
                    {currentCategory.points.map((point, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 p-4 rounded-lg hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#8bc34a]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
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

      {/* Step-by-Step Consulting Roadmap Timeline (Light Theme) */}
      <section className="py-20 md:py-28 px-6 bg-[#F8FAFC] border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#8bc34a] block mb-3">Engagement Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2341] tracking-tight mb-4">
              The Consulting Engagement Roadmap
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              A structured, 4-phase lifecycle to transform your retail jewellery operations from reactive firefighting to data-driven scale.
            </p>
          </div>

          <div className="relative">
            {/* Connector Line (Dotted Track) */}
            <div className="hidden lg:block absolute top-[55px] left-[5%] right-[5%] h-[2px] bg-slate-200 border-t-2 border-dashed border-slate-300 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {roadmapSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    {...fadeUp(idx * 0.1)}
                    whileHover={{ y: -6, borderColor: '#8bc34a', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left bg-white border border-slate-200/70 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Circle Node with Icon */}
                    <div className="w-16 h-16 rounded-full bg-[#0b2341] text-white flex items-center justify-center mb-6 shadow-lg relative border-4 border-white">
                      <Icon className="w-6 h-6 text-[#8bc34a]" />
                      <span className="absolute -top-1 -right-1 bg-[#8bc34a] text-white text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
                        {step.phase}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-black text-[#0b2341] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium mb-5">
                      {step.description}
                    </p>

                    <div className="mt-auto w-full pt-4 border-t border-slate-100 flex flex-col gap-2">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[10.5px] font-bold text-slate-600">
                          <div className="w-1 h-1 rounded-full bg-[#8bc34a] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Help Businesses Achieve (Light Theme Outcomes Grid) */}
      <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
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
                  whileHover={{ y: -6, borderColor: '#8bc34a', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
                  className="bg-[#F8FAFC] border border-slate-200/50 hover:shadow-lg transition-all duration-300 rounded-xl p-6 md:p-8 flex flex-col gap-4 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#8bc34a]/5 to-[#1f5fbf]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="w-12 h-12 rounded-lg bg-[#0b2341]/5 flex items-center justify-center group-hover:bg-[#0b2341] transition-colors duration-300 z-10">
                    <Icon className="w-6 h-6 text-[#0b2341] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="flex items-center gap-2 z-10">
                    <span className="text-slate-300 text-xs font-black select-none">0{idx + 1}.</span>
                    <h3 className="text-base md:text-lg font-bold text-[#0b2341]">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium z-10">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Core Beliefs (Light Theme Checklist) */}
      <section className="py-20 md:py-28 px-6 bg-[#F8FAFC] border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: `radial-gradient(#0b2341 1px, transparent 1px)`, 
              backgroundSize: '24px 24px'
            }} 
          />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Header Column */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#8bc34a]">Guiding Principles</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b2341]">
                Our Core Beliefs
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-[450px]">
                These core philosophies govern how we build systems, analyze operations, and partner with jewellery brands to deliver sustainable transformations.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {beliefs.map((belief, idx) => (
                <motion.div
                  key={idx}
                  {...fadeUp(idx * 0.04)}
                  whileHover={{ backgroundColor: 'white', borderColor: '#8bc34a', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.03)' }}
                  className="flex items-start gap-3 bg-white border border-slate-200/60 rounded-lg p-4 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-[#8bc34a]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8bc34a]" />
                  </div>
                  <span className="text-xs md:text-sm text-slate-700 font-semibold leading-snug">
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
