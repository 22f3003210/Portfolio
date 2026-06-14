import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Determine if we are using the live Supabase database or local storage fallback
export const isLiveSupabase = !!supabaseUrl && !!supabaseAnonKey;

// Initialize live client if credentials exist
export const supabase = isLiveSupabase 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Structure for tracking location
interface LocationData {
  ip: string;
  country: string;
  city: string;
}

// Fetch visitor location data using a free, fast JSON API
let cachedLocation: LocationData | null = null;
export async function getVisitorLocation(): Promise<LocationData> {
  if (cachedLocation) return cachedLocation;
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) throw new Error('Location service error');
    const data = await res.json();
    
    const region = data.region || '';
    const postal = data.postal || '';
    const org = data.org || '';
    const cityStr = data.city || 'Unknown';
    const regionStr = region ? `${region} ${postal}`.trim() : postal;
    const orgStr = org ? `(${org})` : '';
    const combinedCity = [cityStr, regionStr].filter(Boolean).join(', ') + (orgStr ? ` ${orgStr}` : '');

    cachedLocation = {
      ip: data.ip || 'Unknown',
      country: data.country_name || 'Unknown',
      city: combinedCity || 'Unknown'
    };
    return cachedLocation;
  } catch (error) {
    console.warn('Could not determine visitor location:', error);
    return { ip: 'Unknown', country: 'Unknown', city: 'Unknown' };
  }
}

// ==========================================
// ANALYTICS & EVENT LOGGING API
// ==========================================

export async function logPageView(path: string, referrer: string = '') {
  const userAgent = navigator.userAgent;
  const loc = await getVisitorLocation();

  if (isLiveSupabase && supabase) {
    try {
      const { error } = await supabase.from('page_views').insert({
        path,
        referrer,
        ip: loc.ip,
        country: loc.country,
        city: loc.city,
        user_agent: userAgent
      });
      if (error) throw error;
    } catch (e) {
      console.error('Failed to log page view to Supabase:', e);
    }
  } else {
    const views = JSON.parse(localStorage.getItem('mock_page_views') || '[]');
    views.push({
      id: Date.now(),
      created_at: new Date().toISOString(),
      path,
      referrer,
      ip: loc.ip,
      country: loc.country,
      city: loc.city,
      user_agent: userAgent
    });
    localStorage.setItem('mock_page_views', JSON.stringify(views));
  }
}

export async function logClickEvent(elementId: string, elementText: string = '', pagePath: string) {
  const loc = await getVisitorLocation();

  if (isLiveSupabase && supabase) {
    try {
      const { error } = await supabase.from('click_events').insert({
        element_id: elementId,
        element_text: elementText,
        page_path: pagePath,
        ip: loc.ip,
        country: loc.country,
        city: loc.city
      });
      if (error) throw error;
    } catch (e) {
      console.error('Failed to log click event to Supabase:', e);
    }
  } else {
    const clicks = JSON.parse(localStorage.getItem('mock_click_events') || '[]');
    clicks.push({
      id: Date.now(),
      created_at: new Date().toISOString(),
      element_id: elementId,
      element_text: elementText,
      page_path: pagePath,
      ip: loc.ip,
      country: loc.country,
      city: loc.city
    });
    localStorage.setItem('mock_click_events', JSON.stringify(clicks));
  }
}

// ==========================================
// APPOINTMENTS & BOOKING API
// ==========================================

export interface AppointmentInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  date: string;
  timeSlot: string;
  description?: string;
}

export async function submitAppointment(input: AppointmentInput) {
  if (isLiveSupabase && supabase) {
    const { data, error } = await supabase.from('appointments').insert({
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      company: input.company || null,
      date: input.date,
      time_slot: input.timeSlot,
      description: input.description || null
    }).select();
    if (error) throw error;
    return data;
  } else {
    const appointments = JSON.parse(localStorage.getItem('mock_appointments') || '[]');
    const newAppointment = {
      id: Date.now(),
      created_at: new Date().toISOString(),
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      company: input.company || null,
      date: input.date,
      time_slot: input.timeSlot,
      description: input.description || null,
      status: 'Scheduled'
    };
    appointments.push(newAppointment);
    localStorage.setItem('mock_appointments', JSON.stringify(appointments));
    return [newAppointment];
  }
}

