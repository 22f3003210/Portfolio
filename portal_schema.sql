-- ============================================================
-- SCALE WITH ABRAHAM — CLIENT INTELLIGENCE PORTAL
-- Supabase SQL Schema v2.0
-- Run this in your Supabase SQL Editor
-- ============================================================

-- ============================================================
-- 1. CLIENTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  company_name TEXT NOT NULL,
  industry TEXT DEFAULT '',
  locations TEXT DEFAULT '',
  primary_contact TEXT DEFAULT '',
  reporting_personnel TEXT DEFAULT '',
  contract_start DATE,
  project_status TEXT DEFAULT 'Active',  -- Active, On Hold, Completed
  passcode_hash TEXT NOT NULL,            -- SHA-256 hash of client passcode
  notes TEXT DEFAULT ''
);

-- ============================================================
-- 2. PROJECTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  client_id UUID REFERENCES portal_clients(id) ON DELETE CASCADE,
  project_name TEXT NOT NULL,
  scope_of_work TEXT DEFAULT '',
  objectives TEXT DEFAULT '',
  start_date DATE,
  end_date DATE,
  deliverables TEXT DEFAULT '',
  success_metrics TEXT DEFAULT '',
  status TEXT DEFAULT 'On Track',         -- On Track, At Risk, Delayed, Completed
  progress_pct INTEGER DEFAULT 0,
  phase_active INTEGER DEFAULT 1,
  health_rag TEXT DEFAULT 'Green'         -- Green, Amber, Red
);

-- ============================================================
-- 3. PROJECT PHASES TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_phases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  phase_number INTEGER NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'Not Started',      -- Not Started, In Progress, Delayed, Completed
  start_date DATE,
  end_date DATE,
  sort_order INTEGER DEFAULT 0
);

-- ============================================================
-- 4. PROJECT TASKS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase_id UUID REFERENCES portal_phases(id) ON DELETE CASCADE,
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  owner TEXT DEFAULT 'Abraham S',
  planned_start DATE,
  planned_end DATE,
  actual_start DATE,
  actual_end DATE,
  status TEXT DEFAULT 'Not Started',      -- Not Started, In Progress, Delayed, At Risk, Completed
  progress_pct INTEGER DEFAULT 0,
  delay_reason_category TEXT DEFAULT '',
  delay_reason_note TEXT DEFAULT '',
  delay_revised_end DATE,
  sort_order INTEGER DEFAULT 0
);

-- ============================================================
-- 5. SCOPE OF WORK ITEMS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_scope_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  status TEXT DEFAULT 'Not Started',      -- Completed, In Progress, Upcoming, Delayed, Not Started
  target_date DATE,
  completed_date DATE,
  sort_order INTEGER DEFAULT 0
);

-- ============================================================
-- 6. DAILY ACTIVITY LOGS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_daily_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  tasks_completed TEXT DEFAULT '',
  hours_spent NUMERIC(4,1) DEFAULT 0,
  departments_covered TEXT DEFAULT '',
  observations TEXT DEFAULT '',
  meeting_notes TEXT DEFAULT '',
  what_next TEXT DEFAULT '',
  status_label TEXT DEFAULT 'On Track'    -- On Track, At Risk, Delayed, Completed
);

-- ============================================================
-- 7. AUDIT REPORTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_audits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  department TEXT NOT NULL,
  audit_date DATE,
  audit_type TEXT DEFAULT 'Process',      -- Process, Inventory, Financial, Compliance
  observations TEXT DEFAULT '',
  evidence TEXT DEFAULT '',
  risk_level TEXT DEFAULT 'Low',          -- Low, Medium, High, Critical
  recommendations TEXT DEFAULT '',
  corrective_actions TEXT DEFAULT '',
  status TEXT DEFAULT 'Open'              -- Open, In Progress, Resolved, Closed
);

