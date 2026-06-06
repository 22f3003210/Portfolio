import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Search,
  AlertTriangle,
  Layers,
  CheckCircle,
  Rocket,
  Target,
  Settings,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

// ─── Top process bar ─────────────────────────────────────────────────────────

const phases = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'DIAGNOSE',
    desc: "Understand what's working, what's broken, what's costing.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: 'DESIGN',
    desc: 'Build systems, KPIs and processes that drive results.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'DELIVER',
    desc: 'Enable growth through visibility and better decisions.',
  },
];

// ─── Bottom steps ─────────────────────────────────────────────────────────────

const steps = [
  { Icon: Search, label: 'ANALYZE', sub: 'Data, processes\nand performance' },
  { Icon: AlertTriangle, label: 'IDENTIFY GAPS', sub: 'Find root causes\nand bottlenecks' },
  { Icon: Layers, label: 'BUILD SYSTEMS', sub: 'Process design,\nKPI frameworks' },
  { Icon: CheckCircle, label: 'IMPLEMENT', sub: 'Execute with people,\ntools and discipline' },
  { Icon: Rocket, label: 'SCALE', sub: 'Sustainable growth\nwith strong systems' },
];

// ─── Dashboard Illustration ──────────────────────────────────────────────────

function DashboardIllustration() {
  const modules = [
    { icon: '🏪', label: 'STORE\nOPERATIONS' },
    { icon: '📦', label: 'INVENTORY' },
    { icon: '👥', label: 'SALES & CRM' },
    { icon: '🛒', label: 'PROCUREMENT' },
    { icon: '₹', label: 'FINANCE' },
    { icon: '📊', label: 'REPORTING\n& KPIs' },
  ];

  const outcomes = [
    { label: 'STORE PERFORMANCE', color: '#0B1E2E', icon: '🏬' },
    { label: 'CUSTOMER EXPERIENCE', color: '#0B1E2E', icon: '🤝' },
    { label: 'PROFITABLE GROWTH', color: '#0B1E2E', icon: '📈' },
  ];

  return (
    <div className="relative w-full flex items-center justify-center gap-3">
      {/* Main dashboard card */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 w-[320px] flex-shrink-0 overflow-hidden">
        {/* Header bar */}
        <div className="bg-[#0B1E2E] text-white text-center py-2.5 px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.15em]">Retail Operating System</span>
        </div>

        {/* Module grid */}
        <div className="p-3 grid grid-cols-3 gap-2">
          {modules.map((m) => (
            <div
              key={m.label}
              className="bg-[#F0F6FB] border border-[#D4E4EF] rounded-lg p-2 flex flex-col items-center gap-1 hover:bg-[#DDF0FF] transition-colors cursor-default"
            >
              <span className="text-lg leading-none">{m.icon}</span>
              <span className="text-[8px] font-black text-[#0B1E2E] text-center uppercase tracking-wide leading-tight whitespace-pre-line">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom accent row */}
        <div className="mx-3 mb-3 bg-[#0170B9] rounded-lg py-2 px-3 flex items-center gap-2">
          <span className="text-sm">📉</span>
          <span className="text-[9px] font-black text-white uppercase tracking-wider">Data & Insights</span>
        </div>

        {/* People figure — left (ladder person) */}
        <div className="absolute -left-10 bottom-0 select-none pointer-events-none">
          <svg width="60" height="110" viewBox="0 0 60 110">
            {/* Ladder */}
            <rect x="8" y="20" width="3" height="85" fill="#8B7355" rx="1" />
            <rect x="28" y="20" width="3" height="85" fill="#8B7355" rx="1" />
            {[30, 45, 60, 75].map((y) => (
              <rect key={y} x="8" y={y} width="23" height="3" fill="#A08060" rx="1" />
            ))}
            {/* Body */}
            <circle cx="42" cy="18" r="7" fill="#F4A261" />
            <rect x="35" y="25" width="14" height="22" fill="#1A73E8" rx="3" />
            <rect x="33" y="28" width="6" height="18" fill="#1A73E8" rx="2" />
            <rect x="42" y="28" width="6" height="18" fill="#1A73E8" rx="2" />
            <rect x="36" y="47" width="6" height="18" fill="#2D3A4A" rx="2" />
            <rect x="44" y="47" width="6" height="18" fill="#2D3A4A" rx="2" />
            {/* Arm reaching */}
            <rect x="49" y="26" width="10" height="4" fill="#F4A261" rx="2" transform="rotate(-30 49 26)" />
          </svg>
        </div>

        {/* Person right — pointing */}
        <div className="absolute -right-9 bottom-0 select-none pointer-events-none">
          <svg width="50" height="90" viewBox="0 0 50 90">
            <circle cx="25" cy="12" r="7" fill="#6C3E1E" />
            <rect x="18" y="19" width="14" height="22" fill="#2E7D32" rx="3" />
            <rect x="16" y="22" width="5" height="16" fill="#2E7D32" rx="2" />
            {/* Pointing arm */}
            <rect x="31" y="22" width="14" height="4" fill="#F4A261" rx="2" transform="rotate(-15 31 22)" />
            <rect x="18" y="41" width="6" height="18" fill="#1A1A2E" rx="2" />
            <rect x="26" y="41" width="6" height="18" fill="#1A1A2E" rx="2" />
          </svg>
        </div>
      </div>

      {/* Right outcome cards */}
      <div className="flex flex-col gap-2 flex-shrink-0">
        {outcomes.map((o) => (
          <div
            key={o.label}
            className="bg-white border border-gray-200 rounded-xl shadow-md px-3 py-2 flex items-center gap-2.5 w-[148px]"
          >
            <span className="text-lg">{o.icon}</span>
            <span className="text-[9px] font-black text-[#0B1E2E] uppercase leading-tight tracking-wide">
              {o.label}
            </span>
          </div>
        ))}

        {/* Dashed connector lines */}
        <svg className="absolute right-[148px] top-1/2 -translate-y-1/2 pointer-events-none" width="18" height="120" viewBox="0 0 18 120">
          {[20, 60, 100].map((y, i) => (
            <line key={i} x1="18" y1={y} x2="0" y2={y} stroke="#8CC63F" strokeWidth="1.5" strokeDasharray="3 2" />
          ))}
        </svg>
      </div>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <div className="bg-[#EEF3F8] w-full">

      {/* ── Top process bar ── */}
      <div className="bg-white border-b border-gray-200 py-3 px-6">
        <div className="max-w-[1200px] mx-auto flex items-start justify-end gap-8 lg:gap-12">
          {phases.map((p, i) => (
            <div key={p.title} className="flex items-start gap-3 max-w-[200px]">
              {/* Arrow connector */}
              {i > 0 && (
                <ArrowRight className="w-4 h-4 text-[#0170B9] flex-shrink-0 mt-1 -ml-6" />
              )}
              <div className="flex items-start gap-2">
                <span className="text-[#0170B9] mt-0.5 flex-shrink-0">{p.icon}</span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0B1E2E] block">
                    {p.title}
                  </span>
                  <span className="text-[10px] text-gray-500 leading-tight block mt-0.5">
                    {p.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main hero body ── */}
      <section className="py-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left content */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <span className="inline-block self-start px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#0170B9] border border-[#0170B9]/40 bg-white rounded-sm">
                Retail Business Management Consultant
              </span>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0B1E2E] uppercase tracking-tight leading-[1.0]">
                YOU CAN'T SCALE<br />
                <span className="text-[#0170B9]">WHAT YOU CAN'T SEE.</span>
              </h1>

              {/* Quote */}
              <p className="text-sm text-gray-600 font-medium italic leading-relaxed max-w-md">
                "The next decade of jewellery retail belongs to the systemized.
                The rest will be managed out of existence."
              </p>

              {/* Green separator */}
              <div className="w-10 h-1 bg-[#8CC63F] rounded-full" />

              {/* Body */}
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                I design the operational frameworks, KPI architectures,
                and decision systems that help retail businesses
                scale with confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#8CC63F] hover:bg-[#74A72D] text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-md transition-colors"
                >
                  Connect Me Now <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-[#0B1E2E] text-[#0B1E2E] text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-md transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book a 30-min call
                </a>
              </div>
            </motion.div>

            {/* Right illustration */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <DashboardIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom 5-step bar ── */}
      <div className="bg-white border-t border-gray-200 py-5 px-6">
        <div className="max-w-[1200px] mx-auto flex items-start justify-center gap-2 md:gap-0">
          {steps.map(({ Icon, label, sub }, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center text-center px-4 md:px-6 max-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-[#0B1E2E] flex items-center justify-center mb-2 flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-[#0B1E2E] block">
                  {label}
                </span>
                <span className="text-[9px] text-gray-500 leading-tight mt-0.5 whitespace-pre-line">
                  {sub}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center gap-1 mb-6">
                  {[0, 1, 2].map((d) => (
                    <div key={d} className="w-1.5 h-1.5 rounded-full bg-[#0170B9]/30" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}