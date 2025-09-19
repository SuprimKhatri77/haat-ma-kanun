import { NextResponse } from "next/server";
import { generateStreamToken } from "@/config/stream";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ message: "Missing userId" }, { status: 400 });
    }

    const token = generateStreamToken(userId);

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error in getStreamToken route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
