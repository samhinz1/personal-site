import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import artwologogreen from '../static/artwologogreen.png';

const caseStudiesData = [
  {
    id: 1,
    title: "Artwo Case Study",
    summary: "Complete MVP for a startup idea to power the future humanoid robotics industry",
    tags: ["MVP Build", "User Research", "Roadmap"],
    imageUrl: artwologogreen,
    fullDescription: `
      A comprehensive case study on developing an MVP for Artwo, a startup focused on humanoid robotics.
      This project involved extensive user research, feature prioritization, and roadmap development.
    `,
    challenges: [
      "Identifying core features for MVP",
      "Balancing technical feasibility with user needs",
      "Creating a scalable architecture"
    ],
    solutions: [
      "Conducted user interviews to prioritize features",
      "Implemented agile development methodology",
      "Developed modular system architecture"
    ],
    outcomes: [
      "Successfully launched MVP within 3 months",
      "Achieved 90% user satisfaction rate",
      "Secured additional funding for development"
    ],
    process: [
      {
        phase: "Discovery",
        description: "Conducted market research and user interviews to identify key opportunities and pain points in the robotics industry."
      },
      {
        phase: "Planning",
        description: "Developed comprehensive product roadmap and technical architecture based on research findings."
      },
      {
        phase: "Development",
        description: "Implemented core features using agile methodology, with regular user feedback and iterations."
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