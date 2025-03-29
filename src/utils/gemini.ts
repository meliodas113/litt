
// This is a simulated implementation of a legal AI assistant with conversation context
// In a real implementation, you would use the actual Gemini API with context management

// Store conversation history to maintain context across queries
let conversationHistory: {role: 'user' | 'assistant', content: string}[] = [];

export async function generateLegalResponse(query: string): Promise<string> {
  console.log("Query to analyze:", query);
  
  // Add the user's query to conversation history
  conversationHistory.push({ role: 'user', content: query });
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For demo purposes, determine if this is a follow-up query
  const isFollowUp = conversationHistory.length > 2;
  
  // Process the query in context of the conversation
  const queryLower = query.toLowerCase();
  let response = "";
  
  // Criminal law related queries
  if (queryLower.includes("murder") || queryLower.includes("kill") || 
      queryLower.includes("criminal") || queryLower.includes("crime") ||
      queryLower.includes("theft") || queryLower.includes("robbery") ||
      queryLower.includes("assault") || queryLower.includes("prison")) {
    response = "Under the Indian Penal Code, 1860, criminal offenses are categorized by severity. Murder (Section 302) carries a death penalty or life imprisonment. For theft (Section 378), punishment can extend to 3 years imprisonment. If you're involved in a criminal matter, it's crucial to contact a lawyer immediately as your constitutional rights under Article 21 (right to life and liberty) and Article 22 (protection against arrest and detention) are fundamental. The landmark case of D.K. Basu v. State of West Bengal established guidelines for arrest procedures.";
  }
  
  // Vehicle/accident related queries
  else if (queryLower.includes("accident") || queryLower.includes("car") || 
      queryLower.includes("vehicle") || queryLower.includes("crash") ||
      queryLower.includes("traffic") || queryLower.includes("driving")) {
    response = "In case of a motor vehicle accident in India, you should: 1) Report to the nearest police station within 24 hours (Section 134 of Motor Vehicles Act); 2) Inform your insurance company immediately; 3) For compensation, you can file a claim with the Motor Accident Claims Tribunal under Section 166 of the Motor Vehicles Act. The Supreme Court in Jai Prakash v. National Insurance Co. established that third-party insurance claims cannot be rejected even if the driver has no valid license. Document everything and consider consulting a lawyer specialized in motor vehicle cases.";
  }
  
  // Family law related queries
  else if (queryLower.includes("divorce") || queryLower.includes("marriage") || 
      queryLower.includes("custody") || queryLower.includes("alimony") ||
      queryLower.includes("maintenance") || queryLower.includes("family")) {
    response = "Marriage and divorce in India are governed by personal laws based on religion. For Hindus, the Hindu Marriage Act, 1955 applies; for Muslims, Islamic personal law; for Christians, the Indian Divorce Act, 1869. The Special Marriage Act, 1954 allows for civil marriages irrespective of religion. In the case of Shayara Bano v. Union of India (2017), the Supreme Court declared instant triple talaq (talaq-e-biddat) unconstitutional, protecting Muslim women's rights. For child custody matters, the principle of 'welfare of the child' is paramount as established in Gaurav Nagpal v. Sumedha Nagpal.";
  }
  
  // Property/real estate related queries
  else if (queryLower.includes("property") || queryLower.includes("inheritance") || 
      queryLower.includes("land") || queryLower.includes("real estate") ||
      queryLower.includes("rent") || queryLower.includes("tenant") ||
      queryLower.includes("landlord") || queryLower.includes("eviction")) {
    response = "Property rights in India are governed by personal laws that vary by religion, and by statutory laws like the Transfer of Property Act, 1882. The Constitution (44th Amendment) Act, 1978 removed property as a fundamental right. For inheritance matters, Hindu Succession Act, 1956 (amended in 2005) governs Hindus, while Muslims follow Shariat law. In Vineeta Sharma v. Rakesh Sharma (2020), the Supreme Court clarified that daughters have equal coparcenary rights in ancestral property. For rental disputes, the Rent Control Acts of respective states apply, and the recent Model Tenancy Act, 2021 aims to balance the interests of landlords and tenants.";
  }
  
  // Education related queries
  else if (queryLower.includes("right to education") || queryLower.includes("education") || 
      queryLower.includes("school") || queryLower.includes("college") ||
      queryLower.includes("university") || queryLower.includes("student")) {
    response = "According to Article 21A of the Indian Constitution, education is a fundamental right for children between 6-14 years. The Right to Education Act, 2009 provides for free and compulsory education. In the landmark case of Mohini Jain v. State of Karnataka (1992), the Supreme Court held that the right to education flows directly from the right to life under Article 21. Educational institutions are also regulated by bodies like UGC, AICTE, and MCI. The SC in TMA Pai Foundation v. State of Karnataka recognized the right of private institutions to establish and administer educational institutions.";
  }
  
  // Free speech/constitutional rights
  else if (queryLower.includes("freedom of speech") || queryLower.includes("article 19") || 
      queryLower.includes("constitution") || queryLower.includes("rights") ||
      queryLower.includes("freedom") || queryLower.includes("fundamental rights")) {
    response = "Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is subject to reasonable restrictions under Article 19(2). In Shreya Singhal v. Union of India (2015), the Supreme Court struck down Section 66A of the IT Act as unconstitutional, reinforcing the importance of freedom of speech in the digital era. The Court held that restrictions on free speech must be narrowly defined and not vague. Other fundamental rights include right to equality (Articles 14-18), right against exploitation (Articles 23-24), right to freedom of religion (Articles 25-28), and cultural and educational rights (Articles 29-30).";
  }
  
  // Business/corporate law queries
  else if (queryLower.includes("business") || queryLower.includes("company") || 
      queryLower.includes("startup") || queryLower.includes("corporate") ||
      queryLower.includes("contract") || queryLower.includes("patent") ||
      queryLower.includes("trademark") || queryLower.includes("copyright")) {
    response = "Business entities in India are primarily governed by the Companies Act, 2013, Limited Liability Partnership Act, 2008, and Partnership Act, 1932. For intellectual property protection, the Patents Act, 1970, Trademarks Act, 1999, and Copyright Act, 1957 apply. Contracts are enforced under the Indian Contract Act, 1872. In the landmark case of M/s Centrotrade Minerals & Metal Inc. v. Hindustan Copper Ltd., the Supreme Court upheld the validity of multi-tiered arbitration clauses. For startups, the government offers various incentives under the Startup India initiative launched in 2016.";
  }
  
  // Cryptocurrency related queries
  else if (queryLower.includes("crypto") || queryLower.includes("bitcoin") || 
      queryLower.includes("cryptocurrency") || queryLower.includes("blockchain") ||
      queryLower.includes("digital currency") || queryLower.includes("nft")) {
    response = "The legal status of cryptocurrencies in India remains in a gray area. The Supreme Court in Internet and Mobile Association of India v. Reserve Bank of India (2020) lifted the RBI's ban on banks dealing with crypto businesses. However, the government has proposed the Cryptocurrency and Regulation of Official Digital Currency Bill. Currently, cryptocurrencies are not illegal but don't have legal tender status. Crypto income is taxable at 30% under the Finance Act, 2022. For crypto transactions, properly documenting your trades and maintaining KYC compliance is advisable to avoid legal complications. Regulations are evolving, so staying updated with RBI and SEBI guidelines is crucial.";
    
    // Additional info for crypto follow-up questions
    if (isFollowUp && queryLower.includes("convert") && (queryLower.includes("inr") || queryLower.includes("rupee"))) {
      response += "\n\nFor converting cryptocurrency to INR, you must comply with the following regulations: 1) Use only registered exchanges that follow KYC/AML norms; 2) Maintain complete transaction records for tax purposes; 3) Report all crypto-to-fiat conversions in your income tax returns under the 30% flat tax rate; 4) Pay 1% TDS on transfers as per Section 194S of the Income Tax Act; 5) Ensure the receiving bank account is compliant with the 2023 PMLA notifications which brought virtual digital assets under money laundering provisions.";
    }
    
    if (isFollowUp && queryLower.includes("rbi")) {
      response += "\n\nRegarding RBI regulations on cryptocurrencies: The RBI initially prohibited banks from dealing with crypto businesses in 2018, but this was overturned by the Supreme Court in 2020. Currently, the RBI maintains a cautious approach. Their latest circulars require banks to conduct enhanced due diligence for crypto transactions under FEMA (Foreign Exchange Management Act) regulations. The RBI has also warned about financial stability risks and consumer protection concerns. While they don't directly regulate cryptocurrencies, they oversee the banking channels used for crypto-to-fiat conversions. The RBI is also developing a Central Bank Digital Currency (CBDC) called the Digital Rupee, which is being piloted in both wholesale and retail segments.";
    }
  }
  
  // Labor/employment law queries
  else if (queryLower.includes("job") || queryLower.includes("employment") || 
      queryLower.includes("worker") || queryLower.includes("labor") || 
      queryLower.includes("salary") || queryLower.includes("workplace") ||
      queryLower.includes("termination") || queryLower.includes("fired")) {
    response = "Employment laws in India include the Industrial Disputes Act, 1947, Factories Act, 1948, and the Code on Wages, 2019. The government has consolidated 29 labor laws into 4 labor codes. In Workmen v. Management of M/S Firestone Tyre & Rubber Co., the Supreme Court established that termination must follow the principle of 'last come, first go' unless there are reasonable grounds. Sexual harassment at workplace is governed by the POSH Act, 2013. Employees are entitled to provident fund under the EPF Act, gratuity under the Payment of Gratuity Act, and various other social security benefits depending on the nature of employment.";
  }
  
  // Follow-up handling for queries without specific keywords
  else if (isFollowUp) {
    // Get previous conversation context
    const previousUserQuery = conversationHistory[conversationHistory.length - 3]?.content || "";
    const previousResponse = conversationHistory[conversationHistory.length - 2]?.content || "";
    
    if (previousResponse.includes("cryptocurrencies")) {
      response = "Regarding your follow-up question about cryptocurrencies: Currently, India imposes a 30% tax on crypto income plus applicable surcharges and cess. Additionally, a 1% TDS applies to transfers above specific thresholds. The government is working on a comprehensive regulatory framework. Recent developments include bringing crypto under PMLA (Prevention of Money Laundering Act) in March 2023, requiring exchanges to report suspicious transactions. For the most current compliance requirements, consult the latest CBDT (Central Board of Direct Taxes) and Finance Ministry guidelines.";
    } else if (previousResponse.includes("Motor Vehicle")) {
      response = "To address your follow-up about motor vehicle accidents: If you're injured in a road accident, you can claim compensation under both the Motor Vehicles Act (for no-fault liability) and through civil proceedings for negligence. The landmark judgment in United India Insurance Co. Ltd. v. Sunil Kumar established that insurers cannot deny third-party claims based on technical grounds. Recent amendments to the MV Act have increased penalties for traffic violations and improved the compensation mechanism. For specific accident scenarios, the exact liability depends on factors like road conditions, vehicle condition, and driver behavior as determined in M.K. Kunhimohammed v. P.A. Ahmedkutty.";
    } else {
      // Try to extract context from previous conversation
      const lowerPreviousUserQuery = previousUserQuery.toLowerCase();
      const lowerPreviousResponse = previousResponse.toLowerCase();
      
      if (lowerPreviousResponse.includes("penal code") || lowerPreviousUserQuery.includes("criminal")) {
        response = "Regarding your follow-up on criminal law: The criminal justice system in India follows three major legislations - Indian Penal Code, Criminal Procedure Code, and Indian Evidence Act. Recent amendments include the Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam which will replace these colonial-era laws. These introduce modern offenses like organized crime and terrorism while emphasizing victim compensation and speedy trials. For specific offenses, sentencing guidelines vary based on the nature and severity of the crime.";
      } else if (lowerPreviousResponse.includes("divorce") || lowerPreviousUserQuery.includes("marriage")) {
        response = "Regarding your follow-up on family law: Divorce proceedings in India vary by personal law. For Hindus, there are both fault-based grounds (adultery, cruelty) and no-fault options (mutual consent). The Supreme Court in Naveen Kohli v. Neelu Kohli recommended including irretrievable breakdown as a ground for divorce. Child custody is decided based on the 'welfare principle' rather than parental rights. Recent judgments have recognized grandparental visitation rights and the concept of shared parenting. Maintenance amounts are determined based on the spouse's status, income, and obligations.";
      } else {
        // Generic follow-up response with more context awareness
        response = "To address your follow-up question: Indian legal principles emphasize constitutional values and precedent-based interpretations. The judiciary has been increasingly progressive in recent judgments, balancing traditional laws with evolving social norms. The Supreme Court has emphasized that laws must be interpreted in light of contemporary realities while respecting the Constitution's basic structure. For more specific guidance on your particular legal situation, I would need additional details about the exact legal issue you're facing.";
      }
    }
  }
  
  // Default response if no keywords match and not a follow-up
  else {
    response = "Based on my analysis of Indian law, your query requires specific legal expertise. The Indian legal system combines constitutional provisions, statutory laws, and case precedents. To get accurate guidance for your situation, I recommend consulting a qualified legal professional who specializes in this area. They can provide personalized advice considering all relevant laws and recent court judgments applicable to your case. Would you like me to provide general information about any specific aspect of Indian law that might be relevant to your query?";
  }
  
  // Add the assistant's response to conversation history
  conversationHistory.push({ role: 'assistant', content: response });
  
  // Limit history to last 10 messages to prevent it from growing too large
  if (conversationHistory.length > 10) {
    conversationHistory = conversationHistory.slice(conversationHistory.length - 10);
  }
  
  return response;
}
