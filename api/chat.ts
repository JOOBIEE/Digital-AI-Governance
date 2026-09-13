export const config = { runtime: "edge" };

const SYSTEM_PROMPT =
  "You are GOVERNOVA AI, the website assistant for Digital Governance Africa (DGA). " +
  "You help visitors understand DGA's work in digital governance, responsible AI, data governance, " +
  "and institutional transformation across Africa, and you point them to the right page or the " +
  "Contact page when appropriate. Keep answers concise (2-4 sentences unless more detail is asked for), " +
  "friendly, and professional.";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" },
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Server is missing GEMINI_API_KEY" }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }

  let messages: IncomingMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: "messages is required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const contents = messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));

  const geminiResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
      }),
    },
  );

  if (!geminiResponse.ok) {
    const errorText = await geminiResponse.text();
    return new Response(
      JSON.stringify({ error: "Gemini request failed", details: errorText }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }

  const data = await geminiResponse.json();
  const text: string | undefined =
    data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    return new Response(
      JSON.stringify({ error: "No response from Gemini" }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ content: text }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
