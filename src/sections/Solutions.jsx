import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Home, 
  Building2, 
  HeartPulse, 
  Package, 
  TrendingUp, 
  Wrench
} from 'lucide-react';

import imgPassenger from '../assets/solutions/passenger.jpg';
import imgResidential from '../assets/solutions/residential.jpg';
import imgCommercial from '../assets/solutions/commercial.jpg';
import imgHospital from '../assets/solutions/hospital.jpg';
import imgIndustrial from '../assets/solutions/industrial.jpg';
import imgEscalators from '../assets/solutions/escalators.jpg';
import imgModernization from '../assets/solutions/modernization.jpg';
import DepthCarousel from '../components/DepthCarousel';

const SOLUTIONS_DATA = [
  {
    id: 'passenger',
    title: 'PASSENGER ELEVATORS',
    icon: Users,
    image: imgPassenger,
    desc: 'Reliable and efficient elevators designed for smooth and comfortable people movement.',
    idealFor: 'Commercial buildings, offices, retail spaces, public facilities',
    badge: 'PEOPLE MOVEMENT',
  },
  {
    id: 'residential',
    title: 'RESIDENTIAL ELEVATORS',
    icon: Home,
    image: imgResidential,
    desc: 'Compact, stylish and safe elevators designed to enhance convenience at home.',
    idealFor: 'Villas, apartments, duplex homes, independent houses',
    badge: 'HOME COMFORT',
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL ELEVATORS',
    icon: Building2,
    image: imgCommercial,
    desc: 'High-performance elevators built to handle greater passenger traffic with reliability and efficiency.',
    idealFor: 'Offices, malls, hotels, IT parks, business complexes',
    badge: 'HIGH TRAFFIC',
  },
  {
    id: 'hospital',
    title: 'HOSPITAL / HEALTHCARE ELEVATORS',
    icon: HeartPulse,
    image: imgHospital,
    desc: 'Spacious and robust elevators designed for the safe and efficient movement of patients, medical staff and equipment.',
    idealFor: 'Hospitals, clinics, healthcare centres, laboratories',
    badge: 'BED & STRETCHER',
  },
  {
    id: 'industrial',
    title: 'INDUSTRIAL ELEVATORS',
    icon: Package,
    image: imgIndustrial,
    desc: 'Heavy-duty elevators designed for the efficient movement of goods and materials.',
    idealFor: 'Warehouses, factories, logistics centres, industrial units',
    badge: 'HEAVY PAYLOAD',
  },
  {
    id: 'escalators',
    title: 'ESCALATORS',
    icon: TrendingUp,
    image: imgEscalators,
    desc: 'Smooth, safe and energy-efficient escalators designed for high-traffic movement.',
    idealFor: 'Malls, airports, metro stations, commercial complexes, public spaces',
    badge: 'CONTINUOUS FLOW',
  },
  {
    id: 'modernization',
    title: 'MODERNIZATION & AMC',
    icon: Wrench,
    image: imgModernization,
    desc: 'Upgrade your existing elevators and escalators with advanced technology for better performance, safety, and reliability.',
    idealFor: 'Old and outdated elevators & escalators in all types of buildings',
    badge: 'SYSTEM RETROFIT',
  },
];

