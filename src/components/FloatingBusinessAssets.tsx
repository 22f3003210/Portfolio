import { motion } from 'framer-motion';

export function FloatingBusinessAssets() {
  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {/* Blueprint roll */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-[10px] top-[200px]"
      >
        <svg width="100" height="60" viewBox="0 0 100 60">
          <ellipse cx="15" cy="30" rx="12" ry="22" fill="#E5EDF9" stroke="#BFD1EA" />
          <rect x="15" y="8" width="75" height="44" fill="#F8FBFF" stroke="#BFD1EA" />
          <line x1="26" y1="18" x2="78" y2="18" stroke="#1f5fbf" strokeWidth="0.8" />
          <line x1="26" y1="28" x2="72" y2="28" stroke="#1f5fbf" strokeWidth="0.8" />
          <line x1="26" y1="38" x2="78" y2="38" stroke="#1f5fbf" strokeWidth="0.8" />
        </svg>
      </motion.div>
      {/* Strategy books */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[10px] bottom-[80px]"
      >
        <svg width="90" height="80" viewBox="0 0 90 80">
          <rect x="5" y="52" width="80" height="14" rx="2" fill="#0b2341" />
          <rect x="8" y="38" width="80" height="14" rx="2" fill="#1f5fbf" />
          <rect x="11" y="24" width="80" height="14" rx="2" fill="#8bc34a" />
          <text x="50" y="34" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">STRATEGY</text>
          <text x="50" y="48" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">OPERATIONS</text>
          <text x="50" y="62" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">KPI SYSTEMS</text>
        </svg>
      </motion.div>
      {/* KPI efficiency widget */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-[20px] top-[10px]"
      >
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg w-[130px]">
          <div className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Store Efficiency</div>
          <div className="mt-1 text-2xl font-black text-[#0b2341]">91%</div>
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100">
            <motion.div
              animate={{ width: ['40%', '91%', '40%'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-1.5 rounded-full bg-[#8bc34a]"
            />
          </div>
        </div>
      </motion.div>
      {/* Growth card */}
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-[230px] top-[5px]"
      >
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xl w-[120px]">
          <div className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Growth Index</div>
          <div className="mt-1 text-2xl font-black text-[#1f5fbf]">+42%</div>
          <div className="text-[8px] text-gray-500">Operational Perf.</div>
        </div>
      </motion.div>
    </div>
  );
}
