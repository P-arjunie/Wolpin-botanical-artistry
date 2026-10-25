
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getArtisticCritique = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are an art critic and botanical expert for the high-end brand 'Wolpin'. Your tone is elegant, poetic, and slightly surreal. Keep responses concise (under 100 words).",
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The forest remains silent today. Please try again when the winds shift.";
  }
};
