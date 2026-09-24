interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'plain' | 'icon' | 'pill';
  className?: string;
}

export function SectionLabel({ children, variant = 'plain', className = '' }: SectionLabelProps) {
  if (variant === 'pill') {
    return (
      <span
        className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#8a6320] border border-[#8a6320]/30 rounded-none ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === 'icon') {
    return (
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#8a6320] ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#8a6320]" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`text-xs font-bold uppercase tracking-[0.08em] text-[#8a6320] ${className}`}
    >
      {children}
    </span>
  );
}
