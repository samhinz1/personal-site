import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowRight, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import artwologogreen from '../static/artwologogreen.png';

const caseStudiesData = [
  {
    id: 1,
    title: "Case Study #1",
    summary: "Building a platform to power the future of humanoid robotics through an innovative leasing model",
    tags: ["MVP Build", "User Research", "Product Strategy", "Market Analysis"],
    imageUrl: artwologogreen,
    fullDescription: `
      In late 2024, I conceptualized Artwo as a response to the emerging opportunities in humanoid robotics. Recent breakthroughs, particularly in AI, have transformed humanoid robots from a distant promise into a commercial reality. Drawing parallels with the early 20th-century car rental business, Artwo aims to make humanoid robots accessible through an innovative leasing model.

      The project involved extensive market research, customer interviews, and strategic planning to develop a solution that addresses the high barriers to entry in humanoid robotics adoption. The result is a three-phase implementation strategy that evolves from a basic leasing platform to a comprehensive C2C marketplace.
    `,
    challenges: [
      "High barrier to entry for businesses wanting to adopt humanoid robots",
      "Complex implementation requirements across different industries",
      "Need for flexible and scalable rental solutions",
      "Building trust in an entirely new industry"
    ],
    solutions: [
      "Developed a phased approach starting with a basic leasing platform",
      "Created comprehensive customer survey to validate market needs",
      "Designed MVP focusing on core search, booking, and management features",
      "Implemented industry-specific targeting strategy"
    ],
    outcomes: [
      "Identified key target industries with highest adoption potential",
      "Developed clear three-phase growth strategy",
      "Created detailed MVP specifications for initial platform launch"
    ],
    process: [
      {
        phase: "Market Analysis",
        description: "Conducted extensive research into humanoid robotics industry, identifying parallels with historical business models and analyzing current market barriers."
      },
      {
        phase: "Customer Research",
        description: "Developed and executed comprehensive customer survey to understand business needs, pain points, and adoption criteria across various industries."
      },
      {
        phase: "Strategy Development",
        description: "Created three-phase implementation strategy, evolving from basic leasing to a C2C marketplace, with clear focus on reducing barriers to entry."
      },
      {
        phase: "MVP Planning",
        description: "Defined core features and functionality required for initial platform launch, organized into three main epics: Search Experience, Booking System, and Booking Management."
      }
    ]
  },
  {
    id: 2,
    title: "Case Study #2",
    summary: "A comprehensive analysis of Uniqlo's e-commerce platform usability, focusing on navigation optimization and checkout experience improvements.",
    tags: ["User Research", "UX Design", "Usability Testing", "Data Analysis"],
    imageUrl: "https://cdn.brandfetch.io/idYY8jkUtH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    fullDescription: `
      Through extensive usability testing and customer surveys, I identified significant navigation and checkout friction points in Uniqlo's e-commerce platform. The study revealed two distinct user personas - "The Rusher" and "The Browser" - with conflicting needs that weren't being met by the current one-size-fits-all approach.

      Key findings from usability testing showed users required 4 more clicks than optimal to find products, struggled with category navigation, and experienced significant checkout friction. Survey data revealed that 80% of "Rushers" prefer mobile shopping, while 70% of "Browsers" would prefer in-store but are restricted by time constraints.

      The research led to three major proposed improvements:
      1. Navigation Usability Enhancement
      2. Checkout Friction Reduction
      3. Shopping Experience Personalization based on User Intent
    `,
    challenges: [
      "Poor navigation system causing confusion and extra clicks",
      "High cart abandonment rate due to checkout friction",
      "One-size-fits-all approach failing different user types",
      "Lack of clear category navigation between products"
    ],
    solutions: [
      "Redesigned navigation with improved usability and predictability",
      "Implemented seamless guest checkout with clear privacy controls",
      "Developed personalized shopping paths for different user intents",
      "Enhanced filtering and sorting options for different shopping behaviors"
    ],
    outcomes: [
      "Identified and defined two distinct user personas: 'The Rusher' and 'The Browser'",
      "Developed comprehensive improvement roadmap targeting key pain points",
      "Created detailed product requirements for navigation and checkout improvements"
    ],
    process: [
      {
        phase: "Usability Testing",
        description: "Conducted in-person usability tests with diverse participants, focusing on specific tasks like finding basic items and completing checkout process."
      },
      {
        phase: "Customer Survey",
        description: "Distributed surveys through various channels to gather quantitative data about shopping preferences and pain points, revealing distinct user segments."
      },
      {
        phase: "Analysis & Solutions",
        description: "Analyzed research data to identify key issues and developed targeted solutions for navigation, checkout, and personalization improvements."
      }
    ]
  },
  {
    id: 3,
    title: "Case Study #3",
    summary: "New AI feature to combine AI text-to-speech technology with audiobooks, giving listeners the freedom to choose their perfect narrator.",
    tags: ["Feature Request", "User Research", "AI Technology"],
    imageUrl: "https://cdn.brandfetch.io/idT82q9yNb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    fullDescription: `
      Audible has transformed the way we consume books, but the traditional one-narrator-per-book model has limitations. What if listeners could choose their preferred voice for any book, whether it's their favorite actor, a comforting voice they connect with, or a voice that better matches the book's character?

      This case study explores how AI-powered voice synthesis could revolutionize the audiobook experience by allowing listeners to select from a diverse library of high-quality AI narrators, each bringing their unique style and characteristics to the story.
    `,
    challenges: [
      "Creating natural-sounding AI voices",
      "Maintaining emotional depth",
      "Performance optimization",
      "Author and publisher buy-in"
    ],
    solutions: [
      "Advanced AI voice synthesis",
      "Emotional context mapping",
      "Cloud-based processing",
      "Revenue sharing model"
    ],
    outcomes: [
      "95% user satisfaction with AI narration",
      "40% increase in audiobook selection",
      "Expanded market reach"
    ],
    process: [
      {
        phase: "Research",
        description: "Analyzed user preferences and current limitations in audiobook narration."
      },
      {
        phase: "Development",
        description: "Created and tested various AI voice models for natural narration."
      },
      {
        phase: "Testing",
        description: "Conducted extensive testing with focus groups and optimized based on feedback."
      }
    ]
  }
];

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentId = Number(id);
  const caseStudy = caseStudiesData.find(study => study.id === currentId);
  const [expandedSection, setExpandedSection] = useState('');

  const totalCaseStudies = caseStudiesData.length;
  const nextId = currentId === totalCaseStudies ? 1 : currentId + 1;
  const prevId = currentId === 1 ? totalCaseStudies : currentId - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  const NavigationChevrons = () => (
    <>
      <button
        onClick={() => navigate(`/case-study/${prevId}`)}
        className="fixed left-8 top-1/2 -translate-y-1/2 group flex items-center gap-3 z-50"
        aria-label="Previous case study"
      >
        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm
        hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300
        flex items-center justify-center shadow-lg group-hover:scale-110">
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </div>
        <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-rich-black
        group-hover:text-tomato transition-colors duration-300 text-sm font-medium
        opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0
        transition-all pointer-events-none">
          Previous Case Study
        </span>
      </button>
      <button
        onClick={() => navigate(`/case-study/${nextId}`)}
        className="fixed right-8 top-1/2 -translate-y-1/2 group flex items-center gap-3 z-50"
        aria-label="Next case study"
      >
        <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-rich-black
        group-hover:text-tomato transition-colors duration-300 text-sm font-medium
        opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
        transition-all pointer-events-none">
          Next Case Study
        </span>
        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm
        hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300
        flex items-center justify-center shadow-lg group-hover:scale-110">
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </div>
      </button>
    </>
  );

  // Special rendering for Uniqlo case study (id: 2)
  if (caseStudy.id === 2) {
    return (
      <div className="min-h-screen bg-dutch-white/20">
        <NavigationChevrons />
        <main className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-[30vh] flex flex-col justify-center"
            >
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3 mb-8 pt-4 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dutch-white group-hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <span className="text-rich-black group-hover:text-tomato transition-colors duration-300 font-medium">
                  Back to Home
                </span>
              </button>

              <div className="flex flex-col items-start gap-6">
                <img 
                  src={caseStudy.imageUrl} 
                  alt={`${caseStudy.title} logo`}
                  className="h-16 object-contain"
                />
                <h1 className="text-6xl font-bold text-rich-black mb-4">{caseStudy.title}</h1>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-tomato/10 text-tomato rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none mt-12"
            >
              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Introduction</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I recently was browsing one of my favorite brands' websites, Uniqlo. I knew I needed to buy myself a new pair of trousers so I fired up Google, typed in Uniqlo and clicked their obnoxiously large banner ad. And this is where the trouble started…
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  At first I just tried clicking "men's" from the top nav bar - pretty obvious right? Nope. It took me to a page with a full screen hero image, right okay maybe i just need to scroll down from here. Needless to say I was a bit dumbfounded.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  I would consider myself a pretty tech-savvy person, so to get bamboozled by what I had assumed to be a pretty vanilla ecommerce site really stuck out to me. Was I just an idiot who could not work out how to operate an ecommerce site that sells comfy sweaters? Or had the Uniqlo product team made a massive mistake somewhere along the lines? I set out to find out… (Spoiler, I think they did)
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Usability Testing</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I employed a few friends and family members to come round for a BBQ. For clarity, I know this is not the absolute best way to do usability testing as certain biases, pre-existing relationships dynamics and other factors certainly come into play, but for the purpose of this case study, it would be good enough for my means.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4 text-rich-black">Goal</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To test whether other users found the website experience as confusing and difficult to use as I did
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-rich-black">Test Protocol</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-lg">
                  <li>Navigate to the home page and ask the interviewee what they expected each button to do</li>
                  <li>After going through each button, ask users to search and find a plain white men's t-shirt</li>
                  <li>Once found, ask users to rate the experience on a scale of 1-10</li>
                  <li>Ask users to navigate to women's tracksuit pants</li>
                  <li>Gather information about users' feelings regarding account creation for online shopping</li>
                  <li>After checkout, ask for improvement suggestions</li>
                  <li>Ask about excellent online shopping experiences they've had</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Test Results</h2>
                <h3 className="text-2xl font-bold mb-4 text-rich-black">Qualitative Findings</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                  <li>Users required 4 more clicks than the optimal route for specific product searches</li>
                  <li>Navigation between categories was problematic - breadcrumbs didn't allow switching between categories</li>
                  <li>Significant percentage of customers preferred guest checkout</li>
                  <li>Identified two distinct user segments: "The Rusher" and "The Browser"</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Customer Survey Results</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">The Rusher</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>80% prefer mobile devices</li>
                      <li>76% favor online over in-store</li>
                      <li>65% opt for guest checkout</li>
                      <li>70% concerned about spam/junk email</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">The Browser</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>70% prefer in-store but time-restricted</li>
                      <li>80% favor mobile devices</li>
                      <li>60% prioritize easy returns</li>
                      <li>50% abandon carts due to browsing nature</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">User Personas</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Benjamin Carter */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Benjamin Carter</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Age:</p>
                        <p>32</p>
                      </div>
                      <div>
                        <p className="font-semibold">Location:</p>
                        <p>London, UK</p>
                      </div>
                      <div>
                        <p className="font-semibold">Occupation:</p>
                        <p>Marketing Manager</p>
                      </div>
                      <div>
                        <p className="font-semibold">Shopping Habits:</p>
                        <p>Prefers online browsing before purchasing, values quality and durability</p>
                      </div>
                    </div>
                  </div>

                  {/* Jenny Thompson */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Jenny Thompson</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Age:</p>
                        <p>38</p>
                      </div>
                      <div>
                        <p className="font-semibold">Location:</p>
                        <p>Manchester, UK</p>
                      </div>
                      <div>
                        <p className="font-semibold">Occupation:</p>
                        <p>Full-time parent / Part-time freelancer</p>
                      </div>
                      <div>
                        <p className="font-semibold">Pain Points:</p>
                        <p>Limited time, complicated checkouts, returns hassle</p>
                      </div>
                    </div>
                  </div>

                  {/* Mateo Rodriguez */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Mateo Rodriguez</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Age:</p>
                        <p>29</p>
                      </div>
                      <div>
                        <p className="font-semibold">Location:</p>
                        <p>Birmingham, UK</p>
                      </div>
                      <div>
                        <p className="font-semibold">Occupation:</p>
                        <p>Project Manager (50-hour workweek)</p>
                      </div>
                      <div>
                        <p className="font-semibold">Needs:</p>
                        <p>Quick, no-fuss shopping for essentials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Proposed Improvements</h2>
                
                <div className="space-y-8">
                  {/* Epic 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 1 | Improve Navigation Usability</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Why?</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Users required 4 extra clicks on average</li>
                          <li>Navigation confusion leads to higher bounce rates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Tasks</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Improve top navbar recognizability</li>
                          <li>Enhance search bar visibility and usability</li>
                          <li>Streamline sidebar navigation</li>
                          <li>Reduce clutter and offer multiple browsing options</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/wiki/external/NzRhYzc0ODk0OWQyNDYyY2JjMzQyNTcxMmRiOTc2MzE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
                      >
                        Epic 1 Product Requirement Document
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Epic 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 2 | Reduce Checkout Friction</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Why?</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>High cart abandonment rate compared to industry benchmarks</li>
                          <li>Customer privacy concerns affecting registration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Tasks</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Implement seamless guest checkout</li>
                          <li>Clear opt-in only marketing communications</li>
                          <li>Introduce sign-up incentives</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/wiki/external/YTcwZjBiYmU0MjQ5NDc2NmI0YzE0NDNiYmE4YWY4ODc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
                      >
                        Epic 2 Product Requirement Document
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Epic 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 3 | Personalize Shopping Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Why?</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Different user segments require different experiences</li>
                          <li>Current one-size-fits-all approach is ineffective</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Tasks</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Implement clear filtering/sorting options</li>
                          <li>Add "Quick Buy" and "Browse & Explore" paths</li>
                          <li>Highlight current sorting logic</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/wiki/external/M2I2YWVjMWIxMDAyNDVlMjkwMzJiMzAyZmNmYzlhZTY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
                      >
                        Epic 3 Product Requirement Document
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Special rendering for Artwo case study (id: 1)
  if (caseStudy.id === 1) {
    return (
      <div className="min-h-screen bg-dutch-white/20">
        <NavigationChevrons />
        <main className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-[30vh] flex flex-col justify-center"
            >
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3 mb-8 pt-4 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dutch-white group-hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <span className="text-rich-black group-hover:text-tomato transition-colors duration-300 font-medium">
                  Back to Home
                </span>
              </button>

              <div className="flex flex-col items-start gap-6">
                <img 
                  src={caseStudy.imageUrl} 
                  alt={`${caseStudy.title} logo`}
                  className="h-16 object-contain"
                />
                <h1 className="text-6xl font-bold text-rich-black mb-4">{caseStudy.title}</h1>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-tomato/10 text-tomato rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none mt-12"
            >
              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Introduction</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Artwo was a personal idea conceived in late 2024, born from a simple observation: humanoid robots were on the cusp of commercial viability, but their high costs would make them inaccessible to most businesses.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  The concept was built on two key assumptions. First, while humanoid robots would remain expensive for the foreseeable future, rapid technological advancements from manufacturers would continuously improve their ROI across various use cases. Second, the eventual unlocking of affordable automated labor would catalyze a fifth industrial revolution.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  This presented a unique opportunity to participate in a brand new technology, be amongst the "first to market" all while solving (and anticipating) real customer needs.
                </p>
                <a 
                  href="https://artwo.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-tomato text-dutch-white rounded-lg font-semibold
                  shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122]
                  active:shadow-[0_0px_0_0_#c73122]
                  transition-all hover:translate-y-[3px] active:translate-y-[6px]"
                >
                  View Live MVP
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </a>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">The Problem</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  While humanoid robots hold immense potential, their widespread adoption faces significant challenges beyond just technical capabilities. The most immediate and pressing issue is the high barrier to entry—these units are expensive and will remain so for the foreseeable future. As a result, only large corporations with deep pockets will be able to justify the return on investment (ROI).
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4 text-rich-black">Key Barriers to Ownership</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                  <li>Temporary & Seasonal Needs – Many businesses require labor solutions for short-term projects, making outright ownership impractical.</li>
                  <li>Ownership Burdens – Maintenance, insurance, storage, and ongoing operational costs add complexity and financial strain.</li>
                  <li>Flexibility & Variety – Different tasks demand different robotic capabilities, meaning a single purchase may not fit all use cases.</li>
                  <li>Corporate & Fleet Solutions – Companies need the ability to scale up or down on demand without the risk of sunk costs.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Target Market</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  To maximize ROI, our ideal customers share common characteristics that make humanoid robots a game-changer for their operations. These businesses typically operate on thin margins between labor costs and revenue—for example, a cleaning company that charges $50 per hour but pays its workers $30 per hour. In these cases, even a modest reduction in labor costs can have a significant impact on profitability.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Ideal Business Profile</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Small to mid-sized businesses</li>
                      <li>Labor-intensive work</li>
                      <li>Highly repetitive tasks</li>
                      <li>High employee turnover</li>
                      <li>Undesirable job positions</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Key Industries</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Retail & Warehousing</li>
                      <li>Hospitality & Fast Food</li>
                      <li>Manufacturing & Production</li>
                      <li>Logistics & Delivery</li>
                      <li>Cleaning & Maintenance</li>
                      <li>Agriculture & Food Processing</li>
                      <li>Security & Surveillance</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Customer Research</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  To validate our assumptions and better understand potential customer needs, we conducted comprehensive interviews with businesses across our target industries. Our research focused on understanding their current operational challenges, workforce issues, and attitudes toward automation.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="border rounded-lg">
                    <button 
                      onClick={() => setExpandedSection(expandedSection === 'survey' ? '' : 'survey')}
                      className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                    >
                      <h3 className="text-2xl font-bold text-rich-black">Survey Questions</h3>
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`transform transition-transform duration-300 ${
                          expandedSection === 'survey' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ${
                      expandedSection === 'survey' ? 'max-h-[2000px] py-4' : 'max-h-0'
                    }`}>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>What is your role in the company?</li>
                        <li>What does your company do, and what are its core operations?</li>
                        <li>What are the most labor-intensive tasks in your business?</li>
                        <li>How does your company handle staffing shortages or fluctuations in demand?</li>
                        <li>What are the biggest workforce challenges you face today?</li>
                        <li>Have you experienced high turnover in specific roles? If so, why?</li>
                        <li>What tasks are hardest to hire for or retain staff?</li>
                        <li>Are there jobs that employees find undesirable? Why?</li>
                        <li>How do staffing issues impact your operations and bottom line?</li>
                        <li>What tasks are repetitive or require minimal decision-making?</li>
                        <li>Have you made any process improvements or automation changes recently?</li>
                        <li>What tasks could be done more efficiently with better tools?</li>
                        <li>What metrics do you use to measure productivity and efficiency?</li>
                        <li>What are your biggest operational cost drivers related to labor?</li>
                        <li>How do you assess ROI for new hires or technology upgrades?</li>
                        <li>Have you considered automating any aspects of your business?</li>
                        <li>What cost factors influence your technology adoption decisions?</li>
                        <li>Have you explored robotics or automation solutions before?</li>
                        <li>If you could automate one task today, what would it be?</li>
                        <li>What concerns do you have about integrating robotics?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">The Solution</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Drawing inspiration from the early days of the automobile industry, where car rental companies helped democratize access to vehicles, Artwo introduces a flexible leasing platform designed to make humanoid robotics accessible to businesses of all sizes. The platform specifically targets the high barriers to entry that currently prevent widespread adoption of this transformative technology.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At its core, Artwo's platform enables businesses to lease humanoid robots for periods that align with their operational needs - whether that's covering seasonal demand spikes, testing automation solutions, or supplementing existing workforce during transitions. This flexibility eliminates the need for massive upfront investments and allows companies to scale their robotic workforce up or down as needed.
                </p>

              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">MVP Development</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  For a bare bones MVP, we identified three critical epics that would provide essential functionality while allowing room for continuous improvements:
                </p>

                <div className="space-y-8 mt-8">
                  {/* Epic 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 1 | Search Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Search interface with date range picker</li>
                          <li>Results display with availability status</li>
                          <li>Filter options implementation</li>
                          <li>Detailed robot information pages</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/l/cp/ecKusQzS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-tomato text-dutch-white rounded-lg font-semibold
                        shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122]
                        active:shadow-[0_0px_0_0_#c73122]
                        transition-all hover:translate-y-[3px] active:translate-y-[6px]"
                      >
                        Search Experience PRD
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Epic 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 2 | Booking System</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>User account management</li>
                          <li>Booking and reservation system</li>
                          <li>Secure payment processing</li>
                          <li>Booking confirmation and notifications</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/wiki/external/MzQyOWJiODM1MTE3NDA3MGJhNjA3MzhiZDU5MjVjODc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-tomato text-dutch-white rounded-lg font-semibold
                        shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122]
                        active:shadow-[0_0px_0_0_#c73122]
                        transition-all hover:translate-y-[3px] active:translate-y-[6px]"
                      >
                        Booking System PRD
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Epic 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 3 | Booking Management</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Booking modification and cancellation</li>
                          <li>Booking history and tracking</li>
                          <li>Receipt and documentation management</li>
                          <li>Admin dashboard and controls</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/wiki/external/MjY1M2VkNGU5ODdkNDMzOWE2ODNlZTQ1MDNkN2IyNTI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-tomato text-dutch-white rounded-lg font-semibold
                        shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122]
                        active:shadow-[0_0px_0_0_#c73122]
                        transition-all hover:translate-y-[3px] active:translate-y-[6px]"
                      >
                        Booking Management PRD
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Special rendering for Audible case study (id: 3)
  if (caseStudy.id === 3) {
    return (
      <div className="min-h-screen bg-dutch-white/20">
        <NavigationChevrons />
        <main className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-[30vh] flex flex-col justify-center"
            >
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3 mb-8 pt-4 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dutch-white group-hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <span className="text-rich-black group-hover:text-tomato transition-colors duration-300 font-medium">
                  Back to Home
                </span>
              </button>

              <div className="flex flex-col items-start gap-6">
                <img 
                  src={caseStudy.imageUrl} 
                  alt={`${caseStudy.title} logo`}
                  className="h-16 object-contain"
                />
                <h1 className="text-6xl font-bold text-rich-black mb-4">{caseStudy.title}</h1>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-tomato/10 text-tomato rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none mt-12"
            >
              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Introduction</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Audible has transformed the way we consume books, but the traditional one-narrator-per-book model has limitations. What if listeners could choose their preferred voice for any book, whether it's their favorite actor, a comforting voice they connect with, or a voice that better matches the book's character?
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  This case study explores how AI-powered voice synthesis could revolutionize the audiobook experience by allowing listeners to select from a diverse library of high-quality AI narrators, each bringing their unique style and characteristics to the story.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">The Problem</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Traditional audiobooks are limited by the need to record each book with a single narrator, which can be costly, time-consuming, and restricting for listeners. This model means many books never get recorded, and listeners are bound to a single interpretation of the text, even if the narrator's style doesn't resonate with them.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4 text-rich-black">Key Issues</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                  <li>Limited narrator options for each book</li>
                  <li>High production costs limiting available titles</li>
                  <li>One-size-fits-all approach to narration</li>
                  <li>Long production times for new releases</li>
                  <li>Narrator availability constraints</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">User Research</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  I conducted user research with Audible users to understand their preferences and pain points with current audiobook solutions. Our study deliberately cast a wide net, focusing on users who had experienced at least one audiobook. The aim was twofold: first, to identify pain points with current technology that could be addressed through AI narration, and second, to explore opportunities for both market expansion (converting users who had tried audiobooks but discontinued) and delivering enhanced value to existing customers through new technology.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <div className="border rounded-lg">
                    <button 
                      onClick={() => setExpandedSection(expandedSection === 'survey' ? '' : 'survey')}
                      className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                    >
                      <h3 className="text-2xl font-bold text-rich-black">Survey Questions</h3>
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`transform transition-transform duration-300 ${
                          expandedSection === 'survey' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ${
                      expandedSection === 'survey' ? 'max-h-[2000px] py-4' : 'max-h-0'
                    }`}>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Have you ever listened to an audiobook? If yes, when was the last time?</li>
                        <li>How many audiobooks have you listened to in the past year?</li>
                        <li>What platforms or services have you used to listen to audiobooks?</li>
                        <li>Do you currently have an active audiobook subscription?</li>
                        <li>Tell me about the last time you chose an audiobook over reading the physical book. What influenced that decision?</li>
                        <li>In what situations do you typically listen to audiobooks?</li>
                        <li>How do you usually discover new audiobooks to listen to?</li>
                        <li>What made you start listening to audiobooks in the first place?</li>
                        <li>For users who stopped: What made you stop using audiobooks?</li>
                        <li>Tell me about a time when you really enjoyed a narrator's performance. What made it special?</li>
                        <li>Have you ever stopped listening to an audiobook because of the narrator? What happened?</li>
                        <li>How do you typically preview a narrator's voice before committing to an audiobook?</li>
                        <li>Tell me about a book where you felt the narrator didn't match the content. What was off about it?</li>
                        <li>Do you have any favorite narrators? What makes them your favorite?</li>
                        <li>What books have you wanted to listen to but couldn't find in audio format?</li>
                        <li>Tell me about your biggest frustrations with audiobook listening.</li>
                        <li>What makes you decide to return or stop listening to an audiobook?</li>
                        <li>How do you handle books where you don't enjoy the narrator's voice?</li>
                        <li>What would make you listen to more audiobooks?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-rich-black">Key Findings</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>76% would try different narrators for favorite books</li>
                    <li>82% want voices matching character demographics</li>
                    <li>65% have skipped books due to narrator mismatch</li>
                    <li>89% interested in celebrity AI voice options</li>
                    <li>71% would pay premium for narrator choice</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">The Solution</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our solution leverages cutting-edge AI voice synthesis to create a library of high-quality narrators that users can choose from. With recent advances in AI and text-to-speech technologies, narration voices are often indistinguishable from real voice actors. An effective AI narration tool directly addresses key user needs identified in our research such as trying different narrators for their favorite books, differentiation of character voices within a single book, and increasing appeal to cater to audiences that may have different audio/voice preferences such as language, genders, speeds and accents. </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Implementation of this solution is particularly feasible given Amazon's existing technological advantage through Amazon Polly. This in-house text-to-speech technology, with its advanced neural capabilities and established voice library, provides the foundation for rapid development and scalable deployment that is a clear advantage compared to many other services. 
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Feature Development</h2>
                <div className="space-y-8">
                  {/* Epic 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 1 | Smart Text Processing Engine</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Intelligent text-to-script conversion system</li>
                          <li>Support for multiple ebook formats (EPUB, MOBI, AZW)</li>
                          <li>Natural language processing for context and emotion</li>
                          <li>Character dialogue detection and attribution</li>
                          <li>Real-time streaming optimization</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/wiki/external/YzlkOWJhNjkwMzkxNDcxNmIxMTYxNWE5MDYxNTE1ZWQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
                      >
                        Text Processing PRD
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Epic 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 2 | Voice Selection & Preview</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Interactive voice preview system</li>
                          <li>Real-time voice switching during playback</li>
                          <li>Customizable playback speed controls</li>
                          <li>Voice quality rating and feedback</li>
                          <li>Personalized voice recommendations</li>
                        </ul>
                      </div>
                      <a 
                        href="https://artwo.atlassian.net/wiki/external/ZGFjZTVhODllNDRlNDI5Yzg4YzUxNzBhY2JkYWFjZjc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
                      >
                        Voice Selection PRD
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Epic 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-rich-black">Epic 3 | Advanced Narration Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">Core Features</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Multi-language support and switching</li>
                          <li>Character voice customization</li>
                          <li>Default voice preferences</li>
                          <li>Voice profile management</li>
                          <li>Cross-device settings sync</li>
                        </ul>
                      </div>
                      <a 
                        href="https://audible.atlassian.net/wiki/spaces/AUD/pages/123456791"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-tomato/10 text-tomato rounded-lg hover:bg-tomato/20 transition-colors duration-300 font-medium"
                      >
                        Narration Settings PRD
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Default rendering for other case studies
  return (
    <div className="min-h-screen bg-dutch-white/40">
      <NavigationChevrons />
      <main className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[30vh] flex flex-col justify-center"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 mb-8 pt-4 group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dutch-white group-hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <span className="text-rich-black group-hover:text-tomato transition-colors duration-300 font-medium">
                Back to Home
              </span>
            </button>
            <div className="flex flex-col items-start gap-6">
              <img 
                src={caseStudy.imageUrl} 
                alt={`${caseStudy.title} logo`}
                className="h-16 object-contain"
              />
              <h1 className="text-6xl font-bold text-rich-black mb-4">{caseStudy.title}</h1>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-tomato/10 text-tomato rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-gray-700 max-w-2xl">
              {caseStudy.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none mt-12"
          >
            <section className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-rich-black">Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {caseStudy.fullDescription}
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-rich-black">Process</h2>
              <div className="space-y-8">
                {caseStudy.process.map((phase, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-tomato">
                    <h3 className="text-2xl font-bold mb-2 text-rich-black">{phase.phase}</h3>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <section>
                <h2 className="text-4xl font-bold mb-8 text-rich-black">Challenges</h2>
                <ul className="space-y-4">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-tomato mr-3 text-2xl">•</span>
                      <span className="text-gray-700 text-lg">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-4xl font-bold mb-8 text-rich-black">Solutions</h2>
                <ul className="space-y-4">
                  {caseStudy.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-tomato mr-3 text-2xl">•</span>
                      <span className="text-gray-700 text-lg">{solution}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-rich-black">Outcomes</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudy.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tomato"
                  >
                    <p className="text-gray-700 text-lg">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage; 