export async function getAppointments(): Promise<any[]> {
  if (isLiveSupabase && supabase) {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  } else {
    return JSON.parse(localStorage.getItem('mock_appointments') || '[]');
  }
}

export async function updateAppointmentStatus(id: number | string, status: string) {
  if (isLiveSupabase && supabase) {
    const { error } = await supabase
      .from('appointments')
      .update({ status })
      .eq('id', id);
    if (error) throw error;
  } else {
    const appointments = JSON.parse(localStorage.getItem('mock_appointments') || '[]');
    const updated = appointments.map((appt: any) => 
      appt.id == id ? { ...appt, status } : appt
    );
    localStorage.setItem('mock_appointments', JSON.stringify(updated));
  }
}

// Fetch all analytics for the admin dashboard
export async function getAnalyticsSummary() {
  if (isLiveSupabase && supabase) {
    const [viewsRes, clicksRes] = await Promise.all([
      supabase.from('page_views').select('*').order('created_at', { ascending: false }),
      supabase.from('click_events').select('*').order('created_at', { ascending: false })
    ]);
    if (viewsRes.error) throw viewsRes.error;
    if (clicksRes.error) throw clicksRes.error;

    return {
      views: viewsRes.data || [],
      clicks: clicksRes.data || []
    };
  } else {
    return {
      views: JSON.parse(localStorage.getItem('mock_page_views') || '[]'),
      clicks: JSON.parse(localStorage.getItem('mock_click_events') || '[]')
    };
  }
}

// ==========================================
// PORTAL — CLIENT INTELLIGENCE PLATFORM
// ==========================================

export interface PortalClient {
  id: string;
  created_at: string;
  company_name: string;
  industry: string;
  locations: string;
  primary_contact: string;
  reporting_personnel: string;
  contract_start: string;
  project_status: string;
  passcode_hash: string;
  notes: string;
}

export interface PortalProject {
  id: string;
  created_at: string;
  client_id: string;
  project_name: string;
  scope_of_work: string;
  objectives: string;
  start_date: string;
  end_date: string;
  deliverables: string;
  success_metrics: string;
  status: string;
  progress_pct: number;
  phase_active: number;
  health_rag: string;
}

export interface PortalPhase {
  id: string;
  project_id: string;
  phase_number: number;
  name: string;
  status: string;
  start_date: string;
  end_date: string;
  sort_order: number;
}

export interface PortalTask {
  id: string;
  phase_id: string;
  project_id: string;
  name: string;
  owner: string;
  planned_start: string;
  planned_end: string;
  actual_start?: string;
  actual_end?: string;
  status: string;
  progress_pct: number;
  delay_reason_category: string;
  delay_reason_note: string;
  delay_revised_end?: string;
  sort_order: number;
}

export interface PortalScopeItem {
  id: string;
  project_id: string;
  title: string;
  description: string;
  status: string;
  target_date: string;
  completed_date?: string;
  sort_order: number;
}

export interface PortalDailyLog {
  id: string;
  created_at: string;
  project_id: string;
  log_date: string;
  tasks_completed: string;
  hours_spent: number;
  departments_covered: string;
  observations: string;
  meeting_notes: string;
  what_next: string;
  status_label: string;
}

export interface PortalAudit {
  id: string;
  created_at: string;
  project_id: string;
  department: string;
  audit_date: string;
  audit_type: string;
  observations: string;
  evidence: string;
  risk_level: string;
  recommendations: string;
  corrective_actions: string;
  status: string;
}

