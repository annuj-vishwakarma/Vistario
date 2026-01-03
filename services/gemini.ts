import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Always initialize GoogleGenAI with a named parameter and rely exclusively on process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userPrompt: string, history: { role: string, parts: { text: string }[] }[]) => {
  try {
    // Using gemini-3-pro-preview for complex reasoning and strategic consultancy tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `You are the Vistaario Growth Consultant. 
        Vistaario is a premium agency specializing in:
        1. Development: Custom Web Apps, Mobile Apps, E-commerce (Headless), and AI integration.
        2. Marketing: SEO, SEM, Social Media, Branding, and Content Strategy.
        
        Your goal is to:
        - Be professional, innovative, and helpful.
        - Analyze the user's business needs.
        - Recommend specific Vistaario services.
        - Encourage them to book a free consultation via the "Contact Us" button.
        Keep responses concise (under 150 words). Use markdown for clarity.`,
        temperature: 0.7,
      },
    });

    // Directly access the .text property of GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again or reach out to us directly!";
  }
};
