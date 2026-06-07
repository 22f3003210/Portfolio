import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { usePortal } from '../context/PortalContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#how-i-work', label: 'How I Work' },
  { to: '/consulting', label: 'Consulting' },
  { to: '/about', label: 'About' },
  { to: '/portal', label: 'Client Portal' },
  { to: '/insights', label: 'Insights' },
  { to: '/#testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Get in Touch' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isPortalVisible } = usePortal();
  const location = useLocation();

  // Smooth scroll to sections when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash, location.pathname]);

  const visibleLinks = navLinks.filter(
    (link) => link.to !== '/portal' || isPortalVisible
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.startsWith('/#')) {
      const hash = to.substring(1);
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === to;
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 bg-[#0b2341]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'py-1 shadow-md' : 'py-2.5'
      }`}
    >
      <div className="w-full px-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16">
          {/* Logo - Stencil Chevron A with text */}
          <Link to="/" className="flex items-center gap-3 group">
            <svg viewBox="0 0 100 100" className="w-9 h-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left slanted leg of A (White) */}
              <polygon points="18,80 47,20 59,20 30,80" fill="white" />
              {/* Right slanted leg of A (Green) */}
              <polygon points="53,20 82,80 70,80 41,20" fill="#8bc34a" />
              {/* Crossbar (White) */}
              <polygon points="26,58 35,58 65,58 74,58 68,64 32,64" fill="white" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[15px] font-extrabold leading-tight text-white tracking-tight">
                SCALE WITH ABRAHAM
              </span>
              <span className="text-[8.5px] font-bold uppercase tracking-[0.12em] text-[#8bc34a] leading-tight mt-0.5">
                SYSTEMS & RETAIL CONSULTING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {visibleLinks.map((link) => {
              const isContact = link.label === 'Get in Touch';
              if (isContact) {
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-[10px] font-black uppercase tracking-wider bg-white text-[#0b2341] px-5 py-2.5 transition-all duration-300 hover:bg-[#8bc34a] hover:text-white rounded-sm shadow-sm flex items-center gap-1.5"
                  >
                    GET IN TOUCH <span className="text-xs">&rarr;</span>
                  </Link>
                );
              }

              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => {
                    if (link.to === '/' && location.pathname === '/' && !location.hash) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`relative py-1 text-xs font-black uppercase tracking-wider transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    active
                      ? 'text-white after:scale-x-100'
                      : 'text-slate-300 hover:text-white'
                  } after:bg-[#8bc34a]`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-[#0b2341] border-white/10">
          <div className="w-full px-6 py-4 flex flex-col gap-2">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-2 w-full">
              {visibleLinks.map((link) => {
                const isContact = link.label === 'Get in Touch';
                if (isContact) {
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="mx-4 my-2 px-4 py-3 rounded-sm text-center text-xs font-extrabold uppercase tracking-wider bg-white text-[#0b2341] hover:bg-[#8bc34a] hover:text-white transition-all duration-300 block"
                    >
                      GET IN TOUCH &rarr;
                    </Link>
                  );
                }

                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={(e) => {
                      setMobileOpen(false);
                      if (link.to === '/' && location.pathname === '/' && !location.hash) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`px-4 py-2.5 rounded-none text-xs font-black uppercase tracking-wider transition-colors block ${
                      active
                        ? 'text-white bg-white/10 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
