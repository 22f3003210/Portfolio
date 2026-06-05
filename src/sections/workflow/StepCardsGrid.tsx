import type { Workflow } from '../../data/workflows';
import { StepCard } from './StepCard';

interface StepCardsGridProps {
  workflow: Workflow;
}

export function StepCardsGrid({ workflow }: StepCardsGridProps) {
  return (
    <section className="bg-warm-white section-padding-lg">
      <div className="content-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workflow.steps.map((step, index) => (
            <StepCard key={step.number} step={step} isOdd={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
