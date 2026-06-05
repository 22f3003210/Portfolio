interface WorkflowIconProps {
  id: number;
  className?: string;
  white?: boolean;
}

export function WorkflowIcon({ id, className = 'w-16 h-16', white = false }: WorkflowIconProps) {
  // Common styles
  const strokeColor = white ? '#ffffff' : '#0B4F6C'; // White or Deep Teal
  const accentColor = white ? 'rgba(255, 255, 255, 0.8)' : '#EA580C'; // Semi-transparent white or Burnt Orange

  switch (id) {
    case 1: // Procure-to-Pay (P2P) - Box delivery + truck/rate arrow
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Crate/Box */}
          <rect x="12" y="24" width="40" height="28" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 24L32 10L52 24" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="32" y1="10" x2="32" y2="52" stroke={strokeColor} strokeWidth="2" strokeDasharray="3 3" />
          {/* Arrow pointing up */}
          <path d="M44 14H50V20" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 20L50 14" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          {/* Sparkles */}
          <circle cx="8" cy="14" r="2" fill={accentColor} />
          <circle cx="56" cy="36" r="1.5" fill={accentColor} />
        </svg>
      );

    case 2: // Order-to-Cash (O2C) - Cash register / POS swiping card
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Monitor/POS screen */}
          <rect x="10" y="12" width="44" height="28" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 40L14 52H50L46 40" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Credit Card swiping */}
          <rect x="36" y="22" width="22" height="14" stroke={accentColor} strokeWidth="2" fill="white" strokeLinejoin="round" />
          <line x1="36" y1="26" x2="58" y2="26" stroke={accentColor} strokeWidth="1.5" />
          {/* Screen details */}
          <circle cx="20" cy="22" r="3" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="26" x2="32" y1="20" y2="20" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="26" x2="30" y1="24" y2="24" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Sparkles */}
          <circle cx="54" cy="10" r="2" fill={accentColor} />
        </svg>
      );

    case 3: // Inventory Management - Shelf + gold bars + magnifying glass
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Stacked Gold Bars */}
          <path d="M12 40L16 32H36L40 40H12Z" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 32L28 24H48L52 32H24Z" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 48L20 40H40L44 48H16Z" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          {/* Magnifying Glass */}
          <circle cx="44" cy="40" r="8" stroke={accentColor} strokeWidth="2" fill="white" />
          <line x1="50" y1="46" x2="58" y2="54" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Sparkles */}
          <circle cx="10" cy="24" r="2" fill={accentColor} />
          <circle cx="54" cy="16" r="1.5" fill={accentColor} />
        </svg>
      );

    case 4: // Commodity Costing Engine - Balance Scale (gold ↔ currency)
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Scale stand */}
          <path d="M32 12V52" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M18 52H46" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M14 18H50" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Scale pans */}
          <path d="M14 18L8 38H20L14 18Z" stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M50 18L44 38H56L50 18Z" stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" />
          {/* Gold Bar in left pan */}
          <rect x="10" y="32" width="8" height="4" stroke={accentColor} strokeWidth="1.5" fill="white" />
          {/* Rupee symbol / coin in right pan */}
          <circle cx="50" cy="33" r="3.5" stroke={accentColor} strokeWidth="1.5" fill="white" />
          {/* Sparkles */}
          <circle cx="32" cy="8" r="2" fill={accentColor} />
        </svg>
      );

    case 5: // CRM Growth Engine - Megaphone emitting hearts
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Megaphone */}
          <path d="M8 24H18L36 12V48L18 36H8C6.89543 36 6 35.1046 6 34V26C6 24.8954 6.89543 24 8 24Z" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 36V44C26 46.2091 24.2091 48 22 48H18" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Floating Hearts */}
          <path d="M44 22C42 20 40 22 40 24C40 27 44 30 44 30C44 30 48 27 48 24C48 22 46 20 44 22Z" stroke={accentColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M52 34C50.5 32.5 49 34 49 35.5C49 37.7 52 40 52 40C52 40 55 37.7 55 35.5C55 34 53.5 32.5 52 34Z" stroke={accentColor} strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="54" cy="14" r="2.5" fill={accentColor} />
        </svg>
      );

    case 6: // Loss & Leakage Detection - Leaking pipe with a wrench fixing it
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Pipe */}
          <path d="M6 14H36V44H58" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Wrench tool */}
          <path d="M24 24L38 10C39.5 8.5 42 8.5 43.5 10L48 14.5C49.5 16 49.5 18.5 48 20L34 34" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M22 22C20.5 23.5 20.5 26 22 27.5L25 30.5C26.5 32 29 32 30.5 30.5L34 27" stroke={accentColor} strokeWidth="2" />
          {/* Droplet (leakage) */}
          <path d="M21 34C21 37.3137 18.3137 40 15 40C11.6863 40 9 37.3137 9 34C9 30 15 24 15 24C15 24 21 30 21 34Z" stroke={accentColor} strokeWidth="1.5" fill="white" />
        </svg>
      );

    case 7: // ERP-CRM-Finance - Three puzzle pieces fitting together
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Puzzle Piece 1 (ERP) */}
          <path d="M12 28H18C20 28 20 24 22 24C24 24 24 28 26 28H32V14H26C26 12 28 12 28 10C28 8 26 8 26 10V14H12V28Z" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          {/* Puzzle Piece 2 (CRM) */}
          <path d="M32 28H38C40 28 40 24 42 24C42.5 24 43 25 43.5 26M32 28V42H44V38C46 38 46 40 48 40C50 40 50 38 48 38V28H32Z" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          {/* Puzzle Piece 3 (Finance) */}
          <path d="M12 28V42H26V36C26 34 28 34 28 32C28 30 26 30 26 32V42M12 28H22" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          {/* Connect sparks */}
          <circle cx="28" cy="32" r="3" stroke={accentColor} strokeWidth="2" fill="white" />
          <circle cx="52" cy="18" r="2" fill={accentColor} />
        </svg>
      );

    case 8: // MCX Pricing Automation - Monitor with live graph + clock
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Graph Screen */}
          <rect x="6" y="14" width="40" height="26" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 34L20 24L28 30L38 18" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 40L10 48H36L32 40" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Clock */}
          <circle cx="46" cy="38" r="10" stroke={accentColor} strokeWidth="2" fill="white" />
          <path d="M46 32V38L51 41" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          {/* Sparkles */}
          <circle cx="48" cy="12" r="2" fill={accentColor} />
        </svg>
      );

    case 9: // Gold Saving Schemes - Piggy bank with gold coin entering
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Piggy body */}
          <path d="M14 38C14 26 22 18 34 18C46 18 52 26 52 38C52 44 48 46 44 48H22C18 46 14 44 14 38Z" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          {/* Snout */}
          <rect x="52" y="30" width="4" height="8" rx="2" stroke={strokeColor} strokeWidth="2" />
          {/* Ears */}
          <path d="M22 19L24 10L32 16" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          {/* Legs */}
          <rect x="22" y="48" width="6" height="8" stroke={strokeColor} strokeWidth="2" />
          <rect x="38" y="48" width="6" height="8" stroke={strokeColor} strokeWidth="2" />
          {/* Coin dropping */}
          <circle cx="34" cy="10" r="4.5" stroke={accentColor} strokeWidth="1.5" fill="white" />
          <line x1="34" y1="16" x2="34" y2="24" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Sparkles */}
          <circle cx="8" cy="34" r="2" fill={accentColor} />
        </svg>
      );

    case 10: // Store Operations SOP - Checklist board with checkmarks + storefront
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Clipboard */}
          <rect x="14" y="10" width="36" height="46" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round" />
          {/* Clipboard Clip */}
          <path d="M26 10V6H38V10" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Checkbox 1 */}
          <rect x="20" y="20" width="6" height="6" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M22 23L24 25L28 20" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          {/* Checkbox 2 */}
          <rect x="20" y="32" width="6" height="6" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M22 35L24 37L28 32" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          {/* SOP lines */}
          <line x1="30" y1="23" x2="44" y2="23" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="35" x2="44" y2="35" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="46" x2="44" y2="46" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Sparkles */}
          <circle cx="56" cy="14" r="2" fill={accentColor} />
        </svg>
      );

    case 11: // Old Gold Exchange - 3 circular recycle arrows around gold coin
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Recycling Arrows */}
          <path d="M32 10C42 10 50 18 50 28M50 28L54 24M50 28L46 24" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 34C48 44 38 52 28 52M28 52L32 56M28 52L32 48" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 46C12 42 10 32 14 22M14 22L10 26M14 22L18 26" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Gold Coin inside */}
          <circle cx="32" cy="31" r="9" stroke={accentColor} strokeWidth="2" fill="white" />
          <path d="M32 27V35" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M29 29H35" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 12: // Compliance & Audit - Shield + checkmark + document
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Document behind */}
          <rect x="22" y="8" width="28" height="38" stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="3 3" />
          {/* Shield */}
          <path d="M12 18V30C12 41 20 48 32 52C44 48 52 41 52 30V18L32 10L12 18Z" stroke={strokeColor} strokeWidth="2" fill="white" strokeLinejoin="round" />
          {/* Checkmark inside shield */}
          <path d="M22 30L28 36L42 22" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Sparkles */}
          <circle cx="56" cy="46" r="2" fill={accentColor} />
          <circle cx="10" cy="10" r="1.5" fill={accentColor} />
        </svg>
      );

    default:
      return null;
  }
}
