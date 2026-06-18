import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, ShieldCheck, Users, ChevronDown } from 'lucide-react';
import { usePortal } from '../context/PortalContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-i-work', label: 'How I Work' },
  { to: '/consulting', label: 'Consulting' },
  { to: '/about', label: 'About' },
  { to: '/portal', label: 'Retail Space' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/contact', label: 'Get in Touch' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const { isPortalVisible } = usePortal();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    (link) => (link.to !== '/portal' && link.to !== '/roadmap') || isPortalVisible
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLoginDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setLoginDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.startsWith('/#')) {
      const hash = to.substring(1);
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === to;
  };

  const isPortalActive = location.pathname === '/tracker' || location.pathname === '/admin';

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 bg-[#0b2341]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'py-1 shadow-md' : 'py-2.5'
      }`}
    >
      <div className="w-full px-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <svg viewBox="0 0 100 100" className="w-9 h-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="18,80 47,20 59,20 30,80" fill="white" />
              <polygon points="53,20 82,80 70,80 41,20" fill="#8bc34a" />
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

            {/* Login Button with Dropdown */}
            {isPortalVisible && (
              <div className="relative" ref={dropdownRef}>
                <button
                  id="navbar-login-btn"
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                  className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-sm border transition-all duration-300 ${
                    isPortalActive
                      ? 'bg-[#8bc34a] text-white border-[#8bc34a]'
                      : 'bg-transparent text-white border-white/30 hover:border-[#8bc34a] hover:text-[#8bc34a]'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  Login
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${loginDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                {loginDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-[#0b2341] border border-white/15 shadow-2xl rounded-sm overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-white/10">
                      <span className="text-[9px] font-black text-[#8bc34a] uppercase tracking-widest">Select Portal</span>
                    </div>

                    <Link
                      to="/admin"
                      id="navbar-admin-login"
                      className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors group"
                    >
                      <span className="w-8 h-8 bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center rounded-sm flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                        <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-white uppercase tracking-wider">Admin Login</span>
                        <span className="text-[9px] text-slate-400 font-semibold">Abraham's console</span>
                      </div>
                    </Link>

                    <Link
                      to="/tracker"
                      id="navbar-client-login"
                      className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors group border-t border-white/5"
                    >
                      <span className="w-8 h-8 bg-[#8bc34a]/10 border border-[#8bc34a]/20 flex items-center justify-center rounded-sm flex-shrink-0 group-hover:bg-[#8bc34a]/20 transition-colors">
                        <Users className="w-4 h-4 text-[#8bc34a]" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-white uppercase tracking-wider">Client Portal</span>
                        <span className="text-[9px] text-slate-400 font-semibold">Project dashboard</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            )}
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
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#0b2341] z-40 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-250">
          <div className="px-6 py-8">
            <div className="flex flex-col gap-2">
              {visibleLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      setMobileOpen(false);
                      if (link.to === '/' && location.pathname === '/' && !location.hash) {
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

              {/* Mobile Login section */}
              {isPortalVisible && (
                <div className="border-t border-white/10 mt-2 pt-3">
                  <span className="px-4 text-[9px] font-black text-[#8bc34a] uppercase tracking-widest block mb-2">Login</span>
                  <Link
                    to="/admin"
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-colors ${
                      location.pathname === '/admin' ? 'text-[#d4af37] bg-white/10' : 'text-slate-300 hover:text-[#d4af37] hover:bg-white/5'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Admin Login
                  </Link>
                  <Link
                    to="/tracker"
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-colors ${
                      location.pathname === '/tracker' ? 'text-[#8bc34a] bg-white/10' : 'text-slate-300 hover:text-[#8bc34a] hover:bg-white/5'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    Client Portal
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
