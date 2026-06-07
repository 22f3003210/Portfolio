import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { logPageView, logClickEvent } from '../lib/supabase';
import { usePortal } from '../context/PortalContext';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const location = useLocation();
  const { isPortalVisible, showPortal, hidePortal } = usePortal();
  const [toast, setToast] = useState<{ msg: string; type: 'unlock' | 'lock' } | null>(null);

  // Keep a ref so the keydown handler always reads the latest state
  // without needing to re-register the listener on every state change.
  const portalVisibleRef = useRef(isPortalVisible);
  useEffect(() => {
    portalVisibleRef.current = isPortalVisible;
  }, [isPortalVisible]);

  const fireToast = (msg: string, type: 'unlock' | 'lock') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Scroll to top on pathname change (unless there is a hash)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // ── Page-view + click analytics ──────────────────────────────────────
  useEffect(() => {
    logPageView(location.pathname, document.referrer);

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let current: HTMLElement | null = target;

      while (current && current !== document.body) {
        if (
          current.tagName === 'A' ||
          current.tagName === 'BUTTON' ||
          current.getAttribute('role') === 'button'
        ) {
          const elementId =
            current.id ||
            current.getAttribute('href') ||
            current.textContent?.trim().slice(0, 40) ||
            current.tagName;
          const elementText = current.textContent?.trim().slice(0, 60) || '';
          logClickEvent(elementId, elementText, location.pathname);
          break;
        }
        current = current.parentElement;
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [location.pathname]);

  // ── Hotkey listener (registered once) ────────────────────────────────
  // Sequence: abc123  — toggles the Client Portal nav link visibility.
  // State is in-memory only; page refresh always resets to hidden.
  useEffect(() => {
    let typed = '';
    const SEQ = 'abc123';

    const handleKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') return;

      typed += e.key;
      if (typed.length > SEQ.length) typed = typed.slice(-SEQ.length);

      if (typed === SEQ) {
        typed = '';
        if (portalVisibleRef.current) {
          hidePortal();
          fireToast('Client Portal hidden. Enter hotkey again to re-open.', 'lock');
        } else {
          showPortal();
          fireToast('Client Portal unlocked and added to navigation.', 'unlock');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — uses refs for current values

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* ── Portal unlock / lock toast ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="portal-toast"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-5 right-5 z-[9999] flex items-center gap-3 bg-[#00203f] text-white pl-4 pr-5 py-3.5 shadow-2xl border-l-4 border-gold min-w-[260px]"
          >
            <span className="text-xl shrink-0">{toast.type === 'unlock' ? '🔓' : '🔒'}</span>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-gold">
                {toast.type === 'unlock' ? 'Portal Unlocked' : 'Portal Locked'}
              </p>
              <p className="text-xs font-semibold text-white/80 leading-snug">{toast.msg}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
