import { motion } from 'framer-motion';

export function WhiteboardScene() {
  return (
    <div className="absolute left-[8px] top-[50px] z-10">
      <svg width="210" height="195" viewBox="0 0 210 195">
        {/* Board */}
        <rect x="10" y="8" width="175" height="125" rx="6" fill="white" stroke="#d0dbe8" strokeWidth="2" />
        {/* Header bar */}
        <rect x="10" y="8" width="175" height="22" rx="6" fill="#0b2341" />
        <rect x="10" y="22" width="175" height="8" fill="#0b2341" />
        <text x="97" y="22" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="800">CURRENT STATE</text>
        {/* Bullets */}
        <circle cx="26" cy="48" r="3" fill="#e74c3c" />
        <text x="34" y="52" fill="#374151" fontSize="8">Manual Processes</text>
        <circle cx="26" cy="64" r="3" fill="#e74c3c" />
        <text x="34" y="68" fill="#374151" fontSize="8">Data in Silos</text>
        <circle cx="26" cy="80" r="3" fill="#e74c3c" />
        <text x="34" y="84" fill="#374151" fontSize="8">Limited Visibility</text>
        <circle cx="26" cy="96" r="3" fill="#e74c3c" />
        <text x="34" y="100" fill="#374151" fontSize="8">Reactive Decisions</text>
        {/* Sticky notes */}
        <rect x="128" y="42" width="42" height="32" rx="2" fill="#FEF9C3" stroke="#FDE68A" />
        <rect x="136" y="78" width="38" height="28" rx="2" fill="#DCFCE7" stroke="#86EFAC" />
        {/* Animated trend line */}
        <motion.path
          d="M22 116 L55 106 L88 110 L118 94 L158 78"
          fill="none" stroke="#1f5fbf" strokeWidth="2" strokeLinecap="round"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        {/* Easel legs */}
        <line x1="32" y1="133" x2="22" y2="180" stroke="#b09878" strokeWidth="3" strokeLinecap="round" />
        <line x1="162" y1="133" x2="172" y2="180" stroke="#b09878" strokeWidth="3" strokeLinecap="round" />
        <line x1="28" y1="162" x2="168" y2="162" stroke="#b09878" strokeWidth="2" />
      </svg>
    </div>
  );
}
