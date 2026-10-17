import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Layers, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Compass
} from 'lucide-react';

import commercialEscalator from '../assets/escalators/commercial_escalator.jpg';
import transitEscalator from '../assets/escalators/transit_escalator.jpg';
import movingWalkway from '../assets/escalators/moving_walkway.jpg';

// 3 CORE ESCALATOR & TRAVELATOR SERIES
const ESCALATOR_MODELS = [
  {
    id: 'commercial',
    name: 'Commercial & Retail Escalator',
    tag: '30° / 35° INCLINE',
    headline: 'Architectural Elegance for High-Traffic Commercial Spaces',
    image: commercialEscalator,
    desc: 'Engineered specifically for shopping malls, lifestyle atriums, department stores, and corporate offices. Features slim tempered glass balustrades with continuous under-handrail LED lighting for high visual appeal and smooth customer flow.',
    specs: [
      { label: 'Inclination Angle', value: '30° / 35°' },
      { label: 'Step Width', value: '600 / 800 / 1000 mm' },
      { label: 'Rated Speed', value: '0.5 m/s (VVVF Eco-Idle)' },
      { label: 'Max Capacity', value: 'Up to 9,000 Persons / hr' },
      { label: 'Balustrade', value: '10mm Toughened Safety Glass' },
      { label: 'Drive System', value: 'Helical Gearbox + VVVF Standby' },
    ],
    features: [
      'Continuous under-handrail warm white or amber LED illumination',
      'Die-cast aluminum alloy steps with yellow safety demarcation lines',
      'Auto-start radar sensor & frequency idle mode (saves up to 40% power)',
      'Slim-profile truss design for space-optimized architectural fit',
    ],
    idealFor: 'Shopping Malls, Corporate Headquarters, Department Stores, Lifestyle Centers',
  },
  {
    id: 'transit',
    name: 'Public Transit Heavy-Duty Escalator',
    tag: '30° HEAVY TRANSIT',
    headline: 'High-Torque Mass Transit Reliability for Non-Stop Operation',
    image: transitEscalator,
    desc: 'Heavy-duty construction built for metro stations, railway junctions, stadiums, and high-density airport terminals. Incorporates reinforced steel trusses, auxiliary mechanical brakes, and all-weather moisture protection for 20+ hours continuous daily cycles.',
    specs: [
      { label: 'Inclination Angle', value: '30° Standard' },
      { label: 'Step Width', value: '1000 mm Extra Wide' },
      { label: 'Rated Speed', value: '0.50 – 0.65 m/s' },
      { label: 'Max Capacity', value: 'Up to 11,700 Persons / hr' },
      { label: 'Balustrade', value: 'Hairline Stainless Steel 304 or Glass' },
      { label: 'Drive System', value: 'High-Torque Planetary / Machine Room-less' },
    ],
    features: [
      'Galvanized weather-proof structural truss with cathodic corrosion coating',
      'Auxiliary mechanical safety disk brake prevents reverse roll-back',
      'Heavy-duty hardened roller chains with automatic pressure lubrication',
      'High-friction vulcanized multi-cord synchronous handrail drive',
    ],
    idealFor: 'Metro Rail Stations, Railway Terminals, International Airports, Exhibition Centers',
  },
  {
    id: 'walkway',
    name: 'Moving Walkways (Travelators)',
    tag: '0° – 12° INCLINE',
    headline: 'Effortless Horizontal & Gentle Incline Pedestrian Transport',
    image: movingWalkway,
    desc: 'Continuous grooved aluminum pallet systems designed for airport departure corridors, supermarkets, and multimodal hubs. Supports wheeled luggage, baby strollers, and shopping carts with automatic mechanical wheel-gripping locks.',
    specs: [
      { label: 'Inclination Angle', value: '0° (Flat) or 10° – 12° (Inclined)' },
      { label: 'Pallet Width', value: '800 / 1000 / 1200 mm' },
      { label: 'Rated Speed', value: '0.5 m/s Smooth Acceleration' },
      { label: 'Max Capacity', value: 'Up to 13,500 Persons / hr' },
      { label: 'Balustrade', value: 'Tempered Glass with Slim Handrail' },
      { label: 'Drive System', value: 'Synchronous Belt / Heavy Chain Drive' },
    ],
    features: [
      'Precision grooved anti-slip aluminum pallets with groove-locking comb teeth',
      'Cart and trolley wheel-brake safety integration on 12° inclines',
      'Low pit depth requirement for easy integration into existing structural floors',
      'Variable speed drive with soft-start acceleration and optical passenger detection',
    ],
    idealFor: 'Airport Terminals, Hypermarkets & Superstores, Convention Halls, Transit Overpasses',
  },
];

