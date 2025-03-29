
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
  // Instead, we'll simulate an intelligent legal assistant
  
  // Get the last few messages to use as context (if any)
  const recentMessages = [...conversationHistory.slice(-6)];
  
  // Add the current query to the context
  const fullContext = [...recentMessages, { role: "user", content: query }];
  
  // Check if this is a follow-up question
  const isFollowUp = fullContext.filter(msg => msg.role === "user").length > 1;
  
  // Generate a dynamic response based on query keywords and conversation context
  let response = "";
  
  // Extract possible legal topics from the query
  const legalTopics = extractLegalTopics(query, fullContext);
  
  // Simulate LLM response generation
  if (legalTopics.includes("cryptocurrency")) {
    response = generateCryptoResponse(query, fullContext, isFollowUp);
  } else if (legalTopics.includes("criminal")) {
    response = generateCriminalLawResponse(query, fullContext, isFollowUp);
  } else if (legalTopics.includes("property")) {
    response = generatePropertyLawResponse(query, fullContext, isFollowUp);
  } else if (legalTopics.includes("family")) {
    response = generateFamilyLawResponse(query, fullContext, isFollowUp);
  } else if (legalTopics.includes("accident") || legalTopics.includes("vehicle")) {
    response = generateAccidentResponse(query, fullContext, isFollowUp);
  } else if (legalTopics.includes("education")) {
    response = generateEducationResponse(query, fullContext, isFollowUp);
  } else if (legalTopics.includes("labor") || legalTopics.includes("employment")) {
    response = generateEmploymentResponse(query, fullContext, isFollowUp);
  } else if (legalTopics.includes("constitution") || legalTopics.includes("rights")) {
    response = generateConstitutionalResponse(query, fullContext, isFollowUp);
  } else {
    // For any other legal query
    response = generateGeneralLegalResponse(query, fullContext, isFollowUp);
  }
  
  // In a real implementation, this would be handled by the LLM directly
  if (response.length === 0) {
    response = "I apologize, but I couldn't find specific legal information related to your query. In a real implementation, I would connect to an actual LLM API like Google's Gemini to provide accurate information about Indian law based on your specific question. For the most accurate legal advice, please consult with a qualified legal professional.";
  }
  
  return response;
}

// Helper function to extract legal topics from query
function extractLegalTopics(query: string, context: ChatMessage[]): string[] {
  const queryLower = query.toLowerCase();
  const topics: string[] = [];
  
  // Check for cryptocurrency related terms
  if (queryLower.includes("crypto") || queryLower.includes("bitcoin") || 
      queryLower.includes("digital currency") || queryLower.includes("rbi") ||
      findInContext(context, ["cryptocurrency", "bitcoin", "crypto"]))
    topics.push("cryptocurrency");
    
  // Check for criminal law related terms
  if (queryLower.includes("murder") || queryLower.includes("criminal") || 
      queryLower.includes("theft") || queryLower.includes("crime") ||
      queryLower.includes("police") || queryLower.includes("arrest") ||
      findInContext(context, ["criminal", "crime", "murder", "theft"]))
    topics.push("criminal");
    
  // Check for property related terms
  if (queryLower.includes("property") || queryLower.includes("land") || 
      queryLower.includes("house") || queryLower.includes("rent") ||
      queryLower.includes("real estate") || queryLower.includes("inheritance") ||
      findInContext(context, ["property", "land", "inheritance"]))
    topics.push("property");
    
  // Check for family law related terms
  if (queryLower.includes("divorce") || queryLower.includes("marriage") || 
      queryLower.includes("custody") || queryLower.includes("alimony") ||
      queryLower.includes("child") || queryLower.includes("maintenance") ||
      findInContext(context, ["divorce", "marriage", "custody"]))
    topics.push("family");
    
  // Check for accident/vehicle related terms
  if (queryLower.includes("accident") || queryLower.includes("car") || 
      queryLower.includes("vehicle") || queryLower.includes("crash") ||
      queryLower.includes("compensation") || queryLower.includes("insurance") ||
      findInContext(context, ["accident", "vehicle", "crash"]))
    topics.push("accident", "vehicle");
    
  // Check for education related terms
  if (queryLower.includes("education") || queryLower.includes("school") || 
      queryLower.includes("college") || queryLower.includes("university") ||
      queryLower.includes("student") || queryLower.includes("right to education") ||
      findInContext(context, ["education", "school", "university"]))
    topics.push("education");
    
  // Check for labor/employment related terms
  if (queryLower.includes("job") || queryLower.includes("employment") || 
      queryLower.includes("worker") || queryLower.includes("salary") ||
      queryLower.includes("termination") || queryLower.includes("workplace") ||
      findInContext(context, ["job", "employment", "worker"]))
    topics.push("labor", "employment");
    
  // Check for constitutional rights
  if (queryLower.includes("constitution") || queryLower.includes("right") || 
      queryLower.includes("freedom") || queryLower.includes("article") ||
      queryLower.includes("fundamental") || 
      findInContext(context, ["constitution", "right", "freedom"]))
    topics.push("constitution", "rights");
    
  return topics;
}

