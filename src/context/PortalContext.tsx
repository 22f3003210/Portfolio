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
  // Pure in-memory state — resets automatically on every page refresh.
  const [isPortalVisible, setIsPortalVisible] = useState(false);
  const [isPortalAuthenticated, setIsPortalAuthenticated] = useState(false);

  const showPortal = () => {
    setIsPortalVisible(true);
    localStorage.setItem('portal_link_visible', 'true');
    window.dispatchEvent(new Event('portal_unlocked'));
  };

  const hidePortal = () => {
    setIsPortalVisible(false);
    setIsPortalAuthenticated(false);
    localStorage.setItem('portal_link_visible', 'false');
    window.dispatchEvent(new Event('portal_locked'));
  };

  return (
    <PortalContext.Provider
      value={{
        isPortalVisible,
        isPortalAuthenticated,
        showPortal,
        hidePortal,
        setPortalAuthenticated: setIsPortalAuthenticated,
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
