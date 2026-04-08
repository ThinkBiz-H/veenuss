import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

const autoReplies: Record<string, string> = {
  default:
    "Thanks for reaching out! One of our team members will get back to you shortly. In the meantime, feel free to explore our services.",
  hello: "Hello! 👋 Welcome to VEENUSS GROWTH LAB. How can we help you today?",
  pricing:
    "Our projects start from $2,999 for MVPs. For a custom quote, please share your project details and we'll get back to you within 24 hours!",
  services:
    "We offer Web Development, Mobile App Development, UI/UX Design, and Maintenance & Support. Which service interests you?",
};

const getReply = (msg: string): string => {
  const lower = msg.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) return autoReplies.hello;
  if (lower.includes("price") || lower.includes("cost"))
    return autoReplies.pricing;
  if (lower.includes("service")) return autoReplies.services;
  return autoReplies.default;
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! 👋 How can we help you today?", isBot: true },
    {
      text: "Tell us about your project and we'll get back to you.",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: getReply(userMsg), isBot: true },
      ]);
    }, 1200);
  };

  return (
    <>
      {/* Toggle */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
        style={{ background: "var(--gradient-primary)" }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] glass rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="font-semibold text-sm">VEENUSS GROWTH LAB Bot</p>
                <p className="text-xs text-muted-foreground">
                  Online • Usually replies instantly
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.isBot
                        ? "bg-secondary text-foreground rounded-bl-md"
                        : "text-primary-foreground rounded-br-md"
                    }`}
                    style={
                      !msg.isBot
                        ? { background: "var(--gradient-primary)" }
                        : undefined
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                maxLength={500}
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={send}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
