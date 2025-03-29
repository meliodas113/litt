
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Scale, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-3 transition-all duration-500 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto">
        <div className="flex justify-between items-center py-3 px-3 sm:px-6 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative p-1.5 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
              <Scale className="h-5 w-5 text-primary-500 group-hover:scale-110 transition-all duration-300" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-primary-400 transition-all duration-300">
              Litt
            </span>
          </Link>
          
          {/* Chat Button */}
          <div className="flex items-center">
            <Link to="/chat">
              <Button 
                variant="outline" 
                className="bg-primary/10 text-white border-primary/30 hover:bg-primary/30 hover:border-primary/40 hover:scale-105 transition-all duration-300 text-sm rounded-full px-3 sm:px-5"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>Chat Now</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LegalNavbar;
