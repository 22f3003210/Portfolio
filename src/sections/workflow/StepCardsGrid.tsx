import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, Terminal, Activity, ChevronRight } from 'lucide-react';
import type { Workflow } from '../../data/workflows';

interface StepCardsGridProps {
  workflow: Workflow;
}

// Simulated logs mapper based on step title keywords
const getSimulatedLogs = (title: string): string[] => {
  const t = title.toLowerCase();
  if (t.includes('onboarding') || t.includes('supplier')) {
    return [
      '[API] Live MCX gold price feed connected (15-min refresh interval)',
      '[ERP] Setup rate-linked supplier master profile & wastage configs',
      '[DOC] GST, PAN, and metal purity certificates verified via government gateway',
      '[SYS] Supplier onboarding workflow status: APPROVED'
    ];
  }
  if (t.includes('requisition') || t.includes('demand')) {
    return [
      '[BI] Store stock levels scanned; replenishment demand detected',
      '[BI] Auto-calculated COGS based on live metal rates & making charges',
      '[ERP] Store budget constraints and margin thresholds validated',
      '[SYS] Digital purchase requisition routed to procurement queue'
    ];
  }
  if (t.includes('order') || t.includes('po')) {
    return [
      '[ERP] Generated legal PO with live gold rate snapshot lock',
      '[COM] Automated WhatsApp delivery timeline confirmation dispatched to vendor',
      '[SEC] Multi-level approval signature & digital audit trail logged',
      '[SYS] Confirmed PO generated and synced to vendor portal'
    ];
  }
  if (t.includes('inward') || t.includes('receipt') || t.includes('receive')) {
    return [
      '[DEV] Karatometer purity assay verification completed successfully',
      '[ERP] Physical consignment weighed; digital scale weight logged in ERP',
      '[SEC] RFID/Token ID registered to prevent duplicate GRN entry',
      '[SYS] Goods receipt note (GRN) created and stock moved to Karat vault'
    ];
  }
  if (t.includes('matching') || t.includes('invoice')) {
    return [
      '[ERP] Automated three-way match initiated: PO ↔ GRN ↔ Invoice',
      '[ERP] Rate variance check: 0.18% discrepancy (within ±2% tolerance limit)',
      '[TAX] GST invoice format compliance check: PASSED',
      '[SYS] Approved payable logged in accounting ledger'
    ];
  }
  if (t.includes('payment') || t.includes('disburse')) {
    return [
      '[FIN] Batch NEFT/RTGS transaction file generated & pushed to bank API',
      '[TAX] Tax deduction at source (TDS) and GST claim records logged',
      '[COM] Payment confirmation and transaction ID sent to supplier',
      '[SYS] Supplier account balance cleared in ERP ledger'
    ];
  }
  if (t.includes('reconciliation') || t.includes('report') || t.includes('auditing')) {
    return [
      '[BI] Performance logs processed: 7.2 days avg procurement cycle time',
      '[BI] Supplier quality score updated: 99.94% accuracy rating',
      '[ERP] Live margin audit dashboard updated in Power BI',
      '[SYS] Weekly operational audit logs finalized and archived'
    ];
  }
  // Fallback
  return [
    `[SYS] Initiated step: ${title}`,
    `[ERP] Synced transactions with central relational database`,
    `[SEC] Verified authorization signatures and user role permissions`,
    `[SYS] Step execution completed successfully`
  ];
};

