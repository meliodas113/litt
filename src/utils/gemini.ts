// This file simulates a legal AI assistant that would normally query a real LLM API
// In a production environment, this would connect to Google's Gemini API or another LLM

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function generateLegalResponse(
  query: string,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  console.log("Query received:", query);
  console.log("Conversation history:", conversationHistory);

  // Simulate API call delay to make it feel realistic
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real implementation, this would be an API call to an LLM service
  // For this demo, we'll create a more context-aware response based on conversation history
  
  // Get the last few messages to use as context (if any)
  const recentMessages = conversationHistory.slice(-6);
  
  // Current query is already in conversationHistory as the last user message
  
  // Check if this is a follow-up question
  const isFollowUp = conversationHistory.filter(msg => msg.role === "user").length > 1;
  
  // Analyze the query and context to determine the topic
  const queryLower = query.toLowerCase();
  const contextTopics = analyzeConversationContext(recentMessages);
  console.log("Detected context topics:", contextTopics);
  
  // Generate response based on the query and conversation context
  let response = "";
  
  // Handle cryptocurrency-related queries
  if (containsTopic(queryLower, contextTopics, ["crypto", "bitcoin", "cryptocurrency", "digital currency"])) {
    if (queryLower.includes("bill") || queryLower.includes("regulation")) {
      response = "The Cryptocurrency and Regulation of Official Digital Currency Bill was first proposed in 2021 to create a framework for India's official CBDC and regulate private cryptocurrencies. The bill has gone through several revisions and remains unpassed. The latest version reportedly aims to classify crypto assets based on use cases and regulate them accordingly rather than implementing a complete ban. The government continues to consult with industry stakeholders while developing a comprehensive regulatory framework.";
    } 
    else if (queryLower.includes("rbi") || queryLower.includes("reserve bank")) {
      response = "The Reserve Bank of India (RBI) is India's central banking institution, responsible for monetary policy and financial stability. Regarding cryptocurrencies, the RBI has maintained a cautious stance due to concerns about financial stability, money laundering, and consumer protection. In 2018, the RBI banned banks from dealing with crypto businesses, but this was overturned by the Supreme Court in 2020 in the Internet and Mobile Association of India v. RBI case. The RBI continues to express concerns about private cryptocurrencies while developing its own Central Bank Digital Currency (CBDC) called the Digital Rupee (e₹), which launched as a pilot in 2022.";
    }
    else if (queryLower.includes("legal") || queryLower.includes("status")) {
      response = "The legal status of cryptocurrencies in India remains in a gray area. While not explicitly illegal, they lack legal tender status. The Supreme Court's 2020 decision in Internet and Mobile Association of India v. RBI removed banking restrictions, allowing exchanges to operate. However, the government has been working on a regulatory framework through the proposed Cryptocurrency Bill. Currently, crypto activities are regulated through taxation (30% tax on gains and 1% TDS on transfers) and anti-money laundering provisions under PMLA. The government's stance has evolved from considering an outright ban to exploring a regulated approach that balances innovation with financial stability concerns.";
    }
    else if (queryLower.includes("tax") || queryLower.includes("taxation")) {
      response = "Cryptocurrency taxation in India is quite stringent. The Finance Act, 2022 introduced a 30% tax on income from virtual digital assets (VDAs) plus applicable surcharge and cess. No deductions for expenses (except acquisition cost) or set-off of losses are allowed. Additionally, a 1% TDS applies on transfers above specific thresholds under Section 194S of the Income Tax Act. The definition of VDAs under Section 2(47A) includes cryptocurrencies and NFTs. These provisions came into effect from April 1, 2022 (for the 30% tax) and July 1, 2022 (for the 1% TDS), and apply regardless of whether cryptocurrencies are fully regulated in India.";
    }
    else {
      response = "The legal status of cryptocurrencies in India remains in a gray area. The Supreme Court in Internet and Mobile Association of India v. Reserve Bank of India (2020) lifted the RBI's ban on banks dealing with crypto businesses. However, the government has proposed the Cryptocurrency and Regulation of Official Digital Currency Bill, which has gone through multiple iterations but hasn't been passed yet. Currently, cryptocurrencies are not illegal but don't have legal tender status. Crypto income is taxed at a flat 30% rate under the Finance Act, 2022, and transactions are subject to 1% TDS. In March 2023, crypto activities were brought under the Prevention of Money Laundering Act (PMLA), requiring exchanges to implement anti-money laundering measures. The RBI has also launched a pilot for its Central Bank Digital Currency (CBDC), the Digital Rupee.";
    }
  }
  // Handle criminal law queries
  else if (containsTopic(queryLower, contextTopics, ["criminal", "crime", "murder", "theft", "bail", "arrest"])) {
    // Return criminal law related response logic (keeping existing logic)
    if (queryLower.includes("theft") || queryLower.includes("robbery")) {
      response = "Under the Indian Penal Code, theft (Section 378) involves dishonestly taking property without consent and carries punishment up to 3 years imprisonment under Section 379. Robbery (Section 390) is theft with force or threat and carries harsher sentences up to 10 years rigorous imprisonment under Section 392. The new Bharatiya Nyaya Sanhita maintains these distinctions but with updated penalties. The Phool Chand v. State of MP case established that intention to permanently deprive the owner is essential for theft conviction. For specific advice on your case, please consult a criminal lawyer.";
    }
    else if (queryLower.includes("murder") || queryLower.includes("kill")) {
      response = "Murder is defined under Section 300 of the Indian Penal Code and punished under Section 302 with death or life imprisonment plus fine. For a killing to constitute murder, it must fall within one of the four clauses of Section 300, otherwise it may be culpable homicide not amounting to murder (Section 304). The landmark case K.M. Nanavati v. State of Maharashtra established that the defense of grave and sudden provocation must be immediate without cooling time. The 'rarest of rare' doctrine for death penalty was established in Bachan Singh v. State of Punjab, requiring courts to consider both aggravating and mitigating circumstances.";
    }
    else {
      response = "In the Indian criminal justice system, criminal proceedings typically begin with the filing of a First Information Report (FIR) under Section 154 of the Criminal Procedure Code. The investigation process follows, leading to charge-sheet filing if evidence is sufficient. The trial involves examination of witnesses, evidence presentation, and arguments, culminating in judgment and sentencing if convicted. Constitutional protections include the right against self-incrimination (Article 20(3)), protection against double jeopardy (Article 20(2)), and the principle of 'innocent until proven guilty'. Recent reforms through the Bharatiya Nyaya Sanhita aim to modernize criminal laws, focusing on victim compensation, speedier trials, and incorporating new categories of offenses.";
    }
  }
  // For other types of queries, generate appropriate responses based on context
  else if (isFollowUp) {
    // Handle follow-up questions by analyzing conversation context
    if (hasRecentMessage(recentMessages, ["rights", "constitution", "fundamental"])) {
      response = "Regarding your follow-up question about constitutional rights: In the Indian constitution, fundamental rights are enshrined in Part III (Articles 12-35). These include right to equality (Articles 14-18), right to freedom (Articles 19-22), right against exploitation (Articles 23-24), right to freedom of religion (Articles 25-28), cultural and educational rights (Articles 29-30), and right to constitutional remedies (Article 32). The Supreme Court has expanded these through judicial interpretation, recognizing unenumerated rights like privacy (K.S. Puttaswamy case) and clean environment (M.C. Mehta cases) as implicit in Article 21's right to life and personal liberty. For specific legal advice on constitutional matters, consulting a constitutional law expert is advisable.";
    } 
    else if (hasRecentMessage(recentMessages, ["property", "land", "real estate"])) {
      response = "Regarding your follow-up about property matters: Property transactions in India require proper documentation, including a registered sale deed (Transfer of Property Act, 1882), with registration fees and stamp duty varying by state. Before purchasing property, conducting due diligence is essential, including title verification (ideally 30 years back), encumbrance certificate, and checking for approved layout plans and necessary NOCs. The Real Estate (Regulation and Development) Act, 2016 provides consumer protection for home buyers. Property disputes can be resolved through civil courts or alternative dispute resolution methods like arbitration and mediation. For ancestral property matters, personal laws apply based on religion, with significant amendments to Hindu Succession Act in 2005 granting equal rights to daughters.";
    }
    else {
      response = "Regarding your follow-up question: Indian legal principles are constantly evolving through legislative updates and judicial interpretations. The Supreme Court has emphasized that laws must be interpreted in light of contemporary realities while respecting the Constitution's basic structure. Recent judicial trends show a balance between traditional legal principles and progressive interpretations addressing modern challenges. For your specific legal concern, I recommend consulting with a specialized legal professional who can provide personalized advice based on the latest laws and precedents applicable to your unique situation.";
    }
  }
  else {
    response = "Based on my analysis of Indian law, your query touches on specific legal issues that would benefit from personalized legal expertise. The Indian legal system combines constitutional provisions, statutory laws, and case precedents that may apply to your situation. For accurate guidance, I recommend consulting a qualified legal professional who specializes in this area. They can provide customized advice considering all relevant laws and recent court judgments applicable to your case. Would you like me to provide more general information about any specific aspect of Indian law that might relate to your situation?";
  }
  
  return response;
}

