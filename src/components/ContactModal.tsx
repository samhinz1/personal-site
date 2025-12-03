import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactConfetti from 'react-confetti';
import samPhoto from '../static/samphoto.png';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '32b1771f-fb52-45a5-a30d-140934a99e34',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission',
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Show success state and confetti
        setIsSuccess(true);
        setShowConfetti(true);
        setErrorMessage(null);
        
        // Hide confetti and close modal after 2.5 seconds
        setTimeout(() => {
          setShowConfetti(false);
          setIsSuccess(false);
          onClose();
          // Reset form data
          setFormData({ name: '', email: '', message: '' });
        }, 2500);
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      let message = 'Failed to send message. Please try again later.';
      
      if (error instanceof Error) {
        if (error.message.includes('access_key')) {
          message = 'Form submission service is not properly configured. Please contact the site administrator.';
        } else if (error.message.includes('rate limit')) {
          message = 'Too many messages sent. Please try again in a few minutes.';
        }
      }
      
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset error message when modal is closed
  const handleClose = () => {
    setErrorMessage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Confetti */}
          <AnimatePresence>
            {showConfetti && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[102]"
              >
                <ReactConfetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  recycle={false}
                  numberOfPieces={200}
                  gravity={0.2}
                  colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay and Modal Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-rich-black/20 backdrop-blur-[2px] z-[100] flex items-center justify-center"
            onClick={handleClose}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-lg mx-auto px-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-dutch-white rounded-xl shadow-lg p-8">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-4xl font-semibold text-tomato">Let's Chat</h3>
                        <button
                          onClick={handleClose}
                          className="text-rich-black hover:text-tomato transition-colors"
                        >
                          <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>
                      </div>

                      {/* LinkedIn mini-profile */}
                      <div className="flex items-center p-4 mb-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                          <img
                            src={samPhoto}
                            alt="Sam Hinz"
                            className="w-full h-full object-cover scale-150"
                            style={{ objectPosition: '20% 10%' }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-rich-black">Samuel Hinz</p>
                          <a
                            href="https://www.linkedin.com/in/samhinz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-tomato hover:text-rich-black font-medium mt-1 transition-colors"
                          >
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                            <span>Let's connect on LinkedIn</span>
                          </a>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-rich-black text-sm font-medium mb-1">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 focus:border-tomato focus:ring-1 focus:ring-tomato/20 outline-none transition-all"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-rich-black text-sm font-medium mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 focus:border-tomato focus:ring-1 focus:ring-tomato/20 outline-none transition-all"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-rich-black text-sm font-medium mb-1">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-gray-200 focus:border-tomato focus:ring-1 focus:ring-tomato/20 outline-none transition-all resize-none"
                            required
                          ></textarea>
                        </div>
                        
                        {errorMessage && (
                          <div className="text-red-500 text-sm mt-2">
                            {errorMessage}
                          </div>
                        )}
                        
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isLoading}
                          className="w-full bg-tomato text-dutch-white px-4 py-3 text-sm rounded-lg font-medium shadow-sm hover:bg-rich-black transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="py-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                      >
                        <FontAwesomeIcon 
                          icon={faCheckCircle} 
                          className="text-tomato w-16 h-16 mb-4" 
                        />
                      </motion.div>
                      <h3 className="text-2xl font-semibold text-rich-black mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thanks for reaching out. I'll get back to you soon!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 