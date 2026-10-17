import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import dmLogo from '../assets/dm-logo.png';

const FOOTER_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Elevators', href: '#elevators-explore' },
  { name: 'Escalators', href: '#escalators-explore' },
  { name: 'Maintenance', href: '#maintenance-explore' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040B13] border-t border-[#075A8F]/25 text-[#C8D1D8] relative overflow-hidden">
      {/* Top subtle blue guide line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#075A8F]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#075A8F]/20">
          
          {/* BRAND COLUMN (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center">
              <div className="bg-white/95 hover:bg-white px-3 py-1.5 rounded-xl border border-white/40 shadow-lg transition-all duration-300">
                <img
                  src={dmLogo}
                  alt="DM Lifts & Escalators"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#C8D1D8]/80 max-w-sm leading-relaxed">
              Advanced vertical transportation and mobility engineering. Delivering reliable passenger elevators, freight lifts, escalators, and modernization solutions.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#0A78B8]">
              BROCHURE-INSPIRED ARCHITECTURAL EDITION
            </div>
          </div>

          {/* NAVIGATION LINKS COLUMN (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-sans uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#FF6A00] transition-colors py-1 block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT INFO (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5 text-xs">
            <h4 className="text-xs font-sans uppercase tracking-wider text-white font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#FF6A00] flex-shrink-0" />
              <a href="mailto:dmliftsescalators@gmail.com" className="hover:text-[#FF6A00] transition-colors break-all">
                dmliftsescalators@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <a href="tel:+919343634318" className="hover:text-[#FF6A00] transition-colors">
                  +91 93436 34318
                </a>
                <span className="text-[#075A8F] hidden sm:inline">•</span>
                <a href="tel:+919743232654" className="hover:text-[#FF6A00] transition-colors">
                  +91 97432 32654
                </a>
                <span className="text-[#075A8F] hidden sm:inline">•</span>
                <a href="tel:+916361105490" className="hover:text-[#FF6A00] transition-colors">
                  +91 63611 05490
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed text-[#C8D1D8]">
                No. 40, 3rd Floor, 4th Cross,<br />
                1st Main Rd, Anjanappa Layout,<br />
                K. Narayanapura,<br />
                Bengaluru, Karnataka - 560077
              </address>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & SCROLL TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#C8D1D8]/70">
          <div>
            © {new Date().getFullYear()} DM Elevators. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>ENGINEERED FOR MODERN SPACES</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