-- ============================================================
-- 8. GAP ANALYSIS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_gaps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  current_state TEXT DEFAULT '',
  expected_state TEXT DEFAULT '',
  gap_identified TEXT DEFAULT '',
  impact TEXT DEFAULT 'Medium',           -- Low, Medium, High
  priority TEXT DEFAULT 'Medium',         -- Low, Medium, High, Critical
  owner TEXT DEFAULT '',
  target_date DATE,
  status TEXT DEFAULT 'Open'              -- Open, Accepted, In Progress, Resolved, Closed
);

-- ============================================================
-- 9. RECOMMENDATIONS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  recommendation TEXT NOT NULL,
  priority TEXT DEFAULT 'Medium',         -- Low, Medium, High, Critical
  business_impact TEXT DEFAULT '',
  owner TEXT DEFAULT '',
  target_date DATE,
  current_status TEXT DEFAULT 'Open',     -- Open, In Progress, Implemented, Closed
  approval_status TEXT DEFAULT 'Pending', -- Pending, Approved, Rejected
  implementation_notes TEXT DEFAULT ''
);

-- ============================================================
-- 10. DELIVERABLES / DOCUMENTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_deliverables (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  doc_type TEXT DEFAULT 'Report',         -- SOP, Report, Presentation, Process Map, Dashboard, Training, Meeting Notes, Other
  status TEXT DEFAULT 'Pending',          -- Pending, In Progress, Under Review, Delivered
  due_date DATE,
  delivered_at DATE,
  file_url TEXT DEFAULT '',
  file_size TEXT DEFAULT '',
  version TEXT DEFAULT 'v1.0',
  description TEXT DEFAULT ''
);

