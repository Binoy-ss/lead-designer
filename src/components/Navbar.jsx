import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="navbar-container">
        <a href="#" className="nav-logo">Portavia</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
        </div>
        <a href="#contact" className="nav-contact-btn">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
