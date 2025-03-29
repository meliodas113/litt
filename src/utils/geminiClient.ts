
import { ApiChatMessage } from "./types/chatTypes";

// API key would ideally be stored in environment variables on the server side
// For demo purposes using a public client-side implementation
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

interface GeminiRequestContent {
  role: string;
  parts: {
    text: string;
  }[];
}

interface GeminiRequestBody {
  contents: GeminiRequestContent[];
  generationConfig: {
    temperature: number;
    topP: number;
    topK: number;
    maxOutputTokens: number;
  };
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

/**
 * Converts our app's message format to Gemini's expected format
 */
function formatMessagesForGemini(messages: ApiChatMessage[]): GeminiRequestContent[] {
  return messages.map(message => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }]
  }));
}

/**
 * Generates a legal response using Google's Gemini API
 */
export async function generateLegalResponse(
  query: string,
  conversationHistory: ApiChatMessage[] = []
): Promise<string> {
  try {
    // Add a system message to guide Gemini to provide legal advice
    const systemMessage: GeminiRequestContent = {
      role: "user",
      parts: [
        { 
          text: "You are an AI legal assistant specialized in Indian law. Provide helpful, accurate, and ethical legal information based on Indian constitutional provisions, statutes, and case precedents. Always clarify that you're providing general information, not legal advice, and recommend consulting a qualified legal professional for specific situations. Cite relevant laws and cases when possible." 
        }
      ]
    };
    
    // Format conversation history for Gemini
    const formattedMessages = formatMessagesForGemini(conversationHistory);
    
    // Prepare the request body
    const requestBody: GeminiRequestBody = {
      contents: [systemMessage, ...formattedMessages],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048
      }
    };

    // For demo/development purposes, log what we're sending to the API
    console.log("Sending to Gemini API:", JSON.stringify(requestBody, null, 2));
    
    // Make API request to Gemini
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
    }

    const responseData: GeminiResponse = await response.json();
    
    // Extract the generated text from the response
    const generatedText = responseData.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I apologize, but I couldn't generate a response at this time. Please try again later.";
    
    return generatedText;
  } catch (error) {
    console.error("Error generating response with Gemini:", error);
    return "I'm sorry, there was an error generating a legal response. Please try again later.";
  }
}
