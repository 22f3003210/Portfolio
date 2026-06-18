import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Lock, 
  AlertCircle, 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  BookOpen, 
  Eye, 
  Activity, 
  FileText, 
  Settings, 
  TrendingUp, 
  Scale, 
  Users
} from 'lucide-react';
import { usePortal } from '../context/PortalContext';
import { sha256 } from '../lib/sha256';

interface JourneyStep {
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface PhaseDetail {
  id: string;
  title: string;
  objective: string;
  deliverables: string[];
  icon: React.ComponentType<any>;
  durationEstimate: string;
}

export function Roadmap() {
  const { isPortalAuthenticated, setPortalAuthenticated } = usePortal();
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'visual' | 'table'>('visual');
  const [activeStep, setActiveStep] = useState<number>(0);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputHash = sha256(passcode);
    const correctHash = '1824b346dfd511433da2bc62b5e59b98a2e635b132fc71df1c1d9eccd5d1fad7'; // Dhonijohny
    
    if (inputHash === correctHash) {
      setPortalAuthenticated(true);
      setAuthError('');
      setPasscode('');
    } else {
      setAuthError('Incorrect passcode. Access denied.');
      setPasscode('');
    }
  };

  const journeySteps: JourneyStep[] = [
    {
      name: 'Educate',
      tagline: 'Build trust through industry insights.',
      description: 'Establish a common baseline by sharing market intelligence, retail trends, and gold-standard benchmarks tailored to your jewelry niche.',
      icon: BookOpen,
      color: 'blue'
    },
    {
      name: 'Understand',
      tagline: 'Align with the owner\'s vision.',
      description: 'Deep-dive interviews and workshops to align with your personal ambition, core business objectives, and brand value system.',
      icon: Eye,
      color: 'indigo'
    },
    {
      name: 'Assess',
      tagline: 'Audit and diagnose the business.',
      description: 'Conduct comprehensive operations, system audits, and inventory diagnostic assessments to find inefficiencies and leakage points.',
      icon: Activity,
      color: 'red'
    },
    {
      name: 'Recommend',
      tagline: 'Present a transformation blueprint.',
      description: 'Formulate a tailored process design, select optimal technology, and structure a high-impact SOP/KPI governance framework.',
      icon: FileText,
      color: 'amber'
    },
    {
      name: 'Execute',
      tagline: 'Implement changes and train the team.',
      description: 'Deploy the redesigned systems, establish training modules, run pilot groups, and orchestrate change management.',
      icon: Settings,
      color: 'emerald'
    },
    {
      name: 'Measure',
      tagline: 'Track results and optimize continuously.',
      description: 'Install dashboards, audit live telemetry, review performance metrics, and execute incremental improvements.',
      icon: TrendingUp,
      color: 'cyan'
    },
    {
      name: 'Sustain',
      tagline: 'Establish governance and transfer knowledge.',
      description: 'Formalize ownership, document standard operating procedures, and transition control to internal leadership teams.',
      icon: Scale,
      color: 'purple'
    },
    {
      name: 'Partner',
      tagline: 'Remain as a long-term strategic advisor.',
      description: 'Act as an ongoing soundboard and extension of the Founder\'s Office to monitor execution and support key decisions.',
      icon: Users,
      color: 'slate'
    }
  ];