-- ============================================================
-- 11. COMMUNICATION / COMMENTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS portal_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  project_id UUID REFERENCES portal_projects(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  author_role TEXT DEFAULT 'Client',      -- Admin, Client
  message TEXT NOT NULL,
  thread_type TEXT DEFAULT 'General',     -- General, Clarification, Approval, Question, Decision
  resolved BOOLEAN DEFAULT FALSE
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE portal_clients       ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_projects      ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_phases        ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_tasks         ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_scope_items   ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_daily_logs    ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_audits        ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_gaps          ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_deliverables  ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_comments      ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- PUBLIC ACCESS POLICIES (anon key access)
-- The app handles auth via passcode hashing — no Supabase Auth
-- ============================================================
DO $$
DECLARE
  tbl TEXT;
  tables TEXT[] := ARRAY[
    'portal_clients','portal_projects','portal_phases','portal_tasks',
    'portal_scope_items','portal_daily_logs','portal_audits','portal_gaps',
    'portal_recommendations','portal_deliverables','portal_comments'
  ];
BEGIN
  FOREACH tbl IN ARRAY tables LOOP
    EXECUTE format('CREATE POLICY "Allow anon select on %I" ON %I FOR SELECT USING (true);', tbl, tbl);
    EXECUTE format('CREATE POLICY "Allow anon insert on %I" ON %I FOR INSERT WITH CHECK (true);', tbl, tbl);
    EXECUTE format('CREATE POLICY "Allow anon update on %I" ON %I FOR UPDATE USING (true);', tbl, tbl);
    EXECUTE format('CREATE POLICY "Allow anon delete on %I" ON %I FOR DELETE USING (true);', tbl, tbl);
  END LOOP;
END $$;

-- ============================================================
-- SEED DATA — Demo client: Kalyan Jewellers
-- Admin passcode: scale123
-- Client passcode: kalyan123  (hash: c30f40fb...)
-- ============================================================
INSERT INTO portal_clients (id, company_name, industry, locations, primary_contact, reporting_personnel, contract_start, project_status, passcode_hash) VALUES
  ('a1b2c3d4-0001-0001-0001-000000000001', 'Kalyan Jewellers', 'Jewellery Retail', 'Mumbai, Chennai, Cochin', 'MD – Kalyan Board', 'Store Manager – Andheri Branch', '2026-06-01', 'Active', 'c30f40fb1ff993dfb3a95db981a8b6528df3a0c7b3992b45155f9f09101b0b53'),
  ('a1b2c3d4-0002-0002-0002-000000000002', 'Malabar Gold & Diamonds', 'Jewellery Retail & Manufacturing', 'Cochin, Dubai, Riyadh', 'COO – Malabar Group', 'Operations Manager', '2026-06-10', 'Active', '3a228f42fa02187f54c259888ec98a0dc679eb7366fae9682cfbb05408a2df14'),
  ('a1b2c3d4-0003-0003-0003-000000000003', 'Reliance Retail', 'Enterprise Retail Chains', 'Mumbai, Delhi, Bangalore', 'EVP – Jewellery Division', 'Regional Audit Manager', '2026-05-15', 'Active', 'e62c114f4e2f3d6dbf4369e160e1d5e3be5b0728c6dc203a948b81f1857b2e3e')
ON CONFLICT (id) DO NOTHING;

INSERT INTO portal_projects (id, client_id, project_name, scope_of_work, objectives, start_date, end_date, status, progress_pct, phase_active, health_rag) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', 'a1b2c3d4-0001-0001-0001-000000000001', 'Kalyan Systems Transformation', 'End-to-end retail systems audit, ERP controls engineering, and KPI dashboard implementation for gold jewellery operations.', 'Eliminate inventory leakage, engineer ERP controls, deploy real-time KPI tracking.', '2026-06-01', '2026-07-31', 'On Track', 42, 3, 'Green'),
  ('b1b2c3d4-0002-0002-0002-000000000002', 'a1b2c3d4-0002-0002-0002-000000000002', 'Malabar Manufacturing Audit', 'Manufacturing job-work gap audit, sub-contractor scrap recovery analysis, and inventory transfer system design.', 'Recover scrap margin leakage, implement job-work controls, standardise transit protocols.', '2026-06-10', '2026-08-15', 'At Risk', 18, 2, 'Amber'),
  ('b1b2c3d4-0003-0003-0003-000000000003', 'a1b2c3d4-0003-0003-0003-000000000003', 'Reliance Multi-Store Operations', 'Multi-store branch transfer gap audits, gold buyback fraud prevention, regional margin alerter dashboards.', 'Zero transit discrepancies, real-time margin protection, regional audit manager upskilling.', '2026-05-15', '2026-07-08', 'On Track', 79, 5, 'Green')
ON CONFLICT (id) DO NOTHING;

-- Phases for Kalyan
INSERT INTO portal_phases (id, project_id, phase_number, name, status, start_date, end_date, sort_order) VALUES
  ('c1000001-0001-0001-0001-000000000001', 'b1b2c3d4-0001-0001-0001-000000000001', 1, 'Understand the Business Objective', 'Completed', '2026-06-01', '2026-06-07', 1),
  ('c1000001-0001-0001-0001-000000000002', 'b1b2c3d4-0001-0001-0001-000000000001', 2, 'Identify the Gaps', 'Completed', '2026-06-08', '2026-06-18', 2),
  ('c1000001-0001-0001-0001-000000000003', 'b1b2c3d4-0001-0001-0001-000000000001', 3, 'Design the System', 'In Progress', '2026-06-19', '2026-06-30', 3),
  ('c1000001-0001-0001-0001-000000000004', 'b1b2c3d4-0001-0001-0001-000000000001', 4, 'Generate Meaningful Insights', 'Not Started', '2026-07-01', '2026-07-10', 4),
  ('c1000001-0001-0001-0001-000000000005', 'b1b2c3d4-0001-0001-0001-000000000001', 5, 'Enable Better Decisions', 'Not Started', '2026-07-11', '2026-07-20', 5),
  ('c1000001-0001-0001-0001-000000000006', 'b1b2c3d4-0001-0001-0001-000000000001', 6, 'Create Measurable Business Impact', 'Not Started', '2026-07-21', '2026-07-31', 6)
ON CONFLICT (id) DO NOTHING;

-- Tasks for Kalyan
INSERT INTO portal_tasks (id, phase_id, project_id, name, owner, planned_start, planned_end, actual_start, actual_end, status, progress_pct, sort_order) VALUES
  ('d1000001-0001-0001-0001-000000000001', 'c1000001-0001-0001-0001-000000000001', 'b1b2c3d4-0001-0001-0001-000000000001', 'Stakeholder Alignment Meeting', 'Abraham S', '2026-06-01', '2026-06-03', '2026-06-01', '2026-06-03', 'Completed', 100, 1),
  ('d1000001-0001-0001-0001-000000000002', 'c1000001-0001-0001-0001-000000000001', 'b1b2c3d4-0001-0001-0001-000000000001', 'Define Scaling & Margin KPI Targets', 'Abraham S & Kalyan Board', '2026-06-04', '2026-06-07', '2026-06-04', '2026-06-06', 'Completed', 100, 2),
  ('d1000001-0001-0001-0001-000000000003', 'c1000001-0001-0001-0001-000000000002', 'b1b2c3d4-0001-0001-0001-000000000001', 'Audit Existing CRM & Lead Workflows', 'Abraham S', '2026-06-08', '2026-06-12', '2026-06-08', '2026-06-12', 'Completed', 100, 1),
  ('d1000001-0001-0001-0001-000000000004', 'c1000001-0001-0001-0001-000000000002', 'b1b2c3d4-0001-0001-0001-000000000001', 'Identify Inventory Leakage Gaps', 'Abraham S', '2026-06-13', '2026-06-18', '2026-06-13', '2026-06-19', 'Completed', 100, 2),
  ('d1000001-0001-0001-0001-000000000005', 'c1000001-0001-0001-0001-000000000003', 'b1b2c3d4-0001-0001-0001-000000000001', 'ERP Controls & Security Engineering', 'Abraham S & IT Team', '2026-06-19', '2026-06-25', NULL, NULL, 'In Progress', 60, 1),
  ('d1000001-0001-0001-0001-000000000006', 'c1000001-0001-0001-0001-000000000003', 'b1b2c3d4-0001-0001-0001-000000000001', 'Automated Process Approval Workflows', 'Abraham S', '2026-06-26', '2026-06-30', NULL, NULL, 'Not Started', 0, 2),
  ('d1000001-0001-0001-0001-000000000007', 'c1000001-0001-0001-0001-000000000004', 'b1b2c3d4-0001-0001-0001-000000000001', 'Custom KPI Dashboards Implementation', 'Abraham S & Dev Team', '2026-07-01', '2026-07-06', NULL, NULL, 'Not Started', 0, 1),
  ('d1000001-0001-0001-0001-000000000008', 'c1000001-0001-0001-0001-000000000004', 'b1b2c3d4-0001-0001-0001-000000000001', 'Diagnostic Leakage Reports Automations', 'Abraham S', '2026-07-07', '2026-07-10', NULL, NULL, 'Not Started', 0, 2),
  ('d1000001-0001-0001-0001-000000000009', 'c1000001-0001-0001-0001-000000000005', 'b1b2c3d4-0001-0001-0001-000000000001', 'Management Handover & Decisions Training', 'Abraham S', '2026-07-11', '2026-07-15', NULL, NULL, 'Not Started', 0, 1),
  ('d1000001-0001-0001-0001-000000000010', 'c1000001-0001-0001-0001-000000000005', 'b1b2c3d4-0001-0001-0001-000000000001', 'Showroom Staff Standard Operating Audits', 'Abraham S', '2026-07-16', '2026-07-20', NULL, NULL, 'Not Started', 0, 2),
  ('d1000001-0001-0001-0001-000000000011', 'c1000001-0001-0001-0001-000000000006', 'b1b2c3d4-0001-0001-0001-000000000001', 'Measure Margin Protection Metrics', 'Abraham S & CFO Office', '2026-07-21', '2026-07-26', NULL, NULL, 'Not Started', 0, 1),
  ('d1000001-0001-0001-0001-000000000012', 'c1000001-0001-0001-0001-000000000006', 'b1b2c3d4-0001-0001-0001-000000000001', 'Optimize Inventory Turn Rate Controls', 'Abraham S', '2026-07-27', '2026-07-31', NULL, NULL, 'Not Started', 0, 2)
ON CONFLICT (id) DO NOTHING;

-- Scope items for Kalyan
INSERT INTO portal_scope_items (project_id, title, status, target_date, completed_date, sort_order) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Current Process Assessment', 'Completed', '2026-06-07', '2026-06-06', 1),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Inventory Audit & Leakage Review', 'Completed', '2026-06-18', '2026-06-19', 2),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'KPI Framework Design', 'Completed', '2026-06-07', '2026-06-07', 3),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'ERP Controls Engineering', 'In Progress', '2026-06-25', NULL, 4),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Dashboard Development', 'Upcoming', '2026-07-06', NULL, 5),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Performance Review System', 'Upcoming', '2026-07-15', NULL, 6),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Staff Accountability Framework', 'Not Started', '2026-07-20', NULL, 7),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Project Closure & Handover', 'Not Started', '2026-07-31', NULL, 8);