export default function Escalators() {
  const [activeModel, setActiveModel] = useState('commercial');
  const currentModel = ESCALATOR_MODELS.find((m) => m.id === activeModel) || ESCALATOR_MODELS[0];

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <section 
      id="escalator-details" 
      className="py-16 sm:py-20 lg:py-28 bg-[#06111C] border-t border-[#075A8F]/30 relative overflow-hidden selection:bg-[#FF6A00]/25 selection:text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-[650px] h-[650px] bg-[#075A8F]/15 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[600px] h-[600px] bg-[#FF6A00]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#075A8F]/25">
          <div className="max-w-3xl">
            {/* Division Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1B2A] border border-[#075A8F]/50 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-xs bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#FF6A00] font-bold">
                PRIMARY PRODUCT DIVISION 02 • CONTINUOUS PASSENGER TRANSIT
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              ESCALATORS &amp; <span className="text-[#FF6A00]">MOVING WALKWAYS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#C8D1D8] mt-3 leading-relaxed">
              Designed for continuous, high-density pedestrian movement across commercial centers, international airports, and public metro infrastructure.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF6A00] text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-[#E65500] transition-all shadow-[0_0_20px_rgba(255,106,0,0.35)] cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3-MODEL INTERACTIVE SWITCHER BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 sm:mb-14">
          {ESCALATOR_MODELS.map((model, idx) => {
            const isActive = activeModel === model.id;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer relative group flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0A1B2A] border-[#FF6A00] shadow-[0_12px_30px_rgba(255,106,0,0.25)] -translate-y-1'
                    : 'bg-[#0A1B2A]/70 border-[#075A8F]/40 hover:border-[#FF6A00]/70 hover:bg-[#0E2439] hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    isActive 
                      ? 'bg-[#FF6A00] text-white' 
                      : 'bg-[#06111C] text-[#0A78B8] border border-[#075A8F]/50 group-hover:text-[#FF6A00]'
                  }`}>
                    SERIES 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#8EA5B8] uppercase">
                    {model.tag}
                  </span>
                </div>

                <div>
                  <h3 className={`font-display text-base sm:text-lg font-bold transition-colors leading-snug ${
                    isActive ? 'text-[#FF6A00]' : 'text-white group-hover:text-white'
                  }`}>
                    {model.name}
                  </h3>
                  <p className="text-xs text-[#C8D1D8]/80 mt-1 line-clamp-2">
                    {model.headline}
                  </p>
                </div>

                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-[#FF6A00] rounded-full shadow-[0_0_8px_#FF6A00]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE MODEL SPOTLIGHT DISPLAY */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModel.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden bg-[#0A1B2A] border-2 border-[#075A8F]/40 shadow-[0_25px_60px_rgba(6,17,28,0.95)] mb-14 p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Image with Framing & Badges */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-[#075A8F]/50 bg-gradient-to-b from-[#091C2C] to-[#040D16] shadow-2xl aspect-[16/10] group">
                  <img
                    src={currentModel.image}
                    alt={currentModel.name}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111C]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-[#06111C]/90 border border-[#075A8F]/70 text-white rounded-md backdrop-blur-md">
                      {currentModel.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#C8D1D8]">
                    <span className="bg-[#06111C]/80 px-2.5 py-1 rounded border border-[#075A8F]/40">
                      DM Lifts &amp; Escalators Engineering
                    </span>
                    <span className="bg-[#FF6A00]/90 text-white font-bold px-2.5 py-1 rounded">
                      VVVF Eco-Drive
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Details & Quick Specs */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#FF6A00] font-bold block mb-2">
                    SPECIFICATION HIGHLIGHTS
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {currentModel.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C8D1D8] mt-3 leading-relaxed">
                    {currentModel.desc}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#06111C] border border-[#075A8F]/40">
                  {currentModel.specs.map((s, i) => (
                    <div key={i} className="border-b border-[#075A8F]/20 pb-2">
                      <span className="text-[10px] font-mono uppercase text-[#8EA5B8] block">
                        {s.label}
                      </span>
                      <span className="text-xs font-bold text-white font-display">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Features List */}
                <ul className="space-y-2 text-xs text-[#C8D1D8]">
                  {currentModel.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For Box */}
                <div className="p-3.5 rounded-xl bg-[#06111C]/90 border-l-2 border-[#FF6A00] border-y border-r border-[#075A8F]/30">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#FF6A00] font-bold mb-1">
                    TYPICAL DEPLOYMENTS
                  </span>
                  <p className="text-xs text-white/95 font-medium leading-relaxed">
                    {currentModel.idealFor}
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
