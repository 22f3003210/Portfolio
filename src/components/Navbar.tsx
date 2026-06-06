import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#how-i-work', label: 'How I Work' },
  { to: '/#testimonials', label: 'Testimonials' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/insights', label: 'Insights' },
  { to: '/portal', label: 'Client Portal' },
  { to: '/contact', label: 'Get in Touch' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPortalLink, setShowPortalLink] = useState(() => {
    return localStorage.getItem('portal_link_visible') === 'true';
  });
  const location = useLocation();

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
    (link) => link.to !== '/portal' || showPortalLink
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
    // Initial check
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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-border-light shadow-sm py-0'
          : 'bg-gradient-to-r from-[#00203f] to-[#0170B9] text-white py-1.5'
      }`}
    >
      <div className="w-full px-6">
        <div className="max-w-[1060px] mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img 
              src="/logo.jpg" 
              alt="Scale with Abraham" 
              className="h-12 w-12 object-cover rounded-none border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`text-[16px] font-extrabold leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-[#00203f]' : 'text-white'
              }`}>
                Scale with Abraham
              </span>
              <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-gold leading-tight mt-0.5">
                Systems & Retail Consulting
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
                    className={`text-[11px] font-extrabold uppercase tracking-wider border px-4 py-2 transition-all duration-300 rounded-none shadow-sm ${
                      isScrolled
                        ? 'bg-[#00203f] text-white border-[#00203f] hover:bg-[#8CC63F] hover:border-[#8CC63F] hover:text-white'
                        : 'bg-white text-[#00203f] border-white hover:bg-[#8CC63F] hover:border-[#8CC63F] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-1 text-sm font-semibold tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    isScrolled
                      ? `${active ? 'text-[#00203f] after:scale-x-100' : 'text-slate-600 hover:text-[#00203f]'} after:bg-[#00203f]`
                      : `${active ? 'text-white after:scale-x-100' : 'text-white/80 hover:text-white'} after:bg-[#8CC63F]`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-100 text-text-secondary'
                  : 'hover:bg-white/10 text-white/90'
              }`}
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
        <div className={`md:hidden border-t ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-border-light'
            : 'bg-[#00203f]/95 backdrop-blur-md border-white/10'
        }`}>
          <div className="w-full px-6 py-4 flex flex-col gap-2">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
            {visibleLinks.map((link) => {
              const isContact = link.label === 'Get in Touch';
              if (isContact) {
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`mx-4 my-2 px-4 py-3 rounded-none text-center text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                      isScrolled
                        ? 'bg-[#00203f] text-white border-[#00203f] hover:bg-[#8CC63F] hover:border-[#8CC63F]'
                        : 'bg-white text-[#00203f] border-white hover:bg-[#8CC63F] hover:border-[#8CC63F] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-none text-sm font-semibold transition-colors ${
                    active
                      ? isScrolled
                        ? 'text-[#00203f] bg-slate-50 font-bold'
                        : 'text-white bg-white/5 font-bold'
                      : isScrolled
                        ? 'text-slate-600 hover:text-[#00203f] hover:bg-slate-50'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
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
