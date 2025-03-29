
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import ApiKeyGuide from "@/components/ApiKeyGuide";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Scale, MessageSquare, BookOpen, Gavel, Shield, Database, FileText, Search, ExternalLink, ArrowRight } from "lucide-react";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LegalNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-pattern py-24 md:py-32 relative">
          <div className="container mx-auto px-6 text-center hero-content">
            <div className="relative p-3 bg-accent/10 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Scale className="h-12 w-12 text-accent" />
              <div className="absolute inset-0 bg-accent/20 rounded-lg animate-pulse opacity-70"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
              LEGAL <span className="text-accent">ADVICE</span> WITHOUT BORDERS
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 font-light">
              Your AI legal assistant for navigating Indian law with confidence
            </p>
            <Link to="/chat">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full font-medium">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-card/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animation-item animate-slide-up">Bridging the Gap in Legal Understanding</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
                Litt provides instant access to information about Indian law, making legal knowledge accessible to everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/30 scroll-animation-item animate-slide-up" style={{animationDelay: "0.2s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Constitution Analysis</h3>
                <p className="text-muted-foreground">
                  Get insights based on the Indian Constitution and its articles
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/30 scroll-animation-item animate-slide-up" style={{animationDelay: "0.3s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Legal Precedents</h3>
                <p className="text-muted-foreground">
                  Access information from previous Supreme Court verdicts and cases
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/30 scroll-animation-item animate-slide-up" style={{animationDelay: "0.4s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your queries and information are kept private and secure
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/30 scroll-animation-item animate-slide-up" style={{animationDelay: "0.5s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-muted-foreground">
                  Powered by Google's advanced Gemini AI model for accurate information
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/30 scroll-animation-item animate-slide-up" style={{animationDelay: "0.6s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Assistance</h3>
                <p className="text-muted-foreground">
                  Get guidance on legal documents and paperwork
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/30 scroll-animation-item animate-slide-up" style={{animationDelay: "0.7s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Legal Research</h3>
                <p className="text-muted-foreground">
                  Find relevant laws and regulations for your specific situation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Key Setup Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animation-item animate-slide-up">Get Started with Litt</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
                Litt uses the Google Gemini API to power its legal assistance. Follow these simple steps to set up your API key.
              </p>
            </div>
            
            <div className="scroll-animation-item animate-slide-up" style={{animationDelay: "0.2s"}}>
              <ApiKeyGuide />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-card/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animation-item animate-slide-up">How Litt Can Help You</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
                Explore various legal scenarios where Litt provides valuable assistance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border/30 rounded-xl overflow-hidden shadow-lg scroll-animation-item animate-slide-left" style={{animationDelay: "0.2s"}}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">For Individuals</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Understand your rights in consumer disputes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Learn about property laws and tenancy regulations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Get information on family law matters</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Explore employment rights and workplace regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-background border border-border/30 rounded-xl overflow-hidden shadow-lg scroll-animation-item animate-slide-right" style={{animationDelay: "0.3s"}}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">For Businesses</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Navigate company registration requirements</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Understand compliance and regulatory frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Learn about intellectual property protections</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Get insights on contract law and business agreements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4 animate-fade-in">Important Disclaimer</h2>
            <div className="max-w-3xl mx-auto text-secondary-foreground glass-morphism p-6 rounded-lg">
              <p className="mb-4">
                Litt provides information for educational purposes only. 
                The responses should not be considered legal advice.
              </p>
              <p>
                Always consult with a qualified legal professional for specific legal matters.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animation-item animate-zoom-in">Ready to Get Started?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground scroll-animation-item animate-zoom-in" style={{animationDelay: "0.1s"}}>
              Ask your legal questions and get insights based on Indian law
            </p>
            <Link to="/chat" className="scroll-animation-item animate-zoom-in" style={{animationDelay: "0.2s"}}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-medium">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="mt-8 text-center text-muted-foreground scroll-animation-item animate-zoom-in" style={{animationDelay: "0.3s"}}>
              <p>Need more information?</p>
              <a 
                href="https://developers.generativeai.google/products/gemini" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-primary hover:text-primary/80 mt-2"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn more about Gemini AI technology
              </a>
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Index;
