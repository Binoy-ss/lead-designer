import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactFooter.css';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (!endpoint) {
        console.error("Form endpoint not configured in .env");
        setStatus('error');
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

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
          <h2 className="contact-title">Hire Me to Build What People Remember</h2>

          <div className="contact-details">
            <div className="detail-item">
              <span>Email:</span>
              <a href="mailto:binoy.pys@gmail.com" className="text-white">binoy.pys@gmail.com</a>
            </div>
            <div className="detail-item">
              <span>Call Today:</span>
              <a href="tel:+919400954703" className="text-white">+91 9400954703</a>
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required disabled={status === 'submitting'} />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required disabled={status === 'submitting'} />
            </div>
            <div className="form-group">
              <select name="service" value={formData.service} onChange={handleChange} disabled={status === 'submitting'}>
                <option value="" disabled>Service Needed ?</option>
                <option value="uiux">UI/UX Design</option>
                <option value="graphic">Graphic Design</option>
                <option value="web">Web Design</option>
                <option value="branding">Branding</option>
              </select>
            </div>
            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="What Can I Help You..." rows="4" required disabled={status === 'submitting'}></textarea>
            </div>
            
            {status === 'success' && <p className="form-success-msg" style={{ color: '#10b981', fontSize: '0.9rem', marginBottom: '1rem' }}>Message sent successfully! I'll get back to you soon.</p>}
            {status === 'error' && <p className="form-error-msg" style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '1rem' }}>Something went wrong. Please check your connection or email me directly.</p>}
            
            <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Submit Form'}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2026. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/binoyss/">LinkedIn</a>
          <a href="https://www.behance.net/binoypy">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
