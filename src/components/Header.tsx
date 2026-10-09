import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelData';

interface HeaderProps {
  onBookClick: () => void;
  onOpenAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onOpenAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Suites & Rooms', href: '#suites' },
    { label: 'Curated Packages', href: '#packages' },
    { label: 'Darbhanga Dining', href: '#dining' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Location & Ghats', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFC8]/60 py-3.5'
          : 'bg-[#FAF8F5]/85 backdrop-blur-xs border-b border-transparent py-5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark in royal display face */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D3B]"
            aria-label="BrijRama Palace Varanasi Home"
          >
            <span className="font-royal text-xl sm:text-2xl font-bold tracking-[0.2em] text-stone-900 transition-colors group-hover:text-[#7A5824]">
              BRIJRAMA PALACE
            </span>
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#7A5824] uppercase font-semibold">
              Varanasi · By The Ganges
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#7A5824] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8C6D3B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button + concierge assistant trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenAssistant}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A5824] hover:text-stone-900 bg-[#F4EDE0] hover:bg-[#EDE3D0] transition-colors px-3 py-2 rounded-md border border-[#E2D5BE] cursor-pointer"
              title="Launch Context-Aware Booking Assistant"
              aria-label="Launch Palace Booking Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#7A5824]" />
              <span className="whitespace-nowrap">Concierge AI</span>
            </button>

            <a
              href={`tel:${HOTEL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#7A5824] transition-colors px-2.5 py-2 rounded-md hover:bg-stone-200/50"
              title="Call Palace Reservations"
              aria-label={`Call Palace Reservations at ${HOTEL_DETAILS.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#7A5824]" />
              <span className="whitespace-nowrap tabular-nums">{HOTEL_DETAILS.phone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="px-4 sm:px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 rounded-md hover:bg-[#7A5824] active:scale-95 transition-all shadow-xs whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5824]"
              aria-label="Scroll to booking reservation form"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md hover:bg-stone-100 focus-visible:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-stone-200/80 bg-[#FAF8F5]/98 rounded-b-xl px-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-stone-800 hover:bg-[#F3EDE2] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between px-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAssistant();
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#7A5824]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Concierge Assistant</span>
                </button>
                <a
                  href={`tel:${HOTEL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-stone-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7A5824]" />
                  <span>{HOTEL_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

