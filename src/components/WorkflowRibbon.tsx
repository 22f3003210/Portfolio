import { motion } from 'framer-motion';
import { Search, Puzzle, Compass, Settings, TrendingUp } from 'lucide-react';

const workflow = [
  { title: 'ANALYZE',   desc: "Understand what's happening",    icon: Search },
  { title: 'DIAGNOSE',  desc: 'Find root causes and gaps',      icon: Puzzle },
  { title: 'DESIGN',    desc: 'Build the right operating model', icon: Compass },
  { title: 'IMPLEMENT', desc: 'Execute with discipline',         icon: Settings },
  { title: 'OPTIMIZE',  desc: 'Improve continuously',            icon: TrendingUp },
];

export function WorkflowRibbon() {
  return (
    <div className="relative">
      <p className="mb-1 text-center text-[10px] font-bold uppercase tracking-widest text-gray-500">
        I Help You Build
      </p>
      <p className="mb-5 text-center text-sm font-black uppercase tracking-wide text-[#1f5fbf]">
        Retail Business Systems
      </p>
      <div className="flex justify-center items-start gap-2">
        {workflow.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-center">
              <motion.div whileHover={{ y: -3 }} className="flex flex-col items-center">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full shadow-md"
                  style={{ background: index < 2 ? '#0b2341' : index < 4 ? '#1f5fbf' : '#8bc34a' }}
                >
                  <Icon className="text-white" size={18} />
                </div>
                <h4 className="mt-1.5 text-[7.5px] font-black uppercase tracking-wide text-[#0b2341]">
                  {item.title}
                </h4>
                <p className="mt-0.5 max-w-[72px] text-center text-[7px] text-gray-500 leading-tight">
                  {item.desc}
                </p>
              </motion.div>
              {index !== workflow.length - 1 && (
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mx-1 h-[2px] w-5 bg-[#1f5fbf] mb-7"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
