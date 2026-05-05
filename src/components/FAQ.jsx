import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer a range of digital design services including UI/UX design, Graphic design, Web design, and Branding strategy."
  },
  {
    q: "How does the design process work?",
    a: "My process involves discovery, wireframing, high-fidelity design, feedback loops, and final delivery. I ensure close collaboration at every step."
  },
  {
    q: "How long does a project usually take?",
    a: "Timelines vary depending on the scope of the project. A standard web design project takes between 2 to 4 weeks."
  },
  {
    q: "What do I need to provide before starting a project?",
    a: "You will need to provide your project goals, any existing brand guidelines, target audience information, and content."
  },
  {
    q: "Do you offer revisions?",
    a: "Yes, standard projects include up to 2 rounds of revisions to ensure you are completely satisfied with the result."
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via the contact form below or send me an email, and we can schedule a quick discovery call."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">FAQ</div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-desc">
            Here are answers to some of the most common questions I receive as a freelance designer. If you don’t see your question here, feel free to reach out!
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <motion.div 
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(idx)}
              >
                <h3><span className="faq-num">{idx + 1}.</span> {faq.q}</h3>
                <span className="faq-icon">{openIndex === idx ? '−' : '+'}</span>
              </div>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    className="faq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
