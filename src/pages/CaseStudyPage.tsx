import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import artwologogreen from '../static/artwologogreen.png';

const caseStudiesData = [
  {
    id: 1,
    title: "Artwo Case Study",
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
    title: "Uniqlo | A Case Study",
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
    title: "Kindle Case Study",
    summary: "Developing an AI TTS feature to enable visually impaired users to read Kindle books more naturally.",
    tags: ["Feature Request", "User Research", "Mockup"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Amazon_Kindle_logo.svg/582px-Amazon_Kindle_logo.svg.png",
    fullDescription: `
      A proposal for enhancing Kindle's accessibility through AI-powered text-to-speech technology.
      This case study focuses on improving the reading experience for visually impaired users.
    `,
    challenges: [
      "Natural-sounding voice synthesis",
      "Performance optimization",
      "Accessibility compliance"
    ],
    solutions: [
      "Implemented advanced AI TTS algorithms",
      "Optimized processing for mobile devices",
      "Followed WCAG guidelines"
    ],
    outcomes: [
      "95% accuracy in natural speech synthesis",
      "Reduced processing overhead by 40%",
      "Full WCAG 2.1 compliance achieved"
    ],
    process: [
      {
        phase: "Research",
        description: "Studied existing TTS solutions and conducted interviews with visually impaired users."
      },
      {
        phase: "Development",
        description: "Created and tested various AI models for natural speech synthesis."
      },
      {
        phase: "Testing",
        description: "Conducted extensive testing with target user group and optimized based on feedback."
      }
    ]
  }
];

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudy = caseStudiesData.find(study => study.id === Number(id));
  const [expandedSection, setExpandedSection] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  // Special rendering for Uniqlo case study (id: 2)
  if (caseStudy.id === 2) {
    return (
      <div className="min-h-screen bg-dutch-white/20">
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

              <h1 className="text-6xl font-bold text-rich-black mb-4">{caseStudy.title}</h1>
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
              className="prose prose-lg max-w-none"
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

              <h1 className="text-6xl font-bold text-rich-black mb-4">{caseStudy.title}</h1>
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
              className="prose prose-lg max-w-none"
            >
              <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-rich-black">Introduction</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Artwo was a personal idea of mine, thought up of in late 2024. There was some very early murmurs of the promise that recent breakthroughs in humanoid held, however the leaders in field remained tight lipped around their progress. While I have long believed in their potential, the idea of humanoid robots revolutionizing industries (much like fusion energy and quantum computing) have been promised for over a decade.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  However, it's only in the past 12 to 24 months that we've seen breakthroughs (Thanks largely to advancements in AI) of such magnitude that humanoid robots are beginning to show real commercial promise. The use cases are virtually limitless, and once perfected from a utility standpoint, I truly believe we will witness the dawn of a fifth industrial revolution.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Yet, humanoid robots represent entirely uncharted territory. How do we identify—or even preempt—problems that have yet to emerge? The best approach, I believe, is to look at history. The closest comparable industry model I found was the early 20th-century car rental business. The parallels are striking: high upfront capital investment, broad industrial applications, and, most importantly, a pivotal role in shaping an industrial revolution.
                </p>
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
                <p className="text-gray-700 text-lg leading-relaxed">
                  A rental or leasing model removes the financial and logistical barriers to humanoid robot adoption, making them more accessible and practical across industries. By offering a scalable and cost-effective pathway, businesses of all sizes can integrate humanoid robots without the burden of large upfront investments.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  In the early stages of any new technology, potential adopters—those who see the value but hesitate due to risk—need a low-commitment way to test and implement innovations. This is especially true for humanoid robots, an industry still in its infancy.
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

  // Default rendering for other case studies
  return (
    <div className="min-h-screen bg-dutch-white/40">
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
            <h1 className="text-6xl font-bold text-rich-black mb-4">{caseStudy.title}</h1>
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
            className="prose prose-lg max-w-none"
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