interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'plain' | 'icon' | 'pill';
  className?: string;
}

export function SectionLabel({ children, variant = 'plain', className = '' }: SectionLabelProps) {
  if (variant === 'pill') {
    return (
      <span
        className={`inline-block px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-gold border border-border-gold rounded-none ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === 'icon') {
    return (
      <span
        className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-gold ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.08em] text-gold ${className}`}
    >
      {children}
    </span>
  );
}
