import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import dmLogo from '../assets/dm-logo.png';
import Maintenance from '../sections/Maintenance';
import SlideCommit from '../components/SlideCommit';

export default function MaintenancePage({ onBack, backLabel = 'Back to Services' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = (e) => {
    if (e) e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#services';
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#06111C] flex flex-col font-sans selection:bg-[#D49A3D]/20 selection:text-[#06111C]">
      {/* 1. DEDICATED TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#06111C]/95 backdrop-blur-xl border-b border-[#075A8F]/30 shadow-[0_10px_30px_rgba(6,17,28,0.95)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1B2A] border border-[#075A8F]/40 text-[#C8D1D8] hover:text-white hover:border-[#D49A3D] hover:bg-[#06111C] transition-all duration-200 text-xs font-semibold tracking-wider uppercase shadow-sm cursor-pointer"
            aria-label="Back to Services"
          >
            <ArrowLeft className="w-4 h-4 text-[#D49A3D] transition-transform group-hover:-translate-x-1" />
            <span>{backLabel}</span>
          </button>

          <a
            href="#home"
            onClick={handleBackToHome}
            className="bg-white/95 px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
          >
            <img src={dmLogo} alt="DM Lifts & Escalators" className="h-8 w-auto object-contain" />
          </a>

          <a
            href="#contact"
            onClick={handleBackToHome}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-[#06111C] border border-[#D49A3D]/50 text-white hover:bg-[#0A1B2A] transition-all shadow-[0_0_20px_rgba(212,154,61,0.2)] active:scale-95"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D49A3D] stroke-[2.5]" />
          </a>
        </div>
      </header>

      {/* 2. MAIN MAINTENANCE SECTION */}
      <main className="flex-1">
        <Maintenance />
      </main>

      {/* 3. BOTTOM CONSULTATION CALLOUT */}
      <section className="bg-gradient-to-r from-[#FFFDF8] via-[#FDF6EC] to-[#FFFDF8] border-t border-[#EAE3D2] py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#06111C] uppercase tracking-tight mb-3">
              Need an Annual Maintenance Contract (AMC)?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto mb-6">
              Our service engineering team assists building managers, facility directors, and residential communities with certified periodic safety audits and customized maintenance SLAs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleBackToHome}
                className="px-6 py-3 rounded-full bg-[#06111C] hover:bg-[#0A1B2A] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                ← Back to Home
              </button>
              <SlideCommit
                label="Slide to GET IN TOUCH"
                doneLabel="Opening Contact Form..."
                onConfirm={() => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      handleBackToHome();
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 120);
                      resolve();
                    }, 650);
                  });
                }}
                trackColor="#06111C"
                handleColor="#D49A3D"
                successColor="#10B981"
                width={290}
                height={52}
                radius={26}
                className="border border-[#D49A3D]/40 shadow-[0_4px_20px_rgba(212,154,61,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
