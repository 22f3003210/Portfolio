import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#workflows', label: 'Workflows' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/portal', label: 'Client Portal' },
  { to: '/contact', label: 'Contact' },
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
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('/#')) return location.pathname === '/';
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
      <div className="content-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.jpg" 
              alt="Scale with Abraham" 
              className="h-10 w-10 object-cover rounded-none border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`text-[15px] font-extrabold leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-[#00203f]' : 'text-white'
              }`}>
                Scale with Abraham
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-gold leading-tight">
                Systems & Retail Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {visibleLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? isScrolled
                      ? 'text-navy font-bold'
                      : 'text-gold font-bold scale-105'
                    : isScrolled
                      ? 'text-text-secondary hover:text-text-primary'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-100 text-text-secondary'
                  : 'hover:bg-white/10 text-white/90'
              }`}
              aria-label="Toggle theme"
            >
              <Moon className="w-4 h-4" />
            </button>

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
          <div className="content-max py-4 flex flex-col gap-2">
            {visibleLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-none text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? isScrolled
                      ? 'text-navy font-semibold bg-navy/5'
                      : 'text-gold font-semibold bg-white/5'
                    : isScrolled
                      ? 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
