import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Lock, AlertCircle, ArrowLeft, SlidersHorizontal, AlertTriangle, XCircle, Info } from 'lucide-react';
import { WorkflowHero } from '../sections/workflow/WorkflowHero';
import { StepNavigator } from '../sections/workflow/StepNavigator';
import { StepCardsGrid } from '../sections/workflow/StepCardsGrid';
import { DashboardImpact } from '../sections/workflow/DashboardImpact';
import { getWorkflowBySlug } from '../data/workflows';
import { usePortal } from '../context/PortalContext';
import { CRMDetailSection } from '../sections/workflow/CRMDetailSection';

// Helper to hash string to SHA-256 hex
async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function WorkflowDetail() {
  const { slug } = useParams<{ slug: string }>();
  const workflow = getWorkflowBySlug(slug || '');
  const { isPortalAuthenticated, setPortalAuthenticated } = usePortal();

  const [isAuthenticated, setIsAuthenticated] = useState(isPortalAuthenticated);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  
  const [poUsed, setPoUsed] = useState(true);
  const [vendorPortal, setVendorPortal] = useState(true);

  if (!workflow) {
    return <Navigate to="/" replace />;
  }

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputHash = await sha256(passcode);
    const correctHash = '1824b346dfd511433da2bc62b5e59b98a2e635b132fc71df1c1d9eccd5d1fad7'; // Dhonijohny
    
    if (inputHash === correctHash) {
      setPortalAuthenticated(true);
      setIsAuthenticated(true);
      setError('');
      setPasscode(''); // Clear immediately to wipe from DOM/React state
    } else {
      setError('Incorrect client passcode. Access denied.');
      setPasscode(''); // Clear immediately
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-28 pb-16 bg-[#f8fafc] text-slate-900 flex items-center justify-center p-6">
        <div className="bg-white border border-slate-200 p-8 md:p-10 w-full max-w-md shadow-2xl text-left rounded-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.02] rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest font-mono">Restricted Access</span>
              <h2 className="font-extrabold text-xl uppercase tracking-wider text-slate-900">Systems Vault Gate</h2>
            </div>
          </div>
          
          <h3 className="text-base font-extrabold text-slate-900 mb-2">
            Unlock: {workflow.name}
          </h3>
          <p className="text-xs text-slate-600 mb-6 leading-relaxed font-semibold">
            This operational blueprint is reserved for clients and partners of Abraham's Systems & Retail Consulting. Please enter the Client Passcode to access full KPIs, audit checklists, and step-by-step implementations.
          </p>

          <form onSubmit={handleUnlock} className="flex flex-col gap-4">
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
            {error && (
              <div className="text-red-600 text-xs font-bold flex items-center gap-1.5 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{error}</span>
              </div>
            )}
            <button 
              type="submit"
              className="w-full py-3 bg-blue-700 text-white hover:bg-blue-800 font-extrabold text-xs uppercase tracking-widest shadow-md transition-colors rounded-none"
            >
              Unlock Blueprint
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

  // Resolve active variant key based on both slicers
  const activeVariantKey: 'Variant_A' | 'Variant_B' | 'Variant_C' | 'Variant_D' =
    poUsed
      ? (vendorPortal ? 'Variant_A' : 'Variant_B')
      : (vendorPortal ? 'Variant_C' : 'Variant_D');

  // Resolve steps based on active variant
  const resolvedWorkflow = {
    ...workflow,
    steps: (workflow.slug === 'p2p-jewellery-supply-chain' && workflow.poVariants)
      ? workflow.poVariants[activeVariantKey].steps
      : workflow.steps
  };

  const getVariantExplanation = () => {
    switch (activeVariantKey) {
      case 'Variant_A':
        return {
          title: 'Variant A: HO Procurement & Vendor Portal (Ideal Flow)',
          desc: 'Establish standard PO controls and integrate the vendor portal. The vendor logs purity, lot numbers, weight data, and pre-shipment QC-1 directly on the portal. This automates the downstream 3-way matching process.'
        };
      case 'Variant_B':
        return {
          title: 'Variant B: HO Procurement & Manual Log (Staff Administered)',
          desc: 'Centralized HO Procurement issues rate-locked POs, but vendors send physical consignment notes. Showroom/Warehouse staff must manually enter received items and weight logs into the ERP.'
        };
      case 'Variant_C':
        return {
          title: 'Variant C: Ad-hoc Buying & Vendor Portal (Portal Supported)',
          desc: 'Procurement remains ad-hoc (no formal POs), but the vendor has portal access to log their consignment weight details and upload invoices, helping speed up physical inward checking.'
        };
      case 'Variant_D':
        return {
          title: 'Variant D: Ad-hoc Buying & Manual Log (Fully Manual & Chaotic)',
          desc: 'No POs are created and no vendor portal is used. Procurement is gut-based via WhatsApp/phone, shipments arrive with paper slips, and backend operators manually enter everything, resulting in high error rates.'
        };
    }
  };

  const variantExp = getVariantExplanation();

  return (
    <>
      <WorkflowHero />
      
      {workflow.slug === 'crm-growth-engine' && (
        <CRMDetailSection />
      )}
      
      {workflow.slug === 'p2p-jewellery-supply-chain' && (
        <section className="bg-[#f8fafc] text-slate-900 py-16 px-6 border-b border-slate-200 select-none">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Major & Recurring Procurement Classifications */}
            <div className="space-y-6 text-left mb-12">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1 uppercase rounded-sm inline-block mb-1">
                  Scope of Inventory
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  Major & Recurring Procurement Classifications
                </h3>
                <p className="text-xs text-slate-500 max-w-xl font-medium mt-1">
                  Standard classifications utilized across showroom inventory mapping, vendor purchase orders, and karating vault controls.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Raw Materials (White card - Indigo border) */}
                <div className="group bg-white border border-slate-200 p-5 rounded-none relative overflow-hidden flex flex-col justify-between min-h-[300px] text-left shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300">
                  {/* Default View (fades out on hover) */}
                  <div className="flex flex-col justify-between h-full transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-10px]">
                    <div>
                      {/* Header Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-slate-900 tracking-wide font-sans">
                          1. RAW MATERIALS
                        </span>
                        <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer select-none">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>

                      {/* Classifications Text */}
                      <div className="space-y-3 mt-4 text-[11px] text-slate-600 font-medium relative z-10">
                        <div>
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Precious Metals</strong>
                          Gold, Silver, Platinum
                        </div>
                        <div>
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Loose Stones</strong>
                          Natural Diamonds, Lab-Grown Diamonds, Precious Stones, Semi-Precious Stones, CZ, and Moissanite
                        </div>
                        <div>
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Findings & Components</strong>
                          Locks, Clasps, Hooks, Ear Nuts, Chains, and Connectors
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay View (fades in on hover) */}
                  <div className="absolute inset-0 p-5 bg-white border border-slate-200 opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-between pointer-events-none group-hover:pointer-events-auto z-20">
                    <div className="space-y-3 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                          <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                            Raw Materials Tracking
                          </span>
                        </div>
                        <ul className="space-y-2 text-[10px] leading-snug text-slate-600 font-medium">
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Traceable Vaults:</strong> Secure storage linked to unique Packet, Batch & Voucher numbers.</span>
                          </li>
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Full Genealogy:</strong> Tracks all receipts, transfers, issues, consumption, and returns.</span>
                          </li>
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Custody Control:</strong> Identifies current possession, department, and work order links.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Vector Illustration (Receipt & Cash) */}
                  <div className="absolute bottom-2 right-2 opacity-[0.08] group-hover:opacity-[0.02] group-hover:scale-105 transition-all duration-300 pointer-events-none z-0">
                    <svg className="w-20 h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* White bill sheet */}
                      <rect x="25" y="15" width="55" height="85" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                      {/* BILL title */}
                      <text x="33" y="32" fill="#2E3A8A" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="900" letterSpacing="0.5">BILL</text>
                      {/* Lines on the bill */}
                      <rect x="33" y="42" width="38" height="4" rx="2" fill="#E2E8F0" />
                      <rect x="33" y="52" width="38" height="4" rx="2" fill="#CBD5E1" />
                      <rect x="33" y="62" width="25" height="4" rx="2" fill="#E2E8F0" />
                      <rect x="33" y="72" width="38" height="4" rx="2" fill="#E2E8F0" />
                      <rect x="33" y="82" width="30" height="4" rx="2" fill="#2E3A8A" />
                      
                      {/* Stack of cash green banknotes */}
                      <g transform="translate(15, 65)">
                        {/* Back note */}
                        <rect x="0" y="5" width="45" height="26" rx="3" fill="#059669" stroke="#047857" strokeWidth="1" />
                        {/* Front note */}
                        <rect x="4" y="0" width="45" height="26" rx="3" fill="#10B981" stroke="#059669" strokeWidth="1" />
                        {/* Oval in middle */}
                        <ellipse cx="26.5" cy="13" rx="8" ry="5" fill="#A7F3D0" />
                        {/* Corner decorations */}
                        <circle cx="8" cy="4" r="1.5" fill="#34D399" />
                        <circle cx="45" cy="4" r="1.5" fill="#34D399" />
                        <circle cx="8" cy="22" r="1.5" fill="#34D399" />
                        <circle cx="45" cy="22" r="1.5" fill="#34D399" />
                      </g>

                      {/* Blue credit card */}
                      <g transform="translate(55, 75)">
                        <rect x="0" y="0" width="45" height="28" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
                        {/* Chip */}
                        <rect x="6" y="8" width="8" height="6" rx="1" fill="#F59E0B" />
                        {/* Visa/logo lines */}
                        <circle cx="34" cy="20" r="4" fill="#EF4444" opacity="0.8" />
                        <circle cx="38" cy="20" r="4" fill="#F59E0B" opacity="0.8" />
                        {/* Card number line */}
                        <rect x="6" y="18" width="18" height="2" rx="0.5" fill="#93C5FD" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* 2. Finished Goods (White card - Blue border) */}
                <div className="group bg-white border border-slate-200 p-5 rounded-none relative overflow-hidden flex flex-col justify-between min-h-[300px] text-left shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300">
                  {/* Default View (fades out on hover) */}
                  <div className="flex flex-col justify-between h-full transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-10px]">
                    <div>
                      {/* Header Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-slate-900 tracking-wide font-sans">
                          2. FINISHED GOODS
                        </span>
                        <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer select-none">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>

                      {/* Classifications Text */}
                      <div className="space-y-3 mt-4 text-[11px] text-slate-600 font-medium relative z-10">
                        <div>
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Ready-to-Sell Products</strong>
                          Rings, Earrings, Pendants, Bangles, Bracelets, Necklaces, Chains, and Mangalsutras
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay View (fades in on hover) */}
                  <div className="absolute inset-0 p-5 bg-white border border-slate-200 opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-between pointer-events-none group-hover:pointer-events-auto z-20">
                    <div className="space-y-3 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                          <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                            Finished Goods Control
                          </span>
                        </div>
                        <ul className="space-y-2 text-[10px] leading-snug text-slate-600 font-medium">
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>HUID & Barcoding:</strong> Unique identification and tracking from receipt/production to sale.</span>
                          </li>
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Omni-Channel Status:</strong> Real-time location and status across showrooms, warehouses, and exhibitions.</span>
                          </li>
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Lifecycle Audit:</strong> Monitors transfers, customer reservations, sales, exchanges, and repairs.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Vector Illustration (Store Front) */}
                  <div className="absolute bottom-2 right-2 opacity-[0.08] group-hover:opacity-[0.02] group-hover:scale-105 transition-all duration-300 pointer-events-none z-0">
                    <svg className="w-20 h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Shop background / walls */}
                      <rect x="25" y="55" width="70" height="45" fill="#1D4ED8" rx="2" />
                      
                      {/* Door */}
                      <rect x="50" y="70" width="20" height="30" fill="#FBBF24" />
                      {/* Door handle */}
                      <circle cx="54" cy="85" r="2" fill="#D97706" />

                      {/* Windows */}
                      <rect x="32" y="68" width="12" height="15" fill="#93C5FD" rx="1" />
                      <rect x="76" y="68" width="12" height="15" fill="#93C5FD" rx="1" />
                      
                      {/* Awning (red & white stripes) */}
                      <g>
                        {/* Awning backing */}
                        <rect x="20" y="40" width="80" height="18" fill="#EF4444" rx="2" />
                        {/* Stripes */}
                        <path d="M20 40h8v18h-8z" fill="#EF4444" />
                        <path d="M28 40h8v18h-8z" fill="#FFFFFF" />
                        <path d="M36 40h8v18h-8z" fill="#EF4444" />
                        <path d="M44 40h8v18h-8z" fill="#FFFFFF" />
                        <path d="M52 40h8v18h-8z" fill="#EF4444" />
                        <path d="M60 40h8v18h-8z" fill="#FFFFFF" />
                        <path d="M68 40h8v18h-8z" fill="#EF4444" />
                        <path d="M76 40h8v18h-8z" fill="#FFFFFF" />
                        <path d="M84 40h8v18h-8z" fill="#EF4444" />
                        <path d="M92 40h8v18h-8z" fill="#FFFFFF" />
                      </g>
                      
                      {/* SHOP sign */}
                      <rect x="35" y="16" width="50" height="20" rx="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                      <text x="60" y="30" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="1">SHOP</text>
                    </svg>
                  </div>
                </div>

                {/* 3. Packaging Materials (White card - Bronze border) */}
                <div className="group bg-white border border-slate-200 p-5 rounded-none relative overflow-hidden flex flex-col justify-between min-h-[300px] text-left shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300">
                  {/* Default View (fades out on hover) */}
                  <div className="flex flex-col justify-between h-full transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-10px]">
                    <div>
                      {/* Header Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-slate-900 tracking-wide font-sans">
                          3. PACKAGING & BRANDING
                        </span>
                        <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer select-none">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>

                      {/* Classifications Text */}
                      <div className="space-y-3 mt-4 text-[11px] text-slate-600 font-medium relative z-10">
                        <div>
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Primary Packaging</strong>
                          Jewellery Boxes, Pouches, and Zip Covers
                        </div>
                        <div>
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Secondary Packaging</strong>
                          Carry Bags, Shipping Boxes, and Bubble Wrap
                        </div>
                        <div>
                          <strong className="text-blue-700 block font-mono text-[9px] uppercase tracking-wider mb-0.5">Branding Materials</strong>
                          Tags, Labels, Certificates, and Warranty Cards
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay View (fades in on hover) */}
                  <div className="absolute inset-0 p-5 bg-white border border-slate-200 opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-between pointer-events-none group-hover:pointer-events-auto z-20">
                    <div className="space-y-3 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                          <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                            Packaging & Brand Control
                          </span>
                        </div>
                        <ul className="space-y-2 text-[10px] leading-snug text-slate-600 font-medium">
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Collateral Tracking:</strong> Monitors jewellery boxes, pouches, certificates, and warranty cards.</span>
                          </li>
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Reorder Automation:</strong> Tracks consumption patterns and triggers replenishment cycles.</span>
                          </li>
                          <li className="flex gap-1.5 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                            <span><strong>Allocation Control:</strong> Manages usage and distribution across showrooms and shipping lines.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Vector Illustration (Notepad) */}
                  <div className="absolute bottom-2 right-2 opacity-[0.08] group-hover:opacity-[0.02] group-hover:scale-105 transition-all duration-300 pointer-events-none z-0">
                    <svg className="w-20 h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Main notepad sheet */}
                      <path d="M30 20h50l20 20v60a6 6 0 01-6 6H30a6 6 0 01-6-6V26a6 6 0 016-6z" fill="#F59E0B" />
                      {/* Folded corner */}
                      <path d="M80 20v20h20L80 20z" fill="#D97706" />
                      
                      {/* Lines on notepad */}
                      <rect x="34" y="50" width="52" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                      <rect x="34" y="60" width="52" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                      <rect x="34" y="70" width="52" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                      <rect x="34" y="80" width="38" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                      
                      {/* Paperclip */}
                      <g transform="translate(36, 12)">
                        <path d="M4 16v-8a6 6 0 0112 0v10a4 4 0 01-8 0v-8a2 2 0 014 0v6" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <path d="M4 16v-8a6 6 0 0112 0v10a4 4 0 01-8 0v-8a2 2 0 014 0v6" stroke="#E2E8F0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 my-8" />

            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-blue-700" />
              <span className="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-sm">
                Operating Model Explorer
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              
              {/* Slicers Section (Left - 7 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  Procurement Framework Slicers
                </h2>
                <p className="text-xs text-slate-500 max-w-xl font-medium">
                  Toggle the operating parameters below. The rules engine will automatically determine and display the corresponding step-by-step workflow variant.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* Slicer 1: PO Used */}
                  <div className="bg-slate-100 border border-slate-200 p-5 space-y-3">
                    <span className="text-[10px] font-black text-slate-500 tracking-wider uppercase block">
                      1. Purchase Order (PO_USED)
                    </span>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-semibold h-8">
                      Does the showroom establish formal POs?
                    </p>
                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setPoUsed(true)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          poUsed
                            ? 'bg-slate-900 border-slate-900 text-white font-black'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        Yes (P2P)
                      </button>
                      <button
                        type="button"
                        onClick={() => setPoUsed(false)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          !poUsed
                            ? 'bg-slate-900 border-slate-900 text-white font-black'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        No (Ad-hoc)
                      </button>
                    </div>
                  </div>

                  {/* Slicer 2: Vendor Portal */}
                  <div className="bg-slate-100 border border-slate-200 p-5 space-y-3">
                    <span className="text-[10px] font-black text-slate-500 tracking-wider uppercase block">
                      2. Vendor Portal (VENDOR_PORTAL)
                    </span>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-semibold h-8">
                      Do suppliers enter data into an online portal?
                    </p>
                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setVendorPortal(true)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          vendorPortal
                            ? 'bg-slate-900 border-slate-900 text-white font-black'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        Yes (Portal)
                      </button>
                      <button
                        type="button"
                        onClick={() => setVendorPortal(false)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          !vendorPortal
                            ? 'bg-slate-900 border-slate-900 text-white font-black'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        No (Manual)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules Engine Output Summary Card (Right - 4 cols) */}
              <div className="lg:col-span-4 bg-white border border-slate-200 p-6 rounded-none text-left h-full flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#558b2f] border border-emerald-200 bg-emerald-50 px-2 py-0.5 uppercase tracking-wider inline-block mb-3">
                    Rules Engine Output
                  </span>
                  <h3 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">
                    {variantExp?.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 font-medium">
                    {variantExp?.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[9px] font-mono text-slate-500 space-y-1.5 mt-4">
                  <div>&gt; CONFIG: PO={poUsed ? 'YES' : 'NO'} | PORTAL={vendorPortal ? 'YES' : 'NO'}</div>
                  <div>&gt; RESOLUTION: {activeVariantKey} DEPLOYED</div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      <StepNavigator workflow={resolvedWorkflow} />
      <StepCardsGrid workflow={resolvedWorkflow} />

      {/* Inefficiencies, Risks & Burdens Section (Visible only when PO = No) */}
      {!poUsed && workflow.slug === 'p2p-jewellery-supply-chain' && workflow.poVariants && (
        <section className="bg-red-50/45 py-16 md:py-24 px-6 border-b border-red-100 select-none">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Risk Assessment Summary
              </span>
            </div>
            <h2 className="text-3xl font-black text-navy uppercase tracking-tight mb-2">
              Inefficiencies, Risks & Burdens
            </h2>
            <p className="text-sm text-text-secondary mb-12 max-w-2xl font-medium">
              Running a jewellery business without a formalized PO framework leads to systematic leakages, compliance vulnerabilities, and severe organizational overload.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workflow.poVariants.inefficiencies.map((cat: { category: string; items: string[] }, idx: number) => (
                <div key={idx} className="bg-white border border-red-100/70 p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-black text-red-600 uppercase tracking-tight flex items-center gap-2 border-b border-red-50 pb-2">
                    <XCircle className="w-4.5 h-4.5" />
                    {cat.category}
                  </h3>
                  <ul className="space-y-4">
                    {cat.items.map((item: string, itemIdx: number) => {
                      const [title, desc] = item.split(': ');
                      return (
                        <li key={itemIdx} className="text-xs leading-relaxed pl-0">
                          <span className="font-extrabold text-navy block mb-0.5">{title}</span>
                          <span className="text-text-secondary font-medium opacity-90">{desc}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Model Comparison Section */}
      {workflow.slug === 'p2p-jewellery-supply-chain' && workflow.poVariants && (
        <section className="bg-white py-16 md:py-24 px-6 border-b border-border-light select-none">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Info className="w-5 h-5 text-gold" />
              <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
                Structural Evaluation
              </span>
            </div>
            <h2 className="text-3xl font-black text-navy text-center uppercase tracking-tight mb-2">
              Procurement Models Compared
            </h2>
            <p className="text-sm text-text-secondary text-center max-w-xl mx-auto mb-12 font-medium">
              A head-to-head comparison between establishing a Purchase Order (PO) framework versus running on gut-feeling ad-hoc buying.
            </p>

            <div className="overflow-x-auto border border-[#E2E8F0] shadow-sm">
              <table className="w-full text-left border-collapse min-w-[750px] text-xs md:text-sm">
                <thead>
                  <tr className="bg-navy text-white text-xs font-bold uppercase tracking-wider">
                    <th className="p-4 border-b border-white/10 w-1/4">Aspect</th>
                    <th className="p-4 border-b border-white/10 w-3/8">With PO (Standard P2P)</th>
                    <th className="p-4 border-b border-white/10 w-3/8">Without PO (Ad-hoc Buying)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] font-medium text-text-secondary">
                  {workflow.poVariants.comparison.map((row: { aspect: string; withPO: string; withoutPO: string }, idx: number) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white hover:bg-navy/5 transition-colors'}>
                      <td className="p-4 font-extrabold text-navy border-r border-[#E2E8F0]">{row.aspect}</td>
                      <td className="p-4 border-r border-[#E2E8F0] text-[#0170B9] font-bold">{row.withPO}</td>
                      <td className="p-4 text-red-500 font-semibold">{row.withoutPO}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <DashboardImpact />
    </>
  );
}
