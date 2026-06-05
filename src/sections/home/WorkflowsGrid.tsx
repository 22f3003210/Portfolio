import { WorkflowCard } from '../../components/WorkflowCard';
import { ScrollReveal } from '../../components/ScrollReveal';
import { workflows } from '../../data/workflows';

export function WorkflowsGrid() {
  return (
    <section id="workflows" className="bg-warm-white py-20 md:py-[120px] px-6 select-none border-t border-border-light">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <ScrollReveal>
            <h2
              className="font-extrabold text-[#0A0A0A] mb-2 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Your Business?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-[14px] font-black text-[#0A0A0A] tracking-widest uppercase flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-[#EA580C]" />
              The Integrated Revenue Engine
            </div>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {workflows.map((workflow, index) => (
            <ScrollReveal key={workflow.id} delay={index * 0.05}>
              <WorkflowCard workflow={workflow} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
