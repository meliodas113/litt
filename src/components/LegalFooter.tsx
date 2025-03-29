
import React from "react";
import { Scale } from "lucide-react";

const LegalFooter = () => {
  return (
    <footer className="bg-card/90 backdrop-blur-md border-t border-border/40 py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0 group">
            <div className="relative p-1.5 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
              <Scale className="h-5 w-5 text-accent group-hover:scale-110 transition-all duration-300" />
            </div>
            <span className="font-semibold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Litt
            </span>
          </div>
          <div className="text-sm text-muted-foreground max-w-md text-center md:text-right">
            <p className="glass-morphism p-3 rounded-lg">
              Disclaimer: This AI provides information for educational purposes only and does not
              constitute legal advice.
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Litt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
