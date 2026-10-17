import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Building2, 
  Headphones, 
  FileSearch, 
  DraftingCompass, 
  Wrench, 
  LifeBuoy, 
  ArrowRight
} from 'lucide-react';

// Crystal-clear Ultra-HD Architectural Images
import luxuryElevatorImg from '../assets/about/luxury_elevator_hd.jpg';
import escalatorAtriumImg from '../assets/about/escalator_atrium_hd.jpg';

const CAPABILITIES = [
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Reliable operation and user confidence with multi-redundant fail-safes.',
  },
  {
    id: 'engineering',
    icon: Cpu,
    title: 'Smart Engineering',
    desc: 'Modern VVVF & PMSM technology for smooth, energy-efficient performance.',
  },
  {
    id: 'spaces',
    icon: Building2,
    title: 'Designed for Every Space',
    desc: 'Bespoke solutions for residential, commercial, hospital, and transit towers.',
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'Long-Term Support',
    desc: 'Dedicated AMC maintenance and 24/7 emergency dispatch service.',
  },
];

const APPROACH_STEPS = [
  {
    step: '01',
    icon: FileSearch,
    title: 'Understand',
    desc: 'We analyze your structural requirements, passenger traffic flow, and architectural environment.',
  },
  {
    step: '02',
    icon: DraftingCompass,
    title: 'Design',
    desc: 'We engineer the optimal hoistway configuration, custom finishes, and energy-efficient drive systems.',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Install',
    desc: 'Precision mechanical installation with laser alignment and strict European safety compliance.',
  },
  {
    step: '04',
    icon: LifeBuoy,
    title: 'Support',
    desc: 'Comprehensive lifecycle maintenance, preventative safety audits, and round-the-clock technician support.',
  },
];

