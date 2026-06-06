import { motion } from 'framer-motion';

export function BusinessArchitect() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="absolute left-[195px] top-[140px] z-20"
    >
      <svg width="160" height="240" viewBox="0 0 160 240">
        {/* Head */}
        <circle cx="80" cy="44" r="22" fill="#f4c8a0" />
        {/* Hair */}
        <path d="M58 40 C58 22 102 22 102 40 L102 46 C88 34 72 34 58 46 Z" fill="#1a0a00" />
        {/* Neck */}
        <rect x="74" y="64" width="12" height="12" fill="#f4c8a0" />
        {/* Jacket */}
        <path d="M56 76 C56 68 104 68 104 76 L112 144 L48 144 Z" fill="#0b2341" />
        {/* Shirt collar */}
        <path d="M75 76 L80 86 L85 76 Z" fill="white" />
        {/* Tie */}
        <path d="M78 86 L77 118 L80 123 L83 118 L82 86 Z" fill="#1f5fbf" />
        {/* Left arm — raised, pointing at whiteboard */}
        <path d="M56 88 C48 80 40 65 30 58" stroke="#0b2341" strokeWidth="11" fill="none" strokeLinecap="round" />
        <circle cx="28" cy="56" r="6" fill="#f4c8a0" />
        {/* Right arm */}
        <path d="M104 88 C110 98 114 110 112 124" stroke="#0b2341" strokeWidth="11" fill="none" strokeLinecap="round" />
        {/* Legs */}
        <rect x="60" y="142" width="13" height="40" rx="6" fill="#1a1a2e" />
        <rect x="87" y="142" width="13" height="40" rx="6" fill="#1a1a2e" />
        {/* Shoes */}
        <ellipse cx="66" cy="184" rx="15" ry="6" fill="#0a0a14" />
        <ellipse cx="93" cy="184" rx="15" ry="6" fill="#0a0a14" />
      </svg>
    </motion.div>
  );
}
