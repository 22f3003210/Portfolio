import { useState } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
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

// Custom inline SVG logos for project technologies
const PythonLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.1 4.2C30.6 4.2 32.5 13.5 32.5 13.5L32.6 23H52.5C62.9 23 63 32.5 63 32.5H73.1C73.1 32.5 82.2 31.7 82.2 23C82.2 14.3 74 13.6 74 13.6L67.1 13.5C57.6 13.5 54.4 4.2 52.1 4.2Z" fill="#3776AB"/>
    <path d="M52.9 100.8C74.4 100.8 72.5 91.5 72.5 91.5L72.4 82H52.5C42.1 82 42 72.5 42 72.5H31.9C31.9 72.5 22.8 73.3 22.8 82C22.8 90.7 31 91.4 31 91.4L37.9 91.5C47.4 91.5 50.6 100.8 52.9 100.8Z" fill="#FFE873"/>
    <path d="M42.2 29.8C31.7 29.8 32.5 39.3 32.5 39.3L32.6 48.7H52.5C62 48.7 63 56.4 63 56.4H73.1C73.1 56.4 72.5 44 72.5 39.3C72.5 34.6 63.6 29.8 52.1 29.8H42.2Z" fill="#3776AB"/>
    <path d="M62.8 75.2C73.3 75.2 72.5 65.7 72.5 65.7L72.4 56.3H52.5C43 56.3 42 48.6 42 48.6H31.9C31.9 48.6 32.5 61 32.5 65.7C32.5 70.4 41.4 75.2 52.9 75.2H62.8Z" fill="#FFE873"/>
    <circle cx="43" cy="13.5" r="3.5" fill="white"/>
    <circle cx="62" cy="91.5" r="3.5" fill="black"/>
  </svg>
);

const PandasLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="2" width="4" height="20" rx="1" fill="#150458" />
    <rect x="10" y="6" width="4" height="16" rx="1" fill="#150458" />
    <rect x="17" y="2" width="4" height="20" rx="1" fill="#150458" />
    <rect x="3" y="6" width="4" height="6" rx="0.5" fill="#FF8F00" />
    <rect x="10" y="10" width="4" height="8" rx="0.5" fill="#E91E63" />
    <rect x="17" y="4" width="4" height="5" rx="0.5" fill="#00C853" />
  </svg>
);

const ScikitLearnLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="12" r="5" fill="#F89939" opacity="0.9" />
    <circle cx="16" cy="12" r="5" fill="#3499CD" opacity="0.9" />
    <circle cx="12" cy="7" r="3" fill="#F15A24" />
    <circle cx="12" cy="17" r="3" fill="#2E3192" />
  </svg>
);

const ExcelLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="2" fill="#107C41" />
    <path d="M12 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8V3z" fill="#1F9A55" />
    <rect x="5" y="7" width="8" height="10" rx="1" fill="#FFFFFF" />
    <text x="9" y="14.5" textAnchor="middle" fill="#107C41" fontSize="9" fontWeight="900" fontFamily="sans-serif">X</text>
  </svg>
);

const MatplotlibLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#11557C" />
    <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="monospace">MT</text>
  </svg>
);

const PowerBILogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14h3.5v7H4v-7z" fill="#E6AD12" />
    <path d="M10 8h3.5v13H10V8z" fill="#F2C811" />
    <path d="M16 3h3.5v18H16V3z" fill="#F9E016" />
  </svg>
);

const DaxLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#D97706" />
    <text x="12" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="serif" fontStyle="italic">fx</text>
  </svg>
);

const SqlLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm8 4.5c0 .97-3.22 2.5-8 2.5s-8-1.53-8-2.5 3.22-2.5 8-2.5 8 1.53 8 2.5zM4 9.4c0 .85 2.72 2.1 8 2.1s8-1.25 8-2.1v2.1c0 .85-2.72 2.1-8 2.1s-8-1.25-8-2.1V9.4zm0 4.8c0 .85 2.72 2.1 8 2.1s8-1.25 8-2.1v2.3c0 .85-2.72 2.1-8 2.1s-8-1.25-8-2.1v-2.3z" fill="#00758F" />
  </svg>
);

const FlaskLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19c-1.5 2-4.5 3-7 3s-5.5-1-7-3c-1.2-1.6-1.5-3.8-.5-5.5L8.5 7h7l4 6.5c1 1.7.7 3.9-.5 5.5z" fill="#E6F4EA" stroke="#137333" strokeWidth="2" />
    <path d="M9 7V4h6v3" stroke="#137333" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 16c2-1 4-1 6 0" stroke="#137333" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SqliteLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2c-3 1-8 4-11 8-1.5 2-2.5 4.5-2.5 7 0 3 1.5 4 3 4s3.5-1 4.5-2.5c3-3 6-8 7-11 .5-1.5-.5-1.5-1-5.5z" fill="#0F80CC" />
    <path d="M10 10c-1-1-2.5-1.5-4-1.5-3 0-5 2-5 5 0 3.5 3 6 7.5 7.5L10 10z" fill="#003B57" />
  </svg>
);

const JinjaLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#B01B1B" />
    <text x="12" y="15.5" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">{"{{"}</text>
  </svg>
);

const BootstrapLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#7952B3" />
    <text x="12" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif">B</text>
  </svg>
);

const PyTorchLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.5 2 4.5 4 4.5 8c0 3 2.5 5 5 7 1.5 1.2 2.5 2.8 2.5 4.5s-1.5 2.5-3 2.5c-1 0-2-.5-2.5-1.5L4.5 19c1.2 2.5 3.5 3.5 6 3.5 3.5 0 6.5-2 6.5-6.5S14 10 11.5 8.5C9.5 7.2 8.5 6 8.5 5s1.2-1.5 2.5-1.5 2.5.5 3.2 1.5l2.3-1.2C15.3 2.5 13.8 2 12 2z" fill="#EE4C2C" />
  </svg>
);

const HuggingFaceLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FFD21E" />
    <circle cx="9" cy="10" r="1.5" fill="#000" />
    <circle cx="15" cy="10" r="1.5" fill="#000" />
    <path d="M8 14.5c1 1.5 2.5 2 4 2s3-.5 4-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 16c.5-1 2-2 3.5-1M20 16c-.5-1-2-2-3.5-1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WandbLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#FFD200" />
    <path d="M6 18h2V9H6v9zm4 0h2V6h-2v12zm4 0h2v-8h-2v8zm4 0h2v-5h-2v5z" fill="#000000" />
  </svg>
);

const KaggleLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 20L13.2 13.8L18.4 4H14.7L10.3 12.3V4H7V20H10.3V15.2L14.9 20H18.8Z" fill="#20BEFF" />
  </svg>
);

const ErpLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#4B5563" />
    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0170B9" />
    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#8CC63F" />
    <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#F59E0B" />
  </svg>
);

const PosLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="#10B981" />
    <rect x="7" y="5" width="10" height="5" rx="1" fill="#FFFFFF" />
    <circle cx="8" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="12" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="16" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="8" cy="18" r="1.2" fill="#FFFFFF" />
    <circle cx="12" cy="18" r="1.2" fill="#FFFFFF" />
    <circle cx="16" cy="18" r="1.2" fill="#FFFFFF" />
  </svg>
);

const CrmLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" fill="#3B82F6" />
    <path d="M5 20c0-3 3-5 7-5s7 2 7 5" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="18" cy="15" r="3" fill="#10B981" />
    <path d="M18 13.5v3M16.5 15h3" stroke="#FFFFFF" strokeWidth="1" />
  </svg>
);

const DataMigrationLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 13l4-4-4-4M7 11l-4 4 4 4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 9H9a4 4 0 0 0-4 4v2M3 15h12a4 4 0 0 0 4-4V9" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TransactionAnalyticsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" fill="#059669" />
    <rect x="6" y="9" width="3" height="6" fill="#FFFFFF" opacity="0.5" />
    <path d="M12 9l3 3 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const ProcurementLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h2l3.6 7.6a2 2 0 0 0 2 1.4h6.8a2 2 0 0 0 2-1.4L21 5H6.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="9" cy="19" r="1.5" fill="#F59E0B" />
    <circle cx="17" cy="19" r="1.5" fill="#F59E0B" />
  </svg>
);

const WorkflowsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="12" r="3" fill="#EC4899" />
    <circle cx="18" cy="6" r="3" fill="#EC4899" />
    <circle cx="18" cy="18" r="3" fill="#EC4899" />
    <line x1="9" y1="12" x2="15" y2="7" stroke="#EC4899" strokeWidth="2" />
    <line x1="9" y1="12" x2="15" y2="17" stroke="#EC4899" strokeWidth="2" />
  </svg>
);

const BiReportingLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="18" rx="2" fill="#2563EB" />
    <line x1="8" y1="7" x2="16" y2="7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="11" x2="14" y2="11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AuditsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#DC2626" />
    <path d="M9 11l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AuditDashboardsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="14" rx="2" fill="#7C3AED" />
    <circle cx="12" cy="11" r="3" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
    <line x1="14" y1="13" x2="18" y2="17" stroke="#FFFFFF" strokeWidth="2" />
  </svg>
);

const QcAnalyticsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#0D9488" />
    <path d="M7 11l3 3 7-7" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DefaultTechLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18l6-6-6-6M8 6L2 12l6 6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function getTechLogo(tech: string): React.ReactNode {
  const normalized = tech.toLowerCase().trim();
  if (normalized === 'python') return <PythonLogo />;
  if (normalized === 'pandas') return <PandasLogo />;
  if (normalized === 'scikit-learn') return <ScikitLearnLogo />;
  if (normalized === 'excel') return <ExcelLogo />;
  if (normalized === 'matplotlib') return <MatplotlibLogo />;
  if (normalized === 'power bi') return <PowerBILogo />;
  if (normalized === 'dax') return <DaxLogo />;
  if (normalized === 'sql') return <SqlLogo />;
  if (normalized === 'flask') return <FlaskLogo />;
  if (normalized === 'sqlite') return <SqliteLogo />;
  if (normalized === 'jinja2') return <JinjaLogo />;
  if (normalized === 'bootstrap') return <BootstrapLogo />;
  if (normalized === 'pytorch') return <PyTorchLogo />;
  if (normalized === 'hugging face') return <HuggingFaceLogo />;
  if (normalized === 'w&b' || normalized === 'weights & biases') return <WandbLogo />;
  if (normalized === 'kaggle') return <KaggleLogo />;
  if (normalized === 'erp' || normalized === 'erp implementation') return <ErpLogo />;
  if (normalized === 'pos') return <PosLogo />;
  if (normalized === 'crm integration' || normalized === 'crm analytics' || normalized === 'crm') return <CrmLogo />;
  if (normalized === 'data migration' || normalized === 'data pipelines') return <DataMigrationLogo />;
  if (normalized === 'transaction analytics') return <TransactionAnalyticsLogo />;
  if (normalized === 'procurement analytics' || normalized === 'procurement intelligence') return <ProcurementLogo />;
  if (normalized === 'engagement workflows') return <WorkflowsLogo />;
  if (normalized === 'bi reporting') return <BiReportingLogo />;
  if (normalized === 'erp analytics') return <ErpLogo />;
  if (normalized === 'process audits' || normalized === 'process governance') return <AuditsLogo />;
  if (normalized === 'audit dashboards') return <AuditDashboardsLogo />;
  if (normalized === 'qc analytics') return <QcAnalyticsLogo />;
  return <DefaultTechLogo />;
}

export function ProjectsSection() {
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
    <section className="bg-white py-12 px-6 select-none border-b border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-navy uppercase tracking-tight">Project Portfolio</h2>
          <p className="text-sm text-text-secondary mt-2">Explore professional client work, ERP adoption setups, BI dashboards, and AI/deep learning projects.</p>
        </div>

        {/* Filters and Count Header */}
        <ScrollReveal delay={0.05}>
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
                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#374151] hover:bg-[#4B5563] text-[#F3F4F6] rounded-md text-[11px] font-bold select-none transition-all duration-200 border border-gray-600/30"
                      >
                        {getTechLogo(tech)}
                        <span className="font-sans tracking-wide">{tech}</span>
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
    </section>
  );
}
