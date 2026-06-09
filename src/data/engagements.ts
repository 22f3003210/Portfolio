// Scale With Abraham — Engagement Tracker & Accountability Dashboard
// Data Models & Mock Database Layer with LocalStorage Syncing

export interface Delay {
  id: string;
  detectedAt: string;
  reasonCategory: string;
  reasonNote: string;
  revisedEndDate: string;
}

export interface Task {
  id: string;
  name: string;
  owner: string;
  plannedStart: string; // YYYY-MM-DD
  plannedEnd: string;   // YYYY-MM-DD
  actualStart?: string; // YYYY-MM-DD
  actualEnd?: string;   // YYYY-MM-DD
  status: 'Completed' | 'In Progress' | 'Delayed' | 'At Risk' | 'Not Started';
  progressPct: number;  // 0 - 100
  delays?: Delay[];
}

export interface Phase {
  id: string;
  phaseNumber: number; // 1 - 6
  name: string;
  status: 'Completed' | 'In Progress' | 'Delayed' | 'Not Started';
  startDate: string;
  endDate: string;
  tasks: Task[];
}

export interface StatusUpdate {
  id: string;
  date: string;
  statusLabel: 'On Track' | 'At Risk' | 'Delayed' | 'Completed';
  updateText: string;
  linkedTasks?: string[];
  acknowledgedAt?: string; // ISO string if client clicked acknowledge
}

export interface Deliverable {
  id: string;
  name: string;
  status: 'Pending' | 'In Progress' | 'Under Review' | 'Delivered';
  dueDate: string;
  deliveredAt?: string;
  fileUrl?: string;
  fileSize?: string;
  version: string;
  comments?: { author: string; text: string; date: string }[];
}

export interface MeetingNote {
  id: string;
  date: string;
  title: string;
  summary: string;
  decisions: string[];
}

export interface Engagement {
  id: string;
  clientName: string;
  businessName: string;
  industry: string;
  startDate: string;
  expectedEndDate: string;
  status: 'On Track' | 'At Risk' | 'Delayed' | 'Completed';
  phaseActive: number; // 1 - 6
  progressPct: number; // Calculated overall progress
  passcode: string;    // Raw code (or checked against hash)
  passcodeHash: string; // SHA256 of passcode for login verification
  phases: Phase[];
  statusUpdates: StatusUpdate[];
  deliverables: Deliverable[];
  meetingNotes: MeetingNote[];
}