-- Daily logs for Kalyan
INSERT INTO portal_daily_logs (project_id, log_date, tasks_completed, hours_spent, departments_covered, observations, what_next, status_label) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', '2026-06-22', 'ERP security masking matrix written. Custom role definitions configured in ERP sandbox. Reviewed PII data access with IT team.', 7.5, 'IT, Finance', 'OTP verification triggers need to be tested on staging. Found 3 unmasked data fields that need attention.', 'Complete ERP staging tests and finalize automated approval workflow blueprint.', 'On Track'),
  ('b1b2c3d4-0001-0001-0001-000000000001', '2026-06-19', 'Completed CRM and Inventory Leakage audits. Identified ₹1.2 Cr in annual margin erosion. Gap audit report compiled and uploaded.', 9.0, 'Inventory, CRM, Operations', 'Gold exchange records from Mumbai office had a 3-day delay. Future audits should pre-schedule data collection 2 weeks prior.', 'Begin ERP controls engineering phase.', 'Completed'),
  ('b1b2c3d4-0001-0001-0001-000000000001', '2026-06-12', 'Customer first interaction and lead workflows fully audited. CRM data quality issues identified and documented.', 6.5, 'Sales, CRM', 'Found 40% of walkout logs are not being entered into CRM. This is a high-impact accountability gap.', 'Complete inventory leakage assessment and compile the gap analysis report.', 'On Track');

