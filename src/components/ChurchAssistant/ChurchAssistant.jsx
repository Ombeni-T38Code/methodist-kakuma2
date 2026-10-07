import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import "./ChurchAssistant.css";

const initialMessage = {
  role: "assistant",
  text: "Welcome. Ask me about worship, prayer, our Kakuma churches, or ministries.",
};

const suggestions = [
  "When are worship services?",
  "Where are the churches?",
  "How can I request prayer?",
];

const getAnswer = (question) => {
  const query = question.toLowerCase();

  if (/prayer|pray|intercession/.test(query)) {
    return "The Kakuma Town Prayer Room meets on Wednesday, Friday, and Saturday. The listed sessions are Wednesday 5:00-7:30 PM, Friday 6:00-9:00 PM, and Saturday 9:00 AM-1:00 PM. You can also submit a prayer request from the Prayer Room section. Please confirm seasonal service times with a local pastor.";
  }

  if (/sunday|worship|service|thursday|saturday|friday|wednesday/.test(query)) {
    return "The weekly schedule includes Sunday main worship at Kakuma 2 Methodist Church, a Thursday gathering for all four stations, and Prayer Room services on Wednesday, Friday, and Saturday. Exact service start times can change seasonally, so confirm with your local parish pastor or administrator.";
  }

  if (/church|location|where|station|kakuma [1-4]/.test(query)) {
    return "The church serves four stations: Kakuma 1, Kakuma 2, Kakuma 3, and Kakuma 4. The Prayer Room is in Kakuma Town. Open the Churches section on this page to explore the individual stations.";
  }

  if (/music|ministry|choir|band/.test(query)) {
    return "The music ministries include the Uhuru Choir, Fadhili Choir, and JC Band, serving through worship and gospel music across the Kakuma church stations.";
  }

  if (/give|donat|offering|support/.test(query)) {
    return "The Give page has information about supporting the church and its community work. Please contact the church office for current giving arrangements.";
  }

  if (/contact|pastor|office|email|phone/.test(query)) {
    return "For current contact details or pastoral support, use the Contact page or speak with your local parish pastor or church administrator.";
  }

  return "I don't have that detail in the Kakuma Knowledge Base yet. Try asking about worship times, the Prayer Room, church locations, ministries, giving, or contacting a pastor.";
};

export default function ChurchAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([initialMessage]);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages]);

  const sendMessage = (text = draft) => {
    const question = text.trim();
    if (!question) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: question },
      { role: "assistant", text: getAnswer(question) },
    ]);
    setDraft("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <aside className="church-assistant" aria-label="Kakuma Church AI assistant">
      {isOpen && (
        <section className="church-chat-panel" aria-labelledby="church-chat-title">
          <header className="church-chat-header">
            <div className="church-chat-brand-icon" aria-hidden="true">
              <Bot size={20} />
            </div>
            <div className="church-chat-heading">
              <h2 id="church-chat-title">Ask Church AI</h2>
              <p>Kakuma Knowledge Base</p>
            </div>
            <button
              className="church-chat-close"
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <X size={19} />
            </button>
          </header>

          <div className="church-chat-messages" role="log" aria-live="polite">
            {messages.map((message, index) => (
              <p
                className={`church-chat-message church-chat-message-${message.role}`}
                key={`${message.role}-${index}`}
              >
                {message.text}
              </p>
            ))}
            <div ref={endOfMessagesRef} />
          </div>

          {messages.length === 1 && (
            <div className="church-chat-suggestions" aria-label="Suggested questions">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form className="church-chat-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="church-chat-input">
              Ask a question
            </label>
            <input
              id="church-chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about church life..."
            />
            <button type="submit" aria-label="Send question" disabled={!draft.trim()}>
              <Send size={17} />
            </button>
          </form>
          <p className="church-chat-note">Answers use information published on this site.</p>
        </section>
      )}

      <button
        className="church-chat-launcher"
        type="button"
        aria-label={isOpen ? "Close Church AI chat" : "Open Church AI chat"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
        {!isOpen && <span>Ask Church AI</span>}
      </button>
    </aside>
  );
}