import { motion } from 'framer-motion';

function Person({
  x, y, suitColor, delay,
}: {
  x: number; y: number; suitColor: string; delay: number;
}) {
  return (
    <motion.g
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity }}
      transform={`translate(${x},${y})`}
    >
      <circle cx="0" cy="0" r="11" fill="#f0c4a0" />
      <path d="M-11 -2 C-8 -16 8 -16 11 -2 L11 2 C6 -4 -6 -4 -11 2 Z" fill="#1a0800" />
      <rect x="-4" y="9" width="8" height="6" fill="#f0c4a0" />
      <path d="M-13 17 C-9 11 9 11 13 17 L14 40 L-14 40 Z" fill={suitColor} />
      <path d="M-4 15 L0 24 L4 15 Z" fill="white" />
      <line x1="-11" y1="20" x2="-22" y2="29" stroke={suitColor} strokeWidth="5" strokeLinecap="round" />
      <line x1="11" y1="20" x2="22" y2="29" stroke={suitColor} strokeWidth="5" strokeLinecap="round" />
      <line x1="-4" y1="40" x2="-6" y2="56" stroke="#16162a" strokeWidth="5" strokeLinecap="round" />
      <line x1="4" y1="40" x2="6" y2="56" stroke="#16162a" strokeWidth="5" strokeLinecap="round" />
    </motion.g>
  );
}

export function TeamCollaboration() {
  return (
    <div className="absolute left-[10px] bottom-[10px] z-20">
      <svg width="320" height="190" viewBox="0 0 320 190">
        <defs>
          <radialGradient id="tglow2">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="160" cy="135" rx="120" ry="45" fill="url(#tglow2)" />
        {/* Table */}
        <motion.ellipse
          cx="160" cy="125" rx="105" ry="35"
          fill="white" stroke="#D7E3F4" strokeWidth="2"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <line x1="82" y1="140" x2="74" y2="180" stroke="#8B9BB5" strokeWidth="6" />
        <line x1="238" y1="140" x2="246" y2="180" stroke="#8B9BB5" strokeWidth="6" />
        {/* Blueprint on table */}
        <rect x="112" y="100" width="96" height="46" rx="4" fill="#EBF4FF" stroke="#1f5fbf" strokeWidth="1" opacity="0.9" />
        <text x="160" y="112" textAnchor="middle" fill="#0b2341" fontSize="5.5" fontWeight="800">TARGET OPERATING MODEL</text>
        <line x1="120" y1="118" x2="200" y2="118" stroke="#1f5fbf" strokeWidth="0.5" opacity="0.5" />
        <line x1="120" y1="124" x2="192" y2="124" stroke="#1f5fbf" strokeWidth="0.5" opacity="0.5" />
        <line x1="120" y1="130" x2="196" y2="130" stroke="#1f5fbf" strokeWidth="0.5" opacity="0.5" />
        {/* Laptop */}
        <rect x="62" y="103" width="34" height="22" rx="3" fill="#0b2341" />
        <rect x="57" y="125" width="44" height="4" rx="2" fill="#6B7280" />
        {/* Three people */}
        <Person x={84}  y={76} suitColor="#0b2341" delay={0}   />
        <Person x={160} y={58} suitColor="#1f5fbf" delay={0.5} />
        <Person x={236} y={76} suitColor="#0b2341" delay={1}   />
        {/* Metric cards */}
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <rect x="4" y="26" width="66" height="32" rx="8" fill="white" stroke="#D7E3F4" />
          <text x="37" y="38" textAnchor="middle" fontSize="7" fill="#64748B">SALES</text>
          <text x="37" y="50" textAnchor="middle" fontSize="11" fontWeight="800" fill="#10B981">+18%</text>
        </motion.g>
        <motion.g animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <rect x="250" y="22" width="66" height="32" rx="8" fill="white" stroke="#D7E3F4" />
          <text x="283" y="34" textAnchor="middle" fontSize="7" fill="#64748B">MARGIN</text>
          <text x="283" y="46" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1f5fbf">24.8%</text>
        </motion.g>
      </svg>
    </div>
  );
}