-- Audit reports for Kalyan
INSERT INTO portal_audits (project_id, department, audit_date, audit_type, observations, risk_level, recommendations, corrective_actions, status) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Inventory Management', '2026-06-14', 'Inventory', 'Manual stock tracking in use across 3 showrooms. No barcode scanning. Aged stock ratio at 22% exceeding the 15% benchmark. 2 showrooms using paper-based gold weight registers.', 'High', 'Implement barcode-based tracking immediately. Deploy automated reorder triggers. Introduce weekly weight reconciliation with karatometer verification.', 'Issue escalated to Operations Director. Vendor comparison for barcode system underway.', 'In Progress'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Sales & CRM', '2026-06-12', 'Process', 'Walkout logs missing for 40% of non-converting customers. Follow-up calls not happening within 24 hours. CRM entries being backdated.', 'Medium', 'Mandatory walkout logging in CRM before closing the floor. Automated WhatsApp follow-up trigger within 1 hour of walkout.', 'Sales team briefed. CRM mandatory field enforcement being configured.', 'Open'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Finance & Accounts', '2026-06-19', 'Financial', 'Daily reconciliation discrepancy rate at 0.12% exceeding the 0.05% benchmark. UPI payment webhooks not linked to billing system. Cash drawer reconciliation done manually at day end.', 'High', 'Integrate UPI payment webhook directly to billing system. Implement real-time reconciliation instead of end-of-day.', 'Finance head has approved integration project. Dev team scoping the webhook integration.', 'In Progress');

