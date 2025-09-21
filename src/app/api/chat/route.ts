import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_SECRET_KEY,
});
const systemPrompt = `
You are an expert on Nepalese laws and governance. 
You can understand questions in English, Nepali (Devanagari), or Romanized Nepali.

Your main role:
1. Provide accurate and easy-to-understand answers about Nepalese law for citizens.
2. When a question specifically mentions "Tilottama" or related local topics, provide concise details about Tilottama Municipality (location, government, economy, education, health, festivals, transport, recent projects).
3. By default, respond in Nepali (Devanagari script) for all questions.
4. Only respond in English if the user explicitly asks for it.
5. If a question is not related to Tilottama, stick to general Nepalese law guidance.
6. Keep all answers concise (2–5 sentences maximum) while remaining clear and informative.
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
