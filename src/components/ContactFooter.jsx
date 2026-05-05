import React from 'react';
import { motion } from 'framer-motion';
import './ContactFooter.css';

const ContactFooter = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Say Hello</div>
          <h2 className="contact-title">Let’s build something impactful together.</h2>
          
          <div className="contact-details">
            <div className="detail-item">
              <span>Email:</span>
              <a href="mailto:designer@example.com">designer@example.com</a>
            </div>
            <div className="detail-item">
              <span>Call Today:</span>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <select defaultValue="">
                <option value="" disabled>Service Needed ?</option>
                <option value="uiux">UI/UX Design</option>
                <option value="graphic">Graphic Design</option>
                <option value="web">Web Design</option>
                <option value="branding">Branding</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="What Can I Help You..." rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Form</button>
          </form>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
