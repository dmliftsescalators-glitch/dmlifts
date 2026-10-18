import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import PillButton from './PillButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const subheadRef = useRef(null);
  const buttonsRef = useRef(null);

  // Guarantee autoplay starts reliably across all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay prevented or pending interaction:', err);
      });
    }
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const ctx = gsap.context(() => {
      // 1. PAGE LOAD CINEMATIC SEQUENCE
      const loadTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      });

      // Video subtle scale settle
      if (!motionQuery.matches && videoWrapperRef.current) {
        loadTl.fromTo(
          videoWrapperRef.current,
          { scale: 1.05, opacity: 0.8 },
          { scale: 1.0, opacity: 1, duration: 1.8, ease: 'power1.out' },
          0
        );
      }

      // Main Heading
      loadTl.fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        0.25
      );

      // Subhead
      loadTl.fromTo(
        subheadRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        0.5
      );

      // Buttons
      loadTl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        0.7
      );

      // 2. SCROLL ANIMATION (GSAP ScrollTrigger)
      if (!motionQuery.matches && containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress;

            // Smooth parallax on full background video
            if (videoWrapperRef.current) {
              gsap.set(videoWrapperRef.current, {
                y: p * 90,
              });
            }

            // Hero text fade and upward drift
            if (heroContentRef.current) {
              const textOpacity = Math.max(0, 1 - p * 1.5);
              const textY = -p * 60;
              gsap.set(heroContentRef.current, {
                opacity: textOpacity,
                y: textY,
                pointerEvents: textOpacity < 0.1 ? 'none' : 'auto',
              });
            }
          },
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center pt-20 pb-8 sm:pt-24 sm:pb-16 lg:py-0 overflow-hidden"
    >
      {/* ========================================================= */}
      {/* 1. FULL BACKGROUND VIDEO (CLEAR & VIBRANT, NO NAVY TINT)   */}
      {/* ========================================================= */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none will-change-transform"
      >
        <video
          ref={videoRef}
          src="/videos/heromain.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            filter: 'contrast(1.1) brightness(1.05) saturate(1.15)',
          }}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ========================================================= */}
      {/* 2. MINIMAL EDGES BLEND (NO GLOBAL NAVY OVERLAY)            */}
      {/* ========================================================= */}
      {/* Top subtle fade for navbar readability */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />

      {/* Bottom subtle transition into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#06111C] via-[#06111C]/60 to-transparent pointer-events-none z-10" />

      {/* Soft feather shadow behind text area only (keeps 85%+ of video totally clear) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none z-10" />

      {/* ========================================================= */}
      {/* 3. HERO CONTENT & BALANCED ARCHITECTURAL TYPOGRAPHY        */}
      {/* ========================================================= */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20">
        <div
          ref={heroContentRef}
          className="max-w-4xl flex flex-col justify-center"
        >
          {/* ARCHITECTURAL HERO HEADLINE */}
          <div ref={headingRef} className="mb-5 sm:mb-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 sm:mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse shadow-[0_0_8px_#FF6A00]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/95">
                Precision Engineering &amp; Vertical Mobility
              </span>
            </div>

            <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.08] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] break-normal">
              <span className="block">
                <span className="inline-block whitespace-nowrap">Elevating</span>{' '}
                <span className="inline-block whitespace-nowrap">Spaces.</span>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#E2A63B] to-[#B87C28] drop-shadow-sm">
                <span className="inline-block whitespace-nowrap">Defining</span>{' '}
                <span className="inline-block whitespace-nowrap">Experiences.</span>
              </span>
            </h1>
          </div>

          {/* SUPPORTING TEXT */}
          <p
            ref={subheadRef}
            className="text-base sm:text-lg md:text-xl text-[#F0F4F8] font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
          >
            Advanced elevator and escalator solutions engineered for whisper-quiet transit, architectural distinction, and uncompromising safety.
          </p>

          {/* ACTION BUTTONS (REACT BITS PILL ANIMATION) */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Primary Button */}
            <PillButton
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el) {
                  if (window.lenis) {
                    window.lenis.scrollTo(el, { offset: -70 });
                  } else {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }
                if (window.location.hash !== '#services') {
                  history.pushState(null, '', '#services');
                }
              }}
              baseBg="#FF6A00"
              circleBg="#FFFFFF"
              textColor="#FFFFFF"
              hoverTextColor="#06111C"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shadow-[0_0_25px_rgba(255,106,0,0.5)] hover:shadow-[0_0_35px_rgba(255,106,0,0.7)]"
            >
              EXPLORE SERVICES
            </PillButton>
          </div>

        </div>
      </div>
    </section>
  );
}
