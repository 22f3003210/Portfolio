import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface GoldButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export function GoldButton({ children, to, href, onClick, className = '', fullWidth = false, icon, type = 'button' }: GoldButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-white font-semibold text-sm rounded-none transition-all duration-200 hover:bg-gold-light hover:shadow-gold ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {icon}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {icon}
      {children}
    </button>
  );
}
