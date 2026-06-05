import { X, Calendar as CalendarIcon, Mail, Phone, ExternalLink } from 'lucide-react';

interface CalendarBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

// Configurable Calendly or Cal.com booking link
const BOOKING_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/scale-with-abraham/30min';

// Check if the link is still the default placeholder
const isPlaceholder = BOOKING_URL === 'https://calendly.com/scale-with-abraham/30min';

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

        {/* Embedded Iframe or Custom Fallback */}
        <div className="w-full flex-1 bg-white relative overflow-y-auto">
          {isPlaceholder ? (
            <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 h-full max-w-xl mx-auto gap-6">
              <Mail className="w-16 h-16 text-gold" />
              <h4 className="text-xl md:text-2xl font-black text-navy uppercase tracking-tight">Let's Connect Directly</h4>
              <p className="text-sm text-text-secondary leading-relaxed font-semibold">
                I am currently initializing my Google Calendar and Calendly schedule integrations. 
                In the meantime, please send me an email or call directly to lock in a time slot!
              </p>
              
              <div className="flex flex-col gap-3 w-full pt-2">
                <a 
                  href="mailto:scale.with.abraham@gmail.com?subject=Consulting%20Architecture%20Call%20Booking"
                  className="w-full py-3 bg-navy text-white font-bold hover:bg-navy/95 text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Email: scale.with.abraham@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+919160863406"
                  className="w-full py-3 bg-white border border-navy text-navy font-bold hover:bg-gray-50 text-xs uppercase tracking-widest shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#8CC63F]" />
                  <span>Call: +91 9160863406</span>
                </a>
              </div>

              <div className="border-t border-gray-150 w-full pt-6 text-center">
                <span className="text-[10px] font-bold text-text-secondary uppercase block mb-1">Are you the administrator?</span>
                <a 
                  href="https://calendly.com/signup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-[#0170B9] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Set up your Calendly account</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={`${BOOKING_URL}?embed=true`}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Consulting Scheduler"
              className="w-full h-full min-h-[500px]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
