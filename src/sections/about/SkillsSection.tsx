import { ScrollReveal } from '../../components/ScrollReveal';
import { 
  BarChart3, Cpu, Briefcase, ShieldCheck, 
  Network, GitFork, RefreshCw, FileText, 
  ClipboardCheck, Lock, TrendingUp, Activity, Gauge, Users, Server, Database, GraduationCap
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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="white" />
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

export function SkillsSection() {
  const skillGroups = [
    {
      title: 'Systems & Architecture',
      icon: <Briefcase className="w-4 h-4 text-gold" />,
      skills: [
        'Systems Architecture',
        'Process Engineering',
        'ERP Implementation',
        'Reconciliation Automation',
        'SOP & Governance Design'
      ]
    },
    {
      title: 'Data & Business Intelligence',
      icon: <BarChart3 className="w-4 h-4 text-gold" />,
      skills: [
        'Power BI / DAX',
        'SQL / SQLite',
        'Retail Data Analytics',
        'Transaction Analytics',
        'CRM & Engagement Analytics',
        'KPI & Metric Architecture'
      ]
    },
    {
      title: 'Technologies & AI',
      icon: <Cpu className="w-4 h-4 text-gold" />,
      skills: [
        'Python Programming',
        'Flask (Web Backend)',
        'React / TypeScript',
        'HTML5 / CSS3 / Tailwind',
        'PyTorch (Deep Learning)',
        'Hugging Face Platform'
      ]
    },
    {
      title: 'Operations & Business',
      icon: <ShieldCheck className="w-4 h-4 text-gold" />,
      skills: [
        'Retail Operations Management',
        'Operational Auditing',
        'Inventory Security & Audits',
        'Staff Training & Leadership'
      ]
    }
  ];

  return (
    <section className="bg-white py-12 px-6 select-none border-b border-slate-200">
      <div className="max-w-[1000px] mx-auto space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-navy uppercase tracking-tight">Skills & Domain Expertise</h2>
          <p className="text-sm text-text-secondary mt-2">A comprehensive overview of operational consulting, technology adoption, and database auditing skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="bg-[#F8FAFC] border border-border-light p-6 rounded-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5 border-b border-slate-200/50 pb-3">
                  <div className="w-8 h-8 rounded-none bg-[#0B1E2E] flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-navy">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const icon = getSkillIcon(skill);
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold text-white bg-[#404040] rounded-lg shadow-sm hover:bg-[#4a4a4a] transition-colors duration-200"
                      >
                        {icon}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
