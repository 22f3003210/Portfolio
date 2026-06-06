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
    iconBg: '#EFF6FF',
    iconBorder: '#BFDBFE',
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
    accent: '#B45309',
    iconBg: '#FFFBEB',
    iconBorder: '#FDE68A',
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
    iconBg: '#ECFDF5',
    iconBorder: '#A7F3D0',
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
    accent: '#6D28D9',
    iconBg: '#F5F3FF',
    iconBorder: '#DDD6FE',
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
    accent: '#BE123C',
    iconBg: '#FFF1F2',
    iconBorder: '#FECDD3',
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
    accent: '#0369A1',
    iconBg: '#F0F9FF',
    iconBorder: '#BAE6FD',
  },
] as const;

type Capability = (typeof capabilities)[number];

// ─── Modal ───────────────────────────────────────────────────────────────────

function CapabilityModal({ cap, onClose }: { cap: Capability; onClose: () => void }) {
  const { Icon, title, tag, description, subCaps, accent, iconBg, iconBorder } = cap;
  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.26, ease: 'easeOut' }}
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className="h-1.5" style={{ background: accent }} />

        {/* Header */}
        <div className="px-7 pt-6 pb-5 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: iconBg, border: `1.5px solid ${iconBorder}` }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} />
              </div>
              <div>
                <span
                  className="text-[9px] font-black uppercase tracking-widest font-mono block mb-1"
                  style={{ color: accent }}
                >
                  {tag}
                </span>
                <h3 className="text-lg font-extrabold uppercase tracking-tight" style={{ color: accent }}>
                  {title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 transition-colors p-1 flex-shrink-0 mt-0.5"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-500 font-medium leading-relaxed mt-4">{description}</p>
        </div>

        {/* Sub-capabilities */}
        <div className="px-7 py-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono block mb-4">
            Sub-Capabilities
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {subCaps.map((sub) => (
              <li
                key={sub}
                className="flex items-center gap-2.5 text-xs font-semibold text-navy bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                {sub}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-7 pb-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90"
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

function CapabilityCard({ cap, onOpen }: { cap: Capability; onOpen: () => void }) {
  const { Icon, title, tag, description, accent, iconBg, iconBorder } = cap;
  return (
    <button
      onClick={onOpen}
      className="group text-left w-full h-full bg-white border border-gray-200 rounded-2xl
        hover:shadow-xl hover:-translate-y-1 hover:border-transparent
        transition-all duration-300 ease-out p-6 flex flex-col gap-4"
      aria-label={`Open ${title} details`}
    >
      {/* Icon row */}
      <div className="flex items-start justify-between gap-2">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: iconBg, border: `1.5px solid ${iconBorder}` }}
        >
          <Icon className="w-5 h-5" style={{ color: accent }} />
        </div>
        <ChevronRight
          className="w-4 h-4 text-gray-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300 mt-1 flex-shrink-0"
          style={{ color: accent + '88' }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-1.5 flex-1">
        <span
          className="text-[9px] font-black uppercase tracking-widest font-mono"
          style={{ color: accent }}
        >
          {tag}
        </span>
        <h3
          className="text-sm font-extrabold uppercase tracking-tight leading-snug"
          style={{ color: accent }}
        >
          {title}
        </h3>
        <p className="text-xs text-gray-500 font-medium leading-relaxed mt-1">
          {description}
        </p>
      </div>

      {/* Footer link */}
      <div
        className="flex items-center gap-1.5 pt-3 border-t border-gray-100 text-[10px] font-black uppercase tracking-widest transition-colors duration-200"
        style={{ color: accent + 'aa' }}
      >
        View Sub-Capabilities
        <ChevronRight className="w-3 h-3" />
      </div>
    </button>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function CoreCapabilitiesSection() {
  const [selected, setSelected] = useState<Capability | null>(null);

  return (
    <section id="core-capabilities" className="bg-[#F4F6F8] py-20 md:py-28 px-6">
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
          <p className="text-sm text-gray-500 font-medium leading-relaxed mb-3 max-w-2xl">
            A structured approach to understanding business challenges, improving operational
            performance, and enabling sustainable growth through systems thinking, process
            excellence, and decision intelligence.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-gold pl-3 max-w-2xl">
            My expertise spans business analysis, transformation strategy, operational excellence,
            performance management, retail optimization, and technology enablement — working together
            to build scalable, high-performing organizations.
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
              transition={{ duration: 0.4, delay: i * 0.07 }}
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
