import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  title: string;
  summary: string;
  tags: string[];
  imageUrl: string;
  caseStudyId: number;
}

const TOTAL_CASE_STUDIES = 3;

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  title,
  summary,
  tags,
  imageUrl,
  caseStudyId,
}) => {
  const navigate = useNavigate();

  const goToPreviousCase = () => {
    const prevId = caseStudyId > 1 ? caseStudyId - 1 : TOTAL_CASE_STUDIES;
    navigate(`/case-study/${prevId}`);
  };

  const goToNextCase = () => {
    const nextId = caseStudyId < TOTAL_CASE_STUDIES ? caseStudyId + 1 : 1;
    navigate(`/case-study/${nextId}`);
  };

  return (
    <div className="min-h-screen bg-dutch-white/20">
      {/* Navigation Chevrons */}
      <div className="fixed inset-y-0 left-8 flex items-center z-50">
        <button
          onClick={goToPreviousCase}
          className="group relative"
          aria-label="Previous case study"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-dutch-white group-hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300 shadow-lg">
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </div>
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-rich-black text-dutch-white rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-sm">
            Previous Case Study
          </div>
        </button>
      </div>
      <div className="fixed inset-y-0 right-8 flex items-center z-50">
        <button
          onClick={goToNextCase}
          className="group relative"
          aria-label="Next case study"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-dutch-white group-hover:bg-tomato/10 text-rich-black group-hover:text-tomato transition-all duration-300 shadow-lg">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </div>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-rich-black text-dutch-white rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-sm">
            Next Case Study
          </div>
        </button>
      </div>

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
              className="flex items-center gap-3 mb-8 pt-4 group relative z-50"
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
                src={imageUrl} 
                alt={`${title} logo`}
                className="h-16 object-contain"
              />
              <h1 className="text-6xl font-bold text-rich-black mb-4">{title}</h1>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-tomato/10 text-tomato rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-gray-700 max-w-2xl">
              {summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none mt-12"
          >
            {children}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout; 