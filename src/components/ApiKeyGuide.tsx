
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Key, ExternalLink, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const ApiKeyGuide = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Card className="bg-card/80 backdrop-blur-lg border-border/30 shadow-xl overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2 mb-2">
            <Key className="h-5 w-5 text-accent" />
            <CardTitle className="text-2xl font-bold">Gemini API Setup Guide</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground text-base">
            Follow these steps to get your Google Gemini API key and start using Litt
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {/* Removed scroll-animation-item classes and animation delays */}
            <div className="rounded-lg p-4 bg-background/40 border border-border/30">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                Create a Google AI Studio account
              </h3>
              <p className="text-muted-foreground mb-2">
                Visit Google AI Studio and sign in with your Google account to get started.
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

            <div className="rounded-lg p-4 bg-background/40 border border-border/30">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                Generate an API key
              </h3>
              <p className="text-muted-foreground mb-2">
                Go to the API keys section and click "Create API Key" to generate your personal key.
              </p>
              <a 
                href="https://ai.google.dev/tutorials/setup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View detailed instructions</span>
              </a>
            </div>

            <div className="rounded-lg p-4 bg-background/40 border border-border/30">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                Configure Litt with your API key
              </h3>
              <p className="text-muted-foreground mb-2">
                Click the settings icon in the top right corner of Litt's chat interface to enter your API key.
                Your key is stored securely in your browser's local storage and never transmitted to our servers.
              </p>
              <div className="mt-4 p-3 bg-muted/50 rounded text-xs font-mono relative overflow-hidden">
                <code className="text-foreground/90">
                  localStorage.setItem("gemini_api_key", "YOUR_API_KEY_HERE");
                </code>
                <button 
                  onClick={() => copyToClipboard('localStorage.setItem("gemini_api_key", "YOUR_API_KEY_HERE");')}
                  className="absolute right-1 top-1 p-1 hover:bg-background/80 rounded-sm transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-card/30 border-t border-border/20 p-4">
          <p className="text-sm text-muted-foreground">
            For further assistance, refer to the <a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Gemini API documentation</a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ApiKeyGuide;
