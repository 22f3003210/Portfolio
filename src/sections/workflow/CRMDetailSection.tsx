import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Shuffle, 
  CheckCircle, XCircle, Bot, Smartphone, Network, 
  Target, RotateCcw, Shield, Award, CheckSquare,
  ShoppingCart, MessageSquare, Database, Bell, Truck, Users, Calendar
} from 'lucide-react';

export function CRMDetailSection() {
  const [activeTab, setActiveTab] = useState<'online' | 'offline'>('online');
  const [activeSegmentTab, setActiveSegmentTab] = useState<'new' | 'existing' | 'dormant'>('new');
  const [onlinePath, setOnlinePath] = useState<'direct' | 'assistance'>('direct');
  const [assistanceOutcome, setAssistanceOutcome] = useState<'purchase' | 'appointment' | 'lost'>('purchase');
  const [offlineOutcome, setOfflineOutcome] = useState<'won' | 'lost'>('won');

  const getConsoleLogs = () => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    if (activeTab === 'online') {
      if (onlinePath === 'direct') {
        return [
          `[${time}] [WEB_PORTAL] Customer session active on marketplace checkout`,
          `[${time}] [PAYMENT_GATEWAY] Executing payment capture request... SUCCESS`,
          `[${time}] [OMS_CONNECTOR] Transmitting order packet details to ERP`,
          `[${time}] [OMS] Order #ORD-9801 created automatically`,
          `[${time}] [ALERT_SYSTEM] Dispatched instant SMS & Email to logistics team`,
          `[${time}] [LOGISTICS_HUB] Order status updated: PENDING_FULFILLMENT`
        ];
      } else {
        if (assistanceOutcome === 'purchase') {
          return [
            `[${time}] [CRM_INGEST] Inbound inquiry detected via Instagram/WhatsApp API`,
            `[${time}] [ROUTING_ENGINE] Assigning lead token Lead Token LT-4028 to Sales Desk`,
            `[${time}] [CHAT_CONSOLE] Agent initiated product consultation with customer`,
            `[${time}] [CRM_ACTIVITY] Recorded customer interest in Premium Bridal Collection`,
            `[${time}] [CRM_OPPORTUNITY] Customer converted. Purchase initiated via custom link`,
            `[${time}] [OMS] Generated order ORD-4028-C from lead token conversion`,
            `[${time}] [OMS_SUCCESS] Order placed. Payment confirmed`
          ];
        } else if (assistanceOutcome === 'appointment') {
          return [
            `[${time}] [CRM_INGEST] WhatsApp customer requested physical showroom preview`,
            `[${time}] [ROUTING_ENGINE] Created lead token Lead Token LT-5902`,
            `[${time}] [CRM_SCHEDULER] Showroom Appointment Confirmed for nearest location`,
            `[${time}] [NOTIFIER] Sent booking confirmation SMS to customer`,
            `[${time}] [NOTIFIER] Sent CRM Alert to Showroom Floor CRE & Assigned Rep`,
            `[${time}] [CRM_STATUS] Status updated: APPOINTMENT_BOOKED`
          ];
        } else {
          return [
            `[${time}] [CRM_INGEST] Direct call enquiry logged in system`,
            `[${time}] [ROUTING_ENGINE] Generated lead token Lead Token LT-1108`,
            `[${time}] [CRM_ACTIVITY] Sales follow-up completed. Outcome: Customer declined`,
            `[${time}] [CRM_STATUS] Marking opportunity as LOST`,
            `[${time}] [METRICS_ENGINE] Capturing mandatory loss reason: 'Budget Mismatch'`,
            `[${time}] [RETARGETING_DB] Pushing lead Lead Token LT-1108 to digital retargeting queue`
          ];
        }
      }
    } else {
      if (offlineOutcome === 'won') {
        return [
          `[${time}] [CRE_DESK] Customer walked into Showroom. Entry logged`,
          `[${time}] [CRM_ENGINE] Generated unique Lead Token LT-8092`,
          `[${time}] [CRM_QUEUE] Token Lead Token LT-8092 assigned to Retail Rep Abraham Sayed`,
          `[${time}] [POS_SYSTEM] Sales Rep logged active consultation: Trial Activities`,
          `[${time}] [POS_SYSTEM] Product selected. Gold scheme discount check completed`,
          `[${time}] [BILLING] Invoice #INV-2901 generated. Marked as Opportunity Won`,
          `[${time}] [FULFILLMENT] Sent order details to karating vault and delivery desks`
        ];
      } else {
        return [
          `[${time}] [CRE_DESK] Walk-in customer registered at reception`,
          `[${time}] [CRM_ENGINE] Generated unique Lead Token LT-8093`,
          `[${time}] [CRM_QUEUE] Assigned to Retail Rep Abraham Sayed`,
          `[${time}] [POS_SYSTEM] Sales Rep logged active consultation: Products viewed & shortlisted`,
          `[${time}] [POS_SYSTEM] Customer left store without purchase. initiating recovery workflow`,
          `[${time}] [CRM_STATUS] Marking opportunity as LOST. Capturing reason: 'Design Dissatisfaction'`,
          `[${time}] [RETARGETING] Lead Lead Token LT-8093 pushed to CRM Analytics and personalized follow-up campaign`
        ];
      }
    }
  };

  return (
    <section className="bg-slate-100/70 py-16 px-4 sm:px-6 relative overflow-hidden select-none text-left">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage:'radial-gradient(circle, #0170B9 1.5px, transparent 1.5px)', backgroundSize:'32px 32px'}} />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-[#558b2f] to-blue-400" />

      {/* ════════════ PAGE 1: EXECUTIVE BRIEF ════════════ */}
      <div className="w-full max-w-[900px] mx-auto bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-200/80 p-8 sm:p-12 md:p-16 relative overflow-hidden text-left mb-16 min-h-[850px] flex flex-col justify-between">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-[#558b2f] to-blue-400" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:'radial-gradient(circle, #0170B9 1.5px, transparent 1.5px)', backgroundSize:'32px 32px'}} />
        
        <div className="space-y-8 relative z-10 my-auto">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-blue-700 border border-blue-200 bg-blue-50 px-4 py-2 uppercase rounded-sm inline-block">
            Enterprise CRM Architecture
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tight leading-none">
            OMNI-CHANNEL CUSTOMER<br/>LIFECYCLE MANAGEMENT
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 leading-snug">
            Transforming Customer Interactions into Measurable Business Intelligence
          </p>
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#558b2f] uppercase tracking-wider leading-relaxed border-l-4 border-[#8bc34a] pl-5">
            Establishing a Single Source of Truth for Every Customer Interaction From First Customer Touchpoint to Complete Lifecycle Ownership
          </p>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-semibold max-w-3xl">
            Every customer interaction—whether originating from Instagram, WhatsApp, walk-ins, referrals, Google search, advertising campaigns, exhibitions, or direct inquiries—is systematically captured within a centralized CRM ecosystem. Each prospect is assigned a unique Lead Token, enabling end-to-end tracking, accountability, and visibility across the entire customer journey. This framework ensures seamless lead management, structured follow-ups, performance measurement, and conversion optimization, providing complete control over the customer lifecycle from initial engagement to final transaction and long-term relationship management.
          </p>
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-slate-100 pt-6 mt-8 relative z-10">
          <span>Scale with Abraham — Enterprise CRM Systems Architecture</span>
          <span>Page 1 of 5</span>
        </div>
      </div>

      {/* ════════════ PAGE 2: INTERACTIVE BLUEPRINT SIMULATOR ════════════ */}
      <div className="w-full max-w-[900px] mx-auto bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-200/80 p-8 sm:p-12 md:p-16 relative overflow-hidden text-left mb-16 min-h-[1000px] flex flex-col justify-between">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-[#558b2f] to-blue-400" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:'radial-gradient(circle, #0170B9 1.5px, transparent 1.5px)', backgroundSize:'32px 32px'}} />
        
        <div className="space-y-10 relative z-10 w-full">
          <div className="border-b border-slate-200 pb-8">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#558b2f] uppercase block mb-2">
              Interactive Blueprint Simulator
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              CUSTOMER FIRST INTERACTION
            </h3>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl font-semibold mt-3">
              Select process parameters and outcome branches to simulate the data flow, automatic triggers, and CRM token assignment pathways.
            </p>
          </div>

          {/* Slicer Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 border border-slate-200 p-6 md:p-8 shadow-sm">
            <div className="md:col-span-5 space-y-3">
              <label className="block text-xs sm:text-sm font-mono font-bold text-blue-700 uppercase tracking-widest">1. Customer Channel</label>
              <div className="flex bg-white border border-slate-200 p-1.5 gap-1.5 shadow-sm">
                <button onClick={() => setActiveTab('online')} className={`flex-1 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all ${activeTab === 'online' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>Online Journey</button>
                <button onClick={() => setActiveTab('offline')} className={`flex-1 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all ${activeTab === 'offline' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>Offline Showroom</button>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              {activeTab === 'online' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="block text-xs sm:text-sm font-mono font-bold text-blue-700 uppercase tracking-widest">2. Purchase Mode</label>
                    <div className="flex bg-white border border-slate-200 p-1.5 gap-1.5 shadow-sm">
                      <button onClick={() => setOnlinePath('direct')} className={`flex-1 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all ${onlinePath === 'direct' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>Self-Service Direct</button>
                      <button onClick={() => setOnlinePath('assistance')} className={`flex-1 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all ${onlinePath === 'assistance' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>Assistance & Enquiry</button>
                    </div>
                  </div>
                  {onlinePath === 'assistance' && (
                    <div className="space-y-3">
                      <label className="block text-xs sm:text-sm font-mono font-bold text-blue-700 uppercase tracking-widest">3. Resolution Branch</label>
                      <div className="flex bg-white border border-slate-200 p-1.5 gap-1.5 shadow-sm">
                        <button onClick={() => setAssistanceOutcome('purchase')} className={`flex-1 py-3 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all ${assistanceOutcome === 'purchase' ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-emerald-50'}`}>Conv. (A)</button>
                        <button onClick={() => setAssistanceOutcome('appointment')} className={`flex-1 py-3 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all ${assistanceOutcome === 'appointment' ? 'bg-amber-500 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-amber-50'}`}>Visit (B)</button>
                        <button onClick={() => setAssistanceOutcome('lost')} className={`flex-1 py-3 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all ${assistanceOutcome === 'lost' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-red-50'}`}>Loss (C)</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="block text-xs sm:text-sm font-mono font-bold text-blue-700 uppercase tracking-widest">2. Showroom Outcome Branch</label>
                  <div className="flex bg-white border border-slate-200 p-1.5 gap-1.5 shadow-sm">
                    <button onClick={() => setOfflineOutcome('won')} className={`flex-1 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all ${offlineOutcome === 'won' ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-emerald-50'}`}>A. Opportunity Won</button>
                    <button onClick={() => setOfflineOutcome('lost')} className={`flex-1 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all ${offlineOutcome === 'lost' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-red-50'}`}>B. Opportunity Lost</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Flow + Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            {/* Step Flow */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="relative pl-12 md:pl-14 space-y-8 text-left">
                <div className="absolute top-4 bottom-4 left-[19px] md:left-[23px] w-0.5 bg-slate-200 pointer-events-none" />

                {activeTab === 'online' ? (
                  onlinePath === 'direct' ? (
                    <>
                      {[
                        { icon: <Smartphone className="w-5 h-5 transition-colors" />, step: '01', label: 'Channel Access', title: 'Direct Online Purchase (Self-Service Commerce)', desc: 'Customer purchases directly through Website, Mobile App, Amazon, Flipkart, Zepto, and other marketplaces.', accent: 'blue' },
                        { icon: <ShoppingCart className="w-5 h-5 transition-colors" />, step: '02', label: 'Buying Action', title: 'No Human Assistance Buying', desc: 'No human assistance required throughout the buying journey. Customer selects products, places the order, and completes payment online.', accent: 'blue' },
                        { icon: <Database className="w-5 h-5 transition-colors" />, step: '03', label: 'System Ingestion', title: 'Automatic Order Creation', desc: 'Order is automatically created in the Order Management System (OMS) immediately upon successful check out.', accent: 'green' },
                        { icon: <Bell className="w-5 h-5 transition-colors" />, step: '04', label: 'Operations Alert', title: 'Instant Team Notification', desc: 'Instant notification is sent to the Order Management Team with product specifications, weight details, and payment data.', accent: 'blue' },
                      ].map((s) => (
                        <div key={s.step} className="relative group">
                          <div className={`absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all group-hover:scale-110 ${s.accent === 'green' ? 'bg-green-100 border border-green-300 text-green-700 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white' : 'bg-blue-100 border border-blue-300 text-blue-700 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white'}`}>{s.icon}</div>
                          <div className={`bg-white border border-slate-200 p-6 space-y-3 transition-all duration-300 group-hover:shadow-lg ${s.accent === 'green' ? 'group-hover:bg-emerald-600 group-hover:border-emerald-700 group-hover:text-white' : 'group-hover:bg-blue-600 group-hover:border-blue-700 group-hover:text-white'}`}>
                            <span className={`text-xs font-mono font-bold uppercase tracking-widest block transition-colors ${s.accent === 'green' ? 'text-green-700 group-hover:text-emerald-100' : 'text-blue-700 group-hover:text-blue-100'}`}>Step {s.step} — {s.label}</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">{s.title}</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                      <div className="relative group">
                        <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white"><Truck className="w-5 h-5" /></div>
                        <div className="bg-white border border-slate-200 border-l-4 border-l-emerald-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-emerald-600 group-hover:border-emerald-700 group-hover:text-white group-hover:shadow-lg">
                          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block transition-colors group-hover:text-emerald-100">Step 05 — Fulfillment</span>
                          <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">Tracking & Delivery Pipeline</h4>
                          <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Complete visibility and tracking from Order Placement → Fulfillment → Delivery under a unified marketplace order workflow.</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {[
                        { icon: <MessageSquare className="w-5 h-5 transition-colors" />, step: '01', label: 'Inbound Intake', title: 'Online Assistance & Customer Enquiries', desc: 'Customer requires assistance before making a purchase decision. Customer may interact through Instagram, WhatsApp, Website Live Chat, Direct Calls, Email, or other digital channels.', accent: 'blue' },
                        { icon: <Users className="w-5 h-5 transition-colors" />, step: '02', label: 'Sales Nurturing', title: 'Human Assisted Pre-Sales Consultation', desc: 'Human assistance is provided for product enquiries, pricing, customization, availability, and purchase consultation.', accent: 'blue' },
                        { icon: <Database className="w-5 h-5 transition-colors" />, step: '03', label: 'CRM Ingestion', title: 'Centralized CRM Logging & Token Generation', desc: 'Every customer interaction is captured within the centralized CRM system. Leads are assigned to the appropriate sales representative for follow-up, and all conversations, activities, and follow-ups are recorded and monitored throughout the sales cycle.', accent: 'green' },
                      ].map((s) => (
                        <div key={s.step} className="relative group">
                          <div className={`absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all group-hover:scale-110 ${s.accent === 'green' ? 'bg-green-100 border border-green-300 text-green-700 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white' : 'bg-blue-100 border border-blue-300 text-blue-700 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white'}`}>{s.icon}</div>
                          <div className={`bg-white border border-slate-200 p-6 space-y-3 transition-all duration-300 group-hover:shadow-lg ${s.accent === 'green' ? 'group-hover:bg-emerald-600 group-hover:border-emerald-700 group-hover:text-white' : 'group-hover:bg-blue-600 group-hover:border-blue-700 group-hover:text-white'}`}>
                            <span className={`text-xs font-mono font-bold uppercase tracking-widest block transition-colors ${s.accent === 'green' ? 'text-green-700 group-hover:text-emerald-100' : 'text-blue-700 group-hover:text-blue-100'}`}>Step {s.step} — {s.label}</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">{s.title}</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                      {/* Decision Node */}
                      <div className="relative group">
                        <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-400 flex items-center justify-center text-slate-600 shadow-sm transition-all group-hover:border-blue-400 group-hover:text-blue-600"><Shuffle className="w-5 h-5" /></div>
                        <div className="bg-white border border-slate-200 p-6 space-y-5 hover:bg-slate-50 hover:shadow-md transition-all duration-200">
                          <div>
                            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block">Step 04 — Decision Junction</span>
                            <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide mt-1">Outcome Branch Evaluation</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1">Select a branch below to view the verbatim path details and subsequent steps:</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <button onClick={() => setAssistanceOutcome('purchase')} className={`border p-4 text-left transition-all ${assistanceOutcome === 'purchase' ? 'bg-emerald-50 border-emerald-400 ring-1 ring-emerald-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-emerald-50 hover:border-emerald-300'}`}>
                              <span className="font-mono text-xs font-black text-emerald-700 uppercase block mb-2">A. Purchase Conversion</span>
                              <p className="text-xs sm:text-sm text-slate-600 leading-snug font-semibold">Customer purchases through online store.</p>
                            </button>
                            <button onClick={() => setAssistanceOutcome('appointment')} className={`border p-4 text-left transition-all ${assistanceOutcome === 'appointment' ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-amber-50 hover:border-amber-300'}`}>
                              <span className="font-mono text-xs font-black text-amber-700 uppercase block mb-2">B. Showroom Visit</span>
                              <p className="text-xs sm:text-sm text-slate-600 leading-snug font-semibold">Customer schedules showroom appointment.</p>
                            </button>
                            <button onClick={() => setAssistanceOutcome('lost')} className={`border p-4 text-left transition-all ${assistanceOutcome === 'lost' ? 'bg-red-50 border-red-400 ring-1 ring-red-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-red-50 hover:border-red-300'}`}>
                              <span className="font-mono text-xs font-black text-red-700 uppercase block mb-2">C. Opportunity Loss</span>
                              <p className="text-xs sm:text-sm text-slate-600 leading-snug font-semibold">Customer does not buy or book a visit.</p>
                            </button>
                          </div>
                        </div>
                      </div>
                      {assistanceOutcome === 'purchase' && (
                        <div className="relative group">
                          <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white"><CheckCircle className="w-5 h-5" /></div>
                          <div className="bg-white border border-slate-200 border-l-4 border-l-emerald-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-emerald-600 group-hover:border-emerald-700 group-hover:text-white group-hover:shadow-lg">
                            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block transition-colors group-hover:text-emerald-100">Step 05 — Path A Completion</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">A. Online Purchase Conversion</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Customer decides to purchase through Website, Mobile App, or Marketplace. Order is placed and payment is completed online. Workflow automatically transitions to Direct Online Purchase.</p>
                          </div>
                        </div>
                      )}
                      {assistanceOutcome === 'appointment' && (
                        <>
                          <div className="relative group">
                            <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-amber-600 group-hover:border-white"><Calendar className="w-5 h-5" /></div>
                            <div className="bg-white border border-slate-200 border-l-4 border-l-amber-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-amber-500 group-hover:border-amber-600 group-hover:text-white group-hover:shadow-lg">
                              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block transition-colors group-hover:text-amber-100">Step 05 — Showroom Appointment Booking</span>
                              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">B. Offline Store Visit Appointment</h4>
                              <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Customer prefers a physical store visit before making a purchase decision. Appointment is booked at the nearest store based on customer location. Store team receives instant notification.</p>
                            </div>
                          </div>
                          <div className="relative group">
                            <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-amber-600 group-hover:border-white"><Users className="w-5 h-5" /></div>
                            <div className="bg-white border border-slate-200 border-l-4 border-l-amber-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-amber-500 group-hover:border-amber-600 group-hover:text-white group-hover:shadow-lg">
                              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block transition-colors group-hover:text-amber-100">Step 06 — Showroom Handoff</span>
                              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">Customer Profile & Enquiry Transfer</h4>
                              <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Customer details, enquiry history, product interests, and appointment schedule are shared with the assigned employee. Store visit status is tracked until conversion, follow-up, or closure.</p>
                            </div>
                          </div>
                        </>
                      )}
                      {assistanceOutcome === 'lost' && (
                        <>
                          <div className="relative group">
                            <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-700 transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-red-600 group-hover:border-white"><XCircle className="w-5 h-5" /></div>
                            <div className="bg-white border border-slate-200 border-l-4 border-l-red-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-700 group-hover:text-white group-hover:shadow-lg">
                              <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest block transition-colors group-hover:text-red-100">Step 05 — Path C Completion</span>
                              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">C. Opportunity Loss Ingestion</h4>
                              <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Customer does not proceed with either an online purchase or offline visit. Mandatory loss reason must be captured.</p>
                            </div>
                          </div>
                          <div className="relative group">
                            <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-700 transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-red-600 group-hover:border-white"><TrendingUp className="w-5 h-5" /></div>
                            <div className="bg-white border border-slate-200 border-l-4 border-l-red-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-700 group-hover:text-white group-hover:shadow-lg">
                              <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest block transition-colors group-hover:text-red-100">Step 06 — Retargeting Loop</span>
                              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">Conversion Analytics & Re-engagement</h4>
                              <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Opportunity loss data is used for conversion analysis, sales improvement, and operational intelligence to trigger future automated marketing campaigns.</p>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )
                ) : (
                  <>
                    {[
                      { icon: <Smartphone className="w-5 h-5 transition-colors" />, step: '01', label: 'Showroom Intake', title: 'Showroom Lead Management & Opportunity Tracking', desc: 'Receptionist/CRE captures customer details, visit purpose, and generates a unique Lead Token.', accent: 'blue' },
                      { icon: <Users className="w-5 h-5 transition-colors" />, step: '02', label: 'Salesperson Assignment', title: 'Dashboard Opportunity Allocation', desc: 'Lead Token is assigned to a salesperson and immediately appears in their dashboard as an Active Opportunity.', accent: 'blue' },
                    ].map((s) => (
                      <div key={s.step} className="relative group">
                        <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white">{s.icon}</div>
                        <div className="bg-white border border-slate-200 p-6 space-y-3 transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-700 group-hover:text-white group-hover:shadow-lg">
                          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block transition-colors group-hover:text-blue-100">Step {s.step} — {s.label}</span>
                          <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">{s.title}</h4>
                          <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div className="relative group">
                      <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white"><Database className="w-5 h-5" /></div>
                      <div className="bg-white border border-slate-200 p-6 space-y-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-700 group-hover:text-white group-hover:shadow-lg">
                        <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block transition-colors group-hover:text-blue-100">Step 03 — Consultation Auditing</span>
                        <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">Activity tracking against Lead Token</h4>
                        <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">All customer interactions and sales activities are logged against the generated token to ensure complete visibility of customer engagement.</p>
                        <div className="bg-slate-50 border border-slate-200 p-4 space-y-3 transition-all duration-300 group-hover:bg-blue-700 group-hover:border-blue-800">
                          <span className="text-xs font-mono text-[#558b2f] font-bold uppercase block transition-colors group-hover:text-emerald-100">Tracked Showroom Activities:</span>
                          <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-bold transition-colors group-hover:text-white">
                            <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0 group-hover:text-white" /> Products viewed/shortlisted</li>
                            <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Trial activities</li>
                            <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Scheme discussions</li>
                            <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Upsell/Cross-sell attempts</li>
                            <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Custom orders</li>
                            <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Exchange & Buyback</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Decision node offline */}
                    <div className="relative group">
                      <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-400 flex items-center justify-center text-slate-600 shadow-sm transition-all group-hover:border-blue-400 group-hover:text-blue-600"><Shuffle className="w-5 h-5" /></div>
                      <div className="bg-white border border-slate-200 p-6 space-y-5 hover:bg-slate-50 hover:shadow-md transition-all duration-200">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block">Step 04 — Showroom Resolution</span>
                          <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide mt-1">Opportunity Branch Evaluation</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1">Select the final showroom outcome to visualize the verification and recovery pathways:</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button onClick={() => setOfflineOutcome('won')} className={`border p-4 text-left transition-all ${offlineOutcome === 'won' ? 'bg-emerald-50 border-emerald-400 ring-1 ring-emerald-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-emerald-50 hover:border-emerald-300'}`}>
                            <span className="font-mono text-xs font-black text-emerald-700 uppercase block mb-2">A. Opportunity Won</span>
                            <p className="text-xs sm:text-sm text-slate-600 leading-snug font-semibold">Customer completes purchase or logs scheme enrollment.</p>
                          </button>
                          <button onClick={() => setOfflineOutcome('lost')} className={`border p-4 text-left transition-all ${offlineOutcome === 'lost' ? 'bg-red-50 border-red-400 ring-1 ring-red-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-red-50 hover:border-red-300'}`}>
                            <span className="font-mono text-xs font-black text-red-700 uppercase block mb-2">B. Opportunity Lost</span>
                            <p className="text-xs sm:text-sm text-slate-600 leading-snug font-semibold">Customer leaves without buying. Start recovery triggers.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    {offlineOutcome === 'won' ? (
                      <>
                        <div className="relative group">
                          <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white"><CheckSquare className="w-5 h-5" /></div>
                          <div className="bg-white border border-slate-200 border-l-4 border-l-emerald-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-emerald-600 group-hover:border-emerald-700 group-hover:text-white group-hover:shadow-lg">
                            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block transition-colors group-hover:text-emerald-100">Step 05 — Conversion Resolution</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">A. Opportunity Won</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Customer completes a purchase, places an order, enrolls in a scheme, or submits a repair/service request. Opportunity status is marked as Won in the CRM interface.</p>
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white"><Truck className="w-5 h-5" /></div>
                          <div className="bg-white border border-slate-200 border-l-4 border-l-emerald-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-emerald-600 group-hover:border-emerald-700 group-hover:text-white group-hover:shadow-lg">
                            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block transition-colors group-hover:text-emerald-100">Step 06 — Post-Conversion Flow</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">Fulfillment, Logistics & Handoff</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">The workflow is tracked until successful delivery and closure, recording final metal weights, karating values, and invoice codes for financial reconciliation.</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative group">
                          <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-red-600 group-hover:border-white"><RotateCcw className="w-5 h-5" /></div>
                          <div className="bg-white border border-slate-200 border-l-4 border-l-red-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-700 group-hover:text-white group-hover:shadow-lg">
                            <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest block transition-colors group-hover:text-red-100">Step 05 — Follow-Up Triggers</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">Post-Engagement Recovery Workflows</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Customer does not proceed with a purchase. Automated follow-up workflows are initiated immediately to re-engage before the active lead slot is closed.</p>
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-red-600 group-hover:border-white"><XCircle className="w-5 h-5" /></div>
                          <div className="bg-white border border-slate-200 border-l-4 border-l-red-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-700 group-hover:text-white group-hover:shadow-lg">
                            <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest block transition-colors group-hover:text-red-100">Step 06 — Loss Auditing</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">B. Opportunity Lost</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Opportunity status is marked as Lost. The system prompts the salesperson to select a mandatory loss reason to build competitive intelligence:</p>
                            <div className="bg-slate-50 border border-slate-200 p-4 text-xs font-mono italic leading-relaxed transition-all duration-300 group-hover:bg-red-700 group-hover:border-red-800 group-hover:text-white">Budget mismatch, Competitor purchase, Design dissatisfaction, Family decision pending, Trust concerns, Service dissatisfaction.</div>
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute -left-[47px] md:-left-[55px] w-10 h-10 rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-700 shadow-sm transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-red-600 group-hover:border-white"><TrendingUp className="w-5 h-5" /></div>
                          <div className="bg-white border border-slate-200 border-l-4 border-l-red-500 p-6 space-y-3 transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-700 group-hover:text-white group-hover:shadow-lg">
                            <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest block transition-colors group-hover:text-red-100">Step 07 — Intelligence Ingestion</span>
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wide transition-colors text-slate-900 group-hover:text-white">CRM Analytics & Personalized Campaigns</h4>
                            <p className="text-sm font-medium leading-relaxed transition-colors text-slate-600 group-hover:text-slate-100">Loss metrics are pushed directly into the CRM Analytics platform to fuel retargeting lists and customized, automated re-engagement email/WhatsApp campaigns.</p>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Console Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 p-6 flex flex-col h-full justify-between shadow-sm gap-6">
                <div className="space-y-5">
                  <span className="text-xs font-mono font-bold text-emerald-700 border border-emerald-200 bg-emerald-50 px-3 py-1.5 uppercase tracking-wider inline-block">Operational Impact</span>
                  <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight border-b border-slate-200 pb-3">Journey Metrics & Controls</h4>
                  {activeTab === 'online' ? (
                    onlinePath === 'direct' ? (
                      <div className="space-y-5 text-xs sm:text-sm text-slate-600">
                        <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Integration Type</strong>Self-Service E-commerce (Website/API Marketplaces)</p>
                        <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Staff Resource Cost</strong>Zero. 100% automated ordering & payment reconciliation.</p>
                        <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Control Points Verified</strong>Order created in ERP, stocks locked, and invoice issued instantly.</p>
                      </div>
                    ) : (
                      <div className="space-y-5 text-xs sm:text-sm text-slate-600">
                        <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Integration Type</strong>Omnichannel Assisted CRM Lead Management</p>
                        <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Active Token Status</strong>LT-{(activeTab === 'online' ? 4028 : 8092)} Locked in Sales Dashboard.</p>
                        <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Simulation Outcome</strong>
                          {assistanceOutcome === 'purchase' && 'Conversion Success (Online Order placed via Chat link)'}
                          {assistanceOutcome === 'appointment' && 'Store Booking confirmed & Floor Notification sent'}
                          {assistanceOutcome === 'lost' && 'Loss registered. Retargeting campaign triggered'}
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="space-y-5 text-xs sm:text-sm text-slate-600">
                      <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Integration Type</strong>Physical Showroom Walk-in Pipeline</p>
                      <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Active Token Status</strong>LT-8092 Registered at CRE reception desk.</p>
                      <p className="leading-relaxed font-semibold"><strong className="text-blue-700 block font-mono text-xs uppercase tracking-wider mb-1">Showroom Outcome</strong>{offlineOutcome === 'won' ? 'Opportunity Won (Order/Repair/Scheme redemptions resolved)' : 'Opportunity Lost (Mandatory loss code logged, retargeting active)'}</p>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between bg-slate-900 px-4 py-2 border-t border-x border-slate-800 font-mono text-[10px] sm:text-xs text-slate-400 rounded-t-sm">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500" /><span className="w-2 h-2 rounded-full bg-yellow-500" /><span className="w-2 h-2 rounded-full bg-green-500" /><span className="ml-1">crm_system_events.log</span></span>
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-sky-400">Live Sync</span>
                  </div>
                  <div className="bg-slate-950 border border-slate-900 p-4 font-mono text-[10px] sm:text-xs text-slate-300 space-y-2 min-h-[180px] text-left leading-relaxed rounded-b-sm overflow-hidden select-text">
                    {getConsoleLogs().map((log, index) => (
                      <div key={index} className="flex gap-2 items-start">
                        <span className="text-slate-600 select-none shrink-0">$</span>
                        <span className="text-slate-300 break-all">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-slate-100 pt-6 mt-8 relative z-10">
          <span>Scale with Abraham — Enterprise CRM Systems Architecture</span>
          <span>Page 2 of 5</span>
        </div>
      </div>

      {/* ════════════ PAGE 3: ARCHITECTURE & SEGMENTATION FRAMEWORK ════════════ */}
      <div className="w-full max-w-[900px] mx-auto bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-200/80 p-8 sm:p-12 md:p-16 relative overflow-hidden text-left mb-16 min-h-[1000px] flex flex-col justify-between">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-[#558b2f] to-blue-400" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:'radial-gradient(circle, #0170B9 1.5px, transparent 1.5px)', backgroundSize:'32px 32px'}} />
        
        <div className="space-y-12 relative z-10">
          {/* Lifecycle Architecture */}
          <div className="space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#558b2f] uppercase block mb-2">Architecture Core</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">CUSTOMER LIFECYCLE MANAGEMENT ARCHITECTURE</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="group bg-white border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-blue-600 hover:border-blue-700 hover:text-white">
                <span className="text-xs font-mono font-bold text-blue-700 group-hover:text-blue-100 uppercase tracking-wider block border-b border-slate-100 group-hover:border-blue-500 pb-2">Purpose</span>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 group-hover:text-slate-100 font-medium">The Customer Lifecycle Management Architecture provides a structured framework for tracking, understanding, and optimizing every customer interaction throughout the business relationship.</p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 group-hover:text-slate-100 font-medium">The objective is to transform customer interactions into measurable business intelligence that drives:</p>
                <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-bold text-slate-700 group-hover:text-white">
                  <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-blue-600 shrink-0 group-hover:text-white" /> Customer Acquisition</li>
                  <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-blue-600 shrink-0 group-hover:text-white" /> Customer Retention</li>
                  <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-blue-600 shrink-0 group-hover:text-white" /> Customer Reactivation</li>
                  <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-blue-600 shrink-0 group-hover:text-white" /> Operational Accountability</li>
                  <li className="flex gap-2 items-center"><CheckSquare className="w-4 h-4 text-blue-600 shrink-0 group-hover:text-white" /> Revenue Growth</li>
                </ul>
              </div>
              <div className="group bg-white border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#558b2f] hover:border-[#4e7d2a] hover:text-white">
                <span className="text-xs font-mono font-bold text-[#558b2f] group-hover:text-emerald-100 uppercase tracking-widest block border-b border-slate-100 group-hover:border-emerald-700 pb-2">Goal Stack</span>
                <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-white uppercase tracking-tight">CORE BUSINESS GOALS</h4>
                <ul className="space-y-3.5 text-xs sm:text-sm font-bold text-slate-700 group-hover:text-white">
                  <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-[#558b2f] group-hover:text-white shrink-0" /> Recover Lost Revenue</li>
                  <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-[#558b2f] group-hover:text-white shrink-0" /> Retain Existing Customers</li>
                  <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-[#558b2f] group-hover:text-white shrink-0" /> Reactivate Dormant Customers</li>
                  <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-[#558b2f] group-hover:text-white shrink-0" /> Increase Customer Lifetime Value</li>
                  <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-[#558b2f] group-hover:text-white shrink-0" /> Improve Conversion Rates</li>
                  <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-[#558b2f] group-hover:text-white shrink-0" /> Enable Data-Driven Decision Making</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Database Segmentation */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-blue-700 uppercase block mb-2">Customer Database Segmentation</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">CUSTOMER SEGMENTATION FRAMEWORK</h3>
              </div>
              <div className="flex bg-slate-100 border border-slate-200 p-1.5 gap-1.5 self-start sm:self-center">
                {['new', 'existing', 'dormant'].map((tabKey) => (
                  <button key={tabKey} onClick={() => setActiveSegmentTab(tabKey as any)} className={`px-4 py-2.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all ${
                    activeSegmentTab === tabKey
                      ? tabKey === 'new' ? 'bg-blue-600 text-white shadow-sm' : tabKey === 'existing' ? 'bg-[#558b2f] text-white shadow-sm' : 'bg-amber-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}>{tabKey} leads</button>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-6">
              <AnimatePresence mode="wait">
                {activeSegmentTab === 'new' && (
                  <motion.div key="new" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                    {[
                      { title: 'NEW LEADS', borderHover: 'hover:bg-slate-700 hover:border-slate-800 hover:text-white', labelColor: 'border-l-slate-400', items: ['Walk-ins','Instagram Inquiries','WhatsApp Leads','Website Inquiries','Exhibitions','Referrals','Google Searches','Advertisement Campaigns'], subLabel: 'Possible Sources', desc: 'Customers who recently interacted with the business but have not yet become established customers.' },
                      { title: 'Hot Leads', borderHover: 'hover:bg-red-600 hover:border-red-700 hover:text-white', labelColor: 'border-l-red-500', items: ['High Purchase Intent','Bridal Inquiries','Asking Quotations','Ready-to-Buy Customers','Appointment Booked Customers'], subLabel: 'Criteria', desc: 'Leads showing high intent and immediate purchase signals in the pipeline.' },
                      { title: 'Warm Leads', borderHover: 'hover:bg-amber-500 hover:border-amber-600 hover:text-white', labelColor: 'border-l-amber-500', items: ['Interested but Undecided','Product Browsing','Price Inquiries','Wishlist Customers','Follow-Up Pending'], subLabel: 'Criteria', desc: 'Leads expressing interest but remaining undecided about purchase decisions.' },
                      { title: 'Cold Leads', borderHover: 'hover:bg-blue-600 hover:border-blue-700 hover:text-white', labelColor: 'border-l-blue-500', items: ['Low Engagement','Just Browsing','No Response After Inquiry','Inactive Leads'], subLabel: 'Criteria', desc: 'Leads with weak interactions or no active responses in the CRM database.' },
                    ].map((card) => (
                      <div key={card.title} className={`group bg-white border border-slate-200 border-l-4 ${card.labelColor} p-5 space-y-4 transition-all duration-300 hover:shadow-lg ${card.borderHover}`}>
                        <h4 className="text-sm font-black text-slate-900 group-hover:text-white uppercase tracking-wider border-b border-slate-100 group-hover:border-white/10 pb-3">{card.title}</h4>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 group-hover:text-slate-100 font-medium">{card.desc}</p>
                        <span className="text-xs font-mono text-blue-700 group-hover:text-white font-bold uppercase tracking-wider block">{card.subLabel}</span>
                        <ul className="text-xs sm:text-sm font-bold text-slate-600 group-hover:text-slate-100 space-y-1.5">{card.items.map((item) => <li key={item}>• {item}</li>)}</ul>
                      </div>
                    ))}
                  </motion.div>
                )}
                {activeSegmentTab === 'existing' && (
                  <motion.div key="existing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                    <div className="group bg-white border border-slate-200 p-5 space-y-4 hover:shadow-lg hover:bg-emerald-600 hover:border-emerald-700 hover:text-white transition-all duration-300">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-white uppercase tracking-wider border-b border-slate-100 group-hover:border-white/10 pb-3">Active & Repeat Customers</h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 group-hover:text-slate-100 font-bold">Active: Recently Interacted, Recently Purchased, Frequent Buyers, Scheme Customers, Bridal Families, Repeat Walk-ins, Repair & Service Customers.</p>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-slate-50 border border-slate-200 p-3 group-hover:bg-emerald-700 group-hover:border-emerald-800 transition-colors"><span className="text-xs font-mono text-[#558b2f] group-hover:text-emerald-100 font-bold uppercase block mb-2">ERP Tracking Metrics</span><ul className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 space-y-1 font-semibold"><li>• Purchase Frequency</li><li>• Visit Frequency</li><li>• Average Bill Value</li><li>• Preferred Category</li><li>• Salesperson Relationship</li></ul></div>
                        <div className="bg-slate-50 border border-slate-200 p-3 group-hover:bg-emerald-700 group-hover:border-emerald-800 transition-colors"><span className="text-xs font-mono text-blue-700 group-hover:text-emerald-100 font-bold uppercase block mb-2">Repeat ERP Intelligence</span><ul className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 space-y-1 font-semibold"><li>• Repeat Purchase Interval</li><li>• Favorite Categories</li><li>• Preferred Salesperson</li><li>• Cross-Sell Success Rate</li></ul></div>
                      </div>
                    </div>
                    <div className="group bg-white border border-slate-200 border-l-4 border-l-cyan-500 p-5 space-y-4 hover:shadow-lg hover:bg-cyan-600 hover:border-cyan-700 hover:text-white transition-all duration-300">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-white uppercase tracking-wider border-b border-slate-100 group-hover:border-white/10 pb-3">VIP & Occasion-Based Customers</h4>
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-slate-200 p-3 space-y-2 group-hover:bg-cyan-700 group-hover:border-cyan-800 transition-colors"><span className="text-xs font-mono text-blue-700 group-hover:text-cyan-100 font-bold uppercase block">VIP Identification Factors</span><p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-semibold">• High Lifetime Value, Bridal Purchases, Diamond Purchases, Luxury Segment Buyers, Referral Influence</p><span className="text-xs font-mono text-blue-700 group-hover:text-cyan-100 font-bold uppercase block mt-1">VIP Features</span><p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-semibold">• Dedicated Relationship Manager, Priority Appointments, Early Access, Exclusive Previews, Personalized Pricing Approvals</p></div>
                        <div className="bg-slate-50 border border-slate-200 p-3 space-y-2 group-hover:bg-cyan-700 group-hover:border-cyan-800 transition-colors"><span className="text-xs font-mono text-blue-700 group-hover:text-cyan-100 font-bold uppercase block">Occasions</span><p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-semibold">• Wedding Purchases, Anniversary Gifts, Festival Shopping, Baby Shower Gifting, Religious Occasions</p><span className="text-xs font-mono text-blue-700 group-hover:text-cyan-100 font-bold uppercase block mt-1">CRM Automation</span><p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-semibold">• Anniversary Reminders, Birthday Campaigns, Festival Campaigns, Personalized Recommendations</p></div>
                      </div>
                    </div>
                    <div className="group bg-white border border-slate-200 border-l-4 border-l-emerald-500 p-5 space-y-4 hover:shadow-lg hover:bg-emerald-600 hover:border-emerald-700 hover:text-white transition-all duration-300">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-white uppercase tracking-wider border-b border-slate-100 group-hover:border-white/10 pb-3">Scheme & Service Customers</h4>
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-slate-200 p-3 space-y-2 group-hover:bg-emerald-700 group-hover:border-emerald-800 transition-colors"><span className="text-xs font-mono text-emerald-700 group-hover:text-emerald-100 font-bold uppercase block">Scheme Categories</span><p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-semibold">• Active Installment Payers, Defaulters, Matured Schemes, High-Value Scheme Holders</p><span className="text-xs font-mono text-emerald-700 group-hover:text-emerald-100 font-bold uppercase block mt-1">Metrics</span><p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-semibold">• Payment Discipline, Maturity Conversion Rate, Redemption Value, Upsell Opportunities</p></div>
                        <div className="bg-slate-50 border border-slate-200 p-3 space-y-2 group-hover:bg-emerald-700 group-hover:border-emerald-800 transition-colors"><span className="text-xs font-mono text-[#558b2f] group-hover:text-emerald-100 font-bold uppercase block">Service-Oriented</span><p className="text-xs sm:text-sm leading-snug text-slate-600 group-hover:text-slate-100 font-bold">Customers interacting mainly for: Repairs, Polishing, Resizing, Purity Verification, Exchange.</p><span className="text-xs font-mono text-blue-700 group-hover:text-emerald-100 font-bold uppercase block mt-1">Hidden Opportunity</span><p className="text-xs sm:text-sm leading-tight text-slate-500 group-hover:text-emerald-200 italic font-semibold">These customers often become cross-sell opportunities.</p></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {activeSegmentTab === 'dormant' && (
                  <motion.div key="dormant" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                    {[
                      { title: 'Recently Dormant', border: 'border-l-amber-500', hover: 'hover:bg-amber-500 hover:border-amber-600 hover:text-white', inactive: '3 Months, 6 Months', label: 'Reactivation Methods', items: ['Follow-Up Calls','Personalized Offers','Festival Reminders','Product Recommendations'] },
                      { title: 'Long-Term Dormant', border: 'border-l-red-500', hover: 'hover:bg-red-600 hover:border-red-700 hover:text-white', inactive: '1–3 Years', label: 'Strategy', items: ['Comeback Campaigns','Exchange Offers','Emotional Reconnect Campaigns'] },
                      { title: 'Lost Customers', border: 'border-l-slate-400', hover: 'hover:bg-slate-700 hover:border-slate-800 hover:text-white', inactive: null, label: 'Recovery Campaigns', items: ['Personal Calls','Special Invitations','VIP Recovery Campaigns','Dedicated Recovery Managers'], reasons: ['Competitor Shift','Bad Experience','Pricing Dissatisfaction','Relationship Breakdown'] },
                    ].map((card) => (
                      <div key={card.title} className={`group bg-white border border-slate-200 border-l-4 ${card.border} p-5 space-y-4 transition-all duration-300 hover:shadow-lg ${card.hover}`}>
                        <h4 className="text-sm font-black text-slate-900 group-hover:text-white uppercase tracking-wider border-b border-slate-100 group-hover:border-white/10 pb-3">{card.title}</h4>
                        {card.inactive && <><span className="text-xs font-mono text-slate-500 group-hover:text-slate-200 uppercase block">Inactive For</span><p className="text-lg text-slate-900 group-hover:text-white font-extrabold">{card.inactive}</p></>}
                        {card.reasons && <><span className="text-xs font-mono text-slate-500 group-hover:text-slate-200 uppercase block font-bold">Possible Reasons</span><ul className="text-xs sm:text-sm font-bold text-slate-600 group-hover:text-slate-100 space-y-1.5">{card.reasons.map((r) => <li key={r}>• {r}</li>)}</ul></>}
                        <span className="text-xs font-mono text-blue-700 group-hover:text-white font-bold uppercase tracking-wider block">{card.label}</span>
                        <ul className="text-xs sm:text-sm font-bold text-slate-600 group-hover:text-slate-100 space-y-1.5">{card.items.map((item) => <li key={item}>• {item}</li>)}</ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-slate-100 pt-6 mt-8 relative z-10">
          <span>Scale with Abraham — Enterprise CRM Systems Architecture</span>
          <span>Page 3 of 5</span>
        </div>
      </div>

      {/* ════════════ PAGE 4: ADVANCED CRM SEGMENTATION HIERARCHY ════════════ */}
      <div className="w-full max-w-[900px] mx-auto bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-200/80 p-8 sm:p-12 md:p-16 relative overflow-hidden text-left mb-16 min-h-[1000px] flex flex-col justify-between">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-[#558b2f] to-blue-400" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:'radial-gradient(circle, #0170B9 1.5px, transparent 1.5px)', backgroundSize:'32px 32px'}} />
        
        <div className="space-y-10 relative z-10">
          <div>
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#558b2f] uppercase block mb-2">Data Enrichment Levels</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">ADVANCED CRM SEGMENTATION HIERARCHY</h3>
            <p className="text-sm sm:text-base text-slate-500 font-semibold mt-3">Enterprise customer data is processed across 7 additional strategic segmentation matrices to maximize campaign conversions and CLV.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 space-y-4">
              {[
                { code: 'L2', badgeCls: 'bg-blue-100 text-blue-700 border border-blue-200 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white', hoverCls: 'hover:bg-blue-600 hover:border-blue-700 hover:text-white', title: 'LEVEL 2 — VALUE-BASED SEGMENTATION', content: <div className="space-y-3 text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-semibold pl-8"><div><strong className="text-blue-700 group-hover:text-white font-mono text-xs block uppercase mb-1">High Lifetime Value (HLV)</strong>Metrics: Total Spend, Referral Value, Repeat Purchases</div><div><strong className="text-blue-700 group-hover:text-white font-mono text-xs block uppercase mb-1">Medium Value Customers</strong>Goal: Convert Into Premium Customers</div><div><strong className="text-blue-700 group-hover:text-white font-mono text-xs block uppercase mb-1">Low Value Customers</strong>Goal: Increase Engagement Frequency</div></div> },
                { code: 'L3', badgeCls: 'bg-purple-100 text-purple-700 border border-purple-200 group-hover:bg-white group-hover:text-purple-600 group-hover:border-white', hoverCls: 'hover:bg-purple-600 hover:border-purple-700 hover:text-white', title: 'LEVEL 3 — BEHAVIORAL SEGMENTATION', content: <ul className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-bold pl-8 grid grid-cols-1 gap-2"><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Browsing Customers:</strong> Frequently view products but rarely buy.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Decision Delay Customers:</strong> Need multiple follow-ups.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Negotiation-Oriented:</strong> Price-sensitive customers.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Impulse Buyers:</strong> Quick conversion customers.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Research-Oriented:</strong> Compare heavily before buying.</li></ul> },
                { code: 'L4', badgeCls: 'bg-amber-100 text-amber-700 border border-amber-200 group-hover:bg-white group-hover:text-amber-500 group-hover:border-white', hoverCls: 'hover:bg-amber-500 hover:border-amber-600 hover:text-white', title: 'LEVEL 4 — PURCHASE INTENT SEGMENTATION', content: <ul className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-bold pl-8 grid grid-cols-1 gap-2"><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Bridal Intent Customers:</strong> Highest-value segment.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Investment Buyers:</strong> Gold-focused customers.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Fashion Buyers:</strong> Trend-focused buyers.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Gift Buyers:</strong> Occasional gifting customers.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Daily Wear Buyers:</strong> Regular practical buyers.</li></ul> },
              ].map((lvl) => (
                <div key={lvl.code} className={`group bg-white border border-slate-200 p-6 space-y-4 shadow-sm transition-all duration-300 hover:shadow-lg ${lvl.hoverCls}`}>
                  <h4 className="text-sm font-black uppercase text-slate-900 group-hover:text-white tracking-wider flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-black transition-all ${lvl.badgeCls}`}>{lvl.code}</span>
                    {lvl.title}
                  </h4>
                  {lvl.content}
                </div>
              ))}
            </div>
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              {[
                { code: 'L5', badgeCls: 'bg-red-100 text-red-700 border border-red-200 group-hover:bg-white group-hover:text-red-600 group-hover:border-white', hoverCls: 'hover:bg-red-600 hover:border-red-700 hover:text-white', title: 'LEVEL 5 — RISK SEGMENTATION', content: <ul className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-bold pl-8 space-y-3"><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase block mb-0.5">Churn Risk Customers</strong>Indicators: Reduced Visits, Lower Engagement, Scheme Defaults</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase block mb-0.5">Competitor Risk Customers</strong>Frequently compare competitors.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase block mb-0.5">Complaint-Risk Customers</strong>Repeated service complaints.</li></ul> },
                { code: 'L6', badgeCls: 'bg-cyan-100 text-cyan-700 border border-cyan-200 group-hover:bg-white group-hover:text-cyan-600 group-hover:border-white', hoverCls: 'hover:bg-cyan-600 hover:border-cyan-700 hover:text-white', title: 'LEVEL 6 — RELATIONSHIP SEGMENTATION', content: <ul className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-bold pl-8 space-y-2"><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Salesperson Loyal Customers:</strong> Attached to specific salesperson.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Brand Loyal Customers:</strong> Trust brand more than individuals.</li><li>• <strong className="text-blue-700 group-hover:text-white font-mono text-xs uppercase">Offer-Driven Customers:</strong> Respond primarily to discounts and promotions.</li></ul> },
                { code: 'L7', badgeCls: 'bg-emerald-100 text-emerald-700 border border-emerald-200 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white', hoverCls: 'hover:bg-emerald-600 hover:border-emerald-700 hover:text-white', title: 'LEVEL 7 — DIGITAL ENGAGEMENT SEGMENTATION', content: <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 font-bold pl-8"><li>• WhatsApp Active</li><li>• Instagram Active</li><li>• Website Browsers</li><li>• Offline-Only Customers</li><li className="col-span-2">• Omnichannel Customers</li></ul> },
              ].map((lvl) => (
                <div key={lvl.code} className={`group bg-white border border-slate-200 p-6 space-y-4 shadow-sm transition-all duration-300 hover:shadow-lg ${lvl.hoverCls}`}>
                  <h4 className="text-sm font-black uppercase text-slate-900 group-hover:text-white tracking-wider flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-black transition-all ${lvl.badgeCls}`}>{lvl.code}</span>
                    {lvl.title}
                  </h4>
                  {lvl.content}
                </div>
              ))}
            </div>
          </div>

          {/* L8 AI */}
          <div className="group bg-slate-50 border border-slate-200 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-blue-600 hover:border-blue-700 hover:text-white">
            <h4 className="text-sm sm:text-base font-black uppercase text-slate-900 group-hover:text-white tracking-widest flex items-center gap-3 border-b border-slate-200 group-hover:border-white/10 pb-4 mb-6">
              <Bot className="w-5 h-5 text-blue-700 group-hover:text-white" />
              LEVEL 8 — AI / PREDICTIVE SEGMENTATION
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-100 leading-relaxed max-w-2xl mb-6 font-bold">Modern CRM systems should predict conversion rates and behavior parameters using machine learning scoring algorithms:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {["Likely Bridal Buyers","Likely Churn Customers","High Upsell Potential","High Cross-Sell Potential","Likely Dormant Customers","High Referral Potential","Scheme Maturity Conversion Likelihood"].map((aiMetric, idx) => (
                <div key={idx} className="group bg-white border border-slate-200 p-4 text-left flex flex-col justify-between shadow-sm hover:bg-blue-600 hover:border-blue-700 hover:text-white hover:shadow-lg transition-all duration-300 cursor-default">
                  <span className="text-xl sm:text-2xl font-bold text-blue-700 group-hover:text-white font-mono">0{idx + 1}</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-white leading-snug mt-3">{aiMetric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-slate-100 pt-6 mt-8 relative z-10">
          <span>Scale with Abraham — Enterprise CRM Systems Architecture</span>
          <span>Page 4 of 5</span>
        </div>
      </div>

      {/* ════════════ PAGE 5: WHY THIS ARCHITECTURE MUST BE STUDIED ════════════ */}
      <div className="w-full max-w-[900px] mx-auto bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-slate-200/80 p-8 sm:p-12 md:p-16 relative overflow-hidden text-left min-h-[1000px] flex flex-col justify-between">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-[#558b2f] to-blue-400" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:'radial-gradient(circle, #0170B9 1.5px, transparent 1.5px)', backgroundSize:'32px 32px'}} />
        
        <div className="space-y-10 relative z-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#558b2f] uppercase">Business Case Study</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">WHY THIS ARCHITECTURE MUST BE STUDIED</h3>
            <p className="text-sm sm:text-base text-slate-500 font-semibold">Analyzing the core failure modes of untracked sales pipelines and operational lead leakage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { icon: <TrendingUp className="w-5 h-5 transition-colors" />, colorCls: 'border-t-blue-500', iconBg: 'bg-blue-100 text-blue-700 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white', hoverCls: 'hover:bg-blue-600 hover:border-blue-700 hover:text-white', impactColor: 'text-blue-700 group-hover:text-blue-100', title: '1. Customer Acquisition Cost is Increasing', track: ['Lead source','Revenue source','Campaign effectiveness','Customer acquisition cost','ROI'], impact: 'Every untracked lead becomes a lost business insight.' },
              { icon: <Shuffle className="w-5 h-5 transition-colors" />, colorCls: 'border-t-red-500', iconBg: 'bg-red-100 text-red-700 group-hover:bg-white group-hover:text-red-600 group-hover:border-white', hoverCls: 'hover:bg-red-600 hover:border-red-700 hover:text-white', impactColor: 'text-red-700 group-hover:text-red-100', title: '2. Prevent Lead Leakage', track: ['Ownership','Follow-ups','Lead assignment','Conversion responsibility'], impact: 'If ownership is unclear, conversion responsibility is also unclear.' },
              { icon: <Network className="w-5 h-5 transition-colors" />, colorCls: 'border-t-emerald-500', iconBg: 'bg-emerald-100 text-emerald-700 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white', hoverCls: 'hover:bg-emerald-600 hover:border-emerald-700 hover:text-white', impactColor: 'text-emerald-700 group-hover:text-emerald-100', title: '3. Build End-to-End Customer Visibility', track: ['Instagram → WhatsApp → Showroom Visit → Purchase → Repair → Scheme Enrollment'], impact: 'The business never loses the complete customer story.' },
              { icon: <Target className="w-5 h-5 transition-colors" />, colorCls: 'border-t-amber-500', iconBg: 'bg-amber-100 text-amber-700 group-hover:bg-white group-hover:text-amber-500 group-hover:border-white', hoverCls: 'hover:bg-amber-500 hover:border-amber-600 hover:text-white', impactColor: 'text-amber-700 group-hover:text-amber-100', title: '4. Measure Salesperson Effectiveness', track: ['Lead generation','Lead handling','Lead conversion','Customer retention','Upsell revenue','Referral business'], impact: 'High-performing salespeople become visible through data.' },
              { icon: <Award className="w-5 h-5 transition-colors" />, colorCls: 'border-t-purple-500', iconBg: 'bg-purple-100 text-purple-700 group-hover:bg-white group-hover:text-purple-600 group-hover:border-white', hoverCls: 'hover:bg-purple-600 hover:border-purple-700 hover:text-white', impactColor: 'text-purple-700 group-hover:text-purple-100', title: '5. Enable Cross-Sell & Upsell Intelligence', track: ['Ring purchase','Repair requests','Gold schemes','Bridal consultations'], impact: 'Increase customer lifetime value.' },
              { icon: <XCircle className="w-5 h-5 transition-colors" />, colorCls: 'border-t-rose-500', iconBg: 'bg-rose-100 text-rose-700 group-hover:bg-white group-hover:text-rose-600 group-hover:border-white', hoverCls: 'hover:bg-rose-600 hover:border-rose-700 hover:text-white', impactColor: 'text-rose-700 group-hover:text-rose-100', title: '6. Identify Opportunity Loss Patterns', track: ['Pricing concerns','Design mismatch','Product unavailability','Poor follow-up','Competitor purchase','Budget constraints'], impact: 'Every lost lead becomes a learning opportunity.' },
              { icon: <RotateCcw className="w-5 h-5 transition-colors" />, colorCls: 'border-t-cyan-500', iconBg: 'bg-cyan-100 text-cyan-700 group-hover:bg-white group-hover:text-cyan-600 group-hover:border-white', hoverCls: 'hover:bg-cyan-600 hover:border-cyan-700 hover:text-white', impactColor: 'text-cyan-700 group-hover:text-cyan-100', title: '7. Improve Retention & Reactivation', track: ['Recovering dormant users, re-engaging missed pipeline, and building gold scheme redemption triggers.'], impact: "Today's lost opportunity may become tomorrow's highest-value customer." },
              { icon: <Shield className="w-5 h-5 transition-colors" />, colorCls: 'border-t-[#558b2f]', iconBg: 'bg-green-100 text-green-700 group-hover:bg-white group-hover:text-emerald-600 group-hover:border-white', hoverCls: 'hover:bg-emerald-700 hover:border-emerald-800 hover:text-white', impactColor: 'text-[#558b2f] group-hover:text-emerald-100', title: '8. Create a Single Source of Truth', track: [], impact: '', isSpecial: true },
            ].map((card) => (
              <div key={card.title} className={`group bg-white border border-slate-200 border-t-2 ${card.colorCls} p-5 flex flex-col justify-between min-h-[300px] shadow-sm transition-all duration-300 hover:shadow-lg ${card.hoverCls}`}>
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all group-hover:scale-110 ${card.iconBg}`}>{card.icon}</div>
                  <h4 className="text-xs sm:text-sm font-black uppercase text-slate-900 group-hover:text-white tracking-wider">{card.title}</h4>
                  {card.isSpecial ? (
                    <div className="grid grid-cols-2 gap-2">
                      {['Sales Team','CRM Team','Management','Operations'].map((t) => (
                        <div key={t} className="bg-slate-50 border border-slate-200 p-2.5 text-slate-700 group-hover:bg-emerald-800 group-hover:border-emerald-900 group-hover:text-white font-bold text-[10px] sm:text-xs font-mono uppercase text-center transition-colors">{t}</div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs sm:text-sm font-mono text-slate-500 group-hover:text-slate-200 space-y-1.5 transition-colors">
                      <div className="font-bold text-slate-400 group-hover:text-slate-300 uppercase text-[10px] sm:text-xs tracking-wider mb-2">Track:</div>
                      {card.track.map((t, i) => <div key={i}>• {t}</div>)}
                    </div>
                  )}
                </div>
                {card.isSpecial ? (
                  <div className="border-t border-slate-100 group-hover:border-white/10 pt-4 mt-4 font-mono text-xs sm:text-sm space-y-1.5 transition-colors">
                    <div className="flex justify-between"><span className="text-slate-600 group-hover:text-slate-200">One Customer</span><span className="text-blue-700 group-hover:text-white font-bold">Passed</span></div>
                    <div className="flex justify-between"><span className="text-slate-600 group-hover:text-slate-200">One Lead Token</span><span className="text-blue-700 group-hover:text-white font-bold">Mapped</span></div>
                    <div className="flex justify-between"><span className="text-slate-600 group-hover:text-slate-200">One Complete History</span><span className="text-[#558b2f] group-hover:text-white font-bold">Locked</span></div>
                  </div>
                ) : (
                  <div className="border-t border-slate-100 group-hover:border-white/10 pt-4 mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 group-hover:text-slate-100 font-bold transition-colors">
                    <strong className={`block text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-1 ${card.impactColor}`}>Business Impact</strong>
                    {card.impact}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-slate-100 pt-6 mt-8 relative z-10">
          <span>Scale with Abraham — Enterprise CRM Systems Architecture</span>
          <span>Page 5 of 5</span>
        </div>
      </div>
    </section>
  );
}
