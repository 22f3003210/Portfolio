import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  BarChart2,
  Compass,
  Settings2,
  TrendingUp,
  ShoppingBag,
  Cpu,
  ChevronRight,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    id: 1,
    Icon: BarChart2,
    title: 'Business Analysis',
    tag: 'Discovery & Diagnostics',
    description:
      'Understanding business performance through structured analysis, diagnostics, and stakeholder discovery.',
    subCaps: [
      'Business Process Analysis',
      'Root Cause Analysis',
      'Gap Analysis',
      'Business Diagnostics',
      'Requirements Gathering',
      'Stakeholder Management',
    ],
    accent: '#0170B9',
    bg: 'from-[#EFF6FF] to-white',
    hoverBg: 'group-hover:from-[#dbeafe] group-hover:to-[#eff6ff]',
  },
  {
    id: 2,
    Icon: Compass,
    title: 'Strategy & Transformation',
    tag: 'Direction & Change',
    description:
      'Aligning business objectives, operations, and execution to drive meaningful change and long-term growth.',
    subCaps: [
      'Business Transformation',
      'Operational Excellence',
      'Systems Thinking',
      'Change Management',
      'Performance Improvement',
      'Strategic Planning',
    ],
    accent: '#C5A028',
    bg: 'from-[#FFFBEB] to-white',
    hoverBg: 'group-hover:from-[#fef3c7] group-hover:to-[#fffbeb]',
  },
  {
    id: 3,
    Icon: Settings2,
    title: 'Operations',
    tag: 'Process & Design',
    description:
      'Designing scalable operating models that improve efficiency, consistency, and organizational effectiveness.',
    subCaps: [
      'Process Engineering',
      'SOP Development',
      'Workflow Optimization',
      'Process Standardization',
      'Organizational Design',
      'Governance Frameworks',
    ],
    accent: '#0B7A5E',
    bg: 'from-[#ECFDF5] to-white',
    hoverBg: 'group-hover:from-[#d1fae5] group-hover:to-[#ecfdf5]',
  },
  {
    id: 4,
    Icon: TrendingUp,
    title: 'Performance Management',
    tag: 'Visibility & Accountability',
    description:
      'Creating visibility, accountability, and decision support through structured performance frameworks.',
    subCaps: [
      'KPI Architecture',
      'Performance Management Systems',
      'Executive Dashboards',
      'Business Intelligence',
      'Decision Support Systems',
      'Management Reporting',
    ],
    accent: '#7C3AED',
    bg: 'from-[#F5F3FF] to-white',
    hoverBg: 'group-hover:from-[#ede9fe] group-hover:to-[#f5f3ff]',
  },
  {
    id: 5,
    Icon: ShoppingBag,
    title: 'Retail & Jewellery',
    tag: 'Industry Specialization',
    description:
      'Improving profitability, customer experience, inventory performance, and operational effectiveness across jewellery retail operations.',
    subCaps: [
      'Jewellery Retail Operations',
      'Inventory Optimization',
      'Procurement-to-Pay (P2P)',
      'CRM Strategy',
      'Customer Experience Design',
      'Multi-Store Operations',
    ],
    accent: '#B91C1C',
    bg: 'from-[#FFF1F2] to-white',
    hoverBg: 'group-hover:from-[#ffe4e6] group-hover:to-[#fff1f2]',
  },
  {
    id: 6,
    Icon: Cpu,
    title: 'Technology Enablement',
    tag: 'Systems & Digital',
    description:
      'Leveraging technology to strengthen business processes, operational visibility, and decision-making capabilities.',
    subCaps: [
      'ERP Implementation',
      'POS Systems',
      'Retail Analytics',
      'Data Visualization',
      'Automation Design',
      'Digital Transformation',
    ],
    accent: '#0170B9',
    bg: 'from-[#F0F9FF] to-white',
    hoverBg: 'group-hover:from-[#e0f2fe] group-hover:to-[#f0f9ff]',
  },
] as const;

type Capability = (typeof capabilities)[number];

// ─── Modal ───────────────────────────────────────────────────────────────────

