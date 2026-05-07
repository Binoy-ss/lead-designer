import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';

import BlogInsights from './components/BlogInsights';
import ContactFooter from './components/ContactFooter';
import FloatingResumeButton from './components/FloatingResumeButton';

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <Services />
      <Stats />
      <Projects />

      <BlogInsights />
      <ContactFooter />
      <FloatingResumeButton />
    </>
  );
}

export default App;
