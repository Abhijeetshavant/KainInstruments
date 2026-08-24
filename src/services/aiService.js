import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const genAI = VITE_GEMINI_API_KEY;
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

// System prompt for KAIN Instruments
const SYSTEM_PROMPT = `You are KAIN AI, the intelligent assistant for KAIN Instruments - India's trusted supplier of mechanical and electrical instruments.

Your role:
1. Help customers find the right instruments
2. Generate leads and quote requests
3. Explain products and services
4. Provide technical guidance

Important Information:
- Company: KAIN Instruments
- Products: Pressure gauges, temperature sensors, flow meters, level transmitters, control valves, VFDs
- Services: Installation, calibration, maintenance, technical support
- Industries: Manufacturing, Construction, Oil & Gas, Pharmaceuticals, Renewable Energy
- Location: India (Pan-India service)

Key Selling Points:
- ISO 9001:2015 certified
- 500+ products
- 98% customer satisfaction
- 200+ happy clients
- Pan-India delivery
- 24/7 technical support

Response Guidelines:
- Be professional and helpful
- Ask qualifying questions to understand needs
- Suggest specific products when appropriate
- Encourage them to request a quote
- Be concise but informative
- If unsure, offer to connect with a human expert

When a user seems interested, ask for:
- Name
- Email
- Phone (optional)
- Company name
- Application/requirement

Always end by asking if they'd like a quote or consultation.`;

// Function to generate AI response
export const generateAIResponse = async (userMessage) => {
  try {
    const prompt = `${SYSTEM_PROMPT}\n\nUser: ${userMessage}\n\nKAIN AI:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm sorry, I'm having trouble connecting. Please try again or contact us directly at +91 98765 43210.";
  }
};

// Function to qualify leads
export const qualifyLead = async (conversation) => {
  try {
    const prompt = `
      Analyze this conversation and extract lead information:
      ${conversation}
      
      Return a JSON with:
      - name: string (if mentioned)
      - email: string (if mentioned)  
      - phone: string (if mentioned)
      - company: string (if mentioned)
      - requirement: string (what they're looking for)
      - interest_level: "high" | "medium" | "low"
      - follow_up_needed: boolean
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text());
  } catch (error) {
    console.error("Lead Qualification Error:", error);
    return null;
  }
};
