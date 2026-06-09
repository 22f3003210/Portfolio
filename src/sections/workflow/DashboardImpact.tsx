import { TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

const impactMetrics = [
  { icon: TrendingUp, label: 'Revenue Growth', value: 'Enabled' },
  { icon: Shield, label: 'Loss Prevention', value: 'Active' },
  { icon: Zap, label: 'Efficiency Gain', value: 'Optimized' },
  { icon: BarChart3, label: 'Data Accuracy', value: '99.9%' },
];

export function DashboardImpact() {
  return (
    <section className="bg-[#f8fafc] border-t border-slate-200 py-16 md:py-20 select-none">
      <div className="content-max">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            <span className="text-slate-900">Dashboard </span>
            <span className="text-blue-700">Impact</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.1}>
              <div className="bg-white border border-slate-200 rounded-none p-6 text-center shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
                <metric.icon className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{metric.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.05em] text-slate-500">
                  {metric.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

