import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  ChevronsUp,
  Layers,
  DraftingCompass,
  Sparkles,
  Wrench,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import elevatorImg from '../assets/elevators/elevator_hero_cabin_interior.jpg';
import escalatorImg from '../assets/escalators/transit_escalator.jpg';
import installationImg from '../assets/installation/installation_hd.jpg';
import modernizationImg from '../assets/solutions/modernization.jpg';
import maintenanceImg from '../assets/maintenance/maintenance_service_hd.jpg';

const SERVICES = [
  {
    id: 'elevators',
    number: '01',
    title: 'ELEVATORS',
    subtitle: 'High-speed passenger, freight & luxury vertical transit systems.',
    image: elevatorImg,
    icon: ChevronsUp,
    exploreHash: '#elevators-explore',
    buttonText: 'EXPLORE ELEVATORS'
  },
  {
    id: 'escalators',
    number: '02',
    title: 'ESCALATORS',
    subtitle: 'Heavy-duty commercial escalators & inclined moving walkways.',
    image: escalatorImg,
    icon: Layers,
    exploreHash: '#escalators-explore',
    buttonText: 'EXPLORE ESCALATORS'
  },
  {
    id: 'installation',
    number: '03',
    title: 'INSTALLATION',
    subtitle: 'Precision structural hoistway laser alignment & turnkey assembly.',
    image: installationImg,
    icon: DraftingCompass,
    exploreHash: '#installation-explore',
    buttonText: 'EXPLORE SERVICE'
  },
  {
    id: 'modernization',
    number: '04',
    title: 'MODERNIZATION',
    subtitle: 'VFD energy upgrades, microprocessors & cabin aesthetic retrofits.',
    image: modernizationImg,
    icon: Sparkles,
    exploreHash: '#modernization-explore',
    buttonText: 'EXPLORE SERVICE'
  },
  {
    id: 'maintenance',
    number: '05',
    title: 'MAINTENANCE',
    subtitle: '24/7 rapid emergency dispatch, safety audits & certified AMC.',
    image: maintenanceImg,
    icon: Wrench,
    exploreHash: '#maintenance-explore',
    buttonText: 'EXPLORE MAINTENANCE'
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const handleNavigate = (hash) => {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  const handleCardClick = (idx, hash) => {
    if (activeIndex !== idx) {
      setActiveIndex(idx);
    } else {
      handleNavigate(hash);
    }
  };

  const getFlexValue = (isExpanded) => {
    if (isMobile) {
      return isExpanded ? 2.7 : 0.65;
    }
    if (isTablet) {
      return isExpanded ? 2.3 : 0.85;
    }
    return isExpanded ? 2.1 : 0.95;
  };

  return (
    <section
      id="services"
      className="relative scroll-mt-20 lg:scroll-mt-24 py-8 sm:py-16 lg:py-24 bg-[#FBFBFA] text-[#06111C] overflow-hidden selection:bg-[#D49A3D]/20 selection:text-[#06111C]"
    >
      {/* Ambient Architectural Watermark Grid & Soft Sun Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#F5DEB3]/35 via-[#E6CA65]/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E2E8F0]/50 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#06111C 1px, transparent 1px), linear-gradient(90deg, #06111C 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. ARCHITECTURAL SECTION HEADER                           */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-6 mb-4 pb-3 sm:mb-12 sm:pb-8 border-b border-[#E2E8F0]"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#B87C28] font-sans">
                CORE DIVISIONS
              </span>
              <div className="w-10 sm:w-14 h-[2px] bg-[#D49A3D] rounded-full" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#06111C] uppercase leading-none">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A86E18] via-[#D49A3D] to-[#A86E18]">SERVICES</span> &amp; <span className="text-[#06111C]">DIVISIONS</span>
            </h2>
          </div>

          <div className="max-w-md lg:text-right">
            <p className="text-xs sm:text-base text-[#475569] leading-relaxed">
              Explore our turnkey vertical transportation services, from precision new installations and retrofits to certified lifetime care.
            </p>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 2A. MOBILE DEDICATED CAROUSEL (Clear, large, 100% legible) */}
        {/* ========================================================= */}
        <div className="sm:hidden mb-2">
          {/* Quick Division Indicator Tabs */}
          <div className="flex flex-row overflow-x-auto gap-1.5 pb-2.5 mb-2 no-scrollbar -mx-2 px-2">
            {SERVICES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  const track = document.getElementById('mobile-services-track');
                  if (track) {
                    const card = track.children[idx];
                    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                  }
                }}
                className={`shrink-0 px-2.5 py-1 rounded-full text-[9.5px] font-mono font-bold tracking-wider uppercase transition-all ${
                  activeIndex === idx
                    ? 'bg-[#D49A3D] text-white shadow-sm'
                    : 'bg-[#06111C]/10 text-[#475569] hover:bg-[#06111C]/20'
                }`}
              >
                {s.number} {s.title}
              </button>
            ))}
          </div>

          {/* Swipeable Snap Track */}
          <div 
            id="mobile-services-track"
            className="flex flex-row overflow-x-auto gap-3 pb-2.5 snap-x snap-mandatory no-scrollbar -mx-2 px-2 scroll-smooth"
          >
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => handleNavigate(service.exploreHash)}
                  className="relative shrink-0 w-[82vw] max-w-[315px] h-[370px] rounded-2xl overflow-hidden border border-[#D49A3D]/40 shadow-xl p-4 flex flex-col justify-between snap-center cursor-pointer group select-none"
                >
                  {/* Background Image with Dark Vignette */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/95 via-[#06111C]/65 to-[#06111C]/25" />
                  </div>

                  {/* Top Bar: Icon + Number */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-[#06111C]/85 border border-white/20 flex items-center justify-center text-[#D49A3D] shadow-sm backdrop-blur-md">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-white/95 bg-[#06111C]/80 border border-white/20 px-2 py-0.5 rounded-full backdrop-blur-md">
                      {service.number} / 05
                    </span>
                  </div>

                  {/* Bottom: Title, Subtitle, CTA */}
                  <div className="relative z-10 pt-4">
                    <h3 className="font-display font-extrabold uppercase text-xl text-white mb-1.5 leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#E2E8F0] mb-3 leading-relaxed font-normal line-clamp-2">
                      {service.subtitle}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(service.exploreHash);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-bold text-[11px] uppercase tracking-wider bg-[#D49A3D] text-white shadow-[0_0_20px_rgba(212,154,61,0.5)] active:scale-95 cursor-pointer"
                    >
                      <span>{service.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-1 px-1 text-[10px] font-mono text-[#8C7A5B]">
            <span className="text-[#B87C28] font-bold">5 DIVISIONS</span>
            <span>Swipe cards ↔</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2B. TABLET & DESKTOP 5-COLUMN ACCORDION                   */}
        {/* ========================================================= */}
        <div className="hidden sm:flex flex-row gap-2 md:gap-3 xl:gap-5 h-[500px] md:h-[540px] xl:h-[580px] w-full overflow-hidden select-none">
          {SERVICES.map((service, idx) => {
            const isExpanded = activeIndex === idx;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => handleCardClick(idx, service.exploreHash)}
                style={{
                  flex: getFlexValue(isExpanded),
                  transition: 'flex 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer group flex flex-col justify-between ${
                  isExpanded 
                    ? 'p-3.5 sm:p-6 md:p-7 xl:p-8 border-[#D49A3D] shadow-[0_20px_50px_rgba(212,154,61,0.25)]' 
                    : 'p-4 sm:p-5 md:p-5 xl:px-4 xl:py-7 border-[#CBD5E1]/80 hover:border-[#D49A3D]/70 shadow-[0_10px_30px_rgba(6,17,28,0.08)]'
                }`}
              >
                {/* 1. Full-Bleed Background Image with Scale Animation */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/95 via-[#06111C]/75 to-[#06111C]/25" />
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isExpanded ? 'bg-[#D49A3D]/10 opacity-100' : 'bg-transparent opacity-0'
                  }`} />
                </div>

                {/* 2. Content */}
                {isExpanded ? (
                  <>
                    <div className="relative z-10 flex items-center justify-between gap-1.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#06111C]/85 border border-white/20 flex items-center justify-center text-[#D49A3D] shadow-sm backdrop-blur-md shrink-0">
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>

                      <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/95 bg-[#06111C]/80 border border-white/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md shrink-0 whitespace-nowrap">
                        {service.number} / 05
                      </span>
                    </div>

                    <div className="relative z-10 flex flex-col justify-end pt-4 sm:pt-10">
                      <h3 
                        className="font-display font-extrabold uppercase transition-all duration-300 text-lg sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl text-white mb-1 sm:mb-2 leading-tight tracking-tight line-clamp-2"
                        title={service.title}
                      >
                        {service.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs md:text-sm text-[#E2E8F0] mb-3 sm:mb-4 lg:mb-5 leading-snug sm:leading-relaxed font-normal opacity-100 line-clamp-2">
                        {service.subtitle}
                      </p>

                      <div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate(service.exploreHash);
                          }}
                          className="inline-flex items-center justify-between gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap bg-[#D49A3D] text-white shadow-[0_0_25px_rgba(212,154,61,0.5)] hover:bg-[#B87C28] hover:scale-[1.02]"
                        >
                          <span className="truncate max-w-[130px] sm:max-w-none">{service.buttonText}</span>
                          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative z-10 flex items-center justify-between gap-1">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#06111C]/85 border border-white/20 flex items-center justify-center text-[#D49A3D] shadow-sm backdrop-blur-md shrink-0">
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>

                      <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/95 bg-[#06111C]/80 border border-white/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md shrink-0 whitespace-nowrap">
                        {service.number} / 05
                      </span>
                    </div>

                    <div className="relative z-10 flex flex-col justify-end pt-6 sm:pt-8">
                      <h3 
                        className="font-display font-extrabold uppercase text-xs sm:text-xs md:text-sm xl:text-[13.5px] 2xl:text-[15px] text-white/95 mb-2 leading-tight tracking-wider truncate"
                        title={service.title}
                      >
                        {service.title}
                      </h3>

                      <div>
                        <button
                          type="button"
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D49A3D] text-white flex items-center justify-center border border-white/20 transition-colors shadow-sm"
                          title={`Explore ${service.title}`}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Bottom illuminated guide bar */}
                <div className={`absolute bottom-0 inset-x-0 h-1 transition-all duration-500 ${
                  isExpanded ? 'bg-gradient-to-r from-transparent via-[#D49A3D] to-transparent' : 'bg-transparent'
                }`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
