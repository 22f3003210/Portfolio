import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Lock, 
  AlertCircle, 
  ArrowLeft, 
  CheckSquare, 
  FileText, 
  LayoutGrid, 
  TrendingUp, 
  Printer, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ChevronRight,
  TrendingDown
} from 'lucide-react';
import { workflows } from '../data/workflows';

// KPI Definition Interface
interface RetailKPI {
  id: string;
  name: string;
  department: string;
  formula: string;
  benchmark: string;
  impact: string;
  trigger: string;
}

const kpisList: RetailKPI[] = [
  {
    id: 'kpi-1',
    name: 'GMROII (Gross Margin Return on Inventory Investment)',
    department: 'Inventory & Merchandising',
    formula: 'Gross Margin (₹) / Average Inventory Value (₹)',
    benchmark: '> 1.8x (Industry Average: 1.2x)',
    impact: 'Measures margin dollars generated for every rupee invested in stock.',
    trigger: 'Automated Karat-wise reorder triggers on high-turnover SKUs.'
  },
  {
    id: 'kpi-2',
    name: 'Stock Turn Rate (STR)',
    department: 'Inventory & Merchandising',
    formula: 'Cost of Goods Sold (COGS) / Average Inventory Value (₹)',
    benchmark: '1.5x - 2.5x annual turns (Jewellery specific)',
    impact: 'High turns reduce capital blockage and aged inventory melting costs.',
    trigger: 'Dynamic transfer system to shift slow stock to high-demand stores.'
  },
  {
    id: 'kpi-3',
    name: 'Aged Stock Ratio (> 360 Days)',
    department: 'Inventory & Merchandising',
    formula: '(Value of Stock > 360 days / Total Stock Value) * 100',
    benchmark: '< 15% of total showroom inventory',
    impact: 'Aged stock locks up cash flow and requires costly re-tagging or melting.',
    trigger: 'Alert engine for automatic discount tiering at 270 days.'
  },
  {
    id: 'kpi-4',
    name: 'Daily Purity Shrinkage (Weight Loss)',
    department: 'Inventory & Merchandising',
    formula: 'Audit Weight Gap (g) / Total Ledger Weight (g) per Karat',
    benchmark: '0.00% (Zero Tolerance)',
    impact: 'Detects structural melting losses or physical theft in real-time.',
    trigger: 'Mandatory karatometer verification during daily lock-up audits.'
  },
  {
    id: 'kpi-5',
    name: 'Showroom Conversion Rate',
    department: 'Sales & Showroom',
    formula: '(Total Sales Bills / Unique Customer Walk-ins) * 100',
    benchmark: '> 35% (Target: 40% on peak weekends)',
    impact: 'Direct measure of showroom sales effectiveness and staff greeting.',
    trigger: 'Walkout alert triggered to CRM if customer leaves without buying.'
  },
  {
    id: 'kpi-6',
    name: 'Average Bill Value (ABV)',
    department: 'Sales & Showroom',
    formula: 'Total Revenue (₹) / Total Number of Bills',
    benchmark: '₹75,000+ (Varies by product category mix)',
    impact: 'Measures success of cross-selling diamonds and high-making gold.',
    trigger: 'Live bundle suggestion prompts on billing screen for salesperson.'
  },
  {
    id: 'kpi-7',
    name: 'Billing Strike Rate (Items per Bill)',
    department: 'Sales & Showroom',
    formula: 'Total Items Sold / Total Number of Bills',
    benchmark: '> 1.25 items per invoice',
    impact: 'Tracks purchase size density. e.g. selling matching earrings with necklace.',
    trigger: 'Points-multiplier loyalty schemes on secondary accessory purchases.'
  },
  {
    id: 'kpi-8',
    name: 'Old Gold Exchange Purity Margin',
    department: 'Finance & Accounts',
    formula: 'Valuation Purity (%) - Refinery Yield Purity (%)',
    benchmark: '< 0.5% variance gap',
    impact: 'Protects store margins during old gold buybacks from purity inflation.',
    trigger: 'System-blocked buyback rates locked directly to karatometer assay.'
  },
  {
    id: 'kpi-9',
    name: 'Daily Reconciliation Discrepancy Rate',
    department: 'Finance & Accounts',
    formula: '(Shortage/Excess Cash & UPI Gap / Total Billing) * 100',
    benchmark: '< 0.05% of daily store revenue',
    impact: 'Eliminates billing delays and prevents day-end cash drawer leakage.',
    trigger: 'Real-time UPI payment webhooks linking payment directly to bill ID.'
  },
  {
    id: 'kpi-10',
    name: 'COGS Rate-Lock Accuracy',
    department: 'Finance & Accounts',
    formula: '(Invoice Rate - PO Locked MCX Gold Rate) / PO Rate',
    benchmark: '0.00% rate-slippage tolerance',
    impact: 'Prevents suppliers from billing at peak daily rates instead of PO lock.',
    trigger: 'Automatic three-way matching blocking payment on rate discrepancy.'
  },
  {
    id: 'kpi-11',
    name: 'BIS HUID Hallmarking Compliance',
    department: 'Governance & Compliance',
    formula: '(HUID-Tagged Showroom Items / Total Showroom Items) * 100',
    benchmark: '100% (Statutory Requirement)',
    impact: 'Ensures absolute legal compliance and protects brand trust.',
    trigger: 'System blocks billing of any item missing a registered HUID tag.'
  },
  {
    id: 'kpi-12',
    name: 'GSTR-2B GST Input Claim Rate',
    department: 'Governance & Compliance',
    formula: '(Matched Supplier Invoices in 2B / Purchase Book Invoices) * 100',
    benchmark: '100% tax match (Zero lost Input Tax Credit)',
    impact: 'Prevents invisible cash losses due to suppliers failing to file GST.',
    trigger: 'Auto-hold on supplier payments on GSTR-2B mismatch alert.'
  },
  {
    id: 'kpi-13',
    name: 'Walkout Follow-Up Conversion Rate',
    department: 'Leadership & Intelligence',
    formula: '(Followed-up Walkouts Converted / Total Walkouts Logged) * 100',
    benchmark: '> 20% conversion within 14 days',
    impact: 'Recovers lost traffic and leverages customer interest after store exit.',
    trigger: 'Zithara CRM 24-hr automated follow-up WhatsApp trigger.'
  }
];

