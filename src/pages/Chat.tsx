
import React from "react";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import ChatInterface from "@/components/ChatInterface";

const Chat = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LegalNavbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="bg-card shadow-lg rounded-lg overflow-hidden border">
          <div className="p-4 bg-primary text-primary-foreground">
            <h1 className="text-xl font-bold">Legal Consultation</h1>
            <p className="text-sm opacity-90">
              Ask questions about Indian law and legal precedents
            </p>
          </div>
          <ChatInterface />
        </div>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Chat;
