import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import AIWorkflow from './components/AIWorkflow';
import BlogInsights from './components/BlogInsights';
import ContactFooter from './components/ContactFooter';
import FloatingResumeButton from './components/FloatingResumeButton';
import CaseStudyPlaceholder from './components/CaseStudyPlaceholder';

/* ── Main portfolio page ── */
function Portfolio() {
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <Services />
      <Stats />
      <CaseStudies />
      <Projects />
      <AIWorkflow />
      <BlogInsights />
      <ContactFooter />
      <FloatingResumeButton />
    </>
  );
}

/* ── Root with router ── */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case-study" element={<CaseStudyPlaceholder />} />
        <Route path="/case-studies" element={<CaseStudyPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
