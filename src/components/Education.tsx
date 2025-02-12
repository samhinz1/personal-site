import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const formalEducation = [
  {
    degree: "BSc Computer Science",
    institution: "University of Technology",
    year: "2020",
    description: "Focus on Software Engineering and Artificial Intelligence"
  },
  {
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    year: "2022",
    description: "Professional certification in cloud architecture"
  }
];

const selfDirected = [
  {
    title: "Full Stack Development Bootcamp",
    platform: "Udemy",
    year: "2021",
    description: "Comprehensive course covering modern web development stack"
  },
  {
    title: "Advanced TypeScript Masterclass",
    platform: "Frontend Masters",
    year: "2022",
    description: "Deep dive into TypeScript's advanced features"
  },
  {
    title: "System Design and Architecture",
    platform: "Coursera",
    year: "2023",
    description: "Learning scalable system design principles"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          
          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-3" />
              Formal Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {formalEducation.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-blue-500 font-semibold mt-2">{edu.year}</p>
                  <p className="text-gray-700 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Self-Directed Learning */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-3" />
              Self-Directed Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selfDirected.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                  <p className="text-gray-600">{course.platform}</p>
                  <p className="text-blue-500 font-semibold mt-2">{course.year}</p>
                  <p className="text-gray-700 mt-2">{course.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;