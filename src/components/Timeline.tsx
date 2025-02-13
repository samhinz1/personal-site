import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const timelineEvents = [
  {
    date: "2015 - 2017",
    title: "Student",
    company: "RMIT, Melbourne, Australia",
    description: "Bachelors of Business (Economics & Finance), Graduated with First Class Honours",
    icon: faGraduationCap
  },
  {
    date: "2017 - 2018",
    title: "Analyst",
    company: "Peak Asset Management",
    description: "Analysed various companies across both Australia & US",
    icon: faBriefcase
  },
  {
    date: "2018 - 2022",
    title: "General Manager",
    company: "Suubee",
    description: "First employee after the founder, responsible for all day-to-day operations",
    icon: faBriefcase
  },
  {
    date: "2022 - 2025",
    title: "Portfolio Manager",
    company: "Waimak Asset Management",
    description: "A subsidiary of Suubee, responsible for onboarding clients, analysing investment opportunities, order execution and risk management",
    icon: faBriefcase
  },
  {
    date: "2024",
    title: "Student",
    company: "100 days of Python",
    description: "Took a basic introductory course hosted by Angela Yu that included 60+ hours of tutorials and code-along examples",
    icon: faGraduationCap
  },
  {
    date: "2025",
    title: "Student",
    company: "Web Development Bootcamp",
    description: "Took an introductory course hosted by Colt Steele that introduced the basics of web development including HTML, CSS, JS, databases & deployment",
    icon: faGraduationCap
  },
  {
    date: "2025",
    title: "Student",
    company: "Become a Product Manager",
    description: "Introductory course hosted by Cole Mercer that introduced basics of Product management",
    icon: faGraduationCap
  }
];

const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const years = Array.from({ length: 11 }, (_, i) => 2015 + i);

  return (
    <section id="timeline" className="py-12 md:py-24 bg-dutch-white/40">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-16 text-rich-black text-center md:text-right">
            Career <span className="text-tomato">Journey</span>
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Fixed Year Intervals */}
            <div className="flex justify-between items-start mb-4 px-4">
              {years.map((year) => (
                <div key={year} className="text-base text-rich-black font-medium -ml-3">
                  {year}
                </div>
              ))}
            </div>

            {/* Horizontal Line */}
            <div className="absolute top-8 left-0 w-full h-1 bg-tomato" />
            
            <div className="flex justify-between items-start">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative group w-40"
                  animate={{
                    x: activeIndex === null
                      ? 0
                      : activeIndex === index
                        ? 0
                        : activeIndex < index
                          ? 50
                          : -50
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  <div className="flex flex-col items-center h-[250px]">
                    <div className="relative z-10">
                      <div className="w-16 h-16 group-hover:w-64 group-hover:h-[300px] rounded-full group-hover:rounded-lg 
                                    bg-tomato shadow-lg transition-[width,height] duration-300 ease-in-out
                                    relative overflow-hidden hover:shadow-xl">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="opacity-100 group-hover:opacity-0 [transition:none] group-hover:transition-opacity group-hover:duration-200">
                            <FontAwesomeIcon icon={event.icon} className="text-dutch-white text-2xl" />
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 [transition:none] group-hover:transition-opacity group-hover:duration-200
                                      p-6">
                          <div className="text-dutch-white">
                            <div className="font-medium text-base mb-2">{event.date}</div>
                            <div className="font-semibold text-lg mb-1">{event.title}</div>
                            <div className="text-base text-dutch-white/90">{event.company}</div>
                            <div className="text-sm mt-3 text-dutch-white/80 leading-relaxed">{event.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              <div className="absolute left-4 h-full w-0.5 bg-tomato"></div>
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8 ml-4 pl-8 relative"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-4 h-4 bg-tomato rounded-full -translate-x-[0.6875rem]"></div>
                  
                  <div className={`bg-tomato rounded-lg p-4 shadow-lg transition-all duration-300 ${
                    activeIndex === index ? 'scale-100' : 'scale-95'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <FontAwesomeIcon icon={event.icon} className="text-dutch-white text-xl" />
                      <span className="text-dutch-white font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-dutch-white font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-dutch-white/90 text-base mb-2">{event.company}</p>
                    <p className="text-dutch-white/80 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;