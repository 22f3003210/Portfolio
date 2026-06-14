import { motion } from 'framer-motion';

const layers = [
  { title: 'BUSINESS STRATEGY',        bg: '#0b2341', accent: '#3a6fd8' },
  { title: 'PEOPLE & ROLES',           bg: '#1a4a9a', accent: '#4a7fe8' },
  { title: 'PROCESSES & WORKFLOWS',    bg: '#1a6bbc', accent: '#5a95e8' },
  { title: 'DATA & SYSTEMS',           bg: '#0e7e8a', accent: '#2abcc8' },
  { title: 'PERFORMANCE & GOVERNANCE', bg: '#3e6e1a', accent: '#8bc34a' },
];

export function ArchitectureStack3D() {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-blue-400/20 blur-xl" />
      <div className="text-center mb-2">
        <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">
          Target Operating Model
        </span>
      </div>
      {layers.map((layer, index) => (
        <motion.div
          key={layer.title}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, delay: index * 0.2, repeat: Infinity }}
          whileHover={{ scale: 1.02, x: 3 }}
          className="relative"
          style={{ zIndex: 100 - index, marginTop: index === 0 ? 0 : 2 }}
        >
          <div
            className="flex items-center px-3 py-2.5 gap-2.5"
            style={{ background: layer.bg }}
          >
            <div
              className="w-1 h-6 rounded-full flex-shrink-0"
              style={{ background: layer.accent }}
            />
            <span className="text-white text-[10px] font-black uppercase tracking-wide">
              {layer.title}
            </span>
          </div>
        </motion.div>
      ))}
      <div className="mt-2 flex items-center justify-center gap-2">
        <div className="h-px flex-1 bg-[#1f5fbf]/20" />
        <span className="text-[7px] font-black uppercase tracking-widest text-[#1f5fbf]/50">
          Business Architecture Framework
        </span>
        <div className="h-px flex-1 bg-[#1f5fbf]/20" />
      </div>
    </div>
  );
}
