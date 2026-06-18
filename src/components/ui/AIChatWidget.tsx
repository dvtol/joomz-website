"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, RotateCcw } from "lucide-react";

// ── FAQ knowledge base ────────────────────────────────────────
const FAQ_RESPONSES: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["price", "pricing", "cost", "plan", "how much", "pay"],
    answer:
      "Joomz starts with a **free plan** for small teams. Paid plans start from **€89/month** and scale with your Shopify revenue and ad spend. No credit card required to get started.",
  },
  {
    keywords: ["shopify", "connect", "integrate", "store", "integration"],
    answer:
      "Connecting Shopify takes less than **2 minutes**. Go to Settings → Integrations, click Shopify, and authorize the app. Joomz will immediately start pulling in your orders, revenue and CLV data.",
  },
  {
    keywords: ["roas", "return", "ad spend", "performance", "roi"],
    answer:
      "Joomz AI calculates your **true ROAS per channel** — corrected for Shopify returns. Compare Google, Meta and TikTok side by side. Most customers see a **2–5× improvement** within 8 weeks.",
  },
  {
    keywords: ["meta", "facebook", "instagram", "ads"],
    answer:
      "Joomz connects to **Meta Ads** via the Marketing API. You'll see spend, ROAS, CPA and which Meta campaigns are actually driving Shopify orders — not just clicks.",
  },
  {
    keywords: ["tiktok", "tik tok"],
    answer:
      "Yes, **TikTok Ads** is fully supported. Joomz tracks TikTok spend against Shopify revenue so you can see your real CPA and compare it to Meta and Google.",
  },
  {
    keywords: ["google", "search", "pmax", "shopping"],
    answer:
      "Joomz integrates with **Google Ads** including Search, Shopping and Performance Max. See which campaigns drive the most Shopify revenue after returns.",
  },
  {
    keywords: ["safe", "security", "data", "privacy", "gdpr"],
    answer:
      "Your data is **100% secure**. Joomz connects via official API integrations. All actions are logged, and your data is never used to train AI models or shared with other customers. GDPR compliant.",
  },
  {
    keywords: ["trial", "free", "test", "demo", "try"],
    answer:
      "All paid plans include a **14-day free trial** — no credit card required. You can also book a **free live demo** where our team walks you through your own data.",
  },
  {
    keywords: ["agency", "multiple", "accounts", "clients"],
    answer:
      "Joomz is built for agencies. You can manage **40+ Shopify stores** and ad accounts from one dashboard, with separate access levels per client.",
  },
  {
    keywords: ["budget", "optimizer", "optimize", "automatic", "autopilot"],
    answer:
      "The **Smart Budget Optimizer** automatically redistributes your ad budget based on real-time ROAS data — every day, on autopilot. It proposes shifts and asks your approval, or runs fully automated if you prefer.",
  },
  {
    keywords: ["klaviyo", "email", "sms"],
    answer:
      "Yes, **Klaviyo** is integrated. Joomz syncs high-LTV customer segments directly to your Klaviyo lists so you can target them with the right email flows.",
  },
  {
    keywords: ["hello", "hi", "hey", "hallo", "hoi"],
    answer:
      "Hey! 👋 I'm **Joomz AI**, your e-commerce growth assistant. I can answer questions about our platform, integrations, pricing or anything Shopify & ads related. What can I help you with?",
  },
];

const SUGGESTED_QUESTIONS = [
  "How does pricing work?",
  "How do I connect Shopify?",
  "Is my data safe?",
  "Do you support agencies?",
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const { keywords, answer } of FAQ_RESPONSES) {
    if (keywords.some((k) => lower.includes(k))) return answer;
  }
  return "Great question! I don't have a specific answer for that yet, but our team does. 👉 **Book a free demo** at joomz/demo and we'll walk you through everything live.";
}

// Render **bold** markdown
function renderAnswer(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} style={{ color: "#C4B5FD" }}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

interface Message {
  role: "user" | "bot";
  text: string;
  id: number;
}

// ── Robot SVG ─────────────────────────────────────────────────
function RobotFace({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Head */}
      <rect x="8" y="12" width="32" height="26" rx="6" fill="#1C1A2E" stroke="#7B61FF" strokeWidth="1.5" />
      {/* Antenna */}
      <line x1="24" y1="12" x2="24" y2="6" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="5" r="2.5" fill="#FC801D">
        {animate && (
          <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
        )}
      </circle>
      {/* Eyes */}
      <rect x="14" y="20" width="7" height="5" rx="2" fill="#7B61FF">
        {animate && (
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin="0.3s" />
        )}
      </rect>
      <rect x="27" y="20" width="7" height="5" rx="2" fill="#7B61FF">
        {animate && (
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin="0.7s" />
        )}
      </rect>
      {/* Mouth */}
      <rect x="16" y="30" width="16" height="3" rx="1.5" fill="#FC801D" opacity="0.7" />
      {/* Ears */}
      <rect x="4" y="20" width="4" height="8" rx="2" fill="#1C1A2E" stroke="#7B61FF" strokeWidth="1" />
      <rect x="40" y="20" width="4" height="8" rx="2" fill="#1C1A2E" stroke="#7B61FF" strokeWidth="1" />
    </svg>
  );
}