// Helper function to find terms in conversation context
function findInContext(context: ChatMessage[], terms: string[]): boolean {
  // Look only in the last 3 assistant responses
  const assistantResponses = context
    .filter(msg => msg.role === "assistant")
    .slice(-3)
    .map(msg => msg.content.toLowerCase());
    
  return terms.some(term => 
    assistantResponses.some(response => response.includes(term))
  );
}

// Cryptocurrency response generator
function generateCryptoResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes("bill") || queryLower.includes("regulation")) {
    return "The Cryptocurrency and Regulation of Official Digital Currency Bill was first proposed in 2021 to create a framework for India's official CBDC and regulate private cryptocurrencies. The bill has gone through several revisions and remains unpassed. The latest version reportedly aims to classify crypto assets based on use cases and regulate them accordingly rather than implementing a complete ban. The government continues to consult with industry stakeholders while developing a comprehensive regulatory framework.";
  } 
  else if (queryLower.includes("rbi") || queryLower.includes("reserve bank")) {
    return "The Reserve Bank of India (RBI) has maintained a cautious stance on cryptocurrencies. In 2018, the RBI banned banks from dealing with crypto businesses, but this was overturned by the Supreme Court in 2020 in the Internet and Mobile Association of India v. RBI case. The RBI continues to express concerns about cryptocurrencies' impact on financial stability and monetary sovereignty. In 2022-23, the RBI launched a pilot program for its Central Bank Digital Currency (CBDC) called the Digital Rupee (e₹), which is fundamentally different from private cryptocurrencies as it's a digital form of the sovereign currency regulated by the central bank.";
  }
  else if (queryLower.includes("legal") || queryLower.includes("status")) {
    return "The legal status of cryptocurrencies in India remains in a gray area. While not explicitly illegal, they lack legal tender status. The Supreme Court's 2020 decision in Internet and Mobile Association of India v. RBI removed banking restrictions, allowing exchanges to operate. However, the government has been working on a regulatory framework through the proposed Cryptocurrency Bill. Currently, crypto activities are regulated through taxation (30% tax on gains and 1% TDS on transfers) and anti-money laundering provisions under PMLA. The government's stance has evolved from considering an outright ban to exploring a regulated approach that balances innovation with financial stability concerns.";
  }
  else if (queryLower.includes("tax") || queryLower.includes("taxation")) {
    return "Cryptocurrency taxation in India is quite stringent. The Finance Act, 2022 introduced a 30% tax on income from virtual digital assets (VDAs) plus applicable surcharge and cess. No deductions for expenses (except acquisition cost) or set-off of losses are allowed. Additionally, a 1% TDS applies on transfers above specific thresholds under Section 194S of the Income Tax Act. The definition of VDAs under Section 2(47A) includes cryptocurrencies and NFTs. These provisions came into effect from April 1, 2022 (for the 30% tax) and July 1, 2022 (for the 1% TDS), and apply regardless of whether cryptocurrencies are fully regulated in India.";
  }
  else {
    return "The legal status of cryptocurrencies in India remains in a gray area. The Supreme Court in Internet and Mobile Association of India v. Reserve Bank of India (2020) lifted the RBI's ban on banks dealing with crypto businesses. However, the government has proposed the Cryptocurrency and Regulation of Official Digital Currency Bill, which has gone through multiple iterations but hasn't been passed yet. Currently, cryptocurrencies are not illegal but don't have legal tender status. Crypto income is taxed at a flat 30% rate under the Finance Act, 2022, and transactions are subject to 1% TDS. In March 2023, crypto activities were brought under the Prevention of Money Laundering Act (PMLA), requiring exchanges to implement anti-money laundering measures. The RBI has also launched a pilot for its Central Bank Digital Currency (CBDC), the Digital Rupee.";
  }
}

