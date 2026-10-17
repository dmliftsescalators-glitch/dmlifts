import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardCheck, 
  Cog, 
  Headphones, 
  Search, 
  Wrench, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  ArrowRight,
  Play,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  FolderOpen,
  LayoutGrid,
  Layers
} from 'lucide-react';

// Elevator Card Images (Lifts)
import lift1Img from '../assets/maintenance/card_1_amc.jpg';
import lift2Img from '../assets/maintenance/card_2_preventive.jpg';
import lift3Img from '../assets/maintenance/card_3_breakdown.jpg';
import lift4Img from '../assets/maintenance/card_4_inspection.jpg';
import lift5Img from '../assets/maintenance/card_5_component.jpg';
import lift6Img from '../assets/maintenance/card_6_safety.jpg';

// Dedicated Escalator Card Images (Escalators & Moving Walkways)
import esc1Img from '../assets/escalators/commercial_escalator.jpg';
import esc2Img from '../assets/escalators/transit_escalator.jpg';
import esc3Img from '../assets/about/escalator_atrium_hd.jpg';
import esc4Img from '../assets/escalators/moving_walkway.jpg';
import esc5Img from '../assets/solutions/escalators.jpg';
import esc6Img from '../assets/escalators/escalators-hero-bg.jpg';

const SERVICES_DATA = {
  elevator: [
    {
      id: '01',
      title: 'AMC Maintenance',
      subtitle: 'Annual Maintenance Contract services for ongoing elevator care and servicing',
      icon: ClipboardCheck,
      color: '#0EA5E9', // Sky blue
      headerGradient: 'from-[#38BDF8] to-[#0284C7]',
      glowColor: 'rgba(14, 165, 233, 0.45)',
      img: lift1Img,
    },
    {
      id: '02',
      title: 'Preventive Maintenance',
      subtitle: 'Regular inspection and maintenance to help identify potential issues before they affect operation',
      icon: Cog,
      color: '#10B981', // Emerald green
      headerGradient: 'from-[#34D399] to-[#059669]',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      img: lift2Img,
    },
    {
      id: '03',
      title: 'Breakdown Support',
      subtitle: 'Support for unexpected elevator operational issues and breakdowns',
      icon: Headphones,
      color: '#F59E0B', // Amber orange
      headerGradient: 'from-[#FBBF24] to-[#D97706]',
      glowColor: 'rgba(245, 158, 11, 0.45)',
      img: lift3Img,
    },
    {
      id: '04',
      title: 'Inspection & Servicing',
      subtitle: 'Routine checks and servicing of elevator systems and components',
      icon: Search,
      color: '#8B5CF6', // Royal purple
      headerGradient: 'from-[#A78BFA] to-[#7C3AED]',
      glowColor: 'rgba(139, 92, 246, 0.45)',
      img: lift4Img,
    },
    {
      id: '05',
      title: 'Component Replacement',
      subtitle: 'Replacement of worn or required components as part of maintenance and servicing',
      icon: Wrench,
      color: '#F43F5E', // Rose coral
      headerGradient: 'from-[#F472B6] to-[#E11D48]',
      glowColor: 'rgba(244, 63, 94, 0.45)',
      img: lift5Img,
    },
    {
      id: '06',
      title: 'Safety Checks',
      subtitle: 'Inspection and attention to important elevator safety systems and components',
      icon: ShieldCheck,
      color: '#EAB308', // Gold yellow
      headerGradient: 'from-[#FCD34D] to-[#CA8A04]',
      glowColor: 'rgba(234, 179, 8, 0.45)',
      img: lift6Img,
    },
  ],
  escalator: [
    {
      id: '01',
      title: 'AMC Maintenance',
      subtitle: 'Ongoing maintenance support for escalator systems',
      icon: ClipboardCheck,
      color: '#0EA5E9',
      headerGradient: 'from-[#38BDF8] to-[#0284C7]',
      glowColor: 'rgba(14, 165, 233, 0.45)',
      img: esc1Img, // Commercial Atrium Escalator
    },
    {
      id: '02',
      title: 'Preventive Maintenance',
      subtitle: 'Regular checks and servicing to help maintain smooth operation',
      icon: Cog,
      color: '#10B981',
      headerGradient: 'from-[#34D399] to-[#059669]',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      img: esc2Img, // Heavy-Duty Transit Escalator
    },
    {
      id: '03',
      title: 'Breakdown Support',
      subtitle: 'Support for unexpected escalator operational issues',
      icon: Headphones,
      color: '#F59E0B',
      headerGradient: 'from-[#FBBF24] to-[#D97706]',
      glowColor: 'rgba(245, 158, 11, 0.45)',
      img: esc3Img, // Commercial Escalator Atrium
    },
    {
      id: '04',
      title: 'Inspection & Servicing',
      subtitle: 'Routine inspection and servicing of important escalator components',
      icon: Search,
      color: '#8B5CF6',
      headerGradient: 'from-[#A78BFA] to-[#7C3AED]',
      glowColor: 'rgba(139, 92, 246, 0.45)',
      img: esc4Img, // Horizontal Moving Walkway & Step Drive
    },
    {
      id: '05',
      title: 'Component Replacement',
      subtitle: 'Replacement of components when required during maintenance',
      icon: Wrench,
      color: '#F43F5E',
      headerGradient: 'from-[#F472B6] to-[#E11D48]',
      glowColor: 'rgba(244, 63, 94, 0.45)',
      img: esc5Img, // Escalator Steps, Drive Chains & Rollers
    },
    {
      id: '06',
      title: 'Safety Checks',
      subtitle: 'Regular attention to important safety-related systems and components',
      icon: ShieldCheck,
      color: '#EAB308',
      headerGradient: 'from-[#FCD34D] to-[#CA8A04]',
      glowColor: 'rgba(234, 179, 8, 0.45)',
      img: esc6Img, // Combplate Safety Switches & Skirt Brushes
    },
  ],
};

