import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MouseHalo: React.FC = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const haloRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    animationFrameId = requestAnimationFrame(updateDOMElements);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body * {
            cursor: none !important;
          }
        `}
      </style>
      <div
        ref={haloRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{ mixBlendMode: 'multiply' }}
      />
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[10000]"
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