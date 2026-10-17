import React, { useState } from 'react';
import { Box, DoorOpen, Sparkles, SunMedium, Sliders, Fingerprint } from 'lucide-react';

const INTERIOR_OPTIONS = [
  {
    id: 'cabin',
    title: 'Cabin Styles',
    icon: Box,
    description: 'Custom glass panoramic capsules, brushed stainless steel, wood veneers, and acoustic paneling.',
  },
  {
    id: 'doors',
    title: 'Door Options',
    icon: DoorOpen,
    description: 'Center-opening, telescopic side-opening, framed glass, and full-vision panoramic door systems.',
  },
  {
    id: 'ceilings',
    title: 'Ceiling Options',
    icon: Sparkles,
    description: 'Laser-perforated stainless panels, indirect perimeter cove illumination, and modular architectural grids.',
  },
  {
    id: 'lighting',
    title: 'Lighting Options',
    icon: SunMedium,
    description: 'Energy-saving circadian LED integration, soft diffusion panels, and customizable mood lighting.',
  },
  {
    id: 'cop-lop',
    title: 'COP / LOP Options',
    icon: Sliders,
    description: 'Flush-mount capacitive touch operating panels, high-contrast digital displays, and tactile braille indicators.',
  },
  {
    id: 'biometric',
    title: 'Biometric Access',
    icon: Fingerprint,
    description: 'Touchless RFID card readers, facial recognition integration, and secure destination floor lockout.',
  },
];

export default function Interiors() {
  const [selectedOption, setSelectedOption] = useState(INTERIOR_OPTIONS[0].id);

  return (
    <section id="interiors" className="py-24 lg:py-32 bg-[#06111C] border-t border-[#075A8F]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#075A8F]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-2 h-2 rounded-xs bg-[#FF6A00]" />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#FF6A00] font-semibold">
            Architectural Finishes
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight leading-tight">
            Designs That Elevate Every Journey
          </h2>
          <div className="w-16 h-[2px] bg-[#FF6A00] mt-4 mb-4" />
          <p className="text-base text-[#C8D1D8] leading-relaxed">
            Curate bespoke elevator cabin atmospheres tailored to the architectural aesthetic of your building. Every surface, fixture, and interface is crafted for ergonomic elegance and durability.
          </p>
        </div>

        {/* MAIN VISUAL & OPTIONS LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: LARGE ELEVATOR INTERIOR VISUAL */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] rounded-lg overflow-hidden border border-[#075A8F]/40 bg-[#0A1B2A] group shadow-[0_15px_40px_rgba(6,17,28,0.9)]">
              {/* Luxury architectural elevator interior photo */}
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury elevator cabin interior"
                className="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Blue and navy atmospheric gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111C] via-[#0A1B2A]/40 to-transparent" />
              <div className="absolute inset-0 bg-[#075A8F]/20 pointer-events-none" />

              {/* Technical corner indicators */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#FF6A00]" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#0A78B8]" />

              {/* Status banner */}
              <div className="absolute top-4 inset-x-12 flex justify-center">
                <span className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#06111C]/85 border border-[#075A8F]/40 text-[#FFFFFF] rounded backdrop-blur-sm">
                  INTERACTIVE 3D CONFIGURATOR // STAGE 2 INTEGRATION READY
                </span>
              </div>

              {/* Bottom Cabin Spec Readout */}
              <div className="absolute bottom-6 inset-x-6 sm:inset-x-8 p-4 rounded bg-[#06111C]/90 border border-[#075A8F]/40 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#FF6A00] font-semibold">
                    Signature Finish Suite
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Brushed Metallic Bronze & Smoked Glass Panels
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-[#C8D1D8]">LED Cove Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 6 INTERIOR OPTION CARDS */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {INTERIOR_OPTIONS.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedOption === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedOption(item.id)}
                  className={`p-4 sm:p-5 rounded border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#0A1B2A] border-[#FF6A00] shadow-[0_0_20px_rgba(255,106,0,0.15)]'
                      : 'bg-[#0A1B2A]/70 border-[#075A8F]/30 hover:border-[#0A78B8] hover:bg-[#0A1B2A]'
                  }`}
                >
                  {/* Orange Icon */}
                  <div className="w-10 h-10 rounded bg-[#06111C] border border-[#075A8F]/40 flex-shrink-0 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#FF6A00]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-sm sm:text-base font-bold text-[#FFFFFF]">
                        {item.title}
                      </h3>
                      {isSelected && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6A00] font-semibold">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#C8D1D8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
