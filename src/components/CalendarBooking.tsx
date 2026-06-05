import { useEffect, useRef } from 'react';
import { X, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendarBooking({ isOpen, onClose }: CalendarBookingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const loadWidget = () => {
      // @ts-ignore
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = ''; // Clear container
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/scale-with-abraham/30min',
          parentElement: containerRef.current,
          pageSettings: {
            hideLandingPageDetails: true,
            hideGdprBanner: true
          }
        });
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = loadWidget;
    } else {
      // Small timeout ensures the DOM node containerRef.current is fully mounted by React first
      const timer = setTimeout(loadWidget, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white border-2 border-navy w-full max-w-[1060px] h-[90vh] max-h-[780px] shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="bg-navy text-white px-6 py-4 flex justify-between items-center select-none shrink-0">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-gold" />
            <h3 className="font-extrabold text-base md:text-lg uppercase tracking-wider">Schedule a 30‑Min Architecture Call</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container (Official Calendly Inline Widget injected here) */}
        <div className="flex-1 w-full overflow-hidden bg-gray-50 relative flex items-center justify-center">
          {/* Premium Spinner Loader */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 pointer-events-none select-none z-0">
            <div className="w-10 h-10 border-4 border-navy border-t-gold rounded-full animate-spin mb-3"></div>
            <p className="text-[10px] font-black text-navy/60 uppercase tracking-widest font-mono">Loading scheduler...</p>
          </div>
          {/* We point parentElement to this div ref, Calendly will insert the iframe inside it */}
          <div 
            ref={containerRef}
            className="w-full h-full relative z-10" 
            style={{ minWidth: '320px', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}



