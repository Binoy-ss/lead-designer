import React from 'react';
import { motion } from 'framer-motion';
import './AIWorkflow.css';

// Add a `logo` property where a JPG is available in src/assets/Logos
const aiTools = [
  { name: 'Claude', initials: 'C', accent: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', logo: 'claude.jpg' },
  { name: 'ChatGPT', initials: 'G', accent: 'linear-gradient(135deg, #10b981, #059669)', logo: 'chatgpt.jpg' },
  { name: 'Antigravity', initials: 'A', accent: 'linear-gradient(135deg, #2563eb, #60a5fa)', logo: 'Antigravity.jpg' },
  { name: 'Magnific', initials: 'F', accent: 'linear-gradient(135deg, #0ea5e9, #22d3ee)', logo: 'magnific.jpg' },
  { name: 'Adobe Firefly', initials: 'F', accent: 'linear-gradient(135deg, #f97316, #fb923c)', logo: 'adobe firefly.jpg' },
  { name: 'ElevenLabs', initials: 'E', accent: 'linear-gradient(135deg, #a855f7, #c084fc)', logo: '11 labs.jpg' },
  { name: 'Lovable', initials: 'L', accent: 'linear-gradient(135deg, #ec4899, #f472b6)', logo: 'lovable .jpg' },
  { name: 'Tripo3D.ai', initials: 'T', accent: 'linear-gradient(135deg, #14b8a6, #2dd4bf)', logo: 'Tripo 3d.jpg' },
  // Krea.ai and Stitch do not have JPGs in the Logos folder; leave `logo` undefined to use fallback
  { name: 'Krea.ai', initials: 'K', accent: 'linear-gradient(135deg, #4338ca, #7c3aed)' },
  { name: 'Stitch', initials: 'S', accent: 'linear-gradient(135deg, #0f172a, #475569)' }
];

// Statically import JPG logos to avoid runtime HMR preamble issues
import claudeLogo from '../assets/Logos/claude.jpg';
import chatgptLogo from '../assets/Logos/chatgpt.jpg';
import antigravityLogo from '../assets/Logos/Antigravity.jpg';
import magnificLogo from '../assets/Logos/magnific.jpg';
import adobeFireflyLogo from '../assets/Logos/adobe firefly.jpg';
import elevenLabsLogo from '../assets/Logos/11 labs.jpg';
import lovableLogo from '../assets/Logos/lovable .jpg';
import tripo3dLogo from '../assets/Logos/Tripo 3d.jpg';

const logoMap = {
  ['claude.jpg']: claudeLogo,
  ['chatgpt.jpg']: chatgptLogo,
  ['antigravity.jpg']: antigravityLogo,
  ['magnific.jpg']: magnificLogo,
  ['adobe firefly.jpg']: adobeFireflyLogo,
  ['11 labs.jpg']: elevenLabsLogo,
  ['lovable .jpg']: lovableLogo,
  ['Tripo 3d.jpg']: tripo3dLogo
};

const AIWorkflow = () => {
  const marqueeItems = [...aiTools, ...aiTools];


  return (
    <section className="ai-workflow-section" id="ai-workflow">
      <div className="ai-workflow-container">
        <motion.div
          className="ai-workflow-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">AI WORKFLOW</div>
          <h2 className="ai-workflow-title">AI Tools Powering My Creative Workflow</h2>
          <p className="ai-workflow-desc">
            I leverage industry-leading AI tools across design, content creation, prototyping, 3D generation, automation, and creative production to deliver faster, smarter, and more scalable solutions.
          </p>
        </motion.div>

        <div className="ai-marquee-wrapper">
          <div className="ai-marquee" aria-label="AI tool logos marquee">
            <div className="ai-marquee-track">
              {marqueeItems.map((tool, idx) => (
                <div className="ai-marquee-item" key={`${tool.name}-${idx}`}>
                  <div className="ai-marquee-logo" style={ tool.logo ? {} : { background: tool.accent }}>
                    {tool.logo && logoMap[tool.logo.toLowerCase()] ? (
                      <img
                        src={logoMap[tool.logo.toLowerCase()]}
                        alt={`${tool.name} logo`}
                        className="ai-marquee-logo-img"
                        loading="lazy"
                      />
                    ) : (
                      tool.initials
                    )}
                  </div>
                  <span className="ai-marquee-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflow;
