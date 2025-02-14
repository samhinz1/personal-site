import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'bio' },
    { name: 'History', to: 'timeline' },
    { name: 'Projects', to: 'case-studies' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dutch-white/60 backdrop-blur-sm shadow-lg' : 'bg-dutch-white/30 backdrop-blur-[2px]'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center relative">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-40">
            {menuItems.map((item) => (
              <button
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="text-rich-black hover:text-tomato cursor-pointer transition-all duration-300 text-lg hover:scale-110 transform font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute top-2 right-0 text-rich-black hover:text-tomato transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute mt-8 top-full left-0 right-0 bg-white/70 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col items-center space-y-4 px-6 py-4">
              {menuItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className="text-rich-black hover:text-tomato cursor-pointer transition-all duration-300 text-lg hover:scale-110 transform font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;