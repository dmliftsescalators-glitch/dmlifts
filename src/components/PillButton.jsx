import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function PillButton({
  children,
  href,
  onClick,
  icon,
  className = '',
  baseBg = '#FF6A00',
  circleBg = '#E55F00',
  textColor = '#FFFFFF',
  hoverTextColor = '#FFFFFF',
  borderColor = 'transparent',
  ease = 'power3.easeOut',
}) {
  const pillRef = useRef(null);
  const circleRef = useRef(null);
  const labelRef = useRef(null);
  const hoverLabelRef = useRef(null);
  const tlRef = useRef(null);
  const activeTweenRef = useRef(null);

  useEffect(() => {
    const pill = pillRef.current;
    const circle = circleRef.current;
    const label = labelRef.current;
    const hoverLabel = hoverLabelRef.current;
    if (!pill || !circle) return;

    const setup = () => {
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      if (w === 0 || h === 0) return;

      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`,
      });

      if (label) gsap.set(label, { y: 0 });
      if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.25, xPercent: -50, duration: 1.8, ease, overwrite: 'auto' }, 0);

      if (label) {
        tl.to(label, { y: -(h + 8), duration: 1.8, ease, overwrite: 'auto' }, 0);
      }

      if (hoverLabel) {
        gsap.set(hoverLabel, { y: Math.ceil(h + 80), opacity: 0 });
        tl.to(hoverLabel, { y: 0, opacity: 1, duration: 1.8, ease, overwrite: 'auto' }, 0);
      }

      tlRef.current = tl;
    };

    setup();
    const timer = setTimeout(setup, 120);

    const onResize = () => setup();
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [ease]);

  const handleMouseEnter = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.35,
      ease,
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.25,
      ease,
      overwrite: 'auto',
    });
  };

  return (
    <a
      ref={pillRef}
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: baseBg,
        borderColor: borderColor,
        color: textColor,
      }}
      className={`relative inline-flex items-center justify-center px-7 py-3.5 text-xs md:text-sm font-bold tracking-wider uppercase rounded-full overflow-hidden cursor-pointer select-none transition-shadow duration-300 ${className}`}
    >
      {/* Circle expand effect */}
      <span
        ref={circleRef}
        aria-hidden="true"
        style={{ backgroundColor: circleBg }}
        className="absolute left-1/2 bottom-0 rounded-full z-[1] pointer-events-none will-change-transform"
      />

      {/* Stacked rolling labels */}
      <span className="relative z-[2] inline-flex items-center leading-none">
        <span ref={labelRef} className="relative z-[2] inline-flex items-center will-change-transform leading-none">
          <span>{children}</span>
          {icon && <span className="ml-2 inline-flex items-center">{icon}</span>}
        </span>
        <span
          ref={hoverLabelRef}
          aria-hidden="true"
          style={{ color: hoverTextColor }}
          className="absolute left-0 top-0 z-[3] inline-flex items-center will-change-transform leading-none whitespace-nowrap"
        >
          <span>{children}</span>
          {icon && <span className="ml-2 inline-flex items-center">{icon}</span>}
        </span>
      </span>
    </a>
  );
}
