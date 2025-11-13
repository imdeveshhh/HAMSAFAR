import { NextResponse } from "next/server";

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;
const TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions";
const MODEL = "mistralai/Mixtral-8x7B-Instruct-v0.1"; // You can change model if needed

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ reply: "No prompt provided." }, { status: 400 });
    }

    // Call Together AI API
    const togetherRes = await fetch(TOGETHER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOGETHER_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "user", content: prompt }
        ],
      }),
    });

    if (!togetherRes.ok) {
      throw new Error(`Together AI error: ${togetherRes.status} ${togetherRes.statusText}`);
    }

    const togetherData = await togetherRes.json();
    const reply = togetherData.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: "Sorry, there was an error." }, { status: 500 });
  }
}
