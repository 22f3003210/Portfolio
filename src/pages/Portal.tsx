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
  TrendingDown,
  Users,
  Gem,
  Database,
  MapPin,
  UserCheck,
  DollarSign,
  Activity,
  Network,
  Brain,
  Compass,
  HelpCircle
} from 'lucide-react';
import { workflows } from '../data/workflows';
import { usePortal } from '../context/PortalContext';
import { 
  processDomains, 
  retailProcesses 
} from '../data/governance';

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

// Intelligence Engines Questions Interface
export interface EngineQuestions {
  executive: string[];
  diagnostic: string[];
  predictive: string[];
  strategic: string[];
}

export interface EngineSubCategory {
  title: string;
  questions: EngineQuestions;
}

export interface IntelligenceEngine {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  iconName: string;
  hasSubCategories: boolean;
  subcategories?: EngineSubCategory[];
  questions?: EngineQuestions;
  isExecutiveDecision?: boolean;
  decisionQuestions?: string[];
}

export const intelligenceEngines: IntelligenceEngine[] = [
  {
    id: 'sales',
    name: 'Sales Intelligence Engine',
    subtitle: 'Revenue & Volume Dynamics',
    description: 'Deconstructs revenue growth drivers, pricing versus volume optimization, and showroom category dependencies.',
    iconName: 'TrendingUp',
    hasSubCategories: false,
    questions: {
      executive: [
        'Why did revenue grow this month?',
        'Why did revenue decline despite higher footfall?',
        'Which stores are driving growth?',
        'Which stores are becoming liabilities?',
        'Are we growing because of volume or pricing?',
        'Which revenue streams are becoming dependent on a few categories?'
      ],
      diagnostic: [
        'Which products contributed most to revenue growth?',
        'Which categories experienced margin erosion?',
        'Did discounting drive growth or genuine demand?',
        'Which sales channels are underperforming?'
      ],
      predictive: [
        'Which stores are likely to miss targets next month?',
        'Which categories will contribute most next quarter?',
        'What revenue can be expected during upcoming festivals?'
      ],
      strategic: [
        'Should we expand premium offerings?',
        'Which category deserves higher investment?',
        'Which categories should be phased out?'
      ]
    }
  },
  {
    id: 'customer',
    name: 'Customer Intelligence Engine',
    subtitle: 'Acquisition & Retention Systems',
    description: 'Tracks campaign ROI, channel value creation, drop-off diagnostics, and 90-day churn predictions.',
    iconName: 'Users',
    hasSubCategories: true,
    subcategories: [
      {
        title: 'Customer Acquisition',
        questions: {
          executive: [
            'Which acquisition channels create the most valuable customers?',
            'Which marketing campaigns generate customers but not profits?',
            'Which lead sources generate repeat buyers?'
          ],
          diagnostic: [
            'Why is lead conversion declining?',
            'Which source produces the highest drop-off?',
            'Which regions have weak acquisition efficiency?'
          ],
          predictive: [
            'Which customer segments will grow fastest?',
            'Which customer groups show high churn probability?'
          ],
          strategic: [
            'Should acquisition budgets be reallocated?',
            'Which customer segments deserve dedicated programs?'
          ]
        }
      },
      {
        title: 'Customer Retention',
        questions: {
          executive: [
            'Why are customers not returning?',
            'Which customer segments are leaving?',
            'Which stores retain customers best?'
          ],
          diagnostic: [
            'Are complaints impacting retention?',
            'Are service experiences reducing repeat purchases?',
            'Are competitors attracting our customers?'
          ],
          predictive: [
            'Which customers are likely to churn within 90 days?',
            'Which customers are likely to become VIP customers?'
          ],
          strategic: [
            'Which retention programs generate the highest ROI?',
            'Which customers should receive white-glove treatment?'
          ]
        }
      }
    ]
  },
  {
    id: 'bridal',
    name: 'Bridal Intelligence Engine',
    subtitle: 'High-Value Conversions',
    description: 'Monitors regional market shares, bridal quote conversion paths, and design failures (obsessed by Tanishq, Kalyan, Malabar).',
    iconName: 'Gem',
    hasSubCategories: false,
    questions: {
      executive: [
        'Which stores dominate bridal business?',
        'What percentage of annual revenue comes from bridal customers?',
        'Which regions are losing bridal market share?'
      ],
      diagnostic: [
        'At which stage do bridal customers drop?',
        'Why are quotations not converting?',
        'Which designs fail most often during selection?'
      ],
      predictive: [
        'Which inquiries have the highest bridal conversion probability?',
        'Which families have highest lifetime value potential?'
      ],
      strategic: [
        'Should dedicated bridal lounges be introduced?',
        'Which bridal categories deserve inventory expansion?'
      ]
    }
  },
  {
    id: 'inventory',
    name: 'Inventory Capital Engine',
    subtitle: 'Capital Productivity & Merchandise',
    description: 'Tracks trapped capital, inventory aging, collection lifecycle viability, and dead-stock trends.',
    iconName: 'Database',
    hasSubCategories: true,
    subcategories: [
      {
        title: 'Inventory Productivity',
        questions: {
          executive: [
            'How much capital is trapped in inventory?',
            'Which inventory generates poor returns?',
            'Which categories consume capital without producing profits?'
          ],
          diagnostic: [
            'Why is inventory ageing increasing?',
            'Which stores are hoarding inventory?',
            'Which products repeatedly fail to move?'
          ],
          predictive: [
            'Which SKUs are likely to become dead stock?',
            'Which categories will face stock-outs?'
          ],
          strategic: [
            'Should inventory be redistributed?',
            'Which collections should be liquidated?'
          ]
        }
      },
      {
        title: 'Merchandise Intelligence',
        questions: {
          executive: [
            'Which collections define brand success?',
            'Which collections are losing relevance?'
          ],
          diagnostic: [
            'Why are certain collections underperforming?',
            'Are designs outdated or overpriced?'
          ],
          predictive: [
            'Which trends will dominate next season?',
            'Which collections will lose demand?'
          ],
          strategic: [
            'Which collections deserve larger investments?',
            'Which collections should be retired?'
          ]
        }
      }
    ]
  },
  {
    id: 'store',
    name: 'Store Performance Engine',
    subtitle: 'Showroom Value Creation',
    description: 'Pinpoints stores creating vs. destroying enterprise value, footfall conversion disconnects, and expansion planning.',
    iconName: 'MapPin',
    hasSubCategories: false,
    questions: {
      executive: [
        'Which stores are creating enterprise value?',
        'Which stores are destroying profitability?',
        'Which stores deserve expansion?'
      ],
      diagnostic: [
        'Why is conversion lower in specific stores?',
        'Why is footfall high but sales low?',
        'Why are some managers outperforming others?'
      ],
      predictive: [
        'Which stores are likely to miss targets?',
        'Which stores are likely to exceed expectations?'
      ],
      strategic: [
        'Should a store be relocated?',
        'Should a store be expanded?',
        'Should a store be shut down?'
      ]
    }
  },
  {
    id: 'employee',
    name: 'Employee Value Engine',
    subtitle: 'Human Capital ROI & Attrition',
    description: 'Identifies top profit creators, conversion slowdowns, coaching needs, and sales staff attrition risks.',
    iconName: 'UserCheck',
    hasSubCategories: false,
    questions: {
      executive: [
        'Who creates the most value?',
        'Who generates the highest profitability?',
        'Who retains customers best?'
      ],
      diagnostic: [
        'Why is a salesperson\'s conversion declining?',
        'Why are follow-ups being missed?',
        'Why are complaints increasing?'
      ],
      predictive: [
        'Who is at risk of attrition?',
        'Who has leadership potential?'
      ],
      strategic: [
        'Who should be promoted?',
        'Who requires coaching?',
        'Where should incentives be focused?'
      ]
    }
  },
  {
    id: 'financial',
    name: 'Financial Intelligence Engine',
    subtitle: 'Margin & EBITDA Analytics',
    description: 'Audits business unit profit contribution, cost growth velocities, and projected working capital risks.',
    iconName: 'DollarSign',
    hasSubCategories: false,
    questions: {
      executive: [
        'Which business units generate profit?',
        'Which business units consume profit?',
        'Are margins improving or deteriorating?'
      ],
      diagnostic: [
        'Why did profitability decline despite revenue growth?',
        'Which costs are growing faster than sales?'
      ],
      predictive: [
        'What will EBITDA look like next quarter?',
        'Will working capital become a risk?'
      ],
      strategic: [
        'Where should capital be invested?',
        'Which projects should be prioritized?'
      ]
    }
  },
  {
    id: 'crm',
    name: 'CRM & Lead Management Engine',
    subtitle: 'Funnel Integrity & Conversions',
    description: 'Tracks high-yield lead sources, follow-up latencies, lost opportunities, and conversion probabilities.',
    iconName: 'Activity',
    hasSubCategories: false,
    questions: {
      executive: [
        'Which lead sources create the highest revenue?',
        'Which lead sources create the highest profitability?',
        'Which channels deserve larger budgets?'
      ],
      diagnostic: [
        'Why are leads not converting?',
        'Why are follow-ups delayed?',
        'Why are opportunities being lost?'
      ],
      predictive: [
        'Which leads have highest conversion probability?',
        'Which opportunities are at risk?'
      ],
      strategic: [
        'Should lead allocation rules change?',
        'Should certain campaigns be discontinued?'
      ]
    }
  },
  {
    id: 'supplychain',
    name: 'Supply Chain Intelligence Engine',
    subtitle: 'Supplier Risk & Lead Times',
    description: 'Evaluates supplier competitive advantages, quality issues, delay trends, and procurement shortages.',
    iconName: 'Network',
    hasSubCategories: false,
    questions: {
      executive: [
        'Which suppliers create competitive advantage?',
        'Which suppliers create operational risk?'
      ],
      diagnostic: [
        'Why are delivery delays increasing?',
        'Why are quality issues increasing?'
      ],
      predictive: [
        'Which suppliers are likely to fail service levels?',
        'Which procurement categories face shortages?'
      ],
      strategic: [
        'Should supplier relationships be diversified?',
        'Which suppliers deserve strategic partnerships?'
      ]
    }
  },
  {
    id: 'executive',
    name: 'Executive Decision Intelligence',
    subtitle: 'The Boardroom Layer',
    description: 'Consolidates enterprise decision support to answer multi-dimensional, high-value boardroom questions.',
    iconName: 'Brain',
    hasSubCategories: false,
    isExecutiveDecision: true,
    decisionQuestions: [
      'Why did South Zone bridal revenue decline despite higher footfall?',
      'Why are premium diamond collections losing momentum?',
      'Which ₹10 crore inventory investment will generate the highest return?',
      'Which stores will become top performers next year?',
      'Which customer segments will drive the next phase of growth?',
      'Which strategic initiative will create maximum EBITDA impact?',
      'If marketing spend increases by 20%, where should it be allocated?',
      'If inventory investment is reduced by ₹50 crore, what is the impact?',
      'Which single operational issue is costing the company the most money today?',
      'What are the top 10 risks to next quarter\'s revenue target?'
    ]
  }
];



