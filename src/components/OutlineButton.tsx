import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface OutlineButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'white' | 'dark';
  icon?: ReactNode;
  fullWidth?: boolean;
}

export function OutlineButton({ children, to, href, onClick, className = '', variant = 'dark', icon, fullWidth = false }: OutlineButtonProps) {
  const variantClasses = variant === 'white'
    ? 'border-white/30 text-white hover:border-gold hover:text-gold'
    : 'border-border-light text-text-secondary hover:border-gold hover:text-gold';

  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 border font-semibold text-sm rounded-none transition-all duration-200 ${variantClasses} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return <Link to={to} className={baseClasses}>{icon}{children}</Link>;
  }
  if (href) {
    return <a href={href} className={baseClasses}>{icon}{children}</a>;
  }
  return <button onClick={onClick} className={baseClasses}>{icon}{children}</button>;
}
