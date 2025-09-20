"use client";
import React, { useState } from "react";
import { MessageSquareIcon, Send } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // fake bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "This is a bot reply." },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
        >
          Chat <MessageSquareIcon size={20} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-black text-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-gray-700">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700 bg-gray-900">
            <h2 className="text-sm font-semibold">AI Chatbot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-white text-black ml-auto"
                    : "bg-gray-800 text-white mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-gray-700 bg-gray-900 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 px-2"
            />
            <button
              onClick={handleSend}
              className="p-2 text-white hover:text-gray-300"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
