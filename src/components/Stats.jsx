import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div
          className="stats-bio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Binoy —  6 Years Designing Creatives That Drives Clicks,
          Engagement, and Brand Growth.
        </motion.div>

        <div className="stats-grid">
          <motion.div
            className="stat-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>6+</h3>
            <p>Years of Experience</p>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>50+</h3>
            <p>Completed Projects</p>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>20+</h3>
            <p>Clients Worldwide</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