export function StepCardsGrid({ workflow }: StepCardsGridProps) {
  const [activeStepNum, setActiveStepNum] = useState(1);

  // Sync active step with any reset in workflow steps (e.g. when variant changes)
  useEffect(() => {
    setActiveStepNum(1);
  }, [workflow]);

  const activeStep = workflow.steps.find((s) => s.number === activeStepNum) || workflow.steps[0];
  const logs = getSimulatedLogs(activeStep.title);

  return (
    <section className="bg-warm-white py-16 md:py-24 px-6 border-b border-border-light select-none">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10 border-b border-border-light pb-6">
          <div>
            <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-1">
              SYSTEM STEP-BY-STEP MAP
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight uppercase">
              Interactive Blueprint Flow
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-navy/5 px-3 py-1.5 border border-navy/10 text-navy font-mono text-xs font-bold">
            <Activity className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>ACTIVE BLUEPRINT: {workflow.steps.length} STAGES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Stepper List (5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-4 pl-1">
              Select any stage below to explore details
            </p>
            <div className="relative border-l border-border-light pl-6 ml-4 space-y-4">
              {workflow.steps.map((step) => {
                const isActive = step.number === activeStepNum;
                return (
                  <div key={step.number} className="relative">
                    {/* Node Circle */}
                    <button
                      onClick={() => setActiveStepNum(step.number)}
                      className={`absolute -left-[38px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                        isActive
                          ? 'border-gold bg-gold text-white shadow-md shadow-gold/20 scale-110'
                          : 'border-border-light bg-white text-text-muted hover:border-gold hover:text-gold'
                      }`}
                    >
                      {step.number}
                    </button>

                    {/* Stage Card */}
                    <div
                      onClick={() => setActiveStepNum(step.number)}
                      className={`cursor-pointer p-4 border transition-all duration-300 rounded-none flex items-center justify-between group ${
                        isActive
                          ? 'bg-[#0B1E2E] border-[#0B1E2E] text-white shadow-lg shadow-navy/5'
                          : 'bg-white border-border-light text-text-primary hover:border-gold/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl flex-shrink-0">{step.icon}</span>
                        <div className="text-left">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider block ${
                              isActive ? 'text-gold' : 'text-text-muted'
                            }`}
                          >
                            Stage 0{step.number}
                          </span>
                          <h3 className="text-sm font-extrabold leading-tight tracking-tight mt-0.5">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive
                            ? 'text-gold translate-x-1'
                            : 'text-text-muted group-hover:text-gold group-hover:translate-x-0.5'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Active Step Detail Panel (7 Columns) */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepNum}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white border border-border-light p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-border-light pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-2xl border border-navy/10">
                      {activeStep.icon}
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-gold uppercase tracking-widest font-mono">
                        Stage 0{activeStep.number} Detailed Blueprint
                      </span>
                      <h3 className="text-xl font-extrabold text-navy leading-tight uppercase tracking-tight mt-0.5">
                        {activeStep.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Description */}
                <p className="text-sm text-text-secondary leading-relaxed font-semibold text-left">
                  {activeStep.description}
                </p>

                {/* Core System Checklist */}
                <div className="space-y-3 text-left">
                  <h4 className="text-xs font-black text-navy uppercase tracking-wider font-mono">
                    System Control Checklist
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {activeStep.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs font-medium text-text-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics and Outputs Metadata Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#F8FAFC] border border-border-light p-3.5 text-left space-y-1">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                      Estimated Duration
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-xs font-extrabold text-navy font-mono">
                        {activeStep.duration}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] border border-border-light p-3.5 text-left space-y-1">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                      Stage Deliverable
                    </span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8CC63F]" />
                      <span className="text-xs font-extrabold text-navy uppercase font-mono truncate">
                        {activeStep.output}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Terminal Console Log Box */}
                <div className="bg-[#030d15] border border-white/10 p-4 font-mono text-[10px] text-[#8CC63F]/90 space-y-1.5 text-left overflow-hidden h-36 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2 text-white/50 font-bold select-none uppercase tracking-wider text-[9px]">
                    <Terminal className="w-3.5 h-3.5 text-gold" />
                    <span>Real-time Integration Trace</span>
                  </div>
                  {logs.map((logLine, idx) => {
                    const isErr = logLine.includes('discrepancy') || logLine.includes('variance') || logLine.includes('fails');
                    return (
                      <div
                        key={idx}
                        className={`truncate ${
                          isErr ? 'text-red-400 font-semibold' : 'opacity-85'
                        }`}
                      >
                        {logLine}
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
