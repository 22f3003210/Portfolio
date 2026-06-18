import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface PortalContextType {
  /** Whether the "Retail Space" link is visible in the navbar (shown via hotkey). */
  isPortalVisible: boolean;
  /** Whether the user has authenticated inside the portal with the passcode. */
  isPortalAuthenticated: boolean;
  /** Called by the hotkey listener to reveal the portal nav link. */
  showPortal: () => void;
  /** Called by Lock Portal or hotkey toggle — hides link and clears auth. */
  hidePortal: () => void;
  /** Called after successful passcode entry inside the portal. */
  setPortalAuthenticated: (val: boolean) => void;
}

const PortalContext = createContext<PortalContextType | null>(null);

export function PortalProvider({ children }: { children: ReactNode }) {
  // Read initial states from localStorage to survive page refreshes
  const [isPortalVisible, setIsPortalVisible] = useState(false);
  const [isPortalAuthenticated, setIsPortalAuthenticated] = useState(() => {
    return localStorage.getItem('portal_authenticated') === 'true';
  });

  const showPortal = () => {
    setIsPortalVisible(true);
    window.dispatchEvent(new Event('portal_unlocked'));
  };

  const hidePortal = () => {
    setIsPortalVisible(false);
    setIsPortalAuthenticated(false);
    localStorage.setItem('portal_authenticated', 'false');
    window.dispatchEvent(new Event('portal_locked'));
  };

  const setPortalAuthenticated = (val: boolean) => {
    setIsPortalAuthenticated(val);
    localStorage.setItem('portal_authenticated', val ? 'true' : 'false');
  };

  return (
    <PortalContext.Provider
      value={{
        isPortalVisible,
        isPortalAuthenticated,
        showPortal,
        hidePortal,
        setPortalAuthenticated,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const ctx = useContext(PortalContext);
  if (!ctx) throw new Error('usePortal must be used within PortalProvider');
  return ctx;
}
