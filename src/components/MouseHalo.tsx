import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MouseHalo: React.FC = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const haloRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    let animationFrameId: number;

    const updateDOMElements = () => {
      if (haloRef.current) {
        haloRef.current.style.background = `radial-gradient(200px circle at ${mousePosition.current.x}px ${mousePosition.current.y}px, rgba(217, 189, 99, 0.17), transparent 80%)`;
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePosition.current.x - 6}px, ${mousePosition.current.y - 6}px)`;
      }
      animationFrameId = requestAnimationFrame(updateDOMElements);
    };

    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Only add event listeners if we're on desktop
    if (mediaQuery.matches) {
      window.addEventListener('mousemove', updateMousePosition, { passive: true });
      animationFrameId = requestAnimationFrame(updateDOMElements);
    }

    // Handle window resize / device orientation changes
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        animationFrameId = requestAnimationFrame(updateDOMElements);
      } else {
        window.removeEventListener('mousemove', updateMousePosition);
        cancelAnimationFrame(animationFrameId);
      }
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @media (min-width: 768px) {
            body * {
              cursor: none !important;
            }
          }
        `}
      </style>
      <div
        ref={haloRef}
        className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
        style={{ mixBlendMode: 'multiply' }}
      />
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[10000] hidden md:block"
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: 'rgb(50, 27, 5)',
          borderRadius: '50%',
          position: 'fixed',
          mixBlendMode: 'normal',
          boxShadow: '0 0 10px rgba(255, 172, 89, 0.3)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

export default MouseHalo; 