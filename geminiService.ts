
import { GoogleGenAI } from "@google/genai";

export const getStudyAssistance = async (prompt: string): Promise<string> => {
  // Always use process.env.API_KEY directly and assume it is configured
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are 'Study End Assistant', a helpful educational consultant. Help students with study plans, career advice, and subject queries. Keep responses concise and encouraging.",
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to Study End AI. Please try again later.";
  }
};