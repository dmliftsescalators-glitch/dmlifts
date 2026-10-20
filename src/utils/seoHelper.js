/**
 * SEO & Meta Tag Management Helper
 * Dynamically updates document title, description, canonical link, and Open Graph tags
 * for seamless Google Search Console indexing and social sharing.
 */

const BASE_URL = 'https://dmliftsandesclators.com';

export const PAGE_SEO = {
  home: {
    title: 'DM Lifts & Escalators | Advanced Vertical Mobility & AMC Solutions Bengaluru',
    description: 'DM Lifts & Escalators is Bangalore\'s premier manufacturer and installer of high-performance passenger elevators, residential lifts, commercial escalators, modernizations, and certified 24/7 AMC maintenance.',
    canonical: `${BASE_URL}/`,
    keywords: 'DM Lifts, DM Elevators, passenger elevators Bangalore, residential lifts, commercial escalators, moving walkways, elevator AMC Bangalore, lift modernization, vertical mobility',
  },
  'elevator-explore': {
    title: 'Passenger, Residential & Commercial Elevators | DM Lifts & Escalators',
    description: 'Explore high-speed gearless passenger elevators, panoramic glass lifts, hospital stretchers, and luxury residential elevators engineered with precision safety in Bengaluru.',
    canonical: `${BASE_URL}/elevators`,
    keywords: 'passenger elevators, residential lifts, glass capsule lifts, commercial elevators, hospital bed lifts, hydraulic elevators Bangalore',
  },
  'escalator-explore': {
    title: 'Commercial Escalators & Moving Walkways | DM Lifts & Escalators',
    description: 'Heavy-duty commercial escalators and moving walkways for shopping malls, airports, transit hubs, and commercial complexes with whisper-quiet drive and regenerative braking.',
    canonical: `${BASE_URL}/escalators`,
    keywords: 'commercial escalators, moving walkways, autowalks, mall escalators, airport passenger conveyors, escalator installation Bangalore',
  },
  'installation-explore': {
    title: 'Turnkey Elevator Installation & Shaft Engineering | DM Lifts & Escalators',
    description: 'End-to-end turnkey elevator installation, structural shaft civil consultation, precision laser alignment, and IS 14665 statutory safety commissioning.',
    canonical: `${BASE_URL}/installation`,
    keywords: 'elevator installation Bangalore, turnkey lift erection, shaft civil engineering, lift commissioning, IS 14665 elevator compliance',
  },
  'modernization-explore': {
    title: 'Elevator Modernization & Controller Retrofit | DM Lifts & Escalators',
    description: 'Transform legacy lifts with micro-processor controllers, VVVF regenerative drives, modern car operating panels (COP/LOP), and energy savings up to 40%.',
    canonical: `${BASE_URL}/modernization`,
    keywords: 'elevator modernization, lift controller retrofit, VVVF drive upgrade, elevator renovation, COP LOP replacement Bangalore',
  },
  'maintenance-explore': {
    title: '24/7 Elevator AMC Maintenance & Emergency Rescue | DM Lifts & Escalators',
    description: 'Certified 24/7 elevator AMC maintenance contracts, comprehensive and non-comprehensive packages, genuine OEM spares, and rapid breakdown dispatch across Bengaluru.',
    canonical: `${BASE_URL}/maintenance`,
    keywords: 'elevator AMC Bangalore, lift maintenance contract, emergency elevator breakdown repair, OEM lift spare parts, 24/7 elevator service',
  },
  'services-page': {
    title: 'Elevator & Escalator Engineering Services | DM Lifts & Escalators',
    description: 'Comprehensive vertical transportation services: new installation, modernizations, 24/7 preventive AMC, safety inspections, and architectural cab customization.',
    canonical: `${BASE_URL}/services`,
    keywords: 'elevator services Bangalore, lift AMC, escalator maintenance, elevator modernization, custom lift cabin design',
  },
  about: {
    title: 'About DM Lifts & Escalators | Bengaluru\'s Premier Elevator Engineers',
    description: 'Learn about DM Lifts & Escalators, our decades of engineering heritage, manufacturing standards, precision safety ethos, and leadership in vertical mobility.',
    canonical: `${BASE_URL}/about`,
    keywords: 'about DM Lifts, elevator manufacturers Bangalore, lift engineering company Karnataka, elevator safety standards',
  },
  solutions: {
    title: 'Vertical Transportation Solutions & Technical Specs | DM Lifts & Escalators',
    description: 'Technical specifications, machine-room-less (MRL) technology, gearless PM motors, IoT predictive telemetry, and architectural finish options.',
    canonical: `${BASE_URL}/solutions`,
    keywords: 'MRL elevators, gearless elevator motors, IoT elevator monitoring, luxury elevator finishes, architectural lift solutions',
  },
  contact: {
    title: 'Contact DM Lifts & Escalators | Get a Free Engineering Quote & Site Survey',
    description: 'Contact DM Lifts & Escalators in Bengaluru for technical consultations, elevator RFP quotations, shaft dimension reviews, or emergency breakdown support.',
    canonical: `${BASE_URL}/contact`,
    keywords: 'contact DM Lifts, elevator quotation Bangalore, lift price enquiry, emergency lift repair number Bengaluru',
  },
};

/**
 * Apply SEO meta tags to DOM
 */
export function applySEO(pageKey = 'home') {
  const config = PAGE_SEO[pageKey] || PAGE_SEO.home;

  // Title
  document.title = config.title;

  // Helpers to update or create meta tags
  const setMeta = (nameAttr, nameVal, content) => {
    let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, nameVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Standard Meta
  setMeta('name', 'description', config.description);
  setMeta('name', 'keywords', config.keywords);
  setMeta('name', 'title', config.title);

  // Open Graph
  setMeta('property', 'og:title', config.title);
  setMeta('property', 'og:description', config.description);
  setMeta('property', 'og:url', config.canonical);

  // Twitter
  setMeta('name', 'twitter:title', config.title);
  setMeta('name', 'twitter:description', config.description);

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', config.canonical);
}