export interface PortalGap {
  id: string;
  created_at: string;
  project_id: string;
  category: string;
  current_state: string;
  expected_state: string;
  gap_identified: string;
  impact: string;
  priority: string;
  owner: string;
  target_date: string;
  status: string;
}

export interface PortalRecommendation {
  id: string;
  created_at: string;
  project_id: string;
  recommendation: string;
  priority: string;
  business_impact: string;
  owner: string;
  target_date: string;
  current_status: string;
  approval_status: string;
  implementation_notes: string;
}

export interface PortalDeliverable {
  id: string;
  created_at: string;
  project_id: string;
  name: string;
  doc_type: string;
  status: string;
  due_date: string;
  delivered_at?: string;
  file_url: string;
  file_size: string;
  version: string;
  description: string;
}

export interface PortalComment {
  id: string;
  created_at: string;
  project_id: string;
  author: string;
  author_role: string;
  message: string;
  thread_type: string;
  resolved: boolean;
}

// Helper SHA-256
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ---- CLIENT CRUD ----

export async function getPortalClients(): Promise<PortalClient[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_clients').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function createPortalClient(input: Omit<PortalClient, 'id' | 'created_at' | 'passcode_hash'> & { passcode: string }): Promise<PortalClient> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const hash = await sha256(input.passcode);
  const { passcode: _p, ...rest } = input;
  const { data, error } = await supabase.from('portal_clients').insert({ ...rest, passcode_hash: hash }).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalClient(id: string, updates: Partial<PortalClient>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_clients').update(updates).eq('id', id);
  if (error) throw error;
}

export async function deletePortalClient(id: string): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_clients').delete().eq('id', id);
  if (error) throw error;
}

// Verify client passcode — returns matching client or null
export async function verifyClientPasscode(passcode: string): Promise<PortalClient | null> {
  if (!isLiveSupabase || !supabase) return null;
  const hash = await sha256(passcode);
  const { data, error } = await supabase.from('portal_clients').select('*').eq('passcode_hash', hash).single();
  if (error) return null;
  return data || null;
}

// ---- PROJECT CRUD ----

export async function getPortalProjects(clientId?: string): Promise<PortalProject[]> {
  if (!isLiveSupabase || !supabase) return [];
  let query = supabase.from('portal_projects').select('*').order('created_at', { ascending: false });
  if (clientId) query = query.eq('client_id', clientId);
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function createPortalProject(input: Omit<PortalProject, 'id' | 'created_at'>): Promise<PortalProject> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_projects').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalProject(id: string, updates: Partial<PortalProject>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_projects').update(updates).eq('id', id);
  if (error) throw error;
}

// ---- PHASES & TASKS ----

export async function getPortalPhases(projectId: string): Promise<PortalPhase[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_phases').select('*').eq('project_id', projectId).order('sort_order');
  if (error) throw error;
  return data || [];
}

export async function createPortalPhase(input: Omit<PortalPhase, 'id'>): Promise<PortalPhase> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_phases').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function getPortalTasks(projectId: string): Promise<PortalTask[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_tasks').select('*').eq('project_id', projectId).order('sort_order');
  if (error) throw error;
  return data || [];
}

export async function updatePortalTask(id: string, updates: Partial<PortalTask>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_tasks').update(updates).eq('id', id);
  if (error) throw error;
}

export async function createPortalTask(input: Omit<PortalTask, 'id'>): Promise<PortalTask> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_tasks').insert(input).select().single();
  if (error) throw error;
  return data;
}

// ---- SCOPE ITEMS ----

export async function getPortalScopeItems(projectId: string): Promise<PortalScopeItem[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_scope_items').select('*').eq('project_id', projectId).order('sort_order');
  if (error) throw error;
  return data || [];
}

export async function createPortalScopeItem(input: Omit<PortalScopeItem, 'id'>): Promise<PortalScopeItem> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_scope_items').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalScopeItem(id: string, updates: Partial<PortalScopeItem>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_scope_items').update(updates).eq('id', id);
  if (error) throw error;
}

