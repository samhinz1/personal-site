import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import SkillsTools from './components/SkillsTools';
import Timeline from './components/Timeline';
import CaseStudies from './components/CaseStudies';
import MouseHalo from './components/MouseHalo';
import Footer from './components/Footer';
import CaseStudyPage from './pages/CaseStudyPage';

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
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen bg-gray-50">
        <MouseHalo />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;