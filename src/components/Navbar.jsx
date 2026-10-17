import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import dmLogo from '../assets/dm-logo.png';
import PillNav from './PillNav';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  {
    label: 'Services',
    href: '#services',
    subItems: [
      { label: 'Elevators', href: '#elevators-explore' },
      { label: 'Escalators', href: '#escalators-explore' },
      { label: 'Installation', href: '#installation-explore' },
      { label: 'Modernization', href: '#modernization-explore' },
      { label: 'Maintenance', href: '#maintenance-explore' }
    ]
  },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active item based on hash in URL
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#06111C]/95 backdrop-blur-xl border-b border-[#075A8F]/30 shadow-[0_10px_30px_rgba(6,17,28,0.95)]'
          : 'py-3 sm:py-4 bg-[#06111C]/60 sm:bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillNav
          logo={dmLogo}
          logoAlt="DM Lifts & Escalators"
          items={NAV_ITEMS}
          activeHref={activeHref}
          onItemClick={(item) => {
            setActiveHref(item.href);
            if (item.href?.startsWith('#')) {
              if (window.location.hash === item.href) {
                window.dispatchEvent(new HashChangeEvent('hashchange'));
              } else {
                window.location.hash = item.href;
              }
              const target = document.getElementById(item.href.substring(1));
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
          ease="power2.easeOut"
          baseColor="#06111C"
          pillColor="#0A1B2A"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#C8D1D8"
          circleColor="#FF6A00"
          rightAction={
            <a
              href="#contact"
              onClick={() => setActiveHref('#contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded-full bg-[#FF6A00] text-white hover:bg-[#E55F00] transition-all duration-300 shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_25px_rgba(255,106,0,0.6)] active:scale-[0.98]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          }
        />
      </div>
    </header>
  );
}
