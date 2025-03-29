
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
          
          {/* Action Buttons - Removed Desktop Navigation Links */}
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

            {/* Mobile Menu Toggle - Removed as no longer needed without links */}
          </div>
        </div>

        {/* Mobile Menu - Removed as no longer needed without links */}
      </nav>
    </div>
  );
};

export default LegalNavbar;
