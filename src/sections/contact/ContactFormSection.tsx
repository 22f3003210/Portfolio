import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Linkedin, Calendar, Download } from 'lucide-react';
import { GoldButton } from '../../components/GoldButton';
import { OutlineButton } from '../../components/OutlineButton';
import { ScrollReveal } from '../../components/ScrollReveal';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="bg-warm-white section-padding-lg">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  Tell me about your stores
                </h3>
                <p className="text-sm text-text-secondary mb-6">
                  Quick intake form — takes 90 seconds.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-border-light rounded-md text-sm focus:outline-none focus:border-gold transition-colors"
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
                        className="w-full px-4 py-2.5 border border-border-light rounded-md text-sm focus:outline-none focus:border-gold transition-colors"
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
                      className="w-full px-4 py-2.5 border border-border-light rounded-md text-sm focus:outline-none focus:border-gold transition-colors"
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
                      className="w-full px-4 py-2.5 border border-border-light rounded-md text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      required
                    />
                  </div>
                  <GoldButton type="submit" icon={<Send className="w-4 h-4" />}>
                    Send message
                  </GoldButton>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Direct Line */}
            <ScrollReveal>
              <div className="bg-navy rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Direct line</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="tel:+919160863406"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4 text-gold" />
                      +91 9160863406
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:abraham@example.com"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4 text-gold" />
                      abraham@example.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <MapPin className="w-4 h-4 text-gold" />
                    Hyderabad, Telangana
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/abraham-s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-gold" />
                      /in/abraham-s
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Calendar */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-border-light rounded-xl p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold">
                  CALENDAR
                </span>
                <h3 className="text-lg font-semibold text-text-primary mt-2 mb-1">
                  Book a 30-min slot
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Skip the form — grab a calendar slot directly.
                </p>
                <OutlineButton fullWidth icon={<Calendar className="w-4 h-4" />}>
                  Open calendar
                </OutlineButton>
              </div>
            </ScrollReveal>

            {/* Download CV */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-border-light rounded-xl p-6 text-center">
                <Download className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-text-primary mb-1">Get the CV</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Detailed track record (PDF).
                </p>
                <GoldButton fullWidth icon={<Download className="w-4 h-4" />}>
                  Download CV
                </GoldButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
