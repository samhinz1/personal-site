import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  const titles = [
    "an Aspiring Product Manager",
    "a Tech Enthusiast",
    "a Problem Solver",
    "a Tinkerer"

  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dutch-white relative">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-rich-black">
            G'day 👋, I'm <span className="text-tomato">Sam!</span>
          </h1>
          <div className="h-auto sm:h-20 flex justify-center items-center">
            <div className="flex items-center bg-white rounded-full px-4 sm:px-6 py-3 shadow-md w-full max-w-[500px] overflow-hidden">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3 flex-shrink-0" />
              <p className="text-base sm:text-xl md:text-2xl text-rich-black overflow-hidden">
                I'm&nbsp;
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitleIndex}
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-tomato font-semibold inline-block"
                  >
                    {titles[currentTitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
            <a href="#projects" 
               className="bg-tomato text-dutch-white px-8 py-3 rounded-lg font-semibold
               shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122]
               active:shadow-[0_0px_0_0_#c73122]
               transition-all hover:translate-y-[3px] active:translate-y-[6px]">
              View My Work
            </a>
            <a href="#contact"
               className="bg-dutch-white border-2 border-rich-black text-rich-black px-8 py-3 rounded-lg font-semibold
               shadow-[0_6px_0_0_#2d2d2a] hover:shadow-[0_3px_0_0_#2d2d2a]
               active:shadow-[0_0px_0_0_#2d2d2a]
               transition-all hover:translate-y-[3px] active:translate-y-[6px]">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Fixed social media icons in bottom right */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-[55]">
        <a href="https://www.linkedin.com/in/samhinz/" target="_blank" rel="noopener noreferrer"
           className="text-rich-black hover:text-tomato transition-colors">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:samhinz@live.com"
           className="text-rich-black hover:text-tomato transition-colors">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>

      {/* Bouncing down chevron */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-rich-black cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faChevronDown} size="2x" />
      </motion.div>
    </section>
  );
};

export default Hero;