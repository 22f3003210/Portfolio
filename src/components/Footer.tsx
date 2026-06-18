import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#workflows', label: '12 Workflows' },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/portal', label: 'Retail Space' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  const [showPortalLink, setShowPortalLink] = useState(false);

  useEffect(() => {
    const handleUnlock = () => setShowPortalLink(true);
    const handleLock = () => setShowPortalLink(false);
    window.addEventListener('portal_unlocked', handleUnlock);
    window.addEventListener('portal_locked', handleLock);
    return () => {
      window.removeEventListener('portal_unlocked', handleUnlock);
      window.removeEventListener('portal_locked', handleLock);
    };
  }, []);

  const visibleLinks = navLinks.filter(
    (link) => (link.to !== '/portal' && link.to !== '/roadmap') || showPortalLink
  );

  return (
    <footer className="bg-navy">
      <div className="content-max pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img 
                src="/logo.jpg" 
                alt="Scale with Abraham" 
                className="h-10 w-10 object-cover rounded-none border border-white/25 shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold leading-tight text-white">Scale with Abraham</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-gold leading-tight">
                  Systems & Retail Consulting
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Jewellery Retail Systems Digital Transformation Specialist. Building integrated
              ERP-CRM-Finance revenue engines that eliminate invisible profit leakages.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5">
              {visibleLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold mb-4">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                Hyderabad, Telangana
              </li>
              <li>
                <a
                  href="tel:+919160863406"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  +91 9160863406
                </a>
              </li>
              <li>
                <a
                  href="mailto:scale.with.abraham@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  scale.with.abraham@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abrahamsayed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  /in/abrahamsayed
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/50">© 2026 Scale with Abraham. All rights reserved.</p>
          <p className="text-xs text-white/50">Built for jewellery retail leaders.</p>
        </div>
      </div>
    </footer>
  );
}
