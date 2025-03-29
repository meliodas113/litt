
import React from "react";
import { Link } from "react-router-dom";
import { Scale, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNavbar = () => {
  return (
    <nav className="bg-card/90 backdrop-blur-md border-b border-border/40 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative p-1.5 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
            <Scale className="h-6 w-6 text-accent group-hover:scale-110 transition-all duration-300" />
            <div className="absolute inset-0 bg-accent/20 rounded-lg animate-pulse opacity-70"></div>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent group-hover:from-accent/90 group-hover:to-accent transition-all duration-300">
            Litt
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/chat">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 hover:bg-primary/10 transition-all duration-300"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chat</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LegalNavbar;
