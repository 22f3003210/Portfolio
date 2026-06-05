import { TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

const impactMetrics = [
  { icon: TrendingUp, label: 'Revenue Growth', value: '+20%' },
  { icon: Shield, label: 'Loss Prevention', value: '₹9.8 Cr' },
  { icon: Zap, label: 'Efficiency Gain', value: '90%' },
  { icon: BarChart3, label: 'Data Accuracy', value: '98%' },
];

export function DashboardImpact() {
  return (
    <section className="bg-navy section-padding-lg">
      <div className="content-max">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Dashboard </span>
            <span className="text-gold">HBJ Jewels Impact</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.1}>
              <div className="bg-navy-light rounded-xl p-6 text-center border border-white/10">
                <metric.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-xs font-medium uppercase tracking-[0.05em] text-white/60">
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
