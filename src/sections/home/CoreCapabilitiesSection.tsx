import { useState } from 'react';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

// ─── Topographic contour pattern (like the reference) ───────────────────────

function ContourPattern({ color }: { color: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Bottom-right large concentric circles — topographic style */}
      {[220, 180, 140, 100, 60].map((r, i) => (
        <circle
          key={i}
          cx="110%"
          cy="110%"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity={0.18 - i * 0.025}
        />
      ))}
      {/* Top-left small accent circles */}
      {[70, 45, 22].map((r, i) => (
        <circle
          key={`tl-${i}`}
          cx="-10%"
          cy="-5%"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          opacity={0.12}
        />
      ))}
    </svg>
  );
}

// ─── 3D-style SVG icons per capability ──────────────────────────────────────

const icons: Record<number, ReactElement> = {
  1: (
    // Bar chart with arrow (Business Analysis)
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="8" y="44" width="14" height="26" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="28" y="30" width="14" height="40" rx="3" fill="rgba(255,255,255,0.55)" />
      <rect x="48" y="18" width="14" height="52" rx="3" fill="rgba(255,255,255,0.75)" />
      <path d="M6 62 L20 44 L36 52 L60 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="24" r="4" fill="white" />
    </svg>
  ),
  2: (
    // Compass / target (Strategy)
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <circle cx="40" cy="40" r="22" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      <circle cx="40" cy="40" r="10" fill="rgba(255,255,255,0.8)" />
      <line x1="40" y1="8" x2="40" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="58" x2="40" y2="72" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="40" x2="22" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="58" y1="40" x2="72" y2="40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  3: (
    // Gears (Operations)
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="28" cy="32" r="14" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="28" cy="32" r="5" fill="rgba(255,255,255,0.8)" />
      <circle cx="54" cy="52" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
      <circle cx="54" cy="52" r="4" fill="rgba(255,255,255,0.6)" />
      <path d="M28 18 L28 12 M28 46 L28 52 M14 32 L8 32 M42 32 L48 32" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  4: (
    // Dashboard / KPI chart (Performance)
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="6" y="14" width="68" height="52" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <rect x="14" y="38" width="10" height="20" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="28" y="28" width="10" height="30" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="42" y="22" width="10" height="36" rx="2" fill="rgba(255,255,255,0.8)" />
      <rect x="56" y="32" width="10" height="26" rx="2" fill="rgba(255,255,255,0.5)" />
      <path d="M14 30 L24 22 L38 26 L52 18 L66 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  5: (
    // Diamond / jewel (Retail & Jewellery)
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <polygon points="40,12 62,30 54,68 26,68 18,30" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="40,12 62,30 40,36 18,30" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <line x1="40" y1="36" x2="54" y2="68" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="40" y1="36" x2="26" y2="68" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="40" cy="12" r="3" fill="white" />
    </svg>
  ),
  6: (
    // Circuit / chip (Technology)
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="22" y="22" width="36" height="36" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      <rect x="30" y="30" width="20" height="20" rx="2" fill="rgba(255,255,255,0.4)" />
      <line x1="22" y1="34" x2="10" y2="34" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="46" x2="10" y2="46" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="34" x2="70" y2="34" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="46" x2="70" y2="46" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="22" x2="34" y2="10" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="22" x2="46" y2="10" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="58" x2="34" y2="70" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="58" x2="46" y2="70" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

// ─── Data ────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    id: 1,
    title: 'Business Analysis',
    tag: 'Discovery & Diagnostics',
    description: 'Understanding business performance through structured analysis, diagnostics, and stakeholder discovery.',
    subCaps: ['Business Process Analysis', 'Root Cause Analysis', 'Gap Analysis', 'Business Diagnostics', 'Requirements Gathering', 'Stakeholder Management'],
    bg: '#1A73E8',
    pattern: 'rgba(255,255,255,1)',
  },
  {
    id: 2,
    title: 'Strategy & Transformation',
    tag: 'Direction & Change',
    description: 'Aligning business objectives, operations, and execution to drive meaningful change and long-term growth.',
    subCaps: ['Business Transformation', 'Operational Excellence', 'Systems Thinking', 'Change Management', 'Performance Improvement', 'Strategic Planning'],
    bg: '#D97706',
    pattern: 'rgba(255,255,255,1)',
  },
  {
    id: 3,
    title: 'Operations',
    tag: 'Process & Design',
    description: 'Designing scalable operating models that improve efficiency, consistency, and organizational effectiveness.',
    subCaps: ['Process Engineering', 'SOP Development', 'Workflow Optimization', 'Process Standardization', 'Organizational Design', 'Governance Frameworks'],
    bg: '#0B9E7E',
    pattern: 'rgba(255,255,255,1)',
  },
  {
    id: 4,
    title: 'Performance Management',
    tag: 'Visibility & Accountability',
    description: 'Creating visibility, accountability, and decision support through structured performance frameworks.',
    subCaps: ['KPI Architecture', 'Performance Management Systems', 'Executive Dashboards', 'Business Intelligence', 'Decision Support Systems', 'Management Reporting'],
    bg: '#7C3AED',
    pattern: 'rgba(255,255,255,1)',
  },
  {
    id: 5,
    title: 'Retail & Jewellery',
    tag: 'Industry Specialization',
    description: 'Improving profitability, customer experience, inventory performance, and operational effectiveness across jewellery retail.',
    subCaps: ['Jewellery Retail Operations', 'Inventory Optimization', 'Procurement-to-Pay (P2P)', 'CRM Strategy', 'Customer Experience Design', 'Multi-Store Operations'],
    bg: '#DC2626',
    pattern: 'rgba(255,255,255,1)',
  },
  {
    id: 6,
    title: 'Technology Enablement',
    tag: 'Systems & Digital',
    description: 'Leveraging technology to strengthen business processes, operational visibility, and decision-making capabilities.',
    subCaps: ['ERP Implementation', 'POS Systems', 'Retail Analytics', 'Data Visualization', 'Automation Design', 'Digital Transformation'],
    bg: '#2563EB',
    pattern: 'rgba(255,255,255,1)',
  },
] as const;

type Capability = (typeof capabilities)[number];

// ─── Modal ───────────────────────────────────────────────────────────────────

function CapabilityModal({ cap, onClose }: { cap: Capability; onClose: () => void }) {
  const { title, tag, description, subCaps, bg } = cap;
  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Colored header */}
        <div className="relative overflow-hidden p-7 pb-6" style={{ background: bg }}>
          <ContourPattern color="rgba(255,255,255,1)" />
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/70 font-mono block mb-1.5">
                {tag}
              </span>
              <h3 className="text-xl font-extrabold text-white uppercase tracking-tight leading-tight">
                {title}
              </h3>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white p-1" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="relative z-10 text-sm text-white/80 font-medium leading-relaxed mt-3">
            {description}
          </p>
        </div>

        {/* Sub-capabilities */}
        <div className="p-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono block mb-4">
            Sub-Capabilities
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {subCaps.map((sub) => (
              <li key={sub} className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: bg }} />
                {sub}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 pb-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            style={{ background: bg }}
            onClick={onClose}
          >
            Work with Abraham <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function CapabilityCard({ cap, onOpen }: { cap: Capability; onOpen: () => void }) {
  const { id, title, tag, description, bg } = cap;
  return (
    <button
      onClick={onOpen}
      className="group text-left w-full h-full rounded-2xl relative overflow-hidden
        hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ease-out
        flex flex-col p-6 min-h-[260px]"
      style={{ background: bg }}
      aria-label={`Open ${title} details`}
    >
      {/* Topographic contour pattern */}
      <ContourPattern color={cap.pattern} />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 gap-3">
        {/* Tag */}
        <span className="text-[9px] font-black uppercase tracking-widest text-white/60 font-mono">
          {tag}
        </span>

        {/* Title — big and bold like the reference */}
        <h3 className="text-2xl font-extrabold text-white leading-tight tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-white/80 font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom: icon illustration + CTA */}
      <div className="relative z-10 flex items-end justify-between mt-4">
        <div className="opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
          {icons[id]}
        </div>
        <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white/90 transition-colors">
          View Capabilities <ChevronRight className="w-3 h-3" />
        </span>
      </div>
    </button>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function CoreCapabilitiesSection() {
  const [selected, setSelected] = useState<Capability | null>(null);

  return (
    <section id="core-capabilities" className="bg-[#F1F3F6] py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-3">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-navy uppercase tracking-tight leading-tight mb-4">
            A Structured Approach to{' '}
            <span className="text-[#0170B9]">Business Excellence</span>
          </h2>
          <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-2xl">
            A structured approach to understanding business challenges, improving operational
            performance, and enabling sustainable growth through systems thinking, process
            excellence, and decision intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="h-full"
            >
              <CapabilityCard cap={cap} onOpen={() => setSelected(cap)} />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 font-medium mt-12 max-w-2xl mx-auto leading-relaxed border-t border-gray-200 pt-8">
          Combining business insight, operational excellence, performance intelligence, and
          technology enablement to create scalable, high-performing organizations.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <CapabilityModal cap={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
