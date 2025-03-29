
// Common types used across the legal assistant features

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ApiChatMessage = {
  role: "user" | "assistant";
  content: string;
};
