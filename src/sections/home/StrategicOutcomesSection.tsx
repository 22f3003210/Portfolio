import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Settings2, 
  BarChart3, 
  Coins, 
  Scaling 
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' } as const
});

const achievements = [
  {
    icon: TrendingUp,
    title: 'Improve Inventory Productivity',
    description: 'Unlock the full potential of inventory investments by improving stock movement, reducing dead stock, and increasing inventory turnover.'
  },
  {
    icon: Users,
    title: 'Enhance Customer Experience',
    description: 'Create memorable customer journeys through better service processes, stronger CRM practices, and consistent customer engagement.'
  },
  {
    icon: Settings2,
    title: 'Increase Operational Excellence',
    description: 'Standardize workflows, establish accountability, and reduce dependency on individuals through well-defined systems and SOPs.'
  },
  {
    icon: BarChart3,
    title: 'Enable Data-Driven Decisions',
    description: 'Provide visibility through dashboards, KPIs, and reporting systems that help leaders understand business behaviour, identify opportunities, and make informed decisions with confidence.'
  },
  {
    icon: Coins,
    title: 'Strengthen Profitability',
    description: 'Identify inefficiencies, optimize procurement and inventory management, and improve overall business performance.'
  },
  {
    icon: Scaling,
    title: 'Build Scalable Businesses',
    description: 'Create systems that support expansion, multi-branch operations, and long-term sustainable growth.'
  }
];

export function StrategicOutcomesSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-[0.15em] text-[#2d6215] block mb-3">Strategic Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2341] tracking-tight mb-4">
            What We Help Businesses Achieve
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium">
            We focus on building critical foundational blocks that allow retail jewellery enterprises to grow with predictability and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.05)}
                whileHover={{ y: -6, borderColor: '#2d6215', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
                className="bg-[#F8FAFC] border border-slate-200/50 hover:shadow-lg transition-all duration-300 rounded-xl p-6 md:p-8 flex flex-col gap-4 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#8bc34a]/10 to-[#1f5fbf]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                
                <div className="w-12 h-12 rounded-lg bg-[#0b2341]/5 flex items-center justify-center group-hover:bg-[#0b2341] transition-colors duration-300 z-10">
                  <Icon className="w-6 h-6 text-[#0b2341] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="flex items-center gap-2 z-10">
                  <span className="text-slate-500 text-xs font-black select-none">0{idx + 1}.</span>
                  <h3 className="text-base md:text-lg font-bold text-[#0b2341]">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium z-10">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
