import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import SkillsTools from './components/SkillsTools';
import Timeline from './components/Timeline';
import CaseStudies from './components/CaseStudies';
import MouseHalo from './components/MouseHalo';
import Footer from './components/Footer';
import ArtwoCaseStudy from './pages/ArtwoCaseStudy';
import UniqloCaseStudy from './pages/UniqloCaseStudy';
import AudibleCaseStudy from './pages/AudibleCaseStudy';
import ScrollToTop from './components/ScrollToTop';

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <Bio />
      </ScrollReveal>
      <ScrollReveal>
        <Timeline />
      </ScrollReveal>
      <ScrollReveal>
        <CaseStudies />
      </ScrollReveal>
      <ScrollReveal>
        <SkillsTools />
      </ScrollReveal>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full min-h-screen bg-gray-50">
        <MouseHalo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/1" element={<ArtwoCaseStudy />} />
          <Route path="/case-study/2" element={<UniqloCaseStudy />} />
          <Route path="/case-study/3" element={<AudibleCaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;