import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronDown, faArrowRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ContactModal from './ContactModal';
import dicelogo from '../static/dicelogo.webp';
import vintedLogo from '../static/vinted.png';
import autotraderLogo from '../static/Autotrader.png';
import { Link } from 'react-router-dom';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const caseStudies = [
  {
    title: "Dice: Fixing the Ticketing Experience",
    summary:
      "Product deep-dive into how Dice can own the full fan journey and win the live events war.",
    tags: ["Product Strategy", "JTBD", "Feature Ideation"],
    imageUrl: dicelogo,
    externalUrl: "https://dice-the-ticket-app-tryi-ji7cajv.gamma.site/",
  },
  {
    title: "Vinted: Second-Hand Fashion Flywheel",
    summary:
      "How Vinted became Europe’s second-hand fashion powerhouse by eliminating seller friction and building a movement.",
    tags: ["Marketplace Strategy", "JTBD", "Growth Loops"],
    imageUrl: vintedLogo,
    externalUrl: "https://how-vinted-became-europe-qli8r25.gamma.site/",
  },
  {
    title: "Autotrader: The Car Marketplace That Owns UK Motors",
    summary:
      "How Autotrader can move from search marketplace to market maker by owning the full car-buying journey end-to-end.",
    tags: ["Marketplace Strategy", "JTBD", "Product Opportunity"],
    imageUrl: autotraderLogo,
    externalUrl: "https://autotrader-the-car-marke-9zj82eh.gamma.site/",
  },
];

