import { useState, useEffect } from 'react';
import { 
  getAnalyticsSummary, 
  getAppointments, 
  updateAppointmentStatus, 
  isLiveSupabase 
} from '../lib/supabase';
import { 
  BarChart3, 
  Eye, 
  MousePointerClick, 
  Calendar, 
  MapPin, 
  RefreshCw, 
  Check, 
  X, 
  Lock, 
  AlertCircle 
} from 'lucide-react';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  const [views, setViews] = useState<any[]>([]);
  const [clicks, setClicks] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'analytics' | 'appointments'>('analytics');

  const correctPasscode = import.meta.env.VITE_ADMIN_PASSCODE || 'scale123';

  const fetchStats = async () => {
    setLoading(true);
    try {
      const summary = await getAnalyticsSummary();
      const appts = await getAppointments();
      setViews(summary.views);
      setClicks(summary.clicks);
      setAppointments(appts);
    } catch (err) {
      console.error('Failed to load admin stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === correctPasscode) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. Access denied.');
    }
  };

  const handleStatusUpdate = async (id: number | string, newStatus: string) => {
    try {
      await updateAppointmentStatus(id, newStatus);
      // Refresh state locally
      setAppointments(prev => 
        prev.map(appt => appt.id == id ? { ...appt, status: newStatus } : appt)
      );
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  // Calculations for stats
  const totalViews = views.length;
  const uniqueIps = new Set(views.map(v => v.ip)).size;
  const totalClicks = clicks.length;
  const totalAppointments = appointments.filter(a => a.date !== 'Enquiry').length;
  const totalEnquiries = appointments.filter(a => a.date === 'Enquiry').length;

  // Group views by location
  const locationStats = views.reduce((acc: any, view) => {
    const key = `${view.city}, ${view.country}`;
    if (key === 'Unknown, Unknown') return acc;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const sortedLocations = Object.entries(locationStats)
    .sort((a: any, b: any) => b[1] - a[1])
    .slice(0, 5);

  // Group clicks by button text/id
  const clickStats = clicks.reduce((acc: any, click) => {
    const key = click.element_text || click.element_id || 'unnamed-element';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const sortedClicks = Object.entries(clickStats)
    .sort((a: any, b: any) => b[1] - a[1])
    .slice(0, 10);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-warm-white p-6">
        <div className="bg-white border-2 border-navy p-8 w-full max-w-sm shadow-xl text-left">
          <div className="flex items-center gap-3 mb-6 text-navy">
            <Lock className="w-6 h-6 text-gold" />
            <h2 className="font-extrabold text-xl uppercase tracking-wider">Admin Gate</h2>
          </div>
          <p className="text-xs text-text-secondary mb-4 leading-relaxed font-semibold">
            Please enter your administrator passcode to access analytics, click counts, and consulting bookings.
          </p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-text-primary uppercase mb-1.5">Passcode</label>
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy"
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
              className="w-full py-3 bg-navy text-white hover:bg-navy/95 font-bold text-xs uppercase tracking-widest shadow-md transition-colors"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white p-6 md:p-10 select-none">
      <div className="max-w-[1200px] mx-auto text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6 mb-8">
          <div>
            <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-1">
              OPERATIONS CENTRE
            </span>
            <h1 className="text-3xl font-extrabold text-navy tracking-tight uppercase">
              Abraham's Systems Console
            </h1>
            <div className="flex items-center gap-2 mt-1.5">
              <span className={`w-2 h-2 rounded-full inline-block ${isLiveSupabase ? 'bg-green-500' : 'bg-orange-400'}`} />
              <span className="text-[10px] font-bold text-text-secondary uppercase">
                {isLiveSupabase ? 'Live Supabase DB connected' : 'Sandbox (LocalStorage Mode)'}
              </span>
            </div>
          </div>
          
          <button 
            onClick={fetchStats}
            disabled={loading}
            className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-xs font-bold text-navy uppercase tracking-wider shadow-sm flex items-center gap-2 transition-colors disabled:bg-gray-100"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Stats</span>
          </button>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-navy mb-2">
              <Eye className="w-4 h-4 text-gold" />
              <span className="text-[9px] font-bold text-text-secondary uppercase">VIEWS</span>
            </div>
            <p className="text-2xl font-black text-navy leading-none">{totalViews}</p>
            <p className="text-[9px] text-text-secondary font-semibold mt-1">Total page views</p>
          </div>

          <div className="bg-white border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-navy mb-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-[9px] font-bold text-text-secondary uppercase">UNIQUE</span>
            </div>
            <p className="text-2xl font-black text-navy leading-none">{uniqueIps}</p>
            <p className="text-[9px] text-text-secondary font-semibold mt-1">Unique IP visitors</p>
          </div>

          <div className="bg-white border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-navy mb-2">
              <MousePointerClick className="w-4 h-4 text-gold" />
              <span className="text-[9px] font-bold text-text-secondary uppercase">CLICKS</span>
            </div>
            <p className="text-2xl font-black text-navy leading-none">{totalClicks}</p>
            <p className="text-[9px] text-text-secondary font-semibold mt-1">Button/CTA clicks</p>
          </div>

          <div className="bg-white border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-navy mb-2">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="text-[9px] font-bold text-text-secondary uppercase">BOOKINGS</span>
            </div>
            <p className="text-2xl font-black text-navy leading-none">{totalAppointments}</p>
            <p className="text-[9px] text-text-secondary font-semibold mt-1">Calendar appointments</p>
          </div>

          <div className="bg-white border border-gray-200 p-5 shadow-sm col-span-2 md:col-span-1">
            <div className="flex items-center justify-between text-navy mb-2">
              <BarChart3 className="w-4 h-4 text-gold" />
              <span className="text-[9px] font-bold text-text-secondary uppercase">ENQUIRIES</span>
            </div>
            <p className="text-2xl font-black text-navy leading-none">{totalEnquiries}</p>
            <p className="text-[9px] text-text-secondary font-semibold mt-1">Contact form leads</p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-200 mb-8 select-none">
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'analytics' 
                ? 'border-navy text-navy' 
                : 'border-transparent text-text-secondary hover:text-navy'
            }`}
          >
            Visitor & Click Analytics
          </button>
          <button 
            onClick={() => setActiveTab('appointments')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'appointments' 
                ? 'border-navy text-navy' 
                : 'border-transparent text-text-secondary hover:text-navy'
            }`}
          >
            Consulting Appointments ({appointments.length})
          </button>
        </div>

        {/* Tab 1: Analytics Dashboard */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Top Clicked CTAs */}
            <div className="md:col-span-7 bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-extrabold text-sm text-navy uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
                <MousePointerClick className="w-4 h-4 text-gold" />
                <span>CTA Click Rankings</span>
              </h3>
              
              {sortedClicks.length === 0 ? (
                <p className="text-xs text-text-secondary italic">No click data tracked yet.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {sortedClicks.map(([btnName, count]: any, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 max-w-[80%]">
                        <span className="font-mono text-xs text-text-secondary bg-gray-100 px-1.5 py-0.5 font-bold">#{idx + 1}</span>
                        <span className="font-bold text-navy truncate block">{btnName}</span>
                      </div>
                      <span className="font-mono text-xs font-black text-gold bg-gold/10 px-2 py-0.5">{count} clicks</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Geolocation Stats */}
            <div className="md:col-span-5 bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-extrabold text-sm text-navy uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Top Visitor Locations</span>
              </h3>
              
              {sortedLocations.length === 0 ? (
                <p className="text-xs text-text-secondary italic">No location logs available.</p>
              ) : (
                <div className="flex flex-col gap-3.5">
                  {sortedLocations.map(([location, count]: any, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs font-bold text-navy">
                        <span>{location}</span>
                        <span className="font-mono font-black">{count} hits</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-none overflow-hidden">
                        <div 
                          className="bg-[#0170B9] h-full"
                          style={{ width: `${(count / totalViews) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Page views Log */}
            <div className="md:col-span-12 bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-extrabold text-sm text-navy uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-gold" />
                <span>Live Navigation Audit Logs</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 text-navy font-bold uppercase">
                      <th className="py-2.5 pr-4">Timestamp</th>
                      <th className="py-2.5 pr-4">Destination</th>
                      <th className="py-2.5 pr-4">IP Address</th>
                      <th className="py-2.5 pr-4">Location</th>
                      <th className="py-2.5">User Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {views.slice(0, 15).map((view) => (
                      <tr key={view.id} className="border-b border-gray-100 hover:bg-gray-50 text-text-secondary">
                        <td className="py-2.5 pr-4 font-mono">{new Date(view.created_at).toLocaleString()}</td>
                        <td className="py-2.5 pr-4 font-bold text-[#0170B9]">{view.path}</td>
                        <td className="py-2.5 pr-4 font-mono">{view.ip}</td>
                        <td className="py-2.5 pr-4 font-semibold">{view.city}, {view.country}</td>
                        <td className="py-2.5 truncate max-w-[200px]" title={view.user_agent}>{view.user_agent}</td>
                      </tr>
                    ))}
                    {views.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-4 text-center italic">No views registered yet.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Appointment Scheduler list */}
        {activeTab === 'appointments' && (
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <h3 className="font-extrabold text-sm text-navy uppercase tracking-wider mb-4 border-b pb-2">
              Bookings & Enquiries Ledger
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-navy font-bold uppercase">
                    <th className="py-3 pr-4">Date/Time</th>
                    <th className="py-3 pr-4">Type</th>
                    <th className="py-3 pr-4">Client Contact</th>
                    <th className="py-3 pr-4">Company</th>
                    <th className="py-3 pr-4">Details / Bottlenecks</th>
                    <th className="py-3 pr-4">Status</th>
                    <th className="py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => {
                    const isEnquiry = appt.date === 'Enquiry';
                    return (
                      <tr key={appt.id} className="border-b border-gray-100 hover:bg-gray-50 text-text-secondary align-top">
                        {/* Date Time */}
                        <td className="py-3 pr-4 font-mono font-bold whitespace-nowrap">
                          {isEnquiry ? (
                            <span className="text-gold uppercase font-bold text-[10px] bg-gold/10 px-2 py-0.5">Contact Form</span>
                          ) : (
                            <div className="flex flex-col">
                              <span>{appt.date}</span>
                              <span className="text-text-primary text-[11px] mt-0.5">{appt.time_slot}</span>
                            </div>
                          )}
                        </td>
                        
                        {/* Type */}
                        <td className="py-3 pr-4 font-semibold">
                          {isEnquiry ? 'Web Lead' : '30-Min Call'}
                        </td>
                        
                        {/* Contact */}
                        <td className="py-3 pr-4">
                          <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-text-primary">{appt.name}</span>
                            <span>{appt.email}</span>
                            {appt.phone && <span className="font-mono text-[11px]">{appt.phone}</span>}
                          </div>
                        </td>

                        {/* Company */}
                        <td className="py-3 pr-4 font-bold text-navy">
                          {appt.company || '—'}
                        </td>

                        {/* Notes */}
                        <td className="py-3 pr-4 max-w-[280px]">
                          <p className="leading-relaxed whitespace-pre-wrap">{appt.description || 'No description provided.'}</p>
                        </td>

                        {/* Status */}
                        <td className="py-3 pr-4 font-bold">
                          <span className={`inline-block px-2 py-0.5 text-[9px] uppercase tracking-wider ${
                            appt.status === 'Scheduled' 
                              ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                              : appt.status === 'Completed'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : 'bg-red-50 text-red-700 border border-red-200'
                          }`}>
                            {appt.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {appt.status === 'Scheduled' && (
                              <>
                                <button
                                  onClick={() => handleStatusUpdate(appt.id, 'Completed')}
                                  title="Mark Completed"
                                  className="w-7 h-7 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 flex items-center justify-center transition-colors"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleStatusUpdate(appt.id, 'Cancelled')}
                                  title="Cancel Appointment"
                                  className="w-7 h-7 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 flex items-center justify-center transition-colors"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {appointments.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-6 text-center italic text-text-secondary">
                        No appointments or enquiries logged.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
