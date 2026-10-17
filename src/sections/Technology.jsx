import React, { useState } from 'react';
import { Cpu, Zap, Disc, Compass, ShieldAlert, BatteryCharging } from 'lucide-react';

const COMPONENTS = [
  {
    id: 'motor',
    name: 'Motor',
    type: 'Gearless Traction',
    icon: Disc,
    description: 'Permanent magnet synchronous gearless motor delivering energy efficiency, smooth torque delivery, and minimal mechanical vibration.',
    tag: 'Traction Unit',
  },
  {
    id: 'controller',
    name: 'Controller',
    type: 'Microprocessor Brain',
    icon: Cpu,
    description: 'Central microprocessor control system handling destination allocation, dispatch algorithms, and real-time operational safety monitoring.',
    tag: 'Control Core',
  },
  {
    id: 'door-mechanism',
    name: 'Door Mechanism',
    type: 'VVVF Operator',
    icon: Zap,
    description: 'Variable voltage variable frequency (VVVF) high-speed door operator providing synchronized, quiet opening and closing cycles.',
    tag: 'Door System',
  },
  {
    id: 'guide-shoes',
    name: 'Guide Shoes',
    type: 'Precision Assembly',
    icon: Compass,
    description: 'Low-friction roller guide assemblies ensuring smooth ride stability along structural vertical rail lines with minimal noise transfer.',
    tag: 'Ride Stability',
  },
  {
    id: 'safety-gear',
    name: 'Safety Gear',
    type: 'Overspeed Clamping',
    icon: ShieldAlert,
    description: 'Progressive bi-directional safety clamp system synchronized with the overspeed governor to lock the cabin securely if thresholds are exceeded.',
    tag: 'Safety System',
  },
  {
    id: 'ard',
    name: 'ARD',
    type: 'Automatic Rescue Device',
    icon: BatteryCharging,
    description: 'Autonomous emergency rescue unit that engages immediately during power interruptions to guide the cabin smoothly to the nearest floor.',
    tag: 'Emergency Unit',
  },
];

export default function Technology() {
  const [activeComponent, setActiveComponent] = useState(COMPONENTS[0].id);

  return (
    <section id="technology" className="py-24 lg:py-32 bg-[#06111C] border-t border-[#075A8F]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#075A8F]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/25 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#FF6A00]">
            Technology &amp; Safety Core
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase leading-tight">
              Technology &amp; <span className="text-[#FF6A00]">Safety</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#FF6A00] mt-4" />
          </div>
          <p className="text-sm sm:text-base text-[#C8D1D8] max-w-md">
            Engineered from ground up with synchronized safety assemblies, digital dispatch, and reliable electro-mechanical architecture.
          </p>
        </div>

        {/* MAIN VISUAL AREA + COMPONENT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: 3D SCHEMATIC / ENGINEERING VISUAL STAGE */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[420px] rounded-lg border border-[#075A8F]/40 bg-[#0A1B2A] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(6,17,28,0.95)]">
              
              {/* Technical Header */}
              <div className="flex items-center justify-between border-b border-[#075A8F]/30 pb-4 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-ping" />
                  <span className="text-xs font-mono tracking-widest uppercase text-white font-semibold">
                    Interactive 3D Technology Model Stage
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#0A78B8] font-bold uppercase tracking-wider">
                  Future 3D Schematics
                </span>
              </div>

              {/* Central Engineering Diagram / Model Placeholder */}
              <div className="relative my-8 py-8 flex flex-col items-center justify-center text-center">
                {/* Technical schematic lines and coordinate nodes */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <div className="w-64 h-64 border border-[#075A8F] rounded-full animate-spin" style={{ animationDuration: '40s' }} />
                  <div className="absolute w-44 h-44 border border-dashed border-[#FF6A00]/50 rounded-full" />
                  <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#0A78B8] to-transparent" />
                  <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#FF6A00]/40 to-transparent" />
                </div>

                {/* Central Schematic Indicator */}
                <div className="relative z-10 bg-[#06111C]/90 p-6 rounded-lg border border-[#075A8F]/50 backdrop-blur-md max-w-sm">
                  <div className="w-12 h-12 mx-auto mb-3 rounded bg-[#0A1B2A] border border-[#FF6A00] flex items-center justify-center text-[#FF6A00]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-mono uppercase tracking-widest text-[#FFFFFF] font-bold mb-1">
                    System Architecture Hub
                  </h4>
                  <p className="text-xs text-[#C8D1D8] leading-relaxed">
                    Layout prepared for interactive 3D component breakdown and exploded engineering views in upcoming phase.
                  </p>
                </div>

                {/* Orange Technical Connecting Lines */}
                <div className="hidden sm:block absolute top-6 left-8 text-left z-10">
                  <div className="w-8 h-[2px] bg-[#FF6A00] mb-1" />
                  <span className="text-[10px] font-mono text-[#FF6A00] uppercase tracking-wider">Traction Hub</span>
                </div>
                <div className="hidden sm:block absolute bottom-6 right-8 text-right z-10">
                  <div className="w-8 h-[2px] bg-[#0A78B8] ml-auto mb-1" />
                  <span className="text-[10px] font-mono text-[#0A78B8] uppercase tracking-wider">Shaft Redundancy</span>
                </div>
              </div>

              {/* Viewport Footer Bar */}
              <div className="pt-4 border-t border-[#075A8F]/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#C8D1D8]/80 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>ALL SAFETY LOOPS ONLINE</span>
                </div>
                <span className="text-[#FF6A00]">DM-ELEVATORS ENGINEERING CORE</span>
              </div>
            </div>
          </div>

          {/* RIGHT: 6 COMPONENT CARDS WITH ORANGE TECHNICAL LINES & WHITE LABELS */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {COMPONENTS.map((item) => {
              const Icon = item.icon;
              const isActive = activeComponent === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveComponent(item.id)}
                  className={`relative p-4 sm:p-5 rounded border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#0A1B2A] border-[#FF6A00] shadow-[0_0_20px_rgba(255,106,0,0.15)]'
                      : 'bg-[#0A1B2A]/80 border-[#075A8F]/30 hover:border-[#0A78B8] hover:bg-[#0A1B2A]'
                  }`}
                >
                  {/* Orange technical line indicator on active */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF6A00]" />
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#06111C] border border-[#075A8F]/40 flex-shrink-0 flex items-center justify-center text-[#FF6A00]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display text-base font-bold text-[#FFFFFF]">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A78B8] bg-[#06111C] px-2 py-0.5 rounded border border-[#075A8F]/30">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#C8D1D8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
