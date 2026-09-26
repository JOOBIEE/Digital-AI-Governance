export const config = { runtime: "edge" };

// Restrict this to the site(s) allowed to call this API now that the
// frontend and this backend live on different domains.
const ALLOWED_ORIGIN = "https://thedigitalgovernance.com";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

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
  // Browsers send this automatically before a cross-origin POST — must
  // answer it or the real request never gets sent.
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json", ...CORS_HEADERS },
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Server is missing GEMINI_API_KEY" }),
      { status: 500, headers: { "content-type": "application/json", ...CORS_HEADERS } },
    );
  }

  let messages: IncomingMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "content-type": "application/json", ...CORS_HEADERS },
    });
  }

  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: "messages is required" }), {
      status: 400,
      headers: { "content-type": "application/json", ...CORS_HEADERS },
    });
  }

  const contents = messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));

  const requestBody = JSON.stringify({
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents,
    generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
  });

  const attempts = [
    { model: "gemini-flash-latest", delayMs: 0 },
    { model: "gemini-flash-latest", delayMs: 800 },
    { model: "gemini-flash-lite-latest", delayMs: 0 },
  ];

  let geminiResponse: Response | undefined;
  for (const attempt of attempts) {
    if (attempt.delayMs) {
      await new Promise((resolve) => setTimeout(resolve, attempt.delayMs));
    }

    geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${attempt.model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: requestBody,
      },
    );

    const retryable = geminiResponse.status === 503 || geminiResponse.status === 429;
    if (!retryable) break;
    console.error("Gemini busy", attempt.model, geminiResponse.status);
  }

  if (!geminiResponse || !geminiResponse.ok) {
    const errorText = geminiResponse ? await geminiResponse.text() : "";
    console.error("Gemini error", geminiResponse?.status, errorText);
    return new Response(
      JSON.stringify({ error: "Gemini request failed", details: errorText }),
      { status: 502, headers: { "content-type": "application/json", ...CORS_HEADERS } },
    );
  }

  const data = await geminiResponse.json();
  const parts: { text?: string }[] = data?.candidates?.[0]?.content?.parts ?? [];
  const text = parts.map((part) => part.text ?? "").join("").trim();

  if (!text) {
    console.error("Gemini empty response", JSON.stringify(data));
    return new Response(
      JSON.stringify({ error: "No response from Gemini" }),
      { status: 502, headers: { "content-type": "application/json", ...CORS_HEADERS } },
    );
  }

  return new Response(JSON.stringify({ content: text }), {
    status: 200,
    headers: { "content-type": "application/json", ...CORS_HEADERS },
  });
}