import { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import "./chatbot.css";
const PHONE = "+91-7890009119";
const QUICK_REPLIES = [
  "Courses",
  "Products",
  "Fees & Admission",
  "Timings",
  "Contact",
];
const GREETING =
  "Hi! 👋 Welcome to Elovaa. I'm your support assistant. How can I help you today?";

// keyword rules — first match wins
const RULES = [
  {
    keys: ["hi", "hello", "hey", "namaste", "hii", "hlo"],
    exact: true,
    reply:
      "Hello! 😊 Nice to meet you. You can ask me about our courses, products, fees, timings or how to reach us.",
  },
  {
    keys: ["course", "class", "learn", "curriculum", "study", "training", "academy"],
    reply:
      "We offer hands-on makeup artistry training — bridal, party, SFX & prosthetics basics and more. You can see the full details on our Curriculum page (/ourcurriculam) or Study at Elovaa page (/studyelovaa).",
  },
  {
    keys: ["fee", "price", "cost", "admission", "enroll", "enrol", "join", "apply", "batch"],
    reply:
      "Fees depend on the course and batch you choose. For the latest fees and upcoming batch dates, please call us on " +
      PHONE +
      " or use the Contact Us page and our team will get back to you.",
  },
  {
    keys: ["product", "cosmetic", "buy", "lipstick", "foundation", "kit", "retail"],
    reply:
      "Elovaa cosmetics are made for working professionals and last a full day. Check Our Products (/ourproduction) and Where To Buy (/wheretobuy). Want to sell them? Visit Become A Retailer (/becomearetailer).",
  },
  {
    keys: ["time", "timing", "hour", "open", "close", "schedule", "when"],
    reply:
      "We're open Mon–Sat, 10am – 7pm. Hours may vary by location, so it's best to confirm before visiting.",
  },
  {
    keys: ["location", "address", "where", "kolkata", "visit", "studio", "map"],
    reply:
      "Our studio is in the heart of Kolkata. You can find the address and map on Our Locations (/ourlocation) and Contact Us (/contactus) pages.",
  },
  {
    keys: ["contact", "phone", "call", "number", "email", "mail", "reach", "whatsapp"],
    reply:
      "You can call us on " +
      PHONE +
      " (Mon–Sat, 10am–7pm) or send a message from the Contact Us page (/contactus).",
  },
  {
    keys: ["artist", "hire", "bridal", "booking", "book"],
    reply:
      "Looking to hire a makeup artist? Fill the Hire An Artist form (/hireartist) and our team will connect with you.",
  },
  {
    keys: ["career", "job", "placement", "work"],
    reply:
      "We help students build real careers — see Career Paths (/careerpath) and Career Services (/careerservices) for more.",
  },
  {
    keys: ["thank", "thanks", "thx", "bye", "ok"],
    reply: "You're welcome! 💖 Feel free to ask anything else anytime.",
  },
];
const FALLBACK =
  "Thanks for your message! I couldn't find an exact answer for that. Please call us on " +
  PHONE +
  " or use the Contact Us page and our team will help you personally.";

function getReply(text) {
  const t = text.toLowerCase().trim();
  const words = t.split(/[^a-z0-9]+/).filter(Boolean);
  for (const rule of RULES) {
    const hit = rule.keys.some((k) =>
      rule.exact ? words.includes(k) : t.includes(k)
    );
    if (hit) return rule.reply;
  }
  return FALLBACK;
}

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}


// Boy customer-support agent (headset + mic) avatar
function SupportBoy() {
  return (
    <svg className="chatbot__boy" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#eef0f3" />
      {/* shirt */}
      <path d="M8 64C8 50 21 46 32 46C43 46 56 50 56 64Z" fill="#1c2430" />
      <path d="M26 46L32 53L38 46Z" fill="#ffffff" />
      {/* neck */}
      <rect x="28" y="38" width="8" height="10" rx="3" fill="#e8b48c" />
      {/* face */}
      <ellipse cx="32" cy="29" rx="12.5" ry="13.5" fill="#f3c8a2" />
      {/* hair */}
      <path d="M19 28C17 13 28 9 34 10C44 11 48 20 45 28C43 21 38 18.5 32 18.5C26 18.5 21.5 21 19 28Z" fill="#2b1d16" />
      {/* eyes */}
      <circle cx="27" cy="30" r="1.7" fill="#222" />
      <circle cx="37" cy="30" r="1.7" fill="#222" />
      {/* smile */}
      <path d="M27.5 36Q32 40 36.5 36" stroke="#8a4b3a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* headset band */}
      <path d="M17 29C15.5 9 48.5 9 47 29" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* ear cups */}
      <rect x="13.5" y="26" width="6.5" height="11" rx="3" fill="#111111" />
      <rect x="44" y="26" width="6.5" height="11" rx="3" fill="#111111" />
      {/* mic boom */}
      <path d="M16.5 36C16.5 45 23 46 29.5 43.5" stroke="#111111" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="30.5" cy="43.2" r="2.4" fill="#111111" />
    </svg>
  );
}

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: GREETING, time: timeNow() },
  ]);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const idRef = useRef(2);
  const timers = useRef([]);

  // auto scroll
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({
        top: bodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, typing, open]);

  // focus input on open
  useEffect(() => {
    if (open) {
      setUnread(false);
      const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  // cleanup timers
  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const send = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;

    setMessages((m) => [
      ...m,
      { id: idRef.current++, from: "user", text, time: timeNow() },
    ]);
    setInput("");
    setTyping(true);

    const reply = getReply(text);
    const delay = 700 + Math.min(reply.length * 8, 1100);
    const t = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { id: idRef.current++, from: "bot", text: reply, time: timeNow() },
      ]);
    }, delay);
    timers.current.push(t);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="chatbot">
      {/* Chat window */}
      <div className={`chatbot__window ${open ? "chatbot__window--open" : ""}`}>
        <div className="chatbot__header">
          <div className="chatbot__avatar">
            <SupportBoy />
            <span className="chatbot__online" />
          </div>
          <div className="chatbot__title">
            <h4>Elovaa Support</h4>
            <span>We typically reply instantly</span>
          </div>
          <button
            className="chatbot__close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <FaTimes />
          </button>
        </div>

        <div className="chatbot__body" ref={bodyRef}>
          {messages.map((m) => (
            <div key={m.id} className={`chatbot__msg chatbot__msg--${m.from}`}>
              <div className="chatbot__bubble">{m.text}</div>
              <span className="chatbot__time">{m.time}</span>
            </div>
          ))}

          {typing && (
            <div className="chatbot__msg chatbot__msg--bot">
              <div className="chatbot__bubble chatbot__typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>

        <div className="chatbot__chips">
          {QUICK_REPLIES.map((q) => (
            <button key={q} onClick={() => send(q)} disabled={typing}>
              {q}
            </button>
          ))}
        </div>

        <form className="chatbot__form" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={!input.trim() || typing} aria-label="Send">
            <FaPaperPlane />
          </button>
        </form>
      </div>

      {/* Launcher */}
      <button
        className={`chatbot__launcher ${open ? "chatbot__launcher--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open customer support chat"}
      >
        <span className="chatbot__icon chatbot__icon--chat">
          <SupportBoy />
        </span>
        <span className="chatbot__icon chatbot__icon--close">
          <FaTimes />
        </span>
        {unread && !open && <span className="chatbot__badge">1</span>}
      </button>
    </div>
  );
}

export default ChatBot;
