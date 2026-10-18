import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ChevronsUp, 
  Layers, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import dmLogo from '../assets/dm-logo.png';
import elevatorImg from '../assets/elevators/elevator_hero_cabin_interior.jpg';
import escalatorImg from '../assets/escalators/transit_escalator.jpg';
import maintenanceImg from '../assets/maintenance/maintenance_service_hd.jpg';
import SlideCommit from '../components/SlideCommit';

const SERVICES = [
  {
    id: 'elevators',
    number: '01',
    badge: 'VERTICAL TRANSIT',
    title: 'ELEVATOR SYSTEMS',
    headline: 'Precision Vertical Transportation for Residential, Commercial & Industrial Spaces',
    desc: 'High-speed, whisper-quiet passenger lifts, luxury villa elevators, rugged freight lifts, and stretcher-friendly hospital systems engineered to international safety standards.',
    image: elevatorImg,
    exploreId: 'elevator-explore',
    features: [
      'Passenger, Capsule, Freight & Stretcher Lifts',
      'Gearless PM Synchronous (PMSM) Motor Efficiency',
      'Smart Microprocessor & Group Supervisory Control',
      'Architectural Cabin Finishes & Custom Interiors'
    ],
    buttonText: 'EXPLORE ELEVATOR DIVISION'
  },
  {
    id: 'escalators',
    number: '02',
    badge: 'INCLINED MOBILITY',
    title: 'ESCALATORS & WALKWAYS',
    headline: 'Continuous High-Capacity Flow for Airports, Transit Hubs & Retail Malls',
    desc: 'Heavy-duty commercial and public transit escalators and moving walkways built for seamless traffic throughput, whisper-quiet movement, and uncompromising passenger safety.',
    image: escalatorImg,
    exploreId: 'escalator-explore',
    features: [
      'Commercial & Transit Grade Escalators',
      'Moving Walkways & Autowalks (0° to 12°)',
      'Variable Frequency Drive (VFD) Energy Optimization',
      'Dual Handrail Sensors & Multi-Point Emergency Stops'
    ],
    buttonText: 'EXPLORE ESCALATOR DIVISION'
  },
  {
    id: 'maintenance',
    number: '03',
    badge: 'CERTIFIED AMC & CARE',
    title: 'MAINTENANCE & LIFECYCLE SUPPORT',
    headline: '24/7 Breakdown Dispatch & Certified Annual Maintenance Contracts (AMC)',
    desc: 'Comprehensive preventive care, rapid 24/7 emergency response, genuine OEM component replacement, and certified safety audits to ensure zero downtime and long-term reliability.',
    image: maintenanceImg,
    exploreId: 'maintenance-explore',
    features: [
      'Comprehensive & Non-Comprehensive AMC Plans',
      '24/7 Rapid Emergency Response Breakdown Dispatch',
      'Statutory Safety Audits & Multi-Point Inspections',
      'Modernization & System Control Retrofitting'
    ],
    buttonText: 'EXPLORE MAINTENANCE DIVISION'
  }
];

export default function ServicesPage({ onBack, onNavigate, onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.lenis?.scrollTo(0, { immediate: true });
  }, []);

  const handleBackToHome = (e) => {
    if (e) e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#home';
    }
  };

  const handleServiceSelect = (exploreId) => {
    if (onNavigate) {
      onNavigate(exploreId);
    } else {
      window.location.hash = `#${exploreId}`;
    }
  };

  const handleContactNavigate = (e) => {
    if (e) e.preventDefault();
    if (onContact) {
      onContact();
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <div className="min-h-screen bg-[#06111C] text-white flex flex-col font-sans selection:bg-[#FF6A00]/30 selection:text-white">
      {/* ========================================================= */}
      {/* 1. DEDICATED TOP NAVIGATION BAR                           */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-[#06111C]/95 backdrop-blur-xl border-b border-[#075A8F]/30 shadow-[0_10px_30px_rgba(6,17,28,0.95)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1B2A] border border-[#075A8F]/40 text-[#C8D1D8] hover:text-white hover:border-[#FF6A00] hover:bg-[#06111C] transition-all duration-200 text-xs font-semibold tracking-wider uppercase shadow-sm cursor-pointer"
            aria-label="Back to main page"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF6A00] transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          {/* DM Logo */}
          <a
            href="#home"
            onClick={handleBackToHome}
            className="bg-white/95 px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
          >
            <img src={dmLogo} alt="DM Lifts & Escalators" className="h-8 w-auto object-contain" />
          </a>

          {/* Right Action */}
          <button
            onClick={handleContactNavigate}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-[#FF6A00] text-white hover:bg-[#E55F00] transition-all shadow-[0_0_20px_rgba(255,106,0,0.4)] active:scale-95 cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. SERVICES HERO INTRO                                    */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-[#075A8F]/25 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#075A8F]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#FF6A00]/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
            <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#FF6A00]">
              Engineered Mobility &amp; Lifecycle Divisions
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
            OUR <span className="text-[#FF6A00]">SERVICES</span> &amp; <span className="text-[#0A78B8]">SOLUTIONS</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-[#C8D1D8] leading-relaxed">
            Discover our complete portfolio of vertical and inclined transit engineering. 
            Select any division below to explore full technical specifications, cabin finishes, and certified service agreements.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THREE SERVICES DIVISIONS LISTING                       */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="space-y-12 lg:space-y-16">
          {SERVICES.map((service, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => handleServiceSelect(service.exploreId)}
                className="rounded-3xl bg-[#0A1B2A]/90 border border-[#075A8F]/40 hover:border-[#FF6A00]/70 transition-all duration-300 shadow-[0_20px_50px_rgba(6,17,28,0.9)] overflow-hidden p-6 sm:p-8 lg:p-10 group cursor-pointer"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Visual Image Showcase (5 Cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/80 via-transparent to-transparent pointer-events-none" />

                      {/* Number Floating Tag */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#06111C]/90 backdrop-blur-md border border-[#075A8F]/60">
                        <span className="text-xs font-mono font-bold text-[#FF6A00]">
                          {service.number} / 03
                        </span>
                      </div>

                      {/* Badge Floating Tag */}
                      <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#FF6A00] text-white">
                        <span className="text-[10px] font-mono uppercase font-bold tracking-wider">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Narrative & Action Button (7 Cols) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold tracking-wider text-[#0A78B8] uppercase">
                        <span>DIVISION {service.number}</span>
                        <span>•</span>
                        <span>{service.badge}</span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white mb-3 break-words">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base font-semibold text-[#FF6A00] mb-3 leading-snug">
                        {service.headline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#C8D1D8] leading-relaxed mb-6 font-normal">
                        {service.desc}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#E1E8EE]">
                            <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation CTA Button */}
                    <div>
                      <button
                        onClick={() => handleServiceSelect(service.exploreId)}
                        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#FF6A00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#E55F00] transition-all shadow-[0_0_25px_rgba(255,106,0,0.45)] hover:shadow-[0_0_35px_rgba(255,106,0,0.65)] hover:translate-x-1 cursor-pointer"
                      >
                        <span>{service.buttonText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BOTTOM CONTACT / QUOTE CALLOUT                          */}
      {/* ========================================================= */}
      <footer className="border-t border-[#075A8F]/30 bg-[#040B13] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
              Need a Customized Project Estimate?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8D1D8]">
              Speak directly with our vertical transportation engineers in Bengaluru.
            </p>
          </div>

          <button
            onClick={handleContactNavigate}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A1B2A] border border-[#075A8F]/60 text-white hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <span>Request Technical Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
