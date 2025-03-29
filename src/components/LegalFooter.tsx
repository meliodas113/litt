
import React from "react";
import { Scale } from "lucide-react";

const LegalFooter = () => {
  return (
    <footer className="bg-black/70 backdrop-blur-md border-t border-white/10 py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0 group">
            <div className="relative p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
              <Scale className="h-5 w-5 text-primary group-hover:scale-110 transition-all duration-300" />
            </div>
            <span className="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Litt
            </span>
          </div>
          <div className="text-sm text-gray-400">
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} Litt. This AI provides information for educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
