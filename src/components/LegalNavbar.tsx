
import React from "react";
import { Link } from "react-router-dom";
import { Scales, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNavbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Scales className="h-6 w-6 text-accent" />
          <span className="font-bold text-xl">LegalLogic</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/chat">
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-primary/90">
              <MessageSquare className="h-5 w-5" />
              <span>Chat</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LegalNavbar;
