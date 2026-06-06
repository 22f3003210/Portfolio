import { motion } from 'framer-motion';

export function RetailStoreSketch() {
  return (
    <div className="absolute right-[0px] top-[50px] opacity-75 z-0">
      <svg width="280" height="220" viewBox="0 0 280 220">
        <defs>
          <filter id="sglow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Outer frame */}
        <rect x="30" y="15" width="220" height="150" fill="none" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="5 4" />
        {/* Building boundary */}
        <motion.g animate={{ opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 4 }} filter="url(#sglow)">
          <rect x="55" y="35" width="170" height="100" fill="none" stroke="#3B82F6" strokeWidth="2" />
          {/* Entrance */}
          <rect x="115" y="115" width="50" height="20" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
          {/* Counters */}
          <rect x="70" y="52" width="38" height="20" fill="none" stroke="#60A5FA" />
          <rect x="121" y="52" width="38" height="20" fill="none" stroke="#60A5FA" />
          <rect x="172" y="52" width="38" height="20" fill="none" stroke="#60A5FA" />
          {/* Sections */}
          <rect x="70" y="84" width="60" height="25" fill="none" stroke="#60A5FA" />
          <rect x="150" y="84" width="60" height="25" fill="none" stroke="#60A5FA" />
          {/* Walkway */}
          <line x1="140" y1="35" x2="140" y2="135" stroke="#2563EB" strokeDasharray="4 3" />
          {/* Manager cabin */}
          <rect x="178" y="35" width="47" height="40" fill="none" stroke="#2563EB" />
        </motion.g>
        {/* Isometric top projection */}
        <motion.g animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <polygon points="55,35 80,15 250,15 225,35" fill="none" stroke="#60A5FA" strokeWidth="1" />
          <polygon points="225,35 250,15 250,135 225,135" fill="none" stroke="#60A5FA" strokeWidth="1" />
        </motion.g>
        {/* Dimension label */}
        <text x="140" y="178" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">RETAIL FLOOR ARCHITECTURE</text>
        <line x1="40" y1="170" x2="240" y2="170" stroke="#94A3B8" strokeWidth="0.8" />
        {/* Animated scan line */}
        <motion.rect
          animate={{ x: [55, 225, 55] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          x="55" y="35" width="2" height="100"
          fill="#93C5FD" opacity="0.8"
        />
        {/* Tag */}
        <motion.g animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
          <rect x="0" y="60" width="55" height="24" rx="6" fill="white" stroke="#D9E2F2" />
          <text x="27" y="75" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0b2341">JEWELLERY STORE</text>
        </motion.g>
      </svg>
    </div>
  );
}