// Criminal law response generator
function generateCriminalLawResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes("theft") || queryLower.includes("robbery")) {
    return "Under the Indian Penal Code, theft (Section 378) involves dishonestly taking property without consent and carries punishment up to 3 years imprisonment under Section 379. Robbery (Section 390) is theft with force or threat and carries harsher sentences up to 10 years rigorous imprisonment under Section 392. The new Bharatiya Nyaya Sanhita maintains these distinctions but with updated penalties. The Phool Chand v. State of MP case established that intention to permanently deprive the owner is essential for theft conviction. For specific advice on your case, please consult a criminal lawyer.";
  }
  else if (queryLower.includes("murder") || queryLower.includes("kill")) {
    return "Murder is defined under Section 300 of the Indian Penal Code and punished under Section 302 with death or life imprisonment plus fine. For a killing to constitute murder, it must fall within one of the four clauses of Section 300, otherwise it may be culpable homicide not amounting to murder (Section 304). The landmark case K.M. Nanavati v. State of Maharashtra established that the defense of grave and sudden provocation must be immediate without cooling time. The 'rarest of rare' doctrine for death penalty was established in Bachan Singh v. State of Punjab, requiring courts to consider both aggravating and mitigating circumstances.";
  }
  else if (queryLower.includes("bail") || queryLower.includes("arrest")) {
    return "In India, bail provisions are governed by Sections 436-450 of the Criminal Procedure Code. Offenses are classified as bailable (where bail is a right) and non-bailable (where bail is discretionary). For non-bailable offenses, Section 437 grants powers to police officers and magistrates, while Section 439 gives wider discretionary powers to Session Courts and High Courts. The Supreme Court in Arnab Manoranjan Goswami v. State of Maharashtra (2020) emphasized that liberty is not to be denied on mere conjectures. The D.K. Basu guidelines establish mandatory procedures for arrest and detention, including informing grounds of arrest, allowing legal consultation, and medical examination.";
  }
  else {
    return "The Indian criminal justice system is primarily governed by the Indian Penal Code (IPC), 1860, Criminal Procedure Code (CrPC), 1973, and Indian Evidence Act, 1872. The government has recently passed new laws - Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam - which will replace these colonial-era laws. Criminal offenses are categorized by severity with corresponding punishments. Constitutional protections for accused persons include the right to life and liberty (Article 21), protection against arbitrary arrest (Article 22), and the principle of 'innocent until proven guilty'. The landmark case of D.K. Basu v. State of West Bengal established detailed guidelines for arrest procedures to prevent custodial abuse.";
  }
}

// Property law response generator
function generatePropertyLawResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes("inheritance") || queryLower.includes("succession")) {
    return "Property inheritance in India is governed by personal laws that vary by religion. For Hindus, the Hindu Succession Act, 1956 (amended in 2005) applies, granting equal rights to sons and daughters in ancestral property. Muslims follow Shariat law with distinct Sunni and Shia inheritance rules. Christians and Parsis are governed by the Indian Succession Act, 1925. In Vineeta Sharma v. Rakesh Sharma (2020), the Supreme Court clarified that daughters have equal coparcenary rights in ancestral property by birth, retroactive from 2005. The will-making process is governed by the Indian Succession Act, requiring testamentary capacity, proper execution, and attestation by two witnesses.";
  }
  else if (queryLower.includes("rent") || queryLower.includes("tenant") || queryLower.includes("lease")) {
    return "Rental properties in India are governed by state-specific Rent Control Acts and the Transfer of Property Act, 1882. The Model Tenancy Act, 2021 provides a framework for states to enact modern rental laws that balance landlord and tenant interests. Key provisions include: mandatory written agreements, security deposit caps (2 months for residential, 6 months for commercial), rent authorities for dispute resolution, and structured eviction procedures. In landmark cases like Satyawati Sharma v. Union of India, courts have struck down unreasonable rent control provisions that violated landlords' rights. For implementing eviction, landlords must follow due legal process through rent authorities or courts rather than using force.";
  }
  else if (queryLower.includes("sale") || queryLower.includes("purchase") || queryLower.includes("buying")) {
    return "Property transactions in India are governed by the Transfer of Property Act, 1882, Registration Act, 1908, and Indian Contract Act, 1872. A valid property sale requires a written and registered sale deed, with registration fees and stamp duty varying by state. Before purchase, due diligence is essential, including title verification (ideally 30 years back), encumbrance certificate, approved layout plans, and NOCs. The RERA Act, 2016 regulates real estate projects, requiring developer registration, project details disclosure, and establishing regulatory authorities. The landmark judgment in Suraj Lamp Industries v. State of Haryana invalidated power of attorney sales, mandating proper registration for property transfers.";
  }
  else {
    return "Property rights in India are governed by the Transfer of Property Act, 1882, Registration Act, 1908, and various personal laws. The Constitution (44th Amendment) Act, 1978 removed property as a fundamental right, making it a legal right under Article 300A. Property disputes in India often arise from improper documentation, boundary conflicts, ancestral property disputes, and tenancy issues. The Real Estate (Regulation and Development) Act, 2016 provides consumer protection in the real estate sector. For resolving property disputes, options include negotiation, alternative dispute resolution (mediation/arbitration), or litigation through civil courts. The Supreme Court has emphasized the importance of documentary evidence in property disputes, with possession alone being insufficient for establishing ownership rights in most cases.";
  }
}

