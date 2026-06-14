import React, { useState, useEffect, useCallback } from 'react';
import {
  Calendar, Download, Send,
  X, Plus, Edit2, Trash2, Save, RefreshCw, LogOut,
  BarChart3, FileText, Activity, AlertTriangle, MessageSquare,
  FolderOpen, ClipboardList, TrendingUp, ShieldCheck,
  Building2, Briefcase, Globe, User, Star,
  CheckCircle, Circle, Menu, Settings, Search, ChevronRight
} from 'lucide-react';
import {
  verifyClientPasscode, getPortalClients, getPortalProjects,
  getPortalPhases, getPortalDailyLogs,
  getPortalAudits, getPortalRecommendations,
  getPortalDeliverables, getPortalComments,
  getPortalDecisions, createPortalDecision, updatePortalDecision, deletePortalDecision,
  createPortalClient, updatePortalClient, deletePortalClient,
  createPortalProject, updatePortalProject,
  createPortalDailyLog, updatePortalDailyLog, deletePortalDailyLog,
  createPortalAudit, updatePortalAudit, deletePortalAudit,
  createPortalRecommendation, updatePortalRecommendation, deletePortalRecommendation,
  createPortalDeliverable, updatePortalDeliverable, deletePortalDeliverable,
  createPortalComment
} from '../lib/supabase';
import type {
  PortalClient, PortalProject, PortalPhase,
  PortalDailyLog, PortalAudit,
  PortalRecommendation, PortalDeliverable, PortalComment, PortalDecision
} from '../lib/supabase';

const ADMIN_PASSCODE = 'scale123';

// ─── Badge Components ─────────────────────────────────────────────────────────

const StatusBadge = ({ status }: { status: string }) => {
  const map: Record<string, string> = {
    'Completed':   'bg-emerald-50 text-emerald-700 ring-emerald-200/50',
    'In Progress': 'bg-sky-50 text-[#0170B9] ring-sky-200/50',
    'Delayed':     'bg-rose-50 text-rose-700 ring-rose-200/50',
    'At Risk':     'bg-amber-50 text-amber-700 ring-amber-200/50',
    'Not Started': 'bg-slate-50 text-slate-500 ring-slate-200/50',
    'On Track':    'bg-emerald-50 text-emerald-700 ring-emerald-200/50',
    'Open':        'bg-[#0170B9]/5 text-[#0170B9] ring-[#0170B9]/10',
    'Resolved':    'bg-emerald-50 text-emerald-700 ring-emerald-200/50',
    'Closed':      'bg-slate-100 text-slate-500 ring-slate-200/50',
    'Accepted':    'bg-purple-50 text-purple-700 ring-purple-200/50',
    'Implemented': 'bg-emerald-50 text-emerald-700 ring-emerald-200/50',
    'Approved':    'bg-emerald-50 text-emerald-700 ring-emerald-200/50',
    'Pending':     'bg-amber-50 text-amber-700 ring-amber-200/50',
    'Rejected':    'bg-rose-50 text-rose-700 ring-rose-200/50',
    'Delivered':   'bg-emerald-50 text-emerald-700 ring-emerald-200/50',
    'Under Review':'bg-amber-50 text-amber-700 ring-amber-200/50',
    'Upcoming':    'bg-indigo-50 text-indigo-700 ring-indigo-200/50',
    'Active':      'bg-emerald-50 text-emerald-700 ring-emerald-200/50',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ring-1 ${map[status] || 'bg-slate-50 text-slate-500 ring-slate-200/50'}`}>
      {status}
    </span>
  );
};

const RAGDot = ({ rag }: { rag: string }) => {
  const map: Record<string, string> = { Green: 'bg-emerald-500 shadow-emerald-500/20', Amber: 'bg-amber-400 shadow-amber-400/20', Red: 'bg-rose-500 shadow-rose-500/20' };
  const label: Record<string, string> = { Green: 'On Track', Amber: 'At Risk', Red: 'Delayed' };
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
      <span className={`w-2.5 h-2.5 rounded-full ${map[rag] || 'bg-amber-400'} shadow-sm`} />
      {label[rag] || rag}
    </span>
  );
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const map: Record<string, string> = {
    'Critical': 'bg-rose-50 text-rose-700 ring-rose-200/50',
    'High':     'bg-orange-50 text-orange-700 ring-orange-200/50',
    'Medium':   'bg-amber-50 text-amber-700 ring-amber-200/50',
    'Low':      'bg-sky-50 text-sky-700 ring-sky-200/50',
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ring-1 ${map[priority] || 'bg-slate-50 text-slate-500'}`}>{priority}</span>;
};

// ─── Business Maturity Radar SVG Component ─────────────────────────────────────

type RadarChartProps = {
  currentScores: Record<string, number>;
  targetScores: Record<string, number>;
};

