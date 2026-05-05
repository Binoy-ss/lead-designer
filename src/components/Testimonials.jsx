import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    text: "Binoy truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
    name: "John Harris",
    role: "Marketing Director"
  },
  {
    text: "He took the time to understand our goals and delivered a design that resonated perfectly with our audience.",
    name: "Michael Lee",
    role: "Product Manager"
  },
  {
    text: "His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.",
    name: "Sarah Johnson",
    role: "CEO"
  },
  {
    text: "As a small business owner, I appreciated how stress-free Binoy made the process.",
    name: "Laura Bennett",
    role: "Small Business Owner"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Client Reviews</div>
          <h2 className="testimonials-title">What They Say</h2>
          <p className="testimonials-desc">
            Here’s what my clients have shared about their experiences working with me. Their trust and satisfaction motivate me to continue delivering designs that make an impact.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <motion.div 
              className="testimonial-card"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{test.text}</p>
              <div className="testimonial-author">
                <h4>{test.name}</h4>
                <span>{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
