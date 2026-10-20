import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './sections/About';
import Solutions from './sections/Solutions';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ElevatorExplorePage from './pages/ElevatorExplorePage';
import EscalatorExplorePage from './pages/EscalatorExplorePage';
import MaintenancePage from './pages/MaintenancePage';
import InstallationExplorePage from './pages/InstallationExplorePage';
import ModernizationExplorePage from './pages/ModernizationExplorePage';

import { applySEO } from './utils/seoHelper';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Initialize Lenis smooth scroll for an architectural, fluid experience
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Update document title, canonical URL, and meta tags for Google Search Console & SEO
  useEffect(() => {
    applySEO(currentPage);
  }, [currentPage]);

  // Helper for scrolling smoothly to any section with proper fixed-navbar offset
  const scrollToTargetSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -70 });
    } else {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Sync state with URL pathname & hash for Google Search Console indexing, direct links, and browser history
  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, '');
      const path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

      if (path === '/elevators' || hash === '#elevators-explore' || hash === '#explore-elevators' || hash === '#elevators') {
        setCurrentPage('elevator-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
        window.lenis?.scrollTo(0, { immediate: true });
      } else if (path === '/escalators' || hash === '#escalators-explore' || hash === '#explore-escalators' || hash === '#escalators') {
        setCurrentPage('escalator-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
        window.lenis?.scrollTo(0, { immediate: true });
      } else if (path === '/installation' || hash === '#installation-explore' || hash === '#explore-installation' || hash === '#installation') {
        setCurrentPage('installation-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
        window.lenis?.scrollTo(0, { immediate: true });
      } else if (path === '/modernization' || hash === '#modernization-explore' || hash === '#explore-modernization' || hash === '#modernization') {
        setCurrentPage('modernization-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
        window.lenis?.scrollTo(0, { immediate: true });
      } else if (path === '/maintenance' || hash === '#maintenance-explore' || hash === '#explore-maintenance' || hash === '#maintenance') {
        setCurrentPage('maintenance-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
        window.lenis?.scrollTo(0, { immediate: true });
      } else if (path === '/services' || hash === '#services') {
        setCurrentPage('home');
        setTimeout(() => {
          scrollToTargetSection('services');
        }, 120);
      } else if (path === '/solutions' || hash === '#solutions') {
        setCurrentPage('home');
        setTimeout(() => {
          scrollToTargetSection('solutions');
        }, 120);
      } else if (path === '/about' || hash === '#about') {
        setCurrentPage('home');
        setTimeout(() => {
          scrollToTargetSection('about');
        }, 120);
      } else if (path === '/contact' || hash === '#contact') {
        setCurrentPage('home');
        setTimeout(() => {
          scrollToTargetSection('contact');
        }, 120);
      } else {
        setCurrentPage('home');
      }
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  const navigateToServices = () => {
    setCurrentPage('home');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/services');
    }
    window.location.hash = '#services';
    setTimeout(() => {
      scrollToTargetSection('services');
    }, 120);
  };

  const navigateToElevators = () => {
    setCurrentPage('elevator-explore');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/elevators');
    }
    window.location.hash = '#elevators-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToEscalators = () => {
    setCurrentPage('escalator-explore');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/escalators');
    }
    window.location.hash = '#escalators-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToInstallation = () => {
    setCurrentPage('installation-explore');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/installation');
    }
    window.location.hash = '#installation-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToModernization = () => {
    setCurrentPage('modernization-explore');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/modernization');
    }
    window.location.hash = '#modernization-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMaintenance = () => {
    setCurrentPage('maintenance-explore');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/maintenance');
    }
    window.location.hash = '#maintenance-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/');
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.lenis?.scrollTo(0, { immediate: true });
  };

  const navigateToContact = () => {
    setCurrentPage('home');
    if (window.history.pushState) {
      window.history.pushState(null, '', '/contact');
    }
    window.location.hash = '#contact';
    setTimeout(() => {
      scrollToTargetSection('contact');
    }, 120);
  };

  // Dedicated full-page views
  if (currentPage === 'services-page') {
    return (
      <ServicesPage
        onBack={navigateToHome}
        onContact={navigateToContact}
        onNavigate={(exploreId) => {
          if (exploreId === 'elevator-explore') navigateToElevators();
          else if (exploreId === 'escalator-explore') navigateToEscalators();
          else if (exploreId === 'maintenance-explore') navigateToMaintenance();
          else if (exploreId === 'installation-explore') navigateToInstallation();
          else if (exploreId === 'modernization-explore') navigateToModernization();
        }}
      />
    );
  }

  if (currentPage === 'elevator-explore') {
    return <ElevatorExplorePage onBack={navigateToHome} onContact={navigateToContact} backLabel="Back to Home" />;
  }

  if (currentPage === 'escalator-explore') {
    return <EscalatorExplorePage onBack={navigateToHome} onContact={navigateToContact} backLabel="Back to Home" />;
  }

  if (currentPage === 'installation-explore') {
    return <InstallationExplorePage onBack={navigateToHome} onContact={navigateToContact} backLabel="Back to Home" />;
  }

  if (currentPage === 'modernization-explore') {
    return <ModernizationExplorePage onBack={navigateToHome} onContact={navigateToContact} backLabel="Back to Home" />;
  }

  if (currentPage === 'maintenance-explore') {
    return <MaintenancePage onBack={navigateToHome} onContact={navigateToContact} backLabel="Back to Home" />;
  }

  return (
    <div className="min-h-screen bg-[#06111C] text-[#FFFFFF] font-sans antialiased overflow-x-hidden selection:bg-[#FF6A00]/25 selection:text-white">
      {/* Fixed Architectural Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 01 HERO */}
        <Hero />

        {/* 02 ABOUT DM LIFTS & ESCALATORS */}
        <About />

        {/* 03 OUR SOLUTIONS & SPECIFICATIONS */}
        <Solutions />

        {/* 04 SERVICES & DIVISIONS (ELEVATORS, ESCALATORS, MAINTENANCE) */}
        <Services />

        {/* 05 CONTACT / QUOTE */}
        <Contact />
      </main>

      {/* 05 FOOTER */}
      <Footer />
    </div>
  );
}
