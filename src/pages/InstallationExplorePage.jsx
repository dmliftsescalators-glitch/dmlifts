import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Cog, 
  ShieldCheck, 
  Clock, 
  Award,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  FileSearch,
  Building,
  Wrench,
  Gauge,
  KeyRound,
  LifeBuoy
} from 'lucide-react';

import dmLogo from '../assets/dm-logo.png';
import installationHeroImg from '../assets/installation/installation_explore_hd.jpg';
import civilShaftImg from '../assets/installation/installation_hd.jpg';
import doorImg from '../assets/elevator-options/doors/door_4_ss_hairline.jpg';
import cabinImg from '../assets/elevators/elevator_hero_cabin_interior.jpg';
import technicianImg from '../assets/maintenance/maintenance_service_hd.jpg';
import maintenanceCardImg from '../assets/maintenance/card_1_amc.jpg';

const PILLARS = [
  {
    icon: Cog,
    title: 'Certified Engineers',
  },
  {
    icon: ShieldCheck,
    title: 'EN 81 / EN 115 Compliance',
  },
  {
    icon: Clock,
    title: 'On-Time Execution',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Survey & Planning',
    desc: 'Detailed site analysis and technical planning for optimal design and installation.',
    image: maintenanceCardImg,
  },
  {
    step: '02',
    title: 'Civil Preparation',
    desc: 'Guidance and coordination for civil work, shaft, and pit preparation.',
    image: civilShaftImg,
  },
  {
    step: '03',
    title: 'Equipment Installation',
    desc: 'Installation of machine, rails, doors, and all mechanical & electrical components.',
    image: installationHeroImg,
  },
  {
    step: '04',
    title: 'Testing & Commissioning',
    desc: 'Complete system testing, safety checks, and performance validation.',
    image: cabinImg,
  },
  {
    step: '05',
    title: 'Handover',
    desc: 'Final inspection, client training and documentation handover.',
    image: doorImg,
  },
  {
    step: '06',
    title: 'Post-Installation Support',
    desc: 'Continuous support and maintenance for long-term performance.',
    image: technicianImg,
  }
];

export default function InstallationExplorePage({ onBack, backLabel = 'Back to Services' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = (e) => {
    if (e) e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#services';
    }
  };

  const handleContactNavigate = (e) => {
    if (e) e.preventDefault();
    if (onBack) {
      onBack();
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.location.hash = '#contact';
      }, 100);
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#06111C] flex flex-col font-sans selection:bg-[#D49A3D]/25 selection:text-[#06111C]">
      {/* ========================================================= */}
      {/* 1. TOP STICKY NAVIGATION BAR                              */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-[#06111C]/95 backdrop-blur-xl border-b border-[#075A8F]/30 shadow-[0_10px_30px_rgba(6,17,28,0.95)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1B2A] border border-[#075A8F]/40 text-[#C8D1D8] hover:text-white hover:border-[#D49A3D] hover:bg-[#06111C] transition-all duration-200 text-xs font-semibold tracking-wider uppercase shadow-sm cursor-pointer"
            aria-label="Back to Services"
          >
            <ArrowLeft className="w-4 h-4 text-[#D49A3D] transition-transform group-hover:-translate-x-1" />
            <span>{backLabel}</span>
          </button>

          <a
            href="#home"
            onClick={handleBack}
            className="bg-white/95 px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
          >
            <img src={dmLogo} alt="DM Lifts & Escalators" className="h-8 w-auto object-contain" />
          </a>

          <button
            onClick={handleContactNavigate}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-[#D49A3D] text-white hover:bg-[#B87C28] transition-all shadow-[0_0_20px_rgba(212,154,61,0.4)] active:scale-95 cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. HERO SHOWCASE (REFERENCE MATCH)                        */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0A141E] text-white overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D49A3D]/20 via-[#075A8F]/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#075A8F]/20 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4"
              >
                INSTALLATION
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D49A3D] via-[#F3C77D] to-[#D49A3D] mb-6 leading-tight"
              >
                Built for Safety. Installed for a Better Tomorrow.
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-sm sm:text-base lg:text-lg text-[#C8D1D8] leading-relaxed max-w-2xl mb-10 font-normal"
              >
                Professional installation of elevators and escalators with precision, safety, and timely execution. We ensure seamless integration, minimal disruption, and long-term reliability for every project.
              </motion.p>

              {/* 4 Circular Pillars / Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-white/10"
              >
                {PILLARS.map((p, pIdx) => {
                  const Icon = p.icon;
                  return (
                    <div key={pIdx} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#06111C] border border-[#D49A3D]/60 flex items-center justify-center text-[#D49A3D] shadow-[0_0_15px_rgba(212,154,61,0.25)] mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-white/90 leading-tight">
                        {p.title}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Hero Image (5 Cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D49A3D]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src={installationHeroImg}
                  alt="Modern Elevator Hoistway Installation"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR INSTALLATION PROCESS (STEP FLOW)                   */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FBFBFA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#D49A3D]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#B87C28] font-sans">
                OUR INSTALLATION PROCESS
              </span>
              <div className="w-8 h-[2px] bg-[#D49A3D]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#06111C] tracking-tight">
              From Planning to Perfect Performance
            </h2>
          </div>

          {/* 6 Horizontal Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#D49A3D]/60 transition-all duration-300 p-4 flex flex-col group relative"
              >
                {/* Image Container with Floating Step Number */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-[#0A141E]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Step Badge */}
                  <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-[#B87C28] text-white flex items-center justify-center font-bold text-xs shadow-md font-mono">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-sm text-[#06111C] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed flex-1">
                  {step.desc}
                </p>

                {/* Arrow to Next Step on Large Screens */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/3 -translate-y-1/2 z-20 pointer-events-none text-[#CBD5E1]">
                    <ArrowRight className="w-4 h-4 text-[#B87C28]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BOTTOM ACTION CALLOUT                                  */}
      {/* ========================================================= */}
      <footer className="border-t border-[#E2E8F0] bg-[#06111C] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-1">
              Planning a New Installation Project?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8D1D8]">
              Speak directly with our vertical mobility civil engineering team in Bengaluru.
            </p>
          </div>

          <button
            onClick={handleContactNavigate}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D49A3D] text-white hover:bg-[#B87C28] transition-all text-xs font-bold uppercase tracking-wider shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Request Installation Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
