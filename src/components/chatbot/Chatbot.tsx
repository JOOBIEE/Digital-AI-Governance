import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import chatbotAvatar from "../../assets/images/chatbot-dga.png";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://digital-ai-governance.vercel.app/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Chat request failed");

      const data: { content: string } = await response.json();

      setMessages((previousMessages) => [
        ...previousMessages,
        { id: crypto.randomUUID(), role: "assistant", content: data.content },
      ]);
    } catch {
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, I couldn't reach GOVERNOVA AI right now. Please try again in a moment or use the Contact page below.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 bottom-24 z-50 flex h-[70vh] max-h-[70vh] w-[90%] -translate-x-1/2 flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-2xl md:left-auto md:right-6 md:h-[calc(100vh-120px)] md:max-h-[600px] md:w-[420px] md:translate-x-0"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-navy to-navy-slate px-5 py-4">
              <img
                src={chatbotAvatar}
                alt="chatbot icon"
                className="h-10 w-10 object-contain"
              />

              <div>
                <h2 className="text-base font-semibold text-white">
                  Ask GOVERNOVA AI
                </h2>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full bg-green-500"
                    aria-hidden
                  />

                  <p className="text-xs text-white/80">Instant Website Guide</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5">
              {messages.length === 0 ? (
                <div className="flex flex-col justify-end gap-4">
                  {/* Initial Bot Message */}
                  <div className="flex justify-start">
                    <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-surface-alt px-4 py-3 text-sm leading-relaxed text-ink">
                      Hello! 👋 I&apos;m GOVERNOVA AI. How can I help you
                      explore Digital Governance Africa?
                    </div>
                  </div>

                  {/* Suggested Questions */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setInput("What services do you offer?")}
                      className="cursor-pointer rounded-full border border-line px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-gold hover:text-gold"
                    >
                      What services do you offer?
                    </button>

                    <button
                      type="button"
                      onClick={() => setInput("What is AI governance?")}
                      className="cursor-pointer rounded-full border border-line px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-gold hover:text-gold"
                    >
                      What is AI governance?
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          message.role === "user"
                            ? "rounded-br-md bg-navy text-white"
                            : "rounded-bl-md bg-surface-alt text-ink"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-md bg-surface-alt px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted [animation-delay:150ms]" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted [animation-delay:300ms]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-line bg-white p-4">
              <div className="flex items-end gap-2 rounded-2xl border border-line bg-surface-alt p-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Type a question"
                  disabled={isLoading}
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-ink outline-none placeholder:text-ink-muted"
                />

                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  aria-label="Send question"
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-navy text-white transition-colors duration-200 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaTelegramPlane size={16} aria-hidden />
                </button>
              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex w-full cursor-pointer items-center justify-center rounded-xl border border-navy bg-transparent px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
              >
                Contact Us
              </Link>

              <p className="mt-2 text-center text-[11px] text-ink-muted">
                GOVERNOVA AI™ · Digital Governance Africa
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close GOVERNOVA AI" : "Open GOVERNOVA AI"}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative block h-24 w-24 cursor-pointer rounded-full"
        >
          <img src={chatbotAvatar} alt="" className="h-full w-full" />
        </motion.button>
      </div>
    </>
  );
}
