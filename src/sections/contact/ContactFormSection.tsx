import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { GoldButton } from '../../components/GoldButton';
import { ScrollReveal } from '../../components/ScrollReveal';
import { submitAppointment } from '../../lib/supabase';
import { sendEmailNotifications } from '../../lib/email';

export function ContactFormSection() {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const loadWidget = () => {
      // @ts-ignore
      if (window.Calendly && calendlyContainerRef.current) {
        calendlyContainerRef.current.innerHTML = ''; // Clear container
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/scale-with-abraham/30min',
          parentElement: calendlyContainerRef.current,
          pageSettings: {
            hideLandingPageDetails: false,
            hideGdprBanner: true
          }
        });
      }
    };

    // Since Calendly script is preloaded in index.html, check if it's ready, otherwise poll
    // @ts-ignore
    if (window.Calendly) {
      loadWidget();
    } else {
      let attempts = 0;
      const interval = setInterval(() => {
        // @ts-ignore
        if (window.Calendly) {
          clearInterval(interval);
          loadWidget();
        } else {
          attempts++;
          if (attempts > 30) { // Timeout after 3 seconds
            clearInterval(interval);
          }
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Submit to Supabase/LocalStorage
      await submitAppointment({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        date: 'Enquiry',
        timeSlot: 'Contact Form',
        description: formData.message
      });

      // Send email notification to Abraham via EmailJS
      try {
        await sendEmailNotifications({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          date: 'Enquiry Date',
          timeSlot: 'Contact Form Enquiry',
          meetingUrl: 'N/A (Intake Form)',
          description: formData.message
        });
      } catch (emailErr) {
        console.error('Failed to send contact notification email:', emailErr);
      }

      alert('Thank you for reaching out! Your message was sent successfully.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      console.error('Failed to log contact form submission:', err);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="bg-warm-white section-padding-lg">
      <div className="content-max">
        <div className="flex flex-col gap-10">
          {/* Top - Embedded Calendly Inline Scheduler */}
          <div className="w-full">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-border-light rounded-none overflow-hidden relative shadow-sm animate-fadeIn" style={{ height: '700px' }}>
                {/* Calendly Inline Target */}
                <div 
                  ref={calendlyContainerRef}
                  className="w-full h-full" 
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom - Intake Form */}
          <div className="max-w-2xl mx-auto w-full">
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-none p-6 md:p-8 shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">
                    Tell me about your stores
                  </h3>
                  <p className="text-sm text-text-secondary mb-6">
                    Quick intake form — takes 90 seconds.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Your name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rajesh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border-light rounded-none text-sm focus:outline-none focus:border-gold transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="you@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border-light rounded-none text-sm focus:outline-none focus:border-gold transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Brand / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Jewellery brand name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 border border-border-light rounded-none text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        What are you trying to fix?
                      </label>
                      <textarea
                        placeholder="e.g. We have 12 stores, reconciliation takes 3 days, and we suspect leakage in old-gold exchange."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2.5 border border-border-light rounded-none text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                        required
                      />
                    </div>
                    <div className="pt-2">
                      <GoldButton type="submit" icon={<Send className="w-4 h-4" />} className="w-full md:w-auto">
                        Send message
                      </GoldButton>
                    </div>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
