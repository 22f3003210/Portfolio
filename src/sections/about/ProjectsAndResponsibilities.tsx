import { useState } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionLabel } from '../../components/SectionLabel';
import { 
  Briefcase, 
  BookOpen, 
  Award, 
  Settings, 
  BarChart3, 
  Database, 
  Users, 
  ShieldAlert, 
  UserCheck, 
  Server, 
  Sparkles,
  Calendar,
  MapPin,
  Trophy,
  Shield,
  HelpCircle
} from 'lucide-react';

interface Project {
  title: string;
  category: string;
  bullets: string[];
  icon: React.ReactNode;
}

interface Responsibility {
  role: string;
  org: string;
  duration: string;
  location?: string;
  bullets: string[];
  icon: React.ReactNode;
}

interface AwardItem {
  title: string;
  subtitle: string;
  year: string;
  icon: React.ReactNode;
}

export function ProjectsAndResponsibilities() {
  const [activeTab, setActiveTab] = useState<'professional' | 'academic' | 'leadership' | 'awards'>('professional');

  const professionalProjects: Project[] = [
    {
      title: 'ERP Implementation Projects',
      category: 'JEWELLERY ERP / ON-SITE & REMOTE DEPLOYMENT',
      icon: <Settings className="w-5 h-5 text-gold" />,
      bullets: [
        'Executed multiple ERP implementation projects for jewellery retail businesses through both on-site and remote deployment models including system configuration, data migration, workflow setup, testing, user training, and go-live support.',
        'Supported ERP adoption across inventory management, sales operations, old gold workflows, CRM integration, reconciliation, and reporting processes ensuring smooth operational transitions and process alignment.'
      ]
    },
    {
      title: 'Executive BI Dashboards',
      category: 'POWER BI / KPI ANALYTICS',
      icon: <BarChart3 className="w-5 h-5 text-gold" />,
      bullets: [
        'Designed executive-level business intelligence dashboards enabling real-time visibility into sales performance, inventory movement, operational KPIs, profitability trends, and transaction analytics for jewellery retail operations.',
        'Built transaction-level analytics systems supporting leadership decision-making, operational governance, and performance monitoring.'
      ]
    },
    {
      title: 'Inventory Excellence Dashboard',
      category: 'ERP ANALYTICS / VENDOR & CUSTOMER INTELLIGENCE',
      icon: <Database className="w-5 h-5 text-gold" />,
      bullets: [
        'Developed inventory intelligence dashboards focused on vendor performance, stock movement analysis, dead-stock identification, and customer purchase behaviour analytics.',
        'Enabled tracking of fast/slow-moving inventory, procurement efficiency, category-wise performance, and operational inventory optimization.'
      ]
    },
    {
      title: 'CRM Intelligence Engine',
      category: 'CRM ANALYTICS / CUSTOMER LIFECYCLE',
      icon: <Users className="w-5 h-5 text-gold" />,
      bullets: [
        'Designed CRM intelligence systems for customer lifecycle tracking, retention analysis, campaign performance monitoring, and behavioural analytics.',
        'Built data-driven engagement workflows improving walk-in conversions, repeat customer engagement, and customer intelligence utilization for jewellery retail businesses.'
      ]
    },
    {
      title: 'Operational Audit & Governance Analytics',
      category: 'ERP / PROCESS GOVERNANCE / BI REPORTING',
      icon: <ShieldAlert className="w-5 h-5 text-gold" />,
      bullets: [
        'Developed analytical reporting systems for identifying operational leakages, transaction anomalies, reconciliation gaps, and accountability issues across jewellery retail workflows.',
        'Built governance-focused dashboards supporting audit visibility, operational control, and strategic decision-making.'
      ]
    },
    {
      title: 'Vendor Relationship Management Dashboard',
      category: 'VENDOR ANALYTICS / PROCUREMENT INTELLIGENCE',
      icon: <UserCheck className="w-5 h-5 text-gold" />,
      bullets: [
        'Developed vendor performance dashboards tracking delivery delays, QC failure rates, procurement efficiency, stock fulfilment timelines, and vendor reliability metrics.',
        'Enabled identification of best-performing vendors through analytics on timely delivery, quality consistency, procurement turnaround time, and operational dependency patterns.'
      ]
    }
  ];

  const academicProjects: Project[] = [
    {
      title: 'Hospital Management System',
      category: 'APPLICATION DEVELOPMENT / FLASK / SQLITE',
      icon: <Server className="w-5 h-5 text-gold" />,
      bullets: [
        'Developed a Hospital Management System using Flask for backend application development.',
        'Built responsive front-end interfaces using Jinja2 templating, HTML, CSS, and Bootstrap.',
        'Implemented SQLite database integration for patient records, appointments, billing, and administrative workflows.'
      ]
    },
    {
      title: 'RetailMind AI (Ongoing)',
      category: 'DEEP LEARNING & GENERATIVE AI PLATFORM',
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      bullets: [
        'Developing AI-driven applications using Deep Learning and Generative AI models focused on intelligent automation, predictive analytics, and business intelligence workflows.',
        'Building machine learning pipelines, inference systems, and AI-assisted analytical solutions for real-world business problem solving.',
        'Utilizing GitHub for project organization, Kaggle for benchmarking, Weights & Biases (W&B) for experiment tracking, and exploring deployment through Hugging Face Spaces.'
      ]
    }
  ];

  const leadershipRoles: Responsibility[] = [
    {
      role: 'Head of Operations',
      org: 'Pixels & Panels Society, IIT Madras',
      duration: 'Jun 2024 – May 2025',
      location: 'IIT Madras',
      icon: <Users className="w-5 h-5 text-gold" />,
      bullets: [
        'Managed operations and execution activities for IIT Madras’ pop-culture society with a community of 1800+ members.',
        'Coordinated event planning, volunteer management, onboarding, and engagement activities across multiple large-scale society initiatives.',
        'Streamlined operational workflows and team coordination improving execution efficiency and participation management.'
      ]
    },
    {
      role: 'Event Management Head',
      org: 'Paradox Got Talent | Paradox’25',
      duration: 'May 2025',
      location: 'IIT Madras',
      icon: <Calendar className="w-5 h-5 text-gold" />,
      bullets: [
        'Led end-to-end event operations and coordination for Paradox Got Talent during Paradox’25 at IIT Madras.',
        'Managed participant handling, volunteer workflows, scheduling, and stage execution ensuring smooth event operations.',
        'Coordinated with organizing teams for audience engagement and operational planning.'
      ]
    },
    {
      role: 'Tech Fest Coordinator',
      org: 'TRYST, IIT Delhi',
      duration: 'Jan 2024 – Mar 2024',
      location: 'IIT Delhi',
      icon: <Settings className="w-5 h-5 text-gold" />,
      bullets: [
        'Coordinated participant engagement, volunteer activities, and event execution support for TRYST, IIT Delhi’s flagship tech fest.',
        'Assisted in operational planning and large-scale event coordination in fast-paced environments.'
      ]
    },
    {
      role: 'Squad Member',
      org: 'Mood Indigo, IIT Bombay',
      duration: 'Oct 2023 – Dec 2023',
      location: 'IIT Bombay',
      icon: <Award className="w-5 h-5 text-gold" />,
      bullets: [
        'Supported on-ground operations, crowd coordination, and participant management during Mood Indigo, IIT Bombay’s annual cultural festival.',
        'Worked with large volunteer teams ensuring smooth execution of large-scale campus events.'
      ]
    }
  ];

  const awardsList: AwardItem[] = [
    {
      title: 'Bronze Medal in National-Level Boxing Championship',
      subtitle: 'National-Level Boxing Championship, Gujarat',
      year: 'Sep 2018',
      icon: <Shield className="w-5 h-5 text-gold" />
    },
    {
      title: 'Pratibha Award by Chief Minister of Andhra Pradesh',
      subtitle: 'Excellence in SSC exam results and sports achievements',
      year: 'Jul 2018',
      icon: <Trophy className="w-5 h-5 text-gold" />
    },
    {
      title: 'Silver Medal in State-Level Hockey Championship (SGFI)',
      subtitle: 'Chittoor | Selected for National-level state team',
      year: '2017',
      icon: <Trophy className="w-5 h-5 text-gold" />
    },
    {
      title: 'Central-Zone Kabaddi Championship Winner',
      subtitle: 'Madala',
      year: '2016',
      icon: <Users className="w-5 h-5 text-gold" />
    },
    {
      title: '2nd Prize in State-Level Science Fair',
      subtitle: 'Narasaraopet | Project exhibition',
      year: '2016',
      icon: <Sparkles className="w-5 h-5 text-gold" />
    },
    {
      title: 'LIC Best Student of the Year Award',
      subtitle: 'Academic Excellence',
      year: '2016 – 2018',
      icon: <BookOpen className="w-5 h-5 text-gold" />
    },
    {
      title: '1st Place in Elocution Competition',
      subtitle: 'Showcasing public speaking & communication skills among 600 members',
      year: '2019',
      icon: <Award className="w-5 h-5 text-gold" />
    },
    {
      title: '1st Place in State-Level Quiz Competition',
      subtitle: 'Outperforming 50+ teams and demonstrating strong knowledge',
      year: '2019',
      icon: <HelpCircle className="w-5 h-5 text-gold" />
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#0B1E2E] to-[#04101A] py-20 md:py-[120px] px-6 select-none border-b border-white/10 relative overflow-hidden">
      {/* High-tech background accent glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navy/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal className="flex flex-col gap-2">
            <SectionLabel variant="pill">PORTFOLIO & LEADERSHIP</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mt-3">
              Projects & <br />
              <span className="text-[#00E5FF]">Responsibilities</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="max-w-md text-white/70 font-semibold text-sm leading-relaxed">
            A detailed overview of BI analytics design, enterprise ERP implementations, academic platforms, and student leadership across premier institutions.
          </ScrollReveal>
        </div>

        {/* Tab Selection Row */}
        <ScrollReveal delay={0.15}>
          <div className="flex border-b border-white/10 mb-8 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button
              onClick={() => setActiveTab('professional')}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-wider font-extrabold border-b-2 transition-all duration-300 ${
                activeTab === 'professional'
                  ? 'border-gold text-white bg-white/[0.02]'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 text-gold" />
              Professional Projects
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-wider font-extrabold border-b-2 transition-all duration-300 ${
                activeTab === 'academic'
                  ? 'border-gold text-white bg-white/[0.02]'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#00E5FF]" />
              Academic Projects
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-wider font-extrabold border-b-2 transition-all duration-300 ${
                activeTab === 'leadership'
                  ? 'border-gold text-white bg-white/[0.02]'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4 text-[#8CC63F]" />
              Leadership Roles
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-wider font-extrabold border-b-2 transition-all duration-300 ${
                activeTab === 'awards'
                  ? 'border-gold text-white bg-white/[0.02]'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4 text-gold" />
              Awards & Recognition
            </button>
          </div>
        </ScrollReveal>

        {/* Dynamic Content Cards */}
        <div className="min-h-[350px]">
          {activeTab === 'professional' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalProjects.map((project, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white/[0.02] border border-white/10 rounded-none p-6 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0">
                          {project.icon}
                        </div>
                        <div>
                          <span className="text-[9px] font-black text-gold uppercase tracking-widest font-mono block">
                            {project.category}
                          </span>
                          <h3 className="text-[17px] font-bold text-white tracking-tight mt-0.5">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-2.5 mt-4">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed font-semibold">
                            <span className="w-1.5 h-1.5 bg-[#8CC63F] shrink-0 mt-1.5"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {activeTab === 'academic' && (
            <div className="grid grid-cols-1 gap-6 max-w-4xl">
              {academicProjects.map((project, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white/[0.02] border border-white/10 rounded-none p-6 hover:border-[#00E5FF]/30 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-[#00E5FF] uppercase tracking-widest font-mono block">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <ul className="space-y-2.5 mt-4">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-[13px] text-white/80 leading-relaxed font-semibold">
                          <span className="w-1.5 h-1.5 bg-[#8CC63F] shrink-0 mt-1.5"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {activeTab === 'leadership' && (
            <div className="space-y-6 max-w-4xl">
              {leadershipRoles.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white/[0.02] border border-white/10 rounded-none p-6 hover:border-[#8CC63F]/30 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight leading-none mb-1.5">
                            {item.role}
                          </h3>
                          <span className="text-xs font-bold text-gold font-mono block">
                            {item.org}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-[11px] font-mono font-semibold text-white/50 sm:text-right">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#8CC63F]" />
                          {item.duration}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#8CC63F]" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2.5 mt-3 pl-1">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-[13px] text-white/80 leading-relaxed font-semibold">
                          <span className="w-1.5 h-1.5 bg-[#8CC63F] shrink-0 mt-1.5"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awardsList.map((award, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white/[0.02] border border-white/10 rounded-none p-5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300 flex items-start gap-4">
                    <div className="w-10 h-10 border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0">
                      {award.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-semibold text-gold font-mono block">
                          {award.year}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-tight mt-1 leading-snug">
                        {award.title}
                      </h3>
                      <p className="text-[12px] text-white/60 font-semibold mt-1">
                        {award.subtitle}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
