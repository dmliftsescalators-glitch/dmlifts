import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Compass, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import transitEscalatorImg from '../assets/escalators/transit_escalator.jpg';
import movingWalkwayImg from '../assets/escalators/moving_walkway.jpg';
import PillButton from '../components/PillButton';

const ESCALATOR_CAPABILITIES = [
  {
    id: 'commercial',
    icon: TrendingUp,
    label: 'COMMERCIAL & MASS TRANSIT',
  },
  {
    id: 'incline',
    icon: Compass,
    label: '30° & 35° INCLINATION TRUSS',
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    label: 'EN 115 EUROPEAN SAFETY',
  },
  {
    id: 'walkways',
    icon: Layers,
    label: 'MOVING WALKWAYS & TRAVELATORS',
  },
];

export default function EscalatorHero({ onExplore }) {
  const handleExploreClick = (e) => {
    if (onExplore) {
      if (e) e.preventDefault();
      onExplore();
    }
  };

  return (
    <section 
      id="escalators" 
      className="relative scroll-mt-20 lg:scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-[#06111C] text-white overflow-hidden border-t border-[#075A8F]/30 selection:bg-[#FF6A00]/25 selection:text-white"
    >
      {/* Background Architectural Grid & Atmospheric Glow Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#075A8F]/15 rounded-full blur-[170px]" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#FF6A00]/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 architectural-grid opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO NARRATIVE, CARDS & ACTION BUTTON        */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Eyebrow Tag with Architectural Rule */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_10px_#FF6A00]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#FF6A00] font-mono">
                CONTINUOUS TRANSIT MOBILITY
              </span>
              <div className="w-12 h-[2px] bg-[#075A8F]/60 rounded-full" />
            </motion.div>

            {/* 2. Headline: Bold Stately Display ESCALATORS */}
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05] mb-3"
            >
              ESCALATORS
            </motion.h2>

            {/* 3. Subtitle: Cyan / Amber Gradient Typography */}
            <motion.h3 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0A78B8] via-[#38BDF8] to-[#FF6A00] tracking-tight leading-snug mb-5"
            >
              Continuous Movement Engineered for Modern Architecture
            </motion.h3>

            {/* 4. Descriptive Paragraph Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-sm sm:text-base text-[#C8D1D8] leading-relaxed max-w-2xl font-normal mb-8"
            >
              DM Lifts &amp; Escalators provides high-capacity commercial, mass-transit escalators and moving walkways engineered for seamless pedestrian throughput, whisper-quiet VVVF drive intelligence, and EN 115 European safety compliance.
            </motion.p>

            {/* 5. 4-Card Capability Matrix (Symmetrically Aligned to Elevator Section) */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mb-8"
            >
              {ESCALATOR_CAPABILITIES.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#0A1B2A]/90 hover:bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00]/60 shadow-[0_4px_16px_rgba(6,17,28,0.4)] hover:shadow-[0_8px_24px_rgba(255,106,0,0.15)] transition-all duration-300 flex flex-col items-center text-center group cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#06111C] border border-[#075A8F]/60 flex items-center justify-center text-[#FF6A00] mb-2.5 group-hover:scale-108 group-hover:border-[#FF6A00] transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10.5px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-white group-hover:text-[#FF6A00] transition-colors leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* 6. Action Button: Pill Button Explore */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center"
            >
              <PillButton
                href="#escalators-explore"
                onClick={handleExploreClick}
                baseBg="#FF6A00"
                circleBg="#FFFFFF"
                textColor="#FFFFFF"
                hoverTextColor="#06111C"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:shadow-[0_0_35px_rgba(255,106,0,0.7)]"
              >
                EXPLORE ESCALATORS
              </PillButton>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: HD ESCALATOR SHOWCASE + INSET TRAVELATOR   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[500px] lg:max-w-none"
            >
              
              {/* Architectural Frame with Metallic Blue & Amber Edge */}
              <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden p-2 sm:p-2.5 bg-gradient-to-tr from-[#075A8F] via-[#0A78B8] to-[#FF6A00] shadow-[0_25px_60px_rgba(7,90,143,0.35)]">
                
                {/* Primary Ultra-HD Commercial Transit Escalator Image */}
                <div className="relative rounded-[30px] sm:rounded-[38px] overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-[#0A1B2A] group">
                  <img
                    src={transitEscalatorImg}
                    alt="DM Escalators Commercial Transit Atrium Installation"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.05]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/40 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

              {/* Overlapping Inset Card: Ultra-HD Moving Walkway (Travelator) */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute -bottom-4 left-2 sm:-bottom-8 sm:-left-6 lg:-left-6 w-48 sm:w-60 md:w-72 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-[#075A8F] to-[#FF6A00] shadow-[0_20px_45px_rgba(0,0,0,0.5)] z-20 group"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square bg-[#06111C]">
                  <img
                    src={movingWalkwayImg}
                    alt="DM Moving Walkways Continuous Pedestrian Travelators"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Ambient Glow Accent Under the Showcase */}
              <div className="absolute -bottom-12 -right-8 w-64 h-64 bg-[#075A8F]/25 rounded-full blur-[80px] pointer-events-none -z-10" />

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
