import { ApiChatMessage } from "./types/chatTypes";

// Get API key from localStorage if available
const getApiKey = () => localStorage.getItem("gemini_api_key") || "YOUR_GEMINI_API_KEY";
// Updated API URL to use the correct endpoint
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent";

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
    const apiKey = getApiKey();
    
    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
      return "Please set your Gemini API key in the settings to continue.";
    }
    
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
    
    // Create a consolidated conversation for the request
    const contents = [systemMessage];
    
    // Add user query as the latest message
    if (conversationHistory.length === 0) {
      // If no history, just add the current query
      contents.push({
        role: "user",
        parts: [{ text: query }]
      });
    } else {
      // Otherwise, use the formatted conversation history
      contents.push(...formattedMessages);
    }
    
    // Prepare the request body
    const requestBody: GeminiRequestBody = {
      contents: contents,
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
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
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
