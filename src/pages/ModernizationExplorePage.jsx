import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Lightbulb, 
  Cog,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';

import dmLogo from '../assets/dm-logo.png';
import cabinModernizationImg from '../assets/elevators/elevator_hero_cabin_interior.jpg';
import doorModernizationImg from '../assets/elevator-options/doors/door_4_ss_hairline.jpg';
import machineModernizationImg from '../assets/maintenance/card_5_component.jpg';
import controllerImg from '../assets/maintenance/maintenance_service_hd.jpg';
import electricalImg from '../assets/maintenance/card_1_amc.jpg';
import safetyImg from '../assets/maintenance/card_4_inspection.jpg';
import heroVisualImg from '../assets/solutions/modernization_explore_hd.jpg';

const PILLARS = [
  {
    icon: TrendingUp,
    title: 'Improved Performance',
  },
  {
    icon: ShieldCheck,
    title: 'Enhanced Safety',
  },
  {
    icon: Lightbulb,
    title: 'Modern Design',
  },
  {
    icon: Cog,
    title: 'Cost-Effective Upgrade',
  }
];

const SOLUTIONS = [
  {
    title: 'Controller Modernization',
    desc: 'Upgrade to advanced, energy-efficient and intelligent control systems.',
    image: controllerImg,
  },
  {
    title: 'Door Modernization',
    desc: 'Modern, reliable and faster door systems for smoother operation.',
    image: doorModernizationImg,
  },
  {
    title: 'Machine Modernization',
    desc: 'Replace old machines with modern, gearless and energy-efficient systems.',
    image: machineModernizationImg,
  },
  {
    title: 'Cabin Modernization',
    desc: 'New cabin designs, finishes, lighting and modern interiors.',
    image: cabinModernizationImg,
  },
  {
    title: 'Electrical & Control Upgrades',
    desc: 'Modern electrical components for better reliability and safety.',
    image: electricalImg,
  },
  {
    title: 'Safety Upgrades',
    desc: 'Install latest safety gears, braking systems and compliance upgrades.',
    image: safetyImg,
  }
];

export default function ModernizationExplorePage({ onBack, backLabel = 'Back to Services' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.lenis?.scrollTo(0, { immediate: true });
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
                MODERNIZATION
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D49A3D] via-[#F3C77D] to-[#D49A3D] mb-6 leading-tight"
              >
                Upgrade. Enhance. Perform Better.
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-sm sm:text-base lg:text-lg text-[#C8D1D8] leading-relaxed max-w-2xl mb-10 font-normal"
              >
                Give your existing elevators and escalators a new life with advanced technology, improved safety, and modern aesthetics. Our modernization solutions enhance performance, reduce downtime, and ensure compliance with the latest safety standards.
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
                  src={heroVisualImg}
                  alt="Modern Elevator Retrofit"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR MODERNIZATION SOLUTIONS (6-CARD GRID)               */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FBFBFA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87C28]/10 border border-[#B87C28]/25 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B87C28] shadow-[0_0_8px_#B87C28]" />
              <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#B87C28]">
                Our Modernization Solutions
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#06111C] tracking-tight">
              Comprehensive Upgrades for Existing Systems
            </h2>
          </div>

          {/* 6 Modernization Solution Cards (2 Rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SOLUTIONS.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={handleContactNavigate}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#D49A3D]/70 transition-all duration-300 p-5 flex flex-col group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[#0A141E]">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-base text-[#06111C] mb-2 group-hover:text-[#B87C28] transition-colors leading-snug">
                  {sol.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed flex-1">
                  {sol.desc}
                </p>
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
              Ready to Upgrade Your Existing Elevators?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8D1D8]">
              Schedule a comprehensive on-site modernization audit and life-cycle assessment.
            </p>
          </div>

          <button
            onClick={handleContactNavigate}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D49A3D] text-white hover:bg-[#B87C28] transition-all text-xs font-bold uppercase tracking-wider shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Schedule Modernization Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
