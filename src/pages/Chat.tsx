
import React, { useEffect } from "react";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import ChatInterface from "@/components/ChatInterface";
import ApiKeyInput from "@/components/ApiKeyInput";
import { useTheme } from "next-themes";

const Chat = () => {
  const { setTheme } = useTheme();
  
  useEffect(() => {
    // Set dark theme on component mount
    setTheme("dark");
  }, [setTheme]);

  return (
    <div className="flex flex-col min-h-screen">
      <LegalNavbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="bg-card shadow-lg rounded-lg overflow-hidden border border-border animate-fade-in">
          <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
            <div className="animate-slide-in-right">
              <h1 className="text-xl font-bold">AI Legal Consultation</h1>
              <p className="text-sm opacity-90">
                Powered by Google Gemini AI - Ask Litt about Indian law and get real-time legal analysis
              </p>
            </div>
            <ApiKeyInput />
          </div>
          <ChatInterface />
        </div>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Chat;
