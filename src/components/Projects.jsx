import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.mp4';

const projects = [
  {
    title: "Expo Campaign",
    category: "Design & Strategies",
    description: "Created promotional materials for the 'National Expo', including posters, flyers, and social media graphics.",
    image: p1,
    link: "https://www.behance.net/gallery/248507411/Expo-Campaign-planning-creation-and-execution "
  },
  {
    title: "Website Creation ",
    category: "Web Design & Development",
    description: "I create websites that help a builder to showcase their work and build a strong online presence for their customers",
    image: p2,
    link: "https://www.sapphireebd.com/"
  },
  {
    title: "JewelMuse Redesign Sprint",
    category: "UI / UX Design",
    description: "Redesigned the 'jewelmuse' website to enhance user experience. Focused on simplifying navigation and checkout.",
    image: p3,
    link: "https://jewelmuse.in/"
  },
  {
    title: "Intractive Presentation",
    category: "Powerpoint presentation",
    description: "A collection of sharp, angular black prisms floating against a gradient dark background, showcasing geometric composition.",
    image: p4,
    link: "https://www.behance.net/gallery/242867687/Powerpoint-presentation"
  },
  {
    title: "AI Product Poster Design",
    category: "Ai Design",
    description: "A collection of modern product posters with bold typography and vibrant gradients, showcasing clean product-focused layouts.",
    image: p5,
    link: "https://www.behance.net/gallery/248594849/Ai-Product-poster-design-2026-"
  },
  {
    title: "Scroll Animation Website",
    category: "Vibe Coding",
    description: "An Website that i created as a part for my learning of scroll animation and vibe coding, it is a simple website with scroll animation and vibe coding.",
    video: p6,
    link: "https://johnsonpigfarm.vercel.app/"
  }



];

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Selected Works</div>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-desc">
            These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((proj, idx) => {
            const CardWrapper = proj.link ? motion.a : motion.div;
            return (
              <CardWrapper
                className="project-card"
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
                href={proj.link}
                target={proj.link ? "_blank" : undefined}
                rel={proj.link ? "noopener noreferrer" : undefined}
                style={proj.link ? { textDecoration: 'none', color: 'inherit' } : undefined}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="project-image-wrapper">
                  {proj.video ? (
                    <video src={proj.video} alt={proj.title} className="project-image" autoPlay muted loop />
                  ) : (
                    <img src={proj.image} alt={proj.title} className="project-image" />
                  )}
                </div>
                <div className="project-info">
                  <span className="project-category">{proj.category}</span>
                  <h3 className="project-name">{proj.title}</h3>
                  <p className="project-detail">{proj.description}</p>
                </div>

                {hoveredIdx === idx && (
                  <div
                    className="project-tooltip"
                    style={{
                      left: `${cursorPos.x}px`,
                      top: `${cursorPos.y}px`,
                    }}
                  >
                    Click to View
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
