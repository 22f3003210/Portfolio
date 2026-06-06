import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionLabel } from '../components/SectionLabel';
import { 
  Settings, 
  BarChart3, 
  Database, 
  Users, 
  ShieldAlert, 
  UserCheck, 
  Server, 
  Sparkles,
  Layers
} from 'lucide-react';

interface Project {
  title: string;
  category: string;
  filters: string[];
  categorySubhead: string;
  description: string;
  techStack: string[];
  status: string;
  gradient: string;
  icon: React.ReactNode;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'professional', label: 'Client Work' },
    { value: 'academic', label: 'Academic' },
    { value: 'bi', label: 'BI & Analytics' },
    { value: 'ai', label: 'AI & Deep Learning' },
    { value: 'appdev', label: 'Application Dev' }
  ];

  const projects: Project[] = [
    {
      title: 'ERP Implementation Projects',
      category: 'Professional',
      filters: ['professional', 'appdev'],
      categorySubhead: 'JEWELLERY ERP • SYSTEM CONFIGURATION',
      description: 'Multiple jewellery ERP implementation projects across retail businesses, configuring inventory, sales operations, and old gold workflows.',
      techStack: ['ERP', 'POS', 'CRM Integration', 'Data Migration'],
      status: 'COMPLETED',
      gradient: 'bg-gradient-to-br from-[#0B1E2E] to-[#0170B9]',
      icon: <Settings className="w-8 h-8 text-[#0170B9]" />
    },
    {
      title: 'Executive BI Dashboards',
      category: 'Professional',
      filters: ['professional', 'bi'],
      categorySubhead: 'POWER BI • KPI ANALYTICS',
      description: 'Executive business intelligence dashboards enabling real-time visibility into sales performance, inventory, and profitability trends.',
      techStack: ['Power BI', 'DAX', 'SQL', 'Transaction Analytics'],
      status: 'COMPLETED',
      gradient: 'bg-gradient-to-br from-[#2E3192] to-[#00E5FF]',
      icon: <BarChart3 className="w-8 h-8 text-[#2E3192]" />
    },
    {
      title: 'Inventory Excellence Dashboard',
      category: 'Professional',
      filters: ['professional', 'bi'],
      categorySubhead: 'ERP ANALYTICS • VENDOR & CUSTOMER',
      description: 'Inventory dashboards tracking vendor performance, stock movement, dead-stock, and customer purchase behaviour.',
      techStack: ['Power BI', 'Data Pipelines', 'Procurement Analytics'],
      status: 'COMPLETED',
      gradient: 'bg-gradient-to-br from-[#0B1E2E] to-[#8CC63F]',
      icon: <Database className="w-8 h-8 text-[#8CC63F]" />
    },
    {
      title: 'CRM Intelligence Engine',
      category: 'Professional',
      filters: ['professional', 'bi'],
      categorySubhead: 'CRM ANALYTICS • LIFECYCLE TRACKING',
      description: 'CRM intelligence systems for customer lifecycle tracking, campaigns monitoring, and behavioral analytics to improve conversions.',
      techStack: ['CRM Analytics', 'Engagement Workflows', 'BI Reporting'],
      status: 'COMPLETED',
      gradient: 'bg-gradient-to-br from-[#6A1B9A] to-[#E91E63]',
      icon: <Users className="w-8 h-8 text-[#6A1B9A]" />
    },
    {
      title: 'Operational Audit & Governance Analytics',
      category: 'Professional',
      filters: ['professional', 'bi'],
      categorySubhead: 'PROCESS GOVERNANCE • LEAKAGE IDENTIFICATION',
      description: 'Analytical reporting systems identifying operational leakages, transaction anomalies, and reconciliation gaps across workflows.',
      techStack: ['ERP Analytics', 'Process Audits', 'Audit Dashboards'],
      status: 'COMPLETED',
      gradient: 'bg-gradient-to-br from-[#D84315] to-[#FF8F00]',
      icon: <ShieldAlert className="w-8 h-8 text-[#D84315]" />
    },
    {
      title: 'Vendor Relationship Management Dashboard',
      category: 'Professional',
      filters: ['professional', 'bi'],
      categorySubhead: 'VENDOR ANALYTICS • RELIABILITY METRICS',
      description: 'Performance dashboards tracking delivery delays, QC failure rates, stock fulfilment timelines, and vendor reliability metrics.',
      techStack: ['Power BI', 'Procurement Intelligence', 'QC Analytics'],
      status: 'COMPLETED',
      gradient: 'bg-gradient-to-br from-[#00695C] to-[#00E5FF]',
      icon: <UserCheck className="w-8 h-8 text-[#00695C]" />
    },
    {
      title: 'Hospital Management System',
      category: 'Academic',
      filters: ['academic', 'appdev'],
      categorySubhead: 'APPLICATION DEVELOPMENT • PYTHON / SQLITE',
      description: 'Full-stack hospital management web application managing patient records, appointments, billing, and administrative workflows.',
      techStack: ['Flask', 'SQLite', 'Jinja2', 'Bootstrap'],
      status: 'COMPLETED',
      gradient: 'bg-gradient-to-br from-[#37474F] to-[#90A4AE]',
      icon: <Server className="w-8 h-8 text-[#37474F]" />
    },
    {
      title: 'RetailMind AI',
      category: 'Academic',
      filters: ['academic', 'ai'],
      categorySubhead: 'DEEP LEARNING • GENERATIVE AI',
      description: 'AI-driven application focused on demand forecasting, predictive analytics, and machine learning pipelines (Ongoing).',
      techStack: ['PyTorch', 'Hugging Face', 'W&B', 'Kaggle'],
      status: 'ONGOING',
      gradient: 'bg-gradient-to-br from-[#1A237E] to-[#7986CB]',
      icon: <Sparkles className="w-8 h-8 text-[#1A237E]" />
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.filters.includes(activeFilter)
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-20 md:py-[100px] px-6 select-none border-b border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <ScrollReveal>
            <SectionLabel variant="pill">PROJECT PORTFOLIO</SectionLabel>
            <h1 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tight leading-tight mt-3">
              My Featured <br />
              <span className="text-[#0170B9]">Engineering Work</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-semibold">
              Explore professional implementations, business intelligence systems, database architectures, and deep learning platforms designed to solve real-world problems.
            </p>
          </ScrollReveal>
        </div>

        {/* Filters and Count Header */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 mb-10">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2.5">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-5 py-2 text-[11px] font-black uppercase tracking-wider transition-all duration-200 rounded-full border shadow-sm ${
                    activeFilter === option.value
                      ? 'bg-navy text-white border-transparent'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Project Count */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 md:text-right">
              <Layers className="w-4 h-4 text-gold" />
              <span>{filteredProjects.length} projects</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.05}>
              <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col h-full group">
                
                {/* SVG/Gradient Card Header */}
                <div className={`h-48 w-full ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {/* Subtle background overlay grids */}
                  <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/95 shadow-md border border-slate-100/50 flex items-center justify-center text-navy scale-100 group-hover:scale-105 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-mono tracking-widest text-[#0170B9] font-black uppercase mb-2">
                    {project.categorySubhead}
                  </span>
                  
                  <h3 className="text-lg font-black text-navy tracking-tight leading-snug mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-semibold mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200/60 rounded-none font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Status */}
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${
                      project.status === 'ONGOING' 
                        ? 'bg-gold/10 text-gold border border-gold/25' 
                        : 'bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/25'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                        project.status === 'ONGOING' ? 'bg-gold animate-pulse' : 'bg-[#8CC63F]'
                      }`} />
                      {project.status}
                    </span>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
