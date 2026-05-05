import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BlogInsights from './components/BlogInsights';
import ContactFooter from './components/ContactFooter';

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
      <Testimonials />
      <FAQ />
      <BlogInsights />
      <ContactFooter />
    </>
  );
}

export default App;
