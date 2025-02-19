import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CaseStudyLayout from '../components/CaseStudyLayout';

const UniqloCaseStudy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState('');

  return (
    <CaseStudyLayout
      title="Case Study #2"
      summary="A comprehensive analysis of Uniqlo's e-commerce platform usability, focusing on navigation optimization and checkout experience improvements."
      tags={["User Research", "UX Design", "Usability Testing", "Data Analysis"]}
      imageUrl="https://cdn.brandfetch.io/idYY8jkUtH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
      caseStudyId={2}
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
    </CaseStudyLayout>
  );
};

export default UniqloCaseStudy; 