
import React from "react";
import { cn } from "@/lib/utils";
import { Scale, User } from "lucide-react";

export type MessageType = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.sender === "ai";

  return (
    <div
      className={cn(
        "flex w-full mb-4 transition-all duration-300",
        isAI ? "justify-start animate-fade-in" : "justify-end animate-scale-in"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%] md:max-w-[70%] rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg",
          isAI
            ? "bg-secondary/80 backdrop-blur-sm text-secondary-foreground border border-border/20"
            : "bg-primary/90 backdrop-blur-sm text-primary-foreground border border-primary/20"
        )}
      >
        <div className="flex-shrink-0 mr-3">
          {isAI ? (
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 relative group">
              <Scale className="h-5 w-5 text-accent z-10 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-accent/30 rounded-full animate-pulse opacity-70"></div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <User className="h-5 w-5 text-primary-foreground" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className={cn(
              "font-medium",
              isAI && "bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent"
            )}>
              {isAI ? "Litt" : "You"}
            </span>
            <span className="text-xs opacity-70">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
          {isAI ? (
            <div 
              className="prose prose-sm dark:prose-invert max-w-none prose-headings:mb-2 prose-p:my-1 whitespace-pre-wrap" 
              dangerouslySetInnerHTML={{ __html: message.content }}
            />
          ) : (
            <p className="whitespace-pre-wrap">{message.content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