export function MaturityRadarChart({ currentScores, targetScores }: RadarChartProps) {
  const axes = [
    { key: 'operations', label: 'Operations' },
    { key: 'inventory', label: 'Inventory' },
    { key: 'data', label: 'Data' },
    { key: 'reporting', label: 'Reporting' },
    { key: 'accountability', label: 'Accountability' },
    { key: 'leadership', label: 'Leadership Visibility' },
    { key: 'process', label: 'Process Discipline' }
  ];

  const cx = 150;
  const cy = 155;
  const r = 95;
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];

  const getCoordinates = (index: number, score: number) => {
    const angle = index * (2 * Math.PI / 7) - Math.PI / 2; // Offset to start at top
    const x = cx + r * (score / 100) * Math.cos(angle);
    const y = cy + r * (score / 100) * Math.sin(angle);
    return { x, y };
  };

  const getRingPoints = (ringValue: number) => {
    return axes.map((_, idx) => {
      const { x, y } = getCoordinates(idx, ringValue * 100);
      return `${x},${y}`;
    }).join(' ');
  };

  const currentPoints = axes.map((axis, idx) => {
    const val = currentScores[axis.key] || 50;
    const { x, y } = getCoordinates(idx, val);
    return `${x},${y}`;
  }).join(' ');

  const targetPoints = axes.map((axis, idx) => {
    const val = targetScores[axis.key] || 80;
    const { x, y } = getCoordinates(idx, val);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-200/60 shadow-xs h-full">
      <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Business Maturity Radar</h4>
      <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
        <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
          {/* Concentric rings */}
          {rings.map((ring, ringIdx) => (
            <polygon
              key={ringIdx}
              points={getRingPoints(ring)}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1"
              strokeDasharray={ringIdx === 4 ? "none" : "3,3"}
            />
          ))}

          {/* Concentric grid percentage labels */}
          {rings.map((ring, ringIdx) => {
            const { x, y } = getCoordinates(0, ring * 100);
            return (
              <text
                key={ringIdx}
                x={x + 4}
                y={y + 3}
                fill="#94a3b8"
                fontSize="8"
                fontWeight="bold"
                className="select-none pointer-events-none"
              >
                {ring * 100}%
              </text>
            );
          })}

          {/* Axes */}
          {axes.map((_, idx) => {
            const outer = getCoordinates(idx, 100);
            return (
              <line
                key={idx}
                x1={cx}
                y1={cy}
                x2={outer.x}
                y2={outer.y}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            );
          })}

          {/* Target polygon */}
          <polygon
            points={targetPoints}
            fill="#8CC63F"
            fillOpacity="0.06"
            stroke="#8CC63F"
            strokeWidth="1.5"
            strokeDasharray="4,3"
          />

          {/* Current polygon */}
          <polygon
            points={currentPoints}
            fill="#0170B9"
            fillOpacity="0.16"
            stroke="#0170B9"
            strokeWidth="2.5"
          />

          {/* Markers */}
          {axes.map((axis, idx) => {
            const currVal = currentScores[axis.key] || 50;
            const targetVal = targetScores[axis.key] || 80;
            const currCoord = getCoordinates(idx, currVal);
            const targetCoord = getCoordinates(idx, targetVal);

            return (
              <g key={axis.key}>
                <circle
                  cx={targetCoord.x}
                  cy={targetCoord.y}
                  r="3.5"
                  fill="#8CC63F"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
                <circle
                  cx={currCoord.x}
                  cy={currCoord.y}
                  r="4.5"
                  fill="#0170B9"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}

          {/* Axis Labels */}
          {axes.map((axis, idx) => {
            const outer = getCoordinates(idx, 100);
            const angle = idx * (2 * Math.PI / 7) - Math.PI / 2;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            
            const textX = outer.x + cos * 15;
            const textY = outer.y + sin * 10 + 3;

            let textAnchor: "middle" | "start" | "end" = "middle";
            if (cos > 0.1) textAnchor = "start";
            else if (cos < -0.1) textAnchor = "end";

            return (
              <text
                key={axis.key}
                x={textX}
                y={textY}
                textAnchor={textAnchor}
                fill="#475569"
                fontSize="9"
                fontWeight="800"
                className="select-none pointer-events-none"
              >
                {axis.label}
              </text>
            );
          })}
        </svg>
      </div>
      <div className="flex gap-4 mt-3 text-[10px] font-black tracking-wider uppercase border-t border-slate-100 pt-3 w-full justify-center">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-[#0170B9]/20 border border-[#0170B9] rounded-sm" />
          <span className="text-slate-600">Current Maturity</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-[#8CC63F]/10 border border-[#8CC63F] border-dashed rounded-sm" />
          <span className="text-slate-600">Target Maturity</span>
        </div>
      </div>
    </div>
  );
}

// ─── Data Interfaces ──────────────────────────────────────────────────────────

interface ProjectMetrics {
  transformation_score: number;
  current_maturity: number;
  target_maturity: number;
  value_created: string;
  business_impact: string;
  critical_risks: number;
  next_milestone: string;
  recommendations_total: number;
  recommendations_implemented: number;
  radar_operations: number;
  radar_inventory: number;
  radar_data: number;
  radar_reporting: number;
  radar_accountability: number;
  radar_leadership: number;
  radar_process: number;
  target_operations: number;
  target_inventory: number;
  target_data: number;
  target_reporting: number;
  target_accountability: number;
  target_leadership: number;
  target_process: number;
}

interface ObservationItem {
  id: string;
  category: 'Sales' | 'Inventory' | 'Procurement' | 'Finance' | 'Operations' | 'HR';
  observation: string;
  type: 'Gap' | 'Opportunity' | 'Normal';
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
}

// ─── Shared UI Helpers & Modal ──────────────────────────────────────────────────

const labelCls   = "block text-[10.5px] font-black text-slate-450 uppercase tracking-widest mb-1.5";
const inputCls   = "w-full border border-slate-200 bg-slate-50/40 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 placeholder:text-slate-355 focus:outline-none focus:border-[#0170B9] focus:bg-white transition-all";
const saveBtnCls = "w-full py-3 bg-[#0170B9] hover:bg-[#005C9E] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs shadow-[#0170B9]/10 mt-2";

const Modal = ({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="w-4.5 h-4.5" />
          </button>
        </div>
        <div className="p-6 max-h-[calc(100vh-160px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

// ─── Main Command Center Component ─────────────────────────────────────────────

export function Tracker() {
  const [authStep, setAuthStep]             = useState<'login' | 'authenticated'>('login');
  const [userRole, setUserRole]             = useState<'admin' | 'client'>('client');
  const [passcode, setPasscode]             = useState('');
  const [loginError, setLoginError]         = useState('');
  const [loginLoading, setLoginLoading]     = useState(false);
  const [sidebarOpen, setSidebarOpen]       = useState(true);

  const [currentClient, setCurrentClient]   = useState<PortalClient | null>(null);
  const [currentProject, setCurrentProject] = useState<PortalProject | null>(null);

  const [clients, setClients]               = useState<PortalClient[]>([]);
  const [projects, setProjects]             = useState<PortalProject[]>([]);
  const [phases, setPhases]                 = useState<PortalPhase[]>([]);
  const [dailyLogs, setDailyLogs]           = useState<PortalDailyLog[]>([]);
  const [audits, setAudits]                 = useState<PortalAudit[]>([]);
  const [recommendations, setRecommendations] = useState<PortalRecommendation[]>([]);
  const [deliverables, setDeliverables]     = useState<PortalDeliverable[]>([]);
  const [comments, setComments]             = useState<PortalComment[]>([]);
  const [decisions, setDecisions]           = useState<PortalDecision[]>([]);
  const [loading, setLoading]               = useState(false);

  // Redesigned Client & Admin Command Center Tabs
  const [clientTab, setClientTab] = useState<'dashboard'|'roadmap'|'what-we-found'|'decisions'|'updates'|'audits'|'recommendations'|'documents'|'communication'>('dashboard');
  const [adminTab, setAdminTab]   = useState<'clients'|'projects'|'roadmap'|'what-we-found'|'decisions'|'logs'|'audits'|'recommendations'|'deliverables'|'health'>('clients');

  const [newComment, setNewComment]     = useState('');
  const [newCommentType, setNewCommentType] = useState('General');

  // Command Center Local Storage States
  const [projectMetrics, setProjectMetrics] = useState<ProjectMetrics | null>(null);
  const [observations, setObservations]     = useState<ObservationItem[]>([]);
  const [openCategory, setOpenCategory]     = useState<string | null>(null);

  // Form toggles
  const [showClientForm,  setShowClientForm]  = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showLogForm,     setShowLogForm]     = useState(false);
  const [showAuditForm,   setShowAuditForm]   = useState(false);
  const [showRecForm,     setShowRecForm]     = useState(false);
  const [showDelForm,     setShowDelForm]     = useState(false);
  const [showDecForm,     setShowDecForm]     = useState(false);
  const [showObsForm,     setShowObsForm]     = useState(false);
  const [editingItem,     setEditingItem]     = useState<any>(null);

  // Form input bindings
  const [obsCategory, setObsCategory]       = useState<'Sales' | 'Inventory' | 'Procurement' | 'Finance' | 'Operations' | 'HR'>('Inventory');
  const [obsText, setObsText]               = useState('');
  const [obsType, setObsType]               = useState<'Gap' | 'Opportunity' | 'Normal'>('Gap');
  const [obsRisk, setObsRisk]               = useState<'Critical' | 'High' | 'Medium' | 'Low'>('Medium');

  useEffect(() => {
    const role      = sessionStorage.getItem('portal_role') as 'admin'|'client'|null;
    const clientStr = sessionStorage.getItem('portal_client');
    const projStr   = sessionStorage.getItem('portal_project');
    if (role) {
      setUserRole(role);
      setAuthStep('authenticated');
      if (clientStr) setCurrentClient(JSON.parse(clientStr));
      if (projStr)   setCurrentProject(JSON.parse(projStr));
    }
  }, []);

  const getStoredMetrics = (projectId: string): ProjectMetrics => {
    const key = `project_metrics_${projectId}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try { return JSON.parse(stored); } catch {}
    }
    // Seed default values matching specific projects
    if (projectId === 'b1b2c3d4-0001-0001-0001-000000000001') { // Kalyan Jewellers
      return {
        transformation_score: 78, current_maturity: 54, target_maturity: 85,
        value_created: '₹18.4 Lakhs Identified', business_impact: '₹42 Lakhs', critical_risks: 2,
        next_milestone: 'System Design Controls', recommendations_total: 18, recommendations_implemented: 12,
        radar_operations: 60, radar_inventory: 42, radar_data: 50, radar_reporting: 55, radar_accountability: 45, radar_leadership: 65, radar_process: 60,
        target_operations: 85, target_inventory: 80, target_data: 85, target_reporting: 90, target_accountability: 85, target_leadership: 90, target_process: 85
      };
    }
    if (projectId === 'b1b2c3d4-0002-0002-0002-000000000002') { // Malabar
      return {
        transformation_score: 45, current_maturity: 35, target_maturity: 80,
        value_created: '₹8.5 Lakhs Identified', business_impact: '₹28 Lakhs', critical_risks: 4,
        next_milestone: 'Manufacturing Job Work Scrap Audit', recommendations_total: 12, recommendations_implemented: 4,
        radar_operations: 40, radar_inventory: 30, radar_data: 35, radar_reporting: 30, radar_accountability: 25, radar_leadership: 50, radar_process: 35,
        target_operations: 80, target_inventory: 75, target_data: 80, target_reporting: 85, target_accountability: 80, target_leadership: 85, target_process: 80
      };
    }
    if (projectId === 'b1b2c3d4-0003-0003-0003-000000000003') { // Reliance
      return {
        transformation_score: 88, current_maturity: 72, target_maturity: 95,
        value_created: '₹45.2 Lakhs Identified', business_impact: '₹95 Lakhs', critical_risks: 1,
        next_milestone: 'Multi-Store Loss Action Protocols Handover', recommendations_total: 22, recommendations_implemented: 18,
        radar_operations: 80, radar_inventory: 75, radar_data: 70, radar_reporting: 85, radar_accountability: 65, radar_leadership: 70, radar_process: 75,
        target_operations: 95, target_inventory: 90, target_data: 95, target_reporting: 95, target_accountability: 90, target_leadership: 95, target_process: 95
      };
    }
    return {
      transformation_score: 50, current_maturity: 40, target_maturity: 80,
      value_created: '₹10 Lakhs Identified', business_impact: '₹20 Lakhs', critical_risks: 0,
      next_milestone: 'Diagnostics Phase Handover', recommendations_total: 10, recommendations_implemented: 2,
      radar_operations: 50, radar_inventory: 40, radar_data: 50, radar_reporting: 40, radar_accountability: 30, radar_leadership: 50, radar_process: 45,
      target_operations: 80, target_inventory: 80, target_data: 80, target_reporting: 80, target_accountability: 80, target_leadership: 80, target_process: 80
    };
  };

  const getStoredObservations = (projectId: string): ObservationItem[] => {
    const key = `project_observations_${projectId}`;
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored);
    
    // Default seed
    let initial: ObservationItem[] = [];
    if (projectId === 'b1b2c3d4-0001-0001-0001-000000000001') { // Kalyan
      initial = [
        { id: 'obs-1', category: 'Inventory', observation: 'No barcode system in place. Stock tracked manually via paper ledger.', type: 'Gap', riskLevel: 'Critical' },
        { id: 'obs-2', category: 'Inventory', observation: 'Aged inventory (> 12 months) not monitored, resulting in locked-up capital of ₹85 Lakhs.', type: 'Gap', riskLevel: 'High' },
        { id: 'obs-3', category: 'Inventory', observation: 'Evaluate barcode-based RFID scanning options to speed stock audits by 80%.', type: 'Opportunity', riskLevel: 'Medium' },
        { id: 'obs-4', category: 'Inventory', observation: 'Daily stock weight reconciliation happens manually on paper logs at counter close.', type: 'Normal', riskLevel: 'Low' },
        { id: 'obs-5', category: 'Sales', observation: 'Walkout logs missing for 40% of non-converting customers. CRM tracking ignored.', type: 'Gap', riskLevel: 'High' },
        { id: 'obs-6', category: 'Sales', observation: 'Deploy automated WhatsApp follow-up triggers to recover 5-10% of lost leads.', type: 'Opportunity', riskLevel: 'Medium' },
        { id: 'obs-7', category: 'Procurement', observation: 'No independent purity test (karatometer verification) at gold procurement intake.', type: 'Gap', riskLevel: 'Critical' },
        { id: 'obs-8', category: 'Finance', observation: 'Daily reconciliation discrepancy rate of 0.12% due to manual cash and UPI drawer mismatch.', type: 'Gap', riskLevel: 'High' },
        { id: 'obs-9', category: 'Finance', observation: 'Link payment webhooks directly to POS billing system for real-time reconciliation.', type: 'Opportunity', riskLevel: 'High' },
        { id: 'obs-10', category: 'Operations', observation: 'No performance dashboard for sales floor personnel. Compensation applied uniformly.', type: 'Gap', riskLevel: 'Medium' }
      ];
    } else if (projectId === 'b1b2c3d4-0002-0002-0002-000000000002') { // Malabar
      initial = [
        { id: 'obs-11', category: 'Inventory', observation: 'Refinery stock transport runs without automated dual-lock authorization gates.', type: 'Gap', riskLevel: 'Critical' },
        { id: 'obs-12', category: 'Operations', observation: 'Sub-contractor job work scrap recovery rates fluctuate between 0.1% and 0.8% with zero validation.', type: 'Gap', riskLevel: 'High' },
        { id: 'obs-13', category: 'Operations', observation: 'Standardize subcontractor job-work scrap allowance to 0.4% maximum via digital SLA.', type: 'Opportunity', riskLevel: 'High' }
      ];
    } else if (projectId === 'b1b2c3d4-0003-0003-0003-000000000003') { // Reliance
      initial = [
        { id: 'obs-14', category: 'Inventory', observation: 'Store transit transfer logs are reconciled manually at week-end rather than real-time.', type: 'Gap', riskLevel: 'High' },
        { id: 'obs-15', category: 'Inventory', observation: 'Implement store-to-store barcode scanning for gold bags to reduce transit variance to 0%.', type: 'Opportunity', riskLevel: 'High' }
      ];
    }
    localStorage.setItem(key, JSON.stringify(initial));
    return initial;
  };

  const loadProjectData = useCallback(async (project: PortalProject) => {
    setLoading(true);
    try {
      const [ph, dl, au, rc, dev, cm, decs] = await Promise.all([
        getPortalPhases(project.id),
        getPortalDailyLogs(project.id),
        getPortalAudits(project.id),
        getPortalRecommendations(project.id), getPortalDeliverables(project.id),
        getPortalComments(project.id), getPortalDecisions(project.id)
      ]);
      setPhases(ph); setDailyLogs(dl);
      setAudits(au); setRecommendations(rc); setDeliverables(dev); setComments(cm); setDecisions(decs);
      
      // Load local Command Center metrics
      setProjectMetrics(getStoredMetrics(project.id));
      setObservations(getStoredObservations(project.id));
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    if (authStep === 'authenticated' && currentProject) loadProjectData(currentProject);
  }, [authStep, currentProject, loadProjectData]);

  useEffect(() => {
    if (authStep === 'authenticated' && userRole === 'admin') {
      getPortalClients().then(setClients).catch(console.error);
      getPortalProjects().then(setProjects).catch(console.error);
    }
  }, [authStep, userRole]);

  useEffect(() => {
    if (userRole === 'admin' && projects.length > 0 && !currentProject) setCurrentProject(projects[0]);
  }, [projects, userRole, currentProject]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true); setLoginError('');
    try {
      if (passcode === ADMIN_PASSCODE) {
        setUserRole('admin'); setAuthStep('authenticated');
        sessionStorage.setItem('portal_role', 'admin');
        const [allClients, allProjects] = await Promise.all([getPortalClients(), getPortalProjects()]);
        setClients(allClients); setProjects(allProjects);
        setPasscode(''); return;
      }
      const client = await verifyClientPasscode(passcode);
      if (client) {
        const clientProjects = await getPortalProjects(client.id);
        const project = clientProjects[0] || null;
        setCurrentClient(client); setCurrentProject(project);
        setUserRole('client'); setAuthStep('authenticated');
        sessionStorage.setItem('portal_role', 'client');
        sessionStorage.setItem('portal_client', JSON.stringify(client));
        if (project) sessionStorage.setItem('portal_project', JSON.stringify(project));
        setPasscode('');
      } else {
        setLoginError('Incorrect passcode. Please try again or contact Abraham.');
      }
    } catch { setLoginError('Connection error. Please try again.'); }
    finally { setLoginLoading(false); }
  };

  const handleLogout = () => {
    setAuthStep('login'); setUserRole('client');
    setCurrentClient(null); setCurrentProject(null); setPasscode(''); setLoginError('');
    sessionStorage.clear();
  };

  // Decisions client updates
  const handleUpdateDecisionStatus = async (decId: string, status: string) => {
    if (!currentProject) return;
    await updatePortalDecision(decId, currentProject.id, { status });
    setDecisions(prev => prev.map(d => d.id === decId ? { ...d, status } : d));
  };

  const handleSendComment = async () => {
    if (!currentProject || !newComment.trim()) return;
    try {
      const c = await createPortalComment({
        project_id: currentProject.id,
        author: userRole === 'admin' ? 'Abraham S' : (currentClient?.company_name || 'Client'),
        author_role: userRole === 'admin' ? 'Admin' : 'Client',
        message: newComment.trim(), thread_type: newCommentType, resolved: false,
      });
      setComments(prev => [...prev, c]); setNewComment('');
    } catch (err) { console.error(err); }
  };

  // Observations CRUD for admin
  const handleAddObservation = () => {
    if (!currentProject || !obsText.trim()) return;
    const newObs: ObservationItem = {
      id: 'obs-' + Date.now(),
      category: obsCategory,
      observation: obsText.trim(),
      type: obsType,
      riskLevel: obsRisk
    };
    const updated = [...observations, newObs];
    setObservations(updated);
    localStorage.setItem(`project_observations_${currentProject.id}`, JSON.stringify(updated));
    setObsText('');
    setShowObsForm(false);
  };

  const handleDeleteObservation = (id: string) => {
    if (!currentProject || !confirm('Remove this finding?')) return;
    const updated = observations.filter(o => o.id !== id);
    setObservations(updated);
    localStorage.setItem(`project_observations_${currentProject.id}`, JSON.stringify(updated));
  };

  // Admin save project command center metrics
  const handleSaveMetrics = (updatedMetrics: ProjectMetrics) => {
    if (!currentProject) return;
    setProjectMetrics(updatedMetrics);
    localStorage.setItem(`project_metrics_${currentProject.id}`, JSON.stringify(updatedMetrics));
    alert('Command Center parameters saved successfully.');
  };

  // Helpers to render bullet list outputs in Daily Progress & Audits
  const renderBulletList = (text: string, dot: string = '•') => {
    if (!text) return null;
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    return (
      <ul className="space-y-1.5">
        {lines.map((line, idx) => {
          const cleanLine = line.replace(/^[-•✓*]\s*/, '');
          return (
            <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
              <span className="text-slate-400 flex-shrink-0 mt-0.5">{dot}</span>
              <span className="leading-relaxed">{cleanLine}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderFindings = (findingsText: string) => {
    if (!findingsText) return null;
    const lines = findingsText.split('\n').map(l => l.trim()).filter(Boolean);
    return (
      <ul className="space-y-2">
        {lines.map((line, idx) => {
          let dot = '🟢';
          let text = line;
          if (line.startsWith('red:') || line.startsWith('🔴')) {
            dot = '🔴';
            text = line.replace(/^(red:|🔴)\s*/, '');
          } else if (line.startsWith('yellow:') || line.startsWith('🟡')) {
            dot = '🟡';
            text = line.replace(/^(yellow:|🟡)\s*/, '');
          } else if (line.startsWith('green:') || line.startsWith('🟢')) {
            dot = '🟢';
            text = line.replace(/^(green:|🟢)\s*/, '');
          } else if (line.startsWith('-') || line.startsWith('•')) {
            text = line.replace(/^[-•]\s*/, '');
            const lower = text.toLowerCase();
            if (lower.includes('no ') || lower.includes('missing') || lower.includes('leakage') || lower.includes('manual') || lower.includes('discrepancy') || lower.includes('delayed')) {
              dot = '🔴';
            } else if (lower.includes('not ') || lower.includes('exceeding') || lower.includes('risk') || lower.includes('partial')) {
              dot = '🟡';
            } else {
              dot = '🟢';
            }
          }
          return (
            <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
              <span className="text-sm flex-shrink-0 mt-0.5">{dot}</span>
              <span className="leading-relaxed">{text}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  // High-level roadmap phase names mapping helper
  const getRoadmapPhaseName = (phaseNumber: number): string => {
    const names: Record<number, string> = {
      1: 'Business Understanding',
      2: 'Current State Assessment',
      3: 'Gap Identification',
      4: 'System Design',
      5: 'Implementation',
      6: 'Performance Optimization'
    };
    return names[phaseNumber] || 'Transformation Milestone';
  };

  const phaseDetails: Record<number, string> = {
    1: 'Stakeholder alignment meetings, margin KPI formulations, and definition of strategic growth milestones.',
    2: 'Process mapping, operations diagnostics, CRM audit, and showroom floor walkthroughs.',
    3: 'Quantitative shrinkage calculations, Gold ledger variance calculations, and workflow bottleneck logs.',
    4: 'ERP security controls, barcode-based RFID stock tracking specifications, and audit frequency protocols.',
    5: 'Staff accountability framework training, dashboard deployments, and payment webhook reconciliation integration.',
    6: 'Margin leak closure audits, gold turn rate metrics evaluations, and executive boardroom handover checklists.'
  };

  const clientTabs = [
    { id: 'dashboard',       label: 'Command Center',   icon: BarChart3 },
    { id: 'roadmap',         label: 'Roadmap',          icon: TrendingUp },
    { id: 'what-we-found',   label: 'What We Found',    icon: Search },
    { id: 'decisions',       label: 'Decisions Required',icon: ClipboardList },
    { id: 'updates',         label: 'Progress Feed',    icon: Activity },
    { id: 'audits',          label: 'Audit Scorecards', icon: ShieldCheck },
    { id: 'recommendations', label: 'Recommendations',  icon: Star },
    { id: 'documents',       label: 'Deliverables',     icon: FolderOpen },
    { id: 'communication',   label: 'Communication',    icon: MessageSquare },
  ] as const;

  const adminTabs = [
    { id: 'clients',         label: 'Clients',          icon: Building2 },
    { id: 'projects',        label: 'Projects',          icon: Briefcase },
    { id: 'roadmap',         label: 'Roadmap Settings', icon: TrendingUp },
    { id: 'what-we-found',   label: 'What We Found',    icon: Search },
    { id: 'decisions',       label: 'Decisions Registry',icon: ClipboardList },
    { id: 'logs',            label: 'Activity Log',      icon: Activity },
    { id: 'audits',          label: 'Audits',            icon: ShieldCheck },
    { id: 'recommendations', label: 'Recommendations',   icon: Star },
    { id: 'deliverables',    label: 'Deliverables',      icon: FolderOpen },
    { id: 'health',          label: 'Command Center Settings', icon: Settings },
  ] as const;

  const tabs    = userRole === 'admin' ? adminTabs : clientTabs;
  const curTab  = userRole === 'admin' ? adminTab  : clientTab;
  const setTab  = userRole === 'admin' ? (t: any) => setAdminTab(t) : (t: any) => setClientTab(t);

  const pageTitle: Record<string, string> = {
    dashboard: 'Transformation Command Center', roadmap: 'Transformation Roadmap', 'what-we-found': 'What We Found',
    decisions: 'Decisions Required From Client', updates: 'Progress & Key Insights Feed', audits: 'Audit scorecards',
    recommendations: 'Strategic Recommendations', documents: 'Deliverables Vault', communication: 'Boardroom Chat',
    clients: 'Client Management', projects: 'Projects Configuration', logs: 'Activity Log',
    deliverables: 'Deliverables Vault', health: 'Command Center Parameters',
  };

  const AdminProjectSelector = () => (
    <div className="flex items-center gap-3 bg-white border border-slate-200/60 rounded-xl px-4 py-2 shadow-xs flex-shrink-0">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Active Project</span>
      <select value={currentProject?.id||''} onChange={async e => {
        const p = projects.find(p => p.id === e.target.value)||null;
        setCurrentProject(p); if(p) await loadProjectData(p);
      }} className="text-xs font-bold border-none text-slate-700 bg-transparent py-1 flex-1 focus:outline-none cursor-pointer">
        {projects.map(p => {
          const cl = clients.find(c=>c.id===p.client_id);
          return <option key={p.id} value={p.id}>{cl?.company_name||'Client'} — {p.project_name}</option>;
        })}
      </select>
      <button onClick={() => currentProject && loadProjectData(currentProject)}
        className="p-1.5 rounded-lg border border-slate-200/50 text-slate-400 hover:bg-slate-50 hover:text-slate-655 transition-colors">
        <RefreshCw className="w-3.5 h-3.5" />
      </button>
    </div>
  );

  if (authStep === 'login') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden select-none">
        {/* Background art elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0170B9]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-white border border-slate-200/80 p-8 rounded-2xl shadow-xl relative animate-in fade-in zoom-in-95 duration-305">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#0170B9] via-[#8CC63F] to-[#0170B9] rounded-t-2xl" />
          
          <div className="flex flex-col items-center text-center mb-8">
            <span className="w-14 h-14 bg-[#0170B9]/15 border border-[#0170B9]/20 rounded-xl flex items-center justify-center text-[#0170B9] text-2xl mb-4 font-mono font-black shadow-inner flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <polygon points="18,80 47,20 59,20 30,80" fill="#0170B9"/>
                <polygon points="53,20 82,80 70,80 41,20" fill="#8CC63F"/>
                <polygon points="26,58 35,58 65,58 74,58 68,64 32,64" fill="#0170B9"/>
              </svg>
            </span>
            <span className="text-[10px] font-black text-[#0170B9] uppercase tracking-[0.25em]">
              Executive Transformation Portal
            </span>
            <h1 className="text-xl font-black text-slate-800 tracking-tight mt-1 uppercase">
              Scale With Abraham
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold max-w-[280px] mt-2 leading-relaxed">
              Secure client gateway to transformation radar dashboard, insights feed, and audit scorecards.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-[10px] font-black text-slate-450 uppercase tracking-widest mb-2">
                Authentication Passcode
              </label>
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-slate-200 bg-slate-50 p-3.5 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#0170B9] focus:ring-1 focus:ring-[#0170B9]/25 text-center tracking-widest placeholder:tracking-normal rounded-xl transition-all"
              />
            </div>
            
            {loginError && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 p-3 text-xs font-bold flex items-center gap-2 rounded-xl">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500 animate-bounce" />
                <span>{loginError}</span>
              </div>
            )}

            <button 
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 bg-[#0170B9] hover:bg-[#005C9E] disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all rounded-xl border border-sky-600/10 flex justify-center items-center gap-2"
            >
              {loginLoading ? 'Unlocking...' : 'Authenticate & Unlock'}
            </button>
          </form>

          {/* Quick Demo Helper Section */}
          <div className="mt-8 border-t border-slate-100 pt-6 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Demonstration Passcodes</p>
            <div className="flex gap-2 justify-center text-[10px] font-extrabold">
              <span className="bg-slate-100 text-slate-655 px-2.5 py-1 rounded">Client: kalyan123</span>
              <span className="bg-slate-100 text-slate-655 px-2.5 py-1 rounded">Admin: scale123</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">

      {/* ── Sidebar ── */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} flex-shrink-0 bg-white border-r border-slate-200/60 flex flex-col transition-all duration-300 z-30 shadow-[1px_0_10px_rgba(0,0,0,0.01)]`}>
        {/* Sidebar header */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-100 flex-shrink-0 h-18">
          <div className="w-8 h-8 bg-[#0170B9] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#0170B9]/20">
            <svg viewBox="0 0 100 100" className="w-5 h-5" fill="none">
              <polygon points="18,80 47,20 59,20 30,80" fill="white"/>
              <polygon points="53,20 82,80 70,80 41,20" fill="#8CC63F"/>
              <polygon points="26,58 35,58 65,58 74,58 68,64 32,64" fill="white"/>
            </svg>
          </div>
          {sidebarOpen && (
            <div className="min-w-0">
              <p className="text-[12.5px] font-black text-slate-800 truncate leading-tight tracking-tight">SCALE WITH ABRAHAM</p>
              <p className="text-[9px] text-[#8CC63F] font-bold uppercase tracking-[0.1em] mt-0.5">Systems Consulting</p>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="ml-auto text-slate-300 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0">
            <Menu className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Client / User Card */}
        {sidebarOpen && (
          <div className="px-4 mt-4 flex-shrink-0">
            {userRole === 'client' && currentClient ? (
              <div className="bg-slate-50 border border-slate-100 rounded-xl px-3.5 py-3 flex items-center gap-2.5 shadow-xs">
                <div className="w-9 h-9 rounded-full bg-[#0170B9]/15 border border-[#0170B9]/10 flex items-center justify-center text-[#0170B9] font-black text-sm flex-shrink-0 shadow-xs">
                  {currentClient.company_name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Client Portal</p>
                  <p className="text-xs font-bold text-slate-800 truncate mt-0.5">{currentClient.company_name}</p>
                </div>
              </div>
            ) : userRole === 'admin' ? (
              <div className="bg-slate-50 border border-slate-100 rounded-xl px-3.5 py-3 flex items-center gap-2.5 shadow-xs">
                <div className="w-9 h-9 rounded-full bg-[#8CC63F]/15 border border-[#8CC63F]/10 flex items-center justify-center text-slate-700 font-black text-sm flex-shrink-0 shadow-xs">
                  A
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-[#8CC63F] uppercase tracking-widest">Administrator</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">Abraham S</p>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto mt-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = curTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setTab(tab.id)}
                title={!sidebarOpen ? tab.label : undefined}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13.5px] font-semibold transition-all relative ${
                  active
                    ? 'bg-[#0170B9]/5 text-[#0170B9]'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}>
                {active && (
                  <span className="absolute left-0 top-2.5 bottom-2.5 w-1 bg-[#0170B9] rounded-r-md" />
                )}
                <Icon className={`w-4 h-4 flex-shrink-0 ${active ? 'text-[#0170B9]' : 'text-slate-400'}`} />
                {sidebarOpen && <span className="truncate">{tab.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-4 flex-shrink-0 border-t border-slate-100 pt-3">
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13.5px] font-semibold text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-all">
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && 'Sign Out'}
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200/60 px-8 py-4 flex items-center justify-between flex-shrink-0 h-18">
          <div>
            <h1 className="text-base font-black text-slate-800 tracking-tight">{pageTitle[curTab] || 'Portal'}</h1>
            {currentProject && <p className="text-[11px] text-slate-400 font-bold mt-0.5">{currentProject.project_name}</p>}
          </div>
          <div className="flex items-center gap-4">
            {loading && <RefreshCw className="w-4.5 h-4.5 text-[#0170B9] animate-spin" />}
            {currentProject && projectMetrics && (
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/60 rounded-full px-4 py-1.5 shadow-xs">
                <RAGDot rag={currentProject.health_rag} />
                <span className="w-px h-3 bg-slate-200" />
                <span className="text-[11.5px] font-extrabold text-slate-600">Transformation: {projectMetrics.transformation_score}%</span>
              </div>
            )}
          </div>
        </header>

        {/* Page Content Viewport */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]">

          {/* ── CLIENT TAB: DASHBOARD (Command Center) ── */}
          {curTab === 'dashboard' && currentProject && projectMetrics && (
            <div className="space-y-6 max-w-5xl">
              {/* Executive Overview Score Cards */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: 'Transformation Score', value: `${projectMetrics.transformation_score}%`, sub: 'Standardization index', color: 'text-[#0170B9]', bg: 'bg-[#0170B9]', iconBg: 'bg-sky-50', icon: TrendingUp },
                  { label: 'Project Health', value: 'On Track', sub: 'RAG status: Green', color: 'text-emerald-700', bg: 'bg-emerald-500', iconBg: 'bg-emerald-50', icon: ShieldCheck },
                  { label: 'Value Created', value: projectMetrics.value_created.split(' ')[0], sub: 'Potential impact', color: 'text-indigo-700', bg: 'bg-indigo-500', iconBg: 'bg-indigo-50', icon: Globe },
                  { label: 'Recommendations', value: `${projectMetrics.recommendations_implemented}/${projectMetrics.recommendations_total}`, sub: 'Actions implemented', color: 'text-amber-700', bg: 'bg-amber-400', iconBg: 'bg-amber-50', icon: Star },
                  { label: 'Critical Risks', value: projectMetrics.critical_risks, sub: 'Needs leadership eye', color: projectMetrics.critical_risks > 0 ? 'text-rose-700' : 'text-slate-500', bg: projectMetrics.critical_risks > 0 ? 'bg-rose-500' : 'bg-slate-300', iconBg: projectMetrics.critical_risks > 0 ? 'bg-rose-50' : 'bg-slate-100', icon: AlertTriangle }
                ].map(({ label, value, sub, color, bg, iconBg, icon: Icon }) => (
                  <div key={label} className="bg-white rounded-xl border border-slate-200/60 p-5 hover:shadow-[0_8px_25px_rgb(0,0,0,0.02)] transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
                    <div className={`absolute top-0 left-0 right-0 h-1 ${bg}`} />
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-8.5 h-8.5 ${iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${color}`} />
                      </div>
                    </div>
                    <div>
                      <p className={`text-2.5xl font-black leading-none ${color}`}>{value}</p>
                      <p className="text-[10px] text-slate-800 font-extrabold uppercase mt-2 tracking-wider">{label}</p>
                      <p className="text-[9.5px] text-slate-400 font-semibold mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Grid: Radar on Left, Metrics & Milestone on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6">
                  <MaturityRadarChart
                    currentScores={{
                      operations: projectMetrics.radar_operations,
                      inventory: projectMetrics.radar_inventory,
                      data: projectMetrics.radar_data,
                      reporting: projectMetrics.radar_reporting,
                      accountability: projectMetrics.radar_accountability,
                      leadership: projectMetrics.radar_leadership,
                      process: projectMetrics.radar_process,
                    }}
                    targetScores={{
                      operations: projectMetrics.target_operations,
                      inventory: projectMetrics.target_inventory,
                      data: projectMetrics.target_data,
                      reporting: projectMetrics.target_reporting,
                      accountability: projectMetrics.target_accountability,
                      leadership: projectMetrics.target_leadership,
                      process: projectMetrics.target_process,
                    }}
                  />
                </div>

                <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                  {/* Overall Transformation Index Card */}
                  <div className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-xs flex-1 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">Corporate Maturity Score</h3>
                        <p className="text-xs text-slate-400 font-semibold mt-0.5">Assessed across 7 operational layers</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-slate-400">Current </span>
                        <span className="text-2xl font-black text-[#0170B9]">{projectMetrics.current_maturity}%</span>
                        <span className="text-sm font-bold text-slate-400"> · Target {projectMetrics.target_maturity}%</span>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#0170B9] to-[#8CC63F] rounded-full transition-all duration-550"
                        style={{ width: `${projectMetrics.current_maturity}%` }} />
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-bold text-slate-500 mt-5 pt-4 border-t border-slate-50">
                      <li className="flex items-center gap-2">🟢 Process Standardization</li>
                      <li className="flex items-center gap-2">🟢 Data Transparency</li>
                      <li className="flex items-center gap-2">🟢 Inventory Leakage Auditing</li>
                      <li className="flex items-center gap-2">🟢 Floor Staff Accountability</li>
                    </ul>
                  </div>

                  {/* Next Milestone Banner */}
                  <div className="bg-[#0170B9] text-white rounded-xl p-6 shadow-md shadow-[#0170B9]/15 flex flex-col justify-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#8CC63F]">Next Strategic Milestone</span>
                    <h4 className="text-xl font-bold mt-1.5 leading-tight">{projectMetrics.next_milestone}</h4>
                    <p className="text-xs text-white/80 mt-2 font-semibold">Requirement checklist and validation framework prepared. Awaiting leadership signoff.</p>
                  </div>
                </div>
              </div>

              {/* Latest update feed snippet */}
              {dailyLogs.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-50">
                    <h3 className="font-bold text-slate-800 text-sm">Latest Executive Progress Log</h3>
                    <button onClick={() => setTab('updates')} className="text-xs font-bold text-[#0170B9] hover:underline flex items-center gap-1">View Full Feed &arr;</button>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 bg-[#0170B9] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-xs">A</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="text-sm font-bold text-slate-800">Abraham S</span>
                        <span className="text-xs text-slate-400 font-semibold">{dailyLogs[0].log_date}</span>
                        <StatusBadge status={dailyLogs[0].status_label} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        {dailyLogs[0].tasks_completed && (
                          <div className="bg-slate-50/70 border border-slate-100 rounded-lg p-3">
                            <span className="text-[9.5px] font-black text-emerald-600 uppercase tracking-widest block mb-1">Completed</span>
                            {renderBulletList(dailyLogs[0].tasks_completed, '✓')}
                          </div>
                        )}
                        {dailyLogs[0].observations && (
                          <div className="bg-amber-50/40 border border-amber-100/30 rounded-lg p-3">
                            <span className="text-[9.5px] font-black text-amber-600 uppercase tracking-widest block mb-1">Key Insights Discovered</span>
                            {renderBulletList(dailyLogs[0].observations, '•')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── CLIENT TAB: ROADMAP (6 Consulting Phases) ── */}
          {curTab === 'roadmap' && currentProject && (
            <div className="max-w-4xl space-y-6">
              {userRole === 'admin' && <AdminProjectSelector />}
              
              <div className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-xs">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="font-bold text-slate-800 text-sm">Strategic Transformation Roadmap</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">High-level consulting phases to protect margins and scale operations</p>
                </div>
                
                <div className="relative border-l-2 border-slate-100 pl-8 ml-4 space-y-8 py-2">
                  {/* Phase mapping based on standard consulting roadmap */}
                  {[1, 2, 3, 4, 5, 6].map(num => {
                    const dbPhase = phases.find(p => p.phase_number === num);
                    const status = dbPhase ? dbPhase.status : (num < (currentProject.phase_active || 3) ? 'Completed' : (num === (currentProject.phase_active || 3) ? 'In Progress' : 'Upcoming'));
                    
                    let icon = <Circle className="w-5 h-5 text-slate-300 bg-white" />;
                    let circleBg = 'bg-slate-100 ring-slate-200/50';
                    let textClass = 'text-slate-400';
                    let borderHighlight = 'border-slate-200';
                    
                    if (status === 'Completed') {
                      icon = <CheckCircle className="w-5 h-5 text-emerald-500 bg-white" />;
                      circleBg = 'bg-emerald-50 ring-emerald-200/50';
                      textClass = 'text-slate-700';
                      borderHighlight = 'border-emerald-100 bg-emerald-50/20';
                    } else if (status === 'In Progress') {
                      icon = <RefreshCw className="w-5 h-5 text-[#0170B9] animate-spin bg-white" style={{ animationDuration: '3.5s' }} />;
                      circleBg = 'bg-sky-50 ring-sky-200/50';
                      textClass = 'text-slate-800 font-bold';
                      borderHighlight = 'border-[#0170B9]/20 bg-[#0170B9]/5 shadow-xs';
                    }

                    return (
                      <div key={num} className="relative group">
                        {/* Dot indicator over timeline vertical line */}
                        <div className="absolute -left-[42px] top-1 flex items-center justify-center">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center ring-4 bg-white ${circleBg}`}>
                            {icon}
                          </span>
                        </div>
                        
                        {/* Phase Box */}
                        <div className={`border rounded-xl p-5 transition-all duration-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.015)] ${borderHighlight}`}>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div>
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phase {num}</span>
                              <h4 className={`text-sm mt-0.5 ${textClass}`}>{getRoadmapPhaseName(num)}</h4>
                            </div>
                            <StatusBadge status={status} />
                          </div>
                          <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-1.5 max-w-2xl">{phaseDetails[num]}</p>
                          {dbPhase && (dbPhase.start_date || dbPhase.end_date) && (
                            <div className="flex gap-4 mt-3 text-[10px] font-bold text-slate-400 font-mono">
                              <span>Start: {dbPhase.start_date || 'TBD'}</span>
                              <span>Target: {dbPhase.end_date || 'TBD'}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── CLIENT TAB: WHAT WE FOUND (Diagnostic Insights Category Accordions) ── */}
          {curTab === 'what-we-found' && currentProject && projectMetrics && (
            <div className="max-w-4xl space-y-6">
              {userRole === 'admin' && (
                <div className="flex justify-end gap-3 items-center">
                  <AdminProjectSelector />
                  <button onClick={()=>{setEditingItem(null);setShowObsForm(true);}} className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-[#0170B9]/15"><Plus className="w-4 h-4"/>Add Diagnostic Finding</button>
                </div>
              )}

              {/* What We Found Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Observations Logged', value: observations.length, bg: 'bg-[#0170B9]', color: 'text-[#0170B9]', iconBg: 'bg-sky-50', icon: Search },
                  { label: 'Critical Gaps', value: observations.filter(o=>o.type==='Gap').length, bg: 'bg-rose-500', color: 'text-rose-700', iconBg: 'bg-rose-50', icon: AlertTriangle },
                  { label: 'Improvement Potentials', value: observations.filter(o=>o.type==='Opportunity').length, bg: 'bg-indigo-500', color: 'text-indigo-700', iconBg: 'bg-indigo-50', icon: Star },
                  { label: 'Estimated Margin Risk', value: projectMetrics.business_impact, bg: 'bg-amber-500', color: 'text-amber-700', iconBg: 'bg-amber-50', icon: Globe }
                ].map(({ label, value, bg, color, iconBg, icon: Icon }) => (
                  <div key={label} className="bg-white rounded-xl border border-slate-200/60 p-5 shadow-xs relative overflow-hidden flex flex-col justify-between">
                    <div className={`absolute top-0 left-0 right-0 h-1 ${bg}`} />
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-8.5 h-8.5 ${iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <p className={`text-2xl font-black ${color}`}>{value}</p>
                      <p className="text-[10px] text-slate-800 font-extrabold uppercase mt-2 tracking-wider leading-none">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Accordions */}
              <div className="bg-white rounded-xl border border-slate-200/60 shadow-xs overflow-hidden">
                <div className="px-6 py-4.5 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-slate-800 text-sm">Diagnostic Findings by Department</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Click a department category below to expand current observations and opportunities</p>
                </div>
                <div className="divide-y divide-slate-100">
                  {['Sales', 'Inventory', 'Procurement', 'Finance', 'Operations', 'HR'].map(cat => {
                    const catObs = observations.filter(o => o.category === cat);
                    const isOpen = openCategory === cat;

                    return (
                      <div key={cat} className="transition-all duration-200">
                        {/* Header trigger */}
                        <button
                          onClick={() => setOpenCategory(isOpen ? null : cat)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50/60 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-slate-700 text-[13.5px]">{cat}</span>
                            <span className="text-[10.5px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{catObs.length} findings</span>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-90 text-[#0170B9]' : ''}`} />
                        </button>

                        {/* Collapsible Content */}
                        {isOpen && (
                          <div className="px-6 pb-5 pt-1 bg-slate-50/20 space-y-3 animate-in fade-in duration-150">
                            {catObs.length === 0 ? (
                              <p className="text-xs text-slate-400 font-semibold py-2">No observations logged in this category.</p>
                            ) : catObs.map(obs => {
                              const dotColor = obs.type === 'Gap' ? 'bg-rose-500 shadow-rose-500/20' : obs.type === 'Opportunity' ? 'bg-indigo-500 shadow-indigo-500/20' : 'bg-amber-400 shadow-amber-400/20';
                              const badgeBorder = obs.type === 'Gap' ? 'border-rose-100 bg-rose-50/20' : obs.type === 'Opportunity' ? 'border-indigo-100 bg-indigo-50/20' : 'border-amber-100 bg-amber-50/20';
                              
                              return (
                                <div key={obs.id} className={`flex items-start gap-3 border rounded-xl p-4 bg-white transition-all shadow-xs ${badgeBorder}`}>
                                  <span className={`w-2.5 h-2.5 rounded-full ${dotColor} flex-shrink-0 mt-1.5 shadow-sm`} />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-slate-600 leading-relaxed">{obs.observation}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                      <span className="text-[9.5px] font-bold text-slate-400">Class: {obs.type}</span>
                                      <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                      <span className="text-[9.5px] font-bold text-slate-400">Risk Level: {obs.riskLevel}</span>
                                    </div>
                                  </div>
                                  {userRole==='admin' && (
                                    <button onClick={() => handleDeleteObservation(obs.id)} className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors flex-shrink-0"><Trash2 className="w-3.5 h-3.5"/></button>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add Observation Modal */}
              {showObsForm && (
                <Modal title="Add Diagnostic Finding" onClose={() => setShowObsForm(false)}>
                  <div className="space-y-4">
                    <div>
                      <label className={labelCls}>Category / Department</label>
                      <select value={obsCategory} onChange={e=>setObsCategory(e.target.value as any)} className={inputCls}>
                        {['Sales','Inventory','Procurement','Finance','Operations','HR'].map(c=><option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Observation / Finding Details</label>
                      <textarea value={obsText} onChange={e=>setObsText(e.target.value)} rows={3} className={inputCls} placeholder="Enter what was discovered..."/>
                    </div>
                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className={labelCls}>Finding Classification</label>
                        <select value={obsType} onChange={e=>setObsType(e.target.value as any)} className={inputCls}>
                          <option value="Gap">🔴 Critical Gap</option>
                          <option value="Opportunity">🔵 Improvement Opportunity</option>
                          <option value="Normal">Normal Observation</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Risk / Priority Level</label>
                        <select value={obsRisk} onChange={e=>setObsRisk(e.target.value as any)} className={inputCls}>
                          {['Low','Medium','High','Critical'].map(r=><option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                    </div>
                    <button className={saveBtnCls} onClick={handleAddObservation}><Save className="w-4 h-4"/>Save Finding</button>
                  </div>
                </Modal>
              )}
            </div>
          )}

          {/* ── CLIENT TAB: DECISIONS REQUIRED FROM CLIENT ── */}
          {curTab === 'decisions' && currentProject && (
            <div className="max-w-4xl space-y-6">
              {userRole === 'admin' && (
                <div className="flex justify-end gap-3 items-center">
                  <AdminProjectSelector />
                  <button onClick={()=>{setEditingItem(null);setShowDecForm(true);}} className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-colors flex-shrink-0 shadow-sm shadow-[#0170B9]/15"><Plus className="w-4 h-4"/>Create Dependency</button>
                </div>
              )}

              <div className="bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div className="px-6 py-4.5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Decisions Required From Client</h3>
                    <p className="text-xs text-slate-400 font-semibold mt-0.5">Critical approvals needed to prevent timeline delays</p>
                  </div>
                  <span className="text-[10px] font-bold text-rose-500 bg-rose-50 border border-rose-100/60 px-2.5 py-1 rounded-full shadow-xs">
                    {decisions.filter(d => d.status === 'Pending').length} Pending Approval
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/70 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4 text-left">Decision / Approval Required</th>
                        <th className="px-6 py-4 text-left">Action Owner</th>
                        <th className="px-6 py-4 text-left">Due Date</th>
                        <th className="px-6 py-4 text-left">Status</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {decisions.length === 0 ? (
                        <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-350 text-sm">No pending client decisions logged.</td></tr>
                      ) : decisions.map(dec => (
                        <tr key={dec.id} className="hover:bg-slate-50/40 transition-colors">
                          <td className="px-6 py-4.5 font-bold text-slate-700 text-xs">{dec.decision}</td>
                          <td className="px-6 py-4.5 text-xs font-bold text-slate-500">{dec.owner}</td>
                          <td className="px-6 py-4.5 text-xs font-bold text-slate-400 font-mono">{dec.due_date}</td>
                          <td className="px-6 py-4.5"><StatusBadge status={dec.status}/></td>
                          <td className="px-6 py-4.5 text-center">
                            {userRole === 'client' && dec.status === 'Pending' ? (
                              <div className="flex gap-2 justify-center">
                                <button onClick={()=>handleUpdateDecisionStatus(dec.id, 'Approved')} className="px-3 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/50 rounded-lg text-[10.5px] font-black transition-colors">Approve</button>
                                <button onClick={()=>handleUpdateDecisionStatus(dec.id, 'Rejected')} className="px-3 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200/50 rounded-lg text-[10.5px] font-black transition-colors">Reject</button>
                              </div>
                            ) : userRole === 'admin' ? (
                              <div className="flex gap-2 justify-center items-center">
                                <select value={dec.status} onChange={e=>handleUpdateDecisionStatus(dec.id, e.target.value)} className="text-xs font-bold border border-slate-200 rounded-lg px-2 py-1 text-slate-600 bg-white focus:outline-none cursor-pointer">
                                  {['Pending','Approved','Rejected'].map(s=><option key={s}>{s}</option>)}
                                </select>
                                <button onClick={async()=>{if(confirm('Remove?')){await deletePortalDecision(dec.id, currentProject.id);setDecisions(p=>p.filter(d=>d.id!==dec.id));}}} className="p-1 rounded hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"><Trash2 className="w-3.5 h-3.5"/></button>
                              </div>
                            ) : (
                              <span className="text-xs font-bold text-slate-400">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {showDecForm && (
                <Modal title="Create Client Decision Dependency" onClose={()=>setShowDecForm(false)}>
                  <div className="space-y-4">
                    <div>
                      <label className={labelCls}>Decision Description</label>
                      <input className={inputCls} placeholder="e.g. Approve Barcode Vendor SLA" id="new-dec-text"/>
                    </div>
                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className={labelCls}>Owner Role</label>
                        <input className={inputCls} placeholder="e.g. MD, Operations Head" id="new-dec-owner"/>
                      </div>
                      <div>
                        <label className={labelCls}>Due Date</label>
                        <input type="date" className={inputCls} id="new-dec-due"/>
                      </div>
                    </div>
                    <button className={saveBtnCls} onClick={async()=>{
                      const txt = (document.getElementById('new-dec-text') as HTMLInputElement)?.value;
                      const own = (document.getElementById('new-dec-owner') as HTMLInputElement)?.value;
                      const due = (document.getElementById('new-dec-due') as HTMLInputElement)?.value;
                      if(!txt || !own) return;
                      const nd = await createPortalDecision({
                        project_id: currentProject.id,
                        decision: txt, owner: own, due_date: due || new Date().toISOString().split('T')[0],
                        status: 'Pending'
                      });
                      setDecisions(p => [...p, nd]);
                      setShowDecForm(false);
                    }}><Save className="w-4 h-4"/>Create Decision</button>
                  </div>
                </Modal>
              )}
            </div>
          )}

          {/* ── CLIENT TAB: PROGRESS FEED ── */}
          {curTab === 'updates' && (
            <div className="max-w-3xl space-y-4">
              {userRole === 'admin' && (
                <div className="flex justify-end gap-3 items-center">
                  <AdminProjectSelector />
                  <button onClick={()=>{setEditingItem(null);setShowLogForm(true);}}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-[#0170B9]/15">
                    <Plus className="w-4 h-4"/>Post Daily Progress
                  </button>
                </div>
              )}
              {dailyLogs.length===0 ? (
                <div className="bg-white rounded-xl border border-slate-200/60 py-16 text-center text-slate-400 text-sm">No updates yet.</div>
              ) : dailyLogs.map(log=>(
                <div key={log.id} className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0170B9] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-xs">A</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-3">
                        <span className="font-bold text-slate-800 text-sm">Abraham S</span>
                        <span className="text-xs text-slate-400 font-semibold">{log.log_date}</span>
                        <StatusBadge status={log.status_label}/>
                        <span className="text-[10.5px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{log.hours_spent}h · {log.departments_covered}</span>
                        {userRole==='admin' && (
                          <div className="ml-auto flex gap-1">
                            <button onClick={()=>{setEditingItem(log);setShowLogForm(true);}} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"><Edit2 className="w-3.5 h-3.5"/></button>
                            <button onClick={async()=>{if(confirm('Delete?')){await deletePortalDailyLog(log.id);setDailyLogs(p=>p.filter(l=>l.id!==log.id));}}} className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"><Trash2 className="w-3.5 h-3.5"/></button>
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {log.tasks_completed && (
                          <div>
                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1.5">✓ Today's Progress</p>
                            {renderBulletList(log.tasks_completed, '✓')}
                          </div>
                        )}
                        {log.observations && (
                          <div className="bg-amber-50/40 border border-amber-100/40 rounded-xl p-4 shadow-xs">
                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5">⚡ Key Insights Discovered</p>
                            {renderBulletList(log.observations, '•')}
                          </div>
                        )}
                        {log.what_next && (
                          <div>
                            <p className="text-[10px] font-bold text-[#0170B9] uppercase tracking-widest mb-1.5">→ Tomorrow's Focus</p>
                            {renderBulletList(log.what_next, '•')}
                          </div>
                        )}
                        {log.meeting_notes && (
                          <div className="bg-purple-50/50 border border-purple-100/30 rounded-lg p-3">
                            <p className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-1">📝 Meeting Notes</p>
                            <p className="text-xs text-purple-700 leading-relaxed font-semibold">{log.meeting_notes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {showLogForm && <LogFormModal editing={editingItem} onClose={()=>{setShowLogForm(false);setEditingItem(null);}}
                onSave={async(data)=>{try{if(editingItem){await updatePortalDailyLog(editingItem.id,data);setDailyLogs(p=>p.map(l=>l.id===editingItem.id?{...l,...data}:l));}else{const nl=await createPortalDailyLog({...data,project_id:currentProject!.id});setDailyLogs(p=>[nl,...p]);}setShowLogForm(false);setEditingItem(null);}catch{alert('Failed.');}}}
                Modal={Modal} inputCls={inputCls} labelCls={labelCls} saveBtnCls={saveBtnCls}/>}
            </div>
          )}

          {/* ── CLIENT TAB: AUDIT SCORECARDS ── */}
          {curTab === 'audits' && (
            <div className="max-w-4xl space-y-4">
              {userRole==='admin' && (
                <div className="flex justify-end gap-3 items-center">
                  <AdminProjectSelector />
                  <button onClick={()=>{setEditingItem(null);setShowAuditForm(true);}} className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-colors flex-shrink-0 shadow-sm shadow-[#0170B9]/15"><Plus className="w-4 h-4"/>New Audit Scorecard</button>
                </div>
              )}
              {audits.length===0 ? <div className="bg-white rounded-xl border border-slate-200/60 py-16 text-center text-slate-400 text-sm">No audit scorecards recorded.</div>
              : audits.map(audit=>{
                const auditKey = `audit_maturity_${audit.id}`;
                const storedMaturity = localStorage.getItem(auditKey);
                const maturityVal = storedMaturity ? parseInt(storedMaturity) : (audit.department.includes('Inventory') ? 42 : audit.department.includes('CRM') ? 58 : 64);
                
                return (
                  <div key={audit.id} className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-slate-800 text-sm">{audit.department}</h3>
                          <PriorityBadge priority={audit.risk_level}/>
                          <StatusBadge status={audit.status}/>
                        </div>
                        <p className="text-[11px] text-slate-400 font-bold mt-1">{audit.audit_date} · {audit.audit_type} Audit</p>
                      </div>
                      
                      {/* Maturity score display */}
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-[9.5px] font-black text-slate-450 uppercase tracking-widest block">Maturity Score</span>
                          <span className="text-lg font-black text-slate-800">{maturityVal} <span className="text-xs text-slate-400 font-bold">/ 100</span></span>
                        </div>
                        {userRole==='admin' && (
                          <div className="flex gap-2 items-center ml-2">
                            <input type="number" min="0" max="100" value={maturityVal} onChange={e=>{
                              const val = Math.min(100, Math.max(0, parseInt(e.target.value)||0));
                              localStorage.setItem(auditKey, val.toString());
                              setAudits(prev => [...prev]); // trigger state update to re-render
                            }} className="w-16 border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-center focus:outline-none"/>
                            <select value={audit.status} onChange={async e=>{await updatePortalAudit(audit.id,{status:e.target.value});setAudits(p=>p.map(a=>a.id===audit.id?{...a,status:e.target.value}:a));}}
                              className="text-xs font-bold border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-600 focus:outline-none bg-white cursor-pointer">
                              {['Open','In Progress','Resolved','Closed'].map(s=><option key={s}>{s}</option>)}
                            </select>
                            <button onClick={()=>{setEditingItem(audit);setShowAuditForm(true);}} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"><Edit2 className="w-3.5 h-3.5"/></button>
                            <button onClick={async()=>{if(confirm('Delete?')){await deletePortalAudit(audit.id);setAudits(p=>p.filter(a=>a.id!==audit.id));}}} className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"><Trash2 className="w-3.5 h-3.5"/></button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Structured Content Panel */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                      <div className="md:col-span-5 bg-slate-50/70 border border-slate-100 rounded-xl p-4">
                        <p className="text-[10px] font-bold text-slate-450 uppercase tracking-widest mb-2.5">Key Findings</p>
                        {renderFindings(audit.observations)}
                      </div>
                      
                      <div className="md:col-span-4 bg-emerald-50/50 border border-emerald-100/30 rounded-xl p-4">
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-2">Recommended Action</p>
                        <p className="text-xs text-emerald-800 leading-relaxed font-bold">{audit.recommendations}</p>
                      </div>

                      <div className="md:col-span-3 bg-indigo-50/50 border border-indigo-100/30 rounded-xl p-4">
                        <p className="text-[10px] font-bold text-[#0170B9] uppercase tracking-widest mb-2">Expected Benefits</p>
                        {audit.corrective_actions ? renderBulletList(audit.corrective_actions, '✓') : <span className="text-xs text-slate-400 font-semibold">—</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
              {showAuditForm && <AuditFormModal editing={editingItem} onClose={()=>{setShowAuditForm(false);setEditingItem(null);}}
                onSave={async(data)=>{try{if(editingItem){await updatePortalAudit(editingItem.id,data);setAudits(p=>p.map(a=>a.id===editingItem.id?{...a,...data}:a));}else{const na=await createPortalAudit({...data,project_id:currentProject!.id});setAudits(p=>[na,...p]);}setShowAuditForm(false);setEditingItem(null);}catch{alert('Failed.');}}}
                Modal={Modal} inputCls={inputCls} labelCls={labelCls} saveBtnCls={saveBtnCls}/>}
            </div>
          )}

          {/* ── CLIENT TAB: RECOMMENDATIONS ── */}
          {curTab === 'recommendations' && (
            <div className="max-w-4xl space-y-4">
              {userRole==='admin' && (
                <div className="flex justify-end gap-3 items-center">
                  <AdminProjectSelector />
                  <button onClick={()=>{setEditingItem(null);setShowRecForm(true);}} className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-colors flex-shrink-0 shadow-sm shadow-[#0170B9]/15"><Plus className="w-4 h-4"/>Add Recommendation</button>
                </div>
              )}
              {recommendations.length===0 ? <div className="bg-white rounded-xl border border-slate-200/60 py-16 text-center text-slate-400 text-sm">No strategic recommendations yet.</div>
              : recommendations.map(rec=>(
                <div key={rec.id} className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <PriorityBadge priority={rec.priority}/>
                      <StatusBadge status={rec.current_status}/>
                      <StatusBadge status={rec.approval_status}/>
                    </div>
                    {userRole==='admin' && (
                      <div className="flex gap-2 items-center">
                        <select value={rec.current_status} onChange={async e=>{await updatePortalRecommendation(rec.id,{current_status:e.target.value});setRecommendations(p=>p.map(r=>r.id===rec.id?{...r,current_status:e.target.value}:r));}} className="text-xs font-bold border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-600 focus:outline-none bg-white cursor-pointer">{['Open','In Progress','Implemented','Closed'].map(s=><option key={s}>{s}</option>)}</select>
                        <button onClick={()=>{setEditingItem(rec);setShowRecForm(true);}} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"><Edit2 className="w-3.5 h-3.5"/></button>
                        <button onClick={async()=>{if(confirm('Delete?')){await deletePortalRecommendation(rec.id);setRecommendations(p=>p.filter(r=>r.id!==rec.id));}}} className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"><Trash2 className="w-3.5 h-3.5"/></button>
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-slate-800 text-sm leading-relaxed">{rec.recommendation}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs">
                    <div>
                      <p className="text-[9.5px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Business Impact</p>
                      <p className="text-slate-600 font-semibold leading-relaxed">{rec.business_impact}</p>
                    </div>
                    <div>
                      <p className="text-[9.5px] font-bold text-slate-405 uppercase tracking-widest mb-1">Action Owner</p>
                      <p className="text-slate-600 font-semibold">{rec.owner}</p>
                    </div>
                    <div>
                      <p className="text-[9.5px] font-bold text-slate-405 uppercase tracking-widest mb-1">Target Timeline</p>
                      <p className="text-slate-600 font-bold font-mono">{rec.target_date||'—'}</p>
                    </div>
                  </div>
                  {rec.implementation_notes && (
                    <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 text-xs text-slate-700 leading-relaxed font-semibold">
                      <span className="font-black text-[#0170B9]">Implementation Notes: </span>{rec.implementation_notes}
                    </div>
                  )}
                </div>
              ))}
              {showRecForm && <RecFormModal editing={editingItem} onClose={()=>{setShowRecForm(false);setEditingItem(null);}}
                onSave={async(data)=>{try{if(editingItem){await updatePortalRecommendation(editingItem.id,data);setRecommendations(p=>p.map(r=>r.id===editingItem.id?{...r,...data}:r));}else{const nr=await createPortalRecommendation({...data,project_id:currentProject!.id});setRecommendations(p=>[nr,...p]);}setShowRecForm(false);setEditingItem(null);}catch{alert('Failed.');}}}
                Modal={Modal} inputCls={inputCls} labelCls={labelCls} saveBtnCls={saveBtnCls}/>}
            </div>
          )}

          {/* ── CLIENT TAB: DOCUMENTS ── */}
          {curTab === 'documents' && (
            <div className="max-w-4xl space-y-4">
              {userRole==='admin' && (
                <div className="flex justify-end gap-3 items-center">
                  <AdminProjectSelector />
                  <button onClick={()=>{setEditingItem(null);setShowDelForm(true);}} className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-colors flex-shrink-0 shadow-sm shadow-[#0170B9]/15"><Plus className="w-4 h-4"/>Upload Document</button>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.length===0 ? <div className="md:col-span-2 bg-white rounded-xl border border-slate-200/60 py-16 text-center text-slate-400 text-sm">No project documents uploaded.</div>
                : deliverables.map(doc=>(
                  <div key={doc.id} className="bg-white rounded-xl border border-slate-200/60 p-5 flex gap-4 hover:shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all duration-305">
                    <div className="w-11 h-11 bg-[#0170B9]/5 border border-[#0170B9]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0170B9]">
                      <FileText className="w-5.5 h-5.5"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <StatusBadge status={doc.status}/>
                        <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded">{doc.doc_type} · {doc.version}</span>
                      </div>
                      <p className="font-bold text-slate-800 text-sm truncate">{doc.name}</p>
                      {doc.description && <p className="text-xs text-slate-400 mt-1 leading-relaxed font-semibold">{doc.description}</p>}
                      <div className="flex items-center gap-3 mt-3 text-[10.5px] text-slate-400 font-bold border-t border-slate-50 pt-2.5">
                        {doc.due_date && <span>Due {doc.due_date}</span>}
                        {doc.delivered_at && <span className="text-emerald-500 font-black">✓ Sent {doc.delivered_at}</span>}
                        {doc.file_size && <span>{doc.file_size}</span>}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0 justify-between items-end">
                      {doc.file_url && doc.status==='Delivered' && (
                        <a href={doc.file_url} target="_blank" rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#0170B9]/5 hover:bg-[#0170B9]/15 text-[#0170B9] transition-colors border border-[#0170B9]/10 shadow-xs">
                          <Download className="w-4 h-4"/>
                        </a>
                      )}
                      {userRole==='admin' && (
                        <div className="flex gap-1">
                          <button onClick={()=>{setEditingItem(doc);setShowDelForm(true);}} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"><Edit2 className="w-3.5 h-3.5"/></button>
                          <button onClick={async()=>{if(confirm('Delete?')){await deletePortalDeliverable(doc.id);setDeliverables(p=>p.filter(d=>d.id!==doc.id));}}} className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"><Trash2 className="w-3.5 h-3.5"/></button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {showDelForm && <DelFormModal editing={editingItem} onClose={()=>{setShowDelForm(false);setEditingItem(null);}}
                onSave={async(data)=>{try{if(editingItem){await updatePortalDeliverable(editingItem.id,data);setDeliverables(p=>p.map(d=>d.id===editingItem.id?{...d,...data}:d));}else{const nd=await createPortalDeliverable({...data,project_id:currentProject!.id});setDeliverables(p=>[nd,...p]);}setShowDelForm(false);setEditingItem(null);}catch{alert('Failed.');}}}
                Modal={Modal} inputCls={inputCls} labelCls={labelCls} saveBtnCls={saveBtnCls}/>}
            </div>
          )}

          {/* ── CLIENT TAB: COMMUNICATION ── */}
          {curTab === 'communication' && (
            <div className="max-w-3xl">
              <div className="bg-white rounded-xl border border-slate-200/60 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.02)]" style={{height:'calc(100vh - 190px)'}}>
                <div className="px-6 py-4.5 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-slate-800 text-sm">Project Communication</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">{comments.length} boardroom discussions</p>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/20">
                  {comments.length===0 ? <p className="text-center text-slate-400 text-sm py-12">No messages yet. Send a query to start the thread.</p>
                  : comments.map(c=>{
                    const isAdmin = c.author_role==='Admin';
                    return (
                      <div key={c.id} className={`flex gap-3 ${isAdmin?'':'flex-row-reverse animate-in fade-in duration-200'}`}>
                        <div className={`w-8.5 h-8.5 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 shadow-xs ${isAdmin?'bg-[#0170B9] text-white':'bg-slate-200 text-slate-650'}`}>
                          {isAdmin?'A':c.author.charAt(0).toUpperCase()}
                        </div>
                        <div className={`flex-1 max-w-[75%] flex flex-col ${isAdmin?'':'items-end'}`}>
                          <div className={`flex items-center gap-2 mb-1.5 ${isAdmin?'':'flex-row-reverse'}`}>
                            <span className="text-[10px] font-bold text-slate-400">{c.author}</span>
                            <span className="text-[9px] font-semibold text-slate-300">{new Date(c.created_at).toLocaleDateString('en',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}</span>
                            <span className="text-[9px] font-bold bg-white text-slate-450 border border-slate-200/60 px-1.5 py-0.5 rounded-full shadow-xs">{c.thread_type}</span>
                          </div>
                          <div className={`px-4 py-3 rounded-2xl text-sm font-semibold leading-relaxed ${isAdmin?'bg-[#0170B9]/5 text-slate-700 rounded-tl-none border border-[#0170B9]/10 shadow-xs':'bg-white text-slate-700 rounded-tr-none border border-slate-200/60 shadow-xs'}`}>
                            {c.message}
                          </div>
                          {c.resolved && <span className="text-[9.5px] text-emerald-500 font-black mt-1 flex items-center gap-1">✓ Resolved</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-slate-100 p-4 flex gap-3 bg-white">
                  <select value={newCommentType} onChange={e=>setNewCommentType(e.target.value)}
                    className="border border-slate-200 rounded-xl text-xs font-bold text-slate-500 px-3 py-2 focus:outline-none bg-slate-50 cursor-pointer flex-shrink-0 shadow-xs">
                    {['General','Clarification','Approval','Question','Decision'].map(t=><option key={t}>{t}</option>)}
                  </select>
                  <input value={newComment} onChange={e=>setNewComment(e.target.value)}
                    onKeyDown={e=>e.key==='Enter'&&!e.shiftKey&&(e.preventDefault(),handleSendComment())}
                    placeholder="Ask a question or reply to thread..." className={`${inputCls} flex-1`} style={{ paddingTop: '8px', paddingBottom: '8px' }}/>
                  <button onClick={handleSendComment} disabled={!newComment.trim()}
                    className="px-4.5 py-2 bg-[#0170B9] hover:bg-[#005C9E] disabled:opacity-40 text-white rounded-xl transition-colors flex-shrink-0 shadow-sm shadow-[#0170B9]/15 flex items-center justify-center">
                    <Send className="w-4.5 h-4.5"/>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── ADMIN TAB: CLIENTS ── */}
          {curTab === 'clients' && (
            <div className="max-w-5xl space-y-4">
              <div className="flex justify-end">
                <button onClick={()=>{setEditingItem(null);setShowClientForm(true);}} className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-all shadow-sm shadow-[#0170B9]/15"><Plus className="w-4 h-4"/>New Client</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {clients.map(cl=>{
                  const cp=projects.filter(p=>p.client_id===cl.id);
                  return (
                    <div key={cl.id} className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-4 pb-3 border-b border-slate-50">
                          <div>
                            <h3 className="font-bold text-slate-800 text-sm leading-tight">{cl.company_name}</h3>
                            <p className="text-xs text-slate-400 font-semibold mt-1">{cl.industry}</p>
                          </div>
                          <StatusBadge status={cl.project_status}/>
                        </div>
                        <div className="space-y-2.5 text-xs font-semibold text-slate-550">
                          {cl.locations && <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-slate-400"/>{cl.locations}</div>}
                          {cl.primary_contact && <div className="flex items-center gap-2"><User className="w-4 h-4 text-slate-400"/>{cl.primary_contact}</div>}
                          {cl.contract_start && <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400"/>Since {cl.contract_start}</div>}
                        </div>
                      </div>
                      <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{cp.length} project(s)</span>
                        <div className="flex gap-1.5">
                          <button onClick={()=>{setEditingItem(cl);setShowClientForm(true);}} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors border border-slate-100 shadow-xs"><Edit2 className="w-3.5 h-3.5"/></button>
                          <button onClick={async()=>{if(confirm('Delete client?')){await deletePortalClient(cl.id);setClients(p=>p.filter(c=>c.id!==cl.id));}}} className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors border border-slate-100 shadow-xs"><Trash2 className="w-3.5 h-3.5"/></button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {clients.length===0 && <div className="col-span-3 bg-white rounded-xl border border-slate-200/60 py-16 text-center text-slate-350 text-sm">No clients yet.</div>}
              </div>
              {showClientForm && <ClientFormModal editing={editingItem}
                onClose={()=>{setShowClientForm(false);setEditingItem(null);}}
                onSave={async(data)=>{try{if(editingItem){await updatePortalClient(editingItem.id,data);setClients(p=>p.map(c=>c.id===editingItem.id?{...c,...data}:c));}else{const nc=await createPortalClient(data as any);setClients(p=>[nc,...p]);}setShowClientForm(false);setEditingItem(null);}catch{alert('Failed.');}}}
                Modal={Modal} inputCls={inputCls} labelCls={labelCls} saveBtnCls={saveBtnCls}/>}
            </div>
          )}

          {/* ── ADMIN TAB: PROJECTS ── */}
          {curTab === 'projects' && (
            <div className="max-w-4xl space-y-4">
              <div className="flex justify-end">
                <button onClick={()=>{setEditingItem(null);setShowProjectForm(true);}} className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-all shadow-sm shadow-[#0170B9]/15"><Plus className="w-4 h-4"/>New Project</button>
              </div>
              {projects.map(proj=>{
                const cl=clients.find(c=>c.id===proj.client_id);
                return (
                  <div key={proj.id} className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3 border-b border-slate-50 pb-3">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                          <h3 className="font-bold text-slate-800 text-sm">{proj.project_name}</h3>
                          <RAGDot rag={proj.health_rag}/><StatusBadge status={proj.status}/>
                        </div>
                        <p className="text-xs text-slate-400 font-semibold">{cl?.company_name} · Phase {proj.phase_active} Active</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="text-xl font-black text-[#0170B9]">{proj.progress_pct}%</span>
                          <div className="w-20 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden"><div className="h-full bg-[#0170B9] rounded-full" style={{width:`${proj.progress_pct}%`}}/></div>
                        </div>
                        <button onClick={()=>{setEditingItem(proj);setShowProjectForm(true);}} className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors border border-slate-100 shadow-xs"><Edit2 className="w-4 h-4"/></button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-semibold">{proj.objectives}</p>
                    <div className="flex gap-4 mt-3 text-xs font-bold text-slate-400">
                      <span className="font-mono">{proj.start_date} → {proj.end_date}</span>
                    </div>
                  </div>
                );
              })}
              {projects.length===0 && <div className="bg-white rounded-xl border border-slate-200/60 py-16 text-center text-slate-350 text-sm">No projects yet.</div>}
              {showProjectForm && <ProjectFormModal editing={editingItem} clients={clients}
                onClose={()=>{setShowProjectForm(false);setEditingItem(null);}}
                onSave={async(data)=>{try{if(editingItem){await updatePortalProject(editingItem.id,data);setProjects(p=>p.map(pr=>pr.id===editingItem.id?{...pr,...data}:pr));}else{const np=await createPortalProject(data as any);setProjects(p=>[np,...p]);}setShowProjectForm(false);setEditingItem(null);}catch{alert('Failed.');}}}
                Modal={Modal} inputCls={inputCls} labelCls={labelCls} saveBtnCls={saveBtnCls}/>}
            </div>
          )}

          {/* ── ADMIN TAB: ROADMAP SETTINGS ── */}
          {curTab === 'roadmap' && userRole === 'admin' && currentProject && (
            <div className="max-w-4xl space-y-6">
              <AdminProjectSelector />
              <div className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-xs">
                <h3 className="font-bold text-slate-800 text-sm mb-4">Transformation Roadmap Phases Management</h3>
                <div className="divide-y divide-slate-100">
                  {[1, 2, 3, 4, 5, 6].map(num => {
                    const dbPhase = phases.find(p => p.phase_number === num);
                    const status = dbPhase ? dbPhase.status : 'Upcoming';
                    return (
                      <div key={num} className="py-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-slate-700">Phase {num}: {getRoadmapPhaseName(num)}</p>
                          <p className="text-xs text-slate-400 font-semibold mt-0.5">{phaseDetails[num]}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <select value={status} onChange={async e => {
                            if (dbPhase) {
                              setPhases(p => p.map(x => x.id === dbPhase.id ? { ...x, status: e.target.value } : x));
                            } else {
                              alert('Phase row will be created in Supabase SQL editor. Simulated status change.');
                            }
                          }} className="text-xs font-bold border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-600 bg-white focus:outline-none cursor-pointer">
                            {['Completed','In Progress','Upcoming','Delayed'].map(s=><option key={s}>{s}</option>)}
                          </select>
                          <StatusBadge status={status} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── ADMIN TAB: ACTIVITY LOG ── */}
          {curTab === 'logs' && userRole === 'admin' && (
            <div className="max-w-3xl space-y-4">
              <div className="flex justify-end gap-3 items-center">
                <AdminProjectSelector />
                <button onClick={()=>{setEditingItem(null);setShowLogForm(true);}}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0170B9] hover:bg-[#005C9E] text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-[#0170B9]/15">
                  <Plus className="w-4 h-4"/>Post Daily Activity
                </button>
              </div>
              <div className="divide-y divide-slate-100 bg-white rounded-xl border border-slate-200/60 shadow-xs overflow-hidden">
                {dailyLogs.map(log=>(
                  <div key={log.id} className="p-5 hover:bg-slate-50/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-slate-800 text-xs">{log.log_date}</span>
                      <StatusBadge status={log.status_label}/>
                      <span className="text-[10.5px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{log.hours_spent}h · {log.departments_covered}</span>
                      <div className="ml-auto flex gap-1.5">
                        <button onClick={()=>{setEditingItem(log);setShowLogForm(true);}} className="p-1 rounded hover:bg-slate-100 text-slate-400 transition-colors"><Edit2 className="w-3.5 h-3.5"/></button>
                        <button onClick={async()=>{if(confirm('Delete?')){await deletePortalDailyLog(log.id);setDailyLogs(p=>p.filter(l=>l.id!==log.id));}}} className="p-1 rounded hover:bg-rose-50 text-slate-400 hover:text-rose-650 transition-colors"><Trash2 className="w-3.5 h-3.5"/></button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{log.tasks_completed}</p>
                  </div>
                ))}
                {dailyLogs.length === 0 && <p className="text-center text-slate-350 py-12 text-sm">No updates posted yet.</p>}
              </div>
            </div>
          )}

          {/* ── ADMIN TAB: COMMAND CENTER SETTINGS ── */}
          {curTab === 'health' && userRole === 'admin' && currentProject && projectMetrics && (
            <div className="max-w-4xl space-y-6">
              <AdminProjectSelector />

              <div className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-xs space-y-6">
                <div>
                  <h3 className="font-bold text-slate-800 text-base">Executive Transformation Console Parameters</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Control the score values, estimates, and Business Maturity Radar axis percentages representing this project</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-50">
                  {/* Left Column: Scores & Impact Text */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b pb-2 mb-2">1. Scorecard Parameters</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Transformation Score (%)</label>
                        <input type="number" min="0" max="100" value={projectMetrics.transformation_score}
                          onChange={e=>setProjectMetrics({...projectMetrics, transformation_score: Math.min(100, parseInt(e.target.value)||0)})}
                          className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Critical Risks Count</label>
                        <input type="number" min="0" value={projectMetrics.critical_risks}
                          onChange={e=>setProjectMetrics({...projectMetrics, critical_risks: parseInt(e.target.value)||0})}
                          className={inputCls} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Current Corporate Maturity (%)</label>
                        <input type="number" min="0" max="100" value={projectMetrics.current_maturity}
                          onChange={e=>setProjectMetrics({...projectMetrics, current_maturity: Math.min(100, parseInt(e.target.value)||0)})}
                          className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Target Corporate Maturity (%)</label>
                        <input type="number" min="0" max="100" value={projectMetrics.target_maturity}
                          onChange={e=>setProjectMetrics({...projectMetrics, target_maturity: Math.min(100, parseInt(e.target.value)||0)})}
                          className={inputCls} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Recommendations Total</label>
                        <input type="number" min="0" value={projectMetrics.recommendations_total}
                          onChange={e=>setProjectMetrics({...projectMetrics, recommendations_total: parseInt(e.target.value)||0})}
                          className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Recommendations Implemented</label>
                        <input type="number" min="0" value={projectMetrics.recommendations_implemented}
                          onChange={e=>setProjectMetrics({...projectMetrics, recommendations_implemented: parseInt(e.target.value)||0})}
                          className={inputCls} />
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>Value Created Statement</label>
                      <input type="text" value={projectMetrics.value_created}
                        onChange={e=>setProjectMetrics({...projectMetrics, value_created: e.target.value})}
                        className={inputCls} placeholder="e.g. ₹18.4 Lakhs Identified"/>
                    </div>

                    <div>
                      <label className={labelCls}>Business Impact Estimate</label>
                      <input type="text" value={projectMetrics.business_impact}
                        onChange={e=>setProjectMetrics({...projectMetrics, business_impact: e.target.value})}
                        className={inputCls} placeholder="e.g. ₹42 Lakhs"/>
                    </div>

                    <div>
                      <label className={labelCls}>Next Milestone Description</label>
                      <input type="text" value={projectMetrics.next_milestone}
                        onChange={e=>setProjectMetrics({...projectMetrics, next_milestone: e.target.value})}
                        className={inputCls} placeholder="e.g. System Design Controls"/>
                    </div>
                  </div>

                  {/* Right Column: Radar axis settings */}
                  <div className="space-y-4 bg-slate-50/70 border border-slate-100 rounded-xl p-5">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b pb-2 mb-2">2. Business Maturity Radar Scores</h4>
                    
                    {/* Operations */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Operations</span>
                        <span>Current: {projectMetrics.radar_operations}% | Target: {projectMetrics.target_operations}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.radar_operations} onChange={e=>setProjectMetrics({...projectMetrics, radar_operations: parseInt(e.target.value)})} className="w-full accent-[#0170B9] cursor-pointer"/>
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.target_operations} onChange={e=>setProjectMetrics({...projectMetrics, target_operations: parseInt(e.target.value)})} className="w-full accent-[#8CC63F] cursor-pointer"/>
                      </div>
                    </div>

                    {/* Inventory */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Inventory</span>
                        <span>Current: {projectMetrics.radar_inventory}% | Target: {projectMetrics.target_inventory}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.radar_inventory} onChange={e=>setProjectMetrics({...projectMetrics, radar_inventory: parseInt(e.target.value)})} className="w-full accent-[#0170B9] cursor-pointer"/>
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.target_inventory} onChange={e=>setProjectMetrics({...projectMetrics, target_inventory: parseInt(e.target.value)})} className="w-full accent-[#8CC63F] cursor-pointer"/>
                      </div>
                    </div>

                    {/* Data */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Data Visibility</span>
                        <span>Current: {projectMetrics.radar_data}% | Target: {projectMetrics.target_data}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.radar_data} onChange={e=>setProjectMetrics({...projectMetrics, radar_data: parseInt(e.target.value)})} className="w-full accent-[#0170B9] cursor-pointer"/>
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.target_data} onChange={e=>setProjectMetrics({...projectMetrics, target_data: parseInt(e.target.value)})} className="w-full accent-[#8CC63F] cursor-pointer"/>
                      </div>
                    </div>

                    {/* Reporting */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Reporting Maturity</span>
                        <span>Current: {projectMetrics.radar_reporting}% | Target: {projectMetrics.target_reporting}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.radar_reporting} onChange={e=>setProjectMetrics({...projectMetrics, radar_reporting: parseInt(e.target.value)})} className="w-full accent-[#0170B9] cursor-pointer"/>
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.target_reporting} onChange={e=>setProjectMetrics({...projectMetrics, target_reporting: parseInt(e.target.value)})} className="w-full accent-[#8CC63F] cursor-pointer"/>
                      </div>
                    </div>

                    {/* Accountability */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Accountability</span>
                        <span>Current: {projectMetrics.radar_accountability}% | Target: {projectMetrics.target_accountability}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.radar_accountability} onChange={e=>setProjectMetrics({...projectMetrics, radar_accountability: parseInt(e.target.value)})} className="w-full accent-[#0170B9] cursor-pointer"/>
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.target_accountability} onChange={e=>setProjectMetrics({...projectMetrics, target_accountability: parseInt(e.target.value)})} className="w-full accent-[#8CC63F] cursor-pointer"/>
                      </div>
                    </div>

                    {/* Leadership */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Leadership Visibility</span>
                        <span>Current: {projectMetrics.radar_leadership}% | Target: {projectMetrics.target_leadership}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.radar_leadership} onChange={e=>setProjectMetrics({...projectMetrics, radar_leadership: parseInt(e.target.value)})} className="w-full accent-[#0170B9] cursor-pointer"/>
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.target_leadership} onChange={e=>setProjectMetrics({...projectMetrics, target_leadership: parseInt(e.target.value)})} className="w-full accent-[#8CC63F] cursor-pointer"/>
                      </div>
                    </div>

                    {/* Process */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Process Discipline</span>
                        <span>Current: {projectMetrics.radar_process}% | Target: {projectMetrics.target_process}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.radar_process} onChange={e=>setProjectMetrics({...projectMetrics, radar_process: parseInt(e.target.value)})} className="w-full accent-[#0170B9] cursor-pointer"/>
                        <input type="range" min="0" max="100" step="5" value={projectMetrics.target_process} onChange={e=>setProjectMetrics({...projectMetrics, target_process: parseInt(e.target.value)})} className="w-full accent-[#8CC63F] cursor-pointer"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button onClick={() => handleSaveMetrics(projectMetrics)} className="px-5 py-2.5 bg-[#0170B9] hover:bg-[#005C9E] text-white font-bold text-sm rounded-xl transition-all shadow-sm shadow-[#0170B9]/15 flex items-center gap-2">
                    <Save className="w-4.5 h-4.5"/>
                    Save Command Parameters
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

// ─── Form Modals ──────────────────────────────────────────────────────────────

type ModalProps = { Modal: React.FC<{title:string;onClose:()=>void;children:React.ReactNode}>; inputCls:string; labelCls:string; saveBtnCls:string; };

function ClientFormModal({editing,onClose,onSave,Modal,inputCls,labelCls,saveBtnCls}:{editing:any;onClose:()=>void;onSave:(d:any)=>void} & ModalProps){
  const[form,setForm]=useState({company_name:editing?.company_name||'',industry:editing?.industry||'',locations:editing?.locations||'',primary_contact:editing?.primary_contact||'',reporting_personnel:editing?.reporting_personnel||'',contract_start:editing?.contract_start||'',project_status:editing?.project_status||'Active',notes:editing?.notes||'',passcode:''});
  const s=(k:string)=>(e:React.ChangeEvent<any>)=>setForm(f=>({...f,[k]:e.target.value}));
  return(<Modal title={editing?'Edit Client Details':'Create New Client'} onClose={onClose}><div className="space-y-4">
    {[['company_name','Company Name'],['industry','Industry Type'],['locations','Locations Covered'],['primary_contact','Primary Contact Person'],['reporting_personnel','Reporting Staff']].map(([k,l])=>(<div key={k}><label className={labelCls}>{l}</label><input className={inputCls} value={(form as any)[k]} onChange={s(k)} placeholder={`Enter ${l.toLowerCase()}`}/></div>))}
    <div><label className={labelCls}>Contract Start Date</label><input type="date" className={inputCls} value={form.contract_start} onChange={s('contract_start')}/></div>
    <div><label className={labelCls}>Operational Status</label><select className={inputCls} value={form.project_status} onChange={s('project_status')}>{['Active','On Hold','Completed'].map(x=><option key={x}>{x}</option>)}</select></div>
    {!editing&&<div><label className={labelCls}>Access Passcode</label><input type="password" className={inputCls} value={form.passcode} onChange={s('passcode')} placeholder="Create access passcode (e.g. client123)"/></div>}
    <div><label className={labelCls}>Internal Audit Notes</label><textarea className={inputCls} value={form.notes} onChange={s('notes')} rows={2.5} placeholder="Add comments here..."/></div>
    <button className={saveBtnCls} onClick={()=>onSave(form)}><Save className="w-4 h-4"/>Save Client</button>
  </div></Modal>);
}

function ProjectFormModal({editing,clients,onClose,onSave,Modal,inputCls,labelCls,saveBtnCls}:{editing:any;clients:PortalClient[];onClose:()=>void;onSave:(d:any)=>void} & ModalProps){
  const[form,setForm]=useState({client_id:editing?.client_id||clients[0]?.id||'',project_name:editing?.project_name||'',scope_of_work:editing?.scope_of_work||'',objectives:editing?.objectives||'',start_date:editing?.start_date||'',end_date:editing?.end_date||'',status:editing?.status||'On Track',progress_pct:editing?.progress_pct||0,phase_active:editing?.phase_active||1,health_rag:editing?.health_rag||'Green'});
  const s=(k:string)=>(e:React.ChangeEvent<any>)=>setForm(f=>({...f,[k]:e.target.value}));
  return(<Modal title={editing?'Edit Project Specifications':'Create New Engagement'} onClose={onClose}><div className="space-y-4">
    <div><label className={labelCls}>Client Corporation</label><select className={inputCls} value={form.client_id} onChange={s('client_id')}>{clients.map(c=><option key={c.id} value={c.id}>{c.company_name}</option>)}</select></div>
    <div><label className={labelCls}>Project Campaign Name</label><input className={inputCls} value={form.project_name} onChange={s('project_name')} placeholder="e.g. Systems Auditing Campaign"/></div>
    <div><label className={labelCls}>Scope of Work Checklist</label><textarea className={inputCls} value={form.scope_of_work} onChange={s('scope_of_work')} rows={3} placeholder="Describe scope..."/></div>
    <div><label className={labelCls}>Strategic Objectives</label><textarea className={inputCls} value={form.objectives} onChange={s('objectives')} rows={2.5} placeholder="Describe key targets..."/></div>
    <div className="grid grid-cols-2 gap-3.5">
      <div><label className={labelCls}>Start Date</label><input type="date" className={inputCls} value={form.start_date} onChange={s('start_date')}/></div>
      <div><label className={labelCls}>Target End Date</label><input type="date" className={inputCls} value={form.end_date} onChange={s('end_date')}/></div>
    </div>
    <div className="grid grid-cols-2 gap-3.5">
      <div><label className={labelCls}>Status</label><select className={inputCls} value={form.status} onChange={s('status')}>{['On Track','At Risk','Delayed','Completed'].map(x=><option key={x}>{x}</option>)}</select></div>
      <div><label className={labelCls}>Health RAG</label><select className={inputCls} value={form.health_rag} onChange={s('health_rag')}>{['Green','Amber','Red'].map(x=><option key={x}>{x}</option>)}</select></div>
    </div>
    <div><label className={labelCls}>Calculated Progress ({form.progress_pct}%)</label><input type="range" min="0" max="100" step="5" value={form.progress_pct} onChange={e=>setForm(f=>({...f,progress_pct:parseInt(e.target.value)}))} className="w-full accent-[#0170B9] cursor-pointer"/></div>
    <button className={saveBtnCls} onClick={()=>onSave(form)}><Save className="w-4 h-4"/>Save Project</button>
  </div></Modal>);
}

function LogFormModal({editing,onClose,onSave,Modal,inputCls,labelCls,saveBtnCls}:{editing:any;projectId?:string;onClose:()=>void;onSave:(d:any)=>void} & ModalProps){
  const[form,setForm]=useState({log_date:editing?.log_date||new Date().toISOString().split('T')[0],tasks_completed:editing?.tasks_completed||'',hours_spent:editing?.hours_spent||0,departments_covered:editing?.departments_covered||'',observations:editing?.observations||'',meeting_notes:editing?.meeting_notes||'',what_next:editing?.what_next||'',status_label:editing?.status_label||'On Track'});
  const s=(k:string)=>(e:React.ChangeEvent<any>)=>setForm(f=>({...f,[k]:e.target.value}));
  return(<Modal title={editing?'Edit Log Entry':'Post Daily Activity Log'} onClose={onClose}><div className="space-y-4">
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>Date of Entry</label><input type="date" className={inputCls} value={form.log_date} onChange={s('log_date')}/></div><div><label className={labelCls}>Consulting Hours</label><input type="number" step="0.5" className={inputCls} value={form.hours_spent} onChange={s('hours_spent')}/></div></div>
    <div><label className={labelCls}>Departments Audited</label><input className={inputCls} value={form.departments_covered} onChange={s('departments_covered')} placeholder="e.g. Procurement, Showroom Floor"/></div>
    <div><label className={labelCls}>Today's Progress (Completed Tasks)</label><textarea className={inputCls} value={form.tasks_completed} onChange={s('tasks_completed')} rows={2.5} placeholder="What was done today (bullet format)..."/></div>
    <div><label className={labelCls}>Key Insights Discovered</label><textarea className={inputCls} value={form.observations} onChange={s('observations')} rows={2.5} placeholder="Observations or discoveries..."/></div>
    <div><label className={labelCls}>Tomorrow's Focus (Planned Actions)</label><textarea className={inputCls} value={form.what_next} onChange={s('what_next')} rows={2.5} placeholder="Planned next steps..."/></div>
    <div><label className={labelCls}>Meeting / Decision Notes</label><textarea className={inputCls} value={form.meeting_notes} onChange={s('meeting_notes')} rows={2} placeholder="Key decisions made..."/></div>
    <div><label className={labelCls}>RAG Status</label><select className={inputCls} value={form.status_label} onChange={s('status_label')}>{['On Track','At Risk','Delayed','Completed'].map(x=><option key={x}>{x}</option>)}</select></div>
    <button className={saveBtnCls} onClick={()=>onSave(form)}><Save className="w-4 h-4"/>Post Update</button>
  </div></Modal>);
}

function AuditFormModal({editing,onClose,onSave,Modal,inputCls,labelCls,saveBtnCls}:{editing:any;projectId?:string;onClose:()=>void;onSave:(d:any)=>void} & ModalProps){
  const[form,setForm]=useState({department:editing?.department||'',audit_date:editing?.audit_date||new Date().toISOString().split('T')[0],audit_type:editing?.audit_type||'Process',observations:editing?.observations||'',risk_level:editing?.risk_level||'Medium',recommendations:editing?.recommendations||'',corrective_actions:editing?.corrective_actions||'',status:editing?.status||'Open'});
  const s=(k:string)=>(e:React.ChangeEvent<any>)=>setForm(f=>({...f,[k]:e.target.value}));
  return(<Modal title={editing?'Edit Audit Report':'Create Audit Scorecard'} onClose={onClose}><div className="space-y-4">
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>Audited Department</label><input className={inputCls} value={form.department} onChange={s('department')} placeholder="e.g. Inventory, Billing"/></div><div><label className={labelCls}>Audit Date</label><input type="date" className={inputCls} value={form.audit_date} onChange={s('audit_date')}/></div></div>
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>Audit Type</label><select className={inputCls} value={form.audit_type} onChange={s('audit_type')}>{['Process','Inventory','Financial','Compliance'].map(x=><option key={x}>{x}</option>)}</select></div><div><label className={labelCls}>Risk Level / Impact</label><select className={inputCls} value={form.risk_level} onChange={s('risk_level')}>{['Low','Medium','High','Critical'].map(x=><option key={x}>{x}</option>)}</select></div></div>
    <div><label className={labelCls}>Key Findings (Use red: / yellow: / green: indicators)</label><textarea className={inputCls} value={form.observations} onChange={s('observations')} rows={3} placeholder="e.g. red: No barcode system&#10;yellow: Aged stock not monitored"/></div>
    <div><label className={labelCls}>Recommended Action</label><textarea className={inputCls} value={form.recommendations} onChange={s('recommendations')} rows={2.5} placeholder="Enter recommended actions..."/></div>
    <div><label className={labelCls}>Expected Benefits (Use bullet list)</label><textarea className={inputCls} value={form.corrective_actions} onChange={s('corrective_actions')} rows={2.5} placeholder="e.g. - Improved accuracy&#10;- Better visibility"/></div>
    <div><label className={labelCls}>Status</label><select className={inputCls} value={form.status} onChange={s('status')}>{['Open','In Progress','Resolved','Closed'].map(x=><option key={x}>{x}</option>)}</select></div>
    <button className={saveBtnCls} onClick={()=>onSave(form)}><Save className="w-4 h-4"/>Save Audit Scorecard</button>
  </div></Modal>);
}

function RecFormModal({editing,onClose,onSave,Modal,inputCls,labelCls,saveBtnCls}:{editing:any;projectId?:string;onClose:()=>void;onSave:(d:any)=>void} & ModalProps){
  const[form,setForm]=useState({recommendation:editing?.recommendation||'',priority:editing?.priority||'Medium',business_impact:editing?.business_impact||'',owner:editing?.owner||'',target_date:editing?.target_date||'',current_status:editing?.current_status||'Open',approval_status:editing?.approval_status||'Pending',implementation_notes:editing?.implementation_notes||''});
  const s=(k:string)=>(e:React.ChangeEvent<any>)=>setForm(f=>({...f,[k]:e.target.value}));
  return(<Modal title={editing?'Edit Recommendation':'Add New Recommendation'} onClose={onClose}><div className="space-y-4">
    <div><label className={labelCls}>Recommendation Details</label><textarea className={inputCls} value={form.recommendation} onChange={s('recommendation')} rows={3} placeholder="Describe recommended action..."/></div>
    <div><label className={labelCls}>Projected Business Impact</label><textarea className={inputCls} value={form.business_impact} onChange={s('business_impact')} rows={2} placeholder="Describe financial or operational uplift..."/></div>
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>Priority</label><select className={inputCls} value={form.priority} onChange={s('priority')}>{['Low','Medium','High','Critical'].map(x=><option key={x}>{x}</option>)}</select></div><div><label className={labelCls}>Approval Status</label><select className={inputCls} value={form.approval_status} onChange={s('approval_status')}>{['Pending','Approved','Rejected'].map(x=><option key={x}>{x}</option>)}</select></div></div>
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>Implementation Owner</label><input className={inputCls} value={form.owner} onChange={s('owner')} placeholder="e.g. Operations Board"/></div><div><label className={labelCls}>Target Date</label><input type="date" className={inputCls} value={form.target_date} onChange={s('target_date')}/></div></div>
    <div><label className={labelCls}>Status</label><select className={inputCls} value={form.current_status} onChange={s('current_status')}>{['Open','In Progress','Implemented','Closed'].map(x=><option key={x}>{x}</option>)}</select></div>
    <div><label className={labelCls}>Implementation Progress Notes</label><textarea className={inputCls} value={form.implementation_notes} onChange={s('implementation_notes')} rows={2} placeholder="Add progress notes..."/></div>
    <button className={saveBtnCls} onClick={()=>onSave(form)}><Save className="w-4 h-4"/>Save Recommendation</button>
  </div></Modal>);
}

function DelFormModal({editing,onClose,onSave,Modal,inputCls,labelCls,saveBtnCls}:{editing:any;projectId?:string;onClose:()=>void;onSave:(d:any)=>void} & ModalProps){
  const[form,setForm]=useState({name:editing?.name||'',doc_type:editing?.doc_type||'Report',status:editing?.status||'Pending',due_date:editing?.due_date||'',delivered_at:editing?.delivered_at||'',file_url:editing?.file_url||'',file_size:editing?.file_size||'',version:editing?.version||'v1.0',description:editing?.description||''});
  const s=(k:string)=>(e:React.ChangeEvent<any>)=>setForm(f=>({...f,[k]:e.target.value}));
  return(<Modal title={editing?'Edit Deliverable Details':'Add Document / Deliverable'} onClose={onClose}><div className="space-y-4">
    <div><label className={labelCls}>Document Title</label><input className={inputCls} value={form.name} onChange={s('name')} placeholder="e.g. SOP Manual for gold reconciliation"/></div>
    <div><label className={labelCls}>Document Description</label><textarea className={inputCls} value={form.description} onChange={s('description')} rows={2} placeholder="Describe contents..."/></div>
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>Document Type</label><select className={inputCls} value={form.doc_type} onChange={s('doc_type')}>{['SOP','Report','Presentation','Process Map','Dashboard','Training','Meeting Notes','Other'].map(x=><option key={x}>{x}</option>)}</select></div><div><label className={labelCls}>Version</label><input className={inputCls} value={form.version} onChange={s('version')}/></div></div>
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>Due Date</label><input type="date" className={inputCls} value={form.due_date} onChange={s('due_date')}/></div><div><label className={labelCls}>Delivered Date</label><input type="date" className={inputCls} value={form.delivered_at} onChange={s('delivered_at')}/></div></div>
    <div><label className={labelCls}>File URL / Link</label><input className={inputCls} value={form.file_url} onChange={s('file_url')} placeholder="https://drive.google.com/..."/></div>
    <div className="grid grid-cols-2 gap-3.5"><div><label className={labelCls}>File Size</label><input className={inputCls} value={form.file_size} onChange={s('file_size')} placeholder="e.g. 2.4 MB"/></div><div><label className={labelCls}>Status</label><select className={inputCls} value={form.status} onChange={s('status')}>{['Pending','In Progress','Under Review','Delivered'].map(x=><option key={x}>{x}</option>)}</select></div></div>
    <button className={saveBtnCls} onClick={()=>onSave(form)}><Save className="w-4 h-4"/>Save Deliverable</button>
  </div></Modal>);
}