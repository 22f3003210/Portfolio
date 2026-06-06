import { useState } from 'react';
import { Phone, MapPin, Linkedin } from 'lucide-react';
import { GoldButton } from '../../components/GoldButton';
import { OutlineButton } from '../../components/OutlineButton';
import { ScrollReveal } from '../../components/ScrollReveal';
import { CalendarBooking } from '../../components/CalendarBooking';

export function CTASection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <section className="bg-white section-padding-lg">
      <div className="w-full px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="bg-navy rounded-none p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Contact info */}
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to plug the leaks?
                </h2>
                <p className="text-base text-white/70">
                  Let's map your end-to-end revenue engine. Strategy + execution + dashboards.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <Phone className="w-4 h-4 text-gold" />
                    +91 9160863406
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <MapPin className="w-4 h-4 text-gold" />
                    Hyderabad, Telangana
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/abrahamsayed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-gold" />
                      /in/abrahamsayed
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right - CTA card */}
              <div className="bg-white rounded-none p-8 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-text-primary">Talk to Abraham</h3>
                <p className="text-sm text-text-secondary">
                  Free 30-min discovery call to scope your transformation.
                </p>
                <GoldButton onClick={() => setIsBookingOpen(true)} fullWidth className="mt-auto">
                  Start the conversation →
                </GoldButton>
                <OutlineButton to="/about" fullWidth>
                  About
                </OutlineButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <CalendarBooking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
