"use client";

import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useTranslation } from "react-i18next";
import {
  Loader2,
  Mic,
  SendHorizonal,
  ImagePlus,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotWidget() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const { i18n } = useTranslation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleVoiceInput = () => {
    if (!listening) {
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: false,
        language: i18n.language || "en-US",
      });
    } else {
      SpeechRecognition.stopListening();
      setInput(transcript);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !file) return;

    const userMsg = { role: "user", content: input, file };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    let mediaUrl = "";
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();
      mediaUrl = uploadData?.url || "";
      setFile(null);
    }

    try {
      const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt:
        input + (mediaUrl ? `\n[Media Attached]: ${mediaUrl}` : ""),
      }),
      });

      if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      const reply = data?.reply || "Sorry, I couldn't get a response.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, there was an error." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        layout
        className={`transition-all duration-300 ease-in-out ${
          expanded
            ? "w-[380px] h-[520px] rounded-2xl"
            : "w-16 h-16 rounded-full"
        } bg-white shadow-2xl overflow-hidden border border-gray-300`}
      >
        {expanded ? (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-orange-600 text-white font-semibold p-3 flex justify-between items-center">
              Travel Bot
              <button onClick={() => setExpanded(false)}>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-sm p-2 rounded-xl max-w-[85%] shadow ${
                      msg.role === "user"
                        ? "bg-orange-100 ml-auto text-right"
                        : "bg-green-100 text-left"
                    }`}
                  >
                    <div>
                      <strong>
                        {msg.role === "user" ? "🧑" : "🤖"}:
                      </strong>{" "}
                      {msg.content}
                    </div>
                    {msg.file && (
                      <img
                        src={URL.createObjectURL(msg.file)}
                        alt="uploaded"
                        className="mt-1 rounded-lg w-32 max-h-32 object-cover border"
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-2 flex items-center gap-2 border-t bg-white">
              <button onClick={handleVoiceInput}>
                <Mic
                  className={`h-5 w-5 ${
                    listening
                      ? "text-red-500 animate-pulse"
                      : "text-gray-500"
                  }`}
                />
              </button>
              <label>
                <ImagePlus className="h-5 w-5 text-gray-500 cursor-pointer" />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) =>
                    setFile(e.target.files?.[0] || null)
                  }
                />
              </label>
              <input
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSend()
                }
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="p-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                {loading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <SendHorizonal className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setExpanded(true)}
            className="w-full h-full flex items-center justify-center text-white bg-orange-600 rounded-full hover:bg-orange-700"
          >
            <ChevronUp />
          </button>
        )}
      </motion.div>
    </div>
  );
}
