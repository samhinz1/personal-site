import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import dicelogo from '../static/dicelogo.webp';
import vintedLogo from '../static/vinted.png';
import autotraderLogo from '../static/Autotrader.png';

const caseStudies = [
  {
    id: 1,
    title: "Dice: Fixing the Ticketing Experience",
    summary:
      "Product deep-dive into how Dice can own the full fan journey and win the live events war.",
    tags: ["Product Strategy", "JTBD", "Feature Ideation"],
    imageUrl: dicelogo,
    externalUrl: "https://dice-the-ticket-app-tryi-ji7cajv.gamma.site/",
  },
  {
    id: 2,
    title: "Vinted: Second-Hand Fashion Flywheel",
    summary:
      "Deep dive into how Vinted prioritized sellers, removed friction, and turned a marketplace into a movement.",
    tags: ["Marketplace Strategy", "JTBD", "Growth Loops"],
    imageUrl: vintedLogo,
    externalUrl: "https://how-vinted-became-europe-qli8r25.gamma.site/",
  },
  {
    id: 3,
    title: "Autotrader: Owning the Car-Buying Journey",
    summary:
      "How Autotrader can evolve from a search marketplace into an end-to-end transaction platform that owns the full car-buying journey.",
    tags: ["Marketplace Strategy", "JTBD", "Product Opportunity"],
    imageUrl: autotraderLogo,
    externalUrl: "https://autotrader-the-car-marke-9zj82eh.gamma.site/"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 bg-grey-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-12 text-rich-black">Case <span className="text-tomato">Studies</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: study.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {study.externalUrl ? (
                  <a
                    href={study.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                  <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className={`w-full h-full object-contain transition-transform duration-300 ${
                        study.imageUrl === dicelogo
                          ? 'p-0 scale-150'
                          : 'p-4 transform group-hover:scale-105'
                      }`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-rich-black">{study.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{study.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-tomato/10 text-tomato rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.div whileHover={{ x: 5 }} className="text-tomato hover:text-rich-black transition-colors font-semibold inline-flex items-center">
                      Read Case Study
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </motion.div>
                  </div>
                </a>
                ) : (
                  <Link
                    to={`/case-study/${study.id}`}
                    className="block h-full"
                  >
                    <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src={study.imageUrl}
                        alt={study.title}
                        className={`w-full h-full object-contain transition-transform duration-300 ${
                          study.imageUrl === dicelogo
                            ? 'p-0 scale-150'
                            : 'p-4 transform group-hover:scale-105'
                        }`}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-rich-black">{study.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{study.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-tomato/10 text-tomato rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.div whileHover={{ x: 5 }} className="text-tomato hover:text-rich-black transition-colors font-semibold inline-flex items-center">
                        Read Case Study
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </motion.div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;