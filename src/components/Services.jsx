import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import heroImg from '../assets/services-hero.png';
import './Services.css';

/* ─────────────────────────────────────────────
   SERVICE DATA
───────────────────────────────────────────── */
const services = [
  {
    title: "Strategy &\nDiscovery",
    tag: "01",
    desc: "We research, position, and define the direction before a single pixel is drawn.",
    items: ["Brand positioning & messaging", "Market research & analysis", "User persona development", "Product roadmap & strategy"]
  },
  {
    title: "Brand\nIdentity",
    tag: "02",
    desc: "Every visual touchpoint — built with intention and unmistakable character.",
    items: ["Logo & visual identity systems", "Typography & colour design", "Brand guidelines & documentation", "Custom illustrations & iconography"]
  },
  {
    title: "Web\nExperience",
    tag: "03",
    desc: "Fast, responsive, immersive. Interfaces that turn visitors into believers.",
    items: ["Responsive web design", "UI/UX design systems", "Interactive prototyping", "High-performance front-end"]
  }
];

/* ─────────────────────────────────────────────
   MEDIA QUERY HOOK
───────────────────────────────────────────── */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);
  return matches;
};

/* ─────────────────────────────────────────────
   FLIP CARD  (per service, desktop only)
   – front: triptych slice of the hero image
   – back : service content
───────────────────────────────────────────── */
const FlipCard = ({ service, index, splitProgress, flipProgress }) => {
  /* Scroll ranges — split phase: 0.25→0.55, flip phase: 0.55→0.9 */
  const SPLIT_START = 0.20;
  const SPLIT_END   = 0.55;
  const FLIP_START  = 0.55;
  const FLIP_END    = 0.92;

  /* ── SPLIT PHASE: panels spread apart from centre ── */
  // Each panel starts overlapping at centre, ends at its column position
  const offsets = [-1, 0, 1]; // left, centre, right
  const spreadX = useTransform(
    splitProgress,
    [SPLIT_START, SPLIT_END],
    [`${offsets[index] * 0}px`, `${offsets[index] * 0}px`] // handled by CSS gap via scale
  );

  // Width: hero-width/3 → card-width (portrait 4:5 via CSS)
  // We'll drive this with a 'panel open' value 0→1
  const panelOpen = useTransform(splitProgress, [SPLIT_START, SPLIT_END], [0, 1]);

  // Slight vertical translate to lift panels up during split
  const panelY = useTransform(splitProgress, [SPLIT_START, SPLIT_END], ['0px', '-30px']);

  /* ── FLIP PHASE: Y-axis card flip ── */
  // Stagger each card: index 0 flips first, 2 last
  const STAGGER = 0.09;
  const flipStart = FLIP_START + index * STAGGER;
  const flipEnd   = FLIP_END   + index * STAGGER * 0.5;

  const rotateY = useTransform(flipProgress, [flipStart, flipEnd], [0, 180]);

  // Spring-smooth the rotation for cinematic feel
  const smoothRotateY = useSpring(rotateY, { stiffness: 55, damping: 18 });

  // Shadow depth amplifies during flip
  const shadowOpacity = useTransform(smoothRotateY, [0, 90, 180], [0.2, 0.7, 0.15]);

  return (
    <motion.div
      className="sc-flip-card"
      style={{ y: panelY }}
    >
      {/* 3D flip scene */}
      <motion.div
        className="sc-flip-scene"
        style={{ rotateY: smoothRotateY }}
      >
        {/* FRONT — triptych image slice */}
        <div
          className="sc-face sc-face--front"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: '300% 100%',
            backgroundPosition: `${index * 50}% center`,
          }}
        >
          {/* Overlay shimmer on front */}
          <div className="sc-front-overlay" />
          <div className="sc-front-tag">{service.tag}</div>
        </div>

        {/* BACK — service content */}
        <div className="sc-face sc-face--back">
          <div className="sc-back-tag">{service.tag}</div>
          <h3 className="sc-back-title">
            {service.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h3>
          <p className="sc-back-desc">{service.desc}</p>
          <ul className="sc-back-list">
            {service.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Dynamic drop-shadow beneath card during flip */}
      <motion.div
        className="sc-card-shadow"
        style={{ opacity: shadowOpacity }}
      />
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   SERVICES SECTION  (main component)
───────────────────────────────────────────── */
const Services = () => {
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  /* Total scroll height = 5 × 100vh gives comfortable cinematic pacing */
  const SCROLL_HEIGHT = isDesktop ? '550vh' : 'auto';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* ── Hero phase: full-width image fades in (0→0.18) ── */
  const heroOpacity  = useTransform(scrollYProgress, [0, 0.10, 0.22, 0.28], [0, 1, 1, 0]);
  const heroScale    = useTransform(scrollYProgress, [0, 0.10, 0.28], [1.06, 1.0, 0.96]);

  /* ── Text header: slides up and stays through the whole animation ── */
  const headerY      = useTransform(scrollYProgress, [0, 0.12], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  /* ── Cards row: appears during split phase (0.22→0.55) ── */
  const cardsOpacity = useTransform(scrollYProgress, [0.20, 0.28], [0, 1]);

  return (
    <section
      className="services-section"
      id="about"
      ref={containerRef}
      style={{ height: SCROLL_HEIGHT }}
    >
      <div className="services-sticky">

        {/* ── Header text (always pinned top) ── */}
        <motion.div
          className="services-header"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <span className="section-label">My Expertise</span>
          <h2 className="services-title">
            We craft brand identities, narratives, and digital experiences
            that keep up with your ambition.
          </h2>
          <p className="services-subtitle">
            So you can focus on building what matters, while we shape how the world sees it.
          </p>
        </motion.div>

        {/* ── PHASE 1: Hero panoramic banner ── */}
        {isDesktop && (
          <motion.div
            className="sc-hero-banner"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <img src={heroImg} alt="Services visual" className="sc-hero-img" />
            <div className="sc-hero-grain" />
          </motion.div>
        )}

        {/* ── PHASE 2 & 3: Split panels + Flip cards (desktop) ── */}
        {isDesktop && (
          <motion.div className="sc-cards-row" style={{ opacity: cardsOpacity }}>
            {services.map((service, i) => (
              <FlipCard
                key={i}
                index={i}
                service={service}
                splitProgress={scrollYProgress}
                flipProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        )}

        {/* ── MOBILE: simple stacked service cards ── */}
        {!isDesktop && (
          <div className="sc-mobile-stack">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="sc-mobile-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="sc-mobile-tag">{service.tag}</div>
                <h3 className="sc-mobile-title">
                  {service.title.replace('\n', ' ')}
                </h3>
                <p className="sc-mobile-desc">{service.desc}</p>
                <ul className="sc-back-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;
