"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageSquareIcon, Send } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  async function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const userMessage = input;
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "Oops! Something went wrong." },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Oops! Something went wrong." },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
        >
          Chat <MessageSquareIcon size={20} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-black text-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-gray-700">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700 bg-gray-900">
            <h2 className="text-sm font-semibold">AI Chatbot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx + 1}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-white text-black ml-auto"
                    : "bg-gray-800 text-white mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1 mr-auto">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center border-t border-gray-700 bg-gray-900 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 px-2"
            />
            <button
              onClick={sendMessage}
              className="p-2 text-white hover:text-gray-300 cursor-pointer"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
