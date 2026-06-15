import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CaseStudies.css';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const caseStudies = [
  {
    id: 1,
    title: 'Agricultural Drone Case Study',
    category: 'AgriTech · Product Design',
    description:
      'Designed end-to-end UX for an autonomous agricultural drone platform — from precision mapping to real-time crop analytics dashboards.',
    image: '/case-studies/cs-drone.png',
    slug: 'agricultural-drone',
    accent: '#4ade80',
  },
  {
    id: 2,
    title: 'Flight & Helicopter Services',
    category: 'Branding · Visual Identity',
    description:
      'A product-focused case study exploring how aviation maintenance services can be positioned to improve operational reliability, reduce downtime, and streamline maintenance workflows for private aircraft and helicopter operators.',
    image: '/case-studies/cs-helicopter.png',
    slug: 'helicopter-services',
    accent: '#f59e0b',
  },
  {
    id: 3,
    title: 'EV Charging App Case Study',
    category: 'Digital Product · UI/UX',
    description:
      'Redesigned the complete user journey for EV drivers, improving booking efficiency and charging station discovery across 3 countries.',
    image: '/case-studies/cs-ev-charging.png',
    slug: 'ev-charging-app',
    accent: '#22d3ee',
  },
  // {
  //   id: 4,
  //   title: 'New Medicine Company Branding',
  //   category: 'Branding · Healthcare',
  //   description:
  //     'Built a full pharmaceutical brand system from zero — visual identity, packaging language, and investor-ready brand guidelines.',
  //   image: '/case-studies/cs-medicine.png',
  //   slug: 'medicine-branding',
  //   accent: '#a78bfa',
  // },
  // {
  //   id: 5,
  //   title: 'MSC Ship Case Study',
  //   category: 'Corporate Identity · Maritime',
  //   description:
  //     'Delivered a strategic maritime brand overhaul for a global shipping company, including vessel livery, crew uniforms, and digital presence.',
  //   image: '/case-studies/cs-msc-ship.png',
  //   slug: 'msc-ship',
  //   accent: '#60a5fa',
  // },
  // {
  //   id: 6,
  //   title: 'Housekeeping Management App',
  //   category: 'SaaS · Product Design',
  //   description:
  //     'Designed an intuitive property management SaaS — streamlining task assignment, real-time tracking, and performance reporting for hospitality teams.',
  //   image: '/case-studies/cs-housekeeping.png',
  //   slug: 'housekeeping-management',
  //   accent: '#fb923c',
  // },
];

/* ─────────────────────────────────────────
   INDIVIDUAL CARD
───────────────────────────────────────── */
const CaseStudyCard = ({ study, index }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax — odd/even cards move in opposite directions
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [30, -30] : [0, -15]
  );

  // Navigate internally — no external link, no new tab
  const handleClick = () => {
    navigate('/case-study');
  };

  return (
    <motion.article
      ref={cardRef}
      className="cs-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ y: yParallax }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`View case study: ${study.title}`}
    >
      {/* Image wrapper */}
      <div className="cs-card__image-wrap">
        <motion.img
          src={study.image}
          alt={study.title}
          className="cs-card__image"
          loading="lazy"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Gradient overlay */}
        <div className="cs-card__overlay" />

        {/* Category badge — floats on image */}
        <div className="cs-card__badge" style={{ '--accent': study.accent }}>
          {study.category}
        </div>
      </div>

      {/* Text content */}
      <div className="cs-card__body">
        <h3 className="cs-card__title">{study.title}</h3>
        <p className="cs-card__desc">{study.description}</p>

        <div className="cs-card__cta">
          <span>View Case Study</span>
          <motion.span
            className="cs-card__arrow"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.25 }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Hover glow border */}
      <div className="cs-card__glow" style={{ '--accent': study.accent }} />
    </motion.article>
  );
};

/* ─────────────────────────────────────────
   SECTION
───────────────────────────────────────── */
const CaseStudies = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start center'],
  });

  const headerY = useTransform(sectionScroll, [0, 1], [40, 0]);
  const headerOpacity = useTransform(sectionScroll, [0, 0.6], [0, 1]);

  return (
    <section className="cs-section" id="case-studies" ref={sectionRef}>
      {/* Ambient background blobs */}
      <div className="cs-bg-blob cs-bg-blob--1" aria-hidden="true" />
      <div className="cs-bg-blob cs-bg-blob--2" aria-hidden="true" />

      <div className="cs-container">
        {/* ── Header ── */}
        <motion.div
          className="cs-header"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <div className="section-label">Case Studies</div>

          <h2 className="cs-title">
            Selected Case Studies
            <br />
            <span className="cs-title--muted">{'&'} Success Stories</span>
          </h2>

          <p className="cs-subtitle">
            A collection of strategic design, branding, digital product, and
            business transformation projects that delivered measurable impact.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="cs-grid">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