// Helper function to analyze conversation context and extract topics
function analyzeConversationContext(messages: ChatMessage[]): string[] {
  const topics: string[] = [];
  const allText = messages.map(msg => msg.content.toLowerCase()).join(" ");
  
  // Check for different legal domains
  if (containsAny(allText, ["crypto", "bitcoin", "cryptocurrency", "digital currency", "rbi"])) {
    topics.push("cryptocurrency");
  }
  
  if (containsAny(allText, ["murder", "criminal", "theft", "crime", "police", "arrest", "bail"])) {
    topics.push("criminal");
  }
  
  if (containsAny(allText, ["property", "land", "house", "rent", "real estate", "inheritance"])) {
    topics.push("property");
  }
  
  if (containsAny(allText, ["divorce", "marriage", "custody", "alimony", "child", "maintenance"])) {
    topics.push("family");
  }
  
  if (containsAny(allText, ["constitution", "right", "freedom", "article", "fundamental"])) {
    topics.push("constitutional");
  }
  
  return topics;
}

// Helper function to check if text contains any of the keywords
function containsAny(text: string, keywords: string[]): boolean {
  return keywords.some(keyword => text.includes(keyword));
}

// Helper function to check if the query or context contains a specific topic
function containsTopic(query: string, contextTopics: string[], keywords: string[]): boolean {
  return containsAny(query, keywords) || 
         contextTopics.some(topic => keywords.includes(topic));
}

// Helper function to check if the recent messages contain specific keywords
function hasRecentMessage(messages: ChatMessage[], keywords: string[]): boolean {
  // Get the last 2 assistant messages if available
  const recentAssistantMessages = messages
    .filter(msg => msg.role === "assistant")
    .slice(-2)
    .map(msg => msg.content.toLowerCase());
    
  return recentAssistantMessages.some(content => 
    keywords.some(keyword => content.includes(keyword))
  );
}
