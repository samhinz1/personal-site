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
    "a Hat Wearer",
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
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-rich-black">
            Howdy 👋, I'm <span className="text-tomato">Sam!</span>
          </h1>
          <div className="h-20 flex justify-center items-center">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md w-[500px]">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
              <p className="text-xl md:text-2xl text-rich-black whitespace-nowrap">
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

          <div className="flex justify-center space-x-4 mt-12">
            <a href="#projects" 
               className="bg-tomato text-dutch-white px-8 py-3 rounded-lg hover:bg-rich-black hover:text-tomato transition-colors font-semibold">
              View My Work
            </a>
            <a href="#contact"
               className="border-2 border-rich-black text-rich-black px-8 py-3 rounded-lg hover:bg-rich-black hover:text-dutch-white transition-colors font-semibold">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Fixed social media icons in bottom right */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
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