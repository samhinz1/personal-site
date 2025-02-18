import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import artwologogreen from '../static/artwologogreen.png';

const caseStudies = [
  {
    id: 1,
    title: "Artwo Case Study",
    summary: "Complete MVP for a startup idea to power the future humanoid robotics industry",
    tags: ["MVP Build", "User Research", "Roadmap"],
    imageUrl: artwologogreen
  },
  {
    id: 2,
    title: "Uniqlo Case Study",
    summary: "Complete assessment of Uniqlo's online shopping experience including navigation and user experience.",
    tags: ["User Research", "Data Analysis", "UI/UX Design"],
    imageUrl: "https://cdn.brandfetch.io/idYY8jkUtH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
  },
  {
    id: 3,
    title: "Audible Case Study",
    summary: "New AI feature to combine AI text-to-speech technology with audiobooks, giving listeners the freedom to choose their perfect narrator.",
    tags: ["Feature Request", "User Research", "AI Technology"],
    imageUrl: "https://cdn.brandfetch.io/idT82q9yNb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
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
                <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
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
                  <motion.div whileHover={{ x: 5 }}>
                    <a
                      href={`/case-study/${study.id}`}
                      className="inline-flex items-center text-tomato hover:text-rich-black transition-colors font-semibold"
                    >
                      Read Case Study
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;