// Checklist Item Interface
interface AuditItem {
  id: string;
  category: string;
  question: string;
  leakageImpact: number; // Percentage of sales leakage if not checked (0.1 to 0.5%)
  tip: string;
}

const auditChecklist: AuditItem[] = [
  {
    id: 'chk-1',
    category: 'Procure-to-Pay (P2P)',
    question: 'Are Purchase Orders locked to live MCX gold prices (15-min refresh) during requisition?',
    leakageImpact: 0.4,
    tip: 'Prevents paying premium supplier rates on market fluctuations.'
  },
  {
    id: 'chk-2',
    category: 'Procure-to-Pay (P2P)',
    question: 'Is there automated 3-way matching (PO gold rate ↔ GRN physical weight ↔ Supplier Invoice)?',
    leakageImpact: 0.3,
    tip: 'Stops invoice padding and weight inflation during invoicing.'
  },
  {
    id: 'chk-3',
    category: 'Order-to-Cash (O2C)',
    question: 'Are sales orders tokenized instantly upon customer walk-in to track conversion funnel?',
    leakageImpact: 0.2,
    tip: 'Allows monitoring salesperson strike rates and active traffic gaps.'
  },
  {
    id: 'chk-4',
    category: 'Order-to-Cash (O2C)',
    question: 'Is there an automated discount approval matrix to prevent sales-level margin erosion?',
    leakageImpact: 0.3,
    tip: 'Ensures store managers cannot exceed authorized margin thresholds.'
  },
  {
    id: 'chk-5',
    category: 'Inventory Control',
    question: 'Is physical inventory counted and reconciled karat-wise daily against book balances?',
    leakageImpact: 0.4,
    tip: 'Stops invisible weight discrepancies from accumulating over months.'
  },
  {
    id: 'chk-6',
    category: 'Inventory Control',
    question: 'Are inter-store stock transfers verified (sent weight = received weight) in real-time?',
    leakageImpact: 0.2,
    tip: 'Eliminates transit leakage and shrinkage between showrooms.'
  },
  {
    id: 'chk-7',
    category: 'Costing & Pricing',
    question: 'Is the showroom gold price automatically synced to live MCX gold rates without manual override?',
    leakageImpact: 0.5,
    tip: 'Ensures immediate price adjustments when gold prices spike.'
  },
  {
    id: 'chk-8',
    category: 'Saving Schemes',
    question: 'Are gold saving schemes integrated into CRM and gold gram credits locked on deposit-date rates?',
    leakageImpact: 0.2,
    tip: 'Prevents liability mismatch due to delayed rate allocation.'
  },
  {
    id: 'chk-9',
    category: 'Governance & Compliance',
    question: 'Are all showroom jewellery items tagged with a valid BIS HUID before display?',
    leakageImpact: 0.2,
    tip: 'Eliminates legal lockups and compliance seizure risks.'
  },
  {
    id: 'chk-10',
    category: 'Governance & Compliance',
    question: 'Is purchase GSTR-2B automatically matched monthly against your purchase book?',
    leakageImpact: 0.3,
    tip: 'Reclaims lost GST Input Tax Credit from defaulting supplier filings.'
  }
];

