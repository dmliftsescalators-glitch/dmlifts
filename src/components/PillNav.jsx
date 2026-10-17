import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  ChevronDown, 
  ChevronsUp, 
  Layers, 
  ArrowUpRight, 
  Wrench, 
  DraftingCompass, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items = [],
  activeHref,
  onItemClick,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#06111C',
  pillColor = '#0A1B2A',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#C8D1D8',
  circleColor = '#FF6A00',
  onMobileMenuClick,
  initialLoadAnimation = true,
  rightAction = null
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isDropdownPinned, setIsDropdownPinned] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const closeTimeoutRef = useRef(null);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  // Close desktop dropdown on outside pointer/touch
  useEffect(() => {
    const handlePointerOutside = (e) => {
      if (navItemsRef.current && !navItemsRef.current.contains(e.target)) {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setOpenDropdownIndex(null);
        setIsDropdownPinned(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerOutside);
    document.addEventListener('touchstart', handlePointerOutside);
    return () => {
      document.removeEventListener('pointerdown', handlePointerOutside);
      document.removeEventListener('touchstart', handlePointerOutside);
    };
  }, []);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
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
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.25, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 80), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    const timer = setTimeout(layout, 120);

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0.8, opacity: 0 });
        gsap.to(logoEl, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { opacity: 0, y: -10 });
        gsap.to(navItems, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease
        });
      }
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [items, ease, initialLoadAnimation]);

  // Close mobile menu on Escape key or when resizing to large desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.35,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.25,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.45,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    onMobileMenuClick?.();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor,
    ['--circle-bg']: circleColor
  };

  return (
    <div className={`pill-nav-container ${className}`}>
      <nav className="pill-nav" aria-label="Primary" style={cssVars}>
        {logo && (
          <a
            className="pill-logo"
            href={items?.[0]?.href || '#home'}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={(el) => {
              logoRef.current = el;
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} />
          </a>
        )}

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => {
              const hasDropdown = Boolean(item.subItems && item.subItems.length > 0);
              const isSubActive = item.subItems?.some((sub) => sub.href === activeHref);
              const isActive = activeHref === item.href || isSubActive;
              const isDropdownOpen = openDropdownIndex === i;

              return (
                <li
                  key={item.href || `item-${i}`}
                  role="none"
                  className="pill-nav-li"
                  onMouseEnter={() => {
                    handleEnter(i);
                    if (hasDropdown) {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                      setOpenDropdownIndex(i);
                    }
                  }}
                  onMouseLeave={() => {
                    handleLeave(i);
                    if (hasDropdown && !isDropdownPinned) {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = setTimeout(() => {
                        setOpenDropdownIndex(null);
                      }, 300);
                    }
                  }}
                >
                  <a
                    role="menuitem"
                    href={item.href}
                    className={`pill${isActive ? ' is-active' : ''}${hasDropdown ? ' has-dropdown' : ''}`}
                    aria-label={item.ariaLabel || item.label}
                    aria-expanded={hasDropdown ? isDropdownOpen : undefined}
                    aria-haspopup={hasDropdown ? 'true' : undefined}
                    onClick={(e) => {
                      if (hasDropdown) {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        if (isDropdownOpen && isDropdownPinned) {
                          // Second click or click while pinned navigates to parent page (e.g. #services)
                          setOpenDropdownIndex(null);
                          setIsDropdownPinned(false);
                          if (onItemClick) onItemClick(item);
                        } else {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenDropdownIndex(i);
                          setIsDropdownPinned(true);
                        }
                      } else {
                        setIsDropdownPinned(false);
                        setOpenDropdownIndex(null);
                        if (onItemClick) onItemClick(item);
                      }
                    }}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">
                        <span>{item.label}</span>
                        {hasDropdown && (
                          <ChevronDown
                            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                              isDropdownOpen ? 'rotate-180 text-[#FF6A00]' : 'opacity-70'
                            }`}
                          />
                        )}
                      </span>
                      <span className="pill-label-hover" aria-hidden="true">
                        <span>{item.label}</span>
                        {hasDropdown && (
                          <ChevronDown
                            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                              isDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </span>
                    </span>
                  </a>

                  {/* DESKTOP ARCHITECTURAL FLOATING DROPDOWN */}
                  {hasDropdown && (
                    <div
                      className={`pill-dropdown-menu ${isDropdownOpen ? 'is-open' : ''}`}
                      role="menu"
                      aria-label={`${item.label} menu`}
                      onMouseEnter={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        if (!isDropdownPinned) {
                          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = setTimeout(() => {
                            setOpenDropdownIndex(null);
                          }, 300);
                        }
                      }}
                    >
                      <div className="pill-dropdown-inner">
                        <div className="pill-dropdown-list">
                          {item.subItems.map((sub, subIdx) => {
                            const isCurrentSubActive = activeHref === sub.href;
                            return (
                              <a
                                key={sub.href || subIdx}
                                href={sub.href}
                                role="menuitem"
                                className={`pill-dropdown-item group ${isCurrentSubActive ? 'is-active' : ''}`}
                                onClick={(e) => {
                                  if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                                  setOpenDropdownIndex(null);
                                  setIsDropdownPinned(false);
                                  if (onItemClick) onItemClick(sub);
                                }}
                              >
                                <div className="pill-dropdown-icon-box">
                                  {sub.label.toLowerCase().includes('elevator') ? (
                                    <ChevronsUp className="w-4 h-4 text-[#FF6A00] transition-transform duration-300 group-hover:-translate-y-0.5" />
                                  ) : sub.label.toLowerCase().includes('escalator') ? (
                                    <Layers className="w-4 h-4 text-[#FF6A00] transition-transform duration-300 group-hover:scale-110" />
                                  ) : sub.label.toLowerCase().includes('installation') ? (
                                    <DraftingCompass className="w-4 h-4 text-[#FF6A00] transition-transform duration-300 group-hover:scale-110" />
                                  ) : sub.label.toLowerCase().includes('modernization') ? (
                                    <Sparkles className="w-4 h-4 text-[#FF6A00] transition-transform duration-300 group-hover:rotate-12" />
                                  ) : (
                                    <Wrench className="w-4 h-4 text-[#FF6A00] transition-transform duration-300 group-hover:rotate-12" />
                                  )}
                                </div>
                                <span className="pill-dropdown-title">{sub.label}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8D1D8]/40 group-hover:text-[#FF6A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ml-auto" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {rightAction && (
          <div className="pill-right-action desktop-only">
            {rightAction}
          </div>
        )}

        <button
          type="button"
          className="mobile-menu-btn mobile-only"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="mobile-menu-btn-text">
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
          </span>
          <span className="mobile-menu-btn-icon">
            {isMobileMenuOpen ? (
              <X className="w-3.5 h-3.5 text-[#FF6A00]" />
            ) : (
              <Menu className="w-3.5 h-3.5 text-[#FF6A00]" />
            )}
          </span>
        </button>
      </nav>

      {/* BACKDROP OVERLAY FOR MOBILE & TABLET */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop mobile-only"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* MOBILE & TABLET EXPANDED NAVIGATION MENU */}
      <div 
        className={`mobile-menu-popover mobile-only ${isMobileMenuOpen ? 'is-open' : ''}`} 
        style={cssVars}
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-eyebrow">NAVIGATION</span>
          <span className="mobile-menu-badge">DM LIFTS &amp; ESCALATORS</span>
        </div>

        <ul className="mobile-menu-list">
          {items.map((item, i) => {
            const hasDropdown = Boolean(item.subItems && item.subItems.length > 0);
            const isSubActive = item.subItems?.some((sub) => sub.href === activeHref);
            const isActive = activeHref === item.href || isSubActive;
            const isMobileSubOpen = mobileExpandedItem === i;
            const itemNumber = `0${i + 1}`;

            if (hasDropdown) {
              return (
                <li key={item.href || `mobile-item-${i}`} className="mobile-menu-parent">
                  <button
                    type="button"
                    className={`mobile-menu-link mobile-dropdown-btn${
                      isActive ? ' is-active' : ''
                    }`}
                    onClick={() => setMobileExpandedItem(isMobileSubOpen ? null : i)}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="mobile-nav-num">{itemNumber}</span>
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileSubOpen ? 'rotate-180 text-[#FF6A00]' : 'text-[#C8D1D8]/60'
                      }`}
                    />
                  </button>

                  <div
                    className={`mobile-submenu transition-all duration-300 overflow-hidden ${
                      isMobileSubOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    {item.subItems.map((sub, sIdx) => {
                      const isCurrentSubActive = activeHref === sub.href;
                      return (
                        <a
                          key={sub.href || sIdx}
                          href={sub.href}
                          className={`mobile-submenu-link${isCurrentSubActive ? ' is-active' : ''}`}
                          onClick={() => {
                            closeMobileMenu();
                            if (onItemClick) onItemClick(sub);
                          }}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                              <span className="font-bold text-white text-xs tracking-wider uppercase">
                                {sub.label}
                              </span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8D1D8]/40" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href || `mobile-item-${i}`}>
                <a
                  href={item.href}
                  className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                  onClick={() => {
                    closeMobileMenu();
                    if (onItemClick) onItemClick(item);
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="mobile-nav-num">{itemNumber}</span>
                    <span>{item.label}</span>
                  </div>
                </a>
              </li>
            );
          })}

          {/* Primary Call To Action */}
          <li className="pt-2">
            <a
              href="#contact"
              className="mobile-menu-cta"
              onClick={() => {
                closeMobileMenu();
                if (onItemClick) onItemClick({ label: 'Contact', href: '#contact' });
              }}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
