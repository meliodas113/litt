
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
    <div className="flex flex-col min-h-screen overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll */}
      <LegalNavbar />
      <main className="flex-1 container mx-auto px-2 sm:px-4 pt-20 pb-2 sm:pt-24 sm:pb-6">
        <div className="bg-card shadow-lg rounded-lg overflow-hidden border border-border animate-fade-in">
          <div className="p-2 sm:p-4 bg-primary text-primary-foreground flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="animate-slide-in-right w-full sm:w-auto">
              <h1 className="text-base sm:text-xl font-bold">AI Legal Consultation</h1>
              <p className="text-xs opacity-90">
                Powered by Google Gemini AI - Get real-time legal analysis
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <ApiKeyInput />
            </div>
          </div>
          <ChatInterface />
        </div>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Chat;
