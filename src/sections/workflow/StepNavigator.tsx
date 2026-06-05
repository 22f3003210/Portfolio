import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Workflow } from '../../data/workflows';

interface StepNavigatorProps {
  workflow: Workflow;
}

export function StepNavigator({ workflow }: StepNavigatorProps) {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    workflow.steps.forEach((step) => {
      const el = document.getElementById(`step-${step.number}`);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveStep(step.number);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [workflow]);

  const scrollToStep = (stepNumber: number) => {
    const el = document.getElementById(`step-${stepNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-border-light py-3">
      <div className="content-max">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {workflow.steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => scrollToStep(step.number)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  activeStep === step.number
                    ? 'bg-gold text-white'
                    : 'border border-border-light text-text-secondary hover:border-gold hover:text-gold'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeStep === step.number ? 'bg-white text-gold' : 'bg-gray-100 text-text-muted'
                  }`}
                >
                  {step.number}
                </span>
                {step.title}
              </button>
              {index < workflow.steps.length - 1 && (
                <ArrowRight className="w-3 h-3 text-text-muted flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
