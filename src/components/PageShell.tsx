import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { logPageView, logClickEvent } from '../lib/supabase';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Log page view on path changes
    logPageView(location.pathname, document.referrer);

    // 2. Setup global click listeners for all interactive CTAs
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let current: HTMLElement | null = target;
      
      while (current && current !== document.body) {
        if (
          current.tagName === 'A' ||
          current.tagName === 'BUTTON' ||
          current.getAttribute('role') === 'button'
        ) {
          // Identify button by ID, href, text content, or general tag name
          const elementId = current.id || 
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

  useEffect(() => {
    let typedKeys = '';
    const targetSequence = 'abc123';

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      typedKeys += e.key;
      if (typedKeys.length > targetSequence.length) {
        typedKeys = typedKeys.slice(-targetSequence.length);
      }

      if (typedKeys === targetSequence) {
        const currentlyVisible = localStorage.getItem('portal_link_visible') === 'true';
        if (currentlyVisible) {
          localStorage.removeItem('portal_link_visible');
          window.dispatchEvent(new Event('portal_locked'));
          alert('🔒 Client Portal hidden from navigation.');
        } else {
          localStorage.setItem('portal_link_visible', 'true');
          window.dispatchEvent(new Event('portal_unlocked'));
          alert('🔓 Client Portal unlocked and added to navigation.');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    </div>
  );
}
