import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronUp, Clock, CircleCheck } from 'lucide-react';
import type { WorkflowStep } from '../../data/workflows';
import { OutlineButton } from '../../components/OutlineButton';

interface StepCardProps {
  step: WorkflowStep;
  isOdd: boolean;
}

export function StepCard({ step, isOdd }: StepCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      id={`step-${step.number}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-none p-6 ${
        isOdd ? 'bg-navy text-white' : 'bg-warm-cream text-text-primary'
      }`}
    >
      {/* Step number */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
        <span className="text-xs font-bold text-white">{step.number}</span>
      </div>

      {/* Icon */}
      <div className="text-3xl mb-3">{step.icon}</div>

      {/* Label */}
      <span className={`text-[10px] font-semibold uppercase tracking-[0.08em] text-gold`}>
        STEP {step.number}
      </span>

      {/* Title */}
      <h3 className={`text-lg font-semibold mt-1 mb-2 ${isOdd ? 'text-white' : 'text-text-primary'}`}>
        {step.title}
      </h3>

      {/* Description */}
      <p className={`text-sm mb-4 ${isOdd ? 'text-white/70' : 'text-text-secondary'}`}>
        {step.description}
      </p>

      {/* Bullets */}
      <ul className="space-y-2 mb-4">
        {step.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <span className={`text-sm ${isOdd ? 'text-white/80' : 'text-text-secondary'}`}>
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className={`flex items-center justify-between pt-4 border-t ${isOdd ? 'border-white/10' : 'border-border-light'}`}>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-1.5 text-xs ${isOdd ? 'text-white/60' : 'text-text-muted'}`}>
            <Clock className="w-3.5 h-3.5" /> {step.duration}
          </span>
          <span className={`flex items-center gap-1.5 text-xs ${isOdd ? 'text-white/60' : 'text-text-muted'}`}>
            <CircleCheck className="w-3.5 h-3.5" /> {step.output}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-none border transition-colors ${
            isOdd
              ? 'border-white/20 text-white/80 hover:border-gold hover:text-gold'
              : 'border-border-light text-text-secondary hover:border-gold hover:text-gold'
          }`}
        >
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          {expanded ? 'Collapse' : 'Expand'}
        </button>
        <OutlineButton
          variant={isOdd ? 'white' : 'dark'}
          className="text-xs px-3 py-1.5"
        >
          Details
        </OutlineButton>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`mt-4 pt-4 border-t ${isOdd ? 'border-white/10' : 'border-border-light'}`}>
              <p className={`text-sm ${isOdd ? 'text-white/60' : 'text-text-secondary'}`}>
                Detailed implementation notes, approval matrices, and system configurations for this
                step are available upon consultation. Each step includes SOP documentation, training
                materials, and dashboard configurations.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