  const phases: PhaseDetail[] = [
    {
      id: '01',
      title: 'Executive Business Insight & Vision Alignment',
      objective: 'Align leadership by presenting jewellery industry trends, growth opportunities, best practices, and understanding the owner\'s vision, business goals, and strategic priorities.',
      deliverables: [
        'Industry Insights Presentation',
        'Vision Alignment Workshop',
        'Business Goals & Success Metrics Matrix'
      ],
      icon: BookOpen,
      durationEstimate: 'Weeks 1-2'
    },
    {
      id: '02',
      title: 'Priority Planning, Business Audit & Diagnostic Assessment',
      objective: 'Prioritize high-impact business areas and conduct comprehensive audits to evaluate current operations, systems, processes, and performance.',
      deliverables: [
        'Comprehensive Audit Plan',
        'Departmental Performance Audits',
        'Current State Assessment Document',
        'Operational Diagnostics & Leakage Logs'
      ],
      icon: Activity,
      durationEstimate: 'Weeks 3-5'
    },
    {
      id: '03',
      title: 'Gap Analysis & Executive Audit Review',
      objective: 'Identify operational gaps, root causes, risks, and opportunities, followed by an executive workshop to review findings and define improvement priorities.',
      deliverables: [
        'Detailed Audit & Finding Report',
        'Root Cause Gap Analysis',
        'Executive Review Workshop',
        'Priority Action Plan & Quick Wins List'
      ],
      icon: Eye,
      durationEstimate: 'Week 6'
    },
    {
      id: '04',
      title: 'Process Re-Design, Technology & Automation Planning',
      objective: 'Redesign workflows, develop SOPs, define KPIs, and recommend technology solutions to improve efficiency, scalability, and governance.',
      deliverables: [
        'Business Transformation Blueprint',
        'Standard Operating Procedures (SOPs)',
        'KPI Governance Framework',
        'ERP/CRM/BI/AI Strategy Brief',
        'Automation Integration Roadmap'
      ],
      icon: Settings,
      durationEstimate: 'Weeks 7-10'
    },
    {
      id: '05',
      title: 'Implementation, Team Training & Change Management',
      objective: 'Execute approved initiatives, deploy systems and processes, train teams, and ensure organization-wide adoption.',
      deliverables: [
        'Detailed Implementation Plan',
        'Process & System Deployment Support',
        'Interactive Employee Training Sessions',
        'Structured Change Management Program'
      ],
      icon: Users,
      durationEstimate: 'Weeks 11-16'
    },
    {
      id: '06',
      title: 'Performance Management & Continuous Improvement',
      objective: 'Monitor business performance using dashboards, conduct periodic reviews, and continuously optimize operations based on measurable KPIs.',
      deliverables: [
        'Interactive KPI Dashboards',
        'Periodic Performance Review Cycles',
        'Continuous Improvement Initiatives',
        'System Optimization Reports'
      ],
      icon: TrendingUp,
      durationEstimate: 'Ongoing'
    },
    {
      id: '07',
      title: 'Governance & Knowledge Transfer',
      objective: 'Establish governance structures, documentation standards, reporting mechanisms, and transfer ownership to internal leadership for long-term sustainability.',
      deliverables: [
        'Operational Governance Framework',
        'SOP Documentation & Repositories',
        'Weekly/Monthly Reporting Structure',
        'Handover & Knowledge Transfer Program'
      ],
      icon: Scale,
      durationEstimate: 'Weeks 17-18'
    },
    {
      id: '08',
      title: 'Strategic Advisory (Optional Retainer)',
      objective: 'Continue as an extension of the Founder’s Office, providing strategic guidance, monitoring execution, supporting key decisions, and driving long-term business growth.',
      deliverables: [
        'Monthly Business Reviews (MBRs)',
        'Executive Decision Support Desk',
        'Ongoing Strategic Planning Cycles',
        'Ad hoc Growth Advisory sessions',
        'Continuous Operational Oversight'
      ],
      icon: FileText,
      durationEstimate: 'Retainer'
    }
  ];

