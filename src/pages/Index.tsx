
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { MessageSquare, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <LegalNavbar />
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="md:w-1/2 pt-20 md:pt-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                LEGAL <span className="text-accent">ADVICE</span> WITHOUT BORDERS
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-xl">
                Your AI legal assistant for navigating Indian law with confidence and clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/chat">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium px-8 py-6 flex items-center gap-2 hover:translate-y-[-2px] transition-all duration-300">
                    <MessageSquare className="h-5 w-5" />
                    Start Consultation
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full font-medium px-8 py-6 flex items-center hover:translate-y-[-2px] transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-2xl opacity-30"></div>
                <img 
                  src="/lovable-uploads/5884a554-59b4-4829-9771-24c0720d4a38.png" 
                  alt="Legal Scales" 
                  className="relative w-full max-w-lg object-cover z-10"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Index;
