import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_SECRET_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are an expert on Nepalese laws.
You can understand questions in English or Nepali.
If the user asks in Nepali, respond in Nepali.
Provide accurate, concise, and easy-to-understand answers about Nepalese law.
Do not give personal opinions or unsafe legal advice.
Reference Nepali legal context when possible.
      `,
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
