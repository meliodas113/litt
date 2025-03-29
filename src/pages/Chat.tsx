
import React, { useEffect } from "react";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import ChatInterface from "@/components/ChatInterface";
import ApiKeyInput from "@/components/ApiKeyInput";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";

const Chat = () => {
  const { setTheme } = useTheme();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set dark theme on component mount
    setTheme("dark");
  }, [setTheme]);

  return (
    <div className="flex flex-col min-h-screen">
      <LegalNavbar />
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-3 sm:py-6">
        <div className="bg-card shadow-lg rounded-lg overflow-hidden border border-border animate-fade-in">
          <div className="p-3 sm:p-4 bg-primary text-primary-foreground flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="animate-slide-in-right">
              <h1 className="text-lg sm:text-xl font-bold">AI Legal Consultation</h1>
              <p className="text-xs sm:text-sm opacity-90">
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