// Precise fan stations matching the reference image arc:
// Cards emerge directly from the folder mouth, touching in a seamless semicircle!
const FAN_STATIONS = [
  { x: -330, y: -50,  rotate: -25, zIndex: 11 },
  { x: -200, y: -120, rotate: -15, zIndex: 12 },
  { x: -68,  y: -158, rotate: -5,  zIndex: 13 },
  { x: 68,   y: -158, rotate: 5,   zIndex: 13 },
  { x: 200,  y: -120, rotate: 15,  zIndex: 12 },
  { x: 330,  y: -50,  rotate: 25,  zIndex: 11 },
];

export default function Maintenance() {
  const [selectedCategory, setSelectedCategory] = useState('elevator');
  // revealedCount: reveals cards one-by-one from 0 up to 6
  const [revealedCount, setRevealedCount] = useState(6);
  const [isRevealing, setIsRevealing] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [viewMode, setViewMode] = useState('arc'); // 'arc' | 'grid'
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const currentServices = SERVICES_DATA[selectedCategory];

  // Mobile navigation handlers
  const handlePrevMobileCard = () => {
    setActiveMobileIdx((prev) => (prev > 0 ? prev - 1 : currentServices.length - 1));
  };

  const handleNextMobileCard = () => {
    setActiveMobileIdx((prev) => (prev < currentServices.length - 1 ? prev + 1 : 0));
  };

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    // Ensure gesture was primarily horizontal
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX > 0) {
        handleNextMobileCard();
      } else {
        handlePrevMobileCard();
      }
    }
    touchStartX.current = 0;
    touchStartY.current = 0;
  };

  // Sequence revelation: reveals one card at a time with smooth delays
  const triggerRevealOneByOne = () => {
    if (isRevealing) return;
    setIsRevealing(true);
    setRevealedCount(0);

    const timeouts = [];
    [1, 2, 3, 4, 5, 6].forEach((count, i) => {
      const t = setTimeout(() => {
        setRevealedCount(count);
        if (i === 5) setIsRevealing(false);
      }, (i + 1) * 320);
      timeouts.push(t);
    });
  };

  // Pack back into folder one by one in reverse
  const triggerPackOneByOne = () => {
    if (isRevealing) return;
    setIsRevealing(true);

    const timeouts = [];
    [5, 4, 3, 2, 1, 0].forEach((count, i) => {
      const t = setTimeout(() => {
        setRevealedCount(count);
        if (i === 5) setIsRevealing(false);
      }, (i + 1) * 160);
      timeouts.push(t);
    });
  };

  // Switch category and animate cards in one by one for the new division
  const handleCategorySelect = (category) => {
    if (category === selectedCategory || isRevealing) return;
    setSelectedCategory(category);
    setActiveMobileIdx(0);
    setRevealedCount(0);
    setTimeout(() => {
      triggerRevealOneByOne();
    }, 120);
  };

  // Toggle or reveal next
  const handleFolderClick = () => {
    if (isRevealing) return;
    if (revealedCount === 6) {
      triggerPackOneByOne();
    } else if (revealedCount === 0) {
      triggerRevealOneByOne();
    }
  };

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const cardConfig = useMemo(() => {
    if (isMobile) {
      const cardW = Math.min(226, Math.max(195, windowWidth - 84));
      return {
        cardWidth: cardW,
        cardHeight: 250,
        folderWidth: Math.min(345, Math.max(280, windowWidth - 32)),
        folderHeight: 130,
        stageHeight: revealedCount > 0 ? 405 : 160,
        bottomOffset: 75,
      };
    } else if (isTablet) {
      return {
        cardWidth: 152,
        cardHeight: 260,
        folderWidth: 420,
        folderHeight: 155,
        stageHeight: revealedCount > 0 ? 470 : 195,
        bottomOffset: 135,
        stations: [
          { x: -230, y: -45, rotate: -22, zIndex: 11 },
          { x: -140, y: -95, rotate: -14, zIndex: 12 },
          { x: -48,  y: -125, rotate: -5,  zIndex: 13 },
          { x: 48,   y: -125, rotate: 5,   zIndex: 13 },
          { x: 140,  y: -95, rotate: 14,  zIndex: 12 },
          { x: 230,  y: -45, rotate: 22,  zIndex: 11 },
        ]
      };
    } else {
      return {
        cardWidth: 172,
        cardHeight: 295,
        folderWidth: 460,
        folderHeight: 168,
        stageHeight: revealedCount > 0 ? 590 : 215,
        bottomOffset: 155,
        stations: [
          { x: -330, y: -50,  rotate: -25, zIndex: 11 },
          { x: -200, y: -120, rotate: -15, zIndex: 12 },
          { x: -68,  y: -158, rotate: -5,  zIndex: 13 },
          { x: 68,   y: -158, rotate: 5,   zIndex: 13 },
          { x: 200,  y: -120, rotate: 15,  zIndex: 12 },
          { x: 330,  y: -50,  rotate: 25,  zIndex: 11 },
        ]
      };
    }
  }, [isMobile, isTablet, windowWidth, revealedCount]);

  // Dynamic motion animation calculation for each card
  const getCardMotion = (idx) => {
    const isRevealed = idx < revealedCount;
    if (!isRevealed) {
      return {
        x: 0,
        y: 60,
        rotate: 0,
        scale: 0.65,
        opacity: 0,
        zIndex: 1,
      };
    }

    if (isMobile) {
      let diff = idx - activeMobileIdx;
      if (diff > 3) diff -= 6;
      if (diff < -3) diff += 6;

      if (diff === 0) {
        return {
          x: 0,
          y: -42,
          rotate: 0,
          scale: 1,
          opacity: 1,
          zIndex: 26,
        };
      } else if (diff === -1) {
        return {
          x: -78,
          y: -24,
          rotate: -10,
          scale: 0.88,
          opacity: 0.85,
          zIndex: 18,
        };
      } else if (diff === 1) {
        return {
          x: 78,
          y: -24,
          rotate: 10,
          scale: 0.88,
          opacity: 0.85,
          zIndex: 18,
        };
      } else if (diff === -2) {
        return {
          x: -126,
          y: -12,
          rotate: -18,
          scale: 0.76,
          opacity: 0.45,
          zIndex: 12,
        };
      } else if (diff === 2) {
        return {
          x: 126,
          y: -12,
          rotate: 18,
          scale: 0.76,
          opacity: 0.45,
          zIndex: 12,
        };
      } else {
        return {
          x: diff < 0 ? -145 : 145,
          y: -6,
          rotate: diff < 0 ? -22 : 22,
          scale: 0.65,
          opacity: 0,
          zIndex: 8,
        };
      }
    }

    // Tablet & Desktop
    const station = cardConfig.stations[idx] || cardConfig.stations[0];
    const isHovered = hoveredIdx === idx;
    return {
      x: station.x,
      y: isHovered ? station.y - 20 : station.y,
      rotate: station.rotate,
      scale: isHovered ? 1.06 : 1,
      opacity: 1,
      zIndex: isHovered ? 40 : station.zIndex,
    };
  };

  return (
    <section 
      id="maintenance" 
      className="relative scroll-mt-20 lg:scroll-mt-24 py-8 sm:py-16 lg:py-24 bg-[#FBFBFA] text-[#06111C] overflow-hidden selection:bg-[#D49A3D]/20 selection:text-[#06111C] border-t border-[#EAE3D2]"
    >
      {/* Ambient Architectural Watermark Grid & Soft Glow */}
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
        
        {/* ========================================================= */}
        {/* 1. HERO SECTION HEADER                                    */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#EAE3D2]">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B87C28] shadow-[0_0_10px_#B87C28]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#B87C28] font-mono">
                MAINTENANCE &amp; AMC
              </span>
              <div className="w-10 sm:w-14 h-[2px] bg-[#D49A3D] rounded-full" />
            </div>

            <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#06111C] uppercase leading-tight">
              KEEPING YOUR VERTICAL <span className="text-[#B87C28] font-luxury">MOBILITY MOVING.</span>
            </h2>

            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-[#A86E18] mt-2 font-semibold">
              L I F E C Y C L E &nbsp; C A R E &nbsp; &amp; &nbsp; S E R V I C I N G
            </p>
          </div>

          <div className="max-w-md lg:text-right">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Professional maintenance and support solutions for elevators and escalators, designed for safe, reliable and efficient operation.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. CHOOSE BETWEEN ELEVATOR & ESCALATOR                    */}
        {/* ========================================================= */}
        <div className="mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Elevator Button */}
            <button
              onClick={() => handleCategorySelect('elevator')}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden cursor-pointer flex items-center justify-between ${
                selectedCategory === 'elevator'
                  ? 'bg-gradient-to-br from-[#FFFDF9] to-[#FDF4E7] border-[#D49A3D] shadow-[0_8px_25px_rgba(212,154,61,0.18)] -translate-y-0.5'
                  : 'bg-white/90 border-[#E2E8F0] hover:border-[#D49A3D]/60 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  selectedCategory === 'elevator'
                    ? 'bg-[#B87C28] text-white shadow-md'
                    : 'bg-[#FFF8ED] text-[#B87C28]'
                }`}>
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#B87C28] font-bold block">
                    DIVISION 01
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#06111C] uppercase tracking-tight">
                    Elevator Maintenance
                  </h3>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedCategory === 'elevator' ? 'border-[#B87C28] bg-[#B87C28]' : 'border-[#CBD5E1]'
              }`}>
                {selectedCategory === 'elevator' && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </button>

            {/* Escalator Button */}
            <button
              onClick={() => handleCategorySelect('escalator')}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden cursor-pointer flex items-center justify-between ${
                selectedCategory === 'escalator'
                  ? 'bg-gradient-to-br from-[#FFFDF9] to-[#FDF4E7] border-[#D49A3D] shadow-[0_8px_25px_rgba(212,154,61,0.18)] -translate-y-0.5'
                  : 'bg-white/90 border-[#E2E8F0] hover:border-[#D49A3D]/60 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  selectedCategory === 'escalator'
                    ? 'bg-[#B87C28] text-white shadow-md'
                    : 'bg-[#FFF8ED] text-[#B87C28]'
                }`}>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#B87C28] font-bold block">
                    DIVISION 02
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#06111C] uppercase tracking-tight">
                    Escalator Maintenance
                  </h3>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedCategory === 'escalator' ? 'border-[#B87C28] bg-[#B87C28]' : 'border-[#CBD5E1]'
              }`}>
                {selectedCategory === 'escalator' && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </button>
          </div>
        </div>



        {/* ========================================================= */}
        {/* 3. VIEW MODE TOGGLE (FANNED DOSSIER vs DETAILED GRID)     */}
        {/* ========================================================= */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            type="button"
            onClick={() => setViewMode('arc')}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              viewMode === 'arc'
                ? 'bg-[#B87C28] text-white shadow-md'
                : 'bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#06111C]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>FANNED DOSSIER</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#B87C28] text-white shadow-md'
                : 'bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#06111C]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>DETAILED GRID</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* 4. MAIN STAGE: THE EXACT FOLDER + RAINBOW ARC             */}
        {/* ========================================================= */}
        {viewMode === 'arc' ? (
          <motion.div 
            animate={{ height: cardConfig.stageHeight }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center items-end py-2 overflow-hidden"
          >
            <div 
              className="relative w-full max-w-[420px] sm:max-w-[700px] lg:max-w-[1050px] mx-auto flex justify-center items-end select-none"
              style={{ height: cardConfig.stageHeight }}
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              
              {/* Soft Golden Ambient Backdrop Glow */}
              <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[850px] h-[300px] bg-gradient-to-b from-[#FDE68A]/25 via-[#F59E0B]/10 to-transparent rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 ${
                revealedCount > 0 ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Radiant Rainbow Glow Ribbon along the base of cards behind folder */}
              <div 
                className={`absolute bottom-[105px] sm:bottom-[135px] lg:bottom-[155px] left-1/2 -translate-x-1/2 w-[85%] max-w-[720px] h-12 bg-gradient-to-r from-[#38BDF8] via-[#34D399] via-[#FBBF24] via-[#A78BFA] via-[#F472B6] to-[#FCD34D] rounded-full blur-2xl pointer-events-none transition-opacity duration-700 ${
                  revealedCount > 0 ? 'opacity-70' : 'opacity-0'
                }`} 
              />

              {/* ----------------------------------------------------------- */}
              {/* MOBILE NAVIGATION CHEVRONS                                  */}
              {/* ----------------------------------------------------------- */}
              {isMobile && revealedCount > 0 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevMobileCard();
                    }}
                    aria-label="Previous service"
                    className="absolute left-1 top-[36%] -translate-y-1/2 z-35 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-[#D49A3D]/40 text-[#B87C28] shadow-[0_4px_14px_rgba(0,0,0,0.18)] flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextMobileCard();
                    }}
                    aria-label="Next service"
                    className="absolute right-1 top-[36%] -translate-y-1/2 z-35 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-[#D49A3D]/40 text-[#B87C28] shadow-[0_4px_14px_rgba(0,0,0,0.18)] flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </>
              )}

              {/* ----------------------------------------------------------- */}
              {/* MOBILE PAGINATION DOTS PILL                                 */}
              {/* ----------------------------------------------------------- */}
              {isMobile && revealedCount > 0 && (
                <div className="absolute bottom-[136px] left-1/2 -translate-x-1/2 z-35 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#E2E8F0] shadow-sm">
                  {currentServices.map((svc, i) => {
                    const isActive = activeMobileIdx === i;
                    return (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMobileIdx(i);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          isActive ? 'w-5' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                        style={{
                          backgroundColor: isActive ? svc.color : undefined,
                        }}
                        aria-label={`Show ${svc.title}`}
                      />
                    );
                  })}
                </div>
              )}

              {/* ----------------------------------------------------------- */}
              {/* 6 CARDS: ROOTED DIRECTLY AT FOLDER MOUTH & FANNING OUT      */}
              {/* ----------------------------------------------------------- */}
              <div className="absolute inset-0 pointer-events-none">
                {currentServices.map((service, idx) => {
                  const isRevealed = idx < revealedCount;
                  const isHovered = hoveredIdx === idx;
                  const IconComp = service.icon;

                  return (
                    <motion.div
                      key={service.id}
                      initial={false}
                      animate={getCardMotion(idx)}
                      transition={{
                        type: 'spring',
                        damping: 22,
                        stiffness: 140,
                        mass: 0.8,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isMobile) {
                          if (activeMobileIdx !== idx) {
                            setActiveMobileIdx(idx);
                          } else {
                            setHoveredIdx(hoveredIdx === idx ? null : idx);
                          }
                        } else {
                          setHoveredIdx(hoveredIdx === idx ? null : idx);
                        }
                      }}
                      onMouseEnter={() => !isMobile && setHoveredIdx(idx)}
                      onMouseLeave={() => !isMobile && setHoveredIdx(null)}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: `${cardConfig.bottomOffset}px`,
                        width: `${cardConfig.cardWidth}px`,
                        height: `${cardConfig.cardHeight}px`,
                        marginLeft: `-${cardConfig.cardWidth / 2}px`,
                        transformOrigin: '50% 100%',
                        pointerEvents: isRevealed ? 'auto' : 'none',
                      }}
                      className="cursor-pointer group select-none"
                    >
                      {/* Card Outer Shell with Colored Glowing Rim */}
                      <div 
                        style={{
                          borderColor: service.color,
                          boxShadow: (isHovered || (isMobile && activeMobileIdx === idx))
                            ? `0 20px 40px ${service.glowColor}, 0 0 25px ${service.color}80` 
                            : `0 12px 28px rgba(0,0,0,0.12), 0 0 16px ${service.glowColor}`,
                        }}
                        className="w-full h-full rounded-2xl overflow-hidden border-2 bg-white flex flex-col transition-shadow duration-300 relative shadow-lg"
                      >
                        
                        {/* Top Gradient Header */}
                        <div className={`w-full h-[78px] sm:h-[95px] lg:h-[115px] p-2.5 sm:p-3 lg:p-3.5 bg-gradient-to-b ${service.headerGradient} text-white flex flex-col justify-between shrink-0 relative overflow-hidden`}>
                          {/* Ambient soft glow inside header */}
                          <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full blur-xl pointer-events-none" />

                          {/* Top Row: Icon + ID Pill */}
                          <div className="flex items-center justify-between">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/25 backdrop-blur-xs flex items-center justify-center text-white border border-white/40 shadow-xs">
                              <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                            </div>
                            <span className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-black/20 text-white/95">
                              {service.id}
                            </span>
                          </div>

                          {/* Title & Concise Subtitle */}
                          <div className="relative z-10">
                            <h4 className="font-sans font-bold text-[11.5px] sm:text-xs lg:text-[13px] leading-tight text-white tracking-tight drop-shadow-xs">
                              {service.title}
                            </h4>
                            <p className="text-[8.5px] sm:text-[9.5px] leading-tight text-white/90 mt-0.5 line-clamp-1 sm:line-clamp-2 font-normal">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Photo Section */}
                        <div className="w-full flex-1 relative overflow-hidden bg-slate-900">
                          <img 
                            src={service.img} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Action hint overlay */}
                          <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[8px] sm:text-[9px] font-mono font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
                              {selectedCategory === 'elevator' ? 'LIFT CARE' : 'ESCALATOR CARE'}
                            </span>
                            <span className="text-amber-300">→</span>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ----------------------------------------------------------- */}
              {/* THE MASTER FOLDER (IN FOREGROUND, COVERING BOTTOM OF CARDS) */}
              {/* ----------------------------------------------------------- */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
                <motion.div
                  onClick={handleFolderClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer select-none group"
                  title={
                    revealedCount === 6 
                      ? "Click folder to pack cards inside" 
                      : `Click folder to reveal card (${revealedCount + 1}/6)`
                  }
                >
                  {/* Folder Shell matching the reference image */}
                  <div 
                    style={{
                      width: `${cardConfig.folderWidth}px`,
                      height: `${cardConfig.folderHeight}px`,
                    }}
                    className="relative transition-all duration-300"
                  >
                    
                    {/* Top Golden Rim Illumination */}
                    <div className="absolute -top-1 inset-x-4 h-2 bg-gradient-to-r from-transparent via-[#FDE68A] to-transparent blur-[2px] opacity-80" />
                    
                    {/* Folder 3D Body: Dark Charcoal Metallic with Gold Beveled Rim */}
                    <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#1C2433] via-[#121722] to-[#0A0E17] border-2 border-[#D49A3D]/80 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_25px_rgba(212,154,61,0.22)] flex flex-col justify-between p-3.5 sm:p-5 relative overflow-hidden">
                      
                      {/* Sculpted top lip contour with golden rim */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#B87C28] via-[#FDE68A] to-[#B87C28] shadow-[0_0_12px_#FDE68A]" />

                      {/* Ambient lighting inside folder face */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-16 bg-[#D49A3D]/10 rounded-full blur-xl pointer-events-none" />

                      {/* Folder Top Metadata Row */}
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#94A3B8] relative z-10">
                        <span className="flex items-center gap-1.5 text-[#D49A3D] font-bold">
                          <Sparkles className="w-3 h-3 text-[#FDE68A]" />
                          <span>{selectedCategory === 'elevator' ? 'ELEVATOR DOSSIER' : 'ESCALATOR DOSSIER'}</span>
                        </span>
                        <span className="bg-white/10 px-2 py-0.5 rounded text-white/90 font-bold">
                          {isMobile && revealedCount === 6
                            ? `CARD ${activeMobileIdx + 1} OF 6`
                            : revealedCount === 6 
                              ? 'ALL 6 REVEALED' 
                              : `${revealedCount}/6 ACTIVE`}
                        </span>
                      </div>

                      {/* Center Brand Identity (Exact logo from reference image) */}
                      <div className="flex flex-col items-center justify-center my-auto relative z-10 text-center">
                        <div className="flex items-center gap-2">
                          <span className="font-luxury text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#E2A63B] to-[#B87C28] drop-shadow-[0_2px_12px_rgba(212,154,61,0.6)]">
                            DM
                          </span>
                        </div>
                        {/* Gold Swoop Bar */}
                        <div className="h-[2px] w-24 sm:w-28 bg-gradient-to-r from-transparent via-[#FDE68A] to-transparent my-1" />
                        <span className="text-[9.5px] sm:text-[10px] lg:text-[11px] font-luxury uppercase tracking-[0.32em] sm:tracking-[0.38em] text-[#E2E8F0] font-bold">
                          LIFTS &amp; ESCALATORS
                        </span>
                      </div>

                      {/* Folder Bottom Action Hint */}
                      <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/10 text-[9px] sm:text-[10px] font-mono text-[#CBD5E1] relative z-10 group-hover:text-amber-200">
                        <span className="flex items-center gap-1 truncate">
                          <FolderOpen className="w-3.5 h-3.5 text-[#D49A3D] shrink-0" />
                          <span className="truncate">
                            {revealedCount === 6 
                              ? isMobile
                                ? 'SWIPE TO BROWSE • TAP TO PACK'
                                : 'CLICK TO PACK CARDS INSIDE' 
                              : revealedCount === 0 
                                ? `CLICK TO REVEAL ${selectedCategory === 'elevator' ? 'ELEVATOR' : 'ESCALATOR'} CARDS` 
                                : `CLICK TO REVEAL CARD ${revealedCount + 1}/6`}
                          </span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        ) : (
          /* ========================================================= */
          /* CLASSIC GRID VIEW FALLBACK                                */
          /* ========================================================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id}
                  style={{ borderColor: service.color }}
                  className="rounded-2xl overflow-hidden border-2 bg-white shadow-md flex flex-col hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`p-4 bg-gradient-to-b ${service.headerGradient} text-white flex items-center gap-3`}>
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white border border-white/30">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-tight text-white">{service.title}</h4>
                      <p className="text-[11px] text-white/90 leading-tight mt-0.5">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="h-48 relative overflow-hidden bg-slate-900">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