  if (!isPortalAuthenticated) {
    return (
      <div className="min-h-[90vh] pt-28 pb-16 bg-[#f8fafc] text-slate-900 flex items-center justify-center p-6 font-sans">
        <div className="bg-white border border-slate-200 p-8 md:p-10 w-full max-w-md shadow-2xl text-left rounded-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.02] rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 animate-pulse">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest font-mono">Restricted Access</span>
              <h2 className="font-extrabold text-xl uppercase tracking-wider text-slate-900">Transformation Roadmap</h2>
            </div>
          </div>
          
          <p className="text-xs text-slate-600 mb-6 leading-relaxed font-semibold">
            Please enter your client passcode to unlock Abraham's Jewellery Business Transformation Journey and Phase-by-Phase Roadmap.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Client Passcode</label>
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-slate-200 bg-slate-50 p-3 text-sm font-semibold rounded-none focus:outline-none focus:border-blue-700 text-slate-900"
              />
            </div>
            {authError && (
              <div className="text-red-600 text-xs font-bold flex items-center gap-1.5 mt-1 animate-bounce">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{authError}</span>
              </div>
            )}
            <button 
              type="submit"
              className="w-full py-3 bg-blue-700 text-white hover:bg-blue-800 font-extrabold text-xs uppercase tracking-widest shadow-md transition-colors rounded-none"
            >
              Access Roadmap
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center text-xs">
            <Link to="/" className="text-slate-500 hover:text-slate-900 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <span className="text-blue-700 font-bold uppercase tracking-wider text-[9px]">Scale with Abraham</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-16 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-semibold">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-800">Roadmap</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-200 pb-8">
            <div>
              <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest font-mono">Proprietary Framework</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase mt-1">
                The Transformation Roadmap
              </h1>
              <p className="text-slate-600 mt-2 max-w-2xl text-sm leading-relaxed">
                A structured blueprint mapping strategic vision to tactical execution. 
                Specifically engineered to streamline operations, remove waste, deploy cutting-edge automation, and scale luxury retail enterprises.
              </p>
            </div>
            
            <div className="flex bg-slate-100 border border-slate-200 p-0.5 rounded-none self-start md:self-auto">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-extrabold transition-all rounded-none ${
                  activeTab === 'visual'
                    ? 'bg-white text-blue-700 shadow-sm border border-slate-200/50'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Journey Flow
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-extrabold transition-all rounded-none ${
                  activeTab === 'table'
                    ? 'bg-white text-blue-700 shadow-sm border border-slate-200/50'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Full 8-Phase Table
              </button>
            </div>
          </div>
        </div>

        {/* Active Tab View */}
        <AnimatePresence mode="wait">
          {activeTab === 'visual' ? (
            <motion.div
              key="visual"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Stepper Timeline Navigation */}
              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  The Transformation Journey
                </h3>
                
                {/* Horizontal Stepper for Desktop */}
                <div className="hidden lg:grid grid-cols-8 gap-2 relative">
                  <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-100 z-0" />
                  
                  {journeySteps.map((step, idx) => {
                    const StepIcon = step.icon;
                    const isActive = idx === activeStep;
                    return (
                      <button
                        key={step.name}
                        onClick={() => setActiveStep(idx)}
                        className="flex flex-col items-center text-center z-10 focus:outline-none group"
                      >
                        <div className={`w-12 h-12 flex items-center justify-center border transition-all ${
                          isActive 
                            ? 'bg-blue-700 border-blue-700 text-white shadow-lg scale-110' 
                            : 'bg-white border-slate-200 text-slate-500 group-hover:border-slate-400 group-hover:text-slate-800'
                        }`}>
                          <StepIcon className="w-5 h-5 animate-pulse-slow" />
                        </div>
                        <span className={`text-[11px] font-extrabold uppercase mt-3 transition-colors ${
                          isActive ? 'text-blue-700' : 'text-slate-500 group-hover:text-slate-800'
                        }`}>
                          {step.name}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 tracking-tighter mt-0.5">
                          0{idx + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Vertical Stepper for Mobile / Tablet */}
                <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {journeySteps.map((step, idx) => {
                    const StepIcon = step.icon;
                    const isActive = idx === activeStep;
                    return (
                      <button
                        key={step.name}
                        onClick={() => setActiveStep(idx)}
                        className={`flex items-center gap-3 p-3 border transition-all text-left ${
                          isActive 
                            ? 'bg-blue-50/50 border-blue-700 text-slate-900 font-extrabold' 
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-8 h-8 shrink-0 flex items-center justify-center border rounded-none ${
                          isActive ? 'bg-blue-700 border-blue-700 text-white' : 'bg-white border-slate-200 text-slate-500'
                        }`}>
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-slate-400 font-mono">0{idx + 1}</div>
                          <div className="text-xs font-bold uppercase tracking-wider">{step.name}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Details display */}
              <div className="bg-white border border-slate-200 p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4 shadow-sm">
                    {React.createElement(journeySteps[activeStep].icon, { className: 'w-8 h-8' })}
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono">
                    Step 0{activeStep + 1} of 08
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-wide mt-1">
                    {journeySteps[activeStep].name}
                  </h3>
                </div>
                
                <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                    {journeySteps[activeStep].tagline}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {journeySteps[activeStep].description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-xs text-blue-700 font-bold uppercase tracking-wider">
                    <span>Corresponding Roadmap Phase: 0{activeStep + 1}</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </div>
                </div>
              </div>

              {/* Phase Quick Cards grid */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  8-Phase Implementation Detail
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phases.map((phase) => {
                    const PhaseIcon = phase.icon;
                    return (
                      <div 
                        key={phase.id} 
                        className="bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow relative group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-black text-blue-700 font-mono tracking-wider">
                              PHASE {phase.id}
                            </span>
                            <div className="w-8 h-8 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-blue-700 group-hover:bg-blue-50 transition-colors">
                              <PhaseIcon className="w-4 h-4" />
                            </div>
                          </div>
                          
                          <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide mb-2 leading-snug">
                            {phase.title}
                          </h4>
                          
                          <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-3 mb-4">
                            {phase.objective}
                          </p>
                        </div>
                        
                        <div className="border-t border-slate-100 pt-4 mt-2">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Key Deliverables:
                          </div>
                          <ul className="space-y-1">
                            {phase.deliverables.slice(0, 2).map((del, dIdx) => (
                              <li key={dIdx} className="text-[10px] text-slate-700 font-medium flex items-start gap-1">
                                <span className="text-blue-600 mt-0.5">•</span>
                                <span className="line-clamp-1">{del}</span>
                              </li>
                            ))}
                            {phase.deliverables.length > 2 && (
                              <li className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                                + {phase.deliverables.length - 2} more
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Full Detailed Roadmap Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest font-mono w-[100px]">Phase</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest w-[320px]">Objective</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest">Key Deliverables</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-right w-[150px]">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {phases.map((phase) => {
                      const PhaseIcon = phase.icon;
                      return (
                        <tr key={phase.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-5 align-top">
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-black text-blue-700 font-mono tracking-wider">
                                PHASE {phase.id}
                              </span>
                              <div className="w-8 h-8 bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-700">
                                <PhaseIcon className="w-4 h-4" />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide mb-1 leading-snug">
                              {phase.title}
                            </h4>
                            <p className="text-slate-600 text-xs leading-relaxed font-normal">
                              {phase.objective}
                            </p>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                              {phase.deliverables.map((del, dIdx) => (
                                <li key={dIdx} className="text-xs text-slate-700 font-semibold flex items-start gap-2">
                                  <div className="w-4 h-4 bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mt-0.5 scale-90">
                                    <CheckCircle2 className="w-3 h-3" />
                                  </div>
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="px-6 py-5 align-top text-right">
                            <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-widest font-mono">
                              {phase.durationEstimate}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info note */}
        <div className="mt-12 text-center text-xs text-slate-500 font-semibold flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Restricted for clients of Abraham's Systems &amp; Retail Consulting.</span>
          <span className="hidden sm:inline">•</span>
          <button 
            onClick={() => {
              setPortalAuthenticated(false);
              navigate('/');
            }}
            className="text-blue-700 hover:text-blue-800 underline font-bold uppercase tracking-wider text-[10px]"
          >
            Lock Session
          </button>
        </div>

      </div>
    </div>
  );
}
