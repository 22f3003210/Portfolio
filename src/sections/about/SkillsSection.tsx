import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, BarChart3, Cpu, ShieldCheck,
  Network, GitFork, Server, RefreshCw, FileText, Database, 
  TrendingUp, Activity, Users, Gauge, ClipboardCheck, Lock, GraduationCap 
} from 'lucide-react';

function getSkillIcon(skill: string) {
  const sizeClass = "w-4 h-4 shrink-0";
  
  switch (skill) {
    case 'Systems Architecture':
      return <Network className={`${sizeClass} text-blue-400`} />;
    case 'Process Engineering':
      return <GitFork className={`${sizeClass} text-purple-400`} />;
    case 'ERP Implementation':
      return <Server className={`${sizeClass} text-indigo-400`} />;
    case 'Reconciliation Automation':
      return <RefreshCw className={`${sizeClass} text-emerald-400`} />;
    case 'SOP & Governance Design':
      return <FileText className={`${sizeClass} text-slate-300`} />;
    case 'Power BI / DAX':
      return (
        <svg className={`${sizeClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="12" width="4" height="8" rx="1" fill="#E6AD12" />
          <rect x="9" y="7" width="4" height="13" rx="1" fill="#F8C822" />
          <rect x="16" y="2" width="4" height="18" rx="1" fill="#FAD83C" />
        </svg>
      );
    case 'SQL / SQLite':
      return <Database className={`${sizeClass} text-blue-400`} />;
    case 'Retail Data Analytics':
      return <TrendingUp className={`${sizeClass} text-emerald-400`} />;
    case 'Transaction Analytics':
      return <Activity className={`${sizeClass} text-rose-400`} />;
    case 'CRM & Engagement Analytics':
      return <Users className={`${sizeClass} text-pink-400`} />;
    case 'KPI & Metric Architecture':
      return <Gauge className={`${sizeClass} text-violet-400`} />;
    case 'Python Programming':
      return (
        <svg className={`${sizeClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 6 6 6 8.5H12V10H6.5C4 10 2 11.5 2 14C2 16.5 4.5 18 7 18H8V16.5C8 14 9.5 12 12 12H18C18 12 18 8 18 5.5C18 3 15.5 2 12 2Z" fill="#3776AB" />
          <path d="M12 22C17.52 22 18 18 18 15.5H12V14H17.5C20 14 22 12.5 22 10C22 7.5 19.5 6 17 6H16V7.5C16 10 14.5 12 12 12H6C6 12 6 16 6 18.5C6 21 8.5 22 12 22Z" fill="#FFD43B" />
        </svg>
      );
    case 'Flask (Web Backend)':
      return (
        <svg className={`${sizeClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="currentColor" className="text-amber-500" />
        </svg>
      );
    case 'React / TypeScript':
      return (
        <svg className={`${sizeClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case 'HTML5 / CSS3 / Tailwind':
      return (
        <svg className={`${sizeClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C8.5 4 6.5 6 6 10C7.5 8 9 7.5 10.5 8.5C12 9.5 12.5 11 13.5 12C14.5 13 16 13.5 17.5 12.5C19 11.5 19.5 10 20 8C18.5 10 17 10.5 15.5 9.5C14 8.5 13.5 7 12.5 6C12.3 5.3 12.1 4.7 12 4Z" fill="#38BDF8" />
          <path d="M6 12C2.5 12 0.5 14 0 18C1.5 16 3 15.5 4.5 16.5C6 17.5 6.5 19 7.5 20C8.5 21 10 21.5 11.5 20.5C13 19.5 13.5 18 14 16C12.5 18 11 18.5 9.5 17.5C8 16.5 7.5 15 6.5 14C6.3 13.3 6.1 12.7 6 12Z" fill="#38BDF8" />
        </svg>
      );
    case 'PyTorch (Deep Learning)':
      return (
        <svg className={`${sizeClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 6.5 5.5 9 5.5 11.5C5.5 15.5 8.5 18 12 22C15.5 18 18.5 15.5 18.5 11.5C18.5 9 16 6.5 12 2Z" fill="#EE4C2C" />
          <circle cx="12" cy="11.5" r="3.5" fill="white" />
        </svg>
      );
    case 'Hugging Face Platform':
      return <span className="text-sm shrink-0 select-none leading-none">🤗</span>;
    case 'Retail Operations Management':
      return <Briefcase className={`${sizeClass} text-sky-400`} />;
    case 'Operational Auditing':
      return <ClipboardCheck className={`${sizeClass} text-indigo-400`} />;
    case 'Inventory Security & Audits':
      return <Lock className={`${sizeClass} text-red-400`} />;
    case 'Staff Training & Leadership':
      return <GraduationCap className={`${sizeClass} text-amber-400`} />;
    default:
      return null;
  }
}


// ─── Data Types & Array ────────────────────────────────────────────────────────

interface SkillItem {
  id: string;
  name: string;
  subTitle: string;
  desc: string;
  color: string;
  colorClass: string;
  glowColor: string;
  btnClass: string;
  icon: React.ComponentType<{ className?: string }>;
  subskills: string[];
}

const SKILLS: SkillItem[] = [
  {
    id: 'systems',
    name: 'Systems & Architecture',
    subTitle: 'Process Engineering & ERP Deployment',
    desc: 'Designing resilient business infrastructures and mapping standard operations. Leading deployment of retail enterprise systems (ERPs/POS) with verified data integrity across inventory, sales, and finance.',
    color: '#10b981', // Emerald
    colorClass: 'text-emerald-400',
    glowColor: 'rgba(16, 185, 129, 0.22)',
    btnClass: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20',
    icon: Briefcase,
    subskills: [
      'Systems Architecture',
      'Process Engineering',
      'ERP Implementation',
      'Reconciliation Automation',
      'SOP & Governance Design'
    ],
  },
  {
    id: 'data',
    name: 'Data & Business Intelligence',
    subTitle: 'Power BI & Relational Data Analytics',
    desc: 'Converting raw transactional records into real-time executive dashboards. Designing robust star-schema relational models, writing optimized DAX calculations, and defining unified KPI architectures.',
    color: '#f59e0b', // Amber/Yellow
    colorClass: 'text-amber-400',
    glowColor: 'rgba(245, 158, 11, 0.22)',
    btnClass: 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/20',
    icon: BarChart3,
    subskills: [
      'Power BI / DAX',
      'SQL / SQLite',
      'Retail Data Analytics',
      'Transaction Analytics',
      'CRM & Engagement Analytics',
      'KPI & Metric Architecture'
    ],
  },
  {
    id: 'tech',
    name: 'Technologies & AI',
    subTitle: 'Python Programming & Deep Learning',
    desc: 'Automating repetitive administrative work and data pipelines. Implementing custom machine learning models to forecast retail demand and analyze customer lifecycle engagement patterns.',
    color: '#8b5cf6', // Purple/Violet
    colorClass: 'text-violet-400',
    glowColor: 'rgba(139, 92, 246, 0.22)',
    btnClass: 'bg-violet-500 hover:bg-violet-600 text-white shadow-violet-500/20',
    icon: Cpu,
    subskills: [
      'Python Programming',
      'Flask (Web Backend)',
      'React / TypeScript',
      'HTML5 / CSS3 / Tailwind',
      'PyTorch (Deep Learning)',
      'Hugging Face Platform'
    ],
  },
  {
    id: 'ops',
    name: 'Operations & Business',
    subTitle: 'Retail Operations & Shrinkage Controls',
    desc: 'Establishing standard operating procedures for showroom operations, performing forensics on transactional logs, securing stock tracking, and developing inventory auditing protocols.',
    color: '#3b82f6', // Blue
    colorClass: 'text-blue-400',
    glowColor: 'rgba(59, 130, 246, 0.22)',
    btnClass: 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20',
    icon: ShieldCheck,
    subskills: [
      'Retail Operations Management',
      'Operational Auditing',
      'Inventory Security & Audits',
      'Staff Training & Leadership'
    ],
  },
];

// ─── Decorative Orbit Items ───────────────────────────────────────────────────

interface DecItem {
  angle: number;
  type: 'leaf' | 'react' | 'dot' | 'plus';
  label?: string;
}

const DECORATIONS: DecItem[] = [
  { angle: 45, type: 'leaf', label: 'sys' },
  { angle: 135, type: 'react' },
  { angle: 225, type: 'plus' },
  { angle: 315, type: 'leaf', label: 'db' },
];

export function SkillsSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [radius, setRadius] = useState<number>(155);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [accumulatedRotation, setAccumulatedRotation] = useState<number>(0);
  const autoPlayRef = useRef<any>(null);

  // Resize handler for responsive radius
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(100);
      } else if (window.innerWidth < 768) {
        setRadius(120);
      } else if (window.innerWidth < 1024) {
        setRadius(135);
      } else {
        setRadius(155);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle active index shift and accumulated rotation calculation
  const handleSelectSkill = (index: number) => {
    setIsAutoPlaying(false);
    
    // Calculate shortest path rotation for a 4-node layout (90 degrees per step)
    const diff = index - activeIdx;
    let rotationDiff = diff * 90;
    
    // Normalize to range [-180, 180] for shortest direction
    if (rotationDiff > 180) rotationDiff -= 360;
    if (rotationDiff < -180) rotationDiff += 360;
    
    setAccumulatedRotation(prev => prev - rotationDiff);
    setActiveIdx(index);
  };

  // Auto-play interval
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        const nextIdx = (activeIdx + 1) % 4;
        setAccumulatedRotation(prev => prev - 90);
        setActiveIdx(nextIdx);
      }, 5500);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, activeIdx]);

  const activeSkill = SKILLS[activeIdx];
  const centerRadius = radius * 0.55;

  return (
    <section className="relative bg-[#060c14] py-16 md:py-24 px-6 overflow-hidden select-none border-b border-[#0d1c2e]">
      
      {/* ── Custom Keyframes CSS Block ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbitPulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.03); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(3deg); }
        }
        .animate-orbit-pulse {
          animation: orbitPulse 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}} />

      {/* ── Background Glow ── */}
      <div 
        className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none transition-all duration-1000 ease-in-out opacity-65 blur-[100px] z-0" 
        style={{ 
          background: `radial-gradient(circle, ${activeSkill.color}40 0%, transparent 70%)` 
        }} 
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* ── Main Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Description & CTAs */}
          <div className="flex flex-col gap-5 sm:gap-6 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
              My Skills
            </h2>
            
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-400 leading-relaxed max-w-[500px]">
              A dynamic visual blueprint of my core skills across operations architecture, database forensic audits, and software engineering. Click any node in the orbit on the right to rotate the hub and view related capabilities.
            </p>

            {/* Interactive State Details */}
            <div className="min-h-[160px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-2.5"
                >
                  <span className={`text-[11px] font-black uppercase tracking-widest ${activeSkill.colorClass}`}>
                    {activeSkill.subTitle}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeSkill.desc}
                  </p>
                  
                  {/* Subskill Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeSkill.subskills.map((sub, idx) => {
                      const icon = getSkillIcon(sub);
                      return (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-2 text-[10.5px] font-semibold bg-white/5 border border-white/10 px-3 py-1.5 text-slate-300 rounded-sm hover:border-white/20 hover:text-white transition-all duration-200"
                        >
                          {icon}
                          <span>{sub}</span>
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex items-center flex-wrap gap-5 pt-3">
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg ${activeSkill.btnClass}`}
              >
                contact me
              </Link>
              
              {/* see more Guide */}
              <button 
                onClick={() => {
                  const nextIdx = (activeIdx + 1) % 4;
                  handleSelectSkill(nextIdx);
                }}
                className="flex items-center gap-2 group text-white hover:text-[#8bc34a] text-xs font-black uppercase tracking-wider transition-colors duration-300"
              >
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="inline-block font-extrabold text-sm"
                >
                  &rarr;
                </motion.span>
                see more
              </button>

            </div>
          </div>

          {/* Right Column: Orbital Carousel */}
          <div className="relative flex justify-center items-center py-6 sm:py-10 z-10 h-[340px] sm:h-[420px] lg:h-[460px] select-none">
            
            {/* Ambient Background Circles */}
            <div 
              className="absolute w-72 h-72 sm:w-[360px] sm:h-[360px] rounded-full border border-white/5 pointer-events-none animate-orbit-pulse z-0" 
              style={{
                boxShadow: `inset 0 0 40px ${activeSkill.color}05`,
              }}
            />
            
            {/* The SVG Connection Lines Overlay */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              style={{ transform: 'none' }}
            >
              {/* Dashed outer orbit circle */}
              <circle cx="50%" cy="50%" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6,6" />
              
              {/* Glowing active line connecting top node to center */}
              <line 
                x1="50%" 
                y1={`calc(50% - ${radius}px)`} 
                x2="50%" 
                y2={`calc(50% - ${centerRadius}px)`} 
                stroke={activeSkill.color} 
                strokeWidth="2.5" 
                className="transition-all duration-700 ease-out"
                style={{
                  filter: `drop-shadow(0 0 5px ${activeSkill.color})`,
                  opacity: 0.8
                }}
              />

              {/* Connection paths to adjacent nodes (Left and Right - forming a futuristic web at the top) */}
              <path
                d={`
                  M 50% calc(50% - ${radius}px)
                  L calc(50% - ${radius}px) 50%
                `}
                fill="none"
                stroke={activeSkill.color}
                strokeWidth="1"
                className="transition-all duration-700 opacity-20"
              />
              <path
                d={`
                  M 50% calc(50% - ${radius}px)
                  L calc(50% + ${radius}px) 50%
                `}
                fill="none"
                stroke={activeSkill.color}
                strokeWidth="1"
                className="transition-all duration-700 opacity-20"
              />
            </svg>

            {/* Orbit Container with Smooth Rotation */}
            <motion.div 
              animate={{ rotate: accumulatedRotation }} 
              transition={{ type: 'spring', stiffness: 50, damping: 16 }}
              className="relative flex items-center justify-center"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
              }}
            >
              
              {/* 1. Render Main Interactive Nodes (4 categories) */}
              {SKILLS.map((skill, index) => {
                const angle = index * 90 - 90; // Starting at -90deg (top), 90 deg steps
                const rad = (angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);
                const isActive = index === activeIdx;
                const IconComponent = skill.icon;

                return (
                  <button
                    key={skill.id}
                    onClick={() => handleSelectSkill(index)}
                    className="absolute z-30 group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px - 20px)`,
                      top: `calc(50% + ${y}px - 20px)`,
                      width: '40px',
                      height: '40px',
                    }}
                  >
                    {/* Upright counter-rotating inner container */}
                    <motion.div
                      animate={{ 
                        rotate: -accumulatedRotation, 
                        scale: isActive ? 1.25 : 1,
                      }}
                      transition={{ type: 'spring', stiffness: 60, damping: 14 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 relative
                        ${isActive 
                          ? 'bg-slate-900 border-white text-white' 
                          : 'bg-[#0a121e] border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                        }`}
                      style={{
                        boxShadow: isActive ? `0 0 16px ${skill.color}88` : 'none',
                        borderColor: isActive ? skill.color : undefined,
                      }}
                    >
                      <IconComponent className="w-4.5 h-4.5" />

                      {/* Hover Tooltip */}
                      <span className="absolute bottom-full mb-2 scale-0 group-hover:scale-100 px-2.5 py-1 text-[9px] font-black uppercase bg-slate-950 border border-white/10 text-white rounded-md whitespace-nowrap transition-transform origin-bottom duration-250 z-50">
                        {skill.name}
                      </span>
                    </motion.div>
                  </button>
                );
              })}

              {/* 2. Render Secondary Decorative Icons */}
              {DECORATIONS.map((dec, idx) => {
                const rad = (dec.angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                return (
                  <div
                    key={idx}
                    className="absolute pointer-events-none select-none z-20 opacity-35"
                    style={{
                      left: `calc(50% + ${x}px - 10px)`,
                      top: `calc(50% + ${y}px - 10px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -accumulatedRotation }}
                      transition={{ type: 'spring', stiffness: 50, damping: 16 }}
                      className="flex items-center justify-center"
                    >
                      {dec.type === 'leaf' && (
                        <div className="flex items-center gap-1 bg-[#10b981]/10 border border-[#10b981]/20 px-1.5 py-0.5 rounded-full text-[7.5px] font-mono text-emerald-400 leading-none">
                          <svg className="w-1.5 h-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M12 2C8 6.5 5.5 9 5.5 11.5C5.5 15.5 8.5 18 12 22C15.5 18 18.5 15.5 18.5 11.5C18.5 9 16 6.5 12 2Z" />
                          </svg>
                          <span>{dec.label}</span>
                        </div>
                      )}
                      {dec.type === 'react' && (
                        <svg className="w-3.5 h-3.5 text-cyan-400/50" viewBox="0 0 24 24" fill="none">
                          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" stroke="currentColor" strokeWidth="1" />
                          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" stroke="currentColor" strokeWidth="1" />
                          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      )}
                      {dec.type === 'dot' && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      )}
                      {dec.type === 'plus' && (
                        <span className="text-[10px] font-bold text-white/20 leading-none">+</span>
                      )}
                    </motion.div>
                  </div>
                );
              })}

            </motion.div>

            {/* 3. Central Glassmorphism Card */}
            <div 
              className="absolute z-40 rounded-full flex flex-col items-center justify-center text-center bg-[#070e17]/85 border backdrop-blur-lg shadow-2xl transition-all duration-700"
              style={{
                width: `${centerRadius * 2}px`,
                height: `${centerRadius * 2}px`,
                borderColor: `${activeSkill.color}25`,
                boxShadow: `
                  0 20px 40px -15px rgba(0, 0, 0, 0.6),
                  inset 0 0 18px ${activeSkill.color}18,
                  0 0 24px ${activeSkill.color}10
                `,
              }}
            >
              {/* Outer soft glowing ring behind the central card */}
              <div 
                className="absolute inset-0 rounded-full border border-white/5 pointer-events-none scale-105" 
                style={{
                  borderColor: `${activeSkill.color}10`,
                }}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col items-center justify-center px-4"
                >
                  {/* Skill Large Icon */}
                  <div 
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2.5 transition-all duration-500"
                    style={{
                      color: activeSkill.color,
                      background: `${activeSkill.color}15`,
                      boxShadow: `0 0 16px ${activeSkill.color}22`,
                    }}
                  >
                    {React.createElement(activeSkill.icon, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
                  </div>

                  {/* Active Skill Title */}
                  <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider mb-1 leading-tight">
                    {activeSkill.name}
                  </h3>

                  {/* Tiny tagline */}
                  <span className="text-[8.5px] sm:text-[9.5px] font-mono text-slate-400 font-medium tracking-wide uppercase px-2 py-0.5 rounded-sm bg-white/5 border border-white/5">
                    active hub
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
