import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DoorClosed, 
  Box, 
  Sparkles, 
  Sun, 
  ToggleRight, 
  Fingerprint, 
  CheckCircle2, 
  Palette,
  X,
  ZoomIn,
  FileText,
  RotateCw,
  Grid3X3,
  Layers,
  ArrowRight
} from 'lucide-react';
import CircularCarousel from '../components/CircularCarousel';

// 1. DOORS IMAGES (Extracted & HD Enhanced from Reference Brochure)
import door1 from '../assets/elevator-options/doors/door_1_ms_telescopic.jpg';
import door2 from '../assets/elevator-options/doors/door_2_ms_center.jpg';
import door3 from '../assets/elevator-options/doors/door_3_swing.jpg';
import door4 from '../assets/elevator-options/doors/door_4_ss_hairline.jpg';
import door5 from '../assets/elevator-options/doors/door_5_ss_glass.jpg';
import door6 from '../assets/elevator-options/doors/door_6_ss_manual.jpg';

// 2. CABIN IMAGES
import cabinSSClassic from '../assets/elevator-options/cabins/cabin_ss_classic.jpg';
import cabinSSModern from '../assets/elevator-options/cabins/cabin_ss_modern.jpg';
import cabinSSPremium from '../assets/elevator-options/cabins/cabin_ss_premium.jpg';
import cabinMSWhite from '../assets/elevator-options/cabins/cabin_ms_white.jpg';
import cabinMSGrey from '../assets/elevator-options/cabins/cabin_ms_grey.jpg';
import cabinMSBeige from '../assets/elevator-options/cabins/cabin_ms_beige.jpg';
import cabinMSCharcoal from '../assets/elevator-options/cabins/cabin_ms_charcoal.jpg';

// 3. CEILING IMAGES (DM-01 to DM-12)
import dm01 from '../assets/elevator-options/ceilings/dm_01.jpg';
import dm02 from '../assets/elevator-options/ceilings/dm_02.jpg';
import dm03 from '../assets/elevator-options/ceilings/dm_03.jpg';
import dm04 from '../assets/elevator-options/ceilings/dm_04.jpg';
import dm05 from '../assets/elevator-options/ceilings/dm_05.jpg';
import dm06 from '../assets/elevator-options/ceilings/dm_06.jpg';
import dm07 from '../assets/elevator-options/ceilings/dm_07.jpg';
import dm08 from '../assets/elevator-options/ceilings/dm_08.jpg';
import dm09 from '../assets/elevator-options/ceilings/dm_09.jpg';
import dm10 from '../assets/elevator-options/ceilings/dm_10.jpg';
import dm11 from '../assets/elevator-options/ceilings/dm_11.jpg';
import dm12 from '../assets/elevator-options/ceilings/dm_12.jpg';

// 4. LIGHTING IMAGES (DM-14 to DM-20)
import dm14 from '../assets/elevator-options/lighting/dm_14.jpg';
import dm15 from '../assets/elevator-options/lighting/dm_15.jpg';
import dm16 from '../assets/elevator-options/lighting/dm_16.jpg';
import dm17 from '../assets/elevator-options/lighting/dm_17.jpg';
import dm18 from '../assets/elevator-options/lighting/dm_18.jpg';
import dm19 from '../assets/elevator-options/lighting/dm_19.jpg';
import dm20 from '../assets/elevator-options/lighting/dm_20.jpg';

// 5. COP & LOP IMAGES
import coplopStandard from '../assets/elevator-options/coplop/coplop_standard.jpg';
import coplopTouch from '../assets/elevator-options/coplop/coplop_touch.jpg';
import coplopTft from '../assets/elevator-options/coplop/coplop_tft.jpg';
import coplopSlim from '../assets/elevator-options/coplop/coplop_slim.jpg';

// 6. BIOMETRICS IMAGES
import bioFingerprint from '../assets/elevator-options/biometric/bio_fingerprint.jpg';
import bioCard from '../assets/elevator-options/biometric/bio_card.jpg';

// FULL ORIGINAL BROCHURE PAGES FOR QUICK VIEW
import brochureDoorsCabins from '../assets/elevator-options/brochure_doors_cabins.jpg';
import brochureCeilingsLighting from '../assets/elevator-options/brochure_ceilings_lighting.jpg';
import brochureCoplopBiometric from '../assets/elevator-options/brochure_coplop_biometric.jpg';

