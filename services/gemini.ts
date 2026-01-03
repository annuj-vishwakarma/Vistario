import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Use Vite environment variables in the browser build (VITE_API_KEY).
const meta: any = import.meta;
const apiKey = (meta.env?.VITE_API_KEY as string) || (meta.env?.API_KEY as string) || '';
const ai = new GoogleGenAI({ apiKey });

export const getAIResponse = async (userPrompt: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
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

    // Ensure we always return a string (fallback to empty string when undefined)
    return (response && (response as any).text) ?? '';
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again or reach out to us directly!";
  }
};
