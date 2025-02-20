import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import samPhoto from '../static/samphoto.png';
import samCV from '../static/Sam CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse, faFutbol, faBook, faPassport, faKey, faChevronDown, faPaperPlane, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactConfetti from 'react-confetti';

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
  isOpen: boolean;
  onToggle: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({ title, subtitle, date, children, isOpen, onToggle }) => {
  return (
    <div className="bg-dutch-white/40 rounded-xl overflow-hidden">
      <motion.button
        className="w-full p-6 flex items-center justify-between text-left"
        onClick={onToggle}
      >
        <div className="flex-1">
          <h4 className="font-semibold text-tomato text-xl">{title}</h4>
          {subtitle && <p className="text-gray-700 text-lg">{subtitle}</p>}
          {date && <p className="text-gray-600 text-base mt-2">{date}</p>}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-tomato w-5 h-5" />
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
  const [openItem, setOpenItem] = useState<string>('experience');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // Add event listener for custom event
  useEffect(() => {
    const handleSetActiveSection = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('setActiveSection', handleSetActiveSection as EventListener);

    return () => {
      window.removeEventListener('setActiveSection', handleSetActiveSection as EventListener);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '32b1771f-fb52-45a5-a30d-140934a99e34',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission',
        }),
      });

      if (response.ok) {
        // Show success state and confetti
        setIsSuccess(true);
        setShowConfetti(true);
        
        // Hide confetti and reset form after 2.5 seconds
        setTimeout(() => {
          setShowConfetti(false);
          setIsSuccess(false);
          // Reset form data
          setFormData({ name: '', email: '', message: '' });
        }, 2500);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const sections: Section[] = [
    {
      id: 'work',
      title: 'About Me',
      content: (
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="flex flex-col flex-shrink-0 space-y-10">
            <img 
              src={samPhoto} 
              alt="Sam's photo" 
              className="w-64 h-64 rounded-full object-cover filter grayscale"
            />
            <div className="space-y-3">
              <h2 className="text-2xl text-rich-black text-left mb-1">Samuel Hinz</h2>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPassport} className="text-tomato w-4 h-4" />
                <span>27 y.o Australian</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faKey} className="text-tomato w-4 h-4" />
                <span>Right to work in the UK</span>
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
          </div>
          <div className="flex-1">
            <div className="text-[17px] text-justify">
              I've always been fascinated by what makes the truly great companies "great" - the <span className="text-tomato font-bold">'how'</span> and <span className="text-tomato font-bold">'why'</span> behind the most successful products and companies. What made Airbnb dominate? Why was Uber inevitable? But at some point (in the last 12 months), I realized that observing from the sidelines wasn't enough. I don't just want to analyse and study great products in the world of finance; I want my own hands dirty and I want to be apart of that process.

              <br /><br />

              I understand that product management isn't just about having ideas — it requires <span className="text-tomato font-bold">structured research</span>, testing hypothesises, critical thinking, a <span className="text-tomato font-bold">deep understanding</span> of the problem at hand and most importantly, <span className="text-tomato font-bold">relentless execution</span>. I believe my ability to <span className="text-tomato font-bold">"wear multiple hats"</span> will be incredibly beneficial for a role as a Product Manager.

              <br /><br />  

              Over the past six months, I've immersed myself in multiple learning paths to bring myself up to speed both technically, and theoretically. This site is certainly not here to showcase my design or engineering brilliance. Instead, consider it <span className="text-tomato font-bold">proof</span> that I'm serious about this path — that I'm eager to learn, ready to contribute, and capable of critical thinking.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'whypm',
      title: 'Why Product Management?',
      content: (
        <div className="space-y-6 text-lg">
          

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-tomato mb-2">From Observer to Builder: Creating Real-World Impact</h3>
              <p className="text-justify">
                As an investment analyst, I spent years studying what makes great tech companies succeed—analyzing their products, strategies, and execution. But the more I studied, the more I realized I didn't just want to observe. I wanted to build. Product management allows me to take those insights and apply them directly, shaping products that make a tangible impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-tomato mb-2">Solving Meaningful, Challenging Problems</h3>
              <p className="text-justify">
                I find deep satisfaction in problem-solving. It's always been a core part of who I am—from competing in chess tournaments as a kid to designing the very website you're reading right now. Product management is a discipline that thrives on tackling complex challenges, and I know that's where I do my best work.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-tomato mb-2">The Perfect Intersection of Business & Technology</h3>
              <p className="text-justify">
                I've always believed that the ideal career sits at the crossroads of what you're good at and what you love. While a move from finance to product management might seem like a leap, to me, it's a logical transition. I love understanding how businesses work, identifying the problems they solve, and figuring out how to create real value. Product management gives me the opportunity to do exactly that—just from the inside rather than the outside.
              </p>
            </div>
          </div>

      
        </div>
      )
    },
    {
      id: 'pmskills',
      title: 'PM Skills',
      content: (
        <div className="space-y-6 text-sm">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-tomato mb-2">Technical Skills</h3>
            <p className="text-justify">
              Through 6 months of intensive self-study, I've built a foundation in technical skills (Python, JS, HTML, CSS, SQL) and product management theories. I've supplemented some formal courses with podcasts, books, and personal project to develop a well-rounded understanding of product management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-tomato mb-2">Data-Driven Decision-Making & Hypothesis Testing</h3>
              <p className="text-justify">
                As a portfolio manager, I was constantly testing hypotheses—balancing conviction in a trade with the ability to pivot when the data proved otherwise. This same analytical mindset applies to product management, where testing assumptions, analyzing user behavior, and iterating based on real-world feedback is key.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-tomato mb-2">Risk Management & Prioritization</h3>
              <p className="text-justify">
                In finance, the relationship between risk and reward is fundamental. As a university student, this principle was drilled into me, and as a professional, I lived it daily. In product management, prioritization follows the same logic—faced with thousands of potential features or opportunities, the goal is to focus on the highest-impact bets with the best risk-reward tradeoff.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-tomato mb-2">Strategic Thinking & Stakeholder Management</h3>
              <p className="text-justify">
                Success in finance requires thinking outside the box and taking calculated risks. The same applies to product management—differentiation comes from creativity and strategic bets, not just following the status quo. Additionally, managing multiple stakeholders, whether investors or internal teams, is critical to driving alignment and execution.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-tomato mb-2">Deep Understanding of Successful Tech Products</h3>
              <p className="text-justify">
                My experience analyzing businesses has given me a solid understanding of how key metrics—such as customer acquisition, retention, and monetization—impact a company's top and bottom line. This business-first approach to product management helps ensure that features and roadmaps align with broader company goals.
              </p>
            </div>
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
              isOpen={openItem === 'experience'}
              onToggle={() => setOpenItem(openItem === 'experience' ? '' : 'experience')}
            >
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Portfolio Manager @ Waimak Asset Management</p>
                    <p className="text-base text-gray-600">2022-25</p>
                  </div>
                  <p className="text-base">Client portfolio management, investment analysis, and risk management</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">General Manager @ Suubee</p>
                    <p className="text-sm text-gray-600">2018-22</p>
                  </div>
                  <p className="text-base">Operations management and business strategy</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Analyst @ Peak Asset Management</p>
                    <p className="text-sm text-gray-600">2017-18</p>
                  </div>
                  <p className="text-base">Company analysis across Australia & US markets</p>
                </div>
              </div>
            </CollapsibleItem>

            <CollapsibleItem
              title="Education"
              isOpen={openItem === 'education'}
              onToggle={() => setOpenItem(openItem === 'education' ? '' : 'education')}
            >
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Bachelors of Business (Economics & Finance) @ RMIT</p>
                    <p className="text-sm text-gray-600">2015-17</p>
                  </div>
                  <p className="text-sm text-gray-600">First Class Honours</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Web Development Bootcamp | Colt Steele</p>
                    <p className="text-sm text-gray-600">2025</p>
                  </div>
                  <p className="text-sm text-gray-600">Udemy Certificate</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">100 Days of Python | Angela Yu</p>
                    <p className="text-sm text-gray-600">2024</p>
                  </div>
                  <p className="text-sm text-gray-600">Udemy Certificate</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Become a Product Manager | Cole Mercer</p>
                    <p className="text-sm text-gray-600">2025</p>
                  </div>
                  <p className="text-sm text-gray-600">Udemy Certificate</p>
                </div>
              </div>
            </CollapsibleItem>

            <CollapsibleItem
              title="Technologies"
              isOpen={openItem === 'skills'}
              onToggle={() => setOpenItem(openItem === 'skills' ? '' : 'skills')}
            >
              <div className="space-y-4 text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Jira", desc: "Project tracking and agile management tool" },
                    { name: "Linear", desc: "Modern issue tracking and project management" },
                    { name: "Notion", desc: "All-in-one workspace for docs, planning and wikis" },
                    { name: "Mixpanel", desc: "Analytics for user behavior tracking" },
                    { name: "Google Analytics", desc: "Web analytics service" },
                    { name: "Google Suite", desc: "Cloud-based productivity tools" },
                    { name: "Claude", desc: "LLM for drafting, editing and testing code" },
                    { name: "Figma", desc: "Prototyping and wireframing tool" },
                    { name: "Cursor", desc: "AI-powered code editor" }
                  ].map((skill, index) => (
                    <div key={index} className="p-3 bg-white rounded-lg shadow-sm">
                      <p className="font-medium text-tomato">{skill.name}</p>
                      <p className="text-sm text-gray-600">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleItem>
          </div>

          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-tomato text-dutch-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-rich-black transition-colors flex items-center space-x-3"
              onClick={() => window.open(samCV, '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
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
        <div className="space-y-4">
          {/* Confetti */}
          <AnimatePresence>
            {showConfetti && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[102]"
              >
                <ReactConfetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  recycle={false}
                  numberOfPieces={200}
                  gravity={0.2}
                  colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-start">
            <h3 className="text-4xl font-semibold text-tomato">Let's Chat</h3>
            <div className="space-y-2 flex flex-col items-end">
              <div className="flex items-center space-x-3">
                <span className="text-sm">07 361 393 234</span>
                <FontAwesomeIcon icon={faPhone} className="text-tomato w-5 h-5" />
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">samhinz@live.com</span>
                <FontAwesomeIcon icon={faEnvelope} className="text-tomato w-5 h-5" />
              </div>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.linkedin.com/in/samhinz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-tomato hover:text-rich-black transition-colors text-sm"
                >
                  linkedin.com/in/samhinz
                </a>
                <FontAwesomeIcon icon={faLinkedin} className="text-tomato w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-rich-black text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 focus:border-tomato focus:ring-1 focus:ring-tomato/20 outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-rich-black text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 focus:border-tomato focus:ring-1 focus:ring-tomato/20 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-rich-black text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 focus:border-tomato focus:ring-1 focus:ring-tomato/20 outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className="w-full bg-tomato text-dutch-white px-4 py-2 text-sm rounded-lg font-medium shadow-sm hover:bg-rich-black transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-tomato w-16 h-16 mb-4" 
                    />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-rich-black mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="bio" className="py-24 bg-grey-50">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-dutch-white/20 rounded-xl shadow-lg p-8">
            <div className="flex flex-col-reverse md:flex-row gap-10">
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                      {activeSection === 'personal details' && (
                        <div className="flex flex-col md:flex-row items-start gap-10">
                          <div className="flex-shrink-0">
                            <img 
                              src={samPhoto} 
                              alt="Sam's photo" 
                              className="w-64 h-64 rounded-full object-cover filter grayscale"
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
              
              {/* Mobile Dropdown */}
              <div className="relative w-full md:hidden">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full p-5 text-left rounded-xl font-semibold text-lg flex justify-between items-center ${
                    'bg-tomato text-dutch-white shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122] active:shadow-[0_0px_0_0_#c73122] hover:translate-y-[3px] active:translate-y-[6px] transition-all'
                  }`}
                >
                  <span>{sections.find(section => section.id === activeSection)?.title}</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-50">
                    {sections.map((section) => (
                      section.id !== activeSection && (
                        <button
                          key={section.id}
                          onClick={() => {
                            setActiveSection(section.id);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full p-5 text-left rounded-xl font-semibold text-lg mb-2 bg-dutch-white border-2 border-rich-black text-rich-black shadow-[0_6px_0_0_#2d2d2a] hover:shadow-[0_3px_0_0_#2d2d2a] active:shadow-[0_0px_0_0_#2d2d2a] hover:translate-y-[3px] active:translate-y-[6px] transition-all"
                        >
                          {section.title}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex w-56 flex-col gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`p-5 text-left rounded-xl font-semibold text-lg ${
                      activeSection === section.id
                        ? 'bg-tomato text-dutch-white shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122] active:shadow-[0_0px_0_0_#c73122] hover:translate-y-[3px] active:translate-y-[6px] transition-all'
                        : 'bg-dutch-white border-2 border-rich-black text-rich-black shadow-[0_6px_0_0_#2d2d2a] hover:shadow-[0_3px_0_0_#2d2d2a] active:shadow-[0_0px_0_0_#2d2d2a] hover:translate-y-[3px] active:translate-y-[6px] transition-all'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;