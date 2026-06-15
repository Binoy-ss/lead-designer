import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CaseStudyPlaceholder.css';

/* ─────────────────────────────────────────
   FLOATING CARD — decorative glassmorphism cards
───────────────────────────────────────── */
const FloatingCard = ({ style, delay, accent, label }) => (
  <motion.div
    className="csp-floating-card"
    style={{ ...style, '--accent': accent }}
    initial={{ opacity: 0, y: 30, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="csp-floating-card__bar" />
    <div className="csp-floating-card__lines">
      <div className="csp-floating-card__line csp-floating-card__line--long" />
      <div className="csp-floating-card__line csp-floating-card__line--short" />
    </div>
    <div className="csp-floating-card__badge">{label}</div>
  </motion.div>
);

/* ─────────────────────────────────────────
   UPLOAD PROGRESS VISUAL
───────────────────────────────────────── */
const UploadProgress = () => (
  <div className="csp-upload">
    <div className="csp-upload__track">
      <motion.div
        className="csp-upload__fill"
        initial={{ width: '0%' }}
        animate={{ width: '72%' }}
        transition={{ duration: 2.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>

  </div>
);

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
const CaseStudyPlaceholder = () => {
  const navigate = useNavigate();

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="csp-page">
      {/* ── Ambient blobs ── */}
      <div className="csp-blob csp-blob--1" aria-hidden="true" />
      <div className="csp-blob csp-blob--2" aria-hidden="true" />
      <div className="csp-blob csp-blob--3" aria-hidden="true" />

      {/* ── Decorative floating cards ── */}
      <FloatingCard
        accent="#4ade80"
        label="AgriTech"
        delay={0.3}
        style={{ top: '14%', left: '6%' }}
      />
      <FloatingCard
        accent="#f59e0b"
        label="Aviation"
        delay={0.5}
        style={{ top: '22%', right: '8%' }}
      />
      <FloatingCard
        accent="#22d3ee"
        label="EV / Digital"
        delay={0.7}
        style={{ bottom: '20%', left: '10%' }}
      />

      {/* ── Main glass container ── */}
      <motion.div
        className="csp-container"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Label */}
        <motion.div
          className="csp-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          CASE STUDIES
        </motion.div>

        {/* Icon */}
        <motion.div
          className="csp-icon-wrap"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            className="csp-icon"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="8" y="12" width="48" height="40" rx="6" stroke="currentColor" strokeWidth="2.5" />
            <path d="M24 32l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 12V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M24 4h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="csp-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Case Study
          <br />
          <span className="csp-heading--accent">Uploading Soon</span>
        </motion.h1>

        {/* Back button */}
        <motion.button
          className="csp-back-btn"
          onClick={() => navigate('/')}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Back to Portfolio"
        >
          <span className="csp-back-btn__arrow">←</span>
          Back to Portfolio
        </motion.button>

        {/* Secondary note */}
        <motion.p
          className="csp-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          New case studies are being added regularly.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CaseStudyPlaceholder;
