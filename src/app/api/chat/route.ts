import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { SYSTEM_PROMPT } from "@/lib/chatbot/systemPrompt";

export const runtime = "edge";
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "missing_messages" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const modelMessages = await convertToModelMessages(messages);
    const result = streamText({
      model: "anthropic/claude-haiku-4.5",
      system: SYSTEM_PROMPT,
      messages: modelMessages,
      temperature: 0.7,
      providerOptions: {
        gateway: {
          tags: ["feature:chatbot", "site:innhovex-portfolio"],
        },
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("[chat] error:", err);
    return new Response(
      JSON.stringify({ error: "stream_failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