function CapabilityModal({
  cap,
  onClose,
}: {
  cap: Capability;
  onClose: () => void;
}) {
  const { Icon, title, tag, description, subCaps, accent } = cap;
  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="bg-white w-full max-w-lg shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top bar */}
        <div className="h-1 w-full" style={{ background: accent }} />

        {/* Header */}
        <div className="p-7 pb-5 border-b border-border-light">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} />
              </div>
              <div>
                <span
                  className="text-[9px] font-black uppercase tracking-widest font-mono block mb-0.5"
                  style={{ color: accent }}
                >
                  {tag}
                </span>
                <h3 className="text-xl font-extrabold text-navy uppercase tracking-tight leading-tight">
                  {title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-navy transition-colors p-1 flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-text-secondary font-medium leading-relaxed mt-4">
            {description}
          </p>
        </div>

        {/* Sub-capabilities */}
        <div className="p-7">
          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted font-mono block mb-4">
            Sub-Capabilities
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {subCaps.map((sub) => (
              <li
                key={sub}
                className="flex items-center gap-2.5 text-xs font-semibold text-navy bg-warm-white border border-border-light px-3 py-2.5"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: accent }}
                />
                {sub}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-7 pb-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-5 py-2.5 transition-all"
            style={{ background: accent }}
            onClick={onClose}
          >
            Work with Abraham
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────

function CapabilityCard({
  cap,
  onOpen,
}: {
  cap: Capability;
  onOpen: () => void;
}) {
  const { Icon, title, tag, description, accent, bg } = cap;
  return (
    <button
      onClick={onOpen}
      className={`group text-left w-full bg-gradient-to-br ${bg} border border-border-light
        hover:border-transparent hover:shadow-xl hover:-translate-y-1
        transition-all duration-300 ease-out p-7 flex flex-col gap-5 relative overflow-hidden`}
      aria-label={`Open ${title} details`}
    >
      {/* Hover accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: accent }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: `${accent}15`,
            border: `1px solid ${accent}25`,
          }}
        >
          <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: accent }} />
        </div>
        <ChevronRight
          className="w-4 h-4 text-text-muted group-hover:text-navy group-hover:translate-x-0.5 transition-all duration-300 mt-1 flex-shrink-0"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <span
          className="text-[9px] font-black uppercase tracking-widest font-mono"
          style={{ color: accent }}
        >
          {tag}
        </span>
        <h3 className="text-base font-extrabold text-navy uppercase tracking-tight leading-snug group-hover:text-navy transition-colors">
          {title}
        </h3>
        <p className="text-xs text-text-secondary font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer hint */}
      <div className="flex items-center gap-1.5 pt-2 border-t border-border-light">
        <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted group-hover:text-navy transition-colors">
          View Sub-Capabilities
        </span>
        <ChevronRight className="w-3 h-3 text-text-muted group-hover:text-navy group-hover:translate-x-0.5 transition-all" />
      </div>
    </button>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function CoreCapabilitiesSection() {
  const [selected, setSelected] = useState<Capability | null>(null);

  return (
    <section id="core-capabilities" className="bg-warm-white py-20 md:py-28 px-6 border-b border-border-light">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-3">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-navy uppercase tracking-tight leading-tight mb-5">
            A Structured Approach to{' '}
            <span className="text-[#0170B9]">Business Excellence</span>
          </h2>
          <p className="text-sm text-text-secondary font-medium leading-relaxed mb-3 max-w-2xl">
            A structured approach to understanding business challenges, improving operational
            performance, and enabling sustainable growth through systems thinking, process
            excellence, and decision intelligence.
          </p>
          <p className="text-xs text-text-secondary/80 leading-relaxed border-l-2 border-gold pl-3 max-w-2xl">
            My expertise spans business analysis, transformation strategy, operational excellence,
            performance management, retail optimization, and technology enablement. These
            capabilities work together to help organizations identify constraints, uncover
            opportunities, improve decision-making, and build scalable operating systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CapabilityCard cap={cap} onOpen={() => setSelected(cap)} />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-text-secondary font-medium mt-12 max-w-2xl mx-auto leading-relaxed border-t border-border-light pt-8">
          Combining business insight, operational excellence, performance intelligence, and
          technology enablement to create scalable, high-performing organizations.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <CapabilityModal cap={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
