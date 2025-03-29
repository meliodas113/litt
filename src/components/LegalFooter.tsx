
import React from "react";
import { Scale } from "lucide-react";

const LegalFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Scale className="h-5 w-5 text-accent" />
            <span className="font-semibold">Litt</span>
          </div>
          <div className="text-sm text-primary-foreground/80">
            <p>
              Disclaimer: This AI provides information for educational purposes only and does not
              constitute legal advice.
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Litt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