const renderEngineIcon = (iconName: string) => {
  switch (iconName) {
    case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
    case 'Users': return <Users className="w-5 h-5" />;
    case 'Gem': return <Gem className="w-5 h-5" />;
    case 'Database': return <Database className="w-5 h-5" />;
    case 'MapPin': return <MapPin className="w-5 h-5" />;
    case 'UserCheck': return <UserCheck className="w-5 h-5" />;
    case 'DollarSign': return <DollarSign className="w-5 h-5" />;
    case 'Activity': return <Activity className="w-5 h-5" />;
    case 'Network': return <Network className="w-5 h-5" />;
    case 'Brain': return <Brain className="w-5 h-5" />;
    default: return <HelpCircle className="w-5 h-5" />;
  }
};

// Helper to hash string to SHA-256 hex
async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function Portal() {
  const { isPortalAuthenticated, setPortalAuthenticated, hidePortal, isPortalVisible } = usePortal();
  const isAuthenticated = isPortalAuthenticated;
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'workflows' | 'kpis' | 'checklist' | 'report'>('workflows');

  // Redirect to home if portal visibility is off and not authenticated (e.g. on page refresh)
  useEffect(() => {
    if (!isPortalVisible && !isPortalAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isPortalVisible, isPortalAuthenticated, navigate]);

  // Checklist State — kept in localStorage so audit progress persists across sessions
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
    retailProcesses.forEach(p => {
      p.stages.forEach(s => {
        s.checklistItems.forEach(item => {
          defaults[item.id] = true;
        });
      });
    });
    return defaults;
  });

  // Store Turnover Input (in ₹ Crores)
  const [turnover, setTurnover] = useState<number>(50);

  // Gated KPI Engine States
  const [kpisMode, setKpisMode] = useState<'decision' | 'ledger'>('decision');
  const [activeEngineId, setActiveEngineId] = useState<string>('sales');
  const [activeSubcatIndex, setActiveSubcatIndex] = useState<number>(0);

  // Gated Process Governance Explorer States
  const [activeDomainId, setActiveDomainId] = useState<string>('customer-sales');
  const [activeProcessId, setActiveProcessId] = useState<number>(1);
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);

  // Save Checklist state
  useEffect(() => {
    localStorage.setItem('portal_checklist_state', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputHash = await sha256(passcode);
    const correctHash = '1824b346dfd511433da2bc62b5e59b98a2e635b132fc71df1c1d9eccd5d1fad7'; // Dhonijohny
    
    if (inputHash === correctHash) {
      setPortalAuthenticated(true);
      setAuthError('');
      setPasscode(''); // Clear immediately to wipe from DOM/React state
    } else {
      setAuthError('Incorrect client passcode. Access denied.');
      setPasscode(''); // Clear immediately
    }
  };


  const handleLogout = () => {
    hidePortal(); // clears both portal visibility and auth in one call
    navigate('/');
  };

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculations for Health Diagnostic
  const allGovernanceChecklistItems = retailProcesses.flatMap(p => 
    p.stages.flatMap(s => s.checklistItems)
  );

  const totalAuditPoints = allGovernanceChecklistItems.length;
  const compliantPointsCount = allGovernanceChecklistItems.filter(item => checkedItems[item.id]).length;
  const nonCompliantPointsCount = totalAuditPoints - compliantPointsCount;
  const healthScore = totalAuditPoints > 0 ? Math.round((compliantPointsCount / totalAuditPoints) * 100) : 100;

  // Calculate estimated leakage based on unchecked items
  const uncheckedItems = allGovernanceChecklistItems.filter(item => !checkedItems[item.id]);
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
      <div className="min-h-[85vh] pt-28 pb-16 bg-[#f8fafc] text-slate-900 flex items-center justify-center p-6">
        <div className="bg-white border border-slate-200 p-8 md:p-10 w-full max-w-md shadow-2xl text-left rounded-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.02] rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest font-mono">Restricted Access</span>
              <h2 className="font-extrabold text-xl uppercase tracking-wider text-slate-900">Client Systems Vault</h2>
            </div>
          </div>
          
          <p className="text-xs text-slate-600 mb-6 leading-relaxed font-semibold">
            Please enter your Client Passcode to access premium retail KPIs, interactive operational audit checklists, and automated diagnostic leakage report generation.
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
              <div className="text-red-600 text-xs font-bold flex items-center gap-1.5 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{authError}</span>
              </div>
            )}
            <button 
              type="submit"
              className="w-full py-3 bg-blue-700 text-white hover:bg-blue-800 font-extrabold text-xs uppercase tracking-widest shadow-md transition-colors rounded-none"
            >
              Unlock Vault
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
          <div className="animate-fadeIn space-y-8">
            {/* Header Compare Block: Fail vs World-class Executive System */}
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-none shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-1">THE GATES OF INTELLIGENCE</span>
                  <h3 className="text-xl font-extrabold text-navy uppercase tracking-tight">Executive Decision System vs. Traditional Dashboard</h3>
                </div>
                <div className="flex bg-slate-100 p-1 border border-slate-200 rounded-none shrink-0 self-start md:self-auto">
                  <button
                    onClick={() => setKpisMode('decision')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${
                      kpisMode === 'decision'
                        ? 'bg-navy text-white shadow-sm font-extrabold'
                        : 'text-text-secondary hover:text-navy'
                    }`}
                  >
                    Boardroom Decisions Board
                  </button>
                  <button
                    onClick={() => setKpisMode('ledger')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${
                      kpisMode === 'ledger'
                        ? 'bg-navy text-white shadow-sm font-extrabold'
                        : 'text-text-secondary hover:text-navy'
                    }`}
                  >
                    Core Metrics Ledger
                  </button>
                </div>
              </div>

              {/* McKinsey Style Contrast Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 border border-slate-200 p-5 md:p-6 rounded-none">
                <div className="space-y-4 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-extrabold">❌</span>
                    <h4 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider">Most Showroom Dashboards Fail</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-semibold">
                    Most dashboards answer only backward-looking operational questions:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-500 pl-5 list-disc">
                    <li>What happened to sales this month?</li>
                    <li>Which items sold out?</li>
                    <li>What is our current ledger inventory weight?</li>
                  </ul>
                </div>
                <div className="space-y-4 md:pl-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8CC63F] font-extrabold">✅</span>
                    <h4 className="font-extrabold text-navy text-sm uppercase tracking-wider">World-Class Executive Systems Answer:</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white border border-slate-200/80 p-2.5 shadow-sm">
                      <span className="text-[#8CC63F] font-black mr-1">✅</span>
                      <span className="font-extrabold text-navy">Why did it happen?</span>
                      <p className="text-[10px] text-text-muted mt-1 leading-normal">Deep causation tracking.</p>
                    </div>
                    <div className="bg-white border border-slate-200/80 p-2.5 shadow-sm">
                      <span className="text-[#8CC63F] font-black mr-1">✅</span>
                      <span className="font-extrabold text-navy">What caused it?</span>
                      <p className="text-[10px] text-text-muted mt-1 leading-normal">Root trigger identification.</p>
                    </div>
                    <div className="bg-white border border-slate-200/80 p-2.5 shadow-sm">
                      <span className="text-[#8CC63F] font-black mr-1">✅</span>
                      <span className="font-extrabold text-navy">What will happen next?</span>
                      <p className="text-[10px] text-text-muted mt-1 leading-normal">Predictive outlook modeling.</p>
                    </div>
                    <div className="bg-white border border-slate-200/80 p-2.5 shadow-sm">
                      <span className="text-[#8CC63F] font-black mr-1">✅</span>
                      <span className="font-extrabold text-navy">What action should we take?</span>
                      <p className="text-[10px] text-text-muted mt-1 leading-normal">Strategic boardroom advice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-view switcher */}
            {kpisMode === 'ledger' ? (
              <div className="animate-fadeIn space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold text-navy uppercase tracking-tight">Showroom KPIs & Diagnostics Ledger</h3>
                  <p className="text-xs text-text-secondary font-semibold mt-1">
                    Comprehensive reference of 13 critical metrics required to manage a modern jewellery retail enterprise.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {kpisList.map((kpi) => (
                    <div 
                      key={kpi.id} 
                      className="bg-white border border-slate-200 p-6 rounded-none flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-navy/20 transition-all shadow-sm"
                    >
                      <div className="space-y-1.5 max-w-[65%] font-semibold">
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-bold uppercase bg-navy/5 text-navy border border-navy/15 px-2 py-0.5 rounded-none font-mono">
                            {kpi.department}
                          </span>
                        </div>
                        <h4 className="text-base font-extrabold text-navy leading-snug">{kpi.name}</h4>
                        <div className="text-xs text-text-secondary leading-relaxed font-semibold">
                          <span className="text-navy font-bold uppercase tracking-wider text-[10px] block md:inline md:mr-1">Formula:</span> 
                          <code className="font-mono text-navy bg-navy/5 px-2 py-0.5 border border-navy/15 text-[10px] break-all inline-block mt-1 md:mt-0">{kpi.formula}</code>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed pt-1">{kpi.impact}</p>
                      </div>
                      
                      <div className="md:border-l border-slate-200 md:pl-6 pt-3 md:pt-0 flex flex-col gap-2 min-w-[30%]">
                        <div>
                          <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">Target Benchmark</span>
                          <span className="text-xs font-extrabold text-[#8CC63F] uppercase">{kpi.benchmark}</span>
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
            ) : (
              // Boardroom Decisions Board view
              <div className="animate-fadeIn space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold text-navy uppercase tracking-tight">Showroom Intelligence Engines</h3>
                  <p className="text-xs text-text-secondary font-semibold mt-1">
                    Verbatim executive systems framework covering 10 key strategic domains with decision-support questions.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Sidebar Pane: 10 Engines */}
                  <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-hide">
                    {intelligenceEngines.map((engine) => {
                      const isSelected = activeEngineId === engine.id;
                      return (
                        <button
                          key={engine.id}
                          onClick={() => {
                            setActiveEngineId(engine.id);
                            setActiveSubcatIndex(0);
                          }}
                          className={`w-56 lg:w-full p-4 border rounded-none text-left transition-all shrink-0 flex items-start gap-3 select-none ${
                            isSelected
                              ? 'bg-navy border-navy text-white shadow-md'
                              : 'bg-white border-slate-200 text-slate-900 hover:border-navy/40 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`p-2 rounded-none ${isSelected ? 'bg-white/10 text-white' : 'bg-blue-50 text-navy'} shrink-0`}>
                            {renderEngineIcon(engine.iconName)}
                          </div>
                          <div className="min-w-0">
                            <h4 className={`text-xs font-extrabold uppercase tracking-wide truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                              {engine.name}
                            </h4>
                            <p className={`text-[10px] mt-0.5 truncate ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                              {engine.subtitle}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Detail Pane */}
                  <div className="lg:col-span-8 bg-white border border-slate-200 p-6 md:p-8 rounded-none shadow-sm space-y-6">
                    {/* Selected Engine Header */}
                    {(() => {
                      const engine = intelligenceEngines.find(e => e.id === activeEngineId) || intelligenceEngines[0];
                      
                      // Check for Bridal Engine note
                      const isBridal = engine.id === 'bridal';

                      return (
                        <div className="space-y-6">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-3 bg-blue-50 text-navy border border-blue-100 rounded-none shrink-0">
                                {renderEngineIcon(engine.iconName)}
                              </div>
                              <div>
                                <h4 className="text-base font-extrabold text-navy uppercase tracking-wide">{engine.name}</h4>
                                <p className="text-xs text-text-secondary font-semibold">{engine.subtitle}</p>
                              </div>
                            </div>
                            {isBridal && (
                              <span className="text-[9px] font-black bg-gold/15 text-gold-dark border border-gold/30 px-2 py-1 rounded-none font-mono">
                                BRAND OBSESSION
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-text-secondary leading-relaxed font-semibold italic">
                            {engine.description}
                          </p>

                          {/* Bridal Engine context warning */}
                          {isBridal && (
                            <div className="bg-slate-50 border-l-2 border-gold p-3 text-[11px] text-text-secondary leading-relaxed">
                              💡 <strong>Industry Benchmark:</strong> Tanishq, Malabar Gold, Kalyan, and Joyalukkas all obsess over this specific bridal workflow to capture large-ticket family purchase events.
                            </div>
                          )}

                          {/* Render Subcategories selectors if hasSubcategories */}
                          {engine.hasSubCategories && engine.subcategories && (
                            <div className="flex border-b border-slate-200 pb-0 gap-1 overflow-x-auto">
                              {engine.subcategories.map((sub, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setActiveSubcatIndex(idx)}
                                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                                    activeSubcatIndex === idx
                                      ? 'border-gold text-navy font-black'
                                      : 'border-transparent text-text-secondary hover:text-navy'
                                  }`}
                                >
                                  {sub.title}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Render Questions Block */}
                          {engine.isExecutiveDecision ? (
                            // Executive Decision Intelligence View (direct list of 10 board questions)
                            <div className="space-y-4">
                              <div className="bg-slate-50 border border-slate-200 p-4 rounded-none space-y-1">
                                <span className="text-[10px] font-bold text-gold uppercase tracking-wider block font-mono">Enterprise Advisory Layer</span>
                                <h5 className="text-xs font-extrabold uppercase text-slate-800">Boardroom Agenda Questions</h5>
                                <p className="text-[11px] text-text-muted leading-relaxed">
                                  This final layer is designed to answer complex cross-functional questions that dictate capital allocation and corporate survival.
                                </p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {engine.decisionQuestions?.map((q, idx) => (
                                  <div key={idx} className="p-4 bg-white border border-slate-200 flex gap-3 shadow-xs hover:border-navy/30 transition-all">
                                    <span className="font-mono text-xs text-navy font-extrabold shrink-0">#{idx + 1}</span>
                                    <p className="text-xs font-bold text-slate-900 leading-snug">{q}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            // 4 Pillar Grid questions View
                            (() => {
                              const activeQuestions = engine.hasSubCategories && engine.subcategories
                                ? engine.subcategories[activeSubcatIndex]?.questions
                                : engine.questions;

                              if (!activeQuestions) return null;

                              const pillars = [
                                {
                                  title: 'Executive Questions',
                                  color: 'border-blue-200 bg-blue-50/10 text-blue-700',
                                  badge: 'bg-blue-50 text-blue-800 border-blue-200',
                                  icon: <Brain className="w-3.5 h-3.5" />,
                                  list: activeQuestions.executive
                                },
                                {
                                  title: 'Diagnostic Questions',
                                  color: 'border-indigo-200 bg-indigo-50/10 text-indigo-700',
                                  badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
                                  icon: <HelpCircle className="w-3.5 h-3.5" />,
                                  list: activeQuestions.diagnostic
                                },
                                {
                                  title: 'Predictive Questions',
                                  color: 'border-purple-200 bg-purple-50/10 text-purple-700',
                                  badge: 'bg-purple-50 text-purple-800 border-purple-200',
                                  icon: <TrendingUp className="w-3.5 h-3.5" />,
                                  list: activeQuestions.predictive
                                },
                                {
                                  title: 'Strategic Questions',
                                  color: 'border-emerald-200 bg-emerald-50/10 text-emerald-700',
                                  badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                                  icon: <Compass className="w-3.5 h-3.5" />,
                                  list: activeQuestions.strategic
                                }
                              ];

                              return (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {pillars.map((pillar, pIdx) => (
                                    <div key={pIdx} className={`border p-5 rounded-none flex flex-col space-y-3 shadow-xs ${pillar.color}`}>
                                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                        <div className="flex items-center gap-1.5">
                                          {pillar.icon}
                                          <h5 className="text-xs font-black uppercase tracking-wider text-slate-800">
                                            {pillar.title}
                                          </h5>
                                        </div>
                                        <span className="text-[9px] font-mono font-bold bg-white/60 px-1.5 py-0.5 rounded-none text-slate-600 border border-slate-200">
                                          {pillar.list.length} Items
                                        </span>
                                      </div>
                                      <ul className="flex-1 space-y-3.5">
                                        {pillar.list.map((question, qIdx) => (
                                          <li key={qIdx} className="flex gap-2.5 text-xs">
                                            <span className="text-navy font-bold mt-0.5 shrink-0">▸</span>
                                            <span className="font-bold text-slate-900 leading-snug">{question}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              );
                            })()
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Business Audit Checklist */}
        {activeTab === 'checklist' && (() => {
          const activeDomainProcesses = retailProcesses.filter(p => p.domain === activeDomainId);
          const activeProcess = activeDomainProcesses.find(p => p.id === activeProcessId) || activeDomainProcesses[0] || retailProcesses[0];

          return (
            <div className="animate-fadeIn space-y-8">
              {/* Header Scorecard Banner */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-navy text-white p-6 rounded-none shadow-md">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-gold uppercase tracking-widest font-mono">Process Governance Protocol</span>
                  <h3 className="text-lg font-extrabold uppercase">Retail Process Governance & Audit Explorer</h3>
                  <p className="text-xs text-white/70 font-semibold leading-relaxed max-w-xl">
                    Standardized retail operating model spanning 36 core processes. Check off the elements that are **currently active** to compute your compliance score.
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

              {/* Domain Switcher */}
              <div className="flex border-b border-slate-200 pb-0 gap-1 overflow-x-auto scrollbar-hide">
                {processDomains.map((domain) => (
                  <button
                    key={domain.id}
                    onClick={() => {
                      setActiveDomainId(domain.id);
                      // Default active process in this domain
                      const domainProcs = retailProcesses.filter(p => p.domain === domain.id);
                      if (domainProcs.length > 0) {
                        setActiveProcessId(domainProcs[0].id);
                      }
                      setActiveLayerIndex(0);
                    }}
                    className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                      activeDomainId === domain.id
                        ? 'border-gold text-navy font-black'
                        : 'border-transparent text-text-secondary hover:text-navy'
                    }`}
                  >
                    {domain.name}
                  </button>
                ))}
              </div>

              {/* Split Explorer Pane */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Side: Process Selector */}
                <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-hide">
                  {activeDomainProcesses.map((p) => {
                    const isSelected = activeProcessId === p.id;
                    // Count compliant items in this process
                    const procChecklist = p.stages.flatMap(s => s.checklistItems);
                    const procTotal = procChecklist.length;
                    const procCompliant = procChecklist.filter(item => checkedItems[item.id]).length;
                    const procPercentage = procTotal > 0 ? Math.round((procCompliant / procTotal) * 100) : 100;

                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActiveProcessId(p.id);
                          setActiveLayerIndex(0);
                        }}
                        className={`w-64 lg:w-full p-4 border rounded-none text-left transition-all shrink-0 flex flex-col gap-2 select-none ${
                          isSelected
                            ? 'bg-navy border-navy text-white shadow-md'
                            : 'bg-white border-slate-200 text-slate-900 hover:border-navy/40 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex justify-between items-start w-full">
                          <span className="font-mono text-[10px] font-black text-gold">PROCESS 0{p.id}</span>
                          <span className={`text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded-none border ${
                            isSelected 
                              ? 'bg-white/10 text-white border-white/20' 
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                            {procPercentage}% OK
                          </span>
                        </div>
                        <h4 className={`text-xs font-black uppercase tracking-wide truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {p.name}
                        </h4>
                      </button>
                    );
                  })}
                </div>

                {/* Right Side: Process Viewer & Checklist */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* The 5 Layers Card */}
                  <div className="bg-white border border-slate-200 p-6 rounded-none shadow-sm space-y-4">
                    <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                      <h4 className="text-sm font-black text-navy uppercase tracking-wider">
                        0{activeProcess.id}. {activeProcess.name} — Core Architecture
                      </h4>
                      <span className="text-[9px] font-mono font-bold bg-[#8bc34a]/15 text-[#8bc34a]-dark border border-[#8bc34a]/20 px-2 py-0.5 rounded-none">
                        5-LAYER MATRIX
                      </span>
                    </div>

                    {/* Layers Tab Selector */}
                    <div className="flex border-b border-slate-100 gap-1 overflow-x-auto pb-0">
                      {['Process Flow', 'Controls', 'Risks', 'KPIs', 'Executive Insights'].map((layerName, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveLayerIndex(idx)}
                          className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                            activeLayerIndex === idx
                              ? 'border-navy text-navy font-black'
                              : 'border-transparent text-text-secondary hover:text-navy'
                          }`}
                        >
                          Layer {idx + 1}: {layerName}
                        </button>
                      ))}
                    </div>

                    {/* Layer Content */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-none text-xs min-h-[120px] flex flex-col justify-center">
                      {activeLayerIndex === 0 && (
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono font-black text-navy uppercase tracking-wider block">Visual Process Flow (What Happens)</span>
                          <div className="flex flex-wrap items-center gap-2 text-slate-800 font-extrabold py-2">
                            {activeProcess.layers.flow.split('→').map((step, sIdx, arr) => (
                              <div key={sIdx} className="flex items-center gap-2">
                                <span className="bg-white border border-slate-200 px-2.5 py-1.5 shadow-xs rounded-none">
                                  {step.trim()}
                                </span>
                                {sIdx < arr.length - 1 && <span className="text-[#8bc34a] font-bold">➔</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeLayerIndex === 1 && (
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono font-black text-navy uppercase tracking-wider block">Standardized Controls (What Should Happen)</span>
                          <p className="text-slate-700 leading-relaxed font-semibold">
                            {activeProcess.layers.controls}
                          </p>
                        </div>
                      )}

                      {activeLayerIndex === 2 && (
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono font-black text-red-500 uppercase tracking-wider block">Operation Risks (What Can Go Wrong)</span>
                          <ul className="space-y-1.5 pl-4 list-disc text-slate-700 font-medium">
                            {activeProcess.layers.risks.map((risk, rIdx) => (
                              <li key={rIdx} className="leading-relaxed">
                                <strong className="text-red-600">Risk #{rIdx + 1}:</strong> {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeLayerIndex === 3 && (
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono font-black text-blue-600 uppercase tracking-wider block">Process KPIs (How Do We Measure It)</span>
                          <ul className="space-y-1.5 pl-4 list-disc text-slate-700 font-semibold">
                            {activeProcess.layers.kpis.map((kpi, kIdx) => (
                              <li key={kIdx} className="leading-relaxed">
                                {kpi}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeLayerIndex === 4 && (
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono font-black text-gold-dark uppercase tracking-wider block">Executive Insights (Advisory Decisions)</span>
                          <ul className="space-y-1.5 pl-4 list-disc text-slate-700 font-semibold">
                            {activeProcess.layers.insights.map((insight, iIdx) => (
                              <li key={iIdx} className="leading-relaxed text-navy">
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Stage-by-Stage Control Checklist */}
                  <div className="bg-white border border-slate-200 p-6 rounded-none shadow-sm space-y-6">
                    <div>
                      <h4 className="text-sm font-black text-navy uppercase tracking-wider">
                        Operational Audit Protocol — Stage-by-Stage Governance
                      </h4>
                      <p className="text-[10px] text-text-muted mt-1 font-medium">
                        Validate standard controls across each operational stage. Unchecked items indicate active leakage gaps.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {activeProcess.stages.map((stage) => (
                        <div key={stage.number} className="border border-slate-100 p-4 rounded-none bg-slate-50/50 space-y-3 text-left">
                          {/* Stage Header */}
                          <div className="border-b border-slate-100 pb-2 flex justify-between items-center">
                            <div>
                              <span className="text-[9px] font-mono font-black text-gold uppercase tracking-wider block">Stage 0{stage.number}</span>
                              <h5 className="text-xs font-black text-slate-800 uppercase">{stage.title}</h5>
                            </div>
                            <span className="text-[8px] font-mono font-bold bg-navy/5 text-navy border border-navy/10 px-2 py-0.5 rounded-none">
                              {stage.controlArea}
                            </span>
                          </div>

                          {/* Checklist items */}
                          <div className="divide-y divide-slate-100">
                            {stage.checklistItems.map((item) => {
                              const isChecked = checkedItems[item.id];
                              return (
                                <div
                                  key={item.id}
                                  onClick={() => toggleCheck(item.id)}
                                  className="py-3 flex items-start gap-3.5 cursor-pointer select-none transition-colors hover:bg-slate-100/50"
                                >
                                  <div className="mt-0.5 shrink-0">
                                    {isChecked ? (
                                      <CheckCircle2 className="w-4.5 h-4.5 text-green-600" />
                                    ) : (
                                      <XCircle className="w-4.5 h-4.5 text-red-500" />
                                    )}
                                  </div>
                                  <div className="flex-1 space-y-0.5">
                                    <p className="text-xs font-bold text-slate-800 leading-snug">
                                      {item.text}
                                    </p>
                                    <p className="text-[10px] text-text-secondary font-medium">
                                      💡 {item.tip}
                                    </p>
                                  </div>
                                  <div className="text-right shrink-0 hidden sm:block">
                                    <span className={`text-[9.5px] font-mono font-bold ${isChecked ? 'text-green-600' : 'text-red-500 animate-pulse'}`}>
                                      {isChecked ? 'None' : `~${item.leakageImpact}% Leak`}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          );
        })()}

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
                            <p className="font-bold text-navy leading-snug">{item.text}</p>
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