-- Gap analysis for Kalyan
INSERT INTO portal_gaps (project_id, category, current_state, expected_state, gap_identified, impact, priority, owner, target_date, status) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Inventory Management', 'Manual stock tracking with paper registers', 'Barcode-based real-time tracking system', 'No digital inventory trail. Cannot detect shrinkage in real-time.', 'High', 'High', 'Store Manager – Andheri', '2026-07-15', 'In Progress'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'CRM & Lead Management', 'Walkout logs captured only 60% of the time', '100% walkout capture with CRM enforcement', 'Lost revenue recovery opportunity estimated at ₹45 Lakhs/month.', 'High', 'High', 'Sales Head', '2026-07-01', 'Open'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Finance Reconciliation', 'End-of-day manual reconciliation', 'Real-time UPI webhook reconciliation', 'Daily discrepancy rate 2.4x higher than benchmark. Risk of undetected cash leakage.', 'High', 'Critical', 'CFO Office', '2026-06-30', 'In Progress'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Staff Accountability', 'No performance tracking system in place', 'Individual KPI dashboard per sales associate', 'Top performer vs bottom performer gap not measurable. Incentives applied uniformly.', 'Medium', 'Medium', 'HR Head', '2026-07-20', 'Open');

-- Recommendations for Kalyan
INSERT INTO portal_recommendations (project_id, recommendation, priority, business_impact, owner, target_date, current_status, approval_status) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Deploy barcode-based gold tracking with karatometer verification at lock-up', 'Critical', 'Eliminates ₹80L+ annual shrinkage risk. Enables real-time purity auditing.', 'Operations Director', '2026-07-15', 'In Progress', 'Approved'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Implement automated walkout CRM capture with mandatory field enforcement', 'High', 'Recovers estimated ₹45L/month in lost follow-up conversion revenue.', 'Sales Head', '2026-07-01', 'Open', 'Approved'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Integrate UPI payment webhook to billing system for real-time reconciliation', 'High', 'Reduces daily discrepancy rate from 0.12% to target 0.05%. Protects cash flow.', 'CFO Office', '2026-06-30', 'In Progress', 'Approved'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Create individual KPI dashboards for each sales associate', 'Medium', 'Enables data-driven incentives and coaching. Projected 15% conversion lift.', 'HR Head', '2026-07-20', 'Open', 'Pending');

-- Deliverables for Kalyan
INSERT INTO portal_deliverables (project_id, name, doc_type, status, due_date, delivered_at, file_url, file_size, version, description) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Operational Gap Analysis & Leakage Assessment Report', 'Report', 'Delivered', '2026-06-18', '2026-06-19', '#report-gap-analysis-kalyan', '2.4 MB', 'v1.0', 'Comprehensive gap audit across inventory, CRM, and finance operations.'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'ERP Governance & Controls Architecture Specifications', 'Report', 'Under Review', '2026-06-30', NULL, '#report-erp-controls-kalyan', '4.8 MB', 'v0.9', 'Technical blueprint for ERP access controls, role definitions, and security masking.'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Executive Boardroom KPI System Handover', 'Dashboard', 'Pending', '2026-07-15', NULL, NULL, NULL, 'v0.1', 'Interactive KPI dashboard handover package for board-level decision intelligence.'),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Staff Accountability SOP Manual', 'SOP', 'Pending', '2026-07-20', NULL, NULL, NULL, 'v0.1', 'Standard operating procedures for performance tracking and accountability systems.');

-- Comments for Kalyan
INSERT INTO portal_comments (project_id, author, author_role, message, thread_type, resolved) VALUES
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Abraham S', 'Admin', 'The ERP controls architecture is progressing well. Expect the v1.0 specification document by June 28th. Please review the gap analysis report shared in the Documents section.', 'General', FALSE),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Kalyan Stakeholder', 'Client', 'Received the gap analysis report. The inventory findings are very eye-opening. Can we schedule a call this week to discuss the barcode tracking implementation timeline?', 'Question', FALSE),
  ('b1b2c3d4-0001-0001-0001-000000000001', 'Abraham S', 'Admin', 'Absolutely — I''ll send a calendar invite for Thursday 4pm. The barcode vendor comparison will be ready by then.', 'Question', TRUE);
