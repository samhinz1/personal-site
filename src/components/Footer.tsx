import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rich-black text-dutch-white py-12 relative z-[60]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Sam Hinz</h3>
              <p className="text-dutch-white/80">
                Aspiring Product Manager 
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 text-right">
              <h3 className="text-xl font-semibold">Connect</h3>
              <div className="flex space-x-4 justify-end">
                <a
                  href="https://github.com/samhinz1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tomato transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href="https://linkedin.com/in/samhinz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tomato transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="mailto:samhinz@live.com"
                  className="hover:text-tomato transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-dutch-white/20 text-left text-dutch-white/60">
            <p>© {currentYear} Sam Hinz. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 