// TAB DEFINITIONS (MATCHING USER'S EXACT NAMING)
const TABS = [
  { 
    id: 'doors', 
    name: 'Door Options', 
    num: '01', 
    icon: DoorClosed, 
    count: '06 Styles',
    brochure: brochureDoorsCabins,
    brochureTitle: 'Doors & Cabins Catalog Page'
  },
  { 
    id: 'cabins', 
    name: 'Cabin Option', 
    num: '02', 
    icon: Box, 
    count: '07 Finishes',
    brochure: brochureDoorsCabins,
    brochureTitle: 'Doors & Cabins Catalog Page'
  },
  { 
    id: 'ceilings', 
    name: 'Ceiling Option', 
    num: '03', 
    icon: Sparkles, 
    count: '12 Patterns',
    brochure: brochureCeilingsLighting,
    brochureTitle: 'Ceilings & Lighting Catalog Page'
  },
  { 
    id: 'lighting', 
    name: 'Light Option', 
    num: '04', 
    icon: Sun, 
    count: '07 Systems',
    brochure: brochureCeilingsLighting,
    brochureTitle: 'Ceilings & Lighting Catalog Page'
  },
  { 
    id: 'coplop', 
    name: 'LOP & COP', 
    num: '05', 
    icon: ToggleRight, 
    count: '04 Panels',
    brochure: brochureCoplopBiometric,
    brochureTitle: 'COP/LOP & Biometrics Catalog Page'
  },
  { 
    id: 'biometric', 
    name: 'Bio-metric', 
    num: '06', 
    icon: Fingerprint, 
    count: '02 Systems',
    brochure: brochureCoplopBiometric,
    brochureTitle: 'COP/LOP & Biometrics Catalog Page'
  },
];

// DATA SOURCES
const DOORS_DATA = [
  {
    id: 'door-1',
    title: 'MS Telescopic Manual / Auto Door',
    image: door1,
    type: 'Mild Steel / Automatic',
    desc: 'Compact telescopic sliding panels with vertical vision window. Ideal for space-constrained residential and commercial hoistways.',
  },
  {
    id: 'door-2',
    title: 'MS Center Opening Auto Door',
    image: door2,
    type: 'Mild Steel / Center Opening',
    desc: 'Synchronized center-parting doors with dual rectangular vision glasses for smooth, high-traffic commercial building transit.',
  },
  {
    id: 'door-3',
    title: 'Swing Door',
    image: door3,
    type: 'Heavy-Duty Manual Swing',
    desc: 'Classic architectural manual swing doors with concealed hydraulic closers, robust hinges, and safety vision slot.',
  },
  {
    id: 'door-4',
    title: 'SS Hairline Finish Center Opening Door',
    image: door4,
    type: 'Stainless Steel 304',
    desc: 'Premium hairline brushed stainless steel center-opening doors offering modern corporate aesthetics and high corrosion resistance.',
  },
  {
    id: 'door-5',
    title: 'SS Glass Auto Door',
    image: door5,
    type: 'Panoramic Framed Glass',
    desc: 'Laminated toughened glass panels framed in structural stainless steel, custom-tailored for scenic and atrium observation elevators.',
  },
  {
    id: 'door-6',
    title: 'SS Manual Door',
    image: door6,
    type: 'Stainless Steel Swing',
    desc: 'Full-height clear glass manual swing door with tubular stainless steel pull handles and precision magnetic interlocks.',
  },
];

const SS_CABINS = [
  {
    id: 'cabin-ss-1',
    title: 'Classic Stainless Steel',
    image: cabinSSClassic,
    badge: 'BRUSHED HAIRLINE',
    desc: 'Durable hairline stainless steel walls with recessed rosette ceiling illumination and matching designer flooring.',
  },
  {
    id: 'cabin-ss-2',
    title: 'Modern Stainless Steel',
    image: cabinSSModern,
    badge: 'CONTEMPORARY GRID',
    desc: 'Vertical stainless steel partition panels with ceiling grid illumination and dual-tone polished marble border flooring.',
  },
  {
    id: 'cabin-ss-3',
    title: 'Premium Finish',
    image: cabinSSPremium,
    badge: 'LASER ETCHED & GOLD',
    desc: 'High-end laser-etched artistic panels with champagne gold titanium accents, handrails, and luxury ceiling patterns.',
  },
];

const MS_CABINS = [
  { id: 'ms-1', title: 'Classic White', image: cabinMSWhite, color: '#FFFFFF', border: '#E2E8F0' },
  { id: 'ms-2', title: 'Elegant Grey', image: cabinMSGrey, color: '#8E959B', border: '#718096' },
  { id: 'ms-3', title: 'Beige Sand', image: cabinMSBeige, color: '#CDB496', border: '#A0AEC0' },
  { id: 'ms-4', title: 'Charcoal Black', image: cabinMSCharcoal, color: '#1E2022', border: '#4A5568' },
];

