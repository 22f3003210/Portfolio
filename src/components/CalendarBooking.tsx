import { X, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

// Configurable Calendly or Cal.com booking link
const BOOKING_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/scale-with-abraham/30min';

export function CalendarBooking({ isOpen, onClose }: CalendarBookingProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white border-2 border-navy w-full max-w-[850px] h-[85vh] shadow-2xl relative flex flex-col rounded-none overflow-hidden">
        {/* Header */}
        <div className="bg-navy text-white px-6 py-4 flex justify-between items-center select-none shrink-0">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-gold" />
            <h3 className="font-extrabold text-base md:text-lg uppercase tracking-wider">Book a 30‑Min Architecture Call</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Embedded Calendly / Cal.com Iframe */}
        <div className="w-full flex-1 bg-white relative">
          <iframe
            src={`${BOOKING_URL}?embed=true`}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Consulting Scheduler"
            className="w-full h-full min-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
