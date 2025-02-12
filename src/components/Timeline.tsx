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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const years = Array.from({ length: 11 }, (_, i) => 2015 + i);

  return (
    <section id="timeline" className="py-16 bg-dutch-white/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-12 text-rich-black text-right">
            Career <span className="text-tomato">Journey</span>
          </h2>
          <div className="relative">
            {/* Fixed Year Intervals */}
            <div className="flex justify-between items-start mb-2 px-4">
              {years.map((year) => (
                <div key={year} className="text-sm text-rich-black font-medium -ml-3">
                  {year}
                </div>
              ))}
            </div>

            {/* Horizontal Line */}
            <div className="absolute top-6 left-0 w-full h-0.5 bg-tomato" />
            
            <div className="flex justify-between items-start">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative group w-32"
                  animate={{
                    x: hoveredIndex === null
                      ? 0
                      : hoveredIndex === index
                        ? 0
                        : hoveredIndex < index
                          ? 40
                          : -40
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col items-center h-[200px]">
                    {/* Combined Icon and Expandable Content */}
                    <div className="relative z-10">
                      <div className="w-12 h-12 group-hover:w-48 group-hover:h-[250px] rounded-full group-hover:rounded-lg 
                                    bg-tomato shadow-lg transition-[width,height] duration-300 ease-in-out
                                    relative overflow-hidden hover:shadow-xl">
                        {/* Icon Container - Always Centered */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="opacity-100 group-hover:opacity-0 [transition:none] group-hover:transition-opacity group-hover:duration-200">
                            <FontAwesomeIcon icon={event.icon} className="text-dutch-white text-xl" />
                          </div>
                        </div>
                        
                        {/* Content - Absolutely Positioned */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 [transition:none] group-hover:transition-opacity group-hover:duration-200
                                      p-4">
                          <div className="text-dutch-white">
                            <div className="font-medium text-sm mb-1">{event.date}</div>
                            <div className="font-semibold text-base mb-0.5">{event.title}</div>
                            <div className="text-sm text-dutch-white/90">{event.company}</div>
                            <div className="text-xs mt-2 text-dutch-white/80 leading-relaxed">{event.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
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