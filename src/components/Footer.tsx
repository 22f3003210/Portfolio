import { Link } from 'react-router-dom';
import { Diamond, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#workflows', label: '12 Workflows' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="content-max pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <Diamond className="w-5 h-5 text-gold" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight text-white">Abraham S</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gold leading-tight">
                  JEWELLERY DIGITAL
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
              {navLinks.map((link) => (
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
                  href="mailto:abraham@example.com"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  abraham@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abraham-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  /in/abraham-s
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/50">© 2025 Abraham S. All rights reserved.</p>
          <p className="text-xs text-white/50">Built for jewellery retail leaders.</p>
        </div>
      </div>
    </footer>
  );
}
