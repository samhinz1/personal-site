import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CaseStudyLayout from '../components/CaseStudyLayout';
import artwologogreen from '../static/artwologogreen.png';

const ArtwoCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="Case Study #1"
      summary="Building a platform to power the future of humanoid robotics through an innovative leasing model"
      tags={["MVP Build", "User Research", "Product Strategy", "Market Analysis"]}
      imageUrl={artwologogreen}
      caseStudyId={1}
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
        <h2 className="text-4xl font-bold mb-6 text-rich-black">MVP Development</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          For a bare bones MVP, we identified three critical epics that would provide essential functionality while allowing room for continuous improvements:
        </p>

        <div className="space-y-8 mt-8">
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
    </CaseStudyLayout>
  );
};

export default ArtwoCaseStudy; 