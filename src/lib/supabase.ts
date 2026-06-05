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
async function getVisitorLocation(): Promise<LocationData> {
  if (cachedLocation) return cachedLocation;
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) throw new Error('Location service error');
    const data = await res.json();
    cachedLocation = {
      ip: data.ip || 'Unknown',
      country: data.country_name || 'Unknown',
      city: data.city || 'Unknown'
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
    // LocalStorage fallback for Mock mode
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
    // LocalStorage fallback for Mock mode
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
    // LocalStorage fallback for Mock mode
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
