import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Cog, 
  ShieldCheck, 
  Layers
} from 'lucide-react';

// Crystal-clear Ultra-HD Architectural Lift Images
import liftDoorsHd from '../assets/elevators/elevator_hero_lift_doors.jpg';
import cabinInteriorHd from '../assets/elevators/elevator_hero_cabin_interior.jpg';

const CAPABILITIES = [
  {
    id: 'passenger',
    icon: Users,
    label: 'PASSENGER & PANORAMIC LIFTS',
  },
  {
    id: 'mrl',
    icon: Cog,
    label: 'MRL GEARLESS TECHNOLOGY',
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    label: 'EN 81-20/50 EUROPEAN SAFETY',
  },
  {
    id: 'cabin',
    icon: Layers,
    label: 'CUSTOM CABIN ARCHITECTURE',
  },
];

export default function ElevatorHero({ onExplore }) {
  const handleExploreClick = (e) => {
    if (onExplore) {
      if (e) e.preventDefault();
      onExplore();
    }
  };

  return (
    <section 
      id="elevators" 
      className="relative scroll-mt-20 lg:scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-[#FBFBFA] text-[#06111C] overflow-hidden selection:bg-[#D49A3D]/20 selection:text-[#06111C] border-t border-[#EAE3D2]"
    >
      {/* Ambient Architectural Watermark Grid & Soft Sun Glow (Identical to About Section) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#F5DEB3]/35 via-[#E6CA65]/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E2E8F0]/50 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#06111C 1px, transparent 1px), linear-gradient(90deg, #06111C 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO NARRATIVE, CARDS, CTAS & METRICS        */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Eyebrow Tag with Golden Rule Line */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87C28]/10 border border-[#B87C28]/25 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B87C28] shadow-[0_0_8px_#B87C28]" />
              <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#B87C28]">
                Vertical Mobility Systems
              </span>
            </motion.div>

            {/* 2. Headline: Bold Stately Luxury Roman ELEVATORS */}
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-luxury text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#06111C] uppercase leading-[1.05] mb-3"
            >
              ELEVATORS
            </motion.h2>

            {/* 3. Subtitle: Golden Amber Editorial Serif Typography */}
            <motion.h3 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="font-editorial italic text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A86E18] via-[#D49A3D] to-[#A86E18] tracking-tight leading-snug mb-5"
            >
              Vertical Mobility Designed for Every Space
            </motion.h3>

            {/* 4. Descriptive Paragraph Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal mb-8"
            >
              DM Lifts &amp; Escalators provides advanced elevator solutions engineered for residential, commercial, hospital, and high-rise developments — combining whisper-quiet VVVF drive intelligence, certified EN 81 safety, and bespoke architectural aesthetics.
            </motion.p>

            {/* 5. 4-Card Horizontal Capability Matrix (Exact to Reference Mockup) */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mb-8"
            >
              {CAPABILITIES.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/95 hover:bg-white border border-[#E2E8F0]/90 hover:border-[#D49A3D]/50 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(212,154,61,0.12)] transition-all duration-300 flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Circular Golden Badge */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF8ED] to-[#FDE8CC] border border-[#E9C794]/60 flex items-center justify-center text-[#B87C28] mb-2.5 group-hover:scale-108 transition-transform duration-300 shadow-2xs">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10.5px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#06111C] group-hover:text-[#A86E18] transition-colors leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* 6. Action Button: Explore Button */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center"
            >
              {/* Obsidian Pill: EXPLORE ELEVATORS -> */}
              <a
                href="#elevators-explore"
                onClick={handleExploreClick}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#06111C] text-white hover:bg-[#0A1B2A] transition-all duration-200 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(6,17,28,0.2)] hover:shadow-[0_15px_30px_rgba(212,154,61,0.25)] hover:scale-102 active:scale-98"
              >
                <span>EXPLORE ELEVATORS</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: HD DUAL LOBBY SHOWCASE + INSET CABIN        */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[500px] lg:max-w-none"
            >
              
              {/* Organic Curved Gold Backdrop Frame (matches the Reference Artwork) */}
              <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden p-2 sm:p-2.5 bg-gradient-to-tr from-[#E6B86F] via-[#FCE4B8] to-[#D49A3D] shadow-[0_25px_60px_rgba(212,154,61,0.22)]">
                
                {/* Primary Ultra-HD Golden Dual Elevator Lobby Image */}
                <div className="relative rounded-[30px] sm:rounded-[38px] overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-[#0A1B2A] group">
                  <img
                    src={liftDoorsHd}
                    alt="DM Elevators Luxury Modern Lift Entrance with Bronze Stainless Steel Doors and Digital Floor Indicator"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03]"
                    loading="eager"
                  />
                  {/* Subtle glass reflection & bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

              {/* Overlapping Inset Card: Ultra-HD Luxury Cabin Interior (Exact to Reference Mockup) */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute -bottom-4 left-2 sm:-bottom-8 sm:-left-6 lg:-left-6 w-48 sm:w-60 md:w-72 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-[#E6B86F] to-[#FFFFFF] shadow-[0_20px_45px_rgba(0,0,0,0.25)] z-20 group"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square bg-[#06111C]">
                  <img
                    src={cabinInteriorHd}
                    alt="DM Elevators Luxury Gold Cabin Interior with Marble Flooring and Cove Downlights"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Ambient Glow Accent Under the Showcase */}
              <div className="absolute -bottom-12 -right-8 w-64 h-64 bg-[#D49A3D]/25 rounded-full blur-[80px] pointer-events-none -z-10" />

            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
