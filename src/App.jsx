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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Sync state with URL hash for browser history, direct links, and Back/Forward buttons
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#services') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else if (hash === '#solutions') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('solutions');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else if (hash === '#elevators-explore' || hash === '#explore-elevators' || hash === '#elevators') {
        setCurrentPage('elevator-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#escalators-explore' || hash === '#explore-escalators' || hash === '#escalators') {
        setCurrentPage('escalator-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#installation-explore' || hash === '#explore-installation' || hash === '#installation') {
        setCurrentPage('installation-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#modernization-explore' || hash === '#explore-modernization' || hash === '#modernization') {
        setCurrentPage('modernization-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#maintenance-explore' || hash === '#explore-maintenance' || hash === '#maintenance') {
        setCurrentPage('maintenance-explore');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const navigateToServices = () => {
    setCurrentPage('home');
    window.location.hash = '#services';
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  const navigateToElevators = () => {
    setCurrentPage('elevator-explore');
    window.location.hash = '#elevators-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToEscalators = () => {
    setCurrentPage('escalator-explore');
    window.location.hash = '#escalators-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMaintenance = () => {
    setCurrentPage('maintenance-explore');
    window.location.hash = '#maintenance-explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated full-page views
  if (currentPage === 'services-page') {
    return (
      <ServicesPage
        onBack={navigateToHome}
        onNavigate={(exploreId) => {
          if (exploreId === 'elevator-explore') navigateToElevators();
          else if (exploreId === 'escalator-explore') navigateToEscalators();
          else if (exploreId === 'maintenance-explore') navigateToMaintenance();
        }}
      />
    );
  }

  if (currentPage === 'elevator-explore') {
    return <ElevatorExplorePage onBack={navigateToServices} backLabel="Back to Services" />;
  }

  if (currentPage === 'escalator-explore') {
    return <EscalatorExplorePage onBack={navigateToServices} backLabel="Back to Services" />;
  }

  if (currentPage === 'installation-explore') {
    return <InstallationExplorePage onBack={navigateToServices} backLabel="Back to Services" />;
  }

  if (currentPage === 'modernization-explore') {
    return <ModernizationExplorePage onBack={navigateToServices} backLabel="Back to Services" />;
  }

  if (currentPage === 'maintenance-explore') {
    return <MaintenancePage onBack={navigateToServices} backLabel="Back to Services" />;
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
