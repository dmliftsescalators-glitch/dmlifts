import React from 'react';
import { Volume2, Gauge, Waves, Wind } from 'lucide-react';

const EXPERIENCE_PILLARS = [
  {
    title: 'Acoustic Insulation',
    desc: 'Dual-wall cab insulation and aerodynamic air deflection eliminating travel turbulence and hoistway whistle.',
    icon: Volume2,
  },
  {
    title: 'Vibration Suppression',
    desc: 'Multi-axis dynamic roller guides with active dampening absorbing lateral shaft deflections.',
    icon: Waves,
  },
  {
    title: 'Smooth Acceleration',
    desc: 'S-curve jerk-limiting velocity profiles designed for imperceptible start, travel, and deck levelling.',
    icon: Gauge,
  },
  {
    title: 'Air Purification',
    desc: 'Integrated ionization and continuous air exchange keeping cabin climate fresh and sanitized.',
    icon: Wind,
  },
];

export default function ElevatorExperience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#06111C] border-t border-[#075A8F]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#075A8F]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/25 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#FF6A00]">
            Ride Quality &amp; Comfort
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight">
              The Elevator Experience
            </h2>
            <div className="w-16 h-[2px] bg-[#FF6A00] mt-4" />
          </div>
          <p className="text-sm sm:text-base text-[#C8D1D8] max-w-md">
            Engineered comfort that transforms vertical transit into an effortless, serene journey through advanced sound dampening and fluid motion control.
          </p>
        </div>

        {/* 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCE_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-[#0A1B2A] border border-[#075A8F]/30 hover:border-[#FF6A00]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded bg-[#06111C] border border-[#075A8F]/40 flex items-center justify-center text-[#FF6A00] mb-4 group-hover:border-[#FF6A00] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#FFFFFF] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C8D1D8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