export default function Solutions() {
  const [carouselDims, setCarouselDims] = React.useState({
    width: 380,
    height: 520,
    imgHeight: 270,
    spread: 105,
  });

  React.useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setCarouselDims({
          width: Math.min(270, w - 48),
          height: 440,
          imgHeight: 200,
          spread: 28,
        });
      } else if (w < 768) {
        setCarouselDims({
          width: 310,
          height: 480,
          imgHeight: 230,
          spread: 55,
        });
      } else if (w < 1280) {
        setCarouselDims({
          width: 350,
          height: 510,
          imgHeight: 250,
          spread: 85,
        });
      } else {
        setCarouselDims({
          width: 400,
          height: 540,
          imgHeight: 280,
          spread: 110,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="solutions" 
      className="scroll-mt-20 lg:scroll-mt-24 py-8 sm:py-16 lg:py-24 bg-[#06111C] border-t border-[#075A8F]/25 relative overflow-hidden"
    >

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-[#075A8F]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#FF6A00]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-5 pb-4 sm:mb-10 sm:pb-8 border-b border-[#075A8F]/25"
        >
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-2.5 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_10px_#FF6A00]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#FF6A00] font-mono">
                OUR SOLUTIONS &amp; SPECIFICATIONS
              </span>
              <div className="w-12 h-[2px] bg-[#075A8F]/60 rounded-full" />
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-none">
              ELEVATORS <span className="text-[#0A78B8] font-light">&</span> <span className="text-[#FF6A00]">ESCALATORS</span>
            </h2>

            {/* Specifications sub-lettering */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-[#C8D1D8]/80 mt-1.5 sm:mt-2 font-medium">
              S P E C I F I C A T I O N S
            </p>
          </div>

          <div className="max-w-md lg:text-right">
            <p className="text-xs sm:text-base text-[#C8D1D8] leading-relaxed">
              A complete range of vertical and inclined mobility solutions designed for safety, reliability, and performance.
            </p>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* MOBILE SOLUTIONS DISPLAY (Zero gaps, clean flat cards)    */}
        {/* ========================================================= */}
        <div className="md:hidden mb-4">
          <div className="flex flex-row overflow-x-auto gap-3 pb-2.5 snap-x snap-mandatory no-scrollbar -mx-2 px-2 scroll-smooth">
            {SOLUTIONS_DATA.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative shrink-0 w-[84vw] max-w-[320px] rounded-2xl bg-[#0A1B2A] border border-[#075A8F]/40 p-3.5 shadow-xl flex flex-col justify-between snap-center select-none"
                >
                  {/* Image with Tag */}
                  <div className="relative w-full h-[180px] rounded-xl overflow-hidden border border-[#075A8F]/40 bg-[#06111C] mb-3 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#06111C]/85 backdrop-blur-md border border-[#075A8F]/50">
                      <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#FF6A00] font-bold">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-[#06111C] border border-[#075A8F]/60 flex items-center justify-center text-[#FF6A00] shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-display text-sm font-bold text-white tracking-tight leading-snug uppercase">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#C8D1D8] leading-relaxed font-normal mb-2.5 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#06111C]/90 border border-[#075A8F]/30 border-l-[3px] border-l-[#FF6A00] shrink-0">
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-[#FF6A00] font-bold mb-0.5">
                        IDEAL FOR
                      </span>
                      <p className="text-[11px] text-white/95 leading-relaxed font-medium line-clamp-2">
                        {item.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-1 px-1 text-[10px] font-mono text-[#8EA5B8]">
            <span className="text-[#FF6A00] font-bold">7 SOLUTIONS</span>
            <span>Swipe to browse specs ↔</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP 3D DEPTH CAROUSEL (Displayed on md: screens)      */}
        {/* ========================================================= */}
        <div className="hidden md:block mb-8">
          <div className="relative w-full h-[580px] lg:h-[630px] rounded-2xl overflow-hidden bg-[#0A1B2A]/30 border border-[#075A8F]/30 shadow-2xl backdrop-blur-sm">
            <DepthCarousel
              items={SOLUTIONS_DATA}
              cardWidth={carouselDims.width}
              cardHeight={carouselDims.height}
              radius={24}
              depth={220}
              spread={carouselDims.spread}
              tilt={16}
              tiltDirection="right"
              perspective={1500}
              visibleCards={4}
              falloff={0.2}
              blur={6}
              autoplay={true}
              autoplayDelay={3800}
              loop={true}
              showControls={true}
              showIndicators={true}
              tint="#06111C"
              renderCard={(item) => {
                const Icon = item.icon;
                return (
                  <div className="relative w-full h-full rounded-[24px] bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00]/70 transition-all duration-300 flex flex-col p-4 sm:p-5 shadow-2xl overflow-hidden select-none">
                    
                    {/* 1. Extended Height Framed Image Container */}
                    <div 
                      className="relative w-full rounded-2xl overflow-hidden border border-[#075A8F]/40 bg-[#06111C] mb-3 shrink-0 shadow-md group"
                      style={{ height: carouselDims.imgHeight }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        draggable={false}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Floating Category Tag on Image */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#06111C]/85 backdrop-blur-md border border-[#075A8F]/50 shadow-sm">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6A00] font-bold">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* 2. Structured Content Below Image (Zero Dead Gap) */}
                    <div className="flex flex-col flex-1 justify-between">
                      
                      <div>
                        {/* Title with Aligned Icon */}
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#06111C] border border-[#075A8F]/60 flex items-center justify-center text-[#FF6A00] shrink-0 shadow-[0_0_12px_rgba(255,106,0,0.18)]">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <h3 className="font-display text-base font-bold text-white tracking-tight leading-snug uppercase">
                            {item.title}
                          </h3>
                        </div>

                        {/* Balanced Description Copy */}
                        <p className="text-xs sm:text-[13px] text-[#C8D1D8] leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>

                      {/* 3. Refined IDEAL FOR Callout Box */}
                      <div className="p-3 rounded-xl bg-[#06111C]/90 border border-[#075A8F]/30 border-l-[3px] border-l-[#FF6A00] shrink-0 shadow-inner mt-3">
                        <span className="block text-[9.5px] font-mono uppercase tracking-wider text-[#FF6A00] font-bold mb-0.5">
                          IDEAL FOR
                        </span>
                        <p className="text-xs text-white/95 leading-relaxed font-medium">
                          {item.idealFor}
                        </p>
                      </div>

                    </div>

                  </div>
                );
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