// Initial seed data for the engagements
const initialEngagements: Engagement[] = [
  {
    id: 'kalyan-jewellers',
    clientName: 'Kalyan Jewellers',
    businessName: 'Kalyan Jewellers Ltd',
    industry: 'Jewellery Retail',
    startDate: '2026-06-01',
    expectedEndDate: '2026-07-31',
    status: 'On Track',
    phaseActive: 3,
    progressPct: 42,
    passcode: 'kalyan123',
    passcodeHash: 'c30f40fb1ff993dfb3a95db981a8b6528df3a0c7b3992b45155f9f09101b0b53', // kalyan123
    phases: [
      {
        id: 'kalyan-p1',
        phaseNumber: 1,
        name: 'Understand the Business Objective',
        status: 'Completed',
        startDate: '2026-06-01',
        endDate: '2026-06-07',
        tasks: [
          { id: 'k-t1-1', name: 'Stakeholder Alignment Meeting', owner: 'Abraham S', plannedStart: '2026-06-01', plannedEnd: '2026-06-03', actualStart: '2026-06-01', actualEnd: '2026-06-03', status: 'Completed', progressPct: 100 },
          { id: 'k-t1-2', name: 'Define Scaling & Margin KPI Targets', owner: 'Abraham S & Kalyan Board', plannedStart: '2026-06-04', plannedEnd: '2026-06-07', actualStart: '2026-06-04', actualEnd: '2026-06-06', status: 'Completed', progressPct: 100 }
        ]
      },
      {
        id: 'kalyan-p2',
        name: 'Identify the Gaps',
        phaseNumber: 2,
        status: 'Completed',
        startDate: '2026-06-08',
        endDate: '2026-06-18',
        tasks: [
          { id: 'k-t2-1', name: 'Audit Existing CRM & Lead Workflows', owner: 'Abraham S & Showroom Managers', plannedStart: '2026-06-08', plannedEnd: '2026-06-12', actualStart: '2026-06-08', actualEnd: '2026-06-12', status: 'Completed', progressPct: 100 },
          { 
            id: 'k-t2-2', 
            name: 'Identify Inventory Leakage Gaps', 
            owner: 'Abraham S', 
            plannedStart: '2026-06-13', 
            plannedEnd: '2026-06-18', 
            actualStart: '2026-06-13', 
            actualEnd: '2026-06-19', 
            status: 'Completed', 
            progressPct: 100,
            delays: [
              {
                id: 'del-1',
                detectedAt: '2026-06-18T18:00:00Z',
                reasonCategory: 'Client Data Not Provided',
                reasonNote: 'Waiting for raw gold exchange reports from the Mumbai regional office ERP.',
                revisedEndDate: '2026-06-19'
              }
            ]
          }
        ]
      },
      {
        id: 'kalyan-p3',
        name: 'Design the System',
        phaseNumber: 3,
        status: 'In Progress',
        startDate: '2026-06-19',
        endDate: '2026-06-30',
        tasks: [
          { id: 'k-t3-1', name: 'ERP Controls & Security Engineering', owner: 'Abraham S & IT Team', plannedStart: '2026-06-19', plannedEnd: '2026-06-25', status: 'In Progress', progressPct: 60 },
          { id: 'k-t3-2', name: 'Automated Process Approval Workflows', owner: 'Abraham S', plannedStart: '2026-06-26', plannedEnd: '2026-06-30', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'kalyan-p4',
        name: 'Generate Meaningful Insights',
        phaseNumber: 4,
        status: 'Not Started',
        startDate: '2026-07-01',
        endDate: '2026-07-10',
        tasks: [
          { id: 'k-t4-1', name: 'Custom KPI Dashboards Implementation', owner: 'Abraham S & Dev Team', plannedStart: '2026-07-01', plannedEnd: '2026-07-06', status: 'Not Started', progressPct: 0 },
          { id: 'k-t4-2', name: 'Diagnostic Leakage Reports Automations', owner: 'Abraham S', plannedStart: '2026-07-07', plannedEnd: '2026-07-10', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'kalyan-p5',
        name: 'Enable Better Decisions',
        phaseNumber: 5,
        status: 'Not Started',
        startDate: '2026-07-11',
        endDate: '2026-07-20',
        tasks: [
          { id: 'k-t5-1', name: 'Management Handover & Decisions Training', owner: 'Abraham S & Executive Directors', plannedStart: '2026-07-11', plannedEnd: '2026-07-15', status: 'Not Started', progressPct: 0 },
          { id: 'k-t5-2', name: 'Showroom Staff Standard Operating Audits', owner: 'Abraham S & Audit Leads', plannedStart: '2026-07-16', plannedEnd: '2026-07-20', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'kalyan-p6',
        name: 'Create Measurable Business Impact',
        phaseNumber: 6,
        status: 'Not Started',
        startDate: '2026-07-21',
        endDate: '2026-07-31',
        tasks: [
          { id: 'k-t6-1', name: 'Measure Margin Protection Metrics', owner: 'Abraham S & CFO Office', plannedStart: '2026-07-21', plannedEnd: '2026-07-26', status: 'Not Started', progressPct: 0 },
          { id: 'k-t6-2', name: 'Optimize Inventory Turn Rate Controls', owner: 'Abraham S', plannedStart: '2026-07-27', plannedEnd: '2026-07-31', status: 'Not Started', progressPct: 0 }
        ]
      }
    ],
    statusUpdates: [
      {
        id: 'k-up-3',
        date: '2026-06-22',
        statusLabel: 'On Track',
        updateText: 'ERP Controls Engineering is currently 60% complete. Security masking matrix for customer PII has been written. Custom roles are being configured in ERP sandbox.'
      },
      {
        id: 'k-up-2',
        date: '2026-06-19',
        statusLabel: 'Completed',
        updateText: 'Completed CRM & Inventory Leakage audits. Identified ₹1.2 Cr in annual margin erosion. Gap audit report has been compiled and uploaded to the Deliverables vault.'
      },
      {
        id: 'k-up-1',
        date: '2026-06-12',
        statusLabel: 'On Track',
        updateText: 'Customer first interaction and lead workflows have been fully audited. Ready for dashboard requirements specification.'
      }
    ],
    deliverables: [
      {
        id: 'k-d-1',
        name: 'Operational Gap Analysis & Leakage Assessment Report',
        status: 'Delivered',
        dueDate: '2026-06-18',
        deliveredAt: '2026-06-19',
        fileUrl: '#/reports/gap-analysis-kalyan',
        fileSize: '2.4 MB',
        version: 'v1.0'
      },
      {
        id: 'k-d-2',
        name: 'ERP Governance & Controls Architecture Specifications',
        status: 'Under Review',
        dueDate: '2026-06-30',
        fileUrl: '#/reports/erp-controls-kalyan',
        fileSize: '4.8 MB',
        version: 'v0.9'
      },
      {
        id: 'k-d-3',
        name: 'Executive Boardroom KPI System Handover',
        status: 'Pending',
        dueDate: '2026-07-15',
        version: 'v0.1'
      }
    ],
    meetingNotes: [
      {
        id: 'k-m-2',
        date: '2026-06-20',
        title: 'ERP Security & Access Masking Review',
        summary: 'Met with VP of IT and Chief Compliance Officer to review gold procurement verification workflows.',
        decisions: [
          'Enforce OTP verification for Old Gold procurement transactions exceeding 100g.',
          'Mask phone numbers in ERP front-end grids for branch sales teams to prevent DB scraping.'
        ]
      },
      {
        id: 'k-m-1',
        date: '2026-06-02',
        title: 'Project Kickoff & Engagement Boundary Scope',
        summary: 'Aligned with Kalyan board on the 6-step roadmap, expectations, and critical deliverables list.',
        decisions: [
          'Monthly turnover target set for leakage analysis: ₹450 Cr.',
          'Passcode gates initialized for stakeholder access control.'
        ]
      }
    ]
  },
  {
    id: 'malabar-gold',
    clientName: 'Malabar Gold & Diamonds',
    businessName: 'Malabar Gold Group',
    industry: 'Jewellery Retail & Manufacturing',
    startDate: '2026-06-10',
    expectedEndDate: '2026-08-15',
    status: 'At Risk',
    phaseActive: 2,
    progressPct: 18,
    passcode: 'malabar123',
    passcodeHash: '3a228f42fa02187f54c259888ec98a0dc679eb7366fae9682cfbb05408a2df14', // malabar123
    phases: [
      {
        id: 'm-p1',
        phaseNumber: 1,
        name: 'Understand the Business Objective',
        status: 'Completed',
        startDate: '2026-06-10',
        endDate: '2026-06-16',
        tasks: [
          { id: 'm-t1-1', name: 'Kickoff meeting & Corporate Objectives Alignment', owner: 'Abraham S & Malabar Directors', plannedStart: '2026-06-10', plannedEnd: '2026-06-12', actualStart: '2026-06-10', actualEnd: '2026-06-12', status: 'Completed', progressPct: 100 },
          { id: 'm-t1-2', name: 'Establish Baseline Inventory Valuation Matrix', owner: 'Abraham S', plannedStart: '2026-06-13', plannedEnd: '2026-06-16', actualStart: '2026-06-13', actualEnd: '2026-06-16', status: 'Completed', progressPct: 100 }
        ]
      },
      {
        id: 'm-p2',
        name: 'Identify the Gaps',
        phaseNumber: 2,
        status: 'Delayed',
        startDate: '2026-06-17',
        endDate: '2026-06-28',
        tasks: [
          { id: 'm-t2-1', name: 'Audit Manufacturing Job Work Gaps', owner: 'Abraham S', plannedStart: '2026-06-17', plannedEnd: '2026-06-22', status: 'Delayed', progressPct: 40, delays: [
            {
              id: 'm-del-1',
              detectedAt: '2026-06-22T09:00:00Z',
              reasonCategory: 'Client Data Not Provided',
              reasonNote: 'Showroom and manufacturing scrap accounts registers have not been compiled.',
              revisedEndDate: '2026-06-26'
            }
          ] },
          { id: 'm-t2-2', name: 'Analyse Sub-Contractor Scrap Recovery', owner: 'Abraham S & Manufacturing CCO', plannedStart: '2026-06-23', plannedEnd: '2026-06-28', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'm-p3',
        name: 'Design the System',
        phaseNumber: 3,
        status: 'Not Started',
        startDate: '2026-06-29',
        endDate: '2026-07-12',
        tasks: [
          { id: 'm-t3-1', name: 'Design Dual-Lock Inventory Transfer System', owner: 'Abraham S', plannedStart: '2026-06-29', plannedEnd: '2026-07-05', status: 'Not Started', progressPct: 0 },
          { id: 'm-t3-2', name: 'Job Work Reclamation Protocols Configuration', owner: 'Abraham S & Dev Team', plannedStart: '2026-07-06', plannedEnd: '2026-07-12', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'm-p4',
        name: 'Generate Meaningful Insights',
        phaseNumber: 4,
        status: 'Not Started',
        startDate: '2026-07-13',
        endDate: '2026-07-24',
        tasks: [
          { id: 'm-t4-1', name: 'Custom Inventory Turn Metrics Dashboard', owner: 'Abraham S', plannedStart: '2026-07-13', plannedEnd: '2026-07-18', status: 'Not Started', progressPct: 0 },
          { id: 'm-t4-2', name: 'Scrap & Recovery Leakage Alerter', owner: 'Abraham S & Dev Team', plannedStart: '2026-07-19', plannedEnd: '2026-07-24', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'm-p5',
        name: 'Enable Better Decisions',
        phaseNumber: 5,
        status: 'Not Started',
        startDate: '2026-07-25',
        endDate: '2026-08-04',
        tasks: [
          { id: 'm-t5-1', name: 'Job Work Audit Handover & Training Sessions', owner: 'Abraham S', plannedStart: '2026-07-25', plannedEnd: '2026-07-30', status: 'Not Started', progressPct: 0 },
          { id: 'm-t5-2', name: 'Sub-Contracting Vendor SLA Enforcement', owner: 'Abraham S & Purchasing Head', plannedStart: '2026-07-31', plannedEnd: '2026-08-04', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'm-p6',
        name: 'Create Measurable Business Impact',
        phaseNumber: 6,
        status: 'Not Started',
        startDate: '2026-08-05',
        endDate: '2026-08-15',
        tasks: [
          { id: 'm-t6-1', name: 'Gold Recovery Optimization Audit', owner: 'Abraham S & CFO Office', plannedStart: '2026-08-05', plannedEnd: '2026-08-10', status: 'Not Started', progressPct: 0 },
          { id: 'm-t6-2', name: 'Review Post-System Scrap Margins', owner: 'Abraham S', plannedStart: '2026-08-11', plannedEnd: '2026-08-15', status: 'Not Started', progressPct: 0 }
        ]
      }
    ],
    statusUpdates: [
      {
        id: 'm-up-2',
        date: '2026-06-22',
        statusLabel: 'Delayed',
        updateText: 'Audit of Manufacturing Job Work is delayed. We are awaiting manufacturing gold-scrap registers from the Cochin refinery.'
      },
      {
        id: 'm-up-1',
        date: '2026-06-16',
        statusLabel: 'Completed',
        updateText: 'Completed objectives alignment phase. Baseline inventory valuation matrix has been finalized.'
      }
    ],
    deliverables: [
      {
        id: 'm-d-1',
        name: 'Jewellery Objectives Alignment Memo & Charter',
        status: 'Delivered',
        dueDate: '2026-06-15',
        deliveredAt: '2026-06-16',
        fileUrl: '#/reports/charter-malabar',
        fileSize: '1.8 MB',
        version: 'v1.0'
      },
      {
        id: 'm-d-2',
        name: 'Manufacturing & Sub-Contractor Scrap Audit Report',
        status: 'In Progress',
        dueDate: '2026-06-28',
        version: 'v0.2'
      }
    ],
    meetingNotes: [
      {
        id: 'm-m-1',
        date: '2026-06-11',
        title: 'Project Kickoff & Scrap Reconciliation Metrics',
        summary: 'Met with Cochin Plant director to define sub-contracting scrap recovery thresholds.',
        decisions: [
          'Standard scrap allowance set to 0.4% maximum on job work.',
          'Reconciliation reporting will run weekly.'
        ]
      }
    ]
  },
  {
    id: 'reliance-retail',
    clientName: 'Reliance Retail',
    businessName: 'Reliance Retail Ltd (Jewellery Division)',
    industry: 'Enterprise Retail Chains',
    startDate: '2026-05-15',
    expectedEndDate: '2026-07-08',
    status: 'On Track',
    phaseActive: 5,
    progressPct: 79,
    passcode: 'reliance123',
    passcodeHash: 'e62c114f4e2f3d6dbf4369e160e1d5e3be5b0728c6dc203a948b81f1857b2e3e', // reliance123
    phases: [
      {
        id: 'r-p1',
        phaseNumber: 1,
        name: 'Understand the Business Objective',
        status: 'Completed',
        startDate: '2026-05-15',
        endDate: '2026-05-21',
        tasks: [
          { id: 'r-t1-1', name: 'Strategic Objectives Formulation', owner: 'Abraham S & Reliance EVP', plannedStart: '2026-05-15', plannedEnd: '2026-05-18', actualStart: '2026-05-15', actualEnd: '2026-05-18', status: 'Completed', progressPct: 100 },
          { id: 'r-t1-2', name: 'Define KPI & Multi-Store Control Scope', owner: 'Abraham S', plannedStart: '2026-05-19', plannedEnd: '2026-05-21', actualStart: '2026-05-19', actualEnd: '2026-05-21', status: 'Completed', progressPct: 100 }
        ]
      },
      {
        id: 'r-p2',
        name: 'Identify the Gaps',
        phaseNumber: 2,
        status: 'Completed',
        startDate: '2026-05-22',
        endDate: '2026-06-02',
        tasks: [
          { id: 'r-t2-1', name: 'Multi-Store Branch Transfer Gap Audits', owner: 'Abraham S', plannedStart: '2026-05-22', plannedEnd: '2026-05-27', actualStart: '2026-05-22', actualEnd: '2026-05-27', status: 'Completed', progressPct: 100 },
          { id: 'r-t2-2', name: 'Exchange & Buyback Fraud Leakage Review', owner: 'Abraham S', plannedStart: '2026-05-28', plannedEnd: '2026-06-02', actualStart: '2026-05-28', actualEnd: '2026-06-02', status: 'Completed', progressPct: 100 }
        ]
      },
      {
        id: 'r-p3',
        name: 'Design the System',
        phaseNumber: 3,
        status: 'Completed',
        startDate: '2026-06-03',
        endDate: '2026-06-12',
        tasks: [
          { id: 'r-t3-1', name: 'Standardize Transit Reconciliation Controls', owner: 'Abraham S & Supply Chain VP', plannedStart: '2026-06-03', plannedEnd: '2026-06-07', actualStart: '2026-06-03', actualEnd: '2026-06-07', status: 'Completed', progressPct: 100 },
          { id: 'r-t3-2', name: 'Deploy Gold Buyback Verification Gates', owner: 'Abraham S', plannedStart: '2026-06-08', plannedEnd: '2026-06-12', actualStart: '2026-06-08', actualEnd: '2026-06-12', status: 'Completed', progressPct: 100 }
        ]
      },
      {
        id: 'r-p4',
        name: 'Generate Meaningful Insights',
        phaseNumber: 4,
        status: 'Completed',
        startDate: '2026-06-13',
        endDate: '2026-06-21',
        tasks: [
          { id: 'r-t4-1', name: 'Reconcile Regional Transit Heatmaps', owner: 'Abraham S & Dev Team', plannedStart: '2026-06-13', plannedEnd: '2026-06-17', actualStart: '2026-06-13', actualEnd: '2026-06-17', status: 'Completed', progressPct: 100 },
          { id: 'r-t4-2', name: 'Build Real-Time Store Margin Leakage Dashboards', owner: 'Abraham S & Dev Team', plannedStart: '2026-06-18', plannedEnd: '2026-06-21', actualStart: '2026-06-18', actualEnd: '2026-06-21', status: 'Completed', progressPct: 100 }
        ]
      },
      {
        id: 'r-p5',
        name: 'Enable Better Decisions',
        phaseNumber: 5,
        status: 'In Progress',
        startDate: '2026-06-22',
        endDate: '2026-06-28',
        tasks: [
          { id: 'r-t5-1', name: 'Train Multi-Store Regional Audit Managers', owner: 'Abraham S', plannedStart: '2026-06-22', plannedEnd: '2026-06-25', status: 'In Progress', progressPct: 40 },
          { id: 'r-t5-2', name: 'Publish Store Loss Action Protocols', owner: 'Abraham S', plannedStart: '2026-06-26', plannedEnd: '2026-06-28', status: 'Not Started', progressPct: 0 }
        ]
      },
      {
        id: 'r-p6',
        name: 'Create Measurable Business Impact',
        phaseNumber: 6,
        status: 'Not Started',
        startDate: '2026-06-29',
        endDate: '2026-07-08',
        tasks: [
          { id: 'r-t6-1', name: 'Verify Zero Transit Discrepancies target', owner: 'Abraham S & Supply Chain CCO', plannedStart: '2026-06-29', plannedEnd: '2026-07-03', status: 'Not Started', progressPct: 0 },
          { id: 'r-t6-2', name: 'Evaluate Audit Cycle Turnaround Time Improvements', owner: 'Abraham S', plannedStart: '2026-07-04', plannedEnd: '2026-07-08', status: 'Not Started', progressPct: 0 }
        ]
      }
    ],
    statusUpdates: [
      {
        id: 'r-up-2',
        date: '2026-06-22',
        statusLabel: 'On Track',
        updateText: 'Kicked off training for Regional Audit Managers across 12 territories. Regional transit dashboards are live.'
      },
      {
        id: 'r-up-1',
        date: '2026-06-18',
        statusLabel: 'Completed',
        updateText: 'Reconciled multi-store transit logs. Gap audit shows a 94% improvement in tracking gold transfer discrepancies.'
      }
    ],
    deliverables: [
      {
        id: 'r-d-1',
        name: 'Multi-Store Gold Transit Reconciliation Gap Assessment',
        status: 'Delivered',
        dueDate: '2026-06-02',
        deliveredAt: '2026-06-02',
        fileUrl: '#/reports/transit-reconciliation-reliance',
        fileSize: '5.2 MB',
        version: 'v1.0'
      },
      {
        id: 'r-d-2',
        name: 'Regional Multi-Store Margin Alerter Dashboard Handbook',
        status: 'Delivered',
        dueDate: '2026-06-20',
        deliveredAt: '2026-06-21',
        fileUrl: '#/reports/handbook-reliance',
        fileSize: '3.6 MB',
        version: 'v1.0'
      }
    ],
    meetingNotes: [
      {
        id: 'r-m-1',
        date: '2026-05-18',
        title: 'Supply Chain Operations scoping',
        summary: 'Met with VP of Logistics to map the transit path from Central Mumbai Warehouse to individual stores.',
        decisions: [
          'Logistics will scan barcoded security bags at both shipping and receiving endpoints.',
          'Flag all bag transit delays exceeding 48 hours for immediate investigation.'
        ]
      }
    ]
  }
];

const STORAGE_KEY = 'scale_with_abraham_engagements';

export function getStoredEngagements(): Engagement[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEngagements));
    return initialEngagements;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('Error parsing engagements storage:', e);
    return initialEngagements;
  }
}

export function saveStoredEngagements(engagements: Engagement[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(engagements));
  // Dispatches storage event for same-window syncing if necessary
  window.dispatchEvent(new Event('storage'));
}

export function resetStoredEngagements() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEngagements));
  window.dispatchEvent(new Event('storage'));
}

export function updateEngagementTask(
  clientId: string,
  taskId: string,
  updates: Partial<Task>,
  delayLog?: Omit<Delay, 'id' | 'detectedAt'>
) {
  const engagements = getStoredEngagements();
  const updated = engagements.map(engagement => {
    if (engagement.id !== clientId) return engagement;

    const updatedPhases = engagement.phases.map(phase => {
      const updatedTasks = phase.tasks.map(task => {
        if (task.id !== taskId) return task;

        const newDelays = task.delays ? [...task.delays] : [];
        if (delayLog) {
          newDelays.push({
            id: 'del-' + Date.now(),
            detectedAt: new Date().toISOString(),
            ...delayLog
          });
        }

        const newProgress = updates.progressPct !== undefined ? updates.progressPct : task.progressPct;
        const newStatus = updates.status || (newProgress === 100 ? 'Completed' : task.status);

        return {
          ...task,
          ...updates,
          status: newStatus as Task['status'],
          delays: newDelays
        };
      });

      // Recalculate phase dates and status based on task updates
      const allTasksCompleted = updatedTasks.every(t => t.status === 'Completed');
      const anyTaskInProgress = updatedTasks.some(t => t.status === 'In Progress');
      const anyTaskDelayed = updatedTasks.some(t => t.status === 'Delayed');

      let phaseStatus: Phase['status'] = 'Not Started';
      if (allTasksCompleted) phaseStatus = 'Completed';
      else if (anyTaskDelayed) phaseStatus = 'Delayed';
      else if (anyTaskInProgress || updatedTasks.some(t => t.progressPct > 0)) phaseStatus = 'In Progress';

      return {
        ...phase,
        tasks: updatedTasks,
        status: phaseStatus
      };
    });

    // Recalculate engagement overall progress
    const allTasks = updatedPhases.flatMap(p => p.tasks);
    const completedTasksCount = allTasks.filter(t => t.status === 'Completed').length;
    const progressPct = allTasks.length > 0 
      ? Math.round((completedTasksCount / allTasks.length) * 100)
      : 0;

    // Recalculate active phase (first phase that is not completed)
    const firstActivePhase = updatedPhases.find(p => p.status !== 'Completed');
    const phaseActive = firstActivePhase ? firstActivePhase.phaseNumber : 6;

    // Determine overall engagement status
    const anyDelayed = allTasks.some(t => t.status === 'Delayed');
    const anyAtRisk = allTasks.some(t => t.status === 'At Risk');
    let status: Engagement['status'] = 'On Track';
    if (progressPct === 100) status = 'Completed';
    else if (anyDelayed) status = 'Delayed';
    else if (anyAtRisk) status = 'At Risk';

    return {
      ...engagement,
      phases: updatedPhases,
      progressPct,
      phaseActive,
      status
    };
  });

  saveStoredEngagements(updated);
}

export function addStatusUpdate(clientId: string, updateText: string, statusLabel: StatusUpdate['statusLabel']) {
  const engagements = getStoredEngagements();
  const updated = engagements.map(engagement => {
    if (engagement.id !== clientId) return engagement;

    const newUpdate: StatusUpdate = {
      id: 'up-' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      statusLabel,
      updateText
    };

    return {
      ...engagement,
      statusUpdates: [newUpdate, ...engagement.statusUpdates],
      status: statusLabel as Engagement['status']
    };
  });
  saveStoredEngagements(updated);
}

export function updateDeliverableStatus(
  clientId: string,
  deliverableId: string,
  status: Deliverable['status'],
  fileUrl?: string,
  fileSize?: string
) {
  const engagements = getStoredEngagements();
  const updated = engagements.map(engagement => {
    if (engagement.id !== clientId) return engagement;

    const updatedDeliverables = engagement.deliverables.map(del => {
      if (del.id !== deliverableId) return del;
      return {
        ...del,
        status,
        deliveredAt: status === 'Delivered' ? new Date().toISOString().split('T')[0] : del.deliveredAt,
        fileUrl: fileUrl || del.fileUrl,
        fileSize: fileSize || del.fileSize
      };
    });

    return {
      ...engagement,
      deliverables: updatedDeliverables
    };
  });
  saveStoredEngagements(updated);
}

export function addDeliverableComment(
  clientId: string,
  deliverableId: string,
  commentText: string,
  author: string = 'Client'
) {
  const engagements = getStoredEngagements();
  const updated = engagements.map(engagement => {
    if (engagement.id !== clientId) return engagement;

    const updatedDeliverables = engagement.deliverables.map(del => {
      if (del.id !== deliverableId) return del;
      const comments = del.comments ? [...del.comments] : [];
      comments.push({
        author,
        text: commentText,
        date: new Date().toISOString().split('T')[0]
      });
      return {
        ...del,
        comments
      };
    });

    return {
      ...engagement,
      deliverables: updatedDeliverables
    };
  });
  saveStoredEngagements(updated);
}
