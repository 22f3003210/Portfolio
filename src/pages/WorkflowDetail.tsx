import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Lock, AlertCircle, ArrowLeft, SlidersHorizontal, AlertTriangle, XCircle, Info } from 'lucide-react';
import { WorkflowHero } from '../sections/workflow/WorkflowHero';
import { StepNavigator } from '../sections/workflow/StepNavigator';
import { StepCardsGrid } from '../sections/workflow/StepCardsGrid';
import { DashboardImpact } from '../sections/workflow/DashboardImpact';
import { getWorkflowBySlug } from '../data/workflows';

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

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('portal_authenticated') === 'true';
  });
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
      localStorage.setItem('portal_authenticated', 'true');
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
      <div className="min-h-screen pt-28 pb-16 bg-[#001026] text-white flex items-center justify-center p-6">
        <div className="bg-[#0B1E2E] border border-white/10 p-8 md:p-10 w-full max-w-md shadow-2xl text-left rounded-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[9px] font-black text-gold uppercase tracking-widest font-mono">Restricted Access</span>
              <h2 className="font-extrabold text-xl uppercase tracking-wider text-white">Systems Vault Gate</h2>
            </div>
          </div>
          
          <h3 className="text-base font-extrabold text-white mb-2">
            Unlock: {workflow.name}
          </h3>
          <p className="text-xs text-white/70 mb-6 leading-relaxed font-semibold">
            This operational blueprint is reserved for clients and partners of Abraham's Systems & Retail Consulting. Please enter the Client Passcode to access full KPIs, audit checklists, and step-by-step implementations.
          </p>

          <form onSubmit={handleUnlock} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-white/80 uppercase mb-1.5">Client Passcode</label>
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-white/20 bg-white/5 p-3 text-sm font-semibold rounded-none focus:outline-none focus:border-gold text-white"
              />
            </div>
            {error && (
              <div className="text-red-400 text-xs font-bold flex items-center gap-1.5 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{error}</span>
              </div>
            )}
            <button 
              type="submit"
              className="w-full py-3 bg-gold text-white hover:bg-gold/90 font-extrabold text-xs uppercase tracking-widest shadow-md transition-colors rounded-none"
            >
              Unlock Blueprint
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-xs">
            <Link to="/" className="text-white/60 hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <span className="text-gold/50 font-bold uppercase tracking-wider text-[9px]">Scale with Abraham</span>
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
      
      {workflow.slug === 'p2p-jewellery-supply-chain' && (
        <section className="bg-[#001026] text-white py-12 px-6 border-b border-white/10 select-none">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-gold" />
              <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
                Operating Model Explorer
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              
              {/* Slicers Section (Left - 7 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                  Procurement Framework Slicers
                </h2>
                <p className="text-xs text-white/60 max-w-xl font-medium">
                  Toggle the operating parameters below. The rules engine will automatically determine and display the corresponding step-by-step workflow variant.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* Slicer 1: PO Used */}
                  <div className="bg-[#0B1E2E] border border-white/15 p-5 space-y-3">
                    <span className="text-[10px] font-black text-white/55 tracking-wider uppercase block">
                      1. Purchase Order (PO_USED)
                    </span>
                    <p className="text-[11px] text-white/80 leading-relaxed font-semibold h-8">
                      Does the showroom establish formal POs?
                    </p>
                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setPoUsed(true)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          poUsed
                            ? 'bg-gold border-gold text-white font-black'
                            : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        Yes (P2P)
                      </button>
                      <button
                        type="button"
                        onClick={() => setPoUsed(false)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          !poUsed
                            ? 'bg-gold border-gold text-white font-black'
                            : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        No (Ad-hoc)
                      </button>
                    </div>
                  </div>

                  {/* Slicer 2: Vendor Portal */}
                  <div className="bg-[#0B1E2E] border border-white/15 p-5 space-y-3">
                    <span className="text-[10px] font-black text-white/55 tracking-wider uppercase block">
                      2. Vendor Portal (VENDOR_PORTAL)
                    </span>
                    <p className="text-[11px] text-white/80 leading-relaxed font-semibold h-8">
                      Do suppliers enter data into an online portal?
                    </p>
                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setVendorPortal(true)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          vendorPortal
                            ? 'bg-gold border-gold text-white font-black'
                            : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        Yes (Portal)
                      </button>
                      <button
                        type="button"
                        onClick={() => setVendorPortal(false)}
                        className={`flex-1 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all rounded-none ${
                          !vendorPortal
                            ? 'bg-gold border-gold text-white font-black'
                            : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        No (Manual)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules Engine Output Summary Card (Right - 4 cols) */}
              <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 p-6 rounded-none text-left h-full flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#8CC63F] border border-[#8CC63F]/20 bg-[#8CC63F]/5 px-2 py-0.5 uppercase tracking-wider inline-block mb-3">
                    Rules Engine Output
                  </span>
                  <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight">
                    {variantExp?.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mt-2 font-medium">
                    {variantExp?.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[9px] font-mono text-white/40 space-y-1.5 mt-4">
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
