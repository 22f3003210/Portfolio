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
            `[${time}] [ROUTING_ENGINE] Assigning lead token LT-4028 to Sales Desk`,
            `[${time}] [CHAT_CONSOLE] Agent initiated product consultation with customer`,
            `[${time}] [CRM_ACTIVITY] Recorded customer interest in Premium Bridal Collection`,
            `[${time}] [CRM_OPPORTUNITY] Customer converted. Purchase initiated via custom link`,
            `[${time}] [OMS] Generated order ORD-4028-C from lead token conversion`,
            `[${time}] [OMS_SUCCESS] Order placed. Payment confirmed`
          ];
        } else if (assistanceOutcome === 'appointment') {
          return [
            `[${time}] [CRM_INGEST] WhatsApp customer requested physical showroom preview`,
            `[${time}] [ROUTING_ENGINE] Created lead token LT-5902`,
            `[${time}] [CRM_SCHEDULER] Showroom Appointment Confirmed for nearest location`,
            `[${time}] [NOTIFIER] Sent booking confirmation SMS to customer`,
            `[${time}] [NOTIFIER] Sent CRM Alert to Showroom Floor CRE & Assigned Rep`,
            `[${time}] [CRM_STATUS] Status updated: APPOINTMENT_BOOKED`
          ];
        } else {
          return [
            `[${time}] [CRM_INGEST] Direct call enquiry logged in system`,
            `[${time}] [ROUTING_ENGINE] Generated lead token LT-1108`,
            `[${time}] [CRM_ACTIVITY] Sales follow-up completed. Outcome: Customer declined`,
            `[${time}] [CRM_STATUS] Marking opportunity as LOST`,
            `[${time}] [METRICS_ENGINE] Capturing mandatory loss reason: 'Budget Mismatch'`,
            `[${time}] [RETARGETING_DB] Pushing lead LT-1108 to digital retargeting queue`
          ];
        }
      }
    } else {
      if (offlineOutcome === 'won') {
        return [
          `[${time}] [CRE_DESK] Customer walked into Showroom. Entry logged`,
          `[${time}] [CRM_ENGINE] Generated unique Lead Token LT-8092`,
          `[${time}] [CRM_QUEUE] Token LT-8092 assigned to Retail Rep Abraham Sayed`,
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
          `[${time}] [RETARGETING] Lead LT-8093 pushed to CRM Analytics and personalized follow-up campaign`
        ];
      }
    }
  };

  return (
    <section className="bg-[#f8fafc] text-slate-900 py-16 md:py-24 px-6 border-b border-slate-200 select-none relative overflow-hidden text-left">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-16">

        {/* ════════════════════ HEADER BLOCK (EXACT TEXT) ════════════════════ */}
        <div className="space-y-6 max-w-4xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1 uppercase rounded-sm inline-block">
            Enterprise CRM Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            OMNI-CHANNEL CUSTOMER LIFECYCLE MANAGEMENT
          </h2>
          <p className="text-base sm:text-lg font-bold text-blue-700">
            Transforming Customer Interactions into Measurable Business Intelligence
          </p>
          <p className="text-xs sm:text-sm font-bold text-[#558b2f] uppercase tracking-wider leading-relaxed border-l-2 border-[#8bc34a] pl-4">
            Establishing a Single Source of Truth for Every Customer Interaction From First Customer Touchpoint to Complete Lifecycle Ownership
          </p>
          <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-medium">
            Every customer interaction—whether originating from Instagram, WhatsApp, walk-ins, referrals, Google search, advertising campaigns, exhibitions, or direct inquiries—is systematically captured within a centralized CRM ecosystem. Each prospect is assigned a unique Lead Token, enabling end-to-end tracking, accountability, and visibility across the entire customer journey. This framework ensures seamless lead management, structured follow-ups, performance measurement, and conversion optimization, providing complete control over the customer lifecycle from initial engagement to final transaction and long-term relationship management.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200" />

        {/* ════════════════════ CUSTOMER FIRST INTERACTION (EXACT TEXT & INTERACTIVE MAP) ════════════════════ */}
        <div className="space-y-10">
          <div className="border-b border-slate-200 pb-6">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#558b2f] uppercase block mb-1">
              Interactive Blueprint Simulator
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              CUSTOMER FIRST INTERACTION
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl font-medium mt-1.5">
              Select process parameters and outcome branches to simulate the data flow, automatic triggers, and CRM token assignment pathways.
            </p>
          </div>

          {/* Interactive Slicer Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-100 border border-slate-200 p-6 rounded-none relative shadow-sm">
            {/* Slicer 1: Journey Type */}
            <div className="md:col-span-4 space-y-3">
              <label className="block text-[10px] font-mono font-bold text-blue-700 uppercase tracking-widest">
                1. Customer Channel
              </label>
              <div className="flex bg-white border border-slate-200 p-1 rounded-none gap-1">
                <button
                  onClick={() => setActiveTab('online')}
                  className={`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    activeTab === 'online'
                      ? 'bg-slate-900 text-white font-black shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Online Journey
                </button>
                <button
                  onClick={() => setActiveTab('offline')}
                  className={`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    activeTab === 'offline'
                      ? 'bg-slate-900 text-white font-black shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Offline Showroom
                </button>
              </div>
            </div>

            {/* Slicer 2: Sub-Path / Choice */}
            <div className="md:col-span-8 space-y-3">
              {activeTab === 'online' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-mono font-bold text-blue-700 uppercase tracking-widest">
                      2. Purchase Mode
                    </label>
                    <div className="flex bg-white border border-slate-200 p-1 rounded-none gap-1">
                      <button
                        onClick={() => setOnlinePath('direct')}
                        className={`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                          onlinePath === 'direct'
                            ? 'bg-slate-900 text-white font-black'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        Self-Service Direct
                      </button>
                      <button
                        onClick={() => setOnlinePath('assistance')}
                        className={`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                          onlinePath === 'assistance'
                            ? 'bg-slate-900 text-white font-black'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        Assistance & Enquiry
                      </button>
                    </div>
                  </div>

                  {onlinePath === 'assistance' && (
                    <div className="space-y-3">
                      <label className="block text-[10px] font-mono font-bold text-blue-700 uppercase tracking-widest">
                        3. Resolution Branch
                      </label>
                      <div className="flex bg-white border border-slate-200 p-1 rounded-none gap-1">
                        <button
                          onClick={() => setAssistanceOutcome('purchase')}
                          className={`flex-1 py-1.5 px-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
                            assistanceOutcome === 'purchase'
                              ? 'bg-emerald-600 text-white'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          Conv. (A)
                        </button>
                        <button
                          onClick={() => setAssistanceOutcome('appointment')}
                          className={`flex-1 py-1.5 px-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
                            assistanceOutcome === 'appointment'
                              ? 'bg-amber-600 text-white'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          Visit (B)
                        </button>
                        <button
                          onClick={() => setAssistanceOutcome('lost')}
                          className={`flex-1 py-1.5 px-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
                            assistanceOutcome === 'lost'
                              ? 'bg-red-600 text-white'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          Loss (C)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 max-w-md">
                  <label className="block text-[10px] font-mono font-bold text-blue-700 uppercase tracking-widest">
                    2. Showroom Outcome Branch
                  </label>
                  <div className="flex bg-white border border-slate-200 p-1 rounded-none gap-1">
                    <button
                      onClick={() => setOfflineOutcome('won')}
                      className={`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                        offlineOutcome === 'won'
                          ? 'bg-slate-900 text-white font-black'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      A. Opportunity Won
                    </button>
                    <button
                      onClick={() => setOfflineOutcome('lost')}
                      className={`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                        offlineOutcome === 'lost'
                          ? 'bg-slate-900 text-white font-black'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      B. Opportunity Lost
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Connected Flow Node Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visual Steps Map (Left 8 cols) */}
            <div className="lg:col-span-8 bg-white border border-slate-200 p-6 md:p-8 rounded-none relative shadow-sm">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative pl-8 md:pl-10 space-y-8 text-left">
                {/* Vertical Connector Line */}
                <div className="absolute top-4 bottom-4 left-[15px] md:left-[19px] w-0.5 bg-slate-200 pointer-events-none" />

                {/* Dynamically Rendered Steps */}
                {activeTab === 'online' ? (
                  onlinePath === 'direct' ? (
                    // ONLINE DIRECT PURCHASE STEPS
                    <>
                      {/* Step 1 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 01 — Channel Access</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Direct Online Purchase (Self-Service Commerce)</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Customer purchases directly through Website, Mobile App, Amazon, Flipkart, Zepto, and other marketplaces.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 02 — Buying Action</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">No Human Assistance Buying</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            No human assistance required throughout the buying journey. Customer selects products, places the order, and completes payment online.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                          <Database className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-[#558b2f] uppercase tracking-widest block">Step 03 — System Ingestion</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Automatic Order Creation</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Order is automatically created in the Order Management System (OMS) immediately upon successful check out.
                          </p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                          <Bell className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 04 — Operations Alert</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Instant Team Notification</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Instant notification is sent to the Order Management Team with product specifications, weight details, and payment data.
                          </p>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
                          <Truck className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-emerald-300 p-5 space-y-2 shadow-sm">
                          <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">Step 05 — Fulfillment</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Tracking & Delivery Pipeline</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Complete visibility and tracking from Order Placement → Fulfillment → Delivery under a unified marketplace order workflow.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    // ONLINE ASSISTED STEPS
                    <>
                      {/* Step 1 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 01 — Inbound Intake</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Online Assistance & Customer Enquiries</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Customer requires assistance before making a purchase decision. Customer may interact through Instagram, WhatsApp, Website Live Chat, Direct Calls, Email, or other digital channels.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 02 — Sales Nurturing</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Human Assisted Pre-Sales Consultation</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Human assistance is provided for product enquiries, pricing, customization, availability, and purchase consultation.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                          <Database className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-[#558b2f] uppercase tracking-widest block">Step 03 — CRM Ingestion</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Centralized CRM Logging & Token Generation</h4>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Every customer interaction is captured within the centralized CRM system. Leads are assigned to the appropriate sales representative for follow-up, and all conversations, activities, and follow-ups are recorded and monitored throughout the sales cycle.
                          </p>
                        </div>
                      </div>

                      {/* Step 4: Decision Node */}
                      <div className="relative group">
                        <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-slate-50 border-2 border-dashed border-blue-400 flex items-center justify-center text-blue-600 shadow-sm">
                          <Shuffle className="w-4 h-4" />
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-5 space-y-4 shadow-sm">
                          <div>
                            <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 04 — Decision Junction</span>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Outcome Branch Evaluation</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                              Select a branch below to view the verbatim path details and subsequent steps:
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {/* Branch A */}
                            <button
                              onClick={() => setAssistanceOutcome('purchase')}
                              className={`border p-3 text-left transition-all rounded-none ${
                                assistanceOutcome === 'purchase'
                                  ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500/30'
                                  : 'bg-white border-slate-200 opacity-50 hover:opacity-80'
                              }`}
                            >
                              <span className="font-mono text-[8px] font-black text-emerald-700 uppercase block mb-1">A. Purchase Conversion</span>
                              <p className="text-[10px] text-slate-700 leading-tight font-semibold">Customer purchases through online store.</p>
                            </button>

                            {/* Branch B */}
                            <button
                              onClick={() => setAssistanceOutcome('appointment')}
                              className={`border p-3 text-left transition-all rounded-none ${
                                assistanceOutcome === 'appointment'
                                  ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500/30'
                                  : 'bg-white border-slate-200 opacity-50 hover:opacity-80'
                              }`}
                            >
                              <span className="font-mono text-[8px] font-black text-amber-700 uppercase block mb-1">B. Showroom Visit</span>
                              <p className="text-[10px] text-slate-700 leading-tight font-semibold">Customer schedules showroom appointment.</p>
                            </button>

                            {/* Branch C */}
                            <button
                              onClick={() => setAssistanceOutcome('lost')}
                              className={`border p-3 text-left transition-all rounded-none ${
                                assistanceOutcome === 'lost'
                                  ? 'bg-red-50 border-red-500 ring-1 ring-red-500/30'
                                  : 'bg-white border-slate-200 opacity-50 hover:opacity-80'
                              }`}
                            >
                              <span className="font-mono text-[8px] font-black text-red-700 uppercase block mb-1">C. Opportunity Loss</span>
                              <p className="text-[10px] text-slate-700 leading-tight font-semibold">Customer does not buy or book a visit.</p>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Conditional Outcome Steps (A, B, or C) */}
                      {assistanceOutcome === 'purchase' && (
                        <>
                          <div className="relative group">
                            <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-emerald-50 border border-emerald-400 flex items-center justify-center text-emerald-600">
                              <CheckCircle className="w-4 h-4" />
                            </div>
                            <div className="bg-white border-l-2 border-emerald-500 p-5 space-y-2 shadow-sm">
                              <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">Step 05 — Path A Completion</span>
                              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">A. Online Purchase Conversion</h4>
                              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Customer decides to purchase through Website, Mobile App, or Marketplace. Order is placed and payment is completed online. Workflow automatically transitions to Direct Online Purchase.
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {assistanceOutcome === 'appointment' && (
                        <>
                          <div className="relative group">
                            <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-amber-50 border border-amber-400 flex items-center justify-center text-amber-600">
                              <Calendar className="w-4 h-4" />
                            </div>
                            <div className="bg-white border-l-2 border-amber-500 p-5 space-y-2 shadow-sm">
                              <span className="text-[9px] font-mono font-bold text-amber-600 uppercase tracking-widest block">Step 05 — Showroom Appointment Booking</span>
                              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">B. Offline Store Visit Appointment</h4>
                              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Customer prefers a physical store visit before making a purchase decision. Appointment is booked at the nearest store based on customer location. Store team receives instant notification.
                              </p>
                            </div>
                          </div>

                          <div className="relative group">
                            <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-amber-50 border border-amber-400 flex items-center justify-center text-amber-600">
                              <Users className="w-4 h-4" />
                            </div>
                            <div className="bg-white border-l-2 border-amber-500 p-5 space-y-2 shadow-sm">
                              <span className="text-[9px] font-mono font-bold text-amber-600 uppercase tracking-widest block">Step 06 — Showroom Handoff</span>
                              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Customer Profile & Enquiry Transfer</h4>
                              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Customer details, enquiry history, product interests, and appointment schedule are shared with the assigned employee. Store visit status is tracked until conversion, follow-up, or closure.
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {assistanceOutcome === 'lost' && (
                        <>
                          <div className="relative group">
                            <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-red-50 border border-red-400 flex items-center justify-center text-red-600">
                              <XCircle className="w-4 h-4" />
                            </div>
                            <div className="bg-white border-l-2 border-red-500 p-5 space-y-2 shadow-sm">
                              <span className="text-[9px] font-mono font-bold text-red-600 uppercase tracking-widest block">Step 05 — Path C Completion</span>
                              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">C. Opportunity Loss Ingestion</h4>
                              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Customer does not proceed with either an online purchase or offline visit. Mandatory loss reason must be captured.
                              </p>
                            </div>
                          </div>

                          <div className="relative group">
                            <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-red-50 border border-red-400 flex items-center justify-center text-red-600">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            <div className="bg-white border-l-2 border-red-500 p-5 space-y-2 shadow-sm">
                              <span className="text-[9px] font-mono font-bold text-red-600 uppercase tracking-widest block">Step 06 — Retargeting Loop</span>
                              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Conversion Analytics & Re-engagement</h4>
                              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Opportunity loss data is used for conversion analysis, sales improvement, and operational intelligence to trigger future automated marketing campaigns.
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )
                ) : (
                  // OFFLINE SHOWROOM STEPS
                  <>
                    {/* Step 1 */}
                    <div className="relative group">
                      <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                        <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 01 — Showroom Intake</span>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Showroom Lead Management & Opportunity Tracking</h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          Receptionist/CRE captures customer details, visit purpose, and generates a unique Lead Token.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                      <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="bg-white border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors">
                        <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 02 — Salesperson Assignment</span>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Dashboard Opportunity Allocation</h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          Lead Token is assigned to a salesperson and immediately appears in their dashboard as an Active Opportunity.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group">
                      <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                        <Database className="w-4 h-4" />
                      </div>
                      <div className="bg-white border border-slate-200 p-5 space-y-3 hover:border-slate-300 transition-colors">
                        <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 03 — Consultation Auditing</span>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Activity tracking against Lead Token</h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          All customer interactions and sales activities are logged against the generated token to ensure complete visibility of customer engagement.
                        </p>
                        <div className="bg-slate-50 border border-slate-200 p-3.5 space-y-1.5 shadow-inner">
                          <span className="text-[8.5px] font-mono text-[#558b2f] font-bold uppercase block">Tracked Showroom Activities:</span>
                          <ul className="grid grid-cols-2 gap-1.5 text-[10.5px] text-slate-700 font-semibold">
                            <li className="flex gap-1.5 items-center"><CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Products viewed/shortlisted</li>
                            <li className="flex gap-1.5 items-center"><CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Trial activities</li>
                            <li className="flex gap-1.5 items-center"><CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Scheme discussions</li>
                            <li className="flex gap-1.5 items-center"><CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Upsell/Cross-sell attempts</li>
                            <li className="flex gap-1.5 items-center"><CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Custom orders</li>
                            <li className="flex gap-1.5 items-center"><CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Exchange & Buyback</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Step 4: Decision Node */}
                    <div className="relative group">
                      <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-slate-50 border-2 border-dashed border-blue-400 flex items-center justify-center text-blue-600 shadow-sm">
                        <Shuffle className="w-4 h-4" />
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-5 space-y-4 shadow-sm">
                        <div>
                          <span className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest block">Step 04 — Showroom Resolution</span>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Opportunity Branch Evaluation</h4>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            Select the final showroom outcome to visualize the verification and recovery pathways:
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Branch A */}
                          <button
                            onClick={() => setOfflineOutcome('won')}
                            className={`border p-3 text-left transition-all rounded-none ${
                              offlineOutcome === 'won'
                                ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500/30'
                                : 'bg-white border-slate-200 opacity-50 hover:opacity-80'
                            }`}
                          >
                            <span className="font-mono text-[8px] font-black text-emerald-700 uppercase block mb-1">A. Opportunity Won</span>
                            <p className="text-[10px] text-slate-700 leading-tight font-semibold">Customer completes purchase or logs scheme enrollment.</p>
                          </button>

                          {/* Branch B */}
                          <button
                            onClick={() => setOfflineOutcome('lost')}
                            className={`border p-3 text-left transition-all rounded-none ${
                              offlineOutcome === 'lost'
                                ? 'bg-red-50 border-red-500 ring-1 ring-red-500/30'
                                : 'bg-white border-slate-200 opacity-50 hover:opacity-80'
                            }`}
                          >
                            <span className="font-mono text-[8px] font-black text-red-700 uppercase block mb-1">B. Opportunity Lost</span>
                            <p className="text-[10px] text-slate-700 leading-tight font-semibold">Customer leaves without buying. Start recovery triggers.</p>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Conditional Offline Outcome Steps */}
                    {offlineOutcome === 'won' ? (
                      <>
                        <div className="relative group">
                          <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-emerald-50 border border-emerald-400 flex items-center justify-center text-emerald-600 shadow-sm">
                            <CheckSquare className="w-4 h-4" />
                          </div>
                          <div className="bg-white border-l-2 border-emerald-500 p-5 space-y-2 shadow-sm">
                            <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">Step 05 — Conversion Resolution</span>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">A. Opportunity Won</h4>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                              Customer completes a purchase, places an order, enrolls in a scheme, or submits a repair/service request. Opportunity status is marked as Won in the CRM interface.
                            </p>
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-emerald-50 border border-emerald-400 flex items-center justify-center text-emerald-600 shadow-sm">
                            <Truck className="w-4 h-4" />
                          </div>
                          <div className="bg-white border-l-2 border-emerald-500 p-5 space-y-2 shadow-sm">
                            <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">Step 06 — Post-Conversion Flow</span>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Fulfillment, Logistics & Handoff</h4>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                              The workflow is tracked until successful delivery and closure, recording final metal weights, karating values, and invoice codes for financial reconciliation.
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative group">
                          <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-red-50 border border-red-400 flex items-center justify-center text-red-600 shadow-sm">
                            <RotateCcw className="w-4 h-4" />
                          </div>
                          <div className="bg-white border-l-2 border-red-500 p-5 space-y-2 shadow-sm">
                            <span className="text-[9px] font-mono font-bold text-red-600 uppercase tracking-widest block">Step 05 — Follow-Up Triggers</span>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Post-Engagement Recovery Workflows</h4>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                              Customer does not proceed with a purchase. Automated follow-up workflows are initiated immediately to re-engage before the active lead slot is closed.
                            </p>
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-red-50 border border-red-400 flex items-center justify-center text-red-600 shadow-sm">
                            <XCircle className="w-4 h-4" />
                          </div>
                          <div className="bg-white border-l-2 border-red-500 p-5 space-y-3 shadow-sm">
                            <span className="text-[9px] font-mono font-bold text-red-600 uppercase tracking-widest block">Step 06 — Loss Auditing</span>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">B. Opportunity Lost</h4>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                              Opportunity status is marked as Lost. The system prompts the salesperson to select a mandatory loss reason to build competitive intelligence:
                            </p>
                            <div className="bg-slate-50 border border-slate-200 p-3 text-[10px] text-slate-600 font-mono italic leading-tight">
                              Budget mismatch, Competitor purchase, Design dissatisfaction, Family decision pending, Trust concerns, Service dissatisfaction.
                            </div>
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="absolute -left-[33px] md:-left-[39px] w-8 h-8 rounded-full bg-red-50 border border-red-400 flex items-center justify-center text-red-600 shadow-sm">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div className="bg-white border-l-2 border-red-500 p-5 space-y-2 shadow-sm">
                            <span className="text-[9px] font-mono font-bold text-red-400 uppercase tracking-widest block">Step 07 — Intelligence Ingestion</span>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">CRM Analytics & Personalized Campaigns</h4>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                              Loss metrics are pushed directly into the CRM Analytics platform to fuel retargeting lists and customized, automated re-engagement email/WhatsApp campaigns.
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Real-time System Log Console (Right 4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              
              <div className="bg-white border border-slate-200 p-6 rounded-none flex flex-col h-full justify-between shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.01] rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-4">
                  <span className="text-[9px] font-mono font-bold text-emerald-700 border border-emerald-200 bg-emerald-50 px-2 py-0.5 uppercase tracking-wider inline-block">
                    Operational Impact
                  </span>
                  <h4 className="text-base font-black text-slate-900 uppercase tracking-tight border-b border-slate-100 pb-2">
                    Journey Metrics & Controls
                  </h4>
                  
                  {activeTab === 'online' ? (
                    onlinePath === 'direct' ? (
                      <div className="space-y-3.5 text-xs text-slate-600">
                        <p className="leading-relaxed font-semibold">
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Integration Type</strong>
                          Self-Service E-commerce (Website/API Marketplaces)
                        </p>
                        <p className="leading-relaxed font-semibold">
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Staff Resource Cost</strong>
                          Zero. 100% automated ordering & payment reconciliation.
                        </p>
                        <p className="leading-relaxed font-semibold">
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Control Points Verified</strong>
                          Order created in ERP, stocks locked, and invoice issued instantly.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3.5 text-xs text-slate-600">
                        <p className="leading-relaxed font-semibold">
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Integration Type</strong>
                          Omnichannel Assisted CRM Lead Management
                        </p>
                        <p className="leading-relaxed font-semibold">
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Active Token Status</strong>
                          LT-{(activeTab === 'online' ? 4028 : 8092)} Locked in Sales Dashboard.
                        </p>
                        <p className="leading-relaxed font-semibold">
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Simulation Outcome</strong>
                          {assistanceOutcome === 'purchase' && 'Conversion Success (Online Order placed via Chat link)'}
                          {assistanceOutcome === 'appointment' && 'Store Booking confirmed & Floor Notification sent'}
                          {assistanceOutcome === 'lost' && 'Loss registered. Retargeting campaign triggered'}
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="space-y-3.5 text-xs text-slate-600">
                      <p className="leading-relaxed font-semibold">
                        <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Integration Type</strong>
                        Physical Showroom Walk-in Pipeline
                      </p>
                      <p className="leading-relaxed font-semibold">
                        <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Active Token Status</strong>
                        LT-8092 Registered at CRE reception desk.
                      </p>
                      <p className="leading-relaxed font-semibold">
                        <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Showroom Outcome</strong>
                        {offlineOutcome === 'won' ? 'Opportunity Won (Order/Repair/Scheme redemptions resolved)' : 'Opportunity Lost (Mandatory loss code logged, retargeting active)'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Simulated CLI Console */}
                <div className="mt-6">
                  <div className="flex items-center justify-between bg-slate-900 px-3 py-1.5 border-t border-x border-slate-800 font-mono text-[9px] text-slate-400 rounded-t-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>crm_system_events.log</span>
                    </span>
                    <span className="text-[8px] uppercase font-bold text-sky-400 font-mono">Live Sync</span>
                  </div>
                  <div className="bg-slate-950 border border-slate-900 p-3 font-mono text-[9.5px] text-slate-300 space-y-1.5 min-h-[160px] text-left leading-normal rounded-b-sm overflow-hidden select-text">
                    {getConsoleLogs().map((log, index) => (
                      <div key={index} className="flex gap-1.5 items-start">
                        <span className="text-slate-600 select-none shrink-0 font-mono">$</span>
                        <span className="text-slate-300 break-all font-mono">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200" />

        {/* ════════════════════ CUSTOMER LIFECYCLE MANAGEMENT ARCHITECTURE (EXACT TEXT) ════════════════════ */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-stretch">
            
            {/* Purpose & Goals Panel */}
            <div className="space-y-6 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#558b2f] uppercase block mb-1">
                  Architecture Core
                </span>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  CUSTOMER LIFECYCLE MANAGEMENT ARCHITECTURE
                </h3>
              </div>
              
              <div className="bg-white border border-slate-200 p-5 space-y-3 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-wider block border-b border-slate-100 pb-1">
                  Purpose
                </span>
                <p className="text-[11.5px] sm:text-xs leading-relaxed text-slate-600 font-medium">
                  The Customer Lifecycle Management Architecture provides a structured framework for tracking, understanding, and optimizing every customer interaction throughout the business relationship.
                </p>
                <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                  The objective is to transform customer interactions into measurable business intelligence that drives:
                </p>
                <ul className="grid grid-cols-2 gap-1.5 text-[10.5px] font-semibold text-slate-700">
                  <li className="flex gap-1.5 items-center"><CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Customer Acquisition</li>
                  <li className="flex gap-1.5 items-center"><CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Customer Retention</li>
                  <li className="flex gap-1.5 items-center"><CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Customer Reactivation</li>
                  <li className="flex gap-1.5 items-center"><CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Operational Accountability</li>
                  <li className="flex gap-1.5 items-center"><CheckSquare className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Revenue Growth</li>
                </ul>
              </div>
            </div>

            {/* Core Business Goals Card */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-none flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="text-[9px] font-mono font-bold text-[#558b2f] uppercase tracking-widest block">Goal Stack</span>
                <h4 className="text-base font-black text-slate-900 uppercase tracking-tight border-b border-slate-200 pb-2 mb-3">
                  CORE BUSINESS GOALS
                </h4>
                <ul className="space-y-3 text-xs font-bold text-slate-700">
                  <li className="flex gap-2.5 items-center"><CheckCircle className="w-4 h-4 text-[#558b2f] shrink-0" /> Recover Lost Revenue</li>
                  <li className="flex gap-2.5 items-center"><CheckCircle className="w-4 h-4 text-[#558b2f] shrink-0" /> Retain Existing Customers</li>
                  <li className="flex gap-2.5 items-center"><CheckCircle className="w-4 h-4 text-[#558b2f] shrink-0" /> Reactivate Dormant Customers</li>
                  <li className="flex gap-2.5 items-center"><CheckCircle className="w-4 h-4 text-[#558b2f] shrink-0" /> Increase Customer Lifetime Value</li>
                  <li className="flex gap-2.5 items-center"><CheckCircle className="w-4 h-4 text-[#558b2f] shrink-0" /> Improve Conversion Rates</li>
                  <li className="flex gap-2.5 items-center"><CheckCircle className="w-4 h-4 text-[#558b2f] shrink-0" /> Enable Data-Driven Decision Making</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Customer Segmentation Framework (VERBATIM TEXT) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Customer Database Segmentation
                </span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  CUSTOMER SEGMENTATION FRAMEWORK
                </h3>
              </div>
              
              {/* Segment Toggles */}
              <div className="flex bg-slate-100 border border-slate-200 p-1 rounded-none gap-1 self-start sm:self-center">
                {['new', 'existing', 'dormant'].map((tabKey) => (
                  <button
                    key={tabKey}
                    onClick={() => setActiveSegmentTab(tabKey as any)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-none transition-all ${
                      activeSegmentTab === tabKey
                        ? 'bg-slate-900 text-white font-black shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                    }`}
                  >
                    {tabKey} leads
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-none shadow-sm">
              <AnimatePresence mode="wait">
                {activeSegmentTab === 'new' && (
                  <motion.div
                    key="new"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
                  >
                    {/* General */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                          NEW LEADS
                        </h4>
                        <p className="text-[11px] leading-relaxed text-slate-600 font-medium h-12">
                          Customers who recently interacted with the business but have not yet become established customers.
                        </p>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block mt-4 mb-1.5">
                          Possible Sources
                        </span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• Walk-ins</li>
                          <li>• Instagram Inquiries</li>
                          <li>• WhatsApp Leads</li>
                          <li>• Website Inquiries</li>
                          <li>• Exhibitions</li>
                          <li>• Referrals</li>
                          <li>• Google Searches</li>
                          <li>• Advertisement Campaigns</li>
                        </ul>
                      </div>
                    </div>

                    {/* Hot */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between border-l-2 border-l-red-500">
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                          Hot Leads
                        </h4>
                        <p className="text-[11px] leading-relaxed text-slate-600 font-medium h-12">
                          Leads showing high intent and immediate purchase signals in the pipeline.
                        </p>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block mt-4 mb-1.5">
                          Criteria
                        </span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• High Purchase Intent</li>
                          <li>• Bridal Inquiries</li>
                          <li>• Asking Quotations</li>
                          <li>• Ready-to-Buy Customers</li>
                          <li>• Appointment Booked Customers</li>
                        </ul>
                      </div>
                    </div>

                    {/* Warm */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between border-l-2 border-l-amber-500">
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                          Warm Leads
                        </h4>
                        <p className="text-[11px] leading-relaxed text-slate-600 font-medium h-12">
                          Leads expressing interest but remaining undecided about purchase decisions.
                        </p>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block mt-4 mb-1.5">
                          Criteria
                        </span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• Interested but Undecided</li>
                          <li>• Product Browsing</li>
                          <li>• Price Inquiries</li>
                          <li>• Wishlist Customers</li>
                          <li>• Follow-Up Pending</li>
                        </ul>
                      </div>
                    </div>

                    {/* Cold */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between border-l-2 border-l-blue-500">
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                          Cold Leads
                        </h4>
                        <p className="text-[11px] leading-relaxed text-slate-600 font-medium h-12">
                          Leads with weak interactions or no active responses in the CRM database.
                        </p>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block mt-4 mb-1.5">
                          Criteria
                        </span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• Low Engagement</li>
                          <li>• Just Browsing</li>
                          <li>• No Response After Inquiry</li>
                          <li>• Inactive Leads</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSegmentTab === 'existing' && (
                  <motion.div
                    key="existing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
                  >
                    
                    {/* Active & Repeat */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 rounded-sm">
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                        Active & Repeat Customers
                      </h4>
                      <p className="text-[11px] leading-relaxed text-slate-600 font-semibold mb-2">
                        Active: Recently Interacted, Recently Purchased, Frequent Buyers, Scheme Customers, Bridal Families, Repeat Walk-ins, Repair & Service Customers.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 text-[10px] pt-1">
                        <div className="bg-white border border-slate-200 p-2.5 shadow-sm">
                          <span className="text-[8.5px] font-mono text-[#558b2f] font-bold uppercase block mb-1">ERP Tracking Metrics</span>
                          <ul className="text-slate-500 space-y-0.5">
                            <li>• Purchase Frequency</li>
                            <li>• Visit Frequency</li>
                            <li>• Average Bill Value</li>
                            <li>• Preferred Category</li>
                            <li>• Salesperson Relationship</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-slate-200 p-2.5 shadow-sm">
                          <span className="text-[8.5px] font-mono text-blue-600 font-bold uppercase block mb-1">Repeat ERP Intelligence</span>
                          <ul className="text-slate-500 space-y-0.5">
                            <li>• Repeat Purchase Interval</li>
                            <li>• Favorite Categories</li>
                            <li>• Preferred Salesperson</li>
                            <li>• Cross-Sell Success Rate</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* VIP / Premium & Occasion-Based */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 rounded-sm border-l-2 border-l-cyan-500">
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                        VIP & Occasion-Based Customers
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px]">
                        <div className="bg-white border border-slate-200 p-2.5 space-y-1.5 shadow-sm">
                          <span className="text-[8.5px] font-mono text-blue-600 font-bold uppercase block">VIP Identification Factors</span>
                          <div className="text-slate-500">• High Lifetime Value, Bridal Purchases, Diamond Purchases, Luxury Segment Buyers, Referral Influence</div>
                          <span className="text-[8.5px] font-mono text-blue-600 font-bold uppercase block">VIP Features</span>
                          <div className="text-slate-500">• Dedicated Relationship Manager, Priority Appointments, Early Access, Exclusive Previews, Personalized Pricing Approvals</div>
                        </div>

                        <div className="bg-white border border-slate-200 p-2.5 space-y-1.5 shadow-sm">
                          <span className="text-[8.5px] font-mono text-blue-600 font-bold uppercase block">Occasions</span>
                          <div className="text-slate-500">• Wedding Purchases, Anniversary Gifts, Festival Shopping, Baby Shower Gifting, Religious Occasions</div>
                          <span className="text-[8.5px] font-mono text-blue-600 font-bold uppercase block">CRM Automation</span>
                          <div className="text-slate-500">• Anniversary Reminders, Birthday Campaigns, Festival Campaigns, Personalized Recommendations</div>
                        </div>
                      </div>
                    </div>

                    {/* Schemes & Service Oriented */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 rounded-sm border-l-2 border-l-emerald-500">
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                        Scheme & Service Customers
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px]">
                        <div className="bg-white border border-slate-200 p-2.5 space-y-1.5 shadow-sm">
                          <span className="text-[8.5px] font-mono text-emerald-600 font-bold uppercase block">Scheme Categories</span>
                          <div className="text-slate-500">• Active Installment Payers, Defaulters, Matured Schemes, High-Value Scheme Holders</div>
                          <span className="text-[8.5px] font-mono text-emerald-600 font-bold uppercase block">Metrics</span>
                          <div className="text-slate-500">• Payment Discipline, Maturity Conversion Rate, Redemption Value, Upsell Opportunities</div>
                        </div>

                        <div className="bg-white border border-slate-200 p-2.5 space-y-1 shadow-sm">
                          <span className="text-[8.5px] font-mono text-[#558b2f] font-bold uppercase block">Service-Oriented</span>
                          <p className="text-[10px] leading-snug text-slate-600 font-medium">
                            Customers interacting mainly for: Repairs, Polishing, Resizing, Purity Verification, Exchange.
                          </p>
                          <span className="text-[8.5px] font-mono text-blue-600 font-bold uppercase block mt-1">Hidden Opportunity</span>
                          <p className="text-[9.5px] leading-tight text-slate-500 italic">
                            These customers often become cross-sell opportunities.
                          </p>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                )}

                {activeSegmentTab === 'dormant' && (
                  <motion.div
                    key="dormant"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
                  >
                    {/* Recently Dormant */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between border-l-2 border-l-amber-500">
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                          Recently Dormant
                        </h4>
                        <span className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Inactive For</span>
                        <p className="text-[11px] leading-relaxed text-slate-900 font-extrabold">
                          3 Months, 6 Months
                        </p>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block mt-4 mb-1.5">
                          Reactivation Methods
                        </span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• Follow-Up Calls</li>
                          <li>• Personalized Offers</li>
                          <li>• Festival Reminders</li>
                          <li>• Product Recommendations</li>
                        </ul>
                      </div>
                    </div>

                    {/* Long-Term Dormant */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between border-l-2 border-l-red-500">
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                          Long-Term Dormant
                        </h4>
                        <span className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Inactive For</span>
                        <p className="text-[11px] leading-relaxed text-slate-900 font-extrabold">
                          1–3 Years
                        </p>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block mt-4 mb-1.5">
                          Strategy
                        </span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• Comeback Campaigns</li>
                          <li>• Exchange Offers</li>
                          <li>• Emotional Reconnect Campaigns</li>
                        </ul>
                      </div>
                    </div>

                    {/* Lost Customers */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between border-l-2 border-l-slate-400">
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 mb-2">
                          Lost Customers
                        </h4>
                        <span className="text-[9px] font-mono text-slate-500 uppercase block mb-1.5 font-bold">Possible Reasons</span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• Competitor Shift</li>
                          <li>• Bad Experience</li>
                          <li>• Pricing Dissatisfaction</li>
                          <li>• Relationship Breakdown</li>
                        </ul>
                        <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-wider block mt-4 mb-1.5">
                          Recovery Campaigns
                        </span>
                        <ul className="text-[10.5px] font-medium text-slate-500 space-y-1">
                          <li>• Personal Calls</li>
                          <li>• Special Invitations</li>
                          <li>• VIP Recovery Campaigns</li>
                          <li>• Dedicated Recovery Managers</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200" />

        {/* ════════════════════ SEGMENTATION HIERARCHY (LEVEL 2-8 VERBATIM) ════════════════════ */}
        <div className="space-y-8 text-left">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#558b2f] uppercase block mb-1">
              Data Enrichment Levels
            </span>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              ADVANCED CRM SEGMENTATION HIERARCHY
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Enterprise customer data is processed across 7 additional strategic segmentation matrices to maximize campaign conversions and CLV.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Level Selector (Left - 7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Level 2 */}
              <div className="bg-white border border-slate-200 p-5 space-y-2.5 shadow-sm">
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-[9.5px] font-black">L2</span>
                  LEVEL 2 — VALUE-BASED SEGMENTATION
                </h4>
                <div className="space-y-2 text-[11px] text-slate-600 font-medium pl-7">
                  <div>
                    <strong className="text-blue-700 font-mono text-[8.5px] block uppercase">High Lifetime Value (HLV)</strong>
                    Metrics: Total Spend, Referral Value, Repeat Purchases
                  </div>
                  <div>
                    <strong className="text-blue-700 font-mono text-[8.5px] block uppercase">Medium Value Customers</strong>
                    Goal: Convert Into Premium Customers
                  </div>
                  <div>
                    <strong className="text-blue-700 font-mono text-[8.5px] block uppercase">Low Value Customers</strong>
                    Goal: Increase Engagement Frequency
                  </div>
                </div>
              </div>

              {/* Level 3 */}
              <div className="bg-white border border-slate-200 p-5 space-y-2.5 shadow-sm">
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-[9.5px] font-black">L3</span>
                  LEVEL 3 — BEHAVIORAL SEGMENTATION
                </h4>
                <ul className="text-[11px] text-slate-600 font-medium pl-7 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Browsing Customers:</strong> Frequently view products but rarely buy.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Decision Delay Customers:</strong> Need multiple follow-ups.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Negotiation-Oriented:</strong> Price-sensitive customers.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Impulse Buyers:</strong> Quick conversion customers.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Research-Oriented:</strong> Compare heavily before buying.</li>
                </ul>
              </div>

              {/* Level 4 */}
              <div className="bg-white border border-slate-200 p-5 space-y-2.5 shadow-sm">
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-[9.5px] font-black">L4</span>
                  LEVEL 4 — PURCHASE INTENT SEGMENTATION
                </h4>
                <ul className="text-[11px] text-slate-600 font-medium pl-7 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Bridal Intent Customers:</strong> Highest-value segment.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Investment Buyers:</strong> Gold-focused customers.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Fashion Buyers:</strong> Trend-focused buyers.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Gift Buyers:</strong> Occasional gifting customers.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Daily Wear Buyers:</strong> Regular practical buyers.</li>
                </ul>
              </div>

            </div>

            {/* Level Selector (Right - 5 cols) */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              
              {/* Level 5 */}
              <div className="bg-white border border-slate-200 p-5 space-y-2 shadow-sm">
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-[9.5px] font-black">L5</span>
                  LEVEL 5 — RISK SEGMENTATION
                </h4>
                <ul className="text-[11px] text-slate-600 font-medium pl-7 space-y-2">
                  <li>
                    • <strong className="text-blue-700 font-mono text-[8.5px] uppercase block">Churn Risk Customers</strong>
                    Indicators: Reduced Visits, Lower Engagement, Scheme Defaults
                  </li>
                  <li>
                    • <strong className="text-blue-700 font-mono text-[8.5px] uppercase block">Competitor Risk Customers</strong>
                    Frequently compare competitors.
                  </li>
                  <li>
                    • <strong className="text-blue-700 font-mono text-[8.5px] uppercase block">Complaint-Risk Customers</strong>
                    Repeated service complaints.
                  </li>
                </ul>
              </div>

              {/* Level 6 */}
              <div className="bg-white border border-slate-200 p-5 space-y-2 shadow-sm">
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-[9.5px] font-black">L6</span>
                  LEVEL 6 — RELATIONSHIP SEGMENTATION
                </h4>
                <ul className="text-[11px] text-slate-600 font-medium pl-7 space-y-1.5">
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Salesperson Loyal Customers:</strong> Attached to specific salesperson.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Brand Loyal Customers:</strong> Trust brand more than individuals.</li>
                  <li>• <strong className="text-blue-700 font-mono text-[8.5px] uppercase">Offer-Driven Customers:</strong> Respond primarily to discounts and promotions.</li>
                </ul>
              </div>

              {/* Level 7 */}
              <div className="bg-white border border-slate-200 p-5 space-y-2 shadow-sm">
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-[9.5px] font-black">L7</span>
                  LEVEL 7 — DIGITAL ENGAGEMENT SEGMENTATION
                </h4>
                <ul className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600 font-medium pl-7 font-sans">
                  <li>• WhatsApp Active</li>
                  <li>• Instagram Active</li>
                  <li>• Website Browsers</li>
                  <li>• Offline-Only Customers</li>
                  <li className="col-span-2">• Omnichannel Customers</li>
                </ul>
              </div>

            </div>

          </div>

          {/* Level 8 AI Block */}
          <div className="bg-slate-100 border border-slate-200 p-6 rounded-none relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.02] rounded-full blur-2xl pointer-events-none" />
            <h4 className="text-xs font-black uppercase text-slate-900 tracking-widest flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
              <Bot className="w-4.5 h-4.5 text-blue-600" />
              LEVEL 8 — AI / PREDICTIVE SEGMENTATION
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl mb-4 font-medium">
              Modern CRM systems should predict conversion rates and behavior parameters using machine learning scoring algorithms:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                "Likely Bridal Buyers",
                "Likely Churn Customers",
                "High Upsell Potential",
                "High Cross-Sell Potential",
                "Likely Dormant Customers",
                "High Referral Potential",
                "Scheme Maturity Conversion Likelihood"
              ].map((aiMetric, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-3 rounded-none text-left flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors">
                  <span className="text-[14px] font-bold text-blue-600 font-mono">0{idx + 1}</span>
                  <p className="text-[10px] font-bold text-slate-700 leading-snug mt-2">{aiMetric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200" />

        {/* ════════════════════ WHY THIS ARCHITECTURE MUST BE STUDIED (VERBATIM TEXT) ════════════════════ */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#558b2f] uppercase">
              Business Case Study
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
              WHY THIS ARCHITECTURE MUST BE STUDIED
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Analyzing the core failure modes of untracked sales pipelines and operational lead leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  1. Customer Acquisition Cost is Increasing
                </h4>
                <div className="text-[10.5px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">Track:</div>
                  <div>• Lead source</div>
                  <div>• Revenue source</div>
                  <div>• Campaign effectiveness</div>
                  <div>• Customer acquisition cost</div>
                  <div>• ROI</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium">
                <strong className="text-blue-700 block text-[9px] font-mono uppercase tracking-wider">Business Impact</strong>
                Every untracked lead becomes a lost business insight.
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Shuffle className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  2. Prevent Lead Leakage
                </h4>
                <div className="text-[10.5px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">Track:</div>
                  <div>• Ownership</div>
                  <div>• Follow-ups</div>
                  <div>• Lead assignment</div>
                  <div>• Conversion responsibility</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium">
                <strong className="text-blue-700 block text-[9px] font-mono uppercase tracking-wider">Business Impact</strong>
                If ownership is unclear, conversion responsibility is also unclear.
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Network className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  3. Build End-to-End Customer Visibility
                </h4>
                <div className="text-[10.5px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">Track:</div>
                  <div className="text-[10px] leading-tight font-sans">Instagram → WhatsApp → Showroom Visit → Purchase → Repair → Scheme Enrollment</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium">
                <strong className="text-blue-700 block text-[9px] font-mono uppercase tracking-wider">Business Impact</strong>
                The business never loses the complete customer story.
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  4. Measure Salesperson Effectiveness
                </h4>
                <div className="text-[10.5px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">Track:</div>
                  <div>• Lead generation</div>
                  <div>• Lead handling</div>
                  <div>• Lead conversion</div>
                  <div>• Customer retention</div>
                  <div>• Upsell revenue</div>
                  <div>• Referral business</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium">
                <strong className="text-blue-700 block text-[9px] font-mono uppercase tracking-wider">Business Impact</strong>
                High-performing salespeople become visible through data.
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  5. Enable Cross-Sell & Upsell Intelligence
                </h4>
                <div className="text-[10.5px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">Track:</div>
                  <div>• Ring purchase</div>
                  <div>• Repair requests</div>
                  <div>• Gold schemes</div>
                  <div>• Bridal consultations</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium">
                <strong className="text-blue-700 block text-[9px] font-mono uppercase tracking-wider">Business Impact</strong>
                Increase customer lifetime value.
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <XCircle className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  6. Identify Opportunity Loss Patterns
                </h4>
                <div className="text-[10.5px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">Track:</div>
                  <div>• Pricing concerns</div>
                  <div>• Design mismatch</div>
                  <div>• Product unavailability</div>
                  <div>• Poor follow-up</div>
                  <div>• Competitor purchase</div>
                  <div>• Budget constraints</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium">
                <strong className="text-blue-700 block text-[9px] font-mono uppercase tracking-wider">Business Impact</strong>
                Every lost lead becomes a learning opportunity.
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <RotateCcw className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  7. Improve Retention & Reactivation
                </h4>
                <div className="text-[10.5px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">Focus:</div>
                  <div className="text-[10.5px] leading-snug font-sans">Recovering dormant users, re-engaging missed pipeline, and building gold scheme redemption triggers.</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium">
                <strong className="text-blue-700 block text-[9px] font-mono uppercase tracking-wider">Business Impact</strong>
                Today's lost opportunity may become tomorrow's highest-value customer.
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white border border-slate-200 p-5 rounded-none flex flex-col justify-between min-h-[280px] shadow-sm relative group hover:border-blue-500/50 transition-all">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                  8. Create a Single Source of Truth
                </h4>
                <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono text-slate-500 uppercase pt-2">
                  <div className="bg-slate-100 p-1 text-slate-800 font-bold border border-slate-200">Sales Team</div>
                  <div className="bg-slate-100 p-1 text-slate-800 font-bold border border-slate-200">CRM Team</div>
                  <div className="bg-slate-100 p-1 text-slate-800 font-bold border border-slate-200">Management</div>
                  <div className="bg-slate-100 p-1 text-slate-800 font-bold border border-slate-200">Operations</div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] leading-relaxed text-slate-600 font-medium space-y-1 font-mono text-[9px]">
                <div className="flex justify-between"><span>One Customer</span><span className="text-blue-700 font-bold">Passed</span></div>
                <div className="flex justify-between"><span>One Lead Token</span><span className="text-blue-700 font-bold">Mapped</span></div>
                <div className="flex justify-between"><span>One Complete History</span><span className="text-[#558b2f] font-bold">Locked</span></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
