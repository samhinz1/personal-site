import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import SkillsTools from './components/SkillsTools';
import Timeline from './components/Timeline';
import CaseStudies from './components/CaseStudies';
import MouseHalo from './components/MouseHalo';
import Footer from './components/Footer';

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

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <MouseHalo />
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
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;