// ---- DAILY LOGS ----

export async function getPortalDailyLogs(projectId: string): Promise<PortalDailyLog[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_daily_logs').select('*').eq('project_id', projectId).order('log_date', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function createPortalDailyLog(input: Omit<PortalDailyLog, 'id' | 'created_at'>): Promise<PortalDailyLog> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_daily_logs').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalDailyLog(id: string, updates: Partial<PortalDailyLog>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_daily_logs').update(updates).eq('id', id);
  if (error) throw error;
}

export async function deletePortalDailyLog(id: string): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_daily_logs').delete().eq('id', id);
  if (error) throw error;
}

// ---- AUDITS ----

export async function getPortalAudits(projectId: string): Promise<PortalAudit[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_audits').select('*').eq('project_id', projectId).order('audit_date', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function createPortalAudit(input: Omit<PortalAudit, 'id' | 'created_at'>): Promise<PortalAudit> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_audits').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalAudit(id: string, updates: Partial<PortalAudit>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_audits').update(updates).eq('id', id);
  if (error) throw error;
}

export async function deletePortalAudit(id: string): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_audits').delete().eq('id', id);
  if (error) throw error;
}

// ---- GAPS ----

export async function getPortalGaps(projectId: string): Promise<PortalGap[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_gaps').select('*').eq('project_id', projectId).order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function createPortalGap(input: Omit<PortalGap, 'id' | 'created_at'>): Promise<PortalGap> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_gaps').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalGap(id: string, updates: Partial<PortalGap>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_gaps').update(updates).eq('id', id);
  if (error) throw error;
}

export async function deletePortalGap(id: string): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_gaps').delete().eq('id', id);
  if (error) throw error;
}

// ---- RECOMMENDATIONS ----

export async function getPortalRecommendations(projectId: string): Promise<PortalRecommendation[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_recommendations').select('*').eq('project_id', projectId).order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function createPortalRecommendation(input: Omit<PortalRecommendation, 'id' | 'created_at'>): Promise<PortalRecommendation> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_recommendations').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalRecommendation(id: string, updates: Partial<PortalRecommendation>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_recommendations').update(updates).eq('id', id);
  if (error) throw error;
}

export async function deletePortalRecommendation(id: string): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_recommendations').delete().eq('id', id);
  if (error) throw error;
}

// ---- DELIVERABLES ----

export async function getPortalDeliverables(projectId: string): Promise<PortalDeliverable[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_deliverables').select('*').eq('project_id', projectId).order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function createPortalDeliverable(input: Omit<PortalDeliverable, 'id' | 'created_at'>): Promise<PortalDeliverable> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_deliverables').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalDeliverable(id: string, updates: Partial<PortalDeliverable>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_deliverables').update(updates).eq('id', id);
  if (error) throw error;
}

export async function deletePortalDeliverable(id: string): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_deliverables').delete().eq('id', id);
  if (error) throw error;
}

// ---- COMMENTS ----

export async function getPortalComments(projectId: string): Promise<PortalComment[]> {
  if (!isLiveSupabase || !supabase) return [];
  const { data, error } = await supabase.from('portal_comments').select('*').eq('project_id', projectId).order('created_at', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function createPortalComment(input: Omit<PortalComment, 'id' | 'created_at'>): Promise<PortalComment> {
  if (!isLiveSupabase || !supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from('portal_comments').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updatePortalComment(id: string, updates: Partial<PortalComment>): Promise<void> {
  if (!isLiveSupabase || !supabase) return;
  const { error } = await supabase.from('portal_comments').update(updates).eq('id', id);
  if (error) throw error;
}

// ---- DECISIONS REQUIRED ----

export interface PortalDecision {
  id: string;
  project_id: string;
  decision: string;
  owner: string;
  due_date: string;
  status: string; // Pending, Approved, Rejected
}

export async function getPortalDecisions(projectId: string): Promise<PortalDecision[]> {
  if (!isLiveSupabase || !supabase) {
    const key = `mock_decisions_${projectId}`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : getInitialDecisions(projectId);
  }
  try {
    const { data, error } = await supabase.from('portal_decisions').select('*').eq('project_id', projectId).order('due_date');
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('portal_decisions table might not exist in Supabase yet. Falling back to local storage.', e);
    const key = `mock_decisions_${projectId}`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : getInitialDecisions(projectId);
  }
}

export async function createPortalDecision(input: Omit<PortalDecision, 'id'>): Promise<PortalDecision> {
  const newDec = { ...input, id: 'dec-' + Date.now() };
  if (isLiveSupabase && supabase) {
    try {
      const { data, error } = await supabase.from('portal_decisions').insert(input).select().single();
      if (!error && data) return data;
    } catch (e) {
      console.warn('Could not insert into portal_decisions in Supabase. Saving to local storage.', e);
    }
  }
  const key = `mock_decisions_${input.project_id}`;
  const stored = localStorage.getItem(key);
  const current = stored ? JSON.parse(stored) : getInitialDecisions(input.project_id);
  current.push(newDec);
  localStorage.setItem(key, JSON.stringify(current));
  return newDec;
}

export async function updatePortalDecision(id: string, projectId: string, updates: Partial<PortalDecision>): Promise<void> {
  if (isLiveSupabase && supabase) {
    try {
      const { error } = await supabase.from('portal_decisions').update(updates).eq('id', id);
      if (!error) return;
    } catch (e) {
      console.warn('Could not update portal_decisions in Supabase. Updating in local storage.', e);
    }
  }
  const key = `mock_decisions_${projectId}`;
  const stored = localStorage.getItem(key);
  const current = stored ? JSON.parse(stored) : getInitialDecisions(projectId);
  const updated = current.map((d: any) => d.id === id ? { ...d, ...updates } : d);
  localStorage.setItem(key, JSON.stringify(updated));
}

export async function deletePortalDecision(id: string, projectId: string): Promise<void> {
  if (isLiveSupabase && supabase) {
    try {
      const { error } = await supabase.from('portal_decisions').delete().eq('id', id);
      if (!error) return;
    } catch (e) {
      console.warn('Could not delete portal_decisions in Supabase. Deleting in local storage.', e);
    }
  }
  const key = `mock_decisions_${projectId}`;
  const stored = localStorage.getItem(key);
  const current = stored ? JSON.parse(stored) : getInitialDecisions(projectId);
  const updated = current.filter((d: any) => d.id !== id);
  localStorage.setItem(key, JSON.stringify(updated));
}

function getInitialDecisions(projectId: string): PortalDecision[] {
  // Kalyan
  if (projectId === 'b1b2c3d4-0001-0001-0001-000000000001') {
    return [
      { id: 'dec-1', project_id: projectId, decision: 'Approve Barcode Vendor', owner: 'MD', due_date: '2026-06-20', status: 'Pending' },
      { id: 'dec-2', project_id: projectId, decision: 'Confirm KPI Framework', owner: 'Operations Head', due_date: '2026-06-25', status: 'Pending' }
    ];
  }
  // Malabar
  if (projectId === 'b1b2c3d4-0002-0002-0002-000000000002') {
    return [
      { id: 'dec-3', project_id: projectId, decision: 'Confirm Job Work SLA', owner: 'Plant Manager', due_date: '2026-06-18', status: 'Pending' },
      { id: 'dec-4', project_id: projectId, decision: 'Select Dual-Lock Hardware', owner: 'Operations Head', due_date: '2026-06-22', status: 'Pending' }
    ];
  }
  // Reliance
  if (projectId === 'b1b2c3d4-0003-0003-0003-000000000003') {
    return [
      { id: 'dec-5', project_id: projectId, decision: 'Signoff Transit Dashboard', owner: 'Logistics VP', due_date: '2026-06-15', status: 'Approved' }
    ];
  }
  return [];
}