// Family law response generator
function generateFamilyLawResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes("divorce") || queryLower.includes("separation")) {
    return "Divorce in India is governed by personal laws based on religion. For Hindus, the Hindu Marriage Act, 1955 provides for divorce on fault grounds (adultery, cruelty, desertion) and mutual consent. Muslims can divorce under the Dissolution of Muslim Marriages Act, 1939 and personal law. Christians follow the Indian Divorce Act, 1869, and Parsis the Parsi Marriage and Divorce Act, 1936. The Special Marriage Act, 1954 applies to inter-religious marriages. The mutual consent divorce process typically takes 6-18 months with a mandatory 6-month cooling period, though courts can waive this in exceptional cases as held in Amardeep Singh v. Harveen Kaur (2017). The Supreme Court has recognized irretrievable breakdown as grounds for divorce in exceptional cases under Article 142.";
  }
  else if (queryLower.includes("custody") || queryLower.includes("child")) {
    return "Child custody in Indian family law is determined based on the 'welfare principle' rather than parental rights. Courts consider factors like child's age, gender, education needs, parents' financial capacity, and child's preference (if mature enough). For Hindus, the Hindu Minority and Guardianship Act, 1956 applies, while guardianship cases fall under the Guardians and Wards Act, 1890. Types of custody include sole custody, joint custody, physical custody, and legal custody. In Vikram Vir Vohra v. Shalini Bhalla, the Supreme Court emphasized shared parenting and visitation rights. Recent judicial trends favor joint custody arrangements where possible, and courts increasingly recognize grandparental visitation rights. The child's preference gains weight as they mature, especially for children above 13 years.";
  }
  else if (queryLower.includes("maintenance") || queryLower.includes("alimony")) {
    return "Maintenance and alimony in India are governed by personal laws and secular provisions like Section 125 of CrPC, applicable to all religions. Hindu women can claim maintenance under Section 18 of the Hindu Adoptions and Maintenance Act, while Muslim personal law provides for maintenance during iddat period and mahr (dower). The Supreme Court in Shamima Farooqui v. Shahid Khan standardized maintenance calculation based on the husband's income, lifestyle, obligations, wife's income, and marriage duration. Maintenance can be interim (during proceedings) or permanent (after divorce). In Rajnesh v. Neha (2020), the Supreme Court issued comprehensive guidelines on maintenance determination, documentation requirements, and payment procedures to streamline the process and ensure timely relief to dependent spouses and children.";
  }
  else {
    return "Marriage and divorce in India are governed by personal laws based on religion. For Hindus, the Hindu Marriage Act, 1955 applies; for Muslims, Islamic personal law; for Christians, the Indian Divorce Act, 1869. The Special Marriage Act, 1954 allows for civil marriages irrespective of religion. In the case of Shayara Bano v. Union of India (2017), the Supreme Court declared instant triple talaq (talaq-e-biddat) unconstitutional, protecting Muslim women's rights. For child custody matters, the principle of 'welfare of the child' is paramount as established in Gaurav Nagpal v. Sumedha Nagpal. Maintenance rights are provided under Section 125 of the Criminal Procedure Code and various personal laws, with courts taking a progressive approach to ensure financial security for dependent spouses and children.";
  }
}

