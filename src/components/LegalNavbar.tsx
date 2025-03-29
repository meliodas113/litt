
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
    <nav 
      className={`bg-black/95 backdrop-blur-md border-b border-white/5 shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative p-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300">
            <Scale className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-all duration-300" />
            <div className="absolute inset-0 bg-purple-500/30 rounded-full animate-pulse opacity-70"></div>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-purple-400 transition-all duration-300">
            Litt
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/90 hover:text-white font-medium transition-colors duration-200">
            Home
          </Link>
          <Link to="/about" className="text-white/90 hover:text-white font-medium transition-colors duration-200">
            About Us
          </Link>
          <Link to="/features" className="text-white/90 hover:text-white font-medium transition-colors duration-200">
            Features
          </Link>
          <Link to="/blog" className="text-white/90 hover:text-white font-medium transition-colors duration-200">
            Blog
          </Link>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/chat">
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2 bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chat</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2 bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 p-2"
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button className="hidden md:flex bg-white hover:bg-white/90 text-black font-medium transition-all duration-300">
              Contact us
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white hover:text-purple-300 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/5 shadow-sm">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-white/90 hover:text-white font-medium py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-white/90 hover:text-white font-medium py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/features" 
              className="block text-white/90 hover:text-white font-medium py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/blog" 
              className="block text-white/90 hover:text-white font-medium py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block bg-purple-500/20 text-white py-2 rounded-md text-center hover:bg-purple-500/30 transition-all duration-300"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LegalNavbar;
