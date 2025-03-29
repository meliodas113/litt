
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal, Loader2, Scale } from "lucide-react";
import ChatMessage, { MessageType } from "./ChatMessage";
import { generateLegalResponse } from "@/utils/geminiClient";
import { useToast } from "@/components/ui/use-toast";
import { ApiChatMessage } from "@/utils/types/chatTypes";

const INITIAL_MESSAGES: MessageType[] = [
  {
    id: "welcome",
    content: "Hello! I'm Litt, your AI legal assistant specialized in Indian law. Ask me any legal question, and I'll analyze relevant constitutional provisions, statutes, and case precedents to provide informed guidance. You can also ask follow-up questions to explore specific aspects in more detail.",
    sender: "ai",
    timestamp: new Date(),
  },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<MessageType[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [conversationHistory, setConversationHistory] = useState<ApiChatMessage[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    // Add user message to UI messages
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    // Add user message to conversation history for the API
    const apiUserMessage: ApiChatMessage = { role: "user", content: input };
    const updatedHistory = [...conversationHistory, apiUserMessage];
    setConversationHistory(updatedHistory);
    
    setInput("");
    setIsLoading(true);

    try {
      // Pass the entire conversation history to generate a more contextual response
      const response = await generateLegalResponse(input, updatedHistory);
      
      const aiMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "ai",
        timestamp: new Date(),
      };

      // Add AI response to UI messages
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      
      // Add AI response to conversation history for future context
      const apiAiMessage: ApiChatMessage = { role: "assistant", content: response };
      setConversationHistory([...updatedHistory, apiAiMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      toast({
        title: "Error",
        description: "Failed to generate a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] bg-background">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4 animate-pulse">
            <div className="bg-secondary text-secondary-foreground rounded-lg p-4 max-w-[80%] md:max-w-[70%] flex items-center shadow-md">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-spin">
                  <Scale className="h-5 w-5 text-accent-foreground" />
                </div>
              </div>
              <span className="animate-pulse">Litt is analyzing legal documents and precedents...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4 bg-card animate-fade-in">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Litt about Indian law or follow up on previous answers..."
            className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-accent"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()} 
            className="transition-all duration-300 hover:scale-105"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <SendHorizonal className="h-5 w-5" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
