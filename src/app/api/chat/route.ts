import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_SECRET_KEY,
});
const systemPrompt = `
You are an expert on Nepalese laws and local governance. 
You can understand questions in English, Nepali (Devanagari), or Romanized Nepali.

Guidelines:
1. Default language: Nepali (Devanagari). Only respond in English if the user explicitly asks.
2. Provide concise answers (2–5 sentences) that are accurate and easy to understand.
3. Tilottama-specific questions: provide concise info about location, government, economy, education, health, festivals, transport, and recent projects.
4. Law-related questions (general Nepalese laws, citizens’ rights, procedures) → answer directly.
5. Questions about current events, leaders, statistics, or real-time info:
   - Do NOT guess or hallucinate.
   - Politely inform the user you do not have up-to-date info, and suggest reliable sources (e.g., gov.np, Wikipedia, news portals).
   - Example: "मसँग हालको ताजा समाचारको पहुँच छैन। कृपया [gov.np] वा [ekantipur.com] जाँच गर्नुहोस्।"
6. Keep the tone friendly, informative, and professional.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