const Hero: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);
  const titles = [
    "a Product Manager",
    "a Tech Enthusiast",
    "a Cryptic Crossword Lover",
    "a Tinkerer",
    "an AFL Football Fanatic",
    "a Sci-fi & Fantasy tragic",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const nextIndex = (currentStudyIndex + newDirection + caseStudies.length) % caseStudies.length;
    setCurrentStudyIndex(nextIndex);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    })
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = wrap(0, caseStudies.length, page);

  const swipeToSlide = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setCurrentStudyIndex((currentStudyIndex + newDirection + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="home" className="h-[100dvh] flex flex-col bg-dutch-white relative">
      <div className="flex-1 container mx-auto px-4 sm:px-6 flex items-center pt-24 sm:pt-0 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-rich-black">
            G'day <span className="inline-block animate-wave origin-[75%_75%]">👋</span>, I'm <span className="text-tomato">Sam!</span>
          </h1>
          <div className="h-auto sm:h-20 flex justify-center items-center mb-8">
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

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-12">
            <button
               onClick={() => setShowCaseStudies(!showCaseStudies)}
               className="bg-tomato text-dutch-white px-8 py-3 rounded-lg font-semibold
               shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122]
               active:shadow-[0_0px_0_0_#c73122]
               transition-all hover:translate-y-[3px] active:translate-y-[6px]
               flex items-center justify-center gap-2 w-full sm:w-auto">
              View My Work
              <FontAwesomeIcon 
                icon={showCaseStudies ? faChevronUp : faChevronDown} 
                className="transition-transform duration-300"
              />
            </button>
            <button
               onClick={() => setIsContactModalOpen(true)}
               className="bg-dutch-white border-2 border-rich-black text-rich-black px-8 py-3 rounded-lg font-semibold
               shadow-[0_6px_0_0_#2d2d2a] hover:shadow-[0_3px_0_0_#2d2d2a]
               active:shadow-[0_0px_0_0_#2d2d2a]
               transition-all hover:translate-y-[3px] active:translate-y-[6px]">
              Contact Me
            </button>
          </div>

          {/* Case Studies Section */}
          <AnimatePresence>
            {showCaseStudies && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-visible mt-8 mb-4 max-h-[60vh] sm:max-h-none"
              >
                {isMobile ? (
                  // Mobile carousel view
                  <div className="max-w-sm mx-auto relative">
                    <div className="relative">
                      <div className="overflow-visible relative h-[350px]">
                        <AnimatePresence
                          initial={false}
                          custom={direction}
                          mode="popLayout"
                        >
                          <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              x: { type: "spring", stiffness: 200, damping: 25 },
                              opacity: { duration: 0.2 },
                              scale: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.8}
                            onDragEnd={(e, { offset, velocity }) => {
                              const swipe = swipePower(offset.x, velocity.x);

                              if (swipe < -swipeConfidenceThreshold) {
                                swipeToSlide(1);
                              } else if (swipe > swipeConfidenceThreshold) {
                                swipeToSlide(-1);
                              }
                            }}
                            className="absolute w-full left-0 right-0"
                            style={{ touchAction: "pan-y" }}
                          >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-grab active:cursor-grabbing transform-gpu group">
                              {caseStudies[slideIndex].externalUrl ? (
                                <a
                                  href={caseStudies[slideIndex].externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block overflow-hidden rounded-lg"
                                >
                                <div className="relative h-24 overflow-hidden bg-white flex items-center justify-center">
                                  <img
                                    src={caseStudies[slideIndex].imageUrl}
                                    alt={caseStudies[slideIndex].title}
                                    className={`w-full h-full object-contain select-none transition-transform duration-300 ${
                                      caseStudies[slideIndex].imageUrl === dicelogo
                                        ? 'p-0 scale-150'
                                        : 'p-4 transform group-hover:scale-105'
                                    }`}
                                    draggable="false"
                                  />
                                </div>
                                <div className="p-4 select-none">
                                  <h3 className="text-lg font-bold mb-2 text-rich-black">
                                    {caseStudies[slideIndex].title}
                                  </h3>
                                  <p className="text-sm text-gray-600 mb-3">
                                    {caseStudies[slideIndex].summary}
                                  </p>
                                  <div className="flex flex-wrap justify-center gap-1 mb-2">
                                    {caseStudies[slideIndex].tags.map((tag, tagIndex) => (
                                      <span
                                        key={tagIndex}
                                        className="px-1.5 py-0.5 bg-tomato/10 text-tomato rounded-full text-[10px] font-medium whitespace-nowrap"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <motion.div whileHover={{ x: 5 }}>
                                    <span
                                      className="inline-flex items-center text-sm text-tomato hover:text-rich-black transition-colors font-semibold"
                                    >
                                      Read More
                                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                    </span>
                                  </motion.div>
                                </div>
                              </a>
                              ) : (
                                <Link
                                  to={`/case-study/${slideIndex + 1}`}
                                  className="block overflow-hidden rounded-lg"
                                >
                                  <div className="relative h-24 overflow-hidden bg-white flex items-center justify-center">
                                    <img
                                      src={caseStudies[slideIndex].imageUrl}
                                      alt={caseStudies[slideIndex].title}
                                      className={`w-full h-full object-contain select-none transition-transform duration-300 ${
                                        caseStudies[slideIndex].imageUrl === dicelogo
                                          ? 'p-0 scale-150'
                                          : 'p-4 transform group-hover:scale-105'
                                      }`}
                                      draggable="false"
                                    />
                                  </div>
                                  <div className="p-4 select-none">
                                    <h3 className="text-lg font-bold mb-2 text-rich-black">
                                      {caseStudies[slideIndex].title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                      {caseStudies[slideIndex].summary}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-1 mb-2">
                                      {caseStudies[slideIndex].tags.map((tag, tagIndex) => (
                                        <span
                                          key={tagIndex}
                                          className="px-1.5 py-0.5 bg-tomato/10 text-tomato rounded-full text-[10px] font-medium whitespace-nowrap"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <motion.div whileHover={{ x: 5 }}>
                                      <span
                                        className="inline-flex items-center text-sm text-tomato hover:text-rich-black transition-colors font-semibold"
                                      >
                                        Read More
                                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                      </span>
                                    </motion.div>
                                  </div>
                                </Link>
                              )}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      {/* Navigation arrows */}
                      <button
                        className="absolute left-0 top-[175px] -translate-x-12 text-rich-black opacity-50 hover:opacity-100 transition-opacity"
                        onClick={() => swipeToSlide(-1)}
                        aria-label="Previous case study"
                      >
                        <FontAwesomeIcon icon={faChevronDown} rotation={90} size="lg" />
                      </button>
                      <button
                        className="absolute right-0 top-[175px] translate-x-12 text-rich-black opacity-50 hover:opacity-100 transition-opacity"
                        onClick={() => swipeToSlide(1)}
                        aria-label="Next case study"
                      >
                        <FontAwesomeIcon icon={faChevronDown} rotation={270} size="lg" />
                      </button>
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      {caseStudies.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const direction = index > slideIndex ? 1 : -1;
                            setPage([index, direction]);
                            setCurrentStudyIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === slideIndex ? 'bg-tomato w-4' : 'bg-gray-300'
                          }`}
                          aria-label={`Go to case study ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  // Desktop grid view
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-1.5">
                    {caseStudies.map((study, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                      >
                        {study.externalUrl ? (
                          <a
                            href={study.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-lg"
                          >
                          <div className="relative h-24 overflow-hidden bg-white flex items-center justify-center">
                            <img
                              src={study.imageUrl}
                              alt={study.title}
                              className={`w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 ${
                                study.imageUrl === dicelogo ? 'p-1' : 'p-4'
                              }`}
                            />
                          </div>
                          <div className="p-3">
                            <h3 className="text-base font-bold mb-1 text-rich-black">{study.title}</h3>
                            <p className="text-xs text-gray-600 mb-2">{study.summary}</p>
                            <div className="flex flex-wrap justify-center gap-1 mb-2">
                              {study.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-1.5 py-0.5 bg-tomato/10 text-tomato rounded-full text-[10px] font-medium whitespace-nowrap"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <motion.div whileHover={{ x: 5 }}>
                              <span
                                className="inline-flex items-center text-xs text-tomato hover:text-rich-black transition-colors font-semibold"
                              >
                                Read More
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                              </span>
                            </motion.div>
                          </div>
                        </a>
                        ) : (
                          <Link
                            to={`/case-study/${index + 1}`}
                            className="block overflow-hidden rounded-lg"
                          >
                            <div className="relative h-24 overflow-hidden bg-white flex items-center justify-center">
                              <img
                                src={study.imageUrl}
                                alt={study.title}
                                className={`w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 ${
                                  study.imageUrl === dicelogo ? 'p-1' : 'p-4'
                                }`}
                              />
                            </div>
                            <div className="p-3">
                              <h3 className="text-base font-bold mb-1 text-rich-black">{study.title}</h3>
                              <p className="text-xs text-gray-600 mb-2">{study.summary}</p>
                              <div className="flex flex-wrap justify-center gap-1 mb-2">
                                {study.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-1.5 py-0.5 bg-tomato/10 text-tomato rounded-full text-[10px] font-medium whitespace-nowrap"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <motion.div whileHover={{ x: 5 }}>
                                <span
                                  className="inline-flex items-center text-xs text-tomato hover:text-rich-black transition-colors font-semibold"
                                >
                                  Read More
                                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                </span>
                              </motion.div>
                            </div>
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
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

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default Hero;