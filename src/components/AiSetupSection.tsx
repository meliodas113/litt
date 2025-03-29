
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, ExternalLink, Code, Bot, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ApiKeyGuide from "./ApiKeyGuide";

const AiSetupSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden z-10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="relative grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] opacity-10">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="aspect-square border-t border-l border-white/5"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent scroll-animation-item animate-slide-up">
            Setup Your AI Legal Assistant
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto scroll-animation-item animate-slide-up" style={{animationDelay: "0.1s"}}>
            Get started with Litt in three simple steps and unlock the power of AI-driven legal assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side: Setup steps */}
          <div className="space-y-6 scroll-animation-item animate-slide-right" style={{animationDelay: "0.2s"}}>
            <div className="space-y-6">
              <div className="rounded-lg p-4 bg-background/40 border border-border/30 relative overflow-hidden transition-all duration-300 hover:bg-background/60 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                  Create a Google AI Studio account
                </h3>
                <p className="text-muted-foreground mb-4">
                  Visit Google AI Studio and sign in with your Google account to access Gemini API.
                </p>
                <a 
                  href="https://ai.google.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit Google AI Studio</span>
                </a>
              </div>

              <div className="rounded-lg p-4 bg-background/40 border border-border/30 relative overflow-hidden transition-all duration-300 hover:bg-background/60 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                  Generate an API Key
                </h3>
                <p className="text-muted-foreground mb-4">
                  Navigate to the API keys section in Google AI Studio and create a new API key for your project.
                </p>
                <a 
                  href="https://ai.google.dev/tutorials/setup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View API key instructions</span>
                </a>
              </div>

              <div className="rounded-lg p-4 bg-background/40 border border-border/30 relative overflow-hidden transition-all duration-300 hover:bg-background/60 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                  Add the API Key to Litt
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enter your API key in the settings of our chat interface to start using the AI legal assistant.
                </p>
                <Link to="/chat">
                  <Button variant="outline" className="border-primary/30 hover:border-primary/60 text-white flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    <span>Configure API Key</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link to="/chat">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium px-8 py-6 flex items-center gap-2 hover:translate-y-[-2px] transition-all duration-300 interactive-glow">
                  <Bot className="h-5 w-5" />
                  Start Using Your Assistant
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right side: API key card with floating effect */}
          <div className="relative perspective-container scroll-animation-item animate-slide-left" style={{animationDelay: "0.3s"}}>
            <div className="absolute -top-20 -left-16 w-10 h-10 opacity-40 animate-float" style={{animationDelay: "0.2s", animationDuration: "9s"}}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/50 to-primary/10"></div>
            </div>
            <div className="absolute -top-10 right-10 w-8 h-8 opacity-40 animate-float" style={{animationDelay: "1.5s", animationDuration: "8s"}}>
              <div className="w-full h-full backdrop-blur-sm rounded-lg bg-gradient-to-tr from-primary/40 to-transparent"></div>
            </div>
            
            <div className="card-3d relative transform-3d">
              <ApiKeyGuide />
            </div>
            
            <div className="absolute -bottom-10 right-0 w-12 h-12 opacity-40 animate-float" style={{animationDelay: "0.8s", animationDuration: "7s"}}>
              <div className="w-full h-full rounded-full border border-primary/30 backdrop-blur-sm"></div>
            </div>
            <div className="absolute bottom-20 -left-10 w-16 h-16 opacity-30 animate-float" style={{animationDelay: "1.2s", animationDuration: "10s"}}>
              <Sparkles className="w-full h-full text-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSetupSection;
