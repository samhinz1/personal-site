import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import SkillsTools from './components/SkillsTools';
import Bookshelf from './components/Bookshelf';
import Timeline from './components/Timeline';
import Education from './components/Education';
import CaseStudies from './components/CaseStudies';
import MouseHalo from './components/MouseHalo';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MouseHalo />
      <Header />
      <Hero />
      <Bio />
      <Timeline />
      <CaseStudies />
      <SkillsTools />
    </div>
  );
}

export default App;