// Accident/vehicle response generator
function generateAccidentResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes("compensation") || queryLower.includes("claim")) {
    return "Motor accident compensation in India follows a dual mechanism: no-fault liability under Section 163A of the Motor Vehicles Act (structural formula basis) and fault liability under Section 166 (based on multiplier method from Sarla Verma v. DTC case). Compensation covers expenses (medical, funeral), loss of income/consortium, and pain and suffering. Claims must be filed with the Motor Accident Claims Tribunal within 6 months (extendable with valid reason). The 2019 amendments to the Motor Vehicles Act increased compensation amounts and introduced a simplified claim settlement process. Insurance companies cannot reject third-party claims based on technical grounds as established in United India Insurance Co. Ltd. v. Sunil Kumar.";
  }
  else if (queryLower.includes("insurance") || queryLower.includes("policy")) {
    return "Motor vehicle insurance in India has two components: third-party liability insurance (mandatory under the Motor Vehicles Act) and own-damage/comprehensive coverage (optional). The 2019 amendments to the Motor Vehicles Act significantly increased penalties for driving without insurance, currently at Rs. 2,000 and/or imprisonment for first offense and Rs. 4,000 for subsequent offenses. For insurance claims, the process requires immediate accident reporting to police and insurer, documentation submission (FIR, driving license, RC, medical reports), and vehicle inspection. The landmark judgment in Bajaj Allianz General Insurance Co. Ltd. v. Shivaji Dayanu Patil established that insurers cannot deny third-party claims for policy conditions breached by the insured, ensuring protection for accident victims.";
  }
  else if (queryLower.includes("hit and run") || queryLower.includes("unidentified")) {
    return "For hit-and-run or unidentified vehicle accident cases in India, victims can claim compensation from the Solatium Scheme under Section 161 of the Motor Vehicles Act. The 2019 amendments significantly increased compensation amounts to Rs. 2 lakh for death and Rs. 50,000 for grievous injury. Claims must be filed with local police within six months, with police responsible for processing claims through the scheme. Additionally, victims can approach the Motor Accident Claims Tribunal under Section 163A for compensation from the designated fund. The Supreme Court in Parmeshwari v. Amir Chand emphasized that technical grounds should not defeat claims in hit-and-run cases, adopting a victim-friendly approach to ensure compensation in such difficult circumstances.";
  }
  else {
    return "In case of a motor vehicle accident in India, you should: 1) Report to the nearest police station within 24 hours (Section 134 of Motor Vehicles Act); 2) Inform your insurance company immediately; 3) For compensation, you can file a claim with the Motor Accident Claims Tribunal under Section 166 of the Motor Vehicles Act. The Supreme Court in Jai Prakash v. National Insurance Co. established that third-party insurance claims cannot be rejected even if the driver has no valid license. The 2019 amendments to the Motor Vehicles Act have introduced significant changes, including increased penalties for traffic violations, higher compensation for accident victims, and improved procedures for driver licensing. Document everything and consider consulting a lawyer specialized in motor vehicle cases.";
  }
}

// Education law response generator
function generateEducationResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  return "According to Article 21A of the Indian Constitution, education is a fundamental right for children between 6-14 years. The Right to Education Act, 2009 provides for free and compulsory education. In the landmark case of Mohini Jain v. State of Karnataka (1992), the Supreme Court held that the right to education flows directly from the right to life under Article 21. Educational institutions are also regulated by bodies like UGC, AICTE, and MCI. The SC in TMA Pai Foundation v. State of Karnataka recognized the right of private institutions to establish and administer educational institutions, although they cannot engage in profiteering. The Right to Education Act also mandates 25% reservation for economically disadvantaged children in private schools, upheld by the Supreme Court in Society for Un-aided Private Schools of Rajasthan v. Union of India.";
}

// Employment law response generator
function generateEmploymentResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  return "Employment laws in India include the Industrial Disputes Act, 1947, Factories Act, 1948, and the Code on Wages, 2019. The government has consolidated 29 labor laws into 4 labor codes: Wages, Industrial Relations, Social Security, and Occupational Safety. In Workmen v. Management of M/S Firestone Tyre & Rubber Co., the Supreme Court established that termination must follow the principle of 'last come, first go' unless there are reasonable grounds. Sexual harassment at workplace is governed by the POSH Act, 2013, which mandates Internal Complaints Committees. Employees are entitled to provident fund under the EPF Act, 1952, gratuity under the Payment of Gratuity Act, 1972 (for 5+ years of service), and annual leave with wages under the Factories Act. The Supreme Court in Charan Singh v. Healing Touch Hospital ruled that contractual employees doing the same work as regular employees must receive equal pay for equal work.";
}

