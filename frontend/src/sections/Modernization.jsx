import React, { useState } from 'react';
import { RefreshCw, Cpu, DoorOpen, Disc, ShieldCheck, Box, Zap } from 'lucide-react';

const UPGRADES = [
  {
    title: 'Controller Modernization',
    icon: Cpu,
    description: 'Replacing outdated relay-logic systems with microprocessor-based intelligent dispatch and energy-efficient control units.',
  },
  {
    title: 'Door Modernization',
    icon: DoorOpen,
    description: 'Upgrading aged mechanical door operators with smooth VVVF drives and full-height infrared light curtains.',
  },
  {
    title: 'Machine Modernization',
    icon: Disc,
    description: 'Converting bulky geared machines into compact, eco-friendly permanent magnet gearless traction systems.',
  },
  {
    title: 'Safety Upgrades',
    icon: ShieldCheck,
    description: 'Incorporating modern overspeed governors, certified progressive safety clamps, and autonomous rescue devices.',
  },
  {
    title: 'Cabin Modernization',
    icon: Box,
    description: 'Refreshing worn interior aesthetics with architectural stainless panels, modern LED ceilings, and digital operating fixtures.',
  },
  {
    title: 'Electrical & Control Upgrades',
    icon: Zap,
    description: 'Rewiring traveling cables, integrating emergency battery lowering systems, and smart building management interfaces.',
  },
];

export default function Modernization() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <section id="modernization" className="py-24 lg:py-32 bg-[#06111C] border-t border-[#075A8F]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#075A8F]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/25 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#FF6A00]">
            Retrofitting &amp; Lifecycle Upgrades
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase leading-tight">
              Modernization &amp; <span className="text-[#FF6A00]">Retrofit</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#FF6A00] mt-4" />
          </div>
          <p className="text-sm sm:text-base text-[#C8D1D8] max-w-md">
            Transform aging elevators into energy-efficient, safe, and contemporary vertical assets without the disruption of full structural replacement.
          </p>
        </div>

        {/* BEFORE / AFTER VISUAL LAYOUT (WITH INTERACTIVE SLIDER) */}
        <div className="mb-16 rounded-lg overflow-hidden border border-[#075A8F]/40 bg-[#0A1B2A] shadow-[0_20px_50px_rgba(6,17,28,0.95)]">
          
          {/* Top Bar Indicator */}
          <div className="px-6 py-4 border-b border-[#075A8F]/30 bg-[#06111C]/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-4 h-4 text-[#FF6A00]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] font-bold">
                Comparative Modernization Visualizer
              </span>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono">
              <span className="text-[#C8D1D8]/70">OLD / EXISTING ELEVATOR</span>
              <span className="text-[#FF6A00] font-semibold">VS</span>
              <span className="text-[#0A78B8] font-bold">MODERNIZED ELEVATOR</span>
            </div>
          </div>

          {/* Interactive Comparison Stage */}
          <div
            className="relative h-[360px] sm:h-[460px] lg:h-[500px] w-full select-none cursor-ew-resize overflow-hidden"
            onMouseMove={(e) => {
              if (isDragging || e.buttons === 1) handleSliderMove(e);
            }}
            onTouchMove={handleSliderMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {/* BACKGROUND: MODERNIZED ELEVATOR (Right side / Base) */}
            <div className="absolute inset-0 bg-[#0A1B2A]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?q=80&w=1400&auto=format&fit=crop"
                alt="Modernized elevator"
                className="w-full h-full object-cover filter contrast-115"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111C] via-[#075A8F]/30 to-transparent" />
              <div className="absolute inset-0 bg-[#075A8F]/15 pointer-events-none" />

              {/* Modernized Label Badge */}
              <div className="absolute bottom-6 right-6 z-10 px-4 py-2 rounded bg-[#06111C]/90 border border-[#0A78B8] backdrop-blur-md">
                <span className="text-[10px] font-mono text-[#0A78B8] uppercase tracking-widest block font-bold">
                  After Upgrade
                </span>
                <span className="text-sm font-bold text-white">
                  MODERNIZED ELEVATOR
                </span>
              </div>
            </div>

            {/* FOREGROUND: OLD / EXISTING ELEVATOR (Left side, clipped with clipPath) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
                alt="Old existing elevator"
                className="w-full h-full object-cover filter grayscale-[80%] contrast-90 brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#06111C]/60" />

              {/* Old Elevator Label Badge */}
              <div className="absolute bottom-6 left-6 z-10 px-4 py-2 rounded bg-[#06111C]/90 border border-[#075A8F]/40 backdrop-blur-md">
                <span className="text-[10px] font-mono text-[#C8D1D8]/70 uppercase tracking-widest block font-bold">
                  Pre-Modernization
                </span>
                <span className="text-sm font-bold text-white">
                  OLD / EXISTING ELEVATOR
                </span>
              </div>
            </div>

            {/* Interactive Dividing Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#FF6A00] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Center Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF6A00] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,106,0,0.6)] border-2 border-white">
                <span className="text-xs font-bold font-mono">⇄</span>
              </div>
            </div>

            {/* Slider Hint */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-[#06111C]/80 border border-[#075A8F]/50 text-[10px] font-mono tracking-wider text-[#C8D1D8] uppercase pointer-events-none">
              Drag slider to compare Before & After
            </div>
          </div>
        </div>

        {/* 6 MODERNIZATION UPGRADE PACKAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPGRADES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-[#0A1B2A] border border-[#075A8F]/30 hover:border-[#FF6A00]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded bg-[#06111C] border border-[#075A8F]/40 flex items-center justify-center text-[#FF6A00] mb-4 group-hover:border-[#FF6A00] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#FFFFFF] mb-2 tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C8D1D8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
