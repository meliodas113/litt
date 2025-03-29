
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import ApiKeyGuide from "@/components/ApiKeyGuide";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Scale, MessageSquare, BookOpen, Gavel, Shield, Database, FileText, Search, ExternalLink, ArrowRight, ZapIcon, Mail, Globe, ChevronDown } from "lucide-react";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Ref for scroll indicator
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  // Generate background grid lines
  const generateGridLines = () => {
    const horizontalLines = [];
    const verticalLines = [];
    
    for (let i = 1; i <= 10; i++) {
      horizontalLines.push(
        <div 
          key={`h-${i}`} 
          className="grid-line grid-line-h" 
          style={{ 
            top: `${i * 10}%`, 
            animationDelay: `${i * 0.1}s` 
          }} 
        />
      );
      
      verticalLines.push(
        <div 
          key={`v-${i}`} 
          className="grid-line grid-line-v" 
          style={{ 
            left: `${i * 10}%`, 
            animationDelay: `${i * 0.1}s` 
          }} 
        />
      );
    }
    
    return [...horizontalLines, ...verticalLines];
  };
  
  // Generate floating particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push(
        <div 
          key={`particle-${i}`} 
          className="particle" 
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            opacity: Math.random() * 0.5,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }} 
        />
      );
    }
    return particles;
  };
  
  // Handle scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        if (window.scrollY > 100) {
          scrollIndicatorRef.current.classList.add('opacity-0');
        } else {
          scrollIndicatorRef.current.classList.remove('opacity-0');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <LegalNavbar />
      <main className="flex-1 relative">
        {/* Hero Section with 3D effects */}
        <section className="hero-pattern py-24 md:py-32 relative perspective-container">
          {/* Background Grid */}
          <div className="background-grid">
            {generateGridLines()}
          </div>
          
          {/* Floating Particles */}
          <div className="particles">
            {generateParticles()}
          </div>
          
          <div className="container mx-auto px-6 text-center hero-content relative">
            <div className="scroll-animation-item animate-slide-up transform-3d depth-1">
              <div className="relative p-3 bg-accent/10 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-6 floating">
                <Scale className="h-12 w-12 text-accent" />
                <div className="absolute inset-0 bg-accent/20 rounded-lg animate-pulse opacity-70"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white scroll-animation-item animate-zoom-in transform-3d depth-2" style={{animationDelay: "0.2s"}}>
              LEGAL <span className="text-accent">ADVICE</span> WITHOUT BORDERS
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 font-light scroll-animation-item animate-slide-up transform-3d depth-1" style={{animationDelay: "0.4s"}}>
              Your AI legal assistant for navigating Indian law with confidence
            </p>
            
            <Link to="/chat" className="scroll-animation-item animate-zoom-in transform-3d depth-3" style={{animationDelay: "0.6s"}}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full font-medium hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            {/* Scroll indicator */}
            <div 
              ref={scrollIndicatorRef}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500"
            >
              <p className="text-white/70 mb-2 text-sm">Scroll to explore</p>
              <ChevronDown className="text-white/70 animate-bounce h-6 w-6" />
            </div>
          </div>
          
          {/* Floating 3D elements */}
          <div className="absolute -right-20 top-1/4 opacity-20 parallax-element" data-speed="-0.2">
            <div className="text-accent h-40 w-40 rotate-on-scroll" data-rotate-speed="0.03">
              <Gavel className="h-full w-full" />
            </div>
          </div>
          
          <div className="absolute -left-10 bottom-1/4 opacity-20 parallax-element" data-speed="0.1">
            <div className="text-primary h-32 w-32 rotate-on-scroll" data-rotate-speed="-0.02">
              <BookOpen className="h-full w-full" />
            </div>
          </div>
        </section>

        {/* About Section with 3D cards */}
        <section className="py-20 bg-card/40 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 -right-48 parallax-element" data-speed="0.05"></div>
          <div className="absolute w-80 h-80 rounded-full bg-accent/5 blur-3xl -bottom-40 -left-40 parallax-element" data-speed="-0.05"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animation-item animate-slide-up">Bridging the Gap in Legal Understanding</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
                Litt provides instant access to information about Indian law, making legal knowledge accessible to everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-md text-center border border-border/30 scroll-animation-item animate-slide-up card-3d perspective-container transform-3d" style={{animationDelay: "0.2s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 transform-3d depth-1">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 transform-3d depth-1">Constitution Analysis</h3>
                <p className="text-muted-foreground transform-3d">
                  Get insights based on the Indian Constitution and its articles
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center border border-border/30 scroll-animation-item animate-slide-up card-3d perspective-container transform-3d" style={{animationDelay: "0.3s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 transform-3d depth-1">
                  <Gavel className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 transform-3d depth-1">Legal Precedents</h3>
                <p className="text-muted-foreground transform-3d">
                  Access information from previous Supreme Court verdicts and cases
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center border border-border/30 scroll-animation-item animate-slide-up card-3d perspective-container transform-3d" style={{animationDelay: "0.4s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 transform-3d depth-1">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 transform-3d depth-1">Privacy First</h3>
                <p className="text-muted-foreground transform-3d">
                  Your queries and information are kept private and secure
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center border border-border/30 scroll-animation-item animate-slide-up card-3d perspective-container transform-3d" style={{animationDelay: "0.5s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 transform-3d depth-1">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 transform-3d depth-1">Data-Driven Insights</h3>
                <p className="text-muted-foreground transform-3d">
                  Powered by Google's advanced Gemini AI model for accurate information
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center border border-border/30 scroll-animation-item animate-slide-up card-3d perspective-container transform-3d" style={{animationDelay: "0.6s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 transform-3d depth-1">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 transform-3d depth-1">Document Assistance</h3>
                <p className="text-muted-foreground transform-3d">
                  Get guidance on legal documents and paperwork
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center border border-border/30 scroll-animation-item animate-slide-up card-3d perspective-container transform-3d" style={{animationDelay: "0.7s"}}>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 transform-3d depth-1">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 transform-3d depth-1">Legal Research</h3>
                <p className="text-muted-foreground transform-3d">
                  Find relevant laws and regulations for your specific situation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Key Setup Section with 3D effects */}
        <section className="py-20 bg-background relative overflow-hidden perspective-container">
          {/* 3D background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-64 h-64 rounded-full bg-accent/10 blur-3xl top-20 right-[30%] parallax-element" data-speed="0.03"></div>
            <div className="absolute w-48 h-48 rounded-full bg-primary/10 blur-3xl bottom-10 left-[20%] parallax-element" data-speed="-0.02"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animation-item animate-slide-up">Get Started with Litt</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
                Litt uses the Google Gemini API to power its legal assistance. Follow these simple steps to set up your API key.
              </p>
            </div>
            
            <div className="scroll-animation-item animate-zoom-in transform-3d depth-1" style={{animationDelay: "0.2s"}}>
              <div className="glass-morphism p-6 rounded-xl shadow-lg">
                <ApiKeyGuide />
              </div>
            </div>
            
            {/* Extra API setup steps */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border/30 scroll-animation-item animate-slide-left card-3d" style={{animationDelay: "0.3s"}}>
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">1. Create Account</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Visit Google AI Studio at ai.google.dev and create an account if you don't already have one.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/30 scroll-animation-item animate-slide-up card-3d" style={{animationDelay: "0.4s"}}>
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">2. Generate API Key</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Navigate to the API Keys section in Google AI Studio and generate your personal Gemini API key.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/30 scroll-animation-item animate-slide-right card-3d" style={{animationDelay: "0.5s"}}>
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <ZapIcon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">3. Activate Litt</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Enter your API key in Litt's settings panel and start exploring Indian legal information instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section with dynamic grid */}
        <section className="py-20 bg-card/40 relative overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute h-[150%] w-[150%] -left-[25%] -top-[25%] bg-[radial-gradient(circle,_transparent_20%,_#ffffff_20%,_#ffffff_80%,_transparent_80%,_transparent),_radial-gradient(circle,_transparent_20%,_#ffffff_20%,_#ffffff_80%,_transparent_80%,_transparent)_25px_25px] bg-[length:50px_50px] parallax-element rotate-on-scroll" data-speed="0.01" data-rotate-speed="0.005"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animation-item animate-slide-up">How Litt Can Help You</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
                Explore various legal scenarios where Litt provides valuable assistance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border/30 rounded-xl overflow-hidden shadow-lg scroll-animation-item animate-slide-left transform-3d perspective-container" style={{animationDelay: "0.2s"}}>
                <div className="p-6 glass-card relative transform-3d">
                  <h3 className="text-xl font-semibold mb-3 gradient-text depth-1">For Individuals</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.1s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Understand your rights in consumer disputes</span>
                    </li>
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.2s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Learn about property laws and tenancy regulations</span>
                    </li>
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.3s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Get information on family law matters</span>
                    </li>
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.4s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Explore employment rights and workplace regulations</span>
                    </li>
                  </ul>
                  
                  {/* 3D decorative element */}
                  <div className="absolute -right-10 -bottom-10 opacity-10 rotate-on-scroll" data-rotate-speed="0.02">
                    <Shield className="h-32 w-32 text-accent" />
                  </div>
                </div>
              </div>
              
              <div className="bg-background border border-border/30 rounded-xl overflow-hidden shadow-lg scroll-animation-item animate-slide-right transform-3d perspective-container" style={{animationDelay: "0.3s"}}>
                <div className="p-6 glass-card relative transform-3d">
                  <h3 className="text-xl font-semibold mb-3 gradient-text depth-1">For Businesses</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.1s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Navigate company registration requirements</span>
                    </li>
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.2s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Understand compliance and regulatory frameworks</span>
                    </li>
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.3s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Learn about intellectual property protections</span>
                    </li>
                    <li className="flex items-start depth-2" style={{transitionDelay: "0.4s"}}>
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 mr-2" />
                      <span>Get insights on contract law and business agreements</span>
                    </li>
                  </ul>
                  
                  {/* 3D decorative element */}
                  <div className="absolute -right-10 -bottom-10 opacity-10 rotate-on-scroll" data-rotate-speed="-0.02">
                    <FileText className="h-32 w-32 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section with glassmorphism */}
        <section className="py-12 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-2xl font-bold mb-4 scroll-animation-item animate-fade-in">Important Disclaimer</h2>
            <div className="max-w-3xl mx-auto text-secondary-foreground glass-morphism p-6 rounded-lg scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
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

        {/* CTA Section with 3D elements and particles */}
        <section className="py-20 bg-background relative overflow-hidden perspective-container">
          {/* Floating particles */}
          <div className="particles">
            {generateParticles()}
          </div>
          
          {/* 3D decorative elements */}
          <div className="absolute top-20 left-10 text-primary/10 parallax-element" data-speed="-0.1">
            <Scale className="h-40 w-40 rotate-on-scroll" data-rotate-speed="0.02" />
          </div>
          
          <div className="absolute bottom-10 right-10 text-accent/10 parallax-element" data-speed="0.15">
            <MessageSquare className="h-32 w-32 rotate-on-scroll" data-rotate-speed="-0.03" />
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animation-item animate-zoom-in transform-3d depth-1">Ready to Get Started?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground scroll-animation-item animate-zoom-in transform-3d depth-1" style={{animationDelay: "0.1s"}}>
              Ask your legal questions and get insights based on Indian law
            </p>
            <Link to="/chat" className="scroll-animation-item animate-zoom-in transform-3d depth-3" style={{animationDelay: "0.2s"}}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
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
