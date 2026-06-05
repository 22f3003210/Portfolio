interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1">
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-3xl md:text-[32px] font-bold text-white leading-tight">{value}</span>
      <span className="text-xs font-medium uppercase tracking-[0.05em] text-white/70">{label}</span>
    </div>
  );
}
