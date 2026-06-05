import { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle, Video } from 'lucide-react';
import { submitAppointment, getAppointments } from '../lib/supabase';

// 30-minute available slots
const AVAILABLE_SLOTS = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM'
];

interface CalendarBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendarBooking({ isOpen, onClose }: CalendarBookingProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [description, setDescription] = useState('');
  
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [generatedMeetingUrl, setGeneratedMeetingUrl] = useState('');

  // Get today's date format for date input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  // Fetch booked slots for the selected date to prevent double bookings
  useEffect(() => {
    if (!selectedDate) return;

    async function checkAvailability() {
      try {
        const appts = await getAppointments();
        // Filter appointments on this date and collect their time slots
        const activeBookings = appts
          .filter((appt) => appt.date === selectedDate && appt.status !== 'Cancelled')
          .map((appt) => appt.time_slot);
        setBookedSlots(activeBookings);
      } catch (err) {
        console.error('Error checking slot availability:', err);
      }
    }

    checkAvailability();
    setSelectedSlot(''); // Reset slot selection when date changes
  }, [selectedDate]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      setErrorMsg('Please select both a date and a time slot.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    // Generate a 100% free, unique video meeting room link on Jitsi Meet
    // Format: https://meet.jit.si/ScaleWithAbraham_Meeting_[RandomString]
    const cleanClientName = name.replace(/[^a-zA-Z0-9]/g, '');
    const randomId = Math.floor(100000 + Math.random() * 900000);
    const meetingUrl = `https://meet.jit.si/ScaleWithAbraham_Meeting_${cleanClientName}_${randomId}`;

    try {
      await submitAppointment({
        name,
        email,
        phone,
        company,
        date: selectedDate,
        timeSlot: selectedSlot,
        description: `Meeting Link: ${meetingUrl}\n\nNotes: ${description || 'No additional notes.'}`
      });
      setGeneratedMeetingUrl(meetingUrl);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setSelectedDate('');
      setSelectedSlot('');
      setDescription('');
    } catch (err: any) {
      console.error('Failed to submit booking:', err);
      setErrorMsg('Failed to secure your booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white border-2 border-navy w-full max-w-[550px] shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-navy text-white px-6 py-4 flex justify-between items-center select-none">
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

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {success ? (
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <CheckCircle className="w-16 h-16 text-[#8CC63F]" />
              <h4 className="text-xl font-extrabold text-navy uppercase tracking-tight">Booking Confirmed</h4>
              
              <div className="bg-blue-50 border border-blue-200 p-4 w-full text-left rounded-none">
                <span className="text-[10px] font-black text-[#0170B9] uppercase tracking-widest font-mono block mb-1">
                  Your Free Video Meeting Link
                </span>
                <p className="text-xs font-semibold text-text-secondary leading-relaxed mb-3">
                  A unique Google Meet alternative has been generated. You and Abraham can join this meeting room with one click:
                </p>
                <a 
                  href={generatedMeetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0170B9] hover:underline"
                >
                  <Video className="w-4 h-4 text-[#8CC63F]" />
                  <span className="break-all">{generatedMeetingUrl}</span>
                </a>
              </div>

              <p className="text-xs text-text-secondary max-w-sm font-semibold">
                This meeting has been logged in Abraham's system dashboard. Please bookmark the meeting link above to join at your scheduled time.
              </p>
              
              <button 
                onClick={() => { setSuccess(false); onClose(); }} 
                className="mt-2 px-6 py-2.5 bg-navy text-white font-bold hover:bg-navy/90 text-xs uppercase tracking-widest shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-3 flex items-center gap-2 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Step 1: Select Date & Time */}
              <div>
                <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-2">
                  Step 1: Choose Date & Time (100% Free)
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-text-primary uppercase block mb-1">Select Date</label>
                    <input 
                      type="date"
                      min={todayStr}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-text-primary uppercase block mb-1">Select Time Slot</label>
                    <select 
                      disabled={!selectedDate}
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      required
                      className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy bg-white disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">{selectedDate ? 'Choose Slot' : 'Select Date First'}</option>
                      {AVAILABLE_SLOTS.map((slot) => {
                        const isBooked = bookedSlots.includes(slot);
                        return (
                          <option key={slot} value={slot} disabled={isBooked}>
                            {slot} {isBooked ? '(Booked)' : ''}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Contact Details */}
              <div className="border-t border-gray-150 pt-4">
                <span className="text-[10px] font-black text-gold uppercase tracking-widest font-mono block mb-2">
                  Step 2: Business & Contact Info
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="text-xs font-bold text-text-primary uppercase block mb-1">Name</label>
                    <input 
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-text-primary uppercase block mb-1">Business Email</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@company.com"
                      className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-text-primary uppercase block mb-1">Phone Number</label>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-text-primary uppercase block mb-1">Jewellery Store / Company</label>
                    <input 
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Joyalukkas, Kalyan"
                      className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Systems bottlenecks description */}
              <div className="border-t border-gray-150 pt-4">
                <label className="text-xs font-bold text-text-primary uppercase block mb-1">
                  Describe your current system bottlenecks (ERP/CRM/Inventory)
                </label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  placeholder="Tell Abraham about the specific leaks or software issues you want to address."
                  className="w-full border border-gray-300 p-2.5 text-sm font-semibold rounded-none focus:outline-none focus:border-navy resize-none bg-white"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-150">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="px-5 py-2.5 border border-gray-300 text-text-secondary hover:bg-gray-50 text-xs font-bold uppercase transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={loading}
                  className="px-7 py-2.5 bg-navy text-white font-bold hover:bg-navy/95 text-xs uppercase tracking-widest shadow-md transition-colors flex items-center gap-2 disabled:bg-gray-400"
                >
                  {loading ? (
                    <span>Securing Slot...</span>
                  ) : (
                    <>
                      <Clock className="w-3.5 h-3.5" />
                      <span>Book Free Slot</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
