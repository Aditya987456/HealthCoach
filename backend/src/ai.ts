
import dotenv from "dotenv"
dotenv.config()

import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
import { ANALYSIS_PROMPT } from './prompt.js';



const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY!
});

export async function generateReport(chat:string) {


    //all the prompt and content that we will give to ai...all here...
    const prompt = `

    ${ANALYSIS_PROMPT}

    Conversation:

    ${chat}
    
    `

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
        responseMimeType: "application/json"
    }
  });

  console.log(response.text);
  return JSON.parse(response.text!);
}



