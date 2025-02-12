import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import samPhoto from '../static/samphoto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse, faFutbol, faBook, faPassport, faKey, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Section {
  id: string;
  title: string;
  content: string | JSX.Element;
}

interface CollapsibleItemProps {
  title: string;
  subtitle?: string;
  date?: string;
  children: React.ReactNode;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({ title, subtitle, date, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/50 rounded-lg overflow-hidden">
      <motion.button
        className="w-full p-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <h4 className="font-semibold text-tomato">{title}</h4>
          {subtitle && <p className="text-gray-700">{subtitle}</p>}
          {date && <p className="text-gray-600 text-sm mt-1">{date}</p>}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-tomato w-4 h-4" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Bio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('work');

  const sections: Section[] = [
    {
      id: 'work',
      title: 'Bio',
      content: (
        <>
          I'm an aspiring <span className="text-tomato font-bold">product manager</span> taking the leap from finance into the world of tech! After years of observing from the sidelines (Analysing great companies), I'm ready to get on the pitch and contribute to the success of a great team and product.

          <br /><br />

          My passion lies in understanding the <span className="text-tomato font-bold">"Why"</span> behind what makes a truly great product and company. I thrive in collaborative environments, where teams are <span className="text-tomato font-bold">united </span>by a common goal.
        </>
      )
    },
    {
      id: 'personal details',
      title: 'Personal Details',
      content: (
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faPassport} className="text-tomato w-4 h-4" />
            <span>27 y.o Australian</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faKey} className="text-tomato w-4 h-4" />
            <span>Full right to work in the UK</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faHouse} className="text-tomato w-4 h-4" />
            <span>North London</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faFutbol} className="text-tomato w-4 h-4" />
            <span>Football fanatic</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faBook} className="text-tomato w-4 h-4" />
            <span>Sci-fi & Fantasy enthusiast</span>
          </div>
        </div>
      )
    },
    {
      id: 'CV',
      title: 'CV',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <CollapsibleItem
              title="Experience"
            >
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Portfolio Manager @ Waimak Asset Management</p>
                    <p className="text-sm text-gray-600">2022-25</p>
                  </div>
                  <p>Client portfolio management, investment analysis, and risk management</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">General Manager @ Suubee</p>
                    <p className="text-sm text-gray-600">2018-22</p>
                  </div>
                  <p>Operations management and business strategy</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Analyst @ Peak Asset Management</p>
                    <p className="text-sm text-gray-600">2017-18</p>
                  </div>
                  <p>Company analysis across Australia & US markets</p>
                </div>
              </div>
            </CollapsibleItem>

            <CollapsibleItem
              title="Education"
            >
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">RMIT, Melbourne</p>
                    <p className="text-sm text-gray-600">2015-17</p>
                  </div>
                  <p>Bachelors of Business (Economics & Finance)</p>
                  <p className="text-sm text-gray-600">First Class Honours</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Recent Certifications</p>
                  <ul className="text-sm space-y-1">
                    <li>• Web Development Bootcamp (2025)</li>
                    <li>• 100 Days of Python (2024)</li>
                    <li>• Product Management Fundamentals (2025)</li>
                  </ul>
                </div>
              </div>
            </CollapsibleItem>
          </div>

          <div className="flex justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-tomato text-dutch-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-rich-black transition-colors flex items-center space-x-2"
              onClick={() => window.open('/Sam_Hinz_CV.pdf', '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download Full CV</span>
            </motion.button>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-tomato w-5 h-5" />
              <span>07 361 393 234</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-tomato w-5 h-5" />
              <span>samhinz@live.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faLinkedin} className="text-tomato w-5 h-5" />
              <a 
                href="https://www.linkedin.com/in/your-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tomato hover:text-rich-black transition-colors"
              >
                https://www.linkedin.com/in/samhinz
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="bio" className="py-16 bg-grey-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-12 text-rich-black">Sam's <span className="text-tomato">{sections.find(section => section.id === activeSection)?.title}</span></h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-dutch-white/20 rounded-lg shadow-md p-6"
                >
                  <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {activeSection === 'personal details' && (
                      <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0">
                          <img 
                            src={samPhoto} 
                            alt="Sam's photo" 
                            className="w-48 h-48 rounded-full object-cover filter grayscale"
                          />
                        </div>
                        <div className="flex-1">
                          {sections.find(section => section.id === activeSection)?.content}
                        </div>
                      </div>
                    )}
                    {activeSection !== 'personal details' && sections.find(section => section.id === activeSection)?.content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="w-full md:w-48 flex flex-row md:flex-col gap-2">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-4 text-left rounded-lg transition-all font-semibold ${
                    activeSection === section.id
                      ? 'bg-tomato text-dutch-white shadow-md'
                      : 'bg-white hover:bg-rich-black hover:text-dutch-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;