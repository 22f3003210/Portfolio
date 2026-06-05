import { Link } from 'react-router-dom';
import type { Workflow } from '../data/workflows';
import { WorkflowIcon } from './WorkflowIcon';

interface WorkflowCardProps {
  workflow: Workflow;
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  return (
    <Link
      to={`/workflows/${workflow.slug}`}
      className="group block bg-white border border-[#EAE8E2] p-5 text-center flex flex-col items-center justify-between h-full hover:border-[#0B4F6C] hover:shadow-lg transition-all duration-300 relative select-none"
    >
      <div className="flex flex-col items-center w-full">
        {/* Solid circular backdrop with white cartoon icon */}
        <div className="w-14 h-14 rounded-full bg-[#0B4F6C] flex items-center justify-center text-white mb-4 group-hover:bg-[#EA580C] transition-colors duration-300 shadow-sm">
          <WorkflowIcon id={workflow.id} className="w-9 h-9" white />
        </div>

        {/* Centered bold title */}
        <h3 className="text-[17px] font-extrabold text-[#0A0A0A] mb-1 tracking-tight group-hover:text-[#0B4F6C] transition-colors duration-300">
          {workflow.name}
        </h3>

        {/* Centered category/description */}
        <p className="text-[12px] text-[#525252] mb-3 leading-relaxed font-semibold">
          {workflow.category}
        </p>

        {/* Metric text - clean, no inner red rectangle */}
        {workflow.metrics.length > 0 && (
          <p className="text-[10px] font-black uppercase tracking-widest text-[#EA580C] mb-2">
            {workflow.metrics[0]}
          </p>
        )}
      </div>

      {/* Tighter bottom text link */}
      <div className="pt-3 border-t border-[#EAE8E2] w-full flex justify-center mt-2">
        <span className="text-[13px] font-bold text-[#0B4F6C] group-hover:text-[#EA580C] transition-colors duration-300 flex items-center gap-1">
          Read More <span className="text-[11px] transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
