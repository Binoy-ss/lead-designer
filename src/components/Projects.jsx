import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Summer Vibes Festival Campaign",
    category: "Graphic Design",
    description: "Created promotional materials for the 'Summer Vibes Festival', including posters, flyers, and social media graphics.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
  },
  {
    title: "Coral Spiral Abstract",
    category: "Branding",
    description: "A visually striking 3D abstract artwork featuring a coral-colored spiral form with smooth, flowing curves.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
  },
  {
    title: "ShopEase Redesign Sprint",
    category: "UI / UX Design",
    description: "Redesigned the 'ShopEase' e-commerce app to enhance user experience. Focused on simplifying navigation and checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Black Geometric Prisms",
    category: "Branding",
    description: "A collection of sharp, angular black prisms floating against a gradient dark background, showcasing geometric composition.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80"
  }
];

const Projects = () => {
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
          {projects.map((proj, idx) => (
            <motion.div 
              className="project-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
            >
              <div className="project-image-wrapper">
                <img src={proj.image} alt={proj.title} className="project-image" />
              </div>
              <div className="project-info">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-name">{proj.title}</h3>
                <p className="project-detail">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
