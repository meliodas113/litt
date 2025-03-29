
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Scale, MessageSquare, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-500 ${isScrolled ? 'bg-transparent' : 'bg-transparent'}`}>
      <nav 
        className={`${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md translate-y-0 shadow-lg' 
            : 'bg-transparent translate-y-2'
        } rounded-xl mx-auto max-w-7xl transition-all duration-500 ease-in-out`}
      >
        <div className="container mx-auto flex justify-between items-center py-3 px-6 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative p-1.5 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
              <Scale className="h-6 w-6 text-primary-500 group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse opacity-70"></div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-primary-400 transition-all duration-300">
              Litt
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-400' : 'text-gray-300'} text-sm font-light hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}>
              Home
            </Link>
            <Link to="/about" className={`${isScrolled ? 'text-gray-400' : 'text-gray-300'} text-sm font-light hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}>
              About Us
            </Link>
            <Link to="/features" className={`${isScrolled ? 'text-gray-400' : 'text-gray-300'} text-sm font-light hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}>
              Features
            </Link>
            <Link to="/blog" className={`${isScrolled ? 'text-gray-400' : 'text-gray-300'} text-sm font-light hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}>
              Blog
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/chat">
              <Button 
                variant="outline" 
                className={`hidden md:flex items-center gap-2 ${
                  isScrolled 
                    ? 'bg-primary/20 text-white border-primary/30 hover:bg-primary/30 hover:border-primary/40 hover:scale-105' 
                    : 'bg-primary/20 text-white border-primary/30 hover:bg-primary/30 hover:border-primary/40 hover:scale-105'
                } transition-all duration-300 text-sm rounded-full px-5`}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat Now</span>
              </Button>
              
              <Button 
                variant="outline" 
                className={`md:hidden flex items-center gap-2 p-2 ${
                  isScrolled 
                    ? 'bg-primary/20 text-white border-primary/30 hover:bg-primary/30 hover:border-primary/40' 
                    : 'bg-primary/20 text-white border-primary/30 hover:bg-primary/30 hover:border-primary/40'
                } transition-all duration-300 rounded-full`}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-white hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 w-full rounded-b-xl overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[500px] opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4'
          }`}
        >
          <div className={`${isScrolled ? 'bg-black/95' : 'bg-black/80'} backdrop-blur-md px-6 py-4 space-y-4`}>
            <Link 
              to="/" 
              className="block text-gray-400 hover:text-white text-sm font-light py-2 border-b border-white/10 transition-all duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-400 hover:text-white text-sm font-light py-2 border-b border-white/10 transition-all duration-200"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/features" 
              className="block text-gray-400 hover:text-white text-sm font-light py-2 border-b border-white/10 transition-all duration-200"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/blog" 
              className="block text-gray-400 hover:text-white text-sm font-light py-2 border-b border-white/10 transition-all duration-200"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/chat" 
              className="block bg-primary/20 text-white py-2 rounded-full text-center hover:bg-primary/30 transition-all duration-300"
              onClick={toggleMenu}
            >
              Chat Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LegalNavbar;