export default function About() {
  return (
    <section 
      id="about" 
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* TIER 1: MAIN ABOUT US SHOWCASE                            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center mb-6 sm:mb-14 lg:mb-24">
          
          {/* LEFT COLUMN: BRAND STORY & CAPABILITY CARDS */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow Label with Architectural Line */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87C28]/10 border border-[#B87C28]/25 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B87C28] shadow-[0_0_8px_#B87C28]" />
              <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#B87C28]">
                About DM Elevators
              </span>
            </motion.div>

            {/* Editorial Serif Display Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#06111C] tracking-tight leading-[1.08] mb-5"
            >
              Moving People. <br />
              <span className="font-editorial italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A86E18] via-[#D49A3D] to-[#A86E18] drop-shadow-sm">
                Elevating Spaces.
              </span>
            </motion.h2>

            {/* Subtitle / Narrative Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal mb-8"
            >
              <strong className="text-[#06111C] font-semibold">DM Elevators &amp; Escalators</strong> provides thoughtfully designed elevator and escalator solutions that combine modern technology, dependable performance, uncompromising safety, and refined architectural aesthetics.
            </motion.p>

            {/* 2x2 Feature Capability Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-2.5 sm:gap-5"
            >
              {CAPABILITIES.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-white border border-[#E2E8F0]/90 hover:border-[#D49A3D]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(212,154,61,0.12)] transition-all duration-300 flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4"
                  >
                    {/* Golden Circular Icon Badge */}
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#FFF8ED] to-[#FDE8CC] border border-[#E9C794]/60 flex items-center justify-center flex-shrink-0 text-[#B87C28] group-hover:scale-105 group-hover:bg-[#FFF3DF] transition-transform duration-300 shadow-xs">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-xs sm:text-base text-[#06111C] mb-0.5 sm:mb-1 group-hover:text-[#A86E18] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-[13px] text-[#64748B] leading-snug line-clamp-2 sm:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* RIGHT COLUMN: HD ARCHITECTURAL SHOWCASE (Desktop only, hidden on mobile & tablet) */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-end">
            
            {/* Outer Architectural Framing Stage */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px] lg:max-w-none"
            >
              
              {/* Organic Curved Gold Backdrop Frame (matches the reference artwork swoop) */}
              <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden p-2 sm:p-2.5 bg-gradient-to-tr from-[#E6B86F] via-[#FCE4B8] to-[#D49A3D] shadow-[0_25px_60px_rgba(212,154,61,0.22)]">
                
                {/* Primary Ultra-HD Panoramic Glass Elevator Cabin */}
                <div className="relative rounded-[30px] sm:rounded-[38px] overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-[#0A1B2A] group">
                  <img
                    src={luxuryElevatorImg}
                    alt="DM Elevators Luxury Panoramic Glass Elevator Atrium Installation"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.04]"
                    loading="eager"
                  />
                  {/* Subtle glass reflection & bottom gradient for crisp depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

              {/* Overlapping Angled Commercial Escalator Inset Card (Exact to Reference Mockup) */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute -bottom-4 left-2 sm:-bottom-8 sm:-left-6 lg:-left-6 w-36 min-[380px]:w-44 sm:w-56 md:w-64 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-[#E6B86F] to-[#FFFFFF] shadow-[0_20px_45px_rgba(0,0,0,0.25)] z-20 group"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-[#06111C]">
                  <img
                    src={escalatorAtriumImg}
                    alt="DM Escalators Commercial Transit Installation"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Ambient Glow Accent Under the Showcase */}
              <div className="absolute -bottom-12 -right-8 w-64 h-64 bg-[#D49A3D]/25 rounded-full blur-[80px] pointer-events-none -z-10" />

            </motion.div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* TIER 2: "OUR APPROACH" 4-STEP PROCESS WORKFLOW CONTAINER  */}
        {/* ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl lg:rounded-4xl bg-gradient-to-b from-white via-[#FCFBF8] to-[#F9F7F1] border border-[#E6DEC8] p-4 sm:p-8 lg:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          {/* Subtle Decorative Flow Waves in Background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-b from-[#FFF2D6]/40 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D49A3D]/60 to-transparent" />

          {/* Approach Header */}
          <div className="max-w-3xl mb-5 sm:mb-12 relative z-10">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87C28]/10 border border-[#B87C28]/25 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B87C28] shadow-[0_0_8px_#B87C28]" />
              <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#B87C28]">
                Our Approach &amp; Engineering
              </span>
            </div>

            {/* Approach Headline */}
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#06111C] tracking-tight leading-tight mb-4">
              From Requirement to{' '}
              <span className="font-editorial italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A86E18] via-[#D49A3D] to-[#A86E18]">
                Reliable Movement.
              </span>
            </h3>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We approach every project with dedicated attention to the building environment, functional traffic requirements, architectural aesthetics, passenger safety, and long-term operating usability.
            </p>
          </div>

          {/* 4-Step Linear Flow: Horizontal scroll track on mobile, 4-column grid on tablet & desktop */}
          <div className="flex flex-row overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-6 pb-3 md:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar relative z-10 -mx-1 px-1 sm:mx-0 sm:px-0">
            {APPROACH_STEPS.map((stepItem, index) => {
              const StepIcon = stepItem.icon;
              return (
                <div 
                  key={stepItem.title} 
                  className="relative flex flex-col justify-between shrink-0 md:shrink w-[220px] sm:w-[290px] md:w-auto p-4 sm:p-6 rounded-2xl bg-white/95 border border-[#E9C794]/70 shadow-[0_8px_24px_rgba(212,154,61,0.08)] snap-center group hover:border-[#D49A3D] hover:shadow-[0_12px_30px_rgba(212,154,61,0.18)] transition-all duration-300"
                >
                  <div>
                    {/* Top Header: Icon + Step Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#FFF9EE] via-[#FDECCF] to-[#FCDFA8] border border-[#E9C794]/80 flex items-center justify-center text-[#B87C28] shadow-sm group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(212,154,61,0.22)] transition-all duration-300 shrink-0">
                        <StepIcon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#B87C28] bg-[#FFF9EE] border border-[#E9C794]/80 px-2.5 py-1 rounded-full shadow-xs">
                        STEP {stepItem.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#06111C] mb-2 group-hover:text-[#A86E18] transition-colors">
                      {stepItem.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>

                  {/* Connecting Arrow between steps on tablet & desktop */}
                  {index < APPROACH_STEPS.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3.5 -translate-y-1/2 translate-x-1/2 z-20 text-[#D49A3D] items-center pointer-events-none group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-7 h-7 rounded-full bg-white border border-[#E9C794] shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Guidance and Step Flow */}
          <div className="flex md:hidden items-center justify-between mt-3 px-1 text-xs text-[#8C7A5B]">
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#B87C28]">
              <span>WORKFLOW</span>
              <span>01 → 04</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono tracking-wider uppercase text-[#A8987E]">
              <span>Swipe Steps ↔</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
