import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Check, 
  X, 
  AlertCircle, 
  ArrowLeft, 
  Download, 
  Send, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import { 
  getStoredEngagements, 
  saveStoredEngagements, 
  updateEngagementTask, 
  addStatusUpdate, 
  updateDeliverableStatus, 
  addDeliverableComment
} from '../data/engagements';
import type { 
  Engagement, 
  Task, 
  Deliverable
} from '../data/engagements';

// Simple SHA-256 helper function (native browser API)
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function Tracker() {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'client'>('client');
  const [currentClientId, setCurrentClientId] = useState<string>('');
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');

  // App Data states
  const [engagements, setEngagements] = useState<Engagement[]>([]);
  const [selectedClient, setSelectedClient] = useState<Engagement | null>(null);

  // Gantt Chart View mode
  const [ganttView, setGanttView] = useState<'day' | 'week' | 'month'>('week');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Administrative dialog / input states
  const [showDelayModal, setShowDelayModal] = useState(false);
  const [delayTask, setDelayTask] = useState<Task | null>(null);
  const [delayCategory, setDelayCategory] = useState('Client Data Not Provided');
  const [delayNote, setDelayNote] = useState('');
  const [revisedDate, setRevisedDate] = useState('');

  const [newStatusNote, setNewStatusNote] = useState('');
  const [newStatusLabel, setNewStatusLabel] = useState<'On Track' | 'At Risk' | 'Delayed' | 'Completed'>('On Track');

  const [activeAdminTab, setActiveAdminTab] = useState<'timeline' | 'status' | 'reports' | 'meetings'>('timeline');

  // Client side states
  const [activeClientTab, setActiveClientTab] = useState<'gantt' | 'updates' | 'reports' | 'notes'>('gantt');
  const [newCommentText, setNewCommentText] = useState<{ [delId: string]: string }>({});

  // Sync state from localStorage
  useEffect(() => {
    const data = getStoredEngagements();
    setEngagements(data);
    
    // Check if there is an active session
    const sessionAuth = sessionStorage.getItem('tracker_authenticated');
    const sessionRole = sessionStorage.getItem('tracker_role');
    const sessionClientId = sessionStorage.getItem('tracker_client_id');
    
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      setUserRole(sessionRole as 'admin' | 'client');
      if (sessionRole === 'client' && sessionClientId) {
        setCurrentClientId(sessionClientId);
        const active = data.find(e => e.id === sessionClientId);
        setSelectedClient(active || null);
      } else if (sessionRole === 'admin') {
        setSelectedClient(data[0] || null);
      }
    }
  }, []);

  const refreshData = () => {
    const data = getStoredEngagements();
    setEngagements(data);
    if (userRole === 'client' && currentClientId) {
      const active = data.find(e => e.id === currentClientId);
      setSelectedClient(active || null);
    } else if (userRole === 'admin' && selectedClient) {
      const active = data.find(e => e.id === selectedClient.id);
      setSelectedClient(active || null);
    }
  };

  // Handle client password logins
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const inputHash = await sha256(passcode);
    
    // Check Admin passcode
    if (passcode === 'scale123') {
      setIsAuthenticated(true);
      setUserRole('admin');
      sessionStorage.setItem('tracker_authenticated', 'true');
      sessionStorage.setItem('tracker_role', 'admin');
      
      const stored = getStoredEngagements();
      setEngagements(stored);
      setSelectedClient(stored[0] || null);
      setPasscode('');
      return;
    }

    // Check client passcodes against database
    const stored = getStoredEngagements();
    const matched = stored.find(c => c.passcode === passcode || c.passcodeHash === inputHash);

    if (matched) {
      setIsAuthenticated(true);
      setUserRole('client');
      setCurrentClientId(matched.id);
      setSelectedClient(matched);
      sessionStorage.setItem('tracker_authenticated', 'true');
      sessionStorage.setItem('tracker_role', 'client');
      sessionStorage.setItem('tracker_client_id', matched.id);
      setPasscode('');
    } else {
      setLoginError('Incorrect login passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('client');
    setCurrentClientId('');
    setSelectedClient(null);
    sessionStorage.removeItem('tracker_authenticated');
    sessionStorage.removeItem('tracker_role');
    sessionStorage.removeItem('tracker_client_id');
  };

  // Task manipulation
  const handleUpdateProgress = (taskId: string, progress: number) => {
    if (!selectedClient) return;
    const isCompleted = progress === 100;
    updateEngagementTask(
      selectedClient.id, 
      taskId, 
      { progressPct: progress, status: isCompleted ? 'Completed' : 'In Progress' }
    );
    refreshData();
  };

  const handleOpenDelayModal = (task: Task) => {
    setDelayTask(task);
    setRevisedDate(task.plannedEnd);
    setDelayNote('');
    setShowDelayModal(true);
  };

  const handleLogDelay = () => {
    if (!selectedClient || !delayTask) return;
    
    updateEngagementTask(
      selectedClient.id,
      delayTask.id,
      { status: 'Delayed', plannedEnd: revisedDate },
      { reasonCategory: delayCategory, reasonNote: delayNote, revisedEndDate: revisedDate }
    );

    // Also auto-post a status update about this delay
    addStatusUpdate(
      selectedClient.id,
      `Task "${delayTask.name}" has been rescheduled to ${revisedDate}. Reason: ${delayCategory}. Note: ${delayNote}`,
      'Delayed'
    );

    setShowDelayModal(false);
    setDelayTask(null);
    refreshData();
  };

  const handlePostStatusNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient || !newStatusNote.trim()) return;

    addStatusUpdate(selectedClient.id, newStatusNote, newStatusLabel);
    setNewStatusNote('');
    refreshData();
  };

  const handleUpdateReportStatus = (delId: string, status: Deliverable['status']) => {
    if (!selectedClient) return;
    updateDeliverableStatus(selectedClient.id, delId, status);
    refreshData();
  };

  const handleClientAcknowledgeUpdate = (updateId: string) => {
    if (!selectedClient) return;
    const stored = getStoredEngagements();
    const updated = stored.map(engagement => {
      if (engagement.id !== selectedClient.id) return engagement;
      return {
        ...engagement,
        statusUpdates: engagement.statusUpdates.map(up => 
          up.id === updateId ? { ...up, acknowledgedAt: new Date().toISOString() } : up
        )
      };
    });
    saveStoredEngagements(updated);
    refreshData();
  };

  const handleAddComment = (delId: string) => {
    const comment = newCommentText[delId];
    if (!selectedClient || !comment || !comment.trim()) return;

    addDeliverableComment(selectedClient.id, delId, comment, userRole === 'admin' ? 'Abraham S' : 'Client Stakeholder');
    setNewCommentText(prev => ({ ...prev, [delId]: '' }));
    refreshData();
  };

  // Helper date calculations for Gantt Chart
  const getGanttTimelineRange = () => {
    if (!selectedClient) return { start: new Date(), end: new Date() };
    
    // We fit dates from June 1, 2026 to July 31, 2026 (or expanded based on milestones)
    let minDate = new Date('2026-06-01');
    let maxDate = new Date('2026-07-31');

    selectedClient.phases.forEach(phase => {
      phase.tasks.forEach(task => {
        const start = new Date(task.plannedStart);
        const end = new Date(task.plannedEnd);
        if (start < minDate) minDate = start;
        if (end > maxDate) maxDate = end;
      });
    });

    return { start: minDate, end: maxDate };
  };

  // Render SVG/CSS Grid Gantt Chart
  const renderGanttChart = () => {
    if (!selectedClient) return null;

    const { start: timelineStart, end: timelineEnd } = getGanttTimelineRange();
    
    const todayDate = new Date('2026-06-22'); // Fixed system today reference date as per draft documentation
    const todayOffsetPercent = ((todayDate.getTime() - timelineStart.getTime()) / (timelineEnd.getTime() - timelineStart.getTime())) * 100;

    // Build timeline columns
    const columns = [];
    let curr = new Date(timelineStart);
    while (curr <= timelineEnd) {
      columns.push(new Date(curr));
      curr.setDate(curr.getDate() + (ganttView === 'day' ? 1 : ganttView === 'week' ? 7 : 30));
    }

    return (
      <div className="bg-white border border-slate-200 p-6 shadow-sm overflow-hidden select-none">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-slate-100 pb-4">
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              Project Schedule Roadmap
            </h4>
            <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
              Visual Gantt chart mapping core methodology phases & deliverables
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 border border-slate-200">
            {(['day', 'week', 'month'] as const).map(view => (
              <button
                key={view}
                onClick={() => setGanttView(view)}
                className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider transition-all rounded-none ${
                  ganttView === view 
                    ? 'bg-[#00203f] text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {view} View
              </button>
            ))}
          </div>
        </div>

        {/* Timeline body wrapper */}
        <div className="overflow-x-auto relative min-h-[350px] border border-slate-100">
          
          {/* Today Line indicator marker */}
          {todayOffsetPercent >= 0 && todayOffsetPercent <= 100 && (
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 pointer-events-none"
              style={{ left: `${todayOffsetPercent}%` }}
            >
              <span className="absolute top-0 transform -translate-x-1/2 bg-red-500 text-white text-[8px] font-black uppercase px-1 py-0.5 tracking-widest whitespace-nowrap">
                Today (June 22)
              </span>
            </div>
          )}

          {/* Timeline Grid Table */}
          <div className="min-w-[800px]">
            {/* Header Dates Row */}
            <div className="grid grid-cols-12 border-b border-slate-200 bg-slate-50 text-[10px] font-bold text-slate-600 uppercase">
              <div className="col-span-4 p-2.5 border-r border-slate-200">Phase & Tasks Details</div>
              <div className="col-span-8 relative p-2.5 flex justify-between">
                {columns.map((col, idx) => (
                  <span key={idx} className="text-[9px] font-bold text-slate-500">
                    {ganttView === 'day' 
                      ? col.toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
                      : ganttView === 'week'
                      ? 'Wk' + Math.ceil(col.getDate() / 7) + ' (' + col.toLocaleDateString(undefined, { month: 'short' }) + ')'
                      : col.toLocaleDateString(undefined, { month: 'long', year: '2-digit' })
                    }
                  </span>
                ))}
              </div>
            </div>

            {/* Rendering Rows */}
            <div className="divide-y divide-slate-100">
              {selectedClient.phases.map(phase => {
                const phaseStart = new Date(phase.startDate);
                const phaseEnd = new Date(phase.endDate);
                const phaseLeftPercent = Math.max(0, ((phaseStart.getTime() - timelineStart.getTime()) / (timelineEnd.getTime() - timelineStart.getTime())) * 100);
                const phaseWidthPercent = Math.max(2, ((phaseEnd.getTime() - phaseStart.getTime()) / (timelineEnd.getTime() - timelineStart.getTime())) * 100);

                return (
                  <div key={phase.id} className="bg-slate-50/50">
                    {/* Parent Phase Row */}
                    <div className="grid grid-cols-12 items-center min-h-[44px]">
                      <div className="col-span-4 p-2 border-r border-slate-200 flex items-center gap-2">
                        <span className="w-5 h-5 bg-[#00203f]/10 border border-[#00203f]/20 rounded-full flex items-center justify-center text-[10px] font-black text-[#00203f]">
                          {phase.phaseNumber}
                        </span>
                        <span className="font-extrabold text-xs text-slate-800 truncate" title={phase.name}>
                          {phase.name}
                        </span>
                      </div>
                      <div className="col-span-8 relative h-full flex items-center px-1">
                        {/* Parent Phase visual bar */}
                        <div 
                          className="absolute h-3.5 bg-gradient-to-r from-slate-700 to-[#00203f] opacity-80 rounded-none shadow-sm flex items-center"
                          style={{ left: `${phaseLeftPercent}%`, width: `${phaseWidthPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Child Tasks Rows */}
                    {phase.tasks.map(task => {
                      const taskStart = new Date(task.plannedStart);
                      const taskEnd = new Date(task.plannedEnd);
                      const taskLeftPercent = Math.max(0, ((taskStart.getTime() - timelineStart.getTime()) / (timelineEnd.getTime() - timelineStart.getTime())) * 100);
                      const taskWidthPercent = Math.max(2, ((taskEnd.getTime() - taskStart.getTime()) / (timelineEnd.getTime() - timelineStart.getTime())) * 100);

                      let barColor = 'bg-slate-300'; // Not Started
                      if (task.status === 'Completed') barColor = 'bg-[#00203f]';
                      else if (task.status === 'In Progress') barColor = 'bg-emerald-500';
                      else if (task.status === 'Delayed') barColor = 'bg-rose-500';
                      else if (task.status === 'At Risk') barColor = 'bg-amber-500';

                      return (
                        <div 
                          key={task.id} 
                          onClick={() => setSelectedTask(task)}
                          className="grid grid-cols-12 items-center min-h-[38px] hover:bg-slate-100/70 transition-colors cursor-pointer border-t border-slate-100"
                        >
                          <div className="col-span-4 p-2 pl-9 border-r border-slate-200 flex flex-col justify-center">
                            <span className="font-bold text-[11px] text-slate-700 truncate" title={task.name}>
                              {task.name}
                            </span>
                            <span className="text-[9px] text-slate-400 font-semibold uppercase">
                              {task.owner} • {task.progressPct}%
                            </span>
                          </div>
                          <div className="col-span-8 relative h-full flex items-center px-1">
                            {/* Task visual bar */}
                            <div 
                              className={`absolute h-5 rounded-none shadow-sm hover:ring-2 hover:ring-[#00203f]/50 transition-all flex items-center px-2 cursor-pointer ${barColor}`}
                              style={{ left: `${taskLeftPercent}%`, width: `${taskWidthPercent}%` }}
                            >
                              <div className="w-full flex items-center justify-between text-[8px] font-black text-white overflow-hidden whitespace-nowrap">
                                <span>{task.progressPct > 0 ? `${task.progressPct}%` : ''}</span>
                                {task.delays && task.delays.length > 0 && <span>⚠️</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gantt Legend */}
        <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-slate-100 text-[9px] font-extrabold uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-[#00203f] inline-block" />
            <span>Completed (Navy)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-emerald-500 inline-block" />
            <span>In Progress (Green)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-rose-500 inline-block" />
            <span>Delayed (Red)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-amber-500 inline-block" />
            <span>At Risk (Amber)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-slate-300 inline-block" />
            <span>Not Started (Grey)</span>
          </div>
        </div>
      </div>
    );
  };

  // Accountability Metrics calculators
  const getAccountabilityMetrics = () => {
    const allTasks = engagements.flatMap(e => e.phases.flatMap(p => p.tasks));
    
    // On-Time Delivery Rate
    const completedTasks = allTasks.filter(t => t.status === 'Completed');
    const onTimeCompleted = completedTasks.filter(t => !t.delays || t.delays.length === 0);
    const onTimeRate = completedTasks.length > 0
      ? Math.round((onTimeCompleted.length / completedTasks.length) * 100)
      : 100;

    // Average delay per engagement (in days)
    let totalDelayDays = 0;
    let delayCount = 0;
    allTasks.forEach(t => {
      if (t.delays && t.delays.length > 0) {
        t.delays.forEach(d => {
          const originalEnd = new Date(t.plannedEnd); // Rough approximation
          const revisedEnd = new Date(d.revisedEndDate);
          const diffTime = Math.max(0, revisedEnd.getTime() - originalEnd.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          totalDelayDays += diffDays;
          delayCount++;
        });
      }
    });
    const avgDelay = delayCount > 0 ? Math.round(totalDelayDays / engagements.length) : 0;

    // Most common delay reason
    const delayReasons: { [key: string]: number } = {};
    allTasks.forEach(t => {
      if (t.delays) {
        t.delays.forEach(d => {
          delayReasons[d.reasonCategory] = (delayReasons[d.reasonCategory] || 0) + 1;
        });
      }
    });
    const sortedReasons = Object.entries(delayReasons).sort((a, b) => b[1] - a[1]);
    const topReason = sortedReasons.length > 0 ? sortedReasons[0][0] : 'None logged';

    return {
      onTimeRate,
      avgDelay,
      topReason,
      activeProjectsCount: engagements.filter(e => e.status !== 'Completed').length
    };
  };

  const metrics = getAccountabilityMetrics();

  // RENDER LOGIN GATE
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#001026] text-white flex items-center justify-center p-6 relative overflow-hidden select-none">
        {/* Background art blur elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-[#0B1E2E] border border-white/10 p-8 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-gold to-blue-500" />
          
          <div className="flex flex-col items-center text-center mb-8">
            <span className="w-14 h-14 bg-gradient-to-br from-blue-900 to-[#00203f] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-2xl mb-4 font-mono font-black shadow-lg">
              Ω
            </span>
            <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em] font-mono">
              Digital Transformation Portal
            </span>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1 uppercase">
              Scale With Abraham
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold max-w-[280px] mt-2 leading-relaxed">
              Secure access gate to Gantt trackers, accountability metrics, and gap audit report vaults.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                Authentication Passcode
              </label>
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-white/10 bg-black/30 p-3.5 text-sm font-semibold text-white focus:outline-none focus:border-[#d4af37] text-center tracking-widest placeholder:tracking-normal"
              />
            </div>
            
            {loginError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-700 to-[#0170B9] hover:from-blue-800 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-widest shadow-lg transition-all border border-blue-500/30"
            >
              Authenticate & Unlock
            </button>
          </form>

          {/* Quick Demo Helper Section */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <h5 className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-2">
              Demonstration Passcodes (Copy to test)
            </h5>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
              <div className="bg-white/5 p-2 border border-white/5 flex flex-col items-center">
                <span className="text-slate-400">Client Space</span>
                <code className="text-gold mt-0.5">kalyan123</code>
              </div>
              <div className="bg-white/5 p-2 border border-white/5 flex flex-col items-center">
                <span className="text-slate-400">Operator View</span>
                <code className="text-gold mt-0.5">scale123</code>
              </div>
              <div className="bg-white/5 p-2 border border-white/5 flex flex-col items-center">
                <span className="text-slate-400">Malabar Space</span>
                <code className="text-gold mt-0.5">malabar123</code>
              </div>
              <div className="bg-white/5 p-2 border border-white/5 flex flex-col items-center">
                <span className="text-slate-400">Reliance Space</span>
                <code className="text-gold mt-0.5">reliance123</code>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="text-xs text-slate-500 hover:text-slate-300 font-semibold inline-flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // OPERATOR / ADMIN VIEW
  // =========================================================================
  if (userRole === 'admin') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none">
        {/* Custom Header Bar */}
        <header className="bg-[#00203f] text-white py-4 px-6 md:px-10 border-b border-[#00203f] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-white/10 flex items-center justify-center text-[#d4af37] font-black text-lg border border-[#d4af37]/20">
              Ω
            </span>
            <div>
              <span className="text-[9px] font-black text-[#d4af37] uppercase tracking-wider font-mono">
                Operator Control Room
              </span>
              <h1 className="text-xl font-extrabold uppercase tracking-wide">
                Scale Systems Tracker Console
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 font-bold">
              ● Abraham S (Super Admin)
            </span>
            <button 
              onClick={handleLogout}
              className="px-4 py-1.5 border border-white/20 hover:bg-white/5 text-xs font-black uppercase tracking-wider transition-colors"
            >
              Sign Out
            </button>
          </div>
        </header>

        {/* Admin Dashboard Body */}
        <main className="flex-1 p-6 md:p-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Top Aggregated Stat Metrics */}
          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 p-5 shadow-sm">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                Active Client Engagements
              </span>
              <p className="text-2xl font-black text-slate-900 leading-none">{metrics.activeProjectsCount}</p>
              <p className="text-[9px] text-slate-500 font-semibold mt-1">Live tracking timelines</p>
            </div>

            <div className="bg-white border border-slate-200 p-5 shadow-sm">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                On-Time Delivery Rate
              </span>
              <p className="text-2xl font-black text-emerald-600 leading-none">{metrics.onTimeRate}%</p>
              <p className="text-[9px] text-slate-500 font-semibold mt-1">Tasks hit by deadline</p>
            </div>

            <div className="bg-white border border-slate-200 p-5 shadow-sm">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                Average Engagement Delay
              </span>
              <p className="text-2xl font-black text-rose-600 leading-none">{metrics.avgDelay} Days</p>
              <p className="text-[9px] text-slate-500 font-semibold mt-1">Mean timeline slippage</p>
            </div>

            <div className="bg-white border border-slate-200 p-5 shadow-sm">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                Top Bottleneck Trigger
              </span>
              <p className="text-lg font-black text-amber-600 leading-none truncate max-w-full" title={metrics.topReason}>
                {metrics.topReason}
              </p>
              <p className="text-[9px] text-slate-500 font-semibold mt-1">Primary delay category</p>
            </div>
          </div>

          {/* Left Column: Management Console (8/12 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Active Client Selection & Progress card */}
            <div className="bg-white border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                  Select Active Engagement
                </label>
                <select
                  value={selectedClient?.id || ''}
                  onChange={(e) => {
                    const found = engagements.find(eng => eng.id === e.target.value);
                    setSelectedClient(found || null);
                  }}
                  className="bg-slate-50 border border-slate-200 p-2.5 text-sm font-bold text-[#00203f] focus:outline-none focus:border-[#00203f] min-w-[200px]"
                >
                  {engagements.map(e => (
                    <option key={e.id} value={e.id}>{e.clientName}</option>
                  ))}
                </select>
              </div>

              {selectedClient && (
                <div className="flex-1 w-full sm:max-w-xs text-right">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1">
                    <span>Overall Project Progress</span>
                    <span className="font-mono text-[#00203f] font-black">{selectedClient.progressPct}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-700 to-[#0170B9] h-full transition-all duration-300"
                      style={{ width: `${selectedClient.progressPct}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-end gap-1.5 mt-1.5">
                    <span className={`w-2 h-2 rounded-full inline-block ${
                      selectedClient.status === 'On Track' ? 'bg-emerald-500' :
                      selectedClient.status === 'Delayed' ? 'bg-rose-500' : 'bg-amber-500'
                    }`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Phase {selectedClient.phaseActive} Active • {selectedClient.status}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Render the Reactive Gantt chart */}
            {renderGanttChart()}

            {/* Administrative Management Tab Container */}
            {selectedClient && (
              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                
                {/* Tab Header buttons */}
                <div className="flex border-b border-slate-200 mb-6 text-[10px] font-black uppercase tracking-wider">
                  <button
                    onClick={() => setActiveAdminTab('timeline')}
                    className={`pb-2 pr-4 border-b-2 transition-all ${
                      activeAdminTab === 'timeline' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Roadmap Timeline Scheduler
                  </button>
                  <button
                    onClick={() => setActiveAdminTab('status')}
                    className={`pb-2 px-4 border-b-2 transition-all ${
                      activeAdminTab === 'status' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Daily Status Publisher
                  </button>
                  <button
                    onClick={() => setActiveAdminTab('reports')}
                    className={`pb-2 px-4 border-b-2 transition-all ${
                      activeAdminTab === 'reports' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Deliverables Vault Manager
                  </button>
                  <button
                    onClick={() => setActiveAdminTab('meetings')}
                    className={`pb-2 pl-4 border-b-2 transition-all ${
                      activeAdminTab === 'meetings' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Meetings & Decisions Log
                  </button>
                </div>

                {/* TAB 1: Timeline Scheduler Editor */}
                {activeAdminTab === 'timeline' && (
                  <div className="flex flex-col gap-4">
                    <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide border-b pb-2">
                      Interactive Task Progress & Rescheduling Matrix
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-500 font-extrabold uppercase text-[9px] tracking-wider">
                            <th className="py-2 pr-2">Task Details</th>
                            <th className="py-2 pr-2">Planned Dates</th>
                            <th className="py-2 pr-2">Progress Range</th>
                            <th className="py-2 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {selectedClient.phases.flatMap(phase => 
                            phase.tasks.map(task => (
                              <tr key={task.id} className="hover:bg-slate-50/50">
                                <td className="py-3 pr-2">
                                  <div className="flex flex-col">
                                    <span className="font-extrabold text-slate-800">{task.name}</span>
                                    <span className="text-[9px] text-slate-400 font-bold uppercase">{task.owner}</span>
                                  </div>
                                </td>
                                <td className="py-3 pr-2 whitespace-nowrap">
                                  <div className="flex flex-col font-mono text-[10px] text-slate-600 font-semibold">
                                    <span>S: {task.plannedStart}</span>
                                    <span>E: {task.plannedEnd}</span>
                                  </div>
                                </td>
                                <td className="py-3 pr-2">
                                  <div className="flex items-center gap-3">
                                    <input 
                                      type="range"
                                      min="0"
                                      max="100"
                                      step="10"
                                      value={task.progressPct}
                                      onChange={(e) => handleUpdateProgress(task.id, parseInt(e.target.value))}
                                      className="accent-[#00203f] w-24 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                                    />
                                    <span className="font-mono font-bold text-slate-700 text-[10px]">{task.progressPct}%</span>
                                  </div>
                                </td>
                                <td className="py-3 text-right">
                                  {task.status !== 'Completed' && (
                                    <button
                                      onClick={() => handleOpenDelayModal(task)}
                                      className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 text-[10px] font-black uppercase tracking-wider"
                                    >
                                      Log Delay
                                    </button>
                                  )}
                                  {task.status === 'Completed' && (
                                    <span className="text-emerald-600 text-[10px] font-black uppercase tracking-wider flex items-center justify-end gap-1">
                                      <Check className="w-3.5 h-3.5" /> Completed
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* TAB 2: Daily Status Notes Publisher */}
                {activeAdminTab === 'status' && (
                  <form onSubmit={handlePostStatusNote} className="flex flex-col gap-4">
                    <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide border-b pb-2">
                      Publish Real-time Daily Status Update note
                    </h5>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                          Status Update Category
                        </label>
                        <select
                          value={newStatusLabel}
                          onChange={(e) => setNewStatusLabel(e.target.value as any)}
                          className="w-full bg-slate-50 border border-slate-200 p-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#00203f]"
                        >
                          <option value="On Track">On Track (Green)</option>
                          <option value="At Risk">At Risk (Amber)</option>
                          <option value="Delayed">Delayed (Red)</option>
                          <option value="Completed">Completed (Navy)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                        Status Update Text (Verbatim operational details)
                      </label>
                      <textarea
                        value={newStatusNote}
                        onChange={(e) => setNewStatusNote(e.target.value)}
                        placeholder="Write details about ERP sandbox roles, masking progress, data waiting status, etc."
                        required
                        rows={3}
                        className="w-full border border-slate-200 bg-slate-50 p-3 text-xs font-semibold focus:outline-none focus:border-[#00203f] text-slate-800"
                      />
                    </div>

                    <button
                      type="submit"
                      className="self-end px-5 py-2.5 bg-[#00203f] hover:bg-[#00203f]/90 text-white font-black text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" /> Publish Update Note
                    </button>
                  </form>
                )}

                {/* TAB 3: Deliverables Vault Manager */}
                {activeAdminTab === 'reports' && (
                  <div className="flex flex-col gap-4">
                    <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide border-b pb-2">
                      Audit Deliverables & PDF Reports Vault Gate
                    </h5>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-500 font-extrabold uppercase text-[9px] tracking-wider">
                            <th className="py-2 pr-2">Deliverable Name</th>
                            <th className="py-2 pr-2">Due Date</th>
                            <th className="py-2 pr-2">Current Status</th>
                            <th className="py-2 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {selectedClient.deliverables.map(del => (
                            <tr key={del.id} className="hover:bg-slate-50/50">
                              <td className="py-3 pr-2">
                                <div className="flex flex-col">
                                  <span className="font-extrabold text-slate-800">{del.name}</span>
                                  <span className="text-[9px] text-slate-400 font-semibold">{del.version} • {del.fileSize || 'No File'}</span>
                                </div>
                              </td>
                              <td className="py-3 pr-2 font-mono text-slate-600 font-semibold">{del.dueDate}</td>
                              <td className="py-3 pr-2">
                                <span className={`inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                                  del.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                                  del.status === 'Under Review' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                  del.status === 'In Progress' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                  'bg-slate-100 text-slate-500 border border-slate-200'
                                }`}>
                                  {del.status}
                                </span>
                              </td>
                              <td className="py-3 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  {del.status !== 'Delivered' && (
                                    <button
                                      onClick={() => handleUpdateReportStatus(del.id, 'Delivered')}
                                      className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-[9px] font-black uppercase tracking-wider"
                                    >
                                      Mark Delivered
                                    </button>
                                  )}
                                  {del.status === 'Pending' && (
                                    <button
                                      onClick={() => handleUpdateReportStatus(del.id, 'In Progress')}
                                      className="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 text-[9px] font-black uppercase tracking-wider"
                                    >
                                      Set In Progress
                                    </button>
                                  )}
                                  {del.status === 'In Progress' && (
                                    <button
                                      onClick={() => handleUpdateReportStatus(del.id, 'Under Review')}
                                      className="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-[9px] font-black uppercase tracking-wider"
                                    >
                                      Submit Review
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* TAB 4: Meetings and Decisions Log */}
                {activeAdminTab === 'meetings' && (
                  <div className="flex flex-col gap-5">
                    <h5 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide border-b pb-2">
                      Historical Meeting Minutes & Key Boardroom Decisions
                    </h5>
                    
                    <div className="flex flex-col gap-4">
                      {selectedClient.meetingNotes.map(note => (
                        <div key={note.id} className="border border-slate-100 p-4 bg-slate-50/50">
                          <div className="flex justify-between items-center mb-1">
                            <h6 className="font-extrabold text-sm text-slate-800">{note.title}</h6>
                            <span className="font-mono text-[10px] text-slate-500 font-semibold">{note.date}</span>
                          </div>
                          <p className="text-xs text-slate-600 font-semibold mb-3 leading-relaxed">
                            {note.summary}
                          </p>
                          <div className="border-t border-slate-100 pt-2.5">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">
                              Aligned Strategic Decisions
                            </span>
                            <ul className="list-disc list-inside text-xs text-slate-700 font-semibold flex flex-col gap-1">
                              {note.decisions.map((dec, idx) => (
                                <li key={idx} className="leading-snug">{dec}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Work To Do & Recent Activity (4/12 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Work To Do Panel (Mocking the provided admin layout) */}
            <div className="bg-white border border-slate-200 shadow-sm p-6">
              <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>Work To Do</span>
                <span className="bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 text-[10px] font-black uppercase">
                  Alerts
                </span>
              </h3>
              
              <div className="flex flex-col gap-4">
                {/* Simulated alert card */}
                {selectedClient?.phases.some(p => p.tasks.some(t => t.status === 'Delayed')) ? (
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 flex gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-800 text-[10px] uppercase tracking-wider">Timeline Slippage Triggered</h4>
                      <p className="text-[10px] font-bold text-slate-600 leading-relaxed mt-0.5">
                        Client data pending for scrap recovery. Verify revised end dates inside the timeline scheduler.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 flex gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-800 text-[10px] uppercase tracking-wider">Timelines On Track</h4>
                      <p className="text-[10px] font-bold text-slate-600 leading-relaxed mt-0.5">
                        All active child tasks for active phases are currently within their planned schedules.
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-slate-50 border border-slate-200 p-4">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Action Checklist
                  </span>
                  <div className="flex flex-col gap-2.5 text-xs font-semibold text-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-[#00203f]" />
                      <span className="line-through text-slate-400">Mask customer PII fields in ERP</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-[#00203f]" />
                      <span className="line-through text-slate-400">Publish Malabar Gold kickoff charter</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#00203f]" />
                      <span>Review Kalyan Gold buyback gate rule</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#00203f]" />
                      <span>Write Reliance Store Loss Action handbook</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Chats Widget */}
            <div className="bg-white border border-slate-200 shadow-sm p-6">
              <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                Simulated Chats
              </h3>
              <div className="flex flex-col gap-3 max-h-[200px] overflow-y-auto pr-1">
                <div className="bg-slate-50 p-2.5 border border-slate-100 text-xs">
                  <div className="flex justify-between items-center mb-1 font-bold">
                    <span className="text-slate-800">Kalyan IT Lead</span>
                    <span className="text-[9px] text-slate-400 font-mono">4 Hours Ago</span>
                  </div>
                  <p className="text-slate-600 font-semibold leading-relaxed">
                    OTP logic for scrap verification is configured in UAT environment.
                  </p>
                </div>
                <div className="bg-slate-50 p-2.5 border border-slate-100 text-xs">
                  <div className="flex justify-between items-center mb-1 font-bold">
                    <span className="text-slate-800">Reliance EVP</span>
                    <span className="text-[9px] text-slate-400 font-mono">1 Day Ago</span>
                  </div>
                  <p className="text-slate-600 font-semibold leading-relaxed">
                    Eagerly waiting for the multi-store transit analysis report v1.0 file.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Done / Live Audit Trail */}
            <div className="bg-white border border-slate-200 shadow-sm p-6">
              <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                Audit Trial Log
              </h3>
              <div className="flex flex-col gap-3.5 text-xs">
                {selectedClient?.statusUpdates.slice(0, 3).map((up, idx) => (
                  <div key={idx} className="flex gap-2.5 text-slate-600 font-semibold border-b border-slate-50 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-lg">📄</span>
                    <div>
                      <span className="font-mono text-[9px] text-slate-400 font-bold block">{up.date}</span>
                      <p className="leading-snug text-slate-700 mt-0.5">{up.updateText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>

        {/* Modal Delay Logger Dialog */}
        {showDelayModal && delayTask && (
          <div className="fixed inset-0 z-[9999] bg-[#001026]/80 flex items-center justify-center p-4 select-none">
            <div className="bg-white border border-slate-200 shadow-2xl p-6 w-full max-w-md text-left">
              <div className="flex items-center justify-between border-b pb-3 mb-4">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-5 h-5 text-amber-500" /> Log Timeline Delay
                </h4>
                <button onClick={() => setShowDelayModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 text-xs">
                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Task Name</label>
                  <p className="font-extrabold text-slate-800 text-sm">{delayTask.name}</p>
                </div>

                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Delay Reason Category</label>
                  <select
                    value={delayCategory}
                    onChange={(e) => setDelayCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#00203f]"
                  >
                    <option value="Client Data Not Provided">Client Data Not Provided</option>
                    <option value="Client Approval Pending">Client Approval Pending</option>
                    <option value="Scope Change Requested">Scope Change Requested</option>
                    <option value="Internal Resource Delay">Internal Resource Delay</option>
                    <option value="Third-Party / Tool Dependency">Third-Party / Tool Dependency</option>
                    <option value="Discovery of Additional Complexity">Discovery of Additional Complexity</option>
                    <option value="Force Majeure / Personal">Force Majeure / Personal</option>
                    <option value="Other (Specify)">Other (Specify)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Revised Completion Target Date</label>
                  <input 
                    type="date"
                    value={revisedDate}
                    onChange={(e) => setRevisedDate(e.target.value)}
                    className="w-full border border-slate-200 bg-slate-50 p-2.5 text-xs font-bold font-mono text-slate-800 focus:outline-none focus:border-[#00203f]"
                  />
                </div>

                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Detailed Explanation note</label>
                  <textarea
                    value={delayNote}
                    onChange={(e) => setDelayNote(e.target.value)}
                    placeholder="Provide specific details about waiting components, approvals, or newly discovered complexities."
                    required
                    rows={3}
                    className="w-full border border-slate-200 bg-slate-50 p-2.5 text-xs font-semibold focus:outline-none focus:border-[#00203f] text-slate-800"
                  />
                </div>

                <div className="flex justify-end gap-2.5 pt-2 border-t mt-2">
                  <button 
                    onClick={() => setShowDelayModal(false)}
                    className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-600"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleLogDelay}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white border border-rose-500 text-[10px] font-black uppercase tracking-wider shadow-sm"
                  >
                    Commit Delay & Reschedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // CLIENT DASHBOARD PORTAL
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none">
      {/* Standalone Header */}
      <header className="bg-[#00203f] text-white py-4 px-6 md:px-10 border-b border-[#00203f] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 bg-white/10 flex items-center justify-center text-[#d4af37] font-black text-lg border border-[#d4af37]/20">
            Ω
          </span>
          <div>
            <span className="text-[9px] font-black text-[#d4af37] uppercase tracking-wider font-mono">
              Engagement Timeline Tracker
            </span>
            <h1 className="text-xl font-extrabold uppercase tracking-wide">
              {selectedClient?.businessName || 'Client Workspace'}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 font-bold text-slate-300">
            🛡️ Secure Engagement Session
          </span>
          <button 
            onClick={handleLogout}
            className="px-4 py-1.5 border border-white/20 hover:bg-white/5 text-xs font-black uppercase tracking-wider transition-colors"
          >
            Exit Workspace
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 p-6 md:p-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {selectedClient && (
          <>
            {/* Top Overview Diagnostic Stats */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Overall Project status card */}
              <div className="bg-white border border-slate-200 p-5 shadow-sm flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center text-white ${
                  selectedClient.status === 'On Track' ? 'bg-emerald-500' :
                  selectedClient.status === 'Delayed' ? 'bg-rose-500' : 'bg-amber-500'
                }`}>
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Engagement Status</span>
                  <span className="text-lg font-black uppercase tracking-wider text-slate-800">{selectedClient.status}</span>
                  <p className="text-[9px] text-slate-500 font-semibold">Updated today by Abraham</p>
                </div>
              </div>

              {/* Progress weighted bar */}
              <div className="bg-white border border-slate-200 p-5 shadow-sm">
                <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-1.5">
                  <span>Overall Timeline Completion</span>
                  <span className="font-mono text-[#00203f] font-black">{selectedClient.progressPct}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 mb-1">
                  <div 
                    className="bg-[#00203f] h-full transition-all duration-300"
                    style={{ width: `${selectedClient.progressPct}%` }}
                  />
                </div>
                <p className="text-[9px] text-slate-500 font-semibold">Weighted across all 6 phases</p>
              </div>

              {/* Next upcoming task milestone */}
              <div className="bg-white border border-slate-200 p-5 shadow-sm col-span-1 md:col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">
                    Next Operational Milestone
                  </span>
                  <span className="text-sm font-extrabold text-slate-800 block truncate max-w-[320px]">
                    {selectedClient.phases
                      .flatMap(p => p.tasks)
                      .find(t => t.status !== 'Completed')?.name || 'All milestones achieved!'}
                  </span>
                  <p className="text-[9px] text-slate-500 font-semibold">
                    Target Date: {selectedClient.phases
                      .flatMap(p => p.tasks)
                      .find(t => t.status !== 'Completed')?.plannedEnd || 'Completed'}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#d4af37]" />
              </div>
            </div>

            {/* Main Tabs Selection */}
            <div className="lg:col-span-12 flex border-b border-slate-200 text-xs font-black uppercase tracking-wider">
              <button
                onClick={() => setActiveClientTab('gantt')}
                className={`pb-2.5 pr-6 border-b-2 transition-all ${
                  activeClientTab === 'gantt' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Engagement Timeline (Gantt)
              </button>
              <button
                onClick={() => setActiveClientTab('updates')}
                className={`pb-2.5 px-6 border-b-2 transition-all ${
                  activeClientTab === 'updates' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Daily Project Log ({selectedClient.statusUpdates.length})
              </button>
              <button
                onClick={() => setActiveClientTab('reports')}
                className={`pb-2.5 px-6 border-b-2 transition-all ${
                  activeClientTab === 'reports' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Deliverables & Reports ({selectedClient.deliverables.length})
              </button>
              <button
                onClick={() => setActiveClientTab('notes')}
                className={`pb-2.5 pl-6 border-b-2 transition-all ${
                  activeClientTab === 'notes' ? 'border-[#00203f] text-[#00203f]' : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Boardroom Meeting Notes
              </button>
            </div>

            {/* Bottom main layout grid */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* TAB 1: Gantt Chart */}
              {activeClientTab === 'gantt' && renderGanttChart()}

              {/* TAB 2: Daily status log Activity feed */}
              {activeClientTab === 'updates' && (
                <div className="bg-white border border-slate-200 p-6 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider border-b pb-3 mb-6">
                    Operational Daily Log Feed
                  </h4>
                  
                  <div className="flex flex-col gap-6 relative pl-6 border-l-2 border-slate-100">
                    {selectedClient.statusUpdates.map(up => (
                      <div key={up.id} className="relative">
                        {/* Timeline dot marker */}
                        <span className={`absolute left-[-31px] top-1.5 w-3 h-3 rounded-full border-2 border-white ring-2 ${
                          up.statusLabel === 'On Track' ? 'ring-emerald-500 bg-emerald-500' :
                          up.statusLabel === 'Delayed' ? 'ring-rose-500 bg-rose-500' : 
                          up.statusLabel === 'Completed' ? 'ring-[#00203f] bg-[#00203f]' : 'ring-amber-500 bg-amber-500'
                        }`} />

                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-mono text-[10px] text-slate-400 font-black tracking-wider uppercase">
                            {up.date}
                          </span>
                          <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 ${
                            up.statusLabel === 'On Track' ? 'bg-emerald-50 text-emerald-700' :
                            up.statusLabel === 'Delayed' ? 'bg-rose-50 text-rose-700' : 
                            up.statusLabel === 'Completed' ? 'bg-[#00203f]/10 text-[#00203f]' : 'bg-amber-50 text-amber-700'
                          }`}>
                            {up.statusLabel}
                          </span>
                        </div>

                        <p className="text-xs font-semibold text-slate-700 leading-relaxed max-w-2xl bg-slate-50 p-4 border border-slate-100">
                          {up.updateText}
                        </p>

                        <div className="flex justify-end mt-2">
                          {up.acknowledgedAt ? (
                            <span className="text-[9px] text-slate-400 font-bold uppercase flex items-center gap-1">
                              <Check className="w-3 h-3 text-emerald-500" /> Acknowledged at {new Date(up.acknowledgedAt).toLocaleTimeString()}
                            </span>
                          ) : (
                            <button
                              onClick={() => handleClientAcknowledgeUpdate(up.id)}
                              className="text-[9px] text-[#00203f] hover:text-[#0170B9] font-black uppercase tracking-wider flex items-center gap-1"
                            >
                              Acknowledge Update Note
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Reports Vault */}
              {activeClientTab === 'reports' && (
                <div className="bg-white border border-slate-200 p-6 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider border-b pb-3 mb-6">
                    Reports & Deliverables Vault
                  </h4>

                  <div className="flex flex-col gap-6">
                    {selectedClient.deliverables.map(del => (
                      <div key={del.id} className="border border-slate-200 p-5 shadow-sm hover:border-[#00203f]/20 transition-all">
                        <div className="flex justify-between items-start gap-4 flex-wrap">
                          <div>
                            <span className={`inline-block px-2 py-0.5 text-[8px] font-black uppercase tracking-wider mb-2 ${
                              del.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                              del.status === 'Under Review' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                              del.status === 'In Progress' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                              'bg-slate-50 text-slate-400 border border-slate-200'
                            }`}>
                              {del.status}
                            </span>
                            <h5 className="font-extrabold text-sm text-slate-900">{del.name}</h5>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                              Version {del.version} • Due Date: {del.dueDate}
                            </p>
                          </div>
                          {del.status === 'Delivered' && del.fileUrl && (
                            <button 
                              onClick={() => alert(`Simulated Download: ${del.name} (${del.fileSize})`)}
                              className="px-4 py-2 bg-[#00203f] hover:bg-[#00203f]/90 text-white font-black text-[10px] uppercase tracking-widest shadow-sm flex items-center gap-1.5 shrink-0"
                            >
                              <Download className="w-3.5 h-3.5" /> Download ({del.fileSize})
                            </button>
                          )}
                        </div>

                        {/* Comments loop */}
                        <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/50 p-4">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                            Deliverables Review Comments & Acknowledgement
                          </span>
                          
                          <div className="flex flex-col gap-3 mb-4">
                            {del.comments && del.comments.map((com, idx) => (
                              <div key={idx} className="bg-white p-2.5 border border-slate-100 text-xs">
                                <div className="flex justify-between items-center font-bold mb-1">
                                  <span className="text-slate-800">{com.author}</span>
                                  <span className="text-[9px] text-slate-400 font-mono">{com.date}</span>
                                </div>
                                <p className="text-slate-600 font-semibold leading-relaxed">{com.text}</p>
                              </div>
                            ))}
                            {(!del.comments || del.comments.length === 0) && (
                              <p className="text-[11px] text-slate-400 font-semibold italic">No review notes posted yet.</p>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <input 
                              type="text"
                              value={newCommentText[del.id] || ''}
                              onChange={(e) => {
                                const txt = e.target.value;
                                setNewCommentText(prev => ({ ...prev, [del.id]: txt }));
                              }}
                              placeholder="Leave a review comment or acknowledge receipt..."
                              className="flex-1 border border-slate-200 bg-white p-2 text-xs font-semibold focus:outline-none focus:border-[#00203f]"
                            />
                            <button
                              onClick={() => handleAddComment(del.id)}
                              className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider shrink-0"
                            >
                              Submit Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Meeting Notes */}
              {activeClientTab === 'notes' && (
                <div className="bg-white border border-slate-200 p-6 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider border-b pb-3 mb-6">
                    Minutes of Boardroom & Strategic Alignments
                  </h4>

                  <div className="flex flex-col gap-6">
                    {selectedClient.meetingNotes.map(note => (
                      <div key={note.id} className="border border-slate-100 p-5 bg-slate-50/50">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h5 className="font-extrabold text-sm text-[#00203f]">{note.title}</h5>
                          <span className="font-mono text-[9px] text-slate-400 font-black uppercase tracking-wider">{note.date}</span>
                        </div>
                        <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                          {note.summary}
                        </p>
                        <div className="border-t border-slate-100 pt-3">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                            Key Systems Architecture Decisions Aligned
                          </span>
                          <ul className="list-none flex flex-col gap-2">
                            {note.decisions.map((dec, idx) => (
                              <li key={idx} className="text-xs text-slate-700 font-semibold flex items-start gap-2">
                                <span className="text-[#d4af37] select-none">✦</span>
                                <span>{dec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Upcoming visits / Tasks Info Card (4/12 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Task Detail Card (Shown when clicked from Gantt) */}
              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider border-b pb-2 mb-4">
                  Timeline Node Inspector
                </h4>
                
                {selectedTask ? (
                  <div className="flex flex-col gap-4 text-xs font-semibold text-slate-700">
                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Task Title</span>
                      <h5 className="font-extrabold text-sm text-slate-900 leading-snug">{selectedTask.name}</h5>
                    </div>

                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Assigned Owner</span>
                      <p className="font-extrabold text-slate-800">{selectedTask.owner}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Start Target</span>
                        <p className="text-slate-800 font-bold">{selectedTask.plannedStart}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">End Target</span>
                        <p className="text-slate-800 font-bold">{selectedTask.plannedEnd}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Execution Status</span>
                      <span className={`inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                        selectedTask.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        selectedTask.status === 'Delayed' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                        selectedTask.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        {selectedTask.status}
                      </span>
                    </div>

                    {selectedTask.delays && selectedTask.delays.length > 0 && (
                      <div className="bg-rose-50 border border-rose-100 p-3 mt-1">
                        <span className="text-[9px] font-black text-rose-700 uppercase tracking-widest block mb-1">
                          Timeline Delay Logged
                        </span>
                        {selectedTask.delays.map((del, idx) => (
                          <div key={idx} className="text-[10px] text-rose-800 leading-relaxed font-bold flex flex-col gap-0.5">
                            <span>Category: {del.reasonCategory}</span>
                            <span>Note: {del.reasonNote}</span>
                            <span>Revised Target: {del.revisedEndDate}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 font-semibold italic text-center py-4">
                    Click any task inside the Gantt schedule to inspect full detail and delay reasons.
                  </p>
                )}
              </div>

              {/* Upcoming Showroom Visits / Audits schedule widget */}
              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider border-b pb-2 mb-4 flex items-center justify-between">
                  <span>Upcoming Consultant Visits</span>
                  <span className="text-[9px] text-[#d4af37] font-black uppercase">Schedule</span>
                </h4>
                
                <div className="flex flex-col gap-4 text-xs font-semibold text-slate-700">
                  <div className="flex gap-2.5 items-start">
                    <span className="text-lg shrink-0 mt-0.5">📅</span>
                    <div>
                      <span className="text-[#00203f] font-black">June 26 - June 28, 2026</span>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Showroom Audits & Staff SOP Verification</p>
                      <p className="text-[10px] text-slate-500 leading-snug mt-1">
                        Abraham will conduct on-site verification of buyback gating procedures and branch-to-branch stock transfers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start border-t border-slate-100 pt-3">
                    <span className="text-lg shrink-0 mt-0.5">📅</span>
                    <div>
                      <span className="text-[#00203f] font-black">July 15, 2026</span>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Boardroom Insights & Handover meeting</p>
                      <p className="text-[10px] text-slate-500 leading-snug mt-1">
                        Handover of boardroom KPI decision screens and operational metrics consoles to Kalyan directors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </main>
    </div>
  );
}