const POPULAR_COLORS = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Ivory', hex: '#F5EBE1' },
  { name: 'Beige', hex: '#D9C3A5' },
  { name: 'Sand', hex: '#CDB496' },
  { name: 'Light Grey', hex: '#C4C8CC' },
  { name: 'Grey', hex: '#8E959B' },
  { name: 'Charcoal', hex: '#444B52' },
  { name: 'Black', hex: '#1E2022' },
  { name: 'Blue', hex: '#1C64D9' },
  { name: 'Red', hex: '#D83226' },
  { name: 'Yellow', hex: '#F4B400' },
  { name: 'Green', hex: '#2D8A4E' },
];

const CEILINGS_DATA = [
  { id: 'dm-01', code: 'DM - 01', image: dm01, name: 'Kinetic Spiral Dot Perforation' },
  { id: 'dm-02', code: 'DM - 02', image: dm02, name: 'Golden Sun Mandala Motif' },
  { id: 'dm-03', code: 'DM - 03', image: dm03, name: 'Floral Snowflake Laser Pattern' },
  { id: 'dm-04', code: 'DM - 04', image: dm04, name: 'Blue Galaxy Floral Illumination' },
  { id: 'dm-05', code: 'DM - 05', image: dm05, name: 'Linear Dual-Strip Perforated Starburst' },
  { id: 'dm-06', code: 'DM - 06', image: dm06, name: 'Azure Radial Flower Rosette' },
  { id: 'dm-07', code: 'DM - 07', image: dm07, name: 'Concentric Ring Fleur-de-Lis Emblem' },
  { id: 'dm-08', code: 'DM - 08', image: dm08, name: 'Spherical Geometric Dot Lattice' },
  { id: 'dm-09', code: 'DM - 09', image: dm09, name: 'Crimson & Amber Rosette Mandala' },
  { id: 'dm-10', code: 'DM - 10', image: dm10, name: 'Golden Maple Leaf & Star Cluster' },
  { id: 'dm-11', code: 'DM - 11', image: dm11, name: 'Intricate Royal Gold Medallion' },
  { id: 'dm-12', code: 'DM - 12', image: dm12, name: 'Cosmic Starlight Fiber-Optic Array' },
];

const LIGHTING_DATA = [
  { id: 'dm-14', code: 'DM - 14', image: dm14, name: 'Warm Recessed Downlight', desc: 'Soft circular ambient spotlight' },
  { id: 'dm-15', code: 'DM - 15', image: dm15, name: 'Cool White Downlight', desc: 'Clean high-lumen circular LED' },
  { id: 'dm-16', code: 'DM - 16', image: dm16, name: 'Diffused Square Panel', desc: 'Even ceiling surface illumination' },
  { id: 'dm-17', code: 'DM - 17', image: dm17, name: 'Continuous Linear LED Channel', desc: 'Modern architectural light bar' },
  { id: 'dm-18', code: 'DM - 18', image: dm18, name: 'Cylindrical Surface Downlight', desc: 'Architectural black tube fixture' },
  { id: 'dm-19', code: 'DM - 19', image: dm19, name: 'Dual Adjustable Spotlights', desc: 'Directional twin accent beam' },
  { id: 'dm-20', code: 'DM - 20', image: dm20, name: 'Concealed Perimeter Cove', desc: 'Indirect warm ambient perimeter troffer' },
];

const COPLOP_DATA = [
  {
    id: 'standard',
    title: 'Standard LOP & COP',
    image: coplopStandard,
    badge: 'BRUSHED STAINLESS STEEL',
    desc: 'Heavy-duty hairline stainless steel faceplates with tactile illuminated micro-push buttons and crystal LED floor direction matrix.',
  },
  {
    id: 'touch',
    title: 'Touch Screen LOP & COP',
    image: coplopTouch,
    badge: 'TEMPERED GLASS CAPACITIVE',
    desc: 'Seamless full black glass touch faceplate with modern capacitive number pads and high-contrast sapphire blue digital indicators.',
  },
  {
    id: 'tft',
    title: 'TFT LOP & COP',
    image: coplopTft,
    badge: 'MULTIMEDIA TFT DISPLAY',
    desc: 'High-definition color TFT screens displaying dynamic background artwork, floor levels, direction animations, date, and building notifications.',
  },
  {
    id: 'slim',
    title: 'Slim LOP & COP',
    image: coplopSlim,
    badge: 'COMPACT SLIM PROFILE',
    desc: 'Ultra-thin profile surface-mounted panels designed for clean, minimalist elevator door jambs with crisp LED level numbers.',
  },
];

