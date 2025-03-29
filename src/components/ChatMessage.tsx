
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
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <div className="flex-shrink-0 mr-3">
          {isAI ? (
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <Scale className="h-5 w-5 text-accent-foreground" />
            </div>
          ) : (
            <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <User className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="font-medium">
              {isAI ? "Litt" : "You"}
            </span>
            <span className="text-xs opacity-70">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