// Helper to hash string to SHA-256 hex
async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function Portal() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('portal_authenticated') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'workflows' | 'kpis' | 'checklist' | 'report'>('workflows');

  // Checklist State
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('portal_checklist_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    // Default: all checked (clean state)
    const defaults: Record<string, boolean> = {};
    auditChecklist.forEach(item => {
      defaults[item.id] = true;
    });
    return defaults;
  });

  // Store Turnover Input (in ₹ Crores)
  const [turnover, setTurnover] = useState<number>(50);

  // Save Checklist state
  useEffect(() => {
    localStorage.setItem('portal_checklist_state', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputHash = await sha256(passcode);
    const correctHash = '1824b346dfd511433da2bc62b5e59b98a2e635b132fc71df1c1d9eccd5d1fad7'; // Dhonijohny
    
    if (inputHash === correctHash) {
      localStorage.setItem('portal_authenticated', 'true');
      setIsAuthenticated(true);
      setAuthError('');
      setPasscode(''); // Clear immediately to wipe from DOM/React state
    } else {
      setAuthError('Incorrect client passcode. Access denied.');
      setPasscode(''); // Clear immediately
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('portal_authenticated');
    localStorage.removeItem('portal_link_visible');
    window.dispatchEvent(new Event('portal_locked'));
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculations for Health Diagnostic
  const totalAuditPoints = auditChecklist.length;
  const compliantPointsCount = Object.values(checkedItems).filter(Boolean).length;
  const nonCompliantPointsCount = totalAuditPoints - compliantPointsCount;
  const healthScore = totalAuditPoints > 0 ? Math.round((compliantPointsCount / totalAuditPoints) * 100) : 100;

  // Calculate estimated leakage based on unchecked items
  // Annual sales * sum(leakageImpact of unchecked items) / 100
  const uncheckedItems = auditChecklist.filter(item => !checkedItems[item.id]);
  const totalLeakagePercentage = uncheckedItems.reduce((acc, item) => acc + item.leakageImpact, 0);
  const estimatedLeakageAmount = (turnover * (totalLeakagePercentage / 100)); // in Crores

  // Format amount cleanly
  const formatLeakageText = (amountInCr: number) => {
    if (amountInCr === 0) return '₹0 (Optimized)';
    const amountInLakhs = amountInCr * 100;
    if (amountInLakhs >= 100) {
      return `₹${amountInCr.toFixed(2)} Cr`;
    }
    return `₹${amountInLakhs.toFixed(0)} Lakhs`;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] pt-28 pb-16 bg-[#001026] text-white flex items-center justify-center p-6">
        <div className="bg-[#0B1E2E] border border-white/10 p-8 md:p-10 w-full max-w-md shadow-2xl text-left rounded-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[9px] font-black text-gold uppercase tracking-widest font-mono">Restricted Access</span>
              <h2 className="font-extrabold text-xl uppercase tracking-wider text-white">Client Systems Vault</h2>
            </div>
          </div>
          
          <p className="text-xs text-white/70 mb-6 leading-relaxed font-semibold">
            Please enter your Client Passcode to access premium retail KPIs, interactive operational audit checklists, and automated diagnostic leakage report generation.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-white/80 uppercase mb-1.5">Client Passcode</label>
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-white/20 bg-white/5 p-3 text-sm font-semibold rounded-none focus:outline-none focus:border-gold text-white"
              />
            </div>
            {authError && (
              <div className="text-red-400 text-xs font-bold flex items-center gap-1.5 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{authError}</span>
              </div>
            )}
            <button 
              type="submit"
              className="w-full py-3 bg-gold text-white hover:bg-gold/90 font-extrabold text-xs uppercase tracking-widest shadow-md transition-colors rounded-none"
            >
              Unlock Vault
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-xs">
            <Link to="/" className="text-white/60 hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <span className="text-gold/50 font-bold uppercase tracking-wider text-[9px]">Scale with Abraham</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white py-24 md:py-28 px-6 text-left select-none">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border-light pb-6 mb-8">
          <div>
            <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-1">
              SYSTEMS GATEWAY & TELEMETRY
            </span>
            <h1 className="text-3xl font-extrabold text-navy tracking-tight uppercase">
              Retail Engine Gated Portal
            </h1>
            <p className="text-xs text-text-secondary font-semibold mt-1">
              Active diagnostic tools and blueprints for jewellery retail operations.
            </p>
          </div>
          
          <button 
            onClick={handleLogout}
            className="px-4 py-2 border border-navy/20 hover:border-navy text-navy text-xs font-bold uppercase tracking-wider transition-colors rounded-none"
          >
            Lock Portal
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-border-light mb-8 overflow-x-auto scrollbar-hide pb-0">
          <button 
            onClick={() => setActiveTab('workflows')}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'workflows' 
                ? 'border-gold text-navy font-black' 
                : 'border-transparent text-text-secondary hover:text-navy'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            12 Core Blueprints
          </button>
          
          <button 
            onClick={() => setActiveTab('kpis')}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'kpis' 
                ? 'border-gold text-navy font-black' 
                : 'border-transparent text-text-secondary hover:text-navy'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Retail KPIs Engine
          </button>

          <button 
            onClick={() => setActiveTab('checklist')}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'checklist' 
                ? 'border-gold text-navy font-black' 
                : 'border-transparent text-text-secondary hover:text-navy'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            Audit Health Checklist
          </button>

          <button 
            onClick={() => setActiveTab('report')}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'report' 
                ? 'border-gold text-navy font-black' 
                : 'border-transparent text-text-secondary hover:text-navy'
            }`}
          >
            <FileText className="w-4 h-4" />
            Leakage & Diagnostic Report
            {nonCompliantPointsCount > 0 && (
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse inline-block ml-0.5" />
            )}
          </button>
        </div>

        {/* Tab 1: Gated Workflows */}
        {activeTab === 'workflows' && (
          <div className="animate-fadeIn">
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-navy uppercase tracking-tight">12 Operational Blueprints</h3>
              <p className="text-xs text-text-secondary font-semibold mt-1">
                Select any operational domain below to view step-by-step system integration configurations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflows.map((workflow) => (
                <Link
                  key={workflow.id}
                  to={`/workflows/${workflow.slug}`}
                  className="group block bg-white border border-[#EAE8E2] p-6 flex flex-col justify-between h-full hover:border-gold hover:shadow-md transition-all duration-300 rounded-none relative"
                >
                  <div>
                    <div className="w-12 h-12 rounded-none bg-navy text-white flex items-center justify-center text-xl mb-4 group-hover:bg-gold transition-colors duration-300 shadow-sm">
                      {workflow.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gold">{workflow.category}</span>
                    <h4 className="text-base font-extrabold text-navy mt-1 mb-2 group-hover:text-gold transition-colors">
                      {workflow.name}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {workflow.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-light flex justify-between items-center mt-2">
                    <span className="text-xs font-black text-navy/60 uppercase tracking-widest font-mono">
                      {workflow.steps.length} Steps
                    </span>
                    <span className="text-xs font-bold text-navy group-hover:text-gold flex items-center gap-1 transition-colors">
                      Open Blueprint <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Retail KPIs Engine */}
        {activeTab === 'kpis' && (
          <div className="animate-fadeIn space-y-6">
            <div className="mb-4">
              <h3 className="text-xl font-extrabold text-navy uppercase tracking-tight">Showroom KPIs & Diagnostics Ledger</h3>
              <p className="text-xs text-text-secondary font-semibold mt-1">
                Comprehensive reference of critical metrics required to manage a modern jewellery retail enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {kpisList.map((kpi) => (
                <div 
                  key={kpi.id} 
                  className="bg-white border border-border-light p-6 rounded-none flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-navy/20 transition-all shadow-sm"
                >
                  <div className="space-y-1.5 max-w-[65%]">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-bold uppercase bg-navy/5 text-navy border border-navy/15 px-2 py-0.5 rounded-none font-mono">
                        {kpi.department}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-navy leading-snug">{kpi.name}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-semibold">
                      <span className="text-navy font-bold uppercase tracking-wider text-[10px] block md:inline md:mr-1">Formula:</span> 
                      <code className="font-mono text-[#0170B9] bg-[#0170B9]/5 px-2 py-0.5 border border-[#0170B9]/15 text-[10px] break-all inline-block mt-1 md:mt-0">{kpi.formula}</code>
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed pt-1">{kpi.impact}</p>
                  </div>
                  
                  <div className="md:border-l border-border-light md:pl-6 pt-3 md:pt-0 flex flex-col gap-2 min-w-[30%]">
                    <div>
                      <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">Target Benchmark</span>
                      <span className="text-xs font-extrabold text-gold uppercase">{kpi.benchmark}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">Actionable System Trigger</span>
                      <span className="text-xs font-bold text-navy leading-normal block">{kpi.trigger}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Business Audit Checklist */}
        {activeTab === 'checklist' && (
          <div className="animate-fadeIn space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-navy text-white p-6 rounded-none shadow-md">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-gold uppercase tracking-widest font-mono">Operations Audit Protocol</span>
                <h3 className="text-lg font-extrabold uppercase">Showroom Systems Health Check</h3>
                <p className="text-xs text-white/70 font-semibold leading-relaxed max-w-xl">
                  Check off the elements that are **currently fully automated and active** in your business. Gaps will automatically calculate leakages in the report tab.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-none">
                <div className="text-center">
                  <span className="text-[9px] font-bold text-white/55 block uppercase">HEALTH SCORE</span>
                  <span className={`text-2xl font-black ${healthScore > 80 ? 'text-green-400' : healthScore > 50 ? 'text-orange-400' : 'text-red-400'}`}>
                    {healthScore}%
                  </span>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div className="text-center">
                  <span className="text-[9px] font-bold text-white/55 block uppercase">ACTIVE GAPS</span>
                  <span className="text-2xl font-black text-gold">{nonCompliantPointsCount}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-light rounded-none shadow-sm divide-y divide-border-light">
              {auditChecklist.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => toggleCheck(item.id)}
                  className={`p-5 flex items-start gap-4 cursor-pointer select-none transition-colors ${
                    checkedItems[item.id] ? 'hover:bg-green-50/10' : 'hover:bg-red-50/10 bg-red-500/[0.01]'
                  }`}
                >
                  <div className="mt-1 flex-shrink-0">
                    {checkedItems[item.id] ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-text-muted font-mono">
                        {item.category}
                      </span>
                      <span className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-none font-mono ${
                        checkedItems[item.id] 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-red-50 text-red-700 border border-red-200 animate-pulse'
                      }`}>
                        {checkedItems[item.id] ? 'Active / Automated' : 'Manual / Leakage Risk'}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-navy leading-snug">
                      {item.question}
                    </p>
                    <p className="text-xs text-text-secondary font-semibold">
                      💡 {item.tip}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 hidden md:block">
                    <span className="text-[9px] font-bold text-text-muted uppercase block">Potential Leak</span>
                    <span className={`text-xs font-mono font-bold ${checkedItems[item.id] ? 'text-green-600' : 'text-red-500'}`}>
                      {checkedItems[item.id] ? 'None' : `~ ${item.leakageImpact}% of turnover`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Health Check Report Generator */}
        {activeTab === 'report' && (
          <div className="animate-fadeIn space-y-6">
            
            {/* Input card */}
            <div className="bg-white border border-border-light p-6 rounded-none shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1 max-w-lg">
                <h3 className="text-base font-extrabold text-navy uppercase">Report Turnover Parameters</h3>
                <p className="text-xs text-text-secondary leading-relaxed font-semibold">
                  Adjust your annual showroom turnover below to estimate annual profit leaks based on checklist gaps.
                </p>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                <div className="w-full md:w-56">
                  <label className="block text-[10px] font-bold text-text-primary uppercase mb-1">
                    Annual Turnover (₹ Crores)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 font-mono text-xs font-black text-text-muted">₹</span>
                    <input 
                      type="number"
                      value={turnover}
                      onChange={(e) => setTurnover(Math.max(1, Number(e.target.value)))}
                      className="w-full border border-border-light bg-warm-white p-2.5 pl-7 font-mono text-sm font-bold text-navy focus:outline-none focus:border-gold rounded-none"
                    />
                  </div>
                </div>
                <button
                  onClick={() => window.print()}
                  className="bg-navy hover:bg-navy/95 text-white p-3 border border-navy text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 h-10 mt-5 rounded-none shadow-sm transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Report</span>
                </button>
              </div>
            </div>

            {/* Print Area Wrap */}
            <div className="bg-white border border-[#D2DFE8] p-8 md:p-12 rounded-none shadow-lg text-left relative overflow-hidden print:p-0 print:border-none print:shadow-none">
              
              {/* Decorative Header details */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Report Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start border-b border-border-light pb-6 mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-gold flex items-center justify-center text-white text-xs font-bold rounded-none">
                      A
                    </div>
                    <span className="text-xs font-bold text-navy uppercase tracking-wider font-mono">
                      Scale with Abraham
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-navy uppercase tracking-tight">
                    Operations Diagnostic Audit Report
                  </h2>
                  <p className="text-xs text-text-secondary font-semibold font-mono mt-1">
                    REFERENCE NO: SWA-SYS-AUD-{new Date().getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}
                  </p>
                </div>

                <div className="text-right sm:text-right font-mono text-xs text-text-muted space-y-0.5">
                  <p className="font-bold text-navy">Abraham Sayed</p>
                  <p>Retail Systems & ERP Architect</p>
                  <p>scale.with.abraham@gmail.com</p>
                  <p className="font-bold text-gold">CONFIDENTIAL REPORT</p>
                </div>
              </div>

              {/* Scorecard grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                
                {/* Score block */}
                <div className="bg-warm-white border border-border-light p-5 rounded-none flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-text-muted uppercase block">Overall Health</span>
                    <span className={`text-2xl font-black ${healthScore > 80 ? 'text-green-600' : healthScore > 50 ? 'text-orange-500' : 'text-red-500'}`}>
                      {healthScore}%
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {healthScore > 80 ? (
                      <ShieldCheck className="w-10 h-10 text-green-600" />
                    ) : (
                      <AlertCircle className="w-10 h-10 text-orange-500" />
                    )}
                  </div>
                </div>

                {/* Gap count */}
                <div className="bg-warm-white border border-border-light p-5 rounded-none flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-text-muted uppercase block">Identified Gaps</span>
                    <span className="text-2xl font-black text-navy">
                      {nonCompliantPointsCount} <span className="text-xs font-normal text-text-secondary">/ {totalAuditPoints} points</span>
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-mono font-bold text-sm">
                    !
                  </div>
                </div>

                {/* Leakage Estimator */}
                <div className="bg-warm-white border border-border-light p-5 rounded-none flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-text-muted uppercase block">Est. Annual Profit Leakage</span>
                    <span className={`text-2xl font-black ${estimatedLeakageAmount > 0 ? 'text-red-500' : 'text-green-600'} flex items-center gap-1`}>
                      {estimatedLeakageAmount > 0 && <TrendingDown className="w-5 h-5 shrink-0" />}
                      {formatLeakageText(estimatedLeakageAmount)}
                    </span>
                  </div>
                </div>

              </div>

              {/* Status Classification banner */}
              <div className={`p-4 rounded-none border mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 ${
                healthScore > 80 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : healthScore > 50 
                  ? 'bg-orange-50 border-orange-200 text-orange-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                <div className="space-y-1">
                  <span className="text-[9px] font-extrabold uppercase font-mono tracking-widest block">System Diagnostics Status</span>
                  <p className="text-sm font-bold uppercase">
                    {healthScore > 80 
                      ? 'Low Leakage Risk — Systems are highly optimized' 
                      : healthScore > 50 
                      ? 'Moderate Operations Risk — Significant leakage points active' 
                      : 'Critical Danger — Immediate operational systems overhaul required'
                    }
                  </p>
                </div>
                <div className="text-xs font-extrabold uppercase tracking-widest">
                  Est. Leakage: {totalLeakagePercentage.toFixed(1)}% of Sales
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-extrabold text-sm text-navy uppercase tracking-wider border-b pb-2 mb-4">
                    Key Systems Gaps & Gated Action Plan
                  </h3>
                  
                  {uncheckedItems.length === 0 ? (
                    <div className="text-center py-6 border border-dashed border-green-200 bg-green-50/5 text-green-700 text-sm font-semibold rounded-none">
                      🎉 Operations are fully optimized. Zero major leakage gaps detected.
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {uncheckedItems.map((item, idx) => (
                        <div key={item.id} className="flex gap-3 text-sm border-l-2 border-red-500 pl-4 py-1">
                          <span className="font-mono text-xs text-red-500 font-bold shrink-0 mt-0.5">GAP #{idx + 1}</span>
                          <div className="space-y-1 text-left">
                            <p className="font-bold text-navy leading-snug">{item.question}</p>
                            <p className="text-xs text-text-secondary leading-relaxed">
                              <span className="text-red-500 font-extrabold">Leakage Risk:</span> ~{item.leakageImpact}% of turnover. 
                              <span className="text-navy font-extrabold ml-2">Remediation:</span> {item.tip}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Abraham Recommendations signature block */}
                <div className="pt-8 border-t border-border-light flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-8">
                  <div className="max-w-md text-xs text-text-secondary font-semibold leading-relaxed">
                    <p className="font-extrabold text-navy mb-1 uppercase tracking-wider">Consulting Recommendation</p>
                    <p>
                      Every identified gap represents a leak in profit margins (primarily in diamond costings, aged stock melt losses, and GST claim delays). Implementing integrated custom workflows can recover major leakages within a 90-day rollout.
                    </p>
                  </div>

                  <div className="text-left sm:text-right select-none">
                    <p className="font-serif italic text-2xl text-navy">Abraham Sayed</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-1">
                      Systems Architect & Retail Advisor
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