// Constitutional law response generator
function generateConstitutionalResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  return "Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is subject to reasonable restrictions under Article 19(2). In Shreya Singhal v. Union of India (2015), the Supreme Court struck down Section 66A of the IT Act as unconstitutional, reinforcing the importance of freedom of speech in the digital era. The Court held that restrictions on free speech must be narrowly defined and not vague. Other fundamental rights include right to equality (Articles 14-18), right against exploitation (Articles 23-24), right to freedom of religion (Articles 25-28), and cultural and educational rights (Articles 29-30). The Supreme Court in Kesavananda Bharati v. State of Kerala established the 'basic structure doctrine', holding that Parliament cannot amend the Constitution to alter its basic features. Recent judgments like Justice K.S. Puttaswamy v. Union of India (2017) have recognized privacy as a fundamental right under Article 21.";
}

// General legal response generator for other queries
function generateGeneralLegalResponse(query: string, context: ChatMessage[], isFollowUp: boolean): string {
  if (isFollowUp) {
    // Try to generate a relevant follow-up response based on previous messages
    const lastAssistantMessage = context.filter(msg => msg.role === "assistant").pop();
    if (lastAssistantMessage) {
      const lastResponse = lastAssistantMessage.content.toLowerCase();
      
      if (lastResponse.includes("crypto") || lastResponse.includes("bitcoin")) {
        return "Regarding your follow-up about cryptocurrency regulations: In addition to the existing framework, the Indian government is working with international bodies like FATF to develop comprehensive crypto regulations. Recent developments include bringing crypto exchanges under PMLA regulations in March 2023, requiring KYC compliance and suspicious transaction reporting. The Finance Ministry and RBI continue to monitor the sector and may introduce additional regulations to address concerns about financial stability, consumer protection, and illicit activities. The RBI's CBDC pilot program offers insights into how digital currencies can be integrated into the financial system under central bank oversight.";
      } 
      else if (lastResponse.includes("accident") || lastResponse.includes("vehicle")) {
        return "Regarding your follow-up about motor vehicle accidents: Beyond the basic legal framework, victims can seek alternative dispute resolution through the Lok Adalat system for faster settlements. The MACT procedure includes filing Form-I with necessary documents, followed by notice to the respondents, evidence examination, and final award. Recent judicial precedents have established structured approaches to calculating compensation using age-based multipliers. For specific scenarios not explicitly covered in your query, I recommend consulting a motor accident claims specialist who can provide tailored guidance based on the factual matrix of your particular case.";
      }
      else if (lastResponse.includes("criminal") || lastResponse.includes("arrest")) {
        return "Regarding your follow-up on criminal legal matters: The new criminal laws (Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam) will introduce significant changes including new offenses like terrorism, organized crime, and mob lynching, along with strengthened victim protection mechanisms. The updated laws also incorporate modern technological aspects of crime and evidence collection. In terms of procedural rights, the Supreme Court's guidelines in Arnesh Kumar v. State of Bihar limit arbitrary arrests for offenses with punishment under 7 years. For your specific situation, consulting a criminal lawyer would be advisable as they can provide guidance tailored to the unique circumstances of your case.";
      }
    }
    
    // Default follow-up response
    return "Regarding your follow-up question: Indian legal principles are constantly evolving through legislative updates and judicial interpretations. The Supreme Court has emphasized that laws must be interpreted in light of contemporary realities while respecting the Constitution's basic structure. Recent judicial trends show a balance between traditional legal principles and progressive interpretations addressing modern challenges. For your specific legal concern, I would recommend consulting with a specialized legal professional who can provide personalized advice based on the latest laws and precedents applicable to your unique situation.";
  }
  
  // First-time general response
  return "Based on my analysis of Indian law, your query touches on specific legal issues that would benefit from personalized legal expertise. The Indian legal system combines constitutional provisions, statutory laws, and case precedents that may apply to your situation. For accurate guidance, I recommend consulting a qualified legal professional who specializes in this area. They can provide customized advice considering all relevant laws and recent court judgments applicable to your case. Would you like me to provide more general information about any specific aspect of Indian law that might relate to your situation?";
}