// ── Main widget ───────────────────────────────────────────────
export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey! 👋 I'm **Joomz AI**. Ask me anything about the platform — pricing, integrations, ROAS, you name it.",
      id: 0,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgId, setMsgId] = useState(1);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim(), id: msgId };
    setMessages((m) => [...m, userMsg]);
    setMsgId((n) => n + 1);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const answer = getAnswer(text);
      setMessages((m) => [...m, { role: "bot", text: answer, id: msgId + 1 }]);
      setMsgId((n) => n + 2);
      setTyping(false);
      if (!open) setUnread((n) => n + 1);
    }, 900 + Math.random() * 400);
  }

  function reset() {
    setMessages([
      {
        role: "bot",
        text: "Hey! 👋 I'm **Joomz AI**. Ask me anything about the platform — pricing, integrations, ROAS, you name it.",
        id: 0,
      },
    ]);
    setMsgId(1);
    setInput("");
  }

  return (
    <>
      {/* ── Floating button ───────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #7B61FF 0%, #0D1B4B 60%, #FC801D 100%)",
          boxShadow: "0 0 0 1px rgba(123,97,255,0.4), 0 8px 32px rgba(123,97,255,0.35)",
        }}
      >
        {open ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <div className="h-8 w-8">
            <RobotFace animate={true} />
          </div>
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FC801D] text-[10px] font-bold text-white">
            {unread}
          </span>
        )}
      </button>

      {/* ── Chat panel ────────────────────────────────────── */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex flex-col transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          width: "min(380px, calc(100vw - 24px))",
          maxHeight: "min(520px, calc(100vh - 140px))",
          background: "#0D0B1A",
          border: "1px solid rgba(123,97,255,0.25)",
          borderRadius: 20,
          boxShadow: "0 0 0 1px rgba(123,97,255,0.1), 0 24px 60px rgba(0,0,0,0.6), 0 0 80px rgba(123,97,255,0.08)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{
            background: "linear-gradient(135deg, rgba(123,97,255,0.15) 0%, rgba(13,27,75,0.4) 100%)",
            borderBottom: "1px solid rgba(123,97,255,0.15)",
          }}
        >
          <div className="h-9 w-9 shrink-0">
            <RobotFace animate={open} />
          </div>
          <div>
            <p className="text-[13px] font-bold text-white leading-none">Joomz AI</p>
            <p className="mt-1 flex items-center gap-1.5 text-[10px] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Online · usually replies instantly
            </p>
          </div>
          <button
            onClick={reset}
            className="ml-auto text-white/25 hover:text-white/60 transition-colors"
            title="Reset conversation"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: "none" }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "bot" && (
                <div className="mr-2 mt-1 h-6 w-6 shrink-0">
                  <RobotFace animate={false} />
                </div>
              )}
              <div
                className="max-w-[82%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed"
                style={
                  msg.role === "user"
                    ? {
                        background: "linear-gradient(135deg, #7B61FF, #5B41DF)",
                        color: "#ffffff",
                        borderBottomRightRadius: 4,
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.8)",
                        borderBottomLeftRadius: 4,
                      }
                }
              >
                {msg.role === "bot" ? renderAnswer(msg.text) : msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start">
              <div className="mr-2 mt-1 h-6 w-6 shrink-0">
                <RobotFace animate={true} />
              </div>
              <div
                className="flex items-center gap-1.5 rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderBottomLeftRadius: 4,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#7B61FF]"
                    style={{ animation: `bounce 1s ease-in-out ${i * 0.15}s infinite` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggested questions */}
        {messages.length <= 1 && (
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="rounded-full px-3 py-1.5 text-[11px] font-medium transition-all hover:scale-105"
                style={{
                  background: "rgba(123,97,255,0.12)",
                  border: "1px solid rgba(123,97,255,0.25)",
                  color: "#C4B5FD",
                }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Ask anything about Joomz..."
            className="flex-1 bg-transparent text-[13px] text-white placeholder-white/25 outline-none"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || typing}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all disabled:opacity-30 hover:scale-110 active:scale-95"
            style={{
              background: input.trim()
                ? "linear-gradient(135deg, #7B61FF, #FC801D)"
                : "rgba(255,255,255,0.05)",
            }}
          >
            <Send className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
      </div>

      {/* Bounce keyframes */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
