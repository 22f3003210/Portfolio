interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium text-gold border border-gold/40 rounded-full ${className}`}>
      {children}
    </span>
  );
}