const BIOMETRIC_DATA = [
  {
    id: 'fingerprint',
    title: 'Fingerprint Access',
    subtitle: 'Fast, secure and reliable access control.',
    image: bioFingerprint,
    badge: 'BIOMETRIC SCANNER',
    features: [
      'High-speed optical fingerprint sensor with green verification ring',
      'Tamper-resistant IP-rated industrial housing',
      'Instant authorization with millisecond response time',
      'Supports floor-by-floor access permission programming',
    ],
  },
  {
    id: 'card',
    title: 'Access Card (RFID / NFC)',
    subtitle: 'Convenient and contactless entry.',
    image: bioCard,
    badge: 'SMART RFID / NFC',
    features: [
      'High-frequency contactless RFID/NFC proximity card reader',
      'Illuminated LED verification status indicator light bar',
      'Branded DM smart keycards and key fobs compatibility',
      'Seamless integration with building BMS and security gates',
    ],
  },
];

export default function ElevatorOptions() {
  const [activeTab, setActiveTab] = useState(null);
  const [modalItem, setModalItem] = useState(null);
  const [brochureModal, setBrochureModal] = useState(null);

  const currentTabObj = TABS.find((t) => t.id === activeTab) || null;

  // 6 CATEGORY CARDS MATCHING USER SCREENSHOT
  const categoryCards = useMemo(() => [
    {
      id: 'doors',
      src: door4,
      alt: 'Door Options',
      title: 'DOOR OPTIONS',
      subtitle: '06 Styles',
      num: '01',
      icon: <DoorClosed className="w-4 h-4" />,
      active: activeTab === 'doors',
    },
    {
      id: 'cabins',
      src: cabinSSModern,
      alt: 'Cabin Option',
      title: 'CABIN OPTION',
      subtitle: '07 Finishes',
      num: '02',
      icon: <Box className="w-4 h-4" />,
      active: activeTab === 'cabins',
    },
    {
      id: 'ceilings',
      src: dm01,
      alt: 'Ceiling Option',
      title: 'CEILING OPTION',
      subtitle: '12 Patterns',
      num: '03',
      icon: <Sparkles className="w-4 h-4" />,
      active: activeTab === 'ceilings',
    },
    {
      id: 'lighting',
      src: dm17,
      alt: 'Light Option',
      title: 'LIGHT OPTION',
      subtitle: '07 Systems',
      num: '04',
      icon: <Sun className="w-4 h-4" />,
      active: activeTab === 'lighting',
    },
    {
      id: 'coplop',
      src: coplopTouch,
      alt: 'LOP & COP',
      title: 'LOP & COP',
      subtitle: '04 Panels',
      num: '05',
      icon: <ToggleRight className="w-4 h-4" />,
      active: activeTab === 'coplop',
    },
    {
      id: 'biometric',
      src: bioFingerprint,
      alt: 'Bio-metric',
      title: 'BIO-METRIC',
      subtitle: '02 Systems',
      num: '06',
      icon: <Fingerprint className="w-4 h-4" />,
      active: activeTab === 'biometric',
    },
  ], [activeTab]);

  const [carouselCardWidth, setCarouselCardWidth] = useState(360);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setCarouselCardWidth(Math.min(250, Math.max(200, w - 50)));
      } else if (w < 768) {
        setCarouselCardWidth(290);
      } else if (w < 1280) {
        setCarouselCardWidth(340);
      } else {
        setCarouselCardWidth(380);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleCategorySelect = (tabId) => {
    setActiveTab(tabId);
    setTimeout(() => {
      const el = document.getElementById('revealed-options-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  return (
    <section 
      id="elevator-options" 
      className="scroll-mt-20 lg:scroll-mt-24 pt-4 pb-8 sm:py-14 lg:py-20 bg-[#06111C] border-t border-[#075A8F]/30 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#075A8F]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[550px] h-[550px] bg-[#FF6A00]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1B2A] border border-[#075A8F]/50 mb-2 sm:mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-xs bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-[#FF6A00] font-bold">
              ELEVATOR CUSTOMIZATION &amp; COMPONENTS
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            CUSTOMIZE YOUR <span className="text-[#FF6A00]">ELEVATOR</span>
          </h2>
          <p className="text-xs sm:text-base text-[#C8D1D8] mt-1.5 sm:mt-3 max-w-2xl mx-auto leading-relaxed">
            Rotate the 3D ring or tap any category card below to reveal the precision engineering options, finishes, and specs.
          </p>
        </div>

        {/* 1. MOBILE & TABLET CATEGORY SELECTOR STRIP (Zero empty gaps, full-size legible cards) */}
        <div className="lg:hidden mb-5">
          <div className="text-center mb-2.5">
            <span className="text-[10px] sm:text-[11px] font-mono text-[#8EA5B8] uppercase tracking-wider flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              <span>
                {currentTabObj 
                  ? `Active: ${currentTabObj.name} (${currentTabObj.count})` 
                  : 'Tap any category below to reveal options'}
              </span>
            </span>
          </div>

          <div className="flex flex-row overflow-x-auto gap-2.5 pb-2.5 scroll-smooth snap-x snap-mandatory no-scrollbar -mx-1 px-1 sm:mx-0 sm:px-0">
            {categoryCards.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`relative flex flex-col justify-between shrink-0 w-[150px] sm:w-[180px] h-[165px] sm:h-[185px] rounded-2xl overflow-hidden p-3 text-left border transition-all duration-300 snap-center cursor-pointer group select-none ${
                    isSelected
                      ? 'border-[#FF6A00] shadow-[0_0_20px_rgba(255,106,0,0.35)] bg-[#0A1B2A]'
                      : 'border-[#075A8F]/40 bg-[#0A1B2A]/70 hover:border-[#FF6A00]/60'
                  }`}
                >
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={cat.src} 
                      alt={cat.alt} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/95 via-[#06111C]/65 to-[#06111C]/30" />
                  </div>

                  {/* Top Bar: Icon + Number Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#06111C]/85 border border-white/20 flex items-center justify-center text-[#FF6A00] shadow-sm">
                      {cat.icon}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-white/90 bg-[#06111C]/80 px-2 py-0.5 rounded-full border border-white/15">
                      {cat.num}
                    </span>
                  </div>

                  {/* Bottom: Title & Subtitle */}
                  <div className="relative z-10 pt-3">
                    <span className="block text-[9.5px] font-mono text-[#FF6A00] font-bold tracking-wider uppercase mb-0.5">
                      {cat.subtitle}
                    </span>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-tight leading-snug">
                      {cat.title}
                    </h4>
                  </div>

                  {/* Active Selection Indicator */}
                  {isSelected && (
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-1.5 px-1 text-[10px] font-mono text-[#8EA5B8]">
            <span className="text-[#FF6A00] font-bold">6 CATEGORIES</span>
            <span>Swipe to browse specs ↔</span>
          </div>
        </div>

        {/* 2. DESKTOP 3D CIRCULAR CAROUSEL (Displayed on lg: screens >= 1024px) */}
        <div className="hidden lg:block mb-8">
          <div className="text-center mb-3">
            <span className="text-[11px] font-mono text-[#8EA5B8] uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
              <span>
                {currentTabObj 
                  ? `Viewing ${currentTabObj.name} — Click another rolling card to switch` 
                  : 'Click any rolling card to open its related options'}
              </span>
            </span>
          </div>

          <div className="relative w-full h-[580px] lg:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0A1B2A]/90 via-[#06111C] to-[#06111C] border border-[#075A8F]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4">
            <CircularCarousel
              items={categoryCards}
              preset="cylinder"
              curve={0}
              cardWidth={carouselCardWidth}
              aspectRatio={1.12}
              gap={32}
              speed={10}
              captions={false}
              draggable={true}
              focusOnClick={true}
              cornerRadius={18}
              fadeColor="#06111C"
              depthFade={0.55}
              onItemClick={(item) => handleCategorySelect(item.id)}
            />
          </div>
        </div>

        {/* 3. REVEALED OPTIONS SECTION (Opens ONLY when a rolling card is clicked) */}
        <AnimatePresence>
          {activeTab && currentTabObj && (
            <motion.div
              id="revealed-options-section"
              key="revealed-options-wrapper"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 sm:pt-8 border-t border-[#075A8F]/30 scroll-mt-20 sm:scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-8 border-b border-[#075A8F]/30 gap-3 sm:gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-[#FF6A00] text-white rounded">
                      ACTIVE SELECTION
                    </span>
                    <span className="text-xs font-mono uppercase text-[#FF6A00] font-bold">
                      {currentTabObj.count} AVAILABLE
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-white tracking-tight uppercase flex items-center gap-3">
                    <span>{currentTabObj.name}</span>
                    <span className="text-sm font-mono text-[#8EA5B8] font-normal lowercase">({currentTabObj.count})</span>
                  </h3>
                </div>

                <button
                  onClick={() => setActiveTab(null)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0A1B2A] border border-[#075A8F]/60 text-[#8EA5B8] hover:text-white hover:border-[#FF6A00] transition-colors text-xs font-mono font-bold uppercase self-start sm:self-auto cursor-pointer"
                  title="Close section"
                >
                  <X className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>Close Section</span>
                </button>
              </div>

          {/* DYNAMIC TAB CONTENT REVEALING THE SPECIFIC CARDS */}
          <AnimatePresence mode="wait">
          
          {/* TAB 1: DOOR OPTIONS */}
          {activeTab === 'doors' && (
            <motion.div
              key="doors"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {DOORS_DATA.map((door, idx) => (
                  <div
                    key={door.id}
                    onClick={() => setModalItem({
                      title: door.title,
                      image: door.image,
                      badge: door.type,
                      desc: door.desc,
                      category: 'Door Options'
                    })}
                    className="group rounded-2xl overflow-hidden bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_35px_rgba(6,17,28,0.95)] flex flex-col p-3 sm:p-5 cursor-pointer h-full justify-between"
                  >
                    {/* Exact Size Card Image Container - 100% Fit with Zero Overlap */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-inner flex-shrink-0">
                      <img
                        src={door.image}
                        alt={door.title}
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Content Area - Clean Flow with No Overlapping or Overriding */}
                    <div className="flex flex-col flex-1 mt-2.5 sm:mt-4">
                      <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2.5">
                        <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-mono tracking-wider uppercase bg-[#06111C] border border-[#075A8F]/60 text-[#FF6A00] font-bold rounded truncate">
                          {door.type}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#8EA5B8] font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="font-display text-xs sm:text-lg font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-snug mb-1 sm:mb-2">
                        {door.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#C8D1D8]/80 leading-relaxed font-normal mt-auto line-clamp-2 sm:line-clamp-none">
                        {door.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: CABIN OPTIONS */}
          {activeTab === 'cabins' && (
            <motion.div
              key="cabins"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* SUBSECTION 1: STAINLESS STEEL CABINS */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#075A8F]/25">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
                    STAINLESS STEEL &amp; LUXURY FINISH CABINS
                  </h4>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                  {SS_CABINS.map((cabin, idx) => (
                    <div
                      key={cabin.id}
                      onClick={() => setModalItem({
                        title: cabin.title,
                        image: cabin.image,
                        badge: cabin.badge,
                        desc: cabin.desc,
                        category: 'Cabin Option (Stainless Steel)'
                      })}
                      className="group rounded-2xl overflow-hidden bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_35px_rgba(6,17,28,0.95)] flex flex-col p-3 sm:p-5 cursor-pointer h-full justify-between"
                    >
                      {/* Exact Size Card Image Container - 100% Fit with Zero Overlap */}
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-inner flex-shrink-0">
                        <img
                          src={cabin.image}
                          alt={cabin.title}
                          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>

                      {/* Card Content Area - Clean Flow with No Overlapping or Overriding */}
                      <div className="flex flex-col flex-1 mt-2.5 sm:mt-4">
                        <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2.5">
                          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-mono tracking-wider uppercase bg-[#06111C] border border-[#075A8F]/60 text-[#FF6A00] font-bold rounded truncate">
                            {cabin.badge}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-mono text-[#8EA5B8] font-bold">
                            0{idx + 1}
                          </span>
                        </div>

                        <h4 className="font-display text-xs sm:text-lg font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-snug mb-1 sm:mb-2">
                          {cabin.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#C8D1D8]/80 leading-relaxed font-normal mt-auto line-clamp-2 sm:line-clamp-none">
                          {cabin.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUBSECTION 2: MS POWDER COATED CABINS */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#075A8F]/25">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
                    MS POWDER COATED CABINS
                  </h4>
                  <span className="text-xs font-mono uppercase text-[#FF6A00] font-bold">
                    Thermoset Finishes
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-8">
                  {MS_CABINS.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => setModalItem({
                        title: item.title,
                        image: item.image,
                        badge: 'MS Powder Coated',
                        desc: `Durable electrostatic powder-coated finish in ${item.title}. Highly resistant to scratches and everyday wear.`,
                        category: 'Cabin Option (MS Powder Coated)'
                      })}
                      className="group rounded-2xl overflow-hidden bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] transition-all duration-300 hover:-translate-y-1.5 shadow-md flex flex-col p-4 cursor-pointer h-full justify-between"
                    >
                      {/* Exact Size Card Image Container - 100% Fit with Zero Overlap */}
                      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-inner mb-3 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                        />
                      </div>

                      <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#06111C] border border-[#075A8F]/50 text-[#FF6A00] font-bold rounded">
                            MS COATED
                          </span>
                          <span className="text-[10px] font-mono text-[#8EA5B8] font-bold">
                            0{idx + 1}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-auto">
                          <span 
                            className="w-3.5 h-3.5 rounded-full border shadow-sm flex-shrink-0" 
                            style={{ backgroundColor: item.color, borderColor: item.border }}
                          />
                          <h5 className="text-xs font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors truncate">
                            {item.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* POPULAR COLOURS PALETTE BOX */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0A1B2A] border border-[#075A8F]/40 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-[#075A8F]/25">
                    <div className="flex items-center gap-2.5">
                      <Palette className="w-5 h-5 text-[#FF6A00]" />
                      <h5 className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                        POPULAR COLOUR PALETTE
                      </h5>
                    </div>
                    <span className="text-xs font-mono text-[#0A78B8] font-semibold">
                      Custom colours available on request (RAL Standard)
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2.5">
                    {POPULAR_COLORS.map((col) => (
                      <div 
                        key={col.name} 
                        className="flex flex-col items-center p-2 rounded-lg bg-[#06111C]/90 border border-[#075A8F]/30 hover:border-[#FF6A00] transition-all text-center"
                      >
                        <div 
                          className="w-7 h-7 rounded-md shadow-inner border border-white/10 mb-1.5"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span className="text-[11px] font-medium text-white/90 truncate w-full">
                          {col.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: CEILING OPTIONS */}
          {activeTab === 'ceilings' && (
            <motion.div
              key="ceilings"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {CEILINGS_DATA.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setModalItem({
                      title: `${item.code} - ${item.name}`,
                      image: item.image,
                      badge: 'Ceiling Pattern',
                      desc: `Precision CNC laser-cut stainless steel ceiling panel with high-efficiency diffused LED backlighting.`,
                      category: 'Ceiling Option'
                    })}
                    className="group rounded-2xl overflow-hidden bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_35px_rgba(6,17,28,0.95)] flex flex-col p-4 sm:p-5 cursor-pointer h-full justify-between"
                  >
                    {/* Exact Size Card Image Container - 100% Fit with Zero Overlap */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-inner mb-4 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Content Area - Clean Flow with No Overlapping */}
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#06111C] text-[#FF6A00] border border-[#075A8F]/60 rounded group-hover:border-[#FF6A00] transition-colors">
                          {item.code}
                        </span>
                        <span className="text-[11px] font-mono text-[#8EA5B8] font-bold">
                          {idx < 9 ? `0${idx + 1}` : idx + 1}
                        </span>
                      </div>

                      <h4 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-snug mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#C8D1D8]/70 leading-normal mt-auto font-mono">
                        Laser-cut stainless steel &amp; LED backlight
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: LIGHTING OPTIONS */}
          {activeTab === 'lighting' && (
            <motion.div
              key="lighting"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
                {LIGHTING_DATA.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setModalItem({
                      title: `${item.code} - ${item.name}`,
                      image: item.image,
                      badge: 'Lighting Fixture',
                      desc: item.desc,
                      category: 'Light Option'
                    })}
                    className="group rounded-2xl overflow-hidden bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_35px_rgba(6,17,28,0.95)] flex flex-col p-3.5 cursor-pointer h-full justify-between text-left"
                  >
                    {/* Exact Size Card Image Container - 100% Fit with Zero Overlap */}
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-inner mb-3 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Content Area - Clean Flow with No Overlapping */}
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="px-2 py-0.5 text-xs font-mono font-bold text-[#FF6A00] bg-[#06111C] border border-[#075A8F]/50 rounded">
                          {item.code}
                        </span>
                        <span className="text-[10px] font-mono text-[#8EA5B8] font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="font-display text-xs sm:text-sm font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-snug mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-[#C8D1D8]/70 block leading-tight mt-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 5: LOP & COP OPTIONS */}
          {activeTab === 'coplop' && (
            <motion.div
              key="coplop"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {COPLOP_DATA.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setModalItem({
                      title: item.title,
                      image: item.image,
                      badge: item.badge,
                      desc: item.desc,
                      category: 'LOP & COP Panel'
                    })}
                    className="group rounded-2xl overflow-hidden bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_35px_rgba(6,17,28,0.95)] flex flex-col p-3 sm:p-5 cursor-pointer h-full justify-between"
                  >
                    {/* Exact Size Card Image Container - 100% Fit with Zero Overlap */}
                    <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-inner mb-2.5 sm:mb-4 p-2 sm:p-3 flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Content Area - Clean Flow with No Overlapping */}
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2.5">
                        <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#FF6A00] font-bold bg-[#06111C] border border-[#075A8F]/60 rounded truncate">
                          {item.badge}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#8EA5B8] font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="font-display text-xs sm:text-lg font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-snug mb-1 sm:mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#C8D1D8]/80 leading-relaxed font-normal mt-auto line-clamp-2 sm:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 6: BIOMETRIC ACCESS */}
          {activeTab === 'biometric' && (
            <motion.div
              key="biometric"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {BIOMETRIC_DATA.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setModalItem({
                      title: item.title,
                      image: item.image,
                      badge: item.badge,
                      desc: item.subtitle,
                      features: item.features,
                      category: 'Bio-metric Access'
                    })}
                    className="group rounded-2xl overflow-hidden bg-[#0A1B2A] border border-[#075A8F]/40 hover:border-[#FF6A00] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_20px_45px_rgba(6,17,28,0.95)] p-5 sm:p-7 flex flex-col md:flex-row gap-6 items-center cursor-pointer justify-between"
                  >
                    {/* Exact Size Card Image Container - 100% Fit with Zero Overlap */}
                    <div className="w-full md:w-64 aspect-[4/3] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-[#06111C] shadow-inner flex-shrink-0 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Content Area - Clean Flow with No Overlapping */}
                    <div className="flex-1 space-y-3 w-full">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase bg-[#06111C] border border-[#075A8F]/60 text-[#FF6A00] font-bold rounded">
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[#8EA5B8] font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#FF6A00] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#FF6A00] font-medium">
                        {item.subtitle}
                      </p>
                      
                      <ul className="space-y-2 pt-2 border-t border-[#075A8F]/20 text-xs text-[#C8D1D8]">
                        {item.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0A78B8] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* MODAL 1: HIGH-DEFINITION ITEM INSPECTION LIGHTBOX */}
      <AnimatePresence>
        {modalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0A1B2A] border-2 border-[#075A8F] rounded-2xl overflow-hidden shadow-2xl p-5 sm:p-6 text-white"
            >
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-[#06111C] border border-[#075A8F]/60 text-[#C8D1D8] hover:text-white hover:border-[#FF6A00] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#FF6A00] text-white rounded">
                  {modalItem.category}
                </span>
                {modalItem.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-mono text-[#8EA5B8] border border-[#075A8F]/50 rounded">
                    {modalItem.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                {modalItem.title}
              </h3>

              {/* HD Image View */}
              <div className="w-full max-h-[380px] rounded-xl overflow-hidden border border-[#075A8F]/50 bg-gradient-to-b from-[#091C2C] to-[#040D16] p-4 flex items-center justify-center mb-4">
                <img
                  src={modalItem.image}
                  alt={modalItem.title}
                  className="max-h-[340px] max-w-full object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm text-[#C8D1D8] leading-relaxed mb-4">
                {modalItem.desc}
              </p>

              {modalItem.features && (
                <ul className="space-y-1.5 pt-3 border-t border-[#075A8F]/30 text-xs text-[#C8D1D8] mb-4">
                  {modalItem.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-[#075A8F]/30">
                <span className="text-[11px] font-mono text-[#8EA5B8]">
                  DM Lifts &amp; Escalators Architectural Reference
                </span>
                <button
                  onClick={() => setModalItem(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#FF6A00] text-white text-xs font-bold font-mono uppercase hover:bg-[#E65500] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: FULL OFFICIAL BROCHURE SHEET VIEWER */}
      <AnimatePresence>
        {brochureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[92vh] bg-[#0A1B2A] border-2 border-[#075A8F] rounded-2xl overflow-hidden shadow-2xl flex flex-col text-white"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#075A8F]/40 bg-[#06111C]">
                <div>
                  <span className="text-[10px] font-mono text-[#FF6A00] uppercase font-bold block">
                    DM OFFICIAL CATALOG PAGE
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {brochureModal.brochureTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setBrochureModal(null)}
                  className="p-2 rounded-lg bg-[#0A1B2A] border border-[#075A8F]/60 text-[#C8D1D8] hover:text-white hover:border-[#FF6A00] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#040C14]">
                <img
                  src={brochureModal.brochure}
                  alt={brochureModal.brochureTitle}
                  className="max-w-full max-h-[72vh] object-contain rounded-lg border border-[#075A8F]/40 shadow-2xl"
                />
              </div>

              <div className="p-3 sm:p-4 border-t border-[#075A8F]/40 bg-[#06111C] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8EA5B8]">
                  High-Resolution Authentic Reference Catalog Sheet
                </span>
                <button
                  onClick={() => setBrochureModal(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#FF6A00] text-white text-xs font-bold font-mono uppercase hover:bg-[#E65500] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
