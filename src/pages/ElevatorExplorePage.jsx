import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles, Phone, Mail, ShieldCheck, Download } from 'lucide-react';
import dmLogo from '../assets/dm-logo.png';
import ElevatorOptions from '../sections/ElevatorOptions';
import SlideCommit from '../components/SlideCommit';

export default function ElevatorExplorePage({ onBack, backLabel = 'Back to Services' }) {
  // Ensure explore page fits instantly at top without lag
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.lenis?.scrollTo(0, { immediate: true });
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
    <div className="min-h-screen bg-[#06111C] text-white flex flex-col font-sans selection:bg-[#FF6A00]/30 selection:text-white">
      {/* ========================================================= */}
      {/* 1. DEDICATED EXPLORE TOP NAVIGATION BAR                   */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-[#06111C]/95 backdrop-blur-xl border-b border-[#075A8F]/30 shadow-[0_10px_30px_rgba(6,17,28,0.95)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Left: Back Button */}
          <button
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1B2A] border border-[#075A8F]/40 text-[#C8D1D8] hover:text-white hover:border-[#FF6A00] hover:bg-[#06111C] transition-all duration-200 text-xs font-semibold tracking-wider uppercase shadow-sm cursor-pointer"
            aria-label="Back to Services"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF6A00] transition-transform group-hover:-translate-x-1" />
            <span>{backLabel}</span>
          </button>

          {/* Center: DM Brand Logo */}
          <a
            href="#home"
            onClick={handleBackToHome}
            className="bg-white/95 px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
          >
            <img src={dmLogo} alt="DM Lifts & Escalators" className="h-8 w-auto object-contain" />
          </a>

          {/* Right: Quick Action / Get in Touch */}
          <a
            href="#contact"
            onClick={handleBackToHome}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-[#FF6A00] text-white hover:bg-[#E55F00] transition-all shadow-[0_0_20px_rgba(255,106,0,0.4)] active:scale-95"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. DEDICATED EXPLORE HERO BANNER                          */}
      {/* ========================================================= */}
      <section className="relative pt-6 pb-6 sm:pt-12 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1B2A] via-[#06111C] to-[#06111C] border-b border-[#075A8F]/20 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#075A8F]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FF6A00]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">


          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">
            Elevator Finishes &amp; Specifications
          </h1>

          <p className="text-base sm:text-lg text-[#C8D1D8] max-w-3xl leading-relaxed mb-6 font-normal">
            Customize every touchpoint of your vertical mobility experience. Browse our comprehensive range of high-performance automated doors, bespoke cabin interiors, laser-cut ceiling illumination, and smart biometric destination controllers.
          </p>

          {/* Quick Feature Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
            {[
              'Door Systems',
              'Cabin Finishes',
              'Ceiling Patterns',
              'LED Illuminations',
              'Smart COP / LOP',
              'Biometric Security',
            ].map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#06111C]/90 border border-[#075A8F]/40 text-[#F0F4F8] shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FULL EXPLORE OPTIONS CATALOG & SPECS                   */}
      {/* ========================================================= */}
      <main className="flex-1">
        <ElevatorOptions />
      </main>

      {/* ========================================================= */}
      {/* 4. BOTTOM ACTION CONSULTATION CALLOUT                     */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-[#071E30] to-[#0A2942] border-t border-[#075A8F]/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">
            Ready to Configure Your Custom Elevator?
          </h2>
          <p className="text-sm sm:text-base text-[#C8D1D8] max-w-2xl mx-auto mb-6">
            Our engineering team assists architects, developers, and homeowners with full technical shaft drawings, cabin samples, and rapid compliance estimates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleBackToHome}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              ← Back to Main Showcase
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
              handleColor="#FF6A00"
              successColor="#10B981"
              width={290}
              height={52}
              radius={26}
              className="border border-[#075A8F]/50 shadow-[0_0_20px_rgba(255,106,0,0.35)]"
            />
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
