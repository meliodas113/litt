
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { Scales, MessageSquare, BookOpen, Gavel, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LegalNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-6 text-center">
            <Scales className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LegalLogic</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your AI legal assistant for navigating Indian law with confidence
            </p>
            <Link to="/chat">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How LegalLogic Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-md text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Constitution Analysis</h3>
                <p className="text-muted-foreground">
                  Get insights based on the Indian Constitution and its articles
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md text-center">
                <Gavel className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Legal Precedents</h3>
                <p className="text-muted-foreground">
                  Access information from previous Supreme Court verdicts and cases
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your queries and information are kept private and secure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Important Disclaimer</h2>
            <p className="max-w-3xl mx-auto text-secondary-foreground">
              LegalLogic provides information for educational purposes only. 
              The responses should not be considered legal advice. 
              Always consult with a qualified legal professional for specific legal matters.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ask your legal questions and get insights based on Indian law
            </p>
            <Link to="/chat">